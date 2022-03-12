// CopyRight by Chen 2021/08 - 2022/03 Library language - typescript ver 1.3.5
// Work Environment Typescript v4.5.5、eslint v6.7.2
//
// Use in node js
// export default $
const $: any = ((el) => {
    const $ = (target: any): any => {
        const self: any = el.call(el, target) || target;
        self.texts = (txt?: string): string | void => txt === undefined ? self.textContent : self.textContent = txt;
        self.html = (dom?: string): string | void => dom === undefined ? self.innerHTML : self.innerHTML = dom;
        self.addClass = (classText: string): any => { self.classList.add(classText); return self } // 更新方法 2022/03/12
        self.removeClass = (classText: string): any => { self.classList.remove(classText); return self } // 更新方法 2022/03/12
        self.toggleClass = (classText: string): void => self.classList.toggle(classText); // 更新方法 2021/09/20
        self.on = (eventType: string, fn: (self: any, t: Event) => void): void => { self[["on", eventType].join("")] = (t: Event) => fn.call(fn, self, t); }; // 更新方法 2021/09/20
        self.listener = (eventType: string, fn: () => void): void => self.addEventListener(eventType, fn);
        self.removeListener = (eventType: string, fn: () => void): void => self.removeEventListener(eventType, fn); // 更新方法 2022/01/04
        self.val = (valTemp?: string): string | void => valTemp === undefined ? self.value : self.value = valTemp;
        self.attr = (props: string, val?: any): (string | number | void) => val === undefined ? self.getAttribute(props) : self.setAttribute(props, val);
        self.props = (props: string, val?: any): any => val === undefined ? self[props] : self[props] = val;
        self.sibling = (num: number): HTMLElement => $(self[num]);         // 更新方法 2021/08/31
        self.child = (num: number): HTMLElement => $(self.children[num]);  // 更新方法 2021/08/31
        self.childFirst = (): HTMLElement => $(self.firstElementChild);    // 更新方法 2021/08/31
        self.childLast = (): HTMLElement => $(self.lastElementChild);      // 更新方法 2021/08/31
        self.parent = (): HTMLElement => $(self.parentNode);               // 更新方法 2021/08/31
        self.appendDom = (el: HTMLElement): void => $(self).append(el);    // 更新方法 2021/09/12
        self.removeDom = (): void => $(self).remove();                     // 更新方法 2021/09/12
        self.removeChildDom = (): void => $(self).replaceChildren();       // 更新方法 2021/10/25
        self.appendDomText = (el: Text): void => $(self).appendChild(el);  // 更新方法 2021/09/12
        self.easyAppendDom = (orderBy: string, domStr: string): void => $(self).insertAdjacentHTML(orderBy !== 'afterDom' ? 'afterbegin' : 'beforeend', domStr);  // 更新方法 2021/11/25
        self.styles = (method: string, cssType: string, cssParameter: string): typeof self | undefined => { // 更新方法 2021/10/26
            if (!$.includes(['set', 'remove'], method)) {
                $.console('error', "First parameter method must use string and keyword is 'set' or 'remove'.");
                return;
            }
            method === 'set' ? self.style.setProperty(cssType, cssParameter) : self.style.removeProperty(cssType);
            return self
        };
        self.getDomStyles = (conditionProps: string[]): { [key: string]: any } => { // 更新方法 2021/10/26
            const cssProperty: { [key: string]: any } = {};
            if (typeof conditionProps !== "object") {
                $.console('error', 'Parameter must use array.');
            } else {
                if (conditionProps.length === 0) {
                    $.console('error', 'Parameter must use array,and css property must in array with string.');
                } else {
                    $.each(conditionProps, item => cssProperty[item] = getComputedStyle($(self)).getPropertyValue(item));
                    return cssProperty;
                }
            }
            return cssProperty;
        };
        self.scrollToTop = (scrollSetting: { scrollTop: number, duration: number } = { scrollTop: 0, duration: 0 }): void => { // 更新方法 2021/10/26
            let animateScroll: any = undefined;
            const [keyI, keyII]: string[] = Object.keys(scrollSetting);
            const startPos: number = self[keyI];
            const changePos: number = (scrollSetting as { [key: string]: any })[keyI] - startPos;
            const startTimeStamp: number = +new Date();

            const animationSettings: (animationSetting: {
                currentTime: number,
                startVal: number,
                changeVal: number,
                animateDuration: number
            }) => number = animationSetting => {
                const { currentTime, startVal, changeVal, animateDuration }: typeof animationSetting = animationSetting;
                let currentTimeTemp: number = currentTime;
                currentTimeTemp /= animateDuration / 2;
                if (currentTimeTemp < 1) return (changeVal / 2) * currentTimeTemp * currentTimeTemp + startVal;
                currentTimeTemp -= 1;
                return (-changeVal / 2) * (currentTimeTemp * (currentTimeTemp - 2) - 1) + startVal;
            };

            (animateScroll = () => {
                const currentTimeStamp: number = +new Date() - startTimeStamp;
                self.scrollTop = Number(animationSettings({
                    currentTime: currentTimeStamp,
                    startVal: startPos,
                    changeVal: changePos,
                    animateDuration: (scrollSetting as { [key: string]: any })[keyII]
                }));
                currentTimeStamp < (scrollSetting as { [key: string]: any })[keyII] ? requestAnimationFrame(animateScroll) : self.scrollTop = (scrollSetting as { [key: string]: any })[keyI];
            })();
        }
        return self;
    };

    $.each = (item: any[], fn: (...parameters: any[]) => void): void => item.forEach((items: any, index: number) => fn.call(item, items, index));
    $.maps = (item: any[], fn: (...parameters: any[]) => void): any[] => item.map((items: any, index: number) => fn.call(item, items, index));
    $.filter = (item: any[], fn: (...parameters: any[]) => void): { [key: string]: any }[] => item.filter((items: any) => fn.call(item, items));
    $.find = (item:any[],fn:(...parameters:any[]) => void):any => item.find((items:any) => fn.call(item,items))  // 更新方法 2022/03/12
    $.reduce = (item:any[],fn:(...parameters:any[]) => void): any => item.reduce((a:any,b:any) => fn.call(item,a,b)) // 更新方法 2022/03/12
    $.sort = (item: any[], fn: (...parameters: any[]) => number): any => item.sort((a: any, b: any) => fn.call(item, a, b));
    $.indexOf = (item: any, x: any): number => item.indexOf(x);
    $.includes = (item: any[], x: any): boolean => item.includes(x);
    $.findIndexOfObj = (item: any, fn: (...parameters: any[]) => void): number => item.findIndex((where: { [key: string]: any }) => fn.call(item, where));
    $.sum = (item: any, fn: (...parameters: any[]) => void) => item.reduce((a: any, b: any) => fn.call(item, a, b));
    $.typeOf = (item: any, classType: any): string | boolean => classType === undefined ? item.constructor.name : item.constructor === classType; // 更新方法 2021/10/26
    $.console = (type: string, ...item: any): void => (console as { [key: string]: any })[type](...item) // 更新方法 2021/10/26
    $.localData = (action: string, keyName: string, item: { [key: string]: any } | any[]): { [key: string]: any } | any[] => action === 'get' ? ($.convert(localStorage.getItem(keyName), 'json') || []) : localStorage.setItem(keyName, $.convert(item, 'stringify')); // 更新方法 2021/11/29
    $.convert = (val: any, type: string): any => { // 更新方法 2021/10/22
        if (val === undefined || type === undefined) {
            $.console('error', "Please enter first parameters value who want to convert and seconde paramters value is convert type 'string' or 'number' or 'float' or 'boolean' or 'json' or 'stringify'.");
            return
        } else if (typeof val === 'object' && $.includes(['string', 'number', 'float', 'boolean'], type)) {
            $.console('error', `Convert value can't be object when use convert type ${type}.`);
            return
        }

        const returnItem: {
            string: string,
            number: number,
            float: number,
            boolean: boolean,
            json: { [key: string]: any } | boolean,
            stringify: string | boolean
        } = {
            string: String(val),
            number: parseInt(val),
            float: parseFloat(val),
            boolean: Boolean(val),
            json: type === 'json' && JSON.parse(val),
            stringify: type === 'stringify' && JSON.stringify(val),
        }

        return (returnItem as { [key: string]: any })[type];
    }

    $.createDom = (tag: string, props: { [key: string]: any }): HTMLElement => { // 更新方法 2021/09/12
        const el: HTMLElement & { [key: string]: any } = document.createElement(tag);
        const propsArr: [string, any][] = Object.entries(props);
        $.each(propsArr, (getProps: [string, any]) => {
            const [propertyI, valueI]: [string, any] = getProps
            if ($.typeOf(valueI, 'Object')) { // 更新方法 2021/12/07，解析 data-* 建構屬性內容
                const [propertyII, obj]: [string, { [key: string]: any }] = getProps
                const [[key, valueII]]: [string, any][] = Object.entries(obj)
                el[propertyII][key] = valueII
            } else {
                el[propertyI] = $.typeOf(valueI, 'String') ? valueI.trim() : valueI
            }
        })
        return el;
    };
    $.createDomText = (text: string): Text => document.createTextNode(text); // 更新方法 2021/09/12
    $.objDetails = (obj: { [key: string]: any }, method: string): any[] | void => method === undefined || !$.includes(['keys', 'values', 'entries'], method) ? $.console('error', "please enter secode prameter 'keys' or 'values' or 'entries' in type string") : (Object as { [key: string]: any })[method](obj); // 更新方法 2021/09/12
    $.objManager = (obj: { [key: string]: any }, action: string, key: string, value: any): { [key: string]: any } | void => { // 更新方法 2021/10/21

        //#region 參數設定
        /**
         * @param {object} obj <= 型別物件 要管理的物件
         * @param {string} action <= 型別字串，要執行的動作，有分為 get ( 取得管理物件內容 )、set ( 設定管理物件指定鍵與值 )、add ( 新增管理物件鍵與值 )、delete ( 刪除管理物件指定鍵與值 )
         * @param {string} key <= 型別字串，為鍵值的鍵
         * @param {any} value <= 型別任意，為鍵值的值
         * @returns {object | void}
         */
        //#endregion

        const check: () => string | undefined = () => {
            if (obj === undefined) {
                return "Please put want to manage's object at first parameters";
            }

            if (action === undefined || !$.includes(['get', 'set', 'add', 'delete'], action)) {
                return 'Please enter want to use methods "get、set、add、delete" at seconde parameters';
            } else if (typeof action !== 'string') {
                return 'Seconde parameters must use type string.';
            }

            if (key === undefined) {
                return 'Please enter want to use key name at third parameters';
            } else if (typeof key !== 'string') {
                return 'Third parameters must use type string.';
            }

            if (value === undefined) {
                return `Please enter want to set value at forth parameters.`;
            }
        }

        switch (action) {
            case 'get':
                return obj;
            case 'set':
                check() !== undefined ? $.console('error', check()) : key in obj ? obj[key] = value : $.console('error', `Key name ${key} not in this object.`);
                break;
            case 'add':
                check() !== undefined ? $.console('error', check()) : key in obj ? $.console('error', `Key name ${key} already in this object`) : obj[key] = value;
                break;
            case 'delete':
                check() !== undefined ? $.console('error', check()) : key in obj ? delete obj[key] : $.console('error', `Key name ${key} not in this object.`);
                break;
        }
    }

    $.formatDateTime = (format: { formatDate: string | Date, formatType: string, localCountryTime?: number, toDateFullNumber?: boolean }): string | number | undefined => { // 更新方法 2021/12/01
        //#region 參數設定
        /**
         * @param {object}
         * { 
         *   formatDate: Date || string,
         *   formatType:string, <= formatType 參數 time 取時間、date 取日期、full 取日期與時間
         *   localCountryTime:number <= localCountryTime 根據時區格式化，預設為 GMT+8，可選參數
         *   toDateFullNumber <= toDateFullNumber 將當前格式化時間改為數字，可以用於排序上，可選參數
         * }
         * @returns {string | number}
         */
        //#endregion

        if (!('formatDate' in format || 'formatType' in format)) {
            $.console('error', 'Please enter an object and use formatType property in the object.');
            return undefined;
        }

        const localCountryTime: number = ('localCountryTime' in format ? format.localCountryTime || 0 : 8) * 60 * 60 * 1000
        const dateStr: string = new Date(+new Date(format.formatDate) + localCountryTime).toJSON();
        const dateSplit: string[] = dateStr.replace(/T/g, "-").replace(/:/g, "-").split(".")[0].split("-");
        const [year, month, date, hour, minute, second] = dateSplit;

        if ('toDateFullNumber' in format) {
            return format.toDateFullNumber ? Number(dateSplit.join("")) : format.formatType.replace(/yyyy/g, year).replace(/MM/g, month).replace(/dd/g, date).replace(/HH/g, hour).replace(/mm/g, minute).replace(/ss/g, second)
        }

        return format.formatType.replace(/yyyy/g, year).replace(/MM/g, month).replace(/dd/g, date).replace(/HH/g, hour).replace(/mm/g, minute).replace(/ss/g, second)
    }

    $.fetch = async (settingParams: {
        method: string,
        url: string,
        headers?: { [key: string]: any },
        contentType?: string,
        data?: { [key: string]: any },
        beforePost?: () => void,
        successFn: (data: any) => void,
        errorFn: (err: any) => void
    }): Promise<void> => {
        // 更新類 ajax 方法 2021/09/11
        // 更新類 ajax 方法內容 2021/10/21

        //#region 參數設定
        /**
         * @param {string} method
         * @param {string} url
         * @param {object} header 追加 hearder 物件 2021/10/21
         * @param {string} contentType
         * @param {Function} beforePost <= 回調函式
         * @param {Function} successFn <= 回調函式
         * @param {Function} errorFn <= 回調函式
         */
        //#endregion

        let resError: { [key: string]: any } | undefined;
        const settings: { [key: string]: any } = {};
        const { method, url, headers, contentType, data, beforePost, successFn, errorFn } = settingParams;

        settings.method = method;
        settings.url = url;

        if (headers !== undefined) {
            settings.headers = headers;
        }

        if (data !== undefined) {
            settings.headers = { "Content-Type": contentType };
            settings.body = $.convert(data, 'stringify');
        }

        if (headers !== undefined && data !== undefined) {
            settings.headers = { ...headers };
            settings.body = $.convert(data, 'stringify');
        }

        if (beforePost !== undefined) {
            beforePost.call(beforePost);
        }

        if (successFn === undefined) {
            $.console('error', 'Function Name successFn is required in obejct parameters.');
            return
        }

        if (errorFn === undefined) {
            $.console('error', 'Function Name errorFn is required in obejct parameters.');
            return
        }

        try {
            const res: Response = await fetch(url, settings);
            if (res.status === 200) {
                res.json().then((resItem: { [key: string]: any }) => successFn.call(successFn, resItem));
            }
            else {
                resError = res;
                throw new Error();
            }
        }
        catch (err: any) {
            errorFn.call(errorFn, resError)
        }
    };

    return $;
})((el: any): any => typeof el === "object" ? el : document.querySelectorAll(el).length > 1 ? document.querySelectorAll(el) : document.querySelector(el)); // 更新元素指向 2021/8/31

// Use in node js
// declare global {
//     interface Date { calculateDay: (format: { day: number, method: string }) => Date | undefined }
// }

interface Date { calculateDay: (format: { day: number, method: string }) => Date }

Date.prototype.calculateDay = (format: { day: number, method: string }): Date | undefined => {
    // 更新方法內容與回傳內容 2021/09/22
    // 更新方法 2021/12/01

    //#region 參數設定
    /**
     * @param {object} { day: number,method:string }
     * @returns {string}
     */
    //#endregion

    if (format === undefined || !('day' in format && 'method' in format)) {
        $.console('error', 'Please enter an object and use day and method property in the object.');
        return
    } else if (typeof format.day !== 'number') {
        $.console('error', "day property must use type number.");
    } else if (!$.includes(['add', 'reduce'], format.method)) {
        $.console('error', "Please enter method type 'add' or 'reduce'.");
        return
    }

    const addDay = new Date(+new Date() + (format.day * 24 * 60 * 60 * 1000))
    const reduceDay = new Date(+new Date() - (format.day * 24 * 60 * 60 * 1000))

    return format.method === 'add' ? addDay : reduceDay;
};