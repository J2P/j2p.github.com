---
title: "Django super user 생성하기"
date: "2013-10-04"
layout: post
draft: false
path: "/posts/django-create-super-user"
category: "Django"
tags: 
  - "Django"
description: ""  
---

Django 를 사용할때 syncdb 를 했을때 super user 가 생성이 안되는 경우나, 혹은 계정을 생성했지만 아이디 패스워드가 생각이 나지 않을때 user 를 확인해서 user 가 없으면 신규로 생성하거나 user 가 있는 경우에 password 를 변경 하는 방법에 대해서 적어 볼까 한다.

## User 확인

```bash
$ ./manage.py shell
>>> from django.contrib.auth.models import User
>>> users = User.objects.all()
>>> users
[<User: j2p>] // user 가 있는 경우
[] // user 가 없는 경우
```

## User 가 있는 경우 password 변경

```bash
$ ./manage.py changepassword userid
Changing password for user 'userid'
Password: // 입력
Password (again): // 다시 입력
Password changed successfully for user 'userid'
```

## User 가 없는 경우 신규 유저 생성

```bash
$ ./manage.py shell
>>> from django.contrib.auth.models import User
>>> u = User.objects.create_user('userid', 'useremail', 'userpassword')
>>> u.is_staff = True
>>> u.is_superuser = True
>>> u.save()
```
