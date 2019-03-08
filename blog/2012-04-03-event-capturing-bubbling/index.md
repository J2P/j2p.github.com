---
title: "Event Capturing Bubbling"
date: "2012-04-03"
layout: post
draft: false
path: "/posts/event-capturing-bubbling"
category: "JavaScript"
tags: 
  - "JavaScript"
description: ""  
---

스터디를 진행하면서 다시 한번 알게 된것이 있어서 정리를 해볼까 한다.

보통 JavaScript 에서 click, over 등등... 이벤트가 발생하게 되면 target(예를들어 click 한 element) 에서만 이벤트가 실행 된다고 생각하고 있을것이다.

하지만 실질적으로 브라우저에서는 이벤트가 발생하게 되면 capturing 과 bubbling 이 모두 발생하게 된다.

## Capturing

capturing 은 이벤트가 발생한 target 이 있으면 최상위 부모에서 부터 이벤트가 실행되면서 target 까지 내려오는 것을 말한다. 예를 들어 부모에도 click 이벤트가 걸려 있었다면 부모에서 부터 click 이벤트가 모두 실행이 되면서 target 까지 내려오게 된다.

## Bubbling

bubbling 은 capturing 이 발생해서 target 까지 내려온 후에 다시 target 에서 부터 최상위 부모까지 올라가면서 이벤트가 실행이 된다. capturing 에서 이벤트가 실행이 되었다면 bubbing 이벤트는 실행 되지 않는다.

아래 예제 소스를 통해서 눈으로 확인해 보자.

```html
<!DOCTYPE html>
<html>
	<head>
		<style>
			div, p{
				border: 2px solid #ccc;
				padding: 20px;
			}
			#div_content{
				width: 400px;
				height: 200px;
			}

    		#p_content{
    			width: 200px;
    			height: 100px;
    		}
    	</style>
    </head>
    <body>
    	<div id="div_content">
    		<p id="p_content">
    			<a href="http://blog.j2p.kr" target="_blank" id="a_link">j2p</a>
    		</p>
    	</div>
    	<script src="event.js"></script>
    </body>

</html>
```

```js
(function() {
    var div = document.getElementById('div_content');
    var p = document.getElementById('p_content');
    var a = document.getElementById('a_link');

    function divEvent() {
        console.log('DIV EVENT');
    }

    function pEvent() {
        console.log('P EVENT');
    }

    function aEvent(event) {
        //bubbling 을 막을때 사용
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
        //IE9 이하 버전
            event.cancelBubble = true;
        }

        //기본 a Tag 링크 이동 막을때 사용
        if (event.preventDefault) {
            event.preventDefault();
        } else {
        //IE
            event.returnValue = false;
        }

        console.log('A EVENT');
    }

    //capturing 을 설정해준다. (true, false)
    if (document.addEventListener) {
        div.addEventListener('click', divEvent, true);
        p.addEventListener('click', pEvent, true);
        a.addEventListener('click', aEvent, true);
    } else {
        div.attachEvent('onclick', divEvent);
        p.attachEvent('onclick', pEvent);
        a.attachEvent('onclick', aEvent);
    }
})();​
```

먼저 capturing 은 이벤트를 걸어줄때 설정할수 있다. addEventListener 에서 마지막 세번째 인자가 capturing 설정하는 값이다.
true 값을 주게 되면 capturing 이 발생하고 false 값을 주게 되면 capturing 은 발생하지 않고 bubbling 만 발생하게 된다.

* IE9 이하 버전에서는 capturing 을 지원하지 않는다.

다음 bubbling 은 capturing 이 발생해서 target 까지 도달한 후에 발생하게 된다. bubbling 을 발생하지 않게 하기 위해서는 이벤트에 걸려 있는 함수에서 event 객체를 받아서 event.stopPropagation() 을 해주면 bubbling 이 일어나지 않게 해줄수 있다.

* IE9 이하 버전에서는 event.cancelBubble = true 값을 주면 bubbling 을 발생하지 않게 할수 있다.

한가지 추가로 얘기 하면 a tag 같은경우 기본적 링크 이동 이벤트가 있다. 이것을 발생하지 않게 하기 위해서는 event 객체에서 event.preventDefault() 를 실행해주면 a tag 의 기본 링크 이동을 막을수 있다.

* IE 경우는 event.returnValue = false 값을 주면 기본 이벤트 동작을 막을수 있다. 혹은 return false 를 해줘도 된다.

## 참고

[MSDN Event Propagation](http://samples.msdn.microsoft.com/workshop/samples/author/dhtml/refs/ie9_event_phases.htm 'Event Propagation')
