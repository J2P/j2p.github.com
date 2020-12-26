---
title: "Octopress Posting 하기"
date: "2011-11-14"
layout: post
draft: false
path: "/posts/octopress-write-post"
category: "dev"
tags: 
  - "octopress"
description: ""  
---

국내에 이외로 많은 분들이 Octopress 를 써보고자 하는거 같다.

그래서 이전에 설치하는 방법만 올렸었는데 간단하게 Octopress 로 Posting 하는 방법을 써볼까 한다.

먼저 간단한 Posting 하는 방법에 대해서 알아보자.

Posting 하는 과정을 간단하게 쭉 말해보면 rake new_post[제목] 명령어로 markdown 파일을 만들어서 내용을 작성하고 rake generate 명령어로 html 파일을 만들어서 rake preview 명령어로 작성된 post 를 로컬에서 확인하고 rake deploy 명령어로 github 에 올린다.

이게 전부이다.

자 그러면 하나씩 알아보자.

## 1. rake new_post[제목]

작성하고자 하는 post 가 있다면 먼저 작성하고자 하는 페이지를 만들어야 한다. 나도 markdown 을 써본적이 없었지만 octopress 를 사용하게 되면서 알게 되었다. 근데 워낙 사용방법 자체가 쉽기 때문에 따로 배울 필요없이 쓰다보면 자연스럽게 알게 되는거 같다.

터미널에서 다음과 같이 명령어를 입력하면 markdown 파일이 생성된다.

```bash
$ rake new_post["쓰려고 하는 post 제목"]
```

위와 같이 터미널에서 입력하고 나면 octorpess/source/\_posts/ 경로에 오늘 날짜와 입력한 제목이 조합된 이름으로 생성된 markdown 파일을 확인 할 수 있다. 날짜는 나중에 generate 해주면 octopress/\_deploy/blog 안에 파일을 생성할때 날짜 부분을 가지고 디렉토리를 생성하기 위해서 필요한듯 하다.

이렇게 파일이 생성되면 이제 octorpess/source/\_posts/ 경로로 가서 markdown 파일을 열어서 post 를 작성하면 되는데 파일을 열어보게 되면 다음과 같은 내용이 미리 들어가 있다.

```markdown
layout: post
title: "쓰려고 하는 post 제목"
date: 2011-11-14 09:19
comments: true
categories:
```

레이아웃, 제목, 날짜, 댓글, 카테고리 설정부분 이다. 처음 파일 생성할때 썼던 제목이 들어가 있는데 이부분은 변경하면 post 제목은 변경 할 수 있다. 또 날짜도 변경할수 있고 댓글 유무도 변경할수 있고 카테고리는 태그 같은 것인데 입력하는 방법이 몇가지가 있는데 방법은 다음과 같다.

```bash
// 하나의 category 작성방법
categories: cate1

// 두번째 여러개 category 작성방법 1
categories: [cate1, cate2, cate3]

// 세번째 여러개 category 작성방법 2
categories:

* cate1
* cate2
* cate3
```

위와 같이 세가지 category 작성방법이 있다. category 는 post 하단부분에 다음과 같이 표시된다.

![category](./category.png)

그냥 마음대로 사용하기 편한걸 선택해서 사용하면 될꺼 같다. 이제 작성하고자 하는 post 를 작성하면 된다.

## 2. rake generate

작성한 post 를 html 로 만들어주는 과정이다. 터미널에서 다음과 같이 입력해주면 된다.

```bash
$ rake generate
Generating Site with Jekyll
unchanged sass/screen.scss
Configuration from /Users/jjp5023/octopress/\_config.yml
Building site: source -> public
Successfully generated site: source -> public
```

위와 같이 입력하면 \_config.yml 있는 설정을 적용하고, source 안에 있는 markdown 파일을 html 로 변경하고, sass 를 css 파일로 변경되는 작업이 일어난다. generate 된 것들은 octopress/\_deploy 안에 들어가게 된다.

## 3. rake preview

octopress 는 로컬에서 작성을 해서 github 에 올리는 방식이다. 서버에 올리기전에 내가 작성한 post 가 어떻게 보이는지 당연히 궁금하다. 그래서 로컬에서 미리보기가 가능하다.

```bash
$ rake preview
Starting to watch source with Jekyll and Compass. Starting Rack on port 4000
Configuration from /Users/jjp5023/octopress/\_config.yml
[2011-11-14 10:21:11] INFO WEBrick 1.3.1
[2011-11-14 10:21:11] INFO ruby 1.9.2 (2011-07-09) [x86_64-darwin11.0.1][2011-11-14 10:21:11] INFO WEBrick::HTTPServer#start: pid=10385 port=4000
Auto-regenerating enabled: source -> public
[2011-11-14 10:21:11] regeneration: 505 files changed

> > > Compass is watching for changes. Press Ctrl-C to Stop.
> > >
```

터미널에서 위와 같은 입력하면 여러 메시지와 함께 서버가 시작되고 http://localhost:4000 에서 확인 할 수 있게 된다. 서버를 멈추기 위해선 Ctrl + C 명령을 사용하면 된다.

## 4. rake deploy

이제 모든 posting 과정이 끝났다 이제 github 서버에 올리기만 하면 진짜로 posting 이 끝나게 된다.
다음과 같이 입력 한다.

```bash
$ rake deploy
```

위와 같이 입력을 하면 github 에 octopress/\_deploy 안에 있는 파일들이 push 가 되어서 github 에 올라가게 된다. 여기서 push 란 git 명령어 인데 그냥 말그대로 서버에 밀어넣는 것을 말한다. 이렇게 하면 하나의 post 를 작성해서 서버에 올리는 과정이 끝나게 된다.

내 생각이지만 git 을 잘 알지 못하여도 git push 개념만 알고 있다면 구지 git 을 몰라도 octopress 로 블로깅을 하는데 전혀 지장이 없다고 생각한다. 기억할껀 위 과정 하고 github 에 올라가는 파일들은 octopress/\_deploy 안에 있는 파일들이 라는 것인거 같다...
