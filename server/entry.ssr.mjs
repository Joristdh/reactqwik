import{j as _,_ as _e,a as ke,F as M,s as xe,c as O,i as C,b as j,d as ue,e as je,u as Y,f as V,g as S,S as Se,h as Ee,k as F,l as Ie,m as $,n as I,o as Ce,p as Ae,q as Ne,r as me,t as A,v as ze,w as pe,x as Le,y as le,z as Re,A as B}from"./assets/@qwik-city-plan-f09311e0.mjs";/**
 * @license
 * @builder.io/qwik/server 1.2.4
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */var De=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,n)=>(typeof require<"u"?require:e)[n]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+t+'" is not supported')});function Te(t,e){const n=e==null?void 0:e.mapper,s=t.symbolMapper?t.symbolMapper:i=>{var c;if(n){const r=H(i),a=n[r];if(!a){if((c=globalThis.__qwik_reg_symbols)==null?void 0:c.has(r))return[i,"_"];console.error("Cannot resolve symbol",i,"in",n)}return a}};return{isServer:!0,async importSymbol(i,c,r){var w;const a=H(r),u=(w=globalThis.__qwik_reg_symbols)==null?void 0:w.get(a);if(u)return u;let d=String(c);d.endsWith(".js")||(d+=".js");const p=De(d);if(!(r in p))throw new Error(`Q-ERROR: missing symbol '${r}' in module '${d}'.`);return p[r]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:i=>new Promise(c=>{setTimeout(()=>{c(i())})}),chunkForSymbol(i){return s(i,n)}}}async function Pe(t,e){const n=Te(t,e);xe(n)}var H=t=>{const e=t.lastIndexOf("_");return e>-1?t.slice(e+1):t};function W(){if(typeof performance>"u")return()=>0;const t=performance.now();return()=>(performance.now()-t)/1e6}function fe(t){let e=t.base;return typeof t.base=="function"&&(e=t.base(t)),typeof e=="string"?(e.endsWith("/")||(e+="/"),e):"/build/"}var Fe='((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(r.href.split("#")[0]);l(o);const p=(await b)[c],u=e[n];if(t.isConnected)try{e[n]=[t,s,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await p(s,t)}finally{e[n]=u}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},u=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),s.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),v=t=>{for(const n of t)s.has(n)||(q(e,n,p,!0),q(o,n,u),s.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);',Me=`(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events =  new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const getAttribute = (el, name) => el.getAttribute(name);
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === getAttribute(script, "type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/g, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = getAttribute(element, attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(getAttribute(container, "q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    const module = import(url.href.split("#")[0]);
                    resolveContainer(container);
                    const handler = (await module)[symbolName];
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture,
            passive: !1
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`,Oe='((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(r.href.split("#")[0]);l(o);const p=(await b)[c],u=e[n];if(t.isConnected)try{e[n]=[t,s,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await p(s,t)}finally{e[n]=u}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},u=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),s.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),v=t=>{for(const n of t)s.has(n)||(q(e,n,p,!0),q(o,n,u),s.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);',Qe=`(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events = new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const getAttribute = (el, name) => el.getAttribute(name);
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === getAttribute(script, "type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/g, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = getAttribute(element, attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(getAttribute(container, "q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    const module = import(url.href.split("#")[0]);
                    resolveContainer(container);
                    const handler = (await module)[symbolName];
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture,
            passive: !1
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`;function Ue(t={}){return Array.isArray(t.events)&&t.events.length>0?(t.debug?Qe:Oe).replace("window.qEvents",JSON.stringify(t.events)):t.debug?Me:Fe}function $e(t,e,n){if(!n)return[];const s=e.prefetchStrategy,o=fe(e);if(s!==null){if(!s||!s.symbolsToPrefetch||s.symbolsToPrefetch==="auto")return Be(t,n,o);if(typeof s.symbolsToPrefetch=="function")try{return s.symbolsToPrefetch({manifest:n.manifest})}catch(i){console.error("getPrefetchUrls, symbolsToPrefetch()",i)}}return[]}function Be(t,e,n){const s=[],o=t==null?void 0:t.qrls,{mapper:i,manifest:c}=e,r=new Map;if(Array.isArray(o))for(const a of o){const u=a.getHash(),d=i[u];d&&he(c,r,s,n,d[1])}return s}function he(t,e,n,s,o){const i=s+o;let c=e.get(i);if(!c){c={url:i,imports:[]},e.set(i,c);const r=t.bundles[o];if(r&&Array.isArray(r.imports))for(const a of r.imports)he(t,e,c.imports,s,a)}n.push(c)}function We(t){if(t!=null&&t.mapping!=null&&typeof t.mapping=="object"&&t.symbols!=null&&typeof t.symbols=="object"&&t.bundles!=null&&typeof t.bundles=="object")return t}function J(){let o=`const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;return o+="w.postMessage(u.map(u=>new URL(u,origin)+''));",o+="w.onmessage=()=>{w.terminate()};",o}function Ke(t){const e={bundles:Q(t).map(n=>n.split("/").pop())};return`document.dispatchEvent(new CustomEvent("qprefetch",{detail:${JSON.stringify(e)}}))`}function Q(t){const e=[],n=s=>{if(Array.isArray(s))for(const o of s)e.includes(o.url)||(e.push(o.url),n(o.imports))};return n(t),e}function He(t){const e=new Map;let n=0;const s=(r,a)=>{if(Array.isArray(r))for(const u of r){const d=e.get(u.url)||0;e.set(u.url,d+1),n++,a.has(u.url)||(a.add(u.url),s(u.imports,a))}},o=new Set;for(const r of t)o.clear(),s(r.imports,o);const i=n/e.size*2,c=Array.from(e.entries());return c.sort((r,a)=>a[1]-r[1]),c.slice(0,5).filter(r=>r[1]>i).map(r=>r[0])}function Je(t,e,n){const s=Ge(t==null?void 0:t.implementation),o=[];return s.prefetchEvent==="always"&&Ye(o,e,n),s.linkInsert==="html-append"&&Ve(o,e,s),s.linkInsert==="js-append"?Xe(o,e,s,n):s.workerFetchInsert==="always"&&Ze(o,e,n),o.length>0?_(M,{children:o}):null}function Ye(t,e,n){const s=He(e);for(const o of s)t.push(_("link",{rel:"modulepreload",href:o,nonce:n}));t.push(_("script",{dangerouslySetInnerHTML:Ke(e),nonce:n}))}function Ve(t,e,n){const s=Q(e),o=n.linkRel||"prefetch";for(const i of s){const c={};c.href=i,c.rel=o,(o==="prefetch"||o==="preload")&&i.endsWith(".js")&&(c.as="script"),t.push(_("link",c,void 0))}}function Xe(t,e,n,s){const o=n.linkRel||"prefetch";let i="";n.workerFetchInsert==="no-link-support"&&(i+="let supportsLinkRel = true;"),i+=`const u=${JSON.stringify(Q(e))};`,i+="u.map((u,i)=>{",i+="const l=document.createElement('link');",i+='l.setAttribute("href",u);',i+=`l.setAttribute("rel","${o}");`,n.workerFetchInsert==="no-link-support"&&(i+="if(i===0){",i+="try{",i+=`supportsLinkRel=l.relList.supports("${o}");`,i+="}catch(e){}",i+="}"),i+="document.body.appendChild(l);",i+="});",n.workerFetchInsert==="no-link-support"&&(i+="if(!supportsLinkRel){",i+=J(),i+="}"),n.workerFetchInsert==="always"&&(i+=J()),t.push(_("script",{type:"module",dangerouslySetInnerHTML:i,nonce:s}))}function Ze(t,e,n){let s=`const u=${JSON.stringify(Q(e))};`;s+=J(),t.push(_("script",{type:"module",dangerouslySetInnerHTML:s,nonce:n}))}function Ge(t){return t&&typeof t=="object"?t:et}var et={linkInsert:null,linkRel:null,workerFetchInsert:null,prefetchEvent:"always"},tt="<!DOCTYPE html>";async function nt(t,e){var P;let n=e.stream,s=0,o=0,i=0,c=0,r="",a;const u=((P=e.streaming)==null?void 0:P.inOrder)??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},d=e.containerTagName??"html",p=e.containerAttributes??{},w=n,E=W(),g=fe(e),b=st(e.manifest);function m(){r&&(w.write(r),r="",s=0,i++,i===1&&(c=E()))}function y(h){const k=h.length;s+=k,o+=k,r+=h}switch(u.strategy){case"disabled":n={write:y};break;case"direct":n=w;break;case"auto":let h=0,k=!1;const X=u.maximunChunk??0,U=u.maximunInitialChunk??0;n={write(D){D==="<!--qkssr-f-->"?k||(k=!0):D==="<!--qkssr-pu-->"?h++:D==="<!--qkssr-po-->"?h--:y(D),h===0&&(k||s>=(i===0?U:X))&&(k=!1,m())}};break}d==="html"?n.write(tt):(n.write("<!--cq-->"),e.qwikLoader?(e.qwikLoader.include===void 0&&(e.qwikLoader.include="never"),e.qwikLoader.position===void 0&&(e.qwikLoader.position="bottom")):e.qwikLoader={include:"never"}),e.manifest||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."),await Pe(e,b);const v=b==null?void 0:b.manifest.injections,l=v?v.map(h=>_(h.tag,h.attributes??{})):void 0,f=W(),q=[];let z=0,L=0;await _e(t,{stream:n,containerTagName:d,containerAttributes:p,serverData:e.serverData,base:g,beforeContent:l,beforeClose:async(h,k,X,U)=>{var te,ne,se,oe,ie,re,ae;z=f();const D=W();a=await ke(h,k,void 0,U);const N=[];if(e.prefetchStrategy!==null){const x=$e(a,e,b);if(x.length>0){const ce=Je(e.prefetchStrategy,x,(te=e.serverData)==null?void 0:te.nonce);ce&&N.push(ce)}}const ge=JSON.stringify(a.state,void 0,void 0);N.push(_("script",{type:"qwik/json",dangerouslySetInnerHTML:ot(ge),nonce:(ne=e.serverData)==null?void 0:ne.nonce})),a.funcs.length>0&&N.push(_("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:rt(a.funcs),nonce:(se=e.serverData)==null?void 0:se.nonce}));const qe=!a||a.mode!=="static",Z=((oe=e.qwikLoader)==null?void 0:oe.include)??"auto",G=Z==="always"||Z==="auto"&&qe;if(G){const x=Ue({events:(ie=e.qwikLoader)==null?void 0:ie.events,debug:e.debug});N.push(_("script",{id:"qwikloader",dangerouslySetInnerHTML:x,nonce:(re=e.serverData)==null?void 0:re.nonce}))}const ee=Array.from(k.$events$,x=>JSON.stringify(x));if(ee.length>0){let x=`window.qwikevents.push(${ee.join(", ")})`;G||(x=`window.qwikevents||=[];${x}`),N.push(_("script",{dangerouslySetInnerHTML:x,nonce:(ae=e.serverData)==null?void 0:ae.nonce}))}return it(q,h),L=D(),_(M,{children:N})},manifestHash:(b==null?void 0:b.manifest.manifestHash)||"dev"}),d!=="html"&&n.write("<!--/cq-->"),m();const R=a.resources.some(h=>h._cache!==1/0);return{prefetchResources:void 0,snapshotResult:a,flushes:i,manifest:b==null?void 0:b.manifest,size:o,isStatic:!R,timing:{render:z,snapshot:L,firstFlush:c},_symbols:q}}function st(t){if(t){if("mapper"in t)return t;if(t=We(t),t){const e={};return Object.entries(t.mapping).forEach(([n,s])=>{e[H(n)]=[n,s]}),{mapper:e,manifest:t}}}}var ot=t=>t.replace(/<(\/?script)/g,"\\x3C$1");function it(t,e){var n;for(const s of e){const o=(n=s.$componentQrl$)==null?void 0:n.getSymbol();o&&!t.includes(o)&&t.push(o)}}function rt(t){return`document.currentScript.qFuncs=[${t.join(`,
`)}]`}const at={manifestHash:"lrmfog",symbols:{s_02wMImzEAbk:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useTask",canonicalFilename:"s_02wmimzeabk",hash:"02wMImzEAbk",ctxKind:"function",ctxName:"useTask$",captures:!0,parent:"s_TxCFOy819ag",loc:[22140,30934]},s_0vphQYqOdZI:{origin:"components/router-head/router-head.tsx",displayName:"RouterHead_component",canonicalFilename:"s_0vphqyqodzi",hash:"0vphQYqOdZI",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[243,854]},s_8gdLBszqbaM:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component",canonicalFilename:"s_8gdlbszqbam",hash:"8gdLBszqbaM",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[32734,34360]},s_B0lqk5IDDy4:{origin:"routes/index.tsx",displayName:"routes_component",canonicalFilename:"s_b0lqk5iddy4",hash:"B0lqk5IDDy4",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[100,1285]},s_Nk9PlpjQm9Y:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component",canonicalFilename:"s_nk9plpjqm9y",hash:"Nk9PlpjQm9Y",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[44288,45639]},s_TxCFOy819ag:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component",canonicalFilename:"s_txcfoy819ag",hash:"TxCFOy819ag",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[18870,31221]},s_WmYC5H00wtI:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component",canonicalFilename:"s_wmyc5h00wti",hash:"WmYC5H00wtI",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[31352,32615]},s_e0ssiDXoeAM:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"RouterOutlet_component",canonicalFilename:"s_e0ssidxoeam",hash:"e0ssiDXoeAM",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[7908,8622]},s_tntnak2DhJ8:{origin:"root.tsx",displayName:"root_component",canonicalFilename:"s_tntnak2dhj8",hash:"tntnak2DhJ8",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[268,793]},s_DepWhmsXAew:{origin:"routes/index.tsx",displayName:"routes_component_useStyles",canonicalFilename:"s_depwhmsxaew",hash:"DepWhmsXAew",ctxKind:"function",ctxName:"useStyles$",captures:!1,parent:"s_B0lqk5IDDy4",loc:[133,620]},s_RPDJAz33WLA:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useStyles",canonicalFilename:"s_rpdjaz33wla",hash:"RPDJAz33WLA",ctxKind:"function",ctxName:"useStyles$",captures:!1,parent:"s_TxCFOy819ag",loc:[18925,18959]},s_A5bZC7WO00A:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"routeActionQrl_action_submit",canonicalFilename:"s_a5bzc7wo00a",hash:"A5bZC7WO00A",ctxKind:"function",ctxName:"submit",captures:!0,parent:null,loc:[35728,37362]},s_DyVc0YBIqQU:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"spa_init",canonicalFilename:"s_dyvc0ybiqqu",hash:"DyVc0YBIqQU",ctxKind:"function",ctxName:"spaInit",captures:!1,parent:null,loc:[1391,6849]},s_wOIPfiQ04l4:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"serverQrl_stuff",canonicalFilename:"s_woipfiq04l4",hash:"wOIPfiQ04l4",ctxKind:"function",ctxName:"stuff",captures:!0,parent:null,loc:[40350,42174]},s_BUbtvTyvVRE:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component_goto",canonicalFilename:"s_bubtvtyvvre",hash:"BUbtvTyvVRE",ctxKind:"function",ctxName:"goto",captures:!1,parent:"s_WmYC5H00wtI",loc:[31753,31814]},s_Nw7AXanxMWo:{origin:"routes/index.tsx",displayName:"routes_component__Fragment_main_onClick",canonicalFilename:"s_nw7axanxmwo",hash:"Nw7AXanxMWo",ctxKind:"eventHandler",ctxName:"onClick$",captures:!0,parent:"s_B0lqk5IDDy4",loc:[721,922]},s_eBQ0vFsFKsk:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_onPrefetch_event",canonicalFilename:"s_ebq0vfsfksk",hash:"eBQ0vFsFKsk",ctxKind:"function",ctxName:"event$",captures:!1,parent:"s_8gdLBszqbaM",loc:[33236,33299]},s_fX0bDjeJa0E:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_goto",canonicalFilename:"s_fx0bdjeja0e",hash:"fX0bDjeJa0E",ctxKind:"function",ctxName:"goto",captures:!0,parent:"s_TxCFOy819ag",loc:[20209,21528]},s_i1Cv0pYJNR0:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_handleClick_event",canonicalFilename:"s_i1cv0pyjnr0",hash:"i1Cv0pYJNR0",ctxKind:"function",ctxName:"event$",captures:!0,parent:"s_8gdLBszqbaM",loc:[33417,33932]},s_p9MSze0ojs4:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component_form_onSubmit",canonicalFilename:"s_p9msze0ojs4",hash:"p9MSze0ojs4",ctxKind:"function",ctxName:"_jsxS",captures:!0,parent:"s_Nk9PlpjQm9Y",loc:[44595,45292]}},mapping:{s_02wMImzEAbk:"q-49769a0b.js",s_0vphQYqOdZI:"q-58070ac5.js",s_8gdLBszqbaM:"q-1b6e7840.js",s_B0lqk5IDDy4:"q-76e58dec.js",s_Nk9PlpjQm9Y:"q-4c6f5f45.js",s_TxCFOy819ag:"q-49769a0b.js",s_WmYC5H00wtI:"q-254d627c.js",s_e0ssiDXoeAM:"q-2d952121.js",s_tntnak2DhJ8:"q-0ab4c00d.js",s_DepWhmsXAew:"q-76e58dec.js",s_RPDJAz33WLA:"q-49769a0b.js",s_A5bZC7WO00A:"q-fddd1870.js",s_DyVc0YBIqQU:"q-61e731e2.js",s_wOIPfiQ04l4:"q-7292d12f.js",s_BUbtvTyvVRE:"q-254d627c.js",s_Nw7AXanxMWo:"q-76e58dec.js",s_eBQ0vFsFKsk:"q-8f6caf29.js",s_fX0bDjeJa0E:"q-49769a0b.js",s_i1Cv0pYJNR0:"q-1b6e7840.js",s_p9MSze0ojs4:"q-4c6f5f45.js"},bundles:{"q-0ab4c00d.js":{size:543,imports:["q-65975d11.js","q-75927c15.js"],dynamicImports:["q-58070ac5.js"],origins:["src/components/router-head/router-head.tsx","src/entry_root.js","src/s_tntnak2dhj8.js"],symbols:["s_tntnak2DhJ8"]},"q-1b6e7840.js":{size:1135,imports:["q-65975d11.js","q-75927c15.js"],dynamicImports:["q-8f6caf29.js"],origins:["src/entry_Link.js","src/s_8gdlbszqbam.js","src/s_i1cv0pyjnr0.js"],symbols:["s_8gdLBszqbaM","s_i1Cv0pYJNR0"]},"q-254d627c.js":{size:787,imports:["q-65975d11.js","q-75927c15.js"],origins:["src/entry_QwikCityMockProvider.js","src/s_bubtvtyvvre.js","src/s_wmyc5h00wti.js"],symbols:["s_BUbtvTyvVRE","s_WmYC5H00wtI"]},"q-2d952121.js":{size:467,imports:["q-65975d11.js","q-75927c15.js"],origins:["src/entry_RouterOutlet.js","src/s_e0ssidxoeam.js"],symbols:["s_e0ssiDXoeAM"]},"q-483c9cd3.js":{size:125,imports:["q-65975d11.js"],dynamicImports:["q-8ea06850.js"],origins:["@qwik-city-entries"]},"q-49769a0b.js":{size:5427,imports:["q-65975d11.js","q-75927c15.js"],dynamicImports:["q-483c9cd3.js","q-fe27a54f.js"],origins:["@qwik-city-plan","src/entry_QwikCityProvider.js","src/s_02wmimzeabk.js","src/s_fx0bdjeja0e.js","src/s_rpdjaz33wla.js","src/s_txcfoy819ag.js"],symbols:["s_02wMImzEAbk","s_fX0bDjeJa0E","s_RPDJAz33WLA","s_TxCFOy819ag"]},"q-4c6f5f45.js":{size:1037,imports:["q-65975d11.js","q-75927c15.js"],origins:["src/entry_GetForm.js","src/s_nk9plpjqm9y.js","src/s_p9msze0ojs4.js"],symbols:["s_Nk9PlpjQm9Y","s_p9MSze0ojs4"]},"q-58070ac5.js":{size:671,imports:["q-65975d11.js","q-75927c15.js"],origins:["src/entry_RouterHead.js","src/s_0vphqyqodzi.js"],symbols:["s_0vphQYqOdZI"]},"q-61e731e2.js":{size:2272,origins:["src/entry_spaInit.js","src/s_dyvc0ybiqqu.js"],symbols:["s_DyVc0YBIqQU"]},"q-65975d11.js":{size:45867,origins:["node_modules/@builder.io/qwik/core.min.mjs"]},"q-7292d12f.js":{size:889,imports:["q-65975d11.js","q-75927c15.js"],origins:["src/entry_serverQrl.js","src/s_woipfiq04l4.js"],symbols:["s_wOIPfiQ04l4"]},"q-75927c15.js":{size:5782,imports:["q-65975d11.js"],dynamicImports:["q-2d952121.js","q-49769a0b.js","q-61e731e2.js"],origins:["@qwik-city-sw-register","node_modules/@builder.io/qwik-city/index.qwik.mjs"]},"q-76e58dec.js":{size:1441,imports:["q-65975d11.js"],origins:["src/entry_routes.js","src/s_b0lqk5iddy4.js","src/s_depwhmsxaew.js","src/s_nw7axanxmwo.js"],symbols:["s_B0lqk5IDDy4","s_DepWhmsXAew","s_Nw7AXanxMWo"]},"q-8ea06850.js":{size:2539,origins:["node_modules/@builder.io/qwik-city/service-worker.mjs","src/routes/service-worker.ts"]},"q-8f6caf29.js":{size:128,imports:["q-65975d11.js","q-75927c15.js"],origins:["src/s_ebq0vfsfksk.js"],symbols:["s_eBQ0vFsFKsk"]},"q-f9926d23.js":{size:202,imports:["q-65975d11.js"],dynamicImports:["q-0ab4c00d.js"],origins:["src/global.css","src/root.tsx"]},"q-fddd1870.js":{size:751,imports:["q-65975d11.js"],origins:["src/entry_routeActionQrl.js","src/s_a5bzc7wo00a.js"],symbols:["s_A5bZC7WO00A"]},"q-fe27a54f.js":{size:185,imports:["q-65975d11.js"],dynamicImports:["q-76e58dec.js"],origins:["src/routes/index.tsx"]}},injections:[{tag:"style",location:"head",attributes:{"data-src":"/build/q-f15186ce.css",dangerouslySetInnerHTML:`/*! tailwindcss v3.3.2 | MIT License | https://tailwindcss.com
 */*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.block{display:block}.flex{display:flex}.hidden{display:none}.h-screen{height:100vh}.cursor-pointer{cursor:pointer}.items-center{align-items:center}.justify-center{justify-content:center}:root{--qwik-dark-blue: #006ce9;--qwik-light-blue: #18b6f6;--qwik-light-purple: #ac7ff4;--qwik-dark-purple: #713fc2;--qwik-dirty-black: #1d2033;--text-color: #ffffff;--main-background: black;--header-background: var(--main-background);--footer-background: #0d0c25}html{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";background:#0d0c25;background:var(--footer-background)}body{padding:0;margin:0;color:#fff;color:var(--text-color);line-height:inherit}main{background:black;background:var(--main-background)}h1,h2,h3{color:#fff;margin:0}h1{font-size:3.2rem;text-align:center}h1 .highlight,h3 .highlight{color:#18b6f6;color:var(--qwik-light-blue)}h2{font-weight:400;font-size:2.4rem}h2 .highlight{font-weight:700}h3{font-size:2rem}@media screen and (min-width: 768px){h1{font-size:5rem}h2{font-size:3.4rem}h3{font-size:3rem}}a{text-decoration:none;color:#18b6f6;color:var(--qwik-light-blue)}a:hover{text-decoration:underline;color:#18b6f6;color:var(--qwik-light-blue)}code{background:rgba(230,230,230,.3);border-radius:4px;padding:2px 6px}ul{margin:0;padding-left:20px}.builder-footer a{color:#fff;color:var(--text-color);text-decoration:none}.builder-footer a:hover{color:#18b6f6;color:var(--qwik-light-blue);text-decoration:underline}html{-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}body{padding:0;line-height:inherit}
`}}],version:"1",options:{target:"client",buildMode:"production",entryStrategy:{type:"smart"}},platform:{qwik:"1.2.4",vite:"",rollup:"3.26.0",env:"node",os:"win32",node:"18.16.0"}},ct='((s,a,i,r)=>{i=(e,t)=>{t=document.querySelector("[q\\\\:base]"),t&&a.active&&a.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;a?i(t):t.bundles&&s.push(...t.bundles)}),navigator.serviceWorker.register("/service-worker.js").then(e=>{r=()=>{a=e,i({bundles:s})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&r()}):e.active&&r()}).catch(e=>console.error(e))})([])',lt=A("qc-s"),dt=A("qc-c"),be=A("qc-ic"),ye=A("qc-h"),we=A("qc-l"),ut=A("qc-n"),mt=A("qc-a"),pt=A("qc-ir"),ft=t=>{const e=window,n=location.pathname+location.search,s="_qCitySPA",o="_qCityHistoryPatch",i="_qCityBootstrap",c="_qCityInitPopstate",r="_qCityInitAnchors",a="_qCityInitVisibility",u="_qCityInitScroll",d="_qCityScrollEnabled",p="_qCityScrollDebounce",w="_qCityScroll",E=m=>{m&&e.scrollTo(m.x,m.y)},g=()=>{const m=document.documentElement;return{x:m.scrollLeft,y:m.scrollTop,w:Math.max(m.scrollWidth,m.clientWidth),h:Math.max(m.scrollHeight,m.clientHeight)}},b=m=>{const y=history.state||{};y[w]=m||g(),history.replaceState(y,"")};if(!e[s]&&!e[c]&&!e[r]&&!e[a]&&!e[u]){if(b(),e[c]=()=>{var m;if(!e[s]){if(e[d]=!1,clearTimeout(e[p]),n!==location.pathname+location.search){const v=t.closest("[q\\:container]").querySelector('a[q\\:key="AD_1"]');if(v){const l=v.closest("[q\\:container]"),f=v.cloneNode();f.setAttribute("q:nbs",""),f.style.display="none",l.appendChild(f),e[i]=f,f.click()}else location.reload()}else if(history.scrollRestoration==="manual"){const y=(m=history.state)==null?void 0:m[w];E(y),e[d]=!0}}},!e[o]){e[o]=!0;const m=history.pushState,y=history.replaceState,v=l=>(l===null?l={}:(l==null?void 0:l.constructor)!==Object&&(l={_data:l}),l._qCityScroll=l._qCityScroll||g(),l);history.pushState=(l,f,q)=>(l=v(l),m.call(history,l,f,q)),history.replaceState=(l,f,q)=>(l=v(l),y.call(history,l,f,q))}e[r]=m=>{if(e[s]||m.defaultPrevented)return;const y=m.target.closest("a[href]");if(y&&!y.hasAttribute("preventdefault:click")){const v=y.getAttribute("href"),l=new URL(location.href),f=new URL(v,l),q=f.origin===l.origin,z=f.pathname+f.search===l.pathname+l.search;if(q&&z)if(m.preventDefault(),f.href!==l.href&&history.pushState(null,"",f),!f.hash)f.href.endsWith("#")?window.scrollTo(0,0):(e[d]=!1,clearTimeout(e[p]),b({...g(),x:0,y:0}),location.reload());else{const L=f.hash.slice(1),R=document.getElementById(L);R&&R.scrollIntoView()}}},e[a]=()=>{!e[s]&&e[d]&&document.visibilityState==="hidden"&&b()},e[u]=()=>{e[s]||!e[d]||(clearTimeout(e[p]),e[p]=setTimeout(()=>{b(),e[p]=void 0},200))},e[d]=!0,setTimeout(()=>{addEventListener("popstate",e[c]),addEventListener("scroll",e[u],{passive:!0}),document.body.addEventListener("click",e[r]),e.navigation||document.addEventListener("visibilitychange",e[a],{passive:!0})},0)}},ht=C(ft,"s_DyVc0YBIqQU"),bt=()=>{{const[t,e]=Ne().chunkForSymbol(ht.getSymbol(),null),n=ze+"build/"+e;return`(${yt.toString()})('${n}','${t}');`}},yt=async(t,e)=>{var n;if(!window._qcs&&history.scrollRestoration==="manual"){window._qcs=!0;const s=(n=history.state)==null?void 0:n._qCityScroll;s&&window.scrollTo(s.x,s.y);const o=document.currentScript;(await import(t))[e](o)}},wt=()=>{const t=bt();je();const e=Y("nonce"),n=V(be);if(n.value&&n.value.length>0){const s=n.value.length;let o=null;for(let i=s-1;i>=0;i--)n.value[i].default&&(o=S(n.value[i].default,{children:o},1,"zl_0"));return S(M,{children:[o,j("script",{dangerouslySetInnerHTML:t},{nonce:e},null,3,null)]},1,"zl_1")}return Se},vt=O(C(wt,"s_e0ssiDXoeAM")),gt=(t,e,n,s)=>{const o=ve(),c={head:o,withLocale:r=>le(s,r),resolveValue:r=>{const a=r.__id;if(r.__brand==="server_loader"&&!(a in t.loaders))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");const u=t.loaders[a];if(u instanceof Promise)throw new Error("Loaders returning a function can not be referred to in the head function.");return u},...e};for(let r=n.length-1;r>=0;r--){const a=n[r]&&n[r].head;a&&(typeof a=="function"?de(o,le(s,()=>a(c))):typeof a=="object"&&de(o,a))}return c.head},de=(t,e)=>{typeof e.title=="string"&&(t.title=e.title),K(t.meta,e.meta),K(t.links,e.links),K(t.styles,e.styles),Object.assign(t.frontmatter,e.frontmatter)},K=(t,e)=>{if(Array.isArray(e))for(const n of e){if(typeof n.key=="string"){const s=t.findIndex(o=>o.key===n.key);if(s>-1){t[s]=n;continue}}t.push(n)}},ve=()=>({title:"",meta:[],links:[],styles:[],frontmatter:{}}),qt=(t,e)=>new URL(t,e.href),_t=(t,e)=>t.origin===e.origin,kt=(t,e)=>t.pathname+t.search===e.pathname+e.search,xt=()=>V(ye),jt=()=>V(we),St=()=>me(Y("qwikcity")),Et=":root{view-transition-name:none}",It=async(t,e)=>{const[n,s,o,i]=pe(),{type:c="link",forceReload:r=t===void 0,replaceState:a=!1,scroll:u=!0}=typeof e=="object"?e:{forceReload:e},d=o.value.dest,p=t===void 0?d:qt(t,i.url);if(_t(p,d)&&!(!r&&kt(p,d)))return o.value={type:c,dest:p,forceReload:r,replaceState:a,scroll:u},n.value=void 0,i.isNavigating=!0,new Promise(w=>{s.r=w})},Ct=({track:t})=>{const[e,n,s,o,i,c,r,a,u,d,p]=pe();async function w(){const[g,b]=t(()=>[d.value,e.value]),m=Le(""),y=p.url,v=b?"form":g.type;g.replaceState;let l,f,q=null;if(l=new URL(g.dest,p.url),q=i.loadedRoute,f=i.response,q){const[z,L,R]=q,T=L,P=T[T.length-1];p.prevUrl=y,p.url=l,p.params={...z},d.untrackedValue={type:v,dest:l};const h=gt(f,p,T,m);n.headings=P.headings,n.menu=R,s.value=me(T),o.links=h.links,o.meta=h.meta,o.styles=h.styles,o.title=h.title,o.frontmatter=h.frontmatter}}return w()},At=t=>{Ee(C(Et,"s_RPDJAz33WLA"));const e=St();if(!(e!=null&&e.params))throw new Error("Missing Qwik City Env Data");const n=Y("url");if(!n)throw new Error("Missing Qwik URL Env Data");const s=new URL(n),o=F({url:s,params:e.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),i={},c=Ie(F(e.response.loaders,{deep:!1})),r=$({type:"initial",dest:s,forceReload:!1,replaceState:!1,scroll:!0}),a=F(ve),u=F({headings:void 0,menu:void 0}),d=$(),p=e.response.action,w=p?e.response.loaders[p]:void 0,E=$(w?{id:p,data:e.response.formData,output:{result:w,status:e.response.status}}:void 0),g=C(It,"s_fX0bDjeJa0E",[E,i,r,o]);return I(dt,u),I(be,d),I(ye,a),I(we,o),I(ut,g),I(lt,c),I(mt,E),I(pt,r),Ce(C(Ct,"s_02wMImzEAbk",[E,u,d,a,e,g,c,i,t,r,o])),S(Ae,null,3,"qY_0")},Nt=O(C(At,"s_TxCFOy819ag")),zt=t=>j("script",{nonce:ue(t,"nonce")},{dangerouslySetInnerHTML:ct},null,3,"1Z_0"),Lt=()=>{const t=xt(),e=jt();return S(M,{children:[j("title",null,null,t.title,1,null),j("link",null,{href:Re(n=>n.url.href,[e],"p0.url.href"),rel:"canonical"},null,3,null),j("meta",null,{content:"width=device-width, initial-scale=1.0",name:"viewport"},null,3,null),j("link",null,{href:"/favicon.svg",rel:"icon",type:"image/svg+xml"},null,3,null),t.meta.map(n=>B("meta",{...n},null,0,n.key)),t.links.map(n=>B("link",{...n},null,0,n.key)),t.styles.map(n=>B("style",{...n.props,dangerouslySetInnerHTML:ue(n,"style")},null,0,n.key))]},1,"0D_0")},Rt=O(C(Lt,"s_0vphQYqOdZI"));const Dt=()=>S(Nt,{children:[j("head",null,null,[j("meta",null,{charSet:"utf-8"},null,3,null),j("link",null,{href:"/manifest.json",rel:"manifest"},null,3,null),S(Rt,null,3,"vp_0")],1,null),j("body",null,{lang:"en"},[S(vt,null,3,"vp_1"),S(zt,null,3,"vp_2")],1,null)]},1,"vp_3"),Tt=O(C(Dt,"s_tntnak2DhJ8"));function Ft(t){return nt(S(Tt,null,3,"Qb_0"),{manifest:at,...t,containerAttributes:{lang:"en-us",...t.containerAttributes}})}export{Ft as default};
