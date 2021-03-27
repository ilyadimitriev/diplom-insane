!function(){"use strict";const t=function(t){t.preventDefault();var e=t.target.closest("a");if(e){var i=e.getAttribute("href");document.querySelector(i).scrollIntoView({behavior:"smooth",block:"start"})}},e=function(t){var e=t.popupType,i=t.openBtnClass,n=document.querySelectorAll(".".concat(i)),o=document.querySelectorAll(".".concat(e," .close")),s=function(t,e){document.querySelectorAll(".popup").forEach((function(i){"open"===e?i.classList.contains("".concat(t))?i.style.visibility="visible":i.classList.contains("popup-menu")&&"popup-menu"!==t&&(i.querySelector(".popup-dialog-menu").classList.remove("active"),i.style.visibility="hidden"):"close"===e&&i.classList.contains("".concat(t))&&(i.style.visibility="hidden")}))};n.forEach((function(t){t.addEventListener("click",s.bind(null,"".concat(e),"open"))})),o.forEach((function(t){t.addEventListener("click",s.bind(null,"".concat(e),"close"))}))};function i(t,e){var i;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=function(t,e){if(t){if("string"==typeof t)return n(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?n(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var o=0,s=function(){};return{s,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,a=!0,l=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return a=t.done,t},e:function(t){l=!0,r=t},f:function(){try{a||null==i.return||i.return()}finally{if(l)throw r}}}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function o(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}const s=function(){function t(e){var i=this,n=e.wrap,o=e.main,s=e.prev,r=e.next,a=e.dots,l=e.currentSlide,c=void 0===l?0:l,d=e.counter;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.wrap=document.querySelector(n),this.main=document.querySelector(o),this.prev=s,this.next=r,this.dots=document.querySelector(a),this.counter=document.querySelector(d),this.slides=this.wrap.children,this.currentSlide=c>this.slides.length-1?(console.warn("Слайдера с таким индексом не существует, будет отображен первый слайд"),0):c,this.sliderListener=function(t){i.handleSlider.call(i,t)}}var e,n;return e=t,(n=[{key:"init",value:function(){this.addStaticClass(),this.addStyle(),this.controlSlider()}},{key:"remove",value:function(){this.removeStaticClass(),this.main.removeEventListener("click",this.sliderListener)}},{key:"addStaticClass",value:function(){this.main.classList.add("static-slider"),this.wrap.classList.add("static-slider__wrap");var t,e=i(this.slides);try{for(e.s();!(t=e.n()).done;){var n=t.value;this.slides[this.currentSlide]===n&&n.classList.add("active"),n.classList.add("static-slider__item")}}catch(t){e.e(t)}finally{e.f()}}},{key:"removeStaticClass",value:function(){this.main.classList.remove("static-slider"),this.wrap.classList.remove("static-slider__wrap");var t,e=i(this.slides);try{for(e.s();!(t=e.n()).done;){var n=t.value;this.slides[this.currentSlide]===n&&n.classList.remove("active"),n.classList.remove("static-slider__item")}}catch(t){e.e(t)}finally{e.f()}}},{key:"addStyle",value:function(){var t=document.getElementById("staticSlider-style");t||((t=document.createElement("style")).id="staticSlider-style"),t.textContent="\n\t\t\t.static-slider {\n\t\t\t}\n\t\t\t.static-slider__wrap {\n\t\t\t\tposition: relative;\n\t\t\t}\n\t\t\t.static-slider__item {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 50%;\n\t\t\t\tleft: 50%;\n\t\t\t\t-webkit-transform: translate(-50%, -50%);\n\t\t\t\ttransform: translate(-50%, -50%);\n\t\t\t\twidth: 100%;\n\t\t\t\topacity: 0;\n\t\t\t\t-webkit-transition: opacity .5s;\n\t\t\t\ttransition: opacity .5s;\n\t\t\t}\n\t\t\t.static-slider__item.active {\n\t\t\t\topacity: 1;\n\t\t\t\t-webkit-transition: opacity .5s;\n\t\t\t\ttransition: opacity .5s;\n\t\t\t}\n\n\t\t",document.head.appendChild(t)}},{key:"handleSlider",value:function(t){t.preventDefault();var e=t.target;(e.closest("".concat(this.prev))||e.closest("".concat(this.next)))&&(this.prevSlider(),e.closest("".concat(this.prev))?this.currentSlide--:e.closest("".concat(this.next))&&this.currentSlide++,this.currentSlide>=this.slides.length&&(this.currentSlide=0),this.currentSlide<0&&(this.currentSlide=this.slides.length-1),this.nextSlider(),this.counter&&this.handleCounter())}},{key:"controlSlider",value:function(){this.main.addEventListener("click",this.sliderListener),this.counter&&this.handleCounter()}},{key:"prevSlider",value:function(){this.slides[this.currentSlide].classList.remove("active")}},{key:"nextSlider",value:function(){this.slides[this.currentSlide].classList.add("active")}},{key:"handleCounter",value:function(){this.counter.querySelector(".slider-counter-content__current").textContent=this.currentSlide+1,this.counter.querySelector(".slider-counter-content__total").textContent=this.slides.length}},{key:"getData",value:function(){return this.currentSlide}},{key:"setCurrentSlide",value:function(t){t>this.slides.length-1?console.warn("Слайдера с таким индексом не существует, будет отображен первый слайд"):(this.prevSlider(),this.currentSlide=t,this.nextSlider(),this.counter&&this.handleCounter())}}])&&o(e.prototype,n),t}();function r(t,e){var i;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=function(t,e){if(t){if("string"==typeof t)return a(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?a(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,r=!0,l=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return r=t.done,t},e:function(t){l=!0,s=t},f:function(){try{r||null==i.return||i.return()}finally{if(l)throw s}}}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function l(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}const c=function(){function t(e){var i=this,n=e.main,o=e.wrap,s=e.prev,r=e.next,a=e.position,l=void 0===a?0:a,c=e.truePosition,d=void 0!==c&&c,p=e.slidesToShow,u=void 0!==p&&p,h=e.infinity,v=void 0!==h&&h,f=e.responsive,m=void 0===f?[]:f;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.main=document.querySelector(n),this.wrap=document.querySelector(o),this.next=document.querySelector(r),this.prev=document.querySelector(s),this.slides=this.wrap.children,this.slidesToShow=u,this.slidesToShowDefault=u,this.options={position:l,truePosition:d,infinity:v,slideWidth:Math.floor(100/this.slidesToShow*10)/10},this.responsive=m,this.prevBtnFunc=function(){i.prevSlider.call(i)},this.nextBtnFunc=function(){i.nextSlider.call(i)},this.styleName=n.replace(/^[#.]/,"")}var e,i;return e=t,(i=[{key:"setPosition",value:function(t){t<0&&(t=this.slides.length-1),t>this.slides.length-1&&(t=0),this.options.truePosition=t}},{key:"getData",value:function(){return{position:this.options.position,slidesToShow:this.slidesToShow}}},{key:"init",value:function(){this.addGloClass(),this.addStyle.call(this),this.prev&&this.next||this.addArrow(),this.controlSlider(),this.responsive&&this.responseInit.call(this)}},{key:"remove",value:function(){this.prev.removeEventListener("click",this.prevBtnFunc),this.next.removeEventListener("click",this.nextBtnFunc),this.removeGloClass(),this.wrap.style.transform=""}},{key:"addGloClass",value:function(){this.main.classList.add("".concat(this.styleName,"-slider")),this.wrap.classList.add("".concat(this.styleName,"-slider__wrap"));var t,e=r(this.slides);try{for(e.s();!(t=e.n()).done;)t.value.classList.add("".concat(this.styleName,"-slider__item"))}catch(t){e.e(t)}finally{e.f()}}},{key:"removeGloClass",value:function(){this.main.classList.remove("".concat(this.styleName,"-slider")),this.wrap.classList.remove("".concat(this.styleName,"-slider__wrap"));var t,e=r(this.slides);try{for(e.s();!(t=e.n()).done;)t.value.classList.remove("".concat(this.styleName,"-slider__item"))}catch(t){e.e(t)}finally{e.f()}}},{key:"addStyle",value:function(){var t=document.getElementById("".concat(this.styleName,"-style"));t||((t=document.createElement("style")).id="".concat(this.styleName,"-style")),t.textContent="\n\t\t\t.".concat(this.styleName,"-slider {\n\t\t\t\tposition: relative;\n\t\t\t\toverflow: hidden !important;\n\t\t\t}\n\t\t\t.").concat(this.styleName,"-slider__wrap {\n\t\t\t\tdisplay: flex !important;\n\t\t\t\tflex-direction: row;\n\t\t\t\tflex-wrap: nowrap;\n\t\t\t\ttransition: transform 0.3s !important;\n\t\t\t\twill-change: transform !important;\n\t\t\t}\n\t\t\t.").concat(this.styleName,"-slider__item {\n\t\t\t\tflex: 0 0 ").concat(this.options.slideWidth,"% !important;\n\t\t\t\tmargin: auto 0 !important;\n\t\t\t}\n\t\t"),document.head.appendChild(t)}},{key:"controlSlider",value:function(){this.prev.addEventListener("click",this.prevBtnFunc),this.next.addEventListener("click",this.nextBtnFunc)}},{key:"prevSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.slides.length-this.slidesToShow),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.slideWidth,"%)"))}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.slides.length-this.slidesToShow)&&(++this.options.position,this.options.position>this.slides.length-this.slidesToShow&&(this.options.position=0),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.slideWidth,"%)"))}},{key:"addArrow",value:function(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.classList="glo-slider__prev",this.next.classList="glo-slider__next",this.main.appendChild(this.prev),this.main.appendChild(this.next);var t=document.createElement("style");t.textContent="\n\t\t\t.glo-slider__prev, .glo-slider__next {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 50%;\n\t\t\t\ttransform: translateY(-50%);\n\t\t\t\twidth: 40px;\n\t\t\t\theight: 40px;\n\t\t\t\tbackground-color: rgba(0, 0, 0, .5);\n\t\t\t\tbackground-repeat: no-repeat;\n\t\t\t\tbackground-size: 30px;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tborder: none;\n\t\t\t}\n\t\t\t.glo-slider__prev {\n\t\t\t\tleft: 20px;\n\t\t\t\tbackground-image: url(../images/icons/left-arrow.svg);\n\t\t\t\tbackground-position: 50% 50%;\n\t\t\t}\n\t\t\t.glo-slider__next {\n\t\t\t\tright: 20px;\n\t\t\t\tbackground-image: url(../images/icons/right-arrow.svg);\n\t\t\t\tbackground-position: 50% 50%;\n\t\t\t}\n\t\t\t.glo-slider__prev:hover,\n\t\t\t.glo-slider__next:hover, \n\t\t\t.glo-slider__prev:focus, \n\t\t\t.glo-slider__next:focus {\n\t\t\t\toutline: none;\n\t\t\t}\n\t\t",document.head.appendChild(t)}},{key:"responseInit",value:function(){var t=this,e=this.slidesToShow,i=this.responsive.map((function(t){return t.breakpoint})).sort((function(t,e){return t-e})),n=function(){var n,o=document.documentElement.clientWidth,s=i.find((function(t){if(t>=o)return t}));s?(t.responsive.find((function(t,e){if(t.breakpoint===s)return n=e,!0})),t.slidesToShow=t.responsive[n].slidesToShow,t.slidesToShow?(t.options.slideWidth=Math.floor(100/t.slidesToShow*10)/10,!1!==t.options.truePosition&&(t.options.truePosition>t.slides.length-t.slidesToShow?t.options.position=t.slides.length-t.slidesToShow:t.options.position=t.options.truePosition),t.wrap.style.transform="translateX(-".concat(t.options.position*t.options.slideWidth,"%)"),t.addGloClass(),t.addStyle(),t.controlSlider()):t.remove()):t.slidesToShowDefault?(t.slidesToShow=e,t.options.slideWidth=Math.floor(100/t.slidesToShow*10)/10,!1!==t.options.truePosition&&(t.options.truePosition>t.slides.length-t.slidesToShow?t.options.position=t.slides.length-t.slidesToShow:t.options.position=t.options.truePosition),t.wrap.style.transform="translateX(-".concat(t.options.position*t.options.slideWidth,"%)"),t.addGloClass(),t.addStyle(),t.controlSlider()):t.remove()};n(),window.addEventListener("resize",n)}}])&&l(e.prototype,i),t}(),d=function(t){var e=t.nav,i=t.navSlideClass,n=t.leftArrowClass,o=t.rightArrowClass,s=t.breakpoint,r=t.elseToAdd,a=t.elseToRemove,l=document.querySelector(e),c=l.querySelectorAll(i),d=0;l.addEventListener("click",(function(t){if(window.innerWidth>s){var e=t.target.closest(i);if(e){if(e.classList.contains("active"))return;var l;c.forEach((function(t,i){t.classList.contains("active")&&(a&&a(d),t.classList.remove("active")),t===e&&(l=i)})),d=l,e.classList.add("active"),r&&r(d)}}else{var p=t.target;if(c.find((function(t,e){if(t.classList.contains("active"))return d=e,!0})),p.closest(n))c[d].classList.remove("active"),a&&a(d),d--;else{if(!p.closest(o))return;c[d].classList.remove("active"),a&&a(d),d++}d<0&&(d=c.length-1),d>c.length-1&&(d=0),c[d].classList.add("active"),r&&r(d)}}))},p=function(t){var e=document.getElementById(t),i=document.createElement("div"),n=function(t){i.style.cssText="font-size: 1.4rem;",i.innerHTML="",i.textContent="Возникла ошибка при отправки данных",console.error(t)};e.addEventListener("submit",(function(t){t.preventDefault(),e.appendChild(i);var o=new FormData(e),s={};o.forEach((function(t,e){s[e]=t})),function(t){return fetch("server.php",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})}(s).then((function(t){if(200!==t.status)throw new Error("Возникла ошибка при отправки данных");document.querySelector(".popup-thank").style.visibility="visible",document.querySelectorAll(".popup-thank .close").forEach((function(t){t.addEventListener("click",(function(){document.querySelector(".popup-thank").style.visibility="hidden"}))})),setTimeout((function(){document.querySelector(".popup-thank").style.visibility="hidden"}),6e3),e.querySelectorAll("input").forEach((function(t){t.value=""})),i.innerHTML=""})).catch(n)}))};function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}const h=function(){var t,e,i,n=document.querySelector(".nav-list-popup-repair"),o=document.querySelector(".popup-repair-types-content-table"),s=document.querySelector(".popup-repair-types-content__head-date"),r=document.querySelector(".popup-repair-types-content__head-title");fetch("./db/db.json").then((function(t){if(200!==t.status)throw new Error("Возникла ошибка при отправки данных");return t.json()})).then((function(a){var l,p=function(t){if(Array.isArray(t))return u(t)}(l=a)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(l)||function(t,e){if(t){if("string"==typeof t)return u(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?u(t,e):void 0}}(l)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),h=p.reduce((function(t,e){return t.concat(e)}),[]);s.textContent=p[0].date;var v=document.createElement("button");v.classList="button_o popup-repair-types-nav__item";var f=document.createElement("table");f.classList="popup-repair-types-content-table__list",f.innerHTML="<tbody></tbody>";var m=document.createElement("tr");m.classList="mobile-row",h.forEach((function(t){t.title&&(v.textContent=t.title,n.appendChild(v.cloneNode(!0)),f.querySelector("tbody").innerHTML="",t.priceList.forEach((function(t){var e="м2"===t.units?"м<sup>2</sup>":t.units;m.innerHTML='\n\t\t\t\t\t\t\t<td class="repair-types-name">'.concat(t.typeService,'</td>\n\t\t\t\t\t\t\t<td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>\n\t\t\t\t\t\t\t<td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>\n\t\t\t\t\t\t\t<td class="repair-types-value">').concat(e,'</td>\n\t\t\t\t\t\t\t<td class="repair-types-value">').concat(t.cost," руб.</td>\n\t\t\t\t\t\t"),f.querySelector("tbody").appendChild(m.cloneNode(!0))})),o.appendChild(f.cloneNode(!0)))})),n.querySelector(".popup-repair-types-nav__item").classList.add("active"),o.querySelector(".popup-repair-types-content-table__list").classList.add("active"),t=document.querySelectorAll(".popup-repair-types-content-table__list"),e=document.querySelectorAll(".popup-repair-types-nav__item"),(i=new c({wrap:".nav-list-popup-repair",main:".nav-wrap-repair-popup",prev:"#nav-arrow-popup-repair_left",next:"#nav-arrow-popup-repair_right",slidesToShow:!1,infinity:!0,responsive:[{breakpoint:1024,slidesToShow:2},{breakpoint:768,slidesToShow:1}]})).init(),d({nav:".nav-wrap-repair-popup",navSlideClass:".popup-repair-types-nav__item",leftArrowClass:"#nav-arrow-popup-repair_left",rightArrowClass:"#nav-arrow-popup-repair_right",breakpoint:768,elseToAdd:function(n){t[n].classList.add("active"),r.textContent=e[n].textContent,i.setPosition(n)},elseToRemove:function(e){t[e].classList.remove("active")}})})).catch((function(t){console.log(t)}))};function v(t,e){var i;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=function(t,e){if(t){if("string"==typeof t)return f(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?f(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,r=!0,a=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return r=t.done,t},e:function(t){a=!0,s=t},f:function(){try{r||null==i.return||i.return()}finally{if(a)throw s}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function m(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}const y=function(){function t(e){var i=this,n=e.classToAdd,o=void 0!==n&&n,s=e.main,r=e.wrap,a=e.prev,l=e.next,c=e.slidesToShow,d=void 0===c||c,p=e.responsive,u=void 0===p?[]:p;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.classToAdd=o,this.main=document.querySelector(s),this.wrap=document.querySelector(r),this.next=document.querySelector(l),this.prev=document.querySelector(a),this.slides=this.wrap.children,this.slidesToShow=d,this.options={position:1,slideWidth:100},this.responsive=u,this.cloneExist=!1,this.prevBtnFunc=function(){i.prevSlider.call(i)},this.nextBtnFunc=function(){i.nextSlider.call(i)}}var e,i;return e=t,(i=[{key:"init",value:function(){this.responsive?this.responseInit.call(this):(this.addTinyClass(),this.addStyle.call(this),this.controlSlider())}},{key:"remove",value:function(){this.wrap.querySelectorAll(".tiny-slider__item").forEach((function(t){"first-clone"!==t.id&&"last-clone"!==t.id||t.remove()})),this.prev.removeEventListener("click",this.prevBtnFunc),this.next.removeEventListener("click",this.nextBtnFunc),this.removeTinyClass(),this.wrap.style.transform=""}},{key:"addTinyClass",value:function(){this.main.classList.add("tiny-slider"),this.wrap.classList.add("tiny-slider__wrap");var t,e=v(this.slides);try{for(e.s();!(t=e.n()).done;)t.value.classList.add("tiny-slider__item")}catch(t){e.e(t)}finally{e.f()}}},{key:"removeTinyClass",value:function(){this.main.classList.remove("tiny-slider"),this.wrap.classList.remove("tiny-slider__wrap");var t,e=v(this.slides);try{for(e.s();!(t=e.n()).done;){var i=t.value;i.classList.remove("tiny-slider__item"),i.classList.remove("tiny-slider__item_active")}}catch(t){e.e(t)}finally{e.f()}}},{key:"addStyle",value:function(){var t=document.getElementById("tinyCarousel-style");t||((t=document.createElement("style")).id="tinyCarousel-style"),t.textContent="\n\t\t\t.tiny-slider {\n\t\t\t\tposition: relative;\n\t\t\t\toverflow: hidden !important;\n\t\t\t}\n\t\t\t.tiny-slider__wrap {\n\t\t\t\tdisplay: flex !important;\n\t\t\t\tflex-direction: row;\n\t\t\t\tflex-wrap: nowrap;\n\t\t\t\twill-change: transform !important;\n\t\t\t}\n\t\t\t.tiny-slider__item {\n\t\t\t\theight: fit-content;\n\t\t\t\tflex: 0 0 ".concat(this.options.slideWidth,"% !important;\n\t\t\t}\n\n\t\t"),document.head.appendChild(t)}},{key:"controlSlider",value:function(){this.infiniteSlider(),this.prev.addEventListener("click",this.prevBtnFunc),this.next.addEventListener("click",this.nextBtnFunc)}},{key:"handleActiveClass",value:function(){var t=this.slides.length-1;do{this.options.position===t?(this.slides[t].classList.add("tiny-slider__item_active"),this.classToAdd&&this.slides[t].classList.add(this.classToAdd)):(this.slides[t].classList.remove("tiny-slider__item_active"),this.classToAdd&&this.slides[t].classList.remove(this.classToAdd)),t--}while(t>0)}},{key:"prevSlider",value:function(){this.options.position<=0||(this.options.position--,this.wrap.style.transition="transform 0.3s",this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.slideWidth,"%)"))}},{key:"nextSlider",value:function(){this.options.position>=this.slides.length-1||(this.options.position++,this.wrap.style.transition="transform 0.3s",this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.slideWidth,"%)"))}},{key:"infiniteSlider",value:function(){var t=this;if(!this.cloneExist){var e=this.wrap.firstElementChild.cloneNode(!0),i=this.wrap.lastElementChild.cloneNode(!0);e.id="first-clone",i.id="last-clone",this.wrap.append(e),this.wrap.prepend(i),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.slideWidth,"%)"),this.handleActiveClass(),this.wrap.addEventListener("transitionend",(function(){"first-clone"===t.slides[t.options.position].id?(t.wrap.style.transition="none",t.options.position=1,t.handleActiveClass(),t.wrap.style.transform="translateX(-".concat(t.options.position*t.options.slideWidth,"%)")):"last-clone"===t.slides[t.options.position].id?(t.wrap.style.transition="none",t.options.position=t.slides.length-2,t.handleActiveClass(),t.wrap.style.transform="translateX(-".concat(t.options.position*t.options.slideWidth,"%)")):t.handleActiveClass()}))}}},{key:"responseInit",value:function(){var t=this,e=this.slidesToShow,i=this.responsive.map((function(t){return t.breakpoint})).sort((function(t,e){return t-e})),n=function(){var n,o=document.documentElement.clientWidth,s=i.find((function(t){if(t>o)return t}));s?(t.responsive.find((function(t,e){if(t.breakpoint===s)return n=e,!0})),t.slidesToShow=t.responsive[n].slidesToShow,t.slidesToShow?(t.addTinyClass(),t.addStyle(),t.controlSlider(),t.cloneExist=!0):(t.remove(),t.cloneExist=!1)):(t.slidesToShow=e,t.slidesToShow?(t.addTinyClass(),t.addStyle(),t.controlSlider(),t.cloneExist=!0):(t.remove(),t.cloneExist=!1))};n(),window.addEventListener("resize",n)}}])&&m(e.prototype,i),t}();document.addEventListener("DOMContentLoaded",(function(){var i,n,o,r,a,l,u,v,f,m,w,S,g,b,_,k=new y({wrap:".formula-slider",main:".formula-slider-wrap",prev:"#formula-arrow_left",next:"#formula-arrow_right",classToAdd:"active-item"}),L=new y({wrap:".problems-slider",main:".problems-slider-wrap",prev:"#problems-arrow_left",next:"#problems-arrow_right",classToAdd:"active-item"}),T=new y({wrap:".transparency-slider",main:".transparency-slider-wrap",prev:"#transparency-arrow_left",next:"#transparency-arrow_right",slidesToShow:!1,responsive:[{breakpoint:1091,slidesToShow:!0}]}),C=new y({wrap:".reviews-slider",main:".reviews-slider-wrap",prev:"#reviews-arrow_left",next:"#reviews-arrow_right"}),E=new c({wrap:".partners-slider",main:".partners-wrapper",prev:"#partners-arrow_left",next:"#partners-arrow_right",slidesToShow:3,infinity:!0,responsive:[{breakpoint:1024,slidesToShow:2},{breakpoint:576,slidesToShow:1}]});S=document.querySelector(".popup-menu-nav"),g=document.querySelector(".popup-dialog-menu"),b=document.querySelector(".menu"),_=document.querySelector(".close-menu"),b.addEventListener("click",(function(){g.classList.add("active")})),_.addEventListener("click",(function(){g.classList.remove("active")})),S.addEventListener("click",(function(e){e.target.closest(".popup-menu-nav__item a")&&(t(e),g.classList.remove("active"))})),m=document.querySelector(".header-contacts__arrow"),w=document.querySelector(".header-contacts__phone-number-accord"),m.addEventListener("click",(function(){m.classList.toggle("active"),w.classList.toggle("active")})),document.querySelector(".button-footer").addEventListener("click",(function(e){t(e)})),document.querySelectorAll('[name="phone"]').forEach((function(t){t.addEventListener("focus",(function(){""===t.value&&(t.value="+7 (")})),t.addEventListener("input",(function(e){var i=t.value.length;if("deleteContentBackward"===e.inputType)15===i?t.value=t.value.slice(0,14):12===i?t.value=t.value.slice(0,11):8===i?t.value=t.value.slice(0,6):i<=4&&(t.value="+7 (");else{if(/\D$/.test(t.value))return void(t.value=t.value.replace(/[\D]$/,""));if(7===i)t.value+=") ";else if(12===i)t.value+="-";else if(15===i)t.value+="-";else if(i>18)return void(t.value=t.value.replace(/.$/,""))}})),t.addEventListener("blur",(function(){t.value.length<=4&&(t.value="")}))})),p("feedback1"),p("feedback2"),p("feedback3"),p("feedback4"),p("feedback5"),p("feedback6"),document.getElementById("formula").querySelectorAll(".row .formula-item").forEach((function(t){t.addEventListener("mouseenter",(function(){if(screen.width>1024){var e=t.querySelector(".formula-item-popup");t.classList.add("active-item"),e.getBoundingClientRect().top<0&&(e.style.transform="translateY(".concat(e.offsetHeight+120,"px)"),t.classList.add("rotateUp")),t.addEventListener("mouseleave",(function(){t.classList.remove("active-item"),t.classList.remove("rotateUp"),t.classList.remove("rotateDown"),e.style=""}))}}))})),document.getElementById("problems").querySelectorAll(".problems-item").forEach((function(t){t.addEventListener("mouseenter",(function(){if(window.innerWidth>1024){var e=t.querySelector(".problems-item-popup");t.classList.add("active-item"),e.getBoundingClientRect().top<0?(e.style.transform="translateY(".concat(e.offsetHeight+120,"px)"),t.classList.add("rotateUp")):e.getBoundingClientRect().bottom>window.innerHeight&&(e.style.transform="translateY(-".concat(e.offsetHeight+180,"px)"),t.classList.add("rotateDown")),t.addEventListener("mouseleave",(function(){t.classList.remove("active-item"),t.classList.remove("rotateUp"),t.classList.remove("rotateDown"),e.style=""}))}}))})),k.init(),function(){var t,e=new c({wrap:".nav-list-repair",main:".repair-types-nav",prev:"#nav-arrow-repair-left_base",next:"#nav-arrow-repair-right_base",slidesToShow:!1,infinity:!0,responsive:[{breakpoint:1024,slidesToShow:3},{breakpoint:768,slidesToShow:2},{breakpoint:576,slidesToShow:1}]});e.init();var i=new s({wrap:".repair-types-slider",main:".repair-types-slider-wrap"});i.init();var n=function(e){(t=new s({wrap:"#".concat(e),main:".repair-types-slider-wrap",prev:"#repair-types-arrow_left",next:"#repair-types-arrow_right",counter:"#repair-counter"})).init()};n("types-repair1");var o=document.querySelectorAll(".repair-slider>.repair-slide-wrap");d({nav:".nav-wrap-repair",navSlideClass:".repair-types-nav__item",leftArrowClass:"#nav-arrow-repair-left_base",rightArrowClass:"#nav-arrow-repair-right_base",breakpoint:576,elseToAdd:function(t){n(o[t].id),i.setCurrentSlide(t),e.setPosition(t)},elseToRemove:function(){t.remove()}})}(),function(){var t=new c({wrap:".portfolio-slider",main:".portfolio-slider-wrap",prev:"#portfolio-arrow_left",next:"#portfolio-arrow_right",slidesToShow:3,infinity:!1,responsive:[{breakpoint:1200,slidesToShow:2},{breakpoint:578,slidesToShow:!1}]});t.init(),new s({wrap:".portfolio-slider-mobile",main:".portfolio-slider-wrap",prev:"#portfolio-arrow-mobile_left",next:"#portfolio-arrow-mobile_right",counter:"#portfolio-counter"}).init();var e=document.getElementById("portfolio"),i=document.querySelectorAll(".portfolio-slider>.portfolio-slider__slide");e.addEventListener("click",(function(e){if(e.target.closest("#portfolio-arrow_right")||e.target.closest("#portfolio-arrow_left")){var n=t.getData(),o=document.getElementById("portfolio-arrow_left"),s=document.getElementById("portfolio-arrow_right");e.target.closest("#portfolio-arrow_right")&&n.position===i.length-n.slidesToShow?s.classList.add("disabled"):e.target.closest("#portfolio-arrow_left")&&0===n.position?o.classList.add("disabled"):(s.classList.remove("disabled"),o.classList.remove("disabled"))}}))}(),T.init(),L.init(),function(){var t,e=document.querySelector(".preview-block.visible"),i=new c({wrap:".nav-list-designs",main:".nav-designs",prev:"#nav-arrow-designs_left",next:"#nav-arrow-designs_right",slidesToShow:!1,infinity:!0,responsive:[{breakpoint:1024,slidesToShow:3},{breakpoint:768,slidesToShow:2},{breakpoint:576,slidesToShow:1}]});i.init();var n=new s({wrap:".designs-slider",main:".designs-slider-wrap"});n.init();var o=function(e){(t=new s({wrap:"#".concat(e),main:".designs-slider-wrap",prev:"#design_left",next:"#design_right",counter:"#designs-counter"})).init()};o("designs-slider__style1");var r=document.querySelectorAll(".design-slider__style>.designs-slide-wrap"),a=document.querySelector(".preview-block-container");a.addEventListener("click",(function(i){var n=i.target.closest(".preview-block__item");n&&i.target.closest(".visible")&&e.querySelectorAll(".preview-block__item").forEach((function(e,i){e===n&&t.setCurrentSlide(i)}))})),d({nav:".designs-nav-wrap",navSlideClass:".designs-nav__item",leftArrowClass:"#nav-arrow-designs_left",rightArrowClass:"#nav-arrow-designs_right",breakpoint:576,elseToAdd:function(t){o(r[t].id),n.setCurrentSlide(t),a.querySelectorAll(".preview-block")[t].classList.add("visible"),e=document.querySelector(".preview-block.visible"),i.setPosition(t)},elseToRemove:function(e){t.remove(),a.querySelectorAll(".preview-block")[e].classList.remove("visible")}})}(),C.init(),function(){var t=new c({wrap:".nav-scheme-slider",main:".nav-wrap-scheme",prev:"#nav-arrow-scheme_left",next:"#nav-arrow-scheme_right",slidesToShow:!1,infinity:!0,responsive:[{breakpoint:1024,slidesToShow:3},{breakpoint:768,slidesToShow:3},{breakpoint:576,slidesToShow:1}]});t.init();var e=new s({wrap:".scheme-slider",main:".scheme-slider-wrap"});e.init();var i=document.querySelectorAll(".scheme-description-block");d({nav:".scheme-nav",navSlideClass:".scheme-nav__item",leftArrowClass:"#nav-arrow-scheme_left",rightArrowClass:"#nav-arrow-scheme_right",breakpoint:576,elseToAdd:function(n){e.setCurrentSlide(n),i[n].classList.add("visible-content-block"),t.setPosition(n)},elseToRemove:function(t){i[t].classList.remove("visible-content-block")}})}(),E.init(),document.querySelector(".accordion").addEventListener("click",(function(t){var e=t.target.closest(".title_block");e&&(e.classList.contains("msg-active")?e.classList.remove("msg-active"):e.classList.add("msg-active"))})),e({popupType:"popup-menu",openBtnClass:"link-popup-menu"}),e({popupType:"popup-repair-types",openBtnClass:"link-list-repair"}),e({popupType:"popup-privacy",openBtnClass:"link-popup-privacy"}),e({popupType:"popup-design",openBtnClass:"link-list-designs"}),e({popupType:"popup-consultation",openBtnClass:"link-popup-consultation"}),e({popupType:"popup-transparency",openBtnClass:"transparency-item__img"}),e({popupType:"popup-portfolio",openBtnClass:"portfolio-slider__slide-frame"}),h(),u=document.querySelector(".transparency-slider"),v=document.querySelectorAll(".popup-transparency-slider__slide"),(f=new s({wrap:".popup-transparency-slider",main:".popup-transparency-slider-wrap",prev:"#transparency_left",next:"#transparency_right",counter:"#transparency-popup-counter"})).init(),u.addEventListener("click",(function(t){var e=t.target.closest(".transparency-item");if(e){var i=e.dataset.name;v.forEach((function(t,e){t.dataset.name===i&&f.setCurrentSlide(e)}))}})),i=document.getElementById("portfolio"),n=document.querySelectorAll(".portfolio-slider__slide>.portfolio-slider__slide-frame"),o=document.querySelectorAll(".portfolio-slider-mobile>.portfolio-slider__slide-frame"),r=document.querySelectorAll(".popup-portfolio-text"),a=document.querySelector(".popup-portfolio-slider-wrap"),(l=new s({wrap:".popup-portfolio-slider",main:".popup-portfolio-slider-wrap",prev:"#popup_portfolio_left",next:"#popup_portfolio_right",counter:"#popup-portfolio-counter"})).init(),i.addEventListener("click",(function(t){var e=t.target.closest(".portfolio-slider__slide-frame");e&&(t.target.closest(".portfolio-slider-mobile")?o.forEach((function(t,i){r[i].classList.remove("visible"),t===e&&(l.setCurrentSlide(i),r[i].classList.add("visible"))})):t.target.closest(".portfolio-slider__slide")&&n.forEach((function(t,i){r[i].classList.remove("visible"),t===e&&(l.setCurrentSlide(i),r[i].classList.add("visible"))})))})),a.addEventListener("click",(function(t){if(t.target.closest("#popup_portfolio_left")||t.target.closest("#popup_portfolio_right")){var e=l.getData();r.forEach((function(t,i){t.classList.remove("visible"),i===e&&t.classList.add("visible")}))}})),function(){var t,e=new c({wrap:"#nav-list-popup-designs",main:".nav-designs-popup",prev:"#nav-arrow-popup-designs_left",next:"#nav-arrow-popup-designs_right",slidesToShow:!1,infinity:!0,responsive:[{breakpoint:1200,slidesToShow:4},{breakpoint:1024,slidesToShow:2},{breakpoint:576,slidesToShow:1}]});e.init();var i=new s({wrap:".popup-design-slider",main:".popup-design-slider-wrap"});i.init();var n=function(e){(t=new s({wrap:"#".concat(e),main:".popup-design-slider-wrap",prev:"#popup_design_left",next:"#popup_design_right",counter:"#popup-designs-counter"})).init()};n("popup-designs-slider__style1");var o=document.querySelectorAll(".popup-designs-slide-wrap"),r=document.querySelectorAll(".popup-design-text");d({nav:".popup-designs-nav-wrap",navSlideClass:".designs-nav__item_popup",leftArrowClass:"#nav-arrow-popup-designs_left",rightArrowClass:"#nav-arrow-popup-designs_right",breakpoint:576,elseToAdd:function(t){i.setCurrentSlide(t),n(o[t].id),e.setPosition(t),r[t].classList.add("visible-content-block")},elseToRemove:function(e){t.remove(),r[e].classList.remove("visible-content-block")}})}()}))}();