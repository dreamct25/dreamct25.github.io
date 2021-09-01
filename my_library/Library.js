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


Date.prototype.getFullDateTime = function(formatType) {
    let fullDateTimeFormat = {}
    let dateStr = new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toJSON()
    let dateSplit = dateStr.replace(/T/g,"-").replace(/:/g,"-").split(".")[0].split("-")
    let [year,month,date,hour,minute,second] = dateSplit
    fullDateTimeFormat.typeDate = `${year}-${month}-${date}`
    fullDateTimeFormat.typeTime = `${hour}：${minute}：${second}`
    fullDateTimeFormat.typeFull = `${fullDateTimeFormat.typeDate} ${fullDateTimeFormat.typeTime}`
    switch (formatType) {
        case "time":
            return fullDateTimeFormat.typeTime
        case "date":
            return fullDateTimeFormat.typeDate
        case "full":
            return fullDateTimeFormat.typeFull
    }
}