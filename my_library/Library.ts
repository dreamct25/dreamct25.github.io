// TypeScript Class 版，2021/7/29 ( 雛型版本 )
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

// TypeScript function 版，2021/8/28
// const $: any = (function (el) {
//     const $ = (targets: any) => {
//         let targetThis: { [key: string]: any } = el.call(el, targets) || targets
//         targetThis.targets = targets
//         targetThis.text = (txt: string | undefined) => txt === undefined ? targetThis.textContent : targetThis.textContent = txt
//         targetThis.html = (dom: string) => targetThis.innerHTML = dom;
//         targetThis.addClass = (classText: string) => targetThis.classList.add(classText);
//         targetThis.removeClass = (classTxt: string) => targetThis.classList.remove(classTxt);
//         targetThis.listener = (eventType: string, fn: Function) => targetThis.addEventListener(eventType, fn);
//         targetThis.val = (valTemp: string | undefined) => valTemp === undefined ? targetThis.value : targetThis.value = valTemp;
//         targetThis.attr = (props: string, val: any) => val === undefined ? targetThis.getAttribute(props) : targetThis.setAttribute(props, val);
//         targetThis.styles = (cssType: string, cssParameter: string) => targetThis.style.setProperty(cssType, cssParameter);
//         targetThis.sibling = (num: number) => $(targetThis[num])        // 更新方法 2021/8/31
//         targetThis.child = (num: number) => $(targetThis.children[num]) // 更新方法 2021/8/31
//         targetThis.firstChild = () => $(targetThis.firstElementChild)   // 更新方法 2021/8/31
//         targetThis.lastChild = () => $(targetThis.lastElementChild)     // 更新方法 2021/8/31
//         targetThis.parent = () => $(targetThis.parentNode)              // 更新方法 2021/8/31
//         return targetThis
//     }
//     return $
// }((el: object | string): any => typeof el === "object" ? el : document.querySelectorAll(el).length > 1 ? document.querySelectorAll(el) : el))) // 更新元素指向 2021/8/31
//
// $.each = (item: {}[] | [], fn: Function,) => item.forEach((items: any, index: number) => fn.call(item, items, index))
// $.maps = (item: {}[] | [], fn: Function) => item.map((items: any, index: number) => fn.call(item, items, index))
// $.filter = (item: {}[] | [], fn: Function) => item.filter((items: any) => fn.call(item, items))
// $.indexOf = (item: any, x: never): number => item.indexOf(x)
// $.includes = (item: any, x: never): boolean => item.includes(x)
// $.findIndexOfObj = (item: any, fn: Function): number => item.findIndex((where: object) => fn.call(item, where))
// $.sum = (item: any, fn: Function) => item.reduce((a: any, b: any) => fn.call(item, a, b))
// $.eachKeys = (item: object): string[] => Object.keys(item)                // 更新方法 2021/8/31
// $.isNum = (val: any): boolean => typeof val === "number" ? true : false   // 更新方法 2021/8/31
// $.isStr = (val: any): boolean => typeof val === "string" ? true : false   // 更新方法 2021/8/31
// $.isBool = (val: any): boolean => typeof val === "boolean" ? true : false // 更新方法 2021/8/31

const $: any = (function (el) {
    const $ = (targets: any) => {
        let targetThis: { [key: string]: any } = el.call(el, targets) || targets
        targetThis.targets = targets
        targetThis.text = (txt: string | undefined) => txt === undefined ? targetThis.textContent : targetThis.textContent = txt
        targetThis.html = (dom: string) => targetThis.innerHTML = dom;
        targetThis.addClass = (classText: string) => targetThis.classList.add(classText);
        targetThis.removeClass = (classTxt: string) => targetThis.classList.remove(classTxt);
        targetThis.listener = (eventType: string, fn: Function) => targetThis.addEventListener(eventType, fn);
        targetThis.val = (valTemp: string | undefined) => valTemp === undefined ? targetThis.value : targetThis.value = valTemp;
        targetThis.attr = (props: string, val: any) => val === undefined ? targetThis.getAttribute(props) : targetThis.setAttribute(props, val);
        targetThis.props = (props: string, val: any) => val === undefined ? targetThis[props] : targetThis[props] = val;
        targetThis.styles = (cssType: string, cssParameter: string) => targetThis.style.setProperty(cssType, cssParameter);
        targetThis.sibling = (num: number) => $(targetThis[num])        // 更新方法 2021/8/31
        targetThis.child = (num: number) => $(targetThis.children[num]) // 更新方法 2021/8/31
        targetThis.firstChild = () => $(targetThis.firstElementChild)   // 更新方法 2021/8/31
        targetThis.lastChild = () => $(targetThis.lastElementChild)     // 更新方法 2021/8/31
        targetThis.parent = () => $(targetThis.parentNode)              // 更新方法 2021/8/31

        return targetThis

    }

    return $
}((el: object | string): any => typeof el === "object" ? el : document.querySelectorAll(el).length > 1 ? document.querySelectorAll(el) : document.querySelector(el))) // 更新元素指向 2021/8/31

$.each = (item: {}[] | [], fn: Function,) => item.forEach((items: any, index: number) => fn.call(item, items, index))
$.maps = (item: {}[] | [], fn: Function) => item.map((items: any, index: number) => fn.call(item, items, index))
$.filter = (item: {}[] | [], fn: Function) => item.filter((items: any) => fn.call(item, items))
$.indexOf = (item: any, x: never): number => item.indexOf(x)
$.includes = (item: any, x: never): boolean => item.includes(x)
$.findIndexOfObj = (item: any, fn: Function): number => item.findIndex((where: object) => fn.call(item, where))
$.sum = (item: any, fn: Function) => item.reduce((a: any, b: any) => fn.call(item, a, b))
$.eachKeys = (item: object): string[] => Object.keys(item)                // 更新方法 2021/8/31
$.isNum = (val: any): boolean => typeof val === "number" ? true : false   // 更新方法 2021/8/31
$.isStr = (val: any): boolean => typeof val === "string" ? true : false   // 更新方法 2021/8/31
$.isBool = (val: any): boolean => typeof val === "boolean" ? true : false // 更新方法 2021/8/31
$.fetch = async (settingParams: { // 更新類 ajax 方法 2021/9/11
    method: string,
    url: string,
    contentType: string,
    data: object | undefined,
    beforePost: Function,
    successFn: Function,
    errorFn: Function
}) => {

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

    let settings: { [key: string]: any } = {}
    let { method, url, contentType, data, beforePost, successFn, errorFn } = settingParams

    settings.method = method
    settings.url = url

    if (data != undefined) {
        settings.headers = { "Content-Type": contentType }
        settings.body = JSON.stringify(data)
    }

    try {
        beforePost.call(beforePost)
        let res = await fetch(url, settings);
        if (res.status === 200) {
            res.json().then((resItem: object | string) => successFn.call(successFn, typeof resItem === "string" ? JSON.parse(resItem) : resItem))
        }
        else {
            let msObj: { [key: string]: any } = {
                message: {
                    statusCode: res.status,
                    statusText: res.statusText
                }
            }
            throw new Error(JSON.stringify(msObj));
        }
    }
    catch (err: any) {
        errorFn.call(errorFn, JSON.parse(err.message))
    }
};