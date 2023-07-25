!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("DescriptionGenerator",["react"],t):"object"==typeof exports?exports.DescriptionGenerator=t(require("react")):e.DescriptionGenerator=t(e.React)}(this,(e=>(()=>{var t={974:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(81),o=n.n(r),i=n(645),s=n.n(i)()(o());s.push([e.id,".quick-reply-wrapper{display:flex;flex-direction:column;margin-top:15px;text-align:left}.quick-reply-wrapper .quick-reply-suggestion{cursor:pointer;padding:12px;margin:4px 0;border-radius:25px;border:1px solid #e0e0e0}.quick-reply-wrapper .quick-reply-suggestion:hover{background-color:#f0f0f0}.button.suggestions-button{padding:5px 15px !important;background-color:#fff !important}",""]);const a=s},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&s[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},588:e=>{e.exports=function(e,t){var n,r,o=0;function i(){var i,s,a=n,c=arguments.length;e:for(;a;){if(a.args.length===arguments.length){for(s=0;s<c;s++)if(a.args[s]!==arguments[s]){a=a.next;continue e}return a!==n&&(a===r&&(r=a.prev),a.prev.next=a.next,a.next&&(a.next.prev=a.prev),a.next=n,a.prev=null,n.prev=a,n=a),a.val}a=a.next}for(i=new Array(c),s=0;s<c;s++)i[s]=arguments[s];return a={args:i,val:e.apply(null,i)},n?(n.prev=a,a.next=n):r=a,o===t.maxSize?(r=r.prev).next=null:o++,n=a,a.val}return t=t||{},i.clear=function(){n=null,r=null,o=0},i}},975:(e,t,n)=>{var r;!function(){"use strict";var o={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[+-]/};function i(e){return function(e,t){var n,r,s,a,c,l,u,p,d,f=1,h=e.length,g="";for(r=0;r<h;r++)if("string"==typeof e[r])g+=e[r];else if("object"==typeof e[r]){if((a=e[r]).keys)for(n=t[f],s=0;s<a.keys.length;s++){if(null==n)throw new Error(i('[sprintf] Cannot access property "%s" of undefined value "%s"',a.keys[s],a.keys[s-1]));n=n[a.keys[s]]}else n=a.param_no?t[a.param_no]:t[f++];if(o.not_type.test(a.type)&&o.not_primitive.test(a.type)&&n instanceof Function&&(n=n()),o.numeric_arg.test(a.type)&&"number"!=typeof n&&isNaN(n))throw new TypeError(i("[sprintf] expecting number but found %T",n));switch(o.number.test(a.type)&&(p=n>=0),a.type){case"b":n=parseInt(n,10).toString(2);break;case"c":n=String.fromCharCode(parseInt(n,10));break;case"d":case"i":n=parseInt(n,10);break;case"j":n=JSON.stringify(n,null,a.width?parseInt(a.width):0);break;case"e":n=a.precision?parseFloat(n).toExponential(a.precision):parseFloat(n).toExponential();break;case"f":n=a.precision?parseFloat(n).toFixed(a.precision):parseFloat(n);break;case"g":n=a.precision?String(Number(n.toPrecision(a.precision))):parseFloat(n);break;case"o":n=(parseInt(n,10)>>>0).toString(8);break;case"s":n=String(n),n=a.precision?n.substring(0,a.precision):n;break;case"t":n=String(!!n),n=a.precision?n.substring(0,a.precision):n;break;case"T":n=Object.prototype.toString.call(n).slice(8,-1).toLowerCase(),n=a.precision?n.substring(0,a.precision):n;break;case"u":n=parseInt(n,10)>>>0;break;case"v":n=n.valueOf(),n=a.precision?n.substring(0,a.precision):n;break;case"x":n=(parseInt(n,10)>>>0).toString(16);break;case"X":n=(parseInt(n,10)>>>0).toString(16).toUpperCase()}o.json.test(a.type)?g+=n:(!o.number.test(a.type)||p&&!a.sign?d="":(d=p?"+":"-",n=n.toString().replace(o.sign,"")),l=a.pad_char?"0"===a.pad_char?"0":a.pad_char.charAt(1):" ",u=a.width-(d+n).length,c=a.width&&u>0?l.repeat(u):"",g+=a.align?d+n+c:"0"===l?d+c+n:c+d+n)}return g}(function(e){if(a[e])return a[e];for(var t,n=e,r=[],i=0;n;){if(null!==(t=o.text.exec(n)))r.push(t[0]);else if(null!==(t=o.modulo.exec(n)))r.push("%");else{if(null===(t=o.placeholder.exec(n)))throw new SyntaxError("[sprintf] unexpected placeholder");if(t[2]){i|=1;var s=[],c=t[2],l=[];if(null===(l=o.key.exec(c)))throw new SyntaxError("[sprintf] failed to parse named argument key");for(s.push(l[1]);""!==(c=c.substring(l[0].length));)if(null!==(l=o.key_access.exec(c)))s.push(l[1]);else{if(null===(l=o.index_access.exec(c)))throw new SyntaxError("[sprintf] failed to parse named argument key");s.push(l[1])}t[2]=s}else i|=2;if(3===i)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");r.push({placeholder:t[0],param_no:t[1],keys:t[2],sign:t[3],pad_char:t[4],align:t[5],width:t[6],precision:t[7],type:t[8]})}n=n.substring(t[0].length)}return a[e]=r}(e),arguments)}function s(e,t){return i.apply(null,[e].concat(t||[]))}var a=Object.create(null);"undefined"!=typeof window&&(window.sprintf=i,window.vsprintf=s,void 0===(r=function(){return{sprintf:i,vsprintf:s}}.call(t,n,t,e))||(e.exports=r))}()},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},s=[],a=0;a<e.length;a++){var c=e[a],l=r.base?c[0]+r.base:c[0],u=i[l]||0,p="".concat(l," ").concat(u);i[l]=u+1;var d=n(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var h=o(f,r);r.byIndex=a,t.splice(a,0,{identifier:p,updater:h,references:1})}s.push(p)}return s}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var a=n(i[s]);t[a].references--}for(var c=r(e,o),l=0;l<i.length;l++){var u=n(i[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=c}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},359:t=>{"use strict";t.exports=e}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={id:e,exports:{}};return t[e](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nc=void 0;var o={};return(()=>{"use strict";r.r(o),r.d(o,{DescriptionGenerator:()=>Ee,default:()=>de});var e,t,n,i,s=r(588),a=r.n(s);r(975),a()(console.error),e={"(":9,"!":8,"*":7,"/":7,"%":7,"+":6,"-":6,"<":5,"<=":5,">":5,">=":5,"==":4,"!=":4,"&&":3,"||":2,"?":1,"?:":1},t=["(","?"],n={")":["("],":":["?","?:"]},i=/<=|>=|==|!=|&&|\|\||\?:|\(|!|\*|\/|%|\+|-|<|>|\?|\)|:/;var c={"!":function(e){return!e},"*":function(e,t){return e*t},"/":function(e,t){return e/t},"%":function(e,t){return e%t},"+":function(e,t){return e+t},"-":function(e,t){return e-t},"<":function(e,t){return e<t},"<=":function(e,t){return e<=t},">":function(e,t){return e>t},">=":function(e,t){return e>=t},"==":function(e,t){return e===t},"!=":function(e,t){return e!==t},"&&":function(e,t){return e&&t},"||":function(e,t){return e||t},"?:":function(e,t,n){if(e)throw t;return n}};var l={contextDelimiter:"",onMissingKey:null};function u(e,t){var n;for(n in this.data=e,this.pluralForms={},this.options={},l)this.options[n]=void 0!==t&&n in t?t[n]:l[n]}u.prototype.getPluralForm=function(r,o){var s,a,l,u,p=this.pluralForms[r];return p||("function"!=typeof(l=(s=this.data[r][""])["Plural-Forms"]||s["plural-forms"]||s.plural_forms)&&(a=function(e){var t,n,r;for(t=e.split(";"),n=0;n<t.length;n++)if(0===(r=t[n].trim()).indexOf("plural="))return r.substr(7)}(s["Plural-Forms"]||s["plural-forms"]||s.plural_forms),u=function(r){var o=function(r){for(var o,s,a,c,l=[],u=[];o=r.match(i);){for(s=o[0],(a=r.substr(0,o.index).trim())&&l.push(a);c=u.pop();){if(n[s]){if(n[s][0]===c){s=n[s][1]||s;break}}else if(t.indexOf(c)>=0||e[c]<e[s]){u.push(c);break}l.push(c)}n[s]||u.push(s),r=r.substr(o.index+s.length)}return(r=r.trim())&&l.push(r),l.concat(u.reverse())}(r);return function(e){return function(e,t){var n,r,o,i,s,a,l=[];for(n=0;n<e.length;n++){if(s=e[n],i=c[s]){for(r=i.length,o=Array(r);r--;)o[r]=l.pop();try{a=i.apply(null,o)}catch(e){return e}}else a=t.hasOwnProperty(s)?t[s]:+s;l.push(a)}return l[0]}(o,e)}}(a),l=function(e){return+u({n:e})}),p=this.pluralForms[r]=l),p(o)},u.prototype.dcnpgettext=function(e,t,n,r,o){var i,s,a;return i=void 0===o?0:this.getPluralForm(e,o),s=n,t&&(s=t+this.options.contextDelimiter+n),(a=this.data[e][s])&&a[i]?a[i]:(this.options.onMissingKey&&this.options.onMissingKey(n,e),0===i?n:r)};const p={plural_forms:e=>1===e?0:1},d=/^i18n\.(n?gettext|has_translation)(_|$)/,f=function(e){return"string"!=typeof e||""===e?(console.error("The namespace must be a non-empty string."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(e)||(console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."),!1)},h=function(e){return"string"!=typeof e||""===e?(console.error("The hook name must be a non-empty string."),!1):/^__/.test(e)?(console.error("The hook name cannot begin with `__`."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(e)||(console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."),!1)},g=function(e,t){return function(n,r,o){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10;const s=e[t];if(!h(n))return;if(!f(r))return;if("function"!=typeof o)return void console.error("The hook callback must be a function.");if("number"!=typeof i)return void console.error("If specified, the hook priority must be a number.");const a={callback:o,priority:i,namespace:r};if(s[n]){const e=s[n].handlers;let t;for(t=e.length;t>0&&!(i>=e[t-1].priority);t--);t===e.length?e[t]=a:e.splice(t,0,a),s.__current.forEach((e=>{e.name===n&&e.currentIndex>=t&&e.currentIndex++}))}else s[n]={handlers:[a],runs:0};"hookAdded"!==n&&e.doAction("hookAdded",n,r,o,i)}},m=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(r,o){const i=e[t];if(!h(r))return;if(!n&&!f(o))return;if(!i[r])return 0;let s=0;if(n)s=i[r].handlers.length,i[r]={runs:i[r].runs,handlers:[]};else{const e=i[r].handlers;for(let t=e.length-1;t>=0;t--)e[t].namespace===o&&(e.splice(t,1),s++,i.__current.forEach((e=>{e.name===r&&e.currentIndex>=t&&e.currentIndex--})))}return"hookRemoved"!==r&&e.doAction("hookRemoved",r,o),s}},v=function(e,t){return function(n,r){const o=e[t];return void 0!==r?n in o&&o[n].handlers.some((e=>e.namespace===r)):n in o}},y=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(r){const o=e[t];o[r]||(o[r]={handlers:[],runs:0}),o[r].runs++;const i=o[r].handlers;for(var s=arguments.length,a=new Array(s>1?s-1:0),c=1;c<s;c++)a[c-1]=arguments[c];if(!i||!i.length)return n?a[0]:void 0;const l={name:r,currentIndex:0};for(o.__current.push(l);l.currentIndex<i.length;){const e=i[l.currentIndex].callback.apply(null,a);n&&(a[0]=e),l.currentIndex++}return o.__current.pop(),n?a[0]:void 0}},b=function(e,t){return function(){var n,r;const o=e[t];return null!==(n=null===(r=o.__current[o.__current.length-1])||void 0===r?void 0:r.name)&&void 0!==n?n:null}},x=function(e,t){return function(n){const r=e[t];return void 0===n?void 0!==r.__current[0]:!!r.__current[0]&&n===r.__current[0].name}},_=function(e,t){return function(n){const r=e[t];if(h(n))return r[n]&&r[n].runs?r[n].runs:0}};class w{constructor(){this.actions=Object.create(null),this.actions.__current=[],this.filters=Object.create(null),this.filters.__current=[],this.addAction=g(this,"actions"),this.addFilter=g(this,"filters"),this.removeAction=m(this,"actions"),this.removeFilter=m(this,"filters"),this.hasAction=v(this,"actions"),this.hasFilter=v(this,"filters"),this.removeAllActions=m(this,"actions",!0),this.removeAllFilters=m(this,"filters",!0),this.doAction=y(this,"actions"),this.applyFilters=y(this,"filters",!0),this.currentAction=b(this,"actions"),this.currentFilter=b(this,"filters"),this.doingAction=x(this,"actions"),this.doingFilter=x(this,"filters"),this.didAction=_(this,"actions"),this.didFilter=_(this,"filters")}}const k=new w,{addAction:A,addFilter:S,removeAction:j,removeFilter:F,hasAction:T,hasFilter:O,removeAllActions:E,removeAllFilters:P,doAction:C,applyFilters:I,currentAction:M,currentFilter:N,doingAction:R,doingFilter:D,didAction:L,didFilter:$,actions:U,filters:q}=k,z=((e,t,n)=>{const r=new u({}),o=new Set,i=()=>{o.forEach((e=>e()))},s=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default";r.data[n]={...r.data[n],...e},r.data[n][""]={...p,...null===(t=r.data[n])||void 0===t?void 0:t[""]},delete r.pluralForms[n]},a=(e,t)=>{s(e,t),i()},c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;return r.data[e]||s(void 0,e),r.dcnpgettext(e,t,n,o,i)},l=function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default"},f=(e,t,r)=>{let o=c(r,t,e);return n?(o=n.applyFilters("i18n.gettext_with_context",o,e,t,r),n.applyFilters("i18n.gettext_with_context_"+l(r),o,e,t,r)):o};if(n){const e=e=>{d.test(e)&&i()};n.addAction("hookAdded","core/i18n",e),n.addAction("hookRemoved","core/i18n",e)}return{getLocaleData:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";return r.data[e]},setLocaleData:a,addLocaleData:function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default";r.data[n]={...r.data[n],...e,"":{...p,...null===(t=r.data[n])||void 0===t?void 0:t[""],...null==e?void 0:e[""]}},delete r.pluralForms[n],i()},resetLocaleData:(e,t)=>{r.data={},r.pluralForms={},a(e,t)},subscribe:e=>(o.add(e),()=>o.delete(e)),__:(e,t)=>{let r=c(t,void 0,e);return n?(r=n.applyFilters("i18n.gettext",r,e,t),n.applyFilters("i18n.gettext_"+l(t),r,e,t)):r},_x:f,_n:(e,t,r,o)=>{let i=c(o,void 0,e,t,r);return n?(i=n.applyFilters("i18n.ngettext",i,e,t,r,o),n.applyFilters("i18n.ngettext_"+l(o),i,e,t,r,o)):i},_nx:(e,t,r,o,i)=>{let s=c(i,o,e,t,r);return n?(s=n.applyFilters("i18n.ngettext_with_context",s,e,t,r,o,i),n.applyFilters("i18n.ngettext_with_context_"+l(i),s,e,t,r,o,i)):s},isRTL:()=>"rtl"===f("ltr","text direction"),hasTranslation:(e,t,o)=>{var i,s;const a=t?t+""+e:e;let c=!(null===(i=r.data)||void 0===i||null===(s=i[null!=o?o:"default"])||void 0===s||!s[a]);return n&&(c=n.applyFilters("i18n.has_translation",c,e,t,o),c=n.applyFilters("i18n.has_translation_"+l(o),c,e,t,o)),c}}})(0,0,k),Z=(z.getLocaleData.bind(z),z.setLocaleData.bind(z),z.resetLocaleData.bind(z),z.subscribe.bind(z),z.__.bind(z));z._x.bind(z),z._n.bind(z),z._nx.bind(z),z.isRTL.bind(z),z.hasTranslation.bind(z);const G=(e,t)=>{let n,r,o=e.path;return"string"==typeof e.namespace&&"string"==typeof e.endpoint&&(n=e.namespace.replace(/^\/|\/$/g,""),r=e.endpoint.replace(/^\//,""),o=r?n+"/"+r:n),delete e.namespace,delete e.endpoint,t({...e,path:o})};function H(e){const t=e.split("?"),n=t[1],r=t[0];return n?r+"?"+n.split("&").map((e=>e.split("="))).map((e=>e.map(decodeURIComponent))).sort(((e,t)=>e[0].localeCompare(t[0]))).map((e=>e.map(encodeURIComponent))).map((e=>e.join("="))).join("&"):r}function J(e){try{return decodeURIComponent(e)}catch(t){return e}}function X(e){return(function(e){let t;try{t=new URL(e,"http://example.com").search.substring(1)}catch(e){}if(t)return t}(e)||"").replace(/\+/g,"%20").split("&").reduce(((e,t)=>{const[n,r=""]=t.split("=").filter(Boolean).map(J);return n&&function(e,t,n){const r=t.length,o=r-1;for(let i=0;i<r;i++){let r=t[i];!r&&Array.isArray(e)&&(r=e.length.toString()),r=["__proto__","constructor","prototype"].includes(r)?r.toUpperCase():r;const s=!isNaN(Number(t[i+1]));e[r]=i===o?n:e[r]||(s?[]:{}),Array.isArray(e[r])&&!s&&(e[r]={...e[r]}),e=e[r]}}(e,n.replace(/\]/g,"").split("["),r),e}),Object.create(null))}function K(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;if(!t||!Object.keys(t).length)return e;let n=e;const r=e.indexOf("?");return-1!==r&&(t=Object.assign(X(e),t),n=n.substr(0,r)),n+"?"+function(e){let t="";const n=Object.entries(e);let r;for(;r=n.shift();){let[e,o]=r;if(Array.isArray(o)||o&&o.constructor===Object){const t=Object.entries(o).reverse();for(const[r,o]of t)n.unshift([`${e}[${r}]`,o])}else void 0!==o&&(null===o&&(o=""),t+="&"+[e,o].map(encodeURIComponent).join("="))}return t.substr(1)}(t)}function B(e,t){return Promise.resolve(t?e.body:new window.Response(JSON.stringify(e.body),{status:200,statusText:"OK",headers:e.headers}))}const W=(e,t)=>{let{path:n,url:r,...o}=e;return{...o,url:r&&K(r,t),path:n&&K(n,t)}},Y=e=>e.json?e.json():Promise.reject(e),Q=e=>{const{next:t}=(e=>{if(!e)return{};const t=e.match(/<([^>]+)>; rel="next"/);return t?{next:t[1]}:{}})(e.headers.get("link"));return t},V=async(e,t)=>{if(!1===e.parse)return t(e);if(!(e=>{const t=!!e.path&&-1!==e.path.indexOf("per_page=-1"),n=!!e.url&&-1!==e.url.indexOf("per_page=-1");return t||n})(e))return t(e);const n=await pe({...W(e,{per_page:100}),parse:!1}),r=await Y(n);if(!Array.isArray(r))return r;let o=Q(n);if(!o)return r;let i=[].concat(r);for(;o;){const t=await pe({...e,path:void 0,url:o,parse:!1}),n=await Y(t);i=i.concat(n),o=Q(t)}return i},ee=new Set(["PATCH","PUT","DELETE"]),te="GET";function ne(e,t){return void 0!==function(e,t){return X(e)[t]}(e,t)}const re=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return Promise.resolve(function(e){return arguments.length>1&&void 0!==arguments[1]&&!arguments[1]?e:204===e.status?null:e.json?e.json():Promise.reject(e)}(e,t)).catch((e=>oe(e,t)))};function oe(e){if(arguments.length>1&&void 0!==arguments[1]&&!arguments[1])throw e;return(e=>{const t={code:"invalid_json",message:Z("The response is not a valid JSON response.")};if(!e||!e.json)throw t;return e.json().catch((()=>{throw t}))})(e).then((e=>{const t={code:"unknown_error",message:Z("An unknown error occurred.")};throw e||t}))}const ie={Accept:"application/json, */*;q=0.1"},se={credentials:"include"},ae=[(e,t)=>("string"!=typeof e.url||ne(e.url,"_locale")||(e.url=K(e.url,{_locale:"user"})),"string"!=typeof e.path||ne(e.path,"_locale")||(e.path=K(e.path,{_locale:"user"})),t(e)),G,(e,t)=>{const{method:n=te}=e;return ee.has(n.toUpperCase())&&(e={...e,headers:{...e.headers,"X-HTTP-Method-Override":n,"Content-Type":"application/json"},method:"POST"}),t(e)},V],ce=e=>{if(e.status>=200&&e.status<300)return e;throw e};let le=e=>{const{url:t,path:n,data:r,parse:o=!0,...i}=e;let{body:s,headers:a}=e;return a={...ie,...a},r&&(s=JSON.stringify(r),a["Content-Type"]="application/json"),window.fetch(t||n||window.location.href,{...se,...i,body:s,headers:a}).then((e=>Promise.resolve(e).then(ce).catch((e=>oe(e,o))).then((e=>re(e,o)))),(e=>{if(e&&"AbortError"===e.name)throw e;throw{code:"fetch_error",message:Z("You are probably offline.")}}))};function ue(e){return ae.reduceRight(((e,t)=>n=>t(n,e)),le)(e).catch((t=>"rest_cookie_invalid_nonce"!==t.code?Promise.reject(t):window.fetch(ue.nonceEndpoint).then(ce).then((e=>e.text())).then((t=>(ue.nonceMiddleware.nonce=t,ue(e))))))}ue.use=function(e){ae.unshift(e)},ue.setFetchHandler=function(e){le=e},ue.createNonceMiddleware=function(e){const t=(e,n)=>{const{headers:r={}}=e;for(const o in r)if("x-wp-nonce"===o.toLowerCase()&&r[o]===t.nonce)return n(e);return n({...e,headers:{...r,"X-WP-Nonce":t.nonce}})};return t.nonce=e,t},ue.createPreloadingMiddleware=function(e){const t=Object.fromEntries(Object.entries(e).map((e=>{let[t,n]=e;return[H(t),n]})));return(e,n)=>{const{parse:r=!0}=e;let o=e.path;if(!o&&e.url){const{rest_route:t,...n}=X(e.url);"string"==typeof t&&(o=K(t,n))}if("string"!=typeof o)return n(e);const i=e.method||"GET",s=H(o);if("GET"===i&&t[s]){const e=t[s];return delete t[s],B(e,!!r)}if("OPTIONS"===i&&t[i]&&t[i][s]){const e=t[i][s];return delete t[i][s],B(e,!!r)}return n(e)}},ue.createRootURLMiddleware=e=>(t,n)=>G(t,(t=>{let r,o=t.url,i=t.path;return"string"==typeof i&&(r=e,-1!==e.indexOf("?")&&(i=i.replace("?","&")),i=i.replace(/^\//,""),"string"==typeof r&&-1!==r.indexOf("?")&&(i=i.replace("?","&")),o=r+i),n({...t,url:o})})),ue.fetchAllMiddleware=V,ue.mediaUploadMiddleware=(e,t)=>{if(!function(e){const t=!!e.method&&"POST"===e.method;return(!!e.path&&-1!==e.path.indexOf("/wp/v2/media")||!!e.url&&-1!==e.url.indexOf("/wp/v2/media"))&&t}(e))return t(e);let n=0;const r=e=>(n++,t({path:`/wp/v2/media/${e}/post-process`,method:"POST",data:{action:"create-image-subsizes"},parse:!1}).catch((()=>n<5?r(e):(t({path:`/wp/v2/media/${e}?force=true`,method:"DELETE"}),Promise.reject()))));return t({...e,parse:!1}).catch((t=>{const n=t.headers.get("x-wp-upload-attachment-id");return t.status>=500&&t.status<600&&n?r(n).catch((()=>!1!==e.parse?Promise.reject({code:"post_process",message:Z("Media upload failed. If this is a photo or a large image, please scale it down and try again.")}):Promise.reject(t))):oe(t,e.parse)})).then((t=>re(t,e.parse)))};const pe=ue,de={search:{getSearchResult:(e,t,n)=>pe({path:"newfold-ai/v1/search",method:"POST",data:{user_prompt:e,identifier:t,extra:n}})}};var fe=r(359),he=r.n(fe),ge=r(379),me=r.n(ge),ve=r(795),ye=r.n(ve),be=r(569),xe=r.n(be),_e=r(565),we=r.n(_e),ke=r(216),Ae=r.n(ke),Se=r(589),je=r.n(Se),Fe=r(974),Te={};Te.styleTagTransform=je(),Te.setAttributes=we(),Te.insert=xe().bind(null,"head"),Te.domAPI=ye(),Te.insertStyleElement=Ae(),me()(Fe.Z,Te),Fe.Z&&Fe.Z.locals&&Fe.Z.locals;const Oe=({suggestions:e,onClick:t})=>he().createElement("div",{className:"quick-reply-wrapper"},e&&e.map(((e,n)=>he().createElement("div",{className:"quick-reply-suggestion this-is-it",key:n,onClick:()=>t(e.text)},e.text)))),Ee=function({siteDesc:e,siteTitle:t,siteType:n,siteSubtype:r,siteUrl:o,handleSuggestionClick:i}){const[s,a]=(0,fe.useState)(!1),[c,l]=(0,fe.useState)("Show Suggestions"),[u,p]=(0,fe.useState)([]);return(0,fe.useEffect)((()=>(e&&a(!0),()=>{})),[e]),he().createElement("div",null,he().createElement("button",{className:"button suggestions-button",onClick:i=>{i.preventDefault(),(async()=>{if(e&&t){const i=`current description is ${e} site title is ${t} site type is ${n} sub type is ${r} site url is ${o}`;try{l("Fetching Suggestions...");const e=await de.search.getSearchResult(i,"descgenerator");p(e.result)}catch(e){l("Show Suggestions")}finally{l("Show Suggestions")}}})()}},c),he().createElement(Oe,{suggestions:u,onClick:i}))}})(),o})()));