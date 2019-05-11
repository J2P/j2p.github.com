---
title: "Deno v0.3.2 Release Review"
date: "2019-03-10"
layout: post
draft: false
path: "/posts/deno-v0.3.2-release"
category: "Deno"
tags: 
  - "Deno"
description: ""  
---

## 변경 된 내용

v0.3.2 부터는 deno_std 내용도 추가 되었다.

* Reorganize version and platform into Deno.build and Deno.version (#1879)
* Allow inspection and revocation of permissions (#1875)
* Fix unicode output on Windows (#1876)
* Add Deno.build.gnArgs (#1845)
* Fix security bug #1858 (#1864, #1874)
* Replace deno.land/x/std links with deno.land/std/ (#1890)

## Deno.build, Deno.version 으로 Deno.platform에 있던 내용들이 

