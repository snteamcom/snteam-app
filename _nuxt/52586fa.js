(window.webpackJsonp=window.webpackJsonp||[]).push([[13,7],{371:function(t,e,n){"use strict";var r=n(10),o=n(4),c=n(7),l=n(117),f=n(19),d=n(12),h=n(230),m=n(44),v=n(88),x=n(231),_=n(3),y=n(87).f,w=n(38).f,N=n(18).f,k=n(377),E=n(378).trim,I="Number",A=o.Number,F=A.prototype,M=o.TypeError,C=c("".slice),S=c("".charCodeAt),P=function(t){var e=x(t,"number");return"bigint"==typeof e?e:T(e)},T=function(t){var e,n,r,o,c,l,f,code,d=x(t,"number");if(v(d))throw M("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=E(d),43===(e=S(d,0))||45===e){if(88===(n=S(d,2))||120===n)return NaN}else if(48===e){switch(S(d,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+d}for(l=(c=C(d,2)).length,f=0;f<l;f++)if((code=S(c,f))<48||code>o)return NaN;return parseInt(c,r)}return+d};if(l(I,!A(" 0o1")||!A("0b1")||A("+0x1"))){for(var $,O=function(t){var e=arguments.length<1?0:A(P(t)),n=this;return m(F,n)&&_((function(){k(n)}))?h(Object(e),n,O):e},z=r?y(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),j=0;z.length>j;j++)d(A,$=z[j])&&!d(O,$)&&N(O,$,w(A,$));O.prototype=F,F.constructor=O,f(o,I,O,{constructor:!0})}},372:function(t,e,n){var content=n(381);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(116).default)("6737d458",content,!0,{sourceMap:!1})},374:function(t,e,n){"use strict";n.r(e);n(371),n(68);var r=n(0),o=n(399);function c(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];n&&(t=Math.ceil(t),e=Math.floor(e));var r=Math.random()*(e-t)+t;return n?Math.floor(r):r}var l=r.default.extend({name:"FloodAnimation",props:{amount:{type:Number,default:20},duration:{type:Number,default:1e3},maxDelay:{type:Number,default:1e3}},data:function(){return{$_timer:0}},computed:{flowHeight:function(){return.7*this.$refs.el.clientHeight}},methods:{generateSize:function(){return c(30,60)},generateY:function(){var element=this.$refs.el;return element?c(0,.2*-element.clientHeight,!1):0},generateX:function(){var element=this.$refs.el;return element?c(-30,element.clientWidth):0},beforeEnter:function(t){var e=this.generateSize();t.style.opacity="1",t.style.width=e+"px",t.style.height=e+"px",t.style.left=this.generateX()+"px",t.style.bottom=this.generateY()-e+"px"},enter:function(t,e){var n=this;Object(o.a)({targets:t,opacity:0,translateY:-this.flowHeight,scale:1.2,duration:this.duration,easing:"linear",delay:c(0,this.maxDelay),complete:function(){e()}}),window&&(window.clearTimeout(this.$_timer),this.$_timer=window.setTimeout((function(){n.$emit("complete")}),this.duration+this.maxDelay))}}}),f=(n(380),n(54)),component=Object(f.a)(l,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{ref:"el",staticClass:"wrapper"},[e("transition-group",{attrs:{name:"staggered-fade",tag:"div",css:!1},on:{"before-enter":t.beforeEnter,enter:t.enter}},t._l(t.amount,(function(i){return e("div",{key:i,staticClass:"element",attrs:{"data-i":i}},[t._t("default")],2)})),0)],1)}),[],!1,null,"20c897e8",null);e.default=component.exports},377:function(t,e,n){var r=n(7);t.exports=r(1..valueOf)},378:function(t,e,n){var r=n(7),o=n(27),c=n(15),l=n(379),f=r("".replace),d="["+l+"]",h=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),v=function(t){return function(e){var n=c(o(e));return 1&t&&(n=f(n,h,"")),2&t&&(n=f(n,m,"")),n}};t.exports={start:v(1),end:v(2),trim:v(3)}},379:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},380:function(t,e,n){"use strict";n(372)},381:function(t,e,n){var r=n(115)(!1);r.push([t.i,".wrapper[data-v-20c897e8]{top:0;bottom:0;right:0;pointer-events:none;overflow:hidden}.element[data-v-20c897e8],.wrapper[data-v-20c897e8]{position:absolute;left:0}.element[data-v-20c897e8]{display:inline-block;bottom:-100%}.element[data-v-20c897e8] *{max-height:100%;max-width:100%}",""]),t.exports=r},382:function(t,e,n){var content=n(394);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(116).default)("0a03c4f2",content,!0,{sourceMap:!1})},391:function(t,e,n){"use strict";n.r(e);var r=n(151),o=n(0),c=n(374),l=o.default.extend({name:"StickerEmoji",components:{Portal:r.Portal,FloodAnimation:c.default},data:function(){return{amount:0}},methods:{handleClick:function(t){this.amount=30,this.$emit("click",t)},handleFloodComplete:function(){this.amount=0}}}),f=(n(393),n(54)),component=Object(f.a)(l,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("button",{staticClass:"sticker",attrs:{type:"button"},on:{click:function(e){return t.handleClick(e)},mousedown:function(t){t.stopPropagation()},touchstart:function(t){t.stopPropagation()}}},[e("label"),t._v(" "),e("div",{staticClass:"content"},[t._t("default")],2),t._v(" "),e("Portal",{attrs:{to:"emotions"}},[e("FloodAnimation",{attrs:{amount:t.amount},on:{complete:t.handleFloodComplete}},[t._t("default")],2)],1)],1)}),[],!1,null,"86c9b23c",null);e.default=component.exports;installComponents(component,{FloodAnimation:n(374).default})},393:function(t,e,n){"use strict";n(382)},394:function(t,e,n){var r=n(115)(!1);r.push([t.i,".sticker[data-v-86c9b23c]{padding:0;background-color:transparent}.sticker[data-v-86c9b23c],.sticker>.content[data-v-86c9b23c]{position:relative;box-sizing:border-box;border-radius:50%}.sticker>.content[data-v-86c9b23c]{background-color:var(--color-white);padding:16px;z-index:0;width:100%;height:100%;z-index:1}.sticker>label[data-v-86c9b23c]{background-color:var(--color-gray);width:90%;height:90%;position:absolute;border-radius:50% 50% 4px 50%;top:7%;left:7%;z-index:0}.sticker>.content[data-v-86c9b23c] *{max-height:100%;max-width:100%}",""]),t.exports=r}}]);