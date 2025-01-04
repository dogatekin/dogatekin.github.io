import{s as O,e as y,t as z,a as $,c as w,f as A,j as B,d as h,b as P,l as S,i as E,k as _,z as F,n as K,D as Y,h as Z,g as ee}from"../chunks/scheduler.CW5rpwqv.js";import{S as Q,i as U,b as C,d as I,m as H,t as M,a as j,e as x}from"../chunks/index.CQDF92mg.js";import{e as X}from"../chunks/each.D6YF6ztN.js";import{b as L}from"../chunks/paths.EgR1Zyfa.js";function q(m,t,a){const s=m.slice();return s[5]=t[a],s}function W(m){let t,a=m[5]+"",s;return{c(){t=y("span"),s=z(a),this.h()},l(i){t=w(i,"SPAN",{class:!0});var l=A(t);s=B(l,a),l.forEach(h),this.h()},h(){S(t,"class","tag svelte-ka6ie9")},m(i,l){E(i,t,l),_(t,s)},p(i,l){l&16&&a!==(a=i[5]+"")&&F(s,a)},d(i){i&&h(t)}}}function te(m){let t,a,s,i,l,u,d,r,g,v,k,b,e,f=X(m[4]),c=[];for(let n=0;n<f.length;n+=1)c[n]=W(q(m,f,n));return{c(){t=y("div"),a=y("h2"),s=y("a"),i=z(m[1]),l=$(),u=y("p"),d=z(m[2]),r=$(),g=y("div"),v=y("span");for(let n=0;n<c.length;n+=1)c[n].c();k=$(),b=y("span"),e=z(m[3]),this.h()},l(n){t=w(n,"DIV",{class:!0});var p=A(t);a=w(p,"H2",{});var o=A(a);s=w(o,"A",{href:!0});var D=A(s);i=B(D,m[1]),D.forEach(h),o.forEach(h),l=P(p),u=w(p,"P",{});var R=A(u);d=B(R,m[2]),R.forEach(h),r=P(p),g=w(p,"DIV",{class:!0});var G=A(g);v=w(G,"SPAN",{class:!0});var T=A(v);for(let J=0;J<c.length;J+=1)c[J].l(T);T.forEach(h),k=P(G),b=w(G,"SPAN",{class:!0});var V=A(b);e=B(V,m[3]),V.forEach(h),G.forEach(h),p.forEach(h),this.h()},h(){S(s,"href",m[0]),S(v,"class","tags"),S(b,"class","date"),S(g,"class","metadata svelte-ka6ie9"),S(t,"class","post svelte-ka6ie9")},m(n,p){E(n,t,p),_(t,a),_(a,s),_(s,i),_(t,l),_(t,u),_(u,d),_(t,r),_(t,g),_(g,v);for(let o=0;o<c.length;o+=1)c[o]&&c[o].m(v,null);_(g,k),_(g,b),_(b,e)},p(n,[p]){if(p&2&&F(i,n[1]),p&1&&S(s,"href",n[0]),p&4&&F(d,n[2]),p&16){f=X(n[4]);let o;for(o=0;o<f.length;o+=1){const D=q(n,f,o);c[o]?c[o].p(D,p):(c[o]=W(D),c[o].c(),c[o].m(v,null))}for(;o<c.length;o+=1)c[o].d(1);c.length=f.length}p&8&&F(e,n[3])},i:K,o:K,d(n){n&&h(t),Y(c,n)}}}function ae(m,t,a){let{link:s,title:i,desc:l,date:u,tags:d}=t;return m.$$set=r=>{"link"in r&&a(0,s=r.link),"title"in r&&a(1,i=r.title),"desc"in r&&a(2,l=r.desc),"date"in r&&a(3,u=r.date),"tags"in r&&a(4,d=r.tags)},[s,i,l,u,d]}class N extends Q{constructor(t){super(),U(this,t,ae,te,O,{link:0,title:1,desc:2,date:3,tags:4})}}function ne(m){let t,a,s="Blog",i,l,u,d,r,g,v,k,b;return l=new N({props:{title:"Learning JAX by Implementing a Simple Language Model",link:L+"/blog/makemore-jax",desc:"Re-implementing makemore, Andrej Karpathy's simple implementation of a language model, in JAX.",tags:["Machine Learning","Python"],date:"25 April 2023"}}),d=new N({props:{title:"The Hypnotic World of Degenerate Spirals",link:L+"/blog/hypnotic-degenerate-spirals",desc:`An exploration of spirals and the interesting patterns produced when we fail to properly draw them
with code.`,tags:["Interactive","Exploration"],date:"07 May 2021"}}),g=new N({props:{title:"Actually Good Mobile Games",link:L+"/blog/good-mobile-games",desc:"Great games that I think stand out among the growing number of disappointing mobile titles.",tags:["Games","Recommendations"],date:"07 February 2021"}}),k=new N({props:{title:"Frustration in Hollow Knight and Celeste",link:L+"/blog/game-frustration",desc:"An analysis of how two of my favourite games manage (or fail to manage) player frustration.",tags:["Games","Game Design"],date:"07 August 2020"}}),{c(){t=$(),a=y("h1"),a.textContent=s,i=$(),C(l.$$.fragment),u=$(),C(d.$$.fragment),r=$(),C(g.$$.fragment),v=$(),C(k.$$.fragment),this.h()},l(e){Z("svelte-1tvcoz6",document.head).forEach(h),t=P(e),a=w(e,"H1",{"data-svelte-h":!0}),ee(a)!=="svelte-dbxyy8"&&(a.textContent=s),i=P(e),I(l.$$.fragment,e),u=P(e),I(d.$$.fragment,e),r=P(e),I(g.$$.fragment,e),v=P(e),I(k.$$.fragment,e),this.h()},h(){document.title="Doga Tekin | Blog"},m(e,f){E(e,t,f),E(e,a,f),E(e,i,f),H(l,e,f),E(e,u,f),H(d,e,f),E(e,r,f),H(g,e,f),E(e,v,f),H(k,e,f),b=!0},p:K,i(e){b||(M(l.$$.fragment,e),M(d.$$.fragment,e),M(g.$$.fragment,e),M(k.$$.fragment,e),b=!0)},o(e){j(l.$$.fragment,e),j(d.$$.fragment,e),j(g.$$.fragment,e),j(k.$$.fragment,e),b=!1},d(e){e&&(h(t),h(a),h(i),h(u),h(r),h(v)),x(l,e),x(d,e),x(g,e),x(k,e)}}}class re extends Q{constructor(t){super(),U(this,t,null,ne,O,{})}}export{re as component};
