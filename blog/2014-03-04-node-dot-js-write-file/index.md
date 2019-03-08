---
title: "Node.js로 html파일 indent 적용해서 파일 생성하기"
date: "2014-03-04"
layout: post
draft: false
path: "/posts/node-dot-js-write-file"
category: "Node.js"
tags: 
  - "Node.js"
description: ""  
---

간단하게 파일을 쓰려고 할때 다음과 같이 사용하면 된다.

```js
fs.writeFile('파일명', '내용', function(err) {
  if (err) throw err
  console.log("It's saved!")
})
```

근데 html 파일을 작성할때 내용을 자동으로 indent 해주는 모듈은 없을라나... 했는데

[htmltidy](https://github.com/vavere/htmltidy)

요런게 있구나~

```js
var tidy = require('htmltidy').tidy;
var opts = {
	doctype: 'html5',
    indent: true
};
tidy('<ul><li>1</li><li>2</li><li>3</li></ul>, opts, function(err, html) {
	if (err) throw err;
	fs.writeFile('index.html', html, function (err) {
		if (err) throw err;
		console.log('It\'s saved!');
	});
});
```

요렇게 해주면 index.html 파일에 이쁘게 indent 가 적용되서 저장된다~ 좋은데?!
