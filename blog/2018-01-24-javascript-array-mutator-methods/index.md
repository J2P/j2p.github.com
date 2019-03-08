---
title: "JavaScript Array 변경 함수"
date: "2018-01-24"
layout: post
draft: false
path: "/posts/javascript-array-mutator-methods"
category: "JavaScript"
tags: 
  - "JavaScript"
  - "Array"
description: ""  
---

이직을 준비하면서 알고리즘을 공부하면서 느낀거지만 `Array`가 중요한 부분을 차지하고 있는거 같다.
그래서 Array 객체의 method 중에서 Array 를 변경할 수 있는 method 를 정리해볼까 한다.

## Array.prototype.push()

### 설명

`배열의 끝에 하나 또는 그 이상의 요소를 추가하고 배열의 변경된 길이를 반환한다.`

### 예제

하나의 요소를 추가하는 경우

```js
var numbers = [1, 3, 5, 7];
numbers.push(9);
// 5

console.log(numbers);
// [1, 3, 5, 7, 9]
```

하나 이상의 요소를 추가하는 경우

```js
var words = ['a', 'b', 'c'];
words.push('d', 'e');

console.log(words);
// ['a', 'b', 'c', 'd', 'e']
```

## Array.prototype.pop()

### 설명

`배열에서 마지막 요소를 제거하고 그 요소를 반환한다. 빈 배열에 pop()을 호출하면, undefined를 반환합니다.`

### 예제

요소가 있는 배열

```js
var numbers = [1, 3, 5, 7];
console.log(numbers);
// [1, 3, 5, 7]

var number = numbers.pop();
console.log(numbers);
// [1, 3, 5]
console.log(number);
// 7
```

요소가 없는 배열

```js
var strings = [];
strings.pop();
// undefined
```

## Array.prototype.shift()

### 설명

`배열의 인덱스 0번째 요소를 제거 하고 제거된 요소 값을 반환한다.`
`나머지 요소는 앞으로 한칸 씩 당겨진다.`
`배열의 요소가 없으면 undefined를 반환한다.`

### 예제

요소가 있는 배열

```js
var numbers = [1, 3, 5, 7];
console.log(numbers);
// [1, 3, 5, 7]

var number = numbers.shift();
console.log(number);
// 1

console.log(numbers);
// [3, 5, 7]
```

요소가 없는 배열

```js
var strings = [];
var string = strings.shift();

console.log(string);
// undefined
```

## Array.prototype.unshift()

### 설명

`배열의 앞에 하나 이상의 요소를 추가하고, 배열의 길이를 반환한다.`

### 예제

```js
var numbers = [1, 3, 5, 7];
console.log(numbers);
// [1, 3, 5, 7]

numbers.unshift(0);
// 5
console.log(numbers);
// [0, 1, 3, 5, 7]
numbers.unshift(-3, -1);
// 7
console.log(numbers);
// [-3, -1, 0, 1, 3, 5, 7]
numbers.unshift([-5]);
// 8
console.log(numbers);
// [[-5], -3, -1, 0, 1, 3, 5, 7]
```
