---
title: "iOS input box inner shadow"
date: "2018-11-21"
layout: post
draft: false
path: "/posts/ios-input-box-inner-shadow"
category: "CSS3"
tags: 
  - "CSS"
description: ""  
---

iOS 에서 input box를 보면 안쪽 상단에 shadow 가 있는걸 알게 보게 되었다. 난 넣은 적이 없는데...

찾아보니 iOS 에서 기본적으로 설정되어 있는 테마를 기반으로 넣고 있다고 한다.
다음과 같이 css 에 추가 해주면 기본 설정되어 있는 속성이 삭제 된다.
여러 가지 속성들이 있는거 같은데 지금은 모든 설정을 쓰지 않을거고 input box shadow 를 없애기 위해서 다음과 같이 설정했다.

``` css
input {
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
}
```

## Reference
- [css - Remove iOS input shadow - Stack Overflow](https://stackoverflow.com/questions/23211656/remove-ios-input-shadow)
- [appearance (-moz-appearance, -webkit-appearance) - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/appearance)
