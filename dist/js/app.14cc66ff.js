(function(e){function t(t){for(var a,r,i=t[0],u=t[1],s=t[2],d=0,p=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);f&&f(t);while(p.length)p.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},o={app:0},c=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d22d746":"f74a842c","chunk-3b9cdbe2":"15ab9d1a"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-3b9cdbe2":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-2d22d746":"31d6cfe0","chunk-3b9cdbe2":"ecb4a6b9"}[e]+".css",o=u.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===a||d===o))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){s=p[i],d=s.getAttribute("data-href");if(d===a||d===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],f.parentNode.removeChild(f),n(c)},f.href=o;var l=document.getElementsByTagName("head")[0];l.appendChild(f)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=c);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=i(e);var p=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",p.name="ChunkLoadError",p.type=a,p.request=r,n[1](p)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/vue-test-recipe-book/dist/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var f=d;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"app"}},[n("Header"),n("router-view",{staticClass:"container"})],1)},o=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[n("ul",{staticClass:"nav"},[n("router-link",{staticClass:"nav__link",attrs:{tag:"li",to:"/"}},[e._v("Recipes")]),n("router-link",{staticClass:"nav__link",attrs:{tag:"li",to:"/about"}},[e._v("About")])],1)])},i=[],u={name:"Header"},s=u,d=n("2877"),p=Object(d["a"])(s,c,i,!1,null,null,null),f=p.exports,l={components:{Header:f}},m=l,h=n("6544"),b=n.n(h),g=n("7496"),v=Object(d["a"])(m,r,o,!1,null,null,null),y=v.exports;b()(v,{VApp:g["a"]});n("d3b7");var w=n("8c4f");a["a"].use(w["a"]);var k=[{path:"/",name:"MainPage",component:function(){return n.e("chunk-3b9cdbe2").then(n.bind(null,"4385"))}},{path:"/about",name:"About",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}}],x=new w["a"]({routes:k}),R=x,j=n("2f62"),O=(n("4de4"),n("7db0"),n("b0c0"),n("96cf"),n("1da1")),_=n("dde5"),A={namespaced:!0,state:{recipes:[]},mutations:{updateRecipes:function(e,t){e.recipes=t},deleteRecipe:function(e,t){e.recipes=e.recipes.filter((function(e){return e.key!==t.key}))}},actions:{fetchRecipes:function(e){return Object(O["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,n("changeLoadingState",!0,{root:!0}),t.next=4,_["a"].fetchAllRecipes();case 4:a=t.sent,n("updateRecipes",a),n("changeLoadingState",!1,{root:!0});case 7:case"end":return t.stop()}}),t)})))()},restoreRecipes:function(e){return Object(O["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.dispatch,t.next=3,_["a"].restoreRecipes();case 3:return t.next=5,n("fetchRecipes");case 5:case"end":return t.stop()}}),t)})))()}},getters:{getRecipeByName:function(e){return function(t){return e.recipes.find((function(e){return e.name===t}))}}}};a["a"].use(j["a"]);var S=new j["a"].Store({namespaced:!0,state:{isLoading:!0},mutations:{changeLoadingState:function(e,t){e.isLoading=t}},actions:{},modules:{recipes:A}}),C=(n("fce9"),n("f309"));a["a"].use(C["a"]);var L=new C["a"]({});a["a"].config.productionTip=!1,new a["a"]({router:R,store:S,vuetify:L,render:function(e){return e(y)}}).$mount("#app")},dde5:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));n("b0c0"),n("96cf");var a=n("1da1"),r=n("d4ec"),o=n("bee2"),c=n("bc3a"),i=n.n(c);function u(e){var t=[];for(var n in e)e[n].key=n,t.push(e[n]);return t}var s={"-MAINVOWkfdVXCDLqNlZ":{image:"https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/10/puttanesca.jpg?itok=gTWChUgQ",ingredients:{"2c033707-59ff-4806-bace-639e05538e57":{count:"400",name:"Chopped tomatoes",type:"g."},"72fc3b96-0765-4d69-be65-64a8bc06eade":{count:"35",name:"Tbsp olive oil",type:"ml."},"872d5de1-bbb3-4d95-9194-3224bb5d47f3":{count:1,name:"adsgdsf",type:"tbsp."},"8e81822d-0dc6-4281-bdaf-f33898ece339":{count:300,name:"Dried spaghetti",type:"g."},"b7a63dca-d439-41ef-8d2c-0e054d143347":{count:4,name:"Large garlic",type:"piece"},"be09674a-c7b2-484e-a987-66ecd4f9839b":{count:1,name:"Onion",type:"ml."}},name:"Pasta",text:"Heat the oil in a non-stick pan over a medium-low heat. Add the onion along with a generous pinch of salt and fry for 10 mins, or until soft. Add the garlic and chilli, if using, and cook for a further minute."},"-MAINVOWkfdVXCDLqNlT":{image:"https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/12/_-chipotle-sweet-potato.jpg?itok=svcHrzSn",ingredients:{"56f578ec-80e0-48e1-b5bc-ca8a03533f5e":{count:70,name:"Mature cheddar",type:"g."},"7ff5b9a5-924e-43d3-b867-9172d2e33da4":{count:"30",name:"Vegetable oil",type:"ml."},"d555a35f-7e28-4266-8cdf-85ccc60c69db":{count:"500",name:"Boiled Water",type:"ml."},"d8ef729c-0f2b-451b-ad41-c632ba88a525":{count:1,name:"Large red onion",type:"piece"}},name:"Chipotle",text:"Heat a glug of vegetable oil in a large flameproof casserole over a medium heat. Add the onion and a pinch of salt and cook for 7 mins until softened. Tip in the squash and sweet potato and fry for a few minutes before adding the tomatoes, beans and 250ml water. Stir through the chipotle paste and season to taste. Pop a lid on the dish and gently simmer over a low to medium heat for 25 mins or until reduced and the sweet potato is soft."},"-MAINcNLgj_VZTLX2vYU":{image:"https://instafood.com.ua/images/full_blog/burger-xxxl-ish-5c546b9c99130-min-5cde9299b51a9.png?1558090400",ingredients:{"3aed4141-9d2a-43cf-9eec-1973571cf8b6":{count:1,name:"Tomato",type:"piece"},"570aa51e-b7b1-43d2-954a-8f90b7fb17fb":{count:200,name:"Sliced cheese",type:"g."},"7f3715e6-f0f8-4565-bca3-a12e9137c703":{count:2,name:"Green leaf",type:"piece"},"b9d5ab4a-c642-49b4-9fe7-1ed2c49970f4":{count:400,name:"Forcemeat",type:"g."},"db4aabc1-2e0d-4a0d-a0bd-7b389edc9f39":{count:4,name:"Bacon",type:"piece"}},name:"Burger",text:"The classic burger is an all time BBQ favourite! This super easy homemade beef burger recipe gives you delicious patties, packed with onions and herbs for extra flavour, that are perfect for topping with cheese, lettuce and tomato, and sandwiching between floury buns."},"-MAIOepaNXQtQYGz9cZs":{image:"https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/user-collections/my-colelction-image/2015/12/chicken-mushroom-risotto.jpg?itok=ZQKwVVce",ingredients:{"0a990157-f384-45cd-89cc-ee7a355c7059":{count:1,name:"250g pack chestnut mushrooms, thickly sliced",type:"piece"},"3a1a7409-908b-4a49-84b5-b1f564262590":{count:30,name:"Butter",type:"ml."},"58cd48e0-c570-4b5a-aa53-ebca4c0a7d9d":{count:1,name:"Small pack flat-leaf parsley, chopped",type:"ml."},"5ceb8186-ccb2-4d43-afcc-49bcdd6554ec":{count:1,name:"1.4l hot chicken stock",type:"piece"},"8057eb22-c4b6-4a6b-92bd-9600ab7c3710":{count:1,name:"Smoked bacon lardons",type:"piece"},"987bfc99-fa3f-4a1c-b63a-abf58b89b595":{count:150,name:"Dry white wine",type:"ml."},"c27a8d23-42f6-4c2b-997f-0bf696aba6be":{count:300,name:"Arborio risotto rice",type:"g."},"e722561e-ba7d-4dfd-9cd0-6728b8dfcd1c":{count:250,name:"Cooked chicken",type:"g."}},name:"Risotto",text:"Heat 50g butter in a large pan. Add 85g smoked bacon lardons and fry for 5 mins over a low-medium heat.  Stir in 1 finely chopped large onion and fry for 10 mins more until the onion is soft but not coloured."}},d=function(){function e(t){Object(r["a"])(this,e),this.http=t+"/recipes",this.fullHttp=this.http+".json"}return Object(o["a"])(e,[{key:"fetchAllRecipes",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.a.get(this.fullHttp).then((function(e){return u(e.data)}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"addRecipe",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.a.post(this.fullHttp,{name:t.name,text:t.text,ingredients:t.ingredients,image:t.image});case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"deleteRecipe",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.a.delete(this.http+"/"+t+".json");case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"saveRecipe",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.a.put(this.http+"/"+t.key+".json",{name:t.name,text:t.text,ingredients:t.ingredients,image:t.image});case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"restoreRecipes",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i.a.put(this.fullHttp,s);case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),e}(),p=new d("https://recope-book.firebaseio.com")},fce9:function(e,t,n){}});
//# sourceMappingURL=app.14cc66ff.js.map