---
title: "Django webpack loader"
date: "2018-10-22"
layout: post
draft: false
path: "/posts/use-django-webpack-loader"
category: "Webpack"
tags: 
  - "Webpack"
  - "Django"
---


일반적으로 Vue 또는 React를 사용하게 되면 SPA로 작업하겠지만 기존에 Django 프로젝트에 API 가 준비 되어 있지 않다면 바로 SPA로 만들기 힘들다.
우리 회사 프로젝트가 그렇다... 

Django Template와 Vue를 같이 쓰기 위해 Django webpack loader를 적용해 회사에서 Vue를 사용하기 위한 작업을 했다.
Vue를 사용하기 위해서 그냥 script 태그를 넣어서도 가능하지만 sass도 쓰고 싶고 새로나온 ES 문법도 쓰고 싶고 해서 webpack을 쓰려고 한다.

##  Installation

``` bash
pip install django-webpack-loader
```
Django 프로젝트에 `django-webpack-loader` 모듈을 설치한다.

## settings.py
settings.py 에 설정을 다음과 같이 추가 해 준다. 
``` python
INSTALLED_APPS = {
	...
	'webpack_loader',
}
```
`INSTALLED_APPS`에 설치한 모듈을 추가해 준다.

``` python
WEBPACK_LOADER = {
    'DEFAULT': {
        'BUNDLE_DIR_NAME': 'bundles/',
        'STATS_FILE': os.path.join(BASE_DIR, 'webpack-stats.json'),
    },
}
```
`BUNDLE_DIR_NAME` 은 webpack으로 bundle 파일을 만들었을때 어디에 만들지 정해주는것이다. `STATS_FILE`은 webpack-stats.json 기준으로 만들어진 파일을 Django 템플릿에서 읽을 수 있도록 생성될 파일의 위치를 설정해준다.

## template

``` 
{% load render_bundle from webpack_loader %}
```
Django 템플릿에서 다음과 같이 추가를 해서 bundle 파일을 불러올 수 있다.

## Webpack 설정

``` bash
$ npm install --save-dev babel-loader babel-core
```
babel 관련 package 설치

``` bash
$ npm install --save-dev webpack webpack-cli webpack-bundle-tracker
```
webpack 관련 package 설치

``` bash
$ npm install --save-dev sass-loader node-sass style-loader css-loader
```
sass 를 사용하기 위한 package 설치

``` js
var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,
  entry: './static/js/index',
  output: {
      path: path.resolve('./static/bundles/'),
      filename: "[name]-[hash].js"
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'})
  ]
}
```
다음과 같이 webpack.config 파일에 추가해준다. 


## webpack bundle
다음과 같은 명령어로 webpack bundle을 한다. 편하게 하기 위해서 package.json 에 추가해준다.
``` bash
$ ./node_modules/.bin/webpack --config webpack.config.js 
```



## package.json 추가
scripts 에 build 명령을 추가해줘서 간단하게 bundle 명령을 실행할 수 있다.
``` json
"scripts": {
  "build": "webpack --config webpack.config.js"
}
```