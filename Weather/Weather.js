const xhr = new XMLHttpRequest();
const select = document.querySelector('.select')
let jsonData;
let allDatas;

// 抓取氣象站資料
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

// 將各縣市名稱導入選單中資料，並透過 allDatas 將陣列中的値存起來，以便外部使用
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

// 點選對應城市時觸發 today 函式，並套用各版面載入動畫
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

// 點選 navbar 中的文字，當點擊文字與 case 內文字相同時載入不同內容涵式
function content() {
    switch (this.textContent) {
        case '目前天氣':
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

// 設定 today 函式內容
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
                                    <span class="text-center">目前氣溫</span>
                                    <p class="mb-0 my-2 text-center">${keyWord.weatherElement[8].time[0].elementValue[0].value}&degC ~ ${keyWord.weatherElement[12].time[0].elementValue[0].value}&degC</p>
                                    <p class="mb-0 text-center">舒適度：${keyWord.weatherElement[3].time[0].elementValue[0].value} ~ ${keyWord.weatherElement[7].time[0].elementValue[0].value}</p> 
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="board mx-1 weather-contentSd-in">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <span class="text-center">目前降雨機率</span>
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
                                    <p class="mt-2 mb-3 text-center">目前均溫：${keyWord.weatherElement[1].time[0].elementValue[0].value}&degC</p>
                                    <p class="my-4 text-center">紫外線：${keyWord.weatherElement[9].time[0].elementValue[0].value}&nbsp${keyWord.weatherElement[9].time[0].elementValue[1].value}</p>
                                    <p class="my-4 text-center">體感溫度：${keyWord.weatherElement[11].time[0].elementValue[0].value}&degC ~ ${keyWord.weatherElement[5].time[0].elementValue[0].value}&degC</p>
                                    <p class="mt-3 mb-2 text-center">濕度：${keyWord.weatherElement[2].time[0].elementValue[0].value}%</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="board mx-1 weather-contentFort-in">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <span class="text-center">目前天氣概況</span>
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

// 設定 tomorrow 函式內容
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

// 設定 week 函式內容
function week() {
    allDatas.forEach(keyWord => {
        if (select.value == keyWord.locationName) {
            let dateI = keyWord.weatherElement[0].time[2].startTime
            let dateII = keyWord.weatherElement[0].time[4].startTime
            let dateIII = keyWord.weatherElement[0].time[6].startTime
            let dateIV = keyWord.weatherElement[0].time[8].startTime
            let dateV = keyWord.weatherElement[0].time[10].startTime
            let dateVI = keyWord.weatherElement[0].time[12].startTime
            document.querySelector('.location').textContent = keyWord.locationName
            document.querySelector('.text-in').innerHTML =
                `
                    <div class="col-11">
                        <div class="row mb-3 no-gutters">
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentFt-in">
                                    <span class="date">${dateI.substring(5, 7)}/${dateI.substring(8, 11)}</span>
                                    <span class="date">白天</span>
                                    <span class="date">${keyWord.weatherElement[8].time[2].elementValue[0].value}&degC ~ ${keyWord.weatherElement[12].time[2].elementValue[0].value}&degC</span>
                                    <span class="date">降雨機率</span>
                                    <span class="date">${keyWord.weatherElement[0].time[2].elementValue[0].value}%</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentFt-in">
                                    <span class="date">${dateI.substring(5, 7)}/${dateI.substring(8, 11)}</span>
                                    <span class="date">夜晚</span>
                                    <span class="date">${keyWord.weatherElement[8].time[3].elementValue[0].value}&degC ~ ${keyWord.weatherElement[12].time[3].elementValue[0].value}&degC</span>
                                    <span class="date">降雨機率</span>
                                    <span class="date">${keyWord.weatherElement[0].time[3].elementValue[0].value}%</span>
                                </div>
                            </div>
                        </div>
                        <div class="row my-3 no-gutters">
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentSd-in">
                                    <span class="date">${dateII.substring(5, 7)}/${dateII.substring(8, 11)}</span>
                                    <span class="date">白天</span>
                                    <span class="date">${keyWord.weatherElement[8].time[4].elementValue[0].value}&degC ~ ${keyWord.weatherElement[12].time[4].elementValue[0].value}&degC</span>
                                    <span class="date">降雨機率</span>
                                    <span class="date">${keyWord.weatherElement[0].time[4].elementValue[0].value}%</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentSd-in">
                                    <span class="date">${dateII.substring(5, 7)}/${dateII.substring(8, 11)}</span>
                                    <span class="date">夜晚</span>
                                    <span class="date">${keyWord.weatherElement[8].time[5].elementValue[0].value}&degC ~ ${keyWord.weatherElement[12].time[5].elementValue[0].value}&degC</span>
                                    <span class="date">降雨機率</span>
                                    <span class="date">${keyWord.weatherElement[0].time[5].elementValue[0].value}%</span>
                                </div>
                            </div>
                        </div>
                        <div class="row my-3 no-gutters">
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentTd-in">
                                    <span class="date">${dateIII.substring(5, 7)}/${dateIII.substring(8, 11)}</span>
                                    <span class="date">白天</span>
                                    <span class="date">${keyWord.weatherElement[8].time[6].elementValue[0].value}&degC ~ ${keyWord.weatherElement[12].time[6].elementValue[0].value}&degC</span>
                                    <span class="date">降雨機率</span>
                                    <span class="date">${keyWord.weatherElement[0].time[6].elementValue[0].value}%</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentTd-in">
                                    <span class="date">${dateIII.substring(5, 7)}/${dateIII.substring(8, 11)}</span>
                                    <span class="date">夜晚</span>
                                    <span class="date">${keyWord.weatherElement[8].time[7].elementValue[0].value}&degC ~ ${keyWord.weatherElement[12].time[7].elementValue[0].value}&degC</span>
                                    <span class="date">降雨機率</span>
                                    <span class="date">${keyWord.weatherElement[0].time[7].elementValue[0].value}%</span>
                                </div>
                            </div>
                        </div>
                        <div class="row my-3 no-gutters">
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentFort-in">
                                    <span class="date">${dateIV.substring(5, 7)}/${dateIV.substring(8, 11)}</span>
                                    <span class="date">白天</span>
                                    <span class="date">${keyWord.weatherElement[8].time[8].elementValue[0].value}&degC ~ ${keyWord.weatherElement[12].time[8].elementValue[0].value}&degC</span>
                                    <span class="date">降雨機率</span>
                                    <span class="date">${keyWord.weatherElement[0].time[8].elementValue[0].value}%</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentFort-in">
                                    <span class="date">${dateIV.substring(5, 7)}/${dateIV.substring(8, 11)}</span>
                                    <span class="date">夜晚</span>
                                    <span class="date">${keyWord.weatherElement[8].time[9].elementValue[0].value}&degC ~ ${keyWord.weatherElement[12].time[9].elementValue[0].value}&degC</span>
                                    <span class="date">降雨機率</span>
                                    <span class="date">${keyWord.weatherElement[0].time[9].elementValue[0].value}%</span>
                                </div>
                            </div>
                        </div>
                        <div class="row my-3 no-gutters">
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentFvt-in">
                                    <span class="date">${dateV.substring(5, 7)}/${dateV.substring(8, 11)}</span>
                                    <span class="date">白天</span>
                                    <span class="date">${keyWord.weatherElement[8].time[10].elementValue[0].value}&degC ~ ${keyWord.weatherElement[12].time[10].elementValue[0].value}&degC</span>
                                    <span class="date">降雨機率</span>
                                    <span class="date">${keyWord.weatherElement[0].time[10].elementValue[0].value}%</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentFvt-in">
                                    <span class="date">${dateV.substring(5, 7)}/${dateV.substring(8, 11)}</span>
                                    <span class="date">夜晚</span>
                                    <span class="date">${keyWord.weatherElement[8].time[11].elementValue[0].value}&degC ~ ${keyWord.weatherElement[12].time[11].elementValue[0].value}&degC</span>
                                    <span class="date">降雨機率</span>
                                    <span class="date">${keyWord.weatherElement[0].time[11].elementValue[0].value}%</span>
                                </div>
                            </div>
                        </div>
                        <div class="row my-3 no-gutters">
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentSxt-in">
                                    <span class="date">${dateVI.substring(5, 7)}/${dateVI.substring(8, 11)}</span>
                                    <span class="date">白天</span>
                                    <span class="date">${keyWord.weatherElement[8].time[12].elementValue[0].value}&degC ~ ${keyWord.weatherElement[12].time[12].elementValue[0].value}&degC</span>
                                    <span class="date">降雨機率</span>
                                    <span class="date">${keyWord.weatherElement[0].time[12].elementValue[0].value}%</span>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentSxt-in">
                                    <span class="date">${dateVI.substring(5, 7)}/${dateVI.substring(8, 11)}</span>
                                    <span class="date">夜晚</span>
                                    <span class="date">${keyWord.weatherElement[8].time[13].elementValue[0].value}&degC ~ ${keyWord.weatherElement[12].time[13].elementValue[0].value}&degC</span>
                                    <span class="date">降雨機率</span>
                                    <span class="date">${keyWord.weatherElement[0].time[13].elementValue[0].value}%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `
        }
    })
}

// 右側 sidebar 內容，當點擊文字與 case 內文字相同時載入不同內容
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
                                                <span class="date">${allDatas[5].weatherElement[8].time[2].elementValue[0].value}&degC ~ ${allDatas[5].weatherElement[12].time[2].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[5].weatherElement[8].time[3].elementValue[0].value}&degC ~ ${allDatas[5].weatherElement[12].time[3].elementValue[0].value}&degC</span>
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
                                                <span class="date">${allDatas[16].weatherElement[8].time[2].elementValue[0].value}&degC ~ ${allDatas[16].weatherElement[12].time[2].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[16].weatherElement[8].time[3].elementValue[0].value}&degC ~ ${allDatas[16].weatherElement[12].time[3].elementValue[0].value}&degC</span>
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
                                                <span class="date">${allDatas[15].weatherElement[8].time[2].elementValue[0].value}&degC ~ ${allDatas[15].weatherElement[12].time[2].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[15].weatherElement[8].time[3].elementValue[0].value}&degC ~ ${allDatas[15].weatherElement[12].time[3].elementValue[0].value}&degC</span>
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
                                                <span class="date">${allDatas[9].weatherElement[8].time[2].elementValue[0].value}&degC ~ ${allDatas[9].weatherElement[12].time[2].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[9].weatherElement[8].time[3].elementValue[0].value}&degC ~ ${allDatas[9].weatherElement[12].time[3].elementValue[0].value}&degC</span>
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
                                                <span class="date">${allDatas[19].weatherElement[8].time[2].elementValue[0].value}&degC ~ ${allDatas[19].weatherElement[12].time[2].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[19].weatherElement[8].time[3].elementValue[0].value}&degC ~ ${allDatas[19].weatherElement[12].time[3].elementValue[0].value}&degC</span>
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
                                                <span class="date">${allDatas[10].weatherElement[8].time[2].elementValue[0].value}&degC ~ ${allDatas[10].weatherElement[12].time[2].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[10].weatherElement[8].time[3].elementValue[0].value}&degC ~ ${allDatas[10].weatherElement[12].time[3].elementValue[0].value}&degC</span>
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
                                                <span class="date">${allDatas[14].weatherElement[8].time[2].elementValue[0].value}&degC ~ ${allDatas[14].weatherElement[12].time[2].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[14].weatherElement[8].time[3].elementValue[0].value}&degC ~ ${allDatas[14].weatherElement[12].time[3].elementValue[0].value}&degC</span>
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
                                                <span class="date">${allDatas[7].weatherElement[8].time[2].elementValue[0].value}&degC ~ ${allDatas[7].weatherElement[12].time[2].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[7].weatherElement[8].time[3].elementValue[0].value}&degC ~ ${allDatas[7].weatherElement[12].time[3].elementValue[0].value}&degC</span>
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
                                                <span class="date">${allDatas[17].weatherElement[8].time[2].elementValue[0].value}&degC ~ ${allDatas[17].weatherElement[12].time[2].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[17].weatherElement[8].time[3].elementValue[0].value}&degC ~ ${allDatas[17].weatherElement[12].time[3].elementValue[0].value}&degC</span>
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
                                                <span class="date">${allDatas[13].weatherElement[8].time[2].elementValue[0].value}&degC ~ ${allDatas[13].weatherElement[12].time[2].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[13].weatherElement[8].time[3].elementValue[0].value}&degC ~ ${allDatas[13].weatherElement[12].time[3].elementValue[0].value}&degC</span>
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
                                                <span class="date">${allDatas[0].weatherElement[8].time[2].elementValue[0].value}&degC ~ ${allDatas[0].weatherElement[12].time[2].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[0].weatherElement[8].time[3].elementValue[0].value}&degC ~ ${allDatas[0].weatherElement[12].time[3].elementValue[0].value}&degC</span>
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
                                                <span class="date">${allDatas[1].weatherElement[8].time[2].elementValue[0].value}&degC ~ ${allDatas[1].weatherElement[12].time[2].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[1].weatherElement[8].time[3].elementValue[0].value}&degC ~ ${allDatas[1].weatherElement[12].time[3].elementValue[0].value}&degC</span>
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
                        <span class="tomorrow-day tomorrow-day-in my-3">明日天氣</span>
                        <div class="row mb-3 no-gutters">
                            <div class="col-md-6">
                                <div class="week-board mx-1 weather-week-contentFt-in">
                                    <span class="date">${allDatas[20].locationName}</span>
                                    <div class="row my-2">
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">白天</span>
                                                <span class="date">${allDatas[20].weatherElement[8].time[2].elementValue[0].value}&degC ~ ${allDatas[20].weatherElement[12].time[2].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[20].weatherElement[8].time[3].elementValue[0].value}&degC ~ ${allDatas[20].weatherElement[12].time[3].elementValue[0].value}&degC</span>
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
                                                <span class="date">${allDatas[21].weatherElement[8].time[2].elementValue[0].value}&degC ~ ${allDatas[21].weatherElement[12].time[2].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[21].weatherElement[8].time[3].elementValue[0].value}&degC ~ ${allDatas[21].weatherElement[12].time[3].elementValue[0].value}&degC</span>
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
                                                <span class="date">${allDatas[18].weatherElement[8].time[2].elementValue[0].value}&degC ~ ${allDatas[18].weatherElement[12].time[2].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[18].weatherElement[8].time[3].elementValue[0].value}&degC ~ ${allDatas[18].weatherElement[12].time[3].elementValue[0].value}&degC</span>
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
                                                <span class="date">${allDatas[12].weatherElement[8].time[2].elementValue[0].value}&degC ~ ${allDatas[12].weatherElement[12].time[2].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[12].weatherElement[8].time[3].elementValue[0].value}&degC ~ ${allDatas[12].weatherElement[12].time[3].elementValue[0].value}&degC</span>
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
                                                <span class="date">${allDatas[6].weatherElement[8].time[2].elementValue[0].value}&degC ~ ${allDatas[6].weatherElement[12].time[2].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[6].weatherElement[8].time[3].elementValue[0].value}&degC ~ ${allDatas[6].weatherElement[12].time[3].elementValue[0].value}&degC</span>
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
                                                <span class="date">${allDatas[11].weatherElement[8].time[2].elementValue[0].value}&degC ~ ${allDatas[11].weatherElement[12].time[2].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[11].weatherElement[8].time[3].elementValue[0].value}&degC ~ ${allDatas[11].weatherElement[12].time[3].elementValue[0].value}&degC</span>
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
                                                <span class="date">${allDatas[3].weatherElement[8].time[2].elementValue[0].value}&degC ~ ${allDatas[3].weatherElement[12].time[2].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[3].weatherElement[8].time[3].elementValue[0].value}&degC ~ ${allDatas[3].weatherElement[12].time[3].elementValue[0].value}&degC</span>
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
                                                <span class="date">${allDatas[2].weatherElement[8].time[2].elementValue[0].value}&degC ~ ${allDatas[2].weatherElement[12].time[2].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[2].weatherElement[8].time[3].elementValue[0].value}&degC ~ ${allDatas[2].weatherElement[12].time[3].elementValue[0].value}&degC</span>
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
                                                <span class="date">${allDatas[4].weatherElement[8].time[2].elementValue[0].value}&degC ~ ${allDatas[4].weatherElement[12].time[2].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[4].weatherElement[8].time[3].elementValue[0].value}&degC ~ ${allDatas[4].weatherElement[12].time[3].elementValue[0].value}&degC</span>
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
                                                <span class="date">${allDatas[8].weatherElement[8].time[2].elementValue[0].value}&degC ~ ${allDatas[8].weatherElement[12].time[2].elementValue[0].value}&degC</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="row justify-content-center">
                                                <span class="date mx-1">夜晚</span>
                                                <span class="date">${allDatas[8].weatherElement[8].time[3].elementValue[0].value}&degC ~ ${allDatas[8].weatherElement[12].time[3].elementValue[0].value}&degC</span>
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

// 設定點擊後慢速至頂內容
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
// 設定背景圖隨畫面時間不同更換背景圖
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

// 畫面時間內容設定
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

// 每秒刷新畫面時間文字
setInterval(time, 1)

// 頁面載入時同步讀取畫面時間，並觸發 bg Change 函式
setTimeout(bgChange, 1)

// 監聽選單內容，並觸發 callAll 函式
select.addEventListener('change', callAll)

// 監聽背景控制器內容，點擊式觸發函式內容並同步更換控制器左側文字
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

// 監聽 navbar 內容，點擊式觸發 content 函式
document.querySelectorAll('.weather').forEach(weather => {
    weather.addEventListener('click', content)
})

// 監聽 sidebar 圖形按鈕，點擊時觸發函式內容
document.querySelector('.sidebar-icon').addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('sidebar-active')
    document.querySelector('.sidebar-icon').classList.toggle('sidebar-icon-active')
    document.querySelector('.sidebar-icon-outer').classList.add('sidebar-icon-active-trans')
    setTimeout(() => document.querySelector('.sidebar-icon-outer').classList.remove('sidebar-icon-active-trans'), 10000)
    document.querySelector('.sidebar-icon').classList.add('sidebar-arrow-trans')
    setTimeout(() => document.querySelector('.sidebar-icon').classList.remove('sidebar-arrow-trans'), 10000)
})

// 監聽每個 sidebar 文字，點擊時觸發 allBlock 函式
document.querySelectorAll('.sidebar-text').forEach(keyWord => keyWord.addEventListener('click', allBlock))

// 監聽 back 按鈕，點擊時觸發函式內容
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

// 監聽 top 按鈕，點擊時觸發 scrolls 函式
document.querySelector('.top').addEventListener('click', scrolls)

// 監聽頁面滾動，當滾動到指定位置時觸發函式內容
window.addEventListener('scroll', () => {
    let height = document.documentElement.scrollTop || document.body.scrollTop;
    height > 28 ? document.querySelector('.header').classList.remove('header-active') : document.querySelector('.header').classList.add('header-active')
    height > 200 ? document.querySelector('.top').classList.add('top-active') : document.querySelector('.top').classList.remove('top-active')
})

// 監聽頁面載入，載入時觸發函式內容
window.addEventListener('load', () => {
    document.querySelector('.header').classList.add('header-active')
    setTimeout(() => {
        document.querySelector('.control').classList.add('control-in')
        document.querySelector('.bg-text').classList.add('bg-text-in')
    }, 1000)
    setTimeout(() => document.querySelector('.clock').classList.add('clock-in'), 2000)
    setTimeout(() => document.querySelector('.in-title').classList.add('in-title-in'), 1000)
    setTimeout(() => document.querySelector('.in-title').classList.remove('in-title-in'), 2000)
    setTimeout(() => document.querySelector('.text-in').innerHTML = `<span class="loading loading-in"><i class="fal fa-circle-notch loading-icon fa-2x"></i><i class="fal fa-circle-notch loading-icons"></i><br>Loading</span>`, 3000)
    setTimeout(() => {
        document.querySelector('.loading').classList.remove('loading-in')
        document.querySelector('.loading').classList.add('loading-out')
    }, 7000)
    setTimeout(() => document.querySelector('.footer').classList.add('footer-in'), 3000)
    setTimeout(() => select.classList.add('select-in'), 8000)
})