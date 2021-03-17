---
title: Lazy-Loading
date: 2021-03-10
tags: ["React"]
description: 클론코딩과 함께 이미지 Lazy-Loading에 대해서 알아보자
published: true
featuredImage: ./thumbnail.png
---

안녕하세요 Marcus입니다.

이번 포스팅에서는 Intersection Observer에 대한 설명에 이어
Intersection Observer와 React Hooks를 이용하여 Lazy Loading을 구현하려합니다.

앞서 작성했던 Intersection Observer API에 대한 기본적인 이해가 바탕이되어야 아래 나오는 코드들이 이해가 되실테니 Intersection Observer 포스팅을 보고 오시면 좋을 것 같습니다. 

### useIO
먼저 Hooks로 다양한곳에서 사용할 수 있도록 Custom Hooks를 만들어줍니다.

이 Hooks는 IntersectionObserver의 옵션 오브젝트를 인자로받습니다. 

Hooks는 3가지 아이템의 배열을 리턴합니다
- Instance observer 
- 설정된 target element
- callback함수에 제어되는 배열

아래 코드를 보시죠

`code 1 useIO.js`
``` javascript

import { useEffect, useRef, useState } from 'react';

const useIO = (options) => {
  const [elements, setElements] = useState([]);
  const [entries, setEntries] = useState([]);

  const observer = useRef(null);

  const { root, rootMargin, threshold } = options || {};


  useEffect(() => {
    if (elements.length) {
      console.log('-----CONNECTING OBSERVER------');
      // IO 생성
      observer.current = new IntersectionObserver((ioEntries) => {
        setEntries(ioEntries);
      }, {
        threshold,
        root,
        rootMargin
      });

      elements.forEach(element => {
        observer.current.observe(element);
      });
    }
    return () => {
      if (observer.current) {
        console.log('-----DISCONNECTING OBSERVER------')
        observer.current.disconnect();
      }
    }
  }, [elements, root, rootMargin, threshold]);

  return [observer.current, setElements, entries];
};

export default useIO

```
위 코드를 보시면 `disconnect()`를 해주는 부분이 있습니다.
이유는 Intersection Observer가 계속 관찰을하게되면 side-effect가 생길 수 있기 때문에 current에 데이터가 들어오게되면 hooks를 이용해서(willUnMount) observer에 관찰을 끊어주는 역할을 합니다.

#### Product Component
``` javascript
const Product = ({product, isLazy}) => {
  return(
  <ProductWrapper>
    <ProductImg
      className={isLazy ? 'lazy' : ''}
      data-src={product.img}
      isLazy={isLazy}
    />
    <ProductContent>
      <ProductBrand>{product.brand}</ProductBrand>
      <ProductName>{product.name}</ProductName>
      <ProductPrice>{product.price}</ProductPrice>
    </ProductContent>
  </ProductWrapper>
)
};
export default Product
```
props로 받는 isLazy는 사진이 느리게 로딩되게 할지 말지에 대한 여부를 판단합니다.


#### 완성된 코드!

``` javascript
import React, {useEffect, useState} from 'react';

import {getProducts} from "../../api";
import Product from "./product";
import useIO from "../../hooks/IntersectionObserver/useIO";



const Products = () => {
  
    const [products, setProducts] = useState([]);
    const [observer, setElements, entries] = useIO({
      threshold: 0.25,
      rootMargin: '30px',
      root: null
    });

    // 프로덕트 정보를 불러오는 API
    useEffect(() => {
      const fetchData = async () => {
        const result = await getProducts(categoryId);

        setProducts(result.data.payload);
      };

      fetchData();
    }, [categoryId]);

    // products의 데이터가 바뀌었을 경우 useIO에서 설정했던 setElements에 img[array]를 넣어줍니다.
    useEffect(() => {
      if (products.length) {
        let img = Array.from(document.getElementsByClassName('lazy'));
        setElements(img)
      }
    }, [products, setElements]);

    // 위 hooks에 setElements가 정상적으로 진행 된 후 element가 변경됨을 감지해
    // forEach문을 사용해 배열을 반복하고 각 항목에 대해 observer를 사용하여 루트와의 교차 여부를 판단합니다.
    useEffect(() => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lazy");
          observer.unobserve(lazyImage);
        }
      })
    }, [entries, observer]);
  
    return (
      <ProductsWrapper>
        {products.map(product => (
          <Product key={product.id} product={product} isLazy/>
        ))}
      </ProductsWrapper>
    )
  }
;

export default Products;
```

#### 결과물을 보시죠!!

![](https://images.velog.io/images/marcus/post/a1ec905d-ba9b-44b3-a8e7-9ae37e859098/lazyloading.gif)

제가 설명이 부족해서 쉬운 코드인데도 어렵게 느껴지지않을까 걱정되네요.. @@

설명중에 틀린부분이나 어려워 이해가 안가는 부분이 있으면 댓글로 남겨주세요 최대한 성심성의것 알려드리겠습니다 :D

----

write by Marcus