// Javascript Class 版
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

// TypeScript Class 版，2021/7/29
// class element {
//     constructor(public el:any){
//         return typeof(el) === "object" ? el : document.querySelector(el)!
//     }
// }
//
// class $ extends element {
//     [x: string]: any
//     constructor(public el:any){
//         super(el)
//     }
//     text:Function = (txt:string):any => txt === undefined ? this.textContent : this.textContent = txt
//     addClass:Function = (classText:string):any => this.classList.add(classText)
//     removeClass:Function = (classTxt:string) => this.classList.remove(classTxt)
//     listener:Function = (eventType:string,fn:Function) => this.addEventListener(eventType,fn)
//     val:Function = (valTemp:string | number) => valTemp === undefined ? this.value : this.value = valTemp
// }

// Javascript function 版，不需要 new 2021/7/29
const element = (function () {
    function element (el) {
        this.el = el;
        return typeof (el) === "object" ? el : document.querySelector(el);
    }
    return element;
}());

const $ = (function (supers) {
    function $(el){
        let scopeThis = supers.call(this, el) || this;
        scopeThis.el = el;
        scopeThis.text = txt => txt === undefined ? scopeThis.textContent : scopeThis.textContent = txt;
        scopeThis.html = dom => scopeThis.innerHTML = dom;
        scopeThis.addClass = classText => scopeThis.classList.add(classText);
        scopeThis.removeClass = classTxt => scopeThis.classList.remove(classTxt);
        scopeThis.listener = (eventType, fn) => scopeThis.addEventListener(eventType, fn);
        scopeThis.val = valTemp => valTemp === undefined ? scopeThis.value : scopeThis.value = valTemp;
        scopeThis.attr = (props,val) => val === undefined ? scopeThis.getAttribute(props) : scopeThis.setAttribute(props,val);
        scopeThis.styles = (cssType, cssParameter) => scopeThis.style.setProperty(cssType, cssParameter);
        return scopeThis;
    }
    
    return $
}(element));

$.each = (item,fn) => item.forEach((items,index)=> fn.call(this,items,index))

$.maps = (item,fn) => item.map((items,index)=> fn.call(this,items,index))

$.indexOf = (item,x) => item.indexOf(x)

$.findIndexOfObj = (item,fn) => item.findIndex(where => fn.call(this,where))

$.sum = (item,fn) => item.reduce((a,b)=> fn.call(this,a,b))

$.eachKeys = item => Object.keys(item)



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