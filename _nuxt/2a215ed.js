(window.webpackJsonp=window.webpackJsonp||[]).push([[11,12],{372:function(e,t,r){"use strict";var n=r(10),o=r(4),l=r(7),f=r(117),d=r(19),c=r(12),h=r(231),x=r(44),v=r(88),w=r(232),m=r(3),N=r(87).f,I=r(38).f,_=r(18).f,y=r(375),E=r(376).trim,k="Number",T=o.Number,S=T.prototype,A=o.TypeError,C=l("".slice),F=l("".charCodeAt),P=function(e){var t=w(e,"number");return"bigint"==typeof t?t:M(t)},M=function(e){var t,r,n,o,l,f,d,code,c=w(e,"number");if(v(c))throw A("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2)if(c=E(c),43===(t=F(c,0))||45===t){if(88===(r=F(c,2))||120===r)return NaN}else if(48===t){switch(F(c,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+c}for(f=(l=C(c,2)).length,d=0;d<f;d++)if((code=F(l,d))<48||code>o)return NaN;return parseInt(l,n)}return+c};if(f(k,!T(" 0o1")||!T("0b1")||T("+0x1"))){for(var L,O=function(e){var t=arguments.length<1?0:T(P(e)),r=this;return x(S,r)&&m((function(){y(r)}))?h(Object(t),r,O):t},R=n?N(T):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),V=0;R.length>V;V++)c(T,L=R[V])&&!c(O,L)&&_(O,L,I(T,L));O.prototype=S,S.constructor=O,d(o,k,O,{constructor:!0})}},375:function(e,t,r){var n=r(7);e.exports=n(1..valueOf)},376:function(e,t,r){var n=r(7),o=r(27),l=r(15),f=r(377),d=n("".replace),c="["+f+"]",h=RegExp("^"+c+c+"*"),x=RegExp(c+c+"*$"),v=function(e){return function(t){var r=l(o(t));return 1&e&&(r=d(r,h,"")),2&e&&(r=d(r,x,"")),r}};e.exports={start:v(1),end:v(2),trim:v(3)}},377:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},383:function(e,t,r){var content=r(399);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(116).default)("8acfe302",content,!0,{sourceMap:!1})},388:function(e,t,r){"use strict";r.r(t);r(372),r(68);var n=r(0).default.extend({name:"ReelsFeed",props:{itemsToShow:{type:Number,default:1.3},caption:{type:String,default:""}},methods:{handleWheel:function(e){var t=this.$refs.slider;if(0!==e.deltaY){var r=e.deltaY>0?1:-1,n=t.scrollLeft+r*t.clientWidth;(-1===r&&t.scrollLeft>0||1===r&&n<t.scrollWidth)&&(e.stopPropagation(),window.setTimeout((function(){t.scrollTo({left:n,top:0,behavior:"smooth"})}),100))}else e.stopPropagation()}}}),o=(r(398),r(54)),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"wrapper"},[t("div",{staticClass:"header"},[t("div",{staticClass:"header-content"},[t("div",{staticClass:"caption"},[e._v("\n        "+e._s(e.caption)+"\n      ")])])]),e._v(" "),t("div",{ref:"slider",staticClass:"slider",on:{mousedown:function(e){e.stopPropagation()},mousemove:function(e){e.stopPropagation()},wheel:function(t){return e.handleWheel(t)}}},[e._t("default")],2)])}),[],!1,null,"6e4aff12",null);t.default=component.exports},398:function(e,t,r){"use strict";r(383)},399:function(e,t,r){var n=r(115)(!1);n.push([e.i,".wrapper[data-v-6e4aff12]{height:100%;display:flex;flex-direction:column}.header[data-v-6e4aff12]{font-size:16px;font-weight:700;height:60px;flex-shrink:0;flex-grow:0}.header-content[data-v-6e4aff12]{display:flex;padding:20px;font-size:16px}.header .watch-all[data-v-6e4aff12]{margin-left:auto}.slider-wrapper[data-v-6e4aff12]{flex-grow:1;flex-shrink:1;height:calc(100% - 76px)}.reels[data-v-6e4aff12]{height:100%}.reels-item[data-v-6e4aff12]{padding-left:20px;box-sizing:border-box;height:100%}.reels-item>div[data-v-6e4aff12]{height:calc(100% - 20px);width:calc(100% - 18px);background-color:var(--color-bg);overflow:hidden;border-radius:16px;margin:2px 8px 16px;@media (orientation:landscape) and (min-height:720px){box-shadow:0 4px 10px rgba(0,0,0,.1)}}.reels[data-v-6e4aff12] ul.hooper-track{flex-direction:row;height:100%}.slider[data-v-6e4aff12]{overflow:scroll;display:flex;grid-gap:60px;gap:60px;flex-grow:1;flex-shrink:1;height:calc(100% - 76px);scroll-snap-type:x mandatory;-ms-overflow-style:none;scrollbar-width:none}.slider[data-v-6e4aff12]::-webkit-scrollbar{display:none}.slider>*[data-v-6e4aff12]{flex:0 0 65%;scroll-snap-align:center;overflow:hidden;border-radius:16px}@media (orientation:landscape) and (min-height:720px){.slider>*[data-v-6e4aff12]{flex:0 0 80%;scroll-snap-align:start}}",""]),e.exports=n}}]);