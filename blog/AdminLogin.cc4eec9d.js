function e(e){return e&&e.__esModule?e.default:e}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire35b1;t.register("lcpGR",(function(n,a){var o,r,l,s,c;o=n.exports,Object.defineProperty(o,"__esModule",{value:!0,configurable:!0}),r=n.exports,l="default",s=function(){return g},c=function(e){return g=e},Object.defineProperty(r,l,{get:s,set:c,enumerable:!0,configurable:!0});var i=t("fcWWv"),u=t("e0rqH"),d=t("4PLf1"),p=t("stS02"),f=t("7gcRj"),m=t("4utvf");var g=()=>{const{$:t,Fetch:n,setReducer:a,changeWebTitle:o}=(0,u.useContext)(p.NewContext),r=(0,d.useNavigate)(),[{acName:l,pwdTemp:s,pwd:c},g]=(0,u.useState)({acName:"",pwdTemp:"",pwd:""}),v=(0,u.useRef)(l),w=(0,u.useRef)(c),b=async(e,{target:n})=>{const a={};if("pwdTemp"===e){a[e]=n.value;const o=await t.useSHA("SHA-256",n.value);a.pwd=o}else a[e]=n.value;g((e=>(0,i.default)({},e,a)))},y=()=>{n.post("/login",{data:{acName:v.current,pwd:w.current}}).then((({data:e})=>{a(m.actionCreator,"setAuthInfo",{ac:null==e?void 0:e.ac,token:null==e?void 0:e.token}),sessionStorage.setItem("temp",JSON.stringify({ac:null==e?void 0:e.ac,token:null==e?void 0:e.token})),r({pathname:"/admin/article_all"})})).catch((e=>alert("error")))},N=({keyCode:e})=>13===e&&y();return(0,u.useEffect)((()=>{v.current=l,w.current=c}),[l,c]),(0,u.useEffect)((()=>{if(sessionStorage.getItem("temp")){const e=JSON.parse(sessionStorage.getItem("temp"));a(m.actionCreator,"setAuthInfo",e)}return t(window).listener("keypress",N),()=>t(window).removeListener("keypress",N)}),[]),e(u).createElement(m.Container,null,o("後台登入"),e(u).createElement("div",{className:"login-layout"},e(u).createElement("div",{className:"header"},"登入系統"),e(u).createElement("div",{className:"input-group"},e(u).createElement(f.CustomInput,{label:"帳號",type:"text",bindVal:l,changeEvent:b.bind(void 0,"acName"),className:l?"lock":""}),e(u).createElement(f.CustomInput,{label:"密碼",type:"password",bindVal:s,changeEvent:b.bind(void 0,"pwdTemp"),className:s?"lock":""})),e(u).createElement("div",{onClick:y,className:"login-btn"},"登入")))}}));