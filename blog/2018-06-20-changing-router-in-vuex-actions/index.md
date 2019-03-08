---
title: "Vuex actions 안에서 router 변경하기"
date: "2018-06-20"
layout: post
draft: false
path: "/posts/changing-router-in-vuex-actions"
category: "Vue.js"
tags: 
  - "JavaScript"
  - "Vue.js"
  - "Vuex"
description: ""  
---


Vuex actions 에서 비동기로 로그인 처리를 하고 promise 를 reture 해주는 방식으로 코드를 작성했었다.

이유는 로그인 처리가 끝나고 페이지를 이동해주기 위해서였다.

또 Vue methods 함수안에서 처리하고 있어서 mapActions를 쓰지 못하는게 싫었고... 
코드를 좀 더 보기 좋게 하기 위해서 Vuex actions로 router 이동하는 코드를 옮기고 싶었다.

router actions에서 router 코드를 접근하는 방법은 그냥 router를 import 해서 사용하면 되는 것이였다...

## Login.vue 기존 코드
``` js
export default {
...
methods: {
	onSubmit() {
		const username = this.username;
		const password = this.password;
		this.$store.dispatch('login', { username, password })
			.then(() => {
				this.$router.push({ name: 'home' });
			});
	}
}
...
}
```

## Login store actions 기존 코드
``` js
const actions = {
	login({ commit }, { username, password }) {
		return api.login(username, password)
			.then((data) => commit('login', data.data);
	}
}
```

## Login.vue 변경된 코드

``` js
import { mapActions } from 'vuex';

export default {
...
methods: {
  ...mapActions([
    'login'
  ])
}
...
}
```

## Login store actions 변경된 코드
이렇게 하기 위해서 username, password를 Vuex state로 옮겼다.

``` js
import router from '../router';

const actions = {
	login({ commit, state }) {
		api.login(state.username, state,password)
			.then((data) => commit('login', data.data)
			.then(() => router.push({ name: 'home' });
	}
}
```
