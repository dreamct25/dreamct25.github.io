<template>
  <div>
    <div class="resume-all">
      <div class="header-group">
        <div class="header">
          <h1 class="title">Chen</h1>
        </div>
        <!-- <div class="navs" @mouseleave="hideNavBg">
          <div class="row no-gutters">
            <div class="col-md-3">
              <span
                class="nav-option"
                @click="goToTitle(titile=1)"
                @mouseenter="showNavBg(num=0)"
              >網頁語言</span>
            </div>
            <div class="col-md-3">
              <span
                class="nav-option"
                @click="goToTitle(titile=2)"
                @mouseenter="showNavBg(num=1)"
              >作品集</span>
            </div>
            <div class="col-md-3">
              <span
                class="nav-option"
                @click="goToTitle(titile=3)"
                @mouseenter="showNavBg(num=2)"
              >興趣</span>
            </div>
            <div class="col-md-3">
              <span
                class="nav-option"
                @click="goToTitle(titile=4)"
                @mouseenter="showNavBg(num=3)"
              >自介</span>
            </div>
          </div>
        </div>-->
        <div class="nav-rwd-menu" @click="showRwdMenu">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div class="nav-rwd">
          <ul>
            <li @click="goToTitle(titile=1)">網頁語言</li>
            <li @click="goToTitle(titile=2)">作品集</li>
            <li @click="goToTitle(titile=3)">興趣</li>
            <li @click="goToTitle(titile=4)">自介</li>
          </ul>
        </div>
      </div>
      <div class="main">
        <div class="banner">
          <video loop="true" autoplay="autoplay" muted="true">
            <source :src="bannerVideo" type="video/mp4" />
          </video>
          <span>創造生命無限的可能性，是自己最喜歡的一句話</span>
          <div class="down-arrow">
            <i class="fal fa-angle-double-down"></i>
          </div>
        </div>
        <div class="main-skill">
          <h2>網頁語言</h2>
          <div class="row no-gutters">
            <div class="col-md-3">
              <div class="skill-card">
                <div class="skill-card-header" @click="showSkill(num=1)">HTML5</div>
                <div class="skill-card-body-outer">
                  <div class="skill-card-body">
                    <p>HTML5的各項標籤與屬性設置的運用，如 class、id、data-*、style 等，與 HTML5 網頁結構的堆疊順序認識與結構變換，和 canvas 的使用。</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="skill-card">
                <div class="skill-card-header" @click="showSkill(num=2)">CSS3</div>
                <div class="skill-card-body-outer">
                  <div class="skill-card-body">
                    <p>各項屬性的運用，如排版上的結構變化、製作動畫延遲效果、顏色漸層 DOM 元素陰影、持續性的動畫變型等設置。</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="skill-card">
                <div class="skill-card-header" @click="showSkill(num=3)">SCSS</div>
                <div class="skill-card-body-outer">
                  <div class="skill-card-body">
                    <p>CSS3 的預處理器運用，結構上的撰寫，有效提高 CSS3 代碼的可讀性與撰寫性，並方便管理樣是內容，建立 Mixin 專屬個人化的屬性設置，並於專案中套用所設置的屬性內容。</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="skill-card">
                <div class="skill-card-header" @click="showSkill(num=4)">JQURY</div>
                <div class="skill-card-body-outer">
                  <div class="skill-card-body">
                    <p>基本 jQuery 與法上的使用，與各項套件運用，如 Boostrap、Swiper，平常大多是用原生 JavaScript 撰寫。</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="skill-card">
                <div class="skill-card-header" @click="showSkill(num=5)">JAVASCRIPT</div>
                <div class="skill-card-body-outer">
                  <div class="skill-card-body">
                    <p>各項語法撰寫，包含各類型轉換，陣列與物件的運用，製作物件資料，與 input 元素格式的內容驗證與各項開關、動畫設計，平時都是使用 ES6 撰寫。</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="skill-card">
                <div class="skill-card-header" @click="showSkill(num=6)">ES6</div>
                <div class="skill-card-body-outer">
                  <div class="skill-card-body">
                    <p>了解 ES6 寫法，如陣列與物件的分解，forEach 與 filter 的運用，更有效的撰寫程是語言，並提高語言的可讀性。</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="skill-card">
                <div class="skill-card-header" @click="showSkill(num=7)">AJAX</div>
                <div class="skill-card-body-outer">
                  <div class="skill-card-body">
                    <p>串接各項 API 資料，製作各種網頁內容，並透過 API 即時更新網頁內容。</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="skill-card">
                <div class="skill-card-header" @click="showSkill(num=8)">JSON</div>
                <div class="skill-card-body-outer">
                  <div class="skill-card-body">
                    <p>閱讀 JSON API 文件，各項資料的解讀與運用，目前有使用過的 API 如高雄旅遊網，中央氣象局資料。</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="skill-card">
                <div class="skill-card-header" @click="showSkill(num=9)">JSON SERVER</div>
                <div class="skill-card-body-outer">
                  <div class="skill-card-body">
                    <p>製作 JSON 資料做為虛擬資料庫，並在各項專案中使用虛擬資料庫作串接與功能測試。</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="skill-card">
                <div class="skill-card-header" @click="showSkill(num=10)">RWD</div>
                <div class="skill-card-body-outer">
                  <div class="skill-card-body">
                    <p>製作響應式板面內容與個個手機畫面大小與跨瀏覽器的相容性，如開關式動畫選單，table 元素的橫向卷軸等。</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="skill-card">
                <div class="skill-card-header" @click="showSkill(num=11)">BOOSTRAP4</div>
                <div class="skill-card-body-outer">
                  <div class="skill-card-body">
                    <p>使用格線系統 ( gride system ) 有效控制版面在各分辨率時的版面設置，與各項原件的套用，如 modal、carousol、pagination 等。</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="skill-card">
                <div class="skill-card-header" @click="showSkill(num=12)">VUE</div>
                <div class="skill-card-body-outer">
                  <div class="skill-card-body">
                    <p>VUE 元件製作，與套件、模板語言運用，如 Routerlink、Axios、Boostrap，串接 json server 使用資料庫做畫面的即時更新內容，目前有實作在電商網站上。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="collection">
          <h2>作品集</h2>
          <div class="img-outer">
            <i class="far fa-angle-left arrow-left" @click="prevImg"></i>
            <i class="far fa-angle-right arrow-right" @click="nextImg"></i>
            <div class="img-group">
              <div class="imgs imgs1 img-active"></div>
              <div class="imgs imgs2"></div>
              <div class="imgs imgs3"></div>
              <div class="imgs imgs4"></div>
              <div class="imgs imgs5"></div>
              <div class="imgs imgs6"></div>
              <div class="imgs imgs7"></div>
              <div class="imgs imgs8"></div>
              <div class="imgs imgs9"></div>
              <div class="imgs imgs10"></div>
              <div class="imgs imgs11"></div>
              <div class="imgs imgs12"></div>
              <div class="imgs imgs13"></div>
              <span class="collection-description" @click="changeCollection">{{descrip}}</span>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="collection-show">
                <router-view />
              </div>
            </div>
          </div>
        </div>
        <div class="hobby">
          <h2>興趣</h2>
          <p>放鬆時最喜歡到海邊看風景，夜晚的明月與整片的星空，喜愛攝影，研究科技領域的各項內容，心理學的內容，偶爾也喜歡自己調酒，自學一些平時沒接觸過的事物，與接觸大自然。</p>
        </div>
        <div class="self">
          <h2>自介</h2>
          <div class="row no-gutters">
            <div class="col-md-6">
              <div class="self-content">
                <p>過去一直不知道自己要作什麼工作，大部分都是做服務業的工作，但後來接觸網頁前端設計Code後好像見到了不一樣的世界。目前雖然學的東西還不是很多也還不夠專精，期許自己能朝前端領域繼續鑽研並在職場中學到更新的技術，做出更好的作品。</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="self-details">
                <img
                  src="https://drive.google.com/uc?export=view&id=1B3t1sGrCXUosm5ZLxD63pXi1E2UlXn1x"
                  alt
                />
                <ul>
                  <li>
                    <i class="fal fa-map-marker-alt"></i>Kaohsiung.TW
                  </li>
                  <li>
                    <i class="fal fa-mobile"></i>0986656603
                  </li>
                  <li>
                    <i class="fal fa-mail-bulk"></i>h199410@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <h6>
          <i class="fal fa-copyright"></i>Copyright Chen
        </h6>
      </div>
      <div class="nav-bg"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.resume-all {
  background-image: url("https://unsplash.com/photos/PpGORaWlCgg/download?force=true&w=1920");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  .header-group {
    color: white;
    position: fixed;
    z-index: 10;
    left: 0;
    right: 0;
    .header {
      padding: 20px 0 20px 0;
      .title {
        font-size: 50px;
        margin-bottom: 0;
        text-shadow: 0 2px 1px rgba(0, 0, 0, 0.7);
      }
    }
    .navs {
      .nav-option {
        display: block;
        padding: 5px 10px 5px 10px;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
        user-select: none;
        text-shadow: 0 1.5px 1px rgba(0, 0, 0, 0.7);
        transition: 0.5s ease;
      }
      .nav-option-active {
        font-weight: bold;
        color: black;
        text-shadow: 0 1.5px 1px rgba(255, 255, 255, 0.7);
      }
    }
    .nav-rwd-menu {
      position: absolute;
      top: 38%;
      left: 0;
      transform: translate(65%, 0);
      .line {
        height: 3px;
        width: 30px;
        background-color: white;
        margin: 3px 0 3px 0;
        transition: 0.5s ease;
      }
      .line:nth-of-type(1) {
        transform: translateY(0px) rotate(0deg);
      }
      .line:nth-of-type(2) {
        opacity: 1;
      }
      .line:nth-of-type(3) {
        transform: translateY(0px) rotate(0deg);
      }
      .line-trans-FT {
        transform: translateY(6px) rotate(135deg) !important;
      }
      .line-trans-SD {
        opacity: 0 !important;
      }
      .line-trans-TD {
        transform: translateY(-6px) rotate(-135deg) !important;
      }
    }
    .nav-rwd {
      position: fixed;
      top: 0;
      bottom: 0;
      background-color: rgb(30, 30, 30);
      transform: translateX(-160px);
      transition: 1s ease;
      ul {
        list-style: none;
        padding: 20px 35px 0 35px;
        text-align: center;
        line-height: 8.5em;
        font-size: 20px;
      }
    }
    .nav-rwd-active {
      transform: translateX(0px);
    }
  }
  .main {
    .banner {
      background-color: rgb(0, 0, 0);
      position: relative;
      line-height: 0;
      video {
        opacity: 0.6;
        width: 100%;
        height: 100%;
      }
      span {
        position: absolute;
        top: 55%;
        left: 0;
        right: 0;
        color: white;
        font-size: 36px;
        font-weight: bold;
        font-style: italic;
      }
      @media screen and (max-width: 414px) {
        span {
          font-size: 15px;
        }
      }
      .down-arrow {
        color: white;
        position: absolute;
        bottom: 0;
        left: 50%;
        font-size: 50px;
        opacity: 0;
        transform: translate(-50%, 0%);
        transition: 1s ease;
        text-shadow: 0 0 0 rgba(0, 0, 0, 0.7);
      }
      .down-arrow-active {
        animation: downArrowLight 2s infinite;
      }
      @keyframes downArrowLight {
        0%,
        100% {
          opacity: 0;
          transform: translate(-50%, 0%);
          text-shadow: 0 0 0 rgba(255, 255, 255, 0.7);
        }
        50% {
          opacity: 1;
          transform: translate(-50%, 50%);
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.7);
        }
        75% {
          opacity: 0;
          transform: translate(-50%, 50%);
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.7);
        }
      }
    }
    .main-skill {
      color: white;
      padding: 20px;
      opacity: 0;
      transform: translateY(20px);
      transition: 1s ease;
      h2 {
        margin: 25px 0 15px 0;
      }
      .skill-card {
        margin: 20px;
        .skill-card-header {
          text-align: center;
          padding: 15px 0 15px 0;
          border-radius: 10px 10px 0 0;
          background-color: rgba(0, 0, 0, 0.7);
          box-shadow: inset 0 0 3px 1px rgba(255, 255, 255, 0.7),
            0 0 3px 1px rgba(0, 0, 0, 0.7);
          cursor: pointer;
          user-select: none;
        }
        .skill-card-body-outer {
          overflow: hidden;
          box-shadow: inset 0 0 3px 1px rgba(255, 255, 255, 0.7),
            0 0 3px 1px rgba(0, 0, 0, 0.7);
          background-color: rgba(0, 0, 0, 0.7);
          .skill-card-body {
            margin-top: -100%;
            transition: 1s ease;
            p {
              padding: 15px 20px 15px 20px;
              text-align: justify;
              margin-bottom: 0;
              line-height: 2em;
            }
          }
          .skill-card-body-show {
            margin-top: 0%;
          }
        }
      }
    }
    .main-skill-active {
      opacity: 1;
      transform: translateY(0px);
    }
    .collection {
      opacity: 0;
      transition: 1s ease;
      transform: translateY(20px);
      color: white;
      h2 {
        margin: 25px 0 15px 0;
        text-shadow: 0 2px 1px rgba(0, 0, 0, 0.7);
      }
      .img-outer {
        position: relative;
        .arrow-left {
          color: white;
          font-size: 55px;
          position: absolute;
          z-index: 2;
          top: 50%;
          left: 0;
          transform: translate(100%, -45%);
        }
        .arrow-right {
          color: white;
          font-size: 55px;
          position: absolute;
          z-index: 2;
          top: 50%;
          right: 0;
          transform: translate(-100%, -45%);
        }
        .img-group {
          position: relative;
          min-height: 400px;
          overflow: hidden;
          .imgs {
            opacity: 0;
            transition: 1s ease;
            width: 100%;
          }
          .imgs1,
          .imgs2,
          .imgs3,
          .imgs4,
          .imgs5,
          .imgs6,
          .imgs7,
          .imgs8,
          .imgs9,
          .imgs10,
          .imgs11,
          .imgs12,
          .imgs13 {
            position: absolute;
            background-position: top center;
            background-repeat: no-repeat;
            background-size: cover;
            min-height: 400px;
          }
          .imgs1 {
            background-image: url("../assets/calculater.jpg");
          }
          .imgs2 {
            background-image: url("../assets/canvas.jpg");
          }
          .imgs3 {
            background-image: url("../assets/clock.jpg");
          }
          .imgs4 {
            background-image: url("../assets/image-controler.jpg");
          }
          .imgs5 {
            background-image: url("../assets/memory.jpg");
          }
          .imgs6 {
            background-image: url("../assets/mind.jpg");
          }
          .imgs7 {
            background-image: url("../assets/music.jpg");
          }
          .imgs8 {
            background-image: url("../assets/player.jpg");
          }
          .imgs9 {
            background-image: url("../assets/puzzle.jpg");
          }
          .imgs10 {
            background-image: url("../assets/to-do-list.jpg");
          }
          .imgs11 {
            background-image: url("../assets/travel.png");
          }
          .imgs12 {
            background-image: url("../assets/weather.jpg");
          }
          .imgs13 {
            background-image: url("../assets/weight.jpg");
          }
          .img-active {
            z-index: 1;
            opacity: 1;
            box-shadow: inset 0 0 4px 2px rgba(255, 255, 255, 0.7);
          }
          .collection-description {
            display: block;
            position: absolute;
            border-radius: 20px;
            background-color: rgba(0, 0, 0, 0.7);
            box-shadow: inset 0 0 2px 1px rgba(255, 255, 255, 0.7),
              0 0 4px 1px rgba(0, 0, 0, 0.7);
            padding: 5px 20px 4px 20px;
            bottom: 5%;
            left: 50%;
            z-index: 2;
            transform: translate(-50%, 0%);
            transition: 1s ease;
            opacity: 1;
            font-size: 20px;
            color: white;
            transition: 0.5s ease;
            cursor: pointer;
            user-select: none;
          }
          .collection-description:hover {
            text-decoration: none;
            color: rgb(255, 60, 0);
          }
          .descrip-active {
            opacity: 0;
            transform: translate(-50%, 100%);
          }
        }
      }
      .collection-show {
        opacity: 1;
        transition: 1s ease;
      }
      .collection-show-hide {
        opacity: 0;
      }
    }
    .collection-active {
      opacity: 1;
      transform: translateY(0px);
    }
    .hobby {
      color: white;
      opacity: 0;
      transform: translateY(20px);
      transition: 1s ease;
      h2 {
        text-align: center;
        margin: 55px 0 15px;
        text-shadow: 0 2px 1px rgba(0, 0, 0, 0.7);
      }
      p {
        text-align: justify;
        padding: 0 50px 0 50px;
        font-size: 18px;
      }
    }
    .hobby-active {
      opacity: 1;
      transform: translateY(0px);
    }
    .self {
      opacity: 0;
      transform: translateY(20px);
      transition: 1s ease;
      color: white;
      overflow: hidden;
      h2 {
        text-align: center;
        margin: 55px 0 15px;
        text-shadow: 0 2px 1px rgba(0, 0, 0, 0.7);
      }
      .self-content {
        opacity: 0;
        transform: translateY(-50px);
        transition: 1s ease;
        p {
          padding: 50px;
          text-align: justify;
          font-size: 20px;
        }
      }
      .self-content-active {
        opacity: 1;
        transform: translateY(0px);
      }
      .self-details {
        opacity: 0;
        transform: translateY(50px);
        transition: 1s ease;
        img {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          margin: 5% auto;
        }
        ul {
          list-style: none;
          padding-left: 0;
          li {
            line-height: 2em;
            font-size: 20px;
            i {
              margin: 0 12px 0 12px;
            }
          }
        }
      }
      .self-details-active {
        opacity: 1;
        transform: translateY(0px);
      }
    }
    .self-active {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  .footer {
    text-align: center;
    padding: 20px 0 20px 0;
    background-color: rgba(0, 0, 0, 0.7);
    box-shadow: inset 0 0 2px 1px rgba(255, 255, 255, 0.7);
    color: white;
    margin-top: 20px;
    h6 {
      font-size: 20px;
      margin-bottom: 0;
    }
  }
  .nav-bg {
    opacity: 0;
    transition: 0.5s ease;
    position: absolute;
    display: none;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 15px;
    box-shadow: inset 0 0 2px 1px rgba(255, 255, 255, 0.7),
      0 0 2px 1px rgba(0, 0, 0, 0.7);
  }
  .nav-bg-active {
    opacity: 1;
  }
}
</style>
<script>
import video from "../assets/banner.mp4";
export default {
  data() {
    return {
      swiperSwitch: false,
      swiperCount: 0,
      swiperCounter: null,
      swiperDelayCounter: null,
      skillCount: 0,
      collectionDescription: [
        {
          collectNum: 1,
          collectName: "計算機",
          collectRouter: "/calculater"
        },
        {
          collectNum: 2,
          collectName: "多功能畫布",
          collectRouter: "/canvas"
        },
        {
          collectNum: 3,
          collectName: "時鐘",
          collectRouter: "/clock"
        },
        {
          collectNum: 4,
          collectName: "圖片控制器",
          collectRouter: "/imagecontroler"
        },
        {
          collectNum: 5,
          collectName: "翻牌記憶遊戲",
          collectRouter: "/memory"
        },
        {
          collectNum: 6,
          collectName: "人格測驗",
          collectRouter: "/mind"
        },
        {
          collectNum: 7,
          collectName: "鍵盤聲音",
          collectRouter: "/music"
        },
        {
          collectNum: 8,
          collectName: "媒體播放器",
          collectRouter: "/player"
        },
        {
          collectNum: 9,
          collectName: "拼圖遊戲",
          collectRouter: "/puzzle"
        },
        {
          collectNum: 10,
          collectName: "私人待辦清單",
          collectRouter: "/todolist"
        },
        {
          collectNum: 11,
          collectName: "高雄旅遊網",
          collectRouter: "/travel"
        },
        {
          collectNum: 12,
          collectName: "天氣預報",
          collectRouter: "/weather"
        },
        {
          collectNum: 13,
          collectName: "BMI計算機",
          collectRouter: "/weight"
        }
      ],
      descrip: "計算機",
      goToTitleName: [
        {
          titleNum: 1,
          titleName: ".main-skill"
        },
        {
          titleNum: 2,
          titleName: ".collection"
        },
        {
          titleNum: 3,
          titleName: ".hobby"
        },
        {
          titleNum: 4,
          titleName: ".self"
        }
      ],
      bannerVideo: video,
      collectUrl: "",
      rwdStatus: false,
      rwdMenuCount: 0
    };
  },
  mounted() {
    let imgsNum = 0;
    let skillNum = 0;
    let skillCardNum = 0;
    let navCount = 0;
    document
      .querySelectorAll(".imgs")
      .forEach(key => key.setAttribute("data-num", (imgsNum += 1)));
    document
      .querySelectorAll(".skill-card-body")
      .forEach(key => key.setAttribute("data-num", (skillNum += 1)));
    document
      .querySelectorAll(".skill-card")
      .forEach(key => key.setAttribute("data-num", (skillCardNum += 1)));
    document
      .querySelectorAll(".nav-option")
      .forEach(key => key.setAttribute("data-num", (navCount += 1)));
    this.imgSwiper();
    window.addEventListener("scroll", this.scrollContentPart);
  },
  methods: {
    scrollContentPart() {
      const downArrow = document.querySelector(".down-arrow");
      const mainSkill = document.querySelector(".main-skill");
      const collection = document.querySelector(".collection");
      const hobby = document.querySelector(".hobby");
      const self = document.querySelector(".self");
      const selfContent = document.querySelector(".self-content");
      const selfDetails = document.querySelector(".self-details");
      const screenScrollY = window.scrollY + window.innerHeight;
      const arrowPos = downArrow.offsetTop + downArrow.offsetHeight / 2;
      const skillPos = mainSkill.offsetTop + mainSkill.offsetHeight / 2;
      const collectionPos = collection.offsetTop + collection.offsetHeight / 2;
      const hobbyPos = hobby.offsetTop + hobby.offsetHeight / 2;
      const selfPos = self.offsetTop + self.offsetHeight / 2;
      this.scrollContent(
        screenScrollY,
        downArrow,
        mainSkill,
        collection,
        hobby,
        self,
        selfContent,
        selfDetails,
        arrowPos,
        skillPos,
        collectionPos,
        hobbyPos,
        selfPos
      );
    },
    scrollContent(
      screenScrollY,
      downArrow,
      mainSkill,
      collection,
      hobby,
      self,
      selfContent,
      selfDetails,
      arrowPos,
      skillPos,
      collectionPos,
      hobbyPos,
      selfPos
    ) {
      arrowPos < screenScrollY
        ? downArrow.classList.add("down-arrow-active")
        : downArrow.classList.remove("down-arrow-active");
      skillPos < screenScrollY
        ? mainSkill.classList.add("main-skill-active")
        : mainSkill.classList.remove("main-skill-active");
      collectionPos < screenScrollY
        ? collection.classList.add("collection-active")
        : collection.classList.remove("collection-active");
      hobbyPos < screenScrollY
        ? hobby.classList.add("hobby-active")
        : hobby.classList.remove("hobby-active");
      if (selfPos < screenScrollY) {
        self.classList.add("self-active");
        setTimeout(() => {
          selfContent.classList.add("self-content-active");
          selfDetails.classList.add("self-details-active");
        }, 1001);
      } else {
        selfContent.classList.remove("self-content-active");
        selfDetails.classList.remove("self-details-active");
        self.classList.remove("self-active");
      }
    },
    changeCollection() {
      document
        .querySelector(".collection-show")
        .classList.add("collection-show-hide");
      setTimeout(() => this.$router.push(`${this.collectUrl}`), 1001);
      setTimeout(
        () =>
          document
            .querySelector(".collection-show")
            .classList.remove("collection-show-hide"),
        1001
      );
    },
    showNavBg(num) {
      let navBody = document
        .querySelector(".nav-option")
        .getBoundingClientRect();
      document.querySelector(".nav-bg").style.display = "block";
      setTimeout(
        () => document.querySelector(".nav-bg").classList.add("nav-bg-active"),
        100
      );
      document.querySelector(".nav-bg").style.top = `${
        window.scrollY == 0 ? navBody.top : navBody.top + window.scrollY
      }px`;
      document.querySelector(".nav-bg").style.left = `${
        num == 0 ? navBody.left : navBody.width * num
      }px`;
      document.querySelector(".nav-bg").style.width = `${navBody.width}px`;
      document.querySelector(".nav-bg").style.height = `${navBody.height}px`;
    },
    hideNavBg() {
      document.querySelector(".nav-bg").classList.remove("nav-bg-active");
      setTimeout(
        () => (document.querySelector(".nav-bg").style.display = ""),
        500
      );
    },
    goToTitle(title) {
      this.goToTitleName.forEach(key =>
        key.titleNum == title
          ? window.scrollTo({
              top: document.querySelector(`${key.titleName}`).offsetTop,
              behavior: "smooth"
            })
          : null
      );
      if (this.rwdStatus == true) {
        this.showRwdMenu();
        return;
      }
      document
        .querySelectorAll(".nav-option")
        .forEach(key =>
          Number(key.dataset.num) == title
            ? key.classList.add("nav-option-active")
            : key.classList.remove("nav-option-active")
        );
      this.hideNavBg();
      setTimeout(() => this.showNavBg(), 500);
    },
    showRwdMenu() {
      this.rwdMenuCount >= 1
        ? (this.rwdMenuCount = 0)
        : (this.rwdMenuCount += 1);
      if (this.rwdMenuCount == 1) {
        document.querySelector(".nav-rwd").classList.add("nav-rwd-active");
        document.querySelectorAll(".line")[0].classList.add("line-trans-FT");
        document.querySelectorAll(".line")[1].classList.add("line-trans-SD");
        document.querySelectorAll(".line")[2].classList.add("line-trans-TD");
      } else {
        document.querySelector(".nav-rwd").classList.remove("nav-rwd-active");
        document.querySelectorAll(".line")[0].classList.remove("line-trans-FT");
        document.querySelectorAll(".line")[1].classList.remove("line-trans-SD");
        document.querySelectorAll(".line")[2].classList.remove("line-trans-TD");
      }
    },
    showSkill(num) {
      this.skillCount >= 1 ? (this.skillCount = 0) : (this.skillCount += 1);
      this.skillCount == 0
        ? document
            .querySelectorAll(".skill-card-body")
            .forEach(key =>
              Number(key.dataset.num) == num
                ? key.classList.remove("skill-card-body-show")
                : null
            )
        : document
            .querySelectorAll(".skill-card-body")
            .forEach(key =>
              Number(key.dataset.num) == num
                ? key.classList.add("skill-card-body-show")
                : null
            );
    },
    imgCounterPart() {
      document
        .querySelectorAll(".imgs")
        .forEach(key =>
          Number(key.dataset.num) == this.swiperCount
            ? key.classList.add("img-active")
            : key.classList.remove("img-active")
        );
      this.collectionDescription.forEach(key => {
        if (key.collectNum == this.swiperCount) {
          this.descrip = key.collectName;
          this.collectUrl = key.collectRouter;
        }
      });
      document
        .querySelector(".collection-description")
        .classList.remove("descrip-active");
      setTimeout(
        () =>
          document
            .querySelector(".collection-description")
            .classList.add("descrip-active"),
        5000
      );
    },
    imgCounter(handCount) {
      if (handCount == true) {
        this.imgCounterPart();
      } else {
        this.swiperCount == 13
          ? (this.swiperCount = 1)
          : (this.swiperCount += 1);
        this.imgCounterPart();
      }
    },
    imgSwiper() {
      let handCount = false;
      if (this.swiperSwitch == true) {
        handCount = true;
        this.imgCounter(handCount);
        clearInterval(this.swiperCounter);
        clearTimeout(this.swiperDelayCounter);
        this.swiperDelayCounter = setTimeout(() => {
          this.swiperSwitch = false;
          this.imgSwiper();
        }, 5000);
        return;
      } else {
        this.swiperCounter = setInterval(() => {
          this.imgCounter();
        }, 6000);
      }
    },
    prevImg() {
      this.swiperSwitch = true;
      this.imgSwiper();
      this.swiperCount == 1 ? (this.swiperCount = 13) : (this.swiperCount -= 1);
    },
    nextImg() {
      this.swiperSwitch = true;
      this.swiperCount == 13 ? (this.swiperCount = 1) : (this.swiperCount += 1);
      this.imgSwiper();
    }
  },
  created() {
    window.innerWidth <= 414
      ? (this.rwdStatus = true)
      : (this.rwdStatus = false);
  }
};
</script>