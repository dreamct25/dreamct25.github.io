// Javascript Class 版 ( 雛型版本 )
// class element {
//     constructor(el){
//         return typeof(el) === "object" ? el : document.querySelector(el)
//     }
// }
//
// class $ extends element {
//     constructor(el){
//         super(el)
//         this.text = txt => txt === undefined ? this.textContent : this.textContent = txt
//         this.addClass = classTxt => this.classList.add(classTxt)
//         this.removeClass = classTxt => this.classList.remove(classTxt)
//         this.listener = (eventType,fn) => this.addEventListener(eventType,fn)
//         this.val = valTemp => valTemp === undefined ? this.value : this.value = valTemp
//     }
// }

// Javascript function 版，不需要 new 2021/7/29 ( 雛型版本 )
// const element = (function () {
//     function element (el) {
//         this.el = el;
//         return typeof (el) === "object" ? el : document.querySelector(el);
//     }
//     return element;
// }());
//
// const $ = (function (supers) {
//     function $(el){
//         let scopeThis = supers.call(this, el) || this;
//         scopeThis.el = el;
//         scopeThis.text = txt => txt === undefined ? scopeThis.textContent : scopeThis.textContent = txt;
//         scopeThis.html = dom => scopeThis.innerHTML = dom;
//         scopeThis.addClass = classText => scopeThis.classList.add(classText);
//         scopeThis.removeClass = classTxt => scopeThis.classList.remove(classTxt);
//         scopeThis.listener = (eventType, fn) => scopeThis.addEventListener(eventType, fn);
//         scopeThis.val = valTemp => valTemp === undefined ? scopeThis.value : scopeThis.value = valTemp;
//         scopeThis.attr = (props,val) => val === undefined ? scopeThis.getAttribute(props) : scopeThis.setAttribute(props,val);
//         scopeThis.styles = (cssType, cssParameter) => scopeThis.style.setProperty(cssType, cssParameter);
//         return scopeThis;
//     }
//     return $
// }(element));
//
// $.each = (item,fn) => item.forEach((items,index)=> fn.call(this,items,index))
// $.maps = (item,fn) => item.map((items,index)=> fn.call(this,items,index))
// $.indexOf = (item,x) => item.indexOf(x)
// $.findIndexOfObj = (item,fn) => item.findIndex(where => fn.call(this,where))
// $.sum = (item,fn) => item.reduce((a,b)=> fn.call(this,a,b))
// $.eachKeys = item => Object.keys(item)

// Javascript function 版，不需要 new 更新方法 2021/8/28 ( 正式版本 )
const $ = (function (el) {
    const $ = (targets) => {
        let targetThis = el.call(el, targets) || targets;
        targetThis.targets = targets;
        targetThis.text = (txt) => txt === undefined ? targetThis.textContent : targetThis.textContent = txt;
        targetThis.html = (dom) => targetThis.innerHTML = dom;
        targetThis.addClass = (classText) => targetThis.classList.add(classText);
        targetThis.removeClass = (classTxt) => targetThis.classList.remove(classTxt);
        targetThis.toggleClass = (classText) => targetThis.classList.toggle(classText)
        targetThis.on = (eventType, fn) => { targetThis[["on",eventType].join("")] = t => fn.call(targetThis,t); } // 更新方法 2021/9/20
        targetThis.listener = (eventType, fn) => targetThis.addEventListener(eventType, fn);
        targetThis.val = (valTemp) => valTemp === undefined ? targetThis.value : targetThis.value = valTemp;
        targetThis.attr = (props, val) => val === undefined ? targetThis.getAttribute(props) : targetThis.setAttribute(props, val);
        targetThis.styles = (cssType, cssParameter) => targetThis.style.setProperty(cssType, cssParameter);
        targetThis.props = (props, val) => val === undefined ? targetThis[props] : targetThis[props] = val; // 更新方法 2021/8/31
        targetThis.sibling = (num) => $(targetThis[num]);                                                   // 更新方法 2021/8/31
        targetThis.child = (num) => $(targetThis.children[num]);                                            // 更新方法 2021/8/31
        targetThis.childFirst = () => $(targetThis.firstElementChild);                                      // 更新方法 2021/8/31
        targetThis.childLast = () => $(targetThis.lastElementChild);                                        // 更新方法 2021/8/31
        targetThis.parent = () => $(targetThis.parentNode);                                                 // 更新方法 2021/8/31
        targetThis.appendDom = (el) => $(targetThis).append(el)                                             // 更新方法 2021/9/12
        targetThis.removeDom = () => $(targetThis).remove()                                                 // 更新方法 2021/9/12
        targetThis.appendDomText = (el) => $(targetThis).appendChild(el)                                    // 更新方法 2021/9/12
        return targetThis;
    };
    return $;
}((el) => typeof el === "object" ? el : document.querySelectorAll(el).length > 1 ? document.querySelectorAll(el) : document.querySelector(el))); // 更新元素指向 2021/8/31

$.each = (item, fn) => item.forEach((items, index) => fn.call(item, items, index));
$.maps = (item, fn) => item.map((items, index) => fn.call(item, items, index));
$.filter = (item, fn) => item.filter((items) => fn.call(item, items));
$.sort = (item,fn) => item.sort((a,b) => fn.call(item,a,b))
$.indexOf = (item, x) => item.indexOf(x);
$.includes = (item, x) => item.includes(x);
$.findIndexOfObj = (item, fn) => item.findIndex((where) => fn.call(item, where));
$.sum = (item, fn) => item.reduce((a, b) => fn.call(item, a, b));
$.isNum = (val) => typeof val === "number";   // 更新方法 2021/8/31
$.isStr = (val) => typeof val === "string";   // 更新方法 2021/8/31
$.isBool = (val) => typeof val === "boolean"; // 更新方法 2021/8/31
$.convert = (val,type) => { // 更新方法 2021/10/22
    if(val === undefined || type === undefined || !['string','number','float','boolean','json','stringify'].includes(type)){
        console.error("Please enter first parameters value who want to convert and seconde paramters value is convert type 'string' or 'number' or 'float' or 'boolean' or 'json' or 'stringify'.")
        return
    } else if(typeof val === 'object' && ['string','number','float','boolean'].includes(type)){
        console.error(`Convert value can't be object when use convert type ${type}.`)
        return
    }
    switch(type){
        case 'string':
            return String(val)
        case 'number':
            return parseInt(val)
        case 'float':
            return parseFloat(val)
        case 'boolean':
            return Boolean(val)
        case 'json':
            return JSON.parse(val)
        case 'stringify':
            return JSON.stringify(val)
    }
}
$.createDom = (tag,props) => { // 更新方法 2021/9/12
    let el = document.createElement(tag)
    let propsArr = Object.entries(props)
    propsArr.forEach(getProps => {
        getProps[1] = typeof getProps[1] === "string" ? getProps[1].trim() : getProps[1]
        console.log(getProps[0],getProps[1])
        el[getProps[0]] = getProps[1]
    })
    return el
}
$.createDomText = (text) => document.createTextNode(text) // 更新方法 2021/9/12
$.objDetails = (obj,method) => method === undefined || !['keys','values','entries'].includes(method) ? console.error("please enter secode prameter 'keys' or 'values' or 'entries' in type string") : Object[method](obj) // 更新方法 2021/9/12
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
            return "Please put want to manage's object at first parameters"
        }
    
        if(action === undefined || !['get','set','add','delete'].includes(action)){
            return 'Please enter want to use methods "get、set、add、delete" at seconde parameters'
        } else if(typeof action !== 'string'){
            return 'Seconde parameters must use type string.'
        }
    
        if(key === undefined){
            return 'Please enter want to use key name at third parameters'
        } else if(typeof key !== 'string'){
            return 'Third parameters must use type string.'
        }
    
        if(value === undefined){
            return `Please enter want to set value at forth parameters.`
        }
    }

    switch(action){
        case 'get':
            return obj;
        case 'set':
            check() !== undefined ? console.error(check()) : key in obj ? obj[key] = value : console.error(`Key name ${key} not in this object.`)
            break;
        case 'add':
            check() !== undefined ? console.error(check()) : key in obj ? console.error(`Key name ${key} already in this object`) : obj[key] = value
            break;
        case 'delete':
            check() !== undefined ? console.error(check()) : key in obj ? delete obj[key] : console.error(`Key name ${key} not in this object.`)
            break;
    }
}

$.fetch = async (settingParams = {
    method:'',
    url:'',
    headers:{},
    contentType:'',
    data:{},
    beforePost:undefined,
    successFn:undefined,
    errorFn:undefined
}) => { 
    // 更新類 ajax 方法 2021/9/11
    // 更新類 ajax 方法內容 2021/10/21

    //#region 參數設定
    /**
     * @param {string} method
     * @param {string} url
     * @param {object} header 追加 hearder 物件 2021/10/21
     * @param {string} contentType
     * @param {Function} beforePost <= 回呼函式
     * @param {Function} successFn <= 回呼函式
     * @param {Function} errorFn <= 回呼函式
     */
    //#endregion

    let resError = undefined
    let settings = {}
    let { method, url,headers, contentType, data,beforePost,successFn,errorFn } = settingParams

    settings.method = method
    settings.url = url

    if(headers !== undefined){
        settings.headers = headers
    } else if (data !== undefined) {
        settings.headers = {"Content-Type": contentType}
        settings.body = JSON.stringify(data)
    } else if(headers !== undefined && data !== undefined){
        settings.headers = {...headers,"Content-Type": contentType}
        settings.body = JSON.stringify(data)
    }

    if(beforePost !== undefined){
        beforePost.call(beforePost)
    }
    
    if(successFn === undefined){
        console.error('Function Name successFn is required in obejct parameters.')
        return
    }

    if(errorFn === undefined){
        console.error('Function Name errorFn is required in obejct parameters.')
        return
    } 

    try {
        let res = await fetch(url, settings);
        if (res.status === 200) {
            res.json().then(resItem=> successFn.call(successFn,resItem))
        }
        else {
            resError = res
            throw new Error();
        }
    }
    catch (err) {
        errorFn.call(errorFn,resError)
    }
};

Date.prototype.getFullDateTime = function(formatType) {

    //#region 參數設定
    /**
     * @param {string} formatType <= typeTime 取時間、typeDate 取日期、typeFull 取日期與時間
     * @returns {string}
     */
    //#endregion

    if(formatType === undefined || !['typeDate','typeTime','typeFull'].includes(formatType)) {
        console.error("Please enter format type 'typeDate' or 'typeTime' or 'typeFull'.")
        return
    }
    
    const dateStr = new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toJSON()
    const dateSplit = dateStr.replace(/T/g,"-").replace(/:/g,"-").split(".")[0].split("-")
    const [year,month,date,hour,minute,second] = dateSplit
    return {...{
        typeDate:`${year}-${month}-${date}`,
        typeTime:`${hour}：${minute}：${second}`,
        typeFull:`${year}-${month}-${date} ${hour}：${minute}：${second}`
    }}[formatType]
}