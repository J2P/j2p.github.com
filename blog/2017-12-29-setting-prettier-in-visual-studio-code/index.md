---
title: "Visual Studio Code에서 Prettier 설정하기"
date: "2017-12-29"
layout: post
draft: false
path: "/posts/settings-prettier-in-visual-studio-code"
category: "Visual Studio Code"
tags: 
  - "prettier"
description: ""  
---

[Prettier](https://prettier.io/)를 cli 로 사용할 수 있지만 Visual Studio Code 에서 편하게 쓰고 싶어서설정하는 방법을 알아봤다.

## 설치

CMD + Shift + P 단축키를 입력해서 Command Palette 를 열고 다음을 입력해서 Prettier - Code formatter 를 설치한다.

[Prettier - Code formatter - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

```bash
ext install prettier-vscode
```

## 사용방법

문서에서 사용하려면 다음과 같이 사용하면 된다.

```
1. CMD + Shift + P -> Format Document
OR
1. Select the text you want to Prettify
2. CMD + Shift + P -> Format Selection
```

## 저장할때 자동 적용

파일 저장할때 자동으로 prettier 를 적용하려면

Code > 설정 > 기본 설정을 열어서 다음을 추가해주면 저장할때 자동으로 실행이 된다.

```
"[javascript]": {
	"editor.formatOnSave": true
},
```
