---
title: "Start Go Language"
date: "2011-11-04"
layout: post
draft: false
path: "/posts/start-go-language"
category: "Go"
tags: 
  - "Go"
description: ""  
---

Go[for]it 세미나에 다녀온 후로 Go 언어에 관심이 가기 시작했다.

그동안 컴파일 언어를 제대로 공부해본적이 없어서 인지 재미도 있는거 같고 스크립트 언어와 또다른 재미가 있는거 같다.

Go[for]it 세미나에 가기전에 MBA 에서 제대로 PATH 설정 문제로 인해서 컴파일이 제대로 되지 않았는데 세미나에 다녀온 후로는 신기하게도 PATH 설정 문제도 해결되고 Goclipse 를 알게 되어서 좀더 편하게 공부 할 수 있게 되었다. 그래서 일단 기본인 설치부터 Goclipse 설정까지 정리해보고 Hello World 까지 정리해 볼까 한다.

## Go 설치

현재 MAC 을 쓰고 있기 때문에 MAC 기준으로 설명을 하겠다.
우선 저장소에서 Go 를 받아 와야 한다. 그러기 위해서는 [Mercurial](http://mercurial.selenic.com/wiki/Download 'Mercurial') 이 필요하다.

hg 명령이 동작하는지 확인하고 만약 동작하지 않는다면 다음과 같은 명령으로 설치 하면 된다.

```bash
$ sudo easy_install mercurial
```

혹 위 과정이 진행이 되지 않는다면 [python](http://www.python.org/download/ 'python'), [setuptools](http://pypi.python.org/pypi/setuptools 'setuptools')이 설치가 안되어 있을수도 있다. python, setuptools 설치 과정을 먼저 진행하시면 됩니다.

위에서 [easy_install](http://peak.telecommunity.com/DevCenter/EasyInstall 'easy_install') 은 python 에서 사용되는 패키지 관리해주는 파이썬 모듈이라고 한다.

## 저장소에서 가져오기

이제 mercurial 을 통해서 다음과 같이 실행하면 저장소에서 있는 소스를 go 디렉토리에 가져오게 된다.

```bash
$ hg clone -u release https://go.googlecode.com/hg/ go
```

## PATH 설정

빌드를 진행하기전에 PATH 설정을 먼저 하는것이 좋은거 같다. 처음 아무것도 모르고 설치를 진행 했을때 제대로 go 컴파일이 안되었던것이 PATH 문제 였는데 검색을 해서 보고, all.bash 파일을 열어보면 빌드과정 소스에 PATH 를 통해서 진행되는걸 확인 할 수 있다. 그래서 빌드 하기전에 다음과 같이 PATH 를 먼저 설정한다.

```bash
export GOROOT=$HOME/go
export GOOS=darwin
export GOARCH=386
export GOBIN=$HOME/go/bin
export PATH=$PATH:$HOME/go/bin
```

각 PATH 에 관한 설명은 다음과 같다.

* GOROOT

Go 트리에서 루트는 $HOME/go. 해당 디렉토리의 부모 디렉토리를 기본으로 하며 all.bash 가 실행되는 디렉토리다. $GOROOT 를 설정하지 않으면 makefile 을 이용해서 Go 프로그램을 개발할 때 반드시 make 나 gmake 대신에 gomake 를 실행해야 한다.

* $GOOS 와 $GOARCH

타겟 운영체제의 이름과 컴파일 구조. $GOHOSTOS 와 $GOHOSTARCH 값들을 기본으로 한다.
$GOOS 는 리눅스, freebsd, darwin(맥 OS X 10.5 혹은 10.6), 윈도우(작업중). $GOARCH 는 amd64(64-bit x86, 현재 가장 완성도 높음), 386(32-bit x86) 그리고 arm(32-bit ARM, 작업중). $GOOS 와 $GOARCH 의 사용가능한 조합은 다음과 같다.
$GOOS $GOARCH 비고
darwin 386
darwin amd64
freebsd 386
freebsd amd64
linux 386
linux amd64
linux arm 작업중
windows 386 작업중

* $GOBIN

바이너리가 설치된 위치. 기본값은 $GOROOT/bin 이다. 설치 후, 해당 디렉토리를 $PATH 에 추가하여 Go 가 제공하는 여러 도구들을 사용할 수 있다.

## Go 설치

다음과 같이 진행 하면 된다.

```bash
$ cd go/src
$ ./all.bash
```

모든 것이 잘 진행되면 다음과 같은 출력이 나온다.

```bash
ALL TESTS PASSED

---

Installed Go for darwin/386 in /Users/jjp5023/go.
Installed commands in /Users/jjp5023/go/bin.
**_ You need to add /Users/jjp5023/go/bin to your $PATH. _**
The compiler is 8g.

On OS X the debuggers must be installed setgrp procmod.
Read and run ./sudo.bash to install the debuggers.
```

## Hello World

이제 설치가 끝났다. 모든 언어의 기초 Hello World 를 찍어보자. 다음과 같은 코드를 작성해서 hello.go 를 만들어 보자.

```go
package main

import "fmt"

func main() {
	fmt.Printf("Helllo, World\n")
}
```

위와 같이 작성한 후 컴파일을 다음과 같이 진행합니다.

```bash
$ 8g hello.go
$ 8l hello.8
$ ./8.out
Hello, World
```

위와 같이 Hello, World 가 찍힌것을 보았다면 이제 부터 본격적인 Go 언어 공부를 할 준비는 끝났다.

## Go 릴리즈 버전 관리

Go 는 아직도 개발중인 언어이기 때문에 자주 release 된다. [Go install](http://code.google.com/p/golang-korea/wiki/GoInstall 'Go install') 페이지 보면 다음과 같은 내용이 있다.

> Mercurial 저장소에 release 와 weekly 라는 2 개의 고정테그를 관리하고 있다. weekly 테그는 매주 한 번씩 갱신되고 프로젝트 개발을 경과를 추적하기를 원하는 경우 사용한다. release 테그는 빈번하지는 않고 weekly 테그 중에 안정성이 검증된 것에 사용한다.

> 대부분 Go 사용자들은 최신 release 테그를 가진 Go 를 설치하고 싶어할 것이다. 새로운 릴리즈는 golang-announce 메일링 리스트를 통해 공지한다.

그래서 현재 Go 를 최신 릴리즈로 갱신 하려면 다음과 같이 진행하면 된다.

```bash
$ cd go/src
$ hg pull
$ hg update release
$ ./all.bash
```

이렇게 해서 Go 설치와 실행, 업데이트 하는 방법까지 알아봤다.
