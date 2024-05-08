importScripts("https://cdn.byteboost.io/v1beta/repo/inspector/domparser.js");const BYTEBOOST_ELEMENT_ATTRIBUTES=["data-bb__ss__"];let toProcess=[];onmessage=e=>{var t=e.data.id,e=e.data.payload;"screenshot:parse"===t&&toProcess.push(e)},postMessage({id:"_self",payload:"active"});const recurseThroughElement=(t,r)=>{if(t&&"childNodes"in t&&t.childNodes){let e=Object.keys(t.childNodes);for(const s of e=e.slice(0,e.length-1)){var a=t.childNodes[s];a&&(t.childNodes[s]=parseElement(a,r),t.childNodes[s]=recurseThroughElement(a,r))}return t}},purgeElement=e=>{stripContent(e),e.tagName="OBFUSCATED";let t=0;for(const r of getAttributes(e))e.removeAttribute(r.name),e.setAttribute("obfuscated_attr_"+t,"OBFUSCATED"),t++;return e},stripContent=e=>{e.textContent&&0!==e.textContent.length&&(e.textContent="OBFUSCATED TEXT CONTENT"),e.innerHTML&&0!==e.innerHTML.length&&(e.innerHTML="OBFUSCATED INNER HTML")},ATTRIBUTES_TO_KEEP=["class","className","style"],getAttributes=r=>{if(!(r&&"attributes"in r))return[];let a=[];return Object.keys(r.attributes).forEach(e=>{var t=r.attributes[e];"object"==typeof t&&"_ownerDocument"!==e&&"nodeName"in t&&"nodeValue"in t&&null!=t.nodeValue&&a.push({name:t.nodeName,value:t.nodeValue})}),a},getFilteredAttributes=e=>getAttributes(e).filter(e=>!BYTEBOOST_ELEMENT_ATTRIBUTES.includes(e)),obfuscateAttributeSoft=(e,t,r)=>{t.startsWith("data-")&&e.setAttribute("obfuscated_attr_"+r,"OBFUSCATED")},obfuscateAttributeHard=(e,t,r)=>{ATTRIBUTES_TO_KEEP.includes(t)||(e.removeAttribute(t),t.startsWith("data-")?e.setAttribute("obfuscated_attr_"+r,"OBFUSCATED"):e.setAttribute(t,"OBFUSCATED"))},handleAttributeObfuscation=(t,e,r)=>{if(0!==e){r=r??getFilteredAttributes(t);if(1===e){let e=0;for(const a of r)obfuscateAttributeSoft(t,a.name,e),e++}else if(2===e){let e=0;for(const s of r)obfuscateAttributeHard(t,s.name,e),e++}}},useSpecificElementHandlers=(e,t)=>{if(e.tagName&&"string"==typeof e.tagName&&"link"===e.tagName.toLowerCase()){var r=getFilteredAttributes(e),a=r.map(e=>e.name);if(a.includes("rel")&&a.includes("href"))return a=r.filter(e=>"rel"!==e.name&&"href"!==e.name),handleAttributeObfuscation(e,t,a),stripContent(e),!0}},parseElement=(e,t)=>{if(null!=e.tagName){var t=t.obfuscateLevel;if(0!==t){if(!AllHTMLTags.includes(e.tagName))return purgeElement(e);!0!==useSpecificElementHandlers(e,t)&&(handleAttributeObfuscation(e,t),2===t)&&(t=Array.from(e.childNodes).filter(e=>null!=e&&null!=e.tagName)).length<=1&&(1!==t.length||null==t[0].tagName&&e)&&stripContent(e)}}return e},tagsWithText=(setInterval(()=>{if(0!==toProcess.length)try{var{document:e,when:t,where:r,obfuscateLevel:a,viewport:s,scrollState:o}=toProcess.shift(),i=(new TextDecoder).decode(e),n=(new xmldom.DOMParser).parseFromString(i,"text/html"),l=recurseThroughElement(n.documentElement,{obfuscateLevel:a}),d=(new xmldom.XMLSerializer).serializeToString(l);postMessage({id:"screenshot:parsed",payload:{document:(new TextEncoder).encode(d),when:t,where:r,viewport:s,scrollState:o}})}catch(e){}},200),["a","abbr","acronym","address","area","article","b","base","blockquote","button","caption","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","dir","div","dl","dt","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","hr","i","img","ins","kbd","label","legend","li","link","map","nav","noframes","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","s","samp","script","search","section","select","small","source","span","strike","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","time","title","tr","tt","u","ul","var","wbr"]),AllHTMLTags=["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","big","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","dir","div","dl","dt","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","menu","meta","meter","nav","noframes","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","search","section","select","small","source","span","strike","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr"];
