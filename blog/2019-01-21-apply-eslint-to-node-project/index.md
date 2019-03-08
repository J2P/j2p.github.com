---
title: "Apply eslint to a node project"
date: "2019-01-21"
layout: post
draft: false
path: "/posts/apply-eslint-to-node-project"
category: "ESLint"
tags: 
  - "ESLint"
description: ""  
---

## Install ESLint

```
$ npm install --save-dev eslint
```

프로젝트 디렉토리에서 위와 같이 설치한다. 만약 글로벌로 설치 하고 싶다면 다음과 같이 설치 한다.

```
$ npm install -g eslint
```

## Init ESLint
```
$ ./node_modules/.bin/eslint --init
```

ESLint를 dev 로 설치 했다면 위와 같은 명령으로 ESLint 를 init 한다. 

```
$ eslint --init
```
글로벌로 설치 했다면 위와 같이 실행한다.

## ESLint config

```
? How would you like to configure ESLint? (Use arrow keys)
❯ Use a popular style guide
  Answer questions about your style
  Inspect your JavaScript file(s)
```
Use a popular style guide 를 선택한다.

```
❯ Airbnb (https://github.com/airbnb/javascript)
  Standard (https://github.com/standard/standard)
  Google (https://github.com/google/eslint-config-google)
```
위중 하나를 선택한다.

```
? What format do you want your config file to be in? (Use arrow keys)
❯ JavaScript
  YAML
  JSON
```
위중 cofig format을 선택한다.

```
eslint-config-standard@latest eslint@>=5.0.0 eslint-plugin-import@>=2.13.0 eslint-plugin-node@>=7.0.0 eslint-plugin-promise@>=4.0.0 eslint-plugin-standard@>=4.0.0
? Would you like to install them now with npm? (Y/n)
```
Y를 선택하면 위 package 들이 설치 된다.

## Fixed .eslintrc.json config
``` json
{
	"extends": "standard"
}
```

.eslintrc.json 파일을 열어 보면 위와 같이 설정이 들어가 있다.

``` json
"rules": {
	"space-before-function-paren": ["error", "never"]
}
```
나는 위와 같이 두가지 룰을 추가 해서 사용한다.

함수명 뒤에는 스페이스를 않넣는게 익숙하다. `function myFunc() {}`

## 참고 자료
- [semi - Rules - ESLint - Pluggable JavaScript linter](https://eslint.org/docs/rules/semi#require-or-disallow-semicolons-instead-of-asi-semi)
- [space-before-function-paren - Rules - ESLint - Pluggable JavaScript linter](https://eslint.org/docs/rules/space-before-function-paren#require-or-disallow-a-space-before-function-parenthesis-space-before-function-paren)
- [GitHub - standard/eslint-config-standard: ESLint Config for JavaScript Standard Style](https://github.com/standard/eslint-config-standard)