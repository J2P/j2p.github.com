---
title: "Django 모델의 관계 시각화 하기"
date: "2018-06-08"
layout: post
draft: false
path: "/posts/django-model-graph"
category: "Django"
tags: 
  - "Django"
description: ""  
---

회사에 django 프로젝트가 있는 모델이 한눈에 들어오질 않아서 이전 회사에서 누군가 모델을 그래프 이미지로 만들어서 확인하던게 생각났다. 그래서 어떻게 하는지 방법을 찾아봤다.

## 설치
```
$ pip install django-extensions
```

또는 
requirements-dev.txt 파일에 추가해준다.
```
django-extendsions
```

## 설정

settings.py 파일에 추가해준다.
```
INSTALLED_APPS = (
	'django_extensions',
)
```

## 실행
```
$ ./manage.py graph_models -a -o myapp_models.png
```

## 문제
```
CommandError: Neither pygraphviz nor pydotplus could be found to generate the image
```

이미지를 만들기 위해서 graph_models 를 실행했지만 위와 같은 에러가 발생했다. 검색 해보니 라이브러리를 설치해야 한다고 한다.
```
$ pip install python-pygraphviz
Collecting python-pygraphviz
  Could not find a version that satisfies the requirement python-pygraphviz (from versions: )
No matching distribution found for python-pygraphviz
```

오잉 이번에 또 다른 문제 아마도 위 라이브러리가 바뀐건지 없어진건지... 검색해보니 다른걸 설치 하라고 나온다.

```
$ pip install pygraphviz
```

그래서 설치 완료 이제 `graph_models` 명령을 실행해보면 정상적으로 모델을 이미지로 만들어준다.

## 참조
[Graph models — django-extensions 2.0.7 documentation](https://django-extensions.readthedocs.io/en/latest/graph_models.html)