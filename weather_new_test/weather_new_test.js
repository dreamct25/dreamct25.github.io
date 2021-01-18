const querySelectorFactory = currentClass => document.querySelector(currentClass)
const querySelectorAllFactory = currentClass => document.querySelectorAll(currentClass)
let jsonData = [];
let filterWeatherState = []
let renderCount = 0

fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-6BEED9AA-24B5-4569-BB51-FC0BCFA7595B').then(res => {
    loadingAnimate(true)
    return res.json()
}).then(res => {
    setTimeout(() => {
        if (res.success == "true") {
            let jsonDataTemp = []
            res.records.locations[0].location.forEach(key => jsonDataTemp.push(key))
            loadingAnimate(false)
            setTimeout(() => cityType(jsonDataTemp), 2000)
        }
    }, 3000)
}).catch(err => console.log(err))

function cityType(arry) {
    let arrySort = []
    querySelectorFactory(".current-select").textContent = "-- 請選擇欲查詢縣市氣象 --"
    arrySort = arry.sort((a, b) => b.lon - a.lon)
    arrySort.forEach((key, index) => {
        jsonData.push(key)
        querySelectorFactory(".select-city").innerHTML += `<span class="city-name" data-num="${index}" onclick="selectCityPart(this)">${key.locationName}</span>`
    });
    jsonData.forEach(key => key.locationName == '臺北市' ? console.log(key) : null)
}

function scrolls() {
    let timer = null;
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(function animation() {
        let toTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (toTop > 0) {
            scrollTo(0, toTop - 8);
            timer = requestAnimationFrame(animation);
        } else {
            cancelAnimationFrame(timer);
        }
    });
}

function changeMoring(currentOption) {
    querySelectorFactory(".background-text").textContent = 'Moring'
    querySelectorFactory(".header").classList.add("header-moring")
    querySelectorFactory(".header").classList.remove("header-night")
    querySelectorFactory('html').classList.remove('night')
    querySelectorFactory('html').classList.add('moring')
    currentOption.classList.remove('background-controller-toggle')
    querySelectorFactory('.circle').classList.remove('circle-toggle')
}

function changeNight(currentOption) {
    querySelectorFactory(".background-text").textContent = 'Night'
    querySelectorFactory(".header").classList.add("header-night")
    querySelectorFactory(".header").classList.remove("header-moring")
    querySelectorFactory('html').classList.add('night')
    querySelectorFactory('html').classList.remove('moring')
    currentOption.classList.add('background-controller-toggle')
    querySelectorFactory('.circle').classList.add('circle-toggle')
}

// 設定背景圖隨畫面時間不同更換背景圖
function backgroundChange() {
    const date = new Date()
    let backgroundToggleOptions = {
        byHand: this,
        notHand: querySelectorFactory(".background-controller")
    }
    let currentOption = null
    if (this == window) {
        currentOption = backgroundToggleOptions.notHand
        if (date.getHours() >= 6 && date.getHours() <= 17) {
            changeMoring(currentOption)
        } else {
            changeNight(currentOption)
        }
        return
    } else {
        currentOption = backgroundToggleOptions.byHand
        let haveMoringClass = null
        haveMoringClass = querySelectorFactory('html').className.split(" ").indexOf("moring")
        console.log(haveMoringClass)
        haveMoringClass != -1 ? changeNight(currentOption) : changeMoring(currentOption)
    }

}

function switchTopBar() {
    let height = document.documentElement.scrollTop || document.body.scrollTop;
    height > 28 ? querySelectorFactory('.header').classList.add('header-toggle') : querySelectorFactory('.header').classList.remove('header-toggle')
    height > 200 ? querySelectorFactory('.go-top').classList.add('go-top-toggle') : querySelectorFactory('.go-top').classList.remove('go-top-toggle')
}

// 畫面時間內容設定
function time() {
    const date = new Date()
    let year = date.getFullYear()
    let month = (date.getMonth() + 1 < 10 ? '0' : '') + (date.getMonth() + 1)
    let dates = (date.getDate() < 10 ? '0' : '') + date.getDate()
    let hour = (date.getHours() < 10 ? '0' : '') + date.getHours()
    let minute = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()
    let seconds = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds()
    let dateText = `${year} / ${month} / ${dates}`
    let timeText = `${hour}：${minute}：${seconds}`
    querySelectorFactory(".date").textContent = dateText
    querySelectorFactory(".time").textContent = timeText
}

function selectCityPart(element) {
    querySelectorFactory(".current-select").textContent = element.textContent
    querySelectorAllFactory(".city-name").forEach(key => key.dataset.num == element.dataset.num ? key.classList.add("selected") : key.classList.remove("selected"))
    setTimeout(() => selectAnimate(element), 700)
    setTimeout(() => selectCity(element), 2100)
}

function selectCity(currentTaget) {
    let currentTagetTemp = currentTaget.className == undefined ? currentTaget.target.className : currentTaget.className
    switch (currentTagetTemp) {
        case "city-name selected":
            filterWeatherState = jsonData.filter(key => key.locationName == currentTaget.textContent)
            renderList(false)
            chooseDayBtn()
            break;
        case "other-block":
            renderList(true)
            chooseBlockBtn()
            break;
    }
    querySelectorFactory(".select-group").classList.toggle("select-toggle")
    querySelectorFactory(".other-block").classList.toggle("other-block-toggle")
    setTimeout(() => querySelectorFactory(".option-group").classList.toggle("option-group-toggle"), 701)

}

function addTempSign(text) {
    let transText = `${text}&degC`
    return transText
}

function addPercent(text) {
    let transText = `${text}%`
    return transText
}

function transWeatherIcon(text) {
    let transText = ""
    const iconsItem = [{
        num: 1,
        icon: '<i class="fas fa-sun"></i>'
    }, {
        num: 2,
        icon: '<i class="fas fa-sun-cloud"></i>'
    }, {
        num: 3,
        icon: '<i class="fas fa-clouds-sun"></i>'
    }, {
        num: 7,
        icon: '<i class="fas fa-clouds"></i>'
    }, {
        num: 8,
        icon: '<i class="fas fa-cloud-showers-heavy"></i>'
    }]
    iconsItem.forEach(key => {
        if (key.num == Number(text)) {
            transText = key.icon
        } else if (Number(text) >= 4 && Number(text) <= 7 && key.num >= 4 && key.num <= 7) {
            transText = key.icon
        } else if (Number(text) >= 8 && key.num >= 8) {
            transText = key.icon
        }
    })
    return transText
}

function dateTrans(time) {
    const inputTime = time.replace(/-/g, "/")
    const dateTime = new Date(inputTime)
    let timeObject = {}
    timeObject.year = dateTime.getFullYear()
    timeObject.month = dateTime.getMonth() + 1
    timeObject.date = dateTime.getDate()
    timeObject.hour = dateTime.getHours()
    return timeObject
}

function today(renderWeather, order) {
    filterWeatherState.forEach(key => {
        renderWeather.push({
            cityName: key.locationName,
            minTemp: addTempSign(key.weatherElement[8].time[0].elementValue[0].value),
            maxTemp: addTempSign(key.weatherElement[12].time[0].elementValue[0].value),
            minFeelTemp: addTempSign(key.weatherElement[11].time[0].elementValue[0].value),
            maxFeelTemp: addTempSign(key.weatherElement[5].time[0].elementValue[0].value),
            equalTemp: addTempSign(key.weatherElement[1].time[0].elementValue[0].value),
            comferMinPerc: addPercent(key.weatherElement[3].time[0].elementValue[0].value),
            comferMaxPerc: addPercent(key.weatherElement[7].time[0].elementValue[0].value),
            rainNightPerc: addPercent(key.weatherElement[0].time[0].elementValue[0].value),
            rainMoringPerc: addPercent(key.weatherElement[0].time[1].elementValue[0].value),
            uivLevel: key.weatherElement[9].time[0].elementValue[0].value,
            uivDesc: key.weatherElement[9].time[0].elementValue[1].value,
            wetEqualPerc: addPercent(key.weatherElement[2].time[0].elementValue[0].value),
            weatherSign: key.weatherElement[6].time[0].elementValue[0].value,
            weatherSignState: transWeatherIcon(key.weatherElement[6].time[0].elementValue[1].value),
            weatherNightDesc: key.weatherElement[10].time[1].elementValue[0].value,
            weatherMoringDesc: key.weatherElement[10].time[0].elementValue[0].value

        })
    })
    renderView(renderWeather, order)
}

function tomorrow(renderWeather, order) {
    filterWeatherState.forEach(key => {
        renderWeather.push({
            cityName: key.locationName,
            minTemp: addTempSign(key.weatherElement[8].time[3].elementValue[0].value),
            maxTemp: addTempSign(key.weatherElement[12].time[2].elementValue[0].value),
            minFeelTemp: addTempSign(key.weatherElement[11].time[2].elementValue[0].value),
            maxFeelTemp: addTempSign(key.weatherElement[5].time[2].elementValue[0].value),
            equalTemp: addTempSign(key.weatherElement[1].time[2].elementValue[0].value),
            comferMinPerc: addPercent(key.weatherElement[3].time[2].elementValue[0].value),
            comferMaxPerc: addPercent(key.weatherElement[7].time[2].elementValue[0].value),
            rainNightPerc: addPercent(key.weatherElement[0].time[2].elementValue[0].value),
            rainMoringPerc: addPercent(key.weatherElement[0].time[3].elementValue[0].value),
            uivLevel: key.weatherElement[9].time[1].elementValue[0].value,
            uivDesc: key.weatherElement[9].time[1].elementValue[1].value,
            wetEqualPerc: addPercent(key.weatherElement[2].time[2].elementValue[0].value),
            weatherSign: key.weatherElement[6].time[1].elementValue[0].value,
            weatherSignState: transWeatherIcon(key.weatherElement[6].time[1].elementValue[1].value),
            weatherNightDesc: key.weatherElement[10].time[3].elementValue[0].value,
            weatherMoringDesc: key.weatherElement[10].time[2].elementValue[0].value
        })
    })
    renderView(renderWeather, order)
}

function week(renderWeather, order) {
    const date = new Date()
    let moringTemp = []
    let nightTemp = []
    filterWeatherState.forEach(key => {
        for (var x = 0; x < key.weatherElement[8].time.length; x++) {
            if (dateTrans(key.weatherElement[8].time[x].startTime).hour == 6) {
                moringTemp.push({
                    date: `${dateTrans(key.weatherElement[8].time[x].startTime).year} / ${dateTrans(key.weatherElement[8].time[x].startTime).month} / ${dateTrans(key.weatherElement[8].time[x].startTime).date}`,
                    weatherDesc: key.weatherElement[6].time[x].elementValue[0].value,
                    minTemp: key.weatherElement[8].time[x].elementValue[0].value,
                    maxTemp: key.weatherElement[12].time[x].elementValue[0].value,
                    rainPerc: key.weatherElement[0].time[x].elementValue[0].value
                })
            } else if (dateTrans(key.weatherElement[8].time[x].startTime).hour == 18) {
                nightTemp.push({
                    date: `${dateTrans(key.weatherElement[8].time[x].startTime).year} / ${dateTrans(key.weatherElement[8].time[x].startTime).month} / ${dateTrans(key.weatherElement[8].time[x].startTime).date}`,
                    weatherDesc: key.weatherElement[6].time[x].elementValue[0].value,
                    minTemp: key.weatherElement[8].time[x].elementValue[0].value,
                    maxTemp: key.weatherElement[12].time[x].elementValue[0].value,
                    rainPerc: key.weatherElement[0].time[x].elementValue[0].value
                })
            }
        }
    })

    renderWeather.push({
        cityName: filterWeatherState[0].locationName,
        moring: moringTemp,
        night: nightTemp
    })
    renderView(renderWeather, order)
}

function weekBlock(renderWeather, filterCurrentCity, text) {
    const date = new Date()
    let moringTemp = []
    let nightTemp = []
    filterCurrentCity.forEach(key => {
        for (let x = 0; x < key.weatherElement[8].time.length; x++) {
            if (dateTrans(key.weatherElement[8].time[x].startTime).hour == 6) {
                moringTemp.push({
                    date: `${dateTrans(key.weatherElement[8].time[x].startTime).year} / ${dateTrans(key.weatherElement[8].time[x].startTime).month} / ${dateTrans(key.weatherElement[8].time[x].startTime).date}`,
                    weatherDesc: key.weatherElement[6].time[x].elementValue[0].value,
                    minTemp: key.weatherElement[8].time[x].elementValue[0].value,
                    maxTemp: key.weatherElement[12].time[x].elementValue[0].value,
                    rainPerc: key.weatherElement[0].time[x].elementValue[0].value
                })
            } else if (dateTrans(key.weatherElement[8].time[x].startTime).hour == 18) {
                nightTemp.push({
                    date: `${dateTrans(key.weatherElement[8].time[x].startTime).year} / ${dateTrans(key.weatherElement[8].time[x].startTime).month} / ${dateTrans(key.weatherElement[8].time[x].startTime).date}`,
                    weatherDesc: key.weatherElement[6].time[x].elementValue[0].value,
                    minTemp: key.weatherElement[8].time[x].elementValue[0].value,
                    maxTemp: key.weatherElement[12].time[x].elementValue[0].value,
                    rainPerc: key.weatherElement[0].time[x].elementValue[0].value
                })
            }
        }
    })
    renderWeather.push({
        cityName: filterWeatherState[renderCount].locationName,
        moring: moringTemp,
        night: nightTemp
    })
    renderBlockView(renderWeather, text)
}

function renderCurrentCity(lengthCount) {
    let text = ""
    let filterCurrentCity = []
    let renderWeather = []
    for (let x = 0; x <= filterWeatherState.length; x++) {
        if (renderCount == x) filterCurrentCity.push(filterWeatherState[x])
    }
    text = `
    <div class="city-name-title-switch">
        <i class="fas fa-chevron-left arrow-left" onclick="renderCountCenter(this,${lengthCount})"></i>
            <div class="city-name-outer">
                <div class="city-name">${filterWeatherState[renderCount].locationName}</div>
            </div>
        <i class="fas fa-chevron-right arrow-right" onclick="renderCountCenter(this,${lengthCount})"></i>
    </div>`
    weekBlock(renderWeather, filterCurrentCity, text)
}

function chooseDayBtn() {
    let renderWeather = []
    const dayBtnItem = [{
        order: 0,
        fn: order => today(renderWeather, order)
    }, {
        order: 1,
        fn: order => tomorrow(renderWeather, order)
    }, {
        order: 2,
        fn: order => week(renderWeather, order)
    }]
    chooseAnimate(dayBtnItem, this)
}

function chooseBlockBtn() {
    const northCode = [10002, 10017, 65, 63, 68, 10004, 10018, 10005]
    const middleCode = [66, 10007, 10009, 10008]
    const southCode = [10010, 10020, 67, 64, 10013]
    const eastCode = [10015, 10014]
    const outeCode = [09007, 09020, 10016]
    const blockBtnItem = [{
        order: 0,
        fn: () => chooseArea(northCode)
    }, {
        order: 1,
        fn: () => chooseArea(middleCode)
    }, {
        order: 2,
        fn: () => chooseArea(southCode)
    }, {
        order: 3,
        fn: () => chooseArea(eastCode)
    }, {
        order: 4,
        fn: () => chooseArea(outeCode)
    }]
    chooseAnimate(blockBtnItem, this)
}

function chooseArea(cityCode) {
    renderCount = 0
    filterWeatherState = []
    cityCode.forEach((code, index) => {
        jsonData.forEach(key => {
            if (code == key.geocode) {
                filterWeatherState.push(key)
            }
        })
        if ((cityCode.length - 1) == index) {
            renderCurrentCity(cityCode.length)
        }
    })
}

function chooseAnimate(array, element) {
    array.forEach(key => {
        if (element == window) {
            if (key.order == 0) {
                querySelectorAllFactory(".btn-session")[key.order].classList.add("btn-session-active")
                key.fn(key.order)
            }
            return
        }

        if (key.order == element.dataset.order) {
            element.classList.add("btn-session-active")
            key.fn(key.order)
        } else {
            querySelectorAllFactory(".btn-session")[key.order].classList.remove("btn-session-active")
        }
    })
}

function selectAnimate(element) {
    let currentElement = element.target == undefined ? querySelectorFactory(".current-select") : element.target
    let haveClass = currentElement.className.split(" ").indexOf("current-select-toggle")
    if (haveClass == -1) {
        currentElement.classList.add("current-select-toggle")
        setTimeout(() => {
            querySelectorFactory(".select-city-outer").classList.add("select-city-toggle")
            querySelectorFactory(".arrow").classList.add("arrow-toggle")
        }, 700)
    } else {
        querySelectorFactory(".select-city-outer").classList.remove("select-city-toggle")
        querySelectorFactory(".arrow").classList.remove("arrow-toggle")
        setTimeout(() => currentElement.classList.remove("current-select-toggle"), 700)
    }

}

function loadingAnimate(state) {
    if (state == true) {
        querySelectorFactory(".loading-outer").classList.remove("loading-outer-hide")
        querySelectorFactory(".loading-text").textContent = "Loading"
    } else {
        querySelectorFactory(".loading-text").textContent = "Completed"
        setTimeout(() => querySelectorFactory(".loading-outer").classList.add("loading-outer-hide"), 1000)
        setTimeout(() => {
            querySelectorFactory(".select-group").classList.remove("select-toggle")
            querySelectorFactory(".other-block").classList.remove("other-block-toggle")
        }, 2010)
    }
}

function weatherOuterAnimate(state) {
    if (state == true) {
        querySelectorFactory(".weathers-outer").classList.add("weathers-outer-active")
        querySelectorFactory(".weathers-outer").style.marginTop = "0px"
    } else {
        querySelectorFactory(".weathers-outer").style.marginTop = `-${querySelectorFactory(".weathers-outer").offsetHeight}px`
        querySelectorFactory(".weathers-outer").classList.remove("weathers-outer-active")
    }
}

function renderList(state) {
    let domObject = ""
    const btnItem = [{
        matchSwitch: false,
        btnText: "目前天氣",
    }, {
        matchSwitch: false,
        btnText: "明日天氣",
    }, {
        matchSwitch: false,
        btnText: "一週天氣",
    }, {
        matchSwitch: true,
        btnText: "北部",
    }, {
        matchSwitch: true,
        btnText: "中部",
    }, {
        matchSwitch: true,
        btnText: "南部",
    }, {
        matchSwitch: true,
        btnText: "東部",
    }, {
        matchSwitch: true,
        btnText: "外島",
    }]
    btnItem.forEach(key => { if (key.matchSwitch == state) domObject += `<div class="btn-session">${key.btnText}</div>` })
    querySelectorFactory(".btn-session-group").innerHTML = domObject
    querySelectorAllFactory(".btn-session").forEach((key, index) => key.setAttribute("data-order", index))
    setTimeout(() => weatherOuterAnimate(true), 1401)
    querySelectorAllFactory(".btn-session").forEach(key => {
        state == false ? key.addEventListener("click", chooseDayBtn) : key.addEventListener("click", chooseBlockBtn)
    })
}

function renderCountCenter(element, lengthCount) {
    if (element.classList[2] == "arrow-left") {
        renderCount == 0 ? renderCount = (lengthCount - 1) : renderCount--
    } else {
        renderCount == (lengthCount - 1) ? renderCount = 0 : renderCount++
    }
    renderCurrentCity(lengthCount)
}

function renderViewWeekWithoutRwd(renderWeather, text) {
    renderWeather.forEach(render => {
                text = `<div class="city-name-title">${render.cityName}</div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col"></th>`
                render.moring.forEach(key => text += `<th scope="col">${key.date.replace("2021 / ","")}</th>`)
                text += `</tr>
                </thead>
                <tbody>
                    <tr>
                    <td>白天</td>`
                render.moring.forEach(key =>
                        text += `<td>
                            <div class="week-desc">
                                <span>${key.weatherDesc}</span>
                                <span>${addTempSign(key.minTemp)} ~ ${addTempSign(key.maxTemp)}</span>
                                <span>${key.rainPerc == " "?"氣象局暫無資料":`降雨機率 ${addPercent(key.rainPerc)}`}</span>
                            </div>
                        </td>`)
            text += `</tr>
                    <tr>
                        <td>夜晚</td>`
                        render.night.forEach((key, index) => {
                            if (index == 0) return
                            text += 
                        `<td>
                            <div class="week-desc">
                                <span>${key.weatherDesc}</span>
                                <span>${addTempSign(key.minTemp)} ~ ${addTempSign(key.maxTemp)}</span>
                                <span>${key.rainPerc == " "?"氣象局暫無資料":`降雨機率 ${addPercent(key.rainPerc)}`}</span>
                            </div>
                        </td>`})
            text += `</tr>
                <tbody>
            </table>`})
return text
}

function renderViewWeekOnRwd(renderWeather,text){
    renderWeather.forEach(render=>{
        text +=`<div class="city-name-title">${render.cityName}</div>
    <table class="table">
        <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col">白天</th>
                <th scope="col">夜晚</th>`
            text += `</tr>
        </thead>
        <tbody>`
            render.moring.forEach(moringData => {
                render.night.forEach(nightData=>{
                    if(moringData.date == nightData.date){
                        text += `
                        <tr>
                            <td>${moringData.date.replace("2021 / ","")}</td>
                            <td>
                                <div class="week-desc">
                                    <span>${moringData.weatherDesc}</span>
                                    <span>${addTempSign(moringData.minTemp)} ~ ${addTempSign(moringData.maxTemp)}</span>
                                    <span>${moringData.rainPerc == " "?"氣象局暫無資料":`降雨機率 ${addPercent(moringData.rainPerc)}`}</span>
                                </div>
                            </td>
                            <td>
                                <div class="week-desc">
                                    <span>${nightData.weatherDesc}</span>
                                    <span>${addTempSign(nightData.minTemp)} ~ ${addTempSign(nightData.maxTemp)}</span>
                                    <span>${nightData.rainPerc == " "?"氣象局暫無資料":`降雨機率 ${addPercent(nightData.rainPerc)}`}</span>
                                </div>
                            </td>
                        </tr>`
                    }
                })
            })
        text += `<tbody></table>`
    })
    return text
}
function renderViewWeek(renderWeather, text) {
    let newText = text
    window.innerWidth <= 768 ? newText = renderViewWeekOnRwd(renderWeather,text) : newText = renderViewWeekWithoutRwd(renderWeather,text)
    return newText
}

function renderViewWithoutWeek(renderWeather,order,text){
    renderWeather.forEach(render=> 
        text = 
        `<div class="row no-gutters">
            <div class="col-md-12">
                <div class="city-name-title">
                    ${render.cityName}
                </div>
            </div>
            <div class="col-md-4">
                <div class="temp-desc">
                    <div class="temp-desc-title">溫度資訊</div>
                    <span>氣溫：${render.minTemp} ~ ${render.maxTemp}</span>
                    <span>${order == 0?"本日":"明日"}均溫：${render.equalTemp}</span>
                    <span>體感溫度：${render.minFeelTemp} ~ ${render.maxFeelTemp}</span>
                </div>
            </div>
            <div class="col-md-4">
                <div class="rain-desc">
                    <div class="rain-desc-title">${order == 0?"本日":"明日"}降雨機率</div>
                    <div class="rain-sign">${render.weatherSign}</div>
                    <div class="rain-icon">${render.weatherSignState}</div>
                    <div class="rain-percent">
                        <span>白天：${render.rainMoringPerc}</span>
                        <span>夜晚：${render.rainNightPerc}</span>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="other-desc">
                    <div class="other-desc-title">各項指數</div>
                    <span>舒適度指數：${render.comferMinPerc} ~ ${render.comferMaxPerc}</span>
                    <span>紫外線指數：${render.uivLevel} ${render.uivDesc}</span>
                    <span>濕度：${render.wetEqualPerc}</span>
                </div>
            </div>
            <div class="col-md-12">
                <div class="weather-desc">
                    <div class="weather-desc-title">${order == 0?"本日":"明日"}天氣概況</div>
                    <div class="row no-gutters">  
                        <div class="col-md-6">  
                            <div class="weather-desc-moring">
                                <span>白天至夜晚</span>
                                <span>${render.weatherMoringDesc}</span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="weather-desc-night">
                                <span>夜晚至凌晨</span>
                                <span>${render.weatherNightDesc}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`)
    return text
}

function renderView(renderWeather, order) {
    let text = ""
    order == 2 ? text = renderViewWeek(renderWeather,text) : text = renderViewWithoutWeek(renderWeather,order,text)
    querySelectorFactory(".weathers").innerHTML = text
    setTimeout(()=>querySelectorFactory(".go-back-options").classList.add("go-back-options-toggle"),1500)
}

function renderBlockWithoutRwd(renderWeather,text){
    renderWeather.forEach(render=>{
        text +=
    `<table class="table">
        <thead>
            <tr>
                <th scope="col"></th>`
                render.moring.forEach(key => {
                    text += `<th scope="col">${key.date.replace("2021 / ","")}</th>`
                })
                text += `</tr>
        </thead>
        <tbody>
            <tr>
                <td>白天</td>`
                render.moring.forEach(key => {
                        text +=
                                `<td>
                    <div class="week-desc">
                        <span>${key.weatherDesc}</span>
                        <span>${addTempSign(key.minTemp)} ~ ${addTempSign(key.maxTemp)}</span>
                        <span>${key.rainPerc == " "?"氣象局暫無資料":`降雨機率 ${addPercent(key.rainPerc)}`}</span>
                    </div>
                </td>`
        })
        text += `</tr>
                <tr>
                    <td>夜晚</td>`
        render.night.forEach((key, index) => {
            if (index == 0) return
            text += 
            `<td>
                <div class="week-desc">
                    <span>${key.weatherDesc}</span>
                    <span>${addTempSign(key.minTemp)} ~ ${addTempSign(key.maxTemp)}</span>
                    <span>${key.rainPerc == " "?"氣象局暫無資料":`降雨機率 ${addPercent(key.rainPerc)}`}</span>
                </div>
            </td>`
        })
        text += `</tr>
            <tbody>
        </table>`
    })
    return text
}

function renderBlockOnRwd(renderWeather,text){
    renderWeather.forEach(render=>{
        text +=
    `<table class="table">
        <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col">白天</th>
                <th scope="col">夜晚</th>`
            text += `</tr>
        </thead>
        <tbody>`
            render.moring.forEach(moringData => {
                render.night.forEach(nightData=>{
                    if(moringData.date == nightData.date){
                        text += `
                        <tr>
                            <td>${moringData.date.replace("2021 / ","")}</td>
                            <td>
                                <div class="week-desc">
                                    <span>${moringData.weatherDesc}</span>
                                    <span>${addTempSign(moringData.minTemp)} ~ ${addTempSign(moringData.maxTemp)}</span>
                                    <span>${moringData.rainPerc == " "?"氣象局暫無資料":`降雨機率 ${addPercent(moringData.rainPerc)}`}</span>
                                </div>
                            </td>
                            <td>
                                <div class="week-desc">
                                    <span>${nightData.weatherDesc}</span>
                                    <span>${addTempSign(nightData.minTemp)} ~ ${addTempSign(nightData.maxTemp)}</span>
                                    <span>${nightData.rainPerc == " "?"氣象局暫無資料":`降雨機率 ${addPercent(nightData.rainPerc)}`}</span>
                                </div>
                            </td>
                        </tr>`
                    }
                })
            })
        text += `<tbody></table>`
    })
    return text
}

function renderBlockView(renderWeather,text){
    let newText = text
    window.innerWidth <= 768 ? newText = renderBlockOnRwd(renderWeather,newText):newText = renderBlockWithoutRwd(renderWeather,newText)
    querySelectorFactory(".weathers").innerHTML = newText
    setTimeout(()=>querySelectorFactory(".go-back-options").classList.add("go-back-options-toggle"),1500)
}

function returnOptions(){
    this.classList.remove("go-back-options-toggle")
    weatherOuterAnimate(false)
    setTimeout(()=>querySelectorFactory(".weathers").textContent = "",1200) 
    setTimeout(() => querySelectorFactory(".option-group").classList.toggle("option-group-toggle"), 1210)
    setTimeout(()=>{
        querySelectorFactory(".select-group").classList.toggle("select-toggle")
        querySelectorFactory(".other-block").classList.toggle("other-block-toggle")
    },2010)
}

setInterval(time, 1000)

backgroundChange()

querySelectorFactory(".background-controller").addEventListener("click",backgroundChange)

querySelectorFactory(".weathers-outer").style.marginTop = `-${window.innerHeight}px`

querySelectorFactory(".current-select").addEventListener("click",selectAnimate)

querySelectorFactory(".other-block").addEventListener("click",selectCity)

querySelectorFactory(".go-back-options").addEventListener("click",returnOptions)

querySelectorFactory('.go-top').addEventListener('click', scrolls)

window.addEventListener('scroll', switchTopBar)