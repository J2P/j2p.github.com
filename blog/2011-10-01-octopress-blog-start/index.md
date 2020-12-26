---
title: "Octopress Blog 시작하기"
date: "2011-10-01"
layout: post
draft: false
path: "/posts/octopress-blog-start"
category: "dev"
tags: 
  - "octopress"
description: ""  
---

![octopress](./img1.png)

그동안 Wordpress 를 웹호스팅에 설치해서 사용을 하다가 만료가 되어서
Tumblr 에서 블로그를 사용하고 있었는데 Twitter 에서 우연찮게 Octopress 를 알게되었다.

[@reiot](http://twitter.com/#!/reiot '@reiot')님의 블로그를 Octopress 로 이전하시면서 [Wordpress to Octopress](http://reiot.com/2011/09/21/wordpress-to-octopress/ 'WOrdpress to Octopress') 라는 Title 로 Posting 을 하셨다.

Octopress 에 대한 설명을 써주셨는데 Octopress 는 정적 사이트 생성기인 Jekyll 을 이용해서 블로그를 손쉽게 구성하도록 해주는 루비 프레임워크다. 로컬에서 작성을 하고 HTML 을 생성해서 Github, Amason S3, 구글 앱엔진에서 블로그 서비스를 가능하게 해준다 라고 써주셨다. 설명처럼 Octopress 는 DB 를 따로 사용하지 않고 다른 서비스에 만들어진 HTML 을 올려서 HTML 페이지를 보여주게 된다.
또 여러가지 Plugins 를 지원하고 있는데 그중에서 Code blocks, Gist Tag, Include Code 는 개발자들이 블로깅을 할때 code 를 이쁘게 보여주므로 예제 소스작성 할때 아주 멋진 블로깅을 할 수 있을꺼 같다.내가 Octopress 를 사용할려고 마음 먹은 가장 큰 이유 중에 하나 이다.

사용하면서 느끼는 점이지만 웹에서 어드민을 따로 두고 사용하지 않고 로컬에 자신이 사용하는 에디터로 Markdown 문법으로 작성해서 변경된 부분도 로컬에서 확인이 가능하다는 점이 개인적으로 마음에 든다. 웹 에디터는 왠지 불편한점이 있었다. Octopress 는 블로깅을 한다기 보단 웹페이지를 만든다는 느낌이 있어서 마음에 든다.

## Setup

[http:// octopress.org/docs/setup](http://octopress.org/docs/setup 'Octopress Setup') 페이지에 가면 **Octopress Setup** 이 있다.

첫째 줄에 나오는 설명에 보면 **Octopress is a blogging framework for hackers.** 라는 문구가 있다.
**개발자를 위한 블로깅 플레임웍** 얼마나 멋지 구리 한가 약간 geek 스럽긴 하지만 내 맘에 들면 그만이다~ ㅋㅋ

이제 설치 방법을 알아보자.
가장 먼저 할것은 Ruby 1.9.2 버전을 설치 해야 한다. 여기선 설치방법을 두가지를 설명해주고 있다.
RVM 과 rbenv 요렇게 두가지다. 루비를 잘 모르므로 그나마 많이 들어 봤던 RVM 으로 설치를 진행했다.
RVM 이 설치 되어 있다면 Ruby 설치 부터 진행하면 되지만 RVM 이 설치가 되있지 않다면 RVM 설치부터 진행 하면 된다.


RVM 설치

``` bash
$ bash < <(curl -s https://rvm.beginrescueend.com/install/rvm)

# curl 로 rvm 을 받는다.

$ echo '[[ -s "$HOME/.rvm/scripts/rvm" ]] && . "$HOME/.rvm/scripts/rvm" #Load RVM function' >> ~/.bash_profile

# .bash_profile rvm PATH 을 설정한다.

$ source ~/.bash_profile

# .bash_profil 파일 갱신
```

이제 RVM 으로 Ruby 를 설치하고 1.9.2 버전을 사용한다.

Ruby Install
``` bash
$ rvm install 1.9.2 && rvm use 1.9.2
```

다음은 github 에 있는 octopress 를 clone 받는다.

Clone Octopress
``` bash
$ git clone git://github.com/imathis/octopress.git octopress
$ cd octopress
```
octopress 디렉토리에 처음 접근 할 RVM 으로 설치를 했을경우 .rvmrc 파일을 신뢰하는냐? 라고 물어본다.
yes 라고 하면 된다.때

다음은 의존성 설치이다.

Install dependencies
``` bash
$ gem install bundler
$ bundle install
```
gem install bundler 할경우에 혹시 **“ERROR: LOADING COMMAND:INSTALL (LOADDEROR) ZLIB”** 라고 에러 메시지가 나온다면 zlib 가 없어서 그런듯하다.
RVM 으로 Ruby 를 삭제하고 Ruby 설치 할때 옵션을 주면 된다.

Ruby reinstall with option
``` bash
$ rvm remove 1.9.2

# Ruby 삭제

$ rvm install 1.9.2 --with-zlib-dir=$rvm_path/us

# 다시 설치

$ gem install bundler

# 의존성 다시 설치

```

다음은 default Octopress theme 을 인스톨 한다.

Octopress Default Theme Install
```
$ rake install
```

다음은 github 에 올리기 위한 설정이다.

github 의 계정에 가서 새로운 Repository 를 생성한다. Repository 이름은 다음과 같이 username.github.com (여기서 username 은 자신의 github 계정을 말하는 것입니다.)으로 해준다. github 계정으로 블로그 서비스를 하기 위한 Repository 생성 방법이다. 이렇게 생성을 하게 되면 [http://j2p.github.com](http://j2p.github.com 'j2p github') 처럼 페이지 접근이 가능하게 된다. 이것은 github 에서 지원해주는 것이다.

계정이 생성 되었으면 Octopress 디렉토리에서 다음과 같은 명령어를 입력한다.

Setup github
``` bash
$ rake setup_github_pages

# github url 을 물어보면 이전에 생성한 Repository 주소를 입력한다.
```

위와 같이 하면 github 와 연동이 된다.

다음은 블로깅을 하기 위한 명령어 들이다.
간단하게 3 가지 명령어 만으로 적용하고 미리보고 올리기 된다.

명령어
``` bash
$ rake generate

# 변경된 내용을 적용하고 html 을 생성

$ rake preview

# 변경된 내용을 로컬에서 미리 보기한다. (http://localhost:4000)

$ rake deploy

# 변경된 내용을 github 에 push 해준다.
```

여기 까지 진행하면 http://username.github.com 에서 자신의 블로그가 생성된걸 확인 할 수 있다.

이렇게 해서 Octopress 설치가 끝났다. 이렇게 결과를 보는데만 4 일이 걸렸다.
처음에 이해를 잘못했던 부분들이 있어서 시간이 더 오래 걸렸던거 같다.
그래도 [@reiot](http://twitter.com/#!/reiot, '@reiot')님의 도움을 받아서 정확하게 이해를 하고 설치를 끝낼수 있었다. 초면인데 질문에 대한 답변을 해주신 [@reiot](http://twitter.com/#!/reiot '@reiot')님께 다시 한번 감사드립니다.
