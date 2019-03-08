---
title: "Node.js 환경에 맞춰서  config 불러오는 방법"
date: "2014-02-27"
layout: post
draft: false
path: "/posts/node-dot-js-make-config"
category: "Node.js"
tags: 
  - "Node.js"
description: ""  
---

## development 환경 실행

```bash
$ NODE_ENV=development node app.js
```

## production 환경 실행

```bash
$ NODE_ENV=production node app.js
```

## config.js

```js
module.exports = function(){
    switch(process.env.NODE_ENV){
        case 'development':
            return {dev setting};

        case 'production':
            return {prod settings};

        default:
            return {error or other settings};
    }
};
```

## 사용

```js
var Config = require('./config'),
  conf = new Config()
```
