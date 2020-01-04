---
title: "Vue.js img src 데이터 값 넣기"
date: "2018-06-08"
layout: post
draft: false
path: "/posts/vue-img-src"
category: "Vue.js"
tags: 
  - "JavaScript"
  - "Vue.js"
---

## JavaScript 코드

``` javascript
var app = new Vue({
	el: '#app',
	data: {
		episodes: [{
			thumbnail: 'http://thumbnail1.jpg',
			description: 'Episode 1'
		},{
			thumbnail: 'http://thumbnail2.jpg',
			description: 'Episode 2'
		},{
			thumbnail: 'http://thumbnail3.jpg',
			description: 'Episode 3'
		}]
	}
});
```

## HTML 코드
``` html
<div id="app">
	<div v-for="episode in episodes">
		<img src={{ episode.thumbnail }}>
		<p>{{ episode.description }}</p>
	</div>
</div>
```

위와 같이 해줬는데  description은 나오는데 thumbnail이 나오지 않는다 어떻게 해야 하는건가 하고 찾아봤다.

``` html
<!-- 속성을 바인딩 합니다. -->
<img v-bind:src="imageSrc">

<!-- 약어 -->
<img :src="imageSrc">

<!-- with inline string concatenation -->
<img :src="'/path/to/images/' + fileName">
```

위와 같이 하면 된다고 해서 코드를 수정해봤다.

``` html
<div id="app">
	<div v-for="episode in episodes">
		<img :src="episode.thumbnail">
		<p>{{ episode.description }}</p>
	</div>
</div>
```

정상적으로 이미지가 나오는걸 확인했다.

## 참조

- [img src data binding? · Issue #202 · vuejs/Discussion · GitHub](https://github.com/vuejs/Discussion/issues/202)
- [Vue.js](https://kr.vuejs.org/v2/api/#v-bind)