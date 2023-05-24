// ==UserScript==
// @name         净化吧 CSDN
// @version      0.1
// @icon         https://blog.csdn.net/favicon.ico
// @description  CSDN 免登录复制，净化页面
// @namespace    https://github.com/maqi1520
// @match        *://*.csdn.net/*
// @license      MIT
// @grant        GM_registerMenuCommand
// @grant        GM_openInTab
// @grant        GM_addStyle
// ==/UserScript==

(function () {
    'use strict';

   window.onload=function() {
       csdn=null
   }
    GM_addStyle(
`pre,
code {
  user-select: auto !important;
}
#blogExtensionBox,
.hide-article-box,
.insert-baidu-box,
.signin,
.wwads-horizontal,
.wwads-vertical,
.blog-top-banner,
.blog_container_aside,
.programmer1Box,
.recommend-box,
.recommend-nps-box,
.template-box,
.hide-preCode-box {
  display: none !important;
}
main {
  width: 100% !important;
}
#article_content,
main div.blog-content-box pre.set-code-hide {
  height: auto !important;
}
.blog-content-box {
  width: 920px;
  margin: 0 auto;
}
.more-toolbox-new,#csdn-toolbar,.recommend-right {
  display: none !important;
}
.passport-login-container {
  display: none !important;
}
#copyright-box {
  display: none !important;
}
`);
})();
