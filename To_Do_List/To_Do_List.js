const doList = document.querySelector('.do-list')
const deleteList = document.querySelector('.delete-list')
const listItem = document.querySelector('.list-content')
const deleteItem = document.querySelector('.delete-content')
const removeAllBtn = document.querySelector('.remove-all-btn')
const removeAllFBtn = document.querySelector('.remove-allF-btn')
const accountWord = document.getElementById('account')
const act = document.querySelector('.act')
const passWord = document.getElementById('password')
const pst = document.querySelector('.pst')
const nick = document.getElementById('nick')
const nkt = document.querySelector('.nkt')
const confirm = document.querySelector('.confirm')
const modalShow = document.querySelector('.modal')
const modalContentShow = document.querySelector('.modal-body')
const modalTitle = document.querySelector('.modal-title')
const modalShowS = document.querySelector('.modalS')
const modalContentShowS = document.querySelector('.modal-bodyS')
const welcomeTitle = document.querySelector('.welcome-title')
const toDo = document.querySelector('.to-dos')
const toDoOuter = document.querySelector('.to-do-outer')
const notDo = document.querySelector('.not-do')
const haveDo = document.querySelector('.have-do')
const signOption = document.querySelector('.sign-option')

let pass = false
let accountTemp;
let passwordTemp;
let nickTemp;
let autoRemove;
let autoCount = 0
let items = JSON.parse(localStorage.getItem('items')) || []
let deletedItems = JSON.parse(localStorage.getItem('deletedItems')) || []
let account = JSON.parse(localStorage.getItem('account')) || []

// 設定時間物件函式
function dateDetails() {
    const dates = new Date()
    const year = dates.getFullYear()
    const month = (dates.getMonth() + 1 < 10 ? '0' : '') + (dates.getMonth() + 1)
    const days = (dates.getDate() < 10 ? '0' : '') + dates.getDate()
    const hour = (dates.getHours() < 10 ? '0' : '') + dates.getHours()
    const minute = (dates.getMinutes() < 10 ? '0' : '') + dates.getMinutes()
    const second = (dates.getSeconds() < 10 ? '0' : '') + dates.getSeconds()
    times = `${hour}:${minute}:${second}`
    date = `${year}-${month}-${days}`
}

// 設定待辦清單框架函式，後將變數帶入參數使用
function creatList(data = [], base) {
    base.innerHTML = data.map((lists, order) => {
        return `
                <tr class="list-in">
                    <td class="text-center"><input type="checkbox" name="check" data-num="${order}" id="item${order}" ${lists.finish?'checked':''}/></td>
                    <td><label for="item${order}" data-num="${order}" class="outside-text" onclick="checked(event)">${lists.text}<input type="text" data-num="${order}" class="inside-text"></label></td>
                    <td class="text-center"><a href="#" class="change" data-num="${order}">Change</a></td>
                    <td class="text-center"><span class="times">${lists.createTime}</span></td>
                    <td class="text-center"><span class="times">${lists.createDate}</span></td>
                </tr>`
    }).join('')
}

// 設定刪除歷史清單框架函式，後將變數帶入參數使用
function deletedList(data = [], base) {
    base.innerHTML = data.map((lists, order) => {
        return `
                <tr class="list-in">
                    <td class="text-center">${lists.finish == false?'Undone':'Completed'}</td>
                    <td><label for="item${order}" class="outside-text">${lists.text}</label></td>
                    <td class="text-center"><span class="times">${lists.createTime} / ${lists.deletedTime}</span></td>
                    <td class="text-center"><span class="times">${lists.createDate} / ${lists.deletedDate}</span></td>
                </tr>
                `
    }).join('')
}

// 設定刷新待辦內容函式
function update() {
    localStorage.setItem('items', JSON.stringify(items))
    creatList(items, listItem)
    let updateCount = 0
    items.forEach(key => key.finish == false ? notDo.textContent = updateCount += 1 : null)

}

// 設定顯示待辦清單內容函式
function showToDo() {
    setTimeout(() => doList.style.display = 'flex', 800)
    setTimeout(() => deleteList.style.display = 'none', 800)
    creatList(items, listItem)
}

// 設定顯示刪除清單內容函式
function showDeleteHistory() {
    setTimeout(() => doList.style.display = 'none', 800)
    setTimeout(() => deleteList.style.display = 'flex', 800)
    deletedList(deletedItems, deleteItem)
    deletedItems.length > 0 ? removeAllFBtn.classList.add('remove-btn-in') : removeAllFBtn.classList.remove(
        'remove-btn-in')
}

// 設定新增清單物件函式
function addItems() {
    const textInput = document.querySelector('.key-in')
    document.querySelector('.add-btn').classList.add('add-btn-active')
    setTimeout(() => document.querySelector('.add-btn').classList.remove('add-btn-active'), 500)
    if (textInput.value == '') return
    listItem.classList.length < 2 ? listItem.classList.add('list-in') : null
    setTimeout(() => textInput.value !== '' ? textInput.value = '' : null, 1)
    dateDetails()
    items.push({
        text: textInput.value,
        finish: false,
        createTime: times,
        deletedTime: '',
        createDate: date,
        deletedDate: ''
    })
    update()
    items.length > 0 ? removeAllBtn.classList.add('remove-btn-in') : null
}

// 設定按鍵函式
function keydownActive(e) {
    if (e.keyCode !== 13) return
    modalShow.classList.length == 1 ? addItems() : null
    modalShow.classList.length == 2 ? inCloseing() : null
}

// 設定待辦事項內容變更函式
function textChange(e) {
    if (e.target.tagName !== 'A') return
    e.preventDefault();
    const index = e.target.dataset.num
    const textWidth = document.querySelectorAll('.outside-text')
    const changeBtn = document.querySelectorAll('.change')
    const change = document.querySelectorAll('.inside-text')
    let changeTemp = '';
    switch (changeBtn[index].textContent) {
        case 'Change':
            if (pass !== false) return
            change[index].value = items[index].text
            change[index].classList.add('inside-text-active')
            change[index].style.width = `${textWidth[index].offsetWidth-3}px`
            changeBtn[index].textContent = 'Confirm'
            changeBtn[index].classList.add('change-turn')
            pass = true
            break;
        case 'Confirm':
            if (pass !== true) return
            changeTemp = change[index].value
            changeBtn[index].textContent = 'change'
            changeBtn[index].classList.remove('change-turn')
            change[index].classList.remove('inside-text-active')
            if (change[index].value == '') {
                pass = false
                return
            }
            dateDetails()
            items[index].text = changeTemp
            items[index].createTime = times
            items[index].createDate = date
            pass = false
            update()
            break;
    }
}

// 設定勾選內容函式
function checked(event) {
    if (event.target.tagName !== 'LABEL') return
    const checkText = document.querySelectorAll('.outside-text')
    let order = event.target.dataset.num
    if (items[order].finish == false) {
        items[order].finish = true
        localStorage.setItem('items', JSON.stringify(items))
        checkText[order].classList.add('complated')
        notDo.textContent = Number(notDo.textContent) - 1
        haveDo.textContent = Number(haveDo.textContent) + 1

    } else {
        items[order].finish = false
        localStorage.setItem('items', JSON.stringify(items))
        checkText[order].classList.remove('complated')
        notDo.textContent = Number(notDo.textContent) + 1
        haveDo.textContent = Number(haveDo.textContent) - 1
    }
}

// 設定清單上方案件函式
function action() {
    const deletedDo = document.querySelector('.delete-dos')
    switch (this.classList[1]) {
        case 'to-dos':
            showToDo()
            toDo.classList.add('dos-active')
            deletedDo.classList.remove('dos-active')
            deleteList.classList.add('list-out')
            setTimeout(() => {
                doList.classList.add('list-in')
                deleteList.classList.remove('list-in')
                deleteList.classList.remove('list-out')
                listItem.classList.add('list-in')
            }, 800)

            break
        case 'delete-dos':
            showDeleteHistory()
            toDo.classList.remove('dos-active')
            deletedDo.classList.add('dos-active')
            doList.classList.add('list-out')
            setTimeout(() => {
                deleteList.classList.add('list-in')
                doList.classList.remove('list-in')
                doList.classList.remove('list-out')
                deleteItem.classList.add('list-in')
            }, 800)
            break
    }
}

// 設定彈出視窗附屬函式
function show() {
    modalShow.classList.add('modal-toggle')
    modalContentShow.classList.add('modal-body-toggle')
}

// 設定彈出視窗附屬函式
function showS() {
    modalShowS.classList.add('modal-toggle')
    modalContentShowS.classList.add('modal-body-toggle')
}

// 設定彈出視窗附屬函式
function close() {
    modalShow.style.display = 'none'
}

// 設定彈出視窗附屬函式
function closeS() {
    modalShowS.style.display = 'none'
}

// 設定彈出視窗點選按鈕後執行內容函式
function inCloseing() {
    switch (confirm.textContent) {
        case 'Create New Account':
            let acV = RegExp('^[0-9a-zA-Z]+$', 'g').test(accountTemp)
            let psV = RegExp('^[0-9a-zA-Z]+$', 'g').test(passwordTemp)
            if (accountWord.value == '' && passWord.value == '') {
                nkt.textContent = "Please create your nick Name"
                nkt.classList.add('invalid')
                account.length > 0 ? act.textContent = "Please enter your account" : act.textContent = "Please create your account"
                act.classList.add('invalid')
                act.classList.remove('valid')
                account.length > 0 ? pst.textContent = "Please enter your password" : pst.textContent = "Please create your password"
                pst.classList.add('invalid')
                act.classList.remove('valid')
                modalContentShow.classList.add('shake')
                setTimeout(() => modalContentShow.classList.remove('shake'), 600);
                return
            }
            if (acV == false || psV == false) return
            account.push({
                account: accountTemp,
                password: passwordTemp,
                nickName: nickTemp
            })
            localStorage.setItem('account', JSON.stringify(account))
            modalShow.classList.remove('modal-toggle')
            modalContentShow.classList.remove('modal-body-toggle')
            toDoOuter.classList.remove('on-blur')
            document.querySelector('.user-title').textContent = `User Nick Name：${account[0].nickName}`
            setTimeout(close, 750)
            setTimeout(() => signOption.classList.add('sign-option-active'), 751)
            break;
        case 'Confirm':
            if (accountTemp !== account[0].account && passwordTemp !== account[0].password) {
                modalContentShow.classList.add('shake')
                setTimeout(() => modalContentShow.classList.remove('shake'), 600);
                act.textContent = "Account doesn't match"
                act.classList.add('invalid')
                act.classList.remove('valid')
                pst.textContent = "Password doesn't match"
                pst.classList.add('invalid')
                pst.classList.remove('valid')
            } else if (passwordTemp !== account[0].password) {
                modalContentShow.classList.add('shake')
                setTimeout(() => modalContentShow.classList.remove('shake'), 600);
                pst.textContent = "Password doesn't match"
                pst.classList.add('invalid')
                pst.classList.remove('valid')
            } else if (accountTemp !== account[0].account) {
                modalContentShow.classList.add('shake')
                setTimeout(() => modalContentShow.classList.remove('shake'), 600);
                act.textContent = "Account doesn't match"
                act.classList.add('invalid')
                act.classList.remove('valid')
            }
            if (accountTemp == account[0].account && passwordTemp == account[0].password) {
                modalContentShow.classList.remove('modal-body-toggle')
                autoRemove = setInterval(() => {
                    autoCount += 1
                    if (autoCount == 3) {
                        autoCount = 0
                        clearInterval(autoRemove)
                    } else {
                        welcomeTitle.classList.remove('welcome-title-in')
                    }
                }, 2500);
                welcomeTitle.style.display = 'block'
                setTimeout(() => {
                    welcomeTitle.textContent = `Welcome Back`
                    welcomeTitle.classList.add('welcome-title-in')
                }, 1000);
                setTimeout(() => {
                    welcomeTitle.textContent = `${account[0].nickName}`
                    welcomeTitle.classList.add('welcome-title-in')
                }, 3500);
                setTimeout(() => {
                    toDoOuter.classList.remove('on-blur')
                    welcomeTitle.style.display = 'none'
                    modalShow.classList.remove('modal-toggle')
                    setTimeout(close, 750)
                    setTimeout(() => signOption.classList.add('sign-option-active'), 751)
                }, 5900);
            }
            break;
        case 'Change':
            if (accountWord.value == '' && passWord.value == '') {
                nkt.textContent = "Please create your nick Name"
                nkt.classList.add('invalid')
                account.length > 0 ? act.textContent = "Please enter your account" : act.textContent = "Please create your account"
                act.classList.add('invalid')
                act.classList.remove('valid')
                account.length > 0 ? pst.textContent = "Please enter your password" : pst.textContent = "Please create your password"
                pst.classList.add('invalid')
                act.classList.remove('valid')
                modalContentShow.classList.add('shake')
                setTimeout(() => modalContentShow.classList.remove('shake'), 600);
                return
            }
            nickTemp == undefined ? null : account[0].nickName = nickTemp
            account[0].account = accountTemp
            account[0].password = passwordTemp
            localStorage.setItem('account', JSON.stringify(account))
            document.querySelector('.user-title').textContent = `User Nick Name：${account[0].nickName}`
            modalShow.classList.remove('modal-toggle')
            modalContentShow.classList.remove('modal-body-toggle')
            setTimeout(close, 750)
            break;
    }
}

// 設定移除所有代辦事項按鈕函式
function removeAll() {
    dateDetails()
    items.forEach(key => {
        key.deletedTime = times
        key.deletedDate = date
        deletedItems.push(key)
        localStorage.setItem('deletedItems', JSON.stringify(deletedItems))
    })
    listItem.classList.add('list-out')
    this.classList.remove('remove-btn-in')
    setTimeout(() => {
        listItem.classList.remove('list-in')
        listItem.classList.remove('list-out')
        haveDo.textContent = deletedItems.length
        items = []
        update()
    }, 800)
    setTimeout(() => notDo.textContent = items.length, 801);
}

// 設定移除所有刪除記錄按鈕函式
function removeAllDelete() {
    deletedItems = []
    localStorage.setItem('deletedItems', JSON.stringify(deletedItems))
    deleteItem.classList.add('list-out')
    this.classList.remove('remove-btn-in')
    haveDo.textContent = deletedItems.length
    setTimeout(() => {
        deleteItem.classList.remove('list-in')
        deleteItem.classList.remove('list-out')
        deletedList(deletedItems, deleteItem)
    }, 800)
}

// 設定帳密提示函式
function forgetPrompt() {
    switch (this.textContent) {
        case 'Account Prompt':
            act.textContent = `Account prompt：${account[0].account.slice(0, 2)}`
            act.classList.remove('valid')
            act.classList.add('invalid')
            break;
        case 'Password Prompt':
            pst.textContent = `Password prompt：${account[0].password.slice(0, 2)}`
            pst.classList.remove('valid')
            pst.classList.add('invalid')
            break;
    }
}

// 設定更改帳密與使用者名稱函式
function changeAccount() {
    modalTitle.textContent = 'Change Account Details'
    modalShow.style.display = 'block'
    modalShow.style.transition = '1s ease'
    setTimeout(show, 100)
    confirm.textContent = 'Change'
    document.querySelector('.forget-group').style.display = 'none'
    nick.style.display = 'block'
    nkt.style.display = 'block'
    document.querySelector('.nickT').style.display = 'block'
    document.querySelectorAll('[name="word"]').forEach(key => {
        key.id == 'nick' ? key.value = account[0].nickName : null
        key.id == 'account' ? key.value = account[0].account : null
        key.id == 'password' ? key.value = account[0].password : null
    })
    act.classList.remove('valid')
    pst.classList.remove('valid')
    nkt.classList.remove('valid')
    act.classList.remove('invalid')
    pst.classList.remove('invalid')
    nkt.classList.remove('invalid')
}

// 設定偵測帳密輸入中內容函式
function signIn() {
    switch (this.id) {
        case 'account':
            accountTemp = `${this.value}`
            let acAns = RegExp('^[0-9a-zA-Z]+$', 'g').test(accountTemp)
            if (acAns == true) {
                act.textContent = 'Account valid'
                act.classList.add('valid')
                act.classList.remove('invalid')
            } else {
                act.textContent = 'Account invalid'
                act.classList.remove('valid')
                act.classList.add('invalid')
            }
            break;
        case 'password':
            passwordTemp = `${this.value}`
            let psAns = RegExp('^[0-9a-zA-Z]+$', 'g').test(passwordTemp)
            if (psAns == true) {
                pst.textContent = 'Password valid'
                pst.classList.add('valid')
                pst.classList.remove('invalid')
            } else {
                pst.textContent = 'Password invalid'
                pst.classList.remove('valid')
                pst.classList.add('invalid')
            }
            break;
        case 'nick':
            nickTemp = `${this.value}`
            if (this.value == '') {
                nkt.textContent = 'Nick name invalid'
                nkt.classList.remove('valid')
                nkt.classList.add('invalid')
            } else {
                nkt.textContent = 'Nick name valid'
                nkt.classList.add('valid')
                nkt.classList.remove('invalid')
            }
            break;
    }
}

// 設定登出內容函式
function signOut() {
    toDoOuter.classList.add('on-blur')
    modalShowS.style.display = 'block'
    modalShowS.style.transition = '1s ease'
    setTimeout(showS, 100)
    let coutDown = 5
    let coutTimer = setInterval(() => {
        coutDown <= 0 ? clearInterval(coutTimer) : document.querySelector('.couting').textContent = coutDown -= 1
    }, 1000);
    setTimeout(() => {
        modalShowS.classList.remove('modal-toggle')
        modalContentShowS.classList.remove('modal-body-toggle')
        setTimeout(closeS, 750)
        setTimeout(() => signOption.classList.remove('sign-option-active'), 751)
    }, 5900);
    setTimeout(() => window.location.reload(), 6650);
}

// 設定載入函式
(function start() {
    toDo.classList.add('dos-active')
    listItem.classList.add('list-in')
    deleteItem.classList.add('list-in')
    setTimeout(() => items.length > 0 ? removeAllBtn.classList.add('remove-btn-in') : null, 750);
    let startNotDo = Number(items.length)
    let startHaveDo = Number(deletedItems.length)
    notDo.textContent = startNotDo
    haveDo.textContent = startHaveDo
    items.forEach(key => {
        if (key.finish == true) {
            notDo.textContent = startNotDo -= 1
            haveDo.textContent = startHaveDo += 1
        } else {
            notDo.textContent = startNotDo
            haveDo.textContent = startHaveDo
        }
    })
    creatList(items, listItem)
    if (account.length > 0) {
        document.querySelector('.user-title').textContent = `User Nick Name：${account[0].nickName}`
        modalTitle.textContent = 'Sign In'
        modalShow.style.display = 'block'
        modalShow.style.transition = '1s ease'
        confirm.textContent = 'Confirm'
        document.querySelector('.forget-group').style.display = 'block'
        nick.style.display = 'none'
        nkt.style.display = 'none'
        document.querySelector('.nickT').style.display = 'none'
        setTimeout(show, 100)
    } else {
        modalTitle.textContent = 'Sign Up'
        modalShow.style.display = 'block'
        modalShow.style.transition = '1s ease'
        confirm.textContent = 'Create New Account'
        document.querySelector('.forget-group').style.display = 'none'
        setTimeout(() => modalShow.classList.add('modal-toggle'), 100);
        autoRemove = setInterval(() => {
            autoCount += 1
            if (autoCount == 8) {
                autoCount = 0
                clearInterval(autoRemove)
            } else {
                welcomeTitle.classList.remove('welcome-title-in')
            }
        }, 3000);
        welcomeTitle.style.display = 'block'
        setTimeout(() => {
            welcomeTitle.textContent = 'Welcome To Use The To-Do List'
            welcomeTitle.classList.add('welcome-title-in')
        }, 1000);
        setTimeout(() => {
            welcomeTitle.textContent = 'Please Create Your New Account'
            welcomeTitle.classList.add('welcome-title-in')
        }, 4000)
        setTimeout(() => {
            welcomeTitle.textContent = 'In The First Time'
            welcomeTitle.classList.add('welcome-title-in')
        }, 7000)
        setTimeout(() => {
            welcomeTitle.textContent = 'Before You Start To Use'
            welcomeTitle.classList.add('welcome-title-in')
        }, 10000)
        setTimeout(() => {
            welcomeTitle.textContent = 'Please Remember Your Account'
            welcomeTitle.classList.add('welcome-title-in')
        }, 13000)
        setTimeout(() => {
            welcomeTitle.textContent = 'You Can Sign In'
            welcomeTitle.classList.add('welcome-title-in')
        }, 16000)
        setTimeout(() => {
            welcomeTitle.textContent = 'At Next Time'
            welcomeTitle.classList.add('welcome-title-in')
        }, 19000)
        setTimeout(() => {
            welcomeTitle.style.display = 'none'
            modalContentShow.classList.add('modal-body-toggle')
        }, 21900)
    }
}())

window.addEventListener('keydown', keydownActive)
listItem.addEventListener('click', textChange)
removeAllBtn.addEventListener('click', removeAll)
removeAllFBtn.addEventListener('click', removeAllDelete)
confirm.addEventListener('click', inCloseing)
document.querySelector('.sign-change').addEventListener('click', changeAccount)
document.querySelector('.add-btn').addEventListener('click', addItems)
document.querySelector('.sign-out').addEventListener('click', signOut)
document.querySelectorAll('.top-btn').forEach(key => key.addEventListener('click', action))
document.querySelectorAll('[name="word"]').forEach(key => key.addEventListener('input', signIn))
document.querySelectorAll('.forget-prompt').forEach(key => key.addEventListener('click', forgetPrompt))