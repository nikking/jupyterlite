(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[4059],{38570:(o,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>s});var c=t(94015),n=t.n(c),e=t(23645),a=t.n(e)()(n());a.push([o.id,".cm-s-colorforth.CodeMirror { background: #000000; color: #f8f8f8; }\n.cm-s-colorforth .CodeMirror-gutters { background: #0a001f; border-right: 1px solid #aaa; }\n.cm-s-colorforth .CodeMirror-guttermarker { color: #FFBD40; }\n.cm-s-colorforth .CodeMirror-guttermarker-subtle { color: #78846f; }\n.cm-s-colorforth .CodeMirror-linenumber { color: #bababa; }\n.cm-s-colorforth .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-colorforth span.cm-comment     { color: #ededed; }\n.cm-s-colorforth span.cm-def         { color: #ff1c1c; font-weight:bold; }\n.cm-s-colorforth span.cm-keyword     { color: #ffd900; }\n.cm-s-colorforth span.cm-builtin     { color: #00d95a; }\n.cm-s-colorforth span.cm-variable    { color: #73ff00; }\n.cm-s-colorforth span.cm-string      { color: #007bff; }\n.cm-s-colorforth span.cm-number      { color: #00c4ff; }\n.cm-s-colorforth span.cm-atom        { color: #606060; }\n\n.cm-s-colorforth span.cm-variable-2  { color: #EEE; }\n.cm-s-colorforth span.cm-variable-3, .cm-s-colorforth span.cm-type { color: #DDD; }\n.cm-s-colorforth span.cm-property    {}\n.cm-s-colorforth span.cm-operator    {}\n\n.cm-s-colorforth span.cm-meta        { color: yellow; }\n.cm-s-colorforth span.cm-qualifier   { color: #FFF700; }\n.cm-s-colorforth span.cm-bracket     { color: #cc7; }\n.cm-s-colorforth span.cm-tag         { color: #FFBD40; }\n.cm-s-colorforth span.cm-attribute   { color: #FFF700; }\n.cm-s-colorforth span.cm-error       { color: #f00; }\n\n.cm-s-colorforth div.CodeMirror-selected { background: #333d53; }\n\n.cm-s-colorforth span.cm-compilation { background: rgba(255, 255, 255, 0.12); }\n\n.cm-s-colorforth .CodeMirror-activeline-background { background: #253540; }\n","",{version:3,sources:["webpack://./../../node_modules/codemirror/theme/colorforth.css"],names:[],mappings:"AAAA,8BAA8B,mBAAmB,EAAE,cAAc,EAAE;AACnE,uCAAuC,mBAAmB,EAAE,4BAA4B,EAAE;AAC1F,4CAA4C,cAAc,EAAE;AAC5D,mDAAmD,cAAc,EAAE;AACnE,0CAA0C,cAAc,EAAE;AAC1D,sCAAsC,4BAA4B,EAAE;;AAEpE,uCAAuC,cAAc,EAAE;AACvD,uCAAuC,cAAc,EAAE,gBAAgB,EAAE;AACzE,uCAAuC,cAAc,EAAE;AACvD,uCAAuC,cAAc,EAAE;AACvD,uCAAuC,cAAc,EAAE;AACvD,uCAAuC,cAAc,EAAE;AACvD,uCAAuC,cAAc,EAAE;AACvD,uCAAuC,cAAc,EAAE;;AAEvD,uCAAuC,WAAW,EAAE;AACpD,qEAAqE,WAAW,EAAE;AAClF,sCAAsC;AACtC,sCAAsC;;AAEtC,uCAAuC,aAAa,EAAE;AACtD,uCAAuC,cAAc,EAAE;AACvD,uCAAuC,WAAW,EAAE;AACpD,uCAAuC,cAAc,EAAE;AACvD,uCAAuC,cAAc,EAAE;AACvD,uCAAuC,WAAW,EAAE;;AAEpD,2CAA2C,mBAAmB,EAAE;;AAEhE,uCAAuC,qCAAqC,EAAE;;AAE9E,qDAAqD,mBAAmB,EAAE",sourcesContent:[".cm-s-colorforth.CodeMirror { background: #000000; color: #f8f8f8; }\n.cm-s-colorforth .CodeMirror-gutters { background: #0a001f; border-right: 1px solid #aaa; }\n.cm-s-colorforth .CodeMirror-guttermarker { color: #FFBD40; }\n.cm-s-colorforth .CodeMirror-guttermarker-subtle { color: #78846f; }\n.cm-s-colorforth .CodeMirror-linenumber { color: #bababa; }\n.cm-s-colorforth .CodeMirror-cursor { border-left: 1px solid white; }\n\n.cm-s-colorforth span.cm-comment     { color: #ededed; }\n.cm-s-colorforth span.cm-def         { color: #ff1c1c; font-weight:bold; }\n.cm-s-colorforth span.cm-keyword     { color: #ffd900; }\n.cm-s-colorforth span.cm-builtin     { color: #00d95a; }\n.cm-s-colorforth span.cm-variable    { color: #73ff00; }\n.cm-s-colorforth span.cm-string      { color: #007bff; }\n.cm-s-colorforth span.cm-number      { color: #00c4ff; }\n.cm-s-colorforth span.cm-atom        { color: #606060; }\n\n.cm-s-colorforth span.cm-variable-2  { color: #EEE; }\n.cm-s-colorforth span.cm-variable-3, .cm-s-colorforth span.cm-type { color: #DDD; }\n.cm-s-colorforth span.cm-property    {}\n.cm-s-colorforth span.cm-operator    {}\n\n.cm-s-colorforth span.cm-meta        { color: yellow; }\n.cm-s-colorforth span.cm-qualifier   { color: #FFF700; }\n.cm-s-colorforth span.cm-bracket     { color: #cc7; }\n.cm-s-colorforth span.cm-tag         { color: #FFBD40; }\n.cm-s-colorforth span.cm-attribute   { color: #FFF700; }\n.cm-s-colorforth span.cm-error       { color: #f00; }\n\n.cm-s-colorforth div.CodeMirror-selected { background: #333d53; }\n\n.cm-s-colorforth span.cm-compilation { background: rgba(255, 255, 255, 0.12); }\n\n.cm-s-colorforth .CodeMirror-activeline-background { background: #253540; }\n"],sourceRoot:""}]);const s=a},23645:o=>{"use strict";o.exports=function(o){var r=[];return r.toString=function(){return this.map((function(r){var t=o(r);return r[2]?"@media ".concat(r[2]," {").concat(t,"}"):t})).join("")},r.i=function(o,t,c){"string"==typeof o&&(o=[[null,o,""]]);var n={};if(c)for(var e=0;e<this.length;e++){var a=this[e][0];null!=a&&(n[a]=!0)}for(var s=0;s<o.length;s++){var l=[].concat(o[s]);c&&n[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),r.push(l))}},r}},94015:o=>{"use strict";function r(o,r){(null==r||r>o.length)&&(r=o.length);for(var t=0,c=new Array(r);t<r;t++)c[t]=o[t];return c}o.exports=function(o){var t,c,n=(c=4,function(o){if(Array.isArray(o))return o}(t=o)||function(o,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(o)){var t=[],c=!0,n=!1,e=void 0;try{for(var a,s=o[Symbol.iterator]();!(c=(a=s.next()).done)&&(t.push(a.value),!r||t.length!==r);c=!0);}catch(o){n=!0,e=o}finally{try{c||null==s.return||s.return()}finally{if(n)throw e}}return t}}(t,c)||function(o,t){if(o){if("string"==typeof o)return r(o,t);var c=Object.prototype.toString.call(o).slice(8,-1);return"Object"===c&&o.constructor&&(c=o.constructor.name),"Map"===c||"Set"===c?Array.from(o):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?r(o,t):void 0}}(t,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),e=n[1],a=n[3];if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),A="/*# ".concat(l," */"),i=a.sources.map((function(o){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(o," */")}));return[e].concat(i).concat([A]).join("\n")}return[e].join("\n")}},14059:(o,r,t)=>{var c=t(38570);"string"==typeof(c=c.__esModule?c.default:c)&&(c=[[o.id,c,""]]);t(93379)(c,{insert:"head",singleton:!1}),c.locals&&(o.exports=c.locals)},93379:(o,r,t)=>{"use strict";var c,n={},e=function(){var o={};return function(r){if(void 0===o[r]){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(o){t=null}o[r]=t}return o[r]}}();function a(o,r){for(var t=[],c={},n=0;n<o.length;n++){var e=o[n],a=r.base?e[0]+r.base:e[0],s={css:e[1],media:e[2],sourceMap:e[3]};c[a]?c[a].parts.push(s):t.push(c[a]={id:a,parts:[s]})}return t}function s(o,r){for(var t=0;t<o.length;t++){var c=o[t],e=n[c.id],a=0;if(e){for(e.refs++;a<e.parts.length;a++)e.parts[a](c.parts[a]);for(;a<c.parts.length;a++)e.parts.push(p(c.parts[a],r))}else{for(var s=[];a<c.parts.length;a++)s.push(p(c.parts[a],r));n[c.id]={id:c.id,refs:1,parts:s}}}}function l(o){var r=document.createElement("style");if(void 0===o.attributes.nonce){var c=t.nc;c&&(o.attributes.nonce=c)}if(Object.keys(o.attributes).forEach((function(t){r.setAttribute(t,o.attributes[t])})),"function"==typeof o.insert)o.insert(r);else{var n=e(o.insert||"head");if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}return r}var A,i=(A=[],function(o,r){return A[o]=r,A.filter(Boolean).join("\n")});function f(o,r,t,c){var n=t?"":c.css;if(o.styleSheet)o.styleSheet.cssText=i(r,n);else{var e=document.createTextNode(n),a=o.childNodes;a[r]&&o.removeChild(a[r]),a.length?o.insertBefore(e,a[r]):o.appendChild(e)}}function u(o,r,t){var c=t.css,n=t.media,e=t.sourceMap;if(n&&o.setAttribute("media",n),e&&btoa&&(c+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(e))))," */")),o.styleSheet)o.styleSheet.cssText=c;else{for(;o.firstChild;)o.removeChild(o.firstChild);o.appendChild(document.createTextNode(c))}}var m=null,d=0;function p(o,r){var t,c,n;if(r.singleton){var e=d++;t=m||(m=l(r)),c=f.bind(null,t,e,!1),n=f.bind(null,t,e,!0)}else t=l(r),c=u.bind(null,t,r),n=function(){!function(o){if(null===o.parentNode)return!1;o.parentNode.removeChild(o)}(t)};return c(o),function(r){if(r){if(r.css===o.css&&r.media===o.media&&r.sourceMap===o.sourceMap)return;c(o=r)}else n()}}o.exports=function(o,r){(r=r||{}).attributes="object"==typeof r.attributes?r.attributes:{},r.singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===c&&(c=Boolean(window&&document&&document.all&&!window.atob)),c));var t=a(o,r);return s(t,r),function(o){for(var c=[],e=0;e<t.length;e++){var l=t[e],A=n[l.id];A&&(A.refs--,c.push(A))}o&&s(a(o,r),r);for(var i=0;i<c.length;i++){var f=c[i];if(0===f.refs){for(var u=0;u<f.parts.length;u++)f.parts[u]();delete n[f.id]}}}}}}]);
//# sourceMappingURL=4059.8d66c1b8d09ed3193847.js.map