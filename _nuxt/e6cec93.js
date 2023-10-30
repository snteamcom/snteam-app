(window.webpackJsonp=window.webpackJsonp||[]).push([[18,6],{371:function(t,e,n){var content=n(375);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(116).default)("6737d458",content,!0,{sourceMap:!1})},372:function(t,e,n){"use strict";n.r(e);n(373),n(68);var o=n(0),r=n(385);function l(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];n&&(t=Math.ceil(t),e=Math.floor(e));var o=Math.random()*(e-t)+t;return n?Math.floor(o):o}var c=o.default.extend({name:"FloodAnimation",props:{amount:{type:Number,default:20},duration:{type:Number,default:1e3},maxDelay:{type:Number,default:1e3}},data:function(){return{$_timer:0}},computed:{flowHeight:function(){return.7*this.$refs.el.clientHeight}},methods:{generateSize:function(){return l(30,60)},generateY:function(){var element=this.$refs.el;return element?l(0,.2*-element.clientHeight,!1):0},generateX:function(){var element=this.$refs.el;return element?l(-30,element.clientWidth):0},beforeEnter:function(t){var e=this.generateSize();t.style.opacity="1",t.style.width=e+"px",t.style.height=e+"px",t.style.left=this.generateX()+"px",t.style.bottom=this.generateY()-e+"px"},enter:function(t,e){var n=this;Object(r.a)({targets:t,opacity:0,translateY:-this.flowHeight,scale:1.2,duration:this.duration,easing:"linear",delay:l(0,this.maxDelay),complete:function(){e()}}),window&&(window.clearTimeout(this.$_timer),this.$_timer=window.setTimeout((function(){n.$emit("complete")}),this.duration+this.maxDelay))}}}),d=(n(374),n(54)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{ref:"el",staticClass:"wrapper"},[e("transition-group",{attrs:{name:"staggered-fade",tag:"div",css:!1},on:{"before-enter":t.beforeEnter,enter:t.enter}},t._l(t.amount,(function(i){return e("div",{key:i,staticClass:"element",attrs:{"data-i":i}},[t._t("default")],2)})),0)],1)}),[],!1,null,"20c897e8",null);e.default=component.exports},374:function(t,e,n){"use strict";n(371)},375:function(t,e,n){var o=n(115)(!1);o.push([t.i,".wrapper[data-v-20c897e8]{top:0;bottom:0;right:0;pointer-events:none;overflow:hidden}.element[data-v-20c897e8],.wrapper[data-v-20c897e8]{position:absolute;left:0}.element[data-v-20c897e8]{display:inline-block;bottom:-100%}.element[data-v-20c897e8] *{max-height:100%;max-width:100%}",""]),t.exports=o},446:function(t,e,n){var content=n(491);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(116).default)("2766273f",content,!0,{sourceMap:!1})},490:function(t,e,n){"use strict";n(446)},491:function(t,e,n){var o=n(115)(!1);o.push([t.i,".sticker[data-v-0229b725]{padding:0;background-color:transparent}.sticker[data-v-0229b725],.sticker>.content[data-v-0229b725]{position:relative;box-sizing:border-box;border-radius:50%}.sticker>.content[data-v-0229b725]{background-color:var(--color-white);padding:25%;z-index:0;width:100%;height:100%;z-index:1}.sticker>label[data-v-0229b725]{background-color:var(--color-gray);width:90%;height:90%;position:absolute;border-radius:50% 50% 4px 50%;top:7%;left:7%;z-index:0}.sticker>.content[data-v-0229b725] *{max-height:100%;max-width:100%}",""]),t.exports=o},500:function(t,e,n){"use strict";n.r(e);var o=n(150),r=n(0),l=n(372),c=r.default.extend({name:"StickerEmoji",components:{Portal:o.Portal,FloodAnimation:l.default},data:function(){return{amount:0}},methods:{handleClick:function(t){this.amount=30,this.$emit("click",t)},handleFloodComplete:function(){this.amount=0}}}),d=(n(490),n(54)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("button",{staticClass:"sticker button",attrs:{type:"button"},on:{click:function(e){return t.handleClick(e)},mousedown:function(t){t.stopPropagation()},touchstart:function(t){t.stopPropagation()}}},[e("label"),t._v(" "),e("div",{staticClass:"content"},[t._t("default")],2),t._v(" "),e("Portal",{attrs:{to:"emotions"}},[e("FloodAnimation",{attrs:{amount:t.amount},on:{complete:t.handleFloodComplete}},[t._t("default")],2)],1)],1)}),[],!1,null,"0229b725",null);e.default=component.exports;installComponents(component,{FloodAnimation:n(372).default})}}]);