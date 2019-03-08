---
title: "Python list에서 중복값 제거하기"
date: "2014-06-02"
layout: post
draft: false
path: "/posts/remove-duplication-from-python-list"
category: "Python"
tags: 
  - "Python"
description: ""  
---

프론트 단에서 중복된 데이터를 삭제해서 사용하다가백엔드에서 처리하고 데이터를 넘겨주는 방식이 더 좋다고 생각해서 Python 으로 list 에서 중복을 제거 하는 방법을 찾아봤다.

코드는 다음과 같다.

```python
>>> arr = ['a', 'b', 'c', 'a', 'a', 'b', 'f', 'g', 'c']
>>> set_arr = set(tickets)

>>> print set_arr
>>> set(['a', 'c', 'b', 'g', 'f'])

>>> print list(set_arr)
['a', 'c', 'b', 'g', 'f']
```

위에서 set 함수가 몬가 하고 알아보니.

순서하고 상관없는 컬렉션(unorderd collection) 이고 집합이기 때문에 중복된 값을 넣을 수 없다는 것을 알게 되었다.

이렇게 중복을 제거 한 다음 다시 list 함수로 감싸주면 배열에서 중복된 값이 제거된 list 를 얻을 수 있다.
