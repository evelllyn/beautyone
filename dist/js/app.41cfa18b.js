(function(){"use strict";var e={1007:function(e,n,t){var o=t(9242),r=t(9882),i=t(6423),a=t(6216),c=t(5708),u=t(3990),s=t(579),d=t(2389),f=t(3396);function l(e,n){const t=(0,f.up)("router-view");return(0,f.wg)(),(0,f.j4)(t)}var p=t(89);const h={},m=(0,p.Z)(h,[["render",l]]);var b=m,v=t(2483);const g=[{path:"/",component:()=>Promise.all([t.e(746),t.e(574)]).then(t.bind(t,7574)),children:[{path:"/",component:()=>Promise.all([t.e(746),t.e(972),t.e(498)]).then(t.bind(t,523))},{path:"products",component:()=>t.e(320).then(t.bind(t,2320))},{path:"product/:productId",component:()=>t.e(52).then(t.bind(t,4052))},{path:"favorite",component:()=>t.e(365).then(t.bind(t,5365))},{path:"cart",component:()=>t.e(154).then(t.bind(t,1154))},{path:"fillin",component:()=>t.e(630).then(t.bind(t,9630))},{path:"checkout/:orderId",component:()=>t.e(680).then(t.bind(t,9680))}]},{path:"/login",component:()=>t.e(754).then(t.bind(t,3754))},{path:"/managecenter",component:()=>Promise.all([t.e(746),t.e(765)]).then(t.bind(t,8765)),children:[{path:"products",component:()=>Promise.all([t.e(746),t.e(972),t.e(115)]).then(t.bind(t,4115))},{path:"orders",component:()=>Promise.all([t.e(746),t.e(972),t.e(722)]).then(t.bind(t,7722))},{path:"coupons",component:()=>Promise.all([t.e(746),t.e(972),t.e(116)]).then(t.bind(t,5116))}]}],y=(0,v.p7)({history:(0,v.r5)(),linkActiveClass:"active",routes:g});var w=y;function O(e){const n=parseInt(e,10);return`${n.toFixed(0).replace(/./g,((e,n,t)=>n&&"."!==e&&(t.length-n)%3===0?`, ${e}`.replace(/\s/g,""):e))}`}function j(e){const n=new Date(1e3*e);return n.toLocaleDateString()}var k=t(5820);function P(e,n="更新"){if(e.data.success)k.Z.emit("push-message",{style:"success",title:`已${n}`});else{const t="string"===typeof e.data.message?[e.data.message]:e.data.message;k.Z.emit("push-message",{style:"danger",title:`${n}失敗`,content:t.join("、")})}}var x=t(2578);(0,c.aH)("required",u.C1),(0,c.aH)("email",u.Do),(0,c.aH)("min",u.VV),(0,c.jQ)({generateMessage:(0,s.NC)({zh_TW:d}),validateOnInput:!0}),(0,s.i_)("zh_TW");const E=(0,x.WB)(),C=(0,o.ri)(b);C.config.globalProperties.$filters={currency:O,date:j},C.provide("$httpMessageState",P),C.use(E),C.use(i.Z,r.Z),C.use(w),C.component("LoaDing",a.Z),C.component("VForm",c.l0),C.component("VField",c.gN),C.component("VErrorMessage",c.Bc),C.mount("#app")},5820:function(e,n,t){var o=t(1373);const r=(0,o.Z)();n.Z=r}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,loaded:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(n,o,r,i){if(!o){var a=1/0;for(d=0;d<e.length;d++){o=e[d][0],r=e[d][1],i=e[d][2];for(var c=!0,u=0;u<o.length;u++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[u])}))?o.splice(u--,1):(c=!1,i<a&&(a=i));if(c){e.splice(d--,1);var s=r();void 0!==s&&(n=s)}}return n}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{52:"fca7ea21",115:"6ccef8a2",116:"9c0be96a",154:"83e6d294",320:"f142132f",365:"98d3c232",498:"4cdf1e8f",574:"b7aececf",630:"e3b406df",680:"4d5bf190",722:"ce3c3efe",746:"e93c23a1",754:"ad45e8cb",765:"a7215584",972:"69ad1071"}[e]+".js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="vueworks:";t.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var c,u;if(void 0!==i)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var f=s[d];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==n+i){c=f;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,t.nc&&c.setAttribute("nonce",t.nc),c.setAttribute("data-webpack",n+i),c.src=o),e[o]=[r];var l=function(n,t){c.onerror=c.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/beautyone/dist/"}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=i);var a=t.p+t.u(n),c=new Error,u=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;c.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,r[1](c)}};t.l(a,u,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,a=o[0],c=o[1],u=o[2],s=0;if(a.some((function(n){return 0!==e[n]}))){for(r in c)t.o(c,r)&&(t.m[r]=c[r]);if(u)var d=u(t)}for(n&&n(o);s<a.length;s++)i=a[s],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(d)},o=self["webpackChunkvueworks"]=self["webpackChunkvueworks"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(1007)}));o=t.O(o)})();
//# sourceMappingURL=app.41cfa18b.js.map