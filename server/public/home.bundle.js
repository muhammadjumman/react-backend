(()=>{var e,t={372:(e,t,r)=>{function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,a,o,c=[],i=!0,u=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=a.call(r)).done)&&(c.push(n.value),c.length!==t);i=!0);}catch(e){u=!0,l=e}finally{try{if(!i&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(u)throw l}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var a=r(294);e.exports=function(e){var t=e.title,r=e.body,l=n(a.useState(0),2),o=l[0],c=l[1],i=n(a.useState(null),2),u=i[0],f=i[1];return a.useEffect((function(){fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(e){return f(e)}))}),[]),a.createElement(a.Fragment,null,a.createElement("html",{lang:"en"},a.createElement("head",null,a.createElement("meta",{charSet:"UTF-8"}),a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),a.createElement("title",null,t),a.createElement("script",{src:"/home.bundle.js"}),a.createElement("link",{rel:"stylesheet",href:"../style/style.css"})),a.createElement("body",null,a.createElement("div",{id:"root"},"This is the home file and it changes",r,a.createElement("button",{onClick:function(){return c((function(e){return e+1}))}},"+"),o,a.createElement("button",{onClick:function(){return c((function(e){return e-1}))}},"-")),a.createElement("div",{className:""},u&&u.map((function(e){return a.createElement(a.Fragment,null,a.createElement("h3",{key:e.id},e.title),a.createElement("p",{key:e.id},e.body))}))))))}},884:(e,t,r)=>{"use strict";var n=r(294),l=r(372),a=r.n(l);r(745).hydrateRoot(document,n.createElement(a(),null))}},r={};function n(e){var l=r[e];if(void 0!==l)return l.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,e=[],n.O=(t,r,l,a)=>{if(!r){var o=1/0;for(f=0;f<e.length;f++){for(var[r,l,a]=e[f],c=!0,i=0;i<r.length;i++)(!1&a||o>=a)&&Object.keys(n.O).every((e=>n.O[e](r[i])))?r.splice(i--,1):(c=!1,a<o&&(o=a));if(c){e.splice(f--,1);var u=l();void 0!==u&&(t=u)}}return t}a=a||0;for(var f=e.length;f>0&&e[f-1][2]>a;f--)e[f]=e[f-1];e[f]=[r,l,a]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={177:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var l,a,[o,c,i]=r,u=0;if(o.some((t=>0!==e[t]))){for(l in c)n.o(c,l)&&(n.m[l]=c[l]);if(i)var f=i(n)}for(t&&t(r);u<o.length;u++)a=o[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(f)},r=self.webpackChunkreact_backend=self.webpackChunkreact_backend||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var l=n.O(void 0,[745],(()=>n(884)));l=n.O(l)})();