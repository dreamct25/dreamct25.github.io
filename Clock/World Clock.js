let selectTemp = []
let timer = undefined
let weekendTextItems = []

$.fetch({
    method:'get',
    url:'https://worldtimeapi.org/api/timezone',
    successFn:(data) => initalRightBarItem(data),
    errorFn:(err) => $.console('log',err)
})

const initalRightBarItem = data => {
    let areaBlock = []
    const filterColumnCondition = ['CET','CST6CDT','EET','EST','EST5EDT','Etc','HST','MET','MST','MST7MDT','PST8PDT','WET']
    
    $.each(data,item => 
        $.findIndexOfObj(areaBlock,items => items.area === item.split('/')[0]) === -1 && 
        !$.includes(filterColumnCondition,item.split('/')[0]) && 
        areaBlock.push({ area:item.split('/')[0],city:[] })
    )

    $.each(areaBlock,itemI => $.each(data,itemII => itemI.area === itemII.split('/')[0] && itemI.city.push(itemII)))

    const toggleBarBtnArrow = $.createDom('i',{ className:'fal fa-angle-up arrow-icon' })

    const toggleBarBtn = $.createDom('div',{
        className:'toggle-bar-btn',
        textContent:'Country',
        onclick:toggleBar.bind(this)
    })

    $(toggleBarBtn).appendDom(toggleBarBtnArrow)
    $('.select-group').appendDom(toggleBarBtn)

    $.each(areaBlock,({ area,city },indexI) => {
        const seletOuter = $.createDom('div',{ className:'select-outer' })
        const selectList = $.createDom('div',{ className:'select-list' })

        const areas = $.createDom('div',{ 
            className:'select-area',
            textContent:area,
            onclick:toggleOption.bind(this,indexI)
        })
        
        $.each(city,(item,indexII) => {
            const citys = $.createDom('div',{ 
                className:'options',
                textContent:item.split('/')[item.split('/').length - 1].replace(/_/g,' '),
                onclick:selectCity.bind(this,indexI,indexII,item)
            })
            $(selectList).appendDom(citys)
        })

        $(seletOuter).appendDom(areas)
        $(seletOuter).appendDom(selectList)
        $('.select-group').appendDom(seletOuter)
    })
}

const toggleBar = () => {
    const findClass = $('.select-group').attr('class')
    const props = $.indexOf(findClass,'active') === -1 ? 'addClass':'removeClass'
    $('.select-group')[props]('active')
    $('.arrow-icon')[props]('active')
    if(props === 'removeClass'){
        selectTemp = []
        $.each($('.select-list'),item => $(item)[props]('list-toggle'))
        $.each($('.options'),item => $(item)[props]('active'))
    }
}

const toggleOption = inIndex => {
    const pos = $.indexOf(selectTemp,inIndex)
    if(pos === -1){
        selectTemp = [...selectTemp,inIndex]
        $.each($('.select-list'),(item,index) => index === inIndex ? $(item).addClass('list-toggle') : $(item).removeClass('list-toggle'))
    }else{
        $.each(selectTemp,num => num === inIndex && $($('.select-list')[num]).removeClass('list-toggle'))
        selectTemp.splice(pos,1)
    }
}

const selectCity = (listIndex,optionIndex,path) => {
    $.each($('.options'),item => $(item).removeClass('active'))
    $($('.select-list')[listIndex]).child(optionIndex).addClass('active')

    $.fetch({
        method:'get',
        url:`https://worldtimeapi.org/api/timezone/${path}`,
        beforePost:()=> $('.loading-outer').addClass('active'),
        successFn:(data) => {
            timeSet(data.raw_offset,path.split('/')[path.split('/').length - 1].replace(/_/g,' '))
            setTimeout(() => $('.loading-outer').removeClass('active'),1500)
        },
        errorFn:(err) => $.console('log',err)
    })
}

// 設定 timeSet 函式
const timeSet = (areaTime = 8 * 60 * 60,city = 'Taipei') => {

    clearInterval(timer)

    timer = setInterval(() => {
        // 設定時間物件
        const [year,month,date,hour,minute,seconds] = new Date(+new Date() + (areaTime * 1000)).toJSON().replace(/T/g,'-').replace(/:/g,'-').split('.')[0].split('-')

        // 圓 360 度每分鐘 60 秒，每秒為 6 度 
        let secondsDeg = seconds * 6

        // 圓 360 度每分鐘 60 秒，每分鐘為 6 度 + 每分鐘 60 秒/每秒 6 度 = 12 度
        let minuteDeg = minute * 6 + seconds * 6 / 60

        // 圓 360 度每小時鐘 60 分鐘，每小時為 12 度 + 每小時 60 分鐘每分鐘 2 度 = 14 度
        let hourDeg = hour * 30 + minute * 30 / 60

        // 設定旋轉角度與軸心 icon 隨指針旋轉的每秒度數
        $('.seconds').styles('set','transform',`rotate(${secondsDeg}deg)`)
        $('.minute').styles('set','transform',`rotate(${minuteDeg}deg)`)
        $('.hour').styles('set','transform',`rotate(${hourDeg}deg)`)
        $('.point-icon').styles('set','transform',`rotate(${secondsDeg}deg)`)

        // 顯示年月日時間
        $('.time-show').html(`${year} / ${month} / ${date}<br>${hour}：${minute}：${seconds}`)

        $('.city-show').texts(city)

        // 顯示星期
        weekendTextItems.forEach(item => item.weekNum == Number(new Date(+new Date() + (areaTime * 1000)).getUTCDay()) && $('.time-show-day').texts(item.weekName))

    },1000)
}
// 啟用 timeSet 函式
timeSet();

// 視窗載入時啟用載入動畫
(()=>{
    const weekendText = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    weekendTextItems = $.maps(weekendText,(text,index) => ({ weekNum: index,weekName: text }))
    $('.title').addClass('title-in')
    setTimeout(() => $('.clock-outer').addClass('clock-outer-in'), 1000);
    setTimeout(() => {
        $('.city-show').addClass('city-show-in')
        $('.time-show-day').addClass('time-show-day-in')
        $('.time-show').addClass('time-show-in')
    }, 1500);
})()