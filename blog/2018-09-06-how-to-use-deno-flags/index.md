---
title: "How to use Deno flags"
date: "2018-09-06"
layout: post
draft: false
path: "/posts/how-to-use-deno-flags"
category: "Deno"
tags: 
  - "Deno"
description: ""  
---

## Deno 기본 사용 방법
```
$ deno script.ts
```

## —allow-write
Allow file system write access.
코드에서 파일을 쓰려면 `--allow-write` 옵션을 사용해야 한다.
```
import { writeFileSync } from "deno";

const encoder = new TextEncoder("utf-8");
const data = encoder.encode("Hello World\n");
writeFileSync("hello.txt", data);
```
위와 같이 file.ts 파일 생성한다.

```
$ deno file.ts
deno.PermissionDenied: allow_write is off.
    at maybeThrowError (deno/js/errors.ts:13:11)
    at Object.writeFileSync (deno/js/os.ts:150:5)
    at ModuleMetaData.eval [as factory ] (file:///Users/j2p/Study/deno-study/scripts/file.ts:5:1)
    at DenoCompiler._drainRunQueue (deno/js/compiler.ts:206:22)
    at DenoCompiler.run (deno/js/compiler.ts:568:10)
    at denoMain (deno/js/main.ts:102:12)
    at deno_main.js:1:1
```
생성한 파일을 터미널에서 실행한다.

```
$ deno --allow-write file.ts
```
`--allow-write` flag를 사용해서 실행하면 정상적으로 파일이 생성된다.

## —allow-net
Allow network access.
이건 아무리 봐도 어떤 용도 인지 모르겠다...

## —allow-env
Allow environment access.
코드에서 env를 사용하고 실행할 때 env 값에 접근이 가능하게 하려면 `--allow-env` 옵션을 사용해야 한다.
```
import { env } from "deno";

const myEnv = env();
console.log(myEnv.SHELL);

```
위와 같이 env.ts 파일을 생성한다.

```
$ deno env.ts
deno.PermissionDenied: allow_env is off.
    at maybeThrowError (deno/js/errors.ts:15:11)
    at send (deno/js/fbs_util.ts:24:5)
    at Object.env (deno/js/os.ts:199:19)
    at ModuleMetaData.eval [as factory ] (file:///Users/j2p/Projects/deno/tests/j2p_test.ts:17:15)
    at DenoCompiler._drainRunQueue (deno/js/compiler.ts:210:22)
    at DenoCompiler.run (deno/js/compiler.ts:569:10)
    at denoMain (deno/js/main.ts:88:12)
    at deno_main.js:1:1
```
생성한 파일을 터미널에서 실행한다.

```
$ deno --allow-env env.ts
/bin/bash
```
`--allow-env` flag를 사용해서 실행하면 정상적으로 env에 접근이 가능하다.

## -v or —version
```
$ deno -v
$ deno --version

deno: 0.1.3
v8: 7.0.247-deno
```

## -r or —reload
Deno는 http imports를 사용하는데 처음에 파일을 다운로드 받으면 `~/.deno/deps/hostname/filename` 안에 파일을 cache 해서 처음에만 다운로드를 받고 다음부터는 cache 되어 있는 파일을 사용한다.

```
import { printHello } from "https://gist.githubusercontent.com/ry/f12b2aa3409e6b52645bc346a9e22929/raw/79318f239f51d764384a8bded8d7c6a833610dde/print_hello.ts";

printHello();
```
위와 같이 url_import.ts 파일을 생성한다.


```
$ deno url_import.ts
Downloading http://localhost:3000/print_hello.ts
Hello
success
```
생성한 파일을 터미널에서 실행한다.

```
$ deno url_import.ts
Hello
success
```
다시 실행하면 다운로드 하지 않고 cache(`~/.deno/deps/hostname/filename`) 되어 있는 파일을 사용한다.

```
$ deno -r url_import.ts
Downloading http://localhost:3000/print_hello.ts
Hello
success
```
원격 가져 오기를 다시 다운로드하거나 캐시에서 파일을 삭제하고 스크립트를 다시 실행하려면 `-r` 또는 `-reload` flag를 사용해야 한다.

## -D or —log-debug

```
$ deno -D url_import.ts
DEBUG JS - cwd /Users/j2p/Study/deno-study
DEBUG JS - argv [ "url_import.ts" ]
DEBUG JS - compiler.run { moduleSpecifier: "url_import.ts", containingFile: "/Users/j2p/Study/deno-study/" }
DEBUG JS - compiler.resolveModule { moduleSpecifier: "url_import.ts", containingFile: "/Users/j2p/Study/deno-study/" }
DEBUG JS - compiler.resolveFileName { moduleSpecifier: "url_import.ts", containingFile: "/Users/j2p/Study/deno-study/" }
DEBUG JS - os.ts codeFetch url_import.ts /Users/j2p/Study/deno-study/
DEBUG RS - resolve_module before module_specifier url_import.ts containing_file /Users/j2p/Study/deno-study/
DEBUG RS - module_name: /Users/j2p/Study/deno-study/url_import.ts, filename: /Users/j2p/Study/deno-study/url_import.ts
DEBUG RS - code_fetch. module_name = /Users/j2p/Study/deno-study/url_import.ts module_specifier = url_import.ts containing_file = /Users/j2p/Study/deno-study/ filename = /Users/j2p/Study/deno-study/url_import.ts
DEBUG RS - load_cache /Users/j2p/.deno/gen/ac7f2dbcc5bb34500186c1c8b50d7e09a5da210f.js
DEBUG JS - resolveModule sourceCode length: 104
DEBUG JS - resolveModule has outputCode: true
DEBUG JS - compiler.setFileName { moduleSpecifier: "url_import.ts", containingFile: "/Users/j2p/Study/deno-study/" }
DEBUG JS - compiler._resolveDependencies /Users/j2p/Study/deno-study/url_import.ts
DEBUG JS - compiler.compile /Users/j2p/Study/deno-study/url_import.ts
DEBUG JS - compiler.localDefine /Users/j2p/Study/deno-study/url_import.ts
DEBUG JS - compiler.resolveModule { moduleSpecifier: "http://localhost:3000/print_hello.ts", containingFile: "/Users/j2p/Study/deno-study/url_import.ts" }
DEBUG JS - compiler.resolveFileName { moduleSpecifier: "http://localhost:3000/print_hello.ts", containingFile: "/Users/j2p/Study/deno-study/url_import.ts" }
DEBUG JS - os.ts codeFetch http://localhost:3000/print_hello.ts /Users/j2p/Study/deno-study/url_import.ts
DEBUG RS - resolve_module before module_specifier http://localhost:3000/print_hello.ts containing_file /Users/j2p/Study/deno-study/url_import.ts
DEBUG RS - module_name: http://localhost:3000/print_hello.ts, filename: /Users/j2p/.deno/deps/localhost/print_hello.ts
DEBUG RS - code_fetch. module_name = http://localhost:3000/print_hello.ts module_specifier = http://localhost:3000/print_hello.ts containing_file = /Users/j2p/Study/deno-study/url_import.ts filename = /Users/j2p/.deno/deps/localhost/print_hello.ts
DEBUG RS - load_cache /Users/j2p/.deno/gen/750a2216711093bd37f9831c35393e540b8c175c.js
DEBUG JS - resolveModule sourceCode length: 62
DEBUG JS - resolveModule has outputCode: true
DEBUG JS - compiler.setFileName { moduleSpecifier: "http://localhost:3000/print_hello.ts", containingFile: "/Users/j2p/Study/deno-study/url_import.ts" }
DEBUG JS - compiler._resolveDependencies /Users/j2p/.deno/deps/localhost/print_hello.ts
DEBUG JS - compiler.compile /Users/j2p/.deno/deps/localhost/print_hello.ts
DEBUG JS - compiler.localDefine /Users/j2p/.deno/deps/localhost/print_hello.ts
DEBUG JS - compiler._drainRunQueue [ "/Users/j2p/.deno/deps/localhost/print_hello.ts", "/Users/j2p/Study/deno-study/url_import.ts" ]
Hello
success
```
`-D` flag를 사용하면 위와 같이 파일이 실행하는 과정을 자세히 볼 수 있다.

## —help

```
$ deno —help
Usage: deno script.ts

--allow-write      Allow file system write access.
--allow-net        Allow network access.
--allow-env        Allow environment access.
-v or --version    Print the version.
-r or --reload     Reload cached remote resources.
-D or --log-debug  Log debug output.
-h or --help       Print this message.
--v8-options       Print V8 command line options.
```
deno 를 실행할 때 사용 가능한 flag 들을 보여준다.

## —v8-options
v8 options 를 보여주는데 너무 길어서...