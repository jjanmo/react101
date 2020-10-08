# React101

> Learn react and make movie-app with nomadcoders 🚀

> This repo is react basic course. So I will summarize `react basic concept(a.k.a must know concept)` here.

> This is written based on [NomadCoders React Fundemental Course](https://nomadcoders.co/react-fundamentals) and [React Official Site](https://ko.reactjs.org/)

> [DEMO](https://jjanmo.github.io/react101)

## Chapter00 : What is npx?

> npm이라고 하면 `Node Package Manager`라고하여 패키지 관리하는 도구이다. 하지만 npx는 패키지 관리 도구가 아니다.

## Chapter01 : What is virtual dom?

1. MVC model
2. Virtual DOM

## Chapter02 : JSX and Components

### JSX(Javascript XML)

> 자바스크립트안에 HTML이 들어간 형태로 보이는 코드를 말한다. 단순하게 자바스크립트의 변형된 형태라고 보면 쉽다.

### 그렇다면 JSX를 왜 사용할까?

> 자바스크립트 내부에서 UI를 작업하는 것이 가독성 측면에서 효율적이다. 즉 기존의 HTML 태그를 자바스크립트 내부에서 사용함으로서 코드가 무엇을 의미하는지를 좀 더 시각적으로 명확하게 인지할 수 있다.

> 하지만 JSX는 브라우저가 해석할 수 없다. 그렇기 때문에 바벨에 의해서 자바스크립트로 변형되어 컴파일된어야 한다.

```JSX
const App = function(){
return <div class="text">Hello World</div>;
}
```

> 위의 JSX는 바벨에 의해서 아래와 같이 변형되어서 읽힌다.

```javascript
'use strict';

const App = function App() {
    return React.createElement('div', null, 'Hello Wordl');
};
```

### Components

> UI의 일부분을 표현하는 작고 독립적인 구성품(엔티티/개체)이다. 이것은 재사용성이 있는 것

## Chapter03 : What is props and state?

> props와 state를 비교해보자

### Commons(공통점)

-   모두 자바스크립트 객체이다

### Differences(차이점)

1. props

-   `properties`의 준말로 자바스크립트 객체를 말한다.
-   컴퍼넌트로 전달되는 것으로서 마치 함수에 전달되는 인자로 생각할 수 있다.
-

2. state

## Chapter04

## Chapter05 : How to deploy github-pages

## Chapter06 : react-router-dom

# Ref

-   Chap00

    [npx란 무엇일까](https://webruden.tistory.com/275)

-   Chap01
    []()
-   Chap02
-   [React에서 Stateful 대 Stateless 함수형 컴포넌트](https://code.tutsplus.com/ko/tutorials/stateful-vs-stateless-functional-components-in-react--cms-29541)
-   [](https://devowen.com/298)
-   Chap03
    -   [](https://github.com/uberVU/react-guide/blob/master/props-vs-state.md)
    -   [](https://lucybain.com/blog/2016/react-state-vs-pros/)
    -   [setState API](https://reactjs.org/docs/react-component.html#setstate)
-   Chap04
-   Chap05
-   Chap06 : [ReactRouterDOM\_생활코딩](https://www.youtube.com/watch?v=WLdbsl9UwDc&feature=youtu.be)
