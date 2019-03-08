---
title: "CSS Webkit Hack"
date: "2011-10-17"
layout: post
draft: false
path: "/posts/css-webkit-hack"
category: "CSS3"
tags: 
  - "CSS"
description: ""  
---

마크업 작업을 하다 보면 드물지만 webkit(chrome, safari)만 다르게 보일때가 있다.

이런 경우 css 에서 처리 해줄수 있는 방법이 이 없을까 하다가

검색해서 나온것이 media query 를 이용한 것이였다.

사용 방법은 다음과 같다.

#### 직접 CSS 파일에 입력할 경우

```css
@media screen and(-webkit-min-device-pixel-ratio:0) {
  /* 이곳에 webkit용 CSS 를 작성하면 됩니다. */
}
```

#### Webkit 용 CSS 파일을 따로 만들어서 include 시킬 경우

```html
<link rel=stylesheet media="screen and min-device-pixel-ratio:0" href="webkit.css" />
```
