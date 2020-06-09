const xhr = new XMLHttpRequest();
const select = document.querySelector('.select')
let jsonData;
let allDatas;
xhr.open('get', 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-6BEED9AA-24B5-4569-BB51-FC0BCFA7595B', true)
xhr.send(null)
xhr.onload = () => {
    if (xhr.status !== 200) {
        return;
    }
    let jsion = JSON.parse(xhr.responseText)
    jsonData = jsion.records.locations[0].location
    console.log(jsonData)
    cityType()
}

function cityType() {
    let array = []
    let city;
    city = `<option selected disabled>--請選擇縣市--</option>`
    jsonData.forEach(key => {
        array.push(key)
        city += `<option value="${key.locationName}">${key.locationName}</option>`
    });
    document.querySelector('.select').innerHTML = city
    allDatas = Array.from(new Set(array))
}

function callAll() {
    scrolls()
    allDatas.forEach(keyWord => {
        this.value == keyWord.locationName ? today() : ''
    })
    select.classList.add('select-toggle')
    document.querySelector('.back').classList.add('back-toggle')
    document.querySelector('.back').textContent = '查詢其它城市'
    document.querySelector('.location').classList.add('weather-title-in')
    document.querySelector('.location').classList.remove('weather-title-out')
    document.querySelectorAll('.week-board').forEach(animate => animate.classList.remove('weather-week-content-out'))
    document.querySelectorAll('.board').forEach(animate => animate.classList.remove('weather-content-out'))
    document.querySelector('.footer').classList.toggle('footer-active')
    document.querySelector('.clock').classList.toggle('clock-change')
    document.querySelector('.control').classList.toggle('control-change')
    document.querySelector('.bg-text').classList.toggle('bg-text-change')
    document.querySelector('.sidebar').classList.toggle('sidebar-hide')
    setTimeout(() => document.querySelector('.now').classList.add('now-in'), 500)
    setTimeout(() => document.querySelector('.tomorrow').classList.add('tomorrow-in'), 750)
    setTimeout(() => document.querySelector('.week').classList.add('week-in'), 1000)
}

function content() {
    switch (this.textContent) {
        case '本日天氣':
            today()
            document.querySelector('.now').classList.add('btn-active')
            document.querySelector('.now').classList.add('btn-color')
            document.querySelector('.tomorrow').classList.remove('btn-color')
            document.querySelector('.week').classList.remove('btn-color')
            setTimeout(() => document.querySelector('.now').classList.remove('btn-active'), 500)
            break
        case '明日天氣':
            tomorrow()
            document.querySelector('.tomorrow').classList.add('btn-active')
            document.querySelector('.now').classList.remove('btn-color')
            document.querySelector('.tomorrow').classList.add('btn-color')
            document.querySelector('.week').classList.remove('btn-color')
            setTimeout(() => document.querySelector('.tomorrow').classList.remove('btn-active'), 500)
            break
        case '一周天氣':
            week()
            document.querySelector('.week').classList.add('btn-active')
            document.querySelector('.now').classList.remove('btn-color')
            document.querySelector('.tomorrow').classList.remove('btn-color')
            document.querySelector('.week').classList.add('btn-color')
            setTimeout(() => document.querySelector('.week').classList.remove('btn-active'), 500)
            break
    }
}

function today() {
    allDatas.forEach(keyWord => {
        if (select.value == keyWord.locationName) {
            document.querySelector('.location').textContent = keyWord.locationName
            setTimeout(() => document.querySelector('.now').classList.add('btn-color'), 800)
            document.querySelector('.text-in').innerHTML =
                `
                    <div class="col-11">
                        <div class="row no-gutters">
                            <div class="col-md-6">
                                <div class="board mx-1 weather-contentFt-in">
                                    <span class="text-center">本日氣溫</span>
                                    <p class="mb-0 my-2 text-center">${keyWord.weatherElement[8].time[0].elementValue[0].value}&degC ~ ${keyWord.weatherElement[12].time[0].elementValue[0].value}&degC</p>
                                    <p class="mb-0 text-center">舒適度：${keyWord.weatherElement[3].time[0].elementValue[0].value} ~ ${keyWord.weatherElement[7].time[0].elementValue[0].value}</p> 
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="board mx-1 weather-contentSd-in">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <span class="text-center">本日降雨機率</span>
                                        </div>
                                    </div>
                                    <div class="row my-3">
                                        <div class="col-md-6">
                                            <p class="mb-0 my-1 text-center">白天：${keyWord.weatherElement[0].time[0].elementValue[0].value}%</p>
                                        </div>
                                        <div class="col-md-6">
                                            <p class="mb-0 my-1 text-center">夜晚：${keyWord.weatherElement[0].time[1].elementValue[0].value}%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row no-gutters">
                            <div class="col-md-6">
                                <div class="board mx-1 weather-contentTd-in">
                                    <p class="mt-2 mb-3 text-center">本日均溫：${keyWord.weatherElement[1].time[0].elementValue[0].value}&degC</p>
                                    <p class="my-4 text-center">紫外線：${keyWord.weatherElement[9].time[0].elementValue[0].value}&nbsp${keyWord.weatherElement[9].time[0].elementValue[1].value}</p>
                                    <p class="my-4 text-center">體感溫度：${keyWord.weatherElement[11].time[0].elementValue[0].value}&degC ~ ${keyWord.weatherElement[5].time[0].elementValue[0].value}&degC</p>
                                    <p class="mt-3 mb-2 text-center">濕度：${keyWord.weatherElement[2].time[0].elementValue[0].value}%</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="board mx-1 weather-contentFort-in">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <span class="text-center">本日天氣概況</span>
                                        </div>
                                    </div>
                                    <div class="row no-gutters">
                                        <div class="col-md-6">
                                            <p class="my-3 text-center">白天至夜晚</p>
                                            <p class="mb-2 mx-2 text-justify">${keyWord.weatherElement[10].time[0].elementValue[0].value}</p>
                                        </div>
                                        <div class="col-md-6">
                                            <p class="my-3 text-center">夜晚至隔日半夜</p>
                                            <p class="mb-2 mx-2 text-justify">${keyWord.weatherElement[10].time[1].elementValue[0].value}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
        }
    })
}

function tomorrow() {
    allDatas.forEach(keyWord => {
        if (select.value == keyWord.locationName) {
            document.querySelector('.location').textContent = keyWord.locationName
            document.querySelector('.text-in').innerHTML =
                `
                    <div class="col-11">
                        <div class="row no-gutters">
                            <div class="col-md-6">
                                <div class="board mx-1 weather-contentFt-in">
                                    <span class="text-center">明日氣溫</span>
                                    <p class="mb-0 my-2 text-center">${keyWord.weatherElement[8].time[2].elementValue[0].value}&degC ~ ${keyWord.weatherElement[12].time[2].elementValue[0].value}&degC</p>
                                    <p class="mb-0 text-center">舒適度：${keyWord.weatherElement[3].time[1].elementValue[0].value} ~ ${keyWord.weatherElement[7].time[1].elementValue[0].value}</p> 
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="board mx-1 weather-contentSd-in">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <span class="text-center">明日降雨機率</span>
                                        </div>
                                    </div>
                                    <div class="row my-3">
                                        <div class="col-md-6">
                                            <p class="mb-0 my-1 text-center">白天：${keyWord.weatherElement[0].time[2].elementValue[0].value}%</p>
                                        </div>
                                        <div class="col-md-6">
                                            <p class="mb-0 my-1 text-center">夜晚：${keyWord.weatherElement[0].time[3].elementValue[0].value}%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row no-gutters">
                            <div class="col-md-6">
                                <div class="board mx-1 weather-contentTd-in">
                                    <p class="mt-2 mb-3 text-center">明日均溫：${keyWord.weatherElement[1].time[1].elementValue[0].value}&degC</p>
                                    <p class="my-4 text-center">紫外線：${keyWord.weatherElement[9].time[1].elementValue[0].value}&nbsp${keyWord.weatherElement[9].time[0].elementValue[1].value}</p>
                                    <p class="my-4 text-center">體感溫度：${keyWord.weatherElement[11].time[1].elementValue[0].value}&degC ~ ${keyWord.weatherElement[5].time[1].elementValue[0].value}&degC</p>
                                    <p class="mt-3 mb-2 text-center">濕度：${keyWord.weatherElement[2].time[2].elementValue[0].value}%</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="board mx-1 weather-contentFort-in">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <span class="text-center">明日天氣概況</span>
                                        </div>
                                    </div>
                                    <div class="row no-gutters">
                                        <div class="col-md-6">
                                            <p class="my-3 text-center">白天至夜晚</p>
                                            <p class="mb-2 mx-2 text-justify">${keyWord.weatherElement[10].time[2].elementValue[0].value}</p>
                                        </div>
                                        <div class="col-md-6">
                                            <p class="my-3 text-center">夜晚至隔日半夜</p>
                                            <p class="mb-2 mx-2 text-justify">${keyWord.weatherElement[10].time[3].elementValue[0].value}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
        }
    })
}

function week() {
    allDatas.forEach(keyWord => {
        if (select.value == keyWord.locationName) {
            let dateI = keyWord.weatherElement[0].time[1].startTime
            let dateII = keyWord.weatherElement[0].time[3].startTime
            let dateIII = keyWord.weatherElement[0].time[5].startTime
            let dateIV = keyWord.weatherElement[0].time[7].startTime
            let dateV = keyWord.weatherElement[0].time[9].startTime
            let dateVI = keyWord.weatherElement[0].time[11].startTime
            let dateVII = keyWord.weatherElement[0].time[13].startTime
            document.querySelector('.location').textContent = keyWord.locationName
            document.querySelector('.text-in').innerHTML =
                `
                    <div class="col-11">
                        <div class="row mb-3 no-gutters">
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentFt-in">
                                    <span class="date">${dateI.substring(5, 7)}/${dateI.substring(8, 11)}</span>
                                    <span class="date">白天</span>
                                    <span class="date">${keyWord.weatherElement[8].time[1].elementValue[0].value}&degC ~ ${keyWord.weatherElement[12].time[1].elementValue[0].value}&degC</span>
                                    <span class="date">降雨機率</span>
                                    <span class="date">${keyWord.weatherElement[0].time[1].elementValue[0].value}%</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentFt-in">
                                    <span class="date">${dateI.substring(5, 7)}/${dateI.substring(8, 11)}</span>
                                    <span class="date">夜晚</span>
                                    <span class="date">${keyWord.weatherElement[8].time[2].elementValue[0].value}&degC ~ ${keyWord.weatherElement[12].time[2].elementValue[0].value}&degC</span>
                                    <span class="date">降雨機率</span>
                                    <span class="date">${keyWord.weatherElement[0].time[2].elementValue[0].value}%</span>
                                </div>
                            </div>
                        </div>
                        <div class="row my-3 no-gutters">
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentSd-in">
                                    <span class="date">${dateII.substring(5, 7)}/${dateII.substring(8, 11)}</span>
                                    <span class="date">白天</span>
                                    <span class="date">${keyWord.weatherElement[8].time[3].elementValue[0].value}&degC ~ ${keyWord.weatherElement[12].time[3].elementValue[0].value}&degC</span>
                                    <span class="date">降雨機率</span>
                                    <span class="date">${keyWord.weatherElement[0].time[3].elementValue[0].value}%</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentSd-in">
                                    <span class="date">${dateII.substring(5, 7)}/${dateII.substring(8, 11)}</span>
                                    <span class="date">夜晚</span>
                                    <span class="date">${keyWord.weatherElement[8].time[4].elementValue[0].value}&degC ~ ${keyWord.weatherElement[12].time[4].elementValue[0].value}&degC</span>
                                    <span class="date">降雨機率</span>
                                    <span class="date">${keyWord.weatherElement[0].time[4].elementValue[0].value}%</span>
                                </div>
                            </div>
                        </div>
                        <div class="row my-3 no-gutters">
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentTd-in">
                                    <span class="date">${dateIII.substring(5, 7)}/${dateIII.substring(8, 11)}</span>
                                    <span class="date">白天</span>
                                    <span class="date">${keyWord.weatherElement[8].time[5].elementValue[0].value}&degC ~ ${keyWord.weatherElement[12].time[5].elementValue[0].value}&degC</span>
                                    <span class="date">降雨機率</span>
                                    <span class="date">${keyWord.weatherElement[0].time[5].elementValue[0].value}%</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentTd-in">
                                    <span class="date">${dateIII.substring(5, 7)}/${dateIII.substring(8, 11)}</span>
                                    <span class="date">夜晚</span>
                                    <span class="date">${keyWord.weatherElement[8].time[6].elementValue[0].value}&degC ~ ${keyWord.weatherElement[12].time[6].elementValue[0].value}&degC</span>
                                    <span class="date">降雨機率</span>
                                    <span class="date">${keyWord.weatherElement[0].time[6].elementValue[0].value}%</span>
                                </div>
                            </div>
                        </div>
                        <div class="row my-3 no-gutters">
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentFort-in">
                                    <span class="date">${dateIV.substring(5, 7)}/${dateIV.substring(8, 11)}</span>
                                    <span class="date">白天</span>
                                    <span class="date">${keyWord.weatherElement[8].time[7].elementValue[0].value}&degC ~ ${keyWord.weatherElement[12].time[7].elementValue[0].value}&degC</span>
                                    <span class="date">降雨機率</span>
                                    <span class="date">${keyWord.weatherElement[0].time[7].elementValue[0].value}%</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentFort-in">
                                    <span class="date">${dateIV.substring(5, 7)}/${dateIV.substring(8, 11)}</span>
                                    <span class="date">夜晚</span>
                                    <span class="date">${keyWord.weatherElement[8].time[8].elementValue[0].value}&degC ~ ${keyWord.weatherElement[12].time[8].elementValue[0].value}&degC</span>
                                    <span class="date">降雨機率</span>
                                    <span class="date">${keyWord.weatherElement[0].time[8].elementValue[0].value}%</span>
                                </div>
                            </div>
                        </div>
                        <div class="row my-3 no-gutters">
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentFvt-in">
                                    <span class="date">${dateV.substring(5, 7)}/${dateV.substring(8, 11)}</span>
                                    <span class="date">白天</span>
                                    <span class="date">${keyWord.weatherElement[8].time[9].elementValue[0].value}&degC ~ ${keyWord.weatherElement[12].time[9].elementValue[0].value}&degC</span>
                                    <span class="date">降雨機率</span>
                                    <span class="date">${keyWord.weatherElement[0].time[9].elementValue[0].value}%</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentFvt-in">
                                    <span class="date">${dateV.substring(5, 7)}/${dateV.substring(8, 11)}</span>
                                    <span class="date">夜晚</span>
                                    <span class="date">${keyWord.weatherElement[8].time[10].elementValue[0].value}&degC ~ ${keyWord.weatherElement[12].time[10].elementValue[0].value}&degC</span>
                                    <span class="date">降雨機率</span>
                                    <span class="date">${keyWord.weatherElement[0].time[10].elementValue[0].value}%</span>
                                </div>
                            </div>
                        </div>
                        <div class="row my-3 no-gutters">
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentSxt-in">
                                    <span class="date">${dateVI.substring(5, 7)}/${dateVI.substring(8, 11)}</span>
                                    <span class="date">白天</span>
                                    <span class="date">${keyWord.weatherElement[8].time[11].elementValue[0].value}&degC ~ ${keyWord.weatherElement[12].time[11].elementValue[0].value}&degC</span>
                                    <span class="date">降雨機率</span>
                                    <span class="date">${keyWord.weatherElement[0].time[11].elementValue[0].value}%</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentSxt-in">
                                    <span class="date">${dateVI.substring(5, 7)}/${dateVI.substring(8, 11)}</span>
                                    <span class="date">夜晚</span>
                                    <span class="date">${keyWord.weatherElement[8].time[12].elementValue[0].value}&degC ~ ${keyWord.weatherElement[12].time[12].elementValue[0].value}&degC</span>
                                    <span class="date">降雨機率</span>
                                    <span class="date">${keyWord.weatherElement[0].time[12].elementValue[0].value}%</span>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-3 no-gutters">
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentSvt-in">
                                    <span class="date">${dateVII.substring(5, 7)}/${dateVII.substring(8, 11)}</span>
                                    <span class="date">白天</span>
                                    <span class="date">${keyWord.weatherElement[8].time[13].elementValue[0].value}&degC ~ ${keyWord.weatherElement[12].time[13].elementValue[0].value}&degC</span>
                                    <span class="date">降雨機率</span>
                                    <span class="date">${keyWord.weatherElement[0].time[13].elementValue[0].value}%</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentSvt-in">
                                    <span class="date">${dateVII.substring(5, 7)}/${dateVII.substring(8, 11)}</span>
                                    <span class="date">夜晚</span>
                                    <span class="date">${keyWord.weatherElement[8].time[14].elementValue[0].value}&degC ~ ${keyWord.weatherElement[12].time[14].elementValue[0].value}&degC</span>
                                    <span class="date">降雨機率</span>
                                    <span class="date">${keyWord.weatherElement[0].time[14].elementValue[0].value}%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `
        }
    })
}

function allBlock() {
    document.querySelector('.footer').classList.toggle('footer-active')
    document.querySelector('.sidebar').classList.toggle('sidebar-hide')
    document.querySelector('.clock').classList.toggle('clock-change')
    document.querySelector('.control').classList.toggle('control-change')
    document.querySelector('.bg-text').classList.toggle('bg-text-change')
    switch (this.textContent) {
        case '北部':
            select.classList.add('select-toggle')
            document.querySelector('.back').classList.add('back-toggle')
            document.querySelector('.back').textContent = '查詢其它區域或縣市'
            document.querySelector('.location').classList.add('weather-title-in')
            document.querySelector('.location').classList.remove('weather-title-out')
            document.querySelector('.sidebar').classList.remove('sidebar-active')
            document.querySelector('.sidebar-icon').classList.remove('sidebar-icon-active')
            document.querySelector('.location').textContent = '北部'
            document.querySelector('.text-in').innerHTML =
                `
                    <div class="col-11">
                        <span class="tomorrow-day tomorrow-day-in my-3">明日天氣</span>
                        <div class="row mb-3 no-gutters">
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentFt-in">
                                    <span class="date">${allDatas[5].locationName}</span>
                                    <div class="row my-2">
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">白天</span>
                                                <span class="date">${allDatas[5].weatherElement[8].time[0].elementValue[0].value}&degC ~ ${allDatas[5].weatherElement[12].time[0].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[5].weatherElement[8].time[1].elementValue[0].value}&degC ~ ${allDatas[5].weatherElement[12].time[1].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span class="date">降雨機率</span>
                                    <div class="row my-2">
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">白天</span>
                                                <span class="date">${allDatas[5].weatherElement[0].time[2].elementValue[0].value}%</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[5].weatherElement[0].time[3].elementValue[0].value}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentFt-in">
                                    <span class="date">${allDatas[16].locationName}</span>
                                    <div class="row my-2">
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">白天</span>
                                                <span class="date">${allDatas[16].weatherElement[8].time[0].elementValue[0].value}&degC ~ ${allDatas[16].weatherElement[12].time[0].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[16].weatherElement[8].time[1].elementValue[0].value}&degC ~ ${allDatas[16].weatherElement[12].time[1].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span class="date">降雨機率</span>
                                    <div class="row my-2">
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">白天</span>
                                                <span class="date">${allDatas[16].weatherElement[0].time[2].elementValue[0].value}%</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[16].weatherElement[0].time[3].elementValue[0].value}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-3 no-gutters">
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentSd-in">
                                    <span class="date">${allDatas[15].locationName}</span>
                                    <div class="row my-2">
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">白天</span>
                                                <span class="date">${allDatas[15].weatherElement[8].time[0].elementValue[0].value}&degC ~ ${allDatas[15].weatherElement[12].time[0].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[15].weatherElement[8].time[1].elementValue[0].value}&degC ~ ${allDatas[15].weatherElement[12].time[1].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span class="date">降雨機率</span>
                                    <div class="row my-2">
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">白天</span>
                                                <span class="date">${allDatas[15].weatherElement[0].time[2].elementValue[0].value}%</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[15].weatherElement[0].time[3].elementValue[0].value}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentSd-in">
                                    <span class="date">${allDatas[9].locationName}</span>
                                    <div class="row my-2">
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">白天</span>
                                                <span class="date">${allDatas[9].weatherElement[8].time[0].elementValue[0].value}&degC ~ ${allDatas[9].weatherElement[12].time[0].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[9].weatherElement[8].time[1].elementValue[0].value}&degC ~ ${allDatas[9].weatherElement[12].time[1].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span class="date">降雨機率</span>
                                    <div class="row my-2">
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">白天</span>
                                                <span class="date">${allDatas[9].weatherElement[0].time[2].elementValue[0].value}%</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[9].weatherElement[0].time[3].elementValue[0].value}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-3 no-gutters">
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentTd-in">
                                    <span class="date">${allDatas[19].locationName}</span>
                                    <div class="row my-2">
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">白天</span>
                                                <span class="date">${allDatas[19].weatherElement[8].time[0].elementValue[0].value}&degC ~ ${allDatas[19].weatherElement[12].time[0].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[19].weatherElement[8].time[1].elementValue[0].value}&degC ~ ${allDatas[19].weatherElement[12].time[1].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span class="date">降雨機率</span>
                                    <div class="row my-2">
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">白天</span>
                                                <span class="date">${allDatas[19].weatherElement[0].time[2].elementValue[0].value}%</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[19].weatherElement[0].time[3].elementValue[0].value}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentTd-in">
                                    <span class="date">${allDatas[10].locationName}</span>
                                    <div class="row my-2">
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">白天</span>
                                                <span class="date">${allDatas[10].weatherElement[8].time[0].elementValue[0].value}&degC ~ ${allDatas[10].weatherElement[12].time[0].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[10].weatherElement[8].time[1].elementValue[0].value}&degC ~ ${allDatas[10].weatherElement[12].time[1].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span class="date">降雨機率</span>
                                    <div class="row my-2">
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">白天</span>
                                                <span class="date">${allDatas[10].weatherElement[0].time[2].elementValue[0].value}%</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[10].weatherElement[0].time[3].elementValue[0].value}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-3 no-gutters">
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentFort-in">
                                    <span class="date">${allDatas[14].locationName}</span>
                                    <div class="row my-2">
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">白天</span>
                                                <span class="date">${allDatas[14].weatherElement[8].time[0].elementValue[0].value}&degC ~ ${allDatas[14].weatherElement[12].time[0].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[14].weatherElement[8].time[1].elementValue[0].value}&degC ~ ${allDatas[14].weatherElement[12].time[1].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span class="date">降雨機率</span>
                                    <div class="row my-2">
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">白天</span>
                                                <span class="date">${allDatas[14].weatherElement[0].time[2].elementValue[0].value}%</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[14].weatherElement[0].time[3].elementValue[0].value}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentFort-in">
                                    <span class="date">${allDatas[7].locationName}</span>
                                    <div class="row my-2">
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">白天</span>
                                                <span class="date">${allDatas[7].weatherElement[8].time[0].elementValue[0].value}&degC ~ ${allDatas[7].weatherElement[12].time[0].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[7].weatherElement[8].time[1].elementValue[0].value}&degC ~ ${allDatas[7].weatherElement[12].time[1].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span class="date">降雨機率</span>
                                    <div class="row my-2">
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">白天</span>
                                                <span class="date">${allDatas[7].weatherElement[0].time[2].elementValue[0].value}%</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[7].weatherElement[0].time[3].elementValue[0].value}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            break
        case '中部':
            select.classList.add('select-toggle')
            document.querySelector('.back').classList.add('back-toggle')
            document.querySelector('.back').textContent = '查詢其它區域或縣市'
            document.querySelector('.location').classList.add('weather-title-in')
            document.querySelector('.location').classList.remove('weather-title-out')
            document.querySelector('.sidebar').classList.remove('sidebar-active')
            document.querySelector('.sidebar-icon').classList.remove('sidebar-icon-active')
            document.querySelector('.location').textContent = '中部'
            document.querySelector('.text-in').innerHTML =
                `
                    <div class="col-11">
                    <span class="tomorrow-day tomorrow-day-in my-3">明日天氣</span>
                        <div class="row mb-3 no-gutters">
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentFt-in">
                                    <span class="date">${allDatas[17].locationName}</span>
                                    <div class="row my-2">
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">白天</span>
                                                <span class="date">${allDatas[17].weatherElement[8].time[0].elementValue[0].value}&degC ~ ${allDatas[17].weatherElement[12].time[0].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[17].weatherElement[8].time[1].elementValue[0].value}&degC ~ ${allDatas[17].weatherElement[12].time[1].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span class="date">降雨機率</span>
                                    <div class="row my-2">
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">白天</span>
                                                <span class="date">${allDatas[17].weatherElement[0].time[2].elementValue[0].value}%</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[17].weatherElement[0].time[3].elementValue[0].value}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentFt-in">
                                    <span class="date">${allDatas[13].locationName}</span>
                                    <div class="row my-2">
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">白天</span>
                                                <span class="date">${allDatas[13].weatherElement[8].time[0].elementValue[0].value}&degC ~ ${allDatas[13].weatherElement[12].time[0].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[13].weatherElement[8].time[1].elementValue[0].value}&degC ~ ${allDatas[13].weatherElement[12].time[1].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span class="date">降雨機率</span>
                                    <div class="row my-2">
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">白天</span>
                                                <span class="date">${allDatas[13].weatherElement[0].time[2].elementValue[0].value}%</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[13].weatherElement[0].time[3].elementValue[0].value}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-3 no-gutters">
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentSd-in">
                                    <span class="date">${allDatas[0].locationName}</span>
                                    <div class="row my-2">
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">白天</span>
                                                <span class="date">${allDatas[0].weatherElement[8].time[0].elementValue[0].value}&degC ~ ${allDatas[0].weatherElement[12].time[0].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[0].weatherElement[8].time[1].elementValue[0].value}&degC ~ ${allDatas[0].weatherElement[12].time[1].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span class="date">降雨機率</span>
                                    <div class="row my-2">
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">白天</span>
                                                <span class="date">${allDatas[0].weatherElement[0].time[2].elementValue[0].value}%</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[0].weatherElement[0].time[3].elementValue[0].value}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentSd-in">
                                    <span class="date">${allDatas[1].locationName}</span>
                                    <div class="row my-2">
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">白天</span>
                                                <span class="date">${allDatas[1].weatherElement[8].time[0].elementValue[0].value}&degC ~ ${allDatas[1].weatherElement[12].time[0].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[1].weatherElement[8].time[1].elementValue[0].value}&degC ~ ${allDatas[1].weatherElement[12].time[1].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span class="date">降雨機率</span>
                                    <div class="row my-2">
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">白天</span>
                                                <span class="date">${allDatas[1].weatherElement[0].time[2].elementValue[0].value}%</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[1].weatherElement[0].time[3].elementValue[0].value}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            break
        case '南部':
            select.classList.add('select-toggle')
            document.querySelector('.back').classList.add('back-toggle')
            document.querySelector('.back').textContent = '查詢其它區域或縣市'
            document.querySelector('.location').classList.add('weather-title-in')
            document.querySelector('.location').classList.remove('weather-title-out')
            document.querySelector('.sidebar').classList.remove('sidebar-active')
            document.querySelector('.sidebar-icon').classList.remove('sidebar-icon-active')
            document.querySelector('.location').textContent = '南部'
            document.querySelector('.text-in').innerHTML =
                `
                    <div class="col-11">
                        <span class="tomorrow-day my-3">明日天氣</span>
                        <div class="row mb-3 no-gutters">
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentFt-in">
                                    <span class="date">${allDatas[20].locationName}</span>
                                    <div class="row my-2">
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">白天</span>
                                                <span class="date">${allDatas[20].weatherElement[8].time[0].elementValue[0].value}&degC ~ ${allDatas[20].weatherElement[12].time[0].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[20].weatherElement[8].time[1].elementValue[0].value}&degC ~ ${allDatas[20].weatherElement[12].time[1].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span class="date">降雨機率</span>
                                    <div class="row my-2">
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">白天</span>
                                                <span class="date">${allDatas[20].weatherElement[0].time[2].elementValue[0].value}%</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[20].weatherElement[0].time[3].elementValue[0].value}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentFt-in">
                                    <span class="date">${allDatas[21].locationName}</span>
                                    <div class="row my-2">
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">白天</span>
                                                <span class="date">${allDatas[21].weatherElement[8].time[0].elementValue[0].value}&degC ~ ${allDatas[21].weatherElement[12].time[0].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[21].weatherElement[8].time[1].elementValue[0].value}&degC ~ ${allDatas[21].weatherElement[12].time[1].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span class="date">降雨機率</span>
                                    <div class="row my-2">
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">白天</span>
                                                <span class="date">${allDatas[21].weatherElement[0].time[2].elementValue[0].value}%</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[21].weatherElement[0].time[3].elementValue[0].value}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-3 no-gutters">
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentSd-in">
                                    <span class="date">${allDatas[18].locationName}</span>
                                    <div class="row my-2">
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">白天</span>
                                                <span class="date">${allDatas[18].weatherElement[8].time[0].elementValue[0].value}&degC ~ ${allDatas[18].weatherElement[12].time[0].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[18].weatherElement[8].time[1].elementValue[0].value}&degC ~ ${allDatas[18].weatherElement[12].time[1].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span class="date">降雨機率</span>
                                    <div class="row my-2">
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">白天</span>
                                                <span class="date">${allDatas[18].weatherElement[0].time[2].elementValue[0].value}%</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[18].weatherElement[0].time[3].elementValue[0].value}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentSd-in">
                                    <span class="date">${allDatas[12].locationName}</span>
                                    <div class="row my-2">
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">白天</span>
                                                <span class="date">${allDatas[12].weatherElement[8].time[0].elementValue[0].value}&degC ~ ${allDatas[12].weatherElement[12].time[0].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[12].weatherElement[8].time[1].elementValue[0].value}&degC ~ ${allDatas[12].weatherElement[12].time[1].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span class="date">降雨機率</span>
                                    <div class="row my-2">
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">白天</span>
                                                <span class="date">${allDatas[12].weatherElement[0].time[2].elementValue[0].value}%</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[12].weatherElement[0].time[3].elementValue[0].value}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-3 no-gutters">
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentTd-in">
                                    <span class="date">${allDatas[6].locationName}</span>
                                    <div class="row my-2">
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">白天</span>
                                                <span class="date">${allDatas[6].weatherElement[8].time[0].elementValue[0].value}&degC ~ ${allDatas[6].weatherElement[12].time[0].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[6].weatherElement[8].time[1].elementValue[0].value}&degC ~ ${allDatas[6].weatherElement[12].time[1].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span class="date">降雨機率</span>
                                    <div class="row my-2">
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">白天</span>
                                                <span class="date">${allDatas[6].weatherElement[0].time[2].elementValue[0].value}%</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[6].weatherElement[0].time[3].elementValue[0].value}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            break
        case '東部':
            select.classList.add('select-toggle')
            document.querySelector('.back').classList.add('back-toggle')
            document.querySelector('.back').textContent = '查詢其它區域或縣市'
            document.querySelector('.location').classList.add('weather-title-in')
            document.querySelector('.location').classList.remove('weather-title-out')
            document.querySelector('.sidebar').classList.remove('sidebar-active')
            document.querySelector('.sidebar-icon').classList.remove('sidebar-icon-active')
            document.querySelector('.location').textContent = '東部'
            document.querySelector('.text-in').innerHTML =
                `
                    <div class="col-11">
                        <span class="tomorrow-day tomorrow-day-in my-3">明日天氣</span>
                        <div class="row mb-3 no-gutters">
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentFt-in">
                                    <span class="date">${allDatas[11].locationName}</span>
                                    <div class="row my-2">
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">白天</span>
                                                <span class="date">${allDatas[11].weatherElement[8].time[0].elementValue[0].value}&degC ~ ${allDatas[11].weatherElement[12].time[0].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[11].weatherElement[8].time[1].elementValue[0].value}&degC ~ ${allDatas[11].weatherElement[12].time[1].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span class="date">降雨機率</span>
                                    <div class="row my-2">
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">白天</span>
                                                <span class="date">${allDatas[11].weatherElement[0].time[2].elementValue[0].value}%</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[11].weatherElement[0].time[3].elementValue[0].value}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentFt-in">
                                    <span class="date">${allDatas[3].locationName}</span>
                                    <div class="row my-2">
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">白天</span>
                                                <span class="date">${allDatas[3].weatherElement[8].time[0].elementValue[0].value}&degC ~ ${allDatas[3].weatherElement[12].time[0].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[3].weatherElement[8].time[1].elementValue[0].value}&degC ~ ${allDatas[3].weatherElement[12].time[1].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span class="date">降雨機率</span>
                                    <div class="row my-2">
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">白天</span>
                                                <span class="date">${allDatas[3].weatherElement[0].time[2].elementValue[0].value}%</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[3].weatherElement[0].time[3].elementValue[0].value}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            break
        case '外島':
            select.classList.add('select-toggle')
            document.querySelector('.back').classList.add('back-toggle')
            document.querySelector('.back').textContent = '查詢其它區域或縣市'
            document.querySelector('.location').classList.add('weather-title-in')
            document.querySelector('.location').classList.remove('weather-title-out')
            document.querySelector('.sidebar').classList.remove('sidebar-active')
            document.querySelector('.sidebar-icon').classList.remove('sidebar-icon-active')
            document.querySelector('.location').textContent = '外島'
            document.querySelector('.text-in').innerHTML =
                `
                    <div class="col-11">
                        <span class="tomorrow-day tomorrow-day-in my-3">明日天氣</span>
                        <div class="row mb-3 no-gutters">
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentFt-in">
                                    <span class="date">${allDatas[2].locationName}</span>
                                    <div class="row my-2">
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">白天</span>
                                                <span class="date">${allDatas[2].weatherElement[8].time[0].elementValue[0].value}&degC ~ ${allDatas[2].weatherElement[12].time[0].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[2].weatherElement[8].time[1].elementValue[0].value}&degC ~ ${allDatas[2].weatherElement[12].time[1].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span class="date">降雨機率</span>
                                    <div class="row my-2">
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">白天</span>
                                                <span class="date">${allDatas[2].weatherElement[0].time[2].elementValue[0].value}%</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[2].weatherElement[0].time[3].elementValue[0].value}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentFt-in">
                                    <span class="date">${allDatas[4].locationName}</span>
                                    <div class="row my-2">
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">白天</span>
                                                <span class="date">${allDatas[4].weatherElement[8].time[0].elementValue[0].value}&degC ~ ${allDatas[4].weatherElement[12].time[0].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[4].weatherElement[8].time[1].elementValue[0].value}&degC ~ ${allDatas[4].weatherElement[12].time[1].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span class="date">降雨機率</span>
                                    <div class="row my-2">
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">白天</span>
                                                <span class="date">${allDatas[4].weatherElement[0].time[2].elementValue[0].value}%</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[4].weatherElement[0].time[3].elementValue[0].value}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-3 no-gutters">
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentSd-in">
                                    <span class="date">${allDatas[8].locationName}</span>
                                    <div class="row my-2">
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">白天</span>
                                                <span class="date">${allDatas[8].weatherElement[8].time[0].elementValue[0].value}&degC ~ ${allDatas[8].weatherElement[12].time[0].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[8].weatherElement[8].time[1].elementValue[0].value}&degC ~ ${allDatas[8].weatherElement[12].time[1].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span class="date">降雨機率</span>
                                    <div class="row my-2">
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">白天</span>
                                                <span class="date">${allDatas[8].weatherElement[0].time[2].elementValue[0].value}%</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[8].weatherElement[0].time[3].elementValue[0].value}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            break
    }
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

function bgChange() {
    let times = document.querySelector('.clock').textContent.substring(13, 10)
    let timeText = parseInt(times)

    if (timeText >= 6 && timeText <= 17) {
        document.querySelector('.bg-text').textContent = 'Moring'
        document.querySelector('html').classList.remove('night')
        document.querySelector('html').classList.add('moring')
    } else {
        document.querySelector('.bg-text').textContent = 'Night'
        document.querySelector('html').classList.add('night')
        document.querySelector('html').classList.remove('moring')
        document.querySelector('.control').classList.toggle('control-active')
        document.querySelector('.control-point').classList.toggle('control-point-active')
    }
}

function time() {
    const date = new Date()
    let year = date.getFullYear()
    let month = (date.getMonth() + 1 < 10 ? '0' : '') + (date.getMonth() + 1)
    let dates = (date.getDate() < 10 ? '0' : '') + date.getDate()
    let hour = (date.getHours() < 10 ? '0' : '') + date.getHours()
    let minute = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()
    let seconds = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds()
    let text = `${year}/${month}/${dates} ${hour}：${minute}：${seconds}`
    document.querySelector('.clock').textContent = text
}
setInterval(time, 1)

setTimeout(bgChange, 1)

select.addEventListener('change', callAll)
document.querySelector('.control').addEventListener('click', () => {
    document.querySelector('.control').classList.toggle('control-active')
    document.querySelector('.control-point').classList.toggle('control-point-active')
    let bgText = document.querySelector('.bg-text')
    switch (bgText.textContent) {
        case 'Moring':
            bgText.textContent = 'Night'
            document.querySelector('html').classList.add('night')
            document.querySelector('html').classList.remove('moring')
            break
        case 'Night':
            bgText.textContent = 'Moring'
            document.querySelector('html').classList.remove('night')
            document.querySelector('html').classList.add('moring')
            break
    }
})
document.querySelectorAll('.weather').forEach(weather => {
    weather.addEventListener('click', content)
})
document.querySelector('.sidebar-icon').addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('sidebar-active')
    document.querySelector('.sidebar-icon').classList.toggle('sidebar-icon-active')
    document.querySelector('.sidebar-icon-outer').classList.add('sidebar-icon-active-trans')
    setTimeout(() => document.querySelector('.sidebar-icon-outer').classList.remove('sidebar-icon-active-trans'), 10000)
    document.querySelector('.sidebar-icon').classList.add('sidebar-arrow-trans')
    setTimeout(() => document.querySelector('.sidebar-icon').classList.remove('sidebar-arrow-trans'), 10000)
})
document.querySelectorAll('.sidebar-text').forEach(keyWord => keyWord.addEventListener('click', allBlock))
document.querySelector('.back').addEventListener('click', () => {
    document.querySelector('.back').classList.remove('back-toggle')
    document.querySelector('.now').classList.remove('now-in')
    document.querySelector('.tomorrow').classList.remove('tomorrow-in')
    document.querySelector('.week').classList.remove('week-in')
    document.querySelector('.now').classList.remove('btn-color')
    document.querySelector('.tomorrow').classList.remove('btn-color')
    document.querySelector('.week').classList.remove('btn-color')
    document.querySelector('.location').classList.add('weather-title-out')
    document.querySelector('.location').classList.remove('weather-title-in')
    document.querySelectorAll('.week-board').forEach(animate => animate.classList.add('weather-week-content-out'))
    document.querySelectorAll('.board').forEach(animate => animate.classList.add('weather-content-out'))
    document.querySelectorAll('.tomorrow-day').forEach(animate => animate.classList.add('tomorrow-day-out'))
    document.querySelector('.footer').classList.toggle('footer-active')
    document.querySelector('.clock').classList.toggle('clock-change')
    document.querySelector('.control').classList.toggle('control-change')
    document.querySelector('.bg-text').classList.toggle('bg-text-change')
    document.querySelector('.sidebar').classList.toggle('sidebar-hide')
    scrolls()
    setTimeout(() => document.querySelector('.text-in').textContent = '', 2000)
    setTimeout(() => select.classList.remove('select-toggle'), 1000)
})
document.querySelector('.top').addEventListener('click', scrolls)

window.addEventListener('scroll', () => {
    let height = document.documentElement.scrollTop || document.body.scrollTop;
    if (height > 28) {
        document.querySelector('.header').classList.remove('header-active')
    } else {
        document.querySelector('.header').classList.add('header-active')
    }

    if (height > 200) {
        document.querySelector('.top').classList.add('top-active')
    } else {
        document.querySelector('.top').classList.remove('top-active')
    }
})

window.addEventListener('load', () => {
    document.querySelector('.header').classList.add('header-active')
    setTimeout(() => {
        document.querySelector('.control').classList.add('control-in')
        document.querySelector('.bg-text').classList.add('bg-text-in')
    }, 1000)
    setTimeout(() => document.querySelector('.clock').classList.add('clock-in'), 2000)
    setTimeout(() => document.querySelector('.in-title').classList.add('in-title-in'), 1000)
    setTimeout(() => document.querySelector('.in-title').classList.remove('in-title-in'), 1000)
    setTimeout(() => document.querySelector('.text-in').innerHTML = `<span class="loading loading-in"><i class="fal fa-circle-notch loading-icon fa-2x"></i></i><br>Loading</span>`, 2000)
    setTimeout(() => {
        document.querySelector('.loading').classList.remove('loading-in')
        document.querySelector('.loading').classList.add('loading-out')
    }, 6000)
    setTimeout(() => document.querySelector('.footer').classList.add('footer-in'), 3000)
    setTimeout(() => select.classList.add('select-in'), 7000)
})