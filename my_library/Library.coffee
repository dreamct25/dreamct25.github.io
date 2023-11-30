# CopyRight © 2021-08 - 2023-11 Alex Chen. Library Language - Coffeescript Ver 1.6.3
# Work Environment CoffeesSript only

$ = (target) -> 
    self = if typeof target is "string" 
              if (document.querySelectorAll target).length > 1 
                  document.querySelectorAll target 
              else
                  document.querySelector target
           else
                target

    self.texts = (txt) -> 
        if txt 
            self.textContent = txt
            return
        else self.textContent

    self.html = (dom) -> 
        if dom 
            self.innerHTML = dom 
            return
        else self.innerHTML

    self.addClass = (classText) -> # 更新方法 2022/03/12 變形為可鏈式寫法
        self.classList.add classText 
        self

    self.removeClass = (classTxt) -> # 更新方法 2022/03/12 變形為可鏈式寫法
        self.classList.remove classTxt 
        self

    self.toggleClass = (classText) -> # 更新方法 2021/09/20
        self.classList.toggle classText
        return

    self.on = (eventType, fn) -> # 更新方法 2021/09/20
        self[['on', eventType].join ''] = 
        () -> 
            fn.call fn, self
            return
        return

    self.listener = (eventType, fn) -> 
        self.addEventListener eventType, fn
        return

    self.removeListener = (eventType, fn) -> # 更新方法 2022/01/04
        self.removeEventListener eventType, fn
        return

    self.val = (valTemp) -> 
        if valTemp
            self.value = valTemp
            return 
        else self.value

    self.attr = (props, val) -> 
        if val 
            self.setAttribute props, val
            return 
        else self.getAttribute props

    self.props = (props, val) -> # 更新方法 2021/08/31
        if val 
            self[props] = val 
            return
        else self[props]

    self.sibling = (num) -> self[num] # 更新方法 2021/08/31

    self.child = (num) -> self.children[num] # 更新方法 2021/08/31

    self.childFirst = () -> self.firstElementChild # 更新方法 2021/08/31

    self.childLast = () -> self.lastElementChild # 更新方法 2021/08/31

    self.parent = () -> self.parentNode # 更新方法 2021/08/31

    self.appendDom = (el) -> # 更新方法 2021/09/12
        self.append el
        return

    self.removeDom = () -> # 更新方法 2021/09/12
        self.remove()
        return

    self.removeChildDom = () -> # 更新方法 2021/10/25
        self.replaceChildren()
        return

    self.appendDomText = (el) -> # 更新方法 2021/09/12
        self.appendChild el
        return

    self.easyAppendDom = (orderBy, domStr) -> # 更新方法 2021/11/25
        self.insertAdjacentHTML (if orderBy isnt 'afterDom' then 'afterbegin' else 'beforeend'), domStr
        return

    self.styles = (method, cssType, cssParameter) -> 
        # 更新方法 2021/10/26
        # 更新方法 2022/03/12 變形為可鏈式寫法
        if not $.includes ['set', 'remove'], method
            $.console 'error', "First parameter method must use string and keyword is 'set' or 'remove'."
        else
            if method is 'set'
                self.style.setProperty(cssType, cssParameter)
                return
            else
                self.style.removeProperty(cssType)
                return
        self

    self.getDomStyles = (conditionProps) -> # 更新方法 2021/10/26
        cssProperty = {}
        if typeof conditionProps isnt 'object' 
            $.console 'error', 'Parameter must use array.'
            return 
        else
            if conditionProps.length is 0
                $.console 'error', 'Parameter must use array,and css property must in array with string.'
                return
            else
                $.each conditionProps, (item) -> 
                    cssProperty[item] = getComputedStyle self.getPropertyValue item
                    return
                cssProperty

    self.getDomPos = () -> ({ # 更新方法 2022/03/23
        x: self.props 'offsetLeft'
        y: self.props 'offsetTop' - window.scrollY
        top: self.props 'offsetTop' - window.scrollY
        left: self.props 'offsetLeft'
        right: self.props 'offsetLeft' + self.props 'offsetWidth'
        bottom: (self.props 'offsetTop' + self.props 'offsetHeight') - window.scrollY
        width: self.props 'offsetWidth'
        height: self.props 'offsetHeight'
    })

    self.scrollToTop = (scrollSetting = { # 更新方法 2021/10/26
        scrollTop: 0
        duration: 0 
    }) -> 
        [keyI, keyII] = Object.keys(scrollSetting)
        startPos = self[keyI]
        changePos = scrollSetting[keyI] - startPos
        startTimeStamp = +new Date()

        animationSettings = (animationSetting = { 
            currentTime: 0
            startVal: 0
            changeVal: 0
            animateDuration: 0 
        }) -> 
            { currentTime, startVal, changeVal, animateDuration } = animationSetting
            currentTimeTemp = currentTime
            currentTimeTemp /= animateDuration / 2
            currentTimeTemp < 1 and (changeVal / 2) * currentTimeTemp * currentTimeTemp + startVal
            currentTimeTemp -= 1
            (-changeVal / 2) * (currentTimeTemp * (currentTimeTemp - 2) - 1) + startVal

        (animateScroll = () -> 
            currentTimeStamp = +new Date() - startTimeStamp
            self.scrollTop = Number(animationSettings({
                currentTime: currentTimeStamp
                startVal: startPos
                changeVal: changePos
                animateDuration: scrollSetting[keyII]
            }))
            if currentTimeStamp < scrollSetting[keyII]
                requestAnimationFrame(animateScroll)
                return
            else 
                self.scrollTop = scrollSetting[keyI]
                return
        )()

    self.useWillMount = (willMountCallBack) -> # 更新方法 2022/03/19
        if typeof self is 'object'
            if $.typeOf self, 'HTMLDocument'
                self.listener 'readystatechange', ({ target }) -> 
                    target.readyState is 'interactive' and willMountCallBack.call willMountCallBack, target
                    return
                return
            else
                $.console 'error', 'UseWillMount hook just use when selector document.'
                return
        else
            $.console 'error', 'UseWillMount hook just use when selector document.'
            return
    
    self.useMounted = (useMountedCallBack) -> # 更新方法 2022/03/19
        if typeof self is 'object'
            if $.typeOf self, 'HTMLDocument'
                self.listener 'readystatechange', ({ target }) -> 
                    target.readyState is 'complete' and useMountedCallBack.call useMountedCallBack, target
                    return
                return
            else
                $.console 'error', 'UseMounted Hook just use when selector document.'
                return
        else
            $.console 'error', 'UseMounted Hook just use when selector document.'
            return
    
    self

# public function
$.each = (item, callBack) -> 
    item.forEach (items, index) -> 
        callBack.call callBack, items, index
        return
    return

$.maps = (item, callBack) -> 
    item.map (items, index) -> 
        callBack.call callBack, items, index

$.filter = (item, callBack) -> 
    item.filter (items) -> 
        callBack.call callBack, items

$.find = (item, callBack) -> # 更新方法 2022/03/12
    item.find (items) -> 
        callBack.call callBack, items

$.sort = (item, callBack) -> 
    item.sort (a, b) -> 
        callBack.call callBack, a, b

$.indexOf = (item, x) -> item.indexOf x

$.includes = (item, x) -> item.includes x

$.findIndexOfObj = (item, callBack) -> 
    item.findIndex (items) -> 
        callBack.call callBack, items

$.findObjProperty = (obj, propertyName) -> # 更新方法 2022/03/23
    obj.hasOwnProperty propertyName

$.sum = (item, callBack, initialVal) -> 
    if initialVal
        item.reduce (a, b) -> 
            (callBack.call callBack, a, b)
        ,initialVal
    else
        item.reduce (a, b) -> 
            callBack.call callBack, a, b

$.mergeArray = (item, mergeItem, callBack) -> # 更新方法 2022/03/23
    if callBack
        item.concat mergeItem
    else
        callBack.call callBack, item.concat(mergeItem)

$.typeOf = (item, classType) -> # 更新方法 2021/10/26
    if classType
        item.constructor.name is classType
    else
        item.constructor.name

$.console = (type, item...) -> # 更新方法 2021/10/26
    console[type] item...
    return

$.localData = (action, keyName, item) -> # 更新方法 2021/11/29
    if action is 'get'
        ($.convert (localStorage.getItem keyName), 'json') || []
    else 
        localStorage.setItem keyName, $.convert item, 'stringify' 
        return

$.getNumberOfDecimal = (num,digits) -> # 更新方法 2022/09/28
    parseInt num.toFixed digits 

$.createCustomEvent = (eventName, setEventResposeContext) -> # 更新方法 2022/07/13
    if setEventResposeContext
        new CustomEvent eventName, { detail: setEventResposeContext }
    else
        new CustomEvent(eventName)

$.registerCustomEvent = (eventName, fn) -> # 更新方法 2022/07/13
    window.addEventListener(eventName, fn)
    return

$.useCustomEvent = (eventObj) -> # 更新方法 2022/07/13
    window.dispatchEvent(eventObj)
    return

$.removeCustomEvent = (eventName, fn) -> # 更新方法 2022/07/13
    window.removeEventListener(eventName, fn)
    return

$.createPromise = (callBack) -> # 更新方法 2022/07/14
    new Promise (resovle, reject) -> 
        callBack.call callBack, resovle, reject
        return

$.createPromiseAll = (paramaters) -> # 更新方法 2022/07/14
    Promise.all paramaters

$.createDomText = (text) -> # 更新方法 2021/09/12
    document.createTextNode text

$.objDetails = (obj, method) -> # 更新方法 2021/09/12
    if method and $.includes ['keys', 'values', 'entries'], method 
        return Object[method](obj)
    $.console 'error', "please enter secode prameter 'keys' or 'values' or 'entries' in type string"
    return
        

$.isObjectTheSame = (objI, objII) -> $.convert(objI, 'stringify') is $.convert(objII, 'stringify') # 更新方法 2023/05/31

$.useBase64 = (method,str) -> if method is 'encode' then btoa str else atob str # 更新方法 2021/11/24

$.useSHA = (shaType,str) -> # 更新方法 2021/11/24
    # Cryptoing only working in https of production or http of development environment
    hashBuffer = await window.crypto.subtle.digest shaType, (new TextEncoder().encode str);
    return Array.from(new Uint8Array hashBuffer).map((b) -> (b.toString 16).padStart 2, '0').join '';

$.useUnicode = (str, method) -> # 更新方法 2023/05/31
    if method is 'encode'
        $.createArray({ type: 'fake', item: { random: str.length } }, (num) ->
            code = str.charCodeAt(num)
            code16 = code.toString(16)

            if code < 0xf
                "\\u000#{code16.toUpperCase()}"
            else if code < 0xff
                "\\u00#{code16.toUpperCase()}"
            else if code < 0xfff
                "\\u0#{code16.toUpperCase()}"
            else
                "\\u#{code16.toUpperCase()}"
        ).join ''
    else
        str.replace /\\u(\d{4})/g, (_, code) -> String.fromCharCode(parseInt(code, 16))

$.jwtDeocde = (token) -> # 更新方法 2023/11/30
  if token
    base64Url = token.split('.')[1]
    base64 = base64Url.replace /-/g, '+'.replace /_/g, '/'
    result = decodeURIComponent(
      $.maps(
        $.useBase64('decode', base64).split(''),
        (char) -> "%#{"00#{char.charCodeAt(0).toString 16}".slice -2}"
      ).join ''
    )

    return JSON.parse result

  $.console 'error', 'please typing token at first paramters .'

  undefined


$.createArray = ({ type, item }, repack) -> # 更新方法 2022/03/14
    if type is 'fake'
        if 'random' of item and $.typeOf item.random, 'Number' and repack and $.typeOf repack, 'Function'
            Array.from { length: item.random }, (_, items) -> repack.call repack, items
        else
            $.console 'error', 'item property must have random in object and radom type must be number,with call back function in secode parameters.'
            return
    else if type is 'new' and !('random' of item)
        Array.from item

$.convert = (val, type) ->  # 更新方法 2021/10/22
    if !val or !type or !$.includes ['string', 'number', 'float', 'boolean', 'json', 'stringify'], type
        $.console 'error', "Please enter first parameters value who want to convert and seconde paramters value is convert type 'string' or 'number' or 'float' or 'boolean' or 'json' or 'stringify'."
    else if typeof val is 'object' and $.includes ['string', 'number', 'float', 'boolean'], type
        $.console 'error', "Convert value can't be object when use convert type #{type}."

    returnItem = {
        string: String val
        number: parseInt val
        float: parseFloat val
        boolean: Boolean val
        json: type is 'json' and JSON.parse val
        stringify: type is 'stringify' and JSON.stringify val
    }

    returnItem[type]

$.createDom = (tag, props) -> # 更新方法 2021/09/12
    newEl = document.createElement tag
    propsArr = Object.entries props
    $.each propsArr, (getProps) ->
        [propertyI, valueI] = getProps
        if $.typeOf valueI, 'Object' # 更新方法 2021/12/07，解析 data-* 建構屬性內容
            [propertyII, obj] = getProps
            [[key, valueII]] = Object.entries obj
            newEl[propertyII][key] = valueII
            return
        else
            newEl[propertyI] = if $.typeOf valueI, 'String' then valueI.trim() else valueI
            return
    newEl

$.currencyTranser = (formatNumber,currencyType,withCurrencyStyle) -> # 更新方法 2022/06/24
    if $.typeOf formatNumber,'Number'
        currencyOptionalObj = if not withCurrencyStyle then {} else { style: 'currency', currency: currencyType }
        new Intl.NumberFormat((currencyType or 'TWN'), currencyOptionalObj).format formatNumber
    else
        $.console 'error', 'First argument formatNumber type must use number.'
        return

$.formatDateTime = (format = { formatDate: '', formatType: '' }) -> # 更新方法 2021/12/01
    if !($.findObjProperty format,'formatDate') or $.findObjProperty format,'formatType'
        $.console 'error', 'Please enter an object and use formatType property in the object.'
        return

    if $.findObjProperty format, 'customWeekItem'
        if !$.typeOf format.customWeekItem is 'Array'
            $.console 'error', 'customWeekItem property Must use array.'
            return

        if format.customWeekItem.length <= 6 or format.customWeekItem.length > 7
            $.console 'error', 'customWeekItem property must put seven days name of week in array.'
            return

        format.customWeekItem = [format.customWeekItem[format.customWeekItem.length - 1], format.customWeekItem...]
        
        format.customWeekItem.pop()

    localCountryTime = (if $.findObjProperty format,'localCountryTime' then format.localCountryTime else 8) * 60 * 60 * 1000
    dateStr = new Date ((if $.typeOf format.formatDate, 'Number' then format.formatDate else +new Date format.formatDate) + localCountryTime).toJSON()
    dateSplit = dateStr.replace(/T/g, '-').replace(/:/g, '-').split('.')[0].split '-'
    [yearTemp, month, date, hour, minute, second] = dateSplit

    year = if format.toROCYear then (parseInt(yearTemp) - 1911).toString() else yearTemp # 更新方法 2023/03/08

    if $.findObjProperty format,'toDateFullNumber'
        return $.convert (dateSplit.join ''),'number'

    if format.formatType.match 'tt'
        currentAMorPM = if $.convert hour, 'number' > 11 then 'PM' else 'AM'
        transHour = if (($.convert hour, 'number') - 12) < 10 then "0#{($.convert hour, 'number') - 12}" else $.convert (($.convert hour, 'number') - 12), 'string'
        return format.formatType.replace(/yyyy/g, year).replace(/MM/g, month).replace(/dd/g, date).replace(/HH/g, transHour).replace(/mm/g, minute).replace(/ss/g, second).replace(/tt/g, currentAMorPM)
    
    if $.findObjProperty format, 'customWeekItem'
        return {
            fullDateTime: format.formatType.replace(/yyyy/g, year).replace(/MM/g, month).replace(/dd/g, date).replace(/HH/g, hour).replace(/mm/g, minute).replace(/ss/g, second)
            getWeekName: format.customWeekItem[new Date(+new Date format.formatDate).getDay()]
        }
        
    return format.formatType.replace(/yyyy/g, year).replace(/MM/g, month).replace(/dd/g, date).replace(/HH/g, hour).replace(/mm/g, minute).replace(/ss/g, second)

$.rebuildObject = (obj, callback) -> # 更新方法內容 2023/09/12
    Object.fromEntries Object.entries(obj).map ([keyName, value]) -> 
        callback.call callback, keyName, value

class FetchClass # 更新 FetchClass 類封裝方法內容 2022/03/24
    @baseUrl = ''
    @baseHeaders = {}

    @fetchSetting:(settingParams, usePromise) -> 
        settings = {}
        { method, headers, contentType, useFormData, useXMLHttpRequest, returnType, data, routeParams, queryParams, timeout, beforePost, successFn, excuteDone, errorFn } = settingParams
        settings.method = method
        settingParams.url = if @baseUrl then "#{@baseUrl}#{settingParams.url}" else settingParams.url

        returnTypeUse = returnType || 'json'

        if method
            if !$.includes ['get', 'post', 'patch', 'put', 'delete'], method.toLocaleLowerCase()
                $.console 'error', 'Method value must use valid request method,like get、post ...'
                return
        else
            $.console('error', 'Property name method is required in obejct parameters.')
            return

        settingParams.useFormData = !!useFormData

        if routeParams
            [keyName] = $.objDetails routeParams, 'keys'
            settingParams.url = "#{settingParams.url}/#{routeParams[keyName]}"

        if queryParams # 更新方法 2022/11/21
            querys = ($.maps Object.entries(queryParams),([key,value]) => "#{key}=#{value}").join '&'
            settingParams.url = "#{settingParams.url}?#{querys}"

        if ($.objDetails @baseHeaders, 'keys').length > 0 or (headers and ($.objDetails headers, 'keys').length > 0)
            settings.headers = if ($.objDetails @baseHeaders, 'keys').length > 0 then @baseHeaders else { 'Content-Type': 'application/json', headers... }

        if !headers and data
            settings.headers = { 'Content-Type': contentType || 'application/json' }

        if data
            if !useFormData
                settings.headers = if ($.objDetails @baseHeaders, 'keys').length > 0 then @baseHeaders else { 'Content-Type': contentType or 'application/json' }
                settings.body = $.convert data, 'stringify'
            else
                settings.body = @convertFormData data

        if (($.objDetails @baseHeaders, 'keys').length > 0 or headers) and data
            settings.headers = if ($.objDetails @baseHeaders, 'keys').length > 0 then @baseHeaders else { headers... }
            settings.body =  if useFormData then @convertFormData data else $.convert data, 'stringify'

        if !usePromise and !useXMLHttpRequest
            if beforePost
                beforePost.call beforePost

            if !successFn
                $.console 'error', 'Function Name successFn is required in obejct parameters.'
                return

            if !errorFn
                $.console 'error', 'Function Name errorFn is required in obejct parameters.'
                return

        if useXMLHttpRequest
            if successFn
                $.console 'error', 'Function Name successFn is required in obejct parameters.'
                return

            if errorFn
                $.console 'error', 'Function Name errorFn is required in obejct parameters.'
                return

            return @XMLHttpRequest({
                url: settingParams.url,
                method: settings.method,
                headers: settings.headers,
                data: settings.body
            }) if usePromise

            return @XMLHttpRequest({
                url: settingParams.url,
                method: settings.method,
                headers: settings.headers,
                data: settings.body
            })
        
        abController = new AbortController()

        if timeout # 更新 Request timeout 逾時請求處理 2023/03/08
            setTimeout () -> 
                abController.abort()
                return
            ,timeout

        res = await fetch(settingParams.url, if timeout then { ...settings, signal:abController.signal } else settings)

        if usePromise 
        # 更新 Promise 導出 Request 成功與錯誤回傳內容 2022/05/01
            new Promise (resolve, reject) -> 
                if res.status >= 200 and res.status < 400
                    result = await res[returnTypeUse]()
                    resolve({
                        bodyUsed: res.bodyUsed
                        headers: res.headers
                        ok: res.ok
                        redirected: res.redirected
                        status: res.status
                        statusText: res.statusText
                        type: res.type
                        url: res.url
                        data: result
                    })
                    return
                else
                    reject({
                        bodyUsed: res.bodyUsed
                        headers: res.headers
                        ok: res.ok
                        redirected: res.redirected
                        status: res.status
                        statusText: res.statusText
                        type: res.type
                        url: res.url
                    })
                    return
        else
            # 更新 Request 成功與錯誤回傳內容 2022/03/14
            try
                if res.status >= 200 && res.status < 400
                    result = await res[returnTypeUse]()

                    successFn.call successFn, {
                        bodyUsed: res.bodyUsed
                        headers: res.headers
                        ok: res.ok
                        redirected: res.redirected
                        status: res.status
                        statusText: res.statusText
                        type: res.type
                        url: res.url
                        data: result
                    }

                    excuteDone and excuteDone.call excuteDone
                    return
                else
                    throw new Error JSON.stringify({
                        bodyUsed: res.bodyUsed
                        headers: res.headers
                        ok: res.ok
                        redirected: res.redirected
                        status: res.status
                        statusText: res.statusText
                        type: res.type
                        url: res.url
                    })
            catch err
                errorFn.call errorFn, JSON.parse err.message
                return

    @XMLHttpRequest:(setting) -> # 更新方法 XMLHttpRequest 2023/04/22
        xhr = new XMLHttpRequest()

        xhr.open setting.method,setting.url,true

        if setting?.headers
            $.each($.objDetails(setting?.headers,'entries'),([key,value]) -> 
                xhr.setRequestHeader key,value
                return
            )

        {
            xhrResponseResult:(callBack) -> 
                xhr.onreadystatechange = () -> 
                    if xhr.readyState is xhr.DONE and xhr.status >= 200 && xhr.status <= 399
                        try
                            result = JSON.parse xhr.responseText
                            callBack.call callBack,result
                        catch err
                            $.error 'error',err
                    
                    if xhr.status >= 400
                        $.error 'error',xhr.statusText
                        return
                return
            ,
            xhrUploadProgress:(callBack) -> 
                xhr.upload.onprogress = (event) -> 
                    if event.lengthComputable
                        uploadPercent = 100 * event.loaded / event.total
                        callBack.call(callBack,uploadPercent)
                        return
                return
            ,
            xhrRequestStart:() -> 
                xhr.send(setting?.data || undefined)
                return
        }

    @convertFormData = (formDataObj) -> # 更新方法 2023/04/22
        formData = new FormData()

        $.each($.objDetails(formDataObj, 'entries'),([key, value]) -> 
            formData.append (if key is 'uploadFile' then 'FileList' else key), value
            return
        )
    
        formData

    @createBase:({ baseUrl, baseHeaders }) -> # 更新 fetch 物件組態設定方法 2022/03/24
        @baseUrl = baseUrl
        @baseHeaders = baseHeaders
        return

class FetchPromisClass extends FetchClass
    # 更新 Promise 導出 get 方法 2022/05/01
    @get:(url, setting) -> await this.fetchSetting { method: 'get', url, setting... }, true

    # 更新 Promise 導出 post 方法 2022/05/01
    @post:(url, setting) -> await this.fetchSetting { method: 'post', url, setting... }, true

    # 更新 Promise 導出 patch 方法 2022/05/01
    @patch:(url, setting) -> await this.fetchSetting({ method: 'patch', url, setting... }, true)

    # 更新 Promise 導出 put 方法 2022/05/01
    @put:(url, setting) -> await this.fetchSetting({ method: 'put', url, setting... }, true)

    # 更新 Promise 導出 delete 方法 2022/05/01
    @delete:(url, setting) -> await this.fetchSetting({ method: 'delete', url, setting... }, true)

fetchGroup = (settingParams = { # 更新 FetchClass 類方法導出 2022/03/24
    method: ''
    url: ''
    headers: {}
    contentType: '',
    useFormData: false,
    useXMLHttpRequest: false,
    data: {}
    returnType: '',
    routeParams: {},
    queryParams: {},
    beforePost: undefined
    successFn: undefined
    excuteDone: undefined
    errorFn: undefined
}) -> FetchClass.fetchSetting settingParams, false

fetchGroup.get = (url, settingParams = { headers: {}, returnType: '', useFormData: false, useXMLHttpRequest: false,routeParams: {},queryParams: {} }) -> await FetchPromisClass.get url, settingParams

fetchGroup.post = (url, settingParams = { headers: {}, data: {}, returnType: '', useFormData: false, useXMLHttpRequest: false, routeParams: {},queryParams: {} }) -> await FetchPromisClass.post url, settingParams

fetchGroup.patch = (url, settingParams = { headers: {}, data: {}, returnType: '', useFormData: false, useXMLHttpRequest: false, routeParams: {},queryParams: {} }) -> await FetchPromisClass.patch url, settingParams

fetchGroup.put = (url, settingParams = { headers: {}, data: {}, returnType: '', useFormData: false, useXMLHttpRequest: false, routeParams: {},queryParams: {} }) -> await FetchPromisClass.put url, settingParams

fetchGroup.delete = (url, settingParams = { headers: {}, data: {}, returnType: '', useFormData: false, useXMLHttpRequest: false, routeParams: {},queryParams: {} }) -> await FetchPromisClass.delete url, settingParams

fetchGroup.createBase = (paramters = { # 更新 FetchClass 類方法導出，為 fetch 基礎組態設定 2022/03/24
    baseUrl: ''
    baseHeaders: {}
}) -> FetchClass.createBase paramters

$.fetch = fetchGroup

JSON.deepCopy = (obj, weakMap = new WeakMap()) -> 
    # 更新方法 2023/04/23
    # 提高深拷貝多樣性 2023/10/14
    if obj is null or \
       typeof obj != 'object' or \
       obejct instanceof RegExp or \
       obj instanceof Date or \
       obj instanceof Function
       obj

    if weakMap.has obj 
       weakMap.get obj
    
    if Array.isArray obj
       arrCopy = []
       weakMap.set obj, arrCopy

       arrCopy = $.createArray { type: 'fake', item: { random: obj.length } }, (index) -> 
                    JSON.deepCopy obj[index], weakMap
       arrCopy
    
    objCopy = {}
    weakMap.set obj, objCopy

    $.objDetails(obj,'keys').forEach((key) -> 
        if $.findObjProperty obj, key
            objCopy[key] = JSON.deepCopy obj[key], weakMap
            return
    )

    objCopy

Math.toFixedNum = (setting = { value,toFloatPos }) -> # 更新方法 2023/02/07
  if !setting or !$.findObjProperty setting,'value' || !$.findObjProperty setting,'toFloatPos'
    $.console 'error','Please use object and with key value pair. ex: { value:100.1,toFloatPos:1 }'
    return
  if !$.typeOf setting.toFloatPos,'Number'
    $.console 'error','toFloatPos key must use number.'
    return
  return if $.typeOf setting.value,'String' then Number parseFloat(setting.value).toFixed setting.toFloatPos else Number setting.value.toFixed setting.toFloatPos

String.prototype.appendText = (txt) -> this.toString() + txt # 更新方法 2022/06/24

String.prototype.appendDirection = (direction,pos,txt) -> this[if direction is 'left' then 'padStart' else 'padEnd'] pos,txt # 更新方法 2023/02/07

String.prototype.range = (startPos,endPos) -> this.toString().slice(startPos,endPos) # 更新方法 2022/11/21

String.prototype.format = (formatStr, values...) -> # 更新方法 2022/06/24
  if $.typeOf formatStr, 'String' and $.includes formatStr, '{' and $.includes formatStr, '}'
    if formatStr.split('{').join('').split('}').length - 1 is values.length
      formatStrTemp = formatStr

      valuesTemp = $.maps values, (value, index) -> ({ replaceKey: "{#{index}}", replaceValue: value })

      returnReplaceDoneStr = ($.maps valuesTemp, ({ replaceKey, replaceValue }) -> 
        formatStrTemp = formatStrTemp.replace(replaceKey, replaceValue)
        formatStrTemp
      ).range(valuesTemp.length - 1, valuesTemp.length).join ''

      returnReplaceDoneStr
    else
      $.console 'error', "Can't not find else aguments."
  else
    $.console 'error', 'First paramter must use type string,if use string must like this ex：abc {0} efg {1}.'

String.toChartCode = (str) -> 
    $.createArray({ type: 'fake', item: { random: str.length } }, (index) -> 
        str.charCodeAt index
    ) # 更新方法 2023/05/31

Date.prototype.calculateFullDateTime = (year, month, day, hour, minute, second) ->
  # 更新方法內容與回傳內容 2021/09/22
  # 更新方法 2021/12/01
  # 改變回傳物件 2022/03/23
  # 改寫完整調適日期方式 2023/08/13

  currentFullDateTime = this
  calFullDateTime = new Date(currentFullDateTime)

  if year then calFullDateTime.setFullYear currentFullDateTime.getFullYear() + year
  if month then calFullDateTime.setMonth currentFullDateTime.getMonth() + month
  if day then calFullDateTime.setDate currentFullDateTime.getDate() + day
  if hour then calFullDateTime.setHours currentFullDateTime.getHours() + hour
  if minute then calFullDateTime.setMinutes currentFullDateTime.getMinutes() + minute
  if second then calFullDateTime.setSeconds currentFullDateTime.getSeconds() + second

  calFullDateTime

Date.formatCountingTime = ({ formatTimesTemp, formatType }) ->
  # 更新方法 2023/08/13

  addZero = (num) -> if num < 10 then "0#{num}" else "#{num}"

  timeRange = Math.abs(formatTimesTemp)
  day = timeRange / (24 * 60 * 60 * 1000)
  dayFix = Math.floor(day)
  hour = (day - dayFix) * 24
  hourFix = Math.floor(hour)
  minute = (hour - hourFix) * 60
  minuteFix = Math.floor((hour - hourFix) * 60)
  secondesFix = Math.floor((minute - minuteFix) * 60)

  formatType.replace(/dd/g, addZero(dayFix)).replace(/HH/g, addZero(hourFix)).replace(/mm/g, addZero(minuteFix)).replace(/ss/g, addZero(secondesFix))

  
Date.prototype.getLocalTimeZone = () -> Math.abs this.getTimezoneOffset() / 60 # 更新方法 2023/02/07

Date.prototype.toOptionTimeZoneForISO = (timeZone) ->
  new Date +this + (timeZone * 60 * 60 * 1000).toISOString() # 更新方法 2021/03/23

Array.prototype.append = (item) -> this.push(item) # 更新方法 2021/03/23

Array.prototype.appendFirst = (item) -> this.unshift(item); this # 更新方法 2021/03/23

Array.prototype.range = (startPos, endPos) -> this.slice(startPos, endPos)

Array.prototype.remove = (pos) -> this.splice(pos, 1); this # 更新方法 2021/03/23

Array.prototype.removeFirst = () -> this.shift(); this # 更新方法 2021/03/23

Array.prototype.removeLast = () -> this.pop(); this # 更新方法 2021/03/23

Map.prototype.append = (keyName, value) -> this.set(keyName, value) # 更新方法 2022/08/02

Map.prototype.getValue = (keyName) -> this.get(keyName) # 更新方法 2022/08/02

Map.prototype.deleteKeyValue = (keyName) -> this.delete(keyName) # 更新方法 2022/08/02

Map.prototype.removeAll = () -> this.clear() # 更新方法 2022/08/02

Map.prototype.isKeyInMap = (keyName) -> this.has(keyName) # 更新方法 2022/08/02

Map.prototype.toObject = () -> Object.fromEntries(this) # 更新方法 2022/08/02

Set.prototype.append = (value) -> this.add(value) # 更新方法 2022/08/02

Set.prototype.deleteValue = (value) -> this.delete(value) # 更新方法 2022/08/02

Set.prototype.isValueInSet = (value) -> this.has(value) # 更新方法 2022/08/02

Set.prototype.removeAll = () -> this.clear() # 更新方法 2022/08/02

Set.prototype.toArray = () -> [this...] # 更新方法 2022/08/02

Object.prototype.toMap = (obj = { a:'',b:'' }) -> new Map Object.entries obj # 更新方法 2022/08/02