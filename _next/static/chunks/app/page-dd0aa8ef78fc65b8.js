(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{399:function(e,t,n){Promise.resolve().then(n.bind(n,8212))},4492:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),u="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=r.useState,s=r.useEffect,i=r.useLayoutEffect,a=r.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!u(e,n)}catch(e){return!0}}var l="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=o({inst:{value:n,getSnapshot:t}}),u=r[0].inst,l=r[1];return i(function(){u.value=n,u.getSnapshot=t,c(u)&&l({inst:u})},[e,n,t]),s(function(){return c(u)&&l({inst:u}),e(function(){c(u)&&l({inst:u})})},[e]),a(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:l},5107:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),u=n(554),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},s=u.useSyncExternalStore,i=r.useRef,a=r.useEffect,c=r.useMemo,l=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,u){var d=i(null);if(null===d.current){var f={hasValue:!1,value:null};d.current=f}else f=d.current;var p=s(e,(d=c(function(){function e(e){if(!a){if(a=!0,s=e,e=r(e),void 0!==u&&f.hasValue){var t=f.value;if(u(t,e))return i=t}return i=e}if(t=i,o(s,e))return t;var n=r(e);return void 0!==u&&u(t,n)?t:(s=e,i=n)}var s,i,a=!1,c=void 0===n?null:n;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]},[t,n,r,u]))[0],d[1]);return a(function(){f.hasValue=!0,f.value=p},[p]),l(p),p}},554:function(e,t,n){"use strict";e.exports=n(4492)},5006:function(e,t,n){"use strict";e.exports=n(5107)},8212:function(e,t,n){"use strict";n.r(t);var r=n(7437),u=n(1231);n(2265),t.default=()=>{let{color:e,count:t,increment:n,decrement:o,changeCountTo:s,changeColorTo:i,people:a,addPeople:c,setPeople:l}=(0,u.Z)(),d=a.map(e=>(0,r.jsxs)("div",{children:[e.name," is ",e.age,"old."]},e.name));return(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsxs)("h1",{className:"text-2xl mb-4",children:["Count: ",t]}),(0,r.jsxs)("h1",{className:"text-2xl mb-4",children:["Color: ",e]}),(0,r.jsxs)("div",{className:"space-x-4",children:[(0,r.jsx)("button",{onClick:n,className:"px-4 py-2 bg-blue-500 text-white rounded",children:"Increment"}),(0,r.jsx)("button",{onClick:o,className:"px-4 py-2 bg-red-500 text-white rounded",children:"Decrement"}),(0,r.jsx)("input",{type:"number",className:"text-black",value:t,onChange:e=>{s(+e.target.value)}}),(0,r.jsx)("input",{type:"text",className:"text-black",value:e,onChange:e=>{i(e.target.value)}}),(0,r.jsx)("button",{onClick:()=>{c([{name:e+" 1 ",age:t},{name:e+" 2 ",age:t+1}])},className:"px-4 py-2 bg-red-500 text-white rounded",children:"Add perple"}),(0,r.jsx)("button",{onClick:()=>{l([{name:e+" 1 ",age:t},{name:e+" 2    fsgdhftgdsh",age:t+1}])},className:"px-4 py-2 bg-red-500 text-white rounded",children:"set perple"}),(0,r.jsx)("div",{className:"w-full text-white",children:d})]})]})}},1231:function(e,t,n){"use strict";let r=(0,n(9099).Ue)(e=>({borrowAmount:5e5,investAmount:1e5,count:0,color:"",people:[],increment:()=>e(e=>({count:e.count+1})),decrement:()=>e(e=>({count:e.count-1})),changeCountTo:t=>e(e=>({count:t})),changeColorTo:t=>e(e=>({color:t})),setPeople:t=>e(e=>({people:t})),setInvestAmount:t=>e(e=>({investAmount:t})),setBorrowAmount:t=>e(e=>({borrowAmount:t})),addPeople:t=>e(e=>({people:e.people.toSpliced(0,0,...t)}))}));t.Z=r},9099:function(e,t,n){"use strict";n.d(t,{Ue:function(){return f}});let r=e=>{let t;let n=new Set,r=(e,r)=>{let u="function"==typeof e?e(t):e;if(!Object.is(u,t)){let e=t;t=(null!=r?r:"object"!=typeof u||null===u)?u:Object.assign({},t,u),n.forEach(n=>n(t,e))}},u=()=>t,o={setState:r,getState:u,getInitialState:()=>s,subscribe:e=>(n.add(e),()=>n.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},s=t=e(r,u,o);return o},u=e=>e?r(e):r;var o=n(2265),s=n(5006);let{useDebugValue:i}=o,{useSyncExternalStoreWithSelector:a}=s,c=!1,l=e=>e,d=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?u(e):e,n=(e,n)=>(function(e,t=l,n){n&&!c&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),c=!0);let r=a(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return i(r),r})(t,e,n);return Object.assign(n,t),n},f=e=>e?d(e):d}},function(e){e.O(0,[971,23,744],function(){return e(e.s=399)}),_N_E=e.O()}]);