(function(e){function t(t){for(var r,a,u=t[0],c=t[1],s=t[2],l=0,p=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(p.length)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==i[u]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},i={app:0},o=[];function u(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d22d746":"2e01e050","chunk-4e79066a":"c91dd62a"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-4e79066a":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d22d746":"31d6cfe0","chunk-4e79066a":"4c1060a0"}[e]+".css",i=c.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var s=o[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===i))return t()}var p=document.getElementsByTagName("style");for(u=0;u<p.length;u++){s=p[u],l=s.getAttribute("data-href");if(l===r||l===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],f.parentNode.removeChild(f),n(o)},f.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){a[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e);var p=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}i[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/dist/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"app"}},[n("Header"),n("router-view",{staticClass:"container"})],1)},i=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[n("ul",{staticClass:"nav"},[n("router-link",{staticClass:"nav__link",attrs:{tag:"li",to:"/"}},[e._v("Recipes")]),n("router-link",{staticClass:"nav__link",attrs:{tag:"li",to:"/about"}},[e._v("About")])],1)])},u=[],c={name:"Header"},s=c,l=n("2877"),p=Object(l["a"])(s,o,u,!1,null,null,null),f=p.exports,d={components:{Header:f}},h=d,m=n("6544"),g=n.n(m),v=n("7496"),b=Object(l["a"])(h,a,i,!1,null,null,null),y=b.exports;g()(b,{VApp:v["a"]});n("d3b7");var w=n("8c4f");r["a"].use(w["a"]);var k=[{path:"/",name:"MainPage",component:function(){return n.e("chunk-4e79066a").then(n.bind(null,"4385"))}},{path:"/about",name:"About",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}}],j=new w["a"]({routes:k}),x=j,O=n("2f62"),R=(n("7db0"),n("b0c0"),n("96cf"),n("1da1")),_=n("dde5"),S={state:{recipes:[]},mutations:{updateRecipes:function(e,t){e.recipes=t}},actions:{fetchRecipes:function(e){return Object(R["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.commit("changeLoadingState",!0),t.next=3,_["a"].getAllRecipes();case 3:n=t.sent,e.commit("updateRecipes",n),e.commit("changeLoadingState",!1);case 6:case"end":return t.stop()}}),t)})))()}},getters:{getRecipeByName:function(e){return function(t){return e.recipes.find((function(e){return e.name===t}))}}}};r["a"].use(O["a"]);var C=new O["a"].Store({state:{isLoading:!0},mutations:{changeLoadingState:function(e,t){e.isLoading=t}},actions:{},modules:{recipes:S}}),A=(n("fce9"),n("f309"));r["a"].use(A["a"]);var E=new A["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:x,store:C,vuetify:E,render:function(e){return e(y)}}).$mount("#app")},dde5:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n("b0c0"),n("96cf");var r=n("1da1"),a=n("d4ec"),i=n("bee2"),o=n("bc3a"),u=n.n(o),c=function(){function e(t){Object(a["a"])(this,e),this.http=t,this.fullHttp=t+".json"}return Object(i["a"])(e,[{key:"getAllRecipes",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=[],e.next=3,u.a.get(this.fullHttp).then((function(e){for(var n in e.data)e.data[n].key=n,t.push(e.data[n])}));case 3:return console.log(t),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"addRecipe",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.a.post(this.fullHttp,{name:t.name,text:t.text,ingredients:t.ingredients,image:t.image});case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"deleteRecipe",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.a.delete(this.http+"/"+t+".json");case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"saveRecipe",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.a.put(this.http+"/"+t.key+".json",{name:t.name,text:t.text,ingredients:t.ingredients,image:t.image});case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}]),e}(),s=new c("https://recope-book.firebaseio.com/recipes")},fce9:function(e,t,n){}});
//# sourceMappingURL=app.a9582895.js.map