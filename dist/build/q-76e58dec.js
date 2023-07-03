import{E as r,I as i,h as c,$ as l,w as n,c as a,x as u,_ as o,l as h}from"./q-65975d11.js";const _=()=>{r(a(()=>o(()=>Promise.resolve().then(()=>t),void 0),"s_DepWhmsXAew"));const e=i(0);return c(u,{children:l("main",null,{class:"cursor-pointer",onClick$:a(()=>o(()=>Promise.resolve().then(()=>t),void 0),"s_Nw7AXanxMWo",[e])},l("div",null,{class:"flex justify-center items-center h-screen"},[l("h1",null,{class:n(s=>({display:s.value===0}),[e])},"Press anywhere to start",3,null),l("span",null,{class:n(s=>({display:s.value===1}),[e])},"⇨",3,null),l("span",null,{class:n(s=>({display:s.value===2}),[e])},"⇦",3,null)],3,null),3,null)},3,"i8_0")},d=()=>{const[e]=h();e.value=4,setTimeout(()=>{e.value=Math.floor(Math.random()*2)+1},(Math.floor(Math.random()*3)+3)*1e3)},p=`
        main {
            height: 100vh;
            overflow: hidden;
        }

        h1 {
            display: none;
            user-select: none;

            &.display {
                display: block;§
            }
        }

        span {
            display: none;
            font-size: 25em;
            height: 100vh;
            line-height: 75vh;

            &.display {
                display: inline-block;
            }
        }
    `,t=Object.freeze(Object.defineProperty({__proto__:null,s_B0lqk5IDDy4:_,s_DepWhmsXAew:p,s_Nw7AXanxMWo:d},Symbol.toStringTag,{value:"Module"}));export{_ as s_B0lqk5IDDy4,p as s_DepWhmsXAew,d as s_Nw7AXanxMWo};
