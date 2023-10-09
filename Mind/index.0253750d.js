// © CopyRight 2021-08 - 2023-09 Alex Chen. Library Language - Typescript Ver 1.6.1
// Work Environment Typescript v5.2.2、ESlint v8.49.0
//
/* eslint-disable no-return-assign *//* eslint-disable promise/param-names *//* eslint-disable no-prototype-builtins *//* eslint-disable @typescript-eslint/no-redeclare *//* eslint-disable @typescript-eslint/no-invalid-void-type *//* eslint-disable @typescript-eslint/no-unused-expressions *//* eslint-disable @typescript-eslint/no-non-null-assertion *//* eslint-disable @typescript-eslint/method-signature-style *//* eslint-disable @typescript-eslint/no-this-alias *//* eslint-disable @typescript-eslint/strict-boolean-expressions *//* eslint-disable @typescript-eslint/no-confusing-void-expression *//* eslint-disable @typescript-eslint/restrict-template-expressions *//* eslint-disable @typescript-eslint/consistent-type-assertions *///
// Use in ESModule
// export default $
// String tips when use method
function e(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},s=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),s.forEach(function(t){var s;s=r[t],t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s})}return e}const t=e=>{let r="string"==typeof e?document.querySelectorAll(e).length>1?document.querySelectorAll(e):document.querySelector(e):e;return r.texts=e=>{if(!e)return r.textContent;r.textContent=e},r.html=e=>{if(!e)return r.innerHTML;r.innerHTML=e},r.addClass=e=>(r.classList.add(e),r)// 更新方法 2022/03/12 變形為可鏈式寫法
,r.removeClass=e=>(r.classList.remove(e),r)// 更新方法 2022/03/12 變形為可鏈式寫法
,r.toggleClass=e=>r.classList.toggle(e)// 更新方法 2021/09/20
,r.on=(e,t)=>{r[["on",e].join("")]=e=>t.call(t,r,e)}// 更新方法 2021/09/20
,r.listener=(e,t)=>r.addEventListener(e,t),r.removeListener=(e,t)=>r.removeEventListener(e,t)// 更新方法 2022/01/04
,r.val=e=>{if(!e)return r.value;r.value=e},r.attr=(e,t)=>t?r.setAttribute(e,t):r.getAttribute(e),r.props=(e,t)=>t?r[e]=t:r[e],r.sibling=e=>r[e]// 更新方法 2021/08/31
,r.child=e=>r.children[e]// 更新方法 2021/08/31
,r.childFirst=()=>r.firstElementChild// 更新方法 2021/08/31
,r.childLast=()=>r.lastElementChild// 更新方法 2021/08/31
,r.parent=()=>r.parentNode// 更新方法 2021/08/31
,r.appendDom=e=>r.append(e)// 更新方法 2021/09/12
,r.removeDom=()=>r.remove()// 更新方法 2021/09/12
,r.removeChildDom=()=>r.replaceChildren()// 更新方法 2021/10/25
,r.appendDomText=e=>r.appendChild(e)// 更新方法 2021/09/12
,r.easyAppendDom=(e,t)=>r.insertAdjacentHTML("afterDom"!==e?"afterbegin":"beforeend",t)// 更新方法 2021/11/25
,r.styles=(e,s,a)=>{// 更新方法 2021/10/26
// 更新方法 2022/03/12 變形為可鏈式寫法
if(!t.includes(["set","remove"],e)){t.console("error","First parameter method must use string and keyword is 'set' or 'remove'.");return}return"set"===e?r.style.setProperty(s,a):r.style.removeProperty(s),r},r.getDomStyles=e=>{let s={};return"object"!=typeof e?t.console("error","Parameter must use array."):0===e.length?t.console("error","Parameter must use array,and css property must in array with string."):t.each(e,e=>s[e]=getComputedStyle(r).getPropertyValue(e)),s},r.getDomPos=()=>({x:r.props("offsetLeft"),y:r.props("offsetTop")-window.scrollY,top:r.props("offsetTop"),left:r.props("offsetLeft"),right:r.props("offsetLeft")+r.props("offsetWidth"),bottom:r.props("offsetTop")+r.props("offsetHeight")-window.scrollY,width:r.props("offsetWidth"),height:r.props("offsetHeight")}),r.scrollToTop=e=>{let t;let[s,a]=Object.keys(e),n=r[s],o=e[s]-n,i=+new Date,l=e=>{let{currentTime:t,startVal:r,changeVal:s,animateDuration:a}=e,n=t;return(n/=a/2)<1?s/2*n*n+r:-s/2*((n-=1)*(n-2)-1)+r};(t=()=>{let c=+new Date-i;r.scrollTop=Number(l({currentTime:c,startVal:n,changeVal:o,animateDuration:e[a]})),c<e[a]?requestAnimationFrame(t):r.scrollTop=e[s]})()},r.useWillMount=e=>{"object"==typeof r&&t.typeOf(r,"HTMLDocument")?r.listener("readystatechange",({target:t})=>"interactive"===t.readyState&&e.call(e,t)):t.console("error","UseWillMount hook just use when selector document.")},r.useMounted=e=>{"object"==typeof r&&t.typeOf(r,"HTMLDocument")?r.listener("readystatechange",({target:t})=>"complete"===t.readyState&&e.call(e,t)):t.console("error","UseMounted Hook just use when selector document.")},r};// public function
t.each=(e,t)=>e.forEach((e,r)=>t.call(t,e,r)),t.maps=(e,t)=>e.map((e,r)=>t.call(t,e,r)),t.filter=(e,t)=>e.filter(e=>t.call(t,e)),t.find=(e,t)=>e.find(e=>t.call(t,e))// 更新方法 2022/03/12
,t.sort=(e,t)=>e.sort((e,r)=>t.call(t,e,r)),t.sum=(e,t,r)=>r?e.reduce((e,r)=>t.call(t,e,r),r):e.reduce((e,r)=>t.call(t,e,r)),t.indexOf=(e,t)=>e.indexOf(t),t.includes=(e,t)=>e.includes(t),t.findIndexOfObj=(e,t)=>e.findIndex(e=>t.call(t,e)),t.findObjProperty=(e,t)=>e.hasOwnProperty(t)// 更新方法 2022/03/23
,t.mergeArray=(e,t,r)=>r?e.concat(t):r.call(r,e.concat(t))// 更新方法 2022/03/23
,t.typeOf=(e,t)=>t?e.constructor.name===t:e.constructor.name// 更新方法 2021/10/26
,t.console=(e,...t)=>console[e](...t)// 更新方法 2021/10/26
,t.localData=(e,r,s)=>"get"===e?t.convert(localStorage.getItem(r),"json")||[]:localStorage.setItem(r,t.convert(s,"stringify"))// 更新方法 2021/11/29
,t.getNumberOfDecimal=(e,t)=>parseInt(e.toFixed(t))// 更新方法 2022/09/28
,t.createCustomEvent=(e,t)=>t?new CustomEvent(e,{detail:t}):new CustomEvent(e)// 更新方法 2022/07/13
,t.registerCustomEvent=(e,t)=>window.addEventListener(e,t)// 更新方法 2022/07/13
,t.useCustomEvent=e=>window.dispatchEvent(e)// 更新方法 2022/07/13
,t.removeCustomEvent=(e,t)=>window.removeEventListener(e,t)// 更新方法 2022/07/13
,t.createPromise=async e=>await new Promise((t,r)=>e.call(e,t,r))// 更新方法 2022/07/14
,t.createPromiseAll=async e=>await Promise.all(e)// 更新方法 2022/07/14
,t.createDomText=e=>document.createTextNode(e)// 更新方法 2021/09/12
,t.objDetails=(e,r)=>r&&t.includes(["keys","values","entries"],r)?Object[r](e):t.console("error","please enter secode prameter 'keys' or 'values' or 'entries' in type string")// 更新方法 2021/09/12
,t.isObjectTheSame=(e,r)=>t.convert(e,"stringify")===t.convert(r,"stringify")// 更新方法 2023/06/01
,t.useBase64=(e,t)=>"encode"===e?btoa(t):atob(t)// 更新方法 2021/11/24
,t.useSHA=async(e,t)=>{// Cryptoing only working in https of production or http of development environment
let r=await window.crypto.subtle.digest(e,new TextEncoder().encode(t));return Array.from(new Uint8Array(r)).map(e=>e.toString(16).padStart(2,"0")).join("")},t.useUnicode=(e,r)=>"encode"===r?t.createArray({type:"fake",item:{random:e.length}},t=>{let r=e.charCodeAt(t),s=r.toString(16);return r<15?`\\u000${s.toUpperCase()}`:r<255?`\\u00${s.toUpperCase()}`:r<4095?`\\u0${s.toUpperCase()}`:`\\u${s.toUpperCase()}`}).join(""):e.replace(/\\u(\d{4})/g,(e,t)=>String.fromCharCode(parseInt(t,16))),t.createArray=({type:e,item:r},s)=>{if("fake"===e){if("random"in r&&t.typeOf(r.random,"Number")&&void 0!==s&&t.typeOf(s,"Function"))return Array.from({length:r.random},(e,t)=>s.call(s,t));t.console("error","item property must have random in object and radom type must be number,with call back function in secode parameters.")}else if("new"===e&&!("random"in r))return Array.from(r)},t.convert=(e,r)=>{// 更新方法 2021/10/22
// 更新泛型回傳值 2022/03/19
if(e&&r){if(t.typeOf(e,"Object")&&t.includes(["string","number","float","boolean"],r)){t.console("error",`Convert value can't be object when use convert type ${r}.`);return}}else{t.console("error","Please enter first parameters value who want to convert and seconde paramters value is convert type 'string' or 'number' or 'float' or 'boolean' or 'json' or 'stringify'.");return}let s={string:String(e),number:parseInt(e),float:parseFloat(e),boolean:!!e,json:"json"===r&&JSON.parse(e),stringify:"stringify"===r&&JSON.stringify(e)};return s[r]},t.createDom=(e,r)=>{let s=document.createElement(e),a=Object.entries(r);return t.each(a,e=>{let[r,a]=e;if(t.typeOf(a,"Object")){let[t,r]=e,[[a,n]]=Object.entries(r);s[t][a]=n}else s[r]=t.typeOf(a,"String")?a.trim():a}),s},t.currencyTranser=(e,r,s)=>{if(t.typeOf(e,"Number")){let t=s?{style:"currency",currency:r}:{};return new Intl.NumberFormat(r||"TWN",t).format(e)}t.console("error","First argument formatNumber type must use number.")},t.formatDateTime=e=>{var r;// #region 參數設定
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
if(!(t.findObjProperty(e,"formatDate")||t.findObjProperty(e,"formatType"))){t.console("error","Please enter an object and use formatType property in the object.");return}if(t.findObjProperty(e,"customWeekItem")){if("Array"!==t.typeOf(e.customWeekItem)){t.console("error","customWeekItem property Must use array.");return}if(e.customWeekItem.length<=6||e.customWeekItem.length>7){t.console("error","customWeekItem property must put seven days name of week in array.");return}e.customWeekItem=[e.customWeekItem[e.customWeekItem.length-1],...e.customWeekItem].removeFirst()}let s=("localCountryTime"in e?null!==(r=e.localCountryTime)&&void 0!==r?r:0:8)*36e5,a=new Date(t.typeOf(e.formatDate,"Number")?e.formatDate:+new Date(e.formatDate)+s).toJSON(),n=a.replace(/T/g,"-").replace(/:/g,"-").replace(/\./g,"-").replace(/Z/g,"").split("-"),[o,i,l,c,p,u,d]=n,m=(null==e?void 0:e.toROCYear)?(parseInt(o)-1911).toString():o// 更新方法 2023/03/08
;if(t.findObjProperty(e,"toDateFullNumber"))return t.convert(n.join(""),"number");// 更新是否格式化 AM 或 PM 2022/03/19
if(e.formatType.match("tt")){let r=t.convert(c,"number")>11?"PM":"AM",s=t.convert(c,"number")-12<10?`0${t.convert(c,"number")-12}`:t.convert(t.convert(c,"number")-12,"string");return e.formatType.replace(/yyyy/g,m).replace(/MM/g,i).replace(/dd/g,l).replace(/HH/g,s).replace(/mm/g,p).replace(/ss/g,u).replace(/ms/g,d).replace(/tt/g,r)}return t.findObjProperty(e,"customWeekItem")?{fullDateTime:e.formatType.replace(/yyyy/g,m).replace(/MM/g,i).replace(/dd/g,l).replace(/HH/g,c).replace(/mm/g,p).replace(/ss/g,u).replace(/ms/g,d),getWeekName:e.customWeekItem[new Date(+new Date(e.formatDate)).getDay()]}:e.formatType.replace(/yyyy/g,m).replace(/MM/g,i).replace(/dd/g,l).replace(/HH/g,c).replace(/mm/g,p).replace(/ss/g,u).replace(/ms/g,d)},t.rebuildObject=(e,t)=>Object.fromEntries(Object.entries(e).map(([e,r])=>t.call(t,e,r)))// 更新方法內容 2023/09/12
;// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class r{static async fetchSetting(r,s){var a,n;// 更新類 ajax 方法 2021/09/11
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
let o={},{method:i,headers:l,contentType:c,useFormData:p,useXMLHttpRequest:u,returnType:d,data:m,routeParams:y,queryParams:f,timeout:h,beforePost:g,successFn:v,excuteDone:b,errorFn:w}=r;o.method=i,r.url=this.baseUrl?`${this.baseUrl}${r.url}`:r.url;let x=null!=d?d:"json";if(i){if(!t.includes(["get","post","patch","put","delete"],i.toLocaleLowerCase())){t.console("error","Method value must use valid request method,like get、post ...");return}}else{t.console("error","Property name method is required in obejct parameters.");return}if(r.useFormData=!!p,y){let[e]=t.objDetails(y,"keys");r.url=`${r.url}/${y[e]}`}if(f){let e=t.maps(t.objDetails(f,"entries"),([e,t])=>`${e}=${t}`).join("&");r.url=`${r.url}?${e}`}if((t.objDetails(this.baseHeaders,"keys").length>0||l&&t.objDetails(l,"keys").length>0)&&(o.headers=t.objDetails(this.baseHeaders,"keys").length>0?this.baseHeaders:e({"Content-Type":"application/json"},l)),m&&(p?o.body=this.convertFormData(m):(o.headers=t.objDetails(this.baseHeaders,"keys").length>0?this.baseHeaders:{"Content-Type":null!=c?c:"application/json"},o.body=t.convert(m,"stringify"))),(t.objDetails(this.baseHeaders,"keys").length>0||l)&&m&&(o.headers=t.objDetails(this.baseHeaders,"keys").length>0?this.baseHeaders:e({},l),o.body=p?this.convertFormData(m):t.convert(m,"stringify")),!s&&!u){if(g&&g.call(g),!v){t.console("error","Function Name successFn is required in obejct parameters.");return}if(!w){t.console("error","Function Name errorFn is required in obejct parameters.");return}}if(u){if(v){t.console("error","successFn not necessary parameters.");return}if(w){t.console("error","errorFn not necessary parameters.");return}return this.XMLHttpRequest({url:r.url,method:o.method,headers:o.headers,data:o.body})}let T=new AbortController;h&&setTimeout(()=>T.abort(),h);let j=await fetch(r.url,h?(a=e({},o),n=n={signal:T.signal},Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r.push.apply(r,s)}return r})(Object(n)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}),a):o);if(s)return await new Promise(async(e,t)=>{if(j.status>=200&&j.status<400){let t=await j[x]();e({bodyUsed:j.bodyUsed,headers:j.headers,ok:j.ok,redirected:j.redirected,status:j.status,statusText:j.statusText,type:j.type,url:j.url,data:t})}else t({bodyUsed:j.bodyUsed,headers:j.headers,ok:j.ok,redirected:j.redirected,status:j.status,statusText:j.statusText,type:j.type,url:j.url})});try{if(j.status>=200&&j.status<400){let e=await j[x]();null==v||v.call(v,{bodyUsed:j.bodyUsed,headers:j.headers,ok:j.ok,redirected:j.redirected,status:j.status,statusText:j.statusText,type:j.type,url:j.url,data:e}),// eslint-disable-next-line @typescript-eslint/prefer-optional-chain
b&&b.call(b)}else throw Error(JSON.stringify({bodyUsed:j.bodyUsed,headers:j.headers,ok:j.ok,redirected:j.redirected,status:j.status,statusText:j.statusText,type:j.type,url:j.url}))}catch(e){null==w||w.call(w,JSON.parse(e.message))}}static XMLHttpRequest(e){let r=new XMLHttpRequest;return r.open(e.method,e.url,!0),(null==e?void 0:e.headers)&&t.each(t.objDetails(null==e?void 0:e.headers,"entries"),([e,t])=>r.setRequestHeader(e,t)),{xhrResponseResult:e=>{r.onreadystatechange=()=>{if(r.readyState===r.DONE&&r.status>=200&&r.status<=399)try{let t=JSON.parse(r.responseText);e.call(e,t)}catch(e){t.console("error",e)}r.status>=400&&t.console("error",r.statusText)}},xhrUploadProgress:e=>{r.upload.onprogress=t=>{if(t.lengthComputable){let r=100*t.loaded/t.total;e.call(e,r)}}},xhrRequestStart:()=>r.send((null==e?void 0:e.data)||void 0)}}static convertFormData(e){let r=new FormData;return t.each(t.objDetails(e,"entries"),([e,t])=>r.append("uploadFile"===e?"FileList":e,t)),r}static createBase({baseUrl:e,baseHeaders:t}){// #region
/** 參數設定
           * @param {string} baseUrl 固定網址，設定後網址後半部變動部分只須設定 url
           * @param {object} baseHeaders 固定使用的 headers 內容，如 token、Content-Type 之類的
           */// #endregion
this.baseUrl=e,this.baseHeaders=t}}r.baseUrl="",r.baseHeaders={};class s extends r{}// 更新 Promise 導出 get 方法 2022/05/01
s.get=async(t,r)=>await s.fetchSetting(e({method:"get",url:t},r),!0),// 更新 Promise 導出 post 方法 2022/05/01
s.post=async(t,r)=>await s.fetchSetting(e({method:"post",url:t},r),!0),// 更新 Promise 導出 patch 方法 2022/05/01
s.patch=async(t,r)=>await s.fetchSetting(e({method:"patch",url:t},r),!0),// 更新 Promise 導出 put 方法 2022/05/01
s.put=async(t,r)=>await s.fetchSetting(e({method:"put",url:t},r),!0),// 更新 Promise 導出 delete 方法 2022/05/01
s.delete=async(t,r)=>await s.fetchSetting(e({method:"delete",url:t},r),!0);const a=async e=>await r.fetchSetting(e,!1)// 更新 FetchClass 類方法導出 2022/03/24
;// 更新 FetchClass 類方法導出，為 fetch 基礎組態設定 2022/03/24
a.get=async(e,t)=>await s.get(e,t),a.post=async(e,t)=>await s.post(e,t),a.patch=async(e,t)=>await s.patch(e,t),a.put=async(e,t)=>await s.put(e,t),a.delete=async(e,t)=>await s.delete(e,t),a.createBase=e=>r.createBase(e),t.fetch=a,// interface JSON {
//   deepCopy<T>(obj: T): T
// }
JSON.deepCopy=e=>t.convert(t.convert(e,"stringify"),"json")// 更新方法 2023/04/22
,// interface Math {
//   toFixedNum(setting:{ value:string | number,toFloatPos:number }):(number | undefined)
// }
Math.toFixedNum=e=>{if(!e||!("value"in e)||!("toFloatPos"in e)){t.console("error","Please use object and with key value pair. ex: { value:100.1,toFloatPos:1 }");return}if(!t.typeOf(e.toFloatPos,"Number")){t.console("error","toFloatPos key must use number.");return}return t.typeOf(e.value,"String")?Number(parseFloat(e.value).toFixed(e.toFloatPos)):Number(e.value.toFixed(e.toFloatPos))},// interface String {
//     format(formatStr:string,value:any[]):(string | undefined)
//     appendText(txt:string):string
//     appendDirection(direction:padDirection,pos:number,txt:string):string
//     range(startPos:number,endPos:number):string
// }
// interface StringConstructor {
//   toChartCode(str:string):number[]
// }
String.prototype.appendText=function(e){return this.toString()+e}// 更新方法 2022/06/24
,String.prototype.appendDirection=function(e,t,r){return this["left"===e?"padStart":"padEnd"](t,r)}// 更新方法 2023/02/07
,String.prototype.range=function(e,t){return this.toString().slice(e,t)}// 更新方法 2022/11/21
,String.prototype.format=function(e,...r){if(t.typeOf(e,"String")&&t.includes(e,"{")&&t.includes(e,"}")){if(e.split("{").join("").split("}").length-1===r.length){let s=e,a=t.maps(r,(e,t)=>({replaceKey:`{${t}}`,replaceValue:e})),n=t.maps(a,({replaceKey:e,replaceValue:t})=>s=s.replace(e,t)).range(a.length-1,a.length).join("");return n}t.console("error","Can't not find else aguments.")}else t.console("error","First paramter must use type string,if use string must like this ex：abc {0} efg {1}.")},String.toChartCode=e=>t.createArray({type:"fake",item:{random:e.length}},t=>e.charCodeAt(t))// 更新方法 2023/05/31
,// interface Date {
//   calculateFullDateTime(year?: number, month?: number, day?: number, hour?: number, minute?: number, second?: number):(Date | undefined)
//   toOptionTimeZoneForISO(timeZone: number):(string | void)
//   getLocalTimeZone(): number
// }
Date.prototype.calculateFullDateTime=function(e,t,r,s,a,n){let o=new Date(this);return e&&o.setFullYear(this.getFullYear()+e),t&&o.setMonth(this.getMonth()+t),r&&o.setDate(this.getDate()+r),s&&o.setHours(this.getHours()+s),a&&o.setMinutes(this.getMinutes()+a),n&&o.setSeconds(this.getSeconds()+n),o},Date.formatCountingTime=function({formatTimesTemp:e,formatType:t}){// 更新方法 2023/08/13
// #region 參數設定
/**
   * @param {object} { formatTimesTemp: number,formatType:string ex:dd HH:mm:ss }
   * @returns {string}
   */// #endregion
let r=e=>e<10?`0${e}`:`${e}`,s=Math.abs(e),a=s/864e5,n=Math.floor(a),o=(a-n)*24,i=Math.floor(o),l=(o-i)*60,c=Math.floor((o-i)*60),p=Math.floor((l-c)*60);return t.replace(/dd/g,r(n)).replace(/HH/g,r(i)).replace(/mm/g,r(c)).replace(/ss/g,r(p))},Date.prototype.getLocalTimeZone=function(){return Math.abs(this.getTimezoneOffset()/60)}// 更新方法 2023/02/07
,Date.prototype.toOptionTimeZoneForISO=function(e){return e?new Date(+this+36e5*e).toISOString():t.console("error","Lost one parameter in function.")// 更新方法 2021/03/23
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
;let n=[],o="",i=-1,l=[],c=[];// 設定點擊內容所加入的文字
window.choose=(e,r)=>{"A"===r?(t(t(".text-first")[e]).addClass("texts-trans"),t(t(".text-second")[e]).removeClass("texts-trans"),o=({[`${i>=0&&i<=6}`]:"E",[`${i>=7&&i<=13}`]:"N",[`${i>=14&&i<=20}`]:"F",[`${i>=21&&i<=27}`]:"J"}).true):(t(t(".text-second")[e]).addClass("texts-trans"),t(t(".text-first")[e]).removeClass("texts-trans"),o=({[`${i>=0&&i<=6}`]:"I",[`${i>=7&&i<=13}`]:"S",[`${i>=14&&i<=20}`]:"T",[`${i>=21&&i<=27}`]:"P"}).true),27===i&&window.nextStep()};const p=({target:e})=>{t(e).addClass("confirm-active"),setTimeout(()=>t(e).removeClass("confirm-active"),540),setTimeout(()=>t(".custom-modal-outer").removeClass("modal-toggle"),890)};// 設定點擊下一題時的函式內容
window.nextStep=()=>{if(29===i){i=-1,n=[],o="",t(".start-btn").removeClass("start-btn-in"),t(".start-btn-outer-frame").addClass("start-btn-outer-frame-hide"),t(".type-text-content").removeClass("type-text-content-in"),setTimeout(()=>{t(".type-text-content").styles("remove","display","flex"),window.nextStep()},699);return}if(i>=0&&!o){t(".custom-modal-outer").addClass("modal-toggle");return}if(++i>=1&&n.append(o),o="",0===i){let e=t.maps(l,({qNum:e,qT:t,ansA:r,ansB:s})=>{let a=window.innerWidth<=768&&t.length>20?"text-justify":"text-center",n=window.innerWidth<=768&&r.length>16?"text-justify":"text-center",o=window.innerWidth<=768&&s.length>16?"text-justify":"text-center";return`<div class="Q-outer justify-content-center">
                <div class="row">
                    <div class="col-md-12">
                        <div class="quest ${a}">${t}</div>
                    </div>
                    <div class="col-md-12">
                        <div class="row justify-content-center">
                            <div class="col-md-8">
                                <span class="texts text-first ${n}" onclick="choose(${e},'A')">${r}</span>
                                <span class="texts text-second ${o}" onclick="choose(${e},'B')">${s}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `}).concat(`
            <div class="Q-outer justify-content-center">
                <div class="go-counting">
                    <div class="working-count-btn" onclick="countingAllTest()">計算結果</div>
                    <div class="change-ans-btn" onclick="backStep()">改變作答</div>
                </div>
            </div>
        `).concat(`
            <div class="prev prev-hide" onclick="backStep()">
                <i class="fas fa-2x fa-chevron-left"></i>
            </div>
            <div class="next" onclick="nextStep()">
                <i class="fas fa-2x fa-chevron-right"></i>
            </div>
        `).join("");t(".Q-outer-frame").html(e),t(".start-btn").removeClass("start-btn-in"),t(".start-btn-outer-frame").addClass("start-btn-outer-frame-hide"),t(".explain").removeClass("explain-show"),setTimeout(()=>{t(".Q-outer-frame").addClass("Q-outer-frame-in")},699)}27===i&&t(".next").addClass("next-hide"),i>=1&&(t(".prev").removeClass("prev-hide"),i>=28&&(i=28,t(".prev").addClass("prev-hide")),t.each(t(".Q-outer"),e=>t(e).styles("set","transform",`translateX(-${100*i}%)`)))},window.countingAllTest=()=>{i++,t(".Q-outer-frame").removeClass("Q-outer-frame-in"),u()},// 設定點擊上一題的函式內容
window.backStep=()=>{if(--i<=0){i=0,t(".prev").addClass("prev-hide"),t.each(t(".Q-outer"),e=>t(e).styles("set","transform",`translateX(-${100*i}%)`)),t(t(".text-first")[i]).removeClass("texts-trans"),t(t(".text-second")[i]).removeClass("texts-trans");return}27===i&&(t(".next").addClass("next-hide"),t(".prev").removeClass("prev-hide"),t.each(t(".Q-outer"),e=>t(e).styles("set","transform",`translateX(-${100*i}%)`)),t(t(".text-first")[i]).removeClass("texts-trans"),t(t(".text-second")[i]).removeClass("texts-trans")),i<=26&&(t(".next").removeClass("next-hide"),t.each(t(".Q-outer"),e=>t(e).styles("set","transform",`translateX(-${100*i}%)`)),t(t(".text-first")[i]).removeClass("texts-trans"),t(t(".text-second")[i]).removeClass("texts-trans")),n.removeLast()};// 設定統計字數函式
const u=()=>{let e=t.maps([["E","外向"],["I","內向"],["N","直覺"],["S","感覺"],["T","理性"],["F","情感"],["J","判斷"],["P","理解"]],(e,t)=>{let[r,s]=e;return{num:t,type:r,typeName:s,count:0}}),r=t.maps(e,e=>(e.count=t.filter(n,t=>t===e.type).length,e.count>=4&&e.type)).filter(e=>!1!==e).join("");y(e,r)},d=e=>t.maps([["E","外向","I","內向"],["N","直覺","S","感覺"],["T","理性","F","情感"],["J","判斷","P","理解"]],t=>{let[r,s,a,n]=t;return e===r?`${a} ( ${n} )`:e===a&&`${r} ( ${s} )`}).filter(e=>!1!==e).join(""),m=e=>t.maps(e,({maxType:e,minType:t})=>`
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
`).join(""),y=(e,r)=>{let s=0;t(".type-text-content").styles("set","display","flex"),setTimeout(()=>{setTimeout(()=>{let e=setInterval(()=>{s>=5?(t(".loading-font").texts("計算完成"),clearInterval(e)):s++},1e3)},10),t(".type-text-content").html(`
            <div class="loading-outer">
                <div class="loading"></div>
                <span class="loading-font">計算中</span>
            </div>`)},1e3),setTimeout(()=>t(".loading-outer").addClass("loading-outer-out"),8e3);let a=t.maps(r.split(""),r=>{let s=t.filter(e,({type:e})=>e===r);return s.length>0&&t.maps(s,({count:e,type:t,typeName:r})=>({percent:Math.floor(100/(Math.floor(7/e*100)/100)),maxType:`${t} ( ${r} )`,minType:d(t)})).at(0)}).filter(e=>!1!==e),o=t.filter(c,e=>e.originsType===r).map(e=>`
        <div class="row">
            <div class="col-md-12">
                <span class="type-title">您的類型</span>
                <span class="type-origins">${e.originsType}</span>
                <span class="type-name">${e.nameType}</span>
                <span class="type-think">( ${e.thinkType} )</span>
                <div class="percent-outer">
                    <div class="row">
                        ${m(a)}
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
    `).join("");o&&setTimeout(()=>{h(),t(".type-text-content").addClass("type-text-content-in").html(o)},9500),o&&setTimeout(()=>{t.each(a,({percent:e},r)=>{setTimeout(()=>{let s=0,a=setInterval(()=>{s===e?clearInterval(a):(s++,t(t(".progress-bar-custom")[r]).styles("set","width",`${s}%`),t(t(".progress-bar-custom span")[r]).texts(`${s} %`))},16)},5e3)})},9700),o&&setTimeout(()=>{t(".start-btn").addClass("start-btn-in"),t(".start-btn-outer-frame").removeClass("start-btn-outer-frame-hide"),t(".start-btn").texts("重新測驗"),n=[]},26500)},f=()=>{let{top:e,height:r}=t(".start-btn-outer").getDomPos(),s=window.scrollY,a=window.innerHeight+s;-1===i&&t(".start-btn")[e+r/2<a?"addClass":"removeClass"]("start-btn-in")},h=()=>t("body").scrollToTop({scrollTop:0,duration:3e3}),g=async()=>{let e=await t.fetch.get("https://fordb-1-f6742337.deta.app/mind/v1/questions");l=e.data.data;let r=await t.fetch.get("https://fordb-1-f6742337.deta.app/mind/v1/final_test");c=r.data.data;let s="MBTI16種性格測驗",a=-1,n=0,o="";t(".title").addClass("title-in"),t(".start-btn").texts("開始");let i=setInterval(()=>{a===s.length-1&&n===s.length?(clearInterval(i),o=""):(o=o.appendText(`${s.slice(a+=1,n+=1)}`),t(".title").texts(o))},300);t(".explain").addClass("explain-show"),window.innerWidth<=414&&t(".type-font-group").html(`
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
    `)};t(document).useMounted(()=>{g(),t(".start-btn").listener("click",()=>window.nextStep()),t(".confirm").listener("click",p),t(window).listener("scroll",f)});