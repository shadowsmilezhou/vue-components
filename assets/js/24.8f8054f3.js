(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{19:function(t,e,o){},20:function(t,e,o){},320:function(t,e,o){"use strict";o.r(e);var n=o(37),i=o(39),r={name:"GToast",components:{"g-button":n.a,"g-popover":i.a},data:function(){return{nameVisible1:!1,nameVisible:!1,selectedTab:"sports",direction:"vertical",name:'\n<g-popover position="bottom">\n    <template slot="content" slot-scope="{close}">\n      <div>文字</div>\n      <div>popover <a href="http://qq.com">看新网</a> 内容</div>\n      <g-button @click="close">close</g-button>\n    </template>\n    <g-button>click me</g-button>\n  </g-popover>\n\n  <g-popover position="top">\n    <template slot="content" slot-scope="value">\n      <div>\n        <div>简介：smilezhou</div>\n        <div> github：<a href="https://github.com/shadowsmilezhou/vue-components">项目源码</a></div>\n      </div>\n      <g-button @click="value.close">close</g-button>\n    </template>\n    <g-button>click me</g-button>\n  </g-popover>\n\n  <g-popover position="left">\n    <template slot="content">\n      <div>popover内容</div>\n    </template>\n    <g-button>click me</g-button>\n  </g-popover>\n\n  <g-popover position="right">\n    <template slot="content">\n      <div>popover内容</div>\n    </template>\n    <g-button>click me</g-button>\n  </g-popover>\n            ',name1:'\n   <g-popover position="bottom" trigger="hover">\n    <template slot="content">\n      <div>hello，world</div>\n    </template>\n    <g-button>hover me</g-button>\n  </g-popover>\n\n  <g-popover position="top" trigger="hover">\n    <template slot="content">\n      <div>popover内容</div>\n    </template>\n    <g-button>hover me</g-button>\n  </g-popover>\n\n  <g-popover position="left" trigger="hover">\n    <template slot="content">\n      <div>popover内容</div>\n    </template>\n    <g-button>hover me</g-button>\n  </g-popover>\n\n  <g-popover position="right" trigger="hover">\n    <template slot="content">\n      <div>popover <a href="http://qq.com">详情请看这个链接</a> 内容</div>\n    </template>\n    <g-button>hover me</g-button>\n  </g-popover>\n\n            '}},methods:{onClickTop:function(){this.direction="horizontal"},onClickLeft:function(){this.direction="vertical"},displayName:function(){this.nameVisible=!this.nameVisible},displayName1:function(){this.nameVisible1=!this.nameVisible1}}},s=o(1),p=Object(s.a)(r,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{staticStyle:{overflow:"hidden"}},[o("g-popover",{attrs:{position:"bottom"},scopedSlots:t._u([{key:"content",fn:function(e){var n=e.close;return[o("div",[t._v("文字")]),t._v(" "),o("div",[t._v("popover "),o("a",{attrs:{href:"http://qq.com"}},[t._v("看新网")]),t._v(" 内容")]),t._v(" "),o("g-button",{on:{click:n}},[t._v("close")])]}}])},[t._v(" "),o("g-button",[t._v("click me")])],1),t._v(" "),o("g-popover",{attrs:{position:"top"},scopedSlots:t._u([{key:"content",fn:function(e){return[o("div",[o("div",[t._v("简介：smilezhou")]),t._v(" "),o("div",[t._v(" github："),o("a",{attrs:{href:"https://github.com/shadowsmilezhou/vue-components"}},[t._v("项目源码")])])]),t._v(" "),o("g-button",{on:{click:e.close}},[t._v("close")])]}}])},[t._v(" "),o("g-button",[t._v("click me")])],1),t._v(" "),o("g-popover",{attrs:{position:"left"}},[o("template",{slot:"content"},[o("div",[t._v("popover内容")])]),t._v(" "),o("g-button",[t._v("click me")])],2),t._v(" "),o("g-popover",{attrs:{position:"right"}},[o("template",{slot:"content"},[o("div",[t._v("popover内容")])]),t._v(" "),o("g-button",[t._v("click me")])],2)],1),t._v(" "),o("div",{staticStyle:{margin:"20px 0"}},[o("g-popover",{attrs:{position:"top",trigger:"hover"}},[o("template",{slot:"content"},[o("div",[t._v("查看代码")])]),t._v(" "),o("g-button",{staticStyle:{"border-color":"black"},attrs:{icon:"desc","icon-position":"right"},on:{click:t.displayName}},[t._v("气泡卡片")])],2),t._v(" "),t.nameVisible?o("pre",[o("code",[t._v(t._s(t.name))])]):t._e()],1),t._v(" "),o("div",{staticStyle:{overflow:"hidden"}},[o("g-popover",{attrs:{position:"bottom",trigger:"hover"}},[o("template",{slot:"content"},[o("div",[t._v("hello，world")])]),t._v(" "),o("g-button",[t._v("hover me")])],2),t._v(" "),o("g-popover",{attrs:{position:"top",trigger:"hover"}},[o("template",{slot:"content"},[o("div",[t._v("popover内容")])]),t._v(" "),o("g-button",[t._v("hover me")])],2),t._v(" "),o("g-popover",{attrs:{position:"left",trigger:"hover"}},[o("template",{slot:"content"},[o("div",[t._v("popover内容")])]),t._v(" "),o("g-button",[t._v("hover me")])],2),t._v(" "),o("g-popover",{attrs:{position:"right",trigger:"hover"}},[o("template",{slot:"content"},[o("div",[t._v("popover "),o("a",{attrs:{href:"http://qq.com"}},[t._v("详情请看这个链接")]),t._v(" 内容")])]),t._v(" "),o("g-button",[t._v("hover me")])],2)],1),t._v(" "),o("div",{staticStyle:{margin:"20px 0"}},[o("g-popover",{attrs:{position:"top",trigger:"hover"}},[o("template",{slot:"content"},[o("div",[t._v("查看代码")])]),t._v(" "),o("g-button",{staticStyle:{"border-color":"black"},attrs:{icon:"desc","icon-position":"right"},on:{click:t.displayName1}},[t._v("气泡卡片")])],2),t._v(" "),t.nameVisible1?o("pre",[o("code",[t._v(t._s(t.name1))])]):t._e()],1)])},[],!1,null,"dd9fe1a2",null);e.default=p.exports},37:function(t,e,o){"use strict";var n={name:"g-button",components:{"g-icon":o(48).a},props:{icon:{type:String,default:""},iconPosition:{type:String,default:"left",validator:function(t){return"left"===t||"right"===t}},loading:{type:Boolean,default:!1}}},i=(o(42),o(1)),r=Object(i.a)(n,function(){var t,e=this,o=e.$createElement,n=e._self._c||o;return n("button",{staticClass:"g-button",class:(t={},t["icon-"+e.iconPosition]=!0,t),on:{click:function(t){return e.$emit("click")}}},[e.icon&&!e.loading?n("g-icon",{staticClass:"icon",attrs:{name:e.icon}}):e._e(),e._v(" "),e.loading?n("g-icon",{staticClass:"icon waiting",attrs:{name:"waiting"}}):e._e(),e._v(" "),n("div",{staticClass:"contents"},[e._t("default")],2)],1)},[],!1,null,"4685d7e1",null);e.a=r.exports},39:function(t,e,o){"use strict";var n={name:"g-popover",props:{position:{type:String,default:"top",validator:function(t){return["top","bottom","left","right"].indexOf(t)>=0}},trigger:{type:String,default:"click",validator:function(t){return["click","hover"].indexOf(t)>=0}}},data:function(){return{visible:!1}},mounted:function(){this.addPopoverListeners()},methods:{addPopoverListeners:function(){"click"===this.trigger?this.$refs.popover.addEventListener("click",this.onClick):(this.$refs.popover.addEventListener("mouseenter",this.open),this.$refs.popover.addEventListener("mouseout",this.onMouseLeaveDocument))},removePopoverListeners:function(){"click"===this.trigger?this.$refs.popover.removeEventListener("click",this.onClick):(this.$refs.popover.removeEventListener("mouseenter",this.open),this.$refs.popover.removeEventListener("mouseout",this.close))},open:function(){var t=this;this.visible=!0,this.$nextTick(function(){t.positionContent(),"click"===t.trigger&&document.addEventListener("click",t.onClickDocument),"hover"===t.trigger&&document.addEventListener("mouseout",t.onMouseLeaveDocument)})},close:function(){this.visible=!1,"click"===this.trigger?document.removeEventListener("click",this.onClickDocument):document.removeEventListener("mouseout",this.onMouseLeaveDocument)},onClickDocument:function(t){this.$refs.popover&&(this.$refs.popover===t.target||this.$refs.popover.contains(t.target))||this.$refs.contentWrapper&&(this.$refs.contentWrapper===t.target||this.$refs.contentWrapper.contains(t.target))||this.close()},onMouseLeaveDocument:function(t){this.$refs.popover&&(this.$refs.popover===t.target||this.$refs.popover.contains(t.target))||this.$refs.contentWrapper&&(this.$refs.contentWrapper===t.target||this.$refs.contentWrapper.contains(t.target))||this.close()},onClick:function(t){this.$refs.triggerWrapper.contains(t.target)&&(!0===this.visible?this.close():this.open())},positionContent:function(){var t=this.$refs,e=t.contentWrapper,o=t.triggerWrapper;document.body.appendChild(e);var n=o.getBoundingClientRect(),i=n.width,r=n.height,s=n.top,p=n.left,c=e.getBoundingClientRect().height,v={top:{top:s+window.scrollY,left:p+window.scrollX},bottom:{top:s+r+window.scrollY,left:p+window.scrollX},left:{top:s+window.scrollY+(r-c)/2,left:p+window.scrollX},right:{top:s+window.scrollY+(r-c)/2,left:p+window.scrollX+i}};e.style.top=v[this.position].top+"px",e.style.left=v[this.position].left+"px"}},beforeDestroy:function(){this.removePopoverListeners()}},i=(o(43),o(1)),r=Object(i.a)(n,function(){var t,e=this.$createElement,o=this._self._c||e;return o("div",{ref:"popover",staticClass:"g-popover"},[this.visible?o("div",{ref:"contentWrapper",staticClass:"content-wrapper",class:(t={},t["position-"+this.position]=!0,t)},[this._t("content",null,{close:this.close})],2):this._e(),this._v(" "),o("span",{ref:"triggerWrapper",staticStyle:{display:"inline-block"}},[this._t("default")],2)])},[],!1,null,"9ea52432",null);e.a=r.exports},42:function(t,e,o){"use strict";var n=o(19);o.n(n).a},43:function(t,e,o){"use strict";var n=o(20);o.n(n).a}}]);