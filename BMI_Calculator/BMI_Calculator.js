'use-strick'

let vals = {}
const $All = el => document.querySelectorAll(el)
const dataSet = (action,item,obj) => action === "get" ? (JSON.parse(localStorage.getItem(item)) || []) : localStorage.setItem(item,JSON.stringify(obj))
let data = dataSet("get","data")

const countCenter = ({ target:{ className,value } }) => {
    vals[className] = Number(value)

    vals.check = false

    let { height,weight } = vals

    const ruleItem = [{
        rule:(vals.height === undefined || vals.weight === undefined) && 0,
        ruleTxtH:"請輸入身高",
        ruleTxtW:"請輸入體重"
    },{
        rule:(vals.height === 0 || vals.weight === 0) && 1,
        ruleTxtH:"請輸入身高",
        ruleTxtW:"請輸入體重"
    },{
        rule:(vals.height > 201 || vals.height < 10) && 2,
        ruleTxt:"身高區間錯誤"
    },{
        rule:(vals.weight > 201 || vals.weight < 10) && 3,
        ruleTxt:"體重區間錯誤"
    }]

    let rulePos = $.findIndexOfObj(ruleItem,({ rule }) => typeof(rule) !== "boolean")
    
    vals.check = rulePos === -1

    if(rulePos === 0 || rulePos === 1){
        console.log(rulePos)
        $(".height-check").text(ruleItem[rulePos].ruleTxtH)
        $(".weight-check").text(ruleItem[rulePos].ruleTxtW)
    }else if(rulePos === 2){
        $(".height-check").text(ruleItem[rulePos].ruleTxt)
    }else if(rulePos === 3){
        $(".weight-check").text(ruleItem[rulePos].ruleTxt)
    }else{
        $(".height-check").text("格式正確")
        $(".weight-check").text("格式正確")
    }

    let heightCount = (height / 100) * (height / 100);

    vals.bmi = Math.floor(weight / heightCount);
}

const makeSideText = bmiParmas => {
    const textGroupItem = [{
        refTxt:'過輕呦',
        colorClassTag:'pink',
        rule:bmiParmas < 18.5 && 0
    },{
        refTxt:'理想型',
        colorClassTag:'green',
        rule:(18.5 <= bmiParmas && bmiParmas < 24) && 1
    },{
        refTxt:'開始胖',
        colorClassTag:'orange-sm',
        rule:(24 <= bmiParmas && bmiParmas < 27) && 2
    },{
        refTxt:'輕度胖',
        colorClassTag:'orange-md',
        rule:(27 <= bmiParmas && bmiParmas < 30) && 3
    },{
        refTxt:'中度胖',
        colorClassTag:'orange-lg',
        rule:(30 <= bmiParmas && bmiParmas < 35) && 4
    },{
        refTxt:'幸福胖',
        colorClassTag:'red',
        rule:bmiParmas >= 35 && 5
    }]

    let rulePos = $.findIndexOfObj(textGroupItem,({ rule }) => typeof(rule) !== "boolean")

    return textGroupItem[rulePos]
}

const addItem = () => {
    let { height,weight,bmi,check } = vals

    if(!check) return

    let { refTxt,colorClassTag } = makeSideText(bmi)

    let collectObj = {
        refTxt:refTxt,
        colorClassTag:colorClassTag,
        height:height,
        weight:weight,
        bmi:bmi,
        timesTemp:new Date().getFullDateTime("full")
    }

    data.unshift(collectObj)

    dataSet("set","data",data)
    data = dataSet("get","data")
    renderItem(data)

    $(".height").val("")
    $(".weight").val("")
    $(".height-check").text("請輸入身高")
    $(".weight-check").text("請輸入體重")

    $(".render-data-outer").addClass("active")

    vals = {}
}

const renderItem = dataCath => {
    let str = ""
    if(dataCath.length > 0){
        str = $.maps(dataCath,(item,index) => `
        <div class="list-item ${item.colorClassTag}">
            <div class="row no-gutters">
                <div class="col-md-9">
                    <div class="row no-gutters pos">
                        <div class="col-md-2">
                            <span>${item.refTxt}</span>
                        </div>
                        <div class="col-md-2">
                            <span>BMI值 <span>${item.bmi}</span><span>
                        </div>
                        <div class="col-md-2">
                            <span>身高 <span>${item.height} CM</span></span>
                        </div>
                        <div class="col-md-2">
                            <span>體重 <span>${item.weight} KG</span></span>
                        </div>
                        <div class="col-md-4">
                            <span>${item.timesTemp}</span>
                        </div>
                        <div class="ref-content">
                            <div class="row">
                                <div class="col-md-4">
                                    <div>
                                        <span ${makeSideText(item.bmi).refTxt === "過輕呦" ? "class='math-val'":""}">BMI ＜ 18.5 過輕呦</span>
                                        <span ${makeSideText(item.bmi).refTxt === "理想型" ? "class='math-val'":""}">18.5 ≦ BMI ＜ 24 理想型</span>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div>
                                        <span ${makeSideText(item.bmi).refTxt === "開始胖" ? "class='math-val'":""}">24 ≦ BMI ＜ 27 開始胖</span>
                                        <span ${makeSideText(item.bmi).refTxt === "輕度胖" ? "class='math-val'":""}">27 ≦ BMI ＜ 30 輕度胖</span>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div>
                                        <span ${makeSideText(item.bmi).refTxt === "中度胖" ? "class='math-val'":""}">30 ≦ BMI ＜ 35 中度胖</span>
                                        <span ${makeSideText(item.bmi).refTxt === "幸福胖" ? "class='math-val'":""}">BMI ≧ 35 幸福胖</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="delete-content">
                            <div class="title">確定要刪除此筆紀錄？</div>
                            <div class="row no-gutters">
                                <div class="col-12">
                                    <div class="confirm" onclick="deleteItem('${item.timesTemp}',${index})">確定</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="side-btn-group">
                        <div class="row no-gutters">
                            <div class="col-6">
                                <div class="ref-btn" onclick="toggleDisplay(this,${index})">參考指標</div>
                            </div>
                            <div class="col-6">
                                <div class="delete-btn" onclick="toggleDisplay(this,${index})">刪除</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `).join("")
    }else{
        str = "<div class='no-data-outer'><div class='no-data'>-- 目前無檢測紀錄 --</div></div>"
    }
    
    $(".render-data").html(str)
}

const deleteItem = (time,currentIndex) => {
    let index = $.findIndexOfObj(data,({timesTemp}) => timesTemp === time)
    $($All(".list-item")[currentIndex]).addClass("delete-active")
    setTimeout(()=>$($All(".list-item")[currentIndex]).styles("margin",`-${$All(".list-item")[currentIndex].offsetHeight / 2}px 0`),650)
    setTimeout(()=>{
        data.splice(index,1)
        dataSet("set","data",data)
        data = dataSet("get","data")
        renderItem(data)
    },1650)
}

const toggleDisplay = ({ className },index) => {
    let currentClassName = className === "ref-btn" ? ".ref-content" : ".delete-content"
    let classNameTemp = $($All(currentClassName)[index]).attr("class")
    let haveOtherClass = $.indexOf(classNameTemp,"active")
    haveOtherClass === -1 ? $($All(currentClassName)[index]).addClass("active"):$($All(currentClassName)[index]).removeClass("active")
    haveOtherClass === -1 ? $($All(`.${className}`)[index]).text("關閉"):$($All(`.${className}`)[index]).text(className === "ref-btn" ? "參考指標":"刪除")
}

const toggleData = () => {
    let classNameTemp = $(".render-data-outer").attr("class")
    let haveOtherClass = $.indexOf(classNameTemp,"active")
    haveOtherClass === -1 ? $(".render-data-outer").addClass("active"):$(".render-data-outer").removeClass("active")
}

$(".height").listener("input",countCenter);
$(".weight").listener("input",countCenter);
$(".add-btn").listener("click",addItem);
$(".toggle-data-btn").listener("click",toggleData);

(function start(){
    $(".title").addClass("title-active")
    setTimeout(()=>$(".input-group").addClass("input-group-active"),700)
    setTimeout(()=>$(".add-btn").addClass("add-btn-active"),1400)
    renderItem(data)
}())