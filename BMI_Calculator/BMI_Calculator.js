const btn = document.querySelector('.btn');
const btnChange = document.querySelector('.btn-change')
const arrowShow = document.querySelector('.arrow-down')
const textTurn = document.querySelector('.turn')
const list = document.querySelector('.list');
const heightBd = document.querySelector('.countH');
const weightBd = document.querySelector('.countW');
const ckMessageH = document.querySelector('.checkH')
const ckMessageW = document.querySelector('.checkW')
let data = JSON.parse(localStorage.getItem('objData')) || [];
const body = document.querySelector('.body-value')

// ↓ 頁面載入時讀取頁面暫存資料(localStorage) start ↓
run(data);
// ↑ 頁面載入時讀取頁面暫存資料(localStorage) end ↑

// ↓ 設定點選計算按鈕時所觸發的內容 start ↓
function check() {
    // ↓ 設定判斷値 start ↓
    let height = heightBd.value;
    let weight = weightBd.value;
    run(data);
    let heightCount = height / 100;
    let weightCount = weight
    let bmi = (weightCount / (heightCount * heightCount)).toFixed(2);
    btnEffect(bmi, height, weight)
    if (bmi == 'NaN') {
        ckMessageH.classList.add('alert-txt')
        ckMessageW.classList.add('alert-txt')
        heightBd.classList.add('alert')
        weightBd.classList.add('alert')
        ckMessageH.textContent = '請您輸入此欄位 !'
        ckMessageW.textContent = '請您輸入此欄位 !'
        return;
    } else if (height == '') {
        ckMessageH.classList.add('alert-txt')
        heightBd.classList.add('alert')
        ckMessageH.textContent = '請您輸入身高 !'
        return;
    } else if (weight == '') {
        ckMessageW.classList.add('alert-txt')
        weightBd.classList.add('alert')
        ckMessageW.textContent = '請您輸入體重 !'
        return;
    } else if (height > 200) {
        ckMessageH.classList.add('alert-txt')
        heightBd.classList.add('alert')
        ckMessageH.textContent = '您的身高格式錯誤 !'
        return;
    } else if (weight > 200) {
        ckMessageW.classList.add('alert-txt')
        weightBd.classList.add('alert')
        ckMessageW.textContent = '您的體重格式錯誤 !'
        return;
    }
    // ↑ 設定判斷値 end ↑

    // ↓ 設定 BMI 値界線 start ↓
    if (bmi < 18.5) {
        Woring = '過輕呦';
        leftSide = 'pink'
    } else if (18.5 <= bmi & bmi < 24) {
        Woring = '理想型';
        leftSide = 'green'
    } else if (24 <= bmi & bmi < 27) {
        Woring = '開始胖';
        leftSide = 'orange-sm'
    } else if (27 <= bmi & bmi < 30) {
        Woring = '輕度胖';
        leftSide = 'orange-md'
    } else if (30 <= bmi & bmi < 35) {
        Woring = '中度胖';
        leftSide = 'orange-lg'
    } else if (bmi >= 35) {
        Woring = '幸福胖';
        leftSide = 'red'
    }
    // ↑ 設定 BMI 値界線 end ↑

    // ↓ 設定日期格式 start ↓
    const date = new Date();
    let Year = date.getFullYear();
    let Month = `${date.getMonth() + 1 < 10 ? '0' : ''}${date.getMonth() + 1}`;
    let Day = `${date.getDate() < 10 ? '0' : ''}${date.getDate()}`
    let Hour = `${date.getHours() < 10 ? '0' : ''}${date.getHours()}`;
    let Minutes = `${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`
    let TimeSet = `${Year}&nbsp/&nbsp${Month}&nbsp/&nbsp${Day}&nbsp&nbsp&nbsp${Hour}:${Minutes}`;
    // ↑ 設定日期格式 end ↑

    // ↓ 設定上述値變數加入物件中 start ↓
    let bmiObject = {
        leftside: leftSide,
        woring: Woring,
        bmi: bmi,
        weight: weight,
        height: height,
        times: TimeSet,
    };

    data.push(bmiObject);

    run(data);
    localStorage.setItem('objData', JSON.stringify(data));
    // ↑ 設定上述値變數加入物件中 end ↑
}
// ↑ 設定點選計算按鈕時所觸發的內容 end ↑

// ↓ 加入頁面內容 start ↓
function run(obj) {
    let text = '';
    obj.forEach((key, index) => text += `
            <div class="row lists lists-show ${key.leftside} my-4 mx-2" data-targets="${index}">
                <div class="col-md-2">    
                    <div class="row">    
                        <p class="text-big pl-2 py-2">${key.woring}</p>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="row justify-content-center">
                        <p class="py-3">BMI値&nbsp</p>
                        <p class="text-big py-2">${key.bmi}</p>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="row justify-content-center">
                        <p class="py-3">身高&nbsp</p>
                        <p class="text-big py-2">${key.height}&nbspCm</p>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="row justify-content-center">
                        <p class="py-3">體重&nbsp</p>
                        <p class="text-big py-2">${key.weight}&nbspKg</p>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="row justify-content-center">    
                        <p class="py-3">${key.times}</p>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="row justify-content-center text-center">    
                        <a href="#" class="ml-3 px-3 py-1 my-2 deleted" data-targets="${index}">刪除</a>
                    </div>
                </div>
            </div> `)
    list.innerHTML = text
}

// ↑ 加入頁面內容 end ↑

// ↓ 刪除物件 start ↓
function deleted(e) {
    e.preventDefault();
    let tag = e.target.dataset.targets;
    let tagToNum = Number(tag)
    document.querySelectorAll('.lists')[tagToNum].classList.add('lists-delete')
    setTimeout(() => {
        if (e.target.nodeName !== 'A') return;
        data.splice(tagToNum, 1);
        localStorage.setItem('objData', JSON.stringify(data));
        run(data);
    }, 1500)
}
// ↑ 刪除物件 end ↑

// ↓ 設定表單驗證提醒文字樣式 start ↓
function Ht() {
    if (this.value == '') {
        ckMessageH.classList.add('alert-txt')
        ckMessageH.classList.remove('success-txt')
        heightBd.classList.add('alert')
        heightBd.classList.remove('success')
        ckMessageH.textContent = '請輸入您的身高 !'
        return;
    } else if (this.value > 200 || this.value < 10) {
        ckMessageH.classList.add('alert-txt')
        ckMessageH.classList.remove('success-txt')
        heightBd.classList.add('alert')
        heightBd.classList.remove('success')
        ckMessageH.textContent = '您的身高格式錯誤 !'
        return;
    } else {
        ckMessageH.classList.add('success-txt')
        heightBd.classList.add('success')
        ckMessageH.textContent = '您的身高格式正確 !'
        return;
    }
}

function Wt() {
    if (this.value == '') {
        ckMessageW.classList.add('alert-txt')
        ckMessageW.classList.remove('success-txt')
        weightBd.classList.add('alert')
        weightBd.classList.remove('success')
        ckMessageW.textContent = '請您輸入體重 !'
        return;
    } else if (this.value > 200 || this.value < 10) {
        ckMessageW.classList.add('alert-txt')
        ckMessageW.classList.remove('success-txt')
        weightBd.classList.add('alert')
        weightBd.classList.remove('success')
        ckMessageW.textContent = '您的體重格式錯誤 !'
        return;
    } else {
        ckMessageW.classList.add('success-txt')
        weightBd.classList.add('success')
        ckMessageW.textContent = '您的體重格式正確 !'
        return;
    }
}

// ↑ 設定表單驗證提醒文字樣式 end ↑

// ↓ BMI參考值下拉選單設定 start ↓
function bodyValue() {
    let bodyShow = document.querySelector('.body-value-show')
    switch (this.value) {
        case '--參考值--':
            bodyShow.style.color = 'white'
            bodyShow.style.transition = 'none'
            bodyShow.style.opacity = '1'
            body.style.border = '1px solid gray'
            body.style.color = 'black'
            body.style.transition = '1s ease'
            break;
        case '過輕呦':
            bodyShow.textContent = 'BMI ＜ 18.5'
            bodyShow.style.color = 'pink'
            bodyShow.style.transition = '1s ease'
            bodyShow.style.opacity = '1'
            body.style.border = '1px solid pink'
            body.style.color = 'pink'
            body.style.transition = '1s ease'
            break;
        case '理想型':
            bodyShow.textContent = '18.5 ≦ BMI ＜ 24'
            bodyShow.style.color = 'green'
            bodyShow.style.transition = '1s ease'
            bodyShow.style.opacity = '1'
            body.style.border = '1px solid green'
            body.style.color = 'green'
            body.style.transition = '1s ease'
            break;
        case '開始胖':
            bodyShow.textContent = '24 ≦ BMI ＜ 27'
            bodyShow.style.color = 'orange'
            bodyShow.style.transition = '1s ease'
            bodyShow.style.opacity = '1'
            body.style.border = '1px solid orange'
            body.style.color = 'orange'
            body.style.transition = '1s ease'
            break;
        case '輕度胖':
            bodyShow.textContent = '27 ≦ BMI ＜ 30'
            bodyShow.style.color = 'rgb(255, 105, 0)'
            bodyShow.style.transition = '1s ease'
            bodyShow.style.opacity = '1'
            body.style.border = '1px solid rgb(255, 105, 0)'
            body.style.color = 'rgb(255, 105, 0)'
            body.style.transition = '1s ease'
            break;
        case '中度胖':
            bodyShow.textContent = '30 ≦ BMI ＜ 35'
            bodyShow.style.color = 'rgb(255, 62, 0)'
            bodyShow.style.transition = '1s ease'
            bodyShow.style.opacity = '1'
            body.style.border = '1px solid rgb(255, 62, 0)'
            body.style.color = 'rgb(255, 62, 0)'
            body.style.transition = '1s ease'
            break;
        case '幸福胖':
            bodyShow.textContent = 'BMI ≧ 35'
            bodyShow.style.color = 'red'
            bodyShow.style.transition = '1s ease'
            bodyShow.style.opacity = '1'
            body.style.border = '1px solid red'
            body.style.color = 'red'
            body.style.transition = '1s ease'
            break;
    }
}
// ↑ BMI參考值下拉選單設定 end ↑

function startOnload() {
    document.querySelector('.T2').classList.add('T2-in')
    document.querySelector('.T3').classList.add('T3-in')
    setTimeout(() => document.querySelector('.T1').classList.add('show'), 4000)
    setTimeout(() => document.querySelector('.form').classList.add('show'), 5000)
    setTimeout(() => btn.classList.add('show'), 6000)
    setTimeout(() => {
        document.querySelector('.header').classList.add('header-light')
        document.querySelector('.footer').classList.add('footer-light')
    }, 7000)
}

function whenLeave() {
    document.querySelector('.turn').classList.remove('turn-animate')
    document.querySelector('.turn').textContent = '計算'
    btn.classList.remove('btn-hover')
    document.querySelector('.arrow-down').classList.remove('arrow-down-act')
}

function btnEffect(bmi, height, weight) {
    if (bmi == 'NaN' || height == "" || height > 200 || weight == "" || weight > 200) return
    if (textTurn.textContent == '計算') {
        textTurn.textContent = '看結果'
        textTurn.classList.add('turn-animate')
        arrowShow.classList.add('arrow-down-act')
    }
}

// ↓ BMI參考值下拉選單內容變動後觸發 bodyValue() 函式 start ↓
body.addEventListener('change', bodyValue)
// ↑ BMI參考值下拉選單內容變動後觸發 bodyValue() 函式 end ↑

// ↓ 監聽計算按鈕點擊時執行 check() 函數內容 start ↓
btn.addEventListener('click', check)
// ↑ 監聽計算按鈕點擊時執行 check() 函數內容 end ↑

// ↓ 監聽計算按鈕滑出後觸發移除按鈕樣式文字和移除箭頭 start ↓
btn.addEventListener('mouseleave', whenLeave)
// ↑ 監聽計算按鈕滑出後觸發移除按鈕樣式文字和移除箭頭 end ↑

// ↓ 監聽刪除按鈕點擊時執行 deleted() 函數內容 start ↓
list.addEventListener('click', deleted)
// ↑ 監聽刪除按鈕點擊時執行 deleted() 函數內容 end ↑

// ↓ 監聽畫面載入時執行 start ↓
window.addEventListener('load', startOnload)
// ↑ 監聽畫面載入時執行 end ↑
document.querySelector('.countH').addEventListener('input', Ht)
document.querySelector('.countW').addEventListener('input', Wt)