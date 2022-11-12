var k=Object.defineProperty;var l=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var c=(t,i,e)=>i in t?k(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,a=(t,i)=>{for(var e in i||(i={}))E.call(i,e)&&c(t,e,i[e]);if(l)for(var e of l(i))I.call(i,e)&&c(t,e,i[e]);return t};import{n,V as r}from"./js/vueComponentNormalizer.87056a83.js";import{c as g}from"./js/index.6be33911.js";import{T as x}from"./js/index.56772b9c.js";import{e as v}from"./js/elemLoaded.b1f6e29c.js";import{a as f,e as w,g as $,m as o,s as T}from"./js/index.24bc83f1.js";import{T as P}from"./js/ToolsSettings.c7becacb.js";import{c as b,t as N}from"./js/helpers.55800a79.js";import{T as C}from"./js/TruSeoScore.98a47fd6.js";import{S as y}from"./js/Close.5e7bcb70.js";import"./js/client.94d919c5.js";import"./js/_commonjsHelpers.f40d732e.js";import"./js/default-i18n.abde8d59.js";import"./js/constants.50303a5f.js";import"./js/isArrayLikeObject.26ec157b.js";import"./js/Modal.f47c8aa2.js";import"./js/cleanForSlug.d874125b.js";var A=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"aioseo-score-button",class:t.scoreClass,attrs:{id:t.getId}},[t._v(" "+t._s(this.score===0?"N/A":this.score+"/100")+" ")])},S=[];const q={props:{score:{type:Number,default(){return 0}},postId:{type:Number,default(){return 0}}},computed:{scoreClass:function(){return 80<this.score?"score-green":50<this.score?"score-orange":1<this.score?"score-red":"score-disabled"},getId:function(){return`score-button-${this.postId}`}}},d={};var M=n(q,A,S,!1,L,null,null,null);function L(t){for(let i in d)this[i]=d[i]}var j=function(){return M.exports}(),U=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"aioseo-details-column",class:{editing:t.showEditTitle||t.showEditDescription||t.showEditImageTitle||t.showEditImageAltTag}},[e("div",[this.$root._data.screen.base==="edit"&&t.showTruSeo&&this.$allowed("aioseo_page_analysis")&&!t.isSpecialPage?e("div",{staticClass:"edit-row"},[e("core-score-button",{attrs:{score:this.post.value,postId:t.postId}})],1):t._e(),this.$allowed("aioseo_page_general_settings")?e("div",{staticClass:"edit-row edit-title"},[e("a",{staticClass:"dashicons dashicons-edit aioseo-quickedit",attrs:{title:t.strings.edit},on:{click:function(s){return s.preventDefault(),t.editTitle.apply(null,arguments)}}}),e("strong",[t._v(t._s(t.strings.title)+" ")]),e("span",{attrs:{id:"aioseo-"+t.columnName+"-"+t.postId+"-value"},domProps:{innerHTML:t._s(t.truncate(t.titleParsed,100))}})]):t._e(),t.showEditTitle?e("div",{staticClass:"edit-row"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"aioseo-quickedit-input",attrs:{rows:"4",columns:"32"},domProps:{value:t.title},on:{input:function(s){s.target.composing||(t.title=s.target.value)}}}),t._v(" "),e("a",{staticClass:"dashicons aioseo-quickedit-input-save",attrs:{title:t.strings.save},on:{click:function(s){return s.preventDefault(),t.save.apply(null,arguments)}}},[e("svg-circle-check",{attrs:{width:"20"}})],1),e("a",{staticClass:"dashicons aioseo-quickedit-input-cancel",attrs:{title:t.strings.cancel},on:{click:function(s){return s.preventDefault(),t.cancel.apply(null,arguments)}}},[e("svg-circle-close",{attrs:{width:"20"}})],1)]):t._e(),this.$allowed("aioseo_page_general_settings")?e("div",{staticClass:"edit-row edit-description"},[e("a",{staticClass:"dashicons dashicons-edit aioseo-quickedit",attrs:{title:t.strings.edit},on:{click:function(s){return s.preventDefault(),t.editDescription.apply(null,arguments)}}}),e("strong",[t._v(t._s(t.strings.description)+" ")]),e("span",{attrs:{id:"aioseo-"+t.columnName+"-"+t.postId+"-value"},domProps:{innerHTML:t._s(t.truncate(t.descriptionParsed))}})]):t._e(),t.showEditDescription?e("div",{staticClass:"edit-row"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.postDescription,expression:"postDescription"}],staticClass:"aioseo-quickedit-input",attrs:{rows:"4",columns:"32"},domProps:{value:t.postDescription},on:{input:function(s){s.target.composing||(t.postDescription=s.target.value)}}}),t._v(" "),e("a",{staticClass:"dashicons aioseo-quickedit-input-save",attrs:{title:t.strings.save},on:{click:function(s){return s.preventDefault(),t.save.apply(null,arguments)}}},[e("svg-circle-check",{attrs:{width:"20"}})],1),e("a",{staticClass:"dashicons aioseo-quickedit-input-cancel",attrs:{title:t.strings.cancel},on:{click:function(s){return s.preventDefault(),t.cancel.apply(null,arguments)}}},[e("svg-circle-close",{attrs:{width:"20"}})],1)]):t._e(),t._t("default"),this.$root._data.screen.base==="upload"&&t.post.showMedia?e("div",{staticClass:"edit-row edit-image-title"},[e("a",{staticClass:"dashicons dashicons-edit aioseo-quickedit",attrs:{title:t.strings.edit},on:{click:function(s){return s.preventDefault(),t.editImageTitle.apply(null,arguments)}}}),e("strong",[t._v(t._s(t.strings.imageTitle)+" ")]),e("span",{attrs:{id:"aioseo-"+t.columnName+"-"+t.postId+"-value"},domProps:{innerHTML:t._s(t.imageTitle)}})]):t._e(),t.showEditImageTitle?e("div",{staticClass:"edit-row"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.imageTitle,expression:"imageTitle"}],staticClass:"aioseo-quickedit-input",attrs:{rows:"4",columns:"32"},domProps:{value:t.imageTitle},on:{input:function(s){s.target.composing||(t.imageTitle=s.target.value)}}}),t._v(" "),e("a",{staticClass:"dashicons aioseo-quickedit-input-save",attrs:{title:t.strings.save},on:{click:function(s){return s.preventDefault(),t.saveImage.apply(null,arguments)}}},[e("svg-circle-check",{attrs:{width:"20"}})],1),e("a",{staticClass:"dashicons aioseo-quickedit-input-cancel",attrs:{title:t.strings.cancel},on:{click:function(s){return s.preventDefault(),t.cancel.apply(null,arguments)}}},[e("svg-circle-close",{attrs:{width:"20"}})],1)]):t._e(),this.$root._data.screen.base==="upload"&&t.post.showMedia?e("div",{staticClass:"edit-row edit-image-alt"},[e("a",{staticClass:"dashicons dashicons-edit aioseo-quickedit",attrs:{title:t.strings.edit},on:{click:function(s){return s.preventDefault(),t.editImageAlt.apply(null,arguments)}}}),e("strong",[t._v(t._s(t.strings.imageAltTag)+" ")]),e("span",{attrs:{id:"aioseo-"+t.columnName+"-"+t.postId+"-value"},domProps:{innerHTML:t._s(t.imageAltTag)}})]):t._e(),t.showEditImageAltTag?e("div",{staticClass:"edit-row"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.imageAltTag,expression:"imageAltTag"}],staticClass:"aioseo-quickedit-input",attrs:{rows:"4",columns:"32"},domProps:{value:t.imageAltTag},on:{input:function(s){s.target.composing||(t.imageAltTag=s.target.value)}}}),t._v(" "),e("a",{staticClass:"dashicons aioseo-quickedit-input-save",attrs:{title:t.strings.save},on:{click:function(s){return s.preventDefault(),t.saveImage.apply(null,arguments)}}},[e("svg-circle-check",{attrs:{width:"20"}})],1),e("a",{staticClass:"dashicons aioseo-quickedit-input-cancel",attrs:{title:t.strings.cancel},on:{click:function(s){return s.preventDefault(),t.cancel.apply(null,arguments)}}},[e("svg-circle-close",{attrs:{width:"20"}})],1)]):t._e()],2)])},B=[];const H={components:{CoreScoreButton:j,SvgCircleCheck:g,SvgCircleClose:y},mixins:[P,C],props:{post:Object,index:Number},data(){return{postId:null,columnName:null,value:null,title:null,titleParsed:null,postDescription:null,descriptionParsed:null,imageTitle:null,imageAltTag:null,showEditTitle:!1,showEditDescription:!1,showEditImageTitle:!1,showEditImageAltTag:!1,showTruSeo:!1,isSpecialPage:!1,strings:{title:this.$t.__("Title:",this.$td),description:this.$t.__("Description:",this.$td),imageTitle:this.$t.__("Image Title:",this.$td),imageAltTag:this.$t.__("Image Alt Tag:",this.$td),edit:this.$t.__("Edit",this.$td),save:this.$t.__("Save",this.$td),cancel:this.$t.__("Cancel",this.$td),wait:this.$t.__("Please wait...",this.$td)}}},computed:a({},f(["options","currentPost"])),methods:{save(){this.showEditTitle=!1,this.showEditDescription=!1,this.post.title=this.title,this.post.description=this.postDescription,this.$http.post(this.$links.restUrl("postscreen")).send({postId:this.post.id,title:this.post.title,description:this.post.description}).then(t=>{this.titleParsed=t.body.title,this.descriptionParsed=t.body.description,this.post.titleParsed=t.body.title,this.post.descriptionParsed=t.body.description;const i=window.aioseo.posts;i[this.index]=this.post,w({posts:i}),this.$root._data.screen.base!=="upload"&&this.runAnalysis(this.post.id)}).catch(t=>{console.error(`Unable to update post with ID ${this.post.id}: ${t}`)})},saveImage(){this.showEditImageTitle=!1,this.showEditImageAltTag=!1,this.post.title=this.title,this.post.description=this.postDescription,this.post.imageTitle=this.imageTitle,this.post.imageAltTag=this.imageAltTag,this.$http.post(this.$links.restUrl("postscreen")).send({postId:this.post.id,isMedia:!0,title:this.post.title,description:this.post.description,imageTitle:this.post.imageTitle,imageAltTag:this.post.imageAltTag}).then(()=>{}).catch(t=>{console.error(`Unable to update attachment with ID ${this.post.id}: ${t}`)})},cancel(){this.value=this.post.value,this.showEditTitle=!1,this.showEditDescription=!1,this.showEditImageTitle=!1,this.showEditImageAltTag=!1},editTitle(){this.showEditTitle=!0},editDescription(){this.showEditDescription=!0},editImageTitle(){this.showEditImageTitle=!0},editImageAlt(){this.showEditImageAltTag=!0},updatePostTitle(t,i){const e=document.getElementById(`post-${t}`);if(!e)return;const s=e.getElementsByClassName("title")[0].getElementsByTagName("a")[0];if(!s)return;const D=s.getElementsByTagName("span")[0];s.innerText=i,s.prepend(D)}},mounted(){this.postId=this.post.id,this.columnName=this.post.columnName,this.value=this.post.value,this.imageTitle=this.post.imageTitle,this.imageAltTag=this.post.imageAltTag,this.isSpecialPage=this.post.isSpecialPage,this.title=this.post.title||this.post.defaultTitle,this.titleParsed=this.post.titleParsed,this.postDescription=this.post.description||this.post.defaultDescription,this.descriptionParsed=this.post.descriptionParsed},async created(){const{options:t,currentPost:i,tags:e}=await $(this.$http);this.$set(this.$store.state,"options",o(a({},this.$store.state.options),a({},t))),this.$set(this.$store.state,"currentPost",o(a({},this.$store.state.currentPost),a({},i))),this.$set(this.$store.state,"tags",o(a({},this.$store.state.tags),a({},e))),this.showTruSeo=b()}},u={};var O=n(H,U,B,!1,R,null,null,null);function R(t){for(let i in u)this[i]=u[i]}var F=function(){return O.exports}(),z=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("core-post-column",{attrs:{post:t.post,index:t.index}})},V=[];const G={components:{CorePostColumn:F},props:{post:Object,index:Number}},p={};var J=n(G,z,V,!1,K,null,null,null);function K(t){for(let i in p)this[i]=p[i]}var h=function(){return J.exports}(),Q=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[t.$isPro?e("PostColumn",{attrs:{post:t.post,index:t.index}}):t._e(),t.$isPro?t._e():e("PostColumnLite",{attrs:{post:t.post,index:t.index}})],1)},W=[];const X={components:{PostColumn:h,PostColumnLite:h},props:{post:Object,index:Number}},m={};var Y=n(X,Q,W,!1,Z,null,null,null);function Z(t){for(let i in m)this[i]=m[i]}var tt=function(){return Y.exports}(),et=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"aioseo-details-column",class:{editing:t.showEditTitle||t.showEditDescription}},[e("div",[e("div",{staticClass:"edit-row edit-title"},[e("a",{staticClass:"dashicons dashicons-edit aioseo-quickedit",attrs:{title:t.strings.edit},on:{click:function(s){return s.preventDefault(),t.editTitle.apply(null,arguments)}}}),e("strong",[t._v(t._s(t.strings.title)+" ")]),e("span",{attrs:{id:"aioseo-"+t.columnName+"-"+t.termId+"-value"},domProps:{innerHTML:t._s(t.truncate(t.titleParsed,100))}})]),t.showEditTitle?e("div",{staticClass:"edit-row"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"aioseo-quickedit-input",attrs:{rows:"4",columns:"32"},domProps:{value:t.title},on:{input:function(s){s.target.composing||(t.title=s.target.value)}}}),t._v(" "),e("a",{staticClass:"dashicons aioseo-quickedit-input-save",attrs:{title:t.strings.save},on:{click:function(s){return s.preventDefault(),t.save.apply(null,arguments)}}},[e("svg-circle-check",{attrs:{width:"20"}})],1),e("a",{staticClass:"dashicons aioseo-quickedit-input-cancel",attrs:{title:t.strings.cancel},on:{click:function(s){return s.preventDefault(),t.cancel.apply(null,arguments)}}},[e("svg-circle-close",{attrs:{width:"20"}})],1)]):t._e(),e("div",{staticClass:"edit-row edit-description"},[e("a",{staticClass:"dashicons dashicons-edit aioseo-quickedit",attrs:{title:t.strings.edit},on:{click:function(s){return s.preventDefault(),t.editDescription.apply(null,arguments)}}}),e("strong",[t._v(t._s(t.strings.description)+" ")]),e("span",{attrs:{id:"aioseo-"+t.columnName+"-"+t.termId+"-value"},domProps:{innerHTML:t._s(t.truncate(t.descriptionParsed))}})]),t.showEditDescription?e("div",{staticClass:"edit-row"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.termDescription,expression:"termDescription"}],staticClass:"aioseo-quickedit-input",attrs:{rows:"4",columns:"32"},domProps:{value:t.termDescription},on:{input:function(s){s.target.composing||(t.termDescription=s.target.value)}}}),t._v(" "),e("a",{staticClass:"dashicons aioseo-quickedit-input-save",attrs:{title:t.strings.save},on:{click:function(s){return s.preventDefault(),t.save.apply(null,arguments)}}},[e("svg-circle-check",{attrs:{width:"20"}})],1),e("a",{staticClass:"dashicons aioseo-quickedit-input-cancel",attrs:{title:t.strings.cancel},on:{click:function(s){return s.preventDefault(),t.cancel.apply(null,arguments)}}},[e("svg-circle-close",{attrs:{width:"20"}})],1)]):t._e()])])},st=[];const it={components:{SvgCircleCheck:g,SvgCircleClose:y},mixins:[P,C],props:{term:Object,index:Number},data(){return{termId:null,columnName:null,title:null,titleParsed:null,termDescription:null,descriptionParsed:null,showEditTitle:!1,showEditDescription:!1,showTruSeo:!1,strings:{title:this.$t.__("Title:",this.$td),description:this.$t.__("Description:",this.$td),edit:this.$t.__("Edit",this.$td),save:this.$t.__("Save",this.$td),cancel:this.$t.__("Cancel",this.$td),wait:this.$t.__("Please wait...",this.$td)}}},computed:a({},f(["options","currentPost"])),methods:{save(){this.showEditTitle=!1,this.showEditDescription=!1,this.term.title=this.title,this.term.description=this.termDescription,this.$http.post(this.$links.restUrl("termscreen")).send({termId:this.term.id,title:this.term.title,description:this.term.description}).then(t=>{this.titleParsed=t.body.title,this.descriptionParsed=t.body.description,this.term.titleParsed=t.body.title,this.term.descriptionParsed=t.body.description;const i=window.aioseo.terms;i[this.index]=this.term,w({terms:i})}).catch(t=>{console.error(`Unable to update term with ID ${this.term.id}: ${t}`)})},cancel(){this.showEditTitle=!1,this.showEditDescription=!1},editTitle(){this.showEditTitle=!0},editDescription(){this.showEditDescription=!0}},mounted(){this.termId=this.term.id,this.columnName=this.term.columnName,this.title=this.term.title,this.titleParsed=this.term.titleParsed,this.termDescription=this.term.description,this.descriptionParsed=this.term.descriptionParsed},async created(){const{options:t,currentPost:i,tags:e}=await $(this.$http);this.$set(this.$store.state,"options",o(a({},this.$store.state.options),a({},t))),this.$set(this.$store.state,"currentPost",o(a({},this.$store.state.currentPost),a({},i))),this.$set(this.$store.state,"tags",o(a({},this.$store.state.tags),a({},e))),this.showTruSeo=N()}},_={};var at=n(it,et,st,!1,ot,null,null,null);function ot(t){for(let i in _)this[i]=_[i]}var nt=function(){return at.exports}();r.prototype.$truSeo=new x;const rt=(t,i)=>{new r({store:T,data:{screen:window.aioseo.screen},render:e=>e(tt,{props:{post:t,index:i}})}).$mount(`#${t.columnName}-${t.id}`)};window.aioseo.posts&&window.aioseo.posts.forEach((t,i)=>{v(`#${t.columnName}-${t.id}`,`aioseoPostsTable-${t.id}`),document.addEventListener("animationstart",function(e){`aioseoPostsTable-${t.id}`===e.animationName&&rt(t,i)},{passive:!0})});const lt=(t,i)=>{new r({store:T,data:{screen:window.aioseo.screen},render:e=>e(nt,{props:{term:t,index:i}})}).$mount(`#${t.columnName}-${t.id}`)};window.aioseo.terms&&window.aioseo.posts.length===0&&window.aioseo.terms.forEach((t,i)=>{v(`#${t.columnName}-${t.id}`,`aioseoTermsTable-${t.id}`),document.addEventListener("animationstart",function(e){`aioseoTermsTable-${t.id}`===e.animationName&&lt(t,i)},{passive:!0})});
