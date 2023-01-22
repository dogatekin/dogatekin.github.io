import{S as D,i as I,s as M,k as _,a as y,r as $,x as R,P as X,l as h,h as e,c as x,m as v,u as S,y as Y,p as g,F as z,b as f,z as j,n as q,f as C,t as H,A as L}from"../../../../chunks/index-adae72ea.js";import{P as A}from"../../../../chunks/P5-8547f19e.js";const F=n=>{let t,r,u,m,k=30,l=22,d=15;n.setup=function(){let a=n.createCanvas(128,128);n.frameRate(30),n.pixelDensity(2),t=()=>n.millis()/1e3,r=n.color(20),u=n.color(31,44,80),m=n.color(253,241,233),a.style("width","400px"),a.style("height","400px")},n.draw=function(){n.randomSeed(0),n.mouseIsPressed&&n.mouseX>=0&&n.mouseX<=n.width&&n.mouseY>=0&&n.mouseY<=n.height&&(k=n.mouseX,l=n.mouseY),n.background(r),n.noStroke(),n.fill(m),n.ellipse(k,l,2*d),n.noStroke(),n.fill(r),n.rect(0,50,n.width,78);for(let a=0;a<=78;a++){let o=78/(a+1);for(let w=0;w<=8*o;w++){let i=(n.random(160)+t()*150/o)%160-16,p=n.cos(2*n.PI*(n.random()+t()))*12/o;if(p>0){let b=49-a/2;(k-i)**2+(l-b)**2<d**2?n.stroke(m):n.stroke(u),n.line(i-p,a+50,i+p,a+50)}}}}};function K(n){let t,r,u,m,k,l,d,a,o,w=`<code class="language-lua"><span class="token function">cls</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">circfill</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token number">22</span><span class="token punctuation">,</span><span class="token number">15</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">)</span>
<span class="token punctuation">::</span>_<span class="token punctuation">::</span>
<span class="token function">flip</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">srand</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">rectfill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">50</span><span class="token punctuation">,</span><span class="token number">127</span><span class="token punctuation">,</span><span class="token number">127</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> y<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">77</span> <span class="token keyword">do</span>
z<span class="token operator">=</span><span class="token number">77</span><span class="token operator">/</span><span class="token punctuation">(</span>y<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>z<span class="token operator">*</span><span class="token number">8</span> <span class="token keyword">do</span>
x<span class="token operator">=</span><span class="token punctuation">(</span><span class="token function">rnd</span><span class="token punctuation">(</span><span class="token number">160</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">150</span><span class="token operator">/</span>z<span class="token punctuation">)</span><span class="token operator">%</span><span class="token number">160</span><span class="token operator">-</span><span class="token number">16</span>
w<span class="token operator">=</span><span class="token function">cos</span><span class="token punctuation">(</span><span class="token function">rnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">12</span><span class="token operator">/</span>z
<span class="token keyword">if</span><span class="token punctuation">(</span>w<span class="token operator">></span><span class="token number">0</span><span class="token punctuation">)</span><span class="token function">line</span><span class="token punctuation">(</span>x<span class="token operator">-</span>w<span class="token punctuation">,</span>y<span class="token operator">+</span><span class="token number">50</span><span class="token punctuation">,</span>x<span class="token operator">+</span>w<span class="token punctuation">,</span>y<span class="token operator">+</span><span class="token number">50</span><span class="token punctuation">,</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token function">pget</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span><span class="token number">49</span><span class="token operator">-</span>y<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">end</span>
<span class="token keyword">end</span>
<span class="token keyword">goto</span> _</code>`,i,p,b;return p=new A({props:{sketch:F,parentDivStyle:""}}),{c(){t=_("link"),r=y(),u=_("h1"),m=$("Modernizing a Tweetcart"),k=y(),l=_("p"),d=$("Tweetcarts are wonderful!"),a=y(),o=_("pre"),i=y(),R(p.$$.fragment),this.h()},l(s){const c=X("svelte-23r4eq",document.head);t=h(c,"LINK",{rel:!0,href:!0}),c.forEach(e),r=x(s),u=h(s,"H1",{});var P=v(u);m=S(P,"Modernizing a Tweetcart"),P.forEach(e),k=x(s),l=h(s,"P",{});var T=v(l);d=S(T,"Tweetcarts are wonderful!"),T.forEach(e),a=x(s),o=h(s,"PRE",{class:!0});var E=v(o);E.forEach(e),i=x(s),Y(p.$$.fragment,s),this.h()},h(){document.title="Doga Tekin on Tweetcarts",g(t,"rel","stylesheet"),g(t,"href","https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism-tomorrow.min.css"),g(o,"class","language-lua")},m(s,c){z(document.head,t),f(s,r,c),f(s,u,c),z(u,m),f(s,k,c),f(s,l,c),z(l,d),f(s,a,c),f(s,o,c),o.innerHTML=w,f(s,i,c),j(p,s,c),b=!0},p:q,i(s){b||(C(p.$$.fragment,s),b=!0)},o(s){H(p.$$.fragment,s),b=!1},d(s){e(t),s&&e(r),s&&e(u),s&&e(k),s&&e(l),s&&e(a),s&&e(o),s&&e(i),L(p,s)}}}const G={title:"Reviving a Tweetcart"};class J extends D{constructor(t){super(),I(this,t,null,K,M,{})}}export{J as default,G as metadata};
