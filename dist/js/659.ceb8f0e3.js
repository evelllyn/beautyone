"use strict";(self["webpackChunkvueworks"]=self["webpackChunkvueworks"]||[]).push([[659],{7659:function(l,t,e){e.r(t),e.d(t,{default:function(){return N}});var s=e(3396),r=e(7139),i=e(9242);const a={class:"check-out container"},n={class:"flow-container"},o={class:"flow-nav"},d=(0,s._)("li",{class:"flow-item"},[(0,s._)("div",{class:"fill flow-content fs-5"},[(0,s._)("i",{class:"bi bi-1-circle-fill"}),(0,s.Uk)(" FILL IN / 填寫資料 ")])],-1),c=(0,s._)("i",{class:"bi bi-2-circle-fill"},null,-1),u=(0,s._)("i",{class:"bi bi-3-circle-fill"},null,-1),_={key:0,class:"gratitude"},p=(0,s._)("div",{class:"gratitude-content"},[(0,s._)("h2",null,"訂單已成立"),(0,s._)("p",null,"感謝您的購買，我們將盡快為您出貨")],-1),h=[p],w={key:1,class:"payment-list fs-4"},f={class:"goods-list w-100"},k={key:0,class:"detail"},g={class:"table align-middle"},v=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"商品"),(0,s._)("th",null,"數量"),(0,s._)("th",null,"單價")])],-1),y=(0,s._)("td",{colspan:"2",class:"top-line"},null,-1),b={class:"top-line"},m={class:"contact-information w-100"},D={key:0,class:"customer"},z={class:"table"},C=(0,s._)("th",null,"訂單編號",-1),I=(0,s._)("th",null,"收件人姓名",-1),O=(0,s._)("th",null,"收件人電話",-1),$=(0,s._)("th",null,"Email",-1),q=(0,s._)("th",null,"收件人地址",-1),L=(0,s._)("th",null,"付款狀態",-1),x={key:0,class:"text-danger"},E={key:1,class:"text-success"},U={key:1,class:"pay"},H=(0,s._)("button",{type:"button",class:"pay-btn btn w-100"},"確認付款",-1),K=[H];function M(l,t,e,p,H,M){const T=(0,s.up)("LoaDing");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(T,{active:H.isLoading},null,8,["active"]),(0,s._)("div",a,[(0,s._)("div",n,[(0,s._)("ul",o,[d,(0,s._)("li",{class:(0,r.C_)(["flow-item",{current:!H.order.is_paid}])},[(0,s._)("div",{class:(0,r.C_)(["check flow-content fs-5",{location:!H.order.is_paid}])},[c,(0,s.Uk)(" CHECK OUT / 確認付款 ")],2)],2),(0,s._)("li",{class:(0,r.C_)(["flow-item",{current:H.order.is_paid}])},[(0,s._)("div",{class:(0,r.C_)(["completed flow-content fs-5",{location:H.order.is_paid}])},[u,(0,s.Uk)(" COMPLETED / 完成訂購 ")],2)],2)])]),!0===H.order.is_paid?((0,s.wg)(),(0,s.iD)("div",_,h)):(0,s.kq)("",!0),!0===H.order.is_paid?((0,s.wg)(),(0,s.iD)("div",w,"訂單明細")):(0,s.kq)("",!0),(0,s._)("form",{class:"checkout-form",onSubmit:t[0]||(t[0]=(0,i.iM)(((...l)=>M.payOrder&&M.payOrder(...l)),["prevent"]))},[(0,s._)("div",f,[!1===H.order.is_paid?((0,s.wg)(),(0,s.iD)("div",k,"購物清單")):(0,s.kq)("",!0),(0,s._)("table",g,[v,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(H.order.products,(t=>((0,s.wg)(),(0,s.iD)("tr",{key:t.id},[(0,s._)("td",null,(0,r.zw)(t.product.title),1),(0,s._)("td",null,(0,r.zw)(t.qty),1),(0,s._)("td",null,(0,r.zw)(l.$filters.currency(t.final_total)),1)])))),128))]),(0,s._)("tfoot",null,[(0,s._)("tr",null,[y,(0,s._)("td",b,"總計 $"+(0,r.zw)(l.$filters.currency(H.order.total)),1)])])])]),(0,s._)("div",m,[!1===H.order.is_paid?((0,s.wg)(),(0,s.iD)("div",D,"訂購人資訊")):(0,s.kq)("",!0),(0,s._)("table",z,[(0,s._)("tbody",null,[(0,s._)("tr",null,[C,(0,s._)("td",null,(0,r.zw)(H.orderId),1)]),(0,s._)("tr",null,[I,(0,s._)("td",null,(0,r.zw)(H.order.user.name),1)]),(0,s._)("tr",null,[O,(0,s._)("td",null,(0,r.zw)(H.order.user.tel),1)]),(0,s._)("tr",null,[$,(0,s._)("td",null,(0,r.zw)(H.order.user.email),1)]),(0,s._)("tr",null,[q,(0,s._)("td",null,(0,r.zw)(H.order.user.address),1)]),(0,s._)("tr",null,[L,(0,s._)("td",null,[H.order.is_paid?((0,s.wg)(),(0,s.iD)("span",E,"已付款")):((0,s.wg)(),(0,s.iD)("span",x,"尚未付款"))])])])]),!1===H.order.is_paid?((0,s.wg)(),(0,s.iD)("div",U,K)):(0,s.kq)("",!0)])],32)])],64)}var T={data(){return{order:{user:{}},orderId:"",isLoading:!1}},methods:{getOrder(){const l=`https://vue3-course-api.hexschool.io/api/eunho-api/order/${this.orderId}`;this.$http.get(l).then((l=>{l.data.success&&(this.order=l.data.order)})).catch((l=>{console.log(l)}))},payOrder(){const l=`https://vue3-course-api.hexschool.io/api/eunho-api/pay/${this.orderId}`;this.$http.post(l).then((l=>{l.data.success&&this.getOrder()})).catch((l=>{console.log(l)}))}},created(){this.orderId=this.$route.params.orderId,this.getOrder()}},Y=e(89);const F=(0,Y.Z)(T,[["render",M]]);var N=F}}]);
//# sourceMappingURL=659.ceb8f0e3.js.map