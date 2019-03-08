---
title: "How to not create sourcemap when building from CRA project"
date: "2019-01-09"
layout: post
draft: false
path: "/posts/cra-not-create-sourcemap"
category: "React"
tags: 
  - "React"
description: ""  
---

React 프로젝트를 프로덕션에 배포 하기 위해서 build를 하게 되는데 js, css 파일들의 sourcemap 이 같이 생성 된다.

sourcemap은 minify 된 파일 디버깅을 편하게 하기 위해서 만드는걸로 알고 있는데 프로덕션 배포시에 이 파일이 딱히 필요없다고 생각한다. 

그래서 build 할 때 sourcemap을 생성하지 않고 build 하는 방법이 있을까 찾아봤다.


https://github.com/facebook/create-react-app/issues/2787

위 이슈에 보면 빌드 후에 build 디렉토리에서 `*.map` 파일을 삭제 한다는 글들이 많다. 그중에 33 따봉과 6 하트를 받은 글이 보이는데

아래와 같이 환경 변수에 설정을 해주면 build 할 때 sourcemap을 생성하지 않는다는 것이다.

```
GENERATE_SOURCEMAP=false
```


### 환경 변수를 설정하지 않고 build 하는 경우

```
.
|____favicon.ico
|____index.html
|____precache-manifest.bb236a9158d67cbc39b7e3d969a1feba.js
|____asset-manifest.json
|____static
| |____css
| | |____1.0d4ecec8.chunk.css.map
| | |____main.7e1e1363.chunk.css.map
| | |____main.7e1e1363.chunk.css
| | |____1.0d4ecec8.chunk.css
| |____js
| | |____1.b5071695.chunk.js.map
| | |____main.67789e9a.chunk.js.map
| | |____runtime~main.229c360f.js.map
| | |____main.67789e9a.chunk.js
| | |____1.b5071695.chunk.js
| | |____runtime~main.229c360f.js
|____manifest.json
|____service-worker.js
```


### 환경 변수를 설정하고 build 하는 경우

```
.
|____favicon.ico
|____index.html
|____precache-manifest.e3867584a5d5c6887f4f3d1f84796c7d.js
|____asset-manifest.json
|____static
| |____css
| | |____1.3a695b60.chunk.css
| | |____main.f3293eab.chunk.css
| |____js
| | |____1.3ea90ff7.chunk.js
| | |____main.7f7fb22c.chunk.js
| | |____runtime~main.229c360f.js
|____manifest.json
|____service-worker.js
```

궁금해서 create-react-app 코드에서 찾아봤다. 
https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/config/webpack.config.js#L39

여기를 보면 process.env. GENERATE_SOURCEMAP 값을 받아서 shouldUseSourceMap 변수에 넣어서 webpack config 를 설정하고 있다.