(window.webpackJsonp=window.webpackJsonp||[]).push([[3,7,17],{380:function(t,e,n){var content=n(391);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(116).default)("6ad22a6a",content,!0,{sourceMap:!1})},381:function(t,e,n){var content=n(394);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(116).default)("5c9cb44a",content,!0,{sourceMap:!1})},388:function(t,e,n){"use strict";n.r(e);n(373),n(68);var r=n(0).default.extend({name:"ReelsFeed",props:{itemsToShow:{type:Number,default:1.3},caption:{type:String,default:""}},methods:{handleWheel:function(t){var e=this.$refs.slider;if(0===t.deltaY)return t.stopPropagation(),void t.preventDefault();var n=t.deltaY>0?1:-1,r=e.scrollLeft+n*e.clientWidth;(-1===n&&e.scrollLeft>0||1===n&&r<e.scrollWidth)&&(t.stopPropagation(),t.preventDefault(),window.setTimeout((function(){e.scrollTo({left:r,top:0,behavior:"smooth"})}),10))}}}),o=(n(390),n(54)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"header"},[e("div",{staticClass:"header-content"},[e("div",{staticClass:"caption"},[t._v("\n        "+t._s(t.caption)+"\n      ")])])]),t._v(" "),e("div",{ref:"slider",staticClass:"slider",on:{mousedown:function(t){t.stopPropagation()},mousemove:function(t){t.stopPropagation()},wheel:function(e){return t.handleWheel(e)}}},[t._t("default")],2)])}),[],!1,null,"6439ac69",null);e.default=component.exports},390:function(t,e,n){"use strict";n(380)},391:function(t,e,n){var r=n(115)(!1);r.push([t.i,".wrapper[data-v-6439ac69]{height:100%;display:flex;flex-direction:column}.header[data-v-6439ac69]{font-size:16px;font-weight:700;height:60px;flex-shrink:0;flex-grow:0}.header-content[data-v-6439ac69]{display:flex;padding:20px;font-size:16px}.header .watch-all[data-v-6439ac69]{margin-left:auto}.slider-wrapper[data-v-6439ac69]{flex-grow:1;flex-shrink:1;height:calc(100% - 76px)}.reels[data-v-6439ac69]{height:100%}.reels-item[data-v-6439ac69]{padding-left:20px;box-sizing:border-box;height:100%}.reels-item>div[data-v-6439ac69]{height:calc(100% - 20px);width:calc(100% - 18px);background-color:var(--color-bg);overflow:hidden;border-radius:16px;margin:2px 8px 16px}@media (orientation:landscape) and (min-height:720px){.reels-item>div[data-v-6439ac69]{box-shadow:0 4px 10px rgba(0,0,0,.1)}}.reels[data-v-6439ac69] ul.hooper-track{flex-direction:row;height:100%}.slider[data-v-6439ac69]{overflow:scroll;display:flex;grid-gap:60px;gap:60px;flex-grow:1;flex-shrink:1;height:calc(100% - 76px);scroll-snap-type:x mandatory;-ms-overflow-style:none;scrollbar-width:none}.slider[data-v-6439ac69]::-webkit-scrollbar{display:none}.slider>*[data-v-6439ac69]{flex:0 0 65%;scroll-snap-align:center;overflow:hidden;border-radius:16px;max-height:calc(100% - 16px);height:auto}@media (orientation:landscape) and (min-height:720px){.slider[data-v-6439ac69]>:first-child{margin-left:64px}}@media (orientation:landscape) and (min-height:720px){.slider>*[data-v-6439ac69]{flex:0 0 calc(75% - 150px);scroll-snap-align:start}}",""]),t.exports=r},392:function(t,e,n){var content=n(405);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(116).default)("f3bffc12",content,!0,{sourceMap:!1})},393:function(t,e,n){"use strict";n(381)},394:function(t,e,n){var r=n(115)(!1);r.push([t.i,".primary[data-v-1d9d3af4],.secondary[data-v-1d9d3af4]{transition:none}.primary[data-v-1d9d3af4]{fill-opacity:1;fill:var(--color-blue);animation:blink-1d9d3af4 .7s steps(2,jump-none) infinite}.secondary[data-v-1d9d3af4]{fill-opacity:1;fill:var(--color-white);animation:blink-1d9d3af4 .7s steps(2,jump-none) infinite reverse}.button[data-v-1d9d3af4]{border:5px solid var(--primary-color);color:var(--primary-color);background-color:var(--secondary-color)}@keyframes blink-1d9d3af4{0%{fill:var(--color-black)}to{fill:var(--color-white)}}",""]),t.exports=r},395:function(t,e,n){var content=n(407);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(116).default)("2dd9c462",content,!0,{sourceMap:!1})},396:function(t,e,n){var content=n(410);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(116).default)("36ecfd16",content,!0,{sourceMap:!1})},398:function(t,e,n){var content=n(412);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(116).default)("22930ce1",content,!0,{sourceMap:!1})},400:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r="#contacts"},401:function(t,e,n){t.exports=n.p+"img/fire.92687bb.svg"},403:function(t,e,n){"use strict";n.r(e);n(393);var r=n(54),component=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("svg",{attrs:{width:"340",height:"440",viewBox:"0 0 89.958342 116.41666",version:"1.1","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg","xmlns:svg":"http://www.w3.org/2000/svg"}},[e("defs"),t._v(" "),e("path",{staticClass:"primary",attrs:{d:"m 26.45826,5.29167 v 34.395835 34.395833 h -2.645822 -2.645832 v -7.9375 -7.9375 H 18.520784 15.874962 V 55.562505 52.916671 H 10.583308 5.291654 v 5.291667 5.291667 h 2.6458321 2.6458219 v 2.645833 2.645833 h 2.645822 2.645832 v 5.291667 5.291667 h 2.645822 2.645822 v 5.291666 5.291667 h 2.645832 2.645822 v 5.291667 5.291665 h 2.645822 2.645832 v 5.29167 5.29166 h 21.166599 21.166604 v -5.29166 -5.29167 h 2.645825 2.645826 v -7.937499 -7.9375 h 2.645825 2.645825 V 66.145838 47.625005 h -2.645825 -2.645825 v -2.645834 -2.645833 h -2.645826 -2.645825 v 7.9375 7.9375 H 71.437292 68.791465 V 47.625005 37.041671 h -5.29165 -5.291651 v 7.9375 7.9375 H 55.562339 52.916513 V 42.333338 31.750005 h -5.29165 -5.291651 V 42.333338 52.916671 H 39.687387 37.041561 V 29.104171 5.29167 h -5.291647 z"}}),t._v(" "),e("path",{staticClass:"secondary",attrs:{d:"m 26.45826,108.47916 v -7.9375 H 23.812428 21.166606 V 95.249992 89.958325 H 18.520784 15.874952 V 84.666659 79.374993 H 13.22913 10.583308 V 74.083327 68.791661 H 7.9374761 5.291654 V 66.145828 63.499994 H 2.645832 0 v -7.937499 -7.937499 h 7.9374761 7.9374759 v 2.645833 2.645833 h 2.645832 2.645822 V 29.104164 5.29167 h 2.645822 2.645832 V 2.64584 0 h 5.291644 5.291656 v 2.64584 2.64583 h 2.645825 2.645825 v 10.583328 10.58333 h 5.291651 5.291651 v 2.645836 2.645833 h 7.937476 7.937477 v 2.645833 2.645833 h 5.291651 5.291651 v 2.645834 2.645833 h 2.645826 2.645825 v 2.645833 2.645833 h 2.645825 2.645826 v 18.520832 18.520831 h -2.645826 -2.645825 v 7.9375 7.937501 h -2.645825 -2.645826 v 7.9375 7.9375 H 52.916512 26.45826 Z m 47.624856,-2.64584 v -5.29166 h 2.645826 2.645825 v -7.937501 -7.9375 h 2.645826 2.645825 V 66.145828 47.624996 H 82.020593 79.374767 V 44.979163 42.33333 h -2.645825 -2.645826 v 7.937499 7.937499 H 71.437291 68.791465 V 47.624996 37.041663 h -5.291651 -5.291651 v 7.9375 7.937499 H 55.562337 52.916512 V 42.33333 31.749997 H 47.624861 42.33321 V 42.33333 52.916662 H 39.687385 37.04156 V 29.104164 5.29167 H 31.749904 26.45826 v 34.395827 34.39583 h -2.645832 -2.645822 v -7.937499 -7.9375 H 18.520784 15.874952 V 55.562495 52.916662 H 10.583308 5.291654 v 5.291666 5.291666 h 2.6458221 2.6458319 v 2.645834 2.645833 h 2.645822 2.645822 v 5.291666 5.291666 h 2.645832 2.645822 v 5.291666 5.291666 h 2.645822 2.645832 v 5.291667 5.291668 h 2.645822 2.645822 v 5.29166 5.29167 h 21.166608 21.166604 z"}})])}),[],!1,null,"1d9d3af4",null);e.default=component.exports},404:function(t,e,n){"use strict";n(392)},405:function(t,e,n){var r=n(115)(!1);r.push([t.i,'.content[data-v-75cfc71a]{width:100%;height:100%;margin:auto;position:relative}.user-case[data-v-75cfc71a]{display:flex;width:auto}.user-case .image[data-v-75cfc71a]{max-height:480px;max-width:45%;flex-grow:0;flex-shrink:0;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}.user-case .image-bg[data-v-75cfc71a]{content:"";top:0;left:0;position:absolute;background-image:attr(data-bg);height:100%;width:100%;background-size:cover;filter:blur(10px) grayscale(20%)}.user-case .bar[data-v-75cfc71a]{flex-shrink:0;flex-grow:0}.image img[data-v-75cfc71a]{position:relative;max-height:100%;max-width:100%}.desc[data-v-75cfc71a]{flex-grow:1;flex-shrink:1;font-size:14px;display:flex;flex-direction:column}.desc-header[data-v-75cfc71a]{flex-grow:0;flex-shrink:0;border-bottom:1px solid var(--color-border);padding:10px 16px}.desc .title[data-v-75cfc71a]{font-weight:700;font-size:15px}.desc .subtitle[data-v-75cfc71a]{font-size:12px}@media (min-width:768px){.desc-header[data-v-75cfc71a]{padding:20px 36px}.desc .title[data-v-75cfc71a]{font-size:22px}.desc .subtitle[data-v-75cfc71a]{font-size:16px}}.desc-content[data-v-75cfc71a]{flex-grow:1;flex-shrink:1;overflow:auto;flex-basis:0px;padding:8px 16px;line-height:1.5}@media (orientation:portrait){.user-case[data-v-75cfc71a]{flex-direction:column}.user-case .image[data-v-75cfc71a]{max-width:100%}}@media (orientation:landscape) and (min-height:720px){.clients-results[data-v-75cfc71a]{max-height:560px}.clients-results[data-v-75cfc71a] .reels-item>div{max-height:468px}.clients-results[data-v-75cfc71a] .hooper-slide{width:20%}}@media (min-width:768px){.clients-results[data-v-75cfc71a] .caption{font-family:var(--font-rubik);font-size:30px;text-align:center;padding:24px 0}.clients-results[data-v-75cfc71a] .header{height:auto}.clients-results[data-v-75cfc71a] .header-content{justify-content:center}.desc-content[data-v-75cfc71a]{font-size:16px;padding:20px 36px}}',""]),t.exports=r},406:function(t,e,n){"use strict";n(395)},407:function(t,e,n){var r=n(115),o=n(230),d=n(408),l=r(!1),A=o(d);l.push([t.i,".wrapper[data-v-2d5a1065]{position:relative;display:flex;align-content:center;overflow:hidden;background-image:url("+A+");background-size:cover;background-repeat:no-repeat;background-position:42% 40%}.wrapper .button[data-v-2d5a1065]{position:absolute;top:80px;right:60px}.content[data-v-2d5a1065]{width:100%;height:100%;max-width:1360px;margin:auto;position:relative;text-align:center}.slogan[data-v-2d5a1065]{font-size:30px;max-width:calc(95% - 48px);text-transform:uppercase;font-family:var(--font-rubik);font-weight:800;color:var(--color-black);text-shadow:4px 4px 0 var(--color-gray);position:absolute;left:24px;top:16vh}.slogan span[data-v-2d5a1065]{background-color:#fff;padding:4px 8px;border-radius:5px;display:table;margin-top:-6px}@media (min-width:768px){.slogan span[data-v-2d5a1065]{display:inline-block}.slogan span[data-v-2d5a1065]:nth-child(2){margin-left:-5px}.slogan span:nth-child(2)~span[data-v-2d5a1065]{display:table}}@media (min-width:768px){.slogan[data-v-2d5a1065]{font-size:38px}}@media (min-width:1360px){.slogan[data-v-2d5a1065]{font-size:60px}}.button-signup[data-v-2d5a1065]{text-decoration:none;display:inline-block;background-image:linear-gradient(45deg,var(--color-purple),var(--color-pink));box-shadow:5px 5px 0 0 var(--color-white),0 0 0 3px inset var(--color-white);border-radius:8px;font-family:var(--font-rubik);font-weight:700;color:var(--color-white);font-size:20px;padding:18px 24px;position:relative;text-transform:uppercase;position:absolute;left:calc(50% - 140px);bottom:12vh;transform-origin:center;transform:rotate(-10deg)}.gif-pointer[data-v-2d5a1065]{position:absolute;width:80px;height:80px;top:calc(100% - 7px);right:0;pointer-events:none;animation:twitch-2d5a1065 .7s steps(2,jump-none) infinite}@keyframes twitch-2d5a1065{0%{transform:translateY(-9px)}to{transform:translateY(0)}}.button-signup:focus:hover:not(:active) .gif-pointer[data-v-2d5a1065],.button-signup:focus:not(:active):not(.focus-visible) .gif-pointer[data-v-2d5a1065],.button-signup:focus:not(:active):not(:focus-visible) .gif-pointer[data-v-2d5a1065]{animation:explode-2d5a1065 1s}@keyframes explode-2d5a1065{0%{transform:scale(1) translate(0);opacity:1}to{transform:scale(10) translate(-20%,-20%);opacity:0}}.meter[data-v-2d5a1065]{position:absolute;left:40px;bottom:20vh;transform:rotate(-3deg)}",""]),t.exports=l},408:function(t,e,n){t.exports=n.p+"img/bg.0be994d.jpg"},409:function(t,e,n){"use strict";n(396)},410:function(t,e,n){var r=n(115)(!1);r.push([t.i,".wrapper[data-v-2559d1d6]{position:relative;overflow:auto;display:flex;flex-direction:column;max-height:100%;background-color:var(--color-bg);color:var(--color-primary-text)}.wrapper[data-v-2559d1d6]:nth-child(2n){background-color:var(--color-black);color:var(--color-white)}.content[data-v-2559d1d6]{width:100%;height:100%;max-width:1360px;margin:auto;position:relative;display:flex}@media(max-width:767px){.content[data-v-2559d1d6]{flex-direction:column;justify-content:center}}@media(min-width:768px){.content[data-v-2559d1d6]{padding:40px 0;display:flex}}.text-content[data-v-2559d1d6]{flex-basis:50%}@media(min-width:768px){.text-content[data-v-2559d1d6]{display:flex;flex-direction:column;justify-content:center}}.title[data-v-2559d1d6]{font-family:var(--font-rubik);margin-bottom:0;padding:20px;font-size:24px;font-weight:800;text-transform:uppercase;letter-spacing:.5px;word-spacing:0;display:flex;align-items:center;flex:0 0 auto}.title span[data-v-2559d1d6]{background-clip:text;background-image:linear-gradient(90deg,var(--color-purple),var(--color-pink));-webkit-background-clip:text;-webkit-text-fill-color:transparent}@media(min-width:768px){.title[data-v-2559d1d6]{font-size:44px}}@media(max-width:767px){.title[data-v-2559d1d6]{text-align:center}}.program-desc[data-v-2559d1d6]{justify-items:center;justify-content:space-evenly;flex-direction:column;flex:1 1 auto;overflow:auto;padding:0 20px 20px;font-family:var(--font-rubik)}@media(min-width:768px){.program-desc[data-v-2559d1d6]{flex:initial;flex-shrink:1;font-size:20px;margin-top:20px}}p{margin:1em 0}.program-desc[data-v-2559d1d6] :empty{display:none}.condition-label[data-v-2559d1d6]{display:block;margin-bottom:1em;font-weight:700;text-transform:uppercase;font-family:var(--font-rubik)}.program-pricelist[data-v-2559d1d6]{flex-grow:1;display:flex;flex-direction:column;text-align:center;flex-wrap:wrap;padding:20px;align-items:flex-end;justify-content:center;grid-gap:5vh;gap:5vh}@media(max-width:767px){.program-pricelist[data-v-2559d1d6]{flex-grow:0;flex-wrap:nowrap;align-items:center;flex-direction:row}}.price-caption[data-v-2559d1d6]{flex-basis:100%;text-align:left}.price-value>span[data-v-2559d1d6]{vertical-align:middle}.price[data-v-2559d1d6]{font-size:28px;cursor:default}@media(min-width:768px){.price[data-v-2559d1d6]{font-size:50px}}.price.sticker[data-v-2559d1d6]{transform:rotate(-3deg)}.button-sticker[data-v-2559d1d6]{position:absolute;width:64px;height:64px;bottom:20px;right:20px;transform:rotate(4deg)}[data-theme=vip][data-v-2559d1d6]{background-size:50vh auto;background-color:#daa520;background:linear-gradient(135deg,gold 20%,#daa520);color:#000}[data-theme=vip] .title[data-v-2559d1d6]{color:#000;background-clip:border-box;background-clip:initial;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;background:initial;-webkit-text-fill-color:initial}[data-theme=vip] .program-desc>*[data-v-2559d1d6]{color:#000}",""]),t.exports=r},411:function(t,e,n){"use strict";n(398)},412:function(t,e,n){var r=n(115),o=n(230),d=n(413),l=r(!1),A=o(d);l.push([t.i,".wrapper[data-v-0d58a18e]{background:radial-gradient(farthest-corner at calc(100% - 3vh) 30vh,transparent 8%,var(--color-bg) 70%),linear-gradient(110deg,var(--color-bg) calc(100% - 65vh),transparent calc(100% - 45vh)),url("+A+") calc(100% + 15vh) 50%/auto 100% no-repeat}.content[data-v-0d58a18e]{width:100%;height:100%;max-width:1360px;margin:auto;position:relative;display:flex;flex-direction:column;grid-gap:0;gap:0}@media(max-width:767px){.content[data-v-0d58a18e]{justify-content:center;background-image:linear-gradient(90deg,transparent,var(--color-bg) 90%);-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)}}@media(min-width:768px){.content[data-v-0d58a18e]{grid-gap:36px;gap:36px;padding:40px 0;display:flex}}.title[data-v-0d58a18e]{font-family:var(--font-rubik);font-weight:700;font-size:24px;text-align:left;padding:16px 0}@media(min-width:768px){.title[data-v-0d58a18e]{font-size:30px;padding:24px 0}}.avatar[data-v-0d58a18e]{float:right;margin-left:1em;margin-bottom:1em;border-radius:50%}@media(min-width:768px){.avatar[data-v-0d58a18e]{display:none}}.about[data-v-0d58a18e],.contacts[data-v-0d58a18e]{font-family:var(--font-rubik);padding:0 20px}@media(min-width:768px){.about[data-v-0d58a18e],.contacts[data-v-0d58a18e]{max-width:calc(100% - 50vh);flex:initial;flex-shrink:1;font-size:20px}}.about li[data-v-0d58a18e],.about p[data-v-0d58a18e],.contacts li[data-v-0d58a18e],.contacts p[data-v-0d58a18e]{margin:1em 0}.about a[data-v-0d58a18e],.contacts a[data-v-0d58a18e]{color:var(--color-accent-text)}",""]),t.exports=l},413:function(t,e,n){t.exports=n.p+"img/avatar-big.0b80080.webp"},440:function(t,e,n){var content=n(465);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(116).default)("e378aa90",content,!0,{sourceMap:!1})},451:function(t,e,n){"use strict";n.r(e);n(49);var r=n(0),o=n(400),d=n(452),l=n(453),A=n(454),c=n(455),v=n(151),f=r.default.extend({name:"PageContent",components:{AboutScreen:c.default,ClientsResults:d.default,WelcomeScreen:l.default,ProgramDetails:A.default},data:function(){return{page:0}},watch:{},mounted:function(){var t=this;v.a.$on("page",(function(e){t.page=e})),this.navigateToPage(window.location.hash.slice(1)||""),v.a.$on("navigate-to",this.navigateToPage)},methods:{navigateToPage:function(t){var e;"undefined"!=typeof window&&(t?null===(e=window.document.getElementById(t))||void 0===e||e.scrollIntoView():this.$el.scrollTo({top:0}))},handleHashChange:function(t){t.preventDefault(),window.location.hash!==o.a&&this.navigateToPage(window.location.hash.slice(1))}}}),h=(n(464),n(54)),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("main",{staticClass:"main"},[e("div",{staticClass:"page-slide",attrs:{id:"welcome"}},[e("WelcomeScreen")],1),t._v(" "),e("div",{staticClass:"page-slide",attrs:{id:"results"}},[e("ClientsResults")],1),t._v(" "),t._l(t.$store.state.programs||[],(function(t,n){return e("div",{key:t.sys.id,staticClass:"page-slide program",attrs:{id:"program".concat(n)}},[e("ProgramDetails",{attrs:{program:t}})],1)})),t._v(" "),e("div",{staticClass:"page-slide",attrs:{id:"footer"}},[e("AboutScreen")],1)],2)}),[],!1,null,"45216945",null);e.default=component.exports},452:function(t,e,n){"use strict";n.r(e);var r=n(9),o=(n(46),n(425),n(13),n(30),n(427),n(428),n(429),n(430),n(431),n(432),n(433),n(434),n(435),n(436),n(437),n(438),n(439),n(31),n(56),n(69),n(70),n(47),n(0)),d=n(379),l=n.n(d),A=n(388),c=n(119),v=Object(c.a)(),f=o.default.extend({name:"ClientsResults",components:{RichTextRenderer:l.a,ReelsFeed:A.default},data:function(){return{items:[],assetsUrls:new Map,programTitles:new Map}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.getEntries({content_type:"cases"});case 2:n=e.sent,t.items=n.items,t.assetsUrls=new Map((n.includes.Asset||[]).map((function(t){return[t.sys.id,t.fields.file.url]}))),t.programTitles=new Map((n.includes.Entry||[]).filter((function(t){return"programs"===t.sys.contentType.sys.id})).map((function(t){return[t.sys.id,t.fields.title]})));case 6:case"end":return e.stop()}}),e)})))()},fetchOnServer:!0,methods:{preventSliding:function(t){var element=t.currentTarget;element.scrollHeight-element.scrollTop>element.offsetHeight&&t.stopPropagation()}}}),h=(n(404),n(54)),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"clients-results"},[e("ReelsFeed",{staticClass:"content",attrs:{caption:"Результаты тренировок со мной"}},t._l(t.items,(function(n){return e("div",{key:n.sys.id,staticClass:"user-case"},[e("div",{staticClass:"image"},[e("div",{staticClass:"image-bg",style:{backgroundImage:"url(".concat(t.assetsUrls.get(n.fields.photo.sys.id),")")}}),t._v(" "),e("img",{attrs:{src:t.assetsUrls.get(n.fields.photo.sys.id),alt:""}})]),t._v(" "),e("div",{staticClass:"desc"},[e("div",{staticClass:"desc-header"},[e("div",{staticClass:"title"},[t._v("\n            "+t._s(n.fields.terms)+"\n          ")]),t._v(" "),e("div",{staticClass:"subtitle"},[t._v("\n            "+t._s(t.programTitles.get(n.fields.program.sys.id))+"\n          ")])]),t._v(" "),e("div",{directives:[{name:"content-scroll",rawName:"v-content-scroll"}],staticClass:"desc-content"},[e("div",[e("RichTextRenderer",{attrs:{document:n.fields.desc}})],1)]),t._v(" "),e("div",{staticClass:"bar"})])])})),0)],1)}),[],!1,null,"75cfc71a",null);e.default=component.exports;installComponents(component,{ReelsFeed:n(388).default})},453:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(403),d=n(151),l=r.default.extend({name:"WelcomeScreen",components:{GifPointer:o.default},methods:{goToNextPage:function(t){100===t&&d.a.$emit("page",1)},goToLastPage:function(){d.a.$emit("page",6)}}}),A=(n(406),n(54)),component=Object(A.a)(l,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("a",{staticClass:"button-signup",attrs:{href:"#contacts"}},[t._v("\n      Связаться со мной\n      "),e("GifPointer",{staticClass:"gif-pointer"})],1)])])}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"slogan"},[e("span",[t._v("Научный")]),e("span",[t._v("подход")]),t._v(" "),e("span",[t._v("к вашему")]),t._v(" "),e("span",[t._v("результату")])])}],!1,null,"2d5a1065",null);e.default=component.exports},454:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(379),d=n.n(o),l=r.default.extend({name:"ProgramDetails",components:{RichTextRenderer:d.a},props:{program:{type:Object,required:!0}}}),A=(n(409),n(54)),component=Object(A.a)(l,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"wrapper",attrs:{"data-theme":t.program.fields.theme}},[e("div",{staticClass:"content"},[e("div",{staticClass:"text-content"},[e("h2",{staticClass:"title"},[e("span",[t._v(t._s(t.program.fields.title))])]),t._v(" "),e("div",{directives:[{name:"content-scroll",rawName:"v-content-scroll"}],staticClass:"program-desc"},[e("RichTextRenderer",{attrs:{document:t.program.fields.desc}})],1)]),t._v(" "),e("div",{staticClass:"program-pricelist"},t._l(t.program.fields.price,(function(n,r){var o;return e("div",{key:r,staticClass:"price-value"},[n[1]?t._e():e("span",{staticClass:"condition-label"},[t._v("Стоимость: ")]),t._v(" "),n[1]?e("span",{staticClass:"condition-label"},[t._v("\n          "+t._s(n[1])+"\n        ")]):t._e(),t._v(" "),e("span",{staticClass:"price sticker sticker-link"},[t._v("\n          "+t._s(null===(o=n[0])||void 0===o?void 0:o.toLocaleString())+" ₽\n        ")])])})),0)])])}),[],!1,null,"2559d1d6",null);e.default=component.exports},455:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"about"},[e("div",{staticClass:"title"},[t._v("Обо мне")]),t._v(" "),e("img",{staticClass:"avatar",attrs:{src:n(376),width:"150"}}),t._v(" "),e("p",[t._v("\n        Всем привет! Меня зовут Станислав Никитин и я занимаюсь тем что\n        помогаю людям строить фигуру, о которой они всегда мечтали!\n      ")]),t._v(" "),e("p",[t._v("\n        Накопив огромный опыт и багаж знаний, я могу помочь вам построить\n        действительно впечатляющую, гармоничную и красивую фигуру! И что самое\n        главное в гораздо более короткие сроки, чем это удалось сделать мне\n        самому!\n      ")]),t._v(" "),e("p",[t._v("\n        Образование Институт физической культуры и спорта, бакалавриат и\n        магистратура с отличием. Большое количество доп. обучений и курсов по\n        спортивной эндокринологии, спортивной медицине, диетологии, ЛФК,\n        различным тренировочным методикам.\n      ")]),t._v(" "),e("p",[t._v("\n        Стаж личных тренировок более 15 лет. Стаж работы тренером более 9 лет.\n      ")])])}],o=n(0),d=n(397),l=o.default.extend({name:"AboutScreen",computed:{phone:function(){var t;return null===(t=this.$store.state.settings)||void 0===t?void 0:t.phone},whatsapp:function(){var t;return null===(t=this.$store.state.settings)||void 0===t?void 0:t.whatsapp},vk:function(){var t;return null===(t=this.$store.state.settings)||void 0===t?void 0:t.vk},telegram:function(){var t;return null===(t=this.$store.state.settings)||void 0===t?void 0:t.telegram},greeting:function(){var t;return null===(t=this.$store.state.settings)||void 0===t?void 0:t.m_text},formatPhone:function(){return d.a}}}),A=(n(411),n(54)),component=Object(A.a)(l,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("div",{staticClass:"contacts"},[e("div",{staticClass:"title"},[t._v("Контакты")]),t._v(" "),e("ul",[t.phone?e("li",[t._v("\n          Телефон:  \n          "),e("a",{staticClass:"user-select nowrap",attrs:{href:"tel:".concat(t.phone)}},[t._v("\n            "+t._s(t.formatPhone(t.phone))+"\n          ")])]):t._e(),t._v(" "),t.whatsapp?e("li",[t._v("\n          Whatsapp:  \n          "),e("a",{staticClass:"user-select nowrap",attrs:{href:"https://wa.me/".concat(t.whatsapp)}},[t._v("\n            "+t._s(t.formatPhone(t.whatsapp))+"\n          ")])]):t._e(),t._v(" "),t.telegram?e("li",[t._v("\n          Telegram:  \n          "),e("a",{staticClass:"user-select nowrap",attrs:{href:"https://t.me/".concat(t.telegram)}},[t._v("\n            @"+t._s(t.telegram)+"\n          ")])]):t._e()])])])])}),r,!1,null,"0d58a18e",null);e.default=component.exports},464:function(t,e,n){"use strict";n(440)},465:function(t,e,n){var r=n(115),o=n(230),d=n(401),l=r(!1),A=o(d);l.push([t.i,".main[data-v-45216945]{height:100%;display:flex;flex-direction:column;overflow:auto;scroll-snap-type:y mandatory;scroll-snap-stop:always;-ms-overflow-style:none;scrollbar-width:none}.main[data-v-45216945]::-webkit-scrollbar{display:none}.page-slide[data-v-45216945]{scroll-snap-align:center;flex:0 0 100%;max-height:100%;overflow:hidden}.page-slide>div[data-v-45216945]{height:100%}#programs[data-v-45216945]{background-image:url("+A+');background-color:#191970;background-size:cover;background-position:50%}#results[data-v-45216945]{background-color:var(--color-bg)}@media(orientation:landscape)and (min-width:768px){#results[data-v-45216945]{max-height:calc(80vh - 160px)}}.is-horizontal[data-v-45216945]{top:40px;right:0;display:flex;width:100%;padding:4px}.last-slide[data-v-45216945]{background-image:url("data:image/png;base64,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2spJm+XvXmxc293bb1w7d/Z07UtSqfT3sWl8fqDMCRMAAgITAAICEwACAhMAAgITAAICEwACaiU9KVVOzuycqq6cUO/StZtDb2HUbt9QK4ESJ0wACAhMAAgITAAICEwACAhMAAgITAAINFYfGE6pdrK80jzJxLQJulh37eby584vLl84v9bX7EvpvStVzNgsTpgAEBCYABAQmAAQEJgAEBCYABAQmAAQMK1kQnb39hvXVE5oc/vG1aG3AKPmhAkAAYEJAAGBCQABgQkAAYEJAAGBCQABgQkAAT3MESqNA1reulM1+othlLqxQ9DHhXpOmAAQEJgAEBCYABAQmAAQEJgAEBCYABBQK5kJo7+G4b2djrFVhFg/J0wACAhMAAgITAAICEwACAhMAAgITAAIqJXQ+ri8agQ8mxTUuFaaMMR0OGECQEBgAkBAYAJAQGACQEBgAkBAYAJAwKPQE3Jm59TTprXllYu9vKbKyfpdunazl/vevnG1l/tuirZ6lVoJTpgAEBCYABAQmAAQEJgAEBCYABAQmAAQMK0ENkxf9Y9SXWXulRNYOGECQEZgAkBAYAJAQGACQEBgAkBAYAJAQGACQMBImgkpjfcqMfoLuo1NM95rHpwwASAgMAEgIDABICAwASAgMAEgIDABIGC810yUqiPLW3eqry3Z3duvuk4dhb7UfiZh4YQJABmBCQABgQkAAYEJAAGBCQABgQkAAbUSWmsjpdpJH5NO+nr0X11lOmo/I20VKihxwgSAgMAEgIDABICAwASAgMAEgIDABIDAkaE3wHqc2Tn1tGmtSzVk3ZWTIaijDKOPelGXWsl7y48b115ZvtC4du/+A79nJ8IJEwACAhMAAgITAAICEwACAhMAAgITAAIed56JvmolJXOonDA+tZ+7tsrJm3/0n41rF3//xca1UuWkRB1lfJwwASAgMAEgIDABICAwASAgMAEgIDABIPDc0Btgul49u9O4dnfvftV1sOjw+Tl5fLuX/dz/wSeNa3/yat2v2b94vHW9dj+Hj598qfZamglMelP6xVXqvAlM2pQCs9S1PHmip8A8aA7MP331aNU9v3Z3a1m7H4HZD/8kCwABgQkAAYEJAAGBCQABgQkAAYEJAAHjYyiO/loMMIqrbcxS8VpjwzbG3b37xXpISenv+dzZ0/9RuaXfKC1eunazca00+qukNBasCyPF+uGECQABgQkAAYEJAAGBCQABgQkAAYEJAAHTSujk3NnTVdft7u03rnWphnSppDTeU1WlqPY9f/XsTls9pHZLxXrImNz5p48a17pUTt5bflx13SvLcsWsyaPHT5ZzmJDihAkAAYEJAAGBCQABgQkAAYEJAAGBCQAB/2d6Ok0r6fDof5WDh4eLg0eHa33NPqoqUzKmz0efilWowmekNMmkr2kl6/bXd59bfO3u0cb1qUxBccIEgIDABICAwASAgMAEgIDABICAwASAwCQe9eUX2uohteZQGyhVBijbpM9AbTWkTe10kLl47a1PV1337X/+cFQZ5YQJAAGBCQABgQkAAYEJAAGBCQABgQkAgeeG3gC/nFJ1pPbR9leWL3TZUqMvfPntquu+/sXXV76XNptUjaCfeohqSH/+9s//u+q61976bFVVrq86ihMmAAQEJgAEBCYABAQmAAQEJgAEBCYABAQmAAT0MDvoa5xWySZ1xYboUzIdtV3LTfqOUNZXf7O2p+mECQABgQkAAYEJAAGBCQABgQkAAYEJAIFeRqBMSR/jtIZQGuG1vHKx+r7GYlHr4OHh4uDRYeO66gh9ee2tTzeulSonTpgAEBCYABAQmAAQEJgAEBCYABAQmAAQ+L8AAAD//yIXE6i/uP2xAAAAAElFTkSuQmCC");background-size:cover;background-repeat:no-repeat;background-position:50%}.emotions[data-v-45216945]{background-color:#639}.emotions[data-v-45216945] button{height:64px;width:64px}',""]),t.exports=l}}]);