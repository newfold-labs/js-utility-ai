(()=>{"use strict";var e={n:t=>{var s=t&&t.__esModule?()=>t.default:()=>t;return e.d(s,{a:s}),s},d:(t,s)=>{for(var i in s)e.o(s,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:s[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>c});const s=window.React;var i=e.n(s);const n=window.wp.apiFetch;var o=e.n(n);const r={getSearchResult:(e,t,s)=>o()({path:"newfold-ai/v1/search",method:"POST",data:{user_prompt:e,identifier:t,extra:s}})},a=({suggestions:e,onClick:t})=>i().createElement("div",{className:"quick-reply-wrapper"},e&&e.map(((e,s)=>i().createElement("div",{className:"quick-reply-suggestion this-is-it",key:s,onClick:()=>t(e.text)},e.text)))),c=function({siteDesc:e,siteTitle:t,siteType:n,siteSubtype:o,siteUrl:c,handleSuggestionClick:l}){const[u,g]=(0,s.useState)(!1),[d,p]=(0,s.useState)("Show Suggestions"),[S,y]=(0,s.useState)([]);return(0,s.useEffect)((()=>(e&&g(!0),()=>{})),[e]),i().createElement("div",null,i().createElement("button",{className:"button suggestions-button",onClick:s=>{s.preventDefault(),(async()=>{if(e&&t){const s=`current description is ${e} site title is ${t} site type is ${n} sub type is ${o} site url is ${c}`;try{p("Fetching Suggestions...");const e=await r.getSearchResult(s,"descgenerator");y(e.result)}catch(e){p("Show Suggestions")}finally{p("Show Suggestions")}}})()}},d),i().createElement(a,{suggestions:S,onClick:l}))};window.DescriptionGenerator=t})();