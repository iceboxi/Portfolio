(function(e){function t(t){for(var r,i,u=t[0],l=t[1],c=t[2],f=0,s=[];f<u.length;f++)i=u[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&s.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);p&&p(t);while(s.length)s.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var l=n[u];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={teamgoal:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var p=l;a.push([2,"chunk-vendors","chunk-common"]),n()})({2:function(e,t,n){e.exports=n("5fa5")},"5fa5":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("work-layout",e._b({},"work-layout",e.info,!1))],1)},a=[],i=n("7a86"),u={name:"app",components:{WorkLayout:i["a"]},data:function(){return{info:{name:"Qちゃん",subTitle:"猫の鳴き声",icon:n("cfa7"),description:"\n        猫飼っています。男の子ですが、名前は「Qちゃん」です。<br>\n        猫の鳴き声を真似してもいつも一切無視していました。たまにYoutubeで猫動画を見ているところ、すごく反応していました。\n        もしかして人間の音域と猫のが全然違うかなと思って、じゃアプリで猫の鳴き声を出せば反応してくれるんよねと軽い気持ちでアプリを作りました。<br>\n        遊び心満載のアプリです！ UIBezierPathとCALayerどこまで表現できるのかの挑戦です。\n        ",copyright:"2018 Copyright ShenWen Yang",appStoreURL:"https://itunes.apple.com/jp/app/q%E3%81%A1%E3%82%83%E3%82%93/id1130228883?mt=8",previous:"note.html",next:"cafe.html",previews:[{video:n("d8b8"),title:"2Dで3Dを表現",description:"UIBezierPathで各パーツを描画して、CAAnimationでPathとTransformを変化して、表情と3D効果を再現する"}],screenshots:[{thumbnail:n("c3e1"),raw:n("c3e1")},{thumbnail:n("fc23"),raw:n("fc23")},{thumbnail:n("c1ee"),raw:n("c1ee")},{thumbnail:n("031d"),raw:n("031d")},{thumbnail:n("86b9"),raw:n("86b9")}],details:[{title:"種類",tags:["個人開発"]},{title:"担当",tags:["企画","要件定義","設計デザイン","開発"]},{title:"Language",tags:["Swift"]},{title:"Device",tags:["iPhone","iPad"]},{title:"Technology",tags:["AVFoundation","Fabric"]},{title:"Localization",tags:["日本語","英語","中国語"]}]}}}},l=u,c=n("2877"),p=Object(c["a"])(l,o,a,!1,null,null,null),f=p.exports,s=n("5f5b"),d=n("a78e"),h=n.n(d);n("f9e3"),n("2dd8"),n("e7eb");r["default"].use(s["a"]),r["default"].config.productionTip=!1,"true"===h.a.get("auth")?new r["default"]({render:function(e){return e(f)}}).$mount("#app"):location.href="login.html"}});