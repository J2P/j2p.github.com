---
title: "Web Editor beforeunload event 적용하기"
date: "2012-04-05"
layout: post
draft: false
path: "/posts/beforeunload-event"
category: "JavaScript"
tags: 
  - "JavaScript"
description: ""  
---

현재 개발 하고 있는 사이트에서는 Tinymce Editor 를 사용하고 있는데 plugin 으로 Editor 을 사용중에 back space 를 누르거나 다른 페이지로 이동으로 하려고 할때 다음과 같은 modal 창이 뜬다.

![modal](./beforeunload_modal.png)

실수로 인해서 작성했던 내용을 잊어버리지 않기 위한 방한이다. 물론 자동저장 같은 기능을 지원하면 문제가 되지는 않겠지만 현재는 자동저장을 지원하고 있지 않기 때문에 문제가 됐던것이다.
facebook 등 다른 웹사이트에서도 저런 창을 띄워서 확인 하는걸 알수 있다.

이번 문제는 Tinymce Editor 을 사용하지 않는 곳에서 발생했다. 사용자는 실수로 인해서 back space 를 눌렀고 작성했던 장문의 글을 날렸던것이다.

처음에는 unload event 로 하면 될꺼라 생각했지만 아니 였다. 검색을 해봤더니 beforeunload 라는 event 가 있는것을 알게 되었다.

아래 예제소스를 보면서 사용방법을 알아보자.

```html
<html>
	<head>
		<script>
			if (document.addEventListener) {
				window.addEventListener('beforeunload', function() {
					return "다른 페이지로 이동하면 편집한 내용이 취소됩니다.";
				}, false);
			// IE
			} else {
				window.attachEvent('onbeforeunload', function(event) {
					if (event) {
						event.returnValue = "다른 페이지로 이동하면 편집한 내용이 취소됩니다.";
					}
				});
			}
		</script>
	</head>
	<body>
		<textarea id="editor"></textarea>
	</body>
</html>
```

위와 같이 onbeforeunload 를 써서 return 값에 moal 창에 보여주고자 하는 문구를 입력하면 된다.

* IE9 이하 버전에서는 event 객체를 받아서 returnValue 에 문구를 넣어주면 된다.

경우에 따라서 editor 에 값이 있을경우에만 보여주고 싶다면 다음과 같이 수정하면 된다.
값을 확인해서 value 가 있을경우에만 return 을 해주면 된다.
그리고 한가지 문제가 더 있었던건 저장을 할려고 할때 submit 을 하게 되면 저 이벤트가 발생을 하게 된다. 그래서 나는 submit 을 하기전에 event 를 삭제해서 해결했다.

## 참고

* [MDN window.onbeforeunload](https://developer.mozilla.org/en/DOM/window.onbeforeunload 'MDN window.onbeforeunload')
* [MSDN onbeforeunload event](http://msdn.microsoft.com/en-us/library/ms536907.aspx 'MSDN onbeforeunload event')
