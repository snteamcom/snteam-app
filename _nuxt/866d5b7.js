(window.webpackJsonp=window.webpackJsonp||[]).push([[10,14],{368:function(e,t,r){"use strict";var n=r(10),o=r(4),c=r(5),l=r(115),f=r(19),d=r(12),h=r(227),v=r(43),x=r(87),m=r(228),w=r(3),O=r(86).f,N=r(38).f,y=r(18).f,I=r(373),_=r(374).trim,E="Number",j=o.Number,S=j.prototype,P=o.TypeError,k=c("".slice),C=c("".charCodeAt),T=function(e){var t=m(e,"number");return"bigint"==typeof t?t:A(t)},A=function(e){var t,r,n,o,c,l,f,code,d=m(e,"number");if(x(d))throw P("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=_(d),43===(t=C(d,0))||45===t){if(88===(r=C(d,2))||120===r)return NaN}else if(48===t){switch(C(d,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+d}for(l=(c=k(d,2)).length,f=0;f<l;f++)if((code=C(c,f))<48||code>o)return NaN;return parseInt(c,n)}return+d};if(l(E,!j(" 0o1")||!j("0b1")||j("+0x1"))){for(var V,F=function(e){var t=arguments.length<1?0:j(T(e)),r=this;return v(S,r)&&w((function(){I(r)}))?h(Object(t),r,F):t},D=n?O(j):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),M=0;D.length>M;M++)d(j,V=D[M])&&!d(F,V)&&y(F,V,N(j,V));F.prototype=S,S.constructor=F,f(o,E,F,{constructor:!0})}},373:function(e,t,r){var n=r(5);e.exports=n(1..valueOf)},374:function(e,t,r){var n=r(5),o=r(27),c=r(15),l=r(375),f=n("".replace),d="["+l+"]",h=RegExp("^"+d+d+"*"),v=RegExp(d+d+"*$"),x=function(e){return function(t){var r=c(o(t));return 1&e&&(r=f(r,h,"")),2&e&&(r=f(r,v,"")),r}};e.exports={start:x(1),end:x(2),trim:x(3)}},375:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},395:function(e,t,r){"use strict";r.r(t);r(46),r(35),r(45),r(13),r(70),r(39),r(71);var n=r(28);r(368);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var l=r(1).default.extend({name:"VueNode",props:{node:{type:[Object,String,Number],default:null}},render:function(){if(this.node.componentOptions&&(this.node.componentOptions.listeners=this.$listeners,this.node.componentOptions.propsData=c(c({},this.node.componentOptions.propsData),this.$attrs)),this.node.componentInstance){var e=c({},this.node.componentInstance._props);for(var t in this.$attrs)t in e&&(e[t]=this.$attrs[t]);this.node.componentInstance._props=e}return this.node}}),f=r(54),component=Object(f.a)(l,undefined,undefined,!1,null,null,null);t.default=component.exports},396:function(e,t,r){var content=r(429);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(114).default)("62565aa6",content,!0,{sourceMap:!1})},428:function(e,t,r){"use strict";r(396)},429:function(e,t,r){var n=r(113)(!1);n.push([e.i,".wrapper[data-v-4529c0c2]{height:100%;display:flex;flex-direction:column}.header[data-v-4529c0c2]{font-size:16px;font-weight:700;height:60px;flex-shrink:0;flex-grow:0}.header-content[data-v-4529c0c2]{display:flex;padding:20px;font-size:16px}.header .watch-all[data-v-4529c0c2]{margin-left:auto}.slider-wrapper[data-v-4529c0c2]{flex-grow:1;flex-shrink:1;height:calc(100% - 76px)}.reels[data-v-4529c0c2]{height:100%}.reels-item[data-v-4529c0c2]{padding-left:20px;box-sizing:border-box;height:100%}.reels-item>div[data-v-4529c0c2]{height:calc(100% - 20px);width:calc(100% - 18px);background-color:var(--color-bg);overflow:hidden;border-radius:16px;margin:2px 8px 16px;box-shadow:0 4px 10px rgba(0,0,0,.1)}.reels[data-v-4529c0c2] ul.hooper-track{flex-direction:row;height:100%}",""]),e.exports=n},439:function(e,t,r){"use strict";r.r(t);r(45),r(13),r(368);var n=r(1),o=r(412),c=r(395),l=n.default.extend({name:"ReelsFeed",components:{Hooper:o.a,Slide:o.c,VueNode:c.default},props:{itemsToShow:{type:Number,default:1.25},caption:{type:String,default:""}}}),f=(r(428),r(54)),component=Object(f.a)(l,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"wrapper"},[t("div",{staticClass:"header"},[t("div",{staticClass:"header-content"},[t("div",{staticClass:"caption"},[e._v("\n        "+e._s(e.caption)+"\n      ")])])]),e._v(" "),t("div",{staticClass:"slider-wrapper",on:{wheel:function(e){e.stopPropagation()},mousedown:function(e){e.stopPropagation()},mousemove:function(e){e.stopPropagation()}}},[t("Hooper",{staticClass:"reels",attrs:{progress:"true",vertical:!1,"items-to-show":e.itemsToShow}},e._l((e.$slots.default||[]).filter((function(slot){return void 0!==slot.tag})),(function(e,i){return t("Slide",{key:i,staticClass:"reels-item"},[t("div",[t("VueNode",{attrs:{node:e}})],1)])})),1)],1)])}),[],!1,null,"4529c0c2",null);t.default=component.exports;installComponents(component,{VueNode:r(395).default})}}]);