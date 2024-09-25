"use strict";(self["webpackChunkvueworks"]=self["webpackChunkvueworks"]||[]).push([[112],{8373:function(e,t){t.Z={methods:{getFavorite(){if(localStorage.getItem("favoriteList")){const e=localStorage.getItem("favoriteList");this.favoriteItems=JSON.parse(e)}else this.favoriteItems=[]}}}},7401:function(e,t,i){i.d(t,{Z:function(){return L}});var s=i(3396),r=i(7139),a=i(9242);const o={class:"container goods pt-3 body-content"},c={class:"row"},l=["onClick"],d={key:0,class:"sale-logo"},n={key:1,class:"on"},g={key:2,class:"sale"},p=(0,s._)("div",{class:"more"},"查看更多",-1),u={class:"card-body"},v={class:"card-title"},h=["onClick"],m={key:0,class:"bi bi-heart"},y={key:1,class:"bi bi-heart-fill text-danger"},f={class:"product-price"},k={key:0,class:"text-danger fs-5"},_={key:1},w={key:2,class:"del-price float-end"};function D(e,t,i,D,I,C){const b=(0,s.up)("LoaDing");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(b,{active:e.isLoading},null,8,["active"]),(0,s._)("div",o,[(0,s._)("div",c,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(C.filteredProduct,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"col col-6 col-md-3 my-4",key:e.id},[(0,s._)("div",{class:"card",onClick:t=>C.getProductDescription(e.id)},[(0,s._)("div",{class:"card-img-top",style:(0,r.j5)({backgroundImage:`url(${e.imageUrl})`})},[e.price!=e.origin_price?((0,s.wg)(),(0,s.iD)("div",d)):(0,s.kq)("",!0),e.price!=e.origin_price?((0,s.wg)(),(0,s.iD)("span",n,"ON")):(0,s.kq)("",!0),e.price!=e.origin_price?((0,s.wg)(),(0,s.iD)("span",g,"SALE")):(0,s.kq)("",!0),p],4),(0,s._)("div",u,[(0,s._)("div",v,[(0,s._)("h5",null,(0,r.zw)(e.title),1),(0,s._)("a",{href:"#",onClick:(0,a.iM)((t=>C.addFavorite(e)),["stop","prevent"])},[I.favoriteItems.every((t=>e.id!==t))?((0,s.wg)(),(0,s.iD)("i",m)):((0,s.wg)(),(0,s.iD)("i",y))],8,h)]),(0,s._)("div",f,[e.price?((0,s.wg)(),(0,s.iD)("span",k,"NT $"+(0,r.zw)(e.price),1)):(0,s.kq)("",!0),e.price?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("span",_,(0,r.zw)(e.origin_price)+"元",1)),e.price!=e.origin_price?((0,s.wg)(),(0,s.iD)("del",w,"原價NT$"+(0,r.zw)(e.origin_price),1)):(0,s.kq)("",!0)])])],8,l)])))),128))])])],64)}i(7658),i(541);var I=i(8373),C={data(){return{products:[],product:{},favoriteId:[],favoriteItems:[],status:{loadingItem:""},cart:{}}},inject:["emitter"],computed:{filteredProduct(){return this.products.filter((e=>"全身產品"===e.category))}},methods:{getProducts(){const e="https://vue3-course-api.hexschool.io/api/eunho-api/products/all";this.isLoading=!0,this.$http.get(e).then((e=>{this.isLoading=!1,this.products=e.data.products}))},getProductDescription(e){this.$router.push(`/product/${e}`)},addFavorite(e){this.favoriteItems.every((t=>e.id!==t))?(this.emitter.emit("push-message",{style:"success",title:"已加入收藏"}),this.favoriteItems.unshift(e.id)):(this.favoriteItems.indexOf(e.id),this.favoriteItems.splice(this.favoriteItems.indexOf(e.id),1),this.emitter.emit("push-message",{style:"danger",title:"已移除收藏"})),localStorage.setItem("favoriteList",JSON.stringify(this.favoriteItems)),this.getFavorite()}},mixins:[I.Z],created(){this.getFavorite(),this.getProducts()}},b=i(89);const P=(0,b.Z)(C,[["render",D]]);var L=P},9886:function(e,t,i){i.d(t,{Z:function(){return L}});var s=i(3396),r=i(7139),a=i(9242);const o={class:"container goods pt-3 head-content"},c={class:"row"},l=["onClick"],d={key:0,class:"sale-logo"},n={key:1,class:"on"},g={key:2,class:"sale"},p=(0,s._)("div",{class:"more"},"查看更多",-1),u={class:"card-body"},v={class:"card-title"},h=["onClick"],m={key:0,class:"bi bi-heart"},y={key:1,class:"bi bi-heart-fill text-danger"},f={class:"product-price"},k={key:0,class:"text-danger fs-5"},_={key:1},w={key:2,class:"del-price float-end"};function D(e,t,i,D,I,C){const b=(0,s.up)("LoaDing");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(b,{active:e.isLoading},null,8,["active"]),(0,s._)("div",o,[(0,s._)("div",c,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(C.filteredProduct,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"col col-6 col-md-3 my-4",key:e.id},[(0,s._)("div",{class:"card",onClick:t=>C.getProductDescription(e.id)},[(0,s._)("div",{class:"card-img-top",style:(0,r.j5)({backgroundImage:`url(${e.imageUrl})`})},[e.price!=e.origin_price?((0,s.wg)(),(0,s.iD)("div",d)):(0,s.kq)("",!0),e.price!=e.origin_price?((0,s.wg)(),(0,s.iD)("span",n,"ON")):(0,s.kq)("",!0),e.price!=e.origin_price?((0,s.wg)(),(0,s.iD)("span",g,"SALE")):(0,s.kq)("",!0),p],4),(0,s._)("div",u,[(0,s._)("div",v,[(0,s._)("h5",null,(0,r.zw)(e.title),1),(0,s._)("a",{href:"#",onClick:(0,a.iM)((t=>C.addFavorite(e)),["stop","prevent"])},[I.favoriteItems.every((t=>e.id!==t))?((0,s.wg)(),(0,s.iD)("i",m)):((0,s.wg)(),(0,s.iD)("i",y))],8,h)]),(0,s._)("div",f,[e.price?((0,s.wg)(),(0,s.iD)("span",k,"NT $"+(0,r.zw)(e.price),1)):(0,s.kq)("",!0),e.price?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("span",_,(0,r.zw)(e.origin_price)+"元",1)),e.price!=e.origin_price?((0,s.wg)(),(0,s.iD)("del",w,"原價NT$"+(0,r.zw)(e.origin_price),1)):(0,s.kq)("",!0)])])],8,l)])))),128))])])],64)}i(7658),i(541);var I=i(8373),C={data(){return{products:[],product:{},favoriteId:[],favoriteItems:[],status:{loadingItem:""},cart:{}}},inject:["emitter"],computed:{filteredProduct(){return this.products.filter((e=>"頭部產品"===e.category))}},methods:{getProducts(){const e="https://vue3-course-api.hexschool.io/api/eunho-api/products/all";this.isLoading=!0,this.$http.get(e).then((e=>{this.isLoading=!1,this.products=e.data.products}))},getProductDescription(e){this.$router.push(`/product/${e}`)},addFavorite(e){this.favoriteItems.every((t=>e.id!==t))?(this.emitter.emit("push-message",{style:"success",title:"已加入收藏"}),this.favoriteItems.unshift(e.id)):(this.favoriteItems.indexOf(e.id),this.favoriteItems.splice(this.favoriteItems.indexOf(e.id),1),this.emitter.emit("push-message",{style:"danger",title:"已移除收藏"})),localStorage.setItem("favoriteList",JSON.stringify(this.favoriteItems)),this.getFavorite()}},mixins:[I.Z],created(){this.getFavorite(),this.getProducts()}},b=i(89);const P=(0,b.Z)(C,[["render",D]]);var L=P},1917:function(e,t,i){i.d(t,{Z:function(){return h}});var s=i(3396),r=i(7139),a=i(9242);const o={"aria-label":"Page navigation example"},c={class:"pagination justify-content-center"},l=(0,s._)("li",{class:"page-item"},[(0,s._)("a",{class:"page-link",href:"#","aria-label":"Previous"},[(0,s._)("span",{"aria-hidden":"true"},"«")])],-1),d=["onClick"],n=(0,s._)("li",{class:"page-item"},[(0,s._)("a",{class:"page-link",href:"#","aria-label":"Next"},[(0,s._)("span",{"aria-hidden":"true"},"»")])],-1);function g(e,t,i,g,p,u){return(0,s.wg)(),(0,s.iD)("nav",o,[(0,s._)("ul",c,[l,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.pages.total_pages,(e=>((0,s.wg)(),(0,s.iD)("li",{class:(0,r.C_)(["page-item",{active:e===i.pages.current_page}]),key:e},[(0,s._)("a",{class:"page-link",href:"#",onClick:(0,a.iM)((t=>u.updatePage(e)),["prevent"])},(0,r.zw)(e),9,d)],2)))),128)),n])])}var p={props:["pages"],methods:{updatePage(e){this.$emit("emit-page",e)}}},u=i(89);const v=(0,u.Z)(p,[["render",g]]);var h=v},4112:function(e,t,i){i.r(t),i.d(t,{default:function(){return pt}});var s=i(3396),r=i(7139);const a={class:"category container"},o={class:"category-nav container"},c={class:"category-list"},l=(0,s._)("h6",null,"ALL / 所有產品",-1),d=[l],n={class:"category-list"},g=(0,s._)("h6",null,"HEAD / 頭部產品",-1),p=[g],u={class:"category-list"},v=(0,s._)("h6",null,"FACE / 臉部產品",-1),h=[v],m={class:"category-list"},y=(0,s._)("h6",null,"LIPS / 唇部產品",-1),f=[y],k={class:"category-list"},_=(0,s._)("h6",null,"BODY / 全身產品",-1),w=[_],D={class:"category-list"},I=(0,s._)("h6",null,"OTHERS / 其他",-1),C=[I],b={key:0,class:"all-content"},P={key:1,class:"head-content"},L={key:2,class:"face-content"},$={key:3,class:"lips-content"},x={key:4,class:"body-content"},q={key:5,class:"others-content"};function N(e,t,i,l,g,v){const y=(0,s.up)("LoaDing");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(y,{avtive:e.isLoading},null,8,["avtive"]),(0,s._)("div",a,[(0,s._)("ul",o,[(0,s._)("li",c,[(0,s._)("button",{class:(0,r.C_)(["category-link",{active:"all"===g.selectedCategory}]),onClick:t[0]||(t[0]=e=>g.selectedCategory="all")},d,2)]),(0,s._)("li",n,[(0,s._)("button",{class:(0,r.C_)(["category-link",{active:"head"===g.selectedCategory}]),onClick:t[1]||(t[1]=e=>g.selectedCategory="head")},p,2)]),(0,s._)("li",u,[(0,s._)("button",{class:(0,r.C_)(["category-link",{active:"face"===g.selectedCategory}]),onClick:t[2]||(t[2]=e=>g.selectedCategory="face")},h,2)]),(0,s._)("li",m,[(0,s._)("button",{class:(0,r.C_)(["category-link",{active:"lips"===g.selectedCategory}]),onClick:t[3]||(t[3]=e=>g.selectedCategory="lips")},f,2)]),(0,s._)("li",k,[(0,s._)("button",{class:(0,r.C_)(["category-link",{active:"body"===g.selectedCategory}]),onClick:t[4]||(t[4]=e=>g.selectedCategory="body")},w,2)]),(0,s._)("li",D,[(0,s._)("button",{class:(0,r.C_)(["category-link",{active:"others"===g.selectedCategory}]),onClick:t[5]||(t[5]=e=>g.selectedCategory="others")},C,2)])]),((0,s.wg)(),(0,s.j4)((0,s.LL)(v.selectedCategoryComponent),null,{default:(0,s.w5)((()=>["all"===g.selectedCategory?((0,s.wg)(),(0,s.iD)("div",b)):"head"===g.selectedCategory?((0,s.wg)(),(0,s.iD)("div",P)):"face"===g.selectedCategory?((0,s.wg)(),(0,s.iD)("div",L)):"lips"===g.selectedCategory?((0,s.wg)(),(0,s.iD)("div",$)):"body"===g.selectedCategory?((0,s.wg)(),(0,s.iD)("div",x)):((0,s.wg)(),(0,s.iD)("div",q))])),_:1}))])],64)}var O=i(9242);const F={class:"container goods pt-3 all-content"},z={class:"row"},S=["onClick"],Z={key:0,class:"sale-logo"},H={key:1,class:"on"},j={key:2,class:"sale"},Y=(0,s._)("div",{class:"more"},"查看更多",-1),T={class:"card-body"},E={class:"card-title"},A=["onClick"],M={key:0,class:"bi bi-heart"},J={key:1,class:"bi bi-heart-fill text-danger"},K={class:"product-price"},W={key:0,class:"text-danger"},U={key:1},B={key:2,class:"del-price float-end"};function R(e,t,i,a,o,c){const l=(0,s.up)("LoaDing"),d=(0,s.up)("PagiNation");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(l,{active:e.isLoading},null,8,["active"]),(0,s._)("div",F,[(0,s._)("div",z,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.products,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"col col-6 col-md-3 my-4",key:e.id},[(0,s._)("div",{class:"card",onClick:t=>c.getProductDescription(e.id)},[(0,s._)("div",{class:"card-img-top",style:(0,r.j5)({backgroundImage:`url(${e.imageUrl})`})},[e.price!=e.origin_price?((0,s.wg)(),(0,s.iD)("div",Z)):(0,s.kq)("",!0),e.price!=e.origin_price?((0,s.wg)(),(0,s.iD)("span",H,"ON")):(0,s.kq)("",!0),e.price!=e.origin_price?((0,s.wg)(),(0,s.iD)("span",j,"SALE")):(0,s.kq)("",!0),Y],4),(0,s._)("div",T,[(0,s._)("div",E,[(0,s._)("h5",null,(0,r.zw)(e.title),1),(0,s._)("a",{href:"#",onClick:(0,O.iM)((t=>c.addFavorite(e)),["stop","prevent"])},[o.favoriteItems.every((t=>e.id!==t))?((0,s.wg)(),(0,s.iD)("i",M)):((0,s.wg)(),(0,s.iD)("i",J))],8,A)]),(0,s._)("div",K,[e.price?((0,s.wg)(),(0,s.iD)("span",W,"NT $"+(0,r.zw)(e.price),1)):(0,s.kq)("",!0),e.price?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("span",U,(0,r.zw)(e.origin_price)+"元",1)),e.price!=e.origin_price?((0,s.wg)(),(0,s.iD)("del",B,"原價NT$"+(0,r.zw)(e.origin_price),1)):(0,s.kq)("",!0)])])],8,S)])))),128))])]),(0,s.Wm)(d,{pages:o.pagination,onEmitPage:c.getProducts},null,8,["pages","onEmitPage"])],64)}i(7658),i(541);var G=i(1917),Q=i(8373),V={data(){return{products:[],product:{},favoriteId:[],favoriteItems:[],pagination:{},status:{loadingItem:""},cart:{}}},components:{PagiNation:G.Z},inject:["$httpMessageState","emitter"],methods:{getProducts(e){const t=`https://vue3-course-api.hexschool.io/api/eunho-api/products/?page=${e}`;this.isLoading=!0,this.$http.get(t).then((e=>{this.isLoading=!1,this.products=e.data.products,this.pagination=e.data.pagination}))},getProductDescription(e){this.$router.push(`/product/${e}`)},addFavorite(e){this.favoriteItems.every((t=>e.id!==t))?(this.emitter.emit("push-message",{style:"success",title:"已加入收藏"}),this.favoriteItems.unshift(e.id)):(this.favoriteItems.indexOf(e.id),this.favoriteItems.splice(this.favoriteItems.indexOf(e.id),1),this.emitter.emit("push-message",{style:"danger",title:"已移除收藏"})),localStorage.setItem("favoriteList",JSON.stringify(this.favoriteItems)),this.getFavorite()}},mixins:[Q.Z],created(){this.getFavorite(),this.getProducts()}},X=i(89);const ee=(0,X.Z)(V,[["render",R]]);var te=ee,ie=i(9886);const se={class:"container goods pt-3 face-content"},re={class:"row"},ae=["onClick"],oe={key:0,class:"sale-logo"},ce={key:1,class:"on"},le={key:2,class:"sale"},de=(0,s._)("div",{class:"more"},"查看更多",-1),ne={class:"card-body"},ge={class:"card-title"},pe=["onClick"],ue={key:0,class:"bi bi-heart"},ve={key:1,class:"bi bi-heart-fill text-danger"},he={class:"product-price"},me={key:0,class:"text-danger fs-5"},ye={key:1},fe={key:2,class:"del-price float-end"};function ke(e,t,i,a,o,c){const l=(0,s.up)("LoaDing");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(l,{active:e.isLoading},null,8,["active"]),(0,s._)("div",se,[(0,s._)("div",re,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(c.filteredProduct,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"col col-6 col-md-3 my-4",key:e.id},[(0,s._)("div",{class:"card",onClick:t=>c.getProductDescription(e.id)},[(0,s._)("div",{class:"card-img-top",style:(0,r.j5)({backgroundImage:`url(${e.imageUrl})`})},[e.price!=e.origin_price?((0,s.wg)(),(0,s.iD)("div",oe)):(0,s.kq)("",!0),e.price!=e.origin_price?((0,s.wg)(),(0,s.iD)("span",ce,"ON")):(0,s.kq)("",!0),e.price!=e.origin_price?((0,s.wg)(),(0,s.iD)("span",le,"SALE")):(0,s.kq)("",!0),de],4),(0,s._)("div",ne,[(0,s._)("div",ge,[(0,s._)("h5",null,(0,r.zw)(e.title),1),(0,s._)("a",{href:"#",onClick:(0,O.iM)((t=>c.addFavorite(e)),["stop","prevent"])},[o.favoriteItems.every((t=>e.id!==t))?((0,s.wg)(),(0,s.iD)("i",ue)):((0,s.wg)(),(0,s.iD)("i",ve))],8,pe)]),(0,s._)("div",he,[e.price?((0,s.wg)(),(0,s.iD)("span",me,"NT $"+(0,r.zw)(e.price),1)):(0,s.kq)("",!0),e.price?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("span",ye,(0,r.zw)(e.origin_price)+"元",1)),e.price!=e.origin_price?((0,s.wg)(),(0,s.iD)("del",fe,"原價NT$"+(0,r.zw)(e.origin_price),1)):(0,s.kq)("",!0)])])],8,ae)])))),128))])])],64)}var _e={data(){return{products:[],product:{},favoriteId:[],favoriteItems:[],status:{loadingItem:""},cart:{}}},inject:["emitter"],computed:{filteredProduct(){return this.products.filter((e=>"臉部產品"===e.category))}},methods:{getProducts(){const e="https://vue3-course-api.hexschool.io/api/eunho-api/products/all";this.isLoading=!0,this.$http.get(e).then((e=>{this.isLoading=!1,this.products=e.data.products}))},getProductDescription(e){this.$router.push(`/product/${e}`)},addFavorite(e){this.favoriteItems.every((t=>e.id!==t))?(this.emitter.emit("push-message",{style:"success",title:"已加入收藏"}),this.favoriteItems.unshift(e.id)):(this.favoriteItems.indexOf(e.id),this.favoriteItems.splice(this.favoriteItems.indexOf(e.id),1),this.emitter.emit("push-message",{style:"danger",title:"已移除收藏"})),localStorage.setItem("favoriteList",JSON.stringify(this.favoriteItems)),this.getFavorite()}},mixins:[Q.Z],created(){this.getFavorite(),this.getProducts()}};const we=(0,X.Z)(_e,[["render",ke]]);var De=we;const Ie={class:"container goods pt-3 lips-content"},Ce={class:"row"},be=["onClick"],Pe={key:0,class:"sale-logo"},Le={key:1,class:"on"},$e={key:2,class:"sale"},xe=(0,s._)("div",{class:"more"},"查看更多",-1),qe={class:"card-body"},Ne={class:"card-title"},Oe=["onClick"],Fe={key:0,class:"bi bi-heart"},ze={key:1,class:"bi bi-heart-fill text-danger"},Se={class:"product-price"},Ze={key:0,class:"text-danger fs-5"},He={key:1},je={key:2,class:"del-price float-end"};function Ye(e,t,i,a,o,c){const l=(0,s.up)("LoaDing");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(l,{active:e.isLoading},null,8,["active"]),(0,s._)("div",Ie,[(0,s._)("div",Ce,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(c.filteredProduct,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"col col-6 col-md-3 my-4",key:e.id},[(0,s._)("div",{class:"card",onClick:t=>c.getProductDescription(e.id)},[(0,s._)("div",{class:"card-img-top",style:(0,r.j5)({backgroundImage:`url(${e.imageUrl})`})},[e.price!=e.origin_price?((0,s.wg)(),(0,s.iD)("div",Pe)):(0,s.kq)("",!0),e.price!=e.origin_price?((0,s.wg)(),(0,s.iD)("span",Le,"ON")):(0,s.kq)("",!0),e.price!=e.origin_price?((0,s.wg)(),(0,s.iD)("span",$e,"SALE")):(0,s.kq)("",!0),xe],4),(0,s._)("div",qe,[(0,s._)("div",Ne,[(0,s._)("h5",null,(0,r.zw)(e.title),1),(0,s._)("a",{href:"#",onClick:(0,O.iM)((t=>c.addFavorite(e)),["stop","prevent"])},[o.favoriteItems.every((t=>e.id!==t))?((0,s.wg)(),(0,s.iD)("i",Fe)):((0,s.wg)(),(0,s.iD)("i",ze))],8,Oe)]),(0,s._)("div",Se,[e.price?((0,s.wg)(),(0,s.iD)("span",Ze,"NT $"+(0,r.zw)(e.price),1)):(0,s.kq)("",!0),e.price?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("span",He,(0,r.zw)(e.origin_price)+"元",1)),e.price!=e.origin_price?((0,s.wg)(),(0,s.iD)("del",je,"原價NT$"+(0,r.zw)(e.origin_price),1)):(0,s.kq)("",!0)])])],8,be)])))),128))])])],64)}var Te={data(){return{products:[],product:{},favoriteId:[],favoriteItems:[],status:{loadingItem:""},cart:{}}},inject:["emitter"],computed:{filteredProduct(){return this.products.filter((e=>"唇部產品"===e.category))}},methods:{getProducts(){const e="https://vue3-course-api.hexschool.io/api/eunho-api/products/all";this.isLoading=!0,this.$http.get(e).then((e=>{this.isLoading=!1,this.products=e.data.products}))},getProductDescription(e){this.$router.push(`/product/${e}`)},addFavorite(e){this.favoriteItems.every((t=>e.id!==t))?(this.emitter.emit("push-message",{style:"success",title:"已加入收藏"}),this.favoriteItems.unshift(e.id)):(this.favoriteItems.indexOf(e.id),this.favoriteItems.splice(this.favoriteItems.indexOf(e.id),1),this.emitter.emit("push-message",{style:"danger",title:"已移除收藏"})),localStorage.setItem("favoriteList",JSON.stringify(this.favoriteItems)),this.getFavorite()}},mixins:[Q.Z],created(){this.getFavorite(),this.getProducts()}};const Ee=(0,X.Z)(Te,[["render",Ye]]);var Ae=Ee,Me=i(7401);const Je={class:"container goods pt-3 others-content"},Ke={class:"row"},We=["onClick"],Ue={key:0,class:"sale-logo"},Be={key:1,class:"on"},Re={key:2,class:"sale"},Ge=(0,s._)("div",{class:"more"},"查看更多",-1),Qe={class:"card-body"},Ve={class:"card-title"},Xe=["onClick"],et={key:0,class:"bi bi-heart"},tt={key:1,class:"bi bi-heart-fill text-danger"},it={class:"product-price"},st={key:0,class:"text-danger fs-5"},rt={key:1},at={key:2,class:"del-price float-end"};function ot(e,t,i,a,o,c){return(0,s.wg)(),(0,s.iD)("div",Je,[(0,s._)("div",Ke,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(c.filteredProduct,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"col col-6 col-md-3 my-4",key:e.id},[(0,s._)("div",{class:"card",onClick:t=>c.getProductDescription(e.id)},[(0,s._)("div",{class:"card-img-top",style:(0,r.j5)({backgroundImage:`url(${e.imageUrl})`})},[e.price!=e.origin_price?((0,s.wg)(),(0,s.iD)("div",Ue)):(0,s.kq)("",!0),e.price!=e.origin_price?((0,s.wg)(),(0,s.iD)("span",Be,"ON")):(0,s.kq)("",!0),e.price!=e.origin_price?((0,s.wg)(),(0,s.iD)("span",Re,"SALE")):(0,s.kq)("",!0),Ge],4),(0,s._)("div",Qe,[(0,s._)("div",Ve,[(0,s._)("h5",null,(0,r.zw)(e.title),1),(0,s._)("a",{href:"#",onClick:(0,O.iM)((t=>c.addFavorite(e)),["stop","prevent"])},[o.favoriteItems.every((t=>e.id!==t))?((0,s.wg)(),(0,s.iD)("i",et)):((0,s.wg)(),(0,s.iD)("i",tt))],8,Xe)]),(0,s._)("div",it,[e.price?((0,s.wg)(),(0,s.iD)("span",st,"NT $"+(0,r.zw)(e.price),1)):(0,s.kq)("",!0),e.price?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("span",rt,(0,r.zw)(e.origin_price)+"元",1)),e.price!=e.origin_price?((0,s.wg)(),(0,s.iD)("del",at,"原價NT$"+(0,r.zw)(e.origin_price),1)):(0,s.kq)("",!0)])])],8,We)])))),128))])])}var ct={data(){return{products:[],product:{},favoriteId:[],favoriteItems:[],status:{loadingItem:""},cart:{}}},inject:["emitter"],computed:{filteredProduct(){return this.products.filter((e=>"其他產品"===e.category))}},methods:{getProducts(){const e="https://vue3-course-api.hexschool.io/api/eunho-api/products/all";this.isLoading=!0,this.$http.get(e).then((e=>{this.isLoading=!1,this.products=e.data.products}))},getProductDescription(e){this.$router.push(`/product/${e}`)},addFavorite(e){this.favoriteItems.every((t=>e.id!==t))?(this.emitter.emit("push-message",{style:"success",title:"已加入收藏"}),this.favoriteItems.unshift(e.id)):(this.favoriteItems.indexOf(e.id),this.favoriteItems.splice(this.favoriteItems.indexOf(e.id),1),this.emitter.emit("push-message",{style:"danger",title:"已移除收藏"})),localStorage.setItem("favoriteList",JSON.stringify(this.favoriteItems)),this.getFavorite()}},mixins:[Q.Z],created(){this.getFavorite(),this.getProducts()}};const lt=(0,X.Z)(ct,[["render",ot]]);var dt=lt,nt={data(){return{selectedCategory:"all",categoryComponemts:{all:te,head:ie.Z,face:De,lips:Ae,body:Me.Z,others:dt}}},components:{HomeProduct:te,HeadProducts:ie.Z,FaceProducts:De,LipsProducts:Ae,BodyProducts:Me.Z,OtherProducts:dt},computed:{selectedCategoryComponent(){return this.categoryComponemts[this.selectedCategory]}}};const gt=(0,X.Z)(nt,[["render",N]]);var pt=gt}}]);
//# sourceMappingURL=112.06a4cc85.js.map