(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{366:function(t,e,A){t.exports=A.p+"img/fire.92687bb.svg"},367:function(t,e,A){t.exports=A.p+"img/thumbs-up.827ac8b.svg"},369:function(t,e,A){var content=A(377);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,A(114).default)("6737d458",content,!0,{sourceMap:!1})},370:function(t,e,A){"use strict";A.r(e);A(368),A(68);var o=A(1),n=A(393);function r(t,e){var A=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];A&&(t=Math.ceil(t),e=Math.floor(e));var o=Math.random()*(e-t)+t;return A?Math.floor(o):o}var c=o.default.extend({name:"FloodAnimation",props:{amount:{type:Number,default:20},duration:{type:Number,default:1e3},maxDelay:{type:Number,default:1e3}},data:function(){return{$_timer:0}},computed:{flowHeight:function(){return.7*this.$refs.el.clientHeight}},methods:{generateSize:function(){return r(30,60)},generateY:function(){var element=this.$refs.el;return element?r(0,.2*-element.clientHeight,!1):0},generateX:function(){var element=this.$refs.el;return element?r(-30,element.clientWidth):0},beforeEnter:function(t){var e=this.generateSize();t.style.opacity="1",t.style.width=e+"px",t.style.height=e+"px",t.style.left=this.generateX()+"px",t.style.bottom=this.generateY()-e+"px"},enter:function(t,e){var A=this;Object(n.a)({targets:t,opacity:0,translateY:-this.flowHeight,scale:1.2,duration:this.duration,easing:"linear",delay:r(0,this.maxDelay),complete:function(){e()}}),window&&(window.clearTimeout(this.$_timer),this.$_timer=window.setTimeout((function(){A.$emit("complete")}),this.duration+this.maxDelay))}}}),l=(A(376),A(54)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{ref:"el",staticClass:"wrapper"},[e("transition-group",{attrs:{name:"staggered-fade",tag:"div",css:!1},on:{"before-enter":t.beforeEnter,enter:t.enter}},t._l(t.amount,(function(i){return e("div",{key:i,staticClass:"element",attrs:{"data-i":i}},[t._t("default")],2)})),0)],1)}),[],!1,null,"20c897e8",null);e.default=component.exports},371:function(t,e,A){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},372:function(t,e,A){t.exports=A.p+"img/biceps.8cc1521.svg"},376:function(t,e,A){"use strict";A(369)},377:function(t,e,A){var o=A(113)(!1);o.push([t.i,".wrapper[data-v-20c897e8]{top:0;bottom:0;right:0;pointer-events:none;overflow:hidden}.element[data-v-20c897e8],.wrapper[data-v-20c897e8]{position:absolute;left:0}.element[data-v-20c897e8]{display:inline-block;bottom:-100%}.element[data-v-20c897e8] *{max-height:100%;max-width:100%}",""]),t.exports=o},378:function(t,e,A){var content=A(388);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,A(114).default)("0a03c4f2",content,!0,{sourceMap:!1})},379:function(t,e,A){t.exports=A.p+"img/heart-eyes.6e66e91.svg"},380:function(t,e,A){var content=A(390);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,A(114).default)("45f6790b",content,!0,{sourceMap:!1})},382:function(t,e,A){t.exports=A.p+"img/hundred.e08fdf2.svg"},383:function(t,e,A){var content=A(398);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,A(114).default)("2ad96b7a",content,!0,{sourceMap:!1})},385:function(t,e,A){"use strict";A.r(e);var o=A(147),n=A(1),r=A(370),c=n.default.extend({name:"StickerEmoji",components:{Portal:o.Portal,FloodAnimation:r.default},data:function(){return{amount:0}},methods:{handleClick:function(t){this.amount=30,this.$emit("click",t)},handleFloodComplete:function(){this.amount=0}}}),l=(A(387),A(54)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("button",{staticClass:"sticker",attrs:{type:"button"},on:{click:function(e){return t.handleClick(e)},mousedown:function(t){t.stopPropagation()},touchstart:function(t){t.stopPropagation()}}},[e("label"),t._v(" "),e("div",{staticClass:"content"},[t._t("default")],2),t._v(" "),e("Portal",{attrs:{to:"emotions"}},[e("FloodAnimation",{attrs:{amount:t.amount},on:{complete:t.handleFloodComplete}},[t._t("default")],2)],1)],1)}),[],!1,null,"86c9b23c",null);e.default=component.exports;installComponents(component,{FloodAnimation:A(370).default})},386:function(t,e,A){"use strict";A.r(e);var o=A(28),n=(A(69),A(1).default.extend({name:"StickerMeter",props:{caption:{type:String,default:""},animate:{type:Boolean,default:!1},emoji:{validator:function(t){return["fire","heart-eyes","hundred","thumbs-up","biceps"].includes(t)},default:"fire"}},data:function(){return{value:12,captured:0,amount:0}},watch:{value:function(t){this.$emit("change",t),this.animate&&100===t&&this.handle100Perc()}},methods:{handle100Perc:function(){this.amount=30},handleFloodComplete:function(){this.amount=0},handleHold:function(t){if(!t.target)return!1;var e=0;t.clientX&&(e=t.clientX),t.touches&&(e=t.touches[0].clientX);var A=t.target;this.captured=e-A.offsetLeft-A.clientWidth,window.addEventListener("mousemove",this.handleMove),window.addEventListener("mouseup",this.handleRelease),window.addEventListener("touchmove",this.handleMove),window.addEventListener("touchend",this.handleRelease)},handleMove:function(t){if(!this.$refs.line)return!1;var e=this.$refs.line,A=this.$refs.handle,o=0;t.clientX&&(o=t.pageX),t.touches&&(o=t.touches[0].pageX);var n=e.clientWidth,r=A.clientWidth,c=o-this.captured;this.value=Math.max(Math.min(n,c),r/2)/n*100},handleRelease:function(){window.removeEventListener("mousemove",this.handleMove),window.removeEventListener("mouseup",this.handleRelease),window.removeEventListener("touchmove",this.handleMove),window.removeEventListener("touchend",this.handleRelease)}}})),r=(A(389),A(54)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"sticker",on:{touchstart:function(t){t.stopPropagation()}}},[e("div",{staticClass:"meter-wrapper"},[t.caption?e("div",{staticClass:"caption"},[t._v("\n      "+t._s(t.caption)+"\n    ")]):t._e(),t._v(" "),e("div",{ref:"line",staticClass:"meter-path"},[e("div",{staticClass:"meter-line",style:{width:t.value+"%"}},[e("div",{ref:"handle",staticClass:"meter-handle",class:Object(o.a)({},t.emoji,!!t.emoji),on:{mousedown:function(e){return e.stopPropagation(),t.handleHold.apply(null,arguments)},touchstart:function(e){return e.stopPropagation(),t.handleHold.apply(null,arguments)}}})])])]),t._v(" "),t.animate?e("Portal",{attrs:{to:"emotions"}},[e("FloodAnimation",{attrs:{amount:t.amount},on:{complete:t.handleFloodComplete}},["fire"===t.emoji?e("img",{attrs:{src:A(366)}}):t._e(),t._v(" "),"heart-eyes"===t.emoji?e("img",{attrs:{src:A(379)}}):t._e(),t._v(" "),"hundred"===t.emoji?e("img",{attrs:{src:A(382)}}):t._e(),t._v(" "),"thumbs-up"===t.emoji?e("img",{attrs:{src:A(367)}}):t._e(),t._v(" "),"biceps"===t.emoji?e("img",{attrs:{src:A(372)}}):t._e()])],1):t._e()],1)}),[],!1,null,"a108ac0c",null);e.default=component.exports;installComponents(component,{FloodAnimation:A(370).default})},387:function(t,e,A){"use strict";A(378)},388:function(t,e,A){var o=A(113)(!1);o.push([t.i,".sticker[data-v-86c9b23c]{padding:0;background-color:transparent}.sticker[data-v-86c9b23c],.sticker>.content[data-v-86c9b23c]{position:relative;box-sizing:border-box;border-radius:50%}.sticker>.content[data-v-86c9b23c]{background-color:var(--color-white);padding:16px;z-index:0;width:100%;height:100%;z-index:1}.sticker>label[data-v-86c9b23c]{background-color:var(--color-gray);width:90%;height:90%;position:absolute;border-radius:50% 50% 4px 50%;top:7%;left:7%;z-index:0}.sticker>.content[data-v-86c9b23c] *{max-height:100%;max-width:100%}",""]),t.exports=o},389:function(t,e,A){"use strict";A(380)},390:function(t,e,A){var o=A(113),n=A(371),r=A(366),c=A(379),l=A(391),d=A(367),m=A(372),h=o(!1),f=n(r),v=n(c),E=n(l),C=n(d),B=n(m);h.push([t.i,".sticker[data-v-a108ac0c]{padding:24px;min-width:180px}.caption[data-v-a108ac0c]{color:#000;font-size:16px;text-align:center;margin-bottom:16px}.meter-wrapper[data-v-a108ac0c]{position:relative}.meter-line[data-v-a108ac0c],.meter-path[data-v-a108ac0c]{border-radius:20px;height:8px}.meter-path[data-v-a108ac0c]{position:relative;background-color:var(--color-gray)}.meter-line[data-v-a108ac0c]{background-color:var(--color-pink);position:relative}.meter-handle[data-v-a108ac0c]{position:absolute;background-size:100% auto;background-repeat:no-repeat;height:30px;width:30px;cursor:pointer;right:-6px;top:-16px}.meter-handle.fire[data-v-a108ac0c]{background-image:url("+f+")}.meter-handle.heart-eyes[data-v-a108ac0c]{top:-12px;background-image:url("+v+")}.meter-handle.hundred[data-v-a108ac0c]{top:-12px;background-image:url("+E+")}.meter-handle.thumbs-up[data-v-a108ac0c]{background-image:url("+C+")}.meter-handle.biceps[data-v-a108ac0c]{background-image:url("+B+")}",""]),t.exports=h},391:function(t,e,A){t.exports=A.p+"img/hundred2.3dc3ded.svg"},392:function(t,e,A){"use strict";A.d(e,"a",(function(){return o}));var o=new(A(1).default)},397:function(t,e,A){"use strict";A(383)},398:function(t,e,A){var o=A(113)(!1);o.push([t.i,".wrapper[data-v-2a3f7aa9]{position:relative}.button[data-v-2a3f7aa9]{top:80px;right:60px}.button[data-v-2a3f7aa9],.meter[data-v-2a3f7aa9]{position:absolute}.meter[data-v-2a3f7aa9]{left:40px;bottom:3vh;transform:rotate(-3deg)}",""]),t.exports=o},399:function(t,e,A){var content=A(431);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,A(114).default)("567564bc",content,!0,{sourceMap:!1})},413:function(t,e,A){"use strict";A.r(e);var o=A(1),n=A(385),r=A(386),c=A(392),l=o.default.extend({name:"WelcomeScreen",components:{StickerEmoji:n.default,StickerMeter:r.default},methods:{goToNextPage:function(t){100===t&&c.a.$emit("page",1)},goToLastPage:function(){c.a.$emit("page",6)}}}),d=(A(397),A(54)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"wrapper"},[e("StickerEmoji",{staticClass:"button",on:{click:t.goToLastPage}},[e("img",{attrs:{src:A(367)}})]),t._v(" "),e("StickerMeter",{staticClass:"meter",attrs:{animate:"",caption:"Тяни огонёк чтобы перейти на следующую страницу"},on:{change:function(e){return t.goToNextPage(e)}}},[e("img",{attrs:{src:A(366)}})])],1)}),[],!1,null,"2a3f7aa9",null);e.default=component.exports},414:function(t,e,A){t.exports=A.p+"img/crying.6632fe2.svg"},415:function(t,e,A){t.exports=A.p+"img/dizzy.502c3b7.svg"},416:function(t,e,A){t.exports=A.p+"img/happy.0148cc4.svg"},417:function(t,e,A){t.exports=A.p+"img/heart.098ccf1.svg"},418:function(t,e,A){t.exports=A.p+"img/lol.cf5e68d.svg"},419:function(t,e,A){t.exports=A.p+"img/party.efc200e.svg"},420:function(t,e,A){t.exports=A.p+"img/trophy.fca941d.svg"},421:function(t,e,A){t.exports=A.p+"img/winking.b7ab9ba.svg"},422:function(t,e,A){t.exports=A.p+"img/cool.5458fed.svg"},423:function(t,e,A){t.exports=A.p+"img/delighted.1e2cb65.svg"},424:function(t,e,A){t.exports=A.p+"img/eyes.f75c3ed.svg"},425:function(t,e,A){t.exports=A.p+"img/kiss.30f9bb0.svg"},426:function(t,e,A){t.exports=A.p+"img/monkey.55a4f8c.svg"},427:function(t,e,A){t.exports=A.p+"img/poo.e40858e.svg"},430:function(t,e,A){"use strict";A(399)},431:function(t,e,A){var o=A(113),n=A(371),r=A(366),c=A(372),l=o(!1),d=n(r),m=n(c);l.push([t.i,".main[data-v-62343e6a]{height:100%}.main[data-v-62343e6a] .hooper-pagination.is-vertical .hooper-indicator{height:6px;width:6px;background-color:var(--color-gray)}.main[data-v-62343e6a] .hooper-pagination.is-vertical .hooper-indicator.is-active{background-color:var(--color-pink)}.page-slide>div[data-v-62343e6a]{height:100%}#welcome[data-v-62343e6a]{background-image:url("+d+");background-color:#191970;background-size:cover;background-position:50%}@media (orientation:landscape) and (min-height:720px){#welcome[data-v-62343e6a]{height:calc(110vh - 50px)!important}}#results[data-v-62343e6a]{background-color:var(--color-bg)}@media (orientation:landscape) and (min-height:720px){#results[data-v-62343e6a]{display:flex;flex-direction:column;justify-content:center;bottom:auto;max-height:calc(80vh - 100px);padding:25px 0;box-sizing:content-box}}#howdy[data-v-62343e6a]{background-image:url("+m+');background-color:#483d8b;background-size:cover;background-position:50%}@media (orientation:landscape) and (min-height:720px){#howdy[data-v-62343e6a]{height:calc(110vh - 50px)!important;margin-top:0}}.is-horizontal[data-v-62343e6a]{top:40px;right:0;display:flex;width:100%;padding:4px}.hooper-pagination.is-horizontal[data-v-62343e6a] .hooper-indicators{flex-direction:row;width:100%;grid-gap:4px;gap:4px}.hooper-pagination.is-horizontal[data-v-62343e6a] .hooper-indicators li{flex-grow:1}.hooper-pagination.is-horizontal[data-v-62343e6a] .hooper-indicator{width:100%}.last-slide[data-v-62343e6a]{background-image:url("data:image/png;base64,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2spJm+XvXmxc293bb1w7d/Z07UtSqfT3sWl8fqDMCRMAAgITAAICEwACAhMAAgITAAICEwACaiU9KVVOzuycqq6cUO/StZtDb2HUbt9QK4ESJ0wACAhMAAgITAAICEwACAhMAAgITAAINFYfGE6pdrK80jzJxLQJulh37eby584vLl84v9bX7EvpvStVzNgsTpgAEBCYABAQmAAQEJgAEBCYABAQmAAQMK1kQnb39hvXVE5oc/vG1aG3AKPmhAkAAYEJAAGBCQABgQkAAYEJAAGBCQABgQkAAT3MESqNA1reulM1+othlLqxQ9DHhXpOmAAQEJgAEBCYABAQmAAQEJgAEBCYABBQK5kJo7+G4b2djrFVhFg/J0wACAhMAAgITAAICEwACAhMAAgITAAIqJXQ+ri8agQ8mxTUuFaaMMR0OGECQEBgAkBAYAJAQGACQEBgAkBAYAJAwKPQE3Jm59TTprXllYu9vKbKyfpdunazl/vevnG1l/tuirZ6lVoJTpgAEBCYABAQmAAQEJgAEBCYABAQmAAQMK0ENkxf9Y9SXWXulRNYOGECQEZgAkBAYAJAQGACQEBgAkBAYAJAQGACQMBImgkpjfcqMfoLuo1NM95rHpwwASAgMAEgIDABICAwASAgMAEgIDABIGC810yUqiPLW3eqry3Z3duvuk4dhb7UfiZh4YQJABmBCQABgQkAAYEJAAGBCQABgQkAAbUSWmsjpdpJH5NO+nr0X11lOmo/I20VKihxwgSAgMAEgIDABICAwASAgMAEgIDABIDAkaE3wHqc2Tn1tGmtSzVk3ZWTIaijDKOPelGXWsl7y48b115ZvtC4du/+A79nJ8IJEwACAhMAAgITAAICEwACAhMAAgITAAIed56JvmolJXOonDA+tZ+7tsrJm3/0n41rF3//xca1UuWkRB1lfJwwASAgMAEgIDABICAwASAgMAEgIDABIPDc0Btgul49u9O4dnfvftV1sOjw+Tl5fLuX/dz/wSeNa3/yat2v2b94vHW9dj+Hj598qfZamglMelP6xVXqvAlM2pQCs9S1PHmip8A8aA7MP331aNU9v3Z3a1m7H4HZD/8kCwABgQkAAYEJAAGBCQABgQkAAYEJAAHjYyiO/loMMIqrbcxS8VpjwzbG3b37xXpISenv+dzZ0/9RuaXfKC1eunazca00+qukNBasCyPF+uGECQABgQkAAYEJAAGBCQABgQkAAYEJAAHTSujk3NnTVdft7u03rnWphnSppDTeU1WlqPY9f/XsTls9pHZLxXrImNz5p48a17pUTt5bflx13SvLcsWsyaPHT5ZzmJDihAkAAYEJAAGBCQABgQkAAYEJAAGBCQAB/2d6Ok0r6fDof5WDh4eLg0eHa33NPqoqUzKmz0efilWowmekNMmkr2kl6/bXd59bfO3u0cb1qUxBccIEgIDABICAwASAgMAEgIDABICAwASAwCQe9eUX2uohteZQGyhVBijbpM9AbTWkTe10kLl47a1PV1337X/+cFQZ5YQJAAGBCQABgQkAAYEJAAGBCQABgQkAgeeG3gC/nFJ1pPbR9leWL3TZUqMvfPntquu+/sXXV76XNptUjaCfeohqSH/+9s//u+q61976bFVVrq86ihMmAAQEJgAEBCYABAQmAAQEJgAEBCYABAQmAAT0MDvoa5xWySZ1xYboUzIdtV3LTfqOUNZXf7O2p+mECQABgQkAAYEJAAGBCQABgQkAAYEJAIFeRqBMSR/jtIZQGuG1vHKx+r7GYlHr4OHh4uDRYeO66gh9ee2tTzeulSonTpgAEBCYABAQmAAQEJgAEBCYABAQmAAQ+L8AAAD//yIXE6i/uP2xAAAAAElFTkSuQmCC");background-size:cover;background-repeat:no-repeat;background-position:50%}.emotions[data-v-62343e6a] button{height:64px;width:64px}',""]),t.exports=l},438:function(t,e,A){"use strict";A.r(e);var o=A(1),n=A(412),r=A(385),c=A(386),l=A(444),d=A(413),m=A(392),h=o.default.extend({name:"PageContent",components:{Hooper:n.a,Slide:n.c,Pagination:n.b,StickerEmoji:r.default,StickerMeter:c.default,ClientsResults:l.default,WelcomeScreen:d.default},data:function(){return{page:0}},watch:{page:function(t){void 0!==this.$refs.pager&&this.$refs.pager.slideTo(t)}},created:function(){var t=this;m.a.$on("page",(function(e){t.page=e}))}}),f=(A(430),A(54)),component=Object(f.a)(h,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("main",[e("Hooper",{ref:"pager",staticClass:"main",attrs:{vertical:"","items-to-show":1,"center-mode":!0},on:{slide:function(e){t.page=e}}},[e("Pagination",{attrs:{slot:"hooper-addons"},slot:"hooper-addons"}),t._v(" "),e("Slide",{staticClass:"page-slide",attrs:{id:"welcome"}},[e("WelcomeScreen")],1),t._v(" "),e("Slide",{staticClass:"page-slide",attrs:{id:"results"}},[e("ClientsResults")],1),t._v(" "),e("Slide",{staticClass:"page-slide",attrs:{id:"howdy"}}),t._v(" "),e("Slide",{staticClass:"page-slide",staticStyle:{"background-color":"cyan"}}),t._v(" "),e("Slide",{staticClass:"page-slide",staticStyle:{"background-color":"magenta"}}),t._v(" "),e("Slide",{staticClass:"page-slide",staticStyle:{"background-color":"yellow"}}),t._v(" "),e("Slide",{staticClass:"page-slide last-slide emotions",staticStyle:{"background-color":"lightgray"}},[e("StickerEmoji",[e("img",{attrs:{src:A(372)}})]),t._v(" "),e("StickerEmoji",[e("img",{attrs:{src:A(414)}})]),t._v(" "),e("StickerEmoji",[e("img",{attrs:{src:A(415)}})]),t._v(" "),e("StickerEmoji",[e("img",{attrs:{src:A(366)}})]),t._v(" "),e("StickerEmoji",[e("img",{attrs:{src:A(416)}})]),t._v(" "),e("StickerEmoji",[e("img",{attrs:{src:A(417)}})]),t._v(" "),e("StickerEmoji",[e("img",{attrs:{src:A(418)}})]),t._v(" "),e("StickerEmoji",[e("img",{attrs:{src:A(419)}})]),t._v(" "),e("StickerEmoji",[e("img",{attrs:{src:A(420)}})]),t._v(" "),e("StickerEmoji",[e("img",{attrs:{src:A(421)}})]),t._v(" "),e("StickerEmoji",[e("img",{attrs:{src:A(422)}})]),t._v(" "),e("StickerEmoji",[e("img",{attrs:{src:A(423)}})]),t._v(" "),e("StickerEmoji",[e("img",{attrs:{src:A(424)}})]),t._v(" "),e("StickerEmoji",[e("img",{attrs:{src:A(382)}})]),t._v(" "),e("StickerEmoji",[e("img",{attrs:{src:A(425)}})]),t._v(" "),e("StickerEmoji",[e("img",{attrs:{src:A(426)}})]),t._v(" "),e("StickerEmoji",[e("img",{attrs:{src:A(427)}})]),t._v(" "),e("StickerEmoji",[e("img",{attrs:{src:A(367)}})]),t._v(" "),e("div",{staticStyle:{"margin-top":"100px"}},[e("StickerMeter",{attrs:{animate:"",caption:"Тяни огонёк"}},[e("img",{attrs:{src:A(367)}})])],1)],1)],1)],1)}),[],!1,null,"62343e6a",null);e.default=component.exports}}]);