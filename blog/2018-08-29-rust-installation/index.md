---
title: "Rust Installation"
date: "2018-08-29"
layout: post
draft: false
path: "/posts/rust-installation"
category: "Rust"
tags: 
  - "Rust"
description: ""  
---


요즘 [Deno](https://github.com/denoland/deno)에 관심이 생기면서 코드를 보고 있는데 거기에서 rust를 사용하는걸 알게 되었다. 프로젝트 초기 단계이고 잘하면 프로젝트에 기여 할 수도 있다고 생각해서 rust 문법을 공부해 볼려고 한다.

그래서 가장 기본인 rust 설치부터 해볼까 한다.

## Install

``` bash
$ curl https://sh.rustup.rs -sSf | sh
nfo: downloading installer

Welcome to Rust!

This will download and install the official compiler for the Rust programming
language, and its package manager, Cargo.

It will add the cargo, rustc, rustup and other commands to Cargo's bin
directory, located at:

  /Users/j2p/.cargo/bin

This path will then be added to your PATH environment variable by modifying the
profile files located at:

  /Users/j2p/.profile
  /Users/j2p/.bash_profile

You can uninstall at any time with rustup self uninstall and these changes will
be reverted.

Current installation options:

   default host triple: x86_64-apple-darwin
     default toolchain: stable
  modify PATH variable: yes

1) Proceed with installation (default)
2) Customize installation
3) Cancel installation
>1

info: syncing channel updates for 'stable-x86_64-apple-darwin'
info: latest update on 2018-08-02, rust version 1.28.0 (9634041f0 2018-07-30)
info: downloading component 'rustc'
 57.1 MiB /  57.1 MiB (100 %)  33.2 MiB/s ETA:   0 s
info: downloading component 'rust-std'
 46.8 MiB /  46.8 MiB (100 %)  21.8 MiB/s ETA:   0 s
info: downloading component 'cargo'
info: downloading component 'rust-docs'
info: installing component 'rustc'
info: installing component 'rust-std'
info: installing component 'cargo'
info: installing component 'rust-docs'
info: default toolchain set to 'stable'

  stable installed - rustc 1.28.0 (9634041f0 2018-07-30)


Rust is installed now. Great!

To get started you need Cargo's bin directory ($HOME/.cargo/bin) in your PATH
environment variable. Next time you log in this will be done automatically.

To configure your current shell run source $HOME/.cargo/env
```

위와 같이 rust 설치를 같이 설치가 끝났다.

## Rust version

```
$ rustc --version
rustc 1.28.0 (9634041f0 2018-07-30)
```

터미널에서 위와 같이 명령을 입력하면 rust 버전 확인이 가능하다.

## Enable tab completion for Bash

rustup 명령에 여러가지 기능이 있는데 편리하게 사용하기 위해서 completions를 설치 하면 명령어를 외우지 않아도 tab 키를 눌러서 어떤 명령어가 있는지 확인이 가능하다.


``` bash
# Bash (macOS/Homebrew)
$ rustup completions bash > /usr/local/Cellar/bash-completion/1.3_3/etc/bash_completion.d/rustup.bash-completion
```
rustup completions bash 명령으로 파일 생성


``` bash
$ ln -s /usr/local/Cellar/bash-completion/1.3_3/etc/bash_completion.d/rustup.bash-completion $(brew --prefix)/etc/bash_completion.d/rustup.bash-completion
```
Homebrew를 사용하고 있으므로 다음 경로로 링크를 걸어준다.


``` bash
$ rustup
--help       --version    -h           completions  default      docs         install      override     self         show         telemetry    uninstall    which
--verbose    -V           -v           component    doc          help         man          run          set          target       toolchain    update
```
tab completion 확인

## Rust update

``` bash
$ rustup update
```

Rust는 stable, beta, nightly 세가지 릴리스 채널로 배포 된다고 한다. rustup은 기본 적으로 rust의 최신 릴리스 stable를 사용하고 6주마다 릴리스가 된다고 한다.
위와 같은 명령어로 rust 버전을 update 하면 된다.

## Rust uninstall

``` bash
$ rustup self uninstall
```

Rust를 삭제 하고 싶으면 위와 같은 명령어로 삭제 할 수 있다.