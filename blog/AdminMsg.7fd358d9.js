function e(e){return e&&e.__esModule?e.default:e}function t(e,t,a,n){Object.defineProperty(e,t,{get:a,set:n,enumerable:!0,configurable:!0})}var a=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire35b1;a.register("5uSfZ",(function(n,s){var l;l=n.exports,Object.defineProperty(l,"__esModule",{value:!0,configurable:!0}),t(n.exports,"default",(function(){return u}),(function(e){return u=e}));var i=a("fcWWv"),r=a("kVWnA"),m=a("e0rqH"),c=a("stS02"),o=a("g5eIn"),d=a("7gcRj"),g=a("3Qkmj");var u=()=>{const{$:t,Fetch:a,getReducer:n,rwdStatus:s}=(0,m.useContext)(c.NewContext),{authInfo:l}=n((e=>(0,i.default)({},e.AdminLoginReducer))),[{msgData:u,renderMsgData:f,toggleModalStatus:N,toggleDeleteModalStatus:E,currentAction:v,valGroups:p,useDisabled:D,paginationObj:h},y]=(0,m.useState)({msgData:[],renderMsgData:[],toggleModalStatus:!1,toggleDeleteModalStatus:!1,valGroups:{mud:"",articleID:"",msgNickName:"",msgContent:"",resContentList:[],createDate:""},currentAction:"",useDisabled:!1,paginationObj:{}}),[b,k]=(0,m.useState)(!1),C={hasPrev:h.hasPrev,hasNext:h.hasNext,currentPage:h.currentPage,pageTotal:h.pageTotal,pageSize:h.pageSize,partPage:h.partPage,postNext:e=>{const{pages:t,partPage:a,pageSize:n}=e,{pageObj:s,renderItem:l}=o.default.createParts(u,t,a,n);y((e=>(0,r.default)((0,i.default)({},e),{renderMsgData:l,paginationObj:s})))}},M=async()=>{k(!0),await a.get("/back_view_all",{token:l.token}).then((({data:e})=>{a.get("/back_msg_l_all",{token:l.token}).then((a=>{const n=t.maps(a.data,(a=>{const n=t.filter(e,(({uuid:e})=>e===a.articleID));return n.length>0?(0,r.default)((0,i.default)({},a),{articleTitle:n[0].articleTitle}):a})),{pageObj:s,renderItem:l}=o.default.createParts(n,1,10,10);y((e=>(0,r.default)((0,i.default)({},e),{msgData:n,renderMsgData:l,paginationObj:s})))})).catch((()=>alert("error")))})).catch((()=>alert("error"))),k(!1)},T=(e,t)=>{y("DELETE"===e?a=>(0,r.default)((0,i.default)({},a),{currentAction:e,valGroups:t,toggleDeleteModalStatus:!0}):a=>(0,r.default)((0,i.default)({},a),{currentAction:e,valGroups:t,toggleModalStatus:!0,useDisabled:"READ"===e}))},P=e=>{const a=JSON.parse(JSON.stringify(p)),n=t.findIndexOfObj(a.resContentList,(({resMsgID:t})=>t===e));a.resContentList=a.resContentList.remove(n),y((e=>(0,r.default)((0,i.default)({},e),{valGroups:a})))},L=(e,n)=>{(0,{[e]:async()=>{if("confirm"===n&&"READ"!==e){const e=t.formatDateTime({formatDate:new Date,formatType:"yyyy-MM-dd HH:mm:ss"}),n=JSON.parse(JSON.stringify(p));n.modifyDate=e,await a.post("/update_msg_l",{token:l.token,data:n}),M()}},DELETE:async()=>{if("confirm"===n){const{mud:e}=p;await a.post("/delete_msg_l",{token:l.token,data:{mud:e}}),M()}}}[e])().finally((()=>{setTimeout((()=>{y((e=>(0,r.default)((0,i.default)({},e),{toggleModalStatus:!1,toggleDeleteModalStatus:!1,valGroups:{mud:"",articleID:"",msgNickName:"",msgContent:"",resContentList:[],createDate:""},useDisabled:!1})))}),600)}))};return(0,m.useEffect)((()=>{l.token&&M()}),[l]),e(m).createElement(g.Container,null,e(m).createElement("div",{className:"msg-layout"},s?null:e(m).createElement("div",{className:"msg-list-header"},["留言者","留言內容","留言文章","留言 / 修改日期","操作項"].map(((t,a)=>e(m).createElement("div",{key:a},t)))),e(m).createElement("div",{className:"msg-list"},0===f.length?e(m).createElement("div",{className:"no-data"},"No Data"):f.map(((a,n)=>s?e(m).createElement("div",{key:n,className:"msg-list-item"},e(m).createElement("div",{className:"top"},e(m).createElement("div",{className:"left"},e(m).createElement("div",null,"留言者"),e(m).createElement("div",null,"留言內容"),e(m).createElement("div",null,"留言文章"),e(m).createElement("div",null,"留言 / 修改日期")),e(m).createElement("div",{className:"right"},e(m).createElement("div",null,a.msgNickName),e(m).createElement("div",null,a.msgContent),e(m).createElement("div",null,a.articleTitle),e(m).createElement("div",null,t.formatDateTime({formatDate:a.createDate,formatType:"yyyy-MM-dd"})," / ",t.formatDateTime({formatDate:a.modifyDate,formatType:"yyyy-MM-dd"})))),e(m).createElement("div",{className:"bottom"},e(m).createElement("div",{className:"btn-group"},e(m).createElement("div",{onClick:T.bind(void 0,"READ",{mud:"",msgNickName:a.msgNickName,msgContent:a.msgContent,articleID:"",resContentList:a.resContentList,createDate:""}),className:"preview"},e(m).createElement("i",{className:"fas fa-eye"})),e(m).createElement("div",{onClick:T.bind(void 0,"EDIT",{mud:a.uuid,msgNickName:a.msgNickName,msgContent:a.msgContent,articleID:a.articleID,resContentList:a.resContentList,createDate:a.createDate}),className:"edit-btn"},e(m).createElement("i",{className:"fas fa-pencil"})),e(m).createElement("div",{onClick:T.bind(void 0,"DELETE",{mud:a.uuid,msgNickName:a.msgNickName,msgContent:"",articleID:"",resContentList:[],createDate:""}),className:"delete-btn"},e(m).createElement("i",{className:"fas fa-trash-alt"}))))):e(m).createElement("div",{key:n,className:"msg-list-item"},e(m).createElement("div",null,a.msgNickName),e(m).createElement("div",null,a.msgContent),e(m).createElement("div",null,a.articleTitle),e(m).createElement("div",null,t.formatDateTime({formatDate:a.createDate,formatType:"yyyy-MM-dd"})," / ",t.formatDateTime({formatDate:a.modifyDate,formatType:"yyyy-MM-dd"})),e(m).createElement("div",{className:"btn-group"},e(m).createElement("div",{onClick:T.bind(void 0,"READ",{mud:"",msgNickName:a.msgNickName,msgContent:a.msgContent,articleID:"",resContentList:a.resContentList,createDate:""}),className:"preview"},e(m).createElement("i",{className:"fas fa-eye"})),e(m).createElement("div",{onClick:T.bind(void 0,"EDIT",{mud:a.uuid,msgNickName:a.msgNickName,msgContent:a.msgContent,articleID:a.articleID,resContentList:a.resContentList,createDate:a.createDate}),className:"edit-btn"},e(m).createElement("i",{className:"fas fa-pencil"})),e(m).createElement("div",{onClick:T.bind(void 0,"DELETE",{mud:a.uuid,msgNickName:a.msgNickName,msgContent:"",articleID:"",resContentList:[],createDate:""}),className:"delete-btn"},e(m).createElement("i",{className:"fas fa-trash-alt"}))))))),e(m).createElement(d.Pagination,C)),e(m).createElement(d.ActionModal,{acionModalTitle:`${{DELETE:"刪除",READ:"檢視",EDIT:"編輯"}[v]}留言`,toggleModalStatus:N,confirmEvent:L.bind(void 0,v,"confirm"),cancelEvent:D?void 0:L.bind(void 0,v,"cancel")},e(m).createElement("div",{className:"action-modal-body"},e(m).createElement("div",{className:"top"},e(m).createElement(d.CustomInput,{label:"留言者",bindVal:p.msgNickName,type:"text",disabled:!0,className:p.msgNickName?"lock":""}),e(m).createElement(d.CustomTextArea,{label:"留言內容",bindVal:p.msgContent,type:"text",disabled:!0,className:p.msgContent?"lock":""})),e(m).createElement("div",{className:"bottom"},e(m).createElement("div",{className:"title"},"回覆留言"),e(m).createElement("div",{className:"res-msg-list-outer"},p.resContentList.length>0?e(m).createElement("div",{className:"res-msg-list"},p.resContentList.map(((a,n)=>e(m).createElement("div",{key:n,className:"res-msg-list-item-outer"},e(m).createElement("div",{className:"row g-0"},e(m).createElement("div",{className:D?"col-sm-12":"col-sm-11"},e(m).createElement("div",{className:"res-msg-list-item"},e(m).createElement("div",{className:"res-msg-title"}," ",e(m).createElement("div",null,a.resMsgNickName),e(m).createElement("div",{className:"right-group"},e(m).createElement("div",null,t.formatDateTime({formatDate:a.createDate,formatType:"yyyy-MM-dd"})))),e(m).createElement("div",null,a.resMsgContent))),D?null:e(m).createElement("div",{className:"col-sm-1"},e(m).createElement("div",{onClick:P.bind(void 0,a.resMsgID),className:"delete-msg-btn"},e(m).createElement("i",{className:"fas fa-trash-alt"})))))))):e(m).createElement("div",null,"無回覆內容"))))),e(m).createElement(d.ActionModal,{toggleModalStatus:E,confirmEvent:L.bind(void 0,v,"confirm"),cancelEvent:L.bind(void 0,v,"cancel")},e(m).createElement("div",{className:"action-modal-body"},e(m).createElement("div",{className:"delete-context"},"確定要刪除 ",p.msgNickName," 此人的留言嗎？"))),e(m).createElement(d.Loading,{loadingStatus:b}))}})),a.register("g5eIn",(function(e,n){t(e.exports,"default",(function(){return i}));var s=a("G2HKY");class l{static createParts(...e){let[t,a,n,s]=e;this.setting.totalLength=t.length,this.setting.partPage=n,this.setting.pageTotal=Math.ceil(this.setting.totalLength/this.setting.partPage),this.setting.pageSize=s,a=void 0===a?1:a,this.setting.currentPage=a,this.setting.hasPrev=this.setting.currentPage>1,this.setting.hasNext=this.setting.currentPage<this.setting.totalLength,this.setting.currentPage===this.setting.pageTotal&&(this.setting.hasNext=!1),this.setting.currentPage>this.setting.pageTotal&&(this.setting.currentPage=this.setting.pageTotal);const l=this.setting.currentPage*this.setting.partPage-this.setting.partPage+1,i=this.setting.currentPage*this.setting.partPage,r=t.map(((e,t)=>t+1>=l&&t+1<=i&&e)).filter((e=>!1!==e));return{pageObj:this.setting,renderItem:r}}}(0,s.default)(l,"setting",{totalLength:0,partPage:0,pageTotal:0,currentPage:1,hasPrev:!1,hasNext:!0,pageSize:0});var i=l}));