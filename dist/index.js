!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("DescriptionGenerator",[],t):"object"==typeof exports?exports.DescriptionGenerator=t():e.DescriptionGenerator=t()}(this,(()=>(()=>{var e={774:e=>{e.exports=function(e,t,r,n){var o=r?r.call(n,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var s=Object.keys(e),a=Object.keys(t);if(s.length!==a.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(t),c=0;c<s.length;c++){var u=s[c];if(!i(u))return!1;var l=e[u],p=t[u];if(!1===(o=r?r.call(n,l,p,u):void 0)||void 0===o&&l!==p)return!1}return!0}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,r),s.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nc=void 0;var n={};return(()=>{"use strict";r.r(n),r.d(n,{default:()=>Vt});const e=window.wp.element,t=window.wp.apiFetch;var o=r.n(t);const s="newfold-ai/v1",a={getSearchResult:(e,t,r)=>o()({path:s+"/search",method:"POST",data:{user_prompt:e,identifier:t,extra:r}}),getDefaultSearchResult:()=>o()({path:s+"/search/default",method:"POST"})},i=a;var c=function(){return c=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},c.apply(this,arguments)};function u(e,t,r){if(r||2===arguments.length)for(var n,o=0,s=t.length;o<s;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;const l=window.React;var p=r.n(l),f=r(774),d=r.n(f),h="-ms-",g="-moz-",v="-webkit-",m="comm",y="rule",S="decl",b="@import",w="@keyframes",x="@layer",C=Math.abs,I=String.fromCharCode,P=Object.assign;function E(e){return e.trim()}function A(e,t){return(e=t.exec(e))?e[0]:e}function $(e,t,r){return e.replace(t,r)}function k(e,t){return e.indexOf(t)}function O(e,t){return 0|e.charCodeAt(t)}function R(e,t,r){return e.slice(t,r)}function _(e){return e.length}function j(e){return e.length}function N(e,t){return t.push(e),e}function D(e,t){return e.filter((function(e){return!A(e,t)}))}var T=1,F=1,G=0,z=0,M=0,B="";function L(e,t,r,n,o,s,a,i){return{value:e,root:t,parent:r,type:n,props:o,children:s,line:T,column:F,length:a,return:"",siblings:i}}function W(e,t){return P(L("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Y(e){for(;e.root;)e=W(e.root,{children:[e]});N(e,e.siblings)}function q(){return M=z>0?O(B,--z):0,F--,10===M&&(F=1,T--),M}function H(){return M=z<G?O(B,z++):0,F++,10===M&&(F=1,T++),M}function U(){return O(B,z)}function V(){return z}function Z(e,t){return R(B,e,t)}function J(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function K(e){return E(Z(z-1,ee(91===e?e+2:40===e?e+1:e)))}function Q(e){for(;(M=U())&&M<33;)H();return J(e)>2||J(M)>3?"":" "}function X(e,t){for(;--t&&H()&&!(M<48||M>102||M>57&&M<65||M>70&&M<97););return Z(e,V()+(t<6&&32==U()&&32==H()))}function ee(e){for(;H();)switch(M){case e:return z;case 34:case 39:34!==e&&39!==e&&ee(M);break;case 40:41===e&&ee(e);break;case 92:H()}return z}function te(e,t){for(;H()&&e+M!==57&&(e+M!==84||47!==U()););return"/*"+Z(t,z-1)+"*"+I(47===e?e:H())}function re(e){for(;!J(U());)H();return Z(e,z)}function ne(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function oe(e,t,r,n){switch(e.type){case x:if(e.children.length)break;case b:case S:return e.return=e.return||e.value;case m:return"";case w:return e.return=e.value+"{"+ne(e.children,n)+"}";case y:if(!_(e.value=e.props.join(",")))return""}return _(r=ne(e.children,n))?e.return=e.value+"{"+r+"}":""}function se(e,t,r){switch(function(e,t){return 45^O(e,0)?(((t<<2^O(e,0))<<2^O(e,1))<<2^O(e,2))<<2^O(e,3):0}(e,t)){case 5103:return v+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return v+e+e;case 4789:return g+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return v+e+g+e+h+e+e;case 5936:switch(O(e,t+11)){case 114:return v+e+h+$(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return v+e+h+$(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return v+e+h+$(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return v+e+h+e+e;case 6165:return v+e+h+"flex-"+e+e;case 5187:return v+e+$(e,/(\w+).+(:[^]+)/,v+"box-$1$2"+h+"flex-$1$2")+e;case 5443:return v+e+h+"flex-item-"+$(e,/flex-|-self/g,"")+(A(e,/flex-|baseline/)?"":h+"grid-row-"+$(e,/flex-|-self/g,""))+e;case 4675:return v+e+h+"flex-line-pack"+$(e,/align-content|flex-|-self/g,"")+e;case 5548:return v+e+h+$(e,"shrink","negative")+e;case 5292:return v+e+h+$(e,"basis","preferred-size")+e;case 6060:return v+"box-"+$(e,"-grow","")+v+e+h+$(e,"grow","positive")+e;case 4554:return v+$(e,/([^-])(transform)/g,"$1"+v+"$2")+e;case 6187:return $($($(e,/(zoom-|grab)/,v+"$1"),/(image-set)/,v+"$1"),e,"")+e;case 5495:case 3959:return $(e,/(image-set\([^]*)/,v+"$1$`$1");case 4968:return $($(e,/(.+:)(flex-)?(.*)/,v+"box-pack:$3"+h+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+v+e+e;case 4200:if(!A(e,/flex-|baseline/))return h+"grid-column-align"+R(e,t)+e;break;case 2592:case 3360:return h+$(e,"template-","")+e;case 4384:case 3616:return r&&r.some((function(e,r){return t=r,A(e.props,/grid-\w+-end/)}))?~k(e+(r=r[t].value),"span")?e:h+$(e,"-start","")+e+h+"grid-row-span:"+(~k(r,"span")?A(r,/\d+/):+A(r,/\d+/)-+A(e,/\d+/))+";":h+$(e,"-start","")+e;case 4896:case 4128:return r&&r.some((function(e){return A(e.props,/grid-\w+-start/)}))?e:h+$($(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return $(e,/(.+)-inline(.+)/,v+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_(e)-1-t>6)switch(O(e,t+1)){case 109:if(45!==O(e,t+4))break;case 102:return $(e,/(.+:)(.+)-([^]+)/,"$1"+v+"$2-$3$1"+g+(108==O(e,t+3)?"$3":"$2-$3"))+e;case 115:return~k(e,"stretch")?se($(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return $(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,r,n,o,s,a,i){return h+r+":"+n+i+(o?h+r+"-span:"+(s?a:+a-+n)+i:"")+e}));case 4949:if(121===O(e,t+6))return $(e,":",":"+v)+e;break;case 6444:switch(O(e,45===O(e,14)?18:11)){case 120:return $(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+v+(45===O(e,14)?"inline-":"")+"box$3$1"+v+"$2$3$1"+h+"$2box$3")+e;case 100:return $(e,":",":"+h)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return $(e,"scroll-","scroll-snap-")+e}return e}function ae(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case S:return void(e.return=se(e.value,e.length,r));case w:return ne([W(e,{value:$(e.value,"@","@"+v)})],n);case y:if(e.length)return function(e,t){return e.map(t).join("")}(r=e.props,(function(t){switch(A(t,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Y(W(e,{props:[$(t,/:(read-\w+)/,":"+g+"$1")]})),Y(W(e,{props:[t]})),P(e,{props:D(r,n)});break;case"::placeholder":Y(W(e,{props:[$(t,/:(plac\w+)/,":"+v+"input-$1")]})),Y(W(e,{props:[$(t,/:(plac\w+)/,":"+g+"$1")]})),Y(W(e,{props:[$(t,/:(plac\w+)/,h+"input-$1")]})),Y(W(e,{props:[t]})),P(e,{props:D(r,n)})}return""}))}}function ie(e){return function(e){return B="",e}(ce("",null,null,null,[""],e=function(e){return T=F=1,G=_(B=e),z=0,[]}(e),0,[0],e))}function ce(e,t,r,n,o,s,a,i,c){for(var u=0,l=0,p=a,f=0,d=0,h=0,g=1,v=1,m=1,y=0,S="",b=o,w=s,x=n,C=S;v;)switch(h=y,y=H()){case 40:if(108!=h&&58==O(C,p-1)){-1!=k(C+=$(K(y),"&","&\f"),"&\f")&&(m=-1);break}case 34:case 39:case 91:C+=K(y);break;case 9:case 10:case 13:case 32:C+=Q(h);break;case 92:C+=X(V()-1,7);continue;case 47:switch(U()){case 42:case 47:N(le(te(H(),V()),t,r,c),c);break;default:C+="/"}break;case 123*g:i[u++]=_(C)*m;case 125*g:case 59:case 0:switch(y){case 0:case 125:v=0;case 59+l:-1==m&&(C=$(C,/\f/g,"")),d>0&&_(C)-p&&N(d>32?pe(C+";",n,r,p-1,c):pe($(C," ","")+";",n,r,p-2,c),c);break;case 59:C+=";";default:if(N(x=ue(C,t,r,u,l,o,i,S,b=[],w=[],p,s),s),123===y)if(0===l)ce(C,t,x,x,b,s,p,i,w);else switch(99===f&&110===O(C,3)?100:f){case 100:case 108:case 109:case 115:ce(e,x,x,n&&N(ue(e,x,x,0,0,o,i,S,o,b=[],p,w),w),o,w,p,i,n?b:w);break;default:ce(C,x,x,x,[""],w,0,i,w)}}u=l=d=0,g=m=1,S=C="",p=a;break;case 58:p=1+_(C),d=h;default:if(g<1)if(123==y)--g;else if(125==y&&0==g++&&125==q())continue;switch(C+=I(y),y*g){case 38:m=l>0?1:(C+="\f",-1);break;case 44:i[u++]=(_(C)-1)*m,m=1;break;case 64:45===U()&&(C+=K(H())),f=U(),l=p=_(S=C+=re(V())),y++;break;case 45:45===h&&2==_(C)&&(g=0)}}return s}function ue(e,t,r,n,o,s,a,i,c,u,l,p){for(var f=o-1,d=0===o?s:[""],h=j(d),g=0,v=0,m=0;g<n;++g)for(var S=0,b=R(e,f+1,f=C(v=a[g])),w=e;S<h;++S)(w=E(v>0?d[S]+" "+b:$(b,/&\f/g,d[S])))&&(c[m++]=w);return L(e,t,r,0===o?y:i,c,u,l,p)}function le(e,t,r,n){return L(e,t,r,m,I(M),R(e,2,-2),0,n)}function pe(e,t,r,n,o){return L(e,t,r,S,R(e,0,n),R(e,n+1,-1),n,o)}var fe={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},de="undefined"!=typeof process&&void 0!==process.env&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",he="undefined"!=typeof window&&"HTMLElement"in window,ge=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY&&"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY),ve=(new Set,Object.freeze([])),me=Object.freeze({});var ye=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Se=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,be=/(^-|-$)/g;function we(e){return e.replace(Se,"-").replace(be,"")}var xe=/(a)(d)/gi,Ce=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ie(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=Ce(t%52)+r;return(Ce(t%52)+r).replace(xe,"$1-$2")}var Pe,Ee=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Ae=function(e){return Ee(5381,e)};function $e(e){return"string"==typeof e&&!0}var ke="function"==typeof Symbol&&Symbol.for,Oe=ke?Symbol.for("react.memo"):60115,Re=ke?Symbol.for("react.forward_ref"):60112,_e={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},je={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ne={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},De=((Pe={})[Re]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Pe[Oe]=Ne,Pe);function Te(e){return("type"in(t=e)&&t.type.$$typeof)===Oe?Ne:"$$typeof"in e?De[e.$$typeof]:_e;var t}var Fe=Object.defineProperty,Ge=Object.getOwnPropertyNames,ze=Object.getOwnPropertySymbols,Me=Object.getOwnPropertyDescriptor,Be=Object.getPrototypeOf,Le=Object.prototype;function We(e,t,r){if("string"!=typeof t){if(Le){var n=Be(t);n&&n!==Le&&We(e,n,r)}var o=Ge(t);ze&&(o=o.concat(ze(t)));for(var s=Te(e),a=Te(t),i=0;i<o.length;++i){var c=o[i];if(!(c in je||r&&r[c]||a&&c in a||s&&c in s)){var u=Me(t,c);try{Fe(e,c,u)}catch(e){}}}}return e}function Ye(e){return"function"==typeof e}function qe(e){return"object"==typeof e&&"styledComponentId"in e}function He(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ue(e,t){if(0===e.length)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function Ve(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ze(e,t,r){if(void 0===r&&(r=!1),!r&&!Ve(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Ze(e[n],t[n]);else if(Ve(t))for(var n in t)e[n]=Ze(e[n],t[n]);return e}function Je(e,t){Object.defineProperty(e,"toString",{value:t})}function Ke(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Qe=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,o=n;e>=o;)if((o<<=1)<0)throw Ke(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=n;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(e+1),i=(s=0,t.length);s<i;s++)this.tag.insertRule(a,t[s])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var o=r;o<n;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),o=n+r,s=n;s<o;s++)t+="".concat(this.tag.getRule(s)).concat("/*!sc*/\n");return t},e}(),Xe=new Map,et=new Map,tt=1,rt=function(e){if(Xe.has(e))return Xe.get(e);for(;et.has(tt);)tt++;var t=tt++;return Xe.set(e,t),et.set(t,e),t},nt=function(e,t){Xe.set(e,t),et.set(t,e)},ot="style[".concat(de,"][").concat("data-styled-version",'="').concat("6.0.5",'"]'),st=new RegExp("^".concat(de,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),at=function(e,t,r){for(var n,o=r.split(","),s=0,a=o.length;s<a;s++)(n=o[s])&&e.registerName(t,n)},it=function(e,t){for(var r,n=(null!==(r=t.textContent)&&void 0!==r?r:"").split("/*!sc*/\n"),o=[],s=0,a=n.length;s<a;s++){var i=n[s].trim();if(i){var c=i.match(st);if(c){var u=0|parseInt(c[1],10),l=c[2];0!==u&&(nt(l,u),at(e,l,c[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(i)}}};function ct(){return r.nc}var ut=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(de,"]")));return t[t.length-1]}(r),s=void 0!==o?o.nextSibling:null;n.setAttribute(de,"active"),n.setAttribute("data-styled-version","6.0.5");var a=ct();return a&&n.setAttribute("nonce",a),r.insertBefore(n,s),n},lt=function(){function e(e){this.element=ut(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var o=t[r];if(o.ownerNode===e)return o}throw Ke(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),pt=function(){function e(e){this.element=ut(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),ft=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),dt=he,ht={isServer:!he,useCSSOMInjection:!ge},gt=function(){function e(e,t,r){void 0===e&&(e=me),void 0===t&&(t={});var n=this;this.options=c(c({},ht),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&he&&dt&&(dt=!1,function(e){for(var t=document.querySelectorAll(ot),r=0,n=t.length;r<n;r++){var o=t[r];o&&"active"!==o.getAttribute(de)&&(it(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this)),Je(this,(function(){return function(e){for(var t=e.getTag(),r=t.length,n="",o=function(r){var o=function(e){return et.get(e)}(r);if(void 0===o)return"continue";var s=e.names.get(o),a=t.getGroup(r);if(void 0===s||0===a.length)return"continue";var i="".concat(de,".g").concat(r,'[id="').concat(o,'"]'),c="";void 0!==s&&s.forEach((function(e){e.length>0&&(c+="".concat(e,","))})),n+="".concat(a).concat(i,'{content:"').concat(c,'"}').concat("/*!sc*/\n")},s=0;s<r;s++)o(s);return n}(n)}))}return e.registerId=function(e){return rt(e)},e.prototype.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(c(c({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,r=e.target;return e.isServer?new ft(r):t?new lt(r):new pt(r)}(this.options),new Qe(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(rt(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},e.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(rt(e),r)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(rt(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),vt=/&/g,mt=/^\s*\/\/.*$/gm;function yt(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=yt(e.children,t)),e}))}function St(e){var t,r,n,o=void 0===e?me:e,s=o.options,a=void 0===s?me:s,i=o.plugins,c=void 0===i?ve:i,u=function(e,n,o){return o===r||o.startsWith(r)&&o.endsWith(r)&&o.replaceAll(r,"").length>0?".".concat(t):e},l=c.slice();l.push((function(e){e.type===y&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(vt,r).replace(n,u))})),a.prefix&&l.push(ae),l.push(oe);var p=function(e,o,s,i){void 0===o&&(o=""),void 0===s&&(s=""),void 0===i&&(i="&"),t=i,r=o,n=new RegExp("\\".concat(r,"\\b"),"g");var c=e.replace(mt,""),u=ie(s||o?"".concat(s," ").concat(o," { ").concat(c," }"):c);a.namespace&&(u=yt(u,a.namespace));var p,f,d,h=[];return ne(u,(p=l.concat((d=function(e){return h.push(e)},function(e){e.root||(e=e.return)&&d(e)})),f=j(p),function(e,t,r,n){for(var o="",s=0;s<f;s++)o+=p[s](e,t,r,n)||"";return o})),h};return p.hash=c.length?c.reduce((function(e,t){return t.name||Ke(15),Ee(e,t.name)}),5381).toString():"",p}var bt=new gt,wt=St(),xt=p().createContext({shouldForwardProp:void 0,styleSheet:bt,stylis:wt}),Ct=(xt.Consumer,p().createContext(void 0));function It(){return(0,l.useContext)(xt)}function Pt(e){var t=(0,l.useState)(e.stylisPlugins),r=t[0],n=t[1],o=It().styleSheet,s=(0,l.useMemo)((function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,o]),a=(0,l.useMemo)((function(){return St({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})}),[e.enableVendorPrefixes,e.namespace,r]);return(0,l.useEffect)((function(){d()(r,e.stylisPlugins)||n(e.stylisPlugins)}),[e.stylisPlugins]),p().createElement(xt.Provider,{value:{shouldForwardProp:e.shouldForwardProp,styleSheet:s,stylis:a}},p().createElement(Ct.Provider,{value:a},e.children))}var Et=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=wt);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Je(this,(function(){throw Ke(12,String(r.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=wt),this.name+e.hash},e}(),At=function(e){return e>="A"&&e<="Z"};function $t(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(1===r&&"-"===n&&"-"===e[0])return e;At(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var kt=function(e){return null==e||!1===e||""===e},Ot=function(e){var t,r,n=[];for(var o in e){var s=e[o];e.hasOwnProperty(o)&&!kt(s)&&(Array.isArray(s)&&s.isCss||Ye(s)?n.push("".concat($t(o),":"),s,";"):Ve(s)?n.push.apply(n,u(u(["".concat(o," {")],Ot(s),!1),["}"],!1)):n.push("".concat($t(o),": ").concat((t=o,null==(r=s)||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||t in fe||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function Rt(e,t,r,n){return kt(e)?[]:qe(e)?[".".concat(e.styledComponentId)]:Ye(e)?!Ye(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:Rt(e(t),t,r,n):e instanceof Et?r?(e.inject(r,n),[e.getName(n)]):[e]:Ve(e)?Ot(e):Array.isArray(e)?Array.prototype.concat.apply(ve,e.map((function(e){return Rt(e,t,r,n)}))):[e.toString()];var o}function _t(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Ye(r)&&!qe(r))return!1}return!0}var jt=Ae("6.0.5"),Nt=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&_t(e),this.componentId=t,this.baseHash=Ee(jt,t),this.baseStyle=r,gt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=He(n,this.staticRulesId);else{var o=Ue(Rt(this.rules,e,t,r)),s=Ie(Ee(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);t.insertRules(this.componentId,s,a)}n=He(n,s),this.staticRulesId=s}else{for(var i=Ee(this.baseHash,r.hash),c="",u=0;u<this.rules.length;u++){var l=this.rules[u];if("string"==typeof l)c+=l;else if(l){var p=Ue(Rt(l,e,t,r));i=Ee(i,p),c+=p}}if(c){var f=Ie(i>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,r(c,".".concat(f),void 0,this.componentId)),n=He(n,f)}}return n},e}(),Dt=p().createContext(void 0);Dt.Consumer;var Tt={};function Ft(e,t,r){var n=qe(e),o=e,s=!$e(e),a=t.attrs,i=void 0===a?ve:a,u=t.componentId,f=void 0===u?function(e,t){var r="string"!=typeof e?"sc":we(e);Tt[r]=(Tt[r]||0)+1;var n="".concat(r,"-").concat(function(e){return Ie(Ae(e)>>>0)}("6.0.5"+r+Tt[r]));return t?"".concat(t,"-").concat(n):n}(t.displayName,t.parentComponentId):u,d=(void 0===t.displayName&&function(e){$e(e)?"styled.".concat(e):"Styled(".concat(function(e){return e.displayName||e.name||"Component"}(e),")")}(e),t.displayName&&t.componentId?"".concat(we(t.displayName),"-").concat(t.componentId):t.componentId||f),h=n&&o.attrs?o.attrs.concat(i).filter(Boolean):i,g=t.shouldForwardProp;if(n&&o.shouldForwardProp){var v=o.shouldForwardProp;if(t.shouldForwardProp){var m=t.shouldForwardProp;g=function(e,t){return v(e,t)&&m(e,t)}}else g=v}var y=new Nt(r,d,n?o.componentStyle:void 0),S=p().forwardRef((function(e,t){return function(e,t,r){var n=e.attrs,o=e.componentStyle,s=e.defaultProps,a=e.foldedComponentIds,i=e.styledComponentId,u=e.target,f=p().useContext(Dt),d=It(),h=e.shouldForwardProp||d.shouldForwardProp,g=function(e,t,r){for(var n,o=c(c({},t),{className:void 0,theme:r}),s=0;s<e.length;s+=1){var a=Ye(n=e[s])?n(o):n;for(var i in a)o[i]="className"===i?He(o[i],a[i]):"style"===i?c(c({},o[i]),a[i]):a[i]}return t.className&&(o.className=He(o.className,t.className)),o}(n,t,function(e,t,r){return void 0===r&&(r=me),e.theme!==r.theme&&e.theme||t||r.theme}(t,f,s)||me),v=g.as||u,m={};for(var y in g)void 0===g[y]||"$"===y[0]||"as"===y||"theme"===y||("forwardedAs"===y?m.as=g.forwardedAs:h&&!h(y,v)||(m[y]=g[y]));var S=function(e,t){var r=It();return e.generateAndInjectStyles(t,r.styleSheet,r.stylis)}(o,g),b=He(a,i);return S&&(b+=" "+S),g.className&&(b+=" "+g.className),m[$e(v)&&!ye.has(v)?"class":"className"]=b,m.ref=r,(0,l.createElement)(v,m)}(S,e,t)}));return S.attrs=h,S.componentStyle=y,S.shouldForwardProp=g,S.foldedComponentIds=n?He(o.foldedComponentIds,o.styledComponentId):"",S.styledComponentId=d,S.target=n?o.target:e,Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=n?function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=0,o=t;n<o.length;n++)Ze(e,o[n],!0);return e}({},o.defaultProps,e):e}}),Je(S,(function(){return".".concat(S.styledComponentId)})),s&&We(S,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),S}function Gt(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}new Set;var zt=function(e){return Object.assign(e,{isCss:!0})};function Mt(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Ye(e)||Ve(e))return zt(Rt(Gt(ve,u([e],t,!0))));var n=e;return 0===t.length&&1===n.length&&"string"==typeof n[0]?Rt(n):zt(Rt(Gt(n,t)))}function Bt(e,t,r){if(void 0===r&&(r=me),!t)throw Ke(1,t);var n=function(n){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,r,Mt.apply(void 0,u([n],o,!1)))};return n.attrs=function(n){return Bt(e,t,c(c({},r),{attrs:Array.prototype.concat(r.attrs,n).filter(Boolean)}))},n.withConfig=function(n){return Bt(e,t,c(c({},r),n))},n}var Lt=function(e){return Bt(Ft,e)},Wt=Lt;ye.forEach((function(e){Wt[e]=Lt(e)})),function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=_t(e),gt.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,r,n){var o=n(Ue(Rt(this.rules,t,r,n)),""),s=this.componentId+e;r.insertRules(s,s,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,r,n){e>2&&gt.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)}}(),function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),r=ct(),n=Ue([r&&'nonce="'.concat(r,'"'),"".concat(de,'="true"'),"".concat("data-styled-version",'="').concat("6.0.5",'"')].filter(Boolean)," ");return"<style ".concat(n,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw Ke(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw Ke(2);var r=((t={})[de]="",t["data-styled-version"]="6.0.5",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),n=ct();return n&&(r.nonce=n),[p().createElement("style",c({},r,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new gt({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw Ke(2);return p().createElement(Pt,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw Ke(3)}}(),"__sc-".concat(de,"__");const Yt=Wt.button`
  padding: 10px 15px;
  background-color: white;
  border: 2px solid #3575d3;
  outline: none;
  border-radius: 4px;
`,qt=Wt.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  text-align: left;
`,Ht=Wt.div`
  cursor: pointer;
  padding: 12px;
  margin: 4px 0;
  border-radius: 25px;
  border: 1px solid #e0e0e0;

  &:hover {
    background-color: #f0f0f0;
  }
`,Ut=({suggestions:t,onClick:r})=>(0,e.createElement)(qt,null,t&&t.map(((t,n)=>(0,e.createElement)(Ht,{key:n,onClick:()=>r(t.text)},t.text)))),Vt=function({siteDesc:t,siteTitle:r,siteType:n,siteSubtype:o,siteUrl:s,targetElementSelector:a}){const[c,u]=(0,e.useState)("Show Suggestions"),[l,p]=(0,e.useState)([]),[f,d]=(0,e.useState)(!1);return(0,e.useEffect)((()=>{const e=document.querySelector(a);e&&e.value?d(!0):d(!1);const t=()=>{d(!!e.value)};return e?.addEventListener("input",t),()=>{e?.removeEventListener("input",t)}}),[a]),(0,e.createElement)("div",null,f&&(0,e.createElement)(Yt,{onClick:e=>{e.preventDefault(),(async()=>{if(t&&r){const e=`current description is ${t} site title is ${r} site type is ${n} sub type is ${o} site url is ${s}`;try{u("Fetching Suggestions....");const t=await i.getSearchResult(e,"descgenerator");p(t.result)}catch(e){u("Show Suggestions")}finally{u("Show Suggestions")}}})()}},c),(0,e.createElement)(Ut,{suggestions:l,onClick:e=>{const t=document.querySelector(a);t&&(t.value=e)}}))}})(),n})()));