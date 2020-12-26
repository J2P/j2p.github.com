---
title: "cocos2d-x 세로 모드"
date: "2015-04-24"
layout: post
draft: false
path: "/posts/cocos2d-x-portrait-mode"
category: "dev"
tags: 
  - "cocos2d-x"
description: ""  
---

xcode 를 열어서 ios 디렉토리 안에 `RootViewController.mm` 파일을 열어서 아래 부분을 수정한다.

```objc
// 이부분을
- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation {
    return UIInterfaceOrientationIsLandscape( interfaceOrientation );
}

// 이렇게 수정
- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation {
    return UIInterfaceOrientationIsPortrait( interfaceOrientation );
}
```

자동회전없이 항상 세로화면으로 설정하고 싶으면 아래 부분도 수정한다.

```objc
// 이부분을
- (BOOL) shouldAutorotate {
    return YES;
}

// 이렇게 수정
- (BOOL) shouldAutorotate {
    return NO;
}
```
