---
title: "go[for]it 세미나 후기"
date: "2011-10-28"
layout: post
draft: false
path: "/posts/go-language"
category: "Go"
tags: 
  - "Go"
description: ""  
---

먼저 신제용, 김종민 두 분께 발표하느라 고생하셨다는 말과 좋은 자리 마련해주신 권순선님께 감사의 말씀을 전해 드리고 싶다.

업무나 관심에 있어서 주언어는 JavaScript 이지만 나는 왠지 다른 언어에도 관심이 간다. 다른 언어들의 문법은 어떤지 또 JavaScript 랑은 어떤 부분에서 어떤 차이가 있는지 등 요런 부분에 관심을 가지고 있어서 Go Lang 세미나에 참석하게 되었다.

Hellow Wolrd 라도 돌려보고 참석하려고 했으나 PATH 설정 문제로 컴파일이 잘 되지 않아서 예제 하나 돌려보지 못하고 참석하게 되었다.

세미나는 구글 코리아에서 이루어 졌다. 처음 가봤는데 음료수를 마음껏 먹을 수 있다는 점에서 아주 만족스러웠다 ㅋ;

첫 강사님의 발표는 Go 언어에 대한 역사와 어디에 사용되는지등 Go 언어에 대한 소개 시간이 였다. Go 언어는 마치 예전에 NBA 팀 시카고 불스의 전성기 때 처럼 Go 언어는 최고의 드림팀이 만들었다고 한다. 소개를 보니 5 명의 어마어마한 사람들이 모여서 만든듯 하다. 그 외에도 쓸수 있는곳 정식서버스, 역사 등 Go 언어에 대해서 소개를 해주셨다. (자세한 내용은 밑에 대충;;)

두번째 강사님은 실질적인 문법과 예제를 통해서 Go 언어에 대해서 알려주셨다. 처음에는 이해 할 수 있었지만 Java, C, C++를 제대로 해보지 않은 터라 후반 부로 갈 수록 이해 못하는 용어들, 개념들이 나와서 좀 어려웠지만 얼추 어떤 내용인지는 감은 잡을 수 있었다.<br />
무엇 보다 예제로 보여주신 url 단축 서비스는 간단한 소스로 그런 서비스를 만들 수 있다는 것 만으로도 관심을 가지게 만들었다. 또 써보지는 않았지만 Google App Engine 에서 Go 언어를 사용 할 수 있다는 점에서 웹 개발을 할 때도 유용하게 쓸수 있지 않을까 하는 생각이 들었다. 그리고 Go 언어는 소스가 직관적이고 문법들이 쉬운거 같아서 배우기 쉬운 언어 인 같다.

새로운 사람들 여러가지 언어를 접하고 관심있는 사람들 정말 재밌었던 분위기와 모임이였다. 앞으로 계속 적으로 이 모임에 참석하고 싶어 졌다.

아래는 참고 사이트와 Go 언어 소개에서 나왔던 부분들이다.<br />설명듣느라 전부를 받아 적지는 못했지만한국어로 번역된 곳에 가면 거의 모든게 번역 되어 있는거 같다. 공부할때는 이곳을 참고 하면 좋을꺼 같다.

### Go Lang 관련 한국 사이트

* [golang 공식사이트](http://goloang.org 'golang공식사이트')
* [golang-korea 구룹스](http://groups.google.com/group/golang-korea 'golang-korea')
* [go 언어 관련 자료를 한국어로 번역](http://code.google.com/p/golang-korea/ 'go언어 관련 자료를 한국어로 번역')

### 이런 곳에 써바

* Web Server
* Web browsers
* Web crawlers
* Search indexers
* Compilers
* Programeing tools
* IDEs
* OS

### 정식서비스

* Google App Engine
* Gcc 4.6.0 포함
* 내년 초 Go version 1
* Android (?)
* Chrome (?)

### Go 시작

* 2007 년 9 월
* Robert Griesemer, Ken Thompson and Rob Pike

### 형태 구성

* 2008 년 중반
* 설계가 대략 되었고 이제 구현(컴파일러, 런타임)

### 인력보강

* Ian Lance Taylor and Russ Cox

### 도구

* gomake
* goinstall - 패키지 시스템
* godoc - 로컬에서 go 문서를 볼 수 있는 도구
* gofix - 버전 바뀌었을 때를 위해 프로그래머를 보조하는 도구.
* gofmt - 코딩 컨벤션을 맞춰주는 시스템
* gotest - 단위 테스트.
