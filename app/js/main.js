(()=>{var e={802:()=>{new Typed("#typed",{stringsElement:"#typed-strings",typeSpeed:80})},714:()=>{var e=new Swiper(".generate-slider",{slidesPerView:"auto",spaceBetween:33,breakpoints:{320:{slidesPerView:1,spaceBetween:20,autoHeight:!0},415:{slidesPerView:"auto",spaceBetween:20,autoHeight:!1}}}),t=document.querySelector(".generate-slider__arrows .slider-arrows__arrow--left"),n=document.querySelector(".generate-slider__arrows .slider-arrows__arrow--right");t.addEventListener("click",(function(){e.slidePrev()})),n.addEventListener("click",(function(){e.slideNext()}))},429:()=>{var e=document.querySelectorAll("[data-modal]"),t=document.querySelector(".modal"),n=document.querySelector("body"),i=document.querySelectorAll("[data-modal-close]");e.forEach((function(e){e.addEventListener("click",(function(e){var t=e.target.getAttribute("data-modal");document.getElementById(t).classList.add("modal--active"),document.getElementById(t).classList.contains("modal--active")&&(n.style.overflowY="hidden")}))})),i.forEach((function(e){e.addEventListener("click",(function(e){e.target.parentNode.parentNode.classList.remove("modal--active"),n.style.overflowY=""}))})),document.addEventListener("click",(function(e){e.stopPropagation(),e.target===t&&(t.classList.remove("modal--active"),n.style.overflowY="")}))},905:()=>{var e=new Swiper(".partners-slider",{slidesPerView:1.5,spaceBetween:20,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:10},415:{slidesPerView:"auto",spaceBetween:20}}}),t=document.querySelector(".partners-slider__arrows .slider-arrows__arrow--left"),n=document.querySelector(".partners-slider__arrows .slider-arrows__arrow--right");t.addEventListener("click",(function(){e.slidePrev()})),n.addEventListener("click",(function(){e.slideNext()}))},598:()=>{function e(e){var t=!0,n=!1,i=null,o={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function s(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function r(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function a(e){t=!1}function l(){document.addEventListener("mousemove",d),document.addEventListener("mousedown",d),document.addEventListener("mouseup",d),document.addEventListener("pointermove",d),document.addEventListener("pointerdown",d),document.addEventListener("pointerup",d),document.addEventListener("touchmove",d),document.addEventListener("touchstart",d),document.addEventListener("touchend",d)}function d(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",d),document.removeEventListener("mousedown",d),document.removeEventListener("mouseup",d),document.removeEventListener("pointermove",d),document.removeEventListener("pointerdown",d),document.removeEventListener("pointerup",d),document.removeEventListener("touchmove",d),document.removeEventListener("touchstart",d),document.removeEventListener("touchend",d))}document.addEventListener("keydown",(function(n){n.metaKey||n.altKey||n.ctrlKey||(s(e.activeElement)&&r(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",a,!0),document.addEventListener("pointerdown",a,!0),document.addEventListener("touchstart",a,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(n&&(t=!0),l())}),!0),l(),e.addEventListener("focus",(function(e){var n,i,a;s(e.target)&&(t||(i=(n=e.target).type,"INPUT"===(a=n.tagName)&&o[i]&&!n.readOnly||"TEXTAREA"===a&&!n.readOnly||n.isContentEditable))&&r(e.target)}),!0),e.addEventListener("blur",(function(e){var t;s(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(i),i=window.setTimeout((function(){n=!1}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)},630:function(e,t){var n,i;n=function(e,t){"use strict";var n,i;function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function r(e,t){return t.indexOf(e)>=0}function a(e,t){for(var n in t)if(null==e[n]){var i=t[n];e[n]=i}return e}function l(e){var t=!(arguments.length<=1||void 0===arguments[1])&&arguments[1],n=!(arguments.length<=2||void 0===arguments[2])&&arguments[2],i=arguments.length<=3||void 0===arguments[3]?null:arguments[3],o=void 0;return null!=document.createEvent?(o=document.createEvent("CustomEvent")).initCustomEvent(e,t,n,i):null!=document.createEventObject?(o=document.createEventObject()).eventType=e:o.eventName=e,o}function d(e,t,n){null!=e.addEventListener?e.addEventListener(t,n,!1):null!=e.attachEvent?e.attachEvent("on"+t,n):e[t]=n}function c(e,t,n){null!=e.removeEventListener?e.removeEventListener(t,n,!1):null!=e.detachEvent?e.detachEvent("on"+t,n):delete e[t]}var u=window.WeakMap||window.MozWeakMap||function(){function e(){o(this,e),this.keys=[],this.values=[]}return s(e,[{key:"get",value:function(e){for(var t=0;t<this.keys.length;t++)if(this.keys[t]===e)return this.values[t]}},{key:"set",value:function(e,t){for(var n=0;n<this.keys.length;n++)if(this.keys[n]===e)return this.values[n]=t,this;return this.keys.push(e),this.values.push(t),this}}]),e}(),v=window.MutationObserver||window.WebkitMutationObserver||window.MozMutationObserver||(i=n=function(){function e(){o(this,e),"undefined"!=typeof console&&null!==console&&(console.warn("MutationObserver is not supported by your browser."),console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))}return s(e,[{key:"observe",value:function(){}}]),e}(),n.notSupported=!0,i),m=window.getComputedStyle||function(e){var t=/(\-([a-z]){1})/g;return{getPropertyValue:function(n){"float"===n&&(n="styleFloat"),t.test(n)&&n.replace(t,(function(e,t){return t.toUpperCase()}));var i=e.currentStyle;return(null!=i?i[n]:void 0)||null}}},h=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];o(this,e),this.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},this.animate="requestAnimationFrame"in window?function(e){return window.requestAnimationFrame(e)}:function(e){return e()},this.vendors=["moz","webkit"],this.start=this.start.bind(this),this.resetAnimation=this.resetAnimation.bind(this),this.scrollHandler=this.scrollHandler.bind(this),this.scrollCallback=this.scrollCallback.bind(this),this.scrolled=!0,this.config=a(t,this.defaults),null!=t.scrollContainer&&(this.config.scrollContainer=document.querySelector(t.scrollContainer)),this.animationNameCache=new u,this.wowEvent=l(this.config.boxClass)}return s(e,[{key:"init",value:function(){this.element=window.document.documentElement,r(document.readyState,["interactive","complete"])?this.start():d(document,"DOMContentLoaded",this.start),this.finished=[]}},{key:"start",value:function(){var e=this;if(this.stopped=!1,this.boxes=[].slice.call(this.element.querySelectorAll("."+this.config.boxClass)),this.all=this.boxes.slice(0),this.boxes.length)if(this.disabled())this.resetStyle();else for(var t=0;t<this.boxes.length;t++){var n=this.boxes[t];this.applyStyle(n,!0)}this.disabled()||(d(this.config.scrollContainer||window,"scroll",this.scrollHandler),d(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live&&new v((function(t){for(var n=0;n<t.length;n++)for(var i=t[n],o=0;o<i.addedNodes.length;o++){var s=i.addedNodes[o];e.doSync(s)}})).observe(document.body,{childList:!0,subtree:!0})}},{key:"stop",value:function(){this.stopped=!0,c(this.config.scrollContainer||window,"scroll",this.scrollHandler),c(window,"resize",this.scrollHandler),null!=this.interval&&clearInterval(this.interval)}},{key:"sync",value:function(){v.notSupported&&this.doSync(this.element)}},{key:"doSync",value:function(e){if(null==e&&(e=this.element),1===e.nodeType)for(var t=(e=e.parentNode||e).querySelectorAll("."+this.config.boxClass),n=0;n<t.length;n++){var i=t[n];r(i,this.all)||(this.boxes.push(i),this.all.push(i),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(i,!0),this.scrolled=!0)}}},{key:"show",value:function(e){return this.applyStyle(e),e.className=e.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(e),t=e,n=this.wowEvent,null!=t.dispatchEvent?t.dispatchEvent(n):n in(null!=t)?t[n]():"on"+n in(null!=t)&&t["on"+n](),d(e,"animationend",this.resetAnimation),d(e,"oanimationend",this.resetAnimation),d(e,"webkitAnimationEnd",this.resetAnimation),d(e,"MSAnimationEnd",this.resetAnimation),e;var t,n}},{key:"applyStyle",value:function(e,t){var n=this,i=e.getAttribute("data-wow-duration"),o=e.getAttribute("data-wow-delay"),s=e.getAttribute("data-wow-iteration");return this.animate((function(){return n.customStyle(e,t,i,o,s)}))}},{key:"resetStyle",value:function(){for(var e=0;e<this.boxes.length;e++)this.boxes[e].style.visibility="visible"}},{key:"resetAnimation",value:function(e){if(e.type.toLowerCase().indexOf("animationend")>=0){var t=e.target||e.srcElement;t.className=t.className.replace(this.config.animateClass,"").trim()}}},{key:"customStyle",value:function(e,t,n,i,o){return t&&this.cacheAnimationName(e),e.style.visibility=t?"hidden":"visible",n&&this.vendorSet(e.style,{animationDuration:n}),i&&this.vendorSet(e.style,{animationDelay:i}),o&&this.vendorSet(e.style,{animationIterationCount:o}),this.vendorSet(e.style,{animationName:t?"none":this.cachedAnimationName(e)}),e}},{key:"vendorSet",value:function(e,t){for(var n in t)if(t.hasOwnProperty(n)){var i=t[n];e[""+n]=i;for(var o=0;o<this.vendors.length;o++)e[""+this.vendors[o]+n.charAt(0).toUpperCase()+n.substr(1)]=i}}},{key:"vendorCSS",value:function(e,t){for(var n=m(e),i=n.getPropertyCSSValue(t),o=0;o<this.vendors.length;o++){var s=this.vendors[o];i=i||n.getPropertyCSSValue("-"+s+"-"+t)}return i}},{key:"animationName",value:function(e){var t=void 0;try{t=this.vendorCSS(e,"animation-name").cssText}catch(n){t=m(e).getPropertyValue("animation-name")}return"none"===t?"":t}},{key:"cacheAnimationName",value:function(e){return this.animationNameCache.set(e,this.animationName(e))}},{key:"cachedAnimationName",value:function(e){return this.animationNameCache.get(e)}},{key:"scrollHandler",value:function(){this.scrolled=!0}},{key:"scrollCallback",value:function(){if(this.scrolled){this.scrolled=!1;for(var e=[],t=0;t<this.boxes.length;t++){var n=this.boxes[t];if(n){if(this.isVisible(n)){this.show(n);continue}e.push(n)}}this.boxes=e,this.boxes.length||this.config.live||this.stop()}}},{key:"offsetTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;)t+=(e=e.offsetParent).offsetTop;return t}},{key:"isVisible",value:function(e){var t=e.getAttribute("data-wow-offset")||this.config.offset,n=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,i=n+Math.min(this.element.clientHeight,"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight)-t,o=this.offsetTop(e),s=o+e.clientHeight;return o<=i&&s>=n}},{key:"disabled",value:function(){return!this.config.mobile&&(e=navigator.userAgent,/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e));var e}}]),e}();t.default=h,e.exports=t.default},void 0===(i=n.apply(t,[e,t]))||(e.exports=i)}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var s=t[i]={exports:{}};return e[i].call(s.exports,s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(598);const e={windowEl:window,documentEl:document,htmlEl:document.documentElement,bodyEl:document.body};var t,i,o,s,r,a,l=function(){var t,n=null===(t=document)||void 0===t?void 0:t.querySelectorAll(".fixed-block"),i=(document.body,parseInt(e.bodyEl.dataset.position,10));n.forEach((function(e){e.style.paddingRight="0px"})),e.bodyEl.style.paddingRight="0px",e.bodyEl.style.top="auto",e.bodyEl.classList.remove("dis-scroll"),window.scroll({top:i,left:0}),e.bodyEl.removeAttribute("data-position"),e.htmlEl.style.scrollBehavior="smooth"};s=null===(t=document)||void 0===t?void 0:t.querySelector("[data-burger]"),r=null===(i=document)||void 0===i?void 0:i.querySelector("[data-menu]"),a=null===(o=document)||void 0===o?void 0:o.querySelectorAll("[data-menu-item]"),null==s||s.addEventListener("click",(function(t){null==s||s.classList.toggle("burger--active"),null==r||r.classList.toggle("menu-mobile--active"),null!=r&&r.classList.contains("menu-mobile--active")?(null==s||s.setAttribute("aria-expanded","true"),null==s||s.setAttribute("aria-label","Закрыть меню"),function(){var t,n=null===(t=document)||void 0===t?void 0:t.querySelectorAll(".fixed-block"),i=window.scrollY,o="".concat(window.innerWidth-e.bodyEl.offsetWidth,"px");e.htmlEl.style.scrollBehavior="none",n.forEach((function(e){e.style.paddingRight=o})),e.bodyEl.style.paddingRight=o,e.bodyEl.classList.add("dis-scroll"),e.bodyEl.dataset.position=i,e.bodyEl.style.top="-".concat(i,"px")}()):(null==s||s.setAttribute("aria-expanded","false"),null==s||s.setAttribute("aria-label","Открыть меню"),l())})),null==a||a.forEach((function(e){e.addEventListener("click",(function(){s.classList.remove("burger--active"),r.classList.remove("menu-mobile--active"),l()}))})),n(905);const d=e=>{clearTimeout(e.countUpTimeout),e._countUpOrigInnerHTML&&(e.innerHTML=e._countUpOrigInnerHTML,e._countUpOrigInnerHTML=void 0),e.style.visibility=""},c=(e,t={})=>{const{duration:n=1e3,delay:i=16}=t,o=n/i,s=e.toString().split(/(<[^>]+>|[0-9.][,.0-9]*[0-9]*)/),r=[];for(let e=0;e<o;e++)r.push("");for(let e=0;e<s.length;e++)if(/([0-9.][,.0-9]*[0-9]*)/.test(s[e])&&!/<[^>]+>/.test(s[e])){let t=s[e];const n=[...t.matchAll(/[.,]/g)].map((e=>({char:e[0],i:t.length-e.index-1}))).sort(((e,t)=>e.i-t.i));t=t.replace(/[.,]/g,"");let i=r.length-1;for(let e=o;e>=1;e--){let s=parseInt(t/o*e,10);s=n.reduce(((e,{char:t,i:n})=>e.length<=n?e:e.slice(0,-n)+t+e.slice(-n)),s.toString()),r[i--]+=s}}else for(let t=0;t<o;t++)r[t]+=s[e];return r[r.length]=e.toString(),r};var u=new IntersectionObserver((function(e){e.forEach((function(e){var t=e.target;e.isIntersecting&&!t.classList.contains("is-visible")&&(((e,t={})=>{const{action:n="start",duration:i=1e3,delay:o=16}=t;if("stop"===n)return void d(e);if(d(e),!/[0-9]/.test(e.innerHTML))return;const s=c(e.innerHTML,{duration:i||e.getAttribute("data-duration"),delay:o||e.getAttribute("data-delay")});e._countUpOrigInnerHTML=e.innerHTML,e.innerHTML=s[0]||"&nbsp;",e.style.visibility="visible";const r=function(){e.innerHTML=s.shift()||"&nbsp;",s.length?(clearTimeout(e.countUpTimeout),e.countUpTimeout=setTimeout(r,o)):e._countUpOrigInnerHTML=void 0};e.countUpTimeout=setTimeout(r,o)})(t,{duration:800,delay:16}),t.classList.add("is-visible"))}))}),{threshold:1});document.querySelectorAll(".stats__num").forEach((function(e){u.observe(e)})),n(802),n(714);var v=n(630);new(n.n(v)())({boxClass:"wow",animateClass:"animated",offset:0,mobile:!0}).init(),n(429)})()})();