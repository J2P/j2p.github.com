---
title: "Deno Installation"
date: "2018-09-05"
layout: post
draft: false
path: "/posts/deno-installation"
category: "Deno"
tags: 
  - "Deno"
description: ""  
---

## Clone Deno Project
```
$ git clone --recurse-submodules https://github.com/denoland/deno.git
$ cd deno
```

## Setup
```
$ ./tools/setup.py
```

## Build
```
$ ./tools/build.py
```

## Run
```
$ ./out/debug/deno tests/002_hello.ts
```

## Download Deno Binary 

```
$ curl -sSf https://raw.githubusercontent.com/denoland/deno_install/master/install.py | python
Downloading https://github.com/denoland/deno/releases/download/v0.1.3/deno_osx_x64.gz
DENO_EXE: /Users/j2p/.deno/bin/deno
Now manually add /Users/j2p/.deno/bin to your $PATH
Example:

  echo export PATH="/Users/j2p/.deno/bin":\$PATH >> $HOME/.bash_profile
```