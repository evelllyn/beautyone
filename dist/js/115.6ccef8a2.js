"use strict";(self["webpackChunkvueworks"]=self["webpackChunkvueworks"]||[]).push([[115],{1339:function(t,e,l){var a=l(7972),o=l.n(a);e.Z={methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()}},mounted(){this.modal=new(o())(this.$refs.modal)}}},6417:function(t,e,l){l.d(e,{Z:function(){return v}});var a=l(3396),o=l(7139);const s={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},i={class:"modal-dialog modal-xl",role:"document"},d={class:"modal-content border-0"},n={class:"modal-header bg-dark text-white"},r={class:"modal-title"},c=(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),u={class:"modal-body"},p={class:"text-danger"},m={class:"modal-footer"},h=(0,a._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function b(t,e,l,b,g,_){return(0,a.wg)(),(0,a.iD)("div",s,[(0,a._)("div",i,[(0,a._)("div",d,[(0,a._)("div",n,[(0,a._)("h5",r,[(0,a._)("span",null,"刪除"+(0,o.zw)(l.item.title),1)]),c]),(0,a._)("div",u,[(0,a.Uk)(" 是否刪除"),(0,a._)("strong",p,(0,o.zw)(l.item.title),1)]),(0,a._)("div",m,[h,(0,a._)("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=e=>t.$emit("del-item"))},"確認")])])])],512)}var g=l(1339),_={props:{item:{}},data(){return{modal:{}}},mixins:[g.Z]},f=l(89);const P=(0,f.Z)(_,[["render",b]]);var v=P},1917:function(t,e,l){l.d(e,{Z:function(){return b}});var a=l(3396),o=l(7139),s=l(9242);const i={"aria-label":"Page navigation example"},d={class:"pagination justify-content-center"},n=(0,a._)("li",{class:"page-item"},[(0,a._)("a",{class:"page-link",href:"#","aria-label":"Previous"},[(0,a._)("span",{"aria-hidden":"true"},"«")])],-1),r=["onClick"],c=(0,a._)("li",{class:"page-item"},[(0,a._)("a",{class:"page-link",href:"#","aria-label":"Next"},[(0,a._)("span",{"aria-hidden":"true"},"»")])],-1);function u(t,e,l,u,p,m){return(0,a.wg)(),(0,a.iD)("nav",i,[(0,a._)("ul",d,[n,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.pages.total_pages,(t=>((0,a.wg)(),(0,a.iD)("li",{class:(0,o.C_)(["page-item",{active:t===l.pages.current_page}]),key:t},[(0,a._)("a",{class:"page-link",href:"#",onClick:(0,s.iM)((e=>m.updatePage(t)),["prevent"])},(0,o.zw)(t),9,r)],2)))),128)),c])])}var p={props:["pages"],methods:{updatePage(t){this.$emit("emit-page",t)}}},m=l(89);const h=(0,m.Z)(p,[["render",u]]);var b=h},4115:function(t,e,l){l.r(e),l.d(e,{default:function(){return pt}});var a=l(3396),o=l(7139);const s={class:"text-end"},i={class:"table mt-4"},d=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",{width:"120"},"分類"),(0,a._)("th",null,"產品名稱"),(0,a._)("th",{width:"120"},"原價"),(0,a._)("th",{width:"120"},"售價"),(0,a._)("th",{width:"100"},"是否啟用"),(0,a._)("th",{width:"200"},"編輯")])],-1),n={class:"text-right"},r={class:"text-right"},c={key:0,class:"text-success"},u={key:1,class:"text-muted"},p={class:"btn-group"},m=["onClick"],h=["onClick"];function b(t,e,l,b,g,_){const f=(0,a.up)("LoaDing"),P=(0,a.up)("PagiNation"),v=(0,a.up)("ProductModal"),y=(0,a.up)("DelModal");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(f,{active:g.isLoading},null,8,["active"]),(0,a._)("div",s,[(0,a._)("button",{class:"btn btn-primary",type:"button",onClick:e[0]||(e[0]=t=>_.openModal(!0))},"新增產品")]),(0,a._)("table",i,[d,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(g.products,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e.id},[(0,a._)("td",null,(0,o.zw)(e.category),1),(0,a._)("td",null,(0,o.zw)(e.title),1),(0,a._)("td",n,(0,o.zw)(t.$filters.currency(e.origin_price)),1),(0,a._)("td",r,(0,o.zw)(t.$filters.currency(e.price)),1),(0,a._)("td",null,[e.is_enabled?((0,a.wg)(),(0,a.iD)("span",c,"啟用")):((0,a.wg)(),(0,a.iD)("span",u,"未啟用"))]),(0,a._)("td",null,[(0,a._)("div",p,[(0,a._)("button",{class:"btn btn-outline-primary btn-sm",onClick:t=>_.openModal(!1,e)},"編輯",8,m),(0,a._)("button",{class:"btn btn-outline-danger btn-sm",onClick:t=>_.openDelProductModal(e)},"刪除",8,h)])])])))),128))])]),(0,a.Wm)(P,{pages:g.pagination,onEmitPage:_.getProducts},null,8,["pages","onEmitPage"]),(0,a.Wm)(v,{ref:"productModal",product:g.tempProduct,onUpdateProduct:_.updateProduct},null,8,["product","onUpdateProduct"]),(0,a.Wm)(y,{ref:"delModal",item:g.tempProduct,onDelItem:_.delProduct},null,8,["item","onDelItem"])],64)}l(7658);var g=l(9242);const _={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},f={class:"modal-dialog modal-xl",role:"document"},P={class:"modal-content border-0"},v=(0,a._)("div",{class:"modal-header bg-dark text-white"},[(0,a._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,a._)("span",null,"新增產品")]),(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),y={class:"modal-body"},w={class:"row"},k={class:"col-sm-4"},x={class:"mb-3"},M=(0,a._)("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),D={class:"mb-3"},$=(0,a._)("label",{for:"customFile",class:"form-label"},[(0,a.Uk)("或 上傳圖片 "),(0,a._)("i",{class:"fas fa-spinner fa-spin"})],-1),U=["src"],C={key:0,class:"mt-5"},V=["onUpdate:modelValue"],Z=["onClick"],L={key:0},z={class:"col-sm-8"},F={class:"mb-3"},N=(0,a._)("label",{for:"title",class:"form-label"},"標題",-1),H={class:"row gx-2"},I={class:"mb-3 col-md-6"},W=(0,a._)("label",{for:"category",class:"form-label"},"分類",-1),Y={class:"mb-3 col-md-6"},j=(0,a._)("label",{for:"price",class:"form-label"},"單位",-1),K={class:"row gx-2"},S={class:"mb-3 col-md-6"},q=(0,a._)("label",{for:"origin_price",class:"form-label"},"原價",-1),E={class:"mb-3 col-md-6"},O=(0,a._)("label",{for:"price",class:"form-label"},"售價",-1),A=(0,a._)("hr",null,null,-1),B={class:"mb-3"},G=(0,a._)("label",{for:"description",class:"form-label"},"產品描述",-1),J={class:"mb-3"},Q=(0,a._)("label",{for:"content",class:"form-label"},"說明內容",-1),R={class:"mb-3"},T={class:"form-check"},X=(0,a._)("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),tt={class:"modal-footer"},et=(0,a._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function lt(t,e,l,o,s,i){return(0,a.wg)(),(0,a.iD)("div",_,[(0,a._)("div",f,[(0,a._)("div",P,[v,(0,a._)("div",y,[(0,a._)("div",w,[(0,a._)("div",k,[(0,a._)("div",x,[M,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"image","onUpdate:modelValue":e[0]||(e[0]=t=>s.tempProduct.imageUrl=t),placeholder:"請輸入圖片連結"},null,512),[[g.nr,s.tempProduct.imageUrl]])]),(0,a._)("div",D,[$,(0,a._)("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:e[1]||(e[1]=(...t)=>i.uploadFile&&i.uploadFile(...t))},null,544)]),(0,a._)("img",{class:"img-fluid",src:s.tempProduct.imageUrl,alt:""},null,8,U),s.tempProduct.images?((0,a.wg)(),(0,a.iD)("div",C,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.tempProduct.images,((t,e)=>((0,a.wg)(),(0,a.iD)("div",{class:"mb-3 input-group",key:e},[(0,a.wy)((0,a._)("input",{type:"url",class:"form-control form-control","onUpdate:modelValue":t=>s.tempProduct.images[e]=t,placeholder:"請輸入連結"},null,8,V),[[g.nr,s.tempProduct.images[e]]]),(0,a._)("button",{type:"button",class:"btn btn-outline-danger",onClick:t=>s.tempProduct.images.splice(e,1)}," 移除 ",8,Z)])))),128)),s.tempProduct.images[s.tempProduct.images.length-1]||!s.tempProduct.images.length?((0,a.wg)(),(0,a.iD)("div",L,[(0,a._)("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[2]||(e[2]=t=>s.tempProduct.images.push(""))}," 新增圖片 ")])):(0,a.kq)("",!0)])):(0,a.kq)("",!0)]),(0,a._)("div",z,[(0,a._)("div",F,[N,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[3]||(e[3]=t=>s.tempProduct.title=t),placeholder:"請輸入標題"},null,512),[[g.nr,s.tempProduct.title]])]),(0,a._)("div",H,[(0,a._)("div",I,[W,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"category","onUpdate:modelValue":e[4]||(e[4]=t=>s.tempProduct.category=t),placeholder:"請輸入分類"},null,512),[[g.nr,s.tempProduct.category]])]),(0,a._)("div",Y,[j,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"unit","onUpdate:modelValue":e[5]||(e[5]=t=>s.tempProduct.unit=t),placeholder:"請輸入單位"},null,512),[[g.nr,s.tempProduct.unit]])])]),(0,a._)("div",K,[(0,a._)("div",S,[q,(0,a.wy)((0,a._)("input",{type:"number",class:"form-control",id:"origin_price","onUpdate:modelValue":e[6]||(e[6]=t=>s.tempProduct.origin_price=t),placeholder:"請輸入原價"},null,512),[[g.nr,s.tempProduct.origin_price]])]),(0,a._)("div",E,[O,(0,a.wy)((0,a._)("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":e[7]||(e[7]=t=>s.tempProduct.price=t),placeholder:"請輸入售價"},null,512),[[g.nr,s.tempProduct.price]])])]),A,(0,a._)("div",B,[G,(0,a.wy)((0,a._)("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":e[8]||(e[8]=t=>s.tempProduct.description=t),placeholder:"請輸入產品描述"},null,512),[[g.nr,s.tempProduct.description]])]),(0,a._)("div",J,[Q,(0,a.wy)((0,a._)("textarea",{type:"text",class:"form-control",id:"content","onUpdate:modelValue":e[9]||(e[9]=t=>s.tempProduct.content=t),placeholder:"請輸入產品說明內容"},null,512),[[g.nr,s.tempProduct.content]])]),(0,a._)("div",R,[(0,a._)("div",T,[(0,a.wy)((0,a._)("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":e[10]||(e[10]=t=>s.tempProduct.is_enabled=t),"true-value":1,"false-value":0,id:"is_enabled"},null,512),[[g.e8,s.tempProduct.is_enabled]]),X])])])])]),(0,a._)("div",tt,[et,(0,a._)("button",{type:"button",class:"btn btn-primary",onClick:e[11]||(e[11]=e=>t.$emit("update-product",s.tempProduct))},"確認")])])])],512)}var at=l(1339),ot={props:{product:{type:Object,default(){return{}}}},watch:{product(){this.tempProduct=this.product,this.tempProduct.images||(this.tempProduct.images=[])}},data(){return{modal:{},tempProduct:{}}},methods:{uploadFile(){const t=this.$refs.fileInput.files[0],e=new FormData;e.append("file-to-upload",t);const l="https://vue3-course-api.hexschool.io/api/eunho-api/admin/upload";this.$http.post(l,e).then((t=>{t.data.success&&(this.tempProduct.imageUrl=t.data.imageUrl)}))}},mixins:[at.Z]},st=l(89);const it=(0,st.Z)(ot,[["render",lt]]);var dt=it,nt=l(6417),rt=l(1917),ct={data(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1}},components:{ProductModal:dt,DelModal:nt.Z,PagiNation:rt.Z},inject:["$httpMessageState"],methods:{getProducts(t=1){const e=`https://vue3-course-api.hexschool.io/api/eunho-api/admin/products/?page=${t}`;this.isLoading=!0,this.$http.get(e).then((t=>{this.isLoading=!1,t.data.success&&(console.log(t.data),this.products=t.data.products,this.pagination=t.data.pagination)}))},openModal(t,e){this.tempProduct=t?{}:{...e},this.isNew=t;const l=this.$refs.productModal;l.showModal()},updateProduct(t){this.tempProduct=t;let e="https://vue3-course-api.hexschool.io/api/eunho-api/admin/product",l="post";this.isNew||(e=`https://vue3-course-api.hexschool.io/api/eunho-api/admin/product/${t.id}`,l="put");const a=this.$refs.productModal;this.$http[l](e,{data:this.tempProduct}).then((t=>{console.log(t),a.hideModal(),this.getProducts(),this.$httpMessageState(t,"更新")}))},openDelProductModal(t){this.tempProduct={...t};const e=this.$refs.delModal;e.showModal()},delProduct(){const t=`https://vue3-course-api.hexschool.io/api/eunho-api/admin/product/${this.tempProduct.id}`;this.isLoading=!0,this.$http.delete(t).then((t=>{this.isLoading=!1,this.$httpMessageState(t,"刪除商品");const e=this.$refs.delModal;e.hideModal(),this.getProducts()}))}},created(){this.getProducts()}};const ut=(0,st.Z)(ct,[["render",b]]);var pt=ut}}]);
//# sourceMappingURL=115.6ccef8a2.js.map