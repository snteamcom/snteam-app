(window.webpackJsonp=window.webpackJsonp||[]).push([[15,7,12,21],{371:function(t,e,n){"use strict";n.r(e);n(372),n(68);var r=n(0),o=n(391);function l(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];n&&(t=Math.ceil(t),e=Math.floor(e));var r=Math.random()*(e-t)+t;return n?Math.floor(r):r}var c=r.default.extend({name:"FloodAnimation",props:{amount:{type:Number,default:20},duration:{type:Number,default:1e3},maxDelay:{type:Number,default:1e3}},data:function(){return{$_timer:0}},computed:{flowHeight:function(){return.7*this.$refs.el.clientHeight}},methods:{generateSize:function(){return l(30,60)},generateY:function(){var element=this.$refs.el;return element?l(0,.2*-element.clientHeight,!1):0},generateX:function(){var element=this.$refs.el;return element?l(-30,element.clientWidth):0},beforeEnter:function(t){var e=this.generateSize();t.style.opacity="1",t.style.width=e+"px",t.style.height=e+"px",t.style.left=this.generateX()+"px",t.style.bottom=this.generateY()-e+"px"},enter:function(t,e){var n=this;Object(o.a)({targets:t,opacity:0,translateY:-this.flowHeight,scale:1.2,duration:this.duration,easing:"linear",delay:l(0,this.maxDelay),complete:function(){e()}}),window&&(window.clearTimeout(this.$_timer),this.$_timer=window.setTimeout((function(){n.$emit("complete")}),this.duration+this.maxDelay))}}}),f=(n(377),n(54)),component=Object(f.a)(c,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{ref:"el",staticClass:"wrapper"},[e("transition-group",{attrs:{name:"staggered-fade",tag:"div",css:!1},on:{"before-enter":t.beforeEnter,enter:t.enter}},t._l(t.amount,(function(i){return e("div",{key:i,staticClass:"element",attrs:{"data-i":i}},[t._t("default")],2)})),0)],1)}),[],!1,null,"20c897e8",null);e.default=component.exports},372:function(t,e,n){"use strict";var r=n(10),o=n(4),l=n(7),c=n(117),f=n(19),d=n(12),h=n(230),m=n(45),v=n(88),_=n(232),x=n(3),y=n(87).f,w=n(38).f,k=n(18).f,N=n(374),I=n(375).trim,E="Number",C=o.Number,M=C.prototype,P=o.TypeError,F=l("".slice),S=l("".charCodeAt),A=function(t){var e=_(t,"number");return"bigint"==typeof e?e:T(e)},T=function(t){var e,n,r,o,l,c,f,code,d=_(t,"number");if(v(d))throw P("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=I(d),43===(e=S(d,0))||45===e){if(88===(n=S(d,2))||120===n)return NaN}else if(48===e){switch(S(d,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+d}for(c=(l=F(d,2)).length,f=0;f<c;f++)if((code=S(l,f))<48||code>o)return NaN;return parseInt(l,r)}return+d};if(c(E,!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var $,O=function(t){var e=arguments.length<1?0:C(A(t)),n=this;return m(M,n)&&x((function(){N(n)}))?h(Object(e),n,O):e},z=r?y(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),j=0;z.length>j;j++)d(C,$=z[j])&&!d(O,$)&&k(O,$,w(C,$));O.prototype=M,M.constructor=O,f(o,E,O,{constructor:!0})}},373:function(t,e,n){var content=n(378);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(116).default)("6737d458",content,!0,{sourceMap:!1})},374:function(t,e,n){var r=n(7);t.exports=r(1..valueOf)},375:function(t,e,n){var r=n(7),o=n(27),l=n(15),c=n(376),f=r("".replace),d="["+c+"]",h=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),v=function(t){return function(e){var n=l(o(e));return 1&t&&(n=f(n,h,"")),2&t&&(n=f(n,m,"")),n}};t.exports={start:v(1),end:v(2),trim:v(3)}},376:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},377:function(t,e,n){"use strict";n(373)},378:function(t,e,n){var r=n(115)(!1);r.push([t.i,".wrapper[data-v-20c897e8]{top:0;bottom:0;right:0;pointer-events:none;overflow:hidden}.element[data-v-20c897e8],.wrapper[data-v-20c897e8]{position:absolute;left:0}.element[data-v-20c897e8]{display:inline-block;bottom:-100%}.element[data-v-20c897e8] *{max-height:100%;max-width:100%}",""]),t.exports=r},379:function(t,e,n){var content=n(387);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(116).default)("67aae1a6",content,!0,{sourceMap:!1})},380:function(t,e,n){"use strict";n.r(e);var r=n(150),o=n(0),l=n(371),c=o.default.extend({name:"StickerPoll",components:{Portal:r.Portal,FloodAnimation:l.default},data:function(){return{amount:0}},methods:{handleClick:function(t){this.amount=30,this.$emit("click",t)},handleFloodComplete:function(){this.amount=0}}}),f=(n(386),n(54)),component=Object(f.a)(c,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("button",{staticClass:"sticker button",attrs:{type:"button"},on:{click:function(e){return t.handleClick(e)},mousedown:function(t){t.stopPropagation()},touchstart:function(t){t.stopPropagation()}}},[e("label"),t._v(" "),e("div",{staticClass:"content"},[t._t("default")],2),t._v(" "),e("Portal",{attrs:{to:"emotions"}},[e("FloodAnimation",{attrs:{amount:t.amount},on:{complete:t.handleFloodComplete}},[t._t("default")],2)],1)],1)}),[],!1,null,"2c41322f",null);e.default=component.exports;installComponents(component,{FloodAnimation:n(371).default})},386:function(t,e,n){"use strict";n(379)},387:function(t,e,n){var r=n(115)(!1);r.push([t.i,".sticker[data-v-2c41322f]{padding:0;background-color:transparent}.sticker[data-v-2c41322f],.sticker>.content[data-v-2c41322f]{position:relative;box-sizing:border-box;border-radius:50%}.sticker>.content[data-v-2c41322f]{background-color:var(--color-white);padding:25%;z-index:0;width:100%;height:100%;z-index:1}.sticker>label[data-v-2c41322f]{background-color:var(--color-gray);width:90%;height:90%;position:absolute;border-radius:50% 50% 4px 50%;top:7%;left:7%;z-index:0}.sticker>.content[data-v-2c41322f] *{max-height:100%;max-width:100%}",""]),t.exports=r},396:function(t,e,n){var content=n(419);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(116).default)("325df15a",content,!0,{sourceMap:!1})},418:function(t,e,n){"use strict";n(396)},419:function(t,e,n){var r=n(115)(!1);r.push([t.i,".wrapper[data-v-3bc89f8e]{padding-top:200px}",""]),t.exports=r},436:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(380),l=r.default.extend({name:"FeaturesScreen",components:{StickerPoll:o.default}}),c=(n(418),n(54)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("StickerPoll")],1)])}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"text-content"},[e("h2",{staticClass:"title"},[e("span",[t._v("Преимущества")])]),t._v(" "),e("p",[t._v("Тут список преимуществ")])])}],!1,null,"3bc89f8e",null);e.default=component.exports}}]);