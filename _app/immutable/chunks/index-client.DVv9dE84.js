import{G as c,a8 as i,F as _,i as m,J as p}from"./runtime.BuZwNH_C.js";function u(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function x(e){c===null&&u(),i&&c.l!==null?d(c).m.push(e):_(()=>{const t=p(e);if(typeof t=="function")return t})}function v(e,t,{bubbles:o=!1,cancelable:s=!1}={}){return new CustomEvent(e,{detail:t,bubbles:o,cancelable:s})}function y(){const e=c;return e===null&&u(),(t,o,s)=>{var a;const n=(a=e.s.$$events)==null?void 0:a[t];if(n){const l=m(n)?n.slice():[n],r=v(t,o,s);for(const f of l)f.call(e.x,r);return!r.defaultPrevented}return!0}}function d(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}export{y as c,x as o};
