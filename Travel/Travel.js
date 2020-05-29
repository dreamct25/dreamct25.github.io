var Data;
var DataShow;
var xhr = new XMLHttpRequest();
var theSameData;
var topBlock = document.querySelector('#block')
var ndTitle = document.querySelector('.ct-title')
var main = document.querySelector('.card')
var topBtn_1 = document.querySelector('.box1')
var topBtn_2 = document.querySelector('.box2')
var topBtn_3 = document.querySelector('.box3')
var topBtn_4 = document.querySelector('.box4')

// ↓ 使用AJAX 抓取 Open data 資料 start ↓
xhr.open('get', 'https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97', true)
xhr.send(null)
xhr.onload = function() {
        if (xhr.status !== 200) { return; }
        var jsion_Data = JSON.parse(xhr.responseText)
        Data = jsion_Data.result.records
        listData();
    }
    // ↑ 使用AJAX 抓取 Open data 資料 end ↑

// ↓ Select 選單連動 jsion 資料顯示於選單中 start ↓
function listData() {
    var Datas = [];
    for (var i = 0; i < Data.length; i++) {
        Datas.push(Data[i].Zone);
    }

    theSameData = Array.from(new Set(Datas))

    var text = '';

    text = `<option value="" selected>--請選擇行政區--</option>`;
    for (var i = 0; i < theSameData.length; i++) {
        text += `<option value="${theSameData[i]}">${theSameData[i]}</option>`
    }
    document.querySelector('#block').innerHTML = text
}
// ↑ Select 選單連動 jsion 資料顯示於選單中 end ↑ 

// ↓ Select 選單連動 jsion 資料顯示標題文字 start ↓
topBlock.addEventListener('change', function(x) {
        var select = x.target.value;
        var ndTitleCg = ''
        for (var i = 0; i < theSameData.length; i++) {
            if (select == theSameData[i]) {
                ndTitleCg = theSameData[i]
            }
        }
        ndTitle.innerHTML = ndTitleCg
    })
    // ↑ Select 選單連動 jsion 資料顯示標題文字 end ↑ 

// ↓ 帶出 jsion 資料顯示於網頁上 start ↓ 
topBlock.addEventListener('change', function(y) {
    var mnCardSt = y.target.value;
    var mnCard = '';
    for (var i = 0; i < Data.length; i++) {
        if (mnCardSt == Data[i].Zone) {
            mnCard += `
            <div class="col-md-6 mb-4 px-2 display-show">
                    <div class="card-act">
                    <div class="image-outer">
                        <h5 class="font-fix-1">${Data[i].Name}</h5>
                        <h5 class="font-fix-2">${Data[i].Zone}</h5>
                        <div class="image" style="background-image:url(${Data[i].Picture1});"></div>
                    </div>
                    <div class="list pt-3 px-2">
                        <p><font color="#FF1493"><i class="fas fa-clock mr-1"></i></font>${Data[i].Opentime}</p>
                        <p><font color="#FF0000"><i class="fas fa-map-marker-alt mr-1"></i></font>${Data[i].Add}</p>
                        <div class="d-flex justify-content-between">
                            <p><font color="#00BBFF"><i class="fas fa-mobile-alt mr-1"></i></font>${Data[i].Tel}</p>
                            <p><font color="#F5D005"><i class="fas fa-tag mr-1"></i></font>${Data[i].Ticketinfo}</p>
                        </div>
                    </div>
                </div>
            </div>`
        }
    }
    main.innerHTML = mnCard
});
//  ↑ 帶出 jsion 資料顯示於網頁上 end ↑ 

//  ↓ 頁面載入時帶出入左營區 jsion 資料顯示於網頁上 end ↓
function show() {
    var mnCard = '';
    var block = '左營區'
    for (var i = 0; i < Data.length; i++) {
        if (Data[i].Zone == block) {
            mnCard += `
            <div class="col-md-6 mb-4 px-2 display-show">
                <div class="card-act">
                    <div class="image-outer">
                        <h5 class="font-fix-1">${Data[i].Name}</h5>
                        <h5 class="font-fix-2">${Data[i].Zone}</h5>
                        <div class="image" style="background-image:url(${Data[i].Picture1});"></div>
                    </div>
                    <div class="list pt-3 px-2">
                        <p><font color="#FF1493"><i class="fas fa-clock mr-1"></i></font>${Data[i].Opentime}</p>
                        <p><font color="#FF0000"><i class="fas fa-map-marker-alt mr-1"></i></font>${Data[i].Add}</p>
                        <div class="d-flex justify-content-between">
                            <p><font color="#00BBFF"><i class="fas fa-mobile-alt mr-1"></i></font>${Data[i].Tel}</p>
                            <p><font color="#F5D005"><i class="fas fa-tag mr-1"></i></font>${Data[i].Ticketinfo}</p>
                        </div>
                    </div>
                </div>
            </div>`
        };
    };
    var ndTitleCg = '';
    for (var i = 0; i < theSameData.length; i++) {
        if (theSameData[i] == block) {
            ndTitleCg = theSameData[i]
        };
    };
    ndTitle.innerHTML = ndTitleCg;
    main.innerHTML = mnCard;
    document.querySelector('.dashed').classList.add('dashed-in')
    document.querySelector('.arrow').classList.add('arrow-in')
}
window.addEventListener('load', function() {
    DataShow = setTimeout(show, 6000)
});

//  ↑ 頁面載入時帶出入左營區 jsion 資料顯示於網頁上 end ↑

// ↓ 頂 bar 選擇按鈕 start ↓
topBtn_1.addEventListener('click', function() {
    var mnCard = '';
    var block = '苓雅區'
    for (var i = 0; i < Data.length; i++) {
        if (Data[i].Zone == block) {
            mnCard += `
            <div class="col-md-6 mb-4 px-2 display-show">
                <div class="card-act">
                    <div class="image-outer">
                        <h5 class="font-fix-1">${Data[i].Name}</h5>
                        <h5 class="font-fix-2">${Data[i].Zone}</h5>
                        <div class="image" style="background-image:url(${Data[i].Picture1});"></div>
                    </div>
                    <div class="list pt-3 px-2">
                        <p><font color="#FF1493"><i class="fas fa-clock mr-1"></i></font>${Data[i].Opentime}</p>
                        <p><font color="#FF0000"><i class="fas fa-map-marker-alt mr-1"></i></font>${Data[i].Add}</p>
                        <div class="d-flex justify-content-between">
                            <p><font color="#00BBFF"><i class="fas fa-mobile-alt mr-1"></i></font>${Data[i].Tel}</p>
                            <p><font color="#F5D005"><i class="fas fa-tag mr-1"></i></font>${Data[i].Ticketinfo}</p>
                        </div>
                    </div>
                </div>
            </div>`
        };
    };
    var ndTitleCg = '';
    for (var i = 0; i < theSameData.length; i++) {
        if (theSameData[i] == block) {
            ndTitleCg = theSameData[i]
        };
    };
    ndTitle.innerHTML = ndTitleCg;
    main.innerHTML = mnCard;
});

topBtn_2.addEventListener('click', function() {
    var mnCard = '';
    var block = '三民區';
    for (var i = 0; i < Data.length; i++) {
        if (Data[i].Zone == block) {
            mnCard += `
            <div class="col-md-6 mb-4 px-2 display-show">
                <div class="card-act">
                    <div class="image-outer">
                        <h5 class="font-fix-1">${Data[i].Name}</h5>
                        <h5 class="font-fix-2">${Data[i].Zone}</h5>
                        <div class="image" style="background-image:url(${Data[i].Picture1});"></div>
                    </div>
                    <div class="list pt-3 px-2">
                        <p><font color="#FF1493"><i class="fas fa-clock mr-1"></i></font>${Data[i].Opentime}</p>
                        <p><font color="#FF0000"><i class="fas fa-map-marker-alt mr-1"></i></font>${Data[i].Add}</p>
                        <div class="d-flex justify-content-between">
                            <p><font color="#00BBFF"><i class="fas fa-mobile-alt mr-1"></i></font>${Data[i].Tel}</p>
                            <p><font color="#F5D005"><i class="fas fa-tag mr-1"></i></font>${Data[i].Ticketinfo}</p>
                        </div>
                    </div>
                </div>
            </div>`
        };
    };
    var ndTitleCg = '';
    for (var i = 0; i < theSameData.length; i++) {
        if (theSameData[i] == block) {
            ndTitleCg = theSameData[i];
        };
    };
    ndTitle.innerHTML = ndTitleCg
    main.innerHTML = mnCard
});

topBtn_3.addEventListener('click', function() {
    var mnCard = '';
    var block = '新興區'
    for (var i = 0; i < Data.length; i++) {
        if (Data[i].Zone == block) {
            mnCard += `
            <div class="col-md-6 mb-4 px-2 display-show">
                <div class="card-act">
                    <div class="image-outer">
                        <h5 class="font-fix-1">${Data[i].Name}</h5>
                        <h5 class="font-fix-2">${Data[i].Zone}</h5>
                        <div class="image" style="background-image:url(${Data[i].Picture1});"></div>
                    </div>
                    <div class="list pt-3 px-2">
                        <p><font color="#FF1493"><i class="fas fa-clock mr-1"></i></font>${Data[i].Opentime}</p>
                        <p><font color="#FF0000"><i class="fas fa-map-marker-alt mr-1"></i></font>${Data[i].Add}</p>
                        <div class="d-flex justify-content-between">
                            <p><font color="#00BBFF"><i class="fas fa-mobile-alt mr-1"></i></font>${Data[i].Tel}</p>
                            <p><font color="#F5D005"><i class="fas fa-tag mr-1"></i></font>${Data[i].Ticketinfo}</p>
                        </div>
                    </div>
                </div>
            </div>`
        }
    };
    var ndTitleCg = '';
    for (var i = 0; i < theSameData.length; i++) {
        if (theSameData[i] == block) {
            ndTitleCg = theSameData[i];
        }
    };
    ndTitle.innerHTML = ndTitleCg;
    main.innerHTML = mnCard;
});

topBtn_4.addEventListener('click', function() {
        var mnCard = '';
        var block = '左營區';
        for (var i = 0; i < Data.length; i++) {
            if (Data[i].Zone == block) {
                mnCard += `
            <div class="col-md-6 mb-4 px-2 display-show">
                <div class="card-act">
                    <div class="image-outer">
                        <h5 class="font-fix-1">${Data[i].Name}</h5>
                        <h5 class="font-fix-2">${Data[i].Zone}</h5>
                        <div class="image" style="background-image:url(${Data[i].Picture1});"></div>
                    </div>
                    <div class="list pt-3 px-2">
                        <p><font color="#FF1493"><i class="fas fa-clock mr-1"></i></font>${Data[i].Opentime}</p>
                        <p><font color="#FF0000"><i class="fas fa-map-marker-alt mr-1"></i></font>${Data[i].Add}</p>
                        <div class="d-flex justify-content-between">
                            <p><font color="#00BBFF"><i class="fas fa-mobile-alt mr-1"></i></font>${Data[i].Tel}</p>
                            <p><font color="#F5D005"><i class="fas fa-tag mr-1"></i></font>${Data[i].Ticketinfo}</p>
                        </div>
                    </div>
                </div>
            </div>`
            };
        };
        var ndTitleCg = '';
        for (var i = 0; i < theSameData.length; i++) {
            if (theSameData[i] == block) {
                ndTitleCg = theSameData[i];
            }
        }
        ndTitle.innerHTML = ndTitleCg;
        main.innerHTML = mnCard;
    })
    // ↑ 頂 bar 選擇按鈕 end ↑

$(document).ready(function() {
    $('.arrow').click(function() {
        $(this).toggleClass('arrow-act')
    })
    $('.arrow').click(function() {
        $('.dashed').toggleClass('dashed-sm')
    })
    $('.arrow').click(function() {
        $('.display').toggleClass('display-act')
    })
    $('#block').bind('change', function() {
        $(this).focus().css('background', 'rgba(255,255,255,.6)').css('color', 'black').css('transform', 'scale(1.05)').css('transition', '1s ease')
    })
    $('.block').blur(function() {
        $(this).css('background', 'rgba(0,0,0,.6)').css('color', 'white').css('transform', 'scale(1)').css('transition', '1s ease')
    })
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.top').addClass('top-show')
            $('.top').removeClass('top-hide')
        } else {
            $('.top').addClass('top-hide')
            $('.top').removeClass('top-show')
        }
    })
    $('.top').click(function() {
        $('html,body').animate({ scrollTop: 0 }, 3000)
    })
    $(window).bind('load', function() {
        $('.title1').addClass('fadeIn-rt')
        $('.title2').addClass('fadeIn-lt')
    })
})