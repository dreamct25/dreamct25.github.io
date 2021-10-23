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

const $: any = (function (el: any) {
    const $: any = (targets: any): any => {
        let targetThis: { [key: string]: any } = el.call(el, targets) || targets
        targetThis.targets = targets
        targetThis.text = (txt: string | undefined): string | void => txt === undefined ? targetThis.textContent : targetThis.textContent = txt
        targetThis.html = (dom: string): void => { targetThis.innerHTML = dom };
        targetThis.addClass = (classText: string): void => targetThis.classList.add(classText);
        targetThis.removeClass = (classText: string): void => targetThis.classList.remove(classText);
        targetThis.toggleClass = (classText: string): void => targetThis.classList.toggle(classText); // 更新方法 2021/9/20
        targetThis.on = (eventType: string, fn: Function): void => { targetThis[["on", eventType].join("")] = (t: Event) => fn.call(targetThis, t); } // 更新方法 2021/9/20
        targetThis.listener = (eventType: string, fn: Function): void => targetThis.addEventListener(eventType, fn);
        targetThis.val = (valTemp: string | undefined): string | void => valTemp === undefined ? targetThis.value : targetThis.value = valTemp;
        targetThis.attr = (props: string, val: any): string | number | void => val === undefined ? targetThis.getAttribute(props) : targetThis.setAttribute(props, val);
        targetThis.props = (props: string, val: any): any => val === undefined ? targetThis[props] : targetThis[props] = val;
        targetThis.styles = (cssType: string, cssParameter: string): void => targetThis.style.setProperty(cssType, cssParameter);
        targetThis.sibling = (num: number): HTMLElement => $(targetThis[num])         // 更新方法 2021/8/31
        targetThis.child = (num: number): HTMLElement => $(targetThis.children[num])  // 更新方法 2021/8/31
        targetThis.firstChild = (): HTMLElement => $(targetThis.firstElementChild)    // 更新方法 2021/8/31
        targetThis.lastChild = (): HTMLElement => $(targetThis.lastElementChild)      // 更新方法 2021/8/31
        targetThis.parent = (): HTMLElement => $(targetThis.parentNode)               // 更新方法 2021/8/31
        targetThis.appendDom = (el: HTMLElement): void => $(targetThis).append(el)    // 更新方法 2021/9/12
        targetThis.removeDom = (): void => $(targetThis).remove()                     // 更新方法 2021/9/12
        targetThis.appendDomText = (el: Text): void => $(targetThis).appendChild(el)  // 更新方法 2021/9/12

        return targetThis
    }

    // Public Methods
    $.each = (item: { [key: string]: any }[] | [], fn: Function): void => item.forEach((items: any, index: number) => fn.call(item, items, index))
    $.maps = (item: { [key: string]: any }[] | [], fn: Function): any[] => item.map((items: any, index: number) => fn.call(item, items, index))
    $.filter = (item: { [key: string]: any }[] | [], fn: Function): { [key: string]: any }[] => item.filter((items: any) => fn.call(item, items))
    $.sort = (item: any[], fn: Function): any => item.sort((a: any, b: any) => fn.call(item, a, b))
    $.indexOf = (item: any, x: never): number => item.indexOf(x)
    $.includes = (item: any[], x: never): boolean => item.includes(x)
    $.findIndexOfObj = (item: any, fn: Function): number => item.findIndex((where: object) => fn.call(item, where))
    $.sum = (item: any, fn: Function) => item.reduce((a: any, b: any) => fn.call(item, a, b))
    $.isNum = (val: any): boolean => typeof val === "number"   // 更新方法 2021/8/31
    $.isStr = (val: any): boolean => typeof val === "string"   // 更新方法 2021/8/31
    $.isBool = (val: any): boolean => typeof val === "boolean" // 更新方法 2021/8/31
    $.convert = (val: any, type: string): any => { // 更新方法 2021/10/22
        if (val === undefined || type === undefined) {
            console.error("Please enter first parameters value who want to convert and seconde paramters value is convert type 'string' or 'number' or 'float' or 'boolean' or 'json' or 'stringify'.")
            return
        } else if (typeof val === 'object' && ['string', 'number', 'float', 'boolean'].includes(type)) {
            console.error(`Convert value can't be object when use convert type ${type}.`)
            return
        }
        switch (type) {
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
    $.createDom = (tag: string, props: { [key: string]: any }): HTMLElement => { // 更新方法 2021/9/12
        let el: any = document.createElement(tag)
        let propsArr: [string, any][] = Object.entries(props)
        propsArr.forEach((getProps: any[]) => {
            getProps[1] = typeof getProps[1] === "string" ? getProps[1].trim() : getProps[1]
            el[getProps[0].toString()] = getProps[1]
        })
        return el
    }
    $.createDomText = (text: string): Text => document.createTextNode(text) // 更新方法 2021/9/12
    $.objDetails = (obj: { [key: string]: any }, method: any): any[] | void => { // 更新方法 2021/9/12
        const ckeckStr: string[] = ['keys', 'values', 'entries']
        return method === undefined || !ckeckStr.includes(method) ? console.error("please enter secode prameter 'keys' or 'values' or 'entries' in type string") : Object[method](obj)
    }
    $.objManager = (obj: { [key: string]: any }, action: string | undefined, key: string | undefined, value: any): { [key: string]: any } | void => { // 更新方法 2021/10/21

        //#region 參數設定
        /**
         * @param {object} obj <= 型別物件 要管理的物件
         * @param {string} action <= 型別字串，要執行的動作，有分為 get ( 取得管理物件內容 )、set ( 設定管理物件指定鍵與值 )、add ( 新增管理物件鍵與值 )、delete ( 刪除管理物件指定鍵與值 )
         * @param {string} key <= 型別字串，為鍵值的鍵
         * @param {any} value <= 型別任意，為鍵值的值
         * @returns {object | void}
         */
        //#endregion

        const check = (): string | undefined => {
            const checkStr: string[] = ['get', 'set', 'add', 'delete']
            if (obj === undefined) {
                return "Please put want to manage's object at first parameters"
            }

            if (action === undefined || !checkStr.includes(action)) {
                return 'Please enter want to use methods "get、set、add、delete" at seconde parameters'
            } else if (typeof action !== 'string') {
                return 'Seconde parameters must use type string.'
            }

            if (key === undefined) {
                return 'Please enter want to use key name at third parameters'
            } else if (typeof key !== 'string') {
                return 'Third parameters must use type string.'
            }

            if (value === undefined) {
                return `Please enter want to set value at forth parameters.`
            }
        }

        switch (action) {
            case 'get':
                return obj;
            case 'set':
                check() !== undefined ? console.error(check()) : key! in obj ? obj[key!] = value : console.error(`Key name ${key} not in this object.`)
                break;
            case 'add':
                check() !== undefined ? console.error(check()) : key! in obj ? console.error(`Key name ${key} already in this object`) : obj[key!] = value
                break;
            case 'delete':
                check() !== undefined ? console.error(check()) : key! in obj ? delete obj[key!] : console.error(`Key name ${key} not in this object.`)
                break;
        }
    }
    $.fetch = async (settingParams: {
        method: string,
        url: string,
        headers: { [key: string]: any } | undefined
        contentType: string,
        data: { [key: string]: any } | undefined,
        beforePost: Function,
        successFn: Function,
        errorFn: Function
    }): Promise<void> => {
        // 更新類 ajax 方法 2021/9/11
        // 更新類 ajax 方法內容 2021/10/21

        //#region 參數設定
        /**
         * @param {string} method
         * @param {string} url
         * @param {object} headers 追加 hearder 物件 2021/10/21
         * @param {string} contentType
         * @param {Function} beforePost <= 回呼函式
         * @param {Function} successFn <= 回呼函式
         * @param {Function} errorFn <= 回呼函式
         */
        //#endregion

        let resError: { [key: string]: any } | undefined
        let settings: { [key: string]: any } = {}
        let { method, url, headers, contentType, data, beforePost, successFn, errorFn } = settingParams

        settings.method = method
        settings.url = url

        if (headers !== undefined) {
            settings.headers = headers
        } else if (data !== undefined) {
            settings.headers = { "Content-Type": contentType }
            settings.body = JSON.stringify(data)
        } else if (headers !== undefined && data !== undefined) {
            settings.headers = { ...settingParams.headers, "Content-Type": contentType }
            settings.body = JSON.stringify(data)
        }

        if (beforePost !== undefined) {
            beforePost.call(beforePost)
        }

        if (successFn === undefined) {
            console.error('Function Name successFn is required in obejct parameters.')
            return
        }

        if (errorFn === undefined) {
            console.error('Function Name errorFn is required in obejct parameters.')
            return
        }

        try {
            let res: Response = await fetch(url, settings);
            if (res.status === 200) {
                res.json().then((resItem: { [key: string]: any }) => successFn.call(successFn, resItem))
            }
            else {
                resError = res
                throw new Error(JSON.stringify(resError));
            }
        }
        catch (err: any) {
            errorFn.call(errorFn, resError)
        }
    };

    return $
}((el: object | string): any => typeof el === "object" ? el : document.querySelectorAll(el).length > 1 ? document.querySelectorAll(el) : document.querySelector(el))) // 更新元素指向 2021/8/31

interface Date { getFullDateTime(formatType: string | undefined): string | undefined }
Date.prototype.getFullDateTime = function (formatType: string | undefined): string | undefined { // 更新方法內容與回傳內容 2021/9/22

    //#region 參數設定
    /**
     * @param {string} formatType <= typeTime 取時間、typeDate 取日期、typeFull 取日期與時間
     * @returns {string}
     */
    //#endregion

    const checkStr: string[] = ['typeDate', 'typeTime', 'typeFull']

    if (formatType === undefined || !checkStr.includes(formatType)) {
        console.error("Please enter format type 'typeDate' or 'typeTime' or 'typeFull'.")
        return
    }

    const dateStr: string = new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toJSON()
    const dateSplit: string[] = dateStr.replace(/T/g, "-").replace(/:/g, "-").split(".")[0].split("-")
    const [year, month, date, hour, minute, second]: string[] = dateSplit
    return {
        ...{
            typeDate: `${year}-${month}-${date}`,
            typeTime: `${hour}：${minute}：${second}`,
            typeFull: `${year}-${month}-${date} ${hour}：${minute}：${second}`
        }
    }[formatType]
}
