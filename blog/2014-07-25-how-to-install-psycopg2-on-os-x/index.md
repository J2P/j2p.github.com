---
title: "OSX에서 psycopg2 설치하기"
date: "2014-07-25"
layout: post
draft: false
path: "/posts/how-to-install-psycopg2-on-osx"
category: "PostgreSQL"
tags: 
  - "Python"
description: ""  
---

## 문제

djagno 에서 postgresql 을 쓰기 위해서 psycopg2 를 install 하려고 했는데 다음과 같은 에러가 발생했다.

```bash
Error: pg_config executable not found.



Please add the directory containing pg_config to the PATH

or specify the full executable path with the option:



    python setup.py build_ext --pg-config /path/to/pg_config build ...



or with the pg_config option in 'setup.cfg'.

----------------------------------------
Cleaning up...
Command python setup.py egg_info failed with error code 1 in /Users/J2P/.virtualenvs/coupon/build/psycopg2
Storing debug log for failure in /var/folders/m7/mvzr8gc13yb5tk_b2zrqg3l80000gn/T/tmpy7yqQi
```

## 해결방법

고맙게도 참 잘 설명해준다.

먼저 pg_config PATH 설정하고 해봤지만 똑같은 오류가 발생해서 그냥 소스를 다운받아서 설치해보기로 했다.

소스를 다운받고 압축을 푼다.

```bash
$ wget http://initd.org/psycopg/tarballs/PSYCOPG-2-5/psycopg2-2.5.3.tar.gz
$ tar xzf psycopg2-2.5.3.tar.gz
```

압축이 풀린 디렉토리로 이동해서 build, install 을 한다.

pg_config 옵션을 주고 자신의 postgresql 설치되어 있는 곳에 bin/pg_config 파일의 path 를 넣어서 build, install 하면 된다.

나같은 경우엔 brew 로 postgresql 을 설치해서 "/usr/local/Cellar/postgresql/9.3.4/bin/pg_config" path 를 넣어주면 됐다.

```bash
$ cd psycopg2-2.5.3
$ python setup.py build_ext --pg-config /path/to/pg_config build
$ python setup.py build_ext --pg-config /path/to/pg_config install
```
