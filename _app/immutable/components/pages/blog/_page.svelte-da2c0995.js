import{S as W,i as x,s as O,k as y,q as D,a as P,l as w,m as A,r as I,h,c as $,n as S,b as E,F as d,u as C,B as K,Q as U,w as H,P as Y,x as M,y as F,f as L,t as N,z as j}from"../../../chunks/index-bb3ebf24.js";import{c as q}from"../../../chunks/shared-23917130.js";function X(m,t,a){const s=m.slice();return s[5]=t[a],s}function Q(m){let t,a=m[5]+"",s;return{c(){t=y("span"),s=D(a),this.h()},l(i){t=w(i,"SPAN",{class:!0});var l=A(t);s=I(l,a),l.forEach(h),this.h()},h(){S(t,"class","tag svelte-ka6ie9")},m(i,l){E(i,t,l),d(t,s)},p(i,l){l&16&&a!==(a=i[5]+"")&&C(s,a)},d(i){i&&h(t)}}}function Z(m){let t,a,s,i,l,_,u,o,g,v,k,b,e,c=m[4],r=[];for(let n=0;n<c.length;n+=1)r[n]=Q(X(m,c,n));return{c(){t=y("div"),a=y("h2"),s=y("a"),i=D(m[1]),l=P(),_=y("p"),u=D(m[2]),o=P(),g=y("div"),v=y("span");for(let n=0;n<r.length;n+=1)r[n].c();k=P(),b=y("span"),e=D(m[3]),this.h()},l(n){t=w(n,"DIV",{class:!0});var p=A(t);a=w(p,"H2",{});var f=A(a);s=w(f,"A",{href:!0});var G=A(s);i=I(G,m[1]),G.forEach(h),f.forEach(h),l=$(p),_=w(p,"P",{});var R=A(_);u=I(R,m[2]),R.forEach(h),o=$(p),g=w(p,"DIV",{class:!0});var B=A(g);v=w(B,"SPAN",{class:!0});var T=A(v);for(let J=0;J<r.length;J+=1)r[J].l(T);T.forEach(h),k=$(B),b=w(B,"SPAN",{class:!0});var V=A(b);e=I(V,m[3]),V.forEach(h),B.forEach(h),p.forEach(h),this.h()},h(){S(s,"href",m[0]),S(v,"class","tags"),S(b,"class","date"),S(g,"class","metadata svelte-ka6ie9"),S(t,"class","post svelte-ka6ie9")},m(n,p){E(n,t,p),d(t,a),d(a,s),d(s,i),d(t,l),d(t,_),d(_,u),d(t,o),d(t,g),d(g,v);for(let f=0;f<r.length;f+=1)r[f].m(v,null);d(g,k),d(g,b),d(b,e)},p(n,[p]){if(p&2&&C(i,n[1]),p&1&&S(s,"href",n[0]),p&4&&C(u,n[2]),p&16){c=n[4];let f;for(f=0;f<c.length;f+=1){const G=X(n,c,f);r[f]?r[f].p(G,p):(r[f]=Q(G),r[f].c(),r[f].m(v,null))}for(;f<r.length;f+=1)r[f].d(1);r.length=c.length}p&8&&C(e,n[3])},i:K,o:K,d(n){n&&h(t),U(r,n)}}}function ee(m,t,a){let{link:s,title:i,desc:l,date:_,tags:u}=t;return m.$$set=o=>{"link"in o&&a(0,s=o.link),"title"in o&&a(1,i=o.title),"desc"in o&&a(2,l=o.desc),"date"in o&&a(3,_=o.date),"tags"in o&&a(4,u=o.tags)},[s,i,l,_,u]}class z extends W{constructor(t){super(),x(this,t,ee,Z,O,{link:0,title:1,desc:2,date:3,tags:4})}}function te(m){let t,a,s,i,l,_,u,o,g,v,k,b;return l=new z({props:{title:"Learning JAX by Implementing a Simple Language Model",link:q+"/blog/makemore-jax",desc:"Re-implementing makemore, Andrej Karpathy's simple implementation of a language model, in JAX.",tags:["Machine Learning","Python"],date:"25 April 2023"}}),u=new z({props:{title:"The Hypnotic World of Degenerate Spirals",link:q+"/blog/hypnotic-degenerate-spirals",desc:`An exploration of spirals and the interesting patterns produced when we fail to properly draw them
with code.`,tags:["Interactive","Exploration"],date:"07 May 2021"}}),g=new z({props:{title:"Actually Good Mobile Games",link:q+"/blog/good-mobile-games",desc:"Great games that I think stand out among the growing number of disappointing mobile titles.",tags:["Games","Recommendations"],date:"07 February 2021"}}),k=new z({props:{title:"Frustration in Hollow Knight and Celeste",link:q+"/blog/game-frustration",desc:"An analysis of how two of my favourite games manage (or fail to manage) player frustration.",tags:["Games","Game Design"],date:"07 August 2020"}}),{c(){t=P(),a=y("h1"),s=D("Blog"),i=P(),H(l.$$.fragment),_=P(),H(u.$$.fragment),o=P(),H(g.$$.fragment),v=P(),H(k.$$.fragment),this.h()},l(e){Y("svelte-1tvcoz6",document.head).forEach(h),t=$(e),a=w(e,"H1",{});var r=A(a);s=I(r,"Blog"),r.forEach(h),i=$(e),M(l.$$.fragment,e),_=$(e),M(u.$$.fragment,e),o=$(e),M(g.$$.fragment,e),v=$(e),M(k.$$.fragment,e),this.h()},h(){document.title="Doga Tekin | Blog"},m(e,c){E(e,t,c),E(e,a,c),d(a,s),E(e,i,c),F(l,e,c),E(e,_,c),F(u,e,c),E(e,o,c),F(g,e,c),E(e,v,c),F(k,e,c),b=!0},p:K,i(e){b||(L(l.$$.fragment,e),L(u.$$.fragment,e),L(g.$$.fragment,e),L(k.$$.fragment,e),b=!0)},o(e){N(l.$$.fragment,e),N(u.$$.fragment,e),N(g.$$.fragment,e),N(k.$$.fragment,e),b=!1},d(e){e&&h(t),e&&h(a),e&&h(i),j(l,e),e&&h(_),j(u,e),e&&h(o),j(g,e),e&&h(v),j(k,e)}}}class ne extends W{constructor(t){super(),x(this,t,null,te,O,{})}}export{ne as default};
