---
title: "How to use Storybook for Vue"
date: "2019-02-23"
layout: post
draft: false
path: "/posts/how-to-use-storybook-for-vue"
category: "Storybook"
tags: 
  - "JavaScript"
  - "Vue"
  - "Storybook"
description: ""  
---

## Create Vue Project
> Vue CLI 명령으로 새로운 프로젝트를 생성한다.

``` bash
$ vue create storybook-test
Vue CLI v3.4.1
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, Router, Vuex, CSS Pre-processors, Linter, Unit
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with node-sass)
? Pick a linter / formatter config: Standard
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)Lint on save
? Pick a unit testing solution: Jest
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? In package.json
? Save this as a preset for future projects? (y/N) N
```

## Installation Storybook
> Storybook을 쓰기 위한 필요한 패키지를 설치 한다.

``` bash
$ npm install @storybook/vue --save-dev
$ npm install babel-preset-vue --save-dev 
```

## Add Storybook command to npm scripts

> Storybook을 실행하기 위한 커맨드를 npm scripts에 추가 한다.

`package.json`
``` json
"scripts": {
  "serve": "vue-cli-service serve",
  "build": "vue-cli-service build",
  "lint": "vue-cli-service lint",
  "test:unit": "vue-cli-service test:unit",
  "storybook": "start-storybook -p 9001 -c .storybook"
},
```

## Add Storybook config file

> 파일을 만들고 다음 내용을 추가 해 준다.

`.storybook/config.js`
``` js
import { configure } from '@storybook/vue'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function loadStories () {
  require('../src/stories')
}

configure(loadStories, module)
```

## Add webpack config file

> 컴포넌트에서 scss를 쓰거나 svg를 썼을 경우 storybook 설정에 webpack.config.js 파일을 따로 만들어 줘야 한다.

`.storybook/webpack.config.js`
``` js
const path = require("path");

// Export a function. Accept the base config as the only param.
module.exports = (storybookBaseConfig, configType) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  storybookBaseConfig.module.rules.push({
    test: /\.scss$/,
    loaders: ["style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, "../src")
  }, {
    test: /\.(png|jpg|gif|svg)$/,
    loader: 'file-loader',
    include: path.resolve(__dirname, "../src")
  });
  // Return the altered config
  return storybookBaseConfig;
};
```

## Create Storybook directory 

> 파일을 만들고 프로젝트 생성시 만들어진 HelloWorld 컴포넌트를 불러와서 보여주는 코드를 추가 해 준다.

`./src/stories/index.js`
``` js
import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import HelloWorld from '../components/HelloWorld'

Vue.component('hello-world', HelloWorld)

storiesOf('HelloWorld', module)
  .add('메인', () => '<hello-world />')
```

## Run Storybook
> npm 스크립트로 Storybook을 실행한다.

``` bash
$ npm run storybook
> storybook-test@0.1.0 storybook /Users/sean/Test/storybook-test
> start-storybook -p 9001 -c .storybook

info @storybook/vue v4.1.13
info
info => Loading presets
info => Loading presets
info => Loading custom webpack config (full-control mode).
webpack built 207037cdacc9d8e76a91 in 2612ms
╭─────────────────────────────────────────────────────╮
│                                                     │
│   Storybook 4.1.13 started                          │
│   3.34 s for manager and 3 s for preview            │
│                                                     │
│   Local:            http://localhost:9001/          │
│   On your network:  http://192.168.200.177:9001/    │
│                                                     │
╰─────────────────────────────────────────────────────╯
```

## Splite story files

> stories 디렉토리에 컴포넌트 별로 파일을 분리하고 싶은 경우 다음과 같이 설정 파일을 수정한다.
분리된 파일명은 `filename.stories.js` 형태로 만들어 주면 된다.

`.storybook/config.js`
``` js
import Vue from 'vue'
import { configure } from '@storybook/vue'

function loadStories () {  
  const req = require.context('../src/stories', true, /\.stories\.js$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
```