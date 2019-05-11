---
title: "Deno v0.3.0 Release Review"
date: "2019-02-19"
layout: post
draft: false
path: "/posts/deno-v0.3.0-release"
category: "Deno"
tags: 
  - "Deno"
description: ""  
---

## Add Deno global namespace object 
- PR Link: [#1748](https://github.com/denoland/deno/pull/1748)
- Issue Link: [#1705](https://github.com/denoland/deno/issues/1705)

> deno 모듈을 사용하는 대신 Deno 전역 변수가 추가 되었다.
deno 모듈을 import 해서 사용하는 방식은 가까운 시일에 제거 되므로 코드를 업데이트 해야 한다.

### before
``` typescript
import * as deno from "deno";
const files = await deno.readDir("/");
```

### after
``` typescript
const files = await Deno.readDir("/");
```

## Add window.location 
- PR Link: [#1761](https://github.com/denoland/deno/pull/1761)
- Issue Link: [#1750](https://github.com/denoland/deno/issues/1750)
- Ref Link: [#1189](https://github.com/denoland/deno/issues/1189)
- Discussion Link: [#203](https://github.com/denoland/deno/issues/203)

> window.location 이 추가 되어서 파일을 실행한 위치를 알수 있다.

## Add back typescript version number and add Deno.version object 
- PR Link: [#1788](https://github.com/denoland/deno/pull/1788)

> 이전에 compiler snapshot 분리하면서 주석 처리 되었었는데 이번 PR에서 빌드시에 `typescript.version` 을 넣도록 변경 되었다.

https://github.com/denoland/deno/pull/1566/files#diff-44651f0848c5f82224b908fb7ebd0bc5R31


### before
``` bash
$ deno --version
deno: 0.2.10
v8: 7.2.502.16
```

### after
``` bash
$ deno --version
deno: 0.3.0
v8: 7.4.158
typescript: 3.2.1
```


## Add seek and implement Seeker on File 
- PR Link: [#1797](https://github.com/denoland/deno/pull/1797)
- PR Link: [#1794](https://github.com/denoland/deno/pull/1794)
- Issue Link: [#1304](https://github.com/denoland/deno/issues/1304)
- Ref Link (tokio): [#785](https://github.com/tokio-rs/tokio/pull/785)

> Deno.File 에 Seeker interface가 없어서 추가 하려고 했는데 tokio 쪽 문제로 인해서 작업 마무리 못했던걸 다른 사람이 우회 하는 방법으로 수정이 되었다.

## Add Deno.execPath 
- PR Link: [#1743](https://github.com/denoland/deno/pull/1743)
- Issue Link: [#1723](https://github.com/denoland/deno/issues/1723)

> Deno의 실행 파일의 경로를 얻기 위한 execPath 가 추가 되었다.

### How to use?
REPL 에서 다음과 같이 확인이 가능하다.
``` typescript
Deno.execPath
/Users/sean/GitHub/deno/./target/debug/deno
```

## Fix behavior for extensionless files with .mime file 
- PR Link: [#1779](https://github.com/denoland/deno/pull/1779)
- Issue Link: [#1776](https://github.com/denoland/deno/issues/1776)


## Add env option in Deno.run 
- PR Link: [#1773](https://github.com/denoland/deno/pull/1773)

> Deno.run API를 사용할 때 env를 옵션을 추가 해서 실행 가능하게 되었다.

### How to use?
``` typescript
(async function () {
  const p = Deno.run({
    args: [
      "python",
      "-c",
      "import os, sys; sys.stdout.write(os.environ.get('FOO', '') + os.environ.get('BAR', ''))"
    ],
    env: {
      FOO: "0123",
      BAR: "4567"
    },
    stdout: "piped"
  })
  
  const output = await p.output();
  const s = new TextDecoder().decode(output);
  console.log(s)
  p.close()
})()
```

## Turn on v8_postmortem_support 
- PR Link: [#1758](https://github.com/denoland/deno/pull/1758)

## Upgrade V8 to 7.4.158 
- PR Link: [#1767](https://github.com/denoland/deno/pull/1767)

## Use proper directory for cache files 
- PR Link: [#1763](https://github.com/denoland/deno/pull/1763)
- Issue Link: [#481](https://github.com/denoland/deno/issues/481)

> OS 별로 cache 디렉토리가 다르게 지정 되도록 수정이 있었다.

## REPL multiline support with recoverable errors 
- PR Link: [#1731](https://github.com/denoland/deno/pull/1731)

## Respect NO_COLOR in TypeScript output 
- PR Link: [#1736](https://github.com/denoland/deno/pull/1736)
- Issue Link: [#1730](https://github.com/denoland/deno/issues/1730)

> 이전에 추가 되었던 NO_COLOR 가 TypeScript를 사용하는 경우 적용이 되지 않아서 수정이 있었다.

## Support scoped variables, unblock REPL async op, and REPL error colors 
- PR Link: [#1721](https://github.com/denoland/deno/pull/1721)
- Issue Link: [1159](https://github.com/denoland/deno/issues/1159)
- Issue Link: [1602](https://github.com/denoland/deno/issues/1602)
- Issue Link: [1422](https://github.com/denoland/deno/issues/1422)

> REPL에 기능에 대한 여러가지 수정이 있었다. 