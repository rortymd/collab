!function(){var e,t,r={921:function(e,t,r){var n={"./features-1.webp":913,"./features-2.webp":925,"./testimonials-1.webp":149,"./testimonials-2.webp":657,"./testimonials-3.webp":947,"./testimonials-4.webp":270,"./testimonials-5.webp":0,"./testimonials-6.webp":84};function o(e){return s(e).then((function(e){return r.t(e,1)}))}function s(e){return Promise.resolve().then((function(){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}))}o.keys=function(){return Object.keys(n)},o.resolve=s,o.id=921,e.exports=o},913:function(e,t,r){"use strict";e.exports=r.p+"assets/images/features-1.webp"},925:function(e,t,r){"use strict";e.exports=r.p+"assets/images/features-2.webp"},149:function(e,t,r){"use strict";e.exports=r.p+"assets/images/testimonials-1.webp"},657:function(e,t,r){"use strict";e.exports=r.p+"assets/images/testimonials-2.webp"},947:function(e,t,r){"use strict";e.exports=r.p+"assets/images/testimonials-3.webp"},270:function(e,t,r){"use strict";e.exports=r.p+"assets/images/testimonials-4.webp"},0:function(e,t,r){"use strict";e.exports=r.p+"assets/images/testimonials-5.webp"},84:function(e,t,r){"use strict";e.exports=r.p+"assets/images/testimonials-6.webp"}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var s=n[e]={exports:{}};return r[e](s,s.exports,o),s.exports}t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},o.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"==typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"==typeof r.then)return r}var s=Object.create(null);o.r(s);var i={};e=e||[null,t({}),t([]),t(t)];for(var c=2&n&&r;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((function(e){i[e]=function(){return r[e]}}));return i.default=function(){return r},o.d(s,i),s},o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e+"../"}(),function(){"use strict";const e=document.querySelector(".header"),t=e.querySelector(".header__nav"),r=e.querySelector(".header__nav-menu-btn--show"),n=e.querySelector(".header__nav-menu-btn--hide");let s=!1;function i(){s=!1,setTimeout((()=>{document.body.style.overflow="auto",e.style.bottom="auto"}),200),t.classList.remove("header__nav--active")}r.addEventListener("click",(function(){s=!0,document.body.style.overflow="hidden",e.style.bottom=0,t.classList.add("header__nav--active")})),n.addEventListener("click",i),window.addEventListener("resize",(()=>{window.innerWidth>768&&s&&i()}));let c=null;s||document.addEventListener("scroll",(t=>{c?(window.scrollY>c?e.style.transform="translate3d(0, -100%, 0)":e.style.transform="translate3d(0, 0, 0)",c=window.scrollY):c=window.scrollY}));const a=document.querySelector(".partners__wrapper");new IntersectionObserver(((e,t)=>{e.forEach((e=>{e.isIntersecting&&(e.target.classList.add("partners--active"),t.unobserve(e.target))}))}),{threshold:.5}).observe(a),setTimeout((()=>{const e=document.querySelectorAll(".features__description"),t=new IntersectionObserver(((e,t)=>{e.forEach((e=>{if(e.isIntersecting){const r=e.target.querySelector(".features__description-img");r.style.opacity=1,r.style.transform="translate3d(0, 0, 0)",t.unobserve(e.target)}}))}),{threshold:.25});e.forEach((e=>{t.observe(e)}))}),50),window.addEventListener("DOMContentLoaded",(()=>{(()=>{document.body.style.overflow="auto";const e=document.querySelector(".loadingScreen");e.classList.add("loadingScreen--hidden"),setTimeout((()=>{e.remove(),document.querySelector("#loadingScreenStyles").remove()}),350)})(),(()=>{const e=document.querySelectorAll(".lazy-image"),t=new IntersectionObserver(((e,t)=>{e.forEach((e=>{if(e.isIntersecting){const r=e.target,n=r.querySelector("img"),s=n.getAttribute("data-src");o(921)("./".concat(s)).then((e=>{n.setAttribute("src",e.default),n.addEventListener("load",(()=>{r.classList.add("image--loaded")}))})),t.unobserve(n)}}))}),{threshold:.05});e.forEach((e=>t.observe(e)))})()}))}()}();
//# sourceMappingURL=homePage.fba2e7d01ae0c4fc1460.js.map