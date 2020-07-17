const canvas = document.getElementById('puzzle')
const select = document.querySelector('.set-level')
const stepText = document.querySelector('.step-count')
const backPage = document.querySelector('.back')
const img = new Image()
const changeImg = new Image()
const conText = canvas.getContext('2d')
const modalShow = document.querySelector('.modal')
const modalContentShow = document.querySelector('.modal-body')
const cancel = document.querySelector('.cancel')
const confirm = document.querySelector('.confirm')
const levelData = [{
        name: 'Level 1',
        hard: 2
    }, {
        name: 'Level 2',
        hard: 3
    }, {
        name: 'Level 3',
        hard: 4
    }, {
        name: 'Level 4',
        hard: 5
    },
    {
        name: 'Level 5',
        hard: 6
    }, {
        name: 'Level 6',
        hard: 7
    }, {
        name: 'Level 7',
        hard: 8
    }, {
        name: 'Level 8',
        hard: 9
    }, {
        name: 'Level 9',
        hard: 10
    }, {
        name: 'Level 10',
        hard: 11
    }
]
let board = canvas.width
let completed = false
let step = 0
let sec = 0
let min = 0
let timer
let boardPart
let level = 2
let canvasSize = board / level
let clickPos = new Object
clickPos.x = 0
clickPos.y = 0
let emptyPos = new Object
emptyPos.x = 0
emptyPos.y = 0

levelData.forEach(key => select.innerHTML += `<option value="${key.hard}">${key.name}</option>`)

// 設定 Cancel 函式內容
function Cancel() {
    modalShow.classList.remove('modal-toggle')
    modalContentShow.classList.remove('modal-body-toggle')
    setTimeout(() => modalShow.style.display = '', 750)
    document.querySelectorAll('.btn').forEach(key => {
        key.removeEventListener('click', callChoose)
    })
}

// 設定 Confirm 函式內容
function Confirm() {
    modalShow.classList.remove('modal-toggle')
    modalContentShow.classList.remove('modal-body-toggle')
    setTimeout(() => modalShow.style.display = '', 750)
    setBoard()
    showImage()
    document.querySelectorAll('.btn').forEach(key => {
        key.removeEventListener('click', callChoose)
    })
}

// 設定 callChoose 函式內容
function callChoose() {
    this.textContent == 'No' ? Cancel() : Confirm()
}

function showModal() {
    modalShow.style.display = 'block'
    modalShow.style.transition = '1s ease'
    setTimeout(() => {
        modalShow.classList.add('modal-toggle')
        modalContentShow.classList.add('modal-body-toggle')
    }, 100)
    document.querySelectorAll('.btn').forEach(key => {
        key.addEventListener('click', callChoose)
    })
}

// 設定 reBuild 函式內容
function reBuild(e) {
    clickPos.x = Math.floor((e.pageX - this.offsetLeft) / canvasSize)
    clickPos.y = Math.floor((e.pageY - this.offsetTop) / canvasSize)
    if (pos(clickPos.x, clickPos.y, emptyPos.x, emptyPos.y) == 1) {
        stepText.textContent = step += 1
        reFlashImage(emptyPos, clickPos)
        showImage()
    }
    if (completed) {
        clearInterval(timer)
        min = 0
        sec = 0
        showModal()
    }
    if (Number(stepText.textContent) >= 2) return
    timer = setInterval(() => {
        if (sec >= 59) {
            sec = 0
            min += 1
        } else {
            sec += 1
        }
        document.querySelector('.time-count').textContent = `${min < 10 ? '0' : ''}${min}：${sec < 10 ? '0' : ''}${sec}`
    }, 1000)
}

// 設定 setBoard 函式內容
function setBoard() {
    clearInterval(timer)
    min = 0
    sec = 0
    stepText.textContent = 0
    step = 0
    document.querySelector('.time-count').textContent = '00：00'
    boardPart = new Array(level);
    for (let i = 0; i < level; ++i) {
        boardPart[i] = new Array(level);
        for (let j = 0; j < level; ++j) {
            boardPart[i][j] = new Object;
            boardPart[i][j].x = (level - 1) - i;
            boardPart[i][j].y = (level - 1) - j;
        }
    }
    emptyPos.x = boardPart[level - 1][level - 1].x;
    emptyPos.y = boardPart[level - 1][level - 1].y;
    completed = false;
}

// 設定 showImage 函式內容
function showImage() {
    conText.clearRect(0, 0, board, board)
    for (let i = 0; i < level; ++i) {
        for (let j = 0; j < level; ++j) {
            let x = boardPart[i][j].x;
            let y = boardPart[i][j].y;
            if (i != emptyPos.x || j != emptyPos.y || completed == true) {
                conText.drawImage(img, x * canvasSize, y * canvasSize, canvasSize, canvasSize, i * canvasSize, j * canvasSize,
                    canvasSize, canvasSize)
            }
        }
    }
    canvas.classList.add('puzzle-in')
    changeImg.removeEventListener('load', transImg)
    img.removeEventListener('load', showImage)
}

// 設定 pos 函式內容
function pos(x1, y1, x2, y2) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

function reFlashImage(posX, posY) {
    if (!completed) {
        boardPart[posX.x][posX.y].x = boardPart[posY.x][posY.y].x;
        boardPart[posX.x][posX.y].y = boardPart[posY.x][posY.y].y;
        boardPart[posY.x][posY.y].x = level - 1;
        boardPart[posY.x][posY.y].y = level - 1;
        posX.x = posY.x;
        posX.y = posY.y;
        checkCompleted();
    }
}

// 設定 checkCompleted 函式內容
function checkCompleted() {
    let win = true;
    for (let i = 0; i < level; ++i) {
        for (let j = 0; j < level; ++j) {
            if (boardPart[i][j].x != i || boardPart[i][j].y != j) {
                win = false;
            }
        }
    }
    completed = win;
}

// 設定 uploadFile 函式內容
function uploadFile() {
    let file = this.files[0]
    let fileSrc = URL.createObjectURL(file);
    const viewImg = document.querySelector('img')
    const puzzleOuter = document.querySelector('.puzzle-outer')
    backPage.classList.remove('back-in')
    document.querySelector('.go-back').addEventListener('click', goBack)
    setTimeout(() => {
        setTimeout(() => {
            changeImg.setAttribute('src', `${fileSrc}`)
            changeImg.addEventListener('load', transImg)
            document.querySelector('.display').classList.add('puzzle-in')
        }, 100)
        backPage.style.display = 'none'
        window.innerWidth <= 414 ? puzzleOuter.style.display = 'block' : puzzleOuter.style.display = 'flex'
        viewImg.setAttribute('src', `${fileSrc}`)
    }, 800)
}

// 設定 transImg 函式內容
function transImg() {
    conText.drawImage(changeImg, 0, 0, canvas.width, canvas.height)
    let getChangeImg = canvas.toDataURL()
    setImage(getChangeImg)
    setBoard()
}

// 設定 setImage 函式內容
function setImage(getChangeImg) {
    img.src = `${getChangeImg}`
    img.addEventListener('load', showImage)
}

// 設定 setLevel 函式內容
function setLevel() {
    this.classList.add('set-level-active')
    setTimeout(() => this.classList.remove('set-level-active'), 340)
    level = this.value
    canvasSize = board / level
    setBoard()
    showImage()
}

// 設定 goBack 函式內容
function goBack() {
    canvas.classList.remove('puzzle-in')
    document.querySelector('.display').classList.remove('puzzle-in')
    document.querySelector('.go-back').removeEventListener('click', goBack)
    setTimeout(() => {
        backPage.style.display = ''
        document.querySelector('.puzzle-outer').style.display = ''
        setTimeout(() => backPage.classList.add('back-in'), 100)
    }, 800)
}

// 設定 inContent 函式內容
function inContent() {
    if (window.innerWidth <= 414) {
        canvas.width = 380
        canvas.height = 380
        board = canvas.width
        canvasSize = board / level
    } else if (window.innerWidth >= 414 && window.innerWidth <= 1024) {
        canvas.width = 480
        canvas.height = 480
        board = canvas.width
        canvasSize = board / level
    }
    backPage.classList.add('back-in')
    document.querySelector('.footer').classList.add('footer-in')
    window.removeEventListener('load', inContent)
}

canvas.addEventListener('click', reBuild)
select.addEventListener('change', setLevel)
window.addEventListener('load', inContent)
document.querySelector('#file').addEventListener('change', uploadFile)
document.querySelector('.go-back').addEventListener('click', goBack)