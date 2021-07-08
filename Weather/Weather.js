const querySelectorFactory = currentClass => document.querySelector(currentClass)
const querySelectorAllFactory = currentClass => document.querySelectorAll(currentClass)
let obj = {}
obj.jsonData = [];
obj.jsonBlockData = [];
obj.filterWeatherState = []
obj.renderWeatherTemp = []
obj.renderCount = 0

Date.prototype.getFullDateTime = function(time, have) {
    let fullDateTimeFormat = {}
    const dates = time == null ? new Date() : new Date(time)
    const year = dates.getFullYear()
    const month = `${dates.getMonth() + 1 < 10 ? "0":""}${dates.getMonth() + 1}`
    const date = `${dates.getDate() < 10 ? "0":""}${dates.getDate()}`
    const hour = `${dates.getHours() < 10 ? "0":""}${dates.getHours()}`
    const minute = `${dates.getMinutes() < 10 ? "0":""}${dates.getMinutes()}`
    const secondes = `${dates.getSeconds() < 10 ? "0":""}${dates.getSeconds()}`
    fullDateTimeFormat.haveDate = `${year}-${month}-${date}`
    fullDateTimeFormat.haveTime = `${hour}：${minute}：${secondes}`
    return have == "date" ? fullDateTimeFormat.haveDate : fullDateTimeFormat.haveTime
}

for (let x = 1; x <= 85; x += 4) {
    let orders = x <= 9 ? "00" : "0"
    fetch(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-093/?Authorization=CWB-6BEED9AA-24B5-4569-BB51-FC0BCFA7595B&locationId=F-D0047-${orders}${x}`).then(res => res.json()).then(res => {
        if (res.success == "true") {
            res.records.locations.forEach(key => {
                let arrayTemp = []
                key.location.forEach(keyL => arrayTemp.push({
                    blockGeoCode: keyL.geocode,
                    blockName: keyL.locationName,
                    blockLat: keyL.lat,
                    blockLon: keyL.lon,
                    blockElement: keyL.weatherElement
                }))
                arrayTemp = arrayTemp.sort((a, b) => a.blockGeoCode - b.blockGeoCode)
                obj.jsonBlockData.push({
                    locationsName: key.locationsName,
                    block: arrayTemp
                })
            })
        }
    })
}

fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-6BEED9AA-24B5-4569-BB51-FC0BCFA7595B').then(res => {
    loadingAnimate(true)
    return res.json()
}).then(res => {
    setTimeout(() => {
        if (res.success == "true") {
            let jsonDataTemp = []
            res.records.locations[0].location.forEach(key => jsonDataTemp.push(key))
            loadingAnimate(false)
            setTimeout(() => cityType(jsonDataTemp), 2500)
        }
    }, 3500)
}).catch(err => console.log(err))

function cityType(arry) {
    let arrySort = []
    querySelectorFactory(".current-select").textContent = "-- 請選擇欲查詢縣市氣象 --"
    arrySort = arry.sort((a, b) => b.lon - a.lon)
    arrySort.forEach((key, index) => {
        obj.jsonData.push(key)
        querySelectorFactory(".select-city").innerHTML += `<span class="city-name" data-num="${index}" onclick="selectCityPart(this)">${key.locationName}</span>`
    });
    obj.jsonData.forEach(key => {
        obj.jsonBlockData.forEach(keyBlock => {
            if (key.locationName == keyBlock.locationsName) key.block = keyBlock.block
        })
    })
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
        date.getHours() >= 6 && date.getHours() <= 17 ? changeMoring(currentOption) : changeNight(currentOption)
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
            obj.filterWeatherState = obj.jsonData.filter(key => key.locationName == currentTaget.textContent)
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
    obj.filterWeatherState.forEach(key => {
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
            weatherMoringDesc: key.weatherElement[10].time[0].elementValue[0].value,
            areaBlock: key.block
        })
    })
    obj.renderWeatherTemp = renderWeather
    renderView(renderWeather, order)
}

function tomorrow(renderWeather, order) {
    obj.filterWeatherState.forEach(key => {
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
            weatherMoringDesc: key.weatherElement[10].time[2].elementValue[0].value,
            areaBlock: key.block
        })
    })
    obj.renderWeatherTemp = renderWeather
    renderView(renderWeather, order)
}

function week(renderWeather, order) {
    const date = new Date()
    let moringTemp = []
    let nightTemp = []
    obj.filterWeatherState.forEach(key => {
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
        cityName: obj.filterWeatherState[0].locationName,
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
        cityName: obj.filterWeatherState[obj.renderCount].locationName,
        moring: moringTemp,
        night: nightTemp
    })
    renderBlockView(renderWeather, text)
}

function renderCurrentCity(lengthCount) {
    let text = ""
    let filterCurrentCity = []
    let renderWeather = []
    for (let x = 0; x <= obj.filterWeatherState.length; x++) {
        if (obj.renderCount == x) filterCurrentCity.push(obj.filterWeatherState[x])
    }
    text = `
    <div class="city-name-title-switch">
        <i class="fas fa-chevron-left arrow-left" onclick="renderCountCenter(this,${lengthCount})"></i>
            <div class="city-name-outer">
                <div class="city-name">${obj.filterWeatherState[obj.renderCount].locationName}</div>
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
    const northCode = [10002000, 10017000, 65000000, 63000000, 68000000, 10004000, 10018000, 10005000]
    const middleCode = [66000000, 10007000, 10009000, 10008000]
    const southCode = [10010000, 10020000, 67000000, 64000000, 10013000]
    const eastCode = [10015000, 10014000]
    const outeCode = [09007000, 09020000, 10016000]
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
    obj.renderCount = 0
    obj.filterWeatherState = []
    cityCode.forEach((code, index) => {
        obj.jsonData.forEach(key => {
            if (code == key.geocode) obj.filterWeatherState.push(key)
        })
        if ((cityCode.length - 1) == index) renderCurrentCity(cityCode.length)
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
        querySelectorFactory(".select-group").classList.add("select-group-action")
        querySelectorFactory(".other-block").classList.add("other-block-action")
        setTimeout(() => {
            querySelectorFactory(".select-city-outer").classList.add("select-city-toggle")
            querySelectorFactory(".arrow").classList.add("arrow-toggle")
        }, 700)
    } else {
        querySelectorFactory(".select-city-outer").classList.remove("select-city-toggle")
        querySelectorFactory(".arrow").classList.remove("arrow-toggle")
        setTimeout(() => {
            querySelectorFactory(".select-group").classList.remove("select-group-action")
            querySelectorFactory(".other-block").classList.remove("other-block-action")
            currentElement.classList.remove("current-select-toggle")
        }, 700)
    }

}

function loadingAnimate(state) {
    if (state == true) {
        querySelectorFactory(".loading-outer").classList.add("loading-outer-toggle")
        querySelectorFactory(".loading-text").textContent = "Loading"
    } else {
        querySelectorFactory(".loading-text").textContent = "Completed"
        setTimeout(() => querySelectorFactory(".loading-outer").classList.remove("loading-outer-toggle"), 1000)
        setTimeout(() => {
            querySelectorFactory(".select-group").classList.remove("select-toggle")
            querySelectorFactory(".other-block").classList.remove("other-block-toggle")
        }, 3010)
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

function showBlockSelectAnimate(element) {
    element.classList.toggle("block-select-outer-toggle")
    querySelectorFactory(".block-has-select-title .arrow").classList.toggle("arrow-toggle")
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
        obj.renderCount == 0 ? obj.renderCount = (lengthCount - 1) : obj.renderCount--
    } else {
        obj.renderCount == (lengthCount - 1) ? obj.renderCount = 0 : obj.renderCount++
    }
    renderCurrentCity(lengthCount)
}

function currentBlockChoose(element, array, order, cityName, equalTemp, uivLevel, uivDesc) {
    if (cityName != undefined && equalTemp != undefined && uivLevel != undefined && uivDesc != undefined) {
        let blockFilterArray = array.filter(key => key.blockName == element.textContent)
        let blockArray = order == 0 ? todayBlock(blockFilterArray, array, cityName, equalTemp, uivLevel, uivDesc) : tomorrowBlock(blockFilterArray, array, cityName, equalTemp, uivLevel, uivDesc)
        setTimeout(() => renderView(blockArray, order, element.textContent), 700)
    } else {
        setTimeout(() => renderView(array, order, element.textContent), 700)
    }
    setTimeout(() => querySelectorAllFactory(".block-select span").forEach(key => key.dataset.num == element.dataset.num ? key.classList.add("block-selected") : key.classList.remove("block-selected")), 702)

    querySelectorFactory(".block-has-select-title span").textContent = element.textContent
}

function currentTimeMatch(datas, hasMax) {
    let str = ""
    let filterMaxArray = []
    let timeSelectCount = Number(new Date().getFullDateTime(null, "time").split("：")[0]) >= 18 ? 0 : 1
    const currentDate = new Date().getFullDateTime(null, "date")
    const currentTime = new Date().getFullDateTime(null, "time")
    datas.forEach(key => {
        let dataDate = new Date().getFullDateTime(key.dataTime, "date")
        let dataTime = new Date().getFullDateTime(key.dataTime, "time")
        if (dataDate == currentDate && Number(dataTime.split("：")[0]) >= Number(currentTime.split("：")[0]) - 3 && Number(dataTime.split("：")[0]) <= Number(currentTime.split("：")[0]) + 3) filterMaxArray.push(key)
    })
    str = hasMax == true ? filterMaxArray[0 + timeSelectCount].elementValue[0].value : filterMaxArray[1 - timeSelectCount].elementValue[0].value
    return str
}

function todayBlock(blockFilterArray, array, cityName, equalTemp, uivLevel, uivDesc) {
    let blockArrayTemp = []
    blockFilterArray.forEach(key => {
        blockArrayTemp.push({
            cityName: cityName,
            minTemp: addTempSign(currentTimeMatch(key.blockElement[3].time, false)),
            maxTemp: addTempSign(currentTimeMatch(key.blockElement[3].time, true)),
            minFeelTemp: addTempSign(currentTimeMatch(key.blockElement[2].time, false)),
            maxFeelTemp: addTempSign(currentTimeMatch(key.blockElement[2].time, true)),
            equalTemp: addTempSign(equalTemp),
            comferMinPerc: addPercent(currentTimeMatch(key.blockElement[5].time, false)),
            comferMaxPerc: addPercent(currentTimeMatch(key.blockElement[5].time, true)),
            rainNightPerc: addPercent(key.blockElement[7].time[1].elementValue[0].value),
            rainMoringPerc: addPercent(key.blockElement[7].time[0].elementValue[0].value),
            uivLevel: uivLevel,
            uivDesc: uivDesc,
            wetEqualPerc: addPercent(key.blockElement[4].time[0].elementValue[0].value),
            weatherSign: key.blockElement[1].time[0].elementValue[0].value,
            weatherSignState: transWeatherIcon(key.blockElement[1].time[0].elementValue[1].value),
            weatherNightDesc: key.blockElement[6].time[2].elementValue[0].value,
            weatherMoringDesc: key.blockElement[6].time[0].elementValue[0].value,
            areaBlock: array
        })
    })
    return blockArrayTemp
}

function tomorrowBlock(blockFilterArray, array, cityName, equalTemp, uivLevel, uivDesc) {
    let blockArrayTemp = []
    let timeSelectCount = Number(new Date().getFullDateTime(null, "time").split("：")[0]) >= 18 ? 2 : 0
    blockFilterArray.forEach(key => {
        blockArrayTemp.push({
            cityName: cityName,
            minTemp: addTempSign(key.blockElement[3].time[6 + timeSelectCount].elementValue[0].value),
            maxTemp: addTempSign(key.blockElement[3].time[8 - timeSelectCount].elementValue[0].value),
            minFeelTemp: addTempSign(key.blockElement[2].time[6 + timeSelectCount].elementValue[0].value),
            maxFeelTemp: addTempSign(key.blockElement[2].time[8 - timeSelectCount].elementValue[0].value),
            equalTemp: addTempSign(equalTemp),
            comferMinPerc: addPercent(key.blockElement[5].time[6 + timeSelectCount].elementValue[0].value),
            comferMaxPerc: addPercent(key.blockElement[5].time[8 - timeSelectCount].elementValue[0].value),
            rainNightPerc: addPercent(key.blockElement[7].time[4].elementValue[0].value),
            rainMoringPerc: addPercent(key.blockElement[7].time[2].elementValue[0].value),
            uivLevel: uivLevel,
            uivDesc: uivDesc,
            wetEqualPerc: addPercent(key.blockElement[4].time[6].elementValue[0].value),
            weatherSign: key.blockElement[1].time[4].elementValue[0].value,
            weatherSignState: transWeatherIcon(key.blockElement[1].time[4].elementValue[1].value),
            weatherNightDesc: key.blockElement[6].time[10].elementValue[0].value,
            weatherMoringDesc: key.blockElement[6].time[6].elementValue[0].value,
            areaBlock: array
        })
    })
    return blockArrayTemp
}

function renderViewWeekWithoutRwd(renderWeather, text) {
    renderWeather.forEach(render => {
                text = `
            <div class="city-title-outer">
                <div class="city-name-title">${render.cityName}</div>
            </div>
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
        text +=`
    <div class="city-title-outer">
        <div class="city-name-title">${render.cityName}</div>
    </div>
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

function renderViewWithoutWeek(renderWeather,order,text,currentBlock){
    renderWeather.forEach(render=> {
        text = 
        `<div class="row no-gutters">
            <div class="col-md-12">
                <div class="city-title-outer">
                    <div class="block-select-outer" onclick="showBlockSelectAnimate(this)">
                        <div class="block-has-select-title">
                            區域：<span>${currentBlock == undefined ? "全區":currentBlock}</span>
                            <i class="fas fa-chevron-up arrow"></i>
                        </div>
                            <div class="block-select">`
                                text+=`<span class="block-selected" data-num="0" onclick='currentBlockChoose(this,${JSON.stringify(obj.renderWeatherTemp)},${order})'>全區</span>`
                                render.areaBlock.forEach((renderBlock,index)=>text+= `<span data-num="${index+=1}" onclick='currentBlockChoose(this,${JSON.stringify(render.areaBlock)},${order},"${render.cityName}",${Number(render.equalTemp.split("&degC")[0])},${Number(render.uivLevel)},"${render.uivDesc}")'>${renderBlock.blockName}</span>`)
                    text+= `</div>
                    </div>
                    <div class="city-name-title">${render.cityName}</div>
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
        </div>`})
    return text
}

function renderView(renderWeather, order,currentBlock) {
    let text = ""
    order == 2 ? text = renderViewWeek(renderWeather,text) : text = renderViewWithoutWeek(renderWeather,order,text,currentBlock)
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