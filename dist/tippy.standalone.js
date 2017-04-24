!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("popper.js")):"function"==typeof define&&define.amd?define(["popper.js"],t):e.Tippy=t(e.Popper)}(this,function(e){"use strict";function t(){A.touchUser=!0,document.body.classList.add("tippy-touch"),document.removeEventListener("touchstart",t)}function i(e){var t=r(e.target,T.el),i=r(e.target,T.popper);if(i){if(L.refs[L.poppers.indexOf(i)].settings.interactive)return}if(t){var n=L.refs[L.els.indexOf(t)];if(!n.settings.multiple&&A.touchUser||!n.settings.multiple&&-1!==n.settings.trigger.indexOf("click"))return y(n);if(!0!==n.settings.hideOnClick||-1!==n.settings.trigger.indexOf("click"))return}!r(e.target,T.controller)&&document.body.querySelector(T.popper)&&y()}function n(e){for(var t=[!1,"webkit"],i=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var r=t[n],o=r?""+r+i:e;if(void 0!==window.document.body.style[o])return o}return null}function r(e,t){return Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),i=t.length;--i>=0&&t.item(i)!==this;);return i>-1}),Element.prototype.closest||(Element.prototype.closest=function(e){for(var t=this;t;){if(t.matches(e))return t;t=t.parentElement}}),e.closest(t)}function o(t){var i=t.settings,n=E({placement:i.position},i.popperOptions||{},{modifiers:E({},i.popperOptions?i.popperOptions.modifiers:{},{flip:E({padding:15},i.popperOptions&&i.popperOptions.modifiers?i.popperOptions.modifiers.flip:{}),offset:E({offset:parseInt(i.offset)},i.popperOptions&&i.popperOptions.modifiers?i.popperOptions.modifiers.offset:{})})});return new e(t.el,t.popper,n)}function s(e,t,i){var n=document.createElement("div");n.setAttribute("class","tippy-popper"),n.setAttribute("role","tooltip"),n.setAttribute("aria-hidden","true"),n.setAttribute("id","tippy-tooltip-"+e);var r=document.createElement("div");if(r.setAttribute("class","tippy-tooltip tippy-tooltip--"+i.size+" "+i.theme+"-theme leave"),r.setAttribute("data-animation",i.animation),i.arrow){var o=document.createElement("div");o.setAttribute("class","arrow-"+i.arrowSize),o.setAttribute("x-arrow",""),r.appendChild(o)}if(i.animateFill){r.setAttribute("data-animatefill","");var s=document.createElement("div");s.setAttribute("class","leave"),s.setAttribute("x-circle",""),r.appendChild(s)}i.inertia&&r.setAttribute("data-inertia","");var a=document.createElement("div");if(a.setAttribute("class","tippy-tooltip-content"),i.html){var l=void 0;i.html instanceof Element?(a.innerHTML=i.html.innerHTML,l=i.html.id||"tippy-html-template"):(a.innerHTML=document.getElementById(i.html.replace("#","")).innerHTML,l=i.html),n.classList.add("html-template"),n.setAttribute("tabindex","0"),r.setAttribute("data-template-id",l)}else a.innerHTML=t;return r.appendChild(a),n.appendChild(r),n}function a(e,t,i){var n=[];return"manual"===e?n:(t.addEventListener(e,i.handleTrigger),n.push({event:e,handler:i.handleTrigger}),"mouseenter"===e&&(t.addEventListener("mouseleave",i.handleMouseleave),n.push({event:"mouseleave",handler:i.handleMouseleave})),"focus"===e&&(t.addEventListener("blur",i.handleBlur),n.push({event:"blur",handler:i.handleBlur})),n)}function l(e){L.refs.push(e),L.els.push(e.el),L.poppers.push(e.popper)}function p(e){var t=e.getAttribute("title");e.setAttribute("data-original-title",t||"html"),e.removeAttribute("title")}function d(e){var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function u(e){var t=L.refs[L.els.indexOf(this)],i=t.popper.getAttribute("x-placement"),r=Math.round(t.popper.offsetWidth/2),o=Math.round(t.popper.offsetHeight/2),s=e.pageX-r,a=e.pageY-2.5*o;"left"===i?(s=e.pageX-2*r-15,a=e.pageY-o):"right"===i?(s=e.pageX+o,a=e.pageY-o):"bottom"===i&&(a=e.pageY+o/1.5),t.popper.style[n("transform")]="translate3d("+s+"px, "+a+"px, 0)"}function c(e,t){t?window.getComputedStyle(t)[n("transform")]:window.getComputedStyle(e).opacity}function f(e,t){e.forEach(function(e){e&&t(e.classList)})}function h(e,t){e.forEach(function(e){e&&(e.hasAttribute("x-circle")&&(t=Math.round(t/1.25)),e.style[n("transitionDuration")]=t+"ms")})}function m(e,t){setTimeout(function(){e.settings.position!==e.popper.getAttribute("x-placement")?(e.flipped=!0,t()):e.flipped&&e.settings.position===e.popper.getAttribute("x-placement")&&(e.flipped=!1,t())},0)}function v(e,t,i){var n=function n(){t||(e.popper.removeEventListener("webkitTransitionEnd",n),e.popper.removeEventListener("transitionend",n)),i()};if(t)return n();e.popper.addEventListener("webkitTransitionEnd",n),e.popper.addEventListener("transitionend",n)}function g(e){document.body.appendChild(e.popper),e.popper.style.visibility="visible",e.popper.setAttribute("aria-hidden","false"),!e.settings.followCursor||e.hasFollowCursorListener||A.touchUser||(e.hasFollowCursorListener=!0,e.el.addEventListener("mousemove",u)),e.instance?(e.instance.update(),e.settings.followCursor||e.instance.enableEventListeners()):(e.instance=o(e),e.settings.followCursor&&!A.touchUser&&e.instance.disableEventListeners())}function y(e){L.refs.forEach(function(t){document.body.contains(t.popper)&&(!0!==t.settings.hideOnClick||e&&t.popper===e.popper||S.hide(t.popper,t.settings.hideDuration))})}e="default"in e?e.default:e;var b=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},w=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},A={touchUser:!1,idCounter:0},L={refs:[],els:[],poppers:[]},O={html:!1,position:"top",animation:"shift",animateFill:!0,arrow:!1,arrowSize:"regular",delay:0,hideDelay:0,trigger:"mouseenter focus",duration:375,hideDuration:375,interactive:!1,theme:"dark",size:"regular",offset:0,hideOnClick:!0,multiple:!1,followCursor:!1,inertia:!1,transitionFlip:!0,popperOptions:{}},k=Object.keys(O),T={popper:".tippy-popper",tooltip:".tippy-tooltip",content:".tippy-tooltip-content",circle:"[x-circle]",arrow:"[x-arrow]",el:"[data-tooltipped]",controller:"[data-tippy-controller]"};document.addEventListener("click",i),document.addEventListener("touchstart",t);var x=function(){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(b(this,e),"addEventListener"in window&&!/MSIE 9/i.test(navigator.userAgent)&&!window.operamini){this.settings=E(JSON.parse(JSON.stringify(O)),i),this.callbacks={wait:i.wait,beforeShown:i.beforeShown||new Function,shown:i.shown||new Function,beforeHidden:i.beforeHidden||new Function,hidden:i.hidden||new Function};var n=t instanceof Element?[t]:[].slice.call(document.querySelectorAll(t));this._createTooltips(n)}}return w(e,[{key:"_applyIndividualSettings",value:function(e){var t=this,i={};return k.forEach(function(n){var r=e.getAttribute("data-"+n.toLowerCase())||t.settings[n];null!==r&&"false"!==r||(r=!1),i[n]=r}),i.arrow&&(i.animateFill=!1),E(JSON.parse(JSON.stringify(this.settings)),i)}},{key:"_getEventListenerHandlers",value:function(e,t,i){var n=this,o=function(){if(clearTimeout(t.getAttribute("data-delay")),clearTimeout(t.getAttribute("data-hidedelay")),i.delay){var e=setTimeout(function(){return n.show(t,i.duration)},i.delay);t.setAttribute("data-delay",e)}else n.show(t,i.duration)},s=function(){return n.callbacks.wait?n.callbacks.wait(o):o()},a=function(){if(clearTimeout(t.getAttribute("data-hidedelay")),clearTimeout(t.getAttribute("data-delay")),i.hideDelay){var e=setTimeout(function(){return n.hide(t,i.hideDuration)},i.hideDelay);t.setAttribute("data-hidedelay",e)}else n.hide(t,i.hideDuration)};return{handleTrigger:function(e){if(i.interactive&&e.target.classList.add("active"),"click"===e.type&&"visible"===t.style.visibility&&"persistent"!==i.hideOnClick)return a();s()},handleMouseleave:function(n){if(i.interactive){var o=function n(o){r(o.target,T.popper)!==t&&r(o.target,T.el)!==e&&-1===i.trigger.indexOf("click")&&(document.removeEventListener("mousemove",n),a())};return document.addEventListener("mousemove",o)}a()},handleBlur:function(e){!A.touchUser&&e.relatedTarget&&(r(e.relatedTarget,T.popper)||a())}}}},{key:"_createTooltips",value:function(t){var i=this;t.forEach(function(e){var t=i._applyIndividualSettings(e),n=e.getAttribute("title");if(n||t.html){var r=A.idCounter;e.setAttribute("data-tooltipped",""),e.setAttribute("aria-describedby","tippy-tooltip-"+r),p(e);var o=s(r,n,t),d=i._getEventListenerHandlers(e,o,t),u=[];t.trigger.trim().split(" ").forEach(function(t){return u=u.concat(a(t,e,d))}),l({id:r,el:e,popper:o,settings:t,listeners:u}),A.idCounter++}}),e.store=L}},{key:"getPopperElement",value:function(e){try{return L.refs[L.els.indexOf(e)].popper}catch(e){throw new Error("[Tippy error]: Element does not exist in any Tippy instances")}}},{key:"getTooltippedElement",value:function(e){try{return L.refs[L.poppers.indexOf(e)].el}catch(e){throw new Error("[Tippy error]: Popper does not exist in any Tippy instances")}}},{key:"show",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.settings.duration,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=L.refs[L.poppers.indexOf(e)],o=e.querySelector(T.tooltip),s=e.querySelector(T.circle);n&&(this.callbacks.beforeShown(),i>=20&&m(r,function(){t.hide(e,0,!1),setTimeout(function(){r.hidden||t.show(e,i,!1)},0)})),r.hidden=!1,g(r),c(o,s),f([o,s],function(e){e.remove("leave"),e.add("enter")}),h([o,s],i),v(r,i<20,function(){"hidden"===e.style.visibility||r.onShownFired||(r.settings.transitionFlip||o.classList.add("tippy-notransition"),r.settings.interactive&&-1!==r.settings.trigger.indexOf("click")&&e.focus(),r.onShownFired=!0,n&&t.callbacks.shown())})}},{key:"hide",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.settings.duration,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=L.refs[L.poppers.indexOf(e)],s=e.querySelector(T.tooltip),a=e.querySelector(T.circle);e.querySelector(T.content);r&&(this.callbacks.beforeHidden(),o.hidden=!0,o.el.classList.remove("active"),o.onShownFired=!1,o.settings.transitionFlip||s.classList.remove("tippy-notransition"),o.flipped=o.settings.position!==e.getAttribute("x-placement")),e.style.visibility="hidden",e.setAttribute("aria-hidden","true"),i===O.hideDuration?i=parseInt(s.style[n("transitionDuration")]):h([s,a],i),f([s,a],function(e){e.remove("enter"),e.add("leave")}),o.settings.html&&-1!==o.settings.trigger.indexOf("click")&&d(o.el)&&o.el.focus(),v(o,i<20,function(){"visible"!==e.style.visibility&&document.body.contains(e)&&(o.instance.disableEventListeners(),document.body.removeChild(e),r&&t.callbacks.hidden())})}},{key:"destroy",value:function(e){var t=L.poppers.indexOf(e),i=L.refs[t];i.listeners.forEach(function(e){return i.el.removeEventListener(e.event,e.handler)}),i.el.removeAttribute("data-tooltipped"),i.el.removeAttribute("aria-describedby"),i.instance&&i.instance.destroy(),L.refs.splice(t,1),L.els.splice(t,1),L.poppers.splice(t,1)}},{key:"update",value:function(e){var t=L.refs[L.poppers.indexOf(e)],i=e.querySelector(T.content),n=t.settings.html;n?i.innerHTML=n instanceof Element?n.innerHTML:document.getElementById(n.replace("#","")).innerHTML:(i.innerHTML=t.el.getAttribute("title")||t.el.getAttribute("data-original-title"),p(t.el))}}]),e}(),S=new x;return x});