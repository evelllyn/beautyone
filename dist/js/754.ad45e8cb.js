"use strict";(self["webpackChunkvueworks"]=self["webpackChunkvueworks"]||[]).push([[754],{3754:function(s,e,n){n.r(e),n.d(e,{default:function(){return f}});var t=n(3396),r=n(9242);const a={class:"container mt-5"},o={class:"col-md-6"},i=(0,t._)("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1),u={class:"mb-2"},l=(0,t._)("label",{for:"inputEmail",class:"sr-only"},"Email address",-1),d={class:"mb-2"},c=(0,t._)("label",{for:"inputPassword",class:"sr-only"},"Password",-1),p=(0,t._)("div",{class:"text-end mt-4"},[(0,t._)("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"},"登入")],-1);function m(s,e,n,m,h,w){return(0,t.wg)(),(0,t.iD)("div",a,[(0,t._)("form",{class:"row justify-content-center",onSubmit:e[2]||(e[2]=(0,r.iM)(((...s)=>w.singIn&&w.singIn(...s)),["prevent"]))},[(0,t._)("div",o,[i,(0,t._)("div",u,[l,(0,t.wy)((0,t._)("input",{type:"email",id:"inputEmail",class:"form-control",placeholder:"Email address",required:"",autofocus:"","onUpdate:modelValue":e[0]||(e[0]=s=>h.user.username=s)},null,512),[[r.nr,h.user.username]])]),(0,t._)("div",d,[c,(0,t.wy)((0,t._)("input",{type:"password",id:"inputPassword",class:"form-control",placeholder:"Password",required:"","onUpdate:modelValue":e[1]||(e[1]=s=>h.user.password=s)},null,512),[[r.nr,h.user.password]])]),p])],32)])}n(7658);var h={data(){return{user:{username:"",password:""}}},methods:{singIn(){const s="https://vue3-course-api.hexschool.io/admin/signin";this.$http.post(s,this.user).then((s=>{if(s.data.success){const{token:e,expired:n}=s.data;document.cookie=`hexToken=${e}; expired=${new Date(n)}`,this.$router.push("/managecenter/products")}}))}}},w=n(89);const b=(0,w.Z)(h,[["render",m]]);var f=b}}]);
//# sourceMappingURL=754.ad45e8cb.js.map