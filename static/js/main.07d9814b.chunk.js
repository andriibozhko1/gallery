(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){"use strict";var a=n(5),r=n.n(a),c=n(6),u=n(7),s=n(8),o=n(10),i=n(9),l=n(11),p=n(0),d=n.n(p),m={getAlbums:function(){var e=Object(c.a)(r.a.mark(function e(){var t,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/albums");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),getPhoto:function(){var e=Object(c.a)(r.a.mark(function e(){var t,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/photos");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()};n.d(t,"b",function(){return f}),n.d(t,"a",function(){return b});var h=d.a.createContext(),f=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={albums:[],photo:[],tags:["Frontend","Backend","Javascript","React","Node.js","PHP","C#","Vue","Angular"],filteredPhoto:null,isLoading:!0},n.updateData=function(e){n.setState(function(t){var n=t.photo;return n[e.id-1].tags.push(e),{photo:n}})},n}return Object(l.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(c.a)(r.a.mark(function e(){var t,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.getAlbums();case 2:return t=e.sent,e.next=5,m.getPhoto();case 5:(n=e.sent).map(function(e){return e.tags=[]}),this.setState({albums:t,photo:n,isLoading:!1});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.children;return d.a.createElement(h.Provider,{value:{tags:this.state.tags,albums:this.state.albums,photo:this.state.photo,updateData:this.updateData,isLoading:this.state.isLoading}},e)}}]),t}(p.Component),b=h.Consumer},14:function(e,t,n){"use strict";var a=n(0),r=n.n(a);n(26);t.a=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"cube-loader"},r.a.createElement("div",{className:"caption"},r.a.createElement("div",{className:"cube-loader"},r.a.createElement("div",{className:"cube loader-1"}),r.a.createElement("div",{className:"cube loader-2"}),r.a.createElement("div",{className:"cube loader-4"}),r.a.createElement("div",{className:"cube loader-3"})))))}},20:function(e,t,n){e.exports=n(33)},26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),u=n.n(c),s=n(7),o=n(8),i=n(10),l=n(9),p=n(11),d=n(14),m=n(35),h=n(36),f=function(e){var t=e.routes;return r.a.createElement(a.Suspense,{fallback:r.a.createElement(d.a,null)},r.a.createElement(m.a,null,t.map(function(e,t){return r.a.createElement(h.a,Object.assign({key:t},e))})))},b=n(13),v=(n(32),Object(a.lazy)(function(){return n.e(4).then(n.bind(null,49))})),j=Object(a.lazy)(function(){return n.e(3).then(n.bind(null,48))}),E=[{path:"/",exact:!0,render:function(e){return r.a.createElement(v,e)}},{path:"/albums/:id",render:function(e){return r.a.createElement(j,e)}}],g=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.b,null,r.a.createElement(f,{routes:E})))}}]),t}(a.Component),O=n(34);u.a.render(r.a.createElement(O.a,null,r.a.createElement(g,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.07d9814b.chunk.js.map