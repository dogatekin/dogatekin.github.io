import{a as k,t as P}from"../chunks/disclose-version.vsm50v4b.js";import"../chunks/legacy.pBOXJg5E.js";import{a2 as S,a3 as T,ac as p,a4 as h,n as f,a5 as d,$ as w}from"../chunks/runtime.BuZwNH_C.js";import{h as I}from"../chunks/svelte-head.BtpznEFT.js";import{s as c}from"../chunks/attributes.D2CezUye.js";import{i as E}from"../chunks/lifecycle.B2Jf6Z8B.js";import{o as O}from"../chunks/index-client.DVv9dE84.js";import{b as l}from"../chunks/paths.Sbb-X4Pj.js";function b(){return b=Object.assign?Object.assign.bind():function(i){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=t[s])}return i},b.apply(this,arguments)}var j={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(i){},onComplete:function(i){},preStringTyped:function(i,n){},onStringTyped:function(i,n){},onLastStringBackspaced:function(i){},onTypingPaused:function(i,n){},onTypingResumed:function(i,n){},onReset:function(i){},onStop:function(i,n){},onStart:function(i,n){},onDestroy:function(i){}},B=new(function(){function i(){}var n=i.prototype;return n.load=function(t,s,e){if(t.el=typeof e=="string"?document.querySelector(e):e,t.options=b({},j,s),t.isInput=t.el.tagName.toLowerCase()==="input",t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(g){return g.trim()}),t.stringsElement=typeof t.options.stringsElement=="string"?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var a=Array.prototype.slice.apply(t.stringsElement.children),r=a.length;if(r)for(var u=0;u<r;u+=1)t.strings.push(a[u].innerHTML.trim())}for(var o in t.strPos=0,t.currentElContent=this.getCurrentElContent(t),t.currentElContent&&t.currentElContent.length>0&&(t.strPos=t.currentElContent.length-1,t.strings.unshift(t.currentElContent)),t.sequence=[],t.strings)t.sequence[o]=o;t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.autoInsertCss=t.options.autoInsertCss,t.autoInsertCss&&(this.appendCursorAnimationCss(t),this.appendFadeOutAnimationCss(t))},n.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:t.contentType==="html"?t.el.innerHTML:t.el.textContent},n.appendCursorAnimationCss=function(t){var s="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+s+"]")){var e=document.createElement("style");e.setAttribute(s,"true"),e.innerHTML=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `,document.body.appendChild(e)}},n.appendFadeOutAnimationCss=function(t){var s="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+s+"]")){var e=document.createElement("style");e.setAttribute(s,"true"),e.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(e)}},i}()),C=new(function(){function i(){}var n=i.prototype;return n.typeHtmlChars=function(t,s,e){if(e.contentType!=="html")return s;var a=t.substring(s).charAt(0);if(a==="<"||a==="&"){var r;for(r=a==="<"?">":";";t.substring(s+1).charAt(0)!==r&&!(1+ ++s>t.length););s++}return s},n.backSpaceHtmlChars=function(t,s,e){if(e.contentType!=="html")return s;var a=t.substring(s).charAt(0);if(a===">"||a===";"){var r;for(r=a===">"?"<":"&";t.substring(s-1).charAt(0)!==r&&!(--s<0););s--}return s},i}()),q=function(){function i(t,s){B.load(this,s,t),this.begin()}var n=i.prototype;return n.toggle=function(){this.pause.status?this.start():this.stop()},n.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},n.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},n.destroy=function(){this.reset(!1),this.options.onDestroy(this)},n.reset=function(t){t===void 0&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},n.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.strPos===0?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)},n.typewrite=function(t,s){var e=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var a=this.humanizer(this.typeSpeed),r=1;this.pause.status!==!0?this.timeout=setTimeout(function(){s=C.typeHtmlChars(t,s,e);var u=0,o=t.substring(s);if(o.charAt(0)==="^"&&/^\^\d+/.test(o)){var g=1;g+=(o=/\d+/.exec(o)[0]).length,u=parseInt(o),e.temporaryPause=!0,e.options.onTypingPaused(e.arrayPos,e),t=t.substring(0,s)+t.substring(s+g),e.toggleBlinking(!0)}if(o.charAt(0)==="`"){for(;t.substring(s+r).charAt(0)!=="`"&&(r++,!(s+r>t.length)););var y=t.substring(0,s),m=t.substring(y.length+1,s+r),v=t.substring(s+r+1);t=y+m+v,r--}e.timeout=setTimeout(function(){e.toggleBlinking(!1),s>=t.length?e.doneTyping(t,s):e.keepTyping(t,s,r),e.temporaryPause&&(e.temporaryPause=!1,e.options.onTypingResumed(e.arrayPos,e))},u)},a):this.setPauseStatus(t,s,!0)},n.keepTyping=function(t,s,e){s===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var a=t.substring(0,s+=e);this.replaceText(a),this.typewrite(t,s)},n.doneTyping=function(t,s){var e=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){e.backspace(t,s)},this.backDelay))},n.backspace=function(t,s){var e=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var a=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){s=C.backSpaceHtmlChars(t,s,e);var r=t.substring(0,s);if(e.replaceText(r),e.smartBackspace){var u=e.strings[e.arrayPos+1];e.stopNum=u&&r===u.substring(0,s)?s:0}s>e.stopNum?(s--,e.backspace(t,s)):s<=e.stopNum&&(e.arrayPos++,e.arrayPos===e.strings.length?(e.arrayPos=0,e.options.onLastStringBackspaced(),e.shuffleStringsIfNeeded(),e.begin()):e.typewrite(e.strings[e.sequence[e.arrayPos]],s))},a)}else this.setPauseStatus(t,s,!1)},n.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},n.setPauseStatus=function(t,s,e){this.pause.typewrite=e,this.pause.curString=t,this.pause.curStrPos=s},n.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},n.humanizer=function(t){return Math.round(Math.random()*t/2)+t},n.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},n.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)},n.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:this.contentType==="html"?this.el.innerHTML=t:this.el.textContent=t},n.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(s){t.stop()}),this.el.addEventListener("blur",function(s){t.el.value&&t.el.value.length!==0||t.start()}))},n.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},i}(),L=P(`<div id="typed-holder" class="svelte-9ljo9q"><div id="typed-strings" style="display: none;"><p>I am a computer scientist.</p> <p>I did a Master's at <a href="https://www.epfl.ch/en/">EPFL</a>.</p> <p>I am a senior research engineer at <a href="https://labs.oracle.com/">Oracle Labs</a>.</p> <p>I am interested in <a>artificial intelligence</a>.</p> <p>I can juggle <s>2</s> <s>3</s> 4 balls.</p> <p>I have been playing the piano for a few years.</p> <p>I like making <a>animated loops</a>.</p> <p>I am fascinated by <a>game design</a>.</p> <p>I enjoy <a>creative coding</a>.</p> <p>I hope you have a great day!</p></div> <span id="typed" class="svelte-9ljo9q"></span></div>`);function A(i,n){S(n,!1),O(()=>{let v={stringsElement:"#typed-strings",startDelay:250,typeSpeed:40,backSpeed:10,loop:!0,smartBackspace:!0};new q("#typed",v)}),E();var t=L(),s=h(t),e=p(h(s),6),a=p(h(e));c(a,"href",`${l??""}/blog/makemore-jax/`),f(),d(e);var r=p(e,6),u=p(h(r));c(u,"href",`${l??""}/loops`),f(),d(r);var o=p(r,2),g=p(h(o));c(g,"href",`${l??""}/blog/game-frustration/`),f(),d(o);var y=p(o,2),m=p(h(y));c(m,"href",`${l??""}/blog/hypnotic-degenerate-spirals/`),f(),d(y),f(2),d(s),f(2),d(t),k(i,t),T()}var D=P(`<div id="hero" class="svelte-jq5i3g"><h1 class="svelte-jq5i3g">Hi, I'm Doga!</h1> <!> <div id="links" class="svelte-jq5i3g"><a class="svelte-jq5i3g">Resume</a> <a class="svelte-jq5i3g">Projects</a> <br class="svelte-jq5i3g"> <a class="svelte-jq5i3g">Blog</a> <a class="svelte-jq5i3g">Loops</a> <a class="svelte-jq5i3g">Fun</a></div></div>`);function z(i){var n=D();I(g=>{w.title="Doga Tekin"});var t=p(h(n),2);A(t,{});var s=p(t,2),e=h(s);c(e,"href",`${l??""}/resume`);var a=p(e,2);c(a,"href",`${l??""}/projects`);var r=p(a,4);c(r,"href",`${l??""}/blog`);var u=p(r,2);c(u,"href",`${l??""}/loops`);var o=p(u,2);c(o,"href",`${l??""}/fun`),d(s),d(n),k(i,n)}export{z as component};
