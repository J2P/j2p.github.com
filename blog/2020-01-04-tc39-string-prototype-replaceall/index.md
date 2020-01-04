---
title: "TC39 String.prototype.replceAll"
date: "2020-01-04"
layout: post
draft: false
path: "/posts/tc39-string-prototype-replaceall"
category: "JavaScript"
tags: 
  - "JavaScript"
  - "TC39"
description: ""  
---

현재 정규표현식을 사용하지 않고서 문자열에서 여러개의 문자를 한번에 변경이 가능한 방법이 없다.
TC39 proposals 에 replaceAll 함수가 추가 되었고 그것을 알아보자.

replace 함수를 사용하면 아래와 같이 첫번째 문자만 변경이 되고 그 후에 있는 문자는 변경이 되지 않는다.

## String.prototype.replace 함수 사용
``` javascript
"abcdacbdabcd".replace('d', 'k')
"abckacbdabcd"
```

아래와 같이 정규표현식을 사용하면 한번에 여러 문자를 변경이 가능하다.

## 정규 표현식을 사용
``` javascript
"abcdacbdabcd".replace(/d/g, 'k')
"abckacbkabck"
```

하지만 이를 String 함수에 포함 시켜서 좀더 편하게 사용하고자 새로운 함수를 추가 한게 아닌가 싶다.

사용 방법은 다음과 같다.

## 사용 방법
```
String.prototype.replaceAll(searchValue, replacement)
```

실제 사용 예는 다음과 같다.
## String.prototype.replaceAll 함수 사용
``` javascript
"abcdacbdabcd".replaceAll('d', 'k')
"abckackdabck"
```


## 참고

* [javascript - How to replace all occurrences of a string? - Stack Overflow](https://stackoverflow.com/questions/1144783/how-to-replace-all-occurrences-of-a-string)
* [String.prototype.replaceAll · V8](https://v8.dev/features/string-replaceall)
* [GitHub - es-shims/String.prototype.replaceAll: Spec-compliant polyfill for String.prototype.replaceAll ESnext proposal.](https://github.com/es-shims/String.prototype.replaceAll)