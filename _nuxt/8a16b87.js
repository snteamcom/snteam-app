(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{376:function(t,e,n){t.exports=n.p+"img/avatar.6e5028a.webp"},397:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(29),n(89);function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.replace(/\+?7(\d{3})(\d{3})(\d{2})(\d{2})/i,"+7 ($1) $2-$3-$4")}},398:function(t,e,n){var content=n(412);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(116).default)("22930ce1",content,!0,{sourceMap:!1})},411:function(t,e,n){"use strict";n(398)},412:function(t,e,n){var r=n(115),o=n(230),d=n(413),c=r(!1),l=o(d);c.push([t.i,".wrapper[data-v-0d58a18e]{background:radial-gradient(farthest-corner at calc(100% - 3vh) 30vh,transparent 8%,var(--color-bg) 70%),linear-gradient(110deg,var(--color-bg) calc(100% - 65vh),transparent calc(100% - 45vh)),url("+l+") calc(100% + 15vh) 50%/auto 100% no-repeat}.content[data-v-0d58a18e]{width:100%;height:100%;max-width:1360px;margin:auto;position:relative;display:flex;flex-direction:column;grid-gap:0;gap:0}@media(max-width:767px){.content[data-v-0d58a18e]{justify-content:center;background-image:linear-gradient(90deg,transparent,var(--color-bg) 90%);-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)}}@media(min-width:768px){.content[data-v-0d58a18e]{grid-gap:36px;gap:36px;padding:40px 0;display:flex}}.title[data-v-0d58a18e]{font-family:var(--font-rubik);font-weight:700;font-size:24px;text-align:left;padding:16px 0}@media(min-width:768px){.title[data-v-0d58a18e]{font-size:30px;padding:24px 0}}.avatar[data-v-0d58a18e]{float:right;margin-left:1em;margin-bottom:1em;border-radius:50%}@media(min-width:768px){.avatar[data-v-0d58a18e]{display:none}}.about[data-v-0d58a18e],.contacts[data-v-0d58a18e]{font-family:var(--font-rubik);padding:0 20px}@media(min-width:768px){.about[data-v-0d58a18e],.contacts[data-v-0d58a18e]{max-width:calc(100% - 50vh);flex:initial;flex-shrink:1;font-size:20px}}.about li[data-v-0d58a18e],.about p[data-v-0d58a18e],.contacts li[data-v-0d58a18e],.contacts p[data-v-0d58a18e]{margin:1em 0}.about a[data-v-0d58a18e],.contacts a[data-v-0d58a18e]{color:var(--color-accent-text)}",""]),t.exports=c},413:function(t,e,n){t.exports=n.p+"img/avatar-big.0b80080.webp"},455:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"about"},[e("div",{staticClass:"title"},[t._v("Обо мне")]),t._v(" "),e("img",{staticClass:"avatar",attrs:{src:n(376),width:"150"}}),t._v(" "),e("p",[t._v("\n        Всем привет! Меня зовут Станислав Никитин и я занимаюсь тем что\n        помогаю людям строить фигуру, о которой они всегда мечтали!\n      ")]),t._v(" "),e("p",[t._v("\n        Накопив огромный опыт и багаж знаний, я могу помочь вам построить\n        действительно впечатляющую, гармоничную и красивую фигуру! И что самое\n        главное в гораздо более короткие сроки, чем это удалось сделать мне\n        самому!\n      ")]),t._v(" "),e("p",[t._v("\n        Образование Институт физической культуры и спорта, бакалавриат и\n        магистратура с отличием. Большое количество доп. обучений и курсов по\n        спортивной эндокринологии, спортивной медицине, диетологии, ЛФК,\n        различным тренировочным методикам.\n      ")]),t._v(" "),e("p",[t._v("\n        Стаж личных тренировок более 15 лет. Стаж работы тренером более 9 лет.\n      ")])])}],o=n(0),d=n(397),c=o.default.extend({name:"AboutScreen",computed:{phone:function(){var t;return null===(t=this.$store.state.settings)||void 0===t?void 0:t.phone},whatsapp:function(){var t;return null===(t=this.$store.state.settings)||void 0===t?void 0:t.whatsapp},vk:function(){var t;return null===(t=this.$store.state.settings)||void 0===t?void 0:t.vk},telegram:function(){var t;return null===(t=this.$store.state.settings)||void 0===t?void 0:t.telegram},greeting:function(){var t;return null===(t=this.$store.state.settings)||void 0===t?void 0:t.m_text},formatPhone:function(){return d.a}}}),l=(n(411),n(54)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("div",{staticClass:"contacts"},[e("div",{staticClass:"title"},[t._v("Контакты")]),t._v(" "),e("ul",[t.phone?e("li",[t._v("\n          Телефон:  \n          "),e("a",{staticClass:"user-select nowrap",attrs:{href:"tel:".concat(t.phone)}},[t._v("\n            "+t._s(t.formatPhone(t.phone))+"\n          ")])]):t._e(),t._v(" "),t.whatsapp?e("li",[t._v("\n          Whatsapp:  \n          "),e("a",{staticClass:"user-select nowrap",attrs:{href:"https://wa.me/".concat(t.whatsapp)}},[t._v("\n            "+t._s(t.formatPhone(t.whatsapp))+"\n          ")])]):t._e(),t._v(" "),t.telegram?e("li",[t._v("\n          Telegram:  \n          "),e("a",{staticClass:"user-select nowrap",attrs:{href:"https://t.me/".concat(t.telegram)}},[t._v("\n            @"+t._s(t.telegram)+"\n          ")])]):t._e()])])])])}),r,!1,null,"0d58a18e",null);e.default=component.exports}}]);