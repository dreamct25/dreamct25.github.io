function e(e){return e&&e.__esModule?e.default:e}function t(e,t,a,n){Object.defineProperty(e,t,{get:a,set:n,enumerable:!0,configurable:!0})}var a=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire35b1;a.register("5Fj7c",function(n,l){Object.defineProperty(n.exports,"__esModule",{value:!0,configurable:!0}),t(n.exports,"default",function(){return m});var o=a("e0rqH"),i=a("ff1p0"),r=a("4PLf1"),s=a("stS02"),c=a("5NJK7"),d=a("jjUrw"),m=()=>{let{Fetch:t,setReducer:a}=(0,o.useContext)(s.NewContext),n=(0,r.useNavigate)(),{pathname:l}=(0,r.useLocation)(),m=JSON.parse(sessionStorage.getItem("temp"))||void 0,u=e=>{t.get("/logout",{token:e}).then(({data:e})=>{console.log(null==e?void 0:e.message),a(d.actionCreator,"setAuthInfo",{ac:"",token:""}),sessionStorage.removeItem("temp"),n({pathname:"/admin/login"})})};return(0,o.useEffect)(()=>{if(m){let{token:e}=m,{timesTemp:t}=(0,c.parseJwt)(e),o=(+new Date-t)/1e3/60/60>2;o?u(e):(a(d.actionCreator,"setAuthInfo",m),"/admin"===l||"/admin/login"===l?n({pathname:"/admin/article_all"}):n({pathname:location.pathname},{replace:!0}))}else n({pathname:"/admin/login"})},[]),/*@__PURE__*/e(o).createElement("div",{className:"container-fluid"},/*@__PURE__*/e(o).createElement(d.Container,null,/*@__PURE__*/e(o).createElement("div",{className:"header"},/*@__PURE__*/e(o).createElement("h1",null,"後台","/admin/login"===l?"":"/admin/article_all"===l?"文章":"留言","管理")),/*@__PURE__*/e(o).createElement("div",{className:"main"},/*@__PURE__*/e(o).createElement(i.Outlet,null)),m?/*@__PURE__*/e(o).createElement("div",{className:"right-top-group"},/*@__PURE__*/e(o).createElement("div",{onClick:()=>{let[,,e]=l.split("/");n({pathname:"article_all"===e?"/admin/msg_all":"/admin/article_all"})},className:"dashboard-switch-btn"},"/admin/article_all"===l?"留言管理":"文章管理"),/*@__PURE__*/e(o).createElement("div",{onClick:u.bind(void 0,m.token),className:"logout-btn"},"登出")):null))}}),a.register("5NJK7",function(e,a){t(e.exports,"parseJwt",function(){return n});let n=e=>{let t=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/");return JSON.parse(decodeURIComponent(window.atob(t).split("").map(e=>"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)).join("")))}});