self.addEventListener("install",()=>{self.skipWaiting()}),self.addEventListener("activate",e=>{e.waitUntil(clients.claim())});let allRequests=[];const isSuccessResponse=e=>199<e&&e<300,makeRequest=async d=>new Promise(async e=>{var s,t,r={};for([s,t]of d.request.headers.entries())r[s]=t;const a={method:d.request.method,referrer:d.request.referrer,url:d.request.url,when:Date.now(),requestHeaders:r,responseFailed:!1};if(a.url.includes("external.api.byteboost.io")||a.url.startsWith("chrome://")||a.url.startsWith("firefox://")||a.url.includes("cdn.jsdelivr.net/npm/@byteboost/inspector-public")||a.url.includes("cdn.byteboost.io"))return e(fetch(d.request));let n=null;try{var i=Date.now();n=await fetch(d.request),a.status=n.status,a.statusText=n.statusText,a.ok=n.ok,a.type=n.type,a.redirected=n.redirected,a.took=Date.now()-i}catch(e){a.responseFailed=!0}i=()=>{allRequests.push(a),null===n?e(fetch(d.request)):e(n)};if(!isSuccessResponse(a.status)||a.responseFailed)return i();var l,u,o={};for([l,u]of n.headers.entries())o[l]=u;a.responseHeaders=o,allRequests.push(a),i()});self.addEventListener("fetch",async e=>{e.respondWith(makeRequest(e))}),self.addEventListener("message",async e=>{var s=e.source.id;s&&(s=await clients.get(s))&&"requests:get"===e.data.id&&(e=allRequests.slice(),allRequests=[],s.postMessage({id:"requests:get",payload:e}))});
