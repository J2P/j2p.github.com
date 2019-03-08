---
title: "Elasticsearch 설치하기"
date: "2014-09-22"
layout: post
draft: false
path: "/posts/install-elasticsearch"
category: "Elasticsearch"
tags: 
  - "Elasticsearch"
description: ""  
---

## 설치

### source 설치

```bash
$ curl -L -O http://download.elasticsearch.org/PATH/TO/VERSION.zip
$ unzip elasticsearch-$VERSION.zip
$ cd elasticsearch-$VERSION
```

### 실행

```bash
$ ./bin/elasticsearch
[2014-09-22 23:11:58,615][INFO ][node                     ] [Bevatron] version[1.3.2], pid[62710], build[dee175d/2014-08-13T14:29:30Z]
[2014-09-22 23:11:58,616][INFO ][node                     ] [Bevatron] initializing ...
[2014-09-22 23:11:58,631][INFO ][plugins                  ] [Bevatron] loaded [marvel], sites [marvel, bigdesk, head]
[2014-09-22 23:12:01,453][INFO ][node                     ] [Bevatron] initialized
[2014-09-22 23:12:01,453][INFO ][node                     ] [Bevatron] starting ...
[2014-09-22 23:12:01,577][INFO ][transport                ] [Bevatron] bound_address {inet[/127.0.0.1:9300]}, publish_address {inet[/127.0.0.1:9300]}
[2014-09-22 23:12:01,613][INFO ][discovery                ] [Bevatron] elasticsearch_J2P/fhrTURb8SSywjSVwOj3H8g
[2014-09-22 23:12:04,631][INFO ][cluster.service          ] [Bevatron] new_master [Bevatron][fhrTURb8SSywjSVwOj3H8g][Jung-ui-MacBook-Pro.local][inet[/127.0.0.1:9300]], reason: zen-disco-join (elected_as_master)
[2014-09-22 23:12:04,663][INFO ][http                     ] [Bevatron] bound_address {inet[/127.0.0.1:9200]}, publish_address {inet[/127.0.0.1:9200]}
[2014-09-22 23:12:04,663][INFO ][node                     ] [Bevatron] started
[2014-09-22 23:12:05,312][INFO ][gateway                  ] [Bevatron] recovered [3] indices into cluster_state
```

elasticsearch 압축을푼 디렉토리 안에 bin 디렉토리에 있는 elasticsearch 파일을 실행한다.

### OSX brew install

```bash
$ brew update
$ brew install elasticsearch
Data:    /usr/local/var/elasticsearch/elasticsearch_J2P/
Logs:    /usr/local/var/log/elasticsearch/elasticsearch_J2P.log
Plugins: /usr/local/var/lib/elasticsearch/plugins/

To have launchd start elasticsearch at login:
    ln -sfv /usr/local/opt/elasticsearch/*.plist ~/Library/LaunchAgents
Then to load elasticsearch now:
    launchctl load ~/Library/LaunchAgents/homebrew.mxcl.elasticsearch.plist
Or, if you don't want/need launchctl, you can just run:
    elasticsearch --config=/usr/local/opt/elasticsearch/config/elasticsearch.yml
```

### 실행

```bash
$ ln -sfv /usr/local/opt/elasticsearch/*.plist ~/Library/LaunchAgents
$ launchctl load ~/Library/LaunchAgents/homebrew.mxcl.elasticsearch.plist
```

링크를 걸어주고 launchctl 로 실행한다.

## Testing

```bash
$ curl 'http://localhost:9200/?pretty'
```

위와 같이 curl 로 request 를 날리면 다음과 같은 결과를 볼수 있다.

```js
{
  "status" : 200,
  "name" : "Bevatron",
  "version" : {
    "number" : "1.3.2",
    "build_hash" : "dee175dbe2f254f3f26992f5d7591939aaefd12f",
    "build_timestamp" : "2014-08-13T14:29:30Z",
    "build_snapshot" : false,
    "lucene_version" : "4.9"
  },
  "tagline" : "You Know, for Search"
}
```
