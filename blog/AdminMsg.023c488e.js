!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,a,n){Object.defineProperty(e,t,{get:a,set:n,enumerable:!0,configurable:!0})}var a=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire35b1;a.register("caVT7",(function(n,r){var s;s=n.exports,Object.defineProperty(s,"__esModule",{value:!0,configurable:!0}),t(n.exports,"default",(function(){return p}),(function(e){return p=e}));var i=a("8CHzG"),l=a("fto12"),c=a("75JRK"),m=a("e4tPT"),o=a("4Fae7"),u=a("bW9HB"),d=a("diPDO"),g=a("5OXzf"),f=a("e4nhi"),N=a("dR8pc"),E=a("7fGfG"),v=void 0,p=function(){var t,a=(0,d.useContext)(g.NewContext),n=a.$,r=a.Fetch,s=a.getReducer,p=a.rwdStatus,D=s((function(e){return(0,c.default)({},e.AdminLoginReducer)})).authInfo,h=(0,o.default)((0,d.useState)({msgData:[],renderMsgData:[],toggleModalStatus:!1,toggleDeleteModalStatus:!1,valGroups:{mud:"",articleID:"",msgNickName:"",msgContent:"",resContentList:[],createDate:""},currentAction:"",useDisabled:!1,paginationObj:{}}),2),b=h[0],y=b.msgData,C=b.renderMsgData,k=b.toggleModalStatus,T=b.toggleDeleteModalStatus,M=b.currentAction,P=b.valGroups,L=b.useDisabled,S=b.paginationObj,I=h[1],_=(0,o.default)((0,d.useState)(!1),2),O=_[0],x=_[1],w={hasPrev:S.hasPrev,hasNext:S.hasNext,currentPage:S.currentPage,pageTotal:S.pageTotal,pageSize:S.pageSize,partPage:S.partPage,postNext:function(e){var t=e.pages,a=e.partPage,n=e.pageSize,r=f.default.createParts(y,t,a,n),s=r.pageObj,i=r.renderItem;I((function(e){return(0,m.default)((0,c.default)({},e),{renderMsgData:i,paginationObj:s})}))}},A=(t=(0,i.default)((function(){return(0,u.__generator)(this,(function(e){switch(e.label){case 0:return x(!0),[4,r.get("/back_view_all",{token:D.token}).then((function(e){var t=e.data;r.get("/back_msg_l_all",{token:D.token}).then((function(e){var a=n.maps(e.data,(function(e){var a=n.filter(t,(function(t){return t.uuid===e.articleID}));return a.length>0?(0,m.default)((0,c.default)({},e),{articleTitle:a[0].articleTitle}):e})),r=f.default.createParts(a,1,10,10),s=r.pageObj,i=r.renderItem;I((function(e){return(0,m.default)((0,c.default)({},e),{msgData:a,renderMsgData:i,paginationObj:s})}))})).catch((function(){return alert("error")}))})).catch((function(){return alert("error")}))];case 1:return e.sent(),x(!1),[2]}}))})),function(){return t.apply(this,arguments)}),j=function(e,t){I("DELETE"===e?function(a){return(0,m.default)((0,c.default)({},a),{currentAction:e,valGroups:t,toggleDeleteModalStatus:!0})}:function(a){return(0,m.default)((0,c.default)({},a),{currentAction:e,valGroups:t,toggleModalStatus:!0,useDisabled:"READ"===e})})},R=function(e){var t=JSON.parse(JSON.stringify(P)),a=n.findIndexOfObj(t.resContentList,(function(t){return t.resMsgID===e}));t.resContentList=t.resContentList.remove(a),I((function(e){return(0,m.default)((0,c.default)({},e),{valGroups:t})}))},G=function(e,t){var a;(0,(a={},(0,l.default)(a,e,(0,i.default)((function(){var a,s;return(0,u.__generator)(this,(function(i){switch(i.label){case 0:return"confirm"!==t||"READ"===e?[3,2]:(a=n.formatDateTime({formatDate:new Date,formatType:"yyyy-MM-dd HH:mm:ss"}),(s=JSON.parse(JSON.stringify(P))).modifyDate=a,[4,r.post("/update_msg_l",{token:D.token,data:s})]);case 1:i.sent(),A(),i.label=2;case 2:return[2]}}))}))),(0,l.default)(a,"DELETE",(0,i.default)((function(){var e;return(0,u.__generator)(this,(function(a){switch(a.label){case 0:return"confirm"!==t?[3,2]:(e=P.mud,[4,r.post("/delete_msg_l",{token:D.token,data:{mud:e}})]);case 1:a.sent(),A(),a.label=2;case 2:return[2]}}))}))),a)[e])().finally((function(){setTimeout((function(){I((function(e){return(0,m.default)((0,c.default)({},e),{toggleModalStatus:!1,toggleDeleteModalStatus:!1,valGroups:{mud:"",articleID:"",msgNickName:"",msgContent:"",resContentList:[],createDate:""},useDisabled:!1})}))}),600)}))};return(0,d.useEffect)((function(){D.token&&A()}),[D]),e(d).createElement(E.Container,null,e(d).createElement("div",{className:"msg-layout"},p?null:e(d).createElement("div",{className:"msg-list-header"},["留言者","留言內容","留言文章","留言 / 修改日期","操作項"].map((function(t,a){return e(d).createElement("div",{key:a},t)}))),e(d).createElement("div",{className:"msg-list"},0===C.length?e(d).createElement("div",{className:"no-data"},"No Data"):C.map((function(t,a){return p?e(d).createElement("div",{key:a,className:"msg-list-item"},e(d).createElement("div",{className:"top"},e(d).createElement("div",{className:"left"},e(d).createElement("div",null,"留言者"),e(d).createElement("div",null,"留言內容"),e(d).createElement("div",null,"留言文章"),e(d).createElement("div",null,"留言 / 修改日期")),e(d).createElement("div",{className:"right"},e(d).createElement("div",null,t.msgNickName),e(d).createElement("div",null,t.msgContent),e(d).createElement("div",null,t.articleTitle),e(d).createElement("div",null,n.formatDateTime({formatDate:t.createDate,formatType:"yyyy-MM-dd"})," / ",n.formatDateTime({formatDate:t.modifyDate,formatType:"yyyy-MM-dd"})))),e(d).createElement("div",{className:"bottom"},e(d).createElement("div",{className:"btn-group"},e(d).createElement("div",{onClick:j.bind(v,"READ",{mud:"",msgNickName:t.msgNickName,msgContent:t.msgContent,articleID:"",resContentList:t.resContentList,createDate:""}),className:"preview"},e(d).createElement("i",{className:"fas fa-eye"})),e(d).createElement("div",{onClick:j.bind(v,"EDIT",{mud:t.uuid,msgNickName:t.msgNickName,msgContent:t.msgContent,articleID:t.articleID,resContentList:t.resContentList,createDate:t.createDate}),className:"edit-btn"},e(d).createElement("i",{className:"fas fa-pencil"})),e(d).createElement("div",{onClick:j.bind(v,"DELETE",{mud:t.uuid,msgNickName:t.msgNickName,msgContent:"",articleID:"",resContentList:[],createDate:""}),className:"delete-btn"},e(d).createElement("i",{className:"fas fa-trash-alt"}))))):e(d).createElement("div",{key:a,className:"msg-list-item"},e(d).createElement("div",null,t.msgNickName),e(d).createElement("div",null,t.msgContent),e(d).createElement("div",null,t.articleTitle),e(d).createElement("div",null,n.formatDateTime({formatDate:t.createDate,formatType:"yyyy-MM-dd"})," / ",n.formatDateTime({formatDate:t.modifyDate,formatType:"yyyy-MM-dd"})),e(d).createElement("div",{className:"btn-group"},e(d).createElement("div",{onClick:j.bind(v,"READ",{mud:"",msgNickName:t.msgNickName,msgContent:t.msgContent,articleID:"",resContentList:t.resContentList,createDate:""}),className:"preview"},e(d).createElement("i",{className:"fas fa-eye"})),e(d).createElement("div",{onClick:j.bind(v,"EDIT",{mud:t.uuid,msgNickName:t.msgNickName,msgContent:t.msgContent,articleID:t.articleID,resContentList:t.resContentList,createDate:t.createDate}),className:"edit-btn"},e(d).createElement("i",{className:"fas fa-pencil"})),e(d).createElement("div",{onClick:j.bind(v,"DELETE",{mud:t.uuid,msgNickName:t.msgNickName,msgContent:"",articleID:"",resContentList:[],createDate:""}),className:"delete-btn"},e(d).createElement("i",{className:"fas fa-trash-alt"}))))}))),e(d).createElement(N.Pagination,w)),e(d).createElement(N.ActionModal,{acionModalTitle:"".concat({DELETE:"刪除",READ:"檢視",EDIT:"編輯"}[M],"留言"),toggleModalStatus:k,confirmEvent:G.bind(v,M,"confirm"),cancelEvent:L?void 0:G.bind(v,M,"cancel")},e(d).createElement("div",{className:"action-modal-body"},e(d).createElement("div",{className:"top"},e(d).createElement(N.CustomInput,{label:"留言者",bindVal:P.msgNickName,type:"text",disabled:!0,className:P.msgNickName?"lock":""}),e(d).createElement(N.CustomTextArea,{label:"留言內容",bindVal:P.msgContent,type:"text",disabled:!0,className:P.msgContent?"lock":""})),e(d).createElement("div",{className:"bottom"},e(d).createElement("div",{className:"title"},"回覆留言"),e(d).createElement("div",{className:"res-msg-list-outer"},P.resContentList.length>0?e(d).createElement("div",{className:"res-msg-list"},P.resContentList.map((function(t,a){return e(d).createElement("div",{key:a,className:"res-msg-list-item-outer"},e(d).createElement("div",{className:"row g-0"},e(d).createElement("div",{className:L?"col-sm-12":"col-sm-11"},e(d).createElement("div",{className:"res-msg-list-item"},e(d).createElement("div",{className:"res-msg-title"}," ",e(d).createElement("div",null,t.resMsgNickName),e(d).createElement("div",{className:"right-group"},e(d).createElement("div",null,n.formatDateTime({formatDate:t.createDate,formatType:"yyyy-MM-dd"})))),e(d).createElement("div",null,t.resMsgContent))),L?null:e(d).createElement("div",{className:"col-sm-1"},e(d).createElement("div",{onClick:R.bind(v,t.resMsgID),className:"delete-msg-btn"},e(d).createElement("i",{className:"fas fa-trash-alt"})))))}))):e(d).createElement("div",null,"無回覆內容"))))),e(d).createElement(N.ActionModal,{toggleModalStatus:T,confirmEvent:G.bind(v,M,"confirm"),cancelEvent:G.bind(v,M,"cancel")},e(d).createElement("div",{className:"action-modal-body"},e(d).createElement("div",{className:"delete-context"},"確定要刪除 ",P.msgNickName," 此人的留言嗎？"))),e(d).createElement(N.Loading,{loadingStatus:O}))}})),a.register("e4nhi",(function(e,n){t(e.exports,"default",(function(){return m}));var r=a("655lB"),s=a("5UHXD"),i=a("fto12"),l=a("4Fae7"),c=function(){"use strict";function e(){(0,r.default)(this,e)}return(0,s.default)(e,null,[{key:"createParts",value:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var n=(0,l.default)(t,4),r=n[0],s=n[1],i=n[2],c=n[3];this.setting.totalLength=r.length,this.setting.partPage=i,this.setting.pageTotal=Math.ceil(this.setting.totalLength/this.setting.partPage),this.setting.pageSize=c,s=void 0===s?1:s,this.setting.currentPage=s,this.setting.hasPrev=this.setting.currentPage>1,this.setting.hasNext=this.setting.currentPage<this.setting.totalLength,this.setting.currentPage===this.setting.pageTotal&&(this.setting.hasNext=!1),this.setting.currentPage>this.setting.pageTotal&&(this.setting.currentPage=this.setting.pageTotal);var m=this.setting.currentPage*this.setting.partPage-this.setting.partPage+1,o=this.setting.currentPage*this.setting.partPage,u=r,d=u.map((function(e,t){return t+1>=m&&t+1<=o&&e})).filter((function(e){return!1!==e}));return{pageObj:this.setting,renderItem:d}}}]),e}();(0,i.default)(c,"setting",{totalLength:0,partPage:0,pageTotal:0,currentPage:1,hasPrev:!1,hasNext:!0,pageSize:0});var m=c}))}();