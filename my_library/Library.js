// CopyRight by Chen 2021/08 - 2022/03 Library language - javascript ver 1.4.0
// Work Environment Javascript ES6 or latest
"use strict";
const $ = ((el) => {
    const $ = target => {
        const self = el.call(el, target) || target;
        self.texts = (txt) => txt === undefined ? self.textContent : self.textContent = txt;
        self.html = (dom) => dom === undefined ? self.innerHTML : self.innerHTML = dom;
        self.addClass = (classText) => { self.classList.add(classText); return self;} // 更新方法 2022/03/12 變形為可鏈式寫法
        self.removeClass = (classTxt) => { self.classList.remove(classTxt); return self;} // 更新方法 2022/03/12 變形為可鏈式寫法
        self.toggleClass = (classText) => self.classList.toggle(classText); // 更新方法 2021/09/20
        self.on = (eventType, fn) => { self[["on",eventType].join("")] = () => fn.call(fn,self); }; // 更新方法 2021/09/20
        self.listener = (eventType, fn) => self.addEventListener(eventType, fn);
        self.removeListener = (eventType,fn) => self.removeEventListener(eventType, fn); // 更新方法 2022/01/04
        self.val = (valTemp) => valTemp === undefined ? self.value : self.value = valTemp;
        self.attr = (props, val) => val === undefined ? self.getAttribute(props) : self.setAttribute(props, val);
        self.props = (props, val) => val === undefined ? self[props] : self[props] = val;        // 更新方法 2021/08/31
        self.sibling = (num) => $(self[num]);                                                          // 更新方法 2021/08/31
        self.child = (num) => $(self.children[num]);                                                   // 更新方法 2021/08/31
        self.childFirst = () => $(self.firstElementChild);                                             // 更新方法 2021/08/31
        self.childLast = () => $(self.lastElementChild);                                               // 更新方法 2021/08/31
        self.parent = () => $(self.parentNode);                                                        // 更新方法 2021/08/31
        self.appendDom = (el) => $(self).append(el);                                                   // 更新方法 2021/09/12
        self.removeDom = () => $(self).remove();                                                       // 更新方法 2021/09/12
        self.removeChildDom = () => $(self).replaceChildren();                                         // 更新方法 2021/10/25
        self.appendDomText = (el) => $(self).appendChild(el);                                          // 更新方法 2021/09/12
        self.easyAppendDom = (orderBy,domStr) => $(self).insertAdjacentHTML(orderBy !== 'afterDom' ? 'afterbegin' : 'beforeend',domStr);    // 更新方法 2021/11/25
        self.styles = (method,cssType, cssParameter) => { 
            // 更新方法 2021/10/26
            // 更新方法 2022/03/12 變形為可鏈式寫法
            if(!$.includes(['set','remove'],method)){ 
                $.console('error',"First parameter method must use string and keyword is 'set' or 'remove'."); 
                return; 
            }; 
            method === 'set' ? self.style.setProperty(cssType, cssParameter) : self.style.removeProperty(cssType);
            return self
        }; 
        self.getDomStyles = (conditionProps) => { // 更新方法 2021/10/26
            let cssProperty = {}; 
            if(typeof conditionProps !== "object"){ 
                $.console('error','Parameter must use array.'); 
                return; 
            } else { 
                if(conditionProps['length'] === 0){ 
                    $.console('error','Parameter must use array,and css property must in array with string.'); 
                    return; 
                } else { 
                    $.each(conditionProps,item => cssProperty[item] = getComputedStyle($(self)).getPropertyValue(item)); 
                    return cssProperty; 
                } 
            }; 
        };

        self.getDomPos = () => ({ // 更新方法 2022/03/23
            x: $(self).props('offsetLeft'),
            y: $(self).props('offsetTop') - window.scrollY,
            top: $(self).props('offsetTop') - window.scrollY,
            left: $(self).props('offsetLeft'),
            right: $(self).props('offsetLeft') + $(self).props('offsetWidth'),
            bottom: ($(self).props('offsetTop') + $(self).props('offsetHeight')) - window.scrollY,
            width: $(self).props('offsetWidth'),
            height: $(self).props('offsetHeight')
        });

        self.scrollToTop = (scrollSetting = { scrollTop:0,duration:0 }) => { // 更新方法 2021/10/26
            let animateScroll = undefined;
            const [keyI,keyII] = Object.keys(scrollSetting);
            const startPos = self[keyI];
            const changePos = scrollSetting[keyI] - startPos;
            const startTimeStamp = +new Date();

            const animationSettings = (animationSetting = { currentTime:0, startVal:0, changeVal:0, animateDuration:0 }) => {
              let { currentTime,startVal,changeVal,animateDuration } = animationSetting
              let currentTimeTemp = currentTime;
              currentTimeTemp /= animateDuration / 2;
              if (currentTimeTemp < 1) return (changeVal / 2) * currentTimeTemp * currentTimeTemp + startVal;
              currentTimeTemp -= 1;
              return (-changeVal / 2) * (currentTimeTemp * (currentTimeTemp - 2) - 1) + startVal;
            };

            (animateScroll = () => {
                const currentTimeStamp = +new Date() - startTimeStamp;
                self.scrollTop = Number(animationSettings({
                    currentTime:currentTimeStamp, 
                    startVal:startPos,
                    changeVal:changePos, 
                    animateDuration:scrollSetting[keyII]
                }));
                currentTimeStamp < scrollSetting[keyII] ? requestAnimationFrame(animateScroll) : self.scrollTop = scrollSetting[keyI];
            })();
        };

        self.useWillMount = willMountCallBack => { // 更新方法 2022/03/19
            if(typeof self === 'object'){
                if($.typeOf(self,'HTMLDocument')){
                    $(self).listener('readystatechange',({ target }) => target.readyState === 'interactive' && willMountCallBack.call(willMountCallBack,target))
                } else {
                    $.console('error','UseWillMount hook just use when selector document.')
                }
            } else {
                $.console('error','UseWillMount hook just use when selector document.')
            }
        };

        self.useMounted = useMountedCallBack => { // 更新方法 2022/03/19
            if(typeof self === 'object'){
                if($.typeOf(self,'HTMLDocument')){
                    $(self).listener('readystatechange',({ target }) => target.readyState === 'complete' && useMountedCallBack.call(useMountedCallBack,target))
                } else {
                    $.console('error','UseMounted Hook just use when selector document.')
                }
            } else {
                $.console('error','UseMounted Hook just use when selector document.')
            }
        };

        return self;
    };
    
    // public function
    $.each = (item, fn) => item.forEach((items, index) => fn.call(item, items, index));
    $.maps = (item, fn) => item.map((items, index) => fn.call(item, items, index));
    $.filter = (item, fn) => item.filter((items) => fn.call(item, items));
    $.find = (item,fn) => item.find(item => fn.call(item,items)) // 更新方法 2022/03/12
    $.reduce = (item,fn) => item.reduce((a,b) => fn.call(item,a,b)) // 更新方法 2022/03/12
    $.sort = (item,fn) => item.sort((a,b) => fn.call(item,a,b))
    $.indexOf = (item, x) => item.indexOf(x);
    $.includes = (item, x) => item.includes(x);
    $.findIndexOfObj = (item, fn) => item.findIndex((where) => fn.call(item, where));
    $.findObjProperty = (obj,propertyName) => propertyName in obj // 更新方法 2022/03/23
    $.sum = (item, fn) => item.reduce((a, b) => fn.call(item, a, b));
    $.mergeArray = (item,mergeItem,fn) => fn === undefined ? item.concat(mergeItem) : fn.call(fn,item.concat(mergeItem)) // 更新方法 2022/03/23
    $.typeOf = (item,classType) => classType === undefined ? item.constructor.name : item.constructor.name === classType; // 更新方法 2021/10/26
    $.console = (type,...item) => console[type](...item); // 更新方法 2021/10/26
    $.localData = (action,keyName,item) => action === 'get' ? ($.convert(localStorage.getItem(keyName),'json') || []) : localStorage.setItem(keyName,$.convert(item,'stringify')); // 更新方法 2021/11/29
    $.createArray = ({ type,item },repack) => { // 更新方法 2022/03/14
        //#region 參數設定
        /**
         * @param {string} type <= 型別字串 要創建種類，fake 為創建假陣列、new 為創建新陣列
         * @param {object}} item <= 型別物件，建假陣列時需使用為 { random:100 或其他數字 }
         * @param {function | undefined} repack <= 型別函式，為 call back function 為處理假陣列時使用的後續操作
         * @returns {Array}
         */
        //#endregion
        if(type === 'fake'){
            if('random' in item && $.typeOf(item.random,'Number') && repack !== undefined && $.typeOf(repack,'Function')){
                return Array.from({ length:item.random },(_,items) => repack.call(repack,items))
            } else {
                $.console('error','item property must have random in object and radom type must be number,with call back function in secode parameters.')
            }
        } else if (type === 'new' && !('random' in item)){
            return Array.from(item)
        }
    }
    $.convert = (val,type) => { // 更新方法 2021/10/22
        if(val === undefined || type === undefined || !$.includes(['string','number','float','boolean','json','stringify'],type)){
            $.console('error',"Please enter first parameters value who want to convert and seconde paramters value is convert type 'string' or 'number' or 'float' or 'boolean' or 'json' or 'stringify'.");
            return
        } else if(typeof val === 'object' && $.includes(['string','number','float','boolean'],type)){
            $.console('error',`Convert value can't be object when use convert type ${type}.`);
            return
        }

        const returnItem = {
            string: String(val),
            number: parseInt(val),
            float: parseFloat(val),
            boolean: Boolean(val),
            json: type === 'json' && JSON.parse(val),
            stringify: type === 'stringify' && JSON.stringify(val),
        }

        return returnItem[type];
    }
    $.createDom = (tag,props) => { // 更新方法 2021/09/12
        const el = document.createElement(tag);
        const propsArr = Object.entries(props);
        $.each(propsArr,getProps => {
            const [propertyI,valueI] = getProps
            if($.typeOf(valueI,'Object')){ // 更新方法 2021/12/07，解析 data-* 建構屬性內容
                const [propertyII,obj] = getProps
                const [[key,valueII]] = Object.entries(obj)
                el[propertyII][key] = valueII
            } else {
                el[propertyI] = $.typeOf(valueI,'String') ? valueI.trim() : valueI
            }
        })
        return el;
    }
    $.createDomText = (text) => document.createTextNode(text); // 更新方法 2021/09/12
    $.objDetails = (obj,method) => method === undefined || !$.includes(['keys','values','entries'],method) ? $.console('error',"please enter secode prameter 'keys' or 'values' or 'entries' in type string") : Object[method](obj); // 更新方法 2021/09/12
    $.objManager = (obj,action,key,value) => { // 更新方法 2021/10/21

        //#region 參數設定
        /**
         * @param {object} obj <= 型別物件 要管理的物件
         * @param {string} action <= 型別字串，要執行的動作，有分為 get ( 取得管理物件內容 )、set ( 設定管理物件指定鍵與值 )、add ( 新增管理物件鍵與值 )、delete ( 刪除管理物件指定鍵與值 )
         * @param {string} key <= 型別字串，為鍵值的鍵
         * @param {any} value <= 型別任意，為鍵值的值
         * @returns {object | void}
         */
        //#endregion

        const check = () => {
            if(obj === undefined){
                return "Please put want to manage's object at first parameters";
            };
        
            if(action === undefined || !$.includes(['get','set','add','delete'],action)){
                return 'Please enter want to use methods "get、set、add、delete" at seconde parameters'
            } else if(typeof action !== 'string'){
                return 'Seconde parameters must use type string.';
            };
        
            if(key === undefined){
                return 'Please enter want to use key name at third parameters';
            } else if(typeof key !== 'string'){
                return 'Third parameters must use type string.';
            };
        
            if(value === undefined){
                return `Please enter want to set value at forth parameters.`;
            };
        }

        switch(action){
            case 'get':
                return obj;
            case 'set':
                check() !== undefined ? $.console('error',check()) : key in obj ? obj[key] = value : $.console('error',`Key name ${key} not in this object.`);
                break;
            case 'add':
                check() !== undefined ? $.console('error',check()) : key in obj ? $.console('error',`Key name ${key} already in this object`) : obj[key] = value;
                break;
            case 'delete':
                check() !== undefined ? $.console('error',check()) : key in obj ? delete obj[key] : $.console('error',`Key name ${key} not in this object.`);
                break;
        }
    }

    $.formatDateTime = (format = { formatDate:'',formatType:'' }) => { // 更新方法 2021/12/01
        //#region 參數設定
        /**
         * @param {object} 
         * { 
         *   formatDate: Date || string,
         *   formatType:string, <= formatType 參數 time 取時間、date 取日期、full 取日期與時間
         *   localCountryTime:number <= localCountryTime 根據時區格式化，預設為 GMT+8，可選參數
         *   toDateFullNumber <= toDateFullNumber 將當前格式化時間改為數字，可以用於排序上，可選參數
         * }
         * @returns {string}
         */
        //#endregion
    
        if(!('formatDate' in format || 'formatType' in format)){
            $.console('error','Please enter an object and use formatType property in the object.');
            return
        }
        
        const localCountryTime = ('localCountryTime' in format ? format.localCountryTime : 8)* 60 * 60 * 1000
        const dateStr = new Date(+new Date(format.formatDate) + localCountryTime).toJSON();
        const dateSplit = dateStr.replace(/T/g,"-").replace(/:/g,"-").split(".")[0].split("-");
        const [year,month,date,hour,minute,second] = dateSplit;

        if('toDateFullNumber' in format){
            return Number(dateSplit.join(""))
        }

        if(format.formatType.match('tt')){
            const currentAMorPM = $.convert(hour,'number') > 11 ? 'PM' : 'AM'
            const transHour = ($.convert(hour,'number') - 12) < 10 ? `0${$.convert(hour,'number') - 12}` : $.convert($.convert(hour,'number') - 12,'string')
            return format.formatType.replace(/yyyy/g,year).replace(/MM/g,month).replace(/dd/g,date).replace(/HH/g,transHour).replace(/mm/g,minute).replace(/ss/g,second).replace(/tt/g,currentAMorPM)
        } else {
            return format.formatType.replace(/yyyy/g,year).replace(/MM/g,month).replace(/dd/g,date).replace(/HH/g,hour).replace(/mm/g,minute).replace(/ss/g,second)
        }
    }

    class FetchClass {
        constructor(){
            this.baseUrl = ''
            this.baseHeaders = {}
        }

        static async fetch(settingParams) { 
            // 更新類 ajax 方法 2021/09/11
            // 更新類 ajax 方法內容 2021/10/21
            //#region 參數設定
            /**
             * @param {string} method
             * @param {string} url
             * @param {object} header 追加 hearder 物件 2021/10/21
             * @param {string} contentType
             * @param {Function} beforePost <= 回呼函式
             * @param {Function} successFn <= 回呼函式
             * @param {Function} excuteDone <= 回調函式 追加方法 2022/03/14
             * @param {Function} errorFn <= 回呼函式
             */
            //#endregion
    
            const settings = {};
            const { method, headers, contentType, data,beforePost,successFn,excuteDone,errorFn } = settingParams;
    
            settings.method = method;
            settingParams.url = this.baseUrl ? `${this.baseUrl}${settingParams.url}` : settingParams.url;
    
            if (this.baseHeaders || headers) {
                settings.headers = this.baseHeaders || headers;
            }
    
            if (data) {
                settings.headers = this.baseHeaders || { "Content-Type": contentType };
                settings.body = $.convert(data, 'stringify');
            }
    
            if ((this.baseHeaders || headers) && data) {
                settings.headers = this.baseHeaders || { ...headers };
                settings.body = $.convert(data, 'stringify');
            };
    
            if (beforePost){
                beforePost.call(beforePost);
            };
    
            if(!successFn){
                $.console('error','Function Name successFn is required in obejct parameters.');
                return
            };
    
            if(!errorFn){
                $.console('error','Function Name errorFn is required in obejct parameters.');
                return
            };
    
            // 更新 Request 成功與錯誤回傳內容 2022/03/14
            try {
                const res = await fetch(settingParams.url, settings).then(res => res);
    
                if (res.status >= 200 && res.status < 300) {
                    res.json().then(resItem => successFn.call(successFn,{
                        bodyUsed: res.bodyUsed,
                        headers: res.headers,
                        ok: res.ok,
                        redirected: res.redirected,
                        status: res.status,
                        statusText: res.status,
                        type: res.type,
                        url:res.url,
                        data:resItem
                    })).then(() => excuteDone && excuteDone.call(excuteDone));
                }
                else {
                    throw new Error(JSON.stringify({
                        bodyUsed: res.bodyUsed,
                        headers: res.headers,
                        ok: res.ok,
                        redirected: res.redirected,
                        status: res.status,
                        statusText: res.status,
                        type: res.type,
                        url:res.url,
                    }));
                };
            }
            catch (err) {
                errorFn.call(errorFn,JSON.parse(err.message));
            };
        };

        static createBase({ baseUrl,baseHeaders }){ // 更新 fetch 物件組態設定方法 2022/03/24
            //#region
            /** 參數設定
             * @param {string} baseUrl 固定網址，設定後網址後半部變動部分只須設定 url
             * @param {object} baseHeaders 固定使用的 headers 內容，如 token、Content-Type 之類的
             */
            //#endregion
            this.baseUrl = baseUrl
            this.baseHeaders = baseHeaders
        }
        
    }

    $.fetch = (settingParams = { // 更新 F 類方法導出 2022/03/24
        method:'',
        url:'',
        headers:{},
        contentType:'',
        data:{},
        beforePost:undefined,
        successFn:undefined,
        excuteDone:undefined,
        errorFn:undefined
    }) => FetchClass.fetch(settingParams)

    $.fetch.createBase = (paramters = { // 更新 FetchClass 類方法導出，為 fetch 基礎組態設定 2022/03/24
        baseUrl:'',
        baseHeaders:{}
    }) => FetchClass.createBase(paramters)

    return $;
})((el) => typeof el === "object" ? el : document.querySelectorAll(el).length > 1 ? document.querySelectorAll(el) : document.querySelector(el)); // 更新元素指向 2021/08/31

Date.prototype.calculateDay = function(format){ 
    // 更新方法內容與回傳內容 2021/09/22
    // 更新方法 2021/12/01
    // 改變回傳物件 2022/03/23

    //#region 參數設定
    /**
     * @param {object} { day: number,method:string }
     * @returns {string}
     */
    //#endregion

    if(format === undefined || !('day' in format && 'method' in format)){
        $.console('error','Please enter an object and use day and method property in the object.');
        return
    } else if(typeof format.day !== 'number'){
        $.console('error',"day property must use type number.");
        return
    } else if(!$.includes(['addDay','reduceDay'],format.method)){
        $.console('error',"Please enter method type 'addDay' or 'reduceDay'.");
        return
    };

    const obj = {
        addDay:new Date(+this + (format.day * 24 * 60 * 60 * 1000)),
        reduceDay:new Date(+this - (format.day * 24 * 60 * 60 * 1000))
    }
    
    return obj[format.method] ;
};

Date.prototype.toOptionTimeZoneForISO = function(zoneTime){
    return new Date(+this + ((zoneTime === undefined ? 8 : zoneTime) * 60 * 60 * 1000)).toISOString() // 更新方法 2021/03/23
}

Array.prototype.append = function(item){ this.push(item) } // 更新方法 2021/03/23

Array.prototype.appendFirst = function(...item){ this.unshift(...item); return this } // 更新方法 2021/03/23

Array.prototype.range = function(startPos,endPos){ return this.slice(startPos,endPos) }

Array.prototype.remove = function(pos){ this.splice(pos,1); return this } // 更新方法 2021/03/23

Array.prototype.removeFirst = function(){ this.shift(); return this } // 更新方法 2021/03/23

Array.prototype.removeLast = function(){ this.pop(); return this } // 更新方法 2021/03/23