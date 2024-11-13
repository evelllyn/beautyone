"use strict";(self["webpackChunkvueworks"]=self["webpackChunkvueworks"]||[]).push([[945],{1945:function(t,s,a){a.r(s),a.d(s,{default:function(){return G}});var o=a(3396),e=a(7139),i=a(9242);const l={class:"container cart"},n={class:"row cartBox"},c={key:0,class:"boxContent"},d=(0,o._)("h3",null,"購物清單",-1),u={class:"table align-middle"},r=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",{class:"col-1"},"圖片"),(0,o._)("th",{class:"col-1"}),(0,o._)("th",{class:"col-3"},"商品名稱"),(0,o._)("th",{class:"col-2"},"數量"),(0,o._)("th",{class:"col-1"}),(0,o._)("th",null,"單價"),(0,o._)("th")])],-1),h=(0,o._)("td",{class:"blank"},null,-1),p={class:"list-title"},g={class:"list-qty"},_={class:"input-group input-group-sm"},b=["disabled","onUpdate:modelValue","onChange"],m={class:"input-group-text"},v=(0,o._)("td",{class:"blank"},null,-1),k={class:"list-price"},y={key:0},C={key:1,class:"text-danger"},w={class:"deleteItem text-end"},f=["disabled","onClick"],x=(0,o._)("i",{class:"bi bi-trash3"},null,-1),$=[x],L=(0,o._)("td",{colspan:"5",class:"blank"},null,-1),I=(0,o._)("td",{class:"text-end"},"總計",-1),D={class:"totalPrice text-end"},q={key:0},U=(0,o._)("td",{colspan:"5",class:"blank"},null,-1),z=(0,o._)("td",{class:"text-end text-danger"},"折扣價",-1),P={class:"totalPrice text-end text-danger"},M={class:"use-coupon input-group input-group-sm mb-3"},S=(0,o._)("div",{class:"blank col-8"},null,-1),V={class:"input-group-append"},W={class:"go-pay text-end"},j={key:1,class:"container spin"},H=(0,o._)("div",{class:"spinner-border text-success",role:"status"},[(0,o._)("span",{class:"visually-hidden"},"Loading...")],-1),Y=[H],B={key:2,class:"nothing"},K=(0,o._)("i",{class:"bi bi-cart-dash"},null,-1),N=(0,o._)("div",{class:"nothing-content fs-3"},"哎呀，購物車目前是空的喔",-1);function Z(t,s,a,x,H,Z){const A=(0,o.up)("LoaDing"),E=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(A,{avtive:H.isLoading},null,8,["avtive"]),(0,o._)("div",l,[(0,o._)("div",n,[H.cart.carts.length?((0,o.wg)(),(0,o.iD)("div",c,[d,(0,o._)("table",u,[r,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(H.cart.carts,(s=>((0,o.wg)(),(0,o.iD)("tr",{key:s.id},[(0,o._)("td",{class:"list-pic",style:(0,e.j5)({backgroundImage:`url(${s.product.imageUrl})`})},null,4),h,(0,o._)("td",p,(0,e.zw)(s.product.title),1),(0,o._)("td",g,[(0,o._)("div",_,[(0,o.wy)((0,o._)("input",{type:"number",class:"form-control",min:"1",disabled:H.status.loadingItem===s.id,"onUpdate:modelValue":t=>s.qty=t,onChange:t=>Z.updateCart(s)},null,40,b),[[i.nr,s.qty,void 0,{number:!0}]]),(0,o._)("div",m,(0,e.zw)(s.product.unit),1)])]),v,(0,o._)("td",k,[H.cart.final_total!==H.cart.total?((0,o.wg)(),(0,o.iD)("small",y,"折扣價")):(0,o.kq)("",!0),(0,o.Uk)(" $ "+(0,e.zw)(t.$filters.currency(s.final_total))+" ",1),s.coupon?((0,o.wg)(),(0,o.iD)("div",C,"已套用優惠券")):(0,o.kq)("",!0)]),(0,o._)("td",w,[(0,o._)("button",{type:"button",class:"btn btn-outline-danger btn-sm",disabled:H.status.loadingItem===s.id,onClick:t=>Z.removeCartItem(s.id)},$,8,f)])])))),128))]),(0,o._)("tfoot",null,[(0,o._)("tr",null,[L,I,(0,o._)("td",D,"$"+(0,e.zw)(t.$filters.currency(H.cart.total)),1)]),H.cart.final_total!==H.cart.total?((0,o.wg)(),(0,o.iD)("tr",q,[U,z,(0,o._)("td",P,"$"+(0,e.zw)(t.$filters.currency(H.cart.final_total)),1)])):(0,o.kq)("",!0)])]),(0,o._)("div",M,[S,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control","onUpdate:modelValue":s[0]||(s[0]=t=>H.coupon_code=t),placeholder:"請輸入優惠碼"},null,512),[[i.nr,H.coupon_code]]),(0,o._)("div",V,[(0,o._)("button",{type:"button",class:"btn coupon-btn",onClick:s[1]||(s[1]=(...t)=>Z.addCouponCode&&Z.addCouponCode(...t))}," 使用優惠券 ")])]),(0,o._)("div",W,[(0,o.Wm)(E,{to:"/fillin",class:"btn go-btn"},{default:(0,o.w5)((()=>[(0,o.Uk)("前往結帳")])),_:1})])])):H.isLoading?((0,o.wg)(),(0,o.iD)("div",j,Y)):((0,o.wg)(),(0,o.iD)("div",B,[K,N,(0,o.Wm)(E,{to:"/products",class:"btn surf-btn"},{default:(0,o.w5)((()=>[(0,o.Uk)("現在去逛逛")])),_:1})]))])])],64)}a(7658);var A={data(){return{products:[],product:{},status:{loadingItem:""},cart:{carts:[]},coupon_code:"",isLoading:!1}},inject:["$httpMessageState","emitter"],methods:{getProducts(){const t="https://vue3-course-api.hexschool.io/api/eunho-api/products/all";this.isLoading=!0,this.$http.get(t).then((t=>{this.isLoading=!1,this.products=t.data.products})).catch((t=>{console.log(t)}))},getProduct(t){this.$router.push(`/product/${t}`)},addCart(t){const s="https://vue3-course-api.hexschool.io/api/eunho-api/cart";this.status.loadingItem=t;const a={product_id:t,qty:1};this.$http.post(s,{data:a}).then((t=>{this.status.loadingItem=""})).catch((t=>{console.log(t)}))},getCart(){const t="https://vue3-course-api.hexschool.io/api/eunho-api/cart";this.isLoading=!0,this.$http.get(t).then((t=>{this.isLoading=!1,this.cart=t.data.data,this.cartLength=t.data.data.carts.length,this.emitter.emit("sendNum",{data:this.cartLength})})).catch((t=>{console.log(t)}))},updateCart(t){const s=`https://vue3-course-api.hexschool.io/api/eunho-api/cart/${t.id}`;this.isLoading=!0,this.status.loadingItem=t.id;const a={product_id:t.product_id,qty:t.qty};this.$http.put(s,{data:a}).then((t=>{this.isLoading=!1,this.status.loadingItem="",this.getCart()})).catch((t=>{console.log(t)}))},addCouponCode(){const t="https://vue3-course-api.hexschool.io/api/eunho-api/coupon",s={code:this.coupon_code};this.isLoading=!0,this.$http.post(t,{data:s}).then((t=>{this.isLoading=!1,this.$httpMessageState(t,"套用優惠券"),this.getCart()})).catch((t=>{console.log(t)}))},removeCartItem(t){const s=`https://vue3-course-api.hexschool.io/api/eunho-api/cart/${t}`;this.$http.delete(s).then((t=>{this.$httpMessageState(t,"移除商品"),this.status.loadingItem="",this.getCart()})).catch((t=>{console.log(t)}))}},created(){this.getProducts(),this.getCart()}},E=a(89);const F=(0,E.Z)(A,[["render",Z]]);var G=F}}]);
//# sourceMappingURL=945.f11427ad.js.map