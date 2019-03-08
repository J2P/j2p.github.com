---
title: "Node.js로 크롤링해서 메일로 보내주기"
date: "2014-03-02"
layout: post
draft: false
path: "/posts/node-dot-js-crawling-and-sendmail"
category: "Node.js"
tags: 
  - "Node.js"
description: ""  
---

우리 회사는 교육 부분에 많은 서비스 하고 있다.

Google Play 교육 카테고리 최고 매출 순위를 보는 회사분들이 있는거 같다.

그래서 크롤링해서 메일로 보내주는 스크립트를 node.js 로 한번 만들어 봤다.

크롤링은 jsdom 모듈을 사용하고,
[jsdom](https://github.com/tmpvar/jsdom)

메일 보내기는 nodemailer 를 사용하였다.
[nodemailer](https://github.com/andris9/Nodemailer)

코드는 다음과 같다.

```js
var fs = require('fs')
var jsdom = require('jsdom')
var nodemailer = require('nodemailer')

var smtpTransport = nodemailer.createTransport('SMTP', {
  service: 'Gmail',
  auth: {
    user: '구글 메일 주소',
    pass: '구글 메일 패스워드',
  },
})

function sendMail(mailOptions) {
  smtpTransport.sendMail(mailOptions, function(error, response) {
    if (error) {
      console.log(error)
    } else {
      console.log('Message sent :' + response.message)
    }

    smtpTransport.close()
  })
}

;(function getMailOptions() {
  jsdom.env({
    url:
      'https://play.google.com/store/apps/category/EDUCATION/collection/topgrossing',
    scripts: ['http://code.jquery.com/jquery-2.1.0.min.js'],
    done: function(err, window) {
      var $ = window.jQuery
      var cards = $('.card-list .card')
      var result = '<div style="width: 100%; font-size: 16px;">'
      result +=
        '<h1 style="font-size: 0.875em;">Google Play 최고 매출 - 교육</h1>'
      result +=
        '<ul style="width: 100%; list-style:none; margin: 0 auto; padding: 0; overflow: hidden; position: relative;">'

      $.each(cards, function(i, card) {
        var $card = $(this)
        var cover = $card.find('.cover-image').attr('src')
        var title = $card.find('h2').text()
        var subtitle = $card.find('.subtitle').text()
        var link = $card.find('h2 a').attr('href')

        ++i

        result +=
          '<li style="border: 1px solid #ccc;padding: 0;margin: 5px; width: 15%; text-align: center; float: left; border-radius: 5px;">'
        result +=
          '<h2 style="background: #ccc; margin: 0 0 5% 0; padding: 2% 0; font-size: 0.813em;">' +
          i +
          '위</h2>'
        result +=
          '<img src="' +
          cover +
          '" alt="' +
          title +
          '" style="width: 80%; height: auto;">'
        result +=
          '<p style="word-wrap:break-word; width: 70%; height: 10%; font-size: 0.750em; max-height: 50px; overflow: hidden; margin: 2% auto; 0">'
        result += '<a href="' + link + '">' + title + '</a></p>'
        result +=
          '<p style="word-wrap;break-word; font-size: 0.623em; color: #ccc;">' +
          subtitle +
          '</p>'
      })

      result += '</ul></div>'

      // 파일로 저장해서 미리보기
      fs.writeFile('index.html', result, function(err) {
        if (err) throw err
        console.log("It's saved!")
      })

      // 메일 보내기
      sendMail({
        from: '보내는사람 mail',
        to: '받는사람 mail',
        subject: '제목',
        html: result,
      })
    },
  })
})()
```

html 을 꾸며준답시고 css 를 쑤셔 넣어서 코드가 좀 지저분 하다 ㅋㅋ
