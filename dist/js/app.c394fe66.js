(function(e){function n(n){for(var r,c,a=n[0],u=n[1],s=n[2],f=0,p=[];f<a.length;f++)c=a[f],o[c]&&p.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(n);while(p.length)p.shift()();return i.push.apply(i,s||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,a=1;a<t.length;a++){var u=t[a];0!==o[u]&&(r=!1)}r&&(i.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},o={app:0},i=[];function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=n,a=a.slice();for(var s=0;s<a.length;s++)n(a[s]);var l=u;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("fe64"),t("4864");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("ShareButton")],1)},i=[],c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("button",{on:{click:function(n){return n.preventDefault(),e.shareThis(n)}}},[e._v("Hello World")])},a=[],u={name:"ShareButton",props:{},data:function(){return{}},methods:{shareThis:function(e){navigator.share?navigator.share({title:"Test Share",text:"This is a test share from my site!",url:"https://localhost:8080/test-share"}).then(function(){return console.log("share worked!")}).catch(function(e){return console.log("Error sharing",e)}):console.log("No Navigator Detected!")}}},s=u,l=(t("b4f0"),t("2877")),f=Object(l["a"])(s,c,a,!1,null,"f0d06cee",null),p=f.exports,d={name:"app",components:{ShareButton:p}},h=d,v=(t("5c0b"),Object(l["a"])(h,o,i,!1,null,null,null)),b=v.exports,g=t("9483");Object(g["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(b)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";var r=t("d6af"),o=t.n(r);o.a},"8c40":function(e,n,t){},b4f0:function(e,n,t){"use strict";var r=t("8c40"),o=t.n(r);o.a},d6af:function(e,n,t){}});
//# sourceMappingURL=app.c394fe66.js.map