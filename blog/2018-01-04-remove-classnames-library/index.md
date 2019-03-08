---
title: "classnames 라이브러리 제거"
date: "2018-01-04"
layout: post
draft: false
path: "/posts/remove-classnames-library"
category: "React"
tags: 
  - "React"
description: ""  
---

3 년만에 [react-bingo](https://github.com/J2P/react-bingo) 프로젝트를 다시 시작 하면서 코드를 보니 예전에 props 의 값에 따라서 class 를 추가 하고 빼주기 위해서 classnames 를 사용했던 코드들이 있었다. 요즘은 classnames 라이브러리 없이 여러개의 class 를 props, 특정값에 따라서 넣고 뺄 수 있는지 찾아보니 ES6 의 `Template literals` 를 사용해서 가능했다

기존 코드

```js
render() {
  var classes = classNames({
    cell: true,
    selected: this.props.selected
  });

  return (
    <div className={classes} onClick={e => this.props.onClick(this)}>
  )
}
```

ES6 Template literals 로 변경한 코드

```js
render() {
  const selected = this.props.selected ? "selected" : "";

  return (
    <div
      className={`cell ${selected}`}
      onClick={e => this.props.onClick(this)}
    >
  )
}
```
