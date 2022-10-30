(window.webpackJsonp=window.webpackJsonp||[]).push([[9,6],{291:function(e,t,n){var content=n(297);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(107).default)("6737d458",content,!0,{sourceMap:!1})},292:function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},293:function(e,t,n){"use strict";n.r(t);n(317),n(64);var o=n(1),r=n(318);function c(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];n&&(e=Math.ceil(e),t=Math.floor(t));var o=Math.random()*(t-e)+e;return n?Math.floor(o):o}var l=o.default.extend({name:"FloodAnimation",props:{amount:{type:Number,default:20},duration:{type:Number,default:1e3},maxDelay:{type:Number,default:1e3}},data:function(){return{$_timer:0}},computed:{flowHeight:function(){return.7*this.$refs.el.clientHeight}},methods:{generateSize:function(){return c(30,60)},generateY:function(){var element=this.$refs.el;return element?c(0,.2*-element.clientHeight,!1):0},generateX:function(){var element=this.$refs.el;return element?c(-30,element.clientWidth):0},beforeEnter:function(e){var t=this.generateSize();e.style.opacity="1",e.style.width=t+"px",e.style.height=t+"px",e.style.left=this.generateX()+"px",e.style.bottom=this.generateY()-t+"px"},enter:function(e,t){var n=this;Object(r.a)({targets:e,opacity:0,translateY:-this.flowHeight,scale:1.2,duration:this.duration,easing:"linear",delay:c(0,this.maxDelay),complete:function(){t()}}),window&&(window.clearTimeout(this.$_timer),this.$_timer=window.setTimeout((function(){n.$emit("complete")}),this.duration+this.maxDelay))}}}),d=(n(296),n(51)),component=Object(d.a)(l,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{ref:"el",staticClass:"wrapper"},[t("transition-group",{attrs:{name:"staggered-fade",tag:"div",css:!1},on:{"before-enter":e.beforeEnter,enter:e.enter}},e._l(e.amount,(function(i){return t("div",{key:i,staticClass:"element",attrs:{"data-i":i}},[e._t("default")],2)})),0)],1)}),[],!1,null,"20c897e8",null);t.default=component.exports},295:function(e,t,n){e.exports=n.p+"img/thumbs-up.827ac8b.svg"},296:function(e,t,n){"use strict";n(291)},297:function(e,t,n){var o=n(106)(!1);o.push([e.i,".wrapper[data-v-20c897e8]{top:0;bottom:0;right:0;pointer-events:none;overflow:hidden}.element[data-v-20c897e8],.wrapper[data-v-20c897e8]{position:absolute;left:0}.element[data-v-20c897e8]{display:inline-block;bottom:-100%}.element[data-v-20c897e8] *{max-height:100%;max-width:100%}",""]),e.exports=o},298:function(e,t,n){e.exports=n.p+"img/biceps.8cc1521.svg"},299:function(e,t,n){e.exports=n.p+"img/fire.92687bb.svg"},302:function(e,t,n){e.exports=n.p+"img/heart-eyes.6e66e91.svg"},303:function(e,t,n){var content=n(322);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(107).default)("45f6790b",content,!0,{sourceMap:!1})},316:function(e,t,n){e.exports=n.p+"img/hundred.e08fdf2.svg"},321:function(e,t,n){"use strict";n(303)},322:function(e,t,n){var o=n(106),r=n(292),c=n(299),l=n(302),d=n(323),h=n(295),m=n(298),f=o(!1),v=r(c),w=r(l),x=r(d),_=r(h),y=r(m);f.push([e.i,".sticker[data-v-a108ac0c]{padding:24px;min-width:180px}.caption[data-v-a108ac0c]{color:#000;font-size:16px;text-align:center;margin-bottom:16px}.meter-wrapper[data-v-a108ac0c]{position:relative}.meter-line[data-v-a108ac0c],.meter-path[data-v-a108ac0c]{border-radius:20px;height:8px}.meter-path[data-v-a108ac0c]{position:relative;background-color:var(--color-gray)}.meter-line[data-v-a108ac0c]{background-color:var(--color-pink);position:relative}.meter-handle[data-v-a108ac0c]{position:absolute;background-size:100% auto;background-repeat:no-repeat;height:30px;width:30px;cursor:pointer;right:-6px;top:-16px}.meter-handle.fire[data-v-a108ac0c]{background-image:url("+v+")}.meter-handle.heart-eyes[data-v-a108ac0c]{top:-12px;background-image:url("+w+")}.meter-handle.hundred[data-v-a108ac0c]{top:-12px;background-image:url("+x+")}.meter-handle.thumbs-up[data-v-a108ac0c]{background-image:url("+_+")}.meter-handle.biceps[data-v-a108ac0c]{background-image:url("+y+")}",""]),e.exports=f},323:function(e,t,n){e.exports=n.p+"img/hundred2.3dc3ded.svg"},335:function(e,t,n){"use strict";n.r(t);var o=n(31),r=(n(65),n(1).default.extend({name:"StickerMeter",props:{caption:{type:String,default:""},animate:{type:Boolean,default:!1},emoji:{validator:function(e){return["fire","heart-eyes","hundred","thumbs-up","biceps"].includes(e)},default:"fire"}},data:function(){return{value:12,captured:0,amount:0}},watch:{value:function(e){this.$emit("change",e),this.animate&&100===e&&this.handle100Perc()}},methods:{handle100Perc:function(){this.amount=30},handleFloodComplete:function(){this.amount=0},handleHold:function(e){if(!e.target)return!1;var t=0;e.clientX&&(t=e.clientX),e.touches&&(t=e.touches[0].clientX);var n=e.target;this.captured=t-n.offsetLeft-n.clientWidth,window.addEventListener("mousemove",this.handleMove),window.addEventListener("mouseup",this.handleRelease),window.addEventListener("touchmove",this.handleMove),window.addEventListener("touchend",this.handleRelease)},handleMove:function(e){if(!this.$refs.line)return!1;var t=this.$refs.line,n=this.$refs.handle,o=0;e.clientX&&(o=e.pageX),e.touches&&(o=e.touches[0].pageX);var r=t.clientWidth,c=n.clientWidth,l=o-this.captured;this.value=Math.max(Math.min(r,l),c/2)/r*100},handleRelease:function(){window.removeEventListener("mousemove",this.handleMove),window.removeEventListener("mouseup",this.handleRelease),window.removeEventListener("touchmove",this.handleMove),window.removeEventListener("touchend",this.handleRelease)}}})),c=(n(321),n(51)),component=Object(c.a)(r,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"sticker",on:{touchstart:function(e){e.stopPropagation()}}},[t("div",{staticClass:"meter-wrapper"},[e.caption?t("div",{staticClass:"caption"},[e._v("\n      "+e._s(e.caption)+"\n    ")]):e._e(),e._v(" "),t("div",{ref:"line",staticClass:"meter-path"},[t("div",{staticClass:"meter-line",style:{width:e.value+"%"}},[t("div",{ref:"handle",staticClass:"meter-handle",class:Object(o.a)({},e.emoji,!!e.emoji),on:{mousedown:function(t){return t.stopPropagation(),e.handleHold.apply(null,arguments)},touchstart:function(t){return t.stopPropagation(),e.handleHold.apply(null,arguments)}}})])])]),e._v(" "),e.animate?t("Portal",{attrs:{to:"emotions"}},[t("FloodAnimation",{attrs:{amount:e.amount},on:{complete:e.handleFloodComplete}},["fire"===e.emoji?t("img",{attrs:{src:n(299)}}):e._e(),e._v(" "),"heart-eyes"===e.emoji?t("img",{attrs:{src:n(302)}}):e._e(),e._v(" "),"hundred"===e.emoji?t("img",{attrs:{src:n(316)}}):e._e(),e._v(" "),"thumbs-up"===e.emoji?t("img",{attrs:{src:n(295)}}):e._e(),e._v(" "),"biceps"===e.emoji?t("img",{attrs:{src:n(298)}}):e._e()])],1):e._e()],1)}),[],!1,null,"a108ac0c",null);t.default=component.exports;installComponents(component,{FloodAnimation:n(293).default})}}]);