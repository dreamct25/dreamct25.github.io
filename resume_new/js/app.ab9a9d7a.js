(function(t){function e(e){for(var s,a,o=e[0],l=e[1],r=e[2],m=0,d=[];m<o.length;m++)a=o[m],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,r||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],s=!0,o=1;o<i.length;o++){var l=i[o];0!==c[l]&&(s=!1)}s&&(n.splice(e--,1),t=a(a.s=i[0]))}return t}var s={},c={app:0},n=[];function a(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=s,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(i,s,function(e){return t[e]}.bind(null,s));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/resume_new/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var r=0;r<o.length;r++)e(o[r]);var u=l;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0112":function(t,e,i){"use strict";i("0a76")},"034f":function(t,e,i){"use strict";i("85ec")},"0885":function(t,e,i){},"08eb":function(t,e,i){"use strict";i("2c4b")},"09d7":function(t,e,i){"use strict";i("b6cb")},"0a76":function(t,e,i){},"0f02":function(t,e,i){t.exports=i.p+"img/player.7634e8ad.jpg"},1279:function(t,e,i){t.exports=i.p+"img/memory.83b86898.jpg"},"148f":function(t,e,i){t.exports=i.p+"img/mind.05919680.jpg"},"18fe":function(t,e,i){"use strict";i("c25c")},"208b":function(t,e,i){"use strict";i("91f4")},"2b9a":function(t,e,i){"use strict";i("56b1")},"2c4b":function(t,e,i){},"2e59":function(t,e,i){"use strict";i("f528")},3768:function(t,e,i){t.exports=i.p+"img/calculater.8e9ff2e7.jpg"},"472a":function(t,e,i){},"483a":function(t,e,i){t.exports=i.p+"img/to-do-list.f0110f9f.jpg"},4908:function(t,e,i){"use strict";i("c6d3")},5519:function(t,e,i){t.exports=i.p+"img/weather.f0d2cd3c.jpg"},"55ac":function(t,e,i){t.exports=i.p+"media/banner.5f8bb6ee.mp4"},"56b1":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},n=[],a=(i("034f"),i("2877")),o={},l=Object(a["a"])(o,c,n,!1,null,null,null),r=l.exports,u=i("8c4f"),m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"resume-all",class:{"resume-all-blur":t.rwdMenuAnimate}},[i("div",{staticClass:"header-group",class:{"header-group-hide":t.rwdTitleAnimate}},[i("div",{staticClass:"header"},[i("h1",{staticClass:"title"},[i("router-link",{attrs:{to:"/descript"}},[t._v("Chen")])],1)]),0==t.rwdStatus?i("div",{staticClass:"navs",on:{mouseleave:t.hideNavBg}},[i("div",{staticClass:"row no-gutters"},[i("div",{staticClass:"col-md-3"},[i("span",{staticClass:"nav-option",on:{click:function(e){t.goToTitle(t.titile=1)},mouseenter:function(e){t.showNavBg(t.num=0)}}},[t._v("網頁技能")])]),i("div",{staticClass:"col-md-3"},[i("span",{staticClass:"nav-option",on:{click:function(e){t.goToTitle(t.titile=2)},mouseenter:function(e){t.showNavBg(t.num=1)}}},[t._v("作品集")])]),i("div",{staticClass:"col-md-3"},[i("span",{staticClass:"nav-option",on:{click:function(e){t.goToTitle(t.titile=3)},mouseenter:function(e){t.showNavBg(t.num=2)}}},[t._v("興趣")])]),i("div",{staticClass:"col-md-3"},[i("span",{staticClass:"nav-option",on:{click:function(e){t.goToTitle(t.titile=4)},mouseenter:function(e){t.showNavBg(t.num=3)}}},[t._v("自介")])])])]):t._e()]),i("div",{staticClass:"banner"},[i("video",{attrs:{loop:"true",autoplay:"autoplay",muted:"true",playsinline:""},domProps:{muted:!0}},[i("source",{attrs:{src:t.bannerVideo,type:"video/mp4"}})]),0==t.rwdStatus?i("span",[t._v("創造生命無限的可能性，是自己最喜歡的一句話")]):i("span",[t._v(" 創造生命無限的可能性 "),i("br"),t._v("是自己最喜歡的一句話 ")]),i("div",{staticClass:"down-arrow",class:{"down-arrow-active":t.arrowAnimate}},[i("i",{staticClass:"fal fa-angle-double-down"})])]),i("div",{staticClass:"main"},[i("div",{staticClass:"main-skill-outer",class:{"line-block":t.mainSkillOuterAnimate}},[i("div",{staticClass:"main-skill",class:{"main-skill-active":t.mainSkillAnimate}},[i("h2",[t._v("網頁技能")]),i("p",[t._v("( 可點擊黑框內的文字查看詳細內容 )")]),0==t.rwdStatus?i("div",{staticClass:"row no-gutters"},t._l(t.contentItem,(function(e,s){return i("div",{key:s,staticClass:"col-md-3"},[i("div",{staticClass:"skill-card",attrs:{"data-num":s}},[i("div",{staticClass:"skill-card-header",on:{click:function(e){t.showSkill(t.num=s)}}},[t._v(" "+t._s(e.contentTitle)+" ")]),i("div",{staticClass:"skill-card-body-outer"},[i("div",{staticClass:"skill-card-body",attrs:{"data-num":s}},[i("p",[t._v(t._s(e.contentInSide))])])])])])})),0):i("div",{staticClass:"row no-gutters"},t._l(t.contentItem,(function(e,s){return i("div",{key:s,staticClass:"col-md-6"},[i("div",{staticClass:"skill-card",attrs:{"data-num":s}},[i("div",{staticClass:"skill-card-header",on:{click:function(e){t.showSkill(t.num=s)}}},[t._v(" "+t._s(e.contentTitle)+" ")]),i("div",{staticClass:"skill-card-body-outer"},[i("div",{staticClass:"skill-card-body",attrs:{"data-num":s}},[i("p",[t._v(t._s(e.contentInSide))])])])])])})),0)])]),i("div",{staticClass:"collection-outer",class:{"line-block":t.collectionOuterAnimate}},[i("div",{staticClass:"collection",class:{"collection-active":t.collectionAnimate}},[i("h2",[t._v("作品集")]),i("div",{staticClass:"img-outer"},[i("i",{staticClass:"far fa-angle-left arrow-left",on:{click:t.prevImg}}),i("i",{staticClass:"far fa-angle-right arrow-right",on:{click:t.nextImg}}),i("div",{staticClass:"img-group"},[i("div",{staticClass:"imgs imgs1 img-active"}),i("div",{staticClass:"imgs imgs2"}),i("div",{staticClass:"imgs imgs3"}),i("div",{staticClass:"imgs imgs4"}),i("div",{staticClass:"imgs imgs5"}),i("div",{staticClass:"imgs imgs6"}),i("div",{staticClass:"imgs imgs7"}),i("div",{staticClass:"imgs imgs8"}),i("div",{staticClass:"imgs imgs9"}),i("div",{staticClass:"imgs imgs10"}),i("div",{staticClass:"imgs imgs11"}),i("div",{staticClass:"imgs imgs12"}),i("div",{staticClass:"imgs imgs13"}),i("div",{staticClass:"imgs imgs14"}),i("div",{staticClass:"imgs imgs15"}),i("span",{staticClass:"collection-description",on:{click:t.changeCollection}},[t._v(t._s(t.descrip))])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-12"},[i("div",{staticClass:"collection-show"},[i("router-view")],1)])])])]),i("div",{staticClass:"hobby-outer",class:{"line-block":t.hobbyOuterAnimate}},[i("div",{staticClass:"hobby",class:{"hobby-active":t.hobbyAnimate}},[i("h2",[t._v("興趣")]),t._m(0)])]),i("div",{staticClass:"self-outer",class:{"line-block":t.selfOuterAnimate}},[i("div",{staticClass:"self",class:{"self-active":t.selfAnimate}},[i("h2",[t._v("自介")]),i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-lg-8"},[i("div",{staticClass:"row no-gutters"},[i("div",{staticClass:"col-md-6"},[i("div",{staticClass:"self-content",class:{"self-content-active":t.selfDetailsAnimate}},[i("p",[t._v(" 過去一直在摸索適合工作，大部分都是從事有關服務業的性質工作，後來接觸網頁前端 Code 後好像見到了不一樣的世界。目前所學的內容或許還差業界有一段距離，但依然持續學習各項新技術，期許自己能朝前端領域繼續鑽研並在職場中學到更新的技術，做出更好的作品。 ")])])]),i("div",{staticClass:"col-md-6"},[i("div",{staticClass:"self-details",class:{"self-details-active":t.selfDetailsAnimate}},[i("img",{attrs:{src:"https://drive.google.com/uc?export=view&id=1B3t1sGrCXUosm5ZLxD63pXi1E2UlXn1x",alt:""}}),t._m(1)])])])])])])])]),t._m(2),i("div",{staticClass:"nav-bg"}),i("div",{staticClass:"go-top",class:{"go-top-active":t.goTopAnimate},on:{click:t.goTop}},[i("i",{staticClass:"fal fa-angle-up"})])]),1==t.rwdStatus?i("div",{staticClass:"nav-rwd-menu",class:{"nav-rwd-menu-hide":t.rwdIconOptionsAnimate},on:{click:t.showRwdMenu}},[i("div",{staticClass:"line",class:{"line-trans-FT":t.rwdIconAnimate}}),i("div",{staticClass:"line",class:{"line-trans-SD":t.rwdIconAnimate}}),i("div",{staticClass:"line",class:{"line-trans-TD":t.rwdIconAnimate}})]):t._e(),1==t.rwdStatus?i("div",{staticClass:"nav-rwd-outer",class:{"nav-rwd-outer-active":t.rwdMenuAnimate}},[i("div",{staticClass:"nav-rwd",class:{"nav-rwd-active":t.rwdMenuAnimate}},[i("ul",[i("li",{on:{click:function(e){t.goToTitle(t.titile=1)}}},[t._v("網頁技能")]),i("li",{on:{click:function(e){t.goToTitle(t.titile=2)}}},[t._v("作品集")]),i("li",{on:{click:function(e){t.goToTitle(t.titile=3)}}},[t._v("興趣")]),i("li",{on:{click:function(e){t.goToTitle(t.titile=4)}}},[t._v("自介")])])])]):t._e()])},d=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-lg-8"},[i("p",[t._v(" 放鬆時最喜歡到海邊看風景，夜晚的明月與整片的星空，喜愛攝影，研究科技領域的各項內容，心理學的內容，偶爾也喜歡自己調酒，自學一些平時沒接觸過的事物，與接觸大自然。 ")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("i",{staticClass:"fal fa-map-marker-alt"}),t._v("Kaohsiung.TW ")]),i("li",[i("i",{staticClass:"fal fa-mobile"}),t._v("0986656603")]),i("li",[i("i",{staticClass:"fal fa-mail-bulk"}),t._v("h199410@gmail.com ")]),i("li",[i("i",{staticClass:"fab fa-github"}),i("a",{attrs:{href:"https://github.com/dreamct25/"}},[t._v("dreamct25")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer"},[i("h6",[i("i",{staticClass:"fal fa-copyright"}),t._v("Copyright Chen")])])}],v=(i("c740"),i("4160"),i("a434"),i("a9e3"),i("159b"),i("2909")),p=i("55ac"),h=i.n(p),f=i("1157"),g=i.n(f),_={data:function(){return{swiperSwitch:!1,swiperCount:1,swiperCounter:null,swiperDelayCounter:null,swiperDescriptionCounter:null,handCount:!1,skillNumTemp:[],collectionDescription:[{collectNum:1,collectName:"計算機",collectRouter:"/calculater"},{collectNum:2,collectName:"多功能畫布",collectRouter:"/canvas"},{collectNum:3,collectName:"時鐘",collectRouter:"/clock"},{collectNum:4,collectName:"圖片控制器",collectRouter:"/imagecontroler"},{collectNum:5,collectName:"翻牌記憶遊戲",collectRouter:"/memory"},{collectNum:6,collectName:"人格測驗",collectRouter:"/mind"},{collectNum:7,collectName:"鍵盤聲音",collectRouter:"/music"},{collectNum:8,collectName:"媒體播放器",collectRouter:"/player"},{collectNum:9,collectName:"拼圖遊戲",collectRouter:"/puzzle"},{collectNum:10,collectName:"私人待辦清單",collectRouter:"/todolist"},{collectNum:11,collectName:"高雄旅遊網",collectRouter:"/travel"},{collectNum:12,collectName:"天氣預報",collectRouter:"/weather"},{collectNum:13,collectName:"BMI計算機",collectRouter:"/weight"},{collectNum:14,collectName:"Fashion Shop",collectRouter:"/shop"},{collectNum:15,collectName:"個人部落格",collectRouter:"/blog"}],descrip:"計算機",goToTitleName:[{titleNum:1,titleName:".main-skill"},{titleNum:2,titleName:".collection"},{titleNum:3,titleName:".hobby"},{titleNum:4,titleName:".self"}],bannerVideo:h.a,collectUrl:"",rwdStatus:!1,rwdTitleAnimate:!1,rwdMenuAnimate:!1,rwdIconAnimate:!1,rwdIconOptionsAnimate:!1,scrollTemp:0,goTopAnimate:!1,arrowAnimate:!1,mainSkillOuterAnimate:!1,mainSkillAnimate:!1,collectionOuterAnimate:!1,collectionAnimate:!1,hobbyOuterAnimate:!1,hobbyAnimate:!1,selfOuterAnimate:!1,selfAnimate:!1,selfDetailsAnimate:!1,contentItem:[{contentTitle:"Html5",contentInSide:"HTML5 的各項標籤與屬性設置的運用，如 class、id、data-*、style 等，與 HTML5 網頁結構的堆疊順序認識與結構變換，和 canvas 的使用。"},{contentTitle:"Css3",contentInSide:"各項屬性的運用，如排版上的結構變化、製作動畫延遲效果、顏色漸層 DOM 元素陰影、持續性的動畫變型等設置。"},{contentTitle:"Scss",contentInSide:"CSS3 的預處理器運用，結構上的撰寫，有效提高 CSS3 代碼的可讀性與撰寫性，並方便管理樣是內容，建立 Mixin 專屬個人化的屬性設置，並於專案中套用所設置的屬性內容。"},{contentTitle:"jQuery",contentInSide:"基本 jQuery 語法與 AJAX 的運用，與各項套件運用，如 Boostrap、Swiper，平常大多是用原生 JavaScript 撰寫。"},{contentTitle:"Javascript",contentInSide:"各項語法撰寫，包含各類型轉換，陣列與物件的運用，在資料量大時製作物件資料管理資料，並透過迴圈渲染大量物件資料，同樣透過物件資料製作 NodeList 元素動畫，透過 Function 傳值傳址與 Function Scoped 的了解，三元運算式運用，還有 input 內容的正則驗證與各項功能開關、動畫設計，製作函式工廠、閉包等、或透過 reture 將傳入運算函式中的內容，轉寫回傳內容或格式，以及各瀏覽器相容性加載原型屬性使用、讓無法支援 ES6 的部分方法只支援 ES5 的瀏覽器也可同樣支援使用、平時都是使用 ES6 撰寫。"},{contentTitle:"ES6",contentInSide:"了解 ES6 寫法，如陣列與物件的解構，透過解構的方式重新組合物件，配合網頁元素使用，透過 fetch 做 API 串接再透過 json() 轉型資料，ForEach、Filter、Reduce 等和箭頭函式的運用，更有效的撰寫程是語言，並提高語言的可讀性。"},{contentTitle:"AJAX",contentInSide:"串接各項 API 資料，製作網頁內容，並透過 API 即時更新網頁內容，目前有使用過的 API 如高雄旅遊網、中央氣象局資料、Google Youtube API，還有自建的 FireBase 資料庫。"},{contentTitle:"Node Js",contentInSide:"基本的 npm 使用，使用 require 加載模組，並透過 module.exports 載入不同模組內容使用，目前有使用 express 建立 Restful Api 並透過中介軟體 body-parser 將前端取回的資料內容轉換成 JSON 格式，將資料寫進 SQL 資料庫"},{contentTitle:"Sql Server",contentInSide:"基礎的 Sql 語法與 CRUD、JOIN、LIKE 語法運用，還有表單的關聯性建立與正規化、SQL Injection 的防範撰寫方式、寫入欄位的型別認知，如 int、varchar、nvarchar、datetime 等不同的格式寫入方法，目前有實做在電商網頁中。"},{contentTitle:"C#",contentInSide:"基礎強型別與集合和陣列的認知與差別，集合轉換成物件的使用，public 與 private 差異，與 static 靜態參數與非靜態參數的使用，曾使用過 ASP.Net MVC 撰寫過後 Controller 與 Model 的應用邏輯並串接 Sql Server 資料庫。"},{contentTitle:"JsonServer & FireBase",contentInSide:"閱讀 JSON API 文件，各項資料的解讀與運用，使用 JsonServer、FireBase 製作 JSON 格式資料，並在專案中使用虛擬資料庫作串接與功能測試，在實際上線網頁使用線上資料庫。"},{contentTitle:"RWD",contentInSide:"製作響應式板面內容與不同手機畫面大小與跨瀏覽器的相容性，如開關式動畫選單，Table 元素的橫向卷軸等。"},{contentTitle:"Bootstrap 4",contentInSide:"使用格線系統 ( gride system ) 有效控制版面在各分辨率時的版面設置，與各項原件的套用，如 Modal、Carousol、Pagination 等。"},{contentTitle:"Vue & VueCli",contentInSide:"VUE 元件製作與套件、模板語法運用，運用 params 在分頁間傳遞參數，透過 props 與 emit 在元件間傳遞字串與物件，npm 的安裝運用，使用的套件如 RouterLink、Axios、Boostrap、Md5、V-charts、express、body-parser、cors、morgan、mssql、openCC 等，透過 Axios 的 get、post、patch、delete 串接 Json server 虛擬資料庫與 FireBase 線上資料庫與 Sql Server 資料庫的內容做畫面的即時內容更新，使用 SPA 撰寫單頁切換功能，再透過 WebPack 將 Vue 元件打包成網頁，目前有實作在電商網站上、個人履歷、部落格、記帳管理系統。"},{contentTitle:"Github",contentInSide:"一般的使用與操作，並將平時製作完成的網頁推送上平台，目前的推送以 Master 主線為主，Branch 分支的部分較少使用，但了解主線與分支的推送原理。"},{contentTitle:"Docker",contentInSide:"基本操做 docker pull、rm等，透過 Docker 建立本地端與容器間的映射連結 Server，並透過 Node Js 介接由 Docker 建立的 Sql Server 虛擬機 Server。"}]}},mounted:function(){document.querySelectorAll(".imgs").forEach((function(t,e){return t.setAttribute("data-num",e+=1)})),document.querySelectorAll(".nav-option").forEach((function(t,e){return t.setAttribute("data-num",e+=1)})),this.imgSwiper()},methods:{scrollContentPart:function(){var t=document.querySelector(".down-arrow"),e=document.querySelector(".main-skill-outer"),i=document.querySelector(".collection-outer"),s=document.querySelector(".hobby-outer"),c=document.querySelector(".self-outer"),n=window.scrollY+window.innerHeight,a=t.offsetTop+t.offsetHeight/4,o=e.offsetTop+e.offsetHeight/4,l=i.offsetTop+i.offsetHeight/4,r=s.offsetTop+s.offsetHeight/4,u=c.offsetTop+c.offsetHeight/4;this.scrollContent(n,a,o,l,r,u)},scrollItems:function(){window.scrollY<this.scrollTemp?(this.rwdTitleAnimate=!1,this.rwdIconOptionsAnimate=!1):(this.rwdTitleAnimate=!0,1==this.rwdIconAnimate?this.rwdIconOptionsAnimate=!1:this.rwdIconOptionsAnimate=!0),this.scrollTemp=window.scrollY,window.scrollY>=200?this.goTopAnimate=!0:this.goTopAnimate=!1},scrollContent:function(t,e,i,s,c,n){var a=this;this.scrollItems(),this.arrowAnimate=e<t,i<t?(this.mainSkillOuterAnimate=!0,setTimeout((function(){return a.mainSkillAnimate=!0}),700)):(this.mainSkillOuterAnimate=!1,this.mainSkillAnimate=!1),s<t?(this.collectionOuterAnimate=!0,setTimeout((function(){return a.collectionAnimate=!0}),700)):(this.collectionOuterAnimate=!1,this.collectionAnimate=!1),c<t?(this.hobbyOuterAnimate=!0,setTimeout((function(){return a.hobbyAnimate=!0}),700)):(this.hobbyOuterAnimate=!1,this.hobbyAnimate=!1),n<t?(this.selfOuterAnimate=!0,setTimeout((function(){return a.selfAnimate=!0}),700),setTimeout((function(){return a.selfDetailsAnimate=!0}),1001)):(this.selfOuterAnimate=!1,this.selfAnimate=!1,this.selfDetailsAnimate=!1)},changeCollection:function(){var t=this;document.querySelector(".collection-description").classList.add("collection-description-light"),setTimeout((function(){return document.querySelector(".collection-description").classList.remove("collection-description-light")}),500),document.querySelector(".collection-show").classList.add("collection-show-hide"),setTimeout((function(){return t.$router.push("".concat(t.collectUrl),(function(){}))}),1001),setTimeout((function(){return document.querySelector(".collection-show").classList.remove("collection-show-hide")}),1001)},showNavBg:function(t){var e=document.querySelector(".nav-option").getBoundingClientRect();document.querySelector(".nav-bg").style.display="block",setTimeout((function(){return document.querySelector(".nav-bg").classList.add("nav-bg-active")}),100),document.querySelector(".nav-bg").style.top="".concat(0==window.scrollY?e.top:e.top+window.scrollY,"px"),document.querySelector(".nav-bg").style.left="".concat(0==t?e.left:e.width*t,"px"),document.querySelector(".nav-bg").style.width="".concat(e.width,"px"),document.querySelector(".nav-bg").style.height="".concat(e.height,"px")},hideNavBg:function(){document.querySelector(".nav-bg").classList.remove("nav-bg-active"),setTimeout((function(){return document.querySelector(".nav-bg").style.display=""}),500)},goTop:function(){g()("html, body").animate({scrollTop:0},2500)},goToTitle:function(t){var e=this;this.goToTitleName.forEach((function(e){e.titleNum==t&&g()("html, body").animate({scrollTop:g()("".concat(e.titleName))[0].offsetTop},3e3)})),1!=this.rwdStatus?(document.querySelectorAll(".nav-option").forEach((function(e){return Number(e.dataset.num)==t?e.classList.add("nav-option-active"):e.classList.remove("nav-option-active")})),this.hideNavBg(),setTimeout((function(){return e.showNavBg()}),500)):this.showRwdMenu()},showRwdMenu:function(){var t=this;0==this.rwdIconAnimate?(this.rwdIconAnimate=!0,document.querySelector(".nav-rwd-outer").style.display="block",setTimeout((function(){return t.rwdMenuAnimate=!0}),100)):(this.rwdMenuAnimate=!1,this.rwdIconAnimate=!1,0==this.rwdTitleAnimate?this.rwdIconOptionsAnimate=!1:this.rwdIconOptionsAnimate=!0,setTimeout((function(){return document.querySelector(".nav-rwd-outer").style.display=""}),901))},showSkill:function(t){var e=this.skillNumTemp.findIndex((function(e){return e==t}));-1==e?(this.skillNumTemp.push(t),Object(v["a"])(document.querySelectorAll(".skill-card-body"))[t].classList.add("skill-card-body-show"),Object(v["a"])(document.querySelectorAll(".skill-card-body-outer"))[t].classList.add("skill-card-body-outer-toggle")):(this.skillNumTemp.forEach((function(e){e==t&&(Object(v["a"])(document.querySelectorAll(".skill-card-body-outer"))[e].classList.remove("skill-card-body-outer-toggle"),Object(v["a"])(document.querySelectorAll(".skill-card-body"))[e].classList.remove("skill-card-body-show"))})),this.skillNumTemp.splice(e,1))},autoDecription:function(){document.querySelector(".collection-description").classList.remove("descrip-active"),this.swiperDescriptionCounter=setTimeout((function(){return document.querySelector(".collection-description").classList.add("descrip-active")}),5e3)},imgCounterPart:function(){var t=this;document.querySelectorAll(".imgs").forEach((function(e){return Number(e.dataset.num)==t.swiperCount?e.classList.add("img-active"):e.classList.remove("img-active")})),this.collectionDescription.forEach((function(e){e.collectNum==t.swiperCount&&(t.descrip=e.collectName,t.collectUrl=e.collectRouter)}))},imgCounter:function(){switch(this.handCount){case!0:document.querySelector(".collection-description").classList.remove("descrip-active"),clearTimeout(this.swiperDescriptionCounter),this.imgCounterPart();break;case!1:15==this.swiperCount?this.swiperCount=1:this.swiperCount+=1,this.imgCounterPart(),this.autoDecription();break}},imgSwiper:function(){var t=this;switch(this.swiperSwitch){case!0:this.handCount=!0,this.imgCounter(),clearInterval(this.swiperCounter),clearTimeout(this.swiperDelayCounter),this.swiperDelayCounter=setTimeout((function(){t.swiperSwitch=!1,t.imgSwiper()}),5e3);break;case!1:this.swiperCounter=setInterval((function(){t.handCount=!1,t.imgCounter()}),6e3);break}},prevImg:function(){1==this.swiperCount?this.swiperCount=15:this.swiperCount-=1,this.handCount=!0,this.swiperSwitch=!0,this.imgSwiper()},nextImg:function(){15==this.swiperCount?this.swiperCount=1:this.swiperCount+=1,this.handCount=!0,this.swiperSwitch=!0,this.imgSwiper()}},created:function(){this.$router.push("/descript",(function(){})),window.addEventListener("scroll",this.scrollContentPart),window.innerWidth<=1024?this.rwdStatus=!0:this.rwdStatus=!1},destroyed:function(){window.removeEventListener("scroll",this.scrollContentPart)}},b=_,C=(i("2b9a"),Object(a["a"])(b,m,d,!1,null,"1b924af6",null)),S=C.exports,w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"collection-outer"},[s("div",{staticClass:"collection-title"},[t._v("計算機")]),s("div",{staticClass:"collection-img-outer"},[s("img",{attrs:{src:i("3768"),alt:""}})]),s("div",{staticClass:"collection-content"},[s("span",[t._v("作品內容說明")]),s("p",[t._v("簡易計算機，還有一些自己加的動畫，此作品純為練習作品集用，無任何商業用途")]),s("span",[t._v("使用語言：HTML5、CSS3、JavaScript、RWD")]),s("ul",[s("li",[s("span",[t._v("GitHub")])]),s("li",[s("a",{attrs:{href:"https://github.com/dreamct25/dreamct25.github.io/tree/master/Calculator"}},[t._v("原碼")])]),s("li",[s("a",{attrs:{href:"https://dreamct25.github.io/Calculator/"}},[t._v("網頁")])])])])])])}],T=(i("2e59"),{}),A=Object(a["a"])(T,w,y,!1,null,"4a5c64f4",null),k=A.exports,N=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"collection-outer"},[s("div",{staticClass:"collection-title"},[t._v("畫布")]),s("div",{staticClass:"collection-img-outer"},[s("img",{attrs:{src:i("9462"),alt:""}})]),s("div",{staticClass:"collection-content"},[s("span",[t._v("作品內容說明")]),s("p",[t._v("畫布，還有一些自己加的動畫，有將原內容做大幅度的更動，為 js 30 days 練習題目，自己有在內容上作一些變化，此作品純為練習作品集用，無使用任何框架，無任何商業用途")]),s("span",[t._v("使用語言：HTML5、CSS3、JavaScript、ES6")]),s("ul",[s("li",[s("span",[t._v("GitHub")])]),s("li",[s("a",{attrs:{href:"https://github.com/dreamct25/dreamct25.github.io/tree/master/Canvas"}},[t._v("原碼")])]),s("li",[s("a",{attrs:{href:"https://dreamct25.github.io/Canvas/"}},[t._v("網頁")])])])])])])}],I=(i("208b"),{}),O=Object(a["a"])(I,N,E,!1,null,"dc941b42",null),j=O.exports,x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"collection-outer"},[s("div",{staticClass:"collection-title"},[t._v("時鐘")]),s("div",{staticClass:"collection-img-outer"},[s("img",{attrs:{src:i("f012"),alt:""}})]),s("div",{staticClass:"collection-content"},[s("span",[t._v("作品內容說明")]),s("p",[t._v("時鐘，還有一些自己加的動畫，為 js 30 days 練習題目，自己有在內容上作一些變化，此作品純為練習作品集用，無任何商業用途")]),s("span",[t._v("使用語言：HTML5、CSS3、JavaScript、ES6、RWD")]),s("ul",[s("li",[s("span",[t._v("GitHub")])]),s("li",[s("a",{attrs:{href:"https://github.com/dreamct25/dreamct25.github.io/tree/master/Clock"}},[t._v("原碼")])]),s("li",[s("a",{attrs:{href:"https://dreamct25.github.io/Clock/"}},[t._v("網頁")])])])])])])}],L=(i("bd60"),{}),q=Object(a["a"])(L,x,M,!1,null,"fd4b483a",null),H=q.exports,$=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},D=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"collection-outer"},[s("div",{staticClass:"collection-title"},[t._v("圖片控制器")]),s("div",{staticClass:"collection-img-outer"},[s("img",{attrs:{src:i("950d"),alt:""}})]),s("div",{staticClass:"collection-content"},[s("span",[t._v("作品內容說明")]),s("p",[t._v("為 js 30 days 練習題目，還有一些自己加的動畫，有將原內容做大幅度的更動，自己有在內容上作一些變化，此作品純為練習作品集用，無使用任何框架，無任何商業用途")]),s("span",[t._v("使用語言：HTML5、CSS3、JavaScript、ES6")]),s("ul",[s("li",[s("span",[t._v("GitHub")])]),s("li",[s("a",{attrs:{href:"https://github.com/dreamct25/dreamct25.github.io/tree/master/Image_Controller"}},[t._v("原碼")])]),s("li",[s("a",{attrs:{href:"https://dreamct25.github.io/Image_Controller/"}},[t._v("網頁")])])])])])])}],R=(i("08eb"),{}),B=Object(a["a"])(R,$,D,!1,null,"4e33f3d4",null),J=B.exports,P=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},G=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"collection-outer"},[s("div",{staticClass:"collection-title"},[t._v("翻牌記憶遊戲")]),s("div",{staticClass:"collection-img-outer"},[s("img",{attrs:{src:i("1279"),alt:""}})]),s("div",{staticClass:"collection-content"},[s("span",[t._v("作品內容說明")]),s("p",[t._v("單純翻牌小遊戲，還有一些自己加的動畫，此作品純為練習作品集用，無使用任何框架，無任何商業用途")]),s("span",[t._v("使用語言：HTML5、SCSS、JavaScript、RWD")]),s("ul",[s("li",[s("span",[t._v("GitHub")])]),s("li",[s("a",{attrs:{href:"https://github.com/dreamct25/dreamct25.github.io/tree/master/Memory_Card_Game"}},[t._v("原碼")])]),s("li",[s("a",{attrs:{href:"https://dreamct25.github.io/Memory_Card_Game/"}},[t._v("網頁")])])])])])])}],W=(i("18fe"),{}),V=Object(a["a"])(W,P,G,!1,null,"3bfda08d",null),F=V.exports,z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},U=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"collection-outer"},[s("div",{staticClass:"collection-title"},[t._v("人格測驗")]),s("div",{staticClass:"collection-img-outer"},[s("img",{attrs:{src:i("148f"),alt:""}})]),s("div",{staticClass:"collection-content"},[s("span",[t._v("作品內容說明")]),s("p",[t._v("性格測驗，還有一些自己加的動畫，所有動畫、版面設計與功能均為原創，測驗內容與最後解析結果則擷取自網路上資料，此作品純為練習作品集用，無任何商業用途")]),s("span",[t._v("使用語言：HTML5、SCSS、JavaScript、ES6、RWD")]),s("span",[t._v("使用套件與框架：Boostrap 4")]),s("ul",[s("li",[s("span",[t._v("GitHub")])]),s("li",[s("a",{attrs:{href:"https://github.com/dreamct25/dreamct25.github.io/tree/master/Mind"}},[t._v("原碼")])]),s("li",[s("a",{attrs:{href:"https://dreamct25.github.io/Mind/"}},[t._v("網頁")])])])])])])}],Y=(i("d08a"),{}),X=Object(a["a"])(Y,z,U,!1,null,"b3bc5b9e",null),Q=X.exports,K=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Z=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"collection-outer"},[s("div",{staticClass:"collection-title"},[t._v("鍵盤音樂")]),s("div",{staticClass:"collection-img-outer"},[s("img",{attrs:{src:i("ed46"),alt:""}})]),s("div",{staticClass:"collection-content"},[s("span",[t._v("作品內容說明")]),s("p",[t._v("鍵盤音樂，還有一些自己加的動畫，按下鍵盤對應按鍵會有聲與互動效果，右側可調節音量，為 js 30 days 練習題目，自己有在內容上作一些變化，此作品純為練習作品集用，無使用任何框架，無任何商業用途")]),s("span",[t._v("使用語言：HTML5、CSS3、JavaScript、ES6")]),s("ul",[s("li",[s("span",[t._v("GitHub")])]),s("li",[s("a",{attrs:{href:"https://github.com/dreamct25/dreamct25.github.io/tree/master/Music"}},[t._v("原碼")])]),s("li",[s("a",{attrs:{href:"https://dreamct25.github.io/Music/"}},[t._v("網頁")])])])])])])}],tt=(i("946e"),{}),et=Object(a["a"])(tt,K,Z,!1,null,"f64022ee",null),it=et.exports,st=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ct=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"collection-outer"},[s("div",{staticClass:"collection-title"},[t._v("媒體播放器")]),s("div",{staticClass:"collection-img-outer"},[s("img",{attrs:{src:i("0f02"),alt:""}})]),s("div",{staticClass:"collection-content"},[s("span",[t._v("作品內容說明")]),s("p",[t._v("媒體播放器，還有一些自己加的動畫，有將原內容做大幅度的更動，為 js 30 days 練習題目，有在內容上作大量的變化，此作品純為練習作品集用，無使用任何框架，無任何商業用途")]),s("span",[t._v("使用語言：HTML5、CSS3、JavaScript、ES6")]),s("ul",[s("li",[s("span",[t._v("GitHub")])]),s("li",[s("a",{attrs:{href:"https://github.com/dreamct25/dreamct25.github.io/tree/master/Media_player"}},[t._v("原碼")])]),s("li",[s("a",{attrs:{href:"https://dreamct25.github.io/Media_player/"}},[t._v("網頁")])])])])])])}],nt=(i("09d7"),{}),at=Object(a["a"])(nt,st,ct,!1,null,"ee1144be",null),ot=at.exports,lt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},rt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"collection-outer"},[s("div",{staticClass:"collection-title"},[t._v("拼圖遊戲")]),s("div",{staticClass:"collection-img-outer"},[s("img",{attrs:{src:i("bc90"),alt:""}})]),s("div",{staticClass:"collection-content"},[s("span",[t._v("作品內容說明")]),s("p",[t._v("拼圖遊戲，還有一些自己加的動畫，此為網路上的拼圖遊戲範例，並將原內容做大幅度的更動，與原本完全不同，此作品純為練習作品集用，無使用任何框架，無任何商業用途。")]),s("span",[t._v("使用語言：HTML5、SCSS、JavaScript、ES6、RWD")]),s("ul",[s("li",[s("span",[t._v("GitHub")])]),s("li",[s("a",{attrs:{href:"https://github.com/dreamct25/dreamct25.github.io/tree/master/Puzzle_Game"}},[t._v("原碼")])]),s("li",[s("a",{attrs:{href:"https://dreamct25.github.io/Puzzle_Game/"}},[t._v("網頁")])])])])])])}],ut=(i("4908"),{}),mt=Object(a["a"])(ut,lt,rt,!1,null,"4f6e0732",null),dt=mt.exports,vt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},pt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"collection-outer"},[s("div",{staticClass:"collection-title"},[t._v("私人待辦清單")]),s("div",{staticClass:"collection-img-outer"},[s("img",{attrs:{src:i("483a"),alt:""}})]),s("div",{staticClass:"collection-content"},[s("span",[t._v("作品內容說明")]),s("p",[t._v("私人待辦事項，還有一些自己加的動畫，有將原內容做超大幅度的更動，與原本完全不同，為 js 30 days 練習題目，此作品純為練習作品集用，無使用任何框架，無任何商業用途")]),s("span",[t._v("使用語言：HTML5、SCSS、JavaScript")]),s("ul",[s("li",[s("span",[t._v("GitHub")])]),s("li",[s("a",{attrs:{href:"https://github.com/dreamct25/dreamct25.github.io/tree/master/To_Do_List"}},[t._v("原碼")])]),s("li",[s("a",{attrs:{href:"https://dreamct25.github.io/To_Do_List/"}},[t._v("網頁")])])])])])])}],ht=(i("9783"),{}),ft=Object(a["a"])(ht,vt,pt,!1,null,"0c123730",null),gt=ft.exports,_t=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},bt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"collection-outer"},[s("div",{staticClass:"collection-title"},[t._v("高雄旅遊網")]),s("div",{staticClass:"collection-img-outer"},[s("img",{attrs:{src:i("5710"),alt:""}})]),s("div",{staticClass:"collection-content"},[s("span",[t._v("作品內容說明")]),s("p",[t._v("高雄旅遊網，還有一些自己加的動畫，此作品純為練習作品集用，有使用 bootstrap 框架，無任何商業用途")]),s("span",[t._v("使用語言：HTML5、SCSS、JavaScript、ES6、RWD")]),s("span",[t._v("使用套件與框架：Boostrap 4")]),s("ul",[s("li",[s("span",[t._v("GitHub")])]),s("li",[s("a",{attrs:{href:"https://github.com/dreamct25/dreamct25.github.io/tree/master/Travel"}},[t._v("原碼")])]),s("li",[s("a",{attrs:{href:"https://dreamct25.github.io/Travel/"}},[t._v("網頁")])])])])])])}],Ct=(i("0112"),{}),St=Object(a["a"])(Ct,_t,bt,!1,null,"06967ee3",null),wt=St.exports,yt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Tt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"collection-outer"},[s("div",{staticClass:"collection-title"},[t._v("天氣預報")]),s("div",{staticClass:"collection-img-outer"},[s("img",{attrs:{src:i("5519"),alt:""}})]),s("div",{staticClass:"collection-content"},[s("span",[t._v("作品內容說明")]),s("p",[t._v("氣象查詢，還有一些自己加的動畫，所有內容均為原創，此作品純為練習作品集用，無任何商業用途")]),s("span",[t._v("使用語言：HTML5、SCSS、JavaScript、ES6、RWD")]),s("span",[t._v("使用套件與框架：Boostrap 4")]),s("ul",[s("li",[s("span",[t._v("GitHub")])]),s("li",[s("a",{attrs:{href:"https://github.com/dreamct25/dreamct25.github.io/tree/master/Weather"}},[t._v("原碼")])]),s("li",[s("a",{attrs:{href:"https://dreamct25.github.io/Weather/"}},[t._v("網頁")])])])])])])}],At=(i("6c43"),{}),kt=Object(a["a"])(At,yt,Tt,!1,null,"249e1483",null),Nt=kt.exports,Et=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},It=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"collection-outer"},[s("div",{staticClass:"collection-title"},[t._v("BMI 計算機")]),s("div",{staticClass:"collection-img-outer"},[s("img",{attrs:{src:i("868a"),alt:""}})]),s("div",{staticClass:"collection-content"},[s("span",[t._v("作品內容說明")]),s("p",[t._v("簡單 BMI 計算機，還有一些自己加的動畫，此作品純為練習作品集用，有使用 bootstrap 框架，無任何商業用途")]),s("span",[t._v("使用語言：HTML5、SCSS、JavaScript、RWD")]),s("span",[t._v("使用套件與框架：Boostrap 4")]),s("ul",[s("li",[s("span",[t._v("GitHub")])]),s("li",[s("a",{attrs:{href:"https://github.com/dreamct25/dreamct25.github.io/tree/master/BMI_Calculator"}},[t._v("原碼")])]),s("li",[s("a",{attrs:{href:"https://dreamct25.github.io/BMI_Calculator/"}},[t._v("網頁")])])])])])])}],Ot=(i("5ab0"),{}),jt=Object(a["a"])(Ot,Et,It,!1,null,"7cf190ca",null),xt=jt.exports,Mt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"use-descript"},[i("i",{staticClass:"fal fa-angle-up"}),0==t.rwdStatus?i("span",[t._v("可點擊輪播器內的文字連結查看作品相關內容")]):i("span",[t._v(" 可點擊輪播器內的文字連結 "),i("br"),t._v("查看作品相關內容 ")])])])},Lt=[],qt={data:function(){return{rwdStatus:!1}},created:function(){414==window.innerWidth?this.rwdStatus=!0:this.rwdStatus=!1}},Ht=qt,$t=(i("5c26"),Object(a["a"])(Ht,Mt,Lt,!1,null,"9020e120",null)),Dt=$t.exports,Rt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Bt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"collection-outer"},[s("div",{staticClass:"collection-title"},[t._v("Fashion Shop")]),s("div",{staticClass:"collection-img-outer"},[s("img",{attrs:{src:i("dfe5"),alt:""}})]),s("div",{staticClass:"collection-content"},[s("span",[t._v("作品內容說明")]),s("p",[t._v(" 以 Vue Cli 為基底所開發的模擬電商網站，因有配合 Docker 所建立的虛擬機資料庫 Sql Server，還在研究如何上傳至雲端映射網址供其他人做 CRUD，故無法上傳雲端，只能於面試時於本地端展示，所有內容均為原創內容，為作品集使用，無任何商業用途。 ")]),s("span",[t._v("使用語言：HTML5、SCSS、JavaScript、ES6")]),s("span",[t._v("使用套件與框架：Boostrap 4、Vue Cli、Vue-Router、Express、Body-parser、Cors、Morgan、Mssql、Docker")]),s("a",{attrs:{href:"https://github.com/dreamct25/dreamct25.github.io/tree/master/shop_origin"}},[t._v("原碼 ( Vue Cli )")])])])])}],Jt=(i("67b7"),{}),Pt=Object(a["a"])(Jt,Rt,Bt,!1,null,"3f2a1544",null),Gt=Pt.exports,Wt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Vt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"collection-outer"},[s("div",{staticClass:"collection-title"},[t._v("個人部落格")]),s("div",{staticClass:"collection-img-outer"},[s("img",{attrs:{src:i("7de6"),alt:""}})]),s("div",{staticClass:"collection-content"},[s("span",[t._v("作品內容說明")]),s("p",[t._v(" 個人部落格，內部所有的版面設計與動畫皆為原創製作，串接 FireBase 製作內部文章資料可修改、新增、刪除，與文章的留言功能，透過 SPA 切換個分頁，以減少畫面重新刷新所耗費的時間。目前還是開放功能測試，文章管理帳密 test，之後會不定期關閉功能測試，如有更動到內部內容請在該篇文章底下留言告知。 ")]),s("span",[t._v("使用語言：HTML5、SCSS、JavaScript、Boostrap 4、Vue Cli、FireBase")]),s("ul",[s("li",[s("span",[t._v("GitHub")])]),s("li",[s("a",{attrs:{href:"https://github.com/dreamct25/dreamct25.github.io/tree/master/blog_origin"}},[t._v("原碼( Vue Cli )")])]),s("li",[s("a",{attrs:{href:"https://dreamct25.github.io/blog/#/"}},[t._v("網頁")])])])])])])}],Ft=(i("aa9f"),{}),zt=Object(a["a"])(Ft,Wt,Vt,!1,null,"1e326f97",null),Ut=zt.exports;s["a"].use(u["a"]);var Yt=[{path:"*",redirect:"/"},{path:"/",name:"Home",component:S,children:[{path:"calculater",name:"calculater",component:k},{path:"canvas",name:"canvas",component:j},{path:"clock",name:"clock",component:H},{path:"imagecontroler",name:"imagecontroler",component:J},{path:"memory",name:"memory",component:F},{path:"mind",name:"mind",component:Q},{path:"music",name:"music",component:it},{path:"player",name:"player",component:ot},{path:"puzzle",name:"puzzle",component:dt},{path:"todolist",name:"todolist",component:gt},{path:"travel",name:"travel",component:wt},{path:"weather",name:"weather",component:Nt},{path:"weight",name:"weight",component:xt},{path:"shop",name:"shop",component:Gt},{path:"blog",name:"blog",component:Ut},{path:"descript",name:"descript",component:Dt}]}],Xt=new u["a"]({routes:Yt}),Qt=Xt;i("4989"),i("ab8b");s["a"].config.productionTip=!1,new s["a"]({router:Qt,render:function(t){return t(r)}}).$mount("#app")},5710:function(t,e,i){t.exports=i.p+"img/travel.8e706475.jpg"},"5ab0":function(t,e,i){"use strict";i("b67b")},"5c26":function(t,e,i){"use strict";i("dc60")},"63d0":function(t,e,i){},"67b7":function(t,e,i){"use strict";i("a831")},"6c43":function(t,e,i){"use strict";i("a3b5")},"7de6":function(t,e,i){t.exports=i.p+"img/blog.d07a4874.jpg"},"85ec":function(t,e,i){},"868a":function(t,e,i){t.exports=i.p+"img/weight.1c3e48c3.jpg"},"91f4":function(t,e,i){},9462:function(t,e,i){t.exports=i.p+"img/canvas.ec03ff6a.jpg"},"946e":function(t,e,i){"use strict";i("b8b3")},"950d":function(t,e,i){t.exports=i.p+"img/image-controler.88507f4b.jpg"},9783:function(t,e,i){"use strict";i("c4f3")},a3b5:function(t,e,i){},a831:function(t,e,i){},aa9f:function(t,e,i){"use strict";i("472a")},b67b:function(t,e,i){},b6cb:function(t,e,i){},b8b3:function(t,e,i){},bc90:function(t,e,i){t.exports=i.p+"img/puzzle.b73d23a0.jpg"},bd60:function(t,e,i){"use strict";i("63d0")},c25c:function(t,e,i){},c4f3:function(t,e,i){},c6d3:function(t,e,i){},d08a:function(t,e,i){"use strict";i("0885")},dc60:function(t,e,i){},dfe5:function(t,e,i){t.exports=i.p+"img/shop.74d2579d.jpg"},ed46:function(t,e,i){t.exports=i.p+"img/music.947c9625.jpg"},f012:function(t,e,i){t.exports=i.p+"img/clock.0d99d63c.jpg"},f528:function(t,e,i){}});
//# sourceMappingURL=app.ab9a9d7a.js.map