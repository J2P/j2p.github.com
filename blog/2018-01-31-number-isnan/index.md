---
title: "Number.isNaN 함수"
date: "2018-01-31"
layout: post
draft: false
path: "/posts/number-isnan"
category: "JavaScript"
tags: 
  - "JavaScript"
description: ""  
---

알고리즘 문제를 풀다가 해당값에 문자열이 포함되어 있는지 숫자만 있는지 구분을 하는 문제가 있어서 parseInt 를 써서 NaN 이면 숫자가 아니라고 판단하려고 했다.

하지만 아래와 같은 결과가 나왔다...

```js
parseInt('a') === NaN; // false
NaN == NaN; // false
NaN === NaN; // false
```

그럼 NaN 인지 판단은 어떻게 할 수 있단말인가... 검색 해보니 [isNaN()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/isNaN) 이라는게 있다는걸 알게 되었다.

예제는 다음과 같다.

```js
isNaN(NaN); // 참
isNaN(undefined); // 참
isNaN({}); // 참

isNaN(true); // 거짓
isNaN(null); // 거짓
isNaN(37); // 거짓

// 문자열
isNaN('37'); // 거짓: "37"은 NaN이 아닌 숫자 37로 변환됩니다
isNaN('37.37'); // 거짓: "37.37"은 NaN이 아닌 숫자 37.37로 변환됩니다
isNaN('123ABC'); // 참: parseInt("123ABC")는 123이지만 Number("123ABC")는 NaN입니다
isNaN(''); // 거짓: 빈 문자열은 NaN이 아닌 0으로 변환됩니다
isNaN(' '); // 거짓: 공백이 있는 문자열은 NaN이 아닌 0으로 변환됩니다

// dates
isNaN(new Date()); // 거짓
isNaN(new Date().toString()); // 참

// 이게 오탐이고 isNaN이 완전히 신뢰할 수 없는 이유입니다
isNaN('blabla'); // 참: "blabla"는 숫자로 변환됩니다.
// 숫자로 구문 분석은 실패하고 NaN을 반환합니다
```
