let Data;
let DataShow;
let xhr = new XMLHttpRequest();
let theSameData;
const topBlock = document.querySelector('.block')
const ndTitle = document.querySelector('.ct-title')
const main = document.querySelector('.card-show')
const paginations = document.querySelector('.pagination')
// ↓ 使用AJAX 抓取 Open data 資料 start ↓
xhr.open('get', 'https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json', true)
xhr.send(null)
xhr.onload = function () {
    if (xhr.status !== 200) {
        return;
    }
    var jsion_Data = JSON.parse(xhr.responseText)
    Data = jsion_Data.result.records
    setTimeout(() => pagination(Data, 1), 6000)
    listData();
}
// ↑ 使用AJAX 抓取 Open data 資料 end ↑

// ↓ Select 選單連動 jsion 資料顯示於選單中 start ↓
function listData() {
    let Datas = [];
    let option = '';
    Data.forEach(key =>
        Datas.push(key.Zone)
    );
    theSameData = Array.from(new Set(Datas))
    option = `<option value="" selected>--請選擇行政區--</option>`;
    theSameData.forEach(key => option += `<option value="${key}">${key}</option>`)
    topBlock.innerHTML = option
}
// ↑ Select 選單連動 jsion 資料顯示於選單中 end ↑ 

// ↓ Select 選單連動 jsion 資料顯示標題文字與資料顯示於網頁上 start ↓
function contentShow() {
    let mnCard = '';
    theSameData.forEach(key =>
        this.value == key ? ndTitle.textContent = key : null
    )
    Data.forEach(key => {
        if (this.value == key.Zone) {
            mnCard += `
            <div class="col-md-6 mb-4 px-2 display-show">
                <div class="card-act">
                    <div class="image-outer">
                        <h5 class="font-fix-1">${key.Name}</h5>
                        <h5 class="font-fix-2">${key.Zone}</h5>
                        <div class="image" style="background-image:url(${key.Picture1});"></div>
                    </div>
                    <div class="list pt-3 px-2">
                        <p><font color="#FF1493"><i class="fas fa-clock mr-1"></i></font>${key.Opentime}</p>
                        <p><font color="#FF0000"><i class="fas fa-map-marker-alt mr-1"></i></font>${key.Add}</p>
                        <div class="d-flex justify-content-between">
                            <p><font color="#00BBFF"><i class="fas fa-mobile-alt mr-1"></i></font>${key.Tel}</p>
                            <p><font color="#F5D005"><i class="fas fa-tag mr-1"></i></font>${key.Ticketinfo}</p>
                        </div>
                    </div>
                </div>
            </div>`
            paginations.style.display = 'none'
        }
    })
    main.innerHTML = mnCard
}
// ↑ Select 選單連動 jsion 資料顯示標題文字與資料顯示於網頁上 end ↑ 

// ↓ 頂 bar 選擇按鈕 start ↓
function topBarContentShow() {
    let mnCard = '';
    Data.forEach(key => key.Zone == this.textContent ? mnCard += `
    <div class="col-md-6 mb-4 px-2 display-show">
        <div class="card-act">
            <div class="image-outer">
                <h5 class="font-fix-1">${key.Name}</h5>
                <h5 class="font-fix-2">${key.Zone}</h5>
                <div class="image" style="background-image:url(${key.Picture1});"></div>
            </div>
            <div class="list pt-3 px-2">
                <p><font color="#FF1493"><i class="fas fa-clock mr-1"></i></font>${key.Opentime}</p>
                <p><font color="#FF0000"><i class="fas fa-map-marker-alt mr-1"></i></font>${key.Add}</p>
                <div class="d-flex justify-content-between">
                    <p><font color="#00BBFF"><i class="fas fa-mobile-alt mr-1"></i></font>${key.Tel}</p>
                    <p><font color="#F5D005"><i class="fas fa-tag mr-1"></i></font>${key.Ticketinfo}</p>
                </div>
            </div>
        </div>
    </div>` : null)
    theSameData.forEach(key => key == this.textContent ? ndTitle.textContent = key : null)
    main.innerHTML = mnCard;
    paginations.style.display = 'none'
}
// ↑ 頂 bar 選擇按鈕 end ↑
function changePage(element) {
    element.preventDefault();
    if (element.target.nodeName !== 'A') return
    const pageSet = element.target.dataset.pages
    pagination(Data, pageSet)
}

function pagination(Data, nowPage) {
    let onPage
    window.innerWidth == 414 ? onPage = 10 : onPage = 8
    const newArry = []
    const dataLength = Data.length
    const pageTotal = Math.ceil(dataLength / onPage)
    let currentPage = nowPage
    currentPage > pageTotal ? currentPage = pageTotal : null
    const minNum = (currentPage * onPage) - onPage + 1
    const maxNum = (currentPage * onPage)
    Data.forEach((key, index) => {
        const num = index + 1
        num >= minNum && num <= maxNum ? newArry.push(key) : null
    })
    const page = {
        pageTotal,
        currentPage,
        beforPage: currentPage > 1,
        afterPage: currentPage < pageTotal
    }
    show(newArry)
    paginationBtn(page)
}

function show(newArry) {
    let mnCard = '';
    ndTitle.textContent = '全部'
    main.innerHTML = '';
    newArry.forEach(key => mnCard += `
    <div class="col-md-6 mb-4 px-2 display-show">
        <div class="card-act">
            <div class="image-outer">
                <h5 class="font-fix-1">${key.Name}</h5>
                <h5 class="font-fix-2">${key.Zone}</h5>
                <div class="image" style="background-image:url(${key.Picture1});"></div>
            </div>
            <div class="list pt-3 px-2">
                <p><font color="#FF1493"><i class="fas fa-clock mr-1"></i></font>${key.Opentime}</p>
                <p><font color="#FF0000"><i class="fas fa-map-marker-alt mr-1"></i></font>${key.Add}</p>
                <div class="d-flex justify-content-between">
                    <p><font color="#00BBFF"><i class="fas fa-mobile-alt mr-1"></i></font>${key.Tel}</p>
                    <p><font color="#F5D005"><i class="fas fa-tag mr-1"></i></font>${key.Ticketinfo}</p>
                </div>
            </div>
        </div>
    </div>`)
    main.innerHTML = mnCard;
    document.querySelector('.dashed').classList.add('dashed-in')
    document.querySelector('.arrow').classList.add('arrow-in')
}

function paginationBtn(page) {
    let str = ''
    const allPages = page.pageTotal
    Number(page.beforPage) ? str += `<li class="page-item"><a class="page-link" href="#" data-pages="${Number(page.currentPage)-1}"><i class="fal fa-angle-double-left"></i></a></li>` : str += `<li class="page-item disabled"><a class="page-link" href="#"><i class="fal fa-angle-double-left"></i></a></li>`
    for (let p = 1; p <= allPages; p++) {
        Number(page.currentPage) === p ? str += `<li class="page-item active"><a class="page-link" href="#" data-pages="${p}">${p}</a></li>` : str += `<li class="page-item"><a class="page-link" href="#" data-pages="${p}">${p}</a></li>`
    }
    Number(page.afterPage) ? str += ` <li class="page-item"><a class="page-link" href="#" data-pages="${Number(page.currentPage) + 1}"><i class="fal fa-angle-double-right"></i></a></li>` : str += `<li class="page-item disabled"><span class="page-link"><i class="fal fa-angle-double-right"></i></span></li>`
    paginations.innerHTML = str
}

function changeLine() {
    this.classList.toggle('arrow-act')
    document.querySelector('.dashed').classList.toggle('dashed-sm')
    document.querySelector('.display').classList.toggle('display-act')
}

function showBackBtn() {
    this.scrollY > 100 ? document.querySelector('.top').classList.add('top-show') : document.querySelector('.top').classList.remove('top-show')
}

paginations.addEventListener('click', changePage)
topBlock.addEventListener('change', contentShow)
document.querySelectorAll('.box').forEach(key => key.addEventListener('click', topBarContentShow))
document.querySelector('.arrow').addEventListener('click', changeLine)
window.addEventListener('scroll', showBackBtn)
window.addEventListener('load', () => {
    document.querySelector('.title1').classList.add('fadeIn-rt')
    document.querySelector('.title2').classList.add('fadeIn-lt')
})

$(document).ready(function () {
    $('.top').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 3000)
    })
})