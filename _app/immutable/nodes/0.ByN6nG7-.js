import{a as u,t as p,f as q}from"../chunks/disclose-version.vsm50v4b.js";import{a6 as P,ac as s,C as T,a4 as n,a5 as c,n as k,a2 as C,a3 as F,M as B,ah as I,Q as G,aA as H}from"../chunks/runtime.BuZwNH_C.js";import{s as K}from"../chunks/snippet.arQimYqW.js";import{p as $,b as U,c as W,d as M,a as N}from"../chunks/props.Bzzo57Z_.js";import{d as y}from"../chunks/events.0_9sBNQa.js";import{h as X}from"../chunks/svelte-head.BtpznEFT.js";import{s as r}from"../chunks/attributes.D2CezUye.js";import{b as l}from"../chunks/paths.Sbb-X4Pj.js";import{t as R}from"../chunks/class.Bvena8yX.js";import{w as Y,a as Z}from"../chunks/entry.B06DFSwO.js";import"../chunks/legacy.pBOXJg5E.js";import{i as ee}from"../chunks/lifecycle.B2Jf6Z8B.js";import{o as ae}from"../chunks/index-client.DVv9dE84.js";const te=!0,se="always",Ie=Object.freeze(Object.defineProperty({__proto__:null,prerender:te,trailingSlash:se},Symbol.toStringTag,{value:"Module"}));var oe=(o,e)=>e(!e()),re=p('<button class="text-gray-500 hover:text-gray-700 cursor-pointer mr-4 border-none focus:outline-none svelte-y5ffr1"><svg width="32" height="24" class="svelte-y5ffr1"><line id="top" x1="0" y1="2" x2="32" y2="2" class="svelte-y5ffr1"></line><line id="middle" x1="0" y1="12" x2="32" y2="12" class="svelte-y5ffr1"></line><line id="bottom" x1="0" y1="22" x2="32" y2="22" class="svelte-y5ffr1"></line></svg></button>');function le(o,e){let a=$(e,"open",15,!1);var t=re();t.__click=[oe,a],P(()=>R(t,"open",a())),u(o,t)}y(["click"]);const ie="dark-theme",ne=window.localStorage.getItem("theme")??ie,g=Y(ne);g.subscribe(o=>{window.localStorage.setItem("theme",o)});function O(o,e){e()=="dark-theme"?(M(g,"light-theme"),document.documentElement.classList.add("light-theme")):(M(g,"dark-theme"),document.documentElement.classList.remove("light-theme"))}var ce=q(`<script>
		if (document) {
			let theme = localStorage.getItem('theme') || 'dark-theme';
			if (theme === 'light-theme') {
				document.documentElement.classList.add('light-theme');
			}
		}
	<\/script><!---->`,1),ve=(o,e)=>e(!1),fe=p('<nav class="svelte-17o092z"><div id="left" class="svelte-17o092z"><a class="svelte-17o092z"><div id="brand" class="svelte-17o092z"><div id="logo-holder" class="svelte-17o092z"><img alt="Logo" id="logo" class="svelte-17o092z"></div> Doga Tekin</div></a> <div id="icons" class="svelte-17o092z"><a href="mailto:dotekin@gmail.com" class="svelte-17o092z"><i class="fas fa-envelope"></i></a> <a target="_blank" rel="noreferrer" href="https://github.com/dogatekin" class="svelte-17o092z"><i class="fab fa-github"></i></a> <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/dogatekin/" class="svelte-17o092z"><i class="fab fa-linkedin-in"></i></a>   <a class="toggler svelte-17o092z" role="button"><i class="fas fa-adjust"></i></a></div></div> <div id="links" class="svelte-17o092z"><a class="svelte-17o092z">Resume</a> <a class="svelte-17o092z">Projects</a> <a class="svelte-17o092z">Blog</a> <a class="svelte-17o092z">Loops</a> <a class="svelte-17o092z">Fun</a></div> <div id="mobile-buttons" class="svelte-17o092z"><a class="toggler svelte-17o092z" role="button"><i class="fas fa-adjust"></i></a> <!></div></nav>');function de(o,e){const a=U(),t=()=>W(g,"$theme",a);let v=$(e,"menu",15,!1);var f=fe();X(b=>{var A=ce(),_e=s(T(A));u(b,A)});var d=n(f),i=n(d);r(i,"href",`${l??""}/`),i.__click=[ve,v];var h=n(i),m=n(h),V=n(m);r(V,"src",`${l??""}/logo.svg`),c(m),k(),c(h),c(i);var z=s(i,2),D=s(n(z),6);D.__click=[O,t],c(z),c(d);var _=s(d,2),w=n(_);r(w,"href",`${l??""}/resume`);var x=s(w,2);r(x,"href",`${l??""}/projects`);var j=s(x,2);r(j,"href",`${l??""}/blog`);var S=s(j,2);r(S,"href",`${l??""}/loops`);var J=s(S,2);r(J,"href",`${l??""}/fun`),c(_);var L=s(_,2),E=n(L);E.__click=[O,t];var Q=s(E,2);le(Q,{get open(){return v()},set open(b){v(b)}}),c(L),c(f),u(o,f)}y(["click"]);var me=(o,e)=>e(!e()),he=p('<aside class="svelte-rfheuh"><div id="links" class="svelte-rfheuh"><a class="svelte-rfheuh">Resume</a> <a class="svelte-rfheuh">Projects</a> <a class="svelte-rfheuh">Blog</a> <a class="svelte-rfheuh">Loops</a> <a class="svelte-rfheuh">Fun</a></div> <div id="icons" class="svelte-rfheuh"><a href="mailto:dotekin@gmail.com" class="svelte-rfheuh"><i class="fas fa-envelope"></i></a> <a target="_blank" rel="noreferrer" href="https://github.com/dogatekin" class="svelte-rfheuh"><i class="fab fa-github"></i></a> <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/dogatekin/" class="svelte-rfheuh"><i class="fab fa-linkedin-in"></i></a></div></aside>');function ue(o,e){let a=$(e,"open",15,!1);var t=he();t.__click=[me,a];var v=n(t),f=n(v);r(f,"href",`${l??""}/resume`);var d=s(f,2);r(d,"href",`${l??""}/projects`);var i=s(d,2);r(i,"href",`${l??""}/blog`);var h=s(i,2);r(h,"href",`${l??""}/loops`);var m=s(h,2);r(m,"href",`${l??""}/fun`),c(v),k(2),c(t),P(()=>R(t,"open",a())),u(o,t)}y(["click"]);function ge(o,e){C(e,!1),ae(()=>{const a=document.createElement("script");a.async=!0,a.src="//gc.zgo.at/count.js",a.setAttribute("data-goatcounter","https://dogatekin.goatcounter.com/count"),a.setAttribute("data-goatcounter-settings",JSON.stringify({no_onload:!1}));const t=document.getElementById("content");t==null||t.appendChild(a)}),Z(({to:a})=>{window.goatcounter&&window.goatcounter.count({path:a.pathname})}),ee(),F()}var pe=p('<!> <!> <!> <main id="content"><!></main> <footer></footer>',1);function Me(o,e){C(e,!0);let a=H(!1);var t=pe(),v=T(t);ge(v,{});var f=s(v,2);de(f,{get menu(){return B(a)},set menu(m){I(a,N(m))}});var d=s(f,2);ue(d,{get open(){return B(a)},set open(m){I(a,N(m))}});var i=s(d,2),h=n(i);K(h,()=>e.children??G),c(i),k(2),u(o,t),F()}export{Me as component,Ie as universal};
