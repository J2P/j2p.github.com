---
title: "Jest에서 localStorage 사용"
date: "2018-06-19"
layout: post
draft: false
path: "/posts/using-localstorage-in-jest"
category: "Jest"
tags: 
  - "Jest"
description: ""  
---

회사 프로젝트 로그인 부분에서 token을 받아와 localStorage에 저장을 하고 있다. Jest를 사용해서 테스트 코드를 작성하다 보니
localStorage 가 없어서 테스트가 정상적으로 동작 하지 않았다.

그래서 좀 찾아보니 다음과 같은 패키지를 설치해서 해결 할 수 있다는걸 알게 되었다.

## 설치
```
$ npm i --save-dev jest-localstorage-mock
```

## 설정
package.json jest 설정에 다음과 같이 추가 한다.
```
{
	"jest": {
		"setupFiles": ["jest-localstorage-mock"]
	}
}
```

## setup file에서 불러 오기
``` setup.js
import 'jest-localtorage-mock';
```

## 사용방법
``` js
// key 값에 접근하기
localStorage.__STORE__['key']
// 값 추가하기
localStorage.setItem('key', 'value');
```

여기서는 jest-localstorage-mock 패키지를 설치 했지만 다음과 같이 간단하게 구현도 가능하다.

``` js
//browserMocks.js
var localStorageMock = (function() {
    var store = {};

    return {
        getItem: function(key) {
            return store[key] || null;
        },
        setItem: function(key, value) {
            store[key] = value.toString();
        },
        clear: function() {
            store = {};
        }
    };

})();

Object.defineProperty(window, 'localStorage', {
     value: localStorageMock
});
```

위 파일을 Jest config(package.json) 에 추가 해주면 된다. `”setupFiles": ["browserMocks.js"]`

## 참조
[Mocking localstorage  · Issue #2098 · facebook/jest · GitHub](https://github.com/facebook/jest/issues/2098)
[jest-localstorage-mock/localstorage.js at master · clarkbw/jest-localstorage-mock · GitHub](https://github.com/clarkbw/jest-localstorage-mock/blob/master/src/localstorage.js)
