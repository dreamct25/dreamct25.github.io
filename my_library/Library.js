// © CopyRight 2021-08 - 2023-06 Alex Chen. Library language - Javascript ver 1.5.9
// Work Environment Javascript ES6 or latest、ESlint 8.42.0
//
// Use in CommonJS
// module.exports = $
//
// Use in ESModule
// export default $

/* eslint-disable no-return-assign */
/* eslint-disable no-prototype-builtins */
/* eslint-disable promise/param-names */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-async-promise-executor */
'use strict'
const $ = ((el) => {
  const $ = target => {
    const self = el.call(el, target) || target
    self.texts = (txt) => { if (txt) { self.textContent = txt } else { return self.textContent } }
    self.html = (dom) => { if (dom) { self.innerHTML = dom } else { return self.innerHTML } }
    self.addClass = (classText) => { self.classList.add(classText); return self } // 更新方法 2022/03/12 變形為可鏈式寫法
    self.removeClass = (classTxt) => { self.classList.remove(classTxt); return self } // 更新方法 2022/03/12 變形為可鏈式寫法
    self.toggleClass = (classText) => self.classList.toggle(classText) // 更新方法 2021/09/20
    self.on = (eventType, fn) => { self[['on', eventType].join('')] = () => fn.call(fn, self) } // 更新方法 2021/09/20
    self.listener = (eventType, fn) => self.addEventListener(eventType, fn)
    self.removeListener = (eventType, fn) => self.removeEventListener(eventType, fn) // 更新方法 2022/01/04
    self.val = (valTemp) => { if (valTemp) { self.value = valTemp } else { return self.value } }
    self.attr = (props, val) => val ? self.setAttribute(props, val) : self.getAttribute(props)
    self.props = (props, val) => val ? self[props] = val : self[props] // 更新方法 2021/08/31
    self.sibling = (num) => self[num] // 更新方法 2021/08/31
    self.child = (num) => self.children[num] // 更新方法 2021/08/31
    self.childFirst = () => self.firstElementChild // 更新方法 2021/08/31
    self.childLast = () => self.lastElementChild // 更新方法 2021/08/31
    self.parent = () => self.parentNode // 更新方法 2021/08/31
    self.appendDom = (el) => self.append(el) // 更新方法 2021/09/12
    self.removeDom = () => self.remove() // 更新方法 2021/09/12
    self.removeChildDom = () => self.replaceChildren() // 更新方法 2021/10/25
    self.appendDomText = (el) => self.appendChild(el) // 更新方法 2021/09/12
    self.easyAppendDom = (orderBy, domStr) => self.insertAdjacentHTML(orderBy !== 'afterDom' ? 'afterbegin' : 'beforeend', domStr) // 更新方法 2021/11/25
    self.styles = (method, cssType, cssParameter) => {
      // 更新方法 2021/10/26
      // 更新方法 2022/03/12 變形為可鏈式寫法
      if (!$.includes(['set', 'remove'], method)) {
        $.console('error', "First parameter method must use string and keyword is 'set' or 'remove'.")
        return
      };
      method === 'set' ? self.style.setProperty(cssType, cssParameter) : self.style.removeProperty(cssType)
      return self
    }

    self.getDomStyles = (conditionProps) => { // 更新方法 2021/10/26
      const cssProperty = {}
      if (typeof conditionProps !== 'object') {
        $.console('error', 'Parameter must use array.')
        return
      } else {
        if (conditionProps.length === 0) {
          $.console('error', 'Parameter must use array,and css property must in array with string.')
          return
        } else {
          $.each(conditionProps, item => cssProperty[item] = getComputedStyle(self).getPropertyValue(item))
          return cssProperty
        }
      };
    }

    self.getDomPos = () => ({ // 更新方法 2022/03/23
      x: self.props('offsetLeft'),
      y: self.props('offsetTop') - window.scrollY,
      top: self.props('offsetTop') - window.scrollY,
      left: self.props('offsetLeft'),
      right: self.props('offsetLeft') + self.props('offsetWidth'),
      bottom: (self.props('offsetTop') + self.props('offsetHeight')) - window.scrollY,
      width: self.props('offsetWidth'),
      height: self.props('offsetHeight')
    })

    self.scrollToTop = (scrollSetting = { scrollTop: 0, duration: 0 }) => { // 更新方法 2021/10/26
      let animateScroll
      const [keyI, keyII] = Object.keys(scrollSetting)
      const startPos = self[keyI]
      const changePos = scrollSetting[keyI] - startPos
      const startTimeStamp = +new Date()

      const animationSettings = (animationSetting = { currentTime: 0, startVal: 0, changeVal: 0, animateDuration: 0 }) => {
        const { currentTime, startVal, changeVal, animateDuration } = animationSetting
        let currentTimeTemp = currentTime
        currentTimeTemp /= animateDuration / 2
        if (currentTimeTemp < 1) return (changeVal / 2) * currentTimeTemp * currentTimeTemp + startVal
        currentTimeTemp -= 1
        return (-changeVal / 2) * (currentTimeTemp * (currentTimeTemp - 2) - 1) + startVal
      };

      (animateScroll = () => {
        const currentTimeStamp = +new Date() - startTimeStamp
        self.scrollTop = Number(animationSettings({
          currentTime: currentTimeStamp,
          startVal: startPos,
          changeVal: changePos,
          animateDuration: scrollSetting[keyII]
        }))
        currentTimeStamp < scrollSetting[keyII] ? requestAnimationFrame(animateScroll) : self.scrollTop = scrollSetting[keyI]
      })()
    }

    self.useWillMount = willMountCallBack => { // 更新方法 2022/03/19
      if (typeof self === 'object') {
        if ($.typeOf(self, 'HTMLDocument')) {
          self.listener('readystatechange', ({ target }) => target.readyState === 'interactive' && willMountCallBack.call(willMountCallBack, target))
        } else {
          $.console('error', 'UseWillMount hook just use when selector document.')
        }
      } else {
        $.console('error', 'UseWillMount hook just use when selector document.')
      }
    }

    self.useMounted = useMountedCallBack => { // 更新方法 2022/03/19
      if (typeof self === 'object') {
        if ($.typeOf(self, 'HTMLDocument')) {
          self.listener('readystatechange', ({ target }) => target.readyState === 'complete' && useMountedCallBack.call(useMountedCallBack, target))
        } else {
          $.console('error', 'UseMounted Hook just use when selector document.')
        }
      } else {
        $.console('error', 'UseMounted Hook just use when selector document.')
      }
    }

    return self
  }

  // public function
  $.each = (item, callBack) => item.forEach((items, index) => callBack.call(callBack, items, index))
  $.maps = (item, callBack) => item.map((items, index) => callBack.call(callBack, items, index))
  $.filter = (item, callBack) => item.filter((items) => callBack.call(callBack, items))
  $.find = (item, callBack) => item.find(items => callBack.call(callBack, items)) // 更新方法 2022/03/12
  $.sort = (item, callBack) => item.sort((a, b) => callBack.call(callBack, a, b))
  $.indexOf = (item, x) => item.indexOf(x)
  $.includes = (item, x) => item.includes(x)
  $.findIndexOfObj = (item, callBack) => item.findIndex((items) => callBack.call(callBack, items))
  $.findObjProperty = (obj, propertyName) => obj.hasOwnProperty(propertyName) // 更新方法 2022/03/23
  $.sum = (item, callBack, initialVal) => initialVal ? item.reduce((a, b) => callBack.call(callBack, a, b), initialVal) : item.reduce((a, b) => callBack.call(callBack, a, b))
  $.mergeArray = (item, mergeItem, callBack) => callBack ? item.concat(mergeItem) : callBack.call(callBack, item.concat(mergeItem)) // 更新方法 2022/03/23
  $.typeOf = (item, classType) => classType ? item.constructor.name === classType : item.constructor.name // 更新方法 2021/10/26
  $.console = (type, ...item) => console[type](...item) // 更新方法 2021/10/26
  $.localData = (action, keyName, item) => action === 'get' ? ($.convert(localStorage.getItem(keyName), 'json') || []) : localStorage.setItem(keyName, $.convert(item, 'stringify')) // 更新方法 2021/11/29
  $.getNumberOfDecimal = (num, digits) => parseInt(num.toFixed(digits)) // 更新方法 2022/09/28
  $.createCustomEvent = (eventName, setEventResposeContext) => setEventResposeContext ? new CustomEvent(eventName, { detail: setEventResposeContext }) : new CustomEvent(eventName) // 更新方法 2022/07/13
  $.registerCustomEvent = (eventName, fn) => window.addEventListener(eventName, fn) // 更新方法 2022/07/13
  $.useCustomEvent = (eventObj) => window.dispatchEvent(eventObj) // 更新方法 2022/07/13
  $.removeCustomEvent = (eventName, fn) => window.removeEventListener(eventName, fn) // 更新方法 2022/07/13
  $.createPromise = (callBack) => new Promise((resovle, reject) => callBack.call(callBack, resovle, reject)) // 更新方法 2022/07/14
  $.createPromiseAll = (...paramaters) => Promise.all(paramaters) // 更新方法 2022/07/14
  $.createDomText = (text) => document.createTextNode(text) // 更新方法 2021/09/12
  $.objDetails = (obj, method) => !method || !$.includes(['keys', 'values', 'entries'], method) ? $.console('error', "please enter secode prameter 'keys' or 'values' or 'entries' in type string") : Object[method](obj) // 更新方法 2021/09/12
  $.isObjectTheSame = (objI, objII) => $.convert(objI, 'stringify') === $.convert(objII, 'stringify') // 更新方法 2023/05/31
  $.useBase64 = (method, str) => method === 'encode' ? btoa(str) : atob(str) // 更新方法 2021/11/24
  $.useSHA = async (shaType, str) => { // 更新方法 2021/11/24
    // Cryptoing only working in https of production or http of development environment
    const hashBuffer = await window.crypto.subtle.digest(shaType, new TextEncoder().encode(str))
    return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('')
  }
  $.useUnicode = (str, method) => { // 更新方法 2023/05/31
    if (method === 'encode') {
      return $.createArray({ type: 'fake', item: { random: str.length } }, (num) => {
        const code = str.charCodeAt(num)
        const code16 = code.toString(16)

        if (code < 0xf) {
          return `\\u000${code16.toUpperCase()}`
        } else if (code < 0xff) {
          return `\\u00${code16.toUpperCase()}`
        } else if (code < 0xfff) {
          return `\\u0${code16.toUpperCase()}`
        } else {
          return `\\u${code16.toUpperCase()}`
        }
      }).join('')
    } else {
      // eslint-disable-next-line no-eval
      return eval(`'${str}'`)
    }
  }
  $.createArray = ({ type, item }, repack) => { // 更新方法 2022/03/14
    // #region 參數設定
    /**
     * @param {string} type <= 型別字串 要創建種類，fake 為創建假陣列、new 為創建新陣列
     * @param {object}} item <= 型別物件，建假陣列時需使用為 { random:100 或其他數字 }
     * @param {function | undefined} repack <= 型別函式，為 call back function 為處理假陣列時使用的後續操作
     * @returns {Array}
     */
    // #endregion
    if (type === 'fake') {
      if ('random' in item && $.typeOf(item.random, 'Number') && repack !== undefined && $.typeOf(repack, 'Function')) {
        return Array.from({ length: item.random }, (_, items) => repack.call(repack, items))
      } else {
        $.console('error', 'item property must have random in object and radom type must be number,with call back function in secode parameters.')
      }
    } else if (type === 'new' && !('random' in item)) {
      return Array.from(item)
    }
  }

  $.convert = (val, type) => { // 更新方法 2021/10/22
    if (!val || !type || !$.includes(['string', 'number', 'float', 'boolean', 'json', 'stringify'], type)) {
      $.console('error', "Please enter first parameters value who want to convert and seconde paramters value is convert type 'string' or 'number' or 'float' or 'boolean' or 'json' or 'stringify'.")
      return
    } else if ($.typeOf(val, 'Object') && $.includes(['string', 'number', 'float', 'boolean'], type)) {
      $.console('error', `Convert value can't be object when use convert type ${type}.`)
      return
    }

    const returnItem = {
      string: String(val),
      number: parseInt(val),
      float: parseFloat(val),
      boolean: Boolean(val),
      json: type === 'json' && JSON.parse(val),
      stringify: type === 'stringify' && JSON.stringify(val)
    }

    return returnItem[type]
  }

  $.createDom = (tag, props) => { // 更新方法 2021/09/12
    const el = document.createElement(tag)
    const propsArr = Object.entries(props)
    $.each(propsArr, getProps => {
      const [propertyI, valueI] = getProps
      if ($.typeOf(valueI, 'Object')) { // 更新方法 2021/12/07，解析 data-* 建構屬性內容
        const [propertyII, obj] = getProps
        const [[key, valueII]] = Object.entries(obj)
        el[propertyII][key] = valueII
      } else {
        el[propertyI] = $.typeOf(valueI, 'String') ? valueI.trim() : valueI
      }
    })
    return el
  }

  $.currencyTranser = (formatNumber, currencyType, withCurrencyStyle) => { // 更新方法 2022/06/24
    if ($.typeOf(formatNumber, 'Number')) {
      const currencyOptionalObj = !withCurrencyStyle ? {} : { style: 'currency', currency: currencyType }
      return new Intl.NumberFormat(currencyType || 'TWN', currencyOptionalObj).format(formatNumber)
    } else {
      $.console('error', 'First argument formatNumber type must use number.')
    }
  }

  $.formatDateTime = (format = { formatDate: '', formatType: '' }) => { // 更新方法 2021/12/01
    // #region 參數設定
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
     * @returns {string}
     */
    // #endregion

    if (!($.findObjProperty(format, 'formatDate') || $.findObjProperty(format, 'formatType'))) {
      $.console('error', 'Please enter an object and use formatType property in the object.')
      return
    }

    if ($.findObjProperty(format, 'customWeekItem')) {
      if (!($.typeOf(format.customWeekItem) === 'Array')) {
        $.console('error', 'customWeekItem property Must use array.')
        return
      }

      if (format.customWeekItem.length <= 6 || format.customWeekItem.length > 7) {
        $.console('error', 'customWeekItem property must put seven days name of week in array.')
        return
      }

      format.customWeekItem = [format.customWeekItem[format.customWeekItem.length - 1], ...format.customWeekItem].removeLast()
    }

    const localCountryTime = ($.findObjProperty(format, 'localCountryTime') ? format.localCountryTime : 8) * 60 * 60 * 1000
    const dateStr = new Date(($.typeOf(format.formatDate, 'Number') ? format.formatDate : +new Date(format.formatDate)) + localCountryTime).toJSON()
    const dateSplit = dateStr.replace(/T/g, '-').replace(/:/g, '-').replace(/\./g, '-').replace(/Z/g, '').split('-')
    const [yearTemp, month, date, hour, minute, second, milliSecond] = dateSplit

    const year = format?.toROCYear ? (parseInt(yearTemp) - 1911).toString() : yearTemp // 更新方法 2023/03/08

    if ($.findObjProperty(format, 'toDateFullNumber')) return $.convert(dateSplit.join(''), 'number')

    if (format.formatType.match('tt')) {
      const currentAMorPM = $.convert(hour, 'number') > 11 ? 'PM' : 'AM'
      const transHour = ($.convert(hour, 'number') - 12) < 10 ? `0${$.convert(hour, 'number') - 12}` : $.convert($.convert(hour, 'number') - 12, 'string')
      return format.formatType.replace(/yyyy/g, year).replace(/MM/g, month).replace(/dd/g, date).replace(/HH/g, transHour).replace(/mm/g, minute).replace(/ss/g, second).replace(/ms/g, milliSecond).replace(/tt/g, currentAMorPM)
    } else if ($.findObjProperty(format, 'customWeekItem')) {
      return {
        fullDateTime: format.formatType.replace(/yyyy/g, year).replace(/MM/g, month).replace(/dd/g, date).replace(/HH/g, hour).replace(/mm/g, minute).replace(/ss/g, second).replace(/ms/g, milliSecond),
        getWeekName: format.customWeekItem[new Date(+new Date(format.formatDate)).getDay()]
      }
    } else {
      return format.formatType.replace(/yyyy/g, year).replace(/MM/g, month).replace(/dd/g, date).replace(/HH/g, hour).replace(/mm/g, minute).replace(/ss/g, second).replace(/ms/g, milliSecond)
    }
  }

  class FetchClass { // 更新 FetchClass 類封裝方法內容 2022/03/24
    static #baseUrl = ''
    static #baseHeaders = {}

    static {
      this.fetchSetting = async (settingParams, usePromise) => {
        // 更新類 ajax 方法 2021/09/11
        // 更新類 ajax 方法內容 2021/10/21
        // #region 參數設定
        /**
         * @param {string} method
         * @param {string} url
         * @param {object} headers 追加 hearder 物件 2021/10/21
         * @param {object} data
         * @param {object} routeParams 追加 routeParams 路由參數 2022/05/01
         * @param {object} queryParams 追加 queryParams 路由參數 2022/11/21
         * @param {number} timeout 追加 timeout 逾時請求處理參數 (單位毫秒 Ex:1000 = 1秒) 2023/03/08
         * @param {string} contentType
         * @param {string} returnType 追加 retunType 回傳轉譯 2022/08/26
         * @param {boolean} useFormData 追加 useFormData 是否使用 form 表屬性 2022/04/22
         * @param {boolean} useXMLHttpRequest 追加 useXMLHttpRequest 是否使用 XMLHttpRequest 2022/04/22
         * @param {Function} beforePost <= 回呼函式
         * @param {Function} successFn <= 回呼函式
         * @param {Function} excuteDone <= 回調函式 追加方法 2022/03/14
         * @param {Function} errorFn <= 回呼函式
         */
        // #endregion

        const settings = {}
        const { method, headers, contentType, useFormData, useXMLHttpRequest, returnType, data, routeParams, queryParams, timeout, beforePost, successFn, excuteDone, errorFn } = settingParams

        settings.method = method
        settingParams.url = FetchClass.#baseUrl ? `${FetchClass.#baseUrl}${settingParams.url}` : settingParams.url

        const returnTypeUse = returnType || 'json'

        if (method) {
          if (!$.includes(['get', 'post', 'patch', 'put', 'delete'], method.toLocaleLowerCase())) {
            $.console('error', 'Method value must use valid request method,like get、post ...')
            return
          }
        } else {
          $.console('error', 'Property name method is required in obejct parameters.')
          return
        }

        settingParams.useFormData = !!useFormData

        if (routeParams) {
          const [keyName] = $.objDetails(routeParams, 'keys')
          settingParams.url = `${settingParams.url}/${routeParams[keyName]}`
        }

        if (queryParams) {
          const querys = $.maps(Object.entries(queryParams), ([key, value]) => `${key}=${value}`).join('&')
          settingParams.url = `${settingParams.url}?${querys}`
        }

        if ($.objDetails(FetchClass.#baseHeaders, 'keys').length > 0 || (headers && $.objDetails(headers, 'keys').length > 0)) {
          settings.headers = $.objDetails(FetchClass.#baseHeaders, 'keys').length > 0 ? FetchClass.#baseHeaders : { 'Content-Type': 'application/json', ...headers }
        }

        if (data) {
          if (!useFormData) {
            settings.headers = $.objDetails(FetchClass.#baseHeaders, 'keys').length > 0 ? FetchClass.#baseHeaders : { 'Content-Type': contentType || 'application/json' }
            settings.body = $.convert(data, 'stringify')
          } else {
            settings.body = this.convertFormData(data)
          }
        }

        if (($.objDetails(FetchClass.#baseHeaders, 'keys').length > 0 || headers) && data) {
          settings.headers = $.objDetails(FetchClass.#baseHeaders, 'keys').length > 0 ? FetchClass.#baseHeaders : { ...headers }
          settings.body = useFormData ? this.convertFormData(data) : $.convert(data, 'stringify')
        };

        if (!usePromise && !useXMLHttpRequest) {
          if (beforePost) {
            beforePost.call(beforePost)
          };

          if (!successFn) {
            $.console('error', 'Function Name successFn is required in obejct parameters.')
            return
          };

          if (!errorFn) {
            $.console('error', 'Function Name errorFn is required in obejct parameters.')
            return
          };
        }

        if (useXMLHttpRequest) {
          if (successFn) {
            $.console('error', 'successFn not necessary parameters.')
            return
          };

          if (errorFn) {
            $.console('error', 'errorFn not necessary parameters.')
            return
          };

          if (usePromise) {
            return this.XMLHttpRequest({
              url: settingParams.url,
              method: settings.method,
              headers: settings.headers,
              data: settings.body
            })
          }

          return this.XMLHttpRequest({
            url: settingParams.url,
            method: settings.method,
            headers: settings.headers,
            data: settings.body
          })
        }

        const abController = new AbortController()

        if (timeout) { // 更新 Request timeout 逾時請求處理 2023/03/08
          setTimeout(() => abController.abort(), timeout)
        }

        const res = await fetch(settingParams.url, timeout ? { ...settings, signal: abController.signal } : settings)

        if (usePromise) {
          // 更新 Promise 導出 Request 成功與錯誤回傳內容 2022/05/01
          return new Promise(async (resolve, reject) => {
            if (res.status >= 200 && res.status < 400) {
              const result = await res[returnTypeUse]()
              resolve({
                bodyUsed: res.bodyUsed,
                headers: res.headers,
                ok: res.ok,
                redirected: res.redirected,
                status: res.status,
                statusText: res.statusText,
                type: res.type,
                url: res.url,
                data: result
              })
            } else {
              reject({
                bodyUsed: res.bodyUsed,
                headers: res.headers,
                ok: res.ok,
                redirected: res.redirected,
                status: res.status,
                statusText: res.statusText,
                type: res.type,
                url: res.url
              })
            };
          })
        } else {
          // 更新 Request 成功與錯誤回傳內容 2022/03/14
          try {
            if (res.status >= 200 && res.status < 400) {
              const result = await res[returnTypeUse]()

              successFn.call(successFn, {
                bodyUsed: res.bodyUsed,
                headers: res.headers,
                ok: res.ok,
                redirected: res.redirected,
                status: res.status,
                statusText: res.statusText,
                type: res.type,
                url: res.url,
                data: result
              })

              excuteDone && excuteDone.call(excuteDone)
            } else {
              throw new Error(JSON.stringify({
                bodyUsed: res.bodyUsed,
                headers: res.headers,
                ok: res.ok,
                redirected: res.redirected,
                status: res.status,
                statusText: res.statusText,
                type: res.type,
                url: res.url
              }))
            };
          } catch (err) {
            errorFn.call(errorFn, JSON.parse(err.message))
          };
        }
      }

      this.XMLHttpRequest = (setting) => { // 更新方法 XMLHttpRequest 2023/04/22
        const xhr = new XMLHttpRequest()

        xhr.open(setting.method, setting.url, true)

        if (setting?.headers) $.each($.objDetails(setting?.headers, 'entries'), ([key, value]) => xhr.setRequestHeader(key, value))

        return {
          xhrResponseResult: (callBack) => {
            xhr.onreadystatechange = () => {
              if (xhr.readyState === xhr.DONE && xhr.status >= 200 && xhr.status <= 399) {
                try {
                  const result = JSON.parse(xhr.responseText)
                  callBack.call(callBack, result)
                } catch (err) {
                  $.error('error', err)
                }
              }

              if (xhr.status >= 400) {
                $.error('error', xhr.statusText)
              }
            }
          },
          xhrUploadProgress: (callBack) => {
            xhr.upload.onprogress = (pr) => {
              if (pr.lengthComputable) {
                const uploadPercent = 100 * pr.loaded / pr.total
                callBack.call(callBack, uploadPercent)
              }
            }
          },
          xhrRequestStart: () => xhr.send(setting?.data || undefined)
        }
      }

      this.convertFormData = (formDataObj) => { // 更新方法 2023/04/22
        const formData = new FormData()

        $.each($.objDetails(formDataObj, 'entries'), ([key, value]) => formData.append(key === 'uploadFile' ? 'FileList' : key, value))

        return formData
      }

      this.createBase = ({ baseUrl, baseHeaders }) => { // 更新 fetch 物件組態設定方法 2022/03/24
        // #region
        /** 參數設定
         * @param {string} baseUrl 固定網址，設定後網址後半部變動部分只須設定 url
         * @param {object} baseHeaders 固定使用的 headers 內容，如 token、Content-Type 之類的
         */
        // #endregion
        FetchClass.#baseUrl = baseUrl
        FetchClass.#baseHeaders = baseHeaders
      }
    }
  }

  class FetchPromisClass extends FetchClass {
    static {
      // 更新 Promise 導出 get 方法 2022/05/01
      this.get = async (url, setting) => await this.fetchSetting({ method: 'get', url, ...setting }, true)

      // 更新 Promise 導出 post 方法 2022/05/01
      this.post = async (url, setting) => await this.fetchSetting({ method: 'post', url, ...setting }, true)

      // 更新 Promise 導出 patch 方法 2022/05/01
      this.patch = async (url, setting) => await this.fetchSetting({ method: 'patch', url, ...setting }, true)

      // 更新 Promise 導出 put 方法 2022/05/01
      this.put = async (url, setting) => await this.fetchSetting({ method: 'put', url, ...setting }, true)

      // 更新 Promise 導出 delete 方法 2022/05/01
      this.delete = async (url, setting) => await this.fetchSetting({ method: 'delete', url, ...setting }, true)
    }
  }

  const fetchGroup = (settingParams = { // 更新 FetchClass 類方法導出 2022/03/24
    method: '',
    url: '',
    headers: {},
    contentType: '',
    useFormData: false,
    useXMLHttpRequest: false,
    returnType: '',
    routeParams: {},
    queryParams: {},
    data: {},
    beforePost: undefined,
    successFn: undefined,
    excuteDone: undefined,
    errorFn: undefined
  }) => FetchClass.fetchSetting(settingParams, false)

  fetchGroup.get = async (url, settingParams = { headers: {}, returnType: '', useFormData: false, useXMLHttpRequest: false, routeParams: {}, queryParams: {} }) => await FetchPromisClass.get(url, settingParams)

  fetchGroup.post = async (url, settingParams = { headers: {}, data: {}, returnType: '', useFormData: false, useXMLHttpRequest: false, routeParams: {}, queryParams: {} }) => await FetchPromisClass.post(url, settingParams)

  fetchGroup.patch = async (url, settingParams = { headers: {}, data: {}, returnType: '', useFormData: false, useXMLHttpRequest: false, routeParams: {}, queryParams: {} }) => await FetchPromisClass.patch(url, settingParams)

  fetchGroup.put = async (url, settingParams = { headers: {}, data: {}, returnType: '', useFormData: false, useXMLHttpRequest: false, routeParams: {}, queryParams: {} }) => await FetchPromisClass.put(url, settingParams)

  fetchGroup.delete = async (url, settingParams = { headers: {}, data: {}, returnType: '', useFormData: false, useXMLHttpRequest: false, routeParams: {}, queryParams: {} }) => await FetchPromisClass.delete(url, settingParams)

  fetchGroup.createBase = (paramters = { // 更新 FetchClass 類方法導出，為 fetch 基礎組態設定 2022/03/24
    baseUrl: '',
    baseHeaders: {}
  }) => FetchClass.createBase(paramters)

  $.fetch = fetchGroup

  return $
})((el) => typeof el === 'object' ? el : document.querySelectorAll(el).length > 1 ? document.querySelectorAll(el) : document.querySelector(el)) // 更新元素指向 2021/08/31

// Origin class extends method
// Use in node js you can use to import prototype extends like import './Library.js'
/* eslint no-extend-native: ["off", { "exceptions": ["Object"] }] */
JSON.deepCopy = obj => $.convert($.convert(obj, 'stringify'), 'json') // 更新方法 2023/04/23

Math.toFixedNum = (setting = { value: '' | 0, toFloatPos: 0 }) => { // 更新方法 2023/02/07
  if (!setting || !$.findObjProperty(setting, 'value') || !$.findObjProperty(setting, 'toFloatPos')) {
    $.console('error', 'Please use object and with key value pair. ex: { value:100.1,toFloatPos:1 }')
    return
  }

  if (!$.typeOf(setting.toFloatPos, 'Number')) {
    $.console('error', 'toFloatPos key must use number.')
    return
  }

  return $.typeOf(setting.value, 'String') ? Number(parseFloat(setting.value).toFixed(setting.toFloatPos)) : Number(setting.value.toFixed(setting.toFloatPos))
}

String.prototype.appendText = function (txt) { return this.toString() + txt } // 更新方法 2022/06/24

String.prototype.appendDirection = function (direction, pos, txt) { return this[direction === 'left' ? 'padStart' : 'padEnd'](pos, txt) } // 更新方法 2023/02/07

String.prototype.range = function (startPos, endPos) { return this.toString().slice(startPos, endPos) } // 更新方法 2022/11/21

String.prototype.format = function (formatStr, ...values) { // 更新方法 2022/06/24
  if ($.typeOf(formatStr, 'String') && $.includes(formatStr, '{') && $.includes(formatStr, '}')) {
    if (formatStr.split('{').join('').split('}').length - 1 === values.length) {
      let formatStrTemp = formatStr

      const valuesTemp = $.maps(values, (value, index) => ({ replaceKey: `{${index}}`, replaceValue: value }))

      const returnReplaceDoneStr = $.maps(valuesTemp, ({ replaceKey, replaceValue }) => {
        formatStrTemp = formatStrTemp.replace(replaceKey, replaceValue)
        return formatStrTemp
      }).range(valuesTemp.length - 1, valuesTemp.length).join('')

      return returnReplaceDoneStr
    } else {
      $.console('error', "Can't not find else aguments.")
    }
  } else {
    $.console('error', 'First paramter must use type string,if use string must like this ex：abc {0} efg {1}.')
  }
}

String.toChartCode = (str) => $.createArray({ type: 'fake', item: { random: str.length } }, (index) => str.charCodeAt(index)) // 更新方法 2023/05/31

Date.prototype.calculateDay = function (format) {
  // 更新方法內容與回傳內容 2021/09/22
  // 更新方法 2021/12/01
  // 改變回傳物件 2022/03/23

  // #region 參數設定
  /**
   * @param {object} { day: number,method:string }
   * @returns {string}
   */
  // #endregion

  if (!format || !('day' in format && 'method' in format)) {
    $.console('error', 'Please enter an object and use day and method property in the object.')
    return
  } else if (typeof format.day !== 'number') {
    $.console('error', 'day property must use type number.')
    return
  } else if (!$.includes(['addDay', 'reduceDay'], format.method)) {
    $.console('error', "Please enter method type 'addDay' or 'reduceDay'.")
    return
  };

  return {
    addDay: new Date(+this + (format.day * 24 * 60 * 60 * 1000)),
    reduceDay: new Date(+this - (format.day * 24 * 60 * 60 * 1000))
  }[format.method]
}

Date.prototype.getLocalTimeZone = function () { return Math.abs(this.getTimezoneOffset() / 60) } // 更新方法 2023/02/07

Date.prototype.toOptionTimeZoneForISO = function (timeZone) {
  return timeZone ? new Date(+this + (timeZone * 60 * 60 * 1000)).toISOString() : $.console('error', 'Lost one parameter in function.') // 更新方法 2021/03/23
}

Array.prototype.append = function (item) { this.push(item) } // 更新方法 2021/03/23

Array.prototype.appendFirst = function (item) { this.unshift(item); return this } // 更新方法 2021/03/23

Array.prototype.range = function (startPos, endPos) { return this.slice(startPos, endPos) }

Array.prototype.remove = function (pos) { this.splice(pos, 1); return this } // 更新方法 2021/03/23

Array.prototype.removeFirst = function () { this.shift(); return this } // 更新方法 2021/03/23

Array.prototype.removeLast = function () { this.pop(); return this } // 更新方法 2021/03/23

Map.prototype.append = function (keyName, value) { this.set(keyName, value) } // 更新方法 2022/08/02

Map.prototype.getValue = function (keyName) { return this.get(keyName) } // 更新方法 2022/08/02

Map.prototype.deleteKeyValue = function (keyName) { return this.delete(keyName) } // 更新方法 2022/08/02

Map.prototype.removeAll = function () { this.clear() } // 更新方法 2022/08/02

Map.prototype.isKeyInMap = function (keyName) { return this.has(keyName) } // 更新方法 2022/08/02

Map.prototype.toObject = function () { return Object.fromEntries(this) } // 更新方法 2022/08/02

Set.prototype.append = function (value) { this.add(value) } // 更新方法 2022/08/02

Set.prototype.deleteValue = function (value) { return this.delete(value) } // 更新方法 2022/08/02

Set.prototype.isValueInSet = function (value) { return this.has(value) } // 更新方法 2022/08/02

Set.prototype.removeAll = function () { this.clear() } // 更新方法 2022/08/02

Set.prototype.toArray = function () { return [...this] } // 更新方法 2022/08/02

Object.prototype.toMap = function (obj) { return new Map(Object.entries(obj)) } // 更新方法 2022/08/02