import{C as CSS,p as plt,w as win,a as promiseResolve,d as doc,N as NAMESPACE}from"./index-9871887d.js";const noop=()=>{},IS_DENO_ENV="undefined"!=typeof Deno,IS_NODE_ENV=!(IS_DENO_ENV||"undefined"==typeof global||"function"!=typeof require||!global.process||"string"!=typeof __filename||global.origin&&"string"==typeof global.origin),IS_DENO_WINDOWS_ENV=IS_DENO_ENV&&"windows"===Deno.build.os,getCurrentDirectory=IS_NODE_ENV?process.cwd:IS_DENO_ENV?Deno.cwd:()=>"/",exit=IS_NODE_ENV?process.exit:IS_DENO_ENV?Deno.exit:noop,getDynamicImportFunction=namespace=>"__sc_import_"+namespace.replace(/\s|-/g,"_"),patchEsm=()=>CSS&&CSS.supports&&CSS.supports("color","var(--c)")?promiseResolve():import("./css-shim-a659079f.js").then(()=>(plt.$cssShim$=win.__cssshim)?plt.$cssShim$.i():0),patchBrowser=()=>{plt.$cssShim$=win.__cssshim;const scriptElm=Array.from(doc.querySelectorAll("script")).find(s=>new RegExp(`/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src)||s.getAttribute("data-stencil-namespace")===NAMESPACE),opts=scriptElm["data-opts"]||{};return"onbeforeload"in scriptElm&&!history.scrollRestoration?{then(){}}:(opts.resourcesUrl=new URL(".",new URL(scriptElm.getAttribute("data-resources-url")||scriptElm.src,win.location.href)).href,patchDynamicImport(opts.resourcesUrl,scriptElm),win.customElements?promiseResolve(opts):import("./dom-4061ceba.js").then(()=>opts))},patchDynamicImport=(base,orgScriptElm)=>{const importFunctionName="__sc_import_"+NAMESPACE.replace(/\s|-/g,"_");try{win[importFunctionName]=new Function("w","return import(w);//"+Math.random())}catch(e){const moduleMap=new Map;win[importFunctionName]=src=>{const url=new URL(src,base).href;let mod=moduleMap.get(url);if(!mod){const script=doc.createElement("script");script.type="module",script.crossOrigin=orgScriptElm.crossOrigin,script.src=URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`],{type:"application/javascript"})),mod=new Promise(resolve=>{script.onload=()=>{resolve(win[importFunctionName].m),script.remove()}}),moduleMap.set(url,mod),doc.head.appendChild(script)}return mod}}};export{patchEsm as a,patchBrowser as p};