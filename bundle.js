!function(n){var e={};function t(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(o,i,function(e){return n[e]}.bind(null,i));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=7)}([function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var i=(r=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),a=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[t].concat(a).concat([i]).join("\n")}var r,s,l;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(o)for(var a=0;a<this.length;a++){var r=this[a][0];null!=r&&(i[r]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&i[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),e.push(l))}},e}},function(n,e,t){var o=t(2),i=t(3);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var a={insert:"head",singleton:!1};o(i,a);n.exports=i.locals||{}},function(n,e,t){"use strict";var o,i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),r=[];function s(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function l(n,e){for(var t={},o=[],i=0;i<n.length;i++){var a=n[i],l=e.base?a[0]+e.base:a[0],d=t[l]||0,c="".concat(l," ").concat(d);t[l]=d+1;var u=s(c),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(r[u].references++,r[u].updater(p)):r.push({identifier:c,updater:b(p,e),references:1}),o.push(c)}return o}function d(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var i=t.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var r=a(n.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var c,u=(c=[],function(n,e){return c[n]=e,c.filter(Boolean).join("\n")});function p(n,e,t,o){var i=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=u(e,i);else{var a=document.createTextNode(i),r=n.childNodes;r[e]&&n.removeChild(r[e]),r.length?n.insertBefore(a,r[e]):n.appendChild(a)}}function h(n,e,t){var o=t.css,i=t.media,a=t.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),a&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var f=null,m=0;function b(n,e){var t,o,i;if(e.singleton){var a=m++;t=f||(f=d(e)),o=p.bind(null,t,a,!1),i=p.bind(null,t,a,!0)}else t=d(e),o=h.bind(null,t,e),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else i()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=i());var t=l(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var i=s(t[o]);r[i].references--}for(var a=l(n,e),d=0;d<t.length;d++){var c=s(t[d]);0===r[c].references&&(r[c].updater(),r.splice(c,1))}t=a}}}},function(n,e,t){var o=t(0),i=t(4),a=t(5),r=t(6),s=t(8),l=t(9);(e=o(!1)).i(i),e.i(a),e.i(r),e.push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Oswald&display=swap);"]);var d=s(l);e.push([n.i,"#main-div {\n  height: 80vh;\n  position: relative;\n}\n\nul {\n  display: flex;\n  justify-content: space-evenly;\n  margin: 0;\n  color: #f9c07a;\n  text-shadow: 1px 1px 5px black;\n  font-family: 'Oswald', sans-serif;\n  font-size: 1.5vw;\n  background-color: rgba(37, 23, 4, 0.404);\n}\n\n.list-item {\n  margin-top: 3vh;\n  margin-right: 2vw;\n  cursor: pointer;\n}\n.list-item:not(:last-child):hover {\n  text-decoration: underline;\n  opacity: 0.8;\n}\n.list-item:first-child,\n.list-item:last-child {\n  margin: 3vh 10vw;\n}\n.list-item:last-child {\n  border: 4px solid #693030;\n  border-radius: 12px;\n  background-color: #af1010;\n  padding: 0 1vw;\n}\n.list-item:last-child:hover {\n  background-color: #f9c07a;\n  color: #af1010;\n  text-shadow: none;\n}\n\n#background {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-size: 100% 100%;\n  z-index: -1;\n}\n#module-div {\n  height: 85%;\n  display: flex;\n}\n#intro {\n  align-self: center;\n  margin: auto;\n  white-space: pre;\n  color: #fff;\n  background-color: #fe3c52c9;\n  border-radius: 15px;\n  padding: 20px;\n  text-shadow: 0 0 5px black;\n  font-size: 2vw;\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n}\n\n#secondary-div {\n  display: flex;\n  justify-content: space-evenly;\n  max-height: 15vh;\n}\n\n.secondary-items {\n  position: relative;\n  text-align: center;\n  width: 20vw;\n  padding: 1vw;\n  font-size: 1em;\n  cursor: pointer;\n}\n.list-item:active {\n  color: #ef9930;\n}\n.secondary-items:active {\n  opacity: 0.4;\n}\n\n.secondary-items::after {\n  content: url("+d+");\n  position: absolute;\n  top: 0;\n  opacity: 0;\n  transition: opacity 0.4s ease-in;\n}\n\n.secondary-items:hover::after {\n  opacity: 1;\n}\n\n.secondary-items > img {\n  height: 40%;\n}\n\n.secondary-items > h4 {\n  margin: 1.5vh;\n  height: 30%;\n}\n.secondary-items > p {\n  margin: 0;\n  height: 30%;\n  color: darkgray;\n}\n\n.secondary-items > img,\n.secondary-items > h4,\n.secondary-items > p {\n  pointer-events: none;\n}\n\n#menu {\n  height: 90%;\n  width: 50%;\n  margin: auto;\n  border-radius: 5px;\n}\n",""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,'/* Document\n * ========================================================================== */\n\n/**\n * Add border box sizing in all browsers (opinionated).\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\n/**\n * 1. Add text decoration inheritance in all browsers (opinionated).\n * 2. Add vertical alignment inheritance in all browsers (opinionated).\n */\n\n::before,\n::after {\n  text-decoration: inherit; /* 1 */\n  vertical-align: inherit; /* 2 */\n}\n\n/**\n * 1. Use the default cursor in all browsers (opinionated).\n * 2. Change the line height in all browsers (opinionated).\n * 3. Use a 4-space tab width in all browsers (opinionated).\n * 4. Remove the grey highlight on links in iOS (opinionated).\n * 5. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n * 6. Breaks words to prevent overflow in all browsers (opinionated).\n */\n\nhtml {\n  cursor: default; /* 1 */\n  line-height: 1.5; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  tab-size: 4; /* 3 */\n  -webkit-tap-highlight-color: transparent /* 4 */;\n  -ms-text-size-adjust: 100%; /* 5 */\n  -webkit-text-size-adjust: 100%; /* 5 */\n  word-break: break-word; /* 6 */\n}\n\n/* Sections\n * ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Edge, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n * ========================================================================== */\n\n/**\n * Remove the margin on nested lists in Chrome, Edge, IE, and Safari.\n */\n\ndl dl,\ndl ol,\ndl ul,\nol dl,\nul dl {\n  margin: 0;\n}\n\n/**\n * Remove the margin on nested lists in Edge 18- and IE.\n */\n\nol ol,\nol ul,\nul ol,\nul ul {\n  margin: 0;\n}\n\n/**\n * 1. Add the correct sizing in Firefox.\n * 2. Show the overflow in Edge 18- and IE.\n */\n\nhr {\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * Add the correct display in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Remove the list style on navigation lists in all browsers (opinionated).\n */\n\nnav ol,\nnav ul {\n  list-style: none;\n  padding: 0;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n * ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * Add the correct text decoration in Edge 18-, IE, and Safari.\n */\n\nabbr[title] {\n  text-decoration: underline;\n  text-decoration: underline dotted;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/* Embedded content\n * ========================================================================== */\n\n/*\n * Change the alignment on media elements in all browsers (opinionated).\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on iframes in all browsers (opinionated).\n */\n\niframe {\n  border-style: none;\n}\n\n/**\n * Remove the border on images within links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Change the fill color to match the text color in all browsers (opinionated).\n */\n\nsvg:not([fill]) {\n  fill: currentColor;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Tabular data\n * ========================================================================== */\n\n/**\n * Collapse border spacing in all browsers (opinionated).\n */\n\ntable {\n  border-collapse: collapse;\n}\n\n/* Forms\n * ========================================================================== */\n\n/**\n * Remove the margin on controls in Safari.\n */\n\nbutton,\ninput,\nselect {\n  margin: 0;\n}\n\n/**\n * 1. Show the overflow in IE.\n * 2. Remove the inheritance of text transform in Edge 18-, Firefox, and IE.\n */\n\nbutton {\n  overflow: visible; /* 1 */\n  text-transform: none; /* 2 */\n}\n\n/**\n * Correct the inability to style buttons in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * 1. Change the inconsistent appearance in all browsers (opinionated).\n * 2. Correct the padding in Firefox.\n */\n\nfieldset {\n  border: 1px solid #a0a0a0; /* 1 */\n  padding: 0.35em 0.75em 0.625em; /* 2 */\n}\n\n/**\n * Show the overflow in Edge 18- and IE.\n */\n\ninput {\n  overflow: visible;\n}\n\n/**\n * 1. Correct the text wrapping in Edge 18- and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n */\n\nlegend {\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in Edge 18- and IE.\n * 2. Add the correct vertical alignment in Chrome, Edge, and Firefox.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the inheritance of text transform in Firefox.\n */\n\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Remove the margin in Firefox and Safari.\n * 2. Remove the default vertical scrollbar in IE.\n * 3. Change the resize direction in all browsers (opinionated).\n */\n\ntextarea {\n  margin: 0; /* 1 */\n  overflow: auto; /* 2 */\n  resize: vertical; /* 3 */\n}\n\n/**\n * Remove the padding in IE 10-.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  padding: 0;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome, Edge, and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Safari.\n */\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\n\n/**\n * Remove the inner padding in Chrome, Edge, and Safari on macOS.\n */\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style upload buttons in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/**\n * Remove the inner border and padding of focus outlines in Firefox.\n */\n\n::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus outline styles unset by the previous rule in Firefox.\n */\n\n:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Remove the additional :invalid styles in Firefox.\n */\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/* Interactive\n * ========================================================================== */\n\n/*\n * Add the correct display in Edge 18- and IE.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct styles in Edge 18-, IE, and Safari.\n */\n\ndialog {\n  background-color: white;\n  border: solid;\n  color: black;\n  display: block;\n  height: -moz-fit-content;\n  height: -webkit-fit-content;\n  height: fit-content;\n  left: 0;\n  margin: auto;\n  padding: 1em;\n  position: absolute;\n  right: 0;\n  width: -moz-fit-content;\n  width: -webkit-fit-content;\n  width: fit-content;\n}\n\ndialog:not([open]) {\n  display: none;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n * ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* User interaction\n * ========================================================================== */\n\n/*\n * 1. Remove the tapping delay in IE 10.\n * 2. Remove the tapping delay on clickable elements\n      in all browsers (opinionated).\n */\n\na,\narea,\nbutton,\ninput,\nlabel,\nselect,\nsummary,\ntextarea,\n[tabindex] {\n  -ms-touch-action: manipulation; /* 1 */\n  touch-action: manipulation; /* 2 */\n}\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n\n/* Accessibility\n * ========================================================================== */\n\n/**\n * Change the cursor on busy elements in all browsers (opinionated).\n */\n\n[aria-busy="true"] {\n  cursor: progress;\n}\n\n/*\n * Change the cursor on control elements in all browsers (opinionated).\n */\n\n[aria-controls] {\n  cursor: pointer;\n}\n\n/*\n * Change the cursor on disabled, not-editable, or otherwise\n * inoperable elements in all browsers (opinionated).\n */\n\n[aria-disabled="true"],\n[disabled] {\n  cursor: not-allowed;\n}\n\n/*\n * Change the display on visually hidden accessible elements\n * in all browsers (opinionated).\n */\n\n[aria-hidden="false"][hidden] {\n  display: initial;\n}\n\n[aria-hidden="false"][hidden]:not(:focus) {\n  clip: rect(0, 0, 0, 0);\n  position: absolute;\n}\n',""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,'/**\n * Use the default user interface font in all browsers (opinionated).\n */\n\nhtml {\n  font-family:\n    system-ui,\n    /* macOS 10.11-10.12 */ -apple-system,\n    /* Windows 6+ */ "Segoe UI",\n    /* Android 4+ */ "Roboto",\n    /* Ubuntu 10.10+ */ "Ubuntu",\n    /* Gnome 3+ */ "Cantarell",\n    /* KDE Plasma 5+ */ "Noto Sans",\n    /* fallback */ sans-serif,\n    /* macOS emoji */ "Apple Color Emoji",\n    /* Windows emoji */ "Segoe UI Emoji",\n    /* Windows emoji */ "Segoe UI Symbol",\n    /* Linux emoji */ "Noto Color Emoji";\n}\n\n/**\n * Use the default monospace user interface font in all browsers (opinionated).\n */\n\ncode,\nkbd,\nsamp,\npre {\n  font-family:\n    /* macOS 10.10+ */ "Menlo",\n    /* Windows 6+ */ "Consolas",\n    /* Android 4+ */ "Roboto Mono",\n    /* Ubuntu 10.10+ */ "Ubuntu Monospace",\n    /* KDE Plasma 5+ */ "Noto Mono",\n    /* KDE Plasma 4+ */ "Oxygen Mono",\n    /* Linux/OpenOffice fallback */ "Liberation Mono",\n    /* fallback */ monospace,\n    /* macOS emoji */ "Apple Color Emoji",\n    /* Windows emoji */ "Segoe UI Emoji",\n    /* Windows emoji */ "Segoe UI Symbol",\n    /* Linux emoji */ "Noto Color Emoji";\n}\n',""]),n.exports=e},function(n,e,t){(e=t(0)(!1)).push([n.i,"/**\n * 1. Change the inconsistent appearance in all browsers (opinionated).\n * 2. Add typography inheritance in all browsers (opinionated).\n */\n\nbutton,\ninput,\nselect,\ntextarea {\n  background-color: transparent; /* 1 */\n  border: 1px solid WindowFrame; /* 1 */\n  color: inherit; /* 1 */\n  font: inherit; /* 2 */\n  letter-spacing: inherit; /* 2 */\n  padding: 0.25em 0.375em; /* 1 */\n}\n\n/**\n * Change the inconsistent appearance in all browsers (opinionated).\n */\n\nselect {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  background: no-repeat right center / 1em;\n  border-radius: 0;\n  padding-right: 1em;\n}\n\n/**\n * Change the inconsistent appearance in all browsers (opinionated).\n */\n\nselect:not([multiple]):not([size]) {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='4'%3E%3Cpath d='M4 0h6L7 4'/%3E%3C/svg%3E\");\n}\n\n/**\n * Change the inconsistent appearance in IE (opinionated).\n */\n\n::-ms-expand {\n  display: none;\n}\n\n/**\n * Correct the inconsistent appearance in IE (opinionated).\n */\n\n:-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.54);\n}\n",""]),n.exports=e},function(n,e,t){"use strict";t.r(e);var o=t.p+"58e6fc4423a0343e0fa141634ccfb0b8.jpeg",i=t.p+"289ce0f561286dcb5fee02b6d27c4843.svg",a=t.p+"4065349ed46440b91bb15dd99ba4ec21.svg",r=t.p+"284c09dc4cdc25c76cb74d0653b2c6c3.svg",s=t.p+"eda54833d4828a21335ab7df3b2370c2.svg";const l=document.querySelector("#content"),d=()=>{const n=document.createElement("div");n.id="main-div";const e=["HOME","MENUS","RESERVATIONS","PRIVATE DINING","CONTACT US"],t=document.createElement("nav"),i=document.createElement("ul");for(const n of e){const e=document.createElement("li");e.textContent=n,e.classList.add("list-item"),i.appendChild(e)}const a=document.createElement("div");a.id="background",a.style.backgroundImage=`url('${o}')`;const r=document.createElement("div");r.id="module-div",r.classList.add("active");const s=document.createElement("h1");s.textContent="We even have cashews as decoration!\n      We can cook anything you want!",s.id="intro",t.appendChild(i),r.appendChild(s),n.append(a,t,r),l.appendChild(n)},c=()=>{const n=document.createElement("div");n.id="secondary-div";const e=["Drinks","Sea Foods","Cup Coffees","Fresh Salad"],t=[a,r,i,s],o=["Best drinks within 10 meters!","We stole them from bears!","Basic starbucks stuff","It is fresh enough to eat!"];for(let i=0;i<e.length;i++){const a=document.createElement("div"),r=document.createElement("img"),s=document.createElement("h4"),l=document.createElement("p");a.classList.add("secondary-items"),a.setAttribute("data-tab",i),r.src=t[i],s.textContent=e[i],l.textContent=o[i],a.append(r,s,l),n.append(a)}l.appendChild(n)};var u=t.p+"557e2ffaba22fdf5217a30e627c65e6b.jpg",p=t.p+"a85693a906aed0260fb6a17dae0d753b.png";var h=t.p+"6726ad50e827b5bb4d048b41024c02fb.jpg",f=t.p+"3a337b66dd907134e67c35adadbf3054.png";t(1);d(),c(),document.querySelectorAll(".secondary-items").forEach(n=>{n.addEventListener("click",n=>{const e=n.target.dataset.tab;switch(document.querySelector("#module-div").style.opacity="0",e){case"0":(()=>{const n=document.querySelector("#module-div");n.innerHTML=`<img id='menu' src=${p}>`,document.querySelector("#background").style.backgroundImage=`url('${u}')`,n.style.display="flex"})();break;case"1":document.querySelector("#module-div").innerHTML=`<img id='menu' src=${f}>`,document.querySelector("#background").style.backgroundImage=`url('${h}')`,console.log("hi")}})})},function(n,e,t){"use strict";n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,e,t){"use strict";t.r(e),e.default=t.p+"14f0102919c237a9a85b09877c77a5f9.svg"}]);