---
title: "Jest 시작하기"
date: "2018-02-08"
layout: post
draft: false
path: "/posts/jest-getting-started"
category: "Jest"
tags: 
  - "Jest"
description: ""  
---

## 설치

npm 또는 yarn 으로 개발 환경에서 쓰는 모듈이기 때문에 개발 옵션을 주고 아래와 같이 설치한다.

```bash
$ npm install --save-dev jest
or
$ yarn add --dev jest
```

## 코드 작성

`sum.js` 파일을 만들고 아래와 같이 코드를 작성한다.

```js
function sum(a, b) {
  return a + b;
}

mudule.exports = sum;
```

## 테스트 코드 작성

`sum.test.js` 테스트용 파일을 만들고 아래와 같이 코드를 작성한다.

기본적으로 \*.test.js 파일을 테스트 파일로 판단하고 실행해주는 거 같다. 이것도 설정 파일에서 변경 가능한걸로 알고 있다.

설정 방법은 다음에 알아보자.

```js
const sum = require('./sum');

test('1 과 2를 더하면 3과 같다', () => {
  expect(sum(1 + 2)).toBe(3);
});
```

## 테스트 하기

jest 를 글로벌로 설치 하지 않았기 때문에 아래와 같이 실행해 준다.

```bash
$ ./node_modules/.bin/jest

PASS  ./sum.test.js
  ✓ 1과 2를 더하면 3과 같다. (6ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.077s
Ran all test suites.
```

## package.json scripts 로 추가하기

jest 를 글로벌로 설치 하지 않고 위와 같이 실행하면 불편하다 그래서 package.json 파일 scripts 에 추가하면 npm 또는 yarn 명령으로 실행이 가능하다.

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

```bash
$ npm run test
or
$ yarn run test

 PASS  ./sum.test.js
  ✓ 1과 2를 더하면 3과 같다. (4ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.475s
Ran all test suites.
✨  Done in 2.46s.
```
