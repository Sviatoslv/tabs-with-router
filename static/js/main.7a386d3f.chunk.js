(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(33)},28:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(15),r=a.n(l),o=a(4),m=a(16),i=a(17),s=a(21),b=a(18),u=a(22),d=(a(28),a(6)),h=function(e){var t=e.tabs,a=(e.activeTab,e.onTabChange),n=e.match.match.url,l=n.slice(n.length-5);return c.a.createElement("div",{className:"TabsBlock"},c.a.createElement("h2",null,"You are in the Right Place"),c.a.createElement("ul",{className:"TabsBlock--tabs"},t.map(function(e){return c.a.createElement("li",{key:e.id},c.a.createElement(o.c,{to:"/tabs/".concat(e.id),name:e.id,onClick:a,className:"TabsBlock--tab"},e.title))})),c.a.createElement("div",{className:"TabsBlock--content"},t.some(function(e){return e.id===l})?c.a.createElement("img",{src:t.find(function(e){return e.id===l}).content,alt:"background"}):""),c.a.createElement(o.b,{to:"/"},"To Home"))},p=function(){return c.a.createElement("nav",{className:"Navigation"},c.a.createElement("ul",{className:"Navigation__list"},c.a.createElement("li",null,c.a.createElement(o.c,{to:"/",exact:!0},"Home")),c.a.createElement("li",null,c.a.createElement(o.c,{to:"/tabs"},"Tabs"))))},E=function(){return c.a.createElement("div",{className:"Home"},c.a.createElement("h2",null,"You are on Home page, hell yeah"),c.a.createElement("img",{src:"https://66.media.tumblr.com/841a56e988588976643a04bdef911c23/tumblr_pvhxccIFka1tre3tho1_1280.jpg",alt:"KDPV",width:"300"}),c.a.createElement("p",null,"lorem ipsum dolor set"),c.a.createElement(o.b,{to:"/Tabs/"},"To Tabs"))},v=[{id:"tab-1",title:"Tab 1",content:"https://66.media.tumblr.com/efda219e85d748d312ec889a9e82506d/tumblr_pu02sg6Mvz1v5sy38o1_540.jpg"},{id:"tab-2",title:"Tab 2",content:"https://66.media.tumblr.com/0c678736c84473c55e51e8b1d1f8bac3/tumblr_ptqopnHv7P1v5sw1to1_540.jpg"},{id:"tab-3",title:"Tab 3",content:"https://66.media.tumblr.com/7159f78ebd170cf5830a10802e37e89b/tumblr_pabwb8WWB71qh0j2do1_540.jpg"},{id:"tab-4",title:"Tab 4",content:"https://66.media.tumblr.com/7897dee8d27d58ed8438df092d210d52/tumblr_pvikyxa8Pq1tre3tho1_540.jpg"}],f=function(e,t){return t.some(function(t){return t.id===e})?e:""},g=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(c)))).state={tabs:v,activeTab:f(localStorage.activeTab,v)},a.onTabChange=function(e){var t=e.target.name;localStorage.activeTab=t,a.setState({activeTab:t})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.tabs,n=t.activeTab;return c.a.createElement("div",{className:"App"},c.a.createElement(p,null),c.a.createElement("main",{className:"main"},c.a.createElement("h1",null,a.length," tabs"),c.a.createElement(d.c,null,c.a.createElement(d.a,{path:"/",exact:!0,component:E}),c.a.createElement(d.a,{path:"/tabs/:tabsId?",render:function(t){return c.a.createElement(h,{tabs:a,activeTab:n,onTabChange:e.onTabChange,match:t})}}))))}}]),t}(c.a.Component);r.a.render(c.a.createElement(o.a,null,c.a.createElement(g,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.7a386d3f.chunk.js.map