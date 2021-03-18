---
title: Intersection Observer API
date: 2021-03-02
description: Intersection Observer API에 대해서 알아보자
tags: ["JS"]
published: true
featuredImage: './thumbnail.png'
---

안녕하세요 Marcus입니다.

요즘 Lazy-loading관련된 글이 많이 올라와서 관심있게보다가 `Intersection Observer`와 `React Hooks`를 이용해서 `Lazy-loading`과 `Infinity Scroll`을 구현해봤습니다.

시리즈로 진행될 예정이며 이번 포스팅에는 Intersection Observer API에 대한 포스팅을 진행하겠습니다.

MDN에서는 Intersection Observer의 필요성을 아래와 같은 예를 들어 설명하고 있습니다.

- 페이지 스크롤 시 이미지를 Lazy-loading(지연 로딩)할 때
- Infinite scrolling(무한 스크롤)을 통해 스크롤할 때 새로운 콘텐츠를 불러올 때
- 광고의 수익을 계산하기 위해 광고의 가시성을 참고할 때
- 사용자가 결과를 볼 것인지에 따라 애니메이션 동작 여부를 결정할 때

Intersection Observer는 생각보다 간단합니다.

`Example Code`
```javascript
// create an Intersection Observer
let observer = new IntersectionObserver(callback, options);
```

Intersection Observer는 기본적으로 2개의 paramters를 받습니다.
#### CallBack Func
CallBack은 타겟 엘리먼트가 교차되었을 때 실행되는 함수입니다.


#### Options
`root`
root 로 정의된 Element 기준으로 Target Element 의 가시성을 확인하는 뷰포트로 사용되는 요소입니다.
(노출될지 말지를 결정하는 option)
`default:null` 기본 `Browser ViewPort`를 참조합니다.

`rootMargin`
rootMargin은 기본적으로 `css`에서 margin을 입력하는 방식과 동일하며
이 값에 따라 교차영역이 확장되거나 축소됩니다.
`default: '0px 0px 0px 0px'`

`threshold`
타겟 엘리먼트가 교차영역에 진입했을 경우 oberver를 실행하는데 이때 어느 영역에 접근했을 때 실행되는지를 결정합니다.
값은 0~1 사이로 이루어져있고 타겟 엘리먼트가 50%정도 보여졌을 때 observer가 실행되길 원한다면 0.5로 셋팅해주면 됩니다.
`default: 0`


#### Methods
`.observer(targetElement)`
targetElement에 대한 IntersectionObserver를 등록할 때 사용되는 메소드

`unobserver(targetElement)`
tagetElement에 대한 관찰을 멈춰야할때 사용되는 메소드

`disconnect()`
다수의 element를 관찰하고있을 때, 이에 대한 관찰을 멈춰야할때 사용되는 메소드


이상으로 Intersection Observer API에 대한 포스팅을 마치겠습니다.

다음 포스팅에는 Intersection observer와 React Hooks를 이용하여 구현한 Lazy-loading에 대해 포스팅하겠습니다.

#### 참고한 문서
https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
http://blog.hyeyoonjung.com/2019/01/09/intersectionobserver-tutorial/
https://medium.com/better-programming/image-lazy-loading-in-react-intersection-observer-a9ae912ddafe

----
written by Marcus