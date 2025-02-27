(self.webpackChunk=self.webpackChunk||[]).push([[7777],{57745:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>X,contentTitle:()=>Q,default:()=>ee,frontMatter:()=>Y,metadata:()=>s,toc:()=>Z});const s=JSON.parse('{"id":"general/metadata","title":"Metadata Explorer","description":"Visualize Metadata and related Documentation.","source":"@site/../docs/general/metadata.md","sourceDirName":"general","slug":"/metadata","permalink":"/docs/metadata","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/polkadot-wiki/edit/master/docs/general/metadata.md","tags":[],"version":"current","lastUpdatedBy":"github-actions[bot]","lastUpdatedAt":1730712423000,"frontMatter":{"id":"metadata","title":"Metadata Explorer","sidebar_label":"Metadata Explorer","description":"Visualize Metadata and related Documentation.","keywords":["docs","substrate","metadata","explorer","search","api","tools","js","javascript"],"slug":"../metadata"},"sidebar":"docs","previous":{"title":"Developer Heroes","permalink":"/docs/dev-heroes"},"next":{"title":"Chain State","permalink":"/docs/chain-state-values"}}');var n=a(74848),r=a(28453),i=a(43845);var l=a(90675),c=a(10467),o=a(96540),d=a(19588),p=a(2026);var h,u=JSON.parse('{"rh":{"Cn":"^15.6.1"}}').rh.Cn.substring(1),m=[{name:"Polkadot",rpc:"wss://rpc.ibp.network/polkadot"},{name:"Polkadot Asset Hub",rpc:"wss://polkadot-asset-hub-rpc.polkadot.io"},{name:"Polkadot People",rpc:"wss://polkadot-people-rpc.polkadot.io"},{name:"Polkadot Bridge Hub",rpc:"wss://polkadot-bridge-hub-rpc.polkadot.io"},{name:"Polkadot Collectives",rpc:"wss://polkadot-collectives-rpc.polkadot.io"},{name:"Polkadot Coretime",rpc:"wss://polkadot-coretime-rpc.polkadot.io"},{name:"Kusama",rpc:"wss://rpc.ibp.network/kusama"},{name:"Kusama Asset Hub",rpc:"wss://kusama-asset-hub-rpc.polkadot.io"},{name:"Kusama People",rpc:"wss://kusama-people-rpc.polkadot.io"},{name:"Kusama Bridge Hub",rpc:"wss://kusama-bridge-hub-rpc.polkadot.io"},{name:"Kusama Coretime",rpc:"wss://kusama-coretime-rpc.polkadot.io"},{name:"Westend",rpc:"wss://westend-rpc.polkadot.io"}],x=["auctions","claims","crowdloan","registrar","slots"],j=["configuration","hrmp","initializer","paras_inherent","paras","disputes","disputes/slashing"],f={registrar:"paras_registrar",xcmpallet:"xcm",voterlist:"bags_list",fastunstake:"fast_unstake",childbounties:"child_bounties",nominationpools:"nomination_pools",convictionvoting:"conviction_voting",imonline:"im_online",parasdisputes:"disputes",parasslashing:"disputes/slashing",parainherent:"paras_inherent",messagequeue:"message_queue",electionprovidermultiphase:"election_provider_multi_phase",system:"frame_system"},y=[];function b(e){var t=e.version,a=(0,o.useState)(""),s=a[0],r=a[1];return(0,o.useEffect)((function(){var e=function(){var e=(0,c.A)((0,l.A)().mark((function e(){var a,s,i,c,o;return(0,l.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="Polkadot","Metadata Explorer \xb7 Guide"===document.title&&(a="Kusama"),s=m.find((function(e){return e.name===a})),i=s.rpc,c=[],m.forEach((function(e){var t=(0,n.jsx)("option",{value:e.rpc,children:""+(e.name.charAt(0).toUpperCase()+e.name.slice(1))},e.name);c.push(t)})),o=(0,n.jsx)("select",{defaultValue:s.rpc,style:U,onChange:function(e){return g(t,e.target.value,o,r)},children:c}),r((0,n.jsx)("div",{style:B,children:(0,n.jsx)("b",{children:"Loading Metadata Explorer..."})})),e.next=10,g(t,i,o,r);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t]),s}function g(e,t,a,s){return v.apply(this,arguments)}function v(){return(v=(0,c.A)((0,l.A)().mark((function e(t,a,s,r){var i,c,o,h,m,x,j,f,b;return(0,l.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S("metadataLoading",!1),i=new d.E(a),e.next=4,p.G.create({provider:i});case 4:return c=e.sent,y=[],e.next=8,c.rpc.state.getMetadata();case 8:o=e.sent,h=o.toHuman(),m=h.metadata[t].lookup.types,(x=h.metadata[t].pallets).sort((function(e,t){return e.name.localeCompare(t.name)})),j=[],x.forEach((function(e){var t=k(e,c.consts[""+E(e.name)],"constants",m),a=k(e,c.errors[""+E(e.name)],"errors",m),s=k(e,c.events[""+E(e.name)],"events",m),r=k(e,c.tx[""+E(e.name)],"extrinsics",m),i=k(e,c.query[E(e.name)],"storage",m),l=P(e.name,"constants",t),o=P(e.name,"errors",a),d=P(e.name,"events",s),p=P(e.name,"extrinsics",r),h=P(e.name,"storage",i);j.push((0,n.jsxs)("div",{style:G,children:[(0,n.jsxs)("span",{children:[(0,n.jsx)("b",{id:e.name+"-button",style:W,onClick:function(){I(e.name)},children:"+"}),"\xa0",(0,n.jsx)("b",{children:e.name})]}),(0,n.jsxs)("div",{id:e.name,style:L,children:[l,o,d,p,h]})]},e.name)),y.push(e.name),y.push(e.name+"-constants",e.name+"-errors",e.name+"-events",e.name+"-extrinsics",e.name+"-storage")})),f=w(c.rpc,"rpc"),b=w(c.call,"runtime"),S("metadataLoading",!0),r((0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{style:D,children:[(0,n.jsx)("input",{id:"metaSearch",type:"text",placeholder:"Search Metadata",style:J,onInput:function(){return H()}}),(0,n.jsx)("br",{}),s,(0,n.jsxs)("div",{id:"buttonControls",children:[(0,n.jsx)("button",{style:K,onClick:function(){return M(!0)},children:(0,n.jsx)("span",{style:{fontSize:"10px"},children:"Expand All"})}),(0,n.jsx)("button",{style:K,onClick:function(){return M(!1)},children:(0,n.jsx)("span",{style:{fontSize:"10px"},children:"Collapse All"})})]}),(0,n.jsxs)("div",{style:{fontSize:"10px"},children:[(0,n.jsx)("b",{style:B,children:"metadata"}),(0,n.jsx)("b",{children:" "+t}),"\xa0",(0,n.jsx)("b",{style:B,children:"@polkadot/api"}),(0,n.jsx)("b",{children:" V"+u})]}),(0,n.jsx)("div",{id:"metadataLoading",style:q,children:(0,n.jsx)("b",{children:"Connecting to "+a+"..."})}),(0,n.jsx)("div",{id:"searchLoading",style:q,children:(0,n.jsx)("b",{children:"Searching..."})}),(0,n.jsxs)("div",{id:"searchResults",style:q,children:[(0,n.jsx)("b",{children:"Matches: "}),(0,n.jsx)("b",{id:"searchCount",style:B,children:"0"})]})]}),(0,n.jsx)("b",{style:F,children:"Pallets:"}),j,(0,n.jsx)("br",{}),(0,n.jsx)("b",{style:F,children:"RPC:"}),f,(0,n.jsx)("br",{}),(0,n.jsx)("b",{style:F,children:"Runtime:"}),b]}));case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,t,a,s){var r=[];null!=t&&Object.keys(t).sort((function(e,t){return e.localeCompare(t)})).forEach((function(i){var l,c=t[i].meta.toHuman(),o=N(e.name.toLowerCase(),c.docs.join(" ")),d=i.charAt(0).toUpperCase()+i.slice(1);switch(a){case"constants":var p=s[c.type].type.def;l=(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{className:"searchable",children:[(0,n.jsx)("u",{children:"Description"}),": ",o]}),(0,n.jsxs)("li",{className:"searchable",children:[(0,n.jsx)("u",{children:"API Endpoint"}),": ",(0,n.jsx)("span",{style:B,children:"api.consts."+E(e.name)+"."+E(i)})]}),(0,n.jsxs)("li",{className:"searchable",children:[(0,n.jsx)("u",{children:"Chain Value"}),": ",(0,n.jsx)("span",{style:B,children:""+JSON.stringify(t[i])})]}),(0,n.jsxs)("li",{className:"searchable",children:[(0,n.jsx)("u",{children:"Chain Value Type"}),": ","("+Object.keys(p)[0]+": "+Object.values(p)[0]+")"]})]});break;case"errors":l=(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{className:"searchable",children:[(0,n.jsx)("u",{children:"Description"}),": ",o]}),(0,n.jsxs)("li",{className:"searchable",children:[(0,n.jsx)("u",{children:"API Endpoint"}),": ",(0,n.jsx)("span",{style:B,children:"api.errors."+E(e.name)+"."+E(i)})]})]});break;case"events":l=(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{className:"searchable",children:[(0,n.jsx)("u",{children:"Description"}),": ",o]}),(0,n.jsxs)("li",{className:"searchable",children:[(0,n.jsx)("u",{children:"API Endpoint"}),": ",(0,n.jsx)("span",{style:B,children:"api.events."+E(e.name)+"."+E(i)})]}),(0,n.jsxs)("li",{className:"searchable",children:[(0,n.jsx)("u",{children:"Fields"}),": ",T(c,"events")]})]});break;case"extrinsics":l=(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{className:"searchable",children:[(0,n.jsx)("u",{children:"Description"}),": ",o]}),(0,n.jsxs)("li",{className:"searchable",children:[(0,n.jsx)("u",{children:"API Endpoint"}),": ",(0,n.jsx)("span",{style:B,children:"api.tx."+E(e.name)+"."+E(i)})]}),(0,n.jsxs)("li",{className:"searchable",children:[(0,n.jsx)("u",{children:"Parameters"}),": ",T(c,"extrinsics")]})]});break;case"storage":l=(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{className:"searchable",children:[(0,n.jsx)("u",{children:"Description"}),": ",o]}),(0,n.jsxs)("li",{className:"searchable",children:[(0,n.jsx)("u",{children:"API Endpoint"}),": ",(0,n.jsx)("span",{style:B,children:"api.query."+E(e.name)+"."+E(i)})]}),(0,n.jsxs)("li",{className:"searchable",children:[(0,n.jsx)("u",{children:"Return Type"}),": ",T(c,"storage",s)]})]});break;default:!function(e){throw new TypeError('"'+e+'" is read-only')}("item")}var h=(0,n.jsxs)("li",{children:[(0,n.jsx)("b",{children:d}),l]},i);r.push(h)}));return r=C(r)}function w(e,t){var a=[],s=Object.keys(e);return s.sort((function(e,t){return e.localeCompare(t)})),s.forEach((function(s){var r=[],i=e[s],l=Object.keys(i);l.sort((function(e,t){return e.localeCompare(t)})),l.forEach((function(e){var a,l=i[e].meta,c=N("",l.description);switch(t){case"rpc":a=(0,n.jsxs)("ul",{style:V,children:[(0,n.jsxs)("li",{className:"searchable",children:[(0,n.jsx)("u",{children:"Description"}),": ",c]}),(0,n.jsxs)("li",{className:"searchable",children:[(0,n.jsx)("u",{children:"API Endpoint"}),": ",(0,n.jsx)("span",{style:B,children:"api.rpc."+s+"."+e})]}),(0,n.jsxs)("li",{className:"searchable",children:[(0,n.jsx)("u",{children:"Return Type"}),": ",l.type]}),(0,n.jsxs)("li",{className:"searchable",children:[(0,n.jsx)("u",{children:"Parameters"}),": ",T(l,"rpc")]})]});break;case"runtime":a=(0,n.jsxs)("ul",{style:V,children:[(0,n.jsxs)("li",{className:"searchable",children:[(0,n.jsx)("u",{children:"Description"}),": ",c]}),(0,n.jsxs)("li",{className:"searchable",children:[(0,n.jsx)("u",{children:"API Endpoint"}),": ",(0,n.jsx)("span",{style:B,children:"api.call."+s+"."+e})]}),(0,n.jsxs)("li",{className:"searchable",children:[(0,n.jsx)("u",{children:"Type"}),": ",l.type]})]})}var o=(0,n.jsxs)("div",{children:[(0,n.jsx)("b",{children:""+(e.charAt(0).toUpperCase()+e.slice(1))}),a]},s+"."+e);r.push(o)})),r=C(r);var c=s.charAt(0).toUpperCase()+s.slice(1),o=(0,n.jsxs)("div",{style:G,children:[(0,n.jsxs)("span",{children:[(0,n.jsx)("b",{id:s+"-button",style:W,onClick:function(){I(s)},children:"+"}),"\xa0",(0,n.jsx)("b",{children:c})]}),(0,n.jsx)("div",{id:s,style:L,children:(0,n.jsx)("ul",{style:V,children:r})})]},s);a.push(o),y.push(s)})),a}function E(e){return e.charAt(0).toLowerCase()+e.slice(1)}function C(e){return 0===e.length?(0,n.jsx)("p",{style:V,children:"None"}):e}function P(e,t,a){return(0,n.jsxs)("ul",{style:V,children:[(0,n.jsxs)("span",{children:[(0,n.jsx)("b",{id:e+"-"+t+"-button",style:W,onClick:function(){I(e+"-"+t)},children:"+"}),"\xa0",(0,n.jsx)("b",{children:t.charAt(0).toUpperCase()+t.slice(1)})]}),(0,n.jsx)("div",{id:e+"-"+t,style:O,children:(0,n.jsx)("ul",{children:a})})]})}function A(e,t){var a=null!=f[e]?f[e]:e;return x.includes(e)?"https://paritytech.github.io/polkadot-sdk/master/polkadot_runtime_common/"+a+"/pallet/struct.Pallet.html#method."+t:j.includes(a)?"https://paritytech.github.io/polkadot-sdk/master/polkadot_runtime_parachains/"+a+"/pallet/struct.Pallet.html#method."+t:"staking"==e?"https://paritytech.github.io/polkadot-sdk/master/pallet_"+a+"/struct.Pallet.html#method."+t:a.startsWith("frame_")?"https://paritytech.github.io/polkadot-sdk/master/"+a+"/pallet/struct.Pallet.html#method."+t:"https://paritytech.github.io/polkadot-sdk/master/pallet_"+a+"/pallet/struct.Pallet.html#method."+t}function N(e,t){for(var a=t.split("`"),s=[],r=0;r<a.length;r++)if(r%2==0)s.push((0,n.jsx)("p",{style:R,children:a[r]},r));else if(a[r].startsWith("Pallet::")){var i=A(e,a[r].split("Pallet::")[1]);s.push((0,n.jsx)("a",{target:"_blank",href:i,style:z,children:a[r]},r))}else s.push((0,n.jsx)("p",{style:z,children:a[r]},r));return(0,n.jsx)("span",{children:s})}function T(e,t,a){void 0===a&&(a=null);var s="(";switch(t){case"rpc":e.params.forEach((function(e){s+=e.name+": "+e.type+", "}));break;case"extrinsics":for(var n=0;n<e.args.length;n++)s+=e.args[n].name+": "+e.args[n].type+", ";break;case"events":for(var r=0;r<e.args.length;r++)s+=e.fields[r].typeName+": "+e.args[r]+", ";break;case"storage":var i=Object.keys(e.type)[0];if("Plain"===i){var l=a[e.type.Plain].type.def;s=_(l,a)}else if("Map"===i){var c=a[e.type.Map.key].type.def;s=_(c,a)}else console.log("Unknown Storage Type")}return"("!==(s=s.slice(0,-2)+")")&&")"!==s||(s="None"),s}function _(e,t){var a="(";switch(Object.keys(e)[0]){case"Array":var s=e.Array.len,n=t[e.Array.type].type.def,r=Object.keys(n)[0],i=n[r];a+="Array["+s+"]: "+r+" "+i+" )";break;case"Compact":a=_(t[e.Compact.type].type.def,t);break;case"Composite":e.Composite.fields.forEach((function(e){a=_(t[e.type].type.def,t)}));break;case"Primitive":var l=e.Primitive;a+="Primitive: "+l+") ";break;case"Sequence":a=_(t[e.Sequence.type].type.def,t);break;case"Tuple":a+="Tuple: [ ",e.Tuple.forEach((function(e){a+=_(t[e].type.def,t)+", "})),a=a.slice(0,-2)+"]  ";break;case"Variant":a+="Variant: ",e.Variant.variants.forEach((function(e){var t=[];e.fields.forEach((function(e){t.push(e.typeName)})),a+="{"+e.name+": ["+t.join(", ")+"]}, "})),a=a.slice(0,-2)+"  ";break;default:console.log("Unknown Decoder Type")}return a}function S(e,t){var a=document.getElementById(e);null!==a&&(a.style.display=!1===t?"block":"none")}function I(e){var t=document.getElementById(e),a=document.getElementById(e+"-button");"0px"===t.style.maxHeight?(t.style.maxHeight="100%",a.innerText="-"):(t.style.maxHeight="0px",a.innerText="+")}function M(e){y.forEach((function(t){var a=document.getElementById(t),s=document.getElementById(t+"-button");e?(a.style.maxHeight="100%",s.innerText="-"):(a.style.maxHeight="0px",s.innerText="+")}))}function H(){S("searchLoading",!1),clearTimeout(h),h=setTimeout((function(){var e=document.getElementById("metaSearch").value;if(e.length<2)M(!1),y.forEach((function(e){for(var t,a=document.getElementById(e).getElementsByClassName("searchable"),s=(0,i.A)(a);!(t=s()).done;){t.value.style.background="transparent"}})),S("searchResults",!0);else{var t=new RegExp(e,"gi"),a=0;y.forEach((function(e){var s=document.getElementById(e),n=s.getElementsByClassName("searchable"),r=document.getElementById(e+"-button");if(t.test(s.innerText)){for(var l,c=(0,i.A)(n);!(l=c()).done;){var o=l.value;t.test(o.innerText)?(o.style.background="#ffff00",a+=1):o.style.background="transparent"}s.style.maxHeight="100%",r.innerText="-"}else{for(var d,p=(0,i.A)(n);!(d=p()).done;){d.value.style.background="transparent"}s.style.maxHeight="0px",r.innerText="+"}document.getElementById("searchCount").innerText=a})),S("searchResults",!1)}S("searchLoading",!0)}),200)}var B={color:"#e6007a"},D={textAlign:"center "},R={margin:"0px",display:"inline"},z={color:"#e6007a",margin:"0px",display:"inline",background:"#f0f0f0",paddingLeft:"5px",paddingRight:"5px"},L={maxHeight:"0px",overflow:"hidden"},O={maxHeight:"0px",overflow:"hidden",margin:"0px"},V={margin:"0px"},U={border:"1px solid #e6007a",width:"400px",height:"40px",fontSize:"16px",textAlign:"center",fontWeight:"bold",margin:"1px",cursor:"pointer"},K={border:"1px solid #e6007a",width:"199px",height:"28px",margin:"1px",fontWeight:"bold",cursor:"pointer"},q={display:"none"},W={margin:"0px",color:"#e6007a",cursor:"pointer"},J={border:"1px solid #e6007a",width:"400px",height:"40px",fontSize:"16px",textAlign:"center",margin:"1px"},F={fontSize:"18px"},G={paddingLeft:"16px"};const Y={id:"metadata",title:"Metadata Explorer",sidebar_label:"Metadata Explorer",description:"Visualize Metadata and related Documentation.",keywords:["docs","substrate","metadata","explorer","search","api","tools","js","javascript"],slug:"../metadata"},Q=void 0,X={},Z=[];function $(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"Metadata Explorer"})," tool helps visualize the metadata of various parachains by retrieving the\nlatest data directly from the chain using the ",(0,n.jsx)(t.a,{href:"/docs/polkadotjs#polkadot-js-api",children:"polkadot-js api"}),".\nThe dropdown below allows you to update the chain selection to visualize. You can search all\nsub-categories using the provided search field. The information is categorized by the chains\n",(0,n.jsx)(t.code,{children:"Pallets"}),", ",(0,n.jsx)(t.code,{children:"RPC"})," and ",(0,n.jsx)(t.code,{children:"Runtime"})," information."]}),"\n",(0,n.jsx)(t.admonition,{title:"Subxt Explorer",type:"info",children:(0,n.jsxs)(t.p,{children:["You can enter custom RPC endpoints for Polkadot SDK based chains and explore their metadata using\n",(0,n.jsx)(t.a,{href:"https://paritytech.github.io/subxt-explorer/#/",children:"Parity Tech Subxt Explorer"}),"."]})}),"\n",(0,n.jsx)(b,{version:"V14"})]})}function ee(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)($,{...e})}):$(e)}},47790:()=>{}}]);