(function(t){function e(e){for(var r,a,i=e[0],c=e[1],u=e[2],p=0,f=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&f.push(s[a][0]),s[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},s={login:0},o=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;o.push([0,"chunk-vendors","chunk-common"]),n()})({0:function(t,e,n){t.exports=n("9eec")},"0900":function(t,e,n){"use strict";var r=n("b4f2"),s=n.n(r);s.a},"55c8":function(t,e,n){},8999:function(t,e,n){"use strict";var r=n("55c8"),s=n.n(r);s.a},"9eec":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container verticalCenter p-0",staticStyle:{"min-height":"100vh"}},[n("terminal-box",{attrs:{title:"通關密碼"}},[n("p",[t._v("請輸入密碼")]),n("div",{staticClass:"boxContainter mb-5",class:t.responseAnimation},[n("password-box",{staticClass:"dashed",attrs:{text:t.p1}}),n("password-box",{staticClass:"dashed",attrs:{text:t.p2}}),n("password-box",{staticClass:"dashed",attrs:{text:t.p3}}),n("password-box",{staticClass:"dashed",attrs:{text:t.p4}})],1),n("p",[t._v("點擊箭頭輸入密碼")]),n("div",{staticClass:"boxContainter"},[n("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.result+="↑"}}},[n("password-box",{staticClass:"solid hoverAnimate",attrs:{text:"↑"}})],1),n("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.result+="↓"}}},[n("password-box",{staticClass:"solid hoverAnimate",attrs:{text:"↓"}})],1),n("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.result+="←"}}},[n("password-box",{staticClass:"solid hoverAnimate",attrs:{text:"←"}})],1),n("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.result+="→"}}},[n("password-box",{staticClass:"solid hoverAnimate",attrs:{text:"→"}})],1)])])],1)])},o=[],a=n("935c"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"passwordBox"},[t._v(t._s(t.text))])},c=[],u={name:"PassowrdBox",components:{},props:["text"]},l=u,p=(n("8999"),n("2877")),f=Object(p["a"])(l,i,c,!1,null,null,null),d=f.exports,h=(n("77ed"),n("a78e")),v=n.n(h),b={name:"app",components:{TerminalBox:a["a"],PasswordBox:d},mounted:function(){},watch:{result:function(t,e){if(4==t.length){var n=encodeURI(t);if(n==this.correctAnswer)v.a.set("auth",!0),location.href="index.html";else{this.responseAnimation="animated shake";var r=this;setTimeout((function(){r.responseAnimation="",r.result=""}),1200)}}}},computed:{p1:function(){return this.result.charAt(0)},p2:function(){return this.result.charAt(1)},p3:function(){return this.result.charAt(2)},p4:function(){return this.result.charAt(3)}},data:function(){return{result:"",responseAnimation:"",correctAnswer:"%E2%86%91%E2%86%93%E2%86%90%E2%86%92"}}},x=b,m=(n("0900"),Object(p["a"])(x,s,o,!1,null,null,null)),w=m.exports,y=n("5f5b");n("f9e3"),n("2dd8"),n("e7eb");r["default"].use(y["a"]),r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t(w)}}).$mount("#app")},b4f2:function(t,e,n){}});