(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{11:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},12:function(t,e,n){t.exports=!n(16)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},13:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},14:function(t,e,n){var o=n(21),r=n(29);t.exports=n(12)?function(t,e,n){return o.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},16:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},17:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},18:function(t,e,n){var o=n(13);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},182:function(t,e,n){},183:function(t,e,n){},19:function(t,e,n){},20:function(t,e,n){},21:function(t,e,n){var o=n(18),r=n(40),i=n(26),c=Object.defineProperty;e.f=n(12)?Object.defineProperty:function(t,e,n){if(o(t),e=i(e,!0),o(n),r)try{return c(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},22:function(t,e){var n=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)},23:function(t,e,n){var o=n(11),r=n(14),i=n(17),c=n(28)("src"),s=n(51),u=(""+s).split("toString");n(22).inspectSource=function(t){return s.call(t)},(t.exports=function(t,e,n,s){var a="function"==typeof n;a&&(i(n,"name")||r(n,"name",e)),t[e]!==n&&(a&&(i(n,c)||r(n,c,t[e]?""+t[e]:u.join(String(e)))),t===o?t[e]=n:s?t[e]?t[e]=n:r(t,e,n):(delete t[e],r(t,e,n)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[c]||s.call(this)})},24:function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},25:function(t,e,n){var o=n(55),r=n(24);t.exports=function(t){return o(r(t))}},26:function(t,e,n){var o=n(13);t.exports=function(t,e){if(!o(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!o(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},27:function(t,e,n){var o=n(22),r=n(11),i=r["__core-js_shared__"]||(r["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:o.version,mode:n(44)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},28:function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36))}},283:function(t,e,n){"use strict";var o=n(182);n.n(o).a},284:function(t,e,n){"use strict";var o=n(183);n.n(o).a},29:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},30:function(t,e,n){var o=n(11),r=n(22),i=n(14),c=n(23),s=n(38),u=function(t,e,n){var a,f,p,l,h=t&u.F,v=t&u.G,d=t&u.S,g=t&u.P,y=t&u.B,m=v?o:d?o[e]||(o[e]={}):(o[e]||{}).prototype,w=v?r:r[e]||(r[e]={}),_=w.prototype||(w.prototype={});for(a in v&&(n=e),n)p=((f=!h&&m&&void 0!==m[a])?m:n)[a],l=y&&f?s(p,o):g&&"function"==typeof p?s(Function.call,p):p,m&&c(m,a,p,t&u.U),w[a]!=p&&i(w,a,l),g&&_[a]!=p&&(_[a]=p)};o.core=r,u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},31:function(t,e){var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)}},318:function(t,e,n){"use strict";n.r(e);n(53);var o={name:"gSticky",props:{distance:{type:Number,default:0}},data:function(){return{sticky:!1,left:void 0,width:void 0,height:void 0,top:void 0}},mounted:function(){this.windowScrollHandler=this._windowScrollHandler.bind(this),window.addEventListener("scroll",this.windowScrollHandler)},beforeDestroy:function(){window.removeEventListener("scroll",this.windowScrollHandler)},created:function(){this.timerId=null},computed:{classes:function(){return{sticky:this.sticky}}},methods:{offsetTop:function(){return{top:this.$refs.wrapper.getBoundingClientRect().top+window.scrollY}},_windowScrollHandler:function(){var t=this.offsetTop().top;if(console.log(t),window.scrollY>t-this.distance){var e=this.$refs.wrapper.getBoundingClientRect(),n=e.height,o=e.left,r=e.width;this.height=n+"px",this.left=o+"px",this.width=r+"px",this.top=this.distance+"px",this.sticky=!0}else this.height=void 0,this.left=void 0,this.width=void 0,this.top=void 0,this.sticky=!1}}},r=(n(283),n(1)),i=Object(r.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"wrapper",staticClass:"g-sticky-wrapper",style:{height:this.height}},[e("div",{staticClass:"g-sticky",class:this.classes,style:{left:this.left,width:this.width,top:this.top}},[this._t("default")],2)])},[],!1,null,"af1fa33e",null).exports,c=n(37),s=n(39),u={name:"demo",components:{GSticky:i,GButton:c.a,GPopover:s.a},methods:{displayName:function(){this.nameVisible=!this.nameVisible}},data:function(){return{nameVisible:!1,name:'\n  <div style="width: 600px">\n    <g-sticky :distance="58">\n      <div style="width: 100%;height: 50px;background-color: #2196F3;"></div>\n    </g-sticky>\n  </div>\n            '}}},a=(n(284),Object(r.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticStyle:{width:"600px"}},[n("g-sticky",{attrs:{distance:58}},[n("div",{staticStyle:{width:"100%",height:"50px","background-color":"#2196F3"}})])],1),t._v(" "),n("div",{staticStyle:{margin:"20px 0"}},[n("g-popover",{attrs:{position:"top",trigger:"hover"}},[n("template",{slot:"content"},[n("div",[t._v("查看代码")])]),t._v(" "),n("g-button",{staticStyle:{"border-color":"black"},attrs:{icon:"desc","icon-position":"right"},on:{click:t.displayName}},[t._v("粘滞组件")])],2),t._v(" "),t.nameVisible?n("pre",[n("code",[t._v(t._s(t.name))])]):t._e()],1)])},[],!1,null,"5d90a2f2",null));e.default=a.exports},32:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},33:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},34:function(t,e,n){var o=n(27)("keys"),r=n(28);t.exports=function(t){return o[t]||(o[t]=r(t))}},35:function(t,e,n){var o=n(13),r=n(11).document,i=o(r)&&o(r.createElement);t.exports=function(t){return i?r.createElement(t):{}}},37:function(t,e,n){"use strict";var o={name:"g-button",components:{"g-icon":n(48).a},props:{icon:{type:String,default:""},iconPosition:{type:String,default:"left",validator:function(t){return"left"===t||"right"===t}},loading:{type:Boolean,default:!1}}},r=(n(42),n(1)),i=Object(r.a)(o,function(){var t,e=this,n=e.$createElement,o=e._self._c||n;return o("button",{staticClass:"g-button",class:(t={},t["icon-"+e.iconPosition]=!0,t),on:{click:function(t){return e.$emit("click")}}},[e.icon&&!e.loading?o("g-icon",{staticClass:"icon",attrs:{name:e.icon}}):e._e(),e._v(" "),e.loading?o("g-icon",{staticClass:"icon waiting",attrs:{name:"waiting"}}):e._e(),e._v(" "),o("div",{staticClass:"contents"},[e._t("default")],2)],1)},[],!1,null,"4685d7e1",null);e.a=i.exports},38:function(t,e,n){var o=n(50);t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,r){return t.call(e,n,o,r)}}return function(){return t.apply(e,arguments)}}},39:function(t,e,n){"use strict";var o={name:"g-popover",props:{position:{type:String,default:"top",validator:function(t){return["top","bottom","left","right"].indexOf(t)>=0}},trigger:{type:String,default:"click",validator:function(t){return["click","hover"].indexOf(t)>=0}}},data:function(){return{visible:!1}},mounted:function(){this.addPopoverListeners()},methods:{addPopoverListeners:function(){"click"===this.trigger?this.$refs.popover.addEventListener("click",this.onClick):(this.$refs.popover.addEventListener("mouseenter",this.open),this.$refs.popover.addEventListener("mouseout",this.onMouseLeaveDocument))},removePopoverListeners:function(){"click"===this.trigger?this.$refs.popover.removeEventListener("click",this.onClick):(this.$refs.popover.removeEventListener("mouseenter",this.open),this.$refs.popover.removeEventListener("mouseout",this.close))},open:function(){var t=this;this.visible=!0,this.$nextTick(function(){t.positionContent(),"click"===t.trigger&&document.addEventListener("click",t.onClickDocument),"hover"===t.trigger&&document.addEventListener("mouseout",t.onMouseLeaveDocument)})},close:function(){this.visible=!1,"click"===this.trigger?document.removeEventListener("click",this.onClickDocument):document.removeEventListener("mouseout",this.onMouseLeaveDocument)},onClickDocument:function(t){this.$refs.popover&&(this.$refs.popover===t.target||this.$refs.popover.contains(t.target))||this.$refs.contentWrapper&&(this.$refs.contentWrapper===t.target||this.$refs.contentWrapper.contains(t.target))||this.close()},onMouseLeaveDocument:function(t){this.$refs.popover&&(this.$refs.popover===t.target||this.$refs.popover.contains(t.target))||this.$refs.contentWrapper&&(this.$refs.contentWrapper===t.target||this.$refs.contentWrapper.contains(t.target))||this.close()},onClick:function(t){this.$refs.triggerWrapper.contains(t.target)&&(!0===this.visible?this.close():this.open())},positionContent:function(){var t=this.$refs,e=t.contentWrapper,n=t.triggerWrapper;document.body.appendChild(e);var o=n.getBoundingClientRect(),r=o.width,i=o.height,c=o.top,s=o.left,u=e.getBoundingClientRect().height,a={top:{top:c+window.scrollY,left:s+window.scrollX},bottom:{top:c+i+window.scrollY,left:s+window.scrollX},left:{top:c+window.scrollY+(i-u)/2,left:s+window.scrollX},right:{top:c+window.scrollY+(i-u)/2,left:s+window.scrollX+r}};e.style.top=a[this.position].top+"px",e.style.left=a[this.position].left+"px"}},beforeDestroy:function(){this.removePopoverListeners()}},r=(n(43),n(1)),i=Object(r.a)(o,function(){var t,e=this.$createElement,n=this._self._c||e;return n("div",{ref:"popover",staticClass:"g-popover"},[this.visible?n("div",{ref:"contentWrapper",staticClass:"content-wrapper",class:(t={},t["position-"+this.position]=!0,t)},[this._t("content",null,{close:this.close})],2):this._e(),this._v(" "),n("span",{ref:"triggerWrapper",staticStyle:{display:"inline-block"}},[this._t("default")],2)])},[],!1,null,"9ea52432",null);e.a=i.exports},40:function(t,e,n){t.exports=!n(12)&&!n(16)(function(){return 7!=Object.defineProperty(n(35)("div"),"a",{get:function(){return 7}}).a})},41:function(t,e,n){var o=n(45),r=n(32);t.exports=Object.keys||function(t){return o(t,r)}},42:function(t,e,n){"use strict";var o=n(19);n.n(o).a},43:function(t,e,n){"use strict";var o=n(20);n.n(o).a},44:function(t,e){t.exports=!1},45:function(t,e,n){var o=n(17),r=n(25),i=n(54)(!1),c=n(34)("IE_PROTO");t.exports=function(t,e){var n,s=r(t),u=0,a=[];for(n in s)n!=c&&o(s,n)&&a.push(n);for(;e.length>u;)o(s,n=e[u++])&&(~i(a,n)||a.push(n));return a}},46:function(t,e,n){var o=n(31),r=Math.min;t.exports=function(t){return t>0?r(o(t),9007199254740991):0}},47:function(t,e,n){var o=n(18),r=n(56),i=n(32),c=n(34)("IE_PROTO"),s=function(){},u=function(){var t,e=n(35)("iframe"),o=i.length;for(e.style.display="none",n(58).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),u=t.F;o--;)delete u.prototype[i[o]];return u()};t.exports=Object.create||function(t,e){var n;return null!==t?(s.prototype=o(t),n=new s,s.prototype=null,n[c]=t):n=u(),void 0===e?n:r(n,e)}},49:function(t,e,n){var o=n(71),r=n(29),i=n(25),c=n(26),s=n(17),u=n(40),a=Object.getOwnPropertyDescriptor;e.f=n(12)?a:function(t,e){if(t=i(t),e=c(e,!0),u)try{return a(t,e)}catch(t){}if(s(t,e))return r(!o.f.call(t,e),t[e])}},50:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},51:function(t,e,n){t.exports=n(27)("native-function-to-string",Function.toString)},53:function(t,e,n){"use strict";var o=n(11),r=n(17),i=n(33),c=n(63),s=n(26),u=n(16),a=n(64).f,f=n(49).f,p=n(21).f,l=n(61).trim,h=o.Number,v=h,d=h.prototype,g="Number"==i(n(47)(d)),y="trim"in String.prototype,m=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){var n,o,r,i=(e=y?e.trim():l(e,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+e}for(var c,u=e.slice(2),a=0,f=u.length;a<f;a++)if((c=u.charCodeAt(a))<48||c>r)return NaN;return parseInt(u,o)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof h&&(g?u(function(){d.valueOf.call(n)}):"Number"!=i(n))?c(new v(m(e)),n,h):m(e)};for(var w,_=n(12)?a(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),b=0;_.length>b;b++)r(v,w=_[b])&&!r(h,w)&&p(h,w,f(v,w));h.prototype=d,d.constructor=h,n(23)(o,"Number",h)}},54:function(t,e,n){var o=n(25),r=n(46),i=n(57);t.exports=function(t){return function(e,n,c){var s,u=o(e),a=r(u.length),f=i(c,a);if(t&&n!=n){for(;a>f;)if((s=u[f++])!=s)return!0}else for(;a>f;f++)if((t||f in u)&&u[f]===n)return t||f||0;return!t&&-1}}},55:function(t,e,n){var o=n(33);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},56:function(t,e,n){var o=n(21),r=n(18),i=n(41);t.exports=n(12)?Object.defineProperties:function(t,e){r(t);for(var n,c=i(e),s=c.length,u=0;s>u;)o.f(t,n=c[u++],e[n]);return t}},57:function(t,e,n){var o=n(31),r=Math.max,i=Math.min;t.exports=function(t,e){return(t=o(t))<0?r(t+e,0):i(t,e)}},58:function(t,e,n){var o=n(11).document;t.exports=o&&o.documentElement},61:function(t,e,n){var o=n(30),r=n(24),i=n(16),c=n(62),s="["+c+"]",u=RegExp("^"+s+s+"*"),a=RegExp(s+s+"*$"),f=function(t,e,n){var r={},s=i(function(){return!!c[t]()||"​"!="​"[t]()}),u=r[t]=s?e(p):c[t];n&&(r[n]=u),o(o.P+o.F*s,"String",r)},p=f.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(a,"")),t};t.exports=f},62:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},63:function(t,e,n){var o=n(13),r=n(70).set;t.exports=function(t,e,n){var i,c=e.constructor;return c!==n&&"function"==typeof c&&(i=c.prototype)!==n.prototype&&o(i)&&r&&r(t,i),t}},64:function(t,e,n){var o=n(45),r=n(32).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return o(t,r)}},70:function(t,e,n){var o=n(13),r=n(18),i=function(t,e){if(r(t),!o(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,o){try{(o=n(38)(Function.call,n(49).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:o(t,n),t}}({},!1):void 0),check:i}},71:function(t,e){e.f={}.propertyIsEnumerable}}]);