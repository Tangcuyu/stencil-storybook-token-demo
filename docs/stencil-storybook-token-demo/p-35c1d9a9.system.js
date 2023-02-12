var __extends=this&&this.__extends||function(){var e=function(n,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])})(n,r)};return function(n,r){function t(){this.constructor=n}e(n,r),n.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)}}(),__awaiter=this&&this.__awaiter||function(e,n,r,t){function a(e){return e instanceof r?e:new r((function(n){n(e)}))}return new(r||(r=Promise))((function(r,i){function o(e){try{s(t.next(e))}catch(n){i(n)}}function l(e){try{s(t.throw(e))}catch(n){i(n)}}function s(e){e.done?r(e.value):a(e.value).then(o,l)}s((t=t.apply(e,n||[])).next())}))},__generator=this&&this.__generator||function(e,n){var t,a,i,o,r={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(e){return function(n){return s([e,n])}}function s(o){if(t)throw new TypeError("Generator is already executing.");for(;r;)try{if(t=1,a&&(i=2&o[0]?a.return:o[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;switch(a=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++,a=o[1],o=[0];continue;case 7:o=r.ops.pop(),r.trys.pop();continue;default:if(!(i=r.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){r=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){r.label=o[1];break}if(6===o[0]&&r.label<i[1]){r.label=i[1],i=o;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(o);break}i[2]&&r.ops.pop(),r.trys.pop();continue}o=n.call(e,r)}catch(l){o=[6,l],a=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}},__spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,n=0,r=arguments.length;n<r;n++)e+=arguments[n].length;var t=Array(e),a=0;for(n=0;n<r;n++)for(var i=arguments[n],o=0,l=i.length;o<l;o++,a++)t[a]=i[o];return t};System.register([],(function(e,n){"use strict";return{execute:function(){var a,i,r=this,t=e("N","stencil-storybook-token-demo"),o=!1,l=e("w","undefined"!=typeof window?window:{}),f=(e("C",l.CSS),e("d",l.document||{head:{}})),u=e("p",{$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,n,r,t){return e.addEventListener(n,r,t)},rel:function(e,n,r,t){return e.removeEventListener(n,r,t)},ce:function(e,n){return new CustomEvent(e,n)}}),c=(f.head.attachShadow+"").indexOf("[native")>-1,$=e("a",(function(e){return Promise.resolve(e)})),v=function(){try{return new CSSStyleSheet,!0}catch(e){}return!1}(),h=function(e,n){return void 0===n&&(n=""),function(){}},m=new WeakMap,b=function(e){var n=e.$cmpMeta$,r=e.$hostElement$,t=n.$flags$,a=h(0,n.$tagName$),i=function(e,n,r,t){var a=w(n),i=we.get(a);if(e=11===e.nodeType?e:f,i)if("string"==typeof i){e=e.head||e;var o=m.get(e),l=void 0;if(o||m.set(e,o=new Set),!o.has(a)){if(u.$cssShim$){var s=(l=u.$cssShim$.createHostStyle(t,a,i,!!(10&n.$flags$)))["s-sc"];s&&(a=s,o=null)}else(l=f.createElement("style")).innerHTML=i;e.insertBefore(l,e.querySelector("link")),o&&o.add(a)}}else e.adoptedStyleSheets.includes(i)||(e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i]));return a}(c&&r.shadowRoot?r.shadowRoot:r.getRootNode(),n,e.$modeName$,r);10&t&&(r["s-sc"]=i,r.classList.add(i+"-h")),a()},w=function(e,n){return"sc-"+e.$tagName$},S={},x=function(e){return"object"===(e=typeof e)||"function"===e},C="undefined"!=typeof Deno,N=!(C||"undefined"==typeof global||"function"!=typeof require||!global.process||"string"!=typeof __filename||global.origin&&"string"==typeof global.origin),M=(C&&Deno.build.os,N?process.cwd:C&&Deno.cwd,N?process.exit:C&&Deno.exit,e("h",(function(e,n){for(var r=[],t=2;t<arguments.length;t++)r[t-2]=arguments[t];var a=null,i=!1,o=!1,l=[],s=function(n){for(var r=0;r<n.length;r++)a=n[r],Array.isArray(a)?s(a):null!=a&&"boolean"!=typeof a&&((i="function"!=typeof e&&!x(a))&&(a=String(a)),i&&o?l[l.length-1].$text$+=a:l.push(i?P(null,a):a),o=i)};if(s(r),n){var f=n.className||n.class;f&&(n.class="object"!=typeof f?f:Object.keys(f).filter((function(e){return f[e]})).join(" "))}var u=P(e,null);return u.$attrs$=n,l.length>0&&(u.$children$=l),u}))),P=function(e,n){var r={$flags$:0,$tag$:e,$text$:n,$elm$:null,$children$:null,$attrs$:null};return r},O={},A=function(e,n,r,t,a,i){if(r!==t){var o=me(e,n),s=n.toLowerCase();if("class"===n){var f=e.classList,c=B(r),$=B(t);f.remove.apply(f,c.filter((function(e){return e&&!$.includes(e)}))),f.add.apply(f,$.filter((function(e){return e&&!c.includes(e)})))}else o||"o"!==n[0]||"n"!==n[1]||(n="-"===n[2]?n.slice(3):me(l,s)?s.slice(2):s[2]+n.slice(3),r&&u.rel(e,n,r,!1),t&&u.ael(e,n,t,!1))}},T=/\s/,B=function(e){return e?e.split(T):[]},U=function(e,n,r,t){var a=11===n.$elm$.nodeType&&n.$elm$.host?n.$elm$.host:n.$elm$,i=e&&e.$attrs$||S,o=n.$attrs$||S;for(t in i)t in o||A(a,t,i[t],void 0);for(t in o)A(a,t,i[t],o[t])},I=function(e,n,r,t){var l,s,i=n.$children$[r],o=0;if(null!==i.$text$)l=i.$elm$=f.createTextNode(i.$text$);else if(l=i.$elm$=f.createElement(i.$tag$),U(null,i),function(e){return null!=e}(a)&&l["s-si"]!==a&&l.classList.add(l["s-si"]=a),i.$children$)for(o=0;o<i.$children$.length;++o)(s=I(e,i,o))&&l.appendChild(s);return l},H=function(e,n,r,t,a,o){var s,l=e;for(l.shadowRoot&&l.tagName===i&&(l=l.shadowRoot);a<=o;++a)t[a]&&(s=I(null,r,a))&&(t[a].$elm$=s,l.insertBefore(s,n))},z=function(e,n,r,t,a){for(;n<=r;++n)(t=e[n])&&t.$elm$.remove()},D=function(e,n){return e.$tag$===n.$tag$},V=function(e,n){var r=n.$elm$=e.$elm$,t=e.$children$,a=n.$children$,i=n.$text$;null===i?(U(e,n),null!==t&&null!==a?function(e,n,r,t){for(var $,a=0,i=0,o=n.length-1,l=n[0],s=n[o],f=t.length-1,u=t[0],c=t[f];a<=o&&i<=f;)null==l?l=n[++a]:null==s?s=n[--o]:null==u?u=t[++i]:null==c?c=t[--f]:D(l,u)?(V(l,u),l=n[++a],u=t[++i]):D(s,c)?(V(s,c),s=n[--o],c=t[--f]):D(l,c)?(V(l,c),e.insertBefore(l.$elm$,s.$elm$.nextSibling),l=n[++a],c=t[--f]):D(s,u)?(V(s,u),e.insertBefore(s.$elm$,l.$elm$),s=n[--o],u=t[++i]):($=I(n&&n[i],r,i),u=t[++i],$&&l.$elm$.parentNode.insertBefore($,l.$elm$));a>o?H(e,null==t[f+1]?null:t[f+1].$elm$,r,t,i,f):i>f&&z(n,a,o)}(r,t,n,a):null!==a?(null!==e.$text$&&(r.textContent=""),H(r,null,n,a,0,a.length-1)):null!==t&&z(t,0,t.length-1)):e.$text$!==i&&(r.data=i)},W=function(e,n){var r=e.$hostElement$,t=e.$vnode$||P(null,null),o=function(e){return e&&e.$tag$===O}(n)?n:M(null,null,n);i=r.tagName,o.$tag$=null,o.$flags$|=4,e.$vnode$=o,o.$elm$=t.$elm$=r.shadowRoot||r,a=r["s-sc"],V(t,o)},J=(e("c",(function(e,n,r){var t=function(e){return de(e).$hostElement$}(e);return{emit:function(e){return J(t,n,{bubbles:!!(4&r),composed:!!(2&r),cancelable:!!(1&r),detail:e})}}})),function(e,n,r){var t=u.ce(n,r);return e.dispatchEvent(t),t}),K=function(e,n){n&&!e.$onRenderResolve$&&n["s-p"]&&n["s-p"].push(new Promise((function(n){return e.$onRenderResolve$=n})))},Q=function(e,n){if(e.$flags$|=16,!(4&e.$flags$)){K(e,e.$ancestorComponent$);return Ee((function(){return X(e,n)}))}e.$flags$|=512},X=function(e,n){var r=h(0,e.$cmpMeta$.$tagName$),t=e.$lazyInstance$;return r(),te(void 0,(function(){return Y(e,t,n)}))},Y=function(e,n,r){var t=e.$hostElement$,a=h(0,e.$cmpMeta$.$tagName$),i=t["s-rc"];r&&b(e);var o=h(0,e.$cmpMeta$.$tagName$);W(e,Z(e,n)),u.$cssShim$&&u.$cssShim$.updateHost(t),i&&(i.map((function(e){return e()})),t["s-rc"]=void 0),o(),a();var l=t["s-p"],s=function(){return ee(e)};0===l.length?s():(Promise.all(l).then(s),e.$flags$|=4,l.length=0)},Z=function(e,n){try{n=n.render(),e.$flags$&=-17,e.$flags$|=2}catch(r){ge(r)}return n},ee=function(e){var n=e.$cmpMeta$.$tagName$,r=e.$hostElement$,t=h(0,n),a=e.$ancestorComponent$;64&e.$flags$?t():(e.$flags$|=64,ae(r),t(),e.$onReadyResolve$(r),a||re()),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),512&e.$flags$&&Ne((function(){return Q(e,!1)})),e.$flags$&=-517},re=function(e){ae(f.documentElement),Ne((function(){return J(l,"appload",{detail:{namespace:t}})}))},te=function(e,n){return e&&e.then?e.then(n):n()},ae=function(e){return e.classList.add("hydrated")},le=function(e,n,r,t){var a=de(e),i=a.$instanceValues$.get(n),o=a.$flags$,l=a.$lazyInstance$;r=function(e,n){return null==e||x(e)?e:4&n?"false"!==e&&(""===e||!!e):1&n?String(e):e}(r,t.$members$[n][0]),8&o&&void 0!==i||r===i||(a.$instanceValues$.set(n,r),l&&2==(18&o)&&Q(a,!1))},se=function(e,n,r){if(n.$members$){var t=Object.entries(n.$members$),a=e.prototype;if(t.map((function(e){var t=e[0],i=e[1][0];(31&i||2&r&&32&i)&&Object.defineProperty(a,t,{get:function(){return function(e,n){return de(e).$instanceValues$.get(n)}(this,t)},set:function(e){le(this,t,e,n)},configurable:!0,enumerable:!0})})),1&r){var i=new Map;a.attributeChangedCallback=function(e,n,r){var t=this;u.jmp((function(){var n=i.get(e);t[n]=(null!==r||"boolean"!=typeof t[n])&&r}))},e.observedAttributes=t.filter((function(e){e[0];return 15&e[1][0]})).map((function(e){var n=e[0],t=e[1][1]||n;return i.set(t,n),t}))}}return e},fe=function(e,t,a,i,o){return __awaiter(r,void 0,void 0,(function(){var e,r,i,l,s,f,u;return __generator(this,(function(c){switch(c.label){case 0:return 0!=(32&t.$flags$)?[3,5]:(t.$flags$|=32,(o=be(a)).then?(e=function(){},[4,o]):[3,2]);case 1:o=c.sent(),e(),c.label=2;case 2:o.isProxied||(se(o,a,2),o.isProxied=!0),r=h(0,a.$tagName$),t.$flags$|=8;try{new o(t)}catch($){ge($)}return t.$flags$&=-9,r(),o.style?(i=o.style,l=w(a),we.has(l)?[3,5]:(s=h(0,a.$tagName$),8&a.$flags$?[4,n.import("./p-7f0a8d9c.system.js").then((function(e){return e.scopeCss(i,l,!1)}))]:[3,4])):[3,5];case 3:i=c.sent(),c.label=4;case 4:!function(e,n,r){var t=we.get(e);v&&r?(t=t||new CSSStyleSheet).replace(n):t=n,we.set(e,t)}(l,i,!!(1&a.$flags$)),s(),c.label=5;case 5:return f=t.$ancestorComponent$,u=function(){return Q(t,!0)},f&&f["s-rc"]?f["s-rc"].push(u):u(),[2]}}))}))},ve=(e("b",(function(e,n){void 0===n&&(n={});var p,r=h(),t=[],a=n.exclude||[],i=l.customElements,o=f.head,s=o.querySelector("meta[charset]"),$=f.createElement("style"),v=[],m=!0;Object.assign(u,n),u.$resourcesUrl$=new URL(n.resourcesUrl||"./",f.baseURI).href,e.map((function(e){return e[1].map((function(n){var r={$flags$:n[0],$tagName$:n[1],$members$:n[2],$listeners$:n[3]};r.$members$=n[2],!c&&1&r.$flags$&&(r.$flags$|=8);var o=r.$tagName$,l=function(e){function n(n){var t=e.call(this,n)||this;return pe(n=t,r),1&r.$flags$&&(c?n.attachShadow({mode:"open"}):"shadowRoot"in n||(n.shadowRoot=n)),t}return __extends(n,e),n.prototype.connectedCallback=function(){var e=this;p&&(clearTimeout(p),p=null),m?v.push(this):u.jmp((function(){return function(e){if(0==(1&u.$flags$)){var n=de(e),r=n.$cmpMeta$,t=h(0,r.$tagName$);if(!(1&n.$flags$)){n.$flags$|=1;for(var a=e;a=a.parentNode||a.host;)if(a["s-p"]){K(n,n.$ancestorComponent$=a);break}r.$members$&&Object.entries(r.$members$).map((function(n){var r=n[0];if(31&n[1][0]&&e.hasOwnProperty(r)){var a=e[r];delete e[r],e[r]=a}})),Ne((function(){return fe(0,n,r)}))}t()}}(e)}))},n.prototype.disconnectedCallback=function(){var e=this;u.jmp((function(){return function(e){if(0==(1&u.$flags$)){de(e);u.$cssShim$&&u.$cssShim$.removeHost(e)}}(e)}))},n.prototype.forceUpdate=function(){!function(e){var n=de(e),r=n.$hostElement$.isConnected;r&&2==(18&n.$flags$)&&Q(n,!1)}(this)},n.prototype.componentOnReady=function(){return de(this).$onReadyPromise$},n}(HTMLElement);r.$lazyBundleId$=e[0],a.includes(o)||i.get(o)||(t.push(o),i.define(o,se(l,r,1)))}))})),$.innerHTML=t+"{visibility:hidden}.hydrated{visibility:inherit}",$.setAttribute("data-styles",""),o.insertBefore($,s?s.nextSibling:o.firstChild),m=!1,v.length?v.map((function(e){return e.connectedCallback()})):u.jmp((function(){return p=setTimeout(re,30)})),r()})),new WeakMap),de=function(e){return ve.get(e)},pe=(e("r",(function(e,n){return ve.set(n.$lazyInstance$=e,n)})),function(e,n){var r={$flags$:0,$hostElement$:e,$cmpMeta$:n,$instanceValues$:new Map};return r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e})),e["s-p"]=[],e["s-rc"]=[],ve.set(e,r)}),me=function(e,n){return n in e},ge=function(e){return console.error(e)},ye=new Map,be=function(e,r,t){var a=e.$tagName$.replace(/-/g,"_"),i=e.$lazyBundleId$,o=ye.get(i);return o?o[a]:n.import("./"+i+".entry.js").then((function(e){return ye.set(i,e),e[a]}),ge)},we=new Map,Se=[],_e=[],xe=function(e){for(var n=0;n<e.length;n++)try{e[n](performance.now())}catch(r){ge(r)}e.length=0},Ce=function(){xe(Se),xe(_e),(o=Se.length>0)&&u.raf(Ce)},Ne=function(e){return $().then(e)},Ee=function(e,n){return function(r){e.push(r),o||(o=!0,n&&4&u.$flags$?Ne(Ce):u.raf(Ce))}}(_e,!0)}}}));