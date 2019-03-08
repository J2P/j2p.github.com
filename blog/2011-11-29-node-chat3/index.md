---
title: "Node.js 이용해서 chat을 만들어보자[3]"
date: "2011-11-29"
layout: post
draft: false
path: "/posts/node-chat3"
category: "Node.js"
tags: 
  - "Node.js"
  - "socket.io"
description: ""  
---

오늘은 닉네임 입력을 하고 로그인을 하고 페이지를 빠져나오게 되면 로그아웃이 되는걸 구현해 볼까 한다.

소스는 다음과 같이 수정을 하면 된다.

```js
var app = require('http').createServer(handler).listen(5023)
, io = require('socket.io').listen(app)
, fs = require('fs')
, nicklist = {};

function handler(req, res){
	fs.readFile(\_\_dirname + '/index.html', function (err, data) {
	if (err) {
		res.writeHead(500);
		return res.end('Error loading index.html');
	}

	res.writeHead(200, { 'Content-Type': 'text/html'});
	res.end(data);
	});
}

io.sockets.on('connection', function (socket) {
	socket.on('join', function(nick){
		nicklist[nick] = socket.nickname = nick;
		socket.broadcast.emit('joinok', nick);
		io.sockets.emit('nicknames', nicklist);
	});

	socket.on('disconnect', function(){
		delete nicklist[socket.nickname];
		socket.broadcast.emit('nicknames',nicklist);
	});
});
```

```html
<!DOCTYPE html>

<html>
<head>
	<meta charset="utf-8">
	<title>JP Chat</title>
	<script src="http://code.jquery.com/jquery-1.7.min.js"></script>
	<script src="/socket.io/socket.io.js"></script>
</head>
<body>
	//기존 소스에서
	<form id="set-nickname">
		<label>NickName : </label><input type="text" id="nick" />
		<button id="join">Join</button>
	</form>
	<div id="nicknames"><ul></ul></div>
	<script>
    	(function($){
			var socket = io.connect('localhost:5023');

    		socket.on('joinok', function(nick){
    			$("ul", "#nicknames").append("<li>"+nick+"</li>");
    		});

    		socket.on('nicknames', function(data) {
    			var nicklist = $("ul", "#nicknames").empty();

    			for (var i in data) {
    				$("ul", "#nicknames").append("<li>"+data[i]+"</li>");
    			}
    		});

    		$("#join").on({
    			click: function() {
    				var nick = $("#nick");
    				if (nick.val() == "") {
    					alert('NickName 을 입력해주세요.');
    					nick.focus();
    					return false;
    				} else {
    					socket.emit('join', nick.val());
    					nick.val("");
    				}
    				return false;
    			}
    		});
    	})(jQuery);
    </script>
</body>
</html>
```

server.js 소스에 보면 on Method 와 emit Method 가 있는데 간단하게 생각하면 된다 on Method 는 받는거고 emit Method 는 보내는 거다 라고 생각하면 된다.

index.html 에서 join 이라는 이벤트를 server 로 요청(emit)을 하게 되면 서버에서는 join 이벤트가 실행이(on) 된다.

인자값으로 넘어온 nick 을 미리 선언된 nicklist 객체에 넣는다. 배열로 하지 않고 객체로 하는 이유는 중복을 막기 위함이다. 배열로 해도 막을 수는 있지만 막으려면 또 과정을 거쳐야 하기 때문에 간단하게 key : value 로 넣어서 같은 닉네임이 있으면 덮어 씌워지는 것이다.

또 socket.nickname 에 추가로 nick 을 넣어줘서 로그아웃 처리를 할때 사용 할 수 있게 미리 담아둔다.

이제 각 client 에게 로그인을 했다는 정보를 보내주는 과정이다. 위에 소스를 보면 두가지 이벤트를 실행하게 된다. joinok 와 nicknames 이렇게 두개를 처리하는 이유는 여러 사람에게 나 로그인 했다~ 라고 보내주는것과 또 하나는 내 화면에 나 로그인 했다~ 라고 뿌려주는 역할을 따로 따로 하기 때문이다.

여기서 broadcast 에 대한 설명은 [@firejune](https://twitter.com/#!/firejune '@firejune')님의 블로그에서 자세한 설명을 볼 수 있다.

[Socket.IO 학습 - 퍼블릭/브로드캐스트/프라이빗 구분](http://firejune.com/1700 'Socket.IO 학습 - 퍼블릭/브로드캐스트/프라이빗 구분')

이제 index.html 에서 joinok 이벤트와 nicknames 이벤트를 보면 joinok 는 기본 닉네임 리스트에 내가 쓴 닉네임을 추가 시켜주고 전체 nicknames 를 가져와서 nicklist 를 다시 그려주게 된다. 전체 닉네임을 갱신한다고 생각하면 될꺼 같다.

로그아웃은 따로 로그아웃 버튼이 있는건 아니고 단지 페이지를 빠져 나가게 되면 로그아웃이라고 생각하면 될꺼 같다. 그래서 server.js 를 보게되면 disconnect 이 일어 났을때 로그인을 했을때 socket.nickname 에 넣었던 닉네임을 nicklist 객체에서 delete 해준다.

그리고 다시 socket.broadcast.emit() 로 전체 client 에게 nicknames 이벤트를 호출해서 로그인 리스트를 갱신하게 된다. 그러면 로그아웃한 회원을 제외한 나머지 사람들 리스트만 보이게 된다. 여기서 왜 자신꺼는 이벤트를 호출을 안하는지 혹시 의문이 들수도 있는데 이건 생각해보면 당연한거다 내껀 페이지를 빠져 나오거나 페이지 자체를 갱신했기때문이다. 이렇게 해서 로그인, 로그아웃 구현을 끝냈다.
