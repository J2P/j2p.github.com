---
title: "justify-content property"
date: "2018-11-04"
layout: post
draft: false
path: "/posts/flex-justify-content"
category: "CSS3"
tags: 
  - "CSS"
description: ""  
---

## justify-content
flex blox를 사용했을 때 자식 요소의 정렬을 정해주는 설정이다.

## Values
* `flex-start` 자식 요소들이 앞쪽 기준으로 나열된다. (default)
* `flex-end` 자식 요소들이 뒤쪽을 기준으로 나열 된다.
* `center`  자식 요소들이 가운데 기준으로 나열 된다.
* `space-around` 자식 요소들의 앞과 뒤 그리고 사이 사이에 공간을 두고 나열 된다.
* `space-between` 자식 요소들의 사이 사이에 공간을 두고 나열 된다.
* `space-evenly` 모든 자식 요소들의 사이 사이 똑같은 크기만큼 공간을 두고 나열 된다.

## Example
``` html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>flex-direction example</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div class="container">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </div>
</body>
</html>
```

``` css
.container {
  border: 5px solid#4f8ad9;
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: row;
  /* row | column */
  justify-content: flex-start;
  /* flex-start flex-end center space-around space-between space-evenly */
}

.container div {
  background: #fffa93;
  border: 3px solid #ff547d;
  width: 50px;
  height: 50px;
  text-align: center;
}
```


``` css
justify-content: flex-start;
```

![screenshot1](./1.png)

``` css
justify-content: flex-end;
```

![screenshot2](./2.png)

``` css
justify-content: center;
```

![screenshot3](./3.png)

``` css
justify-content: space-around;
```

![screenshot4](./4.png)

``` css
justify-content: space-between;
```

![screenshot5](./5.png)

``` css
justify-content: space-evenly;
```

![screenshot6](./6.png)

## Use the flex-direction attribute value as a column.
``` css
flex-direction: column;
justify-content: flex-start;
```

![screenshot1-1](./1-1.png)


``` css
flex-direction: column;
justify-content: flex-end;
```

![screenshot1-2](./1-2.png)


``` css
flex-direction: column;
justify-content: center;
```

![screenshot1-3](./1-3.png)

``` css
flex-direction: column;
justify-content: space-around;
```

![screenshot1-4](./1-4.png)

``` css
flex-direction: column;
justify-content: space-between;
```

![screenshot1-5](./1-5.png)

``` css
flex-direction: column;
justify-content: space-evenly;
```

![screenshot1-6](./1-6.png)
