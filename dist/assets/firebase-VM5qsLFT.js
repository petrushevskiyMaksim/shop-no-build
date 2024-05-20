class Md{constructor(){this.itemsBag=[]}set(t){this.itemsBag.push(t.id),console.log(this.itemsBag)}get(){return console.log(this.itemsBag),this.itemsBag}}class Od{constructor(){}set(t){localStorage.setItem("items",JSON.stringify(t))}get(){const t=localStorage.getItem("items");return t?JSON.parse(t):[]}}const oh="items";var Ti={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},ah=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],h=n[e++],c=n[e++],d=((i&7)<<18|(o&63)<<12|(h&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(d>>10)),t[r++]=String.fromCharCode(56320+(d&1023))}else{const o=n[e++],h=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|h&63)}}return t.join("")},go={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],h=i+1<n.length,c=h?n[i+1]:0,d=i+2<n.length,f=d?n[i+2]:0,_=o>>2,A=(o&3)<<4|c>>4;let R=(c&15)<<2|f>>6,V=f&63;d||(V=64,h||(R=64)),r.push(e[_],e[A],e[R],e[V])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(po(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):ah(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],c=i<n.length?e[n.charAt(i)]:0;++i;const f=i<n.length?e[n.charAt(i)]:64;++i;const A=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||c==null||f==null||A==null)throw new hh;const R=o<<2|c>>4;if(r.push(R),f!==64){const V=c<<4&240|f>>2;if(r.push(V),A!==64){const k=f<<6&192|A;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class hh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uh=function(n){const t=po(n);return go.encodeByteArray(t,!0)},kn=function(n){return uh(n).replace(/\./g,"")},ch=function(n){try{return go.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh=()=>lh().__FIREBASE_DEFAULTS__,fh=()=>{if(typeof process>"u"||typeof Ti>"u")return;const n=Ti.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ph=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&ch(n[1]);return t&&JSON.parse(t)},Yr=()=>{try{return dh()||fh()||ph()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},gh=n=>{var t,e;return(e=(t=Yr())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},mh=n=>{const t=gh(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},mo=()=>{var n;return(n=Yr())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[kn(JSON.stringify(e)),kn(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vh(){var n;const t=(n=Yr())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Th(){return!vh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ih(){try{return typeof indexedDB=="object"}catch{return!1}}function wh(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah="FirebaseError";class ye extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Ah,Object.setPrototypeOf(this,ye.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_o.prototype.create)}}class _o{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],h=o?Rh(o,r):"Error",c=`${this.serviceName}: ${h} (${i}).`;return new ye(i,c,r)}}function Rh(n,t){return n.replace(Sh,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Sh=/\{\$([^}]+)}/g;function br(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],h=t[i];if(Ii(o)&&Ii(h)){if(!br(o,h))return!1}else if(o!==h)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function Ii(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(n){return n&&n._delegate?n._delegate:n}class We{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new _h;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(bh(t))try{this.getOrInitializeService({instanceIdentifier:Kt})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Kt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Kt){return this.instances.has(t)}getOptions(t=Kt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,h]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&h.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const h=this.instances.get(i);return h&&t(h,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Vh(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Kt){return this.component?this.component.multipleInstances?t:Kt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vh(n){return n===Kt?void 0:n}function bh(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Ph(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var B;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(B||(B={}));const Nh={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},kh=B.INFO,Mh={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},Oh=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=Mh[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class yo{constructor(t){this.name=t,this._logLevel=kh,this._logHandler=Oh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in B))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Nh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...t),this._logHandler(this,B.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...t),this._logHandler(this,B.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,B.INFO,...t),this._logHandler(this,B.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,B.WARN,...t),this._logHandler(this,B.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...t),this._logHandler(this,B.ERROR,...t)}}const xh=(n,t)=>t.some(e=>n instanceof e);let wi,Ai;function Lh(){return wi||(wi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fh(){return Ai||(Ai=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Eo=new WeakMap,Dr=new WeakMap,vo=new WeakMap,Tr=new WeakMap,Jr=new WeakMap;function Bh(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",h)},o=()=>{e(Lt(n.result)),i()},h=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",h)});return t.then(e=>{e instanceof IDBCursor&&Eo.set(e,n)}).catch(()=>{}),Jr.set(t,n),t}function Uh(n){if(Dr.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",h),n.removeEventListener("abort",h)},o=()=>{e(),i()},h=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",h),n.addEventListener("abort",h)});Dr.set(n,t)}let Nr={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Dr.get(n);if(t==="objectStoreNames")return n.objectStoreNames||vo.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Lt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function qh(n){Nr=n(Nr)}function jh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Ir(this),t,...e);return vo.set(r,t.sort?t.sort():[t]),Lt(r)}:Fh().includes(n)?function(...t){return n.apply(Ir(this),t),Lt(Eo.get(this))}:function(...t){return Lt(n.apply(Ir(this),t))}}function $h(n){return typeof n=="function"?jh(n):(n instanceof IDBTransaction&&Uh(n),xh(n,Lh())?new Proxy(n,Nr):n)}function Lt(n){if(n instanceof IDBRequest)return Bh(n);if(Tr.has(n))return Tr.get(n);const t=$h(n);return t!==n&&(Tr.set(n,t),Jr.set(t,n)),t}const Ir=n=>Jr.get(n);function zh(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const h=indexedDB.open(n,t),c=Lt(h);return r&&h.addEventListener("upgradeneeded",d=>{r(Lt(h.result),d.oldVersion,d.newVersion,Lt(h.transaction),d)}),e&&h.addEventListener("blocked",d=>e(d.oldVersion,d.newVersion,d)),c.then(d=>{o&&d.addEventListener("close",()=>o()),i&&d.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const Hh=["get","getKey","getAll","getAllKeys","count"],Kh=["put","add","delete","clear"],wr=new Map;function Ri(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(wr.get(t))return wr.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=Kh.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Hh.includes(e)))return;const o=async function(h,...c){const d=this.transaction(h,i?"readwrite":"readonly");let f=d.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[e](...c),i&&d.done]))[0]};return wr.set(t,o),o}qh(n=>({...n,get:(t,e,r)=>Ri(t,e)||n.get(t,e,r),has:(t,e)=>!!Ri(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Qh(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Qh(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const kr="@firebase/app",Si="0.10.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt=new yo("@firebase/app"),Wh="@firebase/app-compat",Xh="@firebase/analytics-compat",Yh="@firebase/analytics",Jh="@firebase/app-check-compat",Zh="@firebase/app-check",tu="@firebase/auth",eu="@firebase/auth-compat",nu="@firebase/database",ru="@firebase/database-compat",su="@firebase/functions",iu="@firebase/functions-compat",ou="@firebase/installations",au="@firebase/installations-compat",hu="@firebase/messaging",uu="@firebase/messaging-compat",cu="@firebase/performance",lu="@firebase/performance-compat",du="@firebase/remote-config",fu="@firebase/remote-config-compat",pu="@firebase/storage",gu="@firebase/storage-compat",mu="@firebase/firestore",_u="@firebase/vertexai-preview",yu="@firebase/firestore-compat",Eu="firebase",vu="10.12.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr="[DEFAULT]",Tu={[kr]:"fire-core",[Wh]:"fire-core-compat",[Yh]:"fire-analytics",[Xh]:"fire-analytics-compat",[Zh]:"fire-app-check",[Jh]:"fire-app-check-compat",[tu]:"fire-auth",[eu]:"fire-auth-compat",[nu]:"fire-rtdb",[ru]:"fire-rtdb-compat",[su]:"fire-fn",[iu]:"fire-fn-compat",[ou]:"fire-iid",[au]:"fire-iid-compat",[hu]:"fire-fcm",[uu]:"fire-fcm-compat",[cu]:"fire-perf",[lu]:"fire-perf-compat",[du]:"fire-rc",[fu]:"fire-rc-compat",[pu]:"fire-gcs",[gu]:"fire-gcs-compat",[mu]:"fire-fst",[yu]:"fire-fst-compat",[_u]:"fire-vertex","fire-js":"fire-js",[Eu]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=new Map,Iu=new Map,Or=new Map;function Ci(n,t){try{n.container.addComponent(t)}catch(e){Yt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function On(n){const t=n.name;if(Or.has(t))return Yt.debug(`There were multiple attempts to register component ${t}.`),!1;Or.set(t,n);for(const e of Mn.values())Ci(e,n);for(const e of Iu.values())Ci(e,n);return!0}function wu(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ft=new _o("app","Firebase",Au);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new We("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ft.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su=vu;function To(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Mr,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Ft.create("bad-app-name",{appName:String(i)});if(e||(e=mo()),!e)throw Ft.create("no-options");const o=Mn.get(i);if(o){if(br(e,o.options)&&br(r,o.config))return o;throw Ft.create("duplicate-app",{appName:i})}const h=new Dh(i);for(const d of Or.values())h.addComponent(d);const c=new Ru(e,r,h);return Mn.set(i,c),c}function Cu(n=Mr){const t=Mn.get(n);if(!t&&n===Mr&&mo())return To();if(!t)throw Ft.create("no-app",{appName:n});return t}function he(n,t,e){var r;let i=(r=Tu[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const o=i.match(/\s|\//),h=t.match(/\s|\//);if(o||h){const c=[`Unable to register library "${i}" with version "${t}":`];o&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&h&&c.push("and"),h&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Yt.warn(c.join(" "));return}On(new We(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu="firebase-heartbeat-database",Vu=1,Xe="firebase-heartbeat-store";let Ar=null;function Io(){return Ar||(Ar=zh(Pu,Vu,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Xe)}catch(e){console.warn(e)}}}}).catch(n=>{throw Ft.create("idb-open",{originalErrorMessage:n.message})})),Ar}async function bu(n){try{const e=(await Io()).transaction(Xe),r=await e.objectStore(Xe).get(wo(n));return await e.done,r}catch(t){if(t instanceof ye)Yt.warn(t.message);else{const e=Ft.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Yt.warn(e.message)}}}async function Pi(n,t){try{const r=(await Io()).transaction(Xe,"readwrite");await r.objectStore(Xe).put(t,wo(n)),await r.done}catch(e){if(e instanceof ye)Yt.warn(e.message);else{const r=Ft.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Yt.warn(r.message)}}}function wo(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du=1024,Nu=30*24*60*60*1e3;class ku{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Ou(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Vi();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(h=>h.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const c=new Date(h.date).valueOf();return Date.now()-c<=Nu}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Vi(),{heartbeatsToSend:r,unsentEntries:i}=Mu(this._heartbeatsCache.heartbeats),o=kn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Vi(){return new Date().toISOString().substring(0,10)}function Mu(n,t=Du){const e=[];let r=n.slice();for(const i of n){const o=e.find(h=>h.agent===i.agent);if(o){if(o.dates.push(i.date),bi(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),bi(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Ou{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ih()?wh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await bu(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Pi(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Pi(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function bi(n){return kn(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(n){On(new We("platform-logger",t=>new Gh(t),"PRIVATE")),On(new We("heartbeat",t=>new ku(t),"PRIVATE")),he(kr,Si,n),he(kr,Si,"esm2017"),he("fire-js","")}xu("");var Lu="firebase",Fu="10.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */he(Lu,Fu,"app");var Di=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qt,Ao;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,p){function m(){}m.prototype=p.prototype,v.D=p.prototype,v.prototype=new m,v.prototype.constructor=v,v.C=function(y,E,I){for(var g=Array(arguments.length-2),Ct=2;Ct<arguments.length;Ct++)g[Ct-2]=arguments[Ct];return p.prototype[E].apply(y,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,p,m){m||(m=0);var y=Array(16);if(typeof p=="string")for(var E=0;16>E;++E)y[E]=p.charCodeAt(m++)|p.charCodeAt(m++)<<8|p.charCodeAt(m++)<<16|p.charCodeAt(m++)<<24;else for(E=0;16>E;++E)y[E]=p[m++]|p[m++]<<8|p[m++]<<16|p[m++]<<24;p=v.g[0],m=v.g[1],E=v.g[2];var I=v.g[3],g=p+(I^m&(E^I))+y[0]+3614090360&4294967295;p=m+(g<<7&4294967295|g>>>25),g=I+(E^p&(m^E))+y[1]+3905402710&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(m^I&(p^m))+y[2]+606105819&4294967295,E=I+(g<<17&4294967295|g>>>15),g=m+(p^E&(I^p))+y[3]+3250441966&4294967295,m=E+(g<<22&4294967295|g>>>10),g=p+(I^m&(E^I))+y[4]+4118548399&4294967295,p=m+(g<<7&4294967295|g>>>25),g=I+(E^p&(m^E))+y[5]+1200080426&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(m^I&(p^m))+y[6]+2821735955&4294967295,E=I+(g<<17&4294967295|g>>>15),g=m+(p^E&(I^p))+y[7]+4249261313&4294967295,m=E+(g<<22&4294967295|g>>>10),g=p+(I^m&(E^I))+y[8]+1770035416&4294967295,p=m+(g<<7&4294967295|g>>>25),g=I+(E^p&(m^E))+y[9]+2336552879&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(m^I&(p^m))+y[10]+4294925233&4294967295,E=I+(g<<17&4294967295|g>>>15),g=m+(p^E&(I^p))+y[11]+2304563134&4294967295,m=E+(g<<22&4294967295|g>>>10),g=p+(I^m&(E^I))+y[12]+1804603682&4294967295,p=m+(g<<7&4294967295|g>>>25),g=I+(E^p&(m^E))+y[13]+4254626195&4294967295,I=p+(g<<12&4294967295|g>>>20),g=E+(m^I&(p^m))+y[14]+2792965006&4294967295,E=I+(g<<17&4294967295|g>>>15),g=m+(p^E&(I^p))+y[15]+1236535329&4294967295,m=E+(g<<22&4294967295|g>>>10),g=p+(E^I&(m^E))+y[1]+4129170786&4294967295,p=m+(g<<5&4294967295|g>>>27),g=I+(m^E&(p^m))+y[6]+3225465664&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^m&(I^p))+y[11]+643717713&4294967295,E=I+(g<<14&4294967295|g>>>18),g=m+(I^p&(E^I))+y[0]+3921069994&4294967295,m=E+(g<<20&4294967295|g>>>12),g=p+(E^I&(m^E))+y[5]+3593408605&4294967295,p=m+(g<<5&4294967295|g>>>27),g=I+(m^E&(p^m))+y[10]+38016083&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^m&(I^p))+y[15]+3634488961&4294967295,E=I+(g<<14&4294967295|g>>>18),g=m+(I^p&(E^I))+y[4]+3889429448&4294967295,m=E+(g<<20&4294967295|g>>>12),g=p+(E^I&(m^E))+y[9]+568446438&4294967295,p=m+(g<<5&4294967295|g>>>27),g=I+(m^E&(p^m))+y[14]+3275163606&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^m&(I^p))+y[3]+4107603335&4294967295,E=I+(g<<14&4294967295|g>>>18),g=m+(I^p&(E^I))+y[8]+1163531501&4294967295,m=E+(g<<20&4294967295|g>>>12),g=p+(E^I&(m^E))+y[13]+2850285829&4294967295,p=m+(g<<5&4294967295|g>>>27),g=I+(m^E&(p^m))+y[2]+4243563512&4294967295,I=p+(g<<9&4294967295|g>>>23),g=E+(p^m&(I^p))+y[7]+1735328473&4294967295,E=I+(g<<14&4294967295|g>>>18),g=m+(I^p&(E^I))+y[12]+2368359562&4294967295,m=E+(g<<20&4294967295|g>>>12),g=p+(m^E^I)+y[5]+4294588738&4294967295,p=m+(g<<4&4294967295|g>>>28),g=I+(p^m^E)+y[8]+2272392833&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^m)+y[11]+1839030562&4294967295,E=I+(g<<16&4294967295|g>>>16),g=m+(E^I^p)+y[14]+4259657740&4294967295,m=E+(g<<23&4294967295|g>>>9),g=p+(m^E^I)+y[1]+2763975236&4294967295,p=m+(g<<4&4294967295|g>>>28),g=I+(p^m^E)+y[4]+1272893353&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^m)+y[7]+4139469664&4294967295,E=I+(g<<16&4294967295|g>>>16),g=m+(E^I^p)+y[10]+3200236656&4294967295,m=E+(g<<23&4294967295|g>>>9),g=p+(m^E^I)+y[13]+681279174&4294967295,p=m+(g<<4&4294967295|g>>>28),g=I+(p^m^E)+y[0]+3936430074&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^m)+y[3]+3572445317&4294967295,E=I+(g<<16&4294967295|g>>>16),g=m+(E^I^p)+y[6]+76029189&4294967295,m=E+(g<<23&4294967295|g>>>9),g=p+(m^E^I)+y[9]+3654602809&4294967295,p=m+(g<<4&4294967295|g>>>28),g=I+(p^m^E)+y[12]+3873151461&4294967295,I=p+(g<<11&4294967295|g>>>21),g=E+(I^p^m)+y[15]+530742520&4294967295,E=I+(g<<16&4294967295|g>>>16),g=m+(E^I^p)+y[2]+3299628645&4294967295,m=E+(g<<23&4294967295|g>>>9),g=p+(E^(m|~I))+y[0]+4096336452&4294967295,p=m+(g<<6&4294967295|g>>>26),g=I+(m^(p|~E))+y[7]+1126891415&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~m))+y[14]+2878612391&4294967295,E=I+(g<<15&4294967295|g>>>17),g=m+(I^(E|~p))+y[5]+4237533241&4294967295,m=E+(g<<21&4294967295|g>>>11),g=p+(E^(m|~I))+y[12]+1700485571&4294967295,p=m+(g<<6&4294967295|g>>>26),g=I+(m^(p|~E))+y[3]+2399980690&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~m))+y[10]+4293915773&4294967295,E=I+(g<<15&4294967295|g>>>17),g=m+(I^(E|~p))+y[1]+2240044497&4294967295,m=E+(g<<21&4294967295|g>>>11),g=p+(E^(m|~I))+y[8]+1873313359&4294967295,p=m+(g<<6&4294967295|g>>>26),g=I+(m^(p|~E))+y[15]+4264355552&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~m))+y[6]+2734768916&4294967295,E=I+(g<<15&4294967295|g>>>17),g=m+(I^(E|~p))+y[13]+1309151649&4294967295,m=E+(g<<21&4294967295|g>>>11),g=p+(E^(m|~I))+y[4]+4149444226&4294967295,p=m+(g<<6&4294967295|g>>>26),g=I+(m^(p|~E))+y[11]+3174756917&4294967295,I=p+(g<<10&4294967295|g>>>22),g=E+(p^(I|~m))+y[2]+718787259&4294967295,E=I+(g<<15&4294967295|g>>>17),g=m+(I^(E|~p))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+p&4294967295,v.g[1]=v.g[1]+(E+(g<<21&4294967295|g>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+I&4294967295}r.prototype.u=function(v,p){p===void 0&&(p=v.length);for(var m=p-this.blockSize,y=this.B,E=this.h,I=0;I<p;){if(E==0)for(;I<=m;)i(this,v,I),I+=this.blockSize;if(typeof v=="string"){for(;I<p;)if(y[E++]=v.charCodeAt(I++),E==this.blockSize){i(this,y),E=0;break}}else for(;I<p;)if(y[E++]=v[I++],E==this.blockSize){i(this,y),E=0;break}}this.h=E,this.o+=p},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var p=1;p<v.length-8;++p)v[p]=0;var m=8*this.o;for(p=v.length-8;p<v.length;++p)v[p]=m&255,m/=256;for(this.u(v),v=Array(16),p=m=0;4>p;++p)for(var y=0;32>y;y+=8)v[m++]=this.g[p]>>>y&255;return v};function o(v,p){var m=c;return Object.prototype.hasOwnProperty.call(m,v)?m[v]:m[v]=p(v)}function h(v,p){this.h=p;for(var m=[],y=!0,E=v.length-1;0<=E;E--){var I=v[E]|0;y&&I==p||(m[E]=I,y=!1)}this.g=m}var c={};function d(v){return-128<=v&&128>v?o(v,function(p){return new h([p|0],0>p?-1:0)}):new h([v|0],0>v?-1:0)}function f(v){if(isNaN(v)||!isFinite(v))return A;if(0>v)return D(f(-v));for(var p=[],m=1,y=0;v>=m;y++)p[y]=v/m|0,m*=4294967296;return new h(p,0)}function _(v,p){if(v.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(v.charAt(0)=="-")return D(_(v.substring(1),p));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=f(Math.pow(p,8)),y=A,E=0;E<v.length;E+=8){var I=Math.min(8,v.length-E),g=parseInt(v.substring(E,E+I),p);8>I?(I=f(Math.pow(p,I)),y=y.j(I).add(f(g))):(y=y.j(m),y=y.add(f(g)))}return y}var A=d(0),R=d(1),V=d(16777216);n=h.prototype,n.m=function(){if(L(this))return-D(this).m();for(var v=0,p=1,m=0;m<this.g.length;m++){var y=this.i(m);v+=(0<=y?y:4294967296+y)*p,p*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(k(this))return"0";if(L(this))return"-"+D(this).toString(v);for(var p=f(Math.pow(v,6)),m=this,y="";;){var E=nt(m,p).g;m=X(m,E.j(p));var I=((0<m.g.length?m.g[0]:m.h)>>>0).toString(v);if(m=E,k(m))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function k(v){if(v.h!=0)return!1;for(var p=0;p<v.g.length;p++)if(v.g[p]!=0)return!1;return!0}function L(v){return v.h==-1}n.l=function(v){return v=X(this,v),L(v)?-1:k(v)?0:1};function D(v){for(var p=v.g.length,m=[],y=0;y<p;y++)m[y]=~v.g[y];return new h(m,~v.h).add(R)}n.abs=function(){return L(this)?D(this):this},n.add=function(v){for(var p=Math.max(this.g.length,v.g.length),m=[],y=0,E=0;E<=p;E++){var I=y+(this.i(E)&65535)+(v.i(E)&65535),g=(I>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);y=g>>>16,I&=65535,g&=65535,m[E]=g<<16|I}return new h(m,m[m.length-1]&-2147483648?-1:0)};function X(v,p){return v.add(D(p))}n.j=function(v){if(k(this)||k(v))return A;if(L(this))return L(v)?D(this).j(D(v)):D(D(this).j(v));if(L(v))return D(this.j(D(v)));if(0>this.l(V)&&0>v.l(V))return f(this.m()*v.m());for(var p=this.g.length+v.g.length,m=[],y=0;y<2*p;y++)m[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<v.g.length;E++){var I=this.i(y)>>>16,g=this.i(y)&65535,Ct=v.i(E)>>>16,we=v.i(E)&65535;m[2*y+2*E]+=g*we,K(m,2*y+2*E),m[2*y+2*E+1]+=I*we,K(m,2*y+2*E+1),m[2*y+2*E+1]+=g*Ct,K(m,2*y+2*E+1),m[2*y+2*E+2]+=I*Ct,K(m,2*y+2*E+2)}for(y=0;y<p;y++)m[y]=m[2*y+1]<<16|m[2*y];for(y=p;y<2*p;y++)m[y]=0;return new h(m,0)};function K(v,p){for(;(v[p]&65535)!=v[p];)v[p+1]+=v[p]>>>16,v[p]&=65535,p++}function G(v,p){this.g=v,this.h=p}function nt(v,p){if(k(p))throw Error("division by zero");if(k(v))return new G(A,A);if(L(v))return p=nt(D(v),p),new G(D(p.g),D(p.h));if(L(p))return p=nt(v,D(p)),new G(D(p.g),p.h);if(30<v.g.length){if(L(v)||L(p))throw Error("slowDivide_ only works with positive integers.");for(var m=R,y=p;0>=y.l(v);)m=St(m),y=St(y);var E=st(m,1),I=st(y,1);for(y=st(y,2),m=st(m,2);!k(y);){var g=I.add(y);0>=g.l(v)&&(E=E.add(m),I=g),y=st(y,1),m=st(m,1)}return p=X(v,E.j(p)),new G(E,p)}for(E=A;0<=v.l(p);){for(m=Math.max(1,Math.floor(v.m()/p.m())),y=Math.ceil(Math.log(m)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=f(m),g=I.j(p);L(g)||0<g.l(v);)m-=y,I=f(m),g=I.j(p);k(I)&&(I=R),E=E.add(I),v=X(v,g)}return new G(E,v)}n.A=function(v){return nt(this,v).h},n.and=function(v){for(var p=Math.max(this.g.length,v.g.length),m=[],y=0;y<p;y++)m[y]=this.i(y)&v.i(y);return new h(m,this.h&v.h)},n.or=function(v){for(var p=Math.max(this.g.length,v.g.length),m=[],y=0;y<p;y++)m[y]=this.i(y)|v.i(y);return new h(m,this.h|v.h)},n.xor=function(v){for(var p=Math.max(this.g.length,v.g.length),m=[],y=0;y<p;y++)m[y]=this.i(y)^v.i(y);return new h(m,this.h^v.h)};function St(v){for(var p=v.g.length+1,m=[],y=0;y<p;y++)m[y]=v.i(y)<<1|v.i(y-1)>>>31;return new h(m,v.h)}function st(v,p){var m=p>>5;p%=32;for(var y=v.g.length-m,E=[],I=0;I<y;I++)E[I]=0<p?v.i(I+m)>>>p|v.i(I+m+1)<<32-p:v.i(I+m);return new h(E,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ao=r,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=f,h.fromString=_,Qt=h}).apply(typeof Di<"u"?Di:typeof self<"u"?self:typeof window<"u"?window:{});var An=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ro,So,je,Co,Vn,xr,Po,Vo,bo;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,u){return s==Array.prototype||s==Object.prototype||(s[a]=u.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof An=="object"&&An];for(var a=0;a<s.length;++a){var u=s[a];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=e(this);function i(s,a){if(a)t:{var u=r;s=s.split(".");for(var l=0;l<s.length-1;l++){var T=s[l];if(!(T in u))break t;u=u[T]}s=s[s.length-1],l=u[s],a=a(l),a!=l&&a!=null&&t(u,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var u=0,l=!1,T={next:function(){if(!l&&u<s.length){var w=u++;return{value:a(w,s[w]),done:!1}}return l=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},c=this||self;function d(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function f(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function _(s,a,u){return s.call.apply(s.bind,arguments)}function A(s,a,u){if(!s)throw Error();if(2<arguments.length){var l=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,l),s.apply(a,T)}}return function(){return s.apply(a,arguments)}}function R(s,a,u){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:A,R.apply(null,arguments)}function V(s,a){var u=Array.prototype.slice.call(arguments,1);return function(){var l=u.slice();return l.push.apply(l,arguments),s.apply(this,l)}}function k(s,a){function u(){}u.prototype=a.prototype,s.aa=a.prototype,s.prototype=new u,s.prototype.constructor=s,s.Qb=function(l,T,w){for(var C=Array(arguments.length-2),z=2;z<arguments.length;z++)C[z-2]=arguments[z];return a.prototype[T].apply(l,C)}}function L(s){const a=s.length;if(0<a){const u=Array(a);for(let l=0;l<a;l++)u[l]=s[l];return u}return[]}function D(s,a){for(let u=1;u<arguments.length;u++){const l=arguments[u];if(d(l)){const T=s.length||0,w=l.length||0;s.length=T+w;for(let C=0;C<w;C++)s[T+C]=l[C]}else s.push(l)}}class X{constructor(a,u){this.i=a,this.j=u,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function K(s){return/^[\s\xa0]*$/.test(s)}function G(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function nt(s){return nt[" "](s),s}nt[" "]=function(){};var St=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function st(s,a,u){for(const l in s)a.call(u,s[l],l,s)}function v(s,a){for(const u in s)a.call(void 0,s[u],u,s)}function p(s){const a={};for(const u in s)a[u]=s[u];return a}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,a){let u,l;for(let T=1;T<arguments.length;T++){l=arguments[T];for(u in l)s[u]=l[u];for(let w=0;w<m.length;w++)u=m[w],Object.prototype.hasOwnProperty.call(l,u)&&(s[u]=l[u])}}function E(s){var a=1;s=s.split(":");const u=[];for(;0<a&&s.length;)u.push(s.shift()),a--;return s.length&&u.push(s.join(":")),u}function I(s){c.setTimeout(()=>{throw s},0)}function g(){var s=Yn;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class Ct{constructor(){this.h=this.g=null}add(a,u){const l=we.get();l.set(a,u),this.h?this.h.next=l:this.g=l,this.h=l}}var we=new X(()=>new Ra,s=>s.reset());class Ra{constructor(){this.next=this.g=this.h=null}set(a,u){this.h=a,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let Ae,Re=!1,Yn=new Ct,Ts=()=>{const s=c.Promise.resolve(void 0);Ae=()=>{s.then(Sa)}};var Sa=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(u){I(u)}var a=we;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}Re=!1};function Dt(){this.s=this.s,this.C=this.C}Dt.prototype.s=!1,Dt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Dt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ht(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var Ca=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const u=()=>{};c.addEventListener("test",u,a),c.removeEventListener("test",u,a)}catch{}return s}();function Se(s,a){if(ht.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var u=this.type=s.type,l=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(St){t:{try{nt(a.nodeName);var T=!0;break t}catch{}T=!1}T||(a=null)}}else u=="mouseover"?a=s.fromElement:u=="mouseout"&&(a=s.toElement);this.relatedTarget=a,l?(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Pa[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Se.aa.h.call(this)}}k(Se,ht);var Pa={2:"touch",3:"pen",4:"mouse"};Se.prototype.h=function(){Se.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var on="closure_listenable_"+(1e6*Math.random()|0),Va=0;function ba(s,a,u,l,T){this.listener=s,this.proxy=null,this.src=a,this.type=u,this.capture=!!l,this.ha=T,this.key=++Va,this.da=this.fa=!1}function an(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function hn(s){this.src=s,this.g={},this.h=0}hn.prototype.add=function(s,a,u,l,T){var w=s.toString();s=this.g[w],s||(s=this.g[w]=[],this.h++);var C=Zn(s,a,l,T);return-1<C?(a=s[C],u||(a.fa=!1)):(a=new ba(a,this.src,w,!!l,T),a.fa=u,s.push(a)),a};function Jn(s,a){var u=a.type;if(u in s.g){var l=s.g[u],T=Array.prototype.indexOf.call(l,a,void 0),w;(w=0<=T)&&Array.prototype.splice.call(l,T,1),w&&(an(a),s.g[u].length==0&&(delete s.g[u],s.h--))}}function Zn(s,a,u,l){for(var T=0;T<s.length;++T){var w=s[T];if(!w.da&&w.listener==a&&w.capture==!!u&&w.ha==l)return T}return-1}var tr="closure_lm_"+(1e6*Math.random()|0),er={};function Is(s,a,u,l,T){if(Array.isArray(a)){for(var w=0;w<a.length;w++)Is(s,a[w],u,l,T);return null}return u=Rs(u),s&&s[on]?s.K(a,u,f(l)?!!l.capture:!!l,T):Da(s,a,u,!1,l,T)}function Da(s,a,u,l,T,w){if(!a)throw Error("Invalid event type");var C=f(T)?!!T.capture:!!T,z=rr(s);if(z||(s[tr]=z=new hn(s)),u=z.add(a,u,l,C,w),u.proxy)return u;if(l=Na(),u.proxy=l,l.src=s,l.listener=u,s.addEventListener)Ca||(T=C),T===void 0&&(T=!1),s.addEventListener(a.toString(),l,T);else if(s.attachEvent)s.attachEvent(As(a.toString()),l);else if(s.addListener&&s.removeListener)s.addListener(l);else throw Error("addEventListener and attachEvent are unavailable.");return u}function Na(){function s(u){return a.call(s.src,s.listener,u)}const a=ka;return s}function ws(s,a,u,l,T){if(Array.isArray(a))for(var w=0;w<a.length;w++)ws(s,a[w],u,l,T);else l=f(l)?!!l.capture:!!l,u=Rs(u),s&&s[on]?(s=s.i,a=String(a).toString(),a in s.g&&(w=s.g[a],u=Zn(w,u,l,T),-1<u&&(an(w[u]),Array.prototype.splice.call(w,u,1),w.length==0&&(delete s.g[a],s.h--)))):s&&(s=rr(s))&&(a=s.g[a.toString()],s=-1,a&&(s=Zn(a,u,l,T)),(u=-1<s?a[s]:null)&&nr(u))}function nr(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[on])Jn(a.i,s);else{var u=s.type,l=s.proxy;a.removeEventListener?a.removeEventListener(u,l,s.capture):a.detachEvent?a.detachEvent(As(u),l):a.addListener&&a.removeListener&&a.removeListener(l),(u=rr(a))?(Jn(u,s),u.h==0&&(u.src=null,a[tr]=null)):an(s)}}}function As(s){return s in er?er[s]:er[s]="on"+s}function ka(s,a){if(s.da)s=!0;else{a=new Se(a,this);var u=s.listener,l=s.ha||s.src;s.fa&&nr(s),s=u.call(l,a)}return s}function rr(s){return s=s[tr],s instanceof hn?s:null}var sr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Rs(s){return typeof s=="function"?s:(s[sr]||(s[sr]=function(a){return s.handleEvent(a)}),s[sr])}function ut(){Dt.call(this),this.i=new hn(this),this.M=this,this.F=null}k(ut,Dt),ut.prototype[on]=!0,ut.prototype.removeEventListener=function(s,a,u,l){ws(this,s,a,u,l)};function mt(s,a){var u,l=s.F;if(l)for(u=[];l;l=l.F)u.push(l);if(s=s.M,l=a.type||a,typeof a=="string")a=new ht(a,s);else if(a instanceof ht)a.target=a.target||s;else{var T=a;a=new ht(l,s),y(a,T)}if(T=!0,u)for(var w=u.length-1;0<=w;w--){var C=a.g=u[w];T=un(C,l,!0,a)&&T}if(C=a.g=s,T=un(C,l,!0,a)&&T,T=un(C,l,!1,a)&&T,u)for(w=0;w<u.length;w++)C=a.g=u[w],T=un(C,l,!1,a)&&T}ut.prototype.N=function(){if(ut.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var u=s.g[a],l=0;l<u.length;l++)an(u[l]);delete s.g[a],s.h--}}this.F=null},ut.prototype.K=function(s,a,u,l){return this.i.add(String(s),a,!1,u,l)},ut.prototype.L=function(s,a,u,l){return this.i.add(String(s),a,!0,u,l)};function un(s,a,u,l){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var T=!0,w=0;w<a.length;++w){var C=a[w];if(C&&!C.da&&C.capture==u){var z=C.listener,it=C.ha||C.src;C.fa&&Jn(s.i,C),T=z.call(it,l)!==!1&&T}}return T&&!l.defaultPrevented}function Ss(s,a,u){if(typeof s=="function")u&&(s=R(s,u));else if(s&&typeof s.handleEvent=="function")s=R(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(s,a||0)}function Cs(s){s.g=Ss(()=>{s.g=null,s.i&&(s.i=!1,Cs(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class Ma extends Dt{constructor(a,u){super(),this.m=a,this.l=u,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Cs(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ce(s){Dt.call(this),this.h=s,this.g={}}k(Ce,Dt);var Ps=[];function Vs(s){st(s.g,function(a,u){this.g.hasOwnProperty(u)&&nr(a)},s),s.g={}}Ce.prototype.N=function(){Ce.aa.N.call(this),Vs(this)},Ce.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ir=c.JSON.stringify,Oa=c.JSON.parse,xa=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function or(){}or.prototype.h=null;function bs(s){return s.h||(s.h=s.i())}function Ds(){}var Pe={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ar(){ht.call(this,"d")}k(ar,ht);function hr(){ht.call(this,"c")}k(hr,ht);var jt={},Ns=null;function cn(){return Ns=Ns||new ut}jt.La="serverreachability";function ks(s){ht.call(this,jt.La,s)}k(ks,ht);function Ve(s){const a=cn();mt(a,new ks(a))}jt.STAT_EVENT="statevent";function Ms(s,a){ht.call(this,jt.STAT_EVENT,s),this.stat=a}k(Ms,ht);function _t(s){const a=cn();mt(a,new Ms(a,s))}jt.Ma="timingevent";function Os(s,a){ht.call(this,jt.Ma,s),this.size=a}k(Os,ht);function be(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},a)}function De(){this.g=!0}De.prototype.xa=function(){this.g=!1};function La(s,a,u,l,T,w){s.info(function(){if(s.g)if(w)for(var C="",z=w.split("&"),it=0;it<z.length;it++){var j=z[it].split("=");if(1<j.length){var ct=j[0];j=j[1];var lt=ct.split("_");C=2<=lt.length&&lt[1]=="type"?C+(ct+"="+j+"&"):C+(ct+"=redacted&")}}else C=null;else C=w;return"XMLHTTP REQ ("+l+") [attempt "+T+"]: "+a+`
`+u+`
`+C})}function Fa(s,a,u,l,T,w,C){s.info(function(){return"XMLHTTP RESP ("+l+") [ attempt "+T+"]: "+a+`
`+u+`
`+w+" "+C})}function ee(s,a,u,l){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+Ua(s,u)+(l?" "+l:"")})}function Ba(s,a){s.info(function(){return"TIMEOUT: "+a})}De.prototype.info=function(){};function Ua(s,a){if(!s.g)return a;if(!a)return null;try{var u=JSON.parse(a);if(u){for(s=0;s<u.length;s++)if(Array.isArray(u[s])){var l=u[s];if(!(2>l.length)){var T=l[1];if(Array.isArray(T)&&!(1>T.length)){var w=T[0];if(w!="noop"&&w!="stop"&&w!="close")for(var C=1;C<T.length;C++)T[C]=""}}}}return ir(u)}catch{return a}}var ln={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},xs={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ur;function dn(){}k(dn,or),dn.prototype.g=function(){return new XMLHttpRequest},dn.prototype.i=function(){return{}},ur=new dn;function Nt(s,a,u,l){this.j=s,this.i=a,this.l=u,this.R=l||1,this.U=new Ce(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ls}function Ls(){this.i=null,this.g="",this.h=!1}var Fs={},cr={};function lr(s,a,u){s.L=1,s.v=mn(Pt(a)),s.m=u,s.P=!0,Bs(s,null)}function Bs(s,a){s.F=Date.now(),fn(s),s.A=Pt(s.v);var u=s.A,l=s.R;Array.isArray(l)||(l=[String(l)]),Zs(u.i,"t",l),s.C=0,u=s.j.J,s.h=new Ls,s.g=_i(s.j,u?a:null,!s.m),0<s.O&&(s.M=new Ma(R(s.Y,s,s.g),s.O)),a=s.U,u=s.g,l=s.ca;var T="readystatechange";Array.isArray(T)||(T&&(Ps[0]=T.toString()),T=Ps);for(var w=0;w<T.length;w++){var C=Is(u,T[w],l||a.handleEvent,!1,a.h||a);if(!C)break;a.g[C.key]=C}a=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),Ve(),La(s.i,s.u,s.A,s.l,s.R,s.m)}Nt.prototype.ca=function(s){s=s.target;const a=this.M;a&&Vt(s)==3?a.j():this.Y(s)},Nt.prototype.Y=function(s){try{if(s==this.g)t:{const lt=Vt(this.g);var a=this.g.Ba();const se=this.g.Z();if(!(3>lt)&&(lt!=3||this.g&&(this.h.h||this.g.oa()||oi(this.g)))){this.J||lt!=4||a==7||(a==8||0>=se?Ve(3):Ve(2)),dr(this);var u=this.g.Z();this.X=u;e:if(Us(this)){var l=oi(this.g);s="";var T=l.length,w=Vt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){$t(this),Ne(this);var C="";break e}this.h.i=new c.TextDecoder}for(a=0;a<T;a++)this.h.h=!0,s+=this.h.i.decode(l[a],{stream:!(w&&a==T-1)});l.length=0,this.h.g+=s,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=u==200,Fa(this.i,this.u,this.A,this.l,this.R,lt,u),this.o){if(this.T&&!this.K){e:{if(this.g){var z,it=this.g;if((z=it.g?it.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(z)){var j=z;break e}}j=null}if(u=j)ee(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,fr(this,u);else{this.o=!1,this.s=3,_t(12),$t(this),Ne(this);break t}}if(this.P){u=!0;let Tt;for(;!this.J&&this.C<C.length;)if(Tt=qa(this,C),Tt==cr){lt==4&&(this.s=4,_t(14),u=!1),ee(this.i,this.l,null,"[Incomplete Response]");break}else if(Tt==Fs){this.s=4,_t(15),ee(this.i,this.l,C,"[Invalid Chunk]"),u=!1;break}else ee(this.i,this.l,Tt,null),fr(this,Tt);if(Us(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),lt!=4||C.length!=0||this.h.h||(this.s=1,_t(16),u=!1),this.o=this.o&&u,!u)ee(this.i,this.l,C,"[Invalid Chunked Response]"),$t(this),Ne(this);else if(0<C.length&&!this.W){this.W=!0;var ct=this.j;ct.g==this&&ct.ba&&!ct.M&&(ct.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),Er(ct),ct.M=!0,_t(11))}}else ee(this.i,this.l,C,null),fr(this,C);lt==4&&$t(this),this.o&&!this.J&&(lt==4?fi(this.j,this):(this.o=!1,fn(this)))}else sh(this.g),u==400&&0<C.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),$t(this),Ne(this)}}}catch{}finally{}};function Us(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function qa(s,a){var u=s.C,l=a.indexOf(`
`,u);return l==-1?cr:(u=Number(a.substring(u,l)),isNaN(u)?Fs:(l+=1,l+u>a.length?cr:(a=a.slice(l,l+u),s.C=l+u,a)))}Nt.prototype.cancel=function(){this.J=!0,$t(this)};function fn(s){s.S=Date.now()+s.I,qs(s,s.I)}function qs(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=be(R(s.ba,s),a)}function dr(s){s.B&&(c.clearTimeout(s.B),s.B=null)}Nt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Ba(this.i,this.A),this.L!=2&&(Ve(),_t(17)),$t(this),this.s=2,Ne(this)):qs(this,this.S-s)};function Ne(s){s.j.G==0||s.J||fi(s.j,s)}function $t(s){dr(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,Vs(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function fr(s,a){try{var u=s.j;if(u.G!=0&&(u.g==s||pr(u.h,s))){if(!s.K&&pr(u.h,s)&&u.G==3){try{var l=u.Da.g.parse(a)}catch{l=null}if(Array.isArray(l)&&l.length==3){var T=l;if(T[0]==0){t:if(!u.u){if(u.g)if(u.g.F+3e3<s.F)Tn(u),En(u);else break t;yr(u),_t(18)}}else u.za=T[1],0<u.za-u.T&&37500>T[2]&&u.F&&u.v==0&&!u.C&&(u.C=be(R(u.Za,u),6e3));if(1>=zs(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else Ht(u,11)}else if((s.K||u.g==s)&&Tn(u),!K(a))for(T=u.Da.g.parse(a),a=0;a<T.length;a++){let j=T[a];if(u.T=j[0],j=j[1],u.G==2)if(j[0]=="c"){u.K=j[1],u.ia=j[2];const ct=j[3];ct!=null&&(u.la=ct,u.j.info("VER="+u.la));const lt=j[4];lt!=null&&(u.Aa=lt,u.j.info("SVER="+u.Aa));const se=j[5];se!=null&&typeof se=="number"&&0<se&&(l=1.5*se,u.L=l,u.j.info("backChannelRequestTimeoutMs_="+l)),l=u;const Tt=s.g;if(Tt){const wn=Tt.g?Tt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(wn){var w=l.h;w.g||wn.indexOf("spdy")==-1&&wn.indexOf("quic")==-1&&wn.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(gr(w,w.h),w.h=null))}if(l.D){const vr=Tt.g?Tt.g.getResponseHeader("X-HTTP-Session-Id"):null;vr&&(l.ya=vr,H(l.I,l.D,vr))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-s.F,u.j.info("Handshake RTT: "+u.R+"ms")),l=u;var C=s;if(l.qa=mi(l,l.J?l.ia:null,l.W),C.K){Hs(l.h,C);var z=C,it=l.L;it&&(z.I=it),z.B&&(dr(z),fn(z)),l.g=C}else li(l);0<u.i.length&&vn(u)}else j[0]!="stop"&&j[0]!="close"||Ht(u,7);else u.G==3&&(j[0]=="stop"||j[0]=="close"?j[0]=="stop"?Ht(u,7):_r(u):j[0]!="noop"&&u.l&&u.l.ta(j),u.v=0)}}Ve(4)}catch{}}var ja=class{constructor(s,a){this.g=s,this.map=a}};function js(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function $s(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function zs(s){return s.h?1:s.g?s.g.size:0}function pr(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function gr(s,a){s.g?s.g.add(a):s.h=a}function Hs(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}js.prototype.cancel=function(){if(this.i=Ks(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Ks(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const u of s.g.values())a=a.concat(u.D);return a}return L(s.i)}function $a(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(d(s)){for(var a=[],u=s.length,l=0;l<u;l++)a.push(s[l]);return a}a=[],u=0;for(l in s)a[u++]=s[l];return a}function za(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(d(s)||typeof s=="string"){var a=[];s=s.length;for(var u=0;u<s;u++)a.push(u);return a}a=[],u=0;for(const l in s)a[u++]=l;return a}}}function Gs(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(d(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var u=za(s),l=$a(s),T=l.length,w=0;w<T;w++)a.call(void 0,l[w],u&&u[w],s)}var Qs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ha(s,a){if(s){s=s.split("&");for(var u=0;u<s.length;u++){var l=s[u].indexOf("="),T=null;if(0<=l){var w=s[u].substring(0,l);T=s[u].substring(l+1)}else w=s[u];a(w,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function zt(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof zt){this.h=s.h,pn(this,s.j),this.o=s.o,this.g=s.g,gn(this,s.s),this.l=s.l;var a=s.i,u=new Oe;u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),Ws(this,u),this.m=s.m}else s&&(a=String(s).match(Qs))?(this.h=!1,pn(this,a[1]||"",!0),this.o=ke(a[2]||""),this.g=ke(a[3]||"",!0),gn(this,a[4]),this.l=ke(a[5]||"",!0),Ws(this,a[6]||"",!0),this.m=ke(a[7]||"")):(this.h=!1,this.i=new Oe(null,this.h))}zt.prototype.toString=function(){var s=[],a=this.j;a&&s.push(Me(a,Xs,!0),":");var u=this.g;return(u||a=="file")&&(s.push("//"),(a=this.o)&&s.push(Me(a,Xs,!0),"@"),s.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&s.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&s.push("/"),s.push(Me(u,u.charAt(0)=="/"?Qa:Ga,!0))),(u=this.i.toString())&&s.push("?",u),(u=this.m)&&s.push("#",Me(u,Xa)),s.join("")};function Pt(s){return new zt(s)}function pn(s,a,u){s.j=u?ke(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function gn(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function Ws(s,a,u){a instanceof Oe?(s.i=a,Ya(s.i,s.h)):(u||(a=Me(a,Wa)),s.i=new Oe(a,s.h))}function H(s,a,u){s.i.set(a,u)}function mn(s){return H(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function ke(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Me(s,a,u){return typeof s=="string"?(s=encodeURI(s).replace(a,Ka),u&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Ka(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Xs=/[#\/\?@]/g,Ga=/[#\?:]/g,Qa=/[#\?]/g,Wa=/[#\?@]/g,Xa=/#/g;function Oe(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function kt(s){s.g||(s.g=new Map,s.h=0,s.i&&Ha(s.i,function(a,u){s.add(decodeURIComponent(a.replace(/\+/g," ")),u)}))}n=Oe.prototype,n.add=function(s,a){kt(this),this.i=null,s=ne(this,s);var u=this.g.get(s);return u||this.g.set(s,u=[]),u.push(a),this.h+=1,this};function Ys(s,a){kt(s),a=ne(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function Js(s,a){return kt(s),a=ne(s,a),s.g.has(a)}n.forEach=function(s,a){kt(this),this.g.forEach(function(u,l){u.forEach(function(T){s.call(a,T,l,this)},this)},this)},n.na=function(){kt(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),u=[];for(let l=0;l<a.length;l++){const T=s[l];for(let w=0;w<T.length;w++)u.push(a[l])}return u},n.V=function(s){kt(this);let a=[];if(typeof s=="string")Js(this,s)&&(a=a.concat(this.g.get(ne(this,s))));else{s=Array.from(this.g.values());for(let u=0;u<s.length;u++)a=a.concat(s[u])}return a},n.set=function(s,a){return kt(this),this.i=null,s=ne(this,s),Js(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},n.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function Zs(s,a,u){Ys(s,a),0<u.length&&(s.i=null,s.g.set(ne(s,a),L(u)),s.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var u=0;u<a.length;u++){var l=a[u];const w=encodeURIComponent(String(l)),C=this.V(l);for(l=0;l<C.length;l++){var T=w;C[l]!==""&&(T+="="+encodeURIComponent(String(C[l]))),s.push(T)}}return this.i=s.join("&")};function ne(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function Ya(s,a){a&&!s.j&&(kt(s),s.i=null,s.g.forEach(function(u,l){var T=l.toLowerCase();l!=T&&(Ys(this,l),Zs(this,T,u))},s)),s.j=a}function Ja(s,a){const u=new De;if(c.Image){const l=new Image;l.onload=V(Mt,u,"TestLoadImage: loaded",!0,a,l),l.onerror=V(Mt,u,"TestLoadImage: error",!1,a,l),l.onabort=V(Mt,u,"TestLoadImage: abort",!1,a,l),l.ontimeout=V(Mt,u,"TestLoadImage: timeout",!1,a,l),c.setTimeout(function(){l.ontimeout&&l.ontimeout()},1e4),l.src=s}else a(!1)}function Za(s,a){const u=new De,l=new AbortController,T=setTimeout(()=>{l.abort(),Mt(u,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:l.signal}).then(w=>{clearTimeout(T),w.ok?Mt(u,"TestPingServer: ok",!0,a):Mt(u,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(T),Mt(u,"TestPingServer: error",!1,a)})}function Mt(s,a,u,l,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),l(u)}catch{}}function th(){this.g=new xa}function eh(s,a,u){const l=u||"";try{Gs(s,function(T,w){let C=T;f(T)&&(C=ir(T)),a.push(l+w+"="+encodeURIComponent(C))})}catch(T){throw a.push(l+"type="+encodeURIComponent("_badmap")),T}}function xe(s){this.l=s.Ub||null,this.j=s.eb||!1}k(xe,or),xe.prototype.g=function(){return new _n(this.l,this.j)},xe.prototype.i=function(s){return function(){return s}}({});function _n(s,a){ut.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(_n,ut),n=_n.prototype,n.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,Fe(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Le(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Fe(this)),this.g&&(this.readyState=3,Fe(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ti(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function ti(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?Le(this):Fe(this),this.readyState==3&&ti(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,Le(this))},n.Qa=function(s){this.g&&(this.response=s,Le(this))},n.ga=function(){this.g&&Le(this)};function Le(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Fe(s)}n.setRequestHeader=function(s,a){this.u.append(s,a)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var u=a.next();!u.done;)u=u.value,s.push(u[0]+": "+u[1]),u=a.next();return s.join(`\r
`)};function Fe(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(_n.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function ei(s){let a="";return st(s,function(u,l){a+=l,a+=":",a+=u,a+=`\r
`}),a}function mr(s,a,u){t:{for(l in u){var l=!1;break t}l=!0}l||(u=ei(u),typeof s=="string"?u!=null&&encodeURIComponent(String(u)):H(s,a,u))}function Q(s){ut.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Q,ut);var nh=/^https?$/i,rh=["POST","PUT"];n=Q.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,a,u,l){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ur.g(),this.v=this.o?bs(this.o):bs(ur),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(w){ni(this,w);return}if(s=u||"",u=new Map(this.headers),l)if(Object.getPrototypeOf(l)===Object.prototype)for(var T in l)u.set(T,l[T]);else if(typeof l.keys=="function"&&typeof l.get=="function")for(const w of l.keys())u.set(w,l.get(w));else throw Error("Unknown input type for opt_headers: "+String(l));l=Array.from(u.keys()).find(w=>w.toLowerCase()=="content-type"),T=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call(rh,a,void 0))||l||T||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,C]of u)this.g.setRequestHeader(w,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ii(this),this.u=!0,this.g.send(s),this.u=!1}catch(w){ni(this,w)}};function ni(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,ri(s),yn(s)}function ri(s){s.A||(s.A=!0,mt(s,"complete"),mt(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,mt(this,"complete"),mt(this,"abort"),yn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),yn(this,!0)),Q.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?si(this):this.bb())},n.bb=function(){si(this)};function si(s){if(s.h&&typeof h<"u"&&(!s.v[1]||Vt(s)!=4||s.Z()!=2)){if(s.u&&Vt(s)==4)Ss(s.Ea,0,s);else if(mt(s,"readystatechange"),Vt(s)==4){s.h=!1;try{const C=s.Z();t:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var u;if(!(u=a)){var l;if(l=C===0){var T=String(s.D).match(Qs)[1]||null;!T&&c.self&&c.self.location&&(T=c.self.location.protocol.slice(0,-1)),l=!nh.test(T?T.toLowerCase():"")}u=l}if(u)mt(s,"complete"),mt(s,"success");else{s.m=6;try{var w=2<Vt(s)?s.g.statusText:""}catch{w=""}s.l=w+" ["+s.Z()+"]",ri(s)}}finally{yn(s)}}}}function yn(s,a){if(s.g){ii(s);const u=s.g,l=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||mt(s,"ready");try{u.onreadystatechange=l}catch{}}}function ii(s){s.I&&(c.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function Vt(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<Vt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),Oa(a)}};function oi(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function sh(s){const a={};s=(s.g&&2<=Vt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let l=0;l<s.length;l++){if(K(s[l]))continue;var u=E(s[l]);const T=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const w=a[T]||[];a[T]=w,w.push(u)}v(a,function(l){return l.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Be(s,a,u){return u&&u.internalChannelParams&&u.internalChannelParams[s]||a}function ai(s){this.Aa=0,this.i=[],this.j=new De,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Be("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Be("baseRetryDelayMs",5e3,s),this.cb=Be("retryDelaySeedMs",1e4,s),this.Wa=Be("forwardChannelMaxRetries",2,s),this.wa=Be("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new js(s&&s.concurrentRequestLimit),this.Da=new th,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ai.prototype,n.la=8,n.G=1,n.connect=function(s,a,u,l){_t(0),this.W=s,this.H=a||{},u&&l!==void 0&&(this.H.OSID=u,this.H.OAID=l),this.F=this.X,this.I=mi(this,null,this.W),vn(this)};function _r(s){if(hi(s),s.G==3){var a=s.U++,u=Pt(s.I);if(H(u,"SID",s.K),H(u,"RID",a),H(u,"TYPE","terminate"),Ue(s,u),a=new Nt(s,s.j,a),a.L=2,a.v=mn(Pt(u)),u=!1,c.navigator&&c.navigator.sendBeacon)try{u=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!u&&c.Image&&(new Image().src=a.v,u=!0),u||(a.g=_i(a.j,null),a.g.ea(a.v)),a.F=Date.now(),fn(a)}gi(s)}function En(s){s.g&&(Er(s),s.g.cancel(),s.g=null)}function hi(s){En(s),s.u&&(c.clearTimeout(s.u),s.u=null),Tn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function vn(s){if(!$s(s.h)&&!s.s){s.s=!0;var a=s.Ga;Ae||Ts(),Re||(Ae(),Re=!0),Yn.add(a,s),s.B=0}}function ih(s,a){return zs(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=be(R(s.Ga,s,a),pi(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const T=new Nt(this,this.j,s);let w=this.o;if(this.S&&(w?(w=p(w),y(w,this.S)):w=this.S),this.m!==null||this.O||(T.H=w,w=null),this.P)t:{for(var a=0,u=0;u<this.i.length;u++){e:{var l=this.i[u];if("__data__"in l.map&&(l=l.map.__data__,typeof l=="string")){l=l.length;break e}l=void 0}if(l===void 0)break;if(a+=l,4096<a){a=u;break t}if(a===4096||u===this.i.length-1){a=u+1;break t}}a=1e3}else a=1e3;a=ci(this,T,a),u=Pt(this.I),H(u,"RID",s),H(u,"CVER",22),this.D&&H(u,"X-HTTP-Session-Id",this.D),Ue(this,u),w&&(this.O?a="headers="+encodeURIComponent(String(ei(w)))+"&"+a:this.m&&mr(u,this.m,w)),gr(this.h,T),this.Ua&&H(u,"TYPE","init"),this.P?(H(u,"$req",a),H(u,"SID","null"),T.T=!0,lr(T,u,null)):lr(T,u,a),this.G=2}}else this.G==3&&(s?ui(this,s):this.i.length==0||$s(this.h)||ui(this))};function ui(s,a){var u;a?u=a.l:u=s.U++;const l=Pt(s.I);H(l,"SID",s.K),H(l,"RID",u),H(l,"AID",s.T),Ue(s,l),s.m&&s.o&&mr(l,s.m,s.o),u=new Nt(s,s.j,u,s.B+1),s.m===null&&(u.H=s.o),a&&(s.i=a.D.concat(s.i)),a=ci(s,u,1e3),u.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),gr(s.h,u),lr(u,l,a)}function Ue(s,a){s.H&&st(s.H,function(u,l){H(a,l,u)}),s.l&&Gs({},function(u,l){H(a,l,u)})}function ci(s,a,u){u=Math.min(s.i.length,u);var l=s.l?R(s.l.Na,s.l,s):null;t:{var T=s.i;let w=-1;for(;;){const C=["count="+u];w==-1?0<u?(w=T[0].g,C.push("ofs="+w)):w=0:C.push("ofs="+w);let z=!0;for(let it=0;it<u;it++){let j=T[it].g;const ct=T[it].map;if(j-=w,0>j)w=Math.max(0,T[it].g-100),z=!1;else try{eh(ct,C,"req"+j+"_")}catch{l&&l(ct)}}if(z){l=C.join("&");break t}}}return s=s.i.splice(0,u),a.D=s,l}function li(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;Ae||Ts(),Re||(Ae(),Re=!0),Yn.add(a,s),s.v=0}}function yr(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=be(R(s.Fa,s),pi(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,di(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=be(R(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,_t(10),En(this),di(this))};function Er(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function di(s){s.g=new Nt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=Pt(s.qa);H(a,"RID","rpc"),H(a,"SID",s.K),H(a,"AID",s.T),H(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&H(a,"TO",s.ja),H(a,"TYPE","xmlhttp"),Ue(s,a),s.m&&s.o&&mr(a,s.m,s.o),s.L&&(s.g.I=s.L);var u=s.g;s=s.ia,u.L=1,u.v=mn(Pt(a)),u.m=null,u.P=!0,Bs(u,s)}n.Za=function(){this.C!=null&&(this.C=null,En(this),yr(this),_t(19))};function Tn(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function fi(s,a){var u=null;if(s.g==a){Tn(s),Er(s),s.g=null;var l=2}else if(pr(s.h,a))u=a.D,Hs(s.h,a),l=1;else return;if(s.G!=0){if(a.o)if(l==1){u=a.m?a.m.length:0,a=Date.now()-a.F;var T=s.B;l=cn(),mt(l,new Os(l,u)),vn(s)}else li(s);else if(T=a.s,T==3||T==0&&0<a.X||!(l==1&&ih(s,a)||l==2&&yr(s)))switch(u&&0<u.length&&(a=s.h,a.i=a.i.concat(u)),T){case 1:Ht(s,5);break;case 4:Ht(s,10);break;case 3:Ht(s,6);break;default:Ht(s,2)}}}function pi(s,a){let u=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(u*=2),u*a}function Ht(s,a){if(s.j.info("Error code "+a),a==2){var u=R(s.fb,s),l=s.Xa;const T=!l;l=new zt(l||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||pn(l,"https"),mn(l),T?Ja(l.toString(),u):Za(l.toString(),u)}else _t(2);s.G=0,s.l&&s.l.sa(a),gi(s),hi(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function gi(s){if(s.G=0,s.ka=[],s.l){const a=Ks(s.h);(a.length!=0||s.i.length!=0)&&(D(s.ka,a),D(s.ka,s.i),s.h.i.length=0,L(s.i),s.i.length=0),s.l.ra()}}function mi(s,a,u){var l=u instanceof zt?Pt(u):new zt(u);if(l.g!="")a&&(l.g=a+"."+l.g),gn(l,l.s);else{var T=c.location;l=T.protocol,a=a?a+"."+T.hostname:T.hostname,T=+T.port;var w=new zt(null);l&&pn(w,l),a&&(w.g=a),T&&gn(w,T),u&&(w.l=u),l=w}return u=s.D,a=s.ya,u&&a&&H(l,u,a),H(l,"VER",s.la),Ue(s,l),l}function _i(s,a,u){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new Q(new xe({eb:u})):new Q(s.pa),a.Ha(s.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function yi(){}n=yi.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function In(){}In.prototype.g=function(s,a){return new vt(s,a)};function vt(s,a){ut.call(this),this.g=new ai(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!K(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!K(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new re(this)}k(vt,ut),vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){_r(this.g)},vt.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var u={};u.__data__=s,s=u}else this.u&&(u={},u.__data__=ir(s),s=u);a.i.push(new ja(a.Ya++,s)),a.G==3&&vn(a)},vt.prototype.N=function(){this.g.l=null,delete this.j,_r(this.g),delete this.g,vt.aa.N.call(this)};function Ei(s){ar.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const u in a){s=u;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}k(Ei,ar);function vi(){hr.call(this),this.status=1}k(vi,hr);function re(s){this.g=s}k(re,yi),re.prototype.ua=function(){mt(this.g,"a")},re.prototype.ta=function(s){mt(this.g,new Ei(s))},re.prototype.sa=function(s){mt(this.g,new vi)},re.prototype.ra=function(){mt(this.g,"b")},In.prototype.createWebChannel=In.prototype.g,vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,bo=function(){return new In},Vo=function(){return cn()},Po=jt,xr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ln.NO_ERROR=0,ln.TIMEOUT=8,ln.HTTP_ERROR=6,Vn=ln,xs.COMPLETE="complete",Co=xs,Ds.EventType=Pe,Pe.OPEN="a",Pe.CLOSE="b",Pe.ERROR="c",Pe.MESSAGE="d",ut.prototype.listen=ut.prototype.K,je=Ds,So=xe,Q.prototype.listenOnce=Q.prototype.L,Q.prototype.getLastError=Q.prototype.Ka,Q.prototype.getLastErrorCode=Q.prototype.Ba,Q.prototype.getStatus=Q.prototype.Z,Q.prototype.getResponseJson=Q.prototype.Oa,Q.prototype.getResponseText=Q.prototype.oa,Q.prototype.send=Q.prototype.ea,Q.prototype.setWithCredentials=Q.prototype.Ha,Ro=Q}).apply(typeof An<"u"?An:typeof self<"u"?self:typeof window<"u"?window:{});const Ni="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ee="10.12.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt=new yo("@firebase/firestore");function qe(){return Jt.logLevel}function b(n,...t){if(Jt.logLevel<=B.DEBUG){const e=t.map(Zr);Jt.debug(`Firestore (${Ee}): ${n}`,...e)}}function bt(n,...t){if(Jt.logLevel<=B.ERROR){const e=t.map(Zr);Jt.error(`Firestore (${Ee}): ${n}`,...e)}}function de(n,...t){if(Jt.logLevel<=B.WARN){const e=t.map(Zr);Jt.warn(`Firestore (${Ee}): ${n}`,...e)}}function Zr(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(n="Unexpected state"){const t=`FIRESTORE (${Ee}) INTERNAL ASSERTION FAILED: `+n;throw bt(t),new Error(t)}function tt(n,t){n||x()}function q(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends ye{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Bu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(ft.UNAUTHENTICATED))}shutdown(){}}class Uu{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class qu{constructor(t){this.t=t,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const i=d=>this.i!==r?(r=this.i,e(d)):Promise.resolve();let o=new Wt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Wt,t.enqueueRetryable(()=>i(this.currentUser))};const h=()=>{const d=o;t.enqueueRetryable(async()=>{await d.promise,await i(this.currentUser)})},c=d=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.auth.addAuthTokenListener(this.o),h()};this.t.onInit(d=>c(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?c(d):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Wt)}},0),h()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(tt(typeof r.accessToken=="string"),new Do(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return tt(t===null||typeof t=="string"),new ft(t)}}class ju{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class $u{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new ju(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Hu{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=o=>{o.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const h=o.token!==this.R;return this.R=o.token,b("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(tt(typeof e.token=="string"),this.R=e.token,new zu(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Ku(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%t.length))}return r}}function $(n,t){return n<t?-1:n>t?1:0}function fe(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Et.fromMillis(Date.now())}static fromDate(t){return Et.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new Et(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?$(this.nanoseconds,t.nanoseconds):$(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.timestamp=t}static fromTimestamp(t){return new O(t)}static min(){return new O(new Et(0,0))}static max(){return new O(new Et(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(t,e,r){e===void 0?e=0:e>t.length&&x(),r===void 0?r=t.length-e:r>t.length-e&&x(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Ye.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ye?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=t.get(i),h=e.get(i);if(o<h)return-1;if(o>h)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class W extends Ye{construct(t,e,r){return new W(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new N(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new W(e)}static emptyPath(){return new W([])}}const Qu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends Ye{construct(t,e,r){return new yt(t,e,r)}static isValidIdentifier(t){return Qu.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new yt(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new N(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let h=!1;for(;i<t.length;){const c=t[i];if(c==="\\"){if(i+1===t.length)throw new N(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const d=t[i+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new N(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=d,i+=2}else c==="`"?(h=!h,i++):c!=="."||h?(r+=c,i++):(o(),i++)}if(o(),h)throw new N(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new yt(e)}static emptyPath(){return new yt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(W.fromString(t))}static fromName(t){return new M(W.fromString(t).popFirst(5))}static empty(){return new M(W.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&W.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return W.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new W(t.slice()))}}function Wu(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=O.fromTimestamp(r===1e9?new Et(e+1,0):new Et(e,r));return new Bt(i,M.empty(),t)}function Xu(n){return new Bt(n.readTime,n.key,-1)}class Bt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Bt(O.min(),M.empty(),-1)}static max(){return new Bt(O.max(),M.empty(),-1)}}function Yu(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(n.documentKey,t.documentKey),e!==0?e:$(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Zu{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ts(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==Ju)throw n;b("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&x(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new S((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof S?e:S.resolve(e)}catch(e){return S.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):S.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):S.reject(e)}static resolve(t){return new S((e,r)=>{e(t)})}static reject(t){return new S((e,r)=>{r(t)})}static waitFor(t){return new S((e,r)=>{let i=0,o=0,h=!1;t.forEach(c=>{++i,c.next(()=>{++o,h&&o===i&&e()},d=>r(d))}),h=!0,o===i&&e()})}static or(t){let e=S.resolve(!1);for(const r of t)e=e.next(i=>i?S.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,o)=>{r.push(e.call(this,i,o))}),this.waitFor(r)}static mapArray(t,e){return new S((r,i)=>{const o=t.length,h=new Array(o);let c=0;for(let d=0;d<o;d++){const f=d;e(t[f]).next(_=>{h[f]=_,++c,c===o&&r(h)},_=>i(_))}})}static doWhile(t,e){return new S((r,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):r()};o()})}}function tc(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function en(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}es.oe=-1;function qn(n){return n==null}function Lr(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function jn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function ec(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,e){this.comparator=t,this.root=e||ot.EMPTY}insert(t,e){return new Y(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(t){return new Y(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ot.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Rn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Rn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Rn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Rn(this.root,t,this.comparator,!0)}}class Rn{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ot{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??ot.RED,this.left=i??ot.EMPTY,this.right=o??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new ot(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return ot.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw x();const t=this.left.check();if(t!==this.right.check())throw x();return t+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw x()}get value(){throw x()}get color(){throw x()}get left(){throw x()}get right(){throw x()}copy(t,e,r,i,o){return this}insert(t,e,r){return new ot(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t){this.comparator=t,this.data=new Y(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Mi(this.data.getIterator())}getIteratorFrom(t){return new Mi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof at)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new at(this.comparator);return e.data=t,e}}class Mi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t){this.fields=t,t.sort(yt.comparator)}static empty(){return new Ot([])}unionWith(t){let e=new at(yt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Ot(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return fe(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new No("Invalid base64 string: "+o):o}}(t);return new gt(e)}static fromUint8Array(t){const e=function(i){let o="";for(let h=0;h<i.length;++h)o+=String.fromCharCode(i[h]);return o}(t);return new gt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return $(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}gt.EMPTY_BYTE_STRING=new gt("");const nc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ut(n){if(tt(!!n),typeof n=="string"){let t=0;const e=nc.exec(n);if(tt(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Z(n.seconds),nanos:Z(n.nanos)}}function Z(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Zt(n){return typeof n=="string"?gt.fromBase64String(n):gt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function rs(n){const t=n.mapValue.fields.__previous_value__;return ns(t)?rs(t):t}function Je(n){const t=Ut(n.mapValue.fields.__local_write_time__.timestampValue);return new Et(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(t,e,r,i,o,h,c,d,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=h,this.autoDetectLongPolling=c,this.longPollingOptions=d,this.useFetchStreams=f}}class Ze{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Ze("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ze&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function te(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ns(n)?4:sc(n)?9007199254740991:10:x()}function At(n,t){if(n===t)return!0;const e=te(n);if(e!==te(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Je(n).isEqual(Je(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const h=Ut(i.timestampValue),c=Ut(o.timestampValue);return h.seconds===c.seconds&&h.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return Zt(i.bytesValue).isEqual(Zt(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return Z(i.geoPointValue.latitude)===Z(o.geoPointValue.latitude)&&Z(i.geoPointValue.longitude)===Z(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Z(i.integerValue)===Z(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const h=Z(i.doubleValue),c=Z(o.doubleValue);return h===c?Lr(h)===Lr(c):isNaN(h)&&isNaN(c)}return!1}(n,t);case 9:return fe(n.arrayValue.values||[],t.arrayValue.values||[],At);case 10:return function(i,o){const h=i.mapValue.fields||{},c=o.mapValue.fields||{};if(ki(h)!==ki(c))return!1;for(const d in h)if(h.hasOwnProperty(d)&&(c[d]===void 0||!At(h[d],c[d])))return!1;return!0}(n,t);default:return x()}}function tn(n,t){return(n.values||[]).find(e=>At(e,t))!==void 0}function pe(n,t){if(n===t)return 0;const e=te(n),r=te(t);if(e!==r)return $(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return $(n.booleanValue,t.booleanValue);case 2:return function(o,h){const c=Z(o.integerValue||o.doubleValue),d=Z(h.integerValue||h.doubleValue);return c<d?-1:c>d?1:c===d?0:isNaN(c)?isNaN(d)?0:-1:1}(n,t);case 3:return Oi(n.timestampValue,t.timestampValue);case 4:return Oi(Je(n),Je(t));case 5:return $(n.stringValue,t.stringValue);case 6:return function(o,h){const c=Zt(o),d=Zt(h);return c.compareTo(d)}(n.bytesValue,t.bytesValue);case 7:return function(o,h){const c=o.split("/"),d=h.split("/");for(let f=0;f<c.length&&f<d.length;f++){const _=$(c[f],d[f]);if(_!==0)return _}return $(c.length,d.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,h){const c=$(Z(o.latitude),Z(h.latitude));return c!==0?c:$(Z(o.longitude),Z(h.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(o,h){const c=o.values||[],d=h.values||[];for(let f=0;f<c.length&&f<d.length;++f){const _=pe(c[f],d[f]);if(_)return _}return $(c.length,d.length)}(n.arrayValue,t.arrayValue);case 10:return function(o,h){if(o===Sn.mapValue&&h===Sn.mapValue)return 0;if(o===Sn.mapValue)return 1;if(h===Sn.mapValue)return-1;const c=o.fields||{},d=Object.keys(c),f=h.fields||{},_=Object.keys(f);d.sort(),_.sort();for(let A=0;A<d.length&&A<_.length;++A){const R=$(d[A],_[A]);if(R!==0)return R;const V=pe(c[d[A]],f[_[A]]);if(V!==0)return V}return $(d.length,_.length)}(n.mapValue,t.mapValue);default:throw x()}}function Oi(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return $(n,t);const e=Ut(n),r=Ut(t),i=$(e.seconds,r.seconds);return i!==0?i:$(e.nanos,r.nanos)}function ge(n){return Fr(n)}function Fr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Ut(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Zt(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return M.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=Fr(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const h of r)o?o=!1:i+=",",i+=`${h}:${Fr(e.fields[h])}`;return i+"}"}(n.mapValue):x()}function Br(n){return!!n&&"integerValue"in n}function ss(n){return!!n&&"arrayValue"in n}function xi(n){return!!n&&"nullValue"in n}function Li(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Rr(n){return!!n&&"mapValue"in n}function He(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return jn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=He(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=He(n.arrayValue.values[e]);return t}return Object.assign({},n)}function sc(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.value=t}static empty(){return new It({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Rr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=He(e)}setAll(t){let e=yt.emptyPath(),r={},i=[];t.forEach((h,c)=>{if(!e.isImmediateParentOf(c)){const d=this.getFieldsMap(e);this.applyChanges(d,r,i),r={},i=[],e=c.popLast()}h?r[c.lastSegment()]=He(h):i.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());Rr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return At(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];Rr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){jn(e,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new It(He(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t,e,r,i,o,h,c){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=h,this.documentState=c}static newInvalidDocument(t){return new pt(t,0,O.min(),O.min(),O.min(),It.empty(),0)}static newFoundDocument(t,e,r,i){return new pt(t,1,e,O.min(),r,i,0)}static newNoDocument(t,e){return new pt(t,2,e,O.min(),O.min(),It.empty(),0)}static newUnknownDocument(t,e){return new pt(t,3,e,O.min(),O.min(),It.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(O.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=O.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof pt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(t,e){this.position=t,this.inclusive=e}}function Fi(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],h=n.position[i];if(o.field.isKeyField()?r=M.comparator(M.fromName(h.referenceValue),e.key):r=pe(h,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Bi(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!At(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(t,e="asc"){this.field=t,this.dir=e}}function ic(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{}class et extends ko{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new ac(t,e,r):e==="array-contains"?new cc(t,r):e==="in"?new lc(t,r):e==="not-in"?new dc(t,r):e==="array-contains-any"?new fc(t,r):new et(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new hc(t,r):new uc(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(pe(e,this.value)):e!==null&&te(this.value)===te(e)&&this.matchesComparison(pe(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return x()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Rt extends ko{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Rt(t,e)}matches(t){return Mo(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Mo(n){return n.op==="and"}function Oo(n){return oc(n)&&Mo(n)}function oc(n){for(const t of n.filters)if(t instanceof Rt)return!1;return!0}function Ur(n){if(n instanceof et)return n.field.canonicalString()+n.op.toString()+ge(n.value);if(Oo(n))return n.filters.map(t=>Ur(t)).join(",");{const t=n.filters.map(e=>Ur(e)).join(",");return`${n.op}(${t})`}}function xo(n,t){return n instanceof et?function(r,i){return i instanceof et&&r.op===i.op&&r.field.isEqual(i.field)&&At(r.value,i.value)}(n,t):n instanceof Rt?function(r,i){return i instanceof Rt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,h,c)=>o&&xo(h,i.filters[c]),!0):!1}(n,t):void x()}function Lo(n){return n instanceof et?function(e){return`${e.field.canonicalString()} ${e.op} ${ge(e.value)}`}(n):n instanceof Rt?function(e){return e.op.toString()+" {"+e.getFilters().map(Lo).join(" ,")+"}"}(n):"Filter"}class ac extends et{constructor(t,e,r){super(t,e,r),this.key=M.fromName(r.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class hc extends et{constructor(t,e){super(t,"in",e),this.keys=Fo("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class uc extends et{constructor(t,e){super(t,"not-in",e),this.keys=Fo("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Fo(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>M.fromName(r.referenceValue))}class cc extends et{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ss(e)&&tn(e.arrayValue,this.value)}}class lc extends et{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&tn(this.value.arrayValue,e)}}class dc extends et{constructor(t,e){super(t,"not-in",e)}matches(t){if(tn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!tn(this.value.arrayValue,e)}}class fc extends et{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ss(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>tn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(t,e=null,r=[],i=[],o=null,h=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=h,this.endAt=c,this.ue=null}}function Ui(n,t=null,e=[],r=[],i=null,o=null,h=null){return new pc(n,t,e,r,i,o,h)}function is(n){const t=q(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Ur(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),qn(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>ge(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>ge(r)).join(",")),t.ue=e}return t.ue}function os(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!ic(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!xo(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Bi(n.startAt,t.startAt)&&Bi(n.endAt,t.endAt)}function qr(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t,e=null,r=[],i=[],o=null,h="F",c=null,d=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=h,this.startAt=c,this.endAt=d,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function gc(n,t,e,r,i,o,h,c){return new $n(n,t,e,r,i,o,h,c)}function Bo(n){return new $n(n)}function qi(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function mc(n){return n.collectionGroup!==null}function Ke(n){const t=q(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(h){let c=new at(yt.comparator);return h.filters.forEach(d=>{d.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Ln(o,r))}),e.has(yt.keyField().canonicalString())||t.ce.push(new Ln(yt.keyField(),r))}return t.ce}function wt(n){const t=q(n);return t.le||(t.le=_c(t,Ke(n))),t.le}function _c(n,t){if(n.limitType==="F")return Ui(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Ln(i.field,o)});const e=n.endAt?new xn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new xn(n.startAt.position,n.startAt.inclusive):null;return Ui(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function jr(n,t,e){return new $n(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function zn(n,t){return os(wt(n),wt(t))&&n.limitType===t.limitType}function Uo(n){return`${is(wt(n))}|lt:${n.limitType}`}function ie(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>Lo(i)).join(", ")}]`),qn(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>ge(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>ge(i)).join(",")),`Target(${r})`}(wt(n))}; limitType=${n.limitType})`}function Hn(n,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):M.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,i){for(const o of Ke(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(h,c,d){const f=Fi(h,c,d);return h.inclusive?f<=0:f<0}(r.startAt,Ke(r),i)||r.endAt&&!function(h,c,d){const f=Fi(h,c,d);return h.inclusive?f>=0:f>0}(r.endAt,Ke(r),i))}(n,t)}function yc(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function qo(n){return(t,e)=>{let r=!1;for(const i of Ke(n)){const o=Ec(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Ec(n,t,e){const r=n.field.isKeyField()?M.comparator(t.key,e.key):function(o,h,c){const d=h.data.field(o),f=c.data.field(o);return d!==null&&f!==null?pe(d,f):x()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return x()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){jn(this.inner,(e,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return ec(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc=new Y(M.comparator);function qt(){return vc}const jo=new Y(M.comparator);function $e(...n){let t=jo;for(const e of n)t=t.insert(e.key,e);return t}function Tc(n){let t=jo;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Gt(){return Ge()}function $o(){return Ge()}function Ge(){return new ve(n=>n.toString(),(n,t)=>n.isEqual(t))}const Ic=new at(M.comparator);function U(...n){let t=Ic;for(const e of n)t=t.add(e);return t}const wc=new at($);function Ac(){return wc}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Lr(t)?"-0":t}}function Sc(n){return{integerValue:""+n}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(){this._=void 0}}function Cc(n,t,e){return n instanceof $r?function(i,o){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&ns(o)&&(o=rs(o)),o&&(h.fields.__previous_value__=o),{mapValue:h}}(e,t):n instanceof Fn?zo(n,t):n instanceof Bn?Ho(n,t):function(i,o){const h=Vc(i,o),c=ji(h)+ji(i.Pe);return Br(h)&&Br(i.Pe)?Sc(c):Rc(i.serializer,c)}(n,t)}function Pc(n,t,e){return n instanceof Fn?zo(n,t):n instanceof Bn?Ho(n,t):e}function Vc(n,t){return n instanceof zr?function(r){return Br(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class $r extends Kn{}class Fn extends Kn{constructor(t){super(),this.elements=t}}function zo(n,t){const e=Ko(t);for(const r of n.elements)e.some(i=>At(i,r))||e.push(r);return{arrayValue:{values:e}}}class Bn extends Kn{constructor(t){super(),this.elements=t}}function Ho(n,t){let e=Ko(t);for(const r of n.elements)e=e.filter(i=>!At(i,r));return{arrayValue:{values:e}}}class zr extends Kn{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function ji(n){return Z(n.integerValue||n.doubleValue)}function Ko(n){return ss(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function bc(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof Fn&&i instanceof Fn||r instanceof Bn&&i instanceof Bn?fe(r.elements,i.elements,At):r instanceof zr&&i instanceof zr?At(r.Pe,i.Pe):r instanceof $r&&i instanceof $r}(n.transform,t.transform)}class Xt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Xt}static exists(t){return new Xt(void 0,t)}static updateTime(t){return new Xt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function bn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class as{}function Go(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Nc(n.key,Xt.none()):new hs(n.key,n.data,Xt.none());{const e=n.data,r=It.empty();let i=new at(yt.comparator);for(let o of t.fields)if(!i.has(o)){let h=e.field(o);h===null&&o.length>1&&(o=o.popLast(),h=e.field(o)),h===null?r.delete(o):r.set(o,h),i=i.add(o)}return new Gn(n.key,r,new Ot(i.toArray()),Xt.none())}}function Dc(n,t,e){n instanceof hs?function(i,o,h){const c=i.value.clone(),d=zi(i.fieldTransforms,o,h.transformResults);c.setAll(d),o.convertToFoundDocument(h.version,c).setHasCommittedMutations()}(n,t,e):n instanceof Gn?function(i,o,h){if(!bn(i.precondition,o))return void o.convertToUnknownDocument(h.version);const c=zi(i.fieldTransforms,o,h.transformResults),d=o.data;d.setAll(Qo(i)),d.setAll(c),o.convertToFoundDocument(h.version,d).setHasCommittedMutations()}(n,t,e):function(i,o,h){o.convertToNoDocument(h.version).setHasCommittedMutations()}(0,t,e)}function Qe(n,t,e,r){return n instanceof hs?function(o,h,c,d){if(!bn(o.precondition,h))return c;const f=o.value.clone(),_=Hi(o.fieldTransforms,d,h);return f.setAll(_),h.convertToFoundDocument(h.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof Gn?function(o,h,c,d){if(!bn(o.precondition,h))return c;const f=Hi(o.fieldTransforms,d,h),_=h.data;return _.setAll(Qo(o)),_.setAll(f),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(A=>A.field))}(n,t,e,r):function(o,h,c){return bn(o.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):c}(n,t,e)}function $i(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&fe(r,i,(o,h)=>bc(o,h))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class hs extends as{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Gn extends as{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Qo(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function zi(n,t,e){const r=new Map;tt(n.length===e.length);for(let i=0;i<e.length;i++){const o=n[i],h=o.transform,c=t.data.field(o.field);r.set(o.field,Pc(h,c,e[i]))}return r}function Hi(n,t,e){const r=new Map;for(const i of n){const o=i.transform,h=e.data.field(i.field);r.set(i.field,Cc(o,h,t))}return r}class Nc extends as{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Dc(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Qe(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Qe(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=$o();return this.mutations.forEach(i=>{const o=t.get(i.key),h=o.overlayedDocument;let c=this.applyToLocalView(h,o.mutatedFields);c=e.has(i.key)?null:c;const d=Go(h,c);d!==null&&r.set(i.key,d),h.isValidDocument()||h.convertToNoDocument(O.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),U())}isEqual(t){return this.batchId===t.batchId&&fe(this.mutations,t.mutations,(e,r)=>$i(e,r))&&fe(this.baseMutations,t.baseMutations,(e,r)=>$i(e,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J,F;function Wo(n){if(n===void 0)return bt("GRPC error has no .code"),P.UNKNOWN;switch(n){case J.OK:return P.OK;case J.CANCELLED:return P.CANCELLED;case J.UNKNOWN:return P.UNKNOWN;case J.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case J.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case J.INTERNAL:return P.INTERNAL;case J.UNAVAILABLE:return P.UNAVAILABLE;case J.UNAUTHENTICATED:return P.UNAUTHENTICATED;case J.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case J.NOT_FOUND:return P.NOT_FOUND;case J.ALREADY_EXISTS:return P.ALREADY_EXISTS;case J.PERMISSION_DENIED:return P.PERMISSION_DENIED;case J.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case J.ABORTED:return P.ABORTED;case J.OUT_OF_RANGE:return P.OUT_OF_RANGE;case J.UNIMPLEMENTED:return P.UNIMPLEMENTED;case J.DATA_LOSS:return P.DATA_LOSS;default:return x()}}(F=J||(J={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc=new Qt([4294967295,4294967295],0);function Ki(n){const t=xc().encode(n),e=new Ao;return e.update(t),new Uint8Array(e.digest())}function Gi(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Qt([e,r],0),new Qt([i,o],0)]}class us{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new ze(`Invalid padding: ${e}`);if(r<0)throw new ze(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new ze(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new ze(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Qt.fromNumber(this.Ie)}Ee(t,e,r){let i=t.add(e.multiply(Qt.fromNumber(r)));return i.compare(Lc)===1&&(i=new Qt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Ki(t),[r,i]=Gi(e);for(let o=0;o<this.hashCount;o++){const h=this.Ee(r,i,o);if(!this.de(h))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),h=new us(o,i,e);return r.forEach(c=>h.insert(c)),h}insert(t){if(this.Ie===0)return;const e=Ki(t),[r,i]=Gi(e);for(let o=0;o<this.hashCount;o++){const h=this.Ee(r,i,o);this.Ae(h)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class ze extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(t,e,r,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,nn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Qn(O.min(),i,new Y($),qt(),U())}}class nn{constructor(t,e,r,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new nn(r,e,U(),U(),U())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(t,e,r,i){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=i}}class Xo{constructor(t,e){this.targetId=t,this.me=e}}class Yo{constructor(t,e,r=gt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class Qi{constructor(){this.fe=0,this.ge=Xi(),this.pe=gt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=U(),e=U(),r=U();return this.ge.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:x()}}),new nn(this.pe,this.ye,t,e,r)}ve(){this.we=!1,this.ge=Xi()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,tt(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Fc{constructor(t){this.Le=t,this.Be=new Map,this.ke=qt(),this.qe=Wi(),this.Qe=new Y($)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:x()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,i)=>{this.ze(i)&&e(i)})}He(t){const e=t.targetId,r=t.me.count,i=this.Je(e);if(i){const o=i.target;if(qr(o))if(r===0){const h=new M(o.path);this.Ue(e,h,pt.newNoDocument(h,O.min()))}else tt(r===1);else{const h=this.Ye(e);if(h!==r){const c=this.Ze(t),d=c?this.Xe(c,t,h):1;if(d!==0){this.je(e);const f=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,f)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=e;let h,c;try{h=Zt(r).toUint8Array()}catch(d){if(d instanceof No)return de("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{c=new us(h,i,o)}catch(d){return de(d instanceof ze?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return c.Ie===0?null:c}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let i=0;return r.forEach(o=>{const h=this.Le.tt(),c=`projects/${h.projectId}/databases/${h.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.Ue(e,o,null),i++)}),i}rt(t){const e=new Map;this.Be.forEach((o,h)=>{const c=this.Je(h);if(c){if(o.current&&qr(c.target)){const d=new M(c.target.path);this.ke.get(d)!==null||this.it(h,d)||this.Ue(h,d,pt.newNoDocument(d,t))}o.be&&(e.set(h,o.Ce()),o.ve())}});let r=U();this.qe.forEach((o,h)=>{let c=!0;h.forEachWhile(d=>{const f=this.Je(d);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.ke.forEach((o,h)=>h.setReadTime(t));const i=new Qn(t,e,this.Qe,this.ke,r);return this.ke=qt(),this.qe=Wi(),this.Qe=new Y($),i}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Qi,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new at($),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||b("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Qi),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Wi(){return new Y(M.comparator)}function Xi(){return new Y(M.comparator)}const Bc={asc:"ASCENDING",desc:"DESCENDING"},Uc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},qc={and:"AND",or:"OR"};class jc{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Hr(n,t){return n.useProto3Json||qn(t)?t:{value:t}}function $c(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function zc(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function ue(n){return tt(!!n),O.fromTimestamp(function(e){const r=Ut(e);return new Et(r.seconds,r.nanos)}(n))}function Hc(n,t){return Kr(n,t).canonicalString()}function Kr(n,t){const e=function(i){return new W(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Jo(n){const t=W.fromString(n);return tt(ra(t)),t}function Sr(n,t){const e=Jo(t);if(e.get(1)!==n.databaseId.projectId)throw new N(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new N(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new M(ta(e))}function Zo(n,t){return Hc(n.databaseId,t)}function Kc(n){const t=Jo(n);return t.length===4?W.emptyPath():ta(t)}function Yi(n){return new W(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ta(n){return tt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Gc(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:x()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(f,_){return f.useProto3Json?(tt(_===void 0||typeof _=="string"),gt.fromBase64String(_||"")):(tt(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array),gt.fromUint8Array(_||new Uint8Array))}(n,t.targetChange.resumeToken),h=t.targetChange.cause,c=h&&function(f){const _=f.code===void 0?P.UNKNOWN:Wo(f.code);return new N(_,f.message||"")}(h);e=new Yo(r,i,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Sr(n,r.document.name),o=ue(r.document.updateTime),h=r.document.createTime?ue(r.document.createTime):O.min(),c=new It({mapValue:{fields:r.document.fields}}),d=pt.newFoundDocument(i,o,h,c),f=r.targetIds||[],_=r.removedTargetIds||[];e=new Dn(f,_,d.key,d)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Sr(n,r.document),o=r.readTime?ue(r.readTime):O.min(),h=pt.newNoDocument(i,o),c=r.removedTargetIds||[];e=new Dn([],c,h.key,h)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Sr(n,r.document),o=r.removedTargetIds||[];e=new Dn([],o,i,null)}else{if(!("filter"in t))return x();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,h=new Oc(i,o),c=r.targetId;e=new Xo(c,h)}}return e}function Qc(n,t){return{documents:[Zo(n,t.path)]}}function Wc(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Zo(n,i);const o=function(f){if(f.length!==0)return na(Rt.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const h=function(f){if(f.length!==0)return f.map(_=>function(R){return{field:oe(R.field),direction:Jc(R.dir)}}(_))}(t.orderBy);h&&(e.structuredQuery.orderBy=h);const c=Hr(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{_t:e,parent:i}}function Xc(n){let t=Kc(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){tt(r===1);const _=e.from[0];_.allDescendants?i=_.collectionId:t=t.child(_.collectionId)}let o=[];e.where&&(o=function(A){const R=ea(A);return R instanceof Rt&&Oo(R)?R.getFilters():[R]}(e.where));let h=[];e.orderBy&&(h=function(A){return A.map(R=>function(k){return new Ln(ae(k.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(R))}(e.orderBy));let c=null;e.limit&&(c=function(A){let R;return R=typeof A=="object"?A.value:A,qn(R)?null:R}(e.limit));let d=null;e.startAt&&(d=function(A){const R=!!A.before,V=A.values||[];return new xn(V,R)}(e.startAt));let f=null;return e.endAt&&(f=function(A){const R=!A.before,V=A.values||[];return new xn(V,R)}(e.endAt)),gc(t,i,h,o,c,"F",d,f)}function Yc(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return x()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function ea(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=ae(e.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ae(e.unaryFilter.field);return et.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ae(e.unaryFilter.field);return et.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=ae(e.unaryFilter.field);return et.create(h,"!=",{nullValue:"NULL_VALUE"});default:return x()}}(n):n.fieldFilter!==void 0?function(e){return et.create(ae(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return x()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Rt.create(e.compositeFilter.filters.map(r=>ea(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return x()}}(e.compositeFilter.op))}(n):x()}function Jc(n){return Bc[n]}function Zc(n){return Uc[n]}function tl(n){return qc[n]}function oe(n){return{fieldPath:n.canonicalString()}}function ae(n){return yt.fromServerFormat(n.fieldPath)}function na(n){return n instanceof et?function(e){if(e.op==="=="){if(Li(e.value))return{unaryFilter:{field:oe(e.field),op:"IS_NAN"}};if(xi(e.value))return{unaryFilter:{field:oe(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Li(e.value))return{unaryFilter:{field:oe(e.field),op:"IS_NOT_NAN"}};if(xi(e.value))return{unaryFilter:{field:oe(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:oe(e.field),op:Zc(e.op),value:e.value}}}(n):n instanceof Rt?function(e){const r=e.getFilters().map(i=>na(i));return r.length===1?r[0]:{compositeFilter:{op:tl(e.op),filters:r}}}(n):x()}function ra(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(t,e,r,i,o=O.min(),h=O.min(),c=gt.EMPTY_BYTE_STRING,d=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=c,this.expectedCount=d}withSequenceNumber(t){return new xt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(t){this.ct=t}}function nl(n){const t=Xc({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?jr(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(){this._n=new sl}addToCollectionParentIndex(t,e){return this._n.add(e),S.resolve()}getCollectionParents(t,e){return S.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return S.resolve()}deleteFieldIndex(t,e){return S.resolve()}deleteAllFieldIndexes(t){return S.resolve()}createTargetIndexes(t,e){return S.resolve()}getDocumentsMatchingTarget(t,e){return S.resolve(null)}getIndexType(t,e){return S.resolve(0)}getFieldIndexes(t,e){return S.resolve([])}getNextCollectionGroupToUpdate(t){return S.resolve(null)}getMinOffset(t,e){return S.resolve(Bt.min())}getMinOffsetFromCollectionGroup(t,e){return S.resolve(Bt.min())}updateCollectionGroup(t,e,r){return S.resolve()}updateIndexEntries(t,e){return S.resolve()}}class sl{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new at(W.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new at(W.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new me(0)}static Ln(){return new me(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(){this.changes=new ve(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,pt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?S.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&Qe(r.mutation,i,Ot.empty(),Et.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,U()).next(()=>r))}getLocalViewOfDocuments(t,e,r=U()){const i=Gt();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(o=>{let h=$e();return o.forEach((c,d)=>{h=h.insert(c,d.overlayedDocument)}),h}))}getOverlayedDocuments(t,e){const r=Gt();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,U()))}populateOverlays(t,e,r){const i=[];return r.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((h,c)=>{e.set(h,c)})})}computeViews(t,e,r,i){let o=qt();const h=Ge(),c=function(){return Ge()}();return e.forEach((d,f)=>{const _=r.get(f.key);i.has(f.key)&&(_===void 0||_.mutation instanceof Gn)?o=o.insert(f.key,f):_!==void 0?(h.set(f.key,_.mutation.getFieldMask()),Qe(_.mutation,f,_.mutation.getFieldMask(),Et.now())):h.set(f.key,Ot.empty())}),this.recalculateAndSaveOverlays(t,o).next(d=>(d.forEach((f,_)=>h.set(f,_)),e.forEach((f,_)=>{var A;return c.set(f,new ol(_,(A=h.get(f))!==null&&A!==void 0?A:null))}),c))}recalculateAndSaveOverlays(t,e){const r=Ge();let i=new Y((h,c)=>h-c),o=U();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(h=>{for(const c of h)c.keys().forEach(d=>{const f=e.get(d);if(f===null)return;let _=r.get(d)||Ot.empty();_=c.applyToLocalView(f,_),r.set(d,_);const A=(i.get(c.batchId)||U()).add(d);i=i.insert(c.batchId,A)})}).next(()=>{const h=[],c=i.getReverseIterator();for(;c.hasNext();){const d=c.getNext(),f=d.key,_=d.value,A=$o();_.forEach(R=>{if(!o.has(R)){const V=Go(e.get(R),r.get(R));V!==null&&A.set(R,V),o=o.add(R)}}),h.push(this.documentOverlayCache.saveOverlays(t,f,A))}return S.waitFor(h)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(h){return M.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):mc(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(o=>{const h=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):S.resolve(Gt());let c=-1,d=o;return h.next(f=>S.forEach(f,(_,A)=>(c<A.largestBatchId&&(c=A.largestBatchId),o.get(_)?S.resolve():this.remoteDocumentCache.getEntry(t,_).next(R=>{d=d.insert(_,R)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,d,f,U())).next(_=>({batchId:c,changes:Tc(_)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(r=>{let i=$e();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let h=$e();return this.indexManager.getCollectionParents(t,o).next(c=>S.forEach(c,d=>{const f=function(A,R){return new $n(R,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(e,d.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,i).next(_=>{_.forEach((A,R)=>{h=h.insert(A,R)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(h=>(o=h,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i))).next(h=>{o.forEach((d,f)=>{const _=f.getKey();h.get(_)===null&&(h=h.insert(_,pt.newInvalidDocument(_)))});let c=$e();return h.forEach((d,f)=>{const _=o.get(d);_!==void 0&&Qe(_.mutation,f,Ot.empty(),Et.now()),Hn(e,f)&&(c=c.insert(d,f))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return S.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:ue(i.createTime)}}(e)),S.resolve()}getNamedQuery(t,e){return S.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(i){return{name:i.name,query:nl(i.bundledQuery),readTime:ue(i.readTime)}}(e)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(){this.overlays=new Y(M.comparator),this.hr=new Map}getOverlay(t,e){return S.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Gt();return S.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,o)=>{this.ht(t,e,o)}),S.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(r)),S.resolve()}getOverlaysForCollection(t,e,r){const i=Gt(),o=e.length+1,h=new M(e.child("")),c=this.overlays.getIteratorFrom(h);for(;c.hasNext();){const d=c.getNext().value,f=d.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&d.largestBatchId>r&&i.set(d.getKey(),d)}return S.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new Y((f,_)=>f-_);const h=this.overlays.getIterator();for(;h.hasNext();){const f=h.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let _=o.get(f.largestBatchId);_===null&&(_=Gt(),o=o.insert(f.largestBatchId,_)),_.set(f.getKey(),f)}}const c=Gt(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((f,_)=>c.set(f,_)),!(c.size()>=i)););return S.resolve(c)}ht(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const h=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,h)}this.overlays=this.overlays.insert(r.key,new Mc(e,r));let o=this.hr.get(e);o===void 0&&(o=U(),this.hr.set(e,o)),this.hr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(){this.Pr=new at(rt.Ir),this.Tr=new at(rt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const r=new rt(t,e);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Ar(new rt(t,e))}Rr(t,e){t.forEach(r=>this.removeReference(r,e))}Vr(t){const e=new M(new W([])),r=new rt(e,t),i=new rt(e,t+1),o=[];return this.Tr.forEachInRange([r,i],h=>{this.Ar(h),o.push(h.key)}),o}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new M(new W([])),r=new rt(e,t),i=new rt(e,t+1);let o=U();return this.Tr.forEachInRange([r,i],h=>{o=o.add(h.key)}),o}containsKey(t){const e=new rt(t,0),r=this.Pr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class rt{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return M.comparator(t.key,e.key)||$(t.pr,e.pr)}static Er(t,e){return $(t.pr,e.pr)||M.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new at(rt.Ir)}checkEmpty(t){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new kc(o,e,r,i);this.mutationQueue.push(h);for(const c of i)this.wr=this.wr.add(new rt(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return S.resolve(h)}lookupMutationBatch(t,e){return S.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.br(r),o=i<0?0:i;return S.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new rt(e,0),i=new rt(e,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([r,i],h=>{const c=this.Sr(h.pr);o.push(c)}),S.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new at($);return e.forEach(i=>{const o=new rt(i,0),h=new rt(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,h],c=>{r=r.add(c.pr)})}),S.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const h=new rt(new M(o),0);let c=new at($);return this.wr.forEachWhile(d=>{const f=d.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(c=c.add(d.pr)),!0)},h),S.resolve(this.Dr(c))}Dr(t){const e=[];return t.forEach(r=>{const i=this.Sr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){tt(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return S.forEach(e.mutations,i=>{const o=new rt(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,e){const r=new rt(e,0),i=this.wr.firstAfterOrEqual(r);return S.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,S.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(t){this.vr=t,this.docs=function(){return new Y(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,h=this.vr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:h}),this.size+=h-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return S.resolve(r?r.document.mutableCopy():pt.newInvalidDocument(e))}getEntries(t,e){let r=qt();return e.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():pt.newInvalidDocument(i))}),S.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=qt();const h=e.path,c=new M(h.child("")),d=this.docs.getIteratorFrom(c);for(;d.hasNext();){const{key:f,value:{document:_}}=d.getNext();if(!h.isPrefixOf(f.path))break;f.path.length>h.length+1||Yu(Xu(_),r)<=0||(i.has(_.key)||Hn(e,_))&&(o=o.insert(_.key,_.mutableCopy()))}return S.resolve(o)}getAllFromCollectionGroup(t,e,r,i){x()}Fr(t,e){return S.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new dl(this)}getSize(t){return S.resolve(this.size)}}class dl extends il{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.ar.addEntry(t,i)):this.ar.removeEntry(r)}),S.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(t){this.persistence=t,this.Mr=new ve(e=>is(e),os),this.lastRemoteSnapshotVersion=O.min(),this.highestTargetId=0,this.Or=0,this.Nr=new cs,this.targetCount=0,this.Lr=me.Nn()}forEachTarget(t,e){return this.Mr.forEach((r,i)=>e(i)),S.resolve()}getLastRemoteSnapshotVersion(t){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return S.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Or&&(this.Or=e),S.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new me(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,S.resolve()}updateTargetData(t,e){return this.qn(e),S.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,S.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.Mr.forEach((h,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.Mr.delete(h),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),i++)}),S.waitFor(o).next(()=>i)}getTargetCount(t){return S.resolve(this.targetCount)}getTargetData(t,e){const r=this.Mr.get(e)||null;return S.resolve(r)}addMatchingKeys(t,e,r){return this.Nr.dr(e,r),S.resolve()}removeMatchingKeys(t,e,r){this.Nr.Rr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(h=>{o.push(i.markPotentiallyOrphaned(t,h))}),S.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),S.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Nr.gr(e);return S.resolve(r)}containsKey(t,e){return S.resolve(this.Nr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(t,e){this.Br={},this.overlays={},this.kr=new es(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new fl(this),this.indexManager=new rl,this.remoteDocumentCache=function(i){return new ll(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new el(e),this.$r=new hl(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ul,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Br[t.toKey()];return r||(r=new cl(e,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,r){b("MemoryPersistence","Starting transaction:",t);const i=new gl(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(o=>this.referenceDelegate.Wr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Gr(t,e){return S.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,e)))}}class gl extends Zu{constructor(t){super(),this.currentSequenceNumber=t}}class ls{constructor(t){this.persistence=t,this.zr=new cs,this.jr=null}static Hr(t){return new ls(t)}get Jr(){if(this.jr)return this.jr;throw x()}addReference(t,e,r){return this.zr.addReference(r,e),this.Jr.delete(r.toString()),S.resolve()}removeReference(t,e,r){return this.zr.removeReference(r,e),this.Jr.add(r.toString()),S.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),S.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.Jr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Jr,r=>{const i=M.fromPath(r);return this.Yr(t,i).next(o=>{o||e.removeEntry(i,O.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(r=>{r?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return S.or([()=>S.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.qi=r,this.Qi=i}static Ki(t,e){let r=U(),i=U();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new ds(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Th()?8:tc(Eh())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.ji(t,e).next(h=>{o.result=h}).next(()=>{if(!o.result)return this.Hi(t,e,i,r).next(h=>{o.result=h})}).next(()=>{if(o.result)return;const h=new ml;return this.Ji(t,e,h).next(c=>{if(o.result=c,this.Ui)return this.Yi(t,e,h,c.size)})}).next(()=>o.result)}Yi(t,e,r,i){return r.documentReadCount<this.Wi?(qe()<=B.DEBUG&&b("QueryEngine","SDK will not create cache indexes for query:",ie(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),S.resolve()):(qe()<=B.DEBUG&&b("QueryEngine","Query:",ie(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(qe()<=B.DEBUG&&b("QueryEngine","The SDK decides to create cache indexes for query:",ie(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,wt(e))):S.resolve())}ji(t,e){if(qi(e))return S.resolve(null);let r=wt(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=jr(e,null,"F"),r=wt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const h=U(...o);return this.zi.getDocuments(t,h).next(c=>this.indexManager.getMinOffset(t,r).next(d=>{const f=this.Zi(e,c);return this.Xi(e,f,h,d.readTime)?this.ji(t,jr(e,null,"F")):this.es(t,f,e,d)}))})))}Hi(t,e,r,i){return qi(e)||i.isEqual(O.min())?S.resolve(null):this.zi.getDocuments(t,r).next(o=>{const h=this.Zi(e,o);return this.Xi(e,h,r,i)?S.resolve(null):(qe()<=B.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ie(e)),this.es(t,h,e,Wu(i,-1)).next(c=>c))})}Zi(t,e){let r=new at(qo(t));return e.forEach((i,o)=>{Hn(t,o)&&(r=r.add(o))}),r}Xi(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ji(t,e,r){return qe()<=B.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",ie(e)),this.zi.getDocumentsMatchingQuery(t,e,Bt.min(),r)}es(t,e,r,i){return this.zi.getDocumentsMatchingQuery(t,r,i).next(o=>(e.forEach(h=>{o=o.insert(h.key,h)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(t,e,r,i){this.persistence=t,this.ts=e,this.serializer=i,this.ns=new Y($),this.rs=new ve(o=>is(o),os),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new al(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function El(n,t,e,r){return new yl(n,t,e,r)}async function sa(n,t){const e=q(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,e._s(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const h=[],c=[];let d=U();for(const f of i){h.push(f.batchId);for(const _ of f.mutations)d=d.add(_.key)}for(const f of o){c.push(f.batchId);for(const _ of f.mutations)d=d.add(_.key)}return e.localDocuments.getDocuments(r,d).next(f=>({us:f,removedBatchIds:h,addedBatchIds:c}))})})}function ia(n){const t=q(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function vl(n,t){const e=q(n),r=t.snapshotVersion;let i=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const h=e.os.newChangeBuffer({trackRemovals:!0});i=e.ns;const c=[];t.targetChanges.forEach((_,A)=>{const R=i.get(A);if(!R)return;c.push(e.Qr.removeMatchingKeys(o,_.removedDocuments,A).next(()=>e.Qr.addMatchingKeys(o,_.addedDocuments,A)));let V=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(A)!==null?V=V.withResumeToken(gt.EMPTY_BYTE_STRING,O.min()).withLastLimboFreeSnapshotVersion(O.min()):_.resumeToken.approximateByteSize()>0&&(V=V.withResumeToken(_.resumeToken,r)),i=i.insert(A,V),function(L,D,X){return L.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=3e8?!0:X.addedDocuments.size+X.modifiedDocuments.size+X.removedDocuments.size>0}(R,V,_)&&c.push(e.Qr.updateTargetData(o,V))});let d=qt(),f=U();if(t.documentUpdates.forEach(_=>{t.resolvedLimboDocuments.has(_)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,_))}),c.push(Tl(o,h,t.documentUpdates).next(_=>{d=_.cs,f=_.ls})),!r.isEqual(O.min())){const _=e.Qr.getLastRemoteSnapshotVersion(o).next(A=>e.Qr.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(_)}return S.waitFor(c).next(()=>h.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,d,f)).next(()=>d)}).then(o=>(e.ns=i,o))}function Tl(n,t,e){let r=U(),i=U();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let h=qt();return e.forEach((c,d)=>{const f=o.get(c);d.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(c)),d.isNoDocument()&&d.version.isEqual(O.min())?(t.removeEntry(c,d.readTime),h=h.insert(c,d)):!f.isValidDocument()||d.version.compareTo(f.version)>0||d.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(d),h=h.insert(c,d)):b("LocalStore","Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",d.version)}),{cs:h,ls:i}})}function Il(n,t){const e=q(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.Qr.getTargetData(r,t).next(o=>o?(i=o,S.resolve(i)):e.Qr.allocateTargetId(r).next(h=>(i=new xt(t,h,"TargetPurposeListen",r.currentSequenceNumber),e.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.ns=e.ns.insert(r.targetId,r),e.rs.set(t,r.targetId)),r})}async function Gr(n,t,e){const r=q(n),i=r.ns.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,h=>r.persistence.referenceDelegate.removeTarget(h,i))}catch(h){if(!en(h))throw h;b("LocalStore",`Failed to update sequence numbers for target ${t}: ${h}`)}r.ns=r.ns.remove(t),r.rs.delete(i.target)}function Ji(n,t,e){const r=q(n);let i=O.min(),o=U();return r.persistence.runTransaction("Execute query","readwrite",h=>function(d,f,_){const A=q(d),R=A.rs.get(_);return R!==void 0?S.resolve(A.ns.get(R)):A.Qr.getTargetData(f,_)}(r,h,wt(t)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(h,c.targetId).next(d=>{o=d})}).next(()=>r.ts.getDocumentsMatchingQuery(h,t,e?i:O.min(),e?o:U())).next(c=>(wl(r,yc(t),c),{documents:c,hs:o})))}function wl(n,t,e){let r=n.ss.get(t)||O.min();e.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.ss.set(t,r)}class Zi{constructor(){this.activeTargetIds=Ac()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Al{constructor(){this.no=new Zi,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,r){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new Zi,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{io(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){b("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){b("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cn=null;function Cr(){return Cn===null?Cn=function(){return 268435456+Math.round(2147483648*Math.random())}():Cn++,"0x"+Cn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt="WebChannelConnection";class Pl extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+e.host,this.So=`projects/${i}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Do(){return!1}Co(e,r,i,o,h){const c=Cr(),d=this.vo(e,r.toUriEncodedString());b("RestConnection",`Sending RPC '${e}' ${c}:`,d,i);const f={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(f,o,h),this.Mo(e,d,f,i).then(_=>(b("RestConnection",`Received RPC '${e}' ${c}: `,_),_),_=>{throw de("RestConnection",`RPC '${e}' ${c} failed with error: `,_,"url: ",d,"request:",i),_})}xo(e,r,i,o,h,c){return this.Co(e,r,i,o,h)}Fo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ee}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,h)=>e[h]=o),i&&i.headers.forEach((o,h)=>e[h]=o)}vo(e,r){const i=Sl[e];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,e,r,i){const o=Cr();return new Promise((h,c)=>{const d=new Ro;d.setWithCredentials(!0),d.listenOnce(Co.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Vn.NO_ERROR:const _=d.getResponseJson();b(dt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(_)),h(_);break;case Vn.TIMEOUT:b(dt,`RPC '${t}' ${o} timed out`),c(new N(P.DEADLINE_EXCEEDED,"Request time out"));break;case Vn.HTTP_ERROR:const A=d.getStatus();if(b(dt,`RPC '${t}' ${o} failed with status:`,A,"response text:",d.getResponseText()),A>0){let R=d.getResponseJson();Array.isArray(R)&&(R=R[0]);const V=R==null?void 0:R.error;if(V&&V.status&&V.message){const k=function(D){const X=D.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(X)>=0?X:P.UNKNOWN}(V.status);c(new N(k,V.message))}else c(new N(P.UNKNOWN,"Server responded with status "+d.getStatus()))}else c(new N(P.UNAVAILABLE,"Connection failed."));break;default:x()}}finally{b(dt,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(i);b(dt,`RPC '${t}' ${o} sending request:`,i),d.send(e,"POST",f,r,15)})}Oo(t,e,r){const i=Cr(),o=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],h=bo(),c=Vo(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(d.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(d.xmlHttpFactory=new So({})),this.Fo(d.initMessageHeaders,e,r),d.encodeInitMessageHeaders=!0;const _=o.join("");b(dt,`Creating RPC '${t}' stream ${i}: ${_}`,d);const A=h.createWebChannel(_,d);let R=!1,V=!1;const k=new Cl({lo:D=>{V?b(dt,`Not sending because RPC '${t}' stream ${i} is closed:`,D):(R||(b(dt,`Opening RPC '${t}' stream ${i} transport.`),A.open(),R=!0),b(dt,`RPC '${t}' stream ${i} sending:`,D),A.send(D))},ho:()=>A.close()}),L=(D,X,K)=>{D.listen(X,G=>{try{K(G)}catch(nt){setTimeout(()=>{throw nt},0)}})};return L(A,je.EventType.OPEN,()=>{V||(b(dt,`RPC '${t}' stream ${i} transport opened.`),k.mo())}),L(A,je.EventType.CLOSE,()=>{V||(V=!0,b(dt,`RPC '${t}' stream ${i} transport closed`),k.po())}),L(A,je.EventType.ERROR,D=>{V||(V=!0,de(dt,`RPC '${t}' stream ${i} transport errored:`,D),k.po(new N(P.UNAVAILABLE,"The operation could not be completed")))}),L(A,je.EventType.MESSAGE,D=>{var X;if(!V){const K=D.data[0];tt(!!K);const G=K,nt=G.error||((X=G[0])===null||X===void 0?void 0:X.error);if(nt){b(dt,`RPC '${t}' stream ${i} received error:`,nt);const St=nt.status;let st=function(m){const y=J[m];if(y!==void 0)return Wo(y)}(St),v=nt.message;st===void 0&&(st=P.INTERNAL,v="Unknown error status: "+St+" with message "+nt.message),V=!0,k.po(new N(st,v)),A.close()}else b(dt,`RPC '${t}' stream ${i} received:`,K),k.yo(K)}}),L(c,Po.STAT_EVENT,D=>{D.stat===xr.PROXY?b(dt,`RPC '${t}' stream ${i} detected buffering proxy`):D.stat===xr.NOPROXY&&b(dt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.fo()},0),k}}function Pr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(n){return new jc(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(t,e,r=1e3,i=1.5,o=6e4){this.oi=t,this.timerId=e,this.No=r,this.Lo=i,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const e=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,e-r);i>0&&b("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(t,e,r,i,o,h,c,d){this.oi=t,this.Go=r,this.zo=i,this.connection=o,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=c,this.listener=d,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new aa(t,e)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,e){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(bt(e.toString()),bt("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(e)}__(){}auth(){this.state=1;const t=this.a_(this.jo),e=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===e&&this.u_(r,i)},r=>{t(()=>{const i=new N(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(t,e){const r=this.a_(this.jo);this.stream=this.l_(t,e),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return b("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return e=>{this.oi.enqueueAndForget(()=>this.jo===t?e():(b("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class bl extends Vl{constructor(t,e,r,i,o,h){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,h),this.serializer=o}l_(t,e){return this.connection.Oo("Listen",t,e)}onMessage(t){this.Yo.reset();const e=Gc(this.serializer,t),r=function(o){if(!("targetChange"in o))return O.min();const h=o.targetChange;return h.targetIds&&h.targetIds.length?O.min():h.readTime?ue(h.readTime):O.min()}(t);return this.listener.h_(e,r)}P_(t){const e={};e.database=Yi(this.serializer),e.addTarget=function(o,h){let c;const d=h.target;if(c=qr(d)?{documents:Qc(o,d)}:{query:Wc(o,d)._t},c.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){c.resumeToken=zc(o,h.resumeToken);const f=Hr(o,h.expectedCount);f!==null&&(c.expectedCount=f)}else if(h.snapshotVersion.compareTo(O.min())>0){c.readTime=$c(o,h.snapshotVersion.toTimestamp());const f=Hr(o,h.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,t);const r=Yc(this.serializer,t);r&&(e.labels=r),this.i_(e)}I_(t){const e={};e.database=Yi(this.serializer),e.removeTarget=t,this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,e,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,h])=>this.connection.Co(t,Kr(e,r),i,o,h)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(P.UNKNOWN,o.toString())})}xo(t,e,r,i,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,c])=>this.connection.xo(t,Kr(e,r),i,h,c,o)).catch(h=>{throw h.name==="FirebaseError"?(h.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new N(P.UNKNOWN,h.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class Nl{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(bt(e),this.y_=!1):b("OnlineStateTracker",e)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(h=>{r.enqueueAndForget(async()=>{sn(this)&&(b("RemoteStore","Restarting streams for network reachability change."),await async function(d){const f=q(d);f.M_.add(4),await rn(f),f.N_.set("Unknown"),f.M_.delete(4),await Wn(f)}(this))})}),this.N_=new Nl(r,i)}}async function Wn(n){if(sn(n))for(const t of n.x_)await t(!0)}async function rn(n){for(const t of n.x_)await t(!1)}function ha(n,t){const e=q(n);e.F_.has(t.targetId)||(e.F_.set(t.targetId,t),ms(e)?gs(e):Te(e).Xo()&&ps(e,t))}function fs(n,t){const e=q(n),r=Te(e);e.F_.delete(t),r.Xo()&&ua(e,t),e.F_.size===0&&(r.Xo()?r.n_():sn(e)&&e.N_.set("Unknown"))}function ps(n,t){if(n.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(O.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Te(n).P_(t)}function ua(n,t){n.L_.xe(t),Te(n).I_(t)}function gs(n){n.L_=new Fc({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.F_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),Te(n).start(),n.N_.w_()}function ms(n){return sn(n)&&!Te(n).Zo()&&n.F_.size>0}function sn(n){return q(n).M_.size===0}function ca(n){n.L_=void 0}async function Ml(n){n.N_.set("Online")}async function Ol(n){n.F_.forEach((t,e)=>{ps(n,t)})}async function xl(n,t){ca(n),ms(n)?(n.N_.D_(t),gs(n)):n.N_.set("Unknown")}async function Ll(n,t,e){if(n.N_.set("Online"),t instanceof Yo&&t.state===2&&t.cause)try{await async function(i,o){const h=o.cause;for(const c of o.targetIds)i.F_.has(c)&&(await i.remoteSyncer.rejectListen(c,h),i.F_.delete(c),i.L_.removeTarget(c))}(n,t)}catch(r){b("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await eo(n,r)}else if(t instanceof Dn?n.L_.Ke(t):t instanceof Xo?n.L_.He(t):n.L_.We(t),!e.isEqual(O.min()))try{const r=await ia(n.localStore);e.compareTo(r)>=0&&await function(o,h){const c=o.L_.rt(h);return c.targetChanges.forEach((d,f)=>{if(d.resumeToken.approximateByteSize()>0){const _=o.F_.get(f);_&&o.F_.set(f,_.withResumeToken(d.resumeToken,h))}}),c.targetMismatches.forEach((d,f)=>{const _=o.F_.get(d);if(!_)return;o.F_.set(d,_.withResumeToken(gt.EMPTY_BYTE_STRING,_.snapshotVersion)),ua(o,d);const A=new xt(_.target,d,f,_.sequenceNumber);ps(o,A)}),o.remoteSyncer.applyRemoteEvent(c)}(n,e)}catch(r){b("RemoteStore","Failed to raise snapshot:",r),await eo(n,r)}}async function eo(n,t,e){if(!en(t))throw t;n.M_.add(1),await rn(n),n.N_.set("Offline"),e||(e=()=>ia(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{b("RemoteStore","Retrying IndexedDB access"),await e(),n.M_.delete(1),await Wn(n)})}async function no(n,t){const e=q(n);e.asyncQueue.verifyOperationInProgress(),b("RemoteStore","RemoteStore received new credentials");const r=sn(e);e.M_.add(3),await rn(e),r&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await Wn(e)}async function Fl(n,t){const e=q(n);t?(e.M_.delete(2),await Wn(e)):t||(e.M_.add(2),await rn(e),e.N_.set("Unknown"))}function Te(n){return n.B_||(n.B_=function(e,r,i){const o=q(e);return o.f_(),new bl(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Po:Ml.bind(null,n),To:Ol.bind(null,n),Ao:xl.bind(null,n),h_:Ll.bind(null,n)}),n.x_.push(async t=>{t?(n.B_.t_(),ms(n)?gs(n):n.N_.set("Unknown")):(await n.B_.stop(),ca(n))})),n.B_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Wt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const h=Date.now()+r,c=new _s(t,e,h,i,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function la(n,t){if(bt("AsyncQueue",`${t}: ${n}`),en(n))return new N(P.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(t){this.comparator=t?(e,r)=>t(e,r)||M.comparator(e.key,r.key):(e,r)=>M.comparator(e.key,r.key),this.keyedMap=$e(),this.sortedSet=new Y(this.comparator)}static emptySet(t){return new ce(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof ce)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new ce;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(){this.q_=new Y(M.comparator)}track(t){const e=t.doc.key,r=this.q_.get(e);r?t.type!==0&&r.type===3?this.q_=this.q_.insert(e,t):t.type===3&&r.type!==1?this.q_=this.q_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.q_=this.q_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.q_=this.q_.remove(e):t.type===1&&r.type===2?this.q_=this.q_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):x():this.q_=this.q_.insert(e,t)}Q_(){const t=[];return this.q_.inorderTraversal((e,r)=>{t.push(r)}),t}}class _e{constructor(t,e,r,i,o,h,c,d,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=h,this.syncStateChanged=c,this.excludesMetadataChanges=d,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,i,o){const h=[];return e.forEach(c=>{h.push({type:0,doc:c})}),new _e(t,e,ce.emptySet(e),h,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&zn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(t=>t.G_())}}class Ul{constructor(){this.queries=new ve(t=>Uo(t),zn),this.onlineState="Unknown",this.z_=new Set}}async function ql(n,t){const e=q(n);let r=3;const i=t.query;let o=e.queries.get(i);o?!o.W_()&&t.G_()&&(r=2):(o=new Bl,r=t.G_()?0:1);try{switch(r){case 0:o.K_=await e.onListen(i,!0);break;case 1:o.K_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(h){const c=la(h,`Initialization of query '${ie(t.query)}' failed`);return void t.onError(c)}e.queries.set(i,o),o.U_.push(t),t.j_(e.onlineState),o.K_&&t.H_(o.K_)&&ys(e)}async function jl(n,t){const e=q(n),r=t.query;let i=3;const o=e.queries.get(r);if(o){const h=o.U_.indexOf(t);h>=0&&(o.U_.splice(h,1),o.U_.length===0?i=t.G_()?0:1:!o.W_()&&t.G_()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function $l(n,t){const e=q(n);let r=!1;for(const i of t){const o=i.query,h=e.queries.get(o);if(h){for(const c of h.U_)c.H_(i)&&(r=!0);h.K_=i}}r&&ys(e)}function zl(n,t,e){const r=q(n),i=r.queries.get(t);if(i)for(const o of i.U_)o.onError(e);r.queries.delete(t)}function ys(n){n.z_.forEach(t=>{t.next()})}var Qr,so;(so=Qr||(Qr={})).J_="default",so.Cache="cache";class Hl{constructor(t,e,r){this.query=t,this.Y_=e,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new _e(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Z_?this.ea(t)&&(this.Y_.next(t),e=!0):this.ta(t,this.onlineState)&&(this.na(t),e=!0),this.X_=t,e}onError(t){this.Y_.error(t)}j_(t){this.onlineState=t;let e=!1;return this.X_&&!this.Z_&&this.ta(this.X_,t)&&(this.na(this.X_),e=!0),e}ta(t,e){if(!t.fromCache||!this.G_())return!0;const r=e!=="Offline";return(!this.options.ra||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ea(t){if(t.docChanges.length>0)return!0;const e=this.X_&&this.X_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}na(t){t=_e.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Z_=!0,this.Y_.next(t)}G_(){return this.options.source!==Qr.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(t){this.key=t}}class fa{constructor(t){this.key=t}}class Kl{constructor(t,e){this.query=t,this.la=e,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=U(),this.mutatedKeys=U(),this.Ia=qo(t),this.Ta=new ce(this.Ia)}get Ea(){return this.la}da(t,e){const r=e?e.Aa:new ro,i=e?e.Ta:this.Ta;let o=e?e.mutatedKeys:this.mutatedKeys,h=i,c=!1;const d=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((_,A)=>{const R=i.get(_),V=Hn(this.query,A)?A:null,k=!!R&&this.mutatedKeys.has(R.key),L=!!V&&(V.hasLocalMutations||this.mutatedKeys.has(V.key)&&V.hasCommittedMutations);let D=!1;R&&V?R.data.isEqual(V.data)?k!==L&&(r.track({type:3,doc:V}),D=!0):this.Ra(R,V)||(r.track({type:2,doc:V}),D=!0,(d&&this.Ia(V,d)>0||f&&this.Ia(V,f)<0)&&(c=!0)):!R&&V?(r.track({type:0,doc:V}),D=!0):R&&!V&&(r.track({type:1,doc:R}),D=!0,(d||f)&&(c=!0)),D&&(V?(h=h.add(V),o=L?o.add(_):o.delete(_)):(h=h.delete(_),o=o.delete(_)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const _=this.query.limitType==="F"?h.last():h.first();h=h.delete(_.key),o=o.delete(_.key),r.track({type:1,doc:_})}return{Ta:h,Aa:r,Xi:c,mutatedKeys:o}}Ra(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const o=this.Ta;this.Ta=t.Ta,this.mutatedKeys=t.mutatedKeys;const h=t.Aa.Q_();h.sort((_,A)=>function(V,k){const L=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return x()}};return L(V)-L(k)}(_.type,A.type)||this.Ia(_.doc,A.doc)),this.Va(r),i=i!=null&&i;const c=e&&!i?this.ma():[],d=this.Pa.size===0&&this.current&&!i?1:0,f=d!==this.ha;return this.ha=d,h.length!==0||f?{snapshot:new _e(this.query,t.Ta,o,h,t.mutatedKeys,d===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:c}:{fa:c}}j_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new ro,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(t){return!this.la.has(t)&&!!this.Ta.has(t)&&!this.Ta.get(t).hasLocalMutations}Va(t){t&&(t.addedDocuments.forEach(e=>this.la=this.la.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.la=this.la.delete(e)),this.current=t.current)}ma(){if(!this.current)return[];const t=this.Pa;this.Pa=U(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const e=[];return t.forEach(r=>{this.Pa.has(r)||e.push(new fa(r))}),this.Pa.forEach(r=>{t.has(r)||e.push(new da(r))}),e}pa(t){this.la=t.hs,this.Pa=U();const e=this.da(t.documents);return this.applyChanges(e,!0)}ya(){return _e.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class Gl{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Ql{constructor(t){this.key=t,this.wa=!1}}class Wl{constructor(t,e,r,i,o,h){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=h,this.Sa={},this.ba=new ve(c=>Uo(c),zn),this.Da=new Map,this.Ca=new Set,this.va=new Y(M.comparator),this.Fa=new Map,this.Ma=new cs,this.xa={},this.Oa=new Map,this.Na=me.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function Xl(n,t,e=!0){const r=ya(n);let i;const o=r.ba.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.ya()):i=await pa(r,t,e,!0),i}async function Yl(n,t){const e=ya(n);await pa(e,t,!0,!1)}async function pa(n,t,e,r){const i=await Il(n.localStore,wt(t)),o=i.targetId,h=e?n.sharedClientState.addLocalQueryTarget(o):"not-current";let c;return r&&(c=await Jl(n,t,o,h==="current",i.resumeToken)),n.isPrimaryClient&&e&&ha(n.remoteStore,i),c}async function Jl(n,t,e,r,i){n.Ba=(A,R,V)=>async function(L,D,X,K){let G=D.view.da(X);G.Xi&&(G=await Ji(L.localStore,D.query,!1).then(({documents:v})=>D.view.da(v,G)));const nt=K&&K.targetChanges.get(D.targetId),St=K&&K.targetMismatches.get(D.targetId)!=null,st=D.view.applyChanges(G,L.isPrimaryClient,nt,St);return oo(L,D.targetId,st.fa),st.snapshot}(n,A,R,V);const o=await Ji(n.localStore,t,!0),h=new Kl(t,o.hs),c=h.da(o.documents),d=nn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),f=h.applyChanges(c,n.isPrimaryClient,d);oo(n,e,f.fa);const _=new Gl(t,e,h);return n.ba.set(t,_),n.Da.has(e)?n.Da.get(e).push(t):n.Da.set(e,[t]),f.snapshot}async function Zl(n,t,e){const r=q(n),i=r.ba.get(t),o=r.Da.get(i.targetId);if(o.length>1)return r.Da.set(i.targetId,o.filter(h=>!zn(h,t))),void r.ba.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Gr(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),e&&fs(r.remoteStore,i.targetId),Wr(r,i.targetId)}).catch(ts)):(Wr(r,i.targetId),await Gr(r.localStore,i.targetId,!0))}async function td(n,t){const e=q(n),r=e.ba.get(t),i=e.Da.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),fs(e.remoteStore,r.targetId))}async function ga(n,t){const e=q(n);try{const r=await vl(e.localStore,t);t.targetChanges.forEach((i,o)=>{const h=e.Fa.get(o);h&&(tt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?h.wa=!0:i.modifiedDocuments.size>0?tt(h.wa):i.removedDocuments.size>0&&(tt(h.wa),h.wa=!1))}),await _a(e,r,t)}catch(r){await ts(r)}}function io(n,t,e){const r=q(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.ba.forEach((o,h)=>{const c=h.view.j_(t);c.snapshot&&i.push(c.snapshot)}),function(h,c){const d=q(h);d.onlineState=c;let f=!1;d.queries.forEach((_,A)=>{for(const R of A.U_)R.j_(c)&&(f=!0)}),f&&ys(d)}(r.eventManager,t),i.length&&r.Sa.h_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function ed(n,t,e){const r=q(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Fa.get(t),o=i&&i.key;if(o){let h=new Y(M.comparator);h=h.insert(o,pt.newNoDocument(o,O.min()));const c=U().add(o),d=new Qn(O.min(),new Map,new Y($),h,c);await ga(r,d),r.va=r.va.remove(o),r.Fa.delete(t),Es(r)}else await Gr(r.localStore,t,!1).then(()=>Wr(r,t,e)).catch(ts)}function Wr(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Da.get(t))n.ba.delete(r),e&&n.Sa.ka(r,e);n.Da.delete(t),n.isPrimaryClient&&n.Ma.Vr(t).forEach(r=>{n.Ma.containsKey(r)||ma(n,r)})}function ma(n,t){n.Ca.delete(t.path.canonicalString());const e=n.va.get(t);e!==null&&(fs(n.remoteStore,e),n.va=n.va.remove(t),n.Fa.delete(e),Es(n))}function oo(n,t,e){for(const r of e)r instanceof da?(n.Ma.addReference(r.key,t),nd(n,r)):r instanceof fa?(b("SyncEngine","Document no longer in limbo: "+r.key),n.Ma.removeReference(r.key,t),n.Ma.containsKey(r.key)||ma(n,r.key)):x()}function nd(n,t){const e=t.key,r=e.path.canonicalString();n.va.get(e)||n.Ca.has(r)||(b("SyncEngine","New document in limbo: "+e),n.Ca.add(r),Es(n))}function Es(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const t=n.Ca.values().next().value;n.Ca.delete(t);const e=new M(W.fromString(t)),r=n.Na.next();n.Fa.set(r,new Ql(e)),n.va=n.va.insert(e,r),ha(n.remoteStore,new xt(wt(Bo(e.path)),r,"TargetPurposeLimboResolution",es.oe))}}async function _a(n,t,e){const r=q(n),i=[],o=[],h=[];r.ba.isEmpty()||(r.ba.forEach((c,d)=>{h.push(r.Ba(d,t,e).then(f=>{if((f||e)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(d.targetId,f!=null&&f.fromCache?"not-current":"current"),f){i.push(f);const _=ds.Ki(d.targetId,f);o.push(_)}}))}),await Promise.all(h),r.Sa.h_(i),await async function(d,f){const _=q(d);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>S.forEach(f,R=>S.forEach(R.qi,V=>_.persistence.referenceDelegate.addReference(A,R.targetId,V)).next(()=>S.forEach(R.Qi,V=>_.persistence.referenceDelegate.removeReference(A,R.targetId,V)))))}catch(A){if(!en(A))throw A;b("LocalStore","Failed to update sequence numbers: "+A)}for(const A of f){const R=A.targetId;if(!A.fromCache){const V=_.ns.get(R),k=V.snapshotVersion,L=V.withLastLimboFreeSnapshotVersion(k);_.ns=_.ns.insert(R,L)}}}(r.localStore,o))}async function rd(n,t){const e=q(n);if(!e.currentUser.isEqual(t)){b("SyncEngine","User change. New user:",t.toKey());const r=await sa(e.localStore,t);e.currentUser=t,function(o,h){o.Oa.forEach(c=>{c.forEach(d=>{d.reject(new N(P.CANCELLED,h))})}),o.Oa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await _a(e,r.us)}}function sd(n,t){const e=q(n),r=e.Fa.get(t);if(r&&r.wa)return U().add(r.key);{let i=U();const o=e.Da.get(t);if(!o)return i;for(const h of o){const c=e.ba.get(h);i=i.unionWith(c.view.Ea)}return i}}function ya(n){const t=q(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=ga.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=sd.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ed.bind(null,t),t.Sa.h_=$l.bind(null,t.eventManager),t.Sa.ka=zl.bind(null,t.eventManager),t}class ao{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=oa(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return El(this.persistence,new _l,t.initialUser,this.serializer)}createPersistence(t){return new pl(ls.Hr,this.serializer)}createSharedClientState(t){return new Al}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class id{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>io(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=rd.bind(null,this.syncEngine),await Fl(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Ul}()}createDatastore(t){const e=oa(t.databaseInfo.databaseId),r=function(o){return new Pl(o)}(t.databaseInfo);return function(o,h,c,d){return new Dl(o,h,c,d)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,o,h,c){return new kl(r,i,o,h,c)}(this.localStore,this.datastore,t.asyncQueue,e=>io(this.syncEngine,e,0),function(){return to.D()?new to:new Rl}())}createSyncEngine(t,e){return function(i,o,h,c,d,f,_){const A=new Wl(i,o,h,c,d,f);return _&&(A.La=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(r){const i=q(r);b("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await rn(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ka(this.observer.next,t)}error(t){this.observer.error?this.Ka(this.observer.error,t):bt("Uncaught Error in snapshot listener:",t.toString())}$a(){this.muted=!0}Ka(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(t,e,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=ft.UNAUTHENTICATED,this.clientId=Gu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{b("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(b("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Wt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=la(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Vr(n,t){n.asyncQueue.verifyOperationInProgress(),b("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await sa(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function ho(n,t){n.asyncQueue.verifyOperationInProgress();const e=await ud(n);b("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>no(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>no(t.remoteStore,i)),n._onlineComponents=t}function hd(n){return n.name==="FirebaseError"?n.code===P.FAILED_PRECONDITION||n.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function ud(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){b("FirestoreClient","Using user provided OfflineComponentProvider");try{await Vr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!hd(e))throw e;de("Error using user provided cache. Falling back to memory cache: "+e),await Vr(n,new ao)}}else b("FirestoreClient","Using default OfflineComponentProvider"),await Vr(n,new ao);return n._offlineComponents}async function cd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(b("FirestoreClient","Using user provided OnlineComponentProvider"),await ho(n,n._uninitializedComponentsProvider._online)):(b("FirestoreClient","Using default OnlineComponentProvider"),await ho(n,new id))),n._onlineComponents}async function ld(n){const t=await cd(n),e=t.eventManager;return e.onListen=Xl.bind(null,t.syncEngine),e.onUnlisten=Zl.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Yl.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=td.bind(null,t.syncEngine),e}function dd(n,t,e={}){const r=new Wt;return n.asyncQueue.enqueueAndForget(async()=>function(o,h,c,d,f){const _=new od({next:R=>{h.enqueueAndForget(()=>jl(o,A)),R.fromCache&&d.source==="server"?f.reject(new N(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(R)},error:R=>f.reject(R)}),A=new Hl(c,_,{includeMetadataChanges:!0,ra:!0});return ql(o,A)}(await ld(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(n,t,e){if(!e)throw new N(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function pd(n,t,e,r){if(t===!0&&r===!0)throw new N(P.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function co(n){if(M.isDocumentKey(n))throw new N(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function gd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":x()}function Xr(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new N(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=gd(n);throw new N(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new N(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new N(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}pd("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ea((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class vs{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lo({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new N(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new N(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lo(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Bu;switch(r.type){case"firstParty":return new $u(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=uo.get(e);r&&(b("ComponentProvider","Removing Datastore"),uo.delete(e),r.terminate())}(this),Promise.resolve()}}function md(n,t,e,r={}){var i;const o=(n=Xr(n,vs))._getSettings(),h=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==h&&de("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:h,ssl:!1})),r.mockUserToken){let c,d;if(typeof r.mockUserToken=="string")c=r.mockUserToken,d=ft.MOCK_USER;else{c=yh(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new N(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new ft(f)}n._authCredentials=new Uu(new Do(c,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Xn(this.firestore,t,this._query)}}class Ie{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new le(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ie(this.firestore,t,this._key)}}class le extends Xn{constructor(t,e,r){super(t,e,Bo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ie(this.firestore,null,new M(t))}withConverter(t){return new le(this.firestore,t,this._path)}}function _d(n,t,...e){if(n=Ch(n),fd("collection","path",t),n instanceof vs){const r=W.fromString(t,...e);return co(r),new le(n,null,r)}{if(!(n instanceof Ie||n instanceof le))throw new N(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(W.fromString(t,...e));return co(r),new le(n.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new aa(this,"async_queue_retry"),this.hu=()=>{const e=Pr();e&&b("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};const t=Pr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=Pr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const e=new Wt;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!en(t))throw t;b("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const e=this.iu.then(()=>(this.uu=!0,t().catch(r=>{this.au=r,this.uu=!1;const i=function(h){let c=h.message||"";return h.stack&&(c=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),c}(r);throw bt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=e,e}enqueueAfterDelay(t,e,r){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const i=_s.createAndSchedule(this,t,e,r,o=>this.Eu(o));return this._u.push(i),i}Pu(){this.au&&x()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this._u)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}class va extends vs{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=function(){return new yd}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ta(this),this._firestoreClient.terminate()}}function Ed(n,t){const e=typeof n=="object"?n:Cu(),r=typeof n=="string"?n:"(default)",i=wu(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=mh("firestore");o&&md(i,...o)}return i}function vd(n){return n._firestoreClient||Ta(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Ta(n){var t,e,r;const i=n._freezeSettings(),o=function(c,d,f,_){return new rc(c,d,f,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,Ea(_.experimentalLongPollingOptions),_.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new ad(n._authCredentials,n._appCheckCredentials,n._queue,o),!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Un(gt.fromBase64String(t))}catch(e){throw new N(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Un(gt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return $(this._lat,t._lat)||$(this._long,t._long)}}const Id=new RegExp("[~\\*/\\[\\]]");function wd(n,t,e){if(t.search(Id)>=0)throw fo(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new Ia(...t.split("."))._internalPath}catch{throw fo(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function fo(n,t,e,r,i){let o=`Function ${t}() called with invalid data`;o+=". ";let h="";return new N(P.INVALID_ARGUMENT,o+n+h)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Ie(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Ad(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Aa("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Ad extends wa{data(){return super.data()}}function Aa(n,t){return typeof t=="string"?wd(n,t):t instanceof Ia?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new N(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Sd{convertValue(t,e="none"){switch(te(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Z(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Zt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw x()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return jn(t,(i,o)=>{r[i]=this.convertValue(o,e)}),r}convertGeoPoint(t){return new Td(Z(t.latitude),Z(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=rs(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Je(t));default:return null}}convertTimestamp(t){const e=Ut(t);return new Et(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=W.fromString(t);tt(ra(r));const i=new Ze(r.get(1),r.get(3)),o=new M(r.popFirst(5));return i.isEqual(e)||bt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Cd extends wa{constructor(t,e,r,i,o,h){super(t,e,r,i,h),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Nn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Aa("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Nn extends Cd{data(t={}){return super.data(t)}}class Pd{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Pn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Nn(this._firestore,this._userDataWriter,r.key,r,new Pn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let h=0;return i._snapshot.docChanges.map(c=>{const d=new Nn(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Pn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:d,oldIndex:-1,newIndex:h++}})}{let h=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const d=new Nn(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Pn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,_=-1;return c.type!==0&&(f=h.indexOf(c.doc.key),h=h.delete(c.doc.key)),c.type!==1&&(h=h.add(c.doc),_=h.indexOf(c.doc.key)),{type:Vd(c.type),doc:d,oldIndex:f,newIndex:_}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Vd(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return x()}}class bd extends Sd{constructor(t){super(),this.firestore=t}convertBytes(t){return new Un(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Ie(this.firestore,null,e)}}function Dd(n){n=Xr(n,Xn);const t=Xr(n.firestore,va),e=vd(t),r=new bd(t);return Rd(n._query),dd(e,n._query).then(i=>new Pd(t,r,n,i))}(function(t,e=!0){(function(i){Ee=i})(Su),On(new We("firestore",(r,{instanceIdentifier:i,options:o})=>{const h=r.getProvider("app").getImmediate(),c=new va(new qu(r.getProvider("auth-internal")),new Hu(r.getProvider("app-check-internal")),function(f,_){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new N(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ze(f.options.projectId,_)}(h,i),h);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),he(Ni,"4.6.2",t),he(Ni,"4.6.2","esm2017")})();const Nd={apiKey:"AIzaSyDHNjCI9mEH92lrHVQFxvcs7m4UVColYCE",authDomain:"shop-32ea1.firebaseapp.com",projectId:"shop-32ea1",storageBucket:"shop-32ea1.appspot.com",messagingSenderId:"48669276542",appId:"1:48669276542:web:e2b91678c9078b8ea09b2f"},kd=To(Nd);class Bd{constructor(){this.key=oh,this.db=Ed(kd)}async pull(){const t=await Dd(_d(this.db,this.key)),e=[];return t.forEach(r=>{e.push({id:r.id,model:r.data().model,series:r.data().series,price:r.data().price,imageURL:r.data().imageURL,rating:r.data().rating,descShort:r.data().descShort,description:r.data().description})}),e}}export{Md as B,Od as L,Bd as S};
