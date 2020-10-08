const cards = document.querySelectorAll('.card');
const num = document.querySelector('.count')
const btnClose = document.querySelector('.close')
const modalShow = document.querySelector('.modal')
const modalContentShow = document.querySelector('.modal-body')
const again = document.querySelector('.again')
const cancel = document.querySelector('.cancel')
let hasOpen_Card = false;
let cardFrt, cardScd;
let lock = false;

function cardChage() {
    if (lock == true) return
    if (this === cardFrt) return;
    this.classList.add('card-turn')
    if (!hasOpen_Card) {
        hasOpen_Card = true
        cardFrt = this
        return
    }
    cardScd = this
    cardMatch()
}

function cardMatch() {
    let cardTimes = 0;
    let cardMatching = cardFrt.dataset.target === cardScd.dataset.target;
    if (cardMatching == true) {
        disableEvent(cardTimes)
        return
    }
    returnCover()
}

function disableEvent(cardTimes) {
    cardTimes += 1
    if (cardTimes == 8) {
        cardTimes = 0
        modalHeader_Text()
        modalContent_Text()
        modalBtn_Cancel_TextOpen()
        modalBtn_Again_Text()
        modalShow.style.display = 'block'
        modalShow.style.transition = '1s ease'
        setTimeout(show, 100)
    }
    cardFrt.removeEventListener('click', cardChage)
    cardScd.removeEventListener('click', cardChage)
    reset()
}

function returnCover() {
    lock = true
    setTimeout(function() {
        cardFrt.classList.remove('card-turn')
        cardScd.classList.remove('card-turn')
        reset()
    }, 1000)
}

function reset() {
    [hasOpen_Card, lock] = [false, false]
    [cardFrt, cardScd] = [null, null]
}

function resetAll() {
    cards.forEach(card=>card.style.order = Math.floor(Math.random() * 16))
    cards.forEach(carder=> {
        carder.classList.remove('card-turn')
        carder.addEventListener('click', cardChage)
    })
}

function modalHeader_Text() {
    const modalText_header = document.querySelector('.header-text')
    switch (modalText_header.textContent) {
        case '':
            modalText_header.textContent = '遊戲說明'
        break;
        case '遊戲說明':
            modalText_header.textContent = '您要再來一局嗎'
        break;
        default:
            modalText_header.textContent = '您要再來一局嗎'
        break;
    }
}

function modalContent_Text() {
    var modalText_content = document.querySelector('.content-text')
    if (modalText_content.textContent == '') {
        modalText_content.innerHTML = '點擊卡片對應相同的卡片的圖案<br>直到將整面卡面配對正確'
    } else if (modalText_content.textContent == '點擊卡片對應相同的卡片的圖案<br>直到將整面卡面配對正確') {
        modalText_content.innerHTML = '您已將卡牌全數對應成功瞜，恭喜 !<br>雖然只是個小遊戲，還是很感謝您的遊玩 !'
    } else {
        modalText_content.innerHTML = '您已將卡牌全數對應成功瞜，恭喜 !<br>雖然只是個小遊戲，還是很感謝您的遊玩 !'
    }
}

function modalBtn_Cancel_TextClose() {
    cancel.classList == 'cancel'?cancel.classList.remove('cancel'):null
}

function modalBtn_Cancel_TextOpen() {
    const cancelText = document.querySelector('.cancel-text')
    if (cancelText.textContent == '' && cancel.classList == '') {
        cancel.classList.add('cancel')
        cancelText.innerHTML = '取消'
    }
}

function modalBtn_Again_Text() {
    var againText = document.querySelector('.again-text')
    if (againText.textContent == '') {
        againText.innerHTML = '確定'
    } else if (againText.textContent == '確定') {
        againText.innerHTML = '再來一局'
    } else {
        againText.innerHTML = '再來一局'
    }
}
// 設定淡入延遲
function show() {
    modalShow.classList.add('modal-toggle')
    modalContentShow.classList.add('modal-body-toggle')
}
// 設定淡出延遲
function close() {
    modalShow.classList.remove('modal-toggle')
    modalContentShow.classList.remove('modal-body-toggle')
    setTimeout(modalShow.style.display = 'none', 750)  
}

cards.forEach(card=>card.addEventListener('click', cardChage))
(function start() {
    modalShow.style.display = 'block'
    modalShow.style.transition = '1s ease'
    setTimeout(show, 100)
    modalHeader_Text()
    modalContent_Text()
    modalBtn_Again_Text()
    modalBtn_Cancel_TextClose()
}());
    // 監聽點擊彈出視窗本體內部架構 X 按鈕
btnClose.addEventListener('click', close())

// 監聽點擊彈出視窗本體內部架構 Cancel 按鈕
again.addEventListener('click',()=> {
    close()
    resetAll()
})
cancel.addEventListener('click', close())

// 監聽點擊彈出視窗本體架構外部網頁空白區域 window (整個網頁當前視窗)，當點擊外部區域時一樣可關閉彈出視窗
window.addEventListener('click',e=>e.target == modalShow?close():null)