"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Core=void 0;const __1=require(".."),object_1=require("../../utils/object"),workerHandling_1=require("package/workerHandling"),html2canvas_1=__importDefault(require("html2canvas")),misc_1=require("package/misc"),request_1=require("./obfuscator/request"),MINIMUM_TIME_BETWEEN_SCREENSHOTS=5e3,IMAGE_QUALITY=.7;class Core extends __1.BaseDataModule{networkTracker;lastScreenshotTime=-1;_obfuscateLevel=-1;constructor(){super("core")}get obfuscateLevel(){if(-1===this._obfuscateLevel)throw new Error("Obfuscate level is unset");return this._obfuscateLevel}handlePath(){let e=window.location.pathname;var t,s;0===e.length&&(e="/"),this.state.currentPath.pathname!==e&&(t=Date.now(),s=(0,object_1.cloneObject)(this.state.currentPath),this.state.currentPath.pathname=e,this.byteboost.debug("path changed!",this.state.currentPath),this.captureScreenshot(!0),this.eventBus.dispatch(this.namespace,"pathUpdate",{from:s.pathname,to:this.state.currentPath.pathname,when:t}))}getFormattedPath(){return this.state.currentPath.pathname}onPoll(){this.handlePath(),this.networkTracker.emit("requests:get")}gotClick(e){this.state.clicks.push(e),this.byteboost.debug("new click state",this.state.clicks)}gatherRelevantElementData(e,t=0){return{innerHTML:(0,misc_1.compressString)(e.innerHTML),outerHTML:(0,misc_1.compressString)(e?.outerHTML),scrollHeight:e?.scrollHeight,scrollLeft:e?.scrollLeft,scrollTop:e?.scrollTop,scrollWidth:e?.scrollWidth,scrollLeftMax:e?.scrollLeftMax,scrollTopMax:e?.scrollTopMax,clientHeight:e?.clientHeight,clientLeft:e?.clientLeft,clientTop:e?.clientTop,clientWidth:e?.clientWidth,attrId:e.getAttribute("id")??void 0,attrClassName:e.getAttribute("class")??void 0,attrStyle:e.getAttribute("style")??void 0}}getAppropriateClickEvent(e,t){var s=e.target||e.srcElement,e={...this.getMousePos(e),when:t||Date.now(),count:1};if(!s)return e;this.byteboost.debug(s);t=s;return{...e,element:this.gatherRelevantElementData(t),where:this.getFormattedPath()}}boundedClickListener(e){this.byteboost.debug("got click event!");var t=Date.now(),e=(this.captureScreenshot(),this.getAppropriateClickEvent(e,t));this.eventBus.dispatch("core","click",e)}async captureScreenshot(e){const n=Date.now();if(!(n-MINIMUM_TIME_BETWEEN_SCREENSHOTS<this.lastScreenshotTime&&!0!==e)){this.lastScreenshotTime=n,this.byteboost.debug("capturing screenshot");let r=0;var t=document.getElementsByTagName("*");for(let e=0;e<t.length;e++)if(0!==t[e].scrollTop){r=t[e].scrollTop;break}(0,html2canvas_1.default)(document.documentElement,{logging:!1,foreignObjectRendering:!0,imageTimeout:0}).then(e=>{var t=document.createElement("canvas"),s=t.getContext("2d");s&&(t.width=window.innerWidth,t.height=window.innerHeight,s.drawImage(e,0,r,window.innerWidth,window.innerHeight,0,0,window.innerWidth,window.innerHeight),s=t.toDataURL("image/jpeg",IMAGE_QUALITY),e=(0,misc_1.compressString)(s),this.eventBus.dispatch("core","screenshot:captured",{compressed:e,when:n,where:this.getFormattedPath()}))})}}handleRequests(e){for(const s of e.requests){var t=(0,request_1.requestObfuscator)(s,this.obfuscateLevel);0===t.referrer.length&&(t.referrer=window.location.toString()),t.method=t.method.toLowerCase(),this.state.requests.push({request:t})}}boot(){var e=(0,workerHandling_1.getPersistantWorker)("network-tracker");this._obfuscateLevel=this.byteboost.getObfuscateLevel(),e&&(this.networkTracker=e,this.networkTracker.on("requests:get",e=>{0!==e.length&&this.eventBus.dispatch("core","requests",{requests:e})})),this.receivePolls(),this.eventBus.listen("core","requests",e=>{this.handleRequests(e)}),this.eventBus.listen("core","screenshot:captured",e=>{this.state.screenshots.push(e)}),this.eventBus.listen("core","click",e=>{this.gotClick(e)}),this.eventBus.listen(this.namespace,"pathUpdate",e=>{this.state.navigations.push(e)}),document.addEventListener("click",clickListener,{capture:!0}),this.doSync()}formatSyncData(){var e;return 0===this.state.navigations.length&&0===this.state.screenshots.length&&0===this.state.clicks.length&&0===this.state.requests.length?{_empty:!0}:((e=(0,object_1.cloneObject)(this.state)).requests=e.requests.map(e=>e.request),this.byteboost.debug("cloned state",e,"current",this.state),e.currentPath=this.state.currentPath.pathname,e)}onSync(e){e.response.success?(this.state.navigations=this.eventBus.cleanSyncedData(this.state.navigations,e),this.state.screenshots=this.eventBus.cleanSyncedData(this.state.screenshots,e),this.state.clicks=this.eventBus.cleanSyncedData(this.state.clicks,e),this.state.requests=this.eventBus.cleanSyncedData(this.state.requests,e)):this.byteboost.error("Unable to sync core module.")}cleanup(){console.log("removing click listener"),document.removeEventListener("click",clickListener)}getMousePos(e){var t,s;let r=e?.pageX??0,n=e?.pageY??0;return null==e.pageX&&null!=e.clientX&&(t=(s=e.target&&e.target.ownerDocument||document).documentElement,s=s.body,r=e.clientX+(t&&t.scrollLeft||s&&s.scrollLeft||0)-(t&&t.clientLeft||s&&s.clientLeft||0),n=e.clientY+(t&&t.scrollTop||s&&s.scrollTop||0)-(t&&t.clientTop||s&&s.clientTop||0)),{x:r??-1,y:n??-1}}build(){return{navigations:[],currentPath:{pathname:"/"},clicks:[],screenshots:[],requests:[]}}}exports.Core=Core;const clickListener=e=>{var t;window._byteboost&&(t=window._byteboost.getModule("core"))&&t.boundedClickListener(e)};
