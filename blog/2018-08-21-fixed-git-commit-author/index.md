---
title: "Fixed git commit author"
date: "2018-08-21"
layout: post
draft: false
path: "/posts/fixed-git-commit-author"
category: "Git"
tags: 
  - "Git"
description: ""  
---

git log로 수정할 commit 확인하기

``` bash
$ git log

commit 26506c66e0e3286de3da6e58ef50ae661e98a811 (HEAD -> master, origin/master)
Author: GH Pages Bot <hello@ghbot.com>
Date:   Tue Aug 14 13:15:21 2018 +0900

    Add eslint rules

commit f2089d1141724e14581bf17cdfa5cd686e5fa381
Author: GH Pages Bot <hello@ghbot.com>
Date:   Tue Aug 14 12:54:00 2018 +0900

    Add viewport addon

commit 4fe7e6294792f2e2e84fe70edb0c800eccb81982
Author: GH Pages Bot <hello@ghbot.com>
Date:   Tue Aug 14 12:53:44 2018 +0900

    Add logo component

commit ac69441c4056e384a5412cd754a5d81cc56d4bb8
Author: GH Pages Bot <hello@ghbot.com>
Date:   Tue Aug 14 11:26:46 2018 +0900

    Update README

commit 3ac7fae32145b78134f5b6b48c8535ce006de735
Author: GH Pages Bot <hello@ghbot.com>
Date:   Tue Aug 14 11:04:38 2018 +0900

    Deploy Storybook to GitHub Pages

commit fd1f1f03ad49182589c09cdcf2ebc752678e60fa
Author: J2P <jjp5023@gmail.com>
Date:   Tue Aug 14 10:25:51 2018 +0900

    Init project
```

## rebase 시작하기
``` bash
$ git rebase -i HEAD~5
```

## rebase 하기
``` bash
pick 3c9e90f Deploy Storybook to GitHub Pages
pick 0c916cc Update README
pick f183cb5 Add logo component
pick 790260b Add viewport addon
pick 7680575 Add eslint rules
```

vi edior가 시작 되면서 
위와 같이 나오면 `pick` -> `edit`로 변경한다.
저장하고 나온다.

## commit amend 하기
``` bash
$ 
Stopped at 3ac7fae...  Deploy Storybook to GitHub Pages
You can amend the commit now, with

  git commit --amend

Once you are satisfied with your changes, run

  git rebase --continue
```

위와 같은 메시지가 보이면 다음과 같이 입력해준다.

``` bash
$ git commit --amend --author="J2P <jjp5023@gmail.com>" --no-edit
```

author에 자신이 변경하고자 하는 author 정보를 넣어주면 된다.

## 다음 commit 으로 넘어가기
``` bash
$ git rebase --continue
```

위와 같은 명령으로 다음 commit 으로 넘어간다. 

이제 계속 `commit --amend` 와 `rebase —continue` 로 계속 진행하면 5개의 commit을 변경할 수 있다.
