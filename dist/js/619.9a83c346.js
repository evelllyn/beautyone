"use strict";(self["webpackChunkvueworks"]=self["webpackChunkvueworks"]||[]).push([[619],{6619:function(t,a,e){e.r(a),e.d(a,{default:function(){return qt}});var s=e(3396),i=e(7139),c=e(9242);const o={class:"item-content container"},l={class:"row justify-content-center"},n={"aria-label":"breadcrumb"},r={class:"breadcrumb"},d={class:"breadcrumb-item"},u={class:"breadcrumb-item"},p={class:"breadcrumb-item active","aria-current":"page"},b={class:"img-content"},h=["src"],g={class:"allContent"},m={class:"description"},_=(0,s._)("span",null,"【產品描述】",-1),v=(0,s._)("br",null,null,-1),y=(0,s._)("br",null,null,-1),w={key:0,class:"fs-3 text-danger"},k={key:1},T={key:2},C=(0,s._)("div",{class:"discount"},[(0,s._)("p",null,"即日起至 8 / 8 全站滿$1000免運費"),(0,s._)("p",null,[(0,s.Uk)("輸入優惠碼「"),(0,s._)("span",null,"BEAUTY2024"),(0,s.Uk)("」享全站88折優惠")])],-1),f={class:"addCart"},q={class:"input-group"},D=(0,s._)("i",{class:"bi bi-dash-lg"},null,-1),I=[D],x=(0,s._)("i",{class:"bi bi-plus-lg"},null,-1),$=[x],N=["disabled"],O={class:"tab-container"},L={class:"tab-nav"},U={class:"tab-item"},z={class:"tab-item"},S={key:0,class:"buy-content"},E={key:1,class:"carry-content"},P={class:"question"},A=(0,s._)("h5",{class:"words fw-bold"},[(0,s._)("span",{class:"fs-2"},"FAQ"),(0,s.Uk)("常見問題")],-1),B={class:"questionBox"},W={class:"goods"},j=(0,s._)("h5",{class:"words fw-bold"},[(0,s._)("span",{class:"fs-2"},"ON SALE"),(0,s.Uk)("促銷商品")],-1),Z={class:"onSaleGoods"},F=["onClick"],H={key:0,class:"sale-logo"},Y={key:1,class:"on"},G={key:2,class:"sale"},M=(0,s._)("div",{class:"more"},"查看更多",-1),R={class:"card-body"},K={class:"card-title"},Q={class:"product-price"},V={key:0,class:"text-danger"},J={key:1},X={key:2,class:"del-price float-end"};function tt(t,a,e,D,x,tt){const at=(0,s.up)("LoaDing"),et=(0,s.up)("router-link"),st=(0,s.up)("AccorDion");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(at,{active:t.isLoading},null,8,["active"]),(0,s._)("div",o,[(0,s._)("div",l,[(0,s._)("nav",n,[(0,s._)("ol",r,[(0,s._)("li",d,[(0,s.Wm)(et,{to:"/",class:"item-link"},{default:(0,s.w5)((()=>[(0,s.Uk)("首頁")])),_:1})]),(0,s._)("li",u,[(0,s.Wm)(et,{to:"/products",class:"item-link"},{default:(0,s.w5)((()=>[(0,s.Uk)("所有產品")])),_:1})]),(0,s._)("li",p,(0,i.zw)(x.product.title),1)])]),(0,s._)("div",b,[(0,s._)("img",{src:x.product.imageUrl,alt:"商品圖片",class:"img-fluid mb-3"},null,8,h)]),(0,s._)("div",g,[(0,s._)("article",null,[(0,s._)("h2",null,(0,i.zw)(x.product.title),1),(0,s._)("div",m,[_,v,(0,s.Uk)(" "+(0,i.zw)(x.product.description),1),y,(0,s.Uk)(" "+(0,i.zw)(x.product.content),1)])]),x.product.price?((0,s.wg)(),(0,s.iD)("div",w," NT $"+(0,i.zw)(x.product.price),1)):(0,s.kq)("",!0),x.product.price?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",k,(0,i.zw)(x.product.origin_price),1)),x.product.price!=x.product.origin_price?((0,s.wg)(),(0,s.iD)("del",T," 原價NT$ "+(0,i.zw)(x.product.origin_price),1)):(0,s.kq)("",!0),C,(0,s._)("div",f,[(0,s._)("div",q,[(0,s._)("button",{class:"num-btn btn",type:"button",onClick:a[0]||(a[0]=t=>tt.minusNumber(x.item))},I),(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":a[1]||(a[1]=t=>x.item.qty=t),min:"1",class:"form-control text-center",placeholder:"","aria-label":"",onInput:a[2]||(a[2]=(...t)=>tt.manualInput&&tt.manualInput(...t))},null,544),[[c.nr,x.item.qty,void 0,{number:!0}]]),(0,s._)("button",{class:"num-btn btn",type:"button",onClick:a[3]||(a[3]=t=>tt.addNumber(x.item))},$)]),(0,s._)("button",{type:"button",class:"cart-btn btn",disabled:this.status.loadingItem===x.product.id,onClick:a[4]||(a[4]=t=>tt.addToCart(x.id))}," 加入購物車 ",8,N)])]),(0,s._)("div",O,[(0,s._)("ul",L,[(0,s._)("li",U,[(0,s._)("button",{type:"button",class:(0,i.C_)(["tab-link buy bg-white",{active:"buyTab"===x.selectedTab}]),onClick:a[5]||(a[5]=t=>x.selectedTab="buyTab")},"ORDER NOTIFICATION / 訂購須知",2)]),(0,s._)("li",z,[(0,s._)("button",{type:"button",class:(0,i.C_)(["tab-link carry bg-white",{active:"carryTab"===x.selectedTab}]),onClick:a[6]||(a[6]=t=>x.selectedTab="carryTab")},"SHIPPING NOTIFICATION / 配送須知",2)])]),((0,s.wg)(),(0,s.j4)((0,s.LL)(tt.selectTabComponent),{class:"tab-content"},{default:(0,s.w5)((()=>["buyTab"===x.selectedTab?((0,s.wg)(),(0,s.iD)("div",S)):"carryTab"===x.selectedTab?((0,s.wg)(),(0,s.iD)("div",E)):(0,s.kq)("",!0)])),_:1}))])]),(0,s._)("div",P,[A,(0,s._)("div",B,[(0,s.Wm)(st)])]),(0,s._)("div",W,[j,(0,s._)("div",Z,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(x.onSaleProducts,(t=>((0,s.wg)(),(0,s.iD)("div",{class:"col col-6 col-md-3 my-4",key:t.id},[(0,s._)("div",{class:"card",onClick:a=>tt.getProductDescription(t.id)},[(0,s._)("div",{class:"card-img-top",style:(0,i.j5)({backgroundImage:`url(${t.imageUrl})`})},[t.price!==t.origin_price?((0,s.wg)(),(0,s.iD)("div",H)):(0,s.kq)("",!0),t.price!==t.origin_price?((0,s.wg)(),(0,s.iD)("span",Y,"ON")):(0,s.kq)("",!0),t.price!==t.origin_price?((0,s.wg)(),(0,s.iD)("span",G,"SALE")):(0,s.kq)("",!0),M],4),(0,s._)("div",R,[(0,s._)("div",K,[(0,s._)("p",null,(0,i.zw)(t.title),1)]),(0,s._)("div",Q,[t.price?((0,s.wg)(),(0,s.iD)("span",V,"NT $"+(0,i.zw)(t.price),1)):(0,s.kq)("",!0),t.price?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("span",J,(0,i.zw)(t.origin_price)+"元",1)),t.price!=t.origin_price?((0,s.wg)(),(0,s.iD)("del",X,"原價NT$"+(0,i.zw)(t.origin_price),1)):(0,s.kq)("",!0)])])],8,F)])))),128))])])])],64)}e(7658);const at={class:"buy-content"},et=(0,s._)("div",{class:"tabBox"},[(0,s._)("p",null,"1. 退貨需於到貨10天內進行申請，且商品為未開封狀態"),(0,s._)("p",null,"2. 若發現商品不符或損壞等情形，請於7日內聯繫客服，我們會儘快與您連絡及處理")],-1),st=[et];function it(t,a){return(0,s.wg)(),(0,s.iD)("div",at,st)}var ct=e(89);const ot={},lt=(0,ct.Z)(ot,[["render",it]]);var nt=lt;const rt={class:"carry-content"},dt=(0,s._)("div",{class:"tabBox"},[(0,s._)("p",null,"1. 目前僅提供超商取貨與宅配兩種配送方式"),(0,s._)("p",null,"2. 現貨商品於完成結帳後1-3個工作天出貨，出貨後2-3個工作天抵達指定地址"),(0,s._)("p",null,"3. 預購商品於完成結帳後7-15個工作天出貨，出貨後2-3個工作天抵達指定地址")],-1),ut=[dt];function pt(t,a){return(0,s.wg)(),(0,s.iD)("div",rt,ut)}const bt={},ht=(0,ct.Z)(bt,[["render",pt]]);var gt=ht;const mt={class:"accordion",id:"accordionExample"},_t=(0,s.uE)('<div class="accordion-item"><h2 class="accordion-header" id="headingOne"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> 商品可以寄送至海外嗎？ </button></h2><div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample"><div class="accordion-body"> 目前僅限寄送台灣本島。 </div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingTwo"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> 完成訂單後發現忘記使用優惠券，該怎麼辦？ </button></h2><div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample"><div class="accordion-body"> 取消訂單後重新下單即可。 </div></div></div><div class="accordion-item"><h2 class="accordion-header" id="headingThree"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> 如何取消訂單？ </button></h2><div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample"><div class="accordion-body"> 完成付款後如需取消訂單，請聯絡客服協助處理。若商品已出貨，則無法取消。 </div></div></div>',3),vt=[_t];function yt(t,a){return(0,s.wg)(),(0,s.iD)("div",mt,vt)}const wt={},kt=(0,ct.Z)(wt,[["render",yt]]);var Tt=kt,Ct={data(){return{onSaleProducts:[],product:{},id:"",cart:{carts:[]},item:{qty:1},status:{loadingItem:""},selectedTab:"buyTab",tabComponents:{buyTab:nt,carryTab:gt}}},components:{BuyTab:nt,CarryTab:gt,AccorDion:Tt},inject:["$httpMessageState","emitter"],methods:{getOnSale(){const t="https://vue3-course-api.hexschool.io/api/eunho-api/products/all";this.isLoading=!0,this.$http.get(t).then((t=>{this.isLoading=!1;const a=t.data.products;this.onSaleProducts=a.filter((t=>t.price!==t.origin_price))})).catch((t=>{console.log(t)}))},getProduct(){const t=`https://vue3-course-api.hexschool.io/api/eunho-api/product/${this.id}`;this.isLoading=!0,this.$http.get(t).then((t=>{this.isLoading=!1,t.data.success&&(this.product=t.data.product)})).catch((t=>{console.log(t)}))},getProductDescription(t){this.$router.push({path:`/product/${t}`})},manualInput(t){const a=t.target.value,e=Number(a);e<1&&(this.item.qty=1)},addNumber(t){t.qty++,this.updateCart(t)},minusNumber(t){t.qty>1&&(t.qty--,this.updateCart(t))},addToCart(t){const a="https://vue3-course-api.hexschool.io/api/eunho-api/cart";this.status.loadingItem=t;const e={product_id:t,qty:this.item.qty};this.$http.post(a,{data:e}).then((t=>{const a=t.data.data;t.data.success&&(this.$httpMessageState(t,"加入購物車"),this.cart.carts.push(a),this.getCart(),this.status.loadingItem="")})).catch((t=>{console.log(t)}))},updateCart(t){const a=`https://vue3-course-api.hexschool.io/api/eunho-api/cart/${t.id}`;this.status.loadingItem=t.id;const e={product_id:t.product_id,qty:t.qty};this.$http.put(a,{data:e}).then((t=>{this.status.loadingItem=""})).catch((t=>{console.log(t)}))},getCart(){const t="https://vue3-course-api.hexschool.io/api/eunho-api/cart";this.$http.get(t).then((t=>{this.cart=t.data.data,this.cartLength=t.data.data.carts.length,this.emitter.emit("sendNum",{data:this.cartLength})})).catch((t=>{console.log(t)}))}},computed:{selectTabComponent(){return this.tabComponents[this.selectedTab]}},created(){this.id=this.$route.params.productId,this.getProduct(),this.getOnSale(),this.$router.afterEach(((t,a)=>{t.path!==a.path&&t.path.startsWith("/product/")&&(this.id=t.params.productId,this.getProduct())}))}};const ft=(0,ct.Z)(Ct,[["render",tt]]);var qt=ft}}]);
//# sourceMappingURL=619.9a83c346.js.map