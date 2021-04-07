---
title: 내가 사용하는 React + Typescript 패턴
date: 2021-04-08
description: 내가 사용하고있는 React Component + Typescript에 패턴을 정리해본 문서입니다.
tags: ["TS"]
published: true
featuredImage: './thumbnail.png'
---

안녕하세요 Marcus입니다.

이번 포스팅은 개인 프로젝트를 진행하면서 리팩토링 과정에서 내가 사용하는 Typescript 패턴이 구조적이지 않다는것을 느끼고 리팩토링 과정에서 확립한 패턴에 대해서 조사하고 고민했던 내용을 공유하고자 합니다.

더불어, 회사 업무가 바쁘게 진행되다보니 제 자신이 좋은 코드를 작성하기 위해 고민했던것이 너무 소홀했던것이 아닌가에 대한 회고를 진행하고 돌아보는겸 작업을 진행해봤습니다.

### Props

Props에 type을 지정할 때 기본적으로 그 컴포넌트에서 네이밍을참고해 type을 작성합니다.

```tsx
type GreetingProps = {
	name: string;
}

function Greeting = ({ name }: GreetingProps) {
	return <p> Hi {name} </p>
}
```

### Default Props

Typescript에서는 Default Props를 정의하는 방식이 여러 가지가 있지만

[https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/default_props/](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/default_props/)

해당 사이트에서는 이런 방식이 있다고 추천해주고있습니다. 

```tsx
interface GreetingProps {
  name: string;
}

const defaultProps = {
  age: 25,
};

const Greeting = ({ name, age }: GreetingProps & typeof defaultProps) => (
  <div>{`Hello, my name is ${name}, ${age}`}</div>
);
```

하지만 위 코드의 방식처럼 했을때 문제는 우리가 props를 고의적으로 보내지 않을 경우를 판단을 하지 못하고 에러로 잡게됩니다. 

예를 들어서 로딩 처리를 하기 위해 Props를 빈 오브젝트로 보내게 된다면? 빈 오브젝트에는 우리가 선언한 오브젝트에 데이터가 없기 때문에 에러로 인식합니다.

저는 이와같은 경우때문에 아래의 방식을 사용하기로 했습니다.

```tsx
interface GreetingProps {
	name: string;
	age?: number;
}

const Greeting = ({ name, age=25 }: GreetingProps) => (
  <div>{`Hello, my name is ${name}, ${age}`}</div>
)
```

위와 같은 경우에는 지정한 타입에 value가 undefined로 넘어오는 경우를 지정한 default Value를 출력해 age는 25의 값을 가지게 됩니다.

추가로 위의 값을 정리하면서 꼭 빈 값을 보내야할 상황이 아니라면 빈 배열을 보내는 일을 줄이는게 좋지 않을까 생각을 하게 됐습니다..

### Extends Type

공용으로 사용해야할 타입이 있다면 이 타입에 한해서는 관련된 네이밍  + I를 조합합니다.

그리고 이를 사용할때 병합이 되야할 일이 있다면 아래와 같이 작성합니다.

```tsx
// types/user.ts
export interface IUser {
	name: string;
	age: number;
}

// component/userinfo.tsx

interface Props {
	userInfo: IUser;
	bio: string;
}
```

### Styled Components

저는 CSS를 작업할 때 보통 Styled Component library를 사용합니다.

props를 전달해야할때 다음과 같이 작성하는 방식을 택했습니다.

```tsx
const GreetingWrapper = styled.div< { age : number } >`
  color: ${(props) => (props.age > 20 ? 'red' : 'gray')};
`;
```

이 문서는 작업을 진행하면서 추가되는 작업들에 한해서 지속적으로 업데이트될 예정입니다.

감사합니다.

---
written by Marcus