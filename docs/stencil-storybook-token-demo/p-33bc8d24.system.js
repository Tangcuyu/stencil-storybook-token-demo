System.register(["./p-35c1d9a9.system.js"],(function(r,e){"use strict";var t,n,o,s,i,c;return{setters:[function(r){t=r.C,n=r.p,o=r.w,s=r.a,i=r.d,c=r.N}],execute:function(){var u="undefined"!=typeof Deno,f=!(u||"undefined"==typeof global||"function"!=typeof require||!global.process||"string"!=typeof __filename||global.origin&&"string"==typeof global.origin),g=(u&&Deno.build.os,f?process.cwd:u&&Deno.cwd,f?process.exit:u&&Deno.exit,r("a",(function(){return t&&t.supports&&t.supports("color","var(--c)")?s():e.import("./p-03188b5b.system.js").then((function(){return(n.$cssShim$=o.__cssshim)?n.$cssShim$.i():0}))})),r("p",(function(){n.$cssShim$=o.__cssshim;var r=Array.from(i.querySelectorAll("script")).find((function(r){return new RegExp("/"+c+"(\\.esm)?\\.js($|\\?|#)").test(r.src)||r.getAttribute("data-stencil-namespace")===c})),t=r["data-opts"]||{};return"onbeforeload"in r&&!history.scrollRestoration?{then:function(){}}:(t.resourcesUrl=new URL(".",new URL(r.getAttribute("data-resources-url")||r.src,o.location.href)).href,g(t.resourcesUrl,r),o.customElements?s(t):e.import("./p-0b8ecd50.system.js").then((function(){return t})))})),function(r,e){var t=function(r){return"__sc_import_"+r.replace(/\s|-/g,"_")}(c);try{o[t]=new Function("w","return import(w);//"+Math.random())}catch(s){var n=new Map;o[t]=function(s){var c=new URL(s,r).href,a=n.get(c);if(!a){var u=i.createElement("script");u.type="module",u.crossOrigin=e.crossOrigin,u.src=URL.createObjectURL(new Blob(["import * as m from '"+c+"'; window."+t+".m = m;"],{type:"application/javascript"})),a=new Promise((function(r){u.onload=function(){r(o[t].m),u.remove()}})),n.set(c,a),i.head.appendChild(u)}return a}}})}}}));