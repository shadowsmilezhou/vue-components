(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{108:function(t,e,n){t.exports=n(109)},109:function(t,e,n){n(95),n(110),t.exports=n(72).Array.from},110:function(t,e,n){"use strict";var i=n(88),r=n(85),o=n(131),s=n(111),a=n(112),c=n(130),u=n(113),l=n(132);r(r.S+r.F*!n(114)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,r,f,p=o(t),d="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,g=void 0!==h,m=0,y=l(p);if(g&&(h=i(h,v>2?arguments[2]:void 0,2)),null==y||d==Array&&a(y))for(n=new d(e=c(p.length));e>m;m++)u(n,m,g?h(p[m],m):p[m]);else for(f=y.call(p),n=new d;!(r=f.next()).done;m++)u(n,m,g?s(f,h,[r.value,m],!0):r.value);return n.length=m,n}})},111:function(t,e,n){var i=n(79);t.exports=function(t,e,n,r){try{return r?e(i(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&i(o.call(t)),e}}},112:function(t,e,n){var i=n(83),r=n(75)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||o[r]===t)}},113:function(t,e,n){"use strict";var i=n(78),r=n(87);t.exports=function(t,e,n){e in t?i.f(t,e,r(0,n)):t[e]=n}},114:function(t,e,n){var i=n(75)("iterator"),r=!1;try{var o=[7][i]();o.return=function(){r=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!r)return!1;var n=!1;try{var o=[7],s=o[i]();s.next=function(){return{done:n=!0}},o[i]=function(){return s},t(o)}catch(t){}return n}},115:function(t,e,n){t.exports=n(116)},116:function(t,e,n){n(134),n(95),t.exports=n(117)},117:function(t,e,n){var i=n(133),r=n(75)("iterator"),o=n(83);t.exports=n(72).isIterable=function(t){var e=Object(t);return void 0!==e[r]||"@@iterator"in e||o.hasOwnProperty(i(e))}},119:function(t,e,n){"use strict";var i=n(81)(!0);n(65)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=i(e,n),this._i+=t.length,{value:t,done:!1})})},120:function(t,e,n){"use strict";var i=n(38),r=n(30),o=n(52),s=n(121),a=n(122),c=n(46),u=n(123),l=n(124);r(r.S+r.F*!n(125)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,r,f,p=o(t),d="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,g=void 0!==h,m=0,y=l(p);if(g&&(h=i(h,v>2?arguments[2]:void 0,2)),null==y||d==Array&&a(y))for(n=new d(e=c(p.length));e>m;m++)u(n,m,g?h(p[m],m):p[m]);else for(f=y.call(p),n=new d;!(r=f.next()).done;m++)u(n,m,g?s(f,h,[r.value,m],!0):r.value);return n.length=m,n}})},121:function(t,e,n){var i=n(18);t.exports=function(t,e,n,r){try{return r?e(i(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&i(o.call(t)),e}}},122:function(t,e,n){var i=n(36),r=n(15)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||o[r]===t)}},123:function(t,e,n){"use strict";var i=n(21),r=n(29);t.exports=function(t,e,n){e in t?i.f(t,e,r(0,n)):t[e]=n}},124:function(t,e,n){var i=n(82),r=n(15)("iterator"),o=n(36);t.exports=n(22).getIteratorMethod=function(t){if(null!=t)return t[r]||t["@@iterator"]||o[i(t)]}},125:function(t,e,n){var i=n(15)("iterator"),r=!1;try{var o=[7][i]();o.return=function(){r=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!r)return!1;var n=!1;try{var o=[7],s=o[i]();s.next=function(){return{done:n=!0}},o[i]=function(){return s},t(o)}catch(t){}return n}},127:function(t,e,n){"use strict";var i=n(129),r=n.n(i);var o=n(108),s=n.n(o),a=n(115),c=n.n(a);function u(t){return function(t){if(r()(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(c()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return s()(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(e,"a",function(){return u})},19:function(t,e,n){},196:function(t,e,n){},197:function(t,e,n){},20:function(t,e,n){},291:function(t,e,n){"use strict";var i=n(196);n.n(i).a},292:function(t,e,n){"use strict";var i=n(197);n.n(i).a},314:function(t,e,n){"use strict";n.r(e);n(66),n(119),n(120);var i=n(127),r=(n(53),n(48)),o=n(37);var s={get:function(){},post:function(t,e){return function(t,e,n){var i=new XMLHttpRequest;i.open(t,e),i.onload=function(){n.success&&n.success(i.response)},i.onerror=function(){n.fail&&n.fail(i,i.status)},i.send(n.data)}("post",t,e)},put:function(){},delete:function(){},patch:function(){}},a={name:"gUploader",components:{GIcon:r.a,GButton:o.a},props:{name:{type:String,required:!0},action:{type:String,required:!0},method:{type:String,default:"POST"},parseResponse:{type:Function,required:!0},fileList:{type:Array,default:function(){return[]}},sizeLimit:{type:Number}},data:function(){return{url:"about:blank"}},methods:{onClickUpload:function(){var t=this,e=this.createInput();e.addEventListener("change",function(n){console.log("start"),t.uploadFiles(e.files),e.remove()}),e.click()},onRemoveFile:function(t){var e=Object(i.a)(this.fileList),n=e.indexOf(t);e.splice(n,1),this.$emit("update:fileList",e)},beforeUploadFiles:function(t,e){t=Array.from(t);for(var n=0;n<t.length;n++){var r=t[n],o=r.size;r.type;if(o>this.sizeLimit)return this.$emit("error","文件大于2MB"),!1}var s=t.map(function(t,n){var i=t.type,r=t.size;return{name:e[n],type:i,size:r,status:"uploading"}});return this.$emit("update:fileList",[].concat(Object(i.a)(this.fileList),Object(i.a)(s))),!0},uploadFiles:function(t){for(var e=this,n=[],i=0;i<t.length;i++){var r=t[i],o=r.name,s=(r.size,r.type,this.generateName(o));n[i]=s}if(this.beforeUploadFiles(t,n))for(var a=function(i){var r=t[i],o=n[i],s=new FormData;s.append(e.name,r),e.doUploadFiles(s,function(t){console.log("response"),console.log(t);var n=e.parseResponse(t);e.url=n,e.afterUploadFiles(o,n)},function(t){console.log("error"),e.uploadError(t,o)})},c=0;c<t.length;c++)a(c)},afterUploadFiles:function(t,e){var n=this.fileList.filter(function(e){return e.name===t})[0],r=this.fileList.indexOf(n),o=JSON.parse(JSON.stringify(n));o.url=e,o.status="success";var s=Object(i.a)(this.fileList);s.splice(r,1,o),this.$emit("update:fileList",s),this.$emit("uploaded")},uploadError:function(t,e){var n=this.fileList.filter(function(t){return t.name===e})[0],r=this.fileList.indexOf(n),o=JSON.parse(JSON.stringify(n));o.status="fail";var s=Object(i.a)(this.fileList);s.splice(r,1,o),this.$emit("update:fileList",s);var a="";0===t.status&&(a="网络无法连接"),this.$emit("error",a)},generateName:function(t){for(;this.fileList.filter(function(e){return e.name===t}).length>0;){var e=t.lastIndexOf("."),n=t.substring(0,e),i=t.substring(e);t=n+"(1)"+i}return t},doUploadFiles:function(t,e,n){s[this.method.toLowerCase()](this.action,{success:e,fail:n,data:t})},createInput:function(){this.$refs.temp.innerHTML="";var t=document.createElement("input");return t.accept="image/*",t.type="file",t.multiple=!0,this.$refs.temp.appendChild(t),t}}},c=(n(291),n(1)),u=Object(c.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"g-uploader"},[n("div",{on:{click:t.onClickUpload}},[t._t("default")],2),t._v(" "),n("ol",{staticClass:"g-uploader-fileList"},[n("transition-group",{attrs:{name:"fade"}},t._l(t.fileList,function(e){var i;return n("li",{key:e.name},["uploading"===e.status?[n("g-icon",{staticClass:"g-uploader-spin",attrs:{name:"waiting"}})]:0===e.type.indexOf("image")?[n("img",{staticClass:"g-uploader-image",attrs:{src:e.url,width:"32",height:"32",alt:""}})]:n("temaplte",[n("div",{staticClass:"g-uploader-defaultImage"},[n("g-icon",{staticClass:"g-uploader-spin",attrs:{name:"Over"}})],1)]),t._v(" "),n("span",{staticClass:"g-uploader-name",class:(i={},i[e.status]=e.status,i)},[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"g-uploader-remove",staticStyle:{display:"inline-block","text-align":"center"},on:{click:function(n){return t.onRemoveFile(e)}}},[n("g-icon",{staticClass:"g-uploader-delete",staticStyle:{width:"1em",height:"1em"},attrs:{name:"delete"}})],1)],2)}),0)],1),t._v(" "),n("div",{ref:"temp",staticStyle:{width:"0",height:"0",overflow:"hidden"}})])},[],!1,null,"23dcf7ee",null).exports,l=n(39),f={name:"demo",components:{GUploader:u,GButton:o.a,GPopover:l.a},data:function(){return{fileList:[],nameVisible:!1,name:'\n <g-uploader accept="image/*" method="POST" action="http://127.0.0.1:3000/upload" name="file"\n            :parseResponse="parseResponse" :file-list.sync="fileList" v-on:update:fileList="yyy">\n  <g-button icon="upload">上传</g-button>\n</g-uploader>\n\n            '}},methods:{displayName:function(){this.nameVisible=!this.nameVisible},parseResponse:function(t){var e=JSON.parse(t);return"http://127.0.0.1:3000/preview/".concat(e.id)},yyy:function(t){}}},p=(n(292),Object(c.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{margin:"20px"}},[n("div",[t._v("只能上传 300kb 以内的 png、jpeg 文件")]),t._v(" "),n("g-uploader",{attrs:{accept:"image/*",method:"POST",action:"http://127.0.0.1:3000/upload",name:"file",parseResponse:t.parseResponse,"file-list":t.fileList},on:{"update:fileList":[function(e){t.fileList=e},t.yyy],"update:file-list":function(e){t.fileList=e}}},[n("g-button",{attrs:{icon:"upload"}},[t._v("上传")])],1),t._v(" "),n("div",{staticStyle:{margin:"20px 0"}},[n("g-popover",{attrs:{position:"top",trigger:"hover"}},[n("template",{slot:"content"},[n("div",[t._v("查看代码")])]),t._v(" "),n("g-button",{staticStyle:{"border-color":"black"},attrs:{icon:"desc","icon-position":"right"},on:{click:t.displayName}},[t._v("图片上传")])],2),t._v(" "),t.nameVisible?n("pre",[n("code",[t._v(t._s(t.name))])]):t._e()],1)],1)},[],!1,null,"68d2d070",null));e.default=p.exports},37:function(t,e,n){"use strict";var i={name:"g-button",components:{"g-icon":n(48).a},props:{icon:{type:String,default:""},iconPosition:{type:String,default:"left",validator:function(t){return"left"===t||"right"===t}},loading:{type:Boolean,default:!1}}},r=(n(42),n(1)),o=Object(r.a)(i,function(){var t,e=this,n=e.$createElement,i=e._self._c||n;return i("button",{staticClass:"g-button",class:(t={},t["icon-"+e.iconPosition]=!0,t),on:{click:function(t){return e.$emit("click")}}},[e.icon&&!e.loading?i("g-icon",{staticClass:"icon",attrs:{name:e.icon}}):e._e(),e._v(" "),e.loading?i("g-icon",{staticClass:"icon waiting",attrs:{name:"waiting"}}):e._e(),e._v(" "),i("div",{staticClass:"contents"},[e._t("default")],2)],1)},[],!1,null,"4685d7e1",null);e.a=o.exports},39:function(t,e,n){"use strict";var i={name:"g-popover",props:{position:{type:String,default:"top",validator:function(t){return["top","bottom","left","right"].indexOf(t)>=0}},trigger:{type:String,default:"click",validator:function(t){return["click","hover"].indexOf(t)>=0}}},data:function(){return{visible:!1}},mounted:function(){this.addPopoverListeners()},methods:{addPopoverListeners:function(){"click"===this.trigger?this.$refs.popover.addEventListener("click",this.onClick):(this.$refs.popover.addEventListener("mouseenter",this.open),this.$refs.popover.addEventListener("mouseout",this.onMouseLeaveDocument))},removePopoverListeners:function(){"click"===this.trigger?this.$refs.popover.removeEventListener("click",this.onClick):(this.$refs.popover.removeEventListener("mouseenter",this.open),this.$refs.popover.removeEventListener("mouseout",this.close))},open:function(){var t=this;this.visible=!0,this.$nextTick(function(){t.positionContent(),"click"===t.trigger&&document.addEventListener("click",t.onClickDocument),"hover"===t.trigger&&document.addEventListener("mouseout",t.onMouseLeaveDocument)})},close:function(){this.visible=!1,"click"===this.trigger?document.removeEventListener("click",this.onClickDocument):document.removeEventListener("mouseout",this.onMouseLeaveDocument)},onClickDocument:function(t){this.$refs.popover&&(this.$refs.popover===t.target||this.$refs.popover.contains(t.target))||this.$refs.contentWrapper&&(this.$refs.contentWrapper===t.target||this.$refs.contentWrapper.contains(t.target))||this.close()},onMouseLeaveDocument:function(t){this.$refs.popover&&(this.$refs.popover===t.target||this.$refs.popover.contains(t.target))||this.$refs.contentWrapper&&(this.$refs.contentWrapper===t.target||this.$refs.contentWrapper.contains(t.target))||this.close()},onClick:function(t){this.$refs.triggerWrapper.contains(t.target)&&(!0===this.visible?this.close():this.open())},positionContent:function(){var t=this.$refs,e=t.contentWrapper,n=t.triggerWrapper;document.body.appendChild(e);var i=n.getBoundingClientRect(),r=i.width,o=i.height,s=i.top,a=i.left,c=e.getBoundingClientRect().height,u={top:{top:s+window.scrollY,left:a+window.scrollX},bottom:{top:s+o+window.scrollY,left:a+window.scrollX},left:{top:s+window.scrollY+(o-c)/2,left:a+window.scrollX},right:{top:s+window.scrollY+(o-c)/2,left:a+window.scrollX+r}};e.style.top=u[this.position].top+"px",e.style.left=u[this.position].left+"px"}},beforeDestroy:function(){this.removePopoverListeners()}},r=(n(43),n(1)),o=Object(r.a)(i,function(){var t,e=this.$createElement,n=this._self._c||e;return n("div",{ref:"popover",staticClass:"g-popover"},[this.visible?n("div",{ref:"contentWrapper",staticClass:"content-wrapper",class:(t={},t["position-"+this.position]=!0,t)},[this._t("content",null,{close:this.close})],2):this._e(),this._v(" "),n("span",{ref:"triggerWrapper",staticStyle:{display:"inline-block"}},[this._t("default")],2)])},[],!1,null,"9ea52432",null);e.a=o.exports},42:function(t,e,n){"use strict";var i=n(19);n.n(i).a},43:function(t,e,n){"use strict";var i=n(20);n.n(i).a},53:function(t,e,n){"use strict";var i=n(11),r=n(17),o=n(33),s=n(63),a=n(26),c=n(16),u=n(64).f,l=n(49).f,f=n(21).f,p=n(61).trim,d=i.Number,v=d,h=d.prototype,g="Number"==o(n(47)(h)),m="trim"in String.prototype,y=function(t){var e=a(t,!1);if("string"==typeof e&&e.length>2){var n,i,r,o=(e=m?e.trim():p(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+e}for(var s,c=e.slice(2),u=0,l=c.length;u<l;u++)if((s=c.charCodeAt(u))<48||s>r)return NaN;return parseInt(c,i)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof d&&(g?c(function(){h.valueOf.call(n)}):"Number"!=o(n))?s(new v(y(e)),n,d):y(e)};for(var b,L=n(12)?u(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;L.length>w;w++)r(v,b=L[w])&&!r(d,b)&&f(d,b,l(v,b));d.prototype=h,h.constructor=d,n(23)(i,"Number",d)}},61:function(t,e,n){var i=n(30),r=n(24),o=n(16),s=n(62),a="["+s+"]",c=RegExp("^"+a+a+"*"),u=RegExp(a+a+"*$"),l=function(t,e,n){var r={},a=o(function(){return!!s[t]()||"​"!="​"[t]()}),c=r[t]=a?e(f):s[t];n&&(r[n]=c),i(i.P+i.F*a,"String",r)},f=l.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(u,"")),t};t.exports=l},62:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},66:function(t,e,n){var i=n(21).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||n(12)&&i(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},81:function(t,e,n){var i=n(31),r=n(24);t.exports=function(t){return function(e,n){var o,s,a=String(r(e)),c=i(n),u=a.length;return c<0||c>=u?t?"":void 0:(o=a.charCodeAt(c))<55296||o>56319||c+1===u||(s=a.charCodeAt(c+1))<56320||s>57343?t?a.charAt(c):o:t?a.slice(c,c+2):s-56320+(o-55296<<10)+65536}}},82:function(t,e,n){var i=n(33),r=n(15)("toStringTag"),o="Arguments"==i(function(){return arguments}());t.exports=function(t){var e,n,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),r))?n:o?i(e):"Object"==(s=i(e))&&"function"==typeof e.callee?"Arguments":s}}}]);