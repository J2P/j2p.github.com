---
title: "Octopress 테마 변경하기"
date: "2013-10-01"
layout: post
draft: false
path: "/posts/change-octopress-theme"
category: "dev"
tags: 
  - "octopress"
description: ""  
---

블로깅을 다시 시작하기 위해서 정리좀하다가 몬가 변화를 주고 싶다는 생각에 이전에 사용하던 [Octopress](http://octopress.org)로 갈아타기로 마음 먹었다.

그러던중 혹시나 Octopress theme 가 생겼을까 싶었는데 검색을 해보니...

오~ 있다!!!

[Octopress Themes](http://opthemes.com)

> 찾아보니 github 에 [3rd Party Octopress Themes](https://github. com/imathis/octopress/wiki/3rd-Party-Octopress-Themes) 가 따로 있었다.
>
> 여기는 원래 있었던걸로 기억하는데... 이전에는 지금 처럼 많은 테마가 없었다.

조기에 가면 Octopress Theme 들이 꽤 많이 있는걸 확인 할 수 있다.

미리보기와 github 링크가 걸려 있다.

그중 제일 맘에 드는 녀석을 고르고 Install~

Install 방법은 아래와 같이 하면 된다.

## Install

```bash
$ cd octopress
$ git clone [github theme url] .themes/[theme name]
$ rake install['theme name']
$ rake generate
```
