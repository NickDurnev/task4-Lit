(function(u,$){typeof exports=="object"&&typeof module<"u"?$(exports,require("lit")):typeof define=="function"&&define.amd?define(["exports","lit"],$):(u=typeof globalThis<"u"?globalThis:u||self,$(u["fmt-timestamp"]={},u.lit))})(this,function(u,$){"use strict";const z=(n,t)=>{try{const s=new Date(n).getTime()-new Date().getTime(),i=Math.sign(s),o=Math.abs(s),r=new Intl.RelativeTimeFormat(t,{numeric:"auto"}),c=Math.abs(o/1e3);if(c<60)return r.format(i*c,"second");const l=c/60>>0;if(l<60)return r.format(i*l,"minute");const a=l/60>>0;if(a<24)return r.format(i*a,"hour");const v=a/24>>0;if(v<7)return r.format(i*v,"day");const h=v/7>>0;if(h<4)return r.format(i*h,"week");const d=Math.round(o/2592e6);if(d<12)return r.format(i*d,"months");const f=o/31536e6>>0;return r.format(i*f,"years")}catch{return null}},L=(n,t,e,s)=>{try{const i=new Date(n),o={day:"numeric",month:"short",year:i.getFullYear()===s?void 0:"2-digit",timeZone:e};return new Intl.DateTimeFormat(t,o).format(i)}catch{return null}},U=n=>{const t=new Date(n),e=t.getMinutes(),s=t.getHours();if(!t.getSeconds())return t;const o=e+1===60?0:e+1,r=e+1===60?s+1:s;return t.setMinutes(o),t.setHours(r),t.setSeconds(0),t},B=(n,t,e)=>{try{const s=U(n),i={hour:"numeric",minute:"numeric",timeZone:e};return new Intl.DateTimeFormat(t,i).format(s)}catch{return null}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const it=n=>t=>typeof t=="function"?((e,s)=>(customElements.define(e,s),s))(n,t):((e,s)=>{const{kind:i,elements:o}=s;return{kind:i,elements:o,finisher(r){customElements.define(e,r)}}})(n,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nt=(n,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,n)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,n)}};function F(n){return(t,e)=>e!==void 0?((s,i,o)=>{i.constructor.createProperty(o,s)})(n,t,e):nt(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function st(n){return F({...n,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=({finisher:n,descriptor:t})=>(e,s)=>{var i;if(s===void 0){const o=(i=e.originalKey)!==null&&i!==void 0?i:e.key,r=t!=null?{kind:"method",placement:"prototype",key:o,descriptor:t(e.key)}:{...e,key:o};return n!=null&&(r.finisher=function(c){n(c,o)}),r}{const o=e.constructor;t!==void 0&&Object.defineProperty(e,s,t(s)),n==null||n(o,s)}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var R;const ot=((R=window.HTMLSlotElement)===null||R===void 0?void 0:R.prototype.assignedElements)!=null?(n,t)=>n.assignedElements(t):(n,t)=>n.assignedNodes(t).filter(e=>e.nodeType===Node.ELEMENT_NODE);function rt(n){const{slot:t,selector:e}=n??{};return V({descriptor:s=>({get(){var i;const o="slot"+(t?`[name=${t}]`:":not([name])"),r=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(o),c=r!=null?ot(r,n):[];return e?c.filter(l=>l.matches(e)):c},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function lt(n,t,e){let s,i=n;return typeof n=="object"?(i=n.slot,s=n):s={flatten:t},e?rt({slot:i,flatten:t,selector:e}):V({descriptor:o=>({get(){var r,c;const l="slot"+(i?`[name=${i}]`:":not([name])"),a=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(l);return(c=a==null?void 0:a.assignedNodes(s))!==null&&c!==void 0?c:[]},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var O;const S=window,A=S.trustedTypes,W=A?A.createPolicy("lit-html",{createHTML:n=>n}):void 0,j="$lit$",p=`lit$${(Math.random()+"").slice(9)}$`,q="?"+p,at=`<${q}>`,g=document,M=()=>g.createComment(""),H=n=>n===null||typeof n!="object"&&typeof n!="function",Y=Array.isArray,ht=n=>Y(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",P=`[ 	
\f\r]`,w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Z=/-->/g,K=/>/g,_=RegExp(`>|${P}(?:([^\\s"'>=/]+)(${P}*=${P}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),G=/'/g,J=/"/g,Q=/^(?:script|style|textarea|title)$/i,y=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),X=new WeakMap,T=g.createTreeWalker(g,129,null,!1),ct=(n,t)=>{const e=n.length-1,s=[];let i,o=t===2?"<svg>":"",r=w;for(let l=0;l<e;l++){const a=n[l];let v,h,d=-1,f=0;for(;f<a.length&&(r.lastIndex=f,h=r.exec(a),h!==null);)f=r.lastIndex,r===w?h[1]==="!--"?r=Z:h[1]!==void 0?r=K:h[2]!==void 0?(Q.test(h[2])&&(i=RegExp("</"+h[2],"g")),r=_):h[3]!==void 0&&(r=_):r===_?h[0]===">"?(r=i??w,d=-1):h[1]===void 0?d=-2:(d=r.lastIndex-h[2].length,v=h[1],r=h[3]===void 0?_:h[3]==='"'?J:G):r===J||r===G?r=_:r===Z||r===K?r=w:(r=_,i=void 0);const D=r===_&&n[l+1].startsWith("/>")?" ":"";o+=r===w?a+at:d>=0?(s.push(v),a.slice(0,d)+j+a.slice(d)+p+D):a+p+(d===-2?(s.push(void 0),l):D)}const c=o+(n[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[W!==void 0?W.createHTML(c):c,s]};class C{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,r=0;const c=t.length-1,l=this.parts,[a,v]=ct(t,e);if(this.el=C.createElement(a,s),T.currentNode=this.el.content,e===2){const h=this.el.content,d=h.firstChild;d.remove(),h.append(...d.childNodes)}for(;(i=T.nextNode())!==null&&l.length<c;){if(i.nodeType===1){if(i.hasAttributes()){const h=[];for(const d of i.getAttributeNames())if(d.endsWith(j)||d.startsWith(p)){const f=v[r++];if(h.push(d),f!==void 0){const D=i.getAttribute(f.toLowerCase()+j).split(p),I=/([.?@])?(.*)/.exec(f);l.push({type:1,index:o,name:I[2],strings:D,ctor:I[1]==="."?ut:I[1]==="?"?vt:I[1]==="@"?ft:E})}else l.push({type:6,index:o})}for(const d of h)i.removeAttribute(d)}if(Q.test(i.tagName)){const h=i.textContent.split(p),d=h.length-1;if(d>0){i.textContent=A?A.emptyScript:"";for(let f=0;f<d;f++)i.append(h[f],M()),T.nextNode(),l.push({type:2,index:++o});i.append(h[d],M())}}}else if(i.nodeType===8)if(i.data===q)l.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(p,h+1))!==-1;)l.push({type:7,index:o}),h+=p.length-1}o++}}static createElement(t,e){const s=g.createElement("template");return s.innerHTML=t,s}}function b(n,t,e=n,s){var i,o,r,c;if(t===y)return t;let l=s!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[s]:e._$Cl;const a=H(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((o=l==null?void 0:l._$AO)===null||o===void 0||o.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,e,s)),s!==void 0?((r=(c=e)._$Co)!==null&&r!==void 0?r:c._$Co=[])[s]=l:e._$Cl=l),l!==void 0&&(t=b(n,l._$AS(n,t.values),l,s)),t}class dt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:s},parts:i}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:g).importNode(s,!0);T.currentNode=o;let r=T.nextNode(),c=0,l=0,a=i[0];for(;a!==void 0;){if(c===a.index){let v;a.type===2?v=new x(r,r.nextSibling,this,t):a.type===1?v=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(v=new pt(r,this,t)),this._$AV.push(v),a=i[++l]}c!==(a==null?void 0:a.index)&&(r=T.nextNode(),c++)}return o}v(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class x{constructor(t,e,s,i){var o;this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cp=(o=i==null?void 0:i.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=b(this,t,e),H(t)?t===m||t==null||t===""?(this._$AH!==m&&this._$AR(),this._$AH=m):t!==this._$AH&&t!==y&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):ht(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==m&&H(this._$AH)?this._$AA.nextSibling.data=t:this.$(g.createTextNode(t)),this._$AH=t}g(t){var e;const{values:s,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=C.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.v(s);else{const r=new dt(o,this),c=r.u(this.options);r.v(s),this.$(c),this._$AH=r}}_$AC(t){let e=X.get(t.strings);return e===void 0&&X.set(t.strings,e=new C(t)),e}T(t){Y(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new x(this.k(M()),this.k(M()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class E{constructor(t,e,s,i,o){this.type=1,this._$AH=m,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=m}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const o=this.strings;let r=!1;if(o===void 0)t=b(this,t,e,0),r=!H(t)||t!==this._$AH&&t!==y,r&&(this._$AH=t);else{const c=t;let l,a;for(t=o[0],l=0;l<o.length-1;l++)a=b(this,c[s+l],e,l),a===y&&(a=this._$AH[l]),r||(r=!H(a)||a!==this._$AH[l]),a===m?t=m:t!==m&&(t+=(a??"")+o[l+1]),this._$AH[l]=a}r&&!i&&this.j(t)}j(t){t===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ut extends E{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===m?void 0:t}}const mt=A?A.emptyScript:"";class vt extends E{constructor(){super(...arguments),this.type=4}j(t){t&&t!==m?this.element.setAttribute(this.name,mt):this.element.removeAttribute(this.name)}}class ft extends E{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){var s;if((t=(s=b(this,t,e,0))!==null&&s!==void 0?s:m)===y)return;const i=this._$AH,o=t===m&&i!==m||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==m&&(i===m||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}}class pt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){b(this,t)}}const tt=S.litHtmlPolyfillSupport;tt==null||tt(C,x),((O=S.litHtmlVersions)!==null&&O!==void 0?O:S.litHtmlVersions=[]).push("2.7.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},_t=n=>(...t)=>({_$litDirective$:n,values:t});class At{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gt=_t(class extends At{constructor(n){var t;if(super(n),n.type!==$t.ATTRIBUTE||n.name!=="class"||((t=n.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(n){return" "+Object.keys(n).filter(t=>n[t]).join(" ")+" "}update(n,[t]){var e,s;if(this.it===void 0){this.it=new Set,n.strings!==void 0&&(this.nt=new Set(n.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!(!((e=this.nt)===null||e===void 0)&&e.has(o))&&this.it.add(o);return this.render(t)}const i=n.element.classList;this.it.forEach(o=>{o in t||(i.remove(o),this.it.delete(o))});for(const o in t){const r=!!t[o];r===this.it.has(o)||!((s=this.nt)===null||s===void 0)&&s.has(o)||(r?(i.add(o),this.it.add(o)):(i.remove(o),this.it.delete(o)))}return y}}),yt=n=>{try{const t=new Intl.Locale(n);return n}catch{return Intl.DateTimeFormat().resolvedOptions().locale}},Tt=n=>{try{return Intl.DateTimeFormat(void 0,{timeZone:n}).resolvedOptions(),n}catch{return Intl.DateTimeFormat().resolvedOptions().timeZone}};var bt=Object.defineProperty,Ht=Object.getOwnPropertyDescriptor,N=(n,t,e,s)=>{for(var i=s>1?void 0:s?Ht(t,e):t,o=n.length-1,r;o>=0;o--)(r=n[o])&&(i=(s?r(t,e,i):r(i))||i);return s&&i&&bt(t,e,i),i},et=(n=>(n[n.formatRelativeTime=0]="formatRelativeTime",n[n.formatToShort=1]="formatToShort",n[n.formatToTime=2]="formatToTime",n))(et||{});const k=[z],wt=new Date().getFullYear();u.FmtTimestamp=class extends $.LitElement{constructor(){super(...arguments),this.locale="",this.timezone=Intl.DateTimeFormat().resolvedOptions().timeZone,this._slottedContent="",this._formattedData="",this.formatMode=0}willUpdate(t){if(t.has("locale")){const e=yt(this.locale);this.locale=e}if(t.has("timezone")){const e=Tt(this.timezone);this.timezone=e}this._formattedData=k[this.formatMode](this._slottedContent,this.locale,this.timezone,wt)}_changeFormat(t){this.formatMode=(this.formatMode+1)%(Object.keys(et).length-3),k.length<3&&(this.formatMode===2?k.push(L):k.push(B)),this.requestUpdate()}_handleSlotChange(){var t,e;this._slottedContent=(e=(t=this._slottedNodes[0])==null?void 0:t.textContent)==null?void 0:e.trim()}render(){const t={invalid:!this._formattedData};return $.html`
      <slot class="hidden-slot" @slotchange="${this._handleSlotChange}"></slot>
      <button @click="${this._changeFormat}">
        <p class=${gt(t)} title=${this._slottedContent}>
          ${this._formattedData??this._slottedContent}
        </p>
      </button>
    `}},u.FmtTimestamp.styles=$.css`
    .invalid {
      text-decoration-line: underline;
      text-decoration-style: wavy;
      text-decoration-color: #d73774;
    }
    .hidden-slot {
      display: none;
    }
    button {
      cursor: pointer;
      padding: var(--btn-padding);
      background-color: var(--btn-background);
      color: var(--btn-color);
      border: var(--btn-border);
      font-size: var(--btn-fontSize);
      border-radius: var(--btn-borderRadius);
      transition: var(--btn-transition);
    }

    button:hover,
    button:focus {
      background-color: var(--btn-hoverBackground);
      color: var(--btn-hoverColor);
    }
  `,N([lt()],u.FmtTimestamp.prototype,"_slottedNodes",2),N([F({attribute:"locale",reflect:!0})],u.FmtTimestamp.prototype,"locale",2),N([F({attribute:"timezone"})],u.FmtTimestamp.prototype,"timezone",2),N([st()],u.FmtTimestamp.prototype,"_slottedContent",2),u.FmtTimestamp=N([it("fmt-timestamp")],u.FmtTimestamp),u.formatRelativeTime=z,u.formatToShort=L,u.formatToTime=B,u.roundTime=U,Object.defineProperty(u,Symbol.toStringTag,{value:"Module"})});