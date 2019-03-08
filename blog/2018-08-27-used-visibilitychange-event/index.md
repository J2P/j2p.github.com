---
title: "Visibilitychange 이벤트 사용하기"
date: "2018-08-27"
layout: post
draft: false
path: "/posts/used-visibilitychange-event"
category: "JavaScript"
tags: 
  - "JavaScript"
description: ""  
---


회사에서 동영상 서비스를 하고 있는데 안드로이드 디바이스 파이어폭스를 사용하는 유저가 브라우저를 내려도 동영상 재생이 계속 되어서 소리가 들리는 문제가 있었다.

간단하게 window blur 이벤트가 발생하거나 window focusout 이벤트가 발생하면 동영상을 멈추면 된다고 생각했다. 혹시나 하는 마음에 새로운 탭을 열어 봤더니... 똑같은 문제가 발생하고 있었다.

그래서 이래 저래 검색을 하다가  `visibilitychange` 이벤트를 알게 되었다.
설명을 보니 다음과 같았다.

> Page Visibility API 는 웹페이지가 visible 또는 focus 상태인지 알도록 해준다.

## Code

``` js
function getHiddenValue() {
	if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support 
		return "hidden";
	} else if (typeof document.msHidden !== "undefined") {
		return "msHidden";
	} else if (typeof document.webkitHidden !== "undefined") {
		return "webkitHidden";
	}
}

function getVisibilityValue() {
	if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support 
		return "visibilitychange";
	} else if (typeof document.msHidden !== "undefined") {
		return "msvisibilitychange";
	} else if (typeof document.webkitHidden !== "undefined") {
		return "webkitvisibilitychange";
	}
}

function handleVisibilityChange() {
	var videoElement = document.getElementById("videoElement");

	if (document[getHiddenValue()]) {
    videoElement.pause();
  }
}
 
document.addEventListener(getVisibilityValue(), handleVisibilityChange, false);
```

위와 같이 코드를 작성해서 브라우저를 내리거나 다른 탭으로 이동하면 동영상을 멈출수 있게 되었다.

## Reference
* [Page Visibility API - Web API 참조 문서 | MDN](https://developer.mozilla.org/ko/docs/Web/API/Page_Visibility_API)
* [javascript - visibilitychange event is not triggered when switching program/window with ALT+TAB or clicking in taskbar - Stack Overflow](https://stackoverflow.com/questions/28993157/visibilitychange-event-is-not-triggered-when-switching-program-window-with-altt)
* [javascript - Event for when user switches browser tabs - Stack Overflow](https://stackoverflow.com/questions/1038643/event-for-when-user-switches-browser-tabs)