import{_ as b}from"./preload-helper.a4192956.js";import{s as D,f as S,g as w,h as E,d as m,j as c,i as k,N as p,w as _,L as P,o as j}from"./scheduler.5ca2d941.js";import{S as C,i as I}from"./index.92b17a0d.js";function L(r){let e,n,s;return{c(){e=S("div"),this.h()},l(a){e=w(a,"DIV",{style:!0,class:!0}),E(e).forEach(m),this.h()},h(){c(e,"style",r[0]),c(e,"class","m-0")},m(a,l){k(a,e,l),n||(s=p(r[1].call(null,e)),n=!0)},p(a,[l]){l&1&&c(e,"style",a[0])},i:_,o:_,d(a){a&&m(e),n=!1,s()}}}function O(r,e){return e.forEach(([n,s])=>r[n]=s),r}function V(r,e,n){let{target:s=void 0}=e,{sketch:a=void 0}=e,{parentDivStyle:l="display: block;"}=e,{debug:o=!1}=e,f;const u=P(),d={ref(){u("ref",s)},instance(){u("instance",f)}};function g(t){return n(2,s=t),{destroy(){n(2,s=void 0)}}}return j(async()=>{const t=await b(()=>import("./p5.min.2cb27465.js").then(i=>i.p),["./p5.min.2cb27465.js","./_commonjsHelpers.725317a4.js"],import.meta.url),{default:y}=t,h=Object.entries(t).filter(([i,v])=>v instanceof Function&&i[0]!=="_"&&i!=="default");o&&console.log("available p5 native classes",h),f=new y(i=>(i=O(i,h),o&&console.log("p5 instance",i),window._p5Instance=i,a(i)),s),d.ref(),d.instance()}),r.$$set=t=>{"target"in t&&n(2,s=t.target),"sketch"in t&&n(3,a=t.sketch),"parentDivStyle"in t&&n(0,l=t.parentDivStyle),"debug"in t&&n(4,o=t.debug)},[l,g,s,a,o]}class M extends C{constructor(e){super(),I(this,e,V,L,D,{target:2,sketch:3,parentDivStyle:0,debug:4})}}export{M as P};
