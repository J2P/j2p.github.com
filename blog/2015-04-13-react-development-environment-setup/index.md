---
title: "React 개발환경 설정"
date: "2015-04-13"
layout: post
draft: false
path: "/posts/react-development-environment-setup"
category: "React"
tags: 
  - "React"
description: ""  
---

요즘 React 에 흥미를 느끼면서 이거저거 해보고 공부를 하고 있다.

이전에는 프론트엔드 개발을 하면서 build 만 watch 같은 것들을 따로 설정하지 않고 작업을 했었는데

React 를 공부하는 김에 겸사 겸사 공부를 하게 되었다.

## 기본 디렉토리 구조

디렉토리 구조는 아래와 같다.

src 에는 개발단계에서 파일들을 쪼개서 개발을 하고 webpack 으로 build 한 파일들을 build 디렉토리에 모아둔다.

```bash
.
├── build
│   ├── bundle.js
│   └── index.html
├── src
│   ├── css
│   │   └── style.css
│   ├── img
│   └── js
│       ├── components
│       └── app.js
├── preprocessor.json
├── package.json
├── gulpfile.js
└── webpack.config.js
```

## webpack

[webpack](http://webpack.github.io/ 'webpack')을 사용해서 파일들을 하나의 파일로 만들어준다.

webpack config 파일은 아래와 같다.

```js
var path = require('path')
var webpack = require('webpack')
var config = {
  entry: {
    src: ['./src/js/app.js'],
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader!babel-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
    ],
  },
}

module.exports = config
```

## gulp

[gulp](http://gulpjs.com/, 'gulp') 를 사용해서 파일이 변경이 되면 빌드를 다시 하고 서버를 다시 시작한다.

gulpfile 은 아래와 같다.

```js
var gulp = require('gulp')
var connect = require('gulp-connect')
var webpack = require('gulp-webpack')
var webpackConfig = require('./webpack.config.js')

// Initialize watch tasks
gulp.task('watch', ['run'], function() {
  gulp.watch(['./src/**/*'], ['build'])
})

// Build files for distribution
gulp.task('build', function() {
  return gulp
    .src('./src/js/app.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('build/'))
    .pipe(connect.reload())
})

// Run example server
gulp.task('run', ['build'], function() {
  connect.server({
    root: './build',
    port: 8080,
    livereload: true,
  })
})

gulp.task('default', ['watch'])
```
