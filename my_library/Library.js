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
        targetThis.removeClass = (classText) => targetThis.classList.remove(classText);
        targetThis.toggleClass = (classText) => targetThis.classList.toggle(classText); // 更新方法 2021/9/20
        targetThis.on = (eventType,fn) => { targetThis[["on",eventType].join("")] = t => fn.call(targetThis,t); } // 更新方法 2021/9/20
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
$.indexOf = (item, x) => item.indexOf(x);
$.includes = (item, x) => item.includes(x);
$.findIndexOfObj = (item, fn) => item.findIndex((where) => fn.call(item, where));
$.sum = (item, fn) => item.reduce((a, b) => fn.call(item, a, b));
$.eachKeys = (item) => Object.keys(item);
$.isNum = (val) => typeof val === "number" ? true : false;   // 更新方法 2021/8/31
$.isStr = (val) => typeof val === "string" ? true : false;   // 更新方法 2021/8/31
$.isBool = (val) => typeof val === "boolean" ? true : false; // 更新方法 2021/8/31
$.convert = (val,type) => { if(typeof val === "object"){ alert("Invalid Convert Type.") }else{ switch(type){ case "string":return String(val); case "number":return parseInt(val); case "float":return parseFloat(val); case "boolean":return Boolean(val) }}} // 更新方法 2021/9/22
$.convertJSON = (val,type) => { let valTemp = false; if(type === "string") valTemp = JSON.stringify(val); if(type === "object") valTemp = JSON.parse(val); return valTemp === false ? alert("Invalid Convert Type") : valTemp } // 更新方法 2021/9/22
$.createDom = (tag,props) => { // 更新方法 2021/9/12
    let el = document.createElement(tag)
    let propsArr = Object.entries(props)
    propsArr.forEach(getProps => {
        getProps[1] = typeof getProps[1] === "string" ? getProps[1].trim() : getProps[1]
        el[getProps[0].toString()] = getProps[1]
    })
    return el
}
$.createDomText = (text) => document.createTextNode(text) // 更新方法 2021/9/12
$.fetch = async (settingParams) => { // 更新類 ajax 方法 2021/9/11

    //#region settingParams 參數
    // {
    //     method:字串,
    //     url:字串,
    //     contentType:字串,
    //     data:物件,
    //     beforePost:回呼函式
    //     successFn:回呼函式,
    //     errorFn:回呼函式,
    // }
    //#endregion

    let settings = {}
    let { method, url, contentType, data,beforePost,successFn,errorFn } = settingParams

    settings.method = method
    settings.url = url

    if(data != undefined){
        settings.headers = {"Content-Type": contentType}
        settings.body = JSON.stringify(data)
    }

    try {
        if(beforePost != undefined) beforePost.call(beforePost)

        let res = await fetch(url, settings);
        if (res.status === 200) {
            res.json().then(resItem=> successFn.call(successFn, resItem))
        }
        else {
            let msObj = {
                message:{
                    statusCode:res.status,
                    statusText:res.statusText
                }
            }
            throw new Error(JSON.stringify(msObj));
        }
    }
    catch (err) {
        errorFn.call(errorFn,JSON.parse(err.message))
    }
};

Date.prototype.getFullDateTime = (type) => { // 更新方法內容與回傳內容 2021/9/22
    let formatType = {}
    let dateStr = new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toJSON()
    let dateSplit = dateStr.replace(/T/g,"-").replace(/:/g,"-").split(".")[0].split("-")
    let [year,month,date,hour,minute,second] = dateSplit
    formatType.date = `${year}-${month}-${date}`
    formatType.time = `${hour}:${minute}:${second}`
    formatType.full = `${formatType.date}T${formatType.time}`
    return type === undefined ? formatType : formatType[type]
}