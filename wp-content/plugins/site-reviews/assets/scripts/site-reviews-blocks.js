/*! For license information please see site-reviews-blocks.js.LICENSE.txt */
!function(){"use strict";var e={367:function(e,t,n){var r=n(424),s=60103,a=60106;var i=60109,o=60110,l=60112;var c=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;s=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),o=p("react.context"),l=p("react.forward_ref"),p("react.suspense"),c=p("react.memo"),u=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function y(){}function h(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var w=h.prototype=new y;w.constructor=h,r(w,v.prototype),w.isPureReactComponent=!0;var b={current:null},_=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var r,a={},i=null,o=null;if(null!=t)for(r in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(i=""+t.key),t)_.call(t,r)&&!x.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===a[r]&&(a[r]=l[r]);return{$$typeof:s,type:e,key:i,ref:o,props:a,_owner:b.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===s}var O=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function j(e,t,n,r,i){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var l=!1;if(null===e)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case s:case a:l=!0}}if(l)return i=i(l=e),e=""===r?"."+S(l,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(O,"$&/")+"/"),j(i,t,n,"",(function(e){return e}))):null!=i&&(E(i)&&(i=function(e,t){return{$$typeof:s,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(O,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=""===r?".":r+":",Array.isArray(e))for(var c=0;c<e.length;c++){var u=r+S(o=e[c],c);l+=j(o,t,n,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(o=e.next()).done;)l+=j(o=o.value,t,n,u=r+S(o,c++),i);else if("object"===o)throw t=""+e,Error(m(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function C(e,t,n){if(null==e)return e;var r=[],s=0;return j(e,r,"","",(function(e){return t.call(n,e,s++)})),r}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var R={current:null};function B(){var e=R.current;if(null===e)throw Error(m(321));return e}t.createElement=k},294:function(e,t,n){e.exports=n(367)},424:function(e){var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function s(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var i,o,l=s(e),c=1;c<arguments.length;c++){for(var u in i=Object(arguments[c]))n.call(i,u)&&(l[u]=i[u]);if(t){o=t(i);for(var p=0;p<o.length;p++)r.call(i,o[p])&&(l[o[p]]=i[o[p]])}}return l}}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}!function(){var e=n(294);function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,s,a=[],i=!0,o=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){o=!0,s=e}finally{try{i||null==n.return||n.return()}finally{if(o)throw s}}return a}}(e,n)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s=wp.components.CheckboxControl,a=wp.element.useState,i=function(t,n,i){var o=[];return jQuery.each(t,(function(t,l){var c=r(a(!1),2),u=c[0],p=c[1],d=n.split(",").indexOf(t)>-1;o.push((0,e.createElement)(s,{key:"hide-".concat(t),className:"glsr-checkbox-control",checked:d||u,label:l,onChange:function(e){p(e),n=_.without(_.without(n.split(","),""),t),e&&n.push(t),i({hide:n.toString()})}}))})),o},o=(0,e.createElement)("svg",{width:"22px",height:"22px",viewBox:"0 0 22 22",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("path",{d:"M11 2l-3 6-6 .75 4.13 4.62-1.13 6.63 6-3 6 3-1.12-6.63 4.12-4.62-6-.75-3-6zm0 2.24l2.34 4.69 4.65.58-3.18 3.56.87 5.15-4.68-2.34v-11.64zm8.28-.894v.963h-3.272v2.691h-1.017v-6.3h4.496v.963h-3.479v1.683h3.272z"})),l=(0,e.createElement)("svg",{width:"22px",height:"22px",viewBox:"0 0 22 22",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("path",{d:"M11 2l-3 6-6 .75 4.13 4.62-1.13 6.63 6-3 6 3-1.12-6.63 4.12-4.62-6-.75-3-6zm0 2.24l2.34 4.69 4.65.58-3.18 3.56.87 5.15-4.68-2.34v-11.64zm3.681-3.54h2.592c1.449 0 2.232.648 2.232 1.823 0 1.071-.819 1.782-2.102 1.827l2.075 2.651h-1.26l-2.007-2.651h-.513v2.651h-1.017v-6.3zm2.565.954h-1.548v1.773h1.548c.819 0 1.202-.297 1.202-.905 0-.599-.405-.869-1.202-.869z"})),c=(0,e.createElement)("svg",{width:"22px",height:"22px",viewBox:"0 0 22 22",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("path",{d:"M11 2l-3 6-6 .75 4.13 4.62-1.13 6.63 6-3 6 3-1.12-6.63 4.12-4.62-6-.75-3-6zm0 2.24l2.34 4.69 4.65.58-3.18 3.56.87 5.15-4.68-2.34v-11.64zm8.415-2.969l-.518.824c-.536-.342-1.13-.54-1.769-.54-.842 0-1.418.365-1.418.941 0 .522.491.725 1.31.842l.437.059c1.022.14 2.03.563 2.03 1.733 0 1.283-1.161 1.985-2.525 1.985-.855 0-1.881-.284-2.534-.846l.554-.81c.432.396 1.247.693 1.976.693.824 0 1.472-.351 1.472-.932 0-.495-.495-.725-1.418-.851l-.491-.068c-.936-.131-1.868-.572-1.868-1.742 0-1.265 1.121-1.967 2.484-1.967.918 0 1.643.257 2.277.68z"})),u=wp.i18n._x,p=[{label:"- "+u("Select","admin-text","site-reviews")+" -",value:""},{label:"- "+u("Specific Post ID","admin-text","site-reviews")+" -",value:"custom"},{label:u("The Current Page","admin-text","site-reviews"),value:"post_id"},{label:u("The Parent Page","admin-text","site-reviews"),value:"parent_id"}],d=wp.i18n._x,m=[],f={label:"- "+d("Select","admin-text","site-reviews")+" -",value:""},g={label:"- "+d("Multiple Categories","admin-text","site-reviews")+" -",value:"custom"};wp.apiFetch({path:"/site-reviews/v1/categories?per_page=50"}).then((function(e){m.push(f),m.push(g),jQuery.each(e,(function(e,t){m.push({label:"".concat(t.name," (").concat(t.slug,")"),value:t.id})}))}));var v=m,y=wp.i18n._x,h=[{label:"- "+y("Select","admin-text","site-reviews")+" -",value:""},{label:"- "+y("Specific User ID","admin-text","site-reviews")+" -",value:"custom"},{label:y("The Logged-in user","admin-text","site-reviews"),value:"user_id"},{label:y("The Page author","admin-text","site-reviews"),value:"author_id"},{label:y("The Profile user (BuddyPress/Ultimate Member)","admin-text","site-reviews"),value:"profile_id"}],w=function(e,t,n){GLSR.Event.trigger(t,e,n)};function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var k=function(e,t){var n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.raw);return n.hide&&(n.hide=n.hide.join()),n.rating&&(n.rating=Number(n.rating)),~["","post_id","parent_id"].indexOf(n.assigned_posts)?t.assign_to?n.assign_to=n.assigned_posts:n.assigned_to=n.assigned_posts:t.assign_to?n.assign_to="custom":n.assigned_to="custom",n.user=n.assigned_users,~_.findIndex(h,(function(e){return e.value==n.assigned_users}))||(n.user="custom"),n.category=n.assigned_terms,~_.findIndex(v,(function(e){return e.value==n.assigned_terms}))||(n.category="custom"),n};function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E.apply(this,arguments)}function O(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var S=["children","custom_value","help","label","onChange","options","className","hideLabelFromVision","selectedValue"],j=(wp.i18n._x,wp.components),C=j.BaseControl,P=(j.TextControl,lodash.isEmpty),R=wp.compose.useInstanceId;function B(t){var n=t.children,r=t.custom_value,s=void 0===r?"custom":r,a=t.help,i=t.label,o=t.onChange,l=t.options,c=void 0===l?[]:l,u=t.className,p=t.hideLabelFromVision,d=(t.selectedValue,O(t,S)),m=R(B),f="inspector-select-control-".concat(m),g=d.value;return!P(c)&&(0,e.createElement)(C,{label:i,hideLabelFromVision:p,id:f,help:a,className:u},(0,e.createElement)("select",E({id:f,className:"components-select-control__input",onChange:function(e){o(e.target.value)},"aria-describedby":a?"".concat(f,"__help"):void 0},d),c.map((function(t,n){return(0,e.createElement)("option",{key:"".concat(t.label,"-").concat(t.value,"-").concat(n),value:t.value,disabled:t.disabled},t.label)}))),s===g&&n)}var I=wp.element,L=I.useRef,A=I.useState,N=I.useEffect;function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var G=lodash,F=G.debounce,M=G.isEqual,U=G.reduce,$=wp.compose.usePrevious,z=wp.element,q=z.RawHTML,Q=z.useEffect,V=z.useRef,Y=z.useState,J=wp.i18n,X=J.__,H=J.sprintf,K=wp.apiFetch,W=wp.url.addQueryArgs,Z=wp.components,ee=Z.Placeholder,te=Z.Spinner,ne=wp.blocks.getBlockType;function re(e,t,n){var r,s,a,i,o,l,c=(r=function(){return F(e,t,n)},s=[e,t,n],a=A((function(){return{inputs:s,result:r()}}))[0],i=L(!0),o=L(a),l=i.current||Boolean(s&&o.current.inputs&&function(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(s,o.current.inputs))?o.current:{inputs:s,result:r()},N((function(){i.current=!1,o.current=l}),[l]),l.result);return Q((function(){return function(){return c.cancel()}}),[c]),c}function se(t){var n=t.className;return(0,e.createElement)(ee,{className:n},X("Block rendered as empty."))}function ae(t){var n=t.response,r=t.className,s=H(X("Error loading block: %s"),n.errorMsg);return(0,e.createElement)(ee,{className:r},s)}function ie(t){var n=t.className;return(0,e.createElement)(ee,{className:n},(0,e.createElement)(te,null))}function oe(t){var n=t.attributes,s=t.block,a=t.className,i=t.httpMethod,o=void 0===i?"GET":i,l=t.urlQueryArgs,c=t.EmptyResponsePlaceholder,u=void 0===c?se:c,p=t.ErrorResponsePlaceholder,d=void 0===p?ae:p,m=t.LoadingResponsePlaceholder,f=void 0===m?ie:m,g=V(!0),v=V(),y=r(Y(null),2),h=y[0],w=y[1],b=$(t);function _(){var e;if(g.current){null!==h&&w(null);var t=null!==(e=n&&function(e,t){var n=ne(e);if(void 0===n)throw new Error("Block type '".concat(e,"' is not registered."));return U(n.attributes,(function(e,n,r){var s=t[r];return void 0!==s?e[r]=s:n.hasOwnProperty("default")&&(e[r]=n.default),-1!==["node","children"].indexOf(n.source)&&("string"==typeof e[r]?e[r]=[e[r]]:Array.isArray(e[r])||(e[r]=[])),e}),{})}(s,n))&&void 0!==e?e:null,r="POST"===o,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return W("/wp/v2/block-renderer/".concat(e),D(D({context:"edit"},null!==t?{attributes:t}:{}),n))}(s,r?null:t,l),i=r?{attributes:t}:null,c=v.current=K({path:a,data:i,method:r?"POST":"GET"}).then((function(e){g.current&&c===v.current&&e&&w(e.rendered)})).catch((function(e){g.current&&c===v.current&&w({error:!0,errorMsg:e.message})}));return c}}var x=re(_,500);return Q((function(){return function(){g.current=!1}}),[]),Q((function(){void 0===b?_():M(b,t)||x()})),Q((function(){t.onRender&&t.onRender(h,s,n)}),[h]),""===h?(0,e.createElement)(u,t):h?h.error?(0,e.createElement)(d,E({response:h},t)):(0,e.createElement)(q,{className:a},h):(0,e.createElement)(f,t)}var le=wp.i18n._x,ce=wp.blocks,ue=ce.createBlock,pe=ce.registerBlockType,de=wp.blockEditor,me=de.InspectorAdvancedControls,fe=de.InspectorControls,ge=wp.components,ve=ge.PanelBody,ye=(ge.SelectControl,ge.TextControl),he=GLSR_Block.nameprefix+"/form",we={assign_to:{default:"",type:"string"},assigned_posts:{default:"",type:"string"},assigned_terms:{default:"",type:"string"},assigned_users:{default:"",type:"string"},category:{default:"",type:"string"},className:{default:"",type:"string"},hide:{default:"",type:"string"},id:{default:"",type:"string"},user:{default:"",type:"string"}},be=(pe(he,{attributes:we,category:GLSR_Block.nameprefix,description:le("Display a review form.","admin-text","site-reviews"),edit:function(t){var n=t.attributes,r=n.assign_to,s=n.assigned_posts,a=n.assigned_terms,o=n.assigned_users,l=n.category,c=n.hide,u=n.id,d=n.user,m=(t.className,t.setAttributes),f={assign_to:(0,e.createElement)(B,{key:"assigned_posts",label:le("Assign Reviews to a Page","admin-text","site-reviews"),onChange:function(e){return m({assign_to:e,assigned_posts:"custom"===e?s:""})},options:p,value:r},(0,e.createElement)(ye,{key:"custom_assigned_posts",className:"glsr-base-conditional-control",help:le("Separate values with a comma.","admin-text","site-reviews"),onChange:function(e){return m({assigned_posts:e})},placeholder:le("Enter the Post IDs","admin-text","site-reviews"),type:"text",value:s})),category:(0,e.createElement)(B,{key:"assigned_terms",label:le("Assign Reviews to a Category","admin-text","site-reviews"),onChange:function(e){return m({category:e,assigned_terms:"custom"===e?a:""})},options:v,value:l},(0,e.createElement)(ye,{key:"custom_assigned_terms",className:"glsr-base-conditional-control",help:le("Separate values with a comma.","admin-text","site-reviews"),onChange:function(e){return m({assigned_terms:e})},placeholder:le("Enter the Category IDs or slugs","admin-text","site-reviews"),type:"text",value:a})),user:(0,e.createElement)(B,{key:"assigned_users",label:le("Assign Reviews to a User","admin-text","site-reviews"),onChange:function(e){return m({user:e,assigned_users:"custom"===e?o:""})},options:h,value:d},(0,e.createElement)(ye,{key:"custom_assigned_users",className:"glsr-base-conditional-control",help:le("Separate values with a comma.","admin-text","site-reviews"),onChange:function(e){return m({assigned_users:e})},placeholder:le("Enter the User IDs or usernames","admin-text","site-reviews"),type:"text",value:o})),hide:i(GLSR_Block.hideoptions.site_reviews_form,c,m)},g={panel_settings:(0,e.createElement)(ve,{title:le("Settings","admin-text","site-reviews")},Object.values(wp.hooks.applyFilters(GLSR_Block.nameprefix+".form.InspectorControls",f,t)))},y={id:(0,e.createElement)(ye,{label:le("Custom ID","admin-text","site-reviews"),onChange:function(e){return m({id:e})},value:u})};return[(0,e.createElement)(fe,null,Object.values(wp.hooks.applyFilters(GLSR_Block.nameprefix+".form.InspectorPanels",g,t))),(0,e.createElement)(me,null,Object.values(wp.hooks.applyFilters(GLSR_Block.nameprefix+".form.InspectorAdvancedControls",y,t))),(0,e.createElement)(oe,{block:he,attributes:t.attributes,onRender:w})]},example:{},icon:{src:o},keywords:["reviews","form"],save:function(){return null},title:le("Submit a Review","admin-text","site-reviews"),transforms:{from:[{type:"block",blocks:["core/legacy-widget"],isMatch:function(e){var t=e.idBase,n=e.instance;return"glsr_site-reviews-form"===t&&!(null==n||!n.raw)},transform:function(e){var t=e.instance;return ue(he,k(t,we))}}]}}),wp.i18n._x),_e=[{label:"- "+be("Select","admin-text","site-reviews")+" -",value:""},{label:be("Terms were accepted","admin-text","site-reviews"),value:"true"},{label:be("Terms were not accepted","admin-text","site-reviews"),value:"false"}],xe={label:"- "+(0,wp.i18n._x)("Select","admin-text","site-reviews")+" -",value:""},ke=[];wp.apiFetch({path:"/site-reviews/v1/types?per_page=50"}).then((function(e){e.length<2||(ke.push(xe),jQuery.each(e,(function(e,t){ke.push({label:t.name,value:t.id})})))}));var Ee=ke,Oe=wp.i18n._x,Se=wp.blocks,je=Se.createBlock,Ce=Se.registerBlockType,Pe=wp.blockEditor,Re=Pe.InspectorAdvancedControls,Be=Pe.InspectorControls,Ie=wp.components,Le=Ie.PanelBody,Ae=Ie.RangeControl,Ne=Ie.SelectControl,Te=Ie.TextControl,De=Ie.ToggleControl,Ge=GLSR_Block.nameprefix+"/reviews",Fe={assigned_to:{default:"",type:"string"},assigned_posts:{default:"",type:"string"},assigned_terms:{default:"",type:"string"},assigned_users:{default:"",type:"string"},category:{default:"",type:"string"},className:{default:"",type:"string"},display:{default:5,type:"number"},hide:{default:"",type:"string"},id:{default:"",type:"string"},pagination:{default:"",type:"string"},post_id:{default:"",type:"string"},rating:{default:0,type:"number"},schema:{default:!1,type:"boolean"},terms:{default:"",type:"string"},type:{default:"local",type:"string"},user:{default:"",type:"string"}};wp.hooks.addFilter("blocks.getBlockAttributes",Ge,(function(e,t,n,r){return r&&r.count&&(e.display=r.count),e}));Ce(Ge,{attributes:Fe,category:GLSR_Block.nameprefix,description:Oe("Display your most recent reviews.","admin-text","site-reviews"),edit:function(t){t.attributes.post_id=jQuery("#post_ID").val();var n=t.attributes,r=n.assigned_to,s=n.assigned_posts,a=n.assigned_terms,o=n.assigned_users,l=n.category,c=n.display,u=n.hide,d=n.id,m=n.pagination,f=n.rating,g=n.schema,y=n.terms,b=n.type,_=n.user,x=(t.className,t.setAttributes),k={assigned_to:(0,e.createElement)(B,{key:"assigned_posts",label:Oe("Limit Reviews to an Assigned Page","admin-text","site-reviews"),onChange:function(e){return x({assigned_to:e,assigned_posts:"custom"===e?s:""})},options:p,value:r},(0,e.createElement)(Te,{key:"custom_assigned_posts",className:"glsr-base-conditional-control",help:Oe("Separate values with a comma.","admin-text","site-reviews"),onChange:function(e){return x({assigned_posts:e})},placeholder:Oe("Enter the Post IDs","admin-text","site-reviews"),type:"text",value:s})),category:(0,e.createElement)(B,{key:"assigned_terms",label:Oe("Limit Reviews to an Assigned Category","admin-text","site-reviews"),onChange:function(e){return x({category:e,assigned_terms:"custom"===e?a:""})},options:v,value:l},(0,e.createElement)(Te,{key:"custom_assigned_terms",className:"glsr-base-conditional-control",help:Oe("Separate values with a comma.","admin-text","site-reviews"),onChange:function(e){return x({assigned_terms:e})},placeholder:Oe("Enter the Category IDs or slugs","admin-text","site-reviews"),type:"text",value:a})),user:(0,e.createElement)(B,{key:"assigned_users",label:Oe("Limit Reviews to an Assigned User","admin-text","site-reviews"),onChange:function(e){return x({user:e,assigned_users:"custom"===e?o:""})},options:h,value:_},(0,e.createElement)(Te,{key:"custom_assigned_users",className:"glsr-base-conditional-control",help:Oe("Separate values with a comma.","admin-text","site-reviews"),onChange:function(e){return x({assigned_users:e})},placeholder:Oe("Enter the User IDs or usernames","admin-text","site-reviews"),type:"text",value:o})),terms:(0,e.createElement)(Ne,{key:"terms",label:Oe("Limit Reviews to terms","admin-text","site-reviews"),onChange:function(e){return x({terms:e})},options:_e,value:y}),pagination:(0,e.createElement)(Ne,{key:"pagination",label:Oe("Enable Pagination","admin-text","site-reviews"),onChange:function(e){return x({pagination:e})},options:[{label:"- "+Oe("Select","admin-text","site-reviews")+" -",value:""},{label:Oe("Yes (AJAX load more)","admin-text","site-reviews"),value:"loadmore"},{label:Oe("Yes (AJAX pagination)","admin-text","site-reviews"),value:"ajax"},{label:Oe("Yes (page reload)","admin-text","site-reviews"),value:"true"}],value:m}),type:(0,e.createElement)(Ne,{key:"type",label:Oe("Limit the Type of Reviews","admin-text","site-reviews"),onChange:function(e){return x({type:e})},options:Ee,value:b}),display:(0,e.createElement)(Ae,{key:"display",label:Oe("Reviews Per Page","admin-text","site-reviews"),min:1,max:50,onChange:function(e){return x({display:e})},value:c}),rating:(0,e.createElement)(Ae,{key:"rating",label:Oe("Minimum Rating","admin-text","site-reviews"),min:0,max:GLSR_Block.maxrating,onChange:function(e){return x({rating:e})},value:f}),schema:(0,e.createElement)(De,{key:"schema",checked:g,help:Oe("The schema should only be enabled once per page.","admin-text","site-reviews"),label:Oe("Enable the schema?","admin-text","site-reviews"),onChange:function(e){return x({schema:e})}}),hide:i(GLSR_Block.hideoptions.site_reviews,u,x)},E={panel_settings:(0,e.createElement)(Le,{title:Oe("Settings","admin-text","site-reviews")},Object.values(wp.hooks.applyFilters(GLSR_Block.nameprefix+".reviews.InspectorControls",k,t)))},O={id:(0,e.createElement)(Te,{label:Oe("Custom ID","admin-text","site-reviews"),onChange:function(e){return x({id:e})},value:d})};return[(0,e.createElement)(Be,null,Object.values(wp.hooks.applyFilters(GLSR_Block.nameprefix+".reviews.InspectorPanels",E,t))),(0,e.createElement)(Re,null,Object.values(wp.hooks.applyFilters(GLSR_Block.nameprefix+".reviews.InspectorAdvancedControls",O,t))),(0,e.createElement)(oe,{block:Ge,attributes:t.attributes,onRender:w})]},example:{attributes:{display:2,pagination:"ajax",rating:0}},icon:{src:l},keywords:["reviews"],save:function(){return null},title:Oe("Latest Reviews","admin-text","site-reviews"),transforms:{from:[{type:"block",blocks:["core/legacy-widget"],isMatch:function(e){var t=e.idBase,n=e.instance;return"glsr_site-reviews"===t&&!(null==n||!n.raw)},transform:function(e){var t=e.instance;return je(Ge,k(t,Fe))}}]}});var Me=wp.i18n._x,Ue=wp.blocks,$e=Ue.createBlock,ze=Ue.registerBlockType,qe=wp.blockEditor,Qe=qe.InspectorAdvancedControls,Ve=qe.InspectorControls,Ye=wp.components,Je=Ye.PanelBody,Xe=Ye.RangeControl,He=Ye.SelectControl,Ke=Ye.TextControl,We=Ye.ToggleControl,Ze=GLSR_Block.nameprefix+"/summary",et={assigned_to:{default:"",type:"string"},assigned_posts:{default:"",type:"string"},assigned_terms:{default:"",type:"string"},assigned_users:{default:"",type:"string"},category:{default:"",type:"string"},className:{default:"",type:"string"},hide:{default:"",type:"string"},post_id:{default:"",type:"string"},rating:{default:0,type:"number"},schema:{default:!1,type:"boolean"},terms:{default:"",type:"string"},type:{default:"local",type:"string"},user:{default:"",type:"string"}},tt=(ze(Ze,{attributes:et,category:GLSR_Block.nameprefix,description:Me("Display a summary of your reviews.","admin-text","site-reviews"),edit:function(t){t.attributes.post_id=jQuery("#post_ID").val();var n=t.attributes,r=n.assigned_to,s=n.assigned_posts,a=n.assigned_terms,o=n.assigned_users,l=n.category,c=(n.display,n.hide),u=n.id,d=(n.pagination,n.rating),m=n.schema,f=n.terms,g=n.type,y=n.user,b=(t.className,t.setAttributes),_={assigned_to:(0,e.createElement)(B,{key:"assigned_posts",label:Me("Limit Reviews to an Assigned Page","admin-text","site-reviews"),onChange:function(e){return b({assigned_to:e,assigned_posts:"custom"===e?s:""})},options:p,value:r},(0,e.createElement)(Ke,{key:"custom_assigned_posts",className:"glsr-base-conditional-control",help:Me("Separate values with a comma.","admin-text","site-reviews"),onChange:function(e){return b({assigned_posts:e})},placeholder:Me("Enter the Post IDs","admin-text","site-reviews"),type:"text",value:s})),category:(0,e.createElement)(B,{key:"assigned_terms",label:Me("Limit Reviews to an Assigned Category","admin-text","site-reviews"),onChange:function(e){return b({category:e,assigned_terms:"custom"===e?a:""})},options:v,value:l},(0,e.createElement)(Ke,{key:"custom_assigned_terms",className:"glsr-base-conditional-control",help:Me("Separate values with a comma.","admin-text","site-reviews"),onChange:function(e){return b({assigned_terms:e})},placeholder:Me("Enter the Category IDs or slugs","admin-text","site-reviews"),type:"text",value:a})),user:(0,e.createElement)(B,{key:"assigned_users",label:Me("Limit Reviews to an Assigned User","admin-text","site-reviews"),onChange:function(e){return b({user:e,assigned_users:"custom"===e?o:""})},options:h,value:y},(0,e.createElement)(Ke,{key:"custom_assigned_users",className:"glsr-base-conditional-control",help:Me("Separate values with a comma.","admin-text","site-reviews"),onChange:function(e){return b({assigned_users:e})},placeholder:Me("Enter the User IDs or usernames","admin-text","site-reviews"),type:"text",value:o})),terms:(0,e.createElement)(He,{key:"terms",label:Me("Limit Reviews to terms","admin-text","site-reviews"),onChange:function(e){return b({terms:e})},options:_e,value:f}),type:(0,e.createElement)(He,{key:"type",label:Me("Limit the Type of Reviews","admin-text","site-reviews"),onChange:function(e){return b({type:e})},options:Ee,value:g}),rating:(0,e.createElement)(Xe,{key:"rating",label:Me("Minimum Rating","admin-text","site-reviews"),min:0,max:GLSR_Block.maxrating,onChange:function(e){return b({rating:e})},value:d}),schema:(0,e.createElement)(We,{key:"schema",checked:m,help:Me("The schema should only be enabled once per page.","admin-text","site-reviews"),label:Me("Enable the schema?","admin-text","site-reviews"),onChange:function(e){return b({schema:e})}}),hide:i(GLSR_Block.hideoptions.site_reviews_summary,c,b)},x={panel_settings:(0,e.createElement)(Je,{title:Me("Settings","admin-text","site-reviews")},Object.values(wp.hooks.applyFilters(GLSR_Block.nameprefix+".summary.InspectorControls",_,t)))},k={id:(0,e.createElement)(Ke,{label:Me("Custom ID","admin-text","site-reviews"),onChange:function(e){return b({id:e})},value:u})};return[(0,e.createElement)(Ve,null,Object.values(wp.hooks.applyFilters(GLSR_Block.nameprefix+".summary.InspectorPanels",x,t))),(0,e.createElement)(Qe,null,Object.values(wp.hooks.applyFilters(GLSR_Block.nameprefix+".summary.InspectorAdvancedControls",k,t))),(0,e.createElement)(oe,{block:Ze,attributes:t.attributes,onRender:w})]},example:{},icon:{src:c},keywords:["reviews","summary"],save:function(){return null},title:Me("Rating Summary","admin-text","site-reviews"),transforms:{from:[{type:"block",blocks:["core/legacy-widget"],isMatch:function(e){var t=e.idBase,n=e.instance;return"glsr_site-reviews-summary"===t&&!(null==n||!n.raw)},transform:function(e){var t=e.instance;return $e(Ze,k(t,et))}}]}}),{}),nt=function(e,t){var n=tt[e]||[],r=[];t&&[].forEach.call(n,(function(e){t!==e.fn&&t!==e.fn.once&&r.push(e)})),r.length?tt[e]=r:delete tt[e]},rt=function(e,t,n){(tt[e]||(tt[e]=[])).push({fn:t,context:n})},st={events:tt,off:nt,on:rt,once:function(e,t,n){var r=arguments,s=function s(){nt(e,s),t.apply(n,r)};s.once=t,rt(e,s,n)},trigger:function(e){var t=[].slice.call(arguments,1),n=(tt[e]||[]).slice();[].forEach.call(n,(function(e){return e.fn.apply(e.context,t)}))}};window.hasOwnProperty("GLSR")||(window.GLSR={Event:st})}()}();