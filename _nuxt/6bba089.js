(window.webpackJsonp=window.webpackJsonp||[]).push([[12,7,13,14],{370:function(t,e,n){t.exports=n.p+"img/thumbs-up.827ac8b.svg"},371:function(t,e,n){"use strict";var o=n(10),r=n(4),l=n(7),c=n(117),d=n(19),f=n(12),h=n(230),m=n(44),v=n(88),x=n(231),_=n(3),w=n(87).f,y=n(38).f,k=n(18).f,E=n(377),M=n(378).trim,N="Number",C=r.Number,P=C.prototype,j=r.TypeError,I=l("".slice),$=l("".charCodeAt),F=function(t){var e=x(t,"number");return"bigint"==typeof e?e:S(e)},S=function(t){var e,n,o,r,l,c,d,code,f=x(t,"number");if(v(f))throw j("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=M(f),43===(e=$(f,0))||45===e){if(88===(n=$(f,2))||120===n)return NaN}else if(48===e){switch($(f,1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+f}for(c=(l=I(f,2)).length,d=0;d<c;d++)if((code=$(l,d))<48||code>r)return NaN;return parseInt(l,o)}return+f};if(c(N,!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var A,L=function(t){var e=arguments.length<1?0:C(F(t)),n=this;return m(P,n)&&_((function(){E(n)}))?h(Object(e),n,L):e},T=o?w(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),O=0;T.length>O;O++)f(C,A=T[O])&&!f(L,A)&&k(L,A,y(C,A));L.prototype=P,P.constructor=L,d(r,N,L,{constructor:!0})}},372:function(t,e,n){var content=n(381);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(116).default)("6737d458",content,!0,{sourceMap:!1})},373:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},374:function(t,e,n){"use strict";n.r(e);n(371),n(68);var o=n(0),r=n(399);function l(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];n&&(t=Math.ceil(t),e=Math.floor(e));var o=Math.random()*(e-t)+t;return n?Math.floor(o):o}var c=o.default.extend({name:"FloodAnimation",props:{amount:{type:Number,default:20},duration:{type:Number,default:1e3},maxDelay:{type:Number,default:1e3}},data:function(){return{$_timer:0}},computed:{flowHeight:function(){return.7*this.$refs.el.clientHeight}},methods:{generateSize:function(){return l(30,60)},generateY:function(){var element=this.$refs.el;return element?l(0,.2*-element.clientHeight,!1):0},generateX:function(){var element=this.$refs.el;return element?l(-30,element.clientWidth):0},beforeEnter:function(t){var e=this.generateSize();t.style.opacity="1",t.style.width=e+"px",t.style.height=e+"px",t.style.left=this.generateX()+"px",t.style.bottom=this.generateY()-e+"px"},enter:function(t,e){var n=this;Object(r.a)({targets:t,opacity:0,translateY:-this.flowHeight,scale:1.2,duration:this.duration,easing:"linear",delay:l(0,this.maxDelay),complete:function(){e()}}),window&&(window.clearTimeout(this.$_timer),this.$_timer=window.setTimeout((function(){n.$emit("complete")}),this.duration+this.maxDelay))}}}),d=(n(380),n(54)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{ref:"el",staticClass:"wrapper"},[e("transition-group",{attrs:{name:"staggered-fade",tag:"div",css:!1},on:{"before-enter":t.beforeEnter,enter:t.enter}},t._l(t.amount,(function(i){return e("div",{key:i,staticClass:"element",attrs:{"data-i":i}},[t._t("default")],2)})),0)],1)}),[],!1,null,"20c897e8",null);e.default=component.exports},375:function(t,e,n){t.exports=n.p+"img/biceps.8cc1521.svg"},376:function(t,e,n){t.exports=n.p+"img/fire.92687bb.svg"},377:function(t,e,n){var o=n(7);t.exports=o(1..valueOf)},378:function(t,e,n){var o=n(7),r=n(27),l=n(15),c=n(379),d=o("".replace),f="["+c+"]",h=RegExp("^"+f+f+"*"),m=RegExp(f+f+"*$"),v=function(t){return function(e){var n=l(r(e));return 1&t&&(n=d(n,h,"")),2&t&&(n=d(n,m,"")),n}};t.exports={start:v(1),end:v(2),trim:v(3)}},379:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},380:function(t,e,n){"use strict";n(372)},381:function(t,e,n){var o=n(115)(!1);o.push([t.i,".wrapper[data-v-20c897e8]{top:0;bottom:0;right:0;pointer-events:none;overflow:hidden}.element[data-v-20c897e8],.wrapper[data-v-20c897e8]{position:absolute;left:0}.element[data-v-20c897e8]{display:inline-block;bottom:-100%}.element[data-v-20c897e8] *{max-height:100%;max-width:100%}",""]),t.exports=o},382:function(t,e,n){var content=n(394);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(116).default)("0a03c4f2",content,!0,{sourceMap:!1})},383:function(t,e,n){t.exports=n.p+"img/heart-eyes.6e66e91.svg"},384:function(t,e,n){var content=n(396);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(116).default)("44ce232e",content,!0,{sourceMap:!1})},387:function(t,e,n){t.exports=n.p+"img/hundred.e08fdf2.svg"},388:function(t,e,n){var content=n(404);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(116).default)("55b06497",content,!0,{sourceMap:!1})},391:function(t,e,n){"use strict";n.r(e);var o=n(151),r=n(0),l=n(374),c=r.default.extend({name:"StickerEmoji",components:{Portal:o.Portal,FloodAnimation:l.default},data:function(){return{amount:0}},methods:{handleClick:function(t){this.amount=30,this.$emit("click",t)},handleFloodComplete:function(){this.amount=0}}}),d=(n(393),n(54)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("button",{staticClass:"sticker",attrs:{type:"button"},on:{click:function(e){return t.handleClick(e)},mousedown:function(t){t.stopPropagation()},touchstart:function(t){t.stopPropagation()}}},[e("label"),t._v(" "),e("div",{staticClass:"content"},[t._t("default")],2),t._v(" "),e("Portal",{attrs:{to:"emotions"}},[e("FloodAnimation",{attrs:{amount:t.amount},on:{complete:t.handleFloodComplete}},[t._t("default")],2)],1)],1)}),[],!1,null,"86c9b23c",null);e.default=component.exports;installComponents(component,{FloodAnimation:n(374).default})},392:function(t,e,n){"use strict";n.r(e);var o=n(31),r=(n(69),n(0).default.extend({name:"StickerMeter",props:{animate:{type:Boolean,default:!1},emoji:{validator:function(t){return["fire","heart-eyes","hundred","thumbs-up","biceps"].includes(t)},default:"fire"}},data:function(){return{value:12,captured:0,amount:0}},watch:{value:function(t){this.$emit("change",t),this.animate&&100===t&&this.handle100Perc()}},methods:{handle100Perc:function(){this.amount=30},handleFloodComplete:function(){this.amount=0},handleHold:function(t){if(!t.target)return!1;var e=0;t.clientX&&(e=t.clientX),t.touches&&(e=t.touches[0].clientX);var n=t.target;this.captured=e-n.offsetLeft-n.clientWidth,window.addEventListener("mousemove",this.handleMove),window.addEventListener("mouseup",this.handleRelease),window.addEventListener("touchmove",this.handleMove),window.addEventListener("touchend",this.handleRelease)},handleMove:function(t){if(!this.$refs.line)return!1;var e=this.$refs.line,n=this.$refs.handle,o=0;t.clientX&&(o=t.pageX),t.touches&&(o=t.touches[0].pageX);var r=e.clientWidth,l=n.clientWidth,c=o-this.captured;this.value=Math.max(Math.min(r,c),l/2)/r*100},handleRelease:function(){window.removeEventListener("mousemove",this.handleMove),window.removeEventListener("mouseup",this.handleRelease),window.removeEventListener("touchmove",this.handleMove),window.removeEventListener("touchend",this.handleRelease)}}})),l=(n(395),n(54)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"sticker",on:{touchstart:function(t){t.stopPropagation()}}},[e("div",{staticClass:"meter-wrapper"},[t.$slots.default?e("div",{staticClass:"caption"},[t._t("default")],2):t._e(),t._v(" "),e("div",{ref:"line",staticClass:"meter-path"},[e("div",{staticClass:"meter-line",style:{width:t.value+"%"}},[e("div",{ref:"handle",staticClass:"meter-handle",class:Object(o.a)({},t.emoji,!!t.emoji),on:{mousedown:function(e){return e.stopPropagation(),t.handleHold.apply(null,arguments)},touchstart:function(e){return e.stopPropagation(),t.handleHold.apply(null,arguments)}}})])])]),t._v(" "),t.animate?e("Portal",{attrs:{to:"emotions"}},[e("FloodAnimation",{attrs:{amount:t.amount},on:{complete:t.handleFloodComplete}},["fire"===t.emoji?e("img",{attrs:{src:n(376)}}):t._e(),t._v(" "),"heart-eyes"===t.emoji?e("img",{attrs:{src:n(383)}}):t._e(),t._v(" "),"hundred"===t.emoji?e("img",{attrs:{src:n(387)}}):t._e(),t._v(" "),"thumbs-up"===t.emoji?e("img",{attrs:{src:n(370)}}):t._e(),t._v(" "),"biceps"===t.emoji?e("img",{attrs:{src:n(375)}}):t._e()])],1):t._e()],1)}),[],!1,null,"b2b030a6",null);e.default=component.exports;installComponents(component,{FloodAnimation:n(374).default})},393:function(t,e,n){"use strict";n(382)},394:function(t,e,n){var o=n(115)(!1);o.push([t.i,".sticker[data-v-86c9b23c]{padding:0;background-color:transparent}.sticker[data-v-86c9b23c],.sticker>.content[data-v-86c9b23c]{position:relative;box-sizing:border-box;border-radius:50%}.sticker>.content[data-v-86c9b23c]{background-color:var(--color-white);padding:16px;z-index:0;width:100%;height:100%;z-index:1}.sticker>label[data-v-86c9b23c]{background-color:var(--color-gray);width:90%;height:90%;position:absolute;border-radius:50% 50% 4px 50%;top:7%;left:7%;z-index:0}.sticker>.content[data-v-86c9b23c] *{max-height:100%;max-width:100%}",""]),t.exports=o},395:function(t,e,n){"use strict";n(384)},396:function(t,e,n){var o=n(115),r=n(373),l=n(376),c=n(383),d=n(397),f=n(370),h=n(375),m=o(!1),v=r(l),x=r(c),_=r(d),w=r(f),y=r(h);m.push([t.i,".sticker[data-v-b2b030a6]{padding:24px;min-width:180px}.caption[data-v-b2b030a6]{color:#000;font-size:16px;text-align:center;margin-bottom:16px}.meter-wrapper[data-v-b2b030a6]{position:relative}.meter-line[data-v-b2b030a6],.meter-path[data-v-b2b030a6]{border-radius:20px;height:8px}.meter-path[data-v-b2b030a6]{position:relative;background-color:var(--color-gray)}.meter-line[data-v-b2b030a6]{background-color:var(--color-pink);position:relative}.meter-handle[data-v-b2b030a6]{position:absolute;background-size:100% auto;background-repeat:no-repeat;height:30px;width:30px;cursor:pointer;right:-6px;top:-16px}.meter-handle.fire[data-v-b2b030a6]{background-image:url("+v+")}.meter-handle.heart-eyes[data-v-b2b030a6]{top:-12px;background-image:url("+x+")}.meter-handle.hundred[data-v-b2b030a6]{top:-12px;background-image:url("+_+")}.meter-handle.thumbs-up[data-v-b2b030a6]{background-image:url("+w+")}.meter-handle.biceps[data-v-b2b030a6]{background-image:url("+y+")}",""]),t.exports=m},397:function(t,e,n){t.exports=n.p+"img/hundred2.3dc3ded.svg"},403:function(t,e,n){"use strict";n(388)},404:function(t,e,n){var o=n(115)(!1);o.push([t.i,".wrapper[data-v-bf5ffaa8]{position:relative;display:flex;align-content:center;overflow:hidden}.wrapper .button[data-v-bf5ffaa8]{position:absolute;top:80px;right:60px}#welcomevideo[data-v-bf5ffaa8]{position:absolute;top:-8px;left:-8px;bottom:0;min-width:calc(100% + 16px);min-height:calc(100% + 16px);filter:blur(8px)}.meter[data-v-bf5ffaa8]{position:absolute;left:40px;bottom:3vh;transform:rotate(-3deg)}",""]),t.exports=o},421:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(391),l=n(392),c=n(150),d=o.default.extend({name:"WelcomeScreen",components:{StickerEmoji:r.default,StickerMeter:l.default},methods:{goToNextPage:function(t){100===t&&c.a.$emit("page",1)},goToLastPage:function(){c.a.$emit("page",6)}}}),f=(n(403),n(54)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"wrapper"},[e("StickerEmoji",{staticClass:"button",on:{click:t.goToLastPage}},[e("img",{attrs:{src:n(370)}})]),t._v(" "),e("StickerMeter",{staticClass:"meter",attrs:{animate:""},on:{change:function(e){return t.goToNextPage(e)}}},[t._v("\n    Тяни огонёк чтобы"),e("br"),t._v("\n    перейти на следующую страницу\n  ")])],1)}),[],!1,null,"bf5ffaa8",null);e.default=component.exports}}]);