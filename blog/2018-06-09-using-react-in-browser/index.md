---
title: "Browser에서 React 사용하기"
date: "2018-06-09"
layout: post
draft: false
path: "/posts/using-react-in-browser"
category: "React"
tags: 
  - "React"
description: ""  
---

회사 프로젝트 서버는 현재 django를 사용하고 있고 django template 에는 jQuery, vanilla.js 등 섞여 있는 상태이다.
webpack을 쓰지 않고 현 상태에서 특정 부분만 react로 변경 가능한지 궁금했고 브라우저에서 react를 바로 사용하려면 어떻게 해야 하는지 궁금해서 테스트를 해보았다.

## react.js, react-dom.js, babel.js 파일 추가
cdn에 있는 react.js, react-dom, bable.js 파일을 head에 추가해준다.

``` html
<head>
...
<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
...
</head>
```

## 특정 부분을 react로 코드로 바꿔보기
보통 react 프로젝트를 보면 SPA가 많기 때문에 `ReactDOM.render`는 하나만 있어야 하는건가? 라는 생각을 가지고 있었는데 여러개를 넣어도 된다는걸 확인했다. 

`ReactDOM.render`는 함수인데 몇번을 호출하던지 아무상관이 없는게 당연한거였다...

그렇다면 특정 부분 부분을 react 코드로 변경이 가능할거 같다.

``` html
<div id="container"></div>
<div id="container1"></div>
<script type="text/babel">
  ReactDOM.render(
    <div>Hi</div>,
    document.getElementById('container')
  );

  ReactDOM.render(
    <div>Hello</div>,
    document.getElementById('container1')
  );
</script>
```

## jsx 파일 생성
jsx에 파일을 따로 만들어서 state관리가 가능한 class를 만드게 가능 한지 테스트 해보고 싶었다.
HelloWorld.jsx 파일을 다음과 같이 만든다.

``` jsx
class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: 'Hello, World!'};
  }

  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
      </div>
    );
  }
}
```

## component 사용하기

static 디렉토리에 추가한 HelloWorld.jsx 파일을 불러오고,
아래와 같이 코드를 추가해보면 HelloWorld.jsx component 가 정상적으로 동작하는걸 볼수 있다.

``` html

<div id="container2"></div>
<script type="text/babel" src="{% static "HelloWorld.jsx" %}"></script>
<script type="text/babel">
ReactDOM.render(
	<HelloWorld/>,
	document.getElementById('container2')
);
</script>
```

## 참조
[CDN Links - React](https://reactjs.org/docs/cdn-links.html)
[How to use Django template in ReactJS - Stack Overflow](https://stackoverflow.com/questions/35899103/how-to-use-django-template-in-reactjs)
[javascript - How to load es6, react, babel code in html with cdn? - Stack Overflow](https://stackoverflow.com/questions/43931538/how-to-load-es6-react-babel-code-in-html-with-cdn)