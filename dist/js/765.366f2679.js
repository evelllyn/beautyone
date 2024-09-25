(self["webpackChunkvueworks"]=self["webpackChunkvueworks"]||[]).push([[765],{8803:function(t,e,s){
/*!
  * Bootstrap toast.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,n){t.exports=n(s(1884),s(4130),s(9069),s(1437))})(0,(function(t,e,s,n){"use strict";const i="toast",a="bs.toast",o=`.${a}`,r=`mouseover${o}`,c=`mouseout${o}`,l=`focusin${o}`,u=`focusout${o}`,h=`hide${o}`,d=`hidden${o}`,m=`show${o}`,_=`shown${o}`,g="fade",v="hide",p="show",f="showing",b={animation:"boolean",autohide:"boolean",delay:"number"},w={animation:!0,autohide:!0,delay:5e3};class k extends t{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return w}static get DefaultType(){return b}static get NAME(){return i}show(){const t=e.trigger(this._element,m);if(t.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(g);const s=()=>{this._element.classList.remove(f),e.trigger(this._element,_),this._maybeScheduleHide()};this._element.classList.remove(v),n.reflow(this._element),this._element.classList.add(p,f),this._queueCallback(s,this._element,this._config.animation)}hide(){if(!this.isShown())return;const t=e.trigger(this._element,h);if(t.defaultPrevented)return;const s=()=>{this._element.classList.add(v),this._element.classList.remove(f,p),e.trigger(this._element,d)};this._element.classList.add(f),this._queueCallback(s,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(p),super.dispose()}isShown(){return this._element.classList.contains(p)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e;break}if(e)return void this._clearTimeout();const s=t.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){e.on(this._element,r,(t=>this._onInteraction(t,!0))),e.on(this._element,c,(t=>this._onInteraction(t,!1))),e.on(this._element,l,(t=>this._onInteraction(t,!0))),e.on(this._element,u,(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=k.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return s.enableDismissTrigger(k),n.defineJQueryPlugin(k),k}))},1418:function(t,e,s){"use strict";s.d(e,{Z:function(){return k}});var n=s(3396);const i={class:"toast-container position-absolute pe-3"};function a(t,e,s,a,o,r){const c=(0,n.up)("ToaSt");return(0,n.wg)(),(0,n.iD)("div",i,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.messages,((t,e)=>((0,n.wg)(),(0,n.j4)(c,{key:e,msg:t},null,8,["msg"])))),128))])}s(7658);var o=s(7139);const r={class:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true",ref:"toast"},c={class:"toast-header"},l={class:"me-auto"},u=(0,n._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1),h={key:0,class:"toast-body"};function d(t,e,s,i,a,d){return(0,n.wg)(),(0,n.iD)("div",r,[(0,n._)("div",c,[(0,n._)("span",{class:(0,o.C_)([`bg-${s.msg.style}`,"p-2 rounded me-2 d-inline-block"])},null,2),(0,n._)("strong",l,(0,o.zw)(s.msg.title),1),u]),s.msg.content?((0,n.wg)(),(0,n.iD)("div",h,(0,o.zw)(s.msg.content),1)):(0,n.kq)("",!0)],512)}var m=s(8803),_=s.n(m),g={props:["msg"],mounted(){const t=this.$refs.toast,e=new(_())(t,{delay:3e3});e.show()}},v=s(89);const p=(0,v.Z)(g,[["render",d]]);var f=p,b={data(){return{messages:[]}},components:{ToaSt:f},inject:["emitter"],mounted(){this.emitter.on("push-message",(t=>{const{style:e="success",title:s,content:n}=t;this.messages.push({style:e,title:s,content:n})}))}};const w=(0,v.Z)(b,[["render",a]]);var k=w},8765:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return T}});var n=s(3396);const i={class:"container-fluid mt-3 position-relative"};function a(t,e,s,a,o,r){const c=(0,n.up)("NavBar"),l=(0,n.up)("ToastMessages"),u=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(c),(0,n._)("div",i,[(0,n.Wm)(l),(0,n.Wm)(u)])],64)}s(7658);var o=s(5820),r=s(9242);const c={class:"navbar navbar-expand-lg navbar-light bg-light"},l={class:"container-fluid"},u=(0,n._)("a",{class:"navbar-brand",href:"#"},"後台",-1),h={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},d={class:"navbar-nav"},m={id:"navbarNavAltMarkup"},_={class:"navbar-nav"},g=(0,n._)("span",{class:"badge rounded-pill bg-danger"},"0",-1);function v(t,e,s,i,a,o){const v=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("nav",c,[(0,n._)("div",l,[u,(0,n._)("div",h,[(0,n._)("div",d,[(0,n.Wm)(v,{to:"/managecenter/products",class:"nav-link"},{default:(0,n.w5)((()=>[(0,n.Uk)("商品")])),_:1}),(0,n.Wm)(v,{to:"/managecenter/orders",class:"nav-link"},{default:(0,n.w5)((()=>[(0,n.Uk)("訂單")])),_:1}),(0,n.Wm)(v,{to:"/managecenter/coupons",class:"nav-link"},{default:(0,n.w5)((()=>[(0,n.Uk)("優惠券")])),_:1})])]),(0,n._)("div",m,[(0,n._)("div",_,[(0,n.Wm)(v,{to:"/cart",class:"nav-link"},{default:(0,n.w5)((()=>[(0,n.Uk)(" 購物車 "),g])),_:1}),(0,n._)("a",{href:"#",onClick:e[0]||(e[0]=(0,r.iM)(((...t)=>o.logout&&o.logout(...t)),["prevent"])),class:"nav-link"},"登出")])])])])}var p={methods:{logout(){const t="https://vue3-course-api.hexschool.io/logout";this.$http.post(t,this.user).then((t=>{t.data.success&&this.$router.push("/login")}))}}},f=s(89);const b=(0,f.Z)(p,[["render",v]]);var w=b,k=s(1418),y={components:{NavBar:w,ToastMessages:k.Z},provide(){return{emitter:o.Z}},created(){const t=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=t;const e="https://vue3-course-api.hexschool.io/api/user/check";this.$http.post(e,this.user).then((t=>{t.data.success||this.$router.push("/login")}))}};const $=(0,f.Z)(y,[["render",a]]);var T=$}}]);
//# sourceMappingURL=765.366f2679.js.map