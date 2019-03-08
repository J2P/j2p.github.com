---
title: "Goclipse 설치"
date: "2011-11-07"
layout: post
draft: false
path: "/posts/goclipse-install"
category: "Go"
tags: 
  - "Go"
description: ""  
---

그동안 컴파일 언어를 제대로 사용해보지 않아서 인지 Go 언어를 공부하는데 컴파일 하는 부분이 나한테는 불편한 일이다. 그래서 IDE 를 찾아보니 Goclipse 라는 Eclipse 에 plugin 을 설치해서 사용하는 것이 있었다.

그래서 간단하게 설치하고 사용하는 방법에 대해서 작성해 볼까 한다.

## Eclipse 설치

Eclipse 에 Plugin 을 설치해서 사용하는 것이기 때문에 먼저 Eclipse 가 설치 되어 있어야 한다.

Eclipse [이곳](http://www.eclipse.org/downloads/ Eclipse) 에서 3.6 혹은 이상의 버전을 받아서 설치를 한다.

## Goclipse plugin 설치

Eclipse 실행하고 Help > Install New Sofeware 를 선택한다.
Work with 박스에 다음 URL 을 입력하고 Add 버튼을 눌러서 Go Repository 를 추가해다.

```bash
http://goclipse.googlecode.com/svn/trunk/goclipse-update-site/
```

쭉 설치를 진행하시고 Eclipse 를 다시 시작한다.

환경설정 창을 열어서 Go 메뉴에서 PATH 를 설정해준다. PATHA 는 설치할때 설정한 .bash_profile 내용을 참고해서 설정한다.

![goclipse 환경설정](./goclipse.png)

###Hello World 실행

Hello World 코드를 작성하고 터미널에서 컴파일 작업을 따로 할 필요없이 Eclipse 에서 Run 해서 Eclipse Console 창에서 결과를 볼수 있다.

{% img center /images/posts/goclipse_run.png "goclipse 환경설정" %}

###참고 URL

* [http://code.google.com/p/goclipse/](http://code.google.com/p/goclipse/ http://code.google.com/p/goclipse/)
* [http://juhoi.tistory.com/46](http://juhoi.tistory.com/46 http://juhoi.tistory.com/46)
