!function(){function e(e){return e&&e.__esModule?e.default:e}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire35b1;t.register("c91f9",(function(a,l){var n,c,r,i,s;n=a.exports,Object.defineProperty(n,"__esModule",{value:!0,configurable:!0}),c=a.exports,r="default",i=function(){return p},s=function(e){return p=e},Object.defineProperty(c,r,{get:i,set:s,enumerable:!0,configurable:!0});var m=t("75JRK"),o=t("e4tPT"),u=t("4Fae7"),d=t("diPDO"),v=t("4W25a"),E=t("cYcEi"),f=t("5OXzf"),N=t("fkUl6"),g=void 0,p=function(){var t=(0,d.useContext)(f.NewContext),a=t.$,l=t.Fetch,n=t.setReducer,c=t.rwdStatus,r=(0,E.useNavigate)(),i=(0,u.default)((0,d.useState)({topArticleDate:[],toggleRwdNavList:!1}),2),s=i[0],p=s.topArticleDate,b=s.toggleRwdNavList,h=i[1],w=function(){return r({pathname:"/admin"})},C=function(e){return r({pathname:"/single_article/".concat(e)})};return(0,d.useEffect)((function(){l.get("/view_shorter_all").then((function(e){var t=a.sort(e.data,(function(e,t){return+new Date(t.fullDate)-+new Date(e.fullDate)}));n(N.actionCreator,"setArticleData",t),h((function(e){return(0,o.default)((0,m.default)({},e),{topArticleDate:a.createArray({type:"fake",item:{random:t.length>6?6:t.length}},(function(e){return t[e]}))})}))})).catch((function(e){return console.log(e)}))}),[]),e(d).createElement(N.Container,null,e(d).createElement("div",{className:"header"},e(d).createElement("h1",null,"Alex Chen",e(d).createElement("br",null),e(d).createElement("span",null,"菜菜的工程獅，喜歡四處流浪學習新知 ~"))),e(d).createElement("div",{className:"main"},e(d).createElement("div",{className:"row"},c?e(d).createElement("div",{className:"col-sm-12"},e(d).createElement(v.Outlet,null)):e(d).createElement(e(d).Fragment,null,e(d).createElement("div",{className:"col-sm-9"},e(d).createElement(v.Outlet,null)),e(d).createElement("div",{className:"col-sm-3"},e(d).createElement("div",{className:"right-bar"},e(d).createElement("div",{className:"top"},e(d).createElement("div",{className:"about-layout"},e(d).createElement("div",{className:"title"},"關於我"),e(d).createElement("div",{className:"img-outer"},e(d).createElement("img",{src:"https://drive.google.com/uc?export=view&id=1B3t1sGrCXUosm5ZLxD63pXi1E2UlXn1x"})),e(d).createElement("div",{className:"under"},"Alex Chen"),e(d).createElement("div",{className:"desc"},"四處流浪的工程師，平時喜歡四處拍拍照，學習新技術，偶爾也會看看心理學的東西分享所知，希望此處的內容對你有幫助 ~"))),e(d).createElement("div",{className:"bottom"},e(d).createElement("div",{className:"top-article-list"},e(d).createElement("div",{className:"title"},"最新文章"),p.map((function(t,a){return e(d).createElement("div",{key:a,onClick:C.bind(g,t.uuid),className:"article-title"},t.articleTitle)}))),e(d).createElement("div",{onClick:w,className:"to-board-btn"},"管理文章"))))))),c?e(d).createElement("div",{onClick:function(){return h((function(e){return(0,o.default)((0,m.default)({},e),{toggleRwdNavList:!b})}))},className:"rwd-nav-btn"},e(d).createElement("div",{className:"line-group "+(b?"active":"")},e(d).createElement("div",{className:"line"}),e(d).createElement("div",{className:"line"}),e(d).createElement("div",{className:"line"}))):null,c?e(d).createElement("div",{className:"rwd-nav-list "+(b?"active":"")},e(d).createElement("div",{className:"top"},e(d).createElement("div",{className:"about-layout"},e(d).createElement("div",{className:"title"},"關於我"),e(d).createElement("div",{className:"img-outer"},e(d).createElement("img",{src:"https://drive.google.com/uc?export=view&id=1B3t1sGrCXUosm5ZLxD63pXi1E2UlXn1x"})),e(d).createElement("div",{className:"under"},"Alex Chen"),e(d).createElement("div",{className:"desc"},"四處流浪的工程師，平時喜歡四處拍拍照，學習新技術，偶爾也會看看心理學的東西分享所知，希望此處的內容對你有幫助 ~"))),e(d).createElement("div",{className:"bottom"},e(d).createElement("div",{className:"top-article-list"},e(d).createElement("div",{className:"title"},"最新文章"),p.map((function(t,a){return e(d).createElement("div",{key:a,onClick:C.bind(g,t.uuid),className:"article-title"},t.articleTitle)}))),e(d).createElement("div",{onClick:w,className:"to-board-btn"},"管理文章"))):null)}}))}();