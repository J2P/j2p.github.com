---
title: "JavaScript Global 객체"
date: "2011-10-07"
layout: post
draft: false
path: "/posts/javascript-global-object"
category: "JavaScript"
tags: 
  - "JavaScript"
description: ""  
---

##Global Object##

JavaScript 에는 Global Object 가 있다.<br />
쉽게 말하면 JavaScript 에서 기본적으로 제공되는 전역객체 이다.<br />
어떤것들이 있는지 알아보자.<br />

* Array
* Boolean
* Date
* Function
* Number
* Object
* RegExp
* String

JavaScript Core 부분을 공부할때 나오는 것들이지만 자세히 보지 않고 지나처 버려 잘 알지 못하는 것들이다.

보통 JavaScript 를 공부한다고 하면 DOM 부터 공부를 많이 하게 된다.
이유를 생각해보면 간단하다 당장 웹페이지 개발을 할때 써야 할 것 들은 DOM 을 조작하는 일이 많기 때문에 DOM 을 먼저 공부하게 되고 Core 부분은 그냥 넘어가 버리게 되고 만다.<br />
이렇게 되면서 어느덧 DOM 이 JavaScript 인것 처럼 여겨 지게 된거 같다. 실질적으로 DOM 은 Javascript 가 아니다 단지 JavaScript 로 DOM 을 접근할 수 있는 DOM API 가 있을 뿐이다.
[ECMAScript](http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf 'ECMAScript')에서도 확인해보면 DOM 은 나와 있지 않다.

내가 생각하는 JavaScript 를 공부할때 우선 순위는 Global Object(Core)를 알고 그것들의 Property, Method 를 아는게 JavaScript 의 기초라고 생각한다.
Global Object 의 Method 를 알고 나면 내가 숫자, 문자, 배열을 만들었을때 자신이 만들지도 않은 Method 를 왜 쓸수 있는지 또 prototype 은 무엇인지 궁금하게 되고 자연스럽게 공부 할 수 있다고 생각한다.

나도 그동안 소홀했던 부분을 이제 부터 차근차근 Core 부분의 Global Object 의 Method 를 정리 해볼까 한다.<br />
항상 블로그를 만들고 마음을 먹고 정리하다 보면 Array Method 만 하다가 끝났었는데 이번에는 꼭 끝까지 다 정리 하는 것을 목표로 하고 실천해 볼려고 한다.
