---
title: "WYSIWYG Editor 만들기"
date: "2011-12-02"
layout: post
draft: false
path: "/posts/wysiwyg-editor"
category: "JavaScript"
tags: 
  - "JavaScript"
description: ""  
---

회사에서 작업하다가 bold, italic, underline 기능만 필요한 WYSIWYG 가 필요해서 어떻게 해야 할지 앞이 캄캄해서 그냥 오픈 소스를 써야 하나 했는데 역시 구글신이 간단한 방법을 알려줬다.

contenteditable 사용해서 엘리먼트에 바로 편집이 가능하게 된다. 요것은 HTML5 에 표준이 된거라고 하는데 브라우저 지원 여부를 확인해보니 거의 모든 브라우져에서 지원을 하고 있다.
이전에는 WYSIWYG Editor 을 만들기 위해서 iframe 과 designMode="on" 으로 사용했다고 한다.

브라우저 지원 여부에 대해서 알아보면 다음과 같다.

![contenteditable](./contenteditable.png)

사용방법은 아주아주 간단하다. 소스로 보면 다음과 같다.

```html
<div contenteditable="true"></div>
<input type="button" onclick="document.execCommand('bold', null, false);" value="B" />
<input type="button" onclick="document.execCommand('italic', null, false);" value="I" />
<input type="button" onclick="document.execCommand('underline', null, false);" value="U">
```

위 소스와 같이 div 엘리먼트에 contenteditable attribute 값만 주면 편집이 가능하게 되고 버튼 3 개로 입력한 Text 에 바로 blod, italic, underline 효과를 줄수 있다.

그 외에 다른 execCommand 에 대한 정보는 아래 링크에서 확인 할 수 있다.

* [execCommand compatibility](http://www.quirksmode.org/dom/execCommand.html 'execCommand compatibility')

* [Command Identifiers](http://msdn.microsoft.com/en-us/library/ms533049.aspx 'Command Identifiers')
