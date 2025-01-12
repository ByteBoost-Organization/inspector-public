importScripts("https://cdn.byteboost.io/v1beta/repo/inspector/domparser.js");let toProcess=[],cssCache={};onmessage=e=>{var t=e.data.id,e=e.data.payload;"screenshot:parse"===t?toProcess.push(e):"clear:cache"===t&&(cssCache={})},postMessage({id:"_self",payload:"active"});const BYTEBOOST_ELEMENT_ATTRIBUTES=["data-bb__ss__"],PERSISTANT_ATTRIBUTES=["class","className","style","id","data-theme"],PERSISTANT_IMAGE_ATTRIBUTES=["width","height","src"],PERSISTANT_TAGS=["html","body","head","style"],PERSISTANT_IFRAME_ATTRIBUTES=["width","height"],obfuscatedTextStringUpper="OBFS. TEXT",obfuscatedTextStringLower="obfs. text",regexs=[/^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/,/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,/^(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/],process=async()=>{if(0!==toProcess.length)try{var{document:e,when:t,where:r,obfuscateLevel:a,viewport:s,scrollState:l,cssRulesText:c}=toProcess.shift(),n=(new TextDecoder).decode(e);const L=cheerio.cheerio.load(n,{recognizeSelfClosing:!0,decodeEntities:!1,_useHtmlParser2:!0}),d=(e,t)=>{var r=v(e),a=r.map(e=>e.name);if(a.includes("rel")&&a.includes("href")){_(e);var s,l=r.find(e=>"rel"===e.name),c=r.filter(e=>"rel"!==e.name);y(e,t,c);try{l&&"stylesheet"===l.value.toLowerCase()&&(s=r.find(e=>"href"===e.name))&&s.value in cssCache&&L(e).replaceWith(`<style>${cssCache[s.value]}</style>`)}catch(e){}return!0}a.includes("src")&&(_(e),y(e,0))},u=(e,t)=>{var r=v(e);if(r.map(e=>e.name).includes("src"))return r=r.filter(e=>"src"!==e.name&&"type"!==e.name),y(e,t,r),_(e),!0},h=(e,t)=>(y(e,t),!0),m=(e,t)=>{var r=v(e).filter(e=>!PERSISTANT_IMAGE_ATTRIBUTES.includes(e.name));return y(e,t,r),_(e),!0},p=(e,t)=>(y(e,t),E(e,"value","input-value"),!0),T=(e,t)=>{var r=v(e).filter(e=>!PERSISTANT_IFRAME_ATTRIBUTES.includes(e.name));return y(e,0,r),L(e).html(""),!0},g=(e,t)=>{var r=Object.keys(L(e).attr());return r.includes("data-do-obfs")?(y(e,0),_(e),!0):!!r.includes("data-dont-obfs")},b=(e,t)=>{var r=L(e).get(0).tagName;if(!r)return!1;switch(r.toLowerCase()){case"link":return d(e,t);case"script":return u(e,t);case"style":return h(e,t);case"img":return m(e,t);case"input":case"textarea":return p(e,t);case"iframe":return T(e,t);default:return}},v=e=>{if(!L(e).attr())return[];var t,r,a=[];for([t,r]of Object.entries(L(e).attr()))BYTEBOOST_ELEMENT_ATTRIBUTES.includes(t)||a.push({name:t,value:r});return a},S=(e,t,r)=>{t.startsWith("data-")&&(L(e).removeAttr(t),L(e).attr("obfuscated_attr_"+r,"OBFUSCATED"))},E=(e,t,r)=>{PERSISTANT_ATTRIBUTES.includes(t)||(L(e).removeAttr(t),t.startsWith("data-")?L(e).attr("obfuscated_attr_"+r,"OBFUSCATED"):L(e).attr(t,"OBFUSCATED"))},y=(t,e,r)=>{if(2!==e){r=r??v(t);if(1===e){let e=0;for(const a of r)S(t,a.name,e),e++}else{let e=0;for(const s of r)E(t,s.name,e),e++}}},A=e=>{L(e).get(0).tagName="OBFUSCATED",L(e).attr()&&(y(e,0,v(e)),_(e))},_=t=>{t=L(t);try{let r=!1;if(t.contents().map((e,t)=>{null!=L(t).get(0).tagName&&(r=!0)}),r)throw"e";0!==t.html().trim().length&&t.html("OBFS. TEXT")}catch(e){t.html("OBFS. HTML")}},B=e=>{return null!=e.tagName&&!(!(e=L(e).html())||0===e.length)},w=e=>{let t=-1;return e.split("").map(e=>" "===e?" ":(t++,e.toUpperCase()===e&&e.toLowerCase()!==e?obfuscatedTextStringUpper.charAt(t%obfuscatedTextStringUpper.length):obfuscatedTextStringLower.charAt(t%obfuscatedTextStringLower.length))).join("")},I=(t,e)=>{if(0===e)return w(t);try{let e=!1;for(const r of regexs)if(new RegExp(r,"i").test(t)){e=!0;break}return e?w(t):!1}catch(e){return w(t)}},R=(e,a)=>{var s=L(e);let r=!1;s.contents().map((e,t)=>{t=L(t).get(0);B(t)&&(r=!0)});var l=s.html();if(null!=l)if(r){var c=l.replace(/(\r\n|\n|\r)/gm,"").trim();if("<"===c[0]&&">"===c[c.length-1])return;var n=s.text().split("  ").map(e=>e.replace(/(\r\n|\n|\r)/gm,"")).filter(e=>0!==e.trim().length);const E=[],y=(e,t=0)=>{if(3<=t)return!1;for(const a of Array.from(L(e).children())){var r=L(a).text().replace(/(\r\n|\n|\r)/gm,"").trim();0!==r.length&&E.push(r),y(a,t+1)}};y(s);var o=n.slice();if(E.length===n.length){let t=!0;for(let e=0;e<E.length;e++)E[e].length!==n[e].length&&(o[e]=n[e].replace(E[e],""),t=!1);if(t)return}let e=!1;var i=[];for(const A of o){if(i.includes(A)){e=!0;break}i.push(A)}let t,r=(t=e?o:o.filter(e=>!E.includes(e)),l.slice());for(const _ of t){var x=I(_,a.obfuscateLevel);!1!==x&&(r=r.replace(_,x))}void s.html(r)}else if(0!==l.trim().length){let r=s.text();if(null!=r&&0!==(r=r.trim()).length)try{var f=0===s.parent().parents().length;let t=null;if(f){var d,u,h,m,p,T=s.attr("id");if(T)try{t=L("#"+T)}catch(e){}null!=t&&0!==t.length||(d=`${e.tagName}:contains(${r})`,(0===(h=(u=t=L(d)).length)||50<h)&&(m=s.attr("class"))&&(p="."+m.split(" ").join("."),(t=L(p)).length>h)&&(t=u))}var g=I(r.trim(),a.obfuscateLevel);if(!1!==g&&(s.text(g),f)){var b=s.html(),v=t.toArray();let e=null;for(const w of v){var S=L(w).html();if(S.length===l.length&&S===l){e=L(w);break}}null!=e&&e.html(b)}}catch(e){c=I(r.trim(),a.obfuscateLevel);!1!==c&&s.text(c)}}},C=(e,r,t)=>{if(!t){if(!L(e))return;if(t=e,a=r,s=L(t).get(0).tagName,!1===(2===a.obfuscateLevel||AllHTMLTags.includes(s)?!0!==g(t,a.obfuscateLevel)&&!0!==b(t,a.obfuscateLevel)&&(R(t,a),void y(t,a.obfuscateLevel)):(A(t),!1)))return}var a,s;L(e).children().map((e,t)=>{C(t,r)})};for(const N of L("link")){var o=L(N).attr("rel");if(o&&"stylesheet"===o.toLowerCase()){var i=L(N).attr("href");if(i&&!(i in cssCache))try{var x,f=await fetch(i);f.status<200||299<f.status||(x=await f.text(),cssCache[i]=x)}catch(e){}}}C(L.root(),{obfuscateLevel:a},!0),L("head").append(`<style rel="stylesheet">${c}</style>`),postMessage({id:"screenshot:parsed",payload:{document:(new TextEncoder).encode(L.root().html()),when:t,where:r,viewport:s,scrollState:l}})}catch(e){}setTimeout(()=>{process()},200)},AllHTMLTags=(process(),["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","big","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","dir","div","dl","dt","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","menu","meta","meter","nav","noframes","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","search","section","select","small","source","span","strike","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr"]);
