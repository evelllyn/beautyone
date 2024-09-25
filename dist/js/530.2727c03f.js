"use strict";(self["webpackChunkvueworks"]=self["webpackChunkvueworks"]||[]).push([[530],{7530:function(l,t,s){s.r(t),s.d(t,{default:function(){return N}});var e=s(3396),r=s(7139),i=s(9242);const a={class:"check-out container"},d={class:"flow-container"},n={class:"flow-nav"},o=(0,e._)("li",{class:"flow-item"},[(0,e._)("div",{class:"fill flow-content fs-5"},[(0,e._)("i",{class:"bi bi-1-circle-fill"}),(0,e.Uk)(" FILL IN / 填寫資料 ")])],-1),c=(0,e._)("i",{class:"bi bi-2-circle-fill"},null,-1),u=(0,e._)("i",{class:"bi bi-3-circle-fill"},null,-1),_={key:0,class:"gratitude"},p=(0,e._)("div",{class:"gratitude-content"},[(0,e._)("h2",null,"訂單已成立"),(0,e._)("p",null,"感謝您的購買，我們將盡快為您出貨")],-1),h=[p],w={key:1,class:"payment-list fs-4"},f={class:"goods-list w-100"},k={key:0,class:"detail"},v={class:"table align-middle"},g=(0,e._)("thead",null,[(0,e._)("tr",null,[(0,e._)("th",null,"商品"),(0,e._)("th",null,"數量"),(0,e._)("th",null,"單價")])],-1),b=(0,e._)("td",{colspan:"2",class:"top-line"},null,-1),y={class:"top-line"},m={class:"contact-information w-100"},D={key:0,class:"customer"},z={class:"table"},C=(0,e._)("th",null,"訂單編號",-1),I=(0,e._)("th",null,"收件人姓名",-1),O=(0,e._)("th",null,"收件人電話",-1),q=(0,e._)("th",null,"Email",-1),L=(0,e._)("th",null,"收件人地址",-1),$=(0,e._)("th",null,"付款狀態",-1),x={key:0,class:"text-danger"},E={key:1,class:"text-success"},U={key:1,class:"pay"},H=(0,e._)("button",{class:"pay-btn btn w-100"},"確認付款",-1),K=[H];function M(l,t,s,p,H,M){const T=(0,e.up)("LoaDing");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(T,{active:H.isLoading},null,8,["active"]),(0,e._)("div",a,[(0,e._)("div",d,[(0,e._)("ul",n,[o,(0,e._)("li",{class:(0,r.C_)(["flow-item",{current:!H.order.is_paid}])},[(0,e._)("div",{class:(0,r.C_)(["check flow-content fs-5",{location:!H.order.is_paid}])},[c,(0,e.Uk)(" CHECK OUT / 確認付款 ")],2)],2),(0,e._)("li",{class:(0,r.C_)(["flow-item",{current:H.order.is_paid}])},[(0,e._)("div",{class:(0,r.C_)(["completed flow-content fs-5",{location:H.order.is_paid}])},[u,(0,e.Uk)(" COMPLETED / 完成訂購 ")],2)],2)])]),!0===H.order.is_paid?((0,e.wg)(),(0,e.iD)("div",_,h)):(0,e.kq)("",!0),!0===H.order.is_paid?((0,e.wg)(),(0,e.iD)("div",w,"訂單明細")):(0,e.kq)("",!0),(0,e._)("form",{class:"checkout-form",onSubmit:t[0]||(t[0]=(0,i.iM)(((...l)=>M.payOrder&&M.payOrder(...l)),["prevent"]))},[(0,e._)("div",f,[!1===H.order.is_paid?((0,e.wg)(),(0,e.iD)("div",k,"購物清單")):(0,e.kq)("",!0),(0,e._)("table",v,[g,(0,e._)("tbody",null,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(H.order.products,(l=>((0,e.wg)(),(0,e.iD)("tr",{key:l.id},[(0,e._)("td",null,(0,r.zw)(l.product.title),1),(0,e._)("td",null,(0,r.zw)(l.qty),1),(0,e._)("td",null,(0,r.zw)(l.final_total),1)])))),128))]),(0,e._)("tfoot",null,[(0,e._)("tr",null,[b,(0,e._)("td",y,"總計 $"+(0,r.zw)(H.order.total),1)])])])]),(0,e._)("div",m,[!1===H.order.is_paid?((0,e.wg)(),(0,e.iD)("div",D,"訂購人資訊")):(0,e.kq)("",!0),(0,e._)("table",z,[(0,e._)("tbody",null,[(0,e._)("tr",null,[C,(0,e._)("td",null,(0,r.zw)(H.orderId),1)]),(0,e._)("tr",null,[I,(0,e._)("td",null,(0,r.zw)(H.order.user.name),1)]),(0,e._)("tr",null,[O,(0,e._)("td",null,(0,r.zw)(H.order.user.tel),1)]),(0,e._)("tr",null,[q,(0,e._)("td",null,(0,r.zw)(H.order.user.email),1)]),(0,e._)("tr",null,[L,(0,e._)("td",null,(0,r.zw)(H.order.user.address),1)]),(0,e._)("tr",null,[$,(0,e._)("td",null,[H.order.is_paid?((0,e.wg)(),(0,e.iD)("span",E,"已付款")):((0,e.wg)(),(0,e.iD)("span",x,"尚未付款"))])])])]),!1===H.order.is_paid?((0,e.wg)(),(0,e.iD)("div",U,K)):(0,e.kq)("",!0)])],32)])],64)}var T={data(){return{order:{user:{}},orderId:"",isLoading:!1}},methods:{getOrder(){const l=`https://vue3-course-api.hexschool.io/api/eunho-api/order/${this.orderId}`;this.$http.get(l).then((l=>{l.data.success&&(this.order=l.data.order)}))},payOrder(){const l=`https://vue3-course-api.hexschool.io/api/eunho-api/pay/${this.orderId}`;this.$http.post(l).then((l=>{l.data.success&&this.getOrder()}))}},created(){this.orderId=this.$route.params.orderId,this.getOrder()}},Y=s(89);const F=(0,Y.Z)(T,[["render",M]]);var N=F}}]);
//# sourceMappingURL=530.2727c03f.js.map