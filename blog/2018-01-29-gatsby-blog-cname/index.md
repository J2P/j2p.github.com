---
title: "Gatsby CNAME 복사하기"
date: "2018-01-29"
layout: post
draft: false
path: "/posts/gatsby-blog-cname"
category: "Gatsby"
tags: 
  - "gatsby"
description: ""  
---

[Octopress](http://octopress.org/), [Hexo](https://hexo.io/) 블로그를 지나서 이제야 [Gatsby](https://www.gatsbyjs.org/) 블로그로 정착하려고 한다.

가장 마음에 드는 건 코드가 React 로 되어 있다는 것이다.
개인 취향이겠지만 요즘 가장 관심이 쏠리고 공부하고 있는 것이 React 인지라 코드를 보면서 공부도 되고 코드 분석하면서 배울 게 있다고 생각한다.
그런 점에서 Gatsby 블로그에 정착하려고 한다.

몇일 고생해서 블로그를 옮기고 포스팅을 하면서 이것저것 수정을 했는데 어느 순간 포스트들의 상세페이지 URL 이 404 로 뜨기 시작했다.

그래서 gatsby-cli 도 보고 이것저것 보다가 너무 장시간 투자를 하면서 블로그를 또 못 쓰게 될까 봐 일단 새로운 코드로 블로그를 다시 생성했다.

여기서 문제가 발생했다. public 디렉토리를 지우고 build 를 다시 하다 보니 CNAME 이 파일이 삭제되었다.

자주 있는 일은 아니겠지만 CI 를 사용해서 build 를 하고 배포를 하게 된다면 CNAME 이 항상 없는 상태로 배포가 될 거 같다. 그래서 좀 검색을 해보니 `src` 디렉토리에 복사해 놓고 build 할 때 copy 하는 방법이 있었다.

```json
"scripts": {
  "deploy":
    "cp ./src/CNAME ./public && gatsby build --prefix-paths && gh-pages -d public -b master"
},
```

위와 같이 빌드 전에 `src/CNAME` 파일을 `public` 디렉토리로 복사해주면 해결된다.

이참에 CI 설정을 해서 build 하고 배포하도록 변경해봐야겠다.
