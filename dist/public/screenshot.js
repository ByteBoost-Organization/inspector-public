importScripts("https://cdn.byteboost.io/v1beta/repo/inspector/domparser.js");let toProcess=[],cssCache={};onmessage=e=>{var t=e.data.id,e=e.data.payload;"screenshot:parse"===t?toProcess.push(e):"clear:cache"===t&&(cssCache={})},postMessage({id:"_self",payload:"active"});const BYTEBOOST_ELEMENT_ATTRIBUTES=["data-bb__ss__"],PERSISTANT_TAGS=["html","body","head"],PERSISTANT_ATTRIBUTES=["class","className","style","id"],PERSISTANT_IMAGE_ATTRIBUTES=["width","height","src"],AllHTMLTags=(setInterval(async()=>{if(0!==toProcess.length)try{var{document:e,when:t,where:a,obfuscateLevel:r,viewport:s,scrollState:o,cssRulesText:c}=toProcess.shift(),l=(new TextDecoder).decode(e);const h=cheerio.cheerio.load(l,{recognizeSelfClosing:!0,decodeEntities:!1,_useHtmlParser2:!0}),f=e=>{if(!h(e).attr())return[];var t,a,r=[];for([t,a]of Object.entries(h(e).attr()))BYTEBOOST_ELEMENT_ATTRIBUTES.includes(t)||r.push({name:t,value:a});return r},m=(e,t,a)=>{t.startsWith("data-")&&(h(e).removeAttr(t),h(e).attr("obfuscated_attr_"+a,"OBFUSCATED"))},p=(e,t,a)=>{h(e).removeAttr(t),t.startsWith("data-")?h(e).attr("obfuscated_attr_"+a,"OBFUSCATED"):h(e).attr(t,"OBFUSCATED")},T=(t,e,a)=>{if(2!==e){a=a??f(t);if(1===e){let e=0;for(const r of a)m(t,r.name,e),e++}else if(2===e){let e=0;for(const s of a)p(t,s.name,e),e++}}},b=e=>{h(e).get(0).tagName="OBFUSCATED",h(e).attr()&&(T(e,0,f(e)),v(e))},v=t=>{t=h(t);try{let a=!1;if(t.contents().map((e,t)=>{null!=h(t).get(0).tagName&&(a=!0)}),a)throw"e";t.html("OBFS. TEXT")}catch(e){t.html("OBFS. HTML")}},g=(e,t)=>{var a=f(e),r=a.map(e=>e.name);if(r.includes("rel")&&r.includes("href")){v(e);var s,r=a.find(e=>"rel"===e.name);try{r&&"stylesheet"===r.value.toLowerCase()&&(s=a.find(e=>"href"===e.name))&&s.value in cssCache&&(T(e,t),h(e).replaceWith(`<style>${cssCache[s.value]}</style>`))}catch(e){}return!0}},y=(e,t)=>{var a=f(e);if(a.map(e=>e.name).includes("src"))return a=a.filter(e=>"src"!==e.name&&"type"!==e.name),T(e,t,a),v(e),!0},E=(e,t)=>(T(e,t),!0),S=(e,t)=>{var a=f(e).filter(e=>!PERSISTANT_IMAGE_ATTRIBUTES.includes(e.name));return T(e,t,a),v(e),!0},A=(e,t)=>{var a=h(e).get(0).tagName;if(!a)return!1;switch(a.toLowerCase()){case"link":return g(e,t);case"script":return y(e,t);case"style":return E(e,t);case"img":return S(e,t);default:return}},_=(e,a,t)=>{if(!t){if(!h(e))return;if(!1===((e,t)=>{var r=h(e),a=r.get(0).tagName;if(2!==t.obfuscateLevel&&!AllHTMLTags.includes(a))return b(e),!1;if(!0===A(e,t.obfuscateLevel))return!1;if(T(e,t.obfuscateLevel),0===t.obfuscateLevel){let a=[];r.contents().map((e,t)=>{null!=h(t).get(0).tagName&&a.push(t)}),a.length<=1&&(a,v(e))}})(e,a))return}h(e).contents().map((e,t)=>{_(t,a)})};for(const w of h("link")){var n=h(w).attr("rel");if(n&&"stylesheet"===n.toLowerCase()){var i=h(w).attr("href");if(i&&!(i in cssCache))try{var d,u=await fetch(i);u.status<200||299<u.stats||(d=await u.text(),cssCache[i]=d)}catch(e){}}}_(h.root(),{obfuscateLevel:r},!0),h("head").append(`<style rel="stylesheet">${c}</style>`),postMessage({id:"screenshot:parsed",payload:{document:(new TextEncoder).encode(h.root().html()),when:t,where:a,viewport:s,scrollState:o}})}catch(e){}},200),["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","big","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","dir","div","dl","dt","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","menu","meta","meter","nav","noframes","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","search","section","select","small","source","span","strike","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr"]);
