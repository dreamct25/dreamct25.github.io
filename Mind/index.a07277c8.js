// © CopyRight 2021-08 - 2023-09 Alex Chen. Library Language - Typescript Ver 1.6.1
// Work Environment Typescript v5.2.2、ESlint v8.49.0
//
/* eslint-disable no-return-assign *//* eslint-disable promise/param-names *//* eslint-disable no-prototype-builtins *//* eslint-disable @typescript-eslint/no-redeclare *//* eslint-disable @typescript-eslint/no-invalid-void-type *//* eslint-disable @typescript-eslint/no-unused-expressions *//* eslint-disable @typescript-eslint/no-non-null-assertion *//* eslint-disable @typescript-eslint/method-signature-style *//* eslint-disable @typescript-eslint/no-this-alias *//* eslint-disable @typescript-eslint/strict-boolean-expressions *//* eslint-disable @typescript-eslint/no-confusing-void-expression *//* eslint-disable @typescript-eslint/restrict-template-expressions *//* eslint-disable @typescript-eslint/consistent-type-assertions *///
// Use in ESModule
// export default $
// String tips when use method
let e;function t(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},r=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(s).filter(function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable}))),r.forEach(function(t){var r;r=s[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r})}return e}const s=e=>{let t="string"==typeof e?document.querySelectorAll(e).length>1?document.querySelectorAll(e):document.querySelector(e):e;return t.texts=e=>{if(!e)return t.textContent;t.textContent=e},t.html=e=>{if(!e)return t.innerHTML;t.innerHTML=e},t.addClass=e=>(t.classList.add(e),t)// 更新方法 2022/03/12 變形為可鏈式寫法
,t.removeClass=e=>(t.classList.remove(e),t)// 更新方法 2022/03/12 變形為可鏈式寫法
,t.toggleClass=e=>t.classList.toggle(e)// 更新方法 2021/09/20
,t.on=(e,s)=>{t[["on",e].join("")]=e=>s.call(s,t,e)}// 更新方法 2021/09/20
,t.listener=(e,s)=>t.addEventListener(e,s),t.removeListener=(e,s)=>t.removeEventListener(e,s)// 更新方法 2022/01/04
,t.val=e=>{if(!e)return t.value;t.value=e},t.attr=(e,s)=>s?t.setAttribute(e,s):t.getAttribute(e),t.props=(e,s)=>s?t[e]=s:t[e],t.sibling=e=>t[e]// 更新方法 2021/08/31
,t.child=e=>t.children[e]// 更新方法 2021/08/31
,t.childFirst=()=>t.firstElementChild// 更新方法 2021/08/31
,t.childLast=()=>t.lastElementChild// 更新方法 2021/08/31
,t.parent=()=>t.parentNode// 更新方法 2021/08/31
,t.appendDom=e=>t.append(e)// 更新方法 2021/09/12
,t.removeDom=()=>t.remove()// 更新方法 2021/09/12
,t.removeChildDom=()=>t.replaceChildren()// 更新方法 2021/10/25
,t.appendDomText=e=>t.appendChild(e)// 更新方法 2021/09/12
,t.easyAppendDom=(e,s)=>t.insertAdjacentHTML("afterDom"!==e?"afterbegin":"beforeend",s)// 更新方法 2021/11/25
,t.styles=(e,r,a)=>{// 更新方法 2021/10/26
// 更新方法 2022/03/12 變形為可鏈式寫法
if(!s.includes(["set","remove"],e)){s.console("error","First parameter method must use string and keyword is 'set' or 'remove'.");return}return"set"===e?t.style.setProperty(r,a):t.style.removeProperty(r),t},t.getDomStyles=e=>{let r={};return"object"!=typeof e?s.console("error","Parameter must use array."):0===e.length?s.console("error","Parameter must use array,and css property must in array with string."):s.each(e,e=>r[e]=getComputedStyle(t).getPropertyValue(e)),r},t.getDomPos=()=>({x:t.props("offsetLeft"),y:t.props("offsetTop")-window.scrollY,top:t.props("offsetTop"),left:t.props("offsetLeft"),right:t.props("offsetLeft")+t.props("offsetWidth"),bottom:t.props("offsetTop")+t.props("offsetHeight")-window.scrollY,width:t.props("offsetWidth"),height:t.props("offsetHeight")}),t.scrollToTop=e=>{let s;let[r,a]=Object.keys(e),o=t[r],n=e[r]-o,l=+new Date,i=e=>{let{currentTime:t,startVal:s,changeVal:r,animateDuration:a}=e,o=t;return(o/=a/2)<1?r/2*o*o+s:-r/2*((o-=1)*(o-2)-1)+s};(s=()=>{let c=+new Date-l;t.scrollTop=Number(i({currentTime:c,startVal:o,changeVal:n,animateDuration:e[a]})),c<e[a]?requestAnimationFrame(s):t.scrollTop=e[r]})()},t.useWillMount=e=>{"object"==typeof t&&s.typeOf(t,"HTMLDocument")?t.listener("readystatechange",({target:t})=>"interactive"===t.readyState&&e.call(e,t)):s.console("error","UseWillMount hook just use when selector document.")},t.useMounted=e=>{"object"==typeof t&&s.typeOf(t,"HTMLDocument")?t.listener("readystatechange",({target:t})=>"complete"===t.readyState&&e.call(e,t)):s.console("error","UseMounted Hook just use when selector document.")},t};// public function
s.each=(e,t)=>e.forEach((e,s)=>t.call(t,e,s)),s.maps=(e,t)=>e.map((e,s)=>t.call(t,e,s)),s.filter=(e,t)=>e.filter(e=>t.call(t,e)),s.find=(e,t)=>e.find(e=>t.call(t,e))// 更新方法 2022/03/12
,s.sort=(e,t)=>e.sort((e,s)=>t.call(t,e,s)),s.sum=(e,t,s)=>s?e.reduce((e,s)=>t.call(t,e,s),s):e.reduce((e,s)=>t.call(t,e,s)),s.indexOf=(e,t)=>e.indexOf(t),s.includes=(e,t)=>e.includes(t),s.findIndexOfObj=(e,t)=>e.findIndex(e=>t.call(t,e)),s.findObjProperty=(e,t)=>e.hasOwnProperty(t)// 更新方法 2022/03/23
,s.mergeArray=(e,t,s)=>s?e.concat(t):s.call(s,e.concat(t))// 更新方法 2022/03/23
,s.typeOf=(e,t)=>t?e.constructor.name===t:e.constructor.name// 更新方法 2021/10/26
,s.console=(e,...t)=>console[e](...t)// 更新方法 2021/10/26
,s.localData=(e,t,r)=>"get"===e?s.convert(localStorage.getItem(t),"json")||[]:localStorage.setItem(t,s.convert(r,"stringify"))// 更新方法 2021/11/29
,s.getNumberOfDecimal=(e,t)=>parseInt(e.toFixed(t))// 更新方法 2022/09/28
,s.createCustomEvent=(e,t)=>t?new CustomEvent(e,{detail:t}):new CustomEvent(e)// 更新方法 2022/07/13
,s.registerCustomEvent=(e,t)=>window.addEventListener(e,t)// 更新方法 2022/07/13
,s.useCustomEvent=e=>window.dispatchEvent(e)// 更新方法 2022/07/13
,s.removeCustomEvent=(e,t)=>window.removeEventListener(e,t)// 更新方法 2022/07/13
,s.createPromise=async e=>await new Promise((t,s)=>e.call(e,t,s))// 更新方法 2022/07/14
,s.createPromiseAll=async e=>await Promise.all(e)// 更新方法 2022/07/14
,s.createDomText=e=>document.createTextNode(e)// 更新方法 2021/09/12
,s.objDetails=(e,t)=>t&&s.includes(["keys","values","entries"],t)?Object[t](e):s.console("error","please enter secode prameter 'keys' or 'values' or 'entries' in type string")// 更新方法 2021/09/12
,s.isObjectTheSame=(e,t)=>s.convert(e,"stringify")===s.convert(t,"stringify")// 更新方法 2023/06/01
,s.useBase64=(e,t)=>"encode"===e?btoa(t):atob(t)// 更新方法 2021/11/24
,s.useSHA=async(e,t)=>{// Cryptoing only working in https of production or http of development environment
let s=await window.crypto.subtle.digest(e,new TextEncoder().encode(t));return Array.from(new Uint8Array(s)).map(e=>e.toString(16).padStart(2,"0")).join("")},s.useUnicode=(e,t)=>"encode"===t?s.createArray({type:"fake",item:{random:e.length}},t=>{let s=e.charCodeAt(t),r=s.toString(16);return s<15?`\\u000${r.toUpperCase()}`:s<255?`\\u00${r.toUpperCase()}`:s<4095?`\\u0${r.toUpperCase()}`:`\\u${r.toUpperCase()}`}).join(""):e.replace(/\\u(\d{4})/g,(e,t)=>String.fromCharCode(parseInt(t,16))),s.createArray=({type:e,item:t},r)=>{if("fake"===e){if("random"in t&&s.typeOf(t.random,"Number")&&void 0!==r&&s.typeOf(r,"Function"))return Array.from({length:t.random},(e,t)=>r.call(r,t));s.console("error","item property must have random in object and radom type must be number,with call back function in secode parameters.")}else if("new"===e&&!("random"in t))return Array.from(t)},s.convert=(e,t)=>{// 更新方法 2021/10/22
// 更新泛型回傳值 2022/03/19
if(e&&t){if(s.typeOf(e,"Object")&&s.includes(["string","number","float","boolean"],t)){s.console("error",`Convert value can't be object when use convert type ${t}.`);return}}else{s.console("error","Please enter first parameters value who want to convert and seconde paramters value is convert type 'string' or 'number' or 'float' or 'boolean' or 'json' or 'stringify'.");return}let r={string:String(e),number:parseInt(e),float:parseFloat(e),boolean:!!e,json:"json"===t&&JSON.parse(e),stringify:"stringify"===t&&JSON.stringify(e)};return r[t]},s.createDom=(e,t)=>{let r=document.createElement(e),a=Object.entries(t);return s.each(a,e=>{let[t,a]=e;if(s.typeOf(a,"Object")){let[t,s]=e,[[a,o]]=Object.entries(s);r[t][a]=o}else r[t]=s.typeOf(a,"String")?a.trim():a}),r},s.currencyTranser=(e,t,r)=>{if(s.typeOf(e,"Number")){let s=r?{style:"currency",currency:t}:{};return new Intl.NumberFormat(t||"TWN",s).format(e)}s.console("error","First argument formatNumber type must use number.")},s.formatDateTime=e=>{var t;// #region 參數設定
/**
       * @param {object}
       * {
       *   formatDate: Date || string || number,
       *   formatType:string, <= 取日期時間格式 yyyy-MM-dd HH:mm:ss 等方式
       *   toROCYear:boolean <= 輸出民國年，可選參數
       *   localCountryTime:number <= localCountryTime 根據時區格式化，預設為 GMT+8，可選參數
       *   toDateFullNumber <= toDateFullNumber 將當前格式化時間改為數字，可以用於排序上，可選參數
       *   customWeekItem <= customWeekItem 放入格式化文字日別，如 ['週一','週二',...'週日'] // 更新方法 2021/08/02
       * }
       * @returns {string | number}
       */// #endregion
if(!(s.findObjProperty(e,"formatDate")||s.findObjProperty(e,"formatType"))){s.console("error","Please enter an object and use formatType property in the object.");return}if(s.findObjProperty(e,"customWeekItem")){if("Array"!==s.typeOf(e.customWeekItem)){s.console("error","customWeekItem property Must use array.");return}if(e.customWeekItem.length<=6||e.customWeekItem.length>7){s.console("error","customWeekItem property must put seven days name of week in array.");return}e.customWeekItem=[e.customWeekItem[e.customWeekItem.length-1],...e.customWeekItem].removeFirst()}let r=("localCountryTime"in e?null!==(t=e.localCountryTime)&&void 0!==t?t:0:8)*36e5,a=new Date(s.typeOf(e.formatDate,"Number")?e.formatDate:+new Date(e.formatDate)+r).toJSON(),o=a.replace(/T/g,"-").replace(/:/g,"-").replace(/\./g,"-").replace(/Z/g,"").split("-"),[n,l,i,c,p,u,d]=o,m=(null==e?void 0:e.toROCYear)?(parseInt(n)-1911).toString():n// 更新方法 2023/03/08
;if(s.findObjProperty(e,"toDateFullNumber"))return s.convert(o.join(""),"number");// 更新是否格式化 AM 或 PM 2022/03/19
if(e.formatType.match("tt")){let t=s.convert(c,"number")>11?"PM":"AM",r=s.convert(c,"number")-12<10?`0${s.convert(c,"number")-12}`:s.convert(s.convert(c,"number")-12,"string");return e.formatType.replace(/yyyy/g,m).replace(/MM/g,l).replace(/dd/g,i).replace(/HH/g,r).replace(/mm/g,p).replace(/ss/g,u).replace(/ms/g,d).replace(/tt/g,t)}return s.findObjProperty(e,"customWeekItem")?{fullDateTime:e.formatType.replace(/yyyy/g,m).replace(/MM/g,l).replace(/dd/g,i).replace(/HH/g,c).replace(/mm/g,p).replace(/ss/g,u).replace(/ms/g,d),getWeekName:e.customWeekItem[new Date(+new Date(e.formatDate)).getDay()]}:e.formatType.replace(/yyyy/g,m).replace(/MM/g,l).replace(/dd/g,i).replace(/HH/g,c).replace(/mm/g,p).replace(/ss/g,u).replace(/ms/g,d)},s.rebuildObject=(e,t)=>Object.fromEntries(Object.entries(e).map(([e,s])=>t.call(t,e,s)))// 更新方法內容 2023/09/12
;// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class r{static async fetchSetting(e,r){var a,o;// 更新類 ajax 方法 2021/09/11
// 更新類 ajax 方法內容 2021/10/21
// #region 參數設定
/**
           * @param {string} method
           * @param {string} url
           * @param {object} header 追加 hearder 物件 2021/10/21
           * @param {object} data
           * @param {object} routeParams 追加 routeParams 路由參數 2022/05/01
           * @param {object} queryParams 追加 queryParams 路由參數 2022/11/21
           * @param {string} contentType
           * @param {boolean} useFormData 追加 useFormData 是否使用 form 表屬性 2022/04/22
           * @param {boolean} useXMLHttpRequest 追加 useXMLHttpRequest 是否使用 XMLHttpRequest 2022/04/22
           * @param {number} timeout 追加 timeout 逾時請求處理參數 (單位毫秒 Ex:1000 = 1秒) 2023/03/08
           * @param {string} retunType 追加 retunType 回傳轉譯 2022/08/26
           * @param {Function} beforePost <= 回呼函式
           * @param {Function} successFn <= 回呼函式
           * @param {Function} excuteDone <= 回調函式 追加方法 2022/03/14
           * @param {Function} errorFn <= 回呼函式
           */// #endregion
let n={},{method:l,headers:i,contentType:c,useFormData:p,useXMLHttpRequest:u,returnType:d,data:m,routeParams:y,queryParams:h,timeout:f,beforePost:g,successFn:v,excuteDone:b,errorFn:x}=e;n.method=l,e.url=this.baseUrl?`${this.baseUrl}${e.url}`:e.url;let T=null!=d?d:"json";if(l){if(!s.includes(["get","post","patch","put","delete"],l.toLocaleLowerCase())){s.console("error","Method value must use valid request method,like get、post ...");return}}else{s.console("error","Property name method is required in obejct parameters.");return}if(e.useFormData=!!p,y){let[t]=s.objDetails(y,"keys");e.url=`${e.url}/${y[t]}`}if(h){let t=s.maps(s.objDetails(h,"entries"),([e,t])=>`${e}=${t}`).join("&");e.url=`${e.url}?${t}`}if((s.objDetails(this.baseHeaders,"keys").length>0||i&&s.objDetails(i,"keys").length>0)&&(n.headers=s.objDetails(this.baseHeaders,"keys").length>0?this.baseHeaders:t({"Content-Type":"application/json"},i)),m&&(p?n.body=this.convertFormData(m):(n.headers=s.objDetails(this.baseHeaders,"keys").length>0?this.baseHeaders:{"Content-Type":null!=c?c:"application/json"},n.body=s.convert(m,"stringify"))),(s.objDetails(this.baseHeaders,"keys").length>0||i)&&m&&(n.headers=s.objDetails(this.baseHeaders,"keys").length>0?this.baseHeaders:t({},i),n.body=p?this.convertFormData(m):s.convert(m,"stringify")),!r&&!u){if(g&&g.call(g),!v){s.console("error","Function Name successFn is required in obejct parameters.");return}if(!x){s.console("error","Function Name errorFn is required in obejct parameters.");return}}if(u){if(v){s.console("error","successFn not necessary parameters.");return}if(x){s.console("error","errorFn not necessary parameters.");return}return this.XMLHttpRequest({url:e.url,method:n.method,headers:n.headers,data:n.body})}let C=new AbortController;f&&setTimeout(()=>C.abort(),f);let w=await fetch(e.url,f?(a=t({},n),o=o={signal:C.signal},Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(o)):(function(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);s.push.apply(s,r)}return s})(Object(o)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(o,e))}),a):n);if(r)return await new Promise(async(e,t)=>{if(w.status>=200&&w.status<400){let t=await w[T]();e({bodyUsed:w.bodyUsed,headers:w.headers,ok:w.ok,redirected:w.redirected,status:w.status,statusText:w.statusText,type:w.type,url:w.url,data:t})}else t({bodyUsed:w.bodyUsed,headers:w.headers,ok:w.ok,redirected:w.redirected,status:w.status,statusText:w.statusText,type:w.type,url:w.url})});try{if(w.status>=200&&w.status<400){let e=await w[T]();null==v||v.call(v,{bodyUsed:w.bodyUsed,headers:w.headers,ok:w.ok,redirected:w.redirected,status:w.status,statusText:w.statusText,type:w.type,url:w.url,data:e}),// eslint-disable-next-line @typescript-eslint/prefer-optional-chain
b&&b.call(b)}else throw Error(JSON.stringify({bodyUsed:w.bodyUsed,headers:w.headers,ok:w.ok,redirected:w.redirected,status:w.status,statusText:w.statusText,type:w.type,url:w.url}))}catch(e){null==x||x.call(x,JSON.parse(e.message))}}static XMLHttpRequest(e){let t=new XMLHttpRequest;return t.open(e.method,e.url,!0),(null==e?void 0:e.headers)&&s.each(s.objDetails(null==e?void 0:e.headers,"entries"),([e,s])=>t.setRequestHeader(e,s)),{xhrResponseResult:e=>{t.onreadystatechange=()=>{if(t.readyState===t.DONE&&t.status>=200&&t.status<=399)try{let s=JSON.parse(t.responseText);e.call(e,s)}catch(e){s.console("error",e)}t.status>=400&&s.console("error",t.statusText)}},xhrUploadProgress:e=>{t.upload.onprogress=t=>{if(t.lengthComputable){let s=100*t.loaded/t.total;e.call(e,s)}}},xhrRequestStart:()=>t.send((null==e?void 0:e.data)||void 0)}}static convertFormData(e){let t=new FormData;return s.each(s.objDetails(e,"entries"),([e,s])=>t.append("uploadFile"===e?"FileList":e,s)),t}static createBase({baseUrl:e,baseHeaders:t}){// #region
/** 參數設定
           * @param {string} baseUrl 固定網址，設定後網址後半部變動部分只須設定 url
           * @param {object} baseHeaders 固定使用的 headers 內容，如 token、Content-Type 之類的
           */// #endregion
this.baseUrl=e,this.baseHeaders=t}}r.baseUrl="",r.baseHeaders={};class a extends r{}// 更新 Promise 導出 get 方法 2022/05/01
a.get=async(e,s)=>await a.fetchSetting(t({method:"get",url:e},s),!0),// 更新 Promise 導出 post 方法 2022/05/01
a.post=async(e,s)=>await a.fetchSetting(t({method:"post",url:e},s),!0),// 更新 Promise 導出 patch 方法 2022/05/01
a.patch=async(e,s)=>await a.fetchSetting(t({method:"patch",url:e},s),!0),// 更新 Promise 導出 put 方法 2022/05/01
a.put=async(e,s)=>await a.fetchSetting(t({method:"put",url:e},s),!0),// 更新 Promise 導出 delete 方法 2022/05/01
a.delete=async(e,s)=>await a.fetchSetting(t({method:"delete",url:e},s),!0);const o=async e=>await r.fetchSetting(e,!1)// 更新 FetchClass 類方法導出 2022/03/24
;// 更新 FetchClass 類方法導出，為 fetch 基礎組態設定 2022/03/24
o.get=async(e,t)=>await a.get(e,t),o.post=async(e,t)=>await a.post(e,t),o.patch=async(e,t)=>await a.patch(e,t),o.put=async(e,t)=>await a.put(e,t),o.delete=async(e,t)=>await a.delete(e,t),o.createBase=e=>r.createBase(e),s.fetch=o,// interface JSON {
//   deepCopy<T>(obj: T): T
// }
JSON.deepCopy=e=>s.convert(s.convert(e,"stringify"),"json")// 更新方法 2023/04/22
,// interface Math {
//   toFixedNum(setting:{ value:string | number,toFloatPos:number }):(number | undefined)
// }
Math.toFixedNum=e=>{if(!e||!("value"in e)||!("toFloatPos"in e)){s.console("error","Please use object and with key value pair. ex: { value:100.1,toFloatPos:1 }");return}if(!s.typeOf(e.toFloatPos,"Number")){s.console("error","toFloatPos key must use number.");return}return s.typeOf(e.value,"String")?Number(parseFloat(e.value).toFixed(e.toFloatPos)):Number(e.value.toFixed(e.toFloatPos))},// interface String {
//     format(formatStr:string,value:any[]):(string | undefined)
//     appendText(txt:string):string
//     appendDirection(direction:padDirection,pos:number,txt:string):string
//     range(startPos:number,endPos:number):string
// }
// interface StringConstructor {
//   toChartCode(str:string):number[]
// }
String.prototype.appendText=function(e){return this.toString()+e}// 更新方法 2022/06/24
,String.prototype.appendDirection=function(e,t,s){return this["left"===e?"padStart":"padEnd"](t,s)}// 更新方法 2023/02/07
,String.prototype.range=function(e,t){return this.toString().slice(e,t)}// 更新方法 2022/11/21
,String.prototype.format=function(e,...t){if(s.typeOf(e,"String")&&s.includes(e,"{")&&s.includes(e,"}")){if(e.split("{").join("").split("}").length-1===t.length){let r=e,a=s.maps(t,(e,t)=>({replaceKey:`{${t}}`,replaceValue:e})),o=s.maps(a,({replaceKey:e,replaceValue:t})=>r=r.replace(e,t)).range(a.length-1,a.length).join("");return o}s.console("error","Can't not find else aguments.")}else s.console("error","First paramter must use type string,if use string must like this ex：abc {0} efg {1}.")},String.toChartCode=e=>s.createArray({type:"fake",item:{random:e.length}},t=>e.charCodeAt(t))// 更新方法 2023/05/31
,// interface Date {
//   calculateFullDateTime(year?: number, month?: number, day?: number, hour?: number, minute?: number, second?: number):(Date | undefined)
//   toOptionTimeZoneForISO(timeZone: number):(string | void)
//   getLocalTimeZone(): number
// }
Date.prototype.calculateFullDateTime=function(e,t,s,r,a,o){let n=new Date(this);return e&&n.setFullYear(this.getFullYear()+e),t&&n.setMonth(this.getMonth()+t),s&&n.setDate(this.getDate()+s),r&&n.setHours(this.getHours()+r),a&&n.setMinutes(this.getMinutes()+a),o&&n.setSeconds(this.getSeconds()+o),n},Date.formatCountingTime=function({formatTimesTemp:e,formatType:t}){// 更新方法 2023/08/13
// #region 參數設定
/**
   * @param {object} { formatTimesTemp: number,formatType:string ex:dd HH:mm:ss }
   * @returns {string}
   */// #endregion
let s=e=>e<10?`0${e}`:`${e}`,r=Math.abs(e),a=r/864e5,o=Math.floor(a),n=(a-o)*24,l=Math.floor(n),i=(n-l)*60,c=Math.floor((n-l)*60),p=Math.floor((i-c)*60);return t.replace(/dd/g,s(o)).replace(/HH/g,s(l)).replace(/mm/g,s(c)).replace(/ss/g,s(p))},Date.prototype.getLocalTimeZone=function(){return Math.abs(this.getTimezoneOffset()/60)}// 更新方法 2023/02/07
,Date.prototype.toOptionTimeZoneForISO=function(e){return e?new Date(+this+36e5*e).toISOString():s.console("error","Lost one parameter in function.")// 更新方法 2021/03/23
},// interface Array<T> { // 更新方法 2022/03/23
//   append(item: T): void
//   appendFirst(item: T): T[]
//   remove(pos: number): T[]
//   range(startPos: number, endPos: number): T[]
//   removeFirst(): T[]
//   removeLast(): T[]
// }
Array.prototype.append=function(e){this.push(e)}// 更新方法 2021/03/23
,Array.prototype.appendFirst=function(e){return this.unshift(e),this}// 更新方法 2021/03/23
,Array.prototype.remove=function(e){return this.splice(e,1),this}// 更新方法 2021/03/23
,Array.prototype.range=function(e,t){return this.slice(e,t)}// 更新方法 2021/03/23
,Array.prototype.removeFirst=function(){return this.shift(),this}// 更新方法 2021/03/23
,Array.prototype.removeLast=function(){return this.pop(),this}// 更新方法 2021/03/23
,// interface Map<K,V> { // 更新方法 2022/08/02
//   append(keyName: K, value: V): void
//   getValue(keyName: K): any
//   deleteKeyValue(keyName: K): boolean
//   removeAll(): void
//   isKeyInMap(keyName: K): boolean
//   toObject(): Record<string, any>
// }
Map.prototype.append=function(e,t){this.set(e,t)}// 更新方法 2022/08/02
,Map.prototype.getValue=function(e){return this.get(e)}// 更新方法 2022/08/02
,Map.prototype.deleteKeyValue=function(e){return this.delete(e)}// 更新方法 2022/08/02
,Map.prototype.removeAll=function(){this.clear()}// 更新方法 2022/08/02
,Map.prototype.isKeyInMap=function(e){return this.has(e)}// 更新方法 2022/08/02
,Map.prototype.toObject=function(){return Object.fromEntries(this)}// 更新方法 2022/08/02
,// interface Set<T> { // 更新方法 2022/08/02
//   append(value: T): void
//   deleteValue(value: T): boolean
//   isValueInSet(value: T): boolean
//   removeAll(): void
//   toArray<T>(): T[]
// }
Set.prototype.append=function(e){this.add(e)}// 更新方法 2022/08/02
,Set.prototype.deleteValue=function(e){return this.delete(e)}// 更新方法 2022/08/02
,Set.prototype.isValueInSet=function(e){return this.has(e)}// 更新方法 2022/08/02
,Set.prototype.removeAll=function(){this.clear()}// 更新方法 2022/08/02
,Set.prototype.toArray=function(){return[...this]}// 更新方法 2022/08/02
,// interface Object { // 更新方法 2022/08/02
//   toMap(obj: Record<string, any>): Map<string, any>
// }
Object.prototype.toMap=function(e){return new Map(Object.entries(e))}// 更新方法 2022/08/02
;let n=[],l="",i=-1,c=!1,p=[],u=[];// 設定點擊內容所加入的文字
const d=({target:e})=>{c=!0,"A"===e.dataset.choose?(s(".text-first").addClass("texts-trans"),s(".text-second").removeClass("texts-trans"),l=({[`${i>=0&&i<=6}`]:"E",[`${i>=7&&i<=13}`]:"N",[`${i>=14&&i<=20}`]:"F",[`${i>=21&&i<=27}`]:"J"}).true):(s(".text-second").addClass("texts-trans"),s(".text-first").removeClass("texts-trans"),l=({[`${i>=0&&i<=6}`]:"I",[`${i>=7&&i<=13}`]:"S",[`${i>=14&&i<=20}`]:"T",[`${i>=21&&i<=27}`]:"P"}).true)},m=({target:e})=>{s(e).addClass("confirm-active"),setTimeout(()=>s(e).removeClass("confirm-active"),540),setTimeout(()=>s(".custom-modal-outer").removeClass("modal-toggle"),890)},y=({target:t})=>{if(console.log(p),c||-2===i||-1===i)s(".Q-outer").attr("class").split(" ").length>=3?(s(".Q-outer").removeClass("Qadd-in").addClass("Qadd-out"),setTimeout(()=>{s(".text-first").removeClass("texts-trans"),s(".text-second").removeClass("texts-trans")},900),e=setTimeout(()=>{s(".Q-outer").removeClass("Qadd-out").addClass("Qadd-in")},1e3)):(setTimeout(()=>s(".Q-outer").addClass("Qadd-in"),1e3),s(".Q-outer").removeClass("Qadd-out"));else{s(".custom-modal-outer").addClass("modal-toggle");return}i<=0?(s(t).addClass("next-trans"),setTimeout(()=>s(t).removeClass("next-trans"),490)):(s(t).addClass("next-trans-pos").removeClass("next-trans"),setTimeout(()=>s(t).removeClass("next-trans-pos"),490)),-1===i?(s(t).addClass("next-trans"),s(t).styles("set","opacity","0"),s(".explain").removeClass("explain-show"),s(window).removeListener("scroll",T),C(),setTimeout(()=>{s(t).removeClass("next-trans"),s(t).styles("set","opacity","1")},1e3),setTimeout(()=>s(".explain").styles("set","display","none"),1001),setTimeout(()=>s(".Q-outer").styles("set","display","block"),1003)):-2===i&&(l="",s(t).addClass("next-move-out"),s(".type-text-content").addClass("type-text-content-hide"),s(window).listener("scroll",T),C(),setTimeout(()=>{s(".explain").styles("set","display","block"),s(".type-text-content").styles("set","display",""),s(".type-text-content").texts(""),s(t).addClass("next-small")},990),setTimeout(()=>{s(".explain").addClass("explain-show"),s(".type-text-content").removeClass("type-text-content-hide").removeClass("type-text-content-in"),s(t).removeClass("next-move-out").removeClass("next-move")},1110),setTimeout(()=>{s(t).removeClass("next-small"),s(".next").texts("開始"),s(t).styles("set","opacity","1")},1310)),c=!1,++i>=1&&n.append(l),setTimeout(()=>{if(28===i)i=-2,clearTimeout(e),setTimeout(()=>g(),500),s(t).removeClass("next-active").removeClass("btn-start"),s(t).styles("set","opacity","0"),s(".prev").removeClass("prev-active").removeClass("btn-start"),s(t).addClass("next-trans-hide");else if(i>-1){let{qNum:e,qT:r,ansA:a,ansB:o}=p[i];s(".quest").texts(r),s(".text-first").texts(a),s(".text-second").texts(o),0===e&&0===i?(s(t).texts("下一題"),s(t).addClass("btn-start"),s(".text-first").removeClass("texts-hide"),s(".text-second").removeClass("texts-hide")):1===e&&1===i?(s(t).addClass("next-active"),s(".prev").addClass("prev-active").addClass("btn-start"),s(".prev").texts("上一題")):27===e&&27===i&&s(t).texts("查詢結果")}},900),setTimeout(()=>{let{quest:e,chooseFt:t,chooseSd:r}=f();s(".quest").styles("set","text-align",e),s(".text-first").styles("set","text-align",t),s(".text-second").styles("set","text-align",r)},910)},h=({target:e})=>{0==--i?(s(".next").removeClass("next-active"),s(".prev").removeClass("prev-active")):i>=0&&(s(e).addClass("prev-trans-pos"),setTimeout(()=>s(e).removeClass("prev-trans-pos"),490)),s(".Q-outer").attr("class").split(" ").length>=3&&(s(".Q-outer").addClass("Qremove-in").removeClass("Qadd-in"),setTimeout(()=>{s(".text-first").removeClass("texts-trans"),s(".text-second").removeClass("texts-trans")},900),setTimeout(()=>{s(".Q-outer").removeClass("Qremove-in").addClass("Qadd-in")},1e3)),n.removeLast(),setTimeout(()=>{let{qNum:e,qT:t,ansA:r,ansB:a}=p[i];s(".quest").texts(t),s(".text-first").texts(r),s(".text-second").texts(a),27===e&&s(".next").texts("下一題")},900),setTimeout(()=>{let{quest:e,chooseFt:t,chooseSd:r}=f();s(".quest").styles("set","text-align",e),s(".text-first").styles("set","text-align",t),s(".text-second").styles("set","text-align",r)},910)},f=()=>{let e=s(".quest").texts(),t=s(".text-first").texts(),r=s(".text-second").texts();return window.innerWidth<=768?{quest:e.length>16?"justify":"center",chooseFt:t.length>17?"justify":"center",chooseSd:r.length>17?"justify":"center"}:{quest:e.length>27?"justify":"center",chooseFt:t.length>27?"justify":"center",chooseSd:r.length>27?"justify":"center"}},g=()=>{let e=s.maps([["E","外向"],["I","內向"],["N","直覺"],["S","感覺"],["T","理性"],["F","情感"],["J","判斷"],["P","理解"]],(e,t)=>{let[s,r]=e;return{num:t,type:s,typeName:r,count:0}}),t=s.maps(e,e=>(e.count=s.filter(n,t=>t===e.type).length,e.count>=4&&e.type)).filter(e=>!1!==e).join("");x(e,t)},v=e=>s.maps([["E","外向","I","內向"],["N","直覺","S","感覺"],["T","理性","F","情感"],["J","判斷","P","理解"]],t=>{let[s,r,a,o]=t;return e===s?`${a} ( ${o} )`:e===a&&`${s} ( ${r} )`}).filter(e=>!1!==e).join(""),b=e=>s.maps(e,({maxType:e,minType:t})=>`
    <div class="col-md-6">
        <div class="percent">
        ${e} 
            <div class="progress-outer">
                <div class="progress-bar-custom">
                    <span>0 %<span>
                </div>
            </div>
        ${t}
        </div>
    </div>
`).join(""),x=(e,t)=>{let r=0;s(".Q-outer").styles("set","display",""),s(".type-text-content").styles("set","display","flex"),setTimeout(()=>{setTimeout(()=>{let e=setInterval(()=>{r>=5?(s(".loading-font").texts("計算完成"),clearInterval(e)):r++},1e3)},10),s(".type-text-content").html(`
            <div class="loading-outer">
                <div class="loading"></div>
                <span class="loading-font">計算中</span>
            </div>`)},1e3),setTimeout(()=>s(".loading-outer").addClass("loading-outer-out"),8e3);let a=s.maps(t.split(""),t=>{let r=s.filter(e,({type:e})=>e===t);return r.length>0&&s.maps(r,({count:e,type:t,typeName:s})=>({percent:Math.floor(100/(Math.floor(7/e*100)/100)),maxType:`${t} ( ${s} )`,minType:v(t)}))[0]}).filter(e=>!1!==e),o=s.filter(u,e=>e.originsType===t).map(e=>`
        <div class="row">
            <div class="col-md-12">
                <span class="type-title">您的類型</span>
                <span class="type-origins">${e.originsType}</span>
                <span class="type-name">${e.nameType}</span>
                <span class="type-think">( ${e.thinkType} )</span>
                <div class="percent-outer">
                    <div class="row">
                        ${b(a)}
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="type-think-details-group">
                            <span class="type-think-detailsA">${e.thinkTypeA}</span>
                            <span class="type-think-detailsA">${e.thinkTypeAa}</span>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="type-think-details-group">
                            <span class="type-think-detailsB">${e.thinkTypeB}</span>
                            <span class="type-think-detailsB">${e.thinkTypeBb}</span>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="type-think-details-group">
                            <span class="type-think-detailsC">${e.thinkTypeC}</span>
                            <span class="type-think-detailsC">${e.thinkTypeCc}</span>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="type-think-details-group">
                            <span class="type-think-detailsD">${e.thinkTypeD}</span>
                            <span class="type-think-detailsD">${e.thinkTypeDd}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12">
                <ul class="type-content">
                    <li>性格總體描述</li>
                    <li>${e.explainType}</li>
                    <li>適合的職業類型</li>
                    <li>${e.explainObject}</li>
                </ul>
                <ul class="type-love">
                    <li>戀愛時</li>
                    <li>角色類型 - ${e.loveType}</li>
                    <li>${e.explainLove}</li>
                </ul>
                <ul class="type-fall-love">
                    <li>失戀時</li>
                    <li>${e.explainFallLove}</li>
                </ul>
            </div>
        </div>
    `).join("");o&&setTimeout(()=>{C(),s(".type-text-content").addClass("type-text-content-in").html(o)},9500),o&&setTimeout(()=>{s.each(a,({percent:e},t)=>{setTimeout(()=>{let r=0,a=setInterval(()=>{r===e?clearInterval(a):(r++,s(s(".progress-bar-custom")[t]).styles("set","width",`${r}%`),s(s(".progress-bar-custom span")[t]).texts(`${r} %`))},16)},5e3)})},9700),o&&setTimeout(()=>{setTimeout(()=>{s(".prev").removeClass("next-trans-hide"),s(".next").addClass("next-move").removeClass("next-trans-hide")},200),s(".next").texts("重新測驗"),n=[]},26500)},T=()=>{let{top:e,height:t}=s(".next-outer").getDomPos(),r=window.scrollY,a=window.innerHeight+r;e+t/2<a?s(".next").addClass("next-in"):s(".prev").removeClass("next-in")},C=()=>s("body").scrollToTop({scrollTop:0,duration:3e3}),w=async()=>{let e=await s.fetch.get("https://collect-service.vercel.app/mind/v1/questions");p=e.data.data;let t=await s.fetch.get("https://collect-service.vercel.app/mind/v1/final_test");u=t.data.data;let r="MBTI16種性格測驗",a=-1,o=0,n="";s(".title").addClass("title-in"),s(".next").texts("開始");let l=setInterval(()=>{a===r.length-1&&o===r.length?(clearInterval(l),n=""):(n=n.appendText(`${r.slice(a+=1,o+=1)}`),s(".title").texts(n))},300);s(".explain").addClass("explain-show"),window.innerWidth<=414&&s(".type-font-group").html(`
        <ul class="listA">
            <li>
                I . 心理能力的走向<br>
                你是「外向 E」( Extrovert )？
                <br>
                還是「內向 I」( Introvert )？
            </li>
            <li>
                II . 認識外在世界的方法
                <br>
                你是「感覺 S」( Sensing )？
                <br>
                還是「直覺 N」( Intuition )？
            </li>
            <li>
                III . 倚賴甚麼方式做決定
                <br>
                你是「理性 T」( Thinking )？
                <br>
                還是「情感 F」( Feeling )？
            </li>
            <li>
                IV . 生活方式和處事態度
                <br>
                你是「判斷 J」( Judging )？
                <br>
                還是「理解 P」( Perceiving )？
            </li>
        </ul>
        <ul class="listB mt-5">
            <li>
                請輕鬆作答便可
                <br>
                測驗結果可依個人官感參考
                <br>
                也可當成玩樂性質
            </li>
            <li>
                題目總共 28 題，請依直覺判斷喔~
                <br>
                感謝您的使用
            </li>
        </ul>
    `)};s(document).useMounted(()=>{w(),s.each(s(".texts"),e=>s(e).listener("click",d)),s(".prev").listener("click",h),s(".next").listener("click",y),s(".confirm").listener("click",m),s(window).listener("scroll",T)});