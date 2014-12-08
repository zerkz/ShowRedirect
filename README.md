ShowRedirect
============

Simple node script that sends a request, and reports the redirect without consuming it.


Installation
===========
npm install -g showredirect  

Usage
===========
basic:
showredirect url

Defaults to post.

showredirect amzon.com
>output: http://www.amazon.com

advanced:
showredirect -m PATCH -body woop=wap www.amzon.com
