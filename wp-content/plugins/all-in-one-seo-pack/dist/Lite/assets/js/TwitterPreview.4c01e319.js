var l=Object.defineProperty,c=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var r=(t,a,e)=>a in t?l(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,i=(t,a)=>{for(var e in a||(a={}))u.call(a,e)&&r(t,e,a[e]);if(s)for(var e of s(a))p.call(a,e)&&r(t,e,a[e]);return t},n=(t,a)=>c(t,m(a));import{a as d}from"./index.24bc83f1.js";import{d as _}from"./dannie-profile.41545edf.js";import{B as g}from"./Img.bd7f4b00.js";import{C as v}from"./index.6be33911.js";import{S as f}from"./Book.b6a9040c.js";import{n as C}from"./vueComponentNormalizer.87056a83.js";var w=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"aioseo-twitter-preview"},[e("div",{staticClass:"twitter-post"},[e("div",{staticClass:"twitter-header"},[e("div",{staticClass:"profile-photo"},[e("img",{attrs:{alt:"Dannie the Detective profile image",src:t.$getImgUrl(t.dannieProfileImg)}})]),e("div",{staticClass:"poster"},[e("div",{staticClass:"poster-name"},[t._v(" "+t._s(t.appName)+" ")]),e("div",{staticClass:"poster-username"},[t._v(" @aioseopack ")])])]),e("div",{staticClass:"twitter-container",class:t.getCard==="summary_large_image"&&!t.image?"summary":t.getCard},[e("div",{staticClass:"twitter-content"},[e("div",{staticClass:"twitter-image-preview",style:{backgroundImage:t.getCard==="summary"&&t.canShowImage?"url('"+t.image+"')":""}},[!t.loading&&(!t.image||!t.canShowImage)?e("svg-book"):t._e(),t.loading?e("core-loader"):t._e(),e("base-img",{directives:[{name:"show",rawName:"v-show",value:t.getCard==="summary_large_image"&&t.canShowImage,expression:"'summary_large_image' === getCard && canShowImage"}],attrs:{src:t.image,debounce:!1},on:{"can-show":t.maybeCanShow}})],1),e("div",{staticClass:"twitter-site-description"},[e("div",{staticClass:"site-title"},[t._t("site-title")],2),e("div",{staticClass:"site-description"},[t._t("site-description")],2),e("div",{staticClass:"site-domain"},[t._v(" "+t._s(t.$aioseo.urls.domain)+" ")])])])])])])},h=[];const y={components:{BaseImg:g,CoreLoader:v,SvgBook:f},props:{image:String,card:String,loading:{type:Boolean,default(){return!1}}},data(){return{dannieProfileImg:_,canShowImage:!1}},computed:n(i({},d(["options"])),{appName(){return"All in One SEO"},getCard(){return this.card==="default"?this.options.social.twitter.general.defaultCardType:this.card}}),methods:{maybeCanShow(t){this.canShowImage=t}}},o={};var S=C(y,w,h,!1,I,null,null,null);function I(t){for(let a in o)this[a]=o[a]}var N=function(){return S.exports}();export{N as C};
