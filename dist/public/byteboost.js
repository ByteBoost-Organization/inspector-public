self.addEventListener("install",()=>{self.skipWaiting()}),self.addEventListener("activate",e=>{e.waitUntil(clients.claim())});let allRequests=[],wantedFiles=[],wantedFilesRequests=[],wantedFilesResponses=[];const isSuccessResponse=e=>199<e&&e<300,makeRequest=async c=>new Promise(async s=>{try{var t,a,n={};for([t,a]of c.request.headers.entries())n[t]=a;const u={method:c.request.method,referrer:c.request.referrer,url:c.request.url,when:Date.now(),requestHeaders:n,responseFailed:!1};if(u.url.includes("external.api.byteboost.io")||u.url.startsWith("chrome://")||u.url.startsWith("firefox://")||u.url.includes("cdn.byteboost.io"))return s(fetch(c.request));let e=null;try{var i,r,l=Date.now(),d=(e=await fetch(c.request),u.status=e.status,u.statusText=e.statusText,u.ok=e.ok,u.type=e.type,u.redirected=e.redirected,u.took=Date.now()-l,{});for([i,r]of e.headers.entries())d[i]=r;u.responseHeaders=d}catch(e){u.responseFailed=!0}if(null===e)s(fetch(c.request));else{for(const o of wantedFiles)if(u.url.endsWith(o)){wantedFilesRequests.push({request:c.request,requestInfo:u,filename:o});break}s(e)}setTimeout(()=>{allRequests.push(u),handleWantedRequest(u)},0)}catch(e){s(fetch(c.request))}}),handleWantedRequest=async s=>{var e=wantedFilesRequests.findIndex(e=>e.requestInfo.url===s.url);if(-1!==e){const r=wantedFilesRequests[e].filename+"";var t=wantedFilesRequests[e].request,a=wantedFiles.findIndex(e=>e===r);-1!==a&&wantedFiles.splice(a,1),wantedFilesRequests.splice(e,1);try{var n=await fetch(t);if(!isSuccessResponse(n.status))throw"invalid";var i=await n.text();wantedFilesResponses.push({filename:r,content:i})}catch(e){}}};self.addEventListener("fetch",async e=>{e.respondWith(makeRequest(e))}),self.addEventListener("message",async e=>{var s=e.source.id;s&&(s=await clients.get(s))&&("wanted_files"===e.data.id?wantedFiles=e.data.payload.wantedFiles:"requests:get"===e.data.id&&(e=allRequests.slice(),allRequests=[],s.postMessage({id:"requests:get",payload:e}),0!==wantedFilesResponses.length)&&(s.postMessage({id:"got_wanted_files",payload:{files:wantedFilesResponses}}),wantedFilesResponses=[]))});
