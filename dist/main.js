(()=>{var r={961:(e,t,s)=>{b=String.fromCharCode,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",n={};var b,r,o,n,i,a=i={compressToBase64:function(e){if(null==e)return"";var t=i._compress(e,6,function(e){return r.charAt(e)});switch(t.length%4){default:case 0:return t;case 1:return t+"===";case 2:return t+"==";case 3:return t+"="}},decompressFromBase64:function(t){return null==t?"":""==t?null:i._decompress(t.length,32,function(e){return c(r,t.charAt(e))})},compressToUTF16:function(e){return null==e?"":i._compress(e,15,function(e){return b(e+32)})+" "},decompressFromUTF16:function(t){return null==t?"":""==t?null:i._decompress(t.length,16384,function(e){return t.charCodeAt(e)-32})},compressToUint8Array:function(e){for(var t=i.compress(e),s=new Uint8Array(2*t.length),r=0,o=t.length;r<o;r++){var n=t.charCodeAt(r);s[2*r]=n>>>8,s[2*r+1]=n%256}return s},decompressFromUint8Array:function(e){if(null==e)return i.decompress(e);for(var t=new Array(e.length/2),s=0,r=t.length;s<r;s++)t[s]=256*e[2*s]+e[2*s+1];var o=[];return t.forEach(function(e){o.push(b(e))}),i.decompress(o.join(""))},compressToEncodedURIComponent:function(e){return null==e?"":i._compress(e,6,function(e){return o.charAt(e)})},decompressFromEncodedURIComponent:function(t){return null==t?"":""==t?null:(t=t.replace(/ /g,"+"),i._decompress(t.length,32,function(e){return c(o,t.charAt(e))}))},compress:function(e){return i._compress(e,16,function(e){return b(e)})},_compress:function(e,t,s){if(null==e)return"";for(var r,o,n,i,a={},c={},l="",u=2,h=3,d=2,p=[],v=0,g=0,f=0;f<e.length;f+=1)if(n=e.charAt(f),Object.prototype.hasOwnProperty.call(a,n)||(a[n]=h++,c[n]=!0),i=l+n,Object.prototype.hasOwnProperty.call(a,i))l=i;else{if(Object.prototype.hasOwnProperty.call(c,l)){if(l.charCodeAt(0)<256){for(r=0;r<d;r++)v<<=1,g==t-1?(g=0,p.push(s(v)),v=0):g++;for(o=l.charCodeAt(0),r=0;r<8;r++)v=v<<1|1&o,g==t-1?(g=0,p.push(s(v)),v=0):g++,o>>=1}else{for(o=1,r=0;r<d;r++)v=v<<1|o,g==t-1?(g=0,p.push(s(v)),v=0):g++,o=0;for(o=l.charCodeAt(0),r=0;r<16;r++)v=v<<1|1&o,g==t-1?(g=0,p.push(s(v)),v=0):g++,o>>=1}0==--u&&(u=Math.pow(2,d),d++),delete c[l]}else for(o=a[l],r=0;r<d;r++)v=v<<1|1&o,g==t-1?(g=0,p.push(s(v)),v=0):g++,o>>=1;0==--u&&(u=Math.pow(2,d),d++),a[i]=h++,l=String(n)}if(""!==l){if(Object.prototype.hasOwnProperty.call(c,l)){if(l.charCodeAt(0)<256){for(r=0;r<d;r++)v<<=1,g==t-1?(g=0,p.push(s(v)),v=0):g++;for(o=l.charCodeAt(0),r=0;r<8;r++)v=v<<1|1&o,g==t-1?(g=0,p.push(s(v)),v=0):g++,o>>=1}else{for(o=1,r=0;r<d;r++)v=v<<1|o,g==t-1?(g=0,p.push(s(v)),v=0):g++,o=0;for(o=l.charCodeAt(0),r=0;r<16;r++)v=v<<1|1&o,g==t-1?(g=0,p.push(s(v)),v=0):g++,o>>=1}0==--u&&(u=Math.pow(2,d),d++),delete c[l]}else for(o=a[l],r=0;r<d;r++)v=v<<1|1&o,g==t-1?(g=0,p.push(s(v)),v=0):g++,o>>=1;0==--u&&(u=Math.pow(2,d),d++)}for(o=2,r=0;r<d;r++)v=v<<1|1&o,g==t-1?(g=0,p.push(s(v)),v=0):g++,o>>=1;for(;;){if(v<<=1,g==t-1){p.push(s(v));break}g++}return p.join("")},decompress:function(t){return null==t?"":""==t?null:i._decompress(t.length,32768,function(e){return t.charCodeAt(e)})},_decompress:function(e,t,s){for(var r,o,n,i,a,c,l=[],u=4,h=4,d=3,p="",v=[],g={val:s(0),position:t,index:1},f=0;f<3;f+=1)l[f]=f;for(o=0,i=Math.pow(2,2),a=1;a!=i;)n=g.val&g.position,g.position>>=1,0==g.position&&(g.position=t,g.val=s(g.index++)),o|=(0<n?1:0)*a,a<<=1;switch(o){case 0:for(o=0,i=Math.pow(2,8),a=1;a!=i;)n=g.val&g.position,g.position>>=1,0==g.position&&(g.position=t,g.val=s(g.index++)),o|=(0<n?1:0)*a,a<<=1;c=b(o);break;case 1:for(o=0,i=Math.pow(2,16),a=1;a!=i;)n=g.val&g.position,g.position>>=1,0==g.position&&(g.position=t,g.val=s(g.index++)),o|=(0<n?1:0)*a,a<<=1;c=b(o);break;case 2:return""}for(r=l[3]=c,v.push(c);;){if(e<g.index)return"";for(o=0,i=Math.pow(2,d),a=1;a!=i;)n=g.val&g.position,g.position>>=1,0==g.position&&(g.position=t,g.val=s(g.index++)),o|=(0<n?1:0)*a,a<<=1;switch(c=o){case 0:for(o=0,i=Math.pow(2,8),a=1;a!=i;)n=g.val&g.position,g.position>>=1,0==g.position&&(g.position=t,g.val=s(g.index++)),o|=(0<n?1:0)*a,a<<=1;l[h++]=b(o),c=h-1,u--;break;case 1:for(o=0,i=Math.pow(2,16),a=1;a!=i;)n=g.val&g.position,g.position>>=1,0==g.position&&(g.position=t,g.val=s(g.index++)),o|=(0<n?1:0)*a,a<<=1;l[h++]=b(o),c=h-1,u--;break;case 2:return v.join("")}if(0==u&&(u=Math.pow(2,d),d++),l[c])p=l[c];else{if(c!==h)return null;p=r+r.charAt(0)}v.push(p),l[h++]=r+p.charAt(0),r=p,0==--u&&(u=Math.pow(2,d),d++)}}};function c(e,t){if(!n[e]){n[e]={};for(var s=0;s<e.length;s++)n[e][e.charAt(s)]=s}return n[e][t]}void 0!==(s=function(){return a}.call(t,s,t,e))&&(e.exports=s)},607:function(e,t,s){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,s,r){void 0===r&&(r=s);var o=Object.getOwnPropertyDescriptor(t,s);o&&("get"in o?t.__esModule:!o.writable&&!o.configurable)||(o={enumerable:!0,get:function(){return t[s]}}),Object.defineProperty(e,r,o)}:function(e,t,s,r){e[r=void 0===r?s:r]=t[s]}),o=this&&this.__exportStar||function(e,t){for(var s in e)"default"===s||Object.prototype.hasOwnProperty.call(t,s)||r(t,e,s)};Object.defineProperty(t,"__esModule",{value:!0}),o(s(397),t)},850:(e,o,t)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.ByteBoost=o.BASE_API_URL=void 0;var s=t(356),r=t(230),n=t(258),i=t(81);const a=t(429);var c=t(682),l=t(882);const u=t(601),h=(o.BASE_API_URL="https://external.api.byteboost.io","__byteboost.io__persistant_data"),d=h+"_m",p=[s.EventBus,n.RequestModule,r.Logger,i.ErrorModule,c.Core,l.Pinger];o.ByteBoost=class{modules;performance;navigator;initializedAt=0;apiKey;obfuscateLevel;doFullByteBoostRestart;constructor(e){this.info("starting"),this.obfuscateLevel=e.obfuscateLevel,this.doFullByteBoostRestart=e.startByteboost,this.navigator=window.navigator,this.performance=window.performance||self.performance,this.apiKey=e.apiKey;let t=this.getPersistantData();!1===t&&(t={}),this.modules={};for(var s of p){s=new s;t.hasOwnProperty(s.namespace)?s.unpack(t[s.namespace]):s.onBuildNeeded(),this.modules[s.namespace]={namespace:s.namespace,module:s}}window.addEventListener("beforeunload",v)}initializeModules(){for(var e in this.debug("initializing modules"),this.modules)"eventBus"!==e&&this.modules[e].module.bindEventBus(this.getModule("eventBus")),this.modules[e].module.boot();this.initializedAt=Date.now()}getModule(e){if(this.modules[e])return this.modules[e].module}getApiKey(){return this.apiKey}debug(){}info(){}warn(){}error(){}async compilePersistantData(){var e,t={};for(e in this.modules){var s=await this.modules[e].module.pack();t[e]=s}return t}async purge(){await this.cleanup(),localStorage.removeItem(h),localStorage.removeItem(d),this.doFullByteBoostRestart()}async forceReload(){await this.cleanup(),this.doFullByteBoostRestart()}getPersistantData(){try{var e=JSON.parse((0,u.uncompressString)(localStorage.getItem(h))),t=JSON.parse(localStorage.getItem(d)),s=Date.now(),r=(0,a.uncompressJSON)(e,t);if(this.debug("Uncompression took:",Date.now()-s,"ms"),r)return r;throw"unable to compress"}catch(e){return!1}}async cleanup(){for(var e in this.debug("cleaning up"),this.modules){e=this.modules[e].module;e.cleanup(),"isDataModule"in e&&e.forceSend()}var t=await this.compilePersistantData(),s=Date.now(),[t,r]=(0,a.compressJSON)(t),s=(this.debug("Compression took:",Date.now()-s,"ms"),JSON.stringify(t)),t=JSON.stringify(r),s=(0,u.compressString)(s);try{localStorage.setItem(h,s),localStorage.setItem(d,t)}catch(e){this.error("Unable to save data to local storage",e)}window.removeEventListener("beforeunload",v),this.info("terminated"),this.info("informing backend"),fetch(o.BASE_API_URL+"/v1beta/session/kill",{credentials:"include",headers:{"X-Auth-Token":window.byteboostKey??""}}),window._byteboost&&delete window._byteboost}getObfuscateLevel(){return this.obfuscateLevel}};const v=async()=>{await window._byteboost.cleanup()}},397:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isDev=t.wrapWindow=void 0;const r=s(850),o=s(252),n=s(924);t.wrapWindow=()=>{if("undefined"!=typeof window&&!window._byteboost&&!window._startingByteboost){const t=async()=>{await(0,n.setupPersistantWorkers)();var e=await(0,o.preflightChecks)();!1!==e&&e?(window._byteboost=new r.ByteBoost({apiKey:window.byteboostKey,startByteboost:t,obfuscateLevel:0}),window._byteboost.initializeModules()):await(0,n.killPersistantWorkers)()};try{t()}catch(e){}}},(0,t.wrapWindow)();t.isDev=()=>!0},601:function(e,t,s){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uncompressString=t.compressString=t.findCircular=t.removeCircular=void 0;const o=r(s(961));t.removeCircular=function(e){const r=new Map,o=e=>{if(r.set(e,!0),e)for(var[t,s]of Object.entries(e))"object"==typeof s&&(r.has(s)?e[t]="[byteboost-3200] circular reference":o(s))};return o(e),e},t.findCircular=function(e){let r=!1;const o=new Map,n=e=>{if(o.set(e,!0),!r&&e)for(var[t,s]of Object.entries(e)){if(r)return;if("object"==typeof s){if(o.has(s)){r=!0;break}n(s)}}};return n(e),r};t.compressString=e=>null==e?"":o.default.compress(e);t.uncompressString=e=>null==e?"":o.default.decompress(e)},682:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Core=void 0;const r=s(765);var o=s(134);const n=s(580),i=s(924),a=s(601),c=s(863);class l extends o.BaseDataModule{networkTracker;screenshotWorker;lastScreenshotTime=-1;_obfuscateLevel=-1;lastMetaScreen={width:0,height:0};constructor(){super("core")}get obfuscateLevel(){if(-1===this._obfuscateLevel)throw new Error("Obfuscate level is unset");return this._obfuscateLevel}handlePath(){let e=window.location.pathname;var t,s;0===e.length&&(e="/"),this.state.currentPath.pathname!==e&&(t=Date.now(),s=(0,n.cloneObject)(this.state.currentPath),this.state.currentPath.pathname=e,this.byteboost.debug("path changed!",this.state.currentPath),this.captureScreenshot(!0),this.eventBus.dispatch(this.namespace,"pathUpdate",{from:s.pathname,to:this.state.currentPath.pathname,when:t}))}getFormattedPath(){return this.state.currentPath.pathname}onPoll(){this.handlePath(),this.handleWindowSize(),this.networkTracker.emit("requests:get")}gotClick(e){this.state.clicks.push(e),this.byteboost.debug("new click state",this.state.clicks)}gatherRelevantElementData(e,t=0){return{innerHTML:(0,a.compressString)(e.innerHTML),outerHTML:(0,a.compressString)(e?.outerHTML),scrollHeight:e?.scrollHeight,scrollLeft:e?.scrollLeft,scrollTop:e?.scrollTop,scrollWidth:e?.scrollWidth,scrollLeftMax:e?.scrollLeftMax,scrollTopMax:e?.scrollTopMax,clientHeight:e?.clientHeight,clientLeft:e?.clientLeft,clientTop:e?.clientTop,clientWidth:e?.clientWidth,attrId:e.getAttribute("id")??void 0,attrClassName:e.getAttribute("class")??void 0,attrStyle:e.getAttribute("style")??void 0}}getAppropriateClickEvent(e,t){var s=e.target||e.srcElement,e={...this.getMousePos(e),when:t||Date.now(),count:1};if(!s)return e;this.byteboost.debug(s);t=s;return{...e,element:this.gatherRelevantElementData(t),where:this.getFormattedPath()}}boundedClickListener(e){this.byteboost.debug("got click event!");var t=Date.now(),e=(this.captureScreenshot(),this.getAppropriateClickEvent(e,t));this.eventBus.dispatch("core","click",e)}async captureScreenshot(e){try{var t,s,r=Date.now();r-5e3<this.lastScreenshotTime&&!0!==e||(this.lastScreenshotTime=r,this.byteboost.debug("capturing screenshot"),t=(new XMLSerializer).serializeToString(document),s=new TextEncoder,this.screenshotWorker.emit("screenshot:parse",{document:s.encode(t),when:r,where:this.getFormattedPath(),obfuscateLevel:this.obfuscateLevel}))}catch(e){this.byteboost.warn("Unable to process screenshot. Error: "+e?.toString())}}onScreenshotFromWorker(e){e={when:e.when,where:e.where,compressed:(0,a.compressString)((new TextDecoder).decode(e.document))};this.state.screenshots.push(e)}handleRequests(e){for(const s of e.requests){var t=(0,c.requestObfuscator)(s,this.obfuscateLevel);0===t.referrer.length&&(t.referrer=window.location.toString()),t.method=t.method.toLowerCase(),this.state.requests.push({request:t})}}handleWindowSize(){var e={width:window.innerWidth,height:window.innerHeight};this.lastMetaScreen&&this.lastMetaScreen.height===e.height&&this.lastMetaScreen.width===e.width||(this.lastMetaScreen=e,this.emit("metaUpdate",{when:Date.now(),screen:e}))}boot(){var e=(0,i.getPersistantWorker)("network-tracker");this._obfuscateLevel=this.byteboost.getObfuscateLevel(),e&&(this.networkTracker=e,this.networkTracker.on("requests:get",e=>{0!==e.length&&this.eventBus.dispatch("core","requests",{requests:e})})),this.screenshotWorker=new r.WebWorker("screenshot-parser"),this.screenshotWorker.on("screenshot:parsed",e=>{this.onScreenshotFromWorker(e)}),this.receivePolls(),this.handleWindowSize(),this.on("metaUpdate",e=>{this.state.metaUpdates.push(e)}),this.eventBus.listen("core","requests",e=>{this.handleRequests(e)}),this.eventBus.listen("core","screenshot:captured",e=>{this.state.screenshots.push(e)}),this.eventBus.listen("core","click",e=>{this.gotClick(e)}),this.eventBus.listen(this.namespace,"pathUpdate",e=>{this.state.navigations.push(e)}),document.addEventListener("click",u,{capture:!0}),this.doSync()}formatSyncData(){var e;return 0===this.state.navigations.length&&0===this.state.screenshots.length&&0===this.state.clicks.length&&0===this.state.requests.length&&0===this.state.metaUpdates.length?{_empty:!0}:((e=(0,n.cloneObject)(this.state)).requests=e.requests.map(e=>e.request),this.byteboost.debug("cloned state",e,"current",this.state),e.currentPath=this.state.currentPath.pathname,e)}onSync(e){e.response.success?(this.state.navigations=this.eventBus.cleanSyncedData(this.state.navigations,e),this.state.screenshots=this.eventBus.cleanSyncedData(this.state.screenshots,e),this.state.clicks=this.eventBus.cleanSyncedData(this.state.clicks,e),this.state.requests=this.eventBus.cleanSyncedData(this.state.requests,e),this.state.metaUpdates=this.eventBus.cleanSyncedData(this.state.metaUpdates,e)):this.byteboost.error("Unable to sync core module.")}cleanup(){console.log("removing click listener"),document.removeEventListener("click",u)}getMousePos(e){var t,s;let r=e?.pageX??0,o=e?.pageY??0;return null==e.pageX&&null!=e.clientX&&(t=(s=e.target&&e.target.ownerDocument||document).documentElement,s=s.body,r=e.clientX+(t&&t.scrollLeft||s&&s.scrollLeft||0)-(t&&t.clientLeft||s&&s.clientLeft||0),o=e.clientY+(t&&t.scrollTop||s&&s.scrollTop||0)-(t&&t.clientTop||s&&s.clientTop||0)),{x:r??-1,y:o??-1}}build(){return{navigations:[],currentPath:{pathname:"/"},clicks:[],screenshots:[],requests:[],metaUpdates:[]}}}t.Core=l;const u=e=>{var t;window._byteboost&&(t=window._byteboost.getModule("core"))&&t.boundedClickListener(e)}},863:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.requestObfuscator=void 0;const r=s(580),o=s(720);var s=["a-im","accept","accept-charset","accept-datetime","accept-encoding","accept-language","access-control-request-method","cache-control","connection","content-encoding","content-type","date","expect","host","if-modified-since","if-unmodified-since","max-forwards","origin","pragma","prefer","range","referer","te","trailer","transfer-encoding","user-agent","upgrade","via","warning","upgrade-insecure-requests","x-requested-with","dnt","x-forwarded-host","x-forwarded-proto","front-end-https","x-http-method-override","proxy-connection","save-data","sec-gpc","accept-ch","access-control-allow-credentials","access-control-expose-headers","access-control-max-age","access-control-allow-methods","access-control-allow-headers","access-control-allow-origin","accept-patch","accept-ranges","age","allow","alt-svc","cache-control","connection","content-disposition","content-encoding","content-language","content-length","content-location","content-range","content-type","date","delta-base","expires","im","last-modified","link","location","pragma","preference-applied","proxy-authenticate","public-key-pins","retry-after","server","strict-transport-security","trailer","transfer-encoding","tk","upgrade","vary","via","warning","www-authenticate","x-frame-options","x-content-security-policy","x-webkit-csp","content-security-policy","expect-ct","nel","permissions-policy","refresh","report-to","status","timing-allow-origin","x-content-duration","x-content-type-options","x-powered-by","x-redirect-by","x-request-id","x-correlation-id","x-ua-compatible","x-xss-protection"],n=["content-length","forwarded",...s],i=["access-control-request-headers","content-md5","from","http2-settings","if-match","if-none-match","if-range","proxy-authorization","x-forwarded-for","x-att-deviceid","x-wap-profile","x-uidh","x-correlation-id","correlation-id","x-request-id","content-md5","etag","p3p",...n];const a={[o.ObfuscateLevel.HIGH]:s,[o.ObfuscateLevel.MEDIUM]:n,[o.ObfuscateLevel.LOW]:i},c=(e,t)=>{var s={};for(const r in e)a[t].includes(r)&&(s[r]=e[r]);return s};t.requestObfuscator=(t,s)=>{t=(0,r.cloneObject)(t);if(t.requestHeaders=c(t.requestHeaders,s),t.responseHeaders=c(t.responseHeaders,s),t.url.includes("?")&&s!==o.ObfuscateLevel.LOW){let e=t.url.split("?")[1];e=s===o.ObfuscateLevel.HIGH?"[QUERY_STRING_OBFUSCATED]":e.split("&").map(e=>{var[e,t]=e.split("=");return e&&t?e+"=[SOME_OBFUSCATED_VALUE]":"[NULL]"}).join("&"),t.url=t.url.substring(0,t.url.indexOf("?"))+("?"+e)}return t}},720:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ObfuscateLevel=void 0,t.ObfuscateLevel={HIGH:2,2:"HIGH",MEDIUM:1,1:"MEDIUM",LOW:0,0:"LOW"}},81:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorModule=void 0;var r=s(134);const o=s(580);class n extends r.BaseDataModule{core;constructor(){super("errors")}processError(e){var t={when:Date.now(),message:"",where:this.core.getFormattedPath()};"message"in e.message&&"stack"in e.message?(t.message=e.message.message,t.stack=e.message.stack):t.message=e.message,this.core.captureScreenshot(!0),this.eventBus.dispatch(this.namespace,"onError",t)}handledRejectionError(e){console.log("got handled rejection error!")}unhandledRejectionError(e){console.log("catched error"),this.processError({message:e.reason})}boot(){var e=this.byteboost.getModule("core");if(!e)throw new Error("Unable to get core module!");this.core=e,window.addEventListener("rejectionhandled ",e=>{this.handledRejectionError(e)}),window.addEventListener("unhandledrejection",e=>{this.unhandledRejectionError(e)}),this.eventBus.listen(this.namespace,"onError",e=>{this.state.errors.push(e)}),this.doSync()}formatSyncData(){return 0===this.state.errors.length?{_empty:!0}:(0,o.cloneObject)(this.state)}onSync(e){e.response.success?this.state.errors=this.eventBus.cleanSyncedData(this.state.errors,e):this.byteboost.error("Unable to sync error module")}build(){return{errors:[]}}onOutsideError(){}}t.ErrorModule=n},356:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EventBus=t.ByteEvent=void 0;const r=s(580);var o=s(134);const n=s(397),i=s(601);var a=s(750);const c=e=>`${e}|${Date.now()}|`+(t=>{let s="";var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=r.length;for(let e=0;e<t;e++)s+=r.charAt(Math.floor(Math.random()*o));return s})(8);class l{id;payload;eventId;_meta={dispatched:-1};delay;when;priority=0;constructor(e,t,s,r){e=e+":"+t;this.when=Date.now(),this.id=e,this.payload=s,this.eventId=c(e),this.delay={waited:0,toWait:0,lastPoll:0},r&&(this.priority=r)}isValid(){return!!(this.id&&this.payload&&this.delay&&this.eventId)}setPayload(e){this.payload=e}sharpen(e){return this.id=e.id,this.eventId=e.eventId,this.payload=e.payload,this.delay=e.delay,this._meta=e._meta,this.priority=e.priority,this.when=e.when,this}flatten(){return{id:this.id,payload:(0,r.cloneObject)(this.payload),delay:this.delay,_meta:this._meta,eventId:this.eventId,priority:this.priority,when:this.when}}wait(e){return this.delay.lastPoll=Date.now(),this.delay.toWait=e,this}copy(){return new l("","",{}).sharpen(this.flatten())}}t.ByteEvent=l;class u extends o.BaseDataModule{polling=!1;middlewares={before:[h,...a.beforeMiddlewares],after:[]};modulesToPoll=[];_poll;_garbage={events:[],eventsStr:[]};constructor(){super("eventBus"),this._poll={current:{id:0,timeout:1e3}},this.syncPathName=this.namespace.toLowerCase()}toByteId(e,t){return e+":"+t}dispatch(e,t,s){this.dispatchEvent(new l(e,t,s))}dispatchEvent(e){try{if((0,n.isDev)()&&"object"==typeof e.payload)if((0,i.findCircular)(e.payload))return void this.byteboost.error("unable to dispatch event. payload has circular properties -> new byte event:",e);var t=e.copy();t.payload._eventId=t.eventId,this.state.eventQueue.push(t)}catch(e){this.byteboost.error("Error on dispatch",e)}}listen(e,t,s){null!=this.state.eventListeners&&(this.state.eventListeners.hasOwnProperty(e=e+":"+t)?this.state.eventListeners[e].push(s):this.state.eventListeners[e]=[s])}getNextEvent(){return this.state.eventQueue[0]}removeNextEvent(){return this.state.eventQueue.shift()}before(e){let t=!0;for(var s of this.middlewares.before)if(!1===s(e)){t=!1;break}return t}addModulePolling(e){this.modulesToPoll.push(e)}enginePoll(){for(var e of this.modulesToPoll)e.onPoll()}after(e){}async sleep(t){await new Promise(e=>{setTimeout(()=>{e()},t)})}runEventContext(){let r=this.state.eventQueue.slice();const e=()=>{if(0===r.length)return null;let t=r[r.length-1],s=r.length-1;for(let e=0;e<r.length;e++)r[e].priority>t.priority&&(t=r[e],s=e);return r.splice(s,1),this.before(t)?t:e()};let t=e();var s;t&&(-1===(s=this.state.eventQueue.findIndex(e=>e.eventId===t.eventId))?this.byteboost.error("Unable to find event in event queue",t):(this.state.eventQueue.splice(s,1),this.state.processingEvents.push(t)))}dispatchNextProcessedEvent(){if(0===this.state.processingEvents.length)return null;var e,t=this.state.processingEvents[0];if(!(t.id in this.state.eventListeners)||0===this.state.eventListeners[t.id].length)return this.byteboost.warn("no listeners found for event:",t),null;this.byteboost.debug("dispatching event:",t);for(e of this.state.eventListeners[t.id])e(t.payload);return t._meta={dispatched:Date.now()},this.isGarbageEvent(t)||this.state.handledEvents.push(t.flatten()),this.state.processingEvents.shift(),t}async poll(){var e;await this.sleep(this._poll.current.timeout),this.polling&&(this._poll.current.id++,null==this.state.eventListeners?(this.byteboost.error("[EventBus] No event listeners. Stopping polling"),this.polling=!1):(null!==(e=this.dispatchNextProcessedEvent())&&this.after(e),this.runEventContext(),this.enginePoll(),this.poll()))}declareGarbage(t,s){this._garbage.events.find(e=>t===e.app&&s===e.id)||(this._garbage.events.push({app:t,id:s}),this._garbage.eventsStr.push(t+":"+s))}formatSyncData(){return{handledEvents:(0,i.removeCircular)(this.state.handledEvents)}}onSync(e){if(e.response.success){const t=e.data._syncRequestedAt;this.state.handledEvents=this.state.handledEvents.filter(e=>e._meta.dispatched>t)}else this.byteboost.error("Unable to sync eventBus module.")}removeHandledEvents(t){this.state.handledEvents=this.state.handledEvents.filter(e=>!t.includes(e.eventId))}getHandledEvent(t){if(t)return this.state.handledEvents.find(e=>e.eventId===t)}cleanSyncedData(e,s){if(0===e.length)return e;let r=[];e=e.filter(e=>{var t,e=this.getHandledEvent(e._eventId);return!!e&&((t=!(e._meta.dispatched>s.data._syncRequestedAt))&&r.push(e.eventId),!t)});return this.removeHandledEvents(r),e}boot(){this.polling=!0,this.declareGarbage("request","sync"),this.poll()}cleanup(){this.polling=!1}isGarbageEvent(e){return this._garbage.eventsStr.includes(e.id)}removeGarbageEvents(e){return e.filter(e=>{return!this._garbage.eventsStr.includes(e.id)})}packEventList(e){e=e.slice(),e=(0,i.removeCircular)((0,r.cloneObject)(e));return this.removeGarbageEvents(e)}unpackEventList(e){return e&&0!==e.length?e.map(e=>new l("","",{}).sharpen(e)):[]}async pack(){var e=this.packEventList(this.state.eventQueue),t=this.packEventList(this.state.processingEvents),s=this.state.handledEvents.slice(),s=(0,i.removeCircular)((0,r.cloneObject)(s));return{...this.state,eventListeners:null,eventQueue:e,processingEvents:t,handledEvents:s}}unpack(e){e.eventQueue=this.unpackEventList(e.eventQueue),e.processingEvents=this.unpackEventList(e.processingEvents),e.eventListeners={},super.unpack(e)}build(){return{eventQueue:[],processingEvents:[],eventListeners:{},lastEventId:"",handledEvents:[]}}}t.EventBus=u;const h=e=>{if(!e.isValid()){var t=window._byteboost.getModule("eventBus");if(!t)return window._byteboost.error("Unable to find event bus module"),!1;t.byteboost.warn("Next event is invalid. Removing it",e),t.removeNextEvent()}return!0}},750:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.beforeMiddlewares=void 0;t.beforeMiddlewares=[e=>0===e.delay.toWait||(e.delay.waited=e.delay.waited+(Date.now()-e.delay.lastPoll),e.delay.lastPoll=Date.now(),e.delay.waited>e.delay.toWait)]},134:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BaseDataModule=t.BaseModule=void 0;const r=s(356),o=s(580),n=s(850);class i{state;namespace;isPolling=!1;_eventBus;constructor(e){this.namespace=e}get byteboost(){return window._byteboost}bindEventBus(e){this._eventBus=e}get eventBus(){if("eventBus"===this.namespace)throw Error("Cannot access EventBus on EventBus");return this._eventBus}emit(e,t){this.eventBus.dispatch(this.namespace,e,t)}on(e,t){this.eventBus.listen(this.namespace,e,t)}onPoll(){}receivePolls(){var e=this.byteboost.getModule("eventBus");if(!e)throw new Error("Unable to find the event bus module. unable to start module polling.");e.addModulePolling(this),this.isPolling=!0}cleanup(){}onBuildNeeded(){var e=this.build();this.state={updated:Date.now(),...e}}unpack(e){this.state=e,this.bindDefaultPersistantData(e)}bindDefaultPersistantData(e){this.state.updated=Date.now()}async pack(){return this.state}}t.BaseModule=i;t.BaseDataModule=class extends i{syncPathName;isDataModule=!0;isSyncActive=!1;constructor(e){super(e),this.syncPathName=this.namespace}initialize(){this.doSync()}formatSyncData(){return(0,o.cloneObject)(this.state)}baseFormatSyncData(e){var t=this.formatSyncData();return!0===t?._empty?(this.byteboost.debug("will dispatch onSyncSkipped",this.namespace),e.dispatchEvent(new r.ByteEvent(this.namespace,"onSyncSkipped",t,90).wait(15e3)),null):{data:t,_syncRequestedAt:Date.now()}}sync(e){var t=this.baseFormatSyncData(e);t&&e.dispatchEvent(new r.ByteEvent("request","sync",{path:n.BASE_API_URL+"/v1beta/events/"+(this.syncPathName??this.namespace),event:new r.ByteEvent(this.namespace,"onSync",{},90).flatten(),data:t},100).wait(15e3))}doSync(){const t=this.byteboost.getModule("eventBus");if(!t)throw"[byteboost] un-able to get eventBus";this.isSyncActive=!0,t.declareGarbage(this.namespace,"onSync"),t.declareGarbage(this.namespace,"onSyncSkipped"),t.listen(this.namespace,"onSyncSkipped",e=>{!0===e?._empty&&this.sync(t)}),t.listen(this.namespace,"onSync",e=>{this.onSync(e),this.sync(t)}),this.sync(t)}async forceSend(){var e,t;this.isSyncActive&&(e=this.byteboost.getModule("eventBus"))&&(e=this.baseFormatSyncData(e))&&(t=this.byteboost.getModule("request"))&&t.post(n.BASE_API_URL+"/v1beta/events/"+this.syncPathName,e)}}},230:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Logger=t.ConsoleType=void 0;var r,o=s(134);const n=s(397),i=s(601),a=s(580);(s=r||(t.ConsoleType=r={})).DEBUG="debug",s.ERROR="error",s.INFO="info",s.LOG="log",s.WARN="warn",s.DIR="dir",s.DIRXML="dirxml",s.TABLE="table",s.TRACE="trace",s.GROUP="group",s.GROUPCOLLAPSED="groupCollapsed",s.GROUPEND="groupEnd",s.CLEAR="clear",s.COUNT="count",s.COUNTRESET="countReset",s.ASSERT="assert",s.PROFILE="profile",s.PROFILEEND="profileEnd",s.TIME="time",s.TIMELOG="timeLog",s.TIMEEND="timeEnd",s.TIMESTAMP="timeStamp",s.CONTEXT="context",s.CREATETASK="createTask",s.MEMORY="memory";class c extends o.BaseDataModule{logTrackingEnabled=!0;minLogsLength=500;maxLogsLength=1e3;bindedConsoleMethods=[];core;constructor(){super("logger"),this.syncPathName="console"}build(){for(var e in console)console[e]&&this.bindedConsoleMethods.push(e);var t,s={};for(t of this.bindedConsoleMethods)s[t]={logs:[],count:0};return s}cleanCircularLogObjects(){this.state.log=(0,i.removeCircular)((0,a.cloneObject)(this.state.log)),this.state.error=(0,i.removeCircular)((0,a.cloneObject)(this.state.error)),this.state.warn=(0,i.removeCircular)((0,a.cloneObject)(this.state.warn))}cleanup(){this.logTrackingEnabled=!1,this.byteboost.debug("stopped tracking logs")}async pack(){return this.cleanCircularLogObjects(),this.state}formatSyncData(){var e,t={logs:[]};for(e in r){var s=this.state[e.toLowerCase()];!s||s.logs.length<=0||("clear"===e.toLowerCase()?t.logs=[...t.logs,...s.logs.map(e=>({...e,value:"CONSOLE_CLEAR"}))]:t.logs=[...t.logs,...s.logs.map(e=>({...e,value:e.value.map(e=>{if("object"==typeof e)try{return JSON.stringify(e)}catch(e){}return e}).join("").replace(/\n/g,"[[{{NEW_LINE}}]]")}))])}return 0===t.logs.length?{_empty:!0}:t}onSync(e){if(e.response.success)for(var t in r){t=this.state[t.toLowerCase()];!t||0===t.count&&0===t.logs.length||(t.logs=this.eventBus.cleanSyncedData(t.logs,e),t.count=t.logs.length)}else this.byteboost.error("Unable to sync logger module.")}boot(){const o=this;var e,t=this.byteboost.getModule("core");for(e in t&&(this.core=t),this.eventBus.listen("logger","log",e=>{var t=e.kind;this.state[t]||(this.state[t]={count:0,logs:[]}),this.state[t].count++,this.state[t].logs.push(e),this.handleMemoryFor(t)}),this.doSync(),this.byteboost.debug("tracking logs"),console)e=e,console[e]=function(t,s,r){if(s)return function(...e){s.apply(t,Array.prototype.slice.apply(e)),o.logTrackingEnabled&&o.trackLog(r,...e)}}(console,console[e],e)}handleMemoryFor(e){var t=this.state[e];t.logs.length>this.maxLogsLength&&(this.byteboost.debug("removing logs",e),t.logs=t.logs.slice(t.logs.length-this.minLogsLength,t.logs.length),t.count=t.logs.length)}async trackLog(e,...t){(0,n.isDev)()&&"string"==typeof t[0]&&t[0].includes("[byteboost]")||(t={value:t,when:Date.now(),kind:e,where:this.core?this.core.getFormattedPath():window.location.pathname},this.eventBus.dispatch("logger","log",t))}}t.Logger=c},882:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Pinger=void 0;var r=s(134);const o=s(850);class n extends r.BaseModule{requestModule;lastPingTimestamp=0;constructor(){super("pinger")}async onPoll(){var e=this.byteboost.initializedAt,e=(Date.now()-e)/1e3;if(!(e<180)){if(0!==this.lastPingTimestamp)if((Date.now()-this.lastPingTimestamp)/1e3<180)return;this.lastPingTimestamp=Date.now();e=await this.requestModule.get(o.BASE_API_URL+"/v1beta/session/ping");401===e.status&&this.byteboost.cleanup(),this.byteboost.debug("DID PING",e)}}boot(){var e=this.byteboost.getModule("request");if(!e)throw new Error("Unable to get request module!");this.requestModule=e,this.receivePolls()}build(){return{}}}t.Pinger=n},258:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RequestModule=void 0;var r=s(134);const o=s(356);class n extends r.BaseModule{persistantHeaders={};lastPostTimestamp=0;constructor(){super("request")}boot(){this.persistantHeaders={"X-Auth-Token":this.byteboost.getApiKey()},this.eventBus.listen(this.namespace,"get",async e=>{var t=await this.get(e.path),e=new o.ByteEvent("","",{}).sharpen(e.event);e.setPayload(t),this.eventBus.dispatchEvent(e)}),this.eventBus.listen(this.namespace,"sync",async e=>{var t=await this.post(e.path,e.data.data),s=new o.ByteEvent("","",{}).sharpen(e.event),t={response:t,responseTimestamp:Date.now(),data:e.data};s.setPayload(t),this.eventBus.dispatchEvent(s)})}isSuccessResponse(e){return 199<e&&e<300}async post(e,t){this.lastPostTimestamp=Date.now();try{var s=await fetch(e,{credentials:"include",headers:{"Content-Type":"application/json",Accept:"application/json",...this.persistantHeaders},method:"POST",body:JSON.stringify(t)});try{var r=await s.json();return this.isSuccessResponse(s.status)?{status:s.status,body:r,success:!0}:{status:s.status,body:r,success:!1}}catch(e){return this.isSuccessResponse(s.status)?{status:s.status,body:{},success:!0}:(this.byteboost.error("Unexpected post request error."),console.log(s.body,105),{status:s.status,body:s.body,success:!1})}}catch(e){return this.byteboost.error("Unexpected post request error."),{status:500,body:{},success:!1}}}async get(e){var e=await fetch(e,{credentials:"include",headers:{...this.persistantHeaders,Accept:"application/json"}}),t=await e.json();return this.isSuccessResponse(e.status)?{status:e.status,body:t,success:!0}:{status:e.status,body:t,success:!1}}build(){return{apiKey:""}}}t.RequestModule=n},252:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.preflightChecks=void 0;const i=s(850);t.preflightChecks=async()=>{if(void 0===window.performance||void 0===window.performance.now)return!1;try{window.performance.now()}catch(e){return!1}if(!0===window._startingByteboost)return!1;try{if(!("DOMParser"in window))return!1;if(!("TextEncoder"in window&&"TextDecoder"in window))return!1;if(!("XMLSerializer"in window))return!1;new XMLSerializer}catch(e){return!1}if(!window.byteboostKey){var t=document.querySelector("[data-byteboost-key]");if(!t)return!1;t=t.getAttribute("data-byteboost-key");if(!t)return!1;window.byteboostKey=t}if(window._startingByteboost=!0,!a())return!1;var s,t=await c();try{var r=window.performance.now(),o=await fetch(i.BASE_API_URL+"/v1beta/session?hasAdblocker="+t,{credentials:"include",headers:{"X-Auth-Token":window.byteboostKey}});if(!(199<(s=o.status)&&s<300))return console.log("unable to get session"),!1;if(650<window.performance.now()-r)return await fetch(i.BASE_API_URL+"/v1beta/session/kill?networkPreflightFailed=true",{credentials:"include",headers:{"X-Auth-Token":window.byteboostKey}}),!1;var n=await o.text();let e=-1;try{if((e=parseInt(n))<0||2<e)throw"invalid level"}catch(e){return console.log("unable to parse obfuscate level",e),!1}return{success:!0,obfuscateLevel:e}}catch(e){return!1}};const a=()=>{var s=[];for(let e=0;e<10;e++){var r=window.performance.now();let t=0;for(let e=0;e<1e6;e++)t+=(t*e+10*e)/(10*e);r=window.performance.now()-r;s.push(r)}let e=0;for(const t of s)e+=t;return!(125<(e/=s.length))},c=async()=>{let t=!1;try{await fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js")).catch(e=>t=!0)}catch(e){t=!0}return t}},429:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.uncompressJSON=t.compressJSON=void 0;t.compressJSON=e=>{let o={},n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=0,a=1;const c=e=>{var t,s=[];for(t of e)"object"!=typeof t?s.push(t):Array.isArray(t)?s.push(c(t)):s.push(l(t));return s},l=e=>{var t,s={};for(t in e){var r=(e=>{if(e in o)return o[e];let t="";if(i>=n.length&&(i=0,a++),1!==a)for(let e=0;e<a;e++)i+e>=n.length&&(i=0,a++),t+=n[i+e];else t=n[i];var s=`£${t}£`;return i++,o[e]=s})(t);"object"!=typeof e[t]?s[r]=e[t]:Array.isArray(e[t])?s[r]=c(e[t]):s[r]=l(e[t])}return s};var t,e=l(e),s={};for(t in o)s[o[t]]=t;return[e,s]};t.uncompressJSON=(e,o)=>{const n=e=>{var t,s=[];for(t of e)"object"!=typeof t?s.push(t):Array.isArray(t)?s.push(n(t)):s.push(i(t));return s},i=e=>{var t,s={};for(t in e){r=t;var r=o[r];"object"!=typeof e[t]?s[r]=e[t]:Array.isArray(e[t])?s[r]=n(e[t]):s[r]=i(e[t])}return s};return i(e)}},580:(e,l,t)=>{"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.cloneObject=void 0;const u=t(601);l.cloneObject=e=>{if("object"!=typeof e)return e;if(Array.isArray(e))return e;let t=(0,u.removeCircular)(e),s={};const r=e=>"object"!=typeof e,o=e=>!!Array.isArray(e),n=e=>e.map(e=>r(e)?e:(o(e)?n:(0,l.cloneObject))(e));var i,a;for(i in t){var c=t[i];a=i,c=c,r(c)?s[a]=c:o(c)?s[a]=n(c):s[a]=(0,l.cloneObject)(t[a])}return s}},765:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WebWorker=t.WorkerHandler=void 0;t.WorkerHandler=class{initialized=!1;filePath;workerState={ready:!1,upgrading:!1};currentWorker;workerRegistration;_subscriptions=new Map;_messageQueue=[];constructor(e,t){if("undefined"==typeof window)throw new Error("Unable to initialize service worker on server");window._byteboost_workers||(window._byteboost_workers=new Map);var s=window._byteboost_workers.get(e);if(s)return s;this.filePath=t,window._byteboost_workers.set(e,this)}canCommunicate(){return this.workerState.ready&&!this.workerState.upgrading}on(e,t){this._subscriptions.set(e,t)}emit(e,t){this.currentWorker&&this.canCommunicate()?this.currentWorker.postMessage({id:e,payload:t}):this._messageQueue.push({id:e,payload:t})}onReady(){if(this.workerState.ready=!0,0!==this._messageQueue.length)if(this.currentWorker&&this.canCommunicate()){console.log("sending skipped messages!",this._messageQueue);for(const e of this._messageQueue)this.emit(e.id,e.payload)}else console.log("UNABLE TO COMMUNTICATE in onReady. This shouldn't happen")}onWorkerMessage(e){var e=e.data,t=this._subscriptions.get(e.id);t&&t(e.payload)}registerWorker(e){console.log("got new worker connection!",e),this.currentWorker=e,navigator.serviceWorker.removeEventListener("message",e=>{this.onWorkerMessage(e)}),navigator.serviceWorker.addEventListener("message",e=>{this.onWorkerMessage(e)}),this.onReady()}kill(){this.workerRegistration&&this.workerRegistration.unregister()}init(){this.initialized||(this.initialized=!0,navigator&&"serviceWorker"in navigator&&navigator.serviceWorker.register(this.filePath).then(e=>{(this.workerRegistration=e).active&&(console.log("GOT ACTIVE",e.installing),this.registerWorker(e.active)),e.addEventListener("updatefound",()=>{this.workerState.upgrading=!0;const t=e.installing;t&&(console.log("New worker is being installed for:",this.filePath),t.onstatechange=e=>{"activated"===t.state&&(this.workerState.upgrading=!1,this.workerState.ready=!1,this.registerWorker(t))})})}))}};const s={"screenshot-parser":"https://cdn.jsdelivr.net/npm/@byteboost/inspector-public@latest/dist/public/screenshot.js"};t.WebWorker=class{name;filePath;worker;isActive=!1;_subscriptions=new Map;unsentMessages=[];constructor(e){this.name=e,this.filePath=s[e],this.start()}emit(e,t){this.isActive?this.worker.postMessage({id:e,payload:t}):this.unsentMessages.push({id:e,payload:t})}on(e,t){this._subscriptions.set(e,t)}start(){console.log("starting worker",this.filePath,this.getWorkerUrl()),this.worker=new Worker(this.getWorkerUrl()),this.worker.onmessage=e=>{var t=e.data.id,e=e.data.payload;if("_self"===t&&"string"==typeof e&&"active"===e){if(this.isActive=!0,0!==this.unsentMessages.length)for(const s of this.unsentMessages)this.worker.postMessage(s)}else this._subscriptions.has(t)&&this._subscriptions.get(t)(e)}}getWorkerUrl(){var e=`importScripts( "${this.filePath}" );`;return URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}}},924:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getPersistantWorker=t.killPersistantWorkers=t.setupPersistantWorkers=void 0;const r=s(765);t.setupPersistantWorkers=async()=>{new r.WorkerHandler("network-tracker","/byteboost.js").init()},t.killPersistantWorkers=async()=>{window._byteboost_workers.forEach(e=>{e.kill()})};t.getPersistantWorker=e=>window._byteboost_workers.get(e)}},o={};(function e(t){var s=o[t];return void 0===s&&(s=o[t]={exports:{}},r[t].call(s.exports,s,s.exports,e)),s.exports})(607)})();
