(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(2),l=a.n(r),c=(a(11),a(3)),o=a(4),s=a(6),h=a(5),g=function(){return i.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},i.a.createElement("img",{alt:"city",width:"200",height:"150",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Taipei_City.svg/1024px-Flag_of_Taipei_City.svg.png"}),i.a.createElement("div",null,i.a.createElement("h2",null,"Taipei City"),i.a.createElement("a",{href:"https://english.gov.taipei/"},i.a.createElement("h3",null,"Visit!"))))},m=function(){return i.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},i.a.createElement("img",{alt:"city",width:"200",height:"150",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_New_Taipei_City.svg/1024px-Flag_of_New_Taipei_City.svg.png"}),i.a.createElement("div",null,i.a.createElement("h2",null,"New Taipei City"),i.a.createElement("a",{href:"https://foreigner.ntpc.gov.tw/"},i.a.createElement("h3",null,"Visit!"))))},u=function(){return i.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},i.a.createElement("img",{alt:"city",width:"200",height:"150",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Flag_of_Kaohsiung_City.svg/1024px-Flag_of_Kaohsiung_City.svg.png"}),i.a.createElement("div",null,i.a.createElement("h2",null,"Kaohsiung City"),i.a.createElement("a",{href:"https://www.kcg.gov.tw/EN/Default.aspx"},i.a.createElement("h3",null,"Visit!"))))},d=function(){return i.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},i.a.createElement("img",{alt:"city",width:"200",height:"150",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Flag_of_Tainan_City.svg/1024px-Flag_of_Tainan_City.svg.png"}),i.a.createElement("div",null,i.a.createElement("h2",null,"Tainan City"),i.a.createElement("a",{href:"https://www.tainan.gov.tw/en/"},i.a.createElement("h3",null,"Visit!"))))},w=function(){return i.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},i.a.createElement("img",{alt:"city",width:"200",height:"150",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Flag_of_Taichung_City.svg/1024px-Flag_of_Taichung_City.svg.png"}),i.a.createElement("div",null,i.a.createElement("h2",null,"Taichung City"),i.a.createElement("a",{href:"https://english.taichung.gov.tw/"},i.a.createElement("h3",null,"Visit!"))))},p=function(){return i.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},i.a.createElement("img",{alt:"city",width:"200",height:"150",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Flag_of_Taoyuan_City.svg/1024px-Flag_of_Taoyuan_City.svg.png"}),i.a.createElement("div",null,i.a.createElement("h2",null,"Taoyuan City"),i.a.createElement("a",{href:"https://www.tycg.gov.tw/eng/"},i.a.createElement("h3",null,"Visit!"))))},f=function(e){e.cities,e.i;var t=[i.a.createElement(g,{key:"a",name:"Taipei"}),i.a.createElement(m,{key:"b",name:"NewTaipei"}),i.a.createElement(p,{key:"c",name:"Taoyuan"}),i.a.createElement(w,{key:"d",name:"Taichung"}),i.a.createElement(d,{key:"e",name:"Tainan"}),i.a.createElement(u,{key:"f",name:"Kaohsiung"})];return i.a.createElement("div",null,t)},v=function(e){var t=e.searchChange;return i.a.createElement("div",{className:"pa2"},i.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search cities",onChange:t}))},E=function(e){return i.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},e.children)},b=(a(12),[{id:1,name:"Taipei City"},{id:2,name:"New Taipei City"},{id:3,name:"Taoyuan City"},{id:4,name:"Taichung City"},{id:5,name:"Tainan City"},{id:6,name:"Kaohsiung City"}]),y=function(e){Object(s.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={cities:b,searchfield:""},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.cities,a=e.searchfield;this.state.cities.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return t.length?i.a.createElement("div",{className:"tc"},i.a.createElement("h1",{className:"f1"},"Taiwan Cities"),i.a.createElement(v,{searchChange:this.onSearchChange}),i.a.createElement(E,null,i.a.createElement(f,{cities:this.state.searchfield}))):i.a.createElement("h1",null,"Loading")}}]),a}(n.Component),_=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(13);l.a.render(i.a.createElement(y,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/TaiwanCities",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/TaiwanCities","/service-worker.js");_?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):C(e)}))}}()}},[[14,1,2]]]);
//# sourceMappingURL=main.eef6f817.chunk.js.map