(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{37:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n(7),a=n(8),o=n(10),i=n(9),s=n(11),u=n(0),c=n.n(u),l=(n(38),function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,s=new Array(a),u=0;u<a;u++)s[u]=arguments[u];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).getCurrentPage=function(e){return function(){return n.props.selectPage(e)}},n.changePages=function(e){return function(){var t=Math.max(1,Math.min(n.paginationBtns.length,e));n.props.selectPage(t)}},n}return Object(s.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"Pagination"},c.a.createElement("button",{className:"Pagination__btns",onClick:this.changePages(this.props.currentPage-1)},"Prev"),this.props.currentPage>5?"...":"",this.paginationBtns.map(function(t){return c.a.createElement("button",{className:"Pagination__btns ".concat(t===e.props.currentPage?"Pagination__btns--active":""),key:t,onClick:e.getCurrentPage(t)},t)}),this.paginationBtns.length>5?"...":"",c.a.createElement("button",{className:"Pagination__btns",onClick:this.changePages(this.props.currentPage+1)},"Next"))}},{key:"paginationBtns",get:function(){if(this.props.visibleItems.length>0){for(var e=this.props.generalQuantityItems/this.props.visibleItems.length,t=[],n=Math.max(1,this.props.currentPage-5),r=Math.min(e,this.props.currentPage+5),a=n;a<=r;a++)t.push(a);return t}return[]}}]),t}(u.Component))},38:function(e,t,n){},41:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1),i=n.n(o),s=n(4),u=n.n(s),c=n(15),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var p=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},h=function(e){function t(){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=Array(a),i=0;i<a;i++)o[i]=arguments[i];return n=r=f(this,e.call.apply(e,[this].concat(o))),r.handleClick=function(e){if(r.props.onClick&&r.props.onClick(e),!e.defaultPrevented&&0===e.button&&!r.props.target&&!p(e)){e.preventDefault();var t=r.context.router.history,n=r.props,a=n.replace,o=n.to;a?t.replace(o):t.push(o)}},f(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["replace","to","innerRef"]);u()(this.context.router,"You should not use <Link> outside a <Router>"),u()(void 0!==t,'You must specify the "to" property');var o=this.context.router.history,i="string"===typeof t?Object(c.b)(t,null,null,o.location):t,s=o.createHref(i);return a.a.createElement("a",l({},r,{onClick:this.handleClick,href:s,ref:n}))},t}(a.a.Component);h.propTypes={onClick:i.a.func,target:i.a.string,replace:i.a.bool,to:i.a.oneOfType([i.a.string,i.a.object]).isRequired,innerRef:i.a.oneOfType([i.a.string,i.a.func])},h.defaultProps={replace:!1},h.contextTypes={router:i.a.shape({history:i.a.shape({push:i.a.func.isRequired,replace:i.a.func.isRequired,createHref:i.a.func.isRequired}).isRequired}).isRequired},t.a=h},42:function(e,t,n){},43:function(e,t,n){(function(e){!function(n,r){var a=function(){var e=null,t={};c("monochrome",null,[[0,0],[100,0]]),c("red",[-26,18],[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]),c("orange",[19,46],[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]),c("yellow",[47,62],[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]),c("green",[63,178],[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]),c("blue",[179,257],[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]),c("purple",[258,282],[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]),c("pink",[283,334],[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]]);var n=[];function r(e){if(n.length>0){var r=function(e){if(isNaN(e)){if("string"===typeof e)if(t[e]){var n=t[e];if(n.hueRange)return n.hueRange}else if(e.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var r=f(e)[0];return s(r).hueRange}}else{var a=parseInt(e);if(a<360&&a>0)return s(e).hueRange}return[0,360]}(e.hue),a=u(r),o=(r[1]-r[0])/n.length,i=parseInt((a-r[0])/o);!0===n[i]?i=(i+2)%n.length:n[i]=!0;var c=(r[0]+i*o)%359,l=(r[0]+(i+1)*o)%359;return(a=u(r=[c,l]))<0&&(a=360+a),a}var r=function(e){if("number"===typeof parseInt(e)){var n=parseInt(e);if(n<360&&n>0)return[n,n]}if("string"===typeof e)if(t[e]){var r=t[e];if(r.hueRange)return r.hueRange}else if(e.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var a=f(e)[0];return[a,a]}return[0,360]}(e.hue);return(a=u(r))<0&&(a=360+a),a}function a(e,t){if("monochrome"===t.hue)return 0;if("random"===t.luminosity)return u([0,100]);var n=function(e){return s(e).saturationRange}(e),r=n[0],a=n[1];switch(t.luminosity){case"bright":r=55;break;case"dark":r=a-10;break;case"light":a=55}return u([r,a])}function o(e,t,n){var r=function(e,t){for(var n=s(e).lowerBounds,r=0;r<n.length-1;r++){var a=n[r][0],o=n[r][1],i=n[r+1][0],u=n[r+1][1];if(t>=a&&t<=i){var c=(u-o)/(i-a),l=o-c*a;return c*t+l}}return 0}(e,t),a=100;switch(n.luminosity){case"dark":a=r+20;break;case"light":r=(a+r)/2;break;case"random":r=0,a=100}return u([r,a])}function i(e,t){switch(t.format){case"hsvArray":return e;case"hslArray":return p(e);case"hsl":var n=p(e);return"hsl("+n[0]+", "+n[1]+"%, "+n[2]+"%)";case"hsla":var r=p(e),a=t.alpha||Math.random();return"hsla("+r[0]+", "+r[1]+"%, "+r[2]+"%, "+a+")";case"rgbArray":return l(e);case"rgb":var o=l(e);return"rgb("+o.join(", ")+")";case"rgba":var i=l(e),a=t.alpha||Math.random();return"rgba("+i.join(", ")+", "+a+")";default:return function(e){var t=l(e);function n(e){var t=e.toString(16);return 1==t.length?"0"+t:t}return"#"+n(t[0])+n(t[1])+n(t[2])}(e)}}function s(e){for(var n in e>=334&&e<=360&&(e-=360),t){var r=t[n];if(r.hueRange&&e>=r.hueRange[0]&&e<=r.hueRange[1])return t[n]}return"Color not found"}function u(t){if(null===e){var n=Math.random();return n+=.618033988749895,n%=1,Math.floor(t[0]+n*(t[1]+1-t[0]))}var r=t[1]||1,a=t[0]||0,o=(e=(9301*e+49297)%233280)/233280;return Math.floor(a+o*(r-a))}function c(e,n,r){var a=r[0][0],o=r[r.length-1][0],i=r[r.length-1][1],s=r[0][1];t[e]={hueRange:n,lowerBounds:r,saturationRange:[a,o],brightnessRange:[i,s]}}function l(e){var t=e[0];0===t&&(t=1),360===t&&(t=359),t/=360;var n=e[1]/100,r=e[2]/100,a=Math.floor(6*t),o=6*t-a,i=r*(1-n),s=r*(1-o*n),u=r*(1-(1-o)*n),c=256,l=256,f=256;switch(a){case 0:c=r,l=u,f=i;break;case 1:c=s,l=r,f=i;break;case 2:c=i,l=r,f=u;break;case 3:c=i,l=s,f=r;break;case 4:c=u,l=i,f=r;break;case 5:c=r,l=i,f=s}var p=[Math.floor(255*c),Math.floor(255*l),Math.floor(255*f)];return p}function f(e){e=3===(e=e.replace(/^#/,"")).length?e.replace(/(.)/g,"$1$1"):e;var t=parseInt(e.substr(0,2),16)/255,n=parseInt(e.substr(2,2),16)/255,r=parseInt(e.substr(4,2),16)/255,a=Math.max(t,n,r),o=a-Math.min(t,n,r),i=a?o/a:0;switch(a){case t:return[(n-r)/o%6*60||0,i,a];case n:return[60*((r-t)/o+2)||0,i,a];case r:return[60*((t-n)/o+4)||0,i,a]}}function p(e){var t=e[0],n=e[1]/100,r=e[2]/100,a=(2-n)*r;return[t,Math.round(n*r/(a<1?a:2-a)*1e4)/100,a/2*100]}return function t(s){if(void 0!==(s=s||{}).seed&&null!==s.seed&&s.seed===parseInt(s.seed,10))e=s.seed;else if("string"===typeof s.seed)e=function(e){for(var t=0,n=0;n!==e.length&&!(t>=Number.MAX_SAFE_INTEGER);n++)t+=e.charCodeAt(n);return t}(s.seed);else{if(void 0!==s.seed&&null!==s.seed)throw new TypeError("The seed value must be an integer or string");e=null}var u,c,l;if(null!==s.count&&void 0!==s.count){for(var f=s.count,p=[],h=0;h<s.count;h++)n.push(!1);for(s.count=null;f>p.length;)e&&s.seed&&(s.seed+=1),p.push(t(s));return s.count=f,p}return u=r(s),c=a(u,s),l=o(u,c,s),i([u,c,l],s)}}();e&&e.exports&&(t=e.exports=a),t.randomColor=a}()}).call(this,n(44)(e))},44:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var r=n(7),a=n(8),o=n(10),i=n(9),s=n(11),u=n(0),c=n.n(u),l=n(37),f=n(13),p=(n(42),function(e){return c.a.createElement(f.a,null,function(t){var n=t.tags;return c.a.createElement("div",{hidden:!e.dropDownIsOpen,className:"TagsDropDown"},c.a.createElement("ul",{className:"TagsDropDown__list"},n.map(function(t){return c.a.createElement("div",{key:t,onClick:e.getTag(t),className:"TagsDropDown__item"},t)})))})}),h=n(43),g=n.n(h),m=(n(45),function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,s=new Array(a),u=0;u<a;u++)s[u]=arguments[u];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).state={dropDownIsOpen:!1},n.togglerDropDown=function(){n.setState(function(e){e.dropDownIsOpen;return{dropDownIsOpen:!n.state.dropDownIsOpen}})},n.getTag=function(e){return function(){var t=n.props.photoData.id;n.updateData({id:t,tag:e,color:g()()}),n.togglerDropDown()}},n}return Object(s.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this,t=this.props.photoData,n=t.url,r=t.title;return c.a.createElement(f.a,null,function(t){return e.updateData=t.updateData,c.a.createElement("div",null,c.a.createElement("div",{className:"PhotoCard"},c.a.createElement("div",{className:"PhotoCard__img-block"},c.a.createElement("img",{className:"PhotoCard__img",src:n,alt:r})),c.a.createElement("div",{className:"PhotoCard__title"},r),c.a.createElement("div",{className:"PhotoCard__tags-btn",onClick:e.togglerDropDown},"Add TAG"),c.a.createElement("div",{className:"PhotoCard__tags-container"},c.a.createElement("ul",{className:"PhotoCard__tags-container-list"},e.props.photoData.tags.map(function(e){return c.a.createElement("li",{key:e.color,className:"PhotoCard__tags-container-item",style:{backgroundColor:e.color}},c.a.createElement("div",{className:"PhotoCard__tags-container-item-dot"}),e.tag)}))),c.a.createElement(p,{dropDownIsOpen:e.state.dropDownIsOpen,getTag:e.getTag})))})}}]),t}(u.Component)),d=(n(46),function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,s=new Array(a),u=0;u<a;u++)s[u]=arguments[u];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).state={query:"",filterByTag:null},n.changeQuery=function(){return function(e){n.setState({query:e.target.value})}},n.sendQuery=function(){return function(e){"Enter"===e.key&&n.props.setFilterQuery(n.state.query)}},n.changeTagFilter=function(){return function(e){n.setState({filterByTag:e.target.value},function(){return n.props.setFilterTag(n.state.filterByTag)})}},n}return Object(s.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(f.a,null,function(t){var n=t.tags;return c.a.createElement("div",{className:"Header"},c.a.createElement("label",{className:"Header__title"},"Search:",c.a.createElement("input",{className:"Header__field",value:e.state.query,onChange:e.changeQuery(),onKeyPress:e.sendQuery(),placeholder:"Search something...",type:"text"})),c.a.createElement("span",{className:"Header__title"},"Sort By:"),c.a.createElement("select",{className:"Header__drop-down",onChange:e.changeTagFilter()},c.a.createElement("option",{value:"null"},"Reset"),n.map(function(e){return c.a.createElement("option",{key:e,value:e},e)})))})}}]),t}(u.Component)),v=n(14),y=n(41);n(47);n.d(t,"default",function(){return b});var b=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,s=new Array(a),u=0;u<a;u++)s[u]=arguments[u];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).state={currentPage:1,quantityItemsOnPage:10,filteredByTagName:null,query:""},n.photo=[],n.setFilterTag=function(e){"null"!==e?n.setState({filteredByTagName:e}):n.setState({filteredByTagName:null})},n.setFilterQuery=function(e){n.setState({query:e})},n.selectPage=function(e){n.setState({currentPage:e})},n}return Object(s.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(f.a,null,function(t){return e.photo=t.photo,t.isLoading?c.a.createElement(v.a,null):c.a.createElement(c.a.Fragment,null,c.a.createElement(y.a,{to:"/"},c.a.createElement("div",{className:"PhotoList__btn-back"},"Home")),c.a.createElement(d,{setFilterTag:e.setFilterTag,setFilterQuery:e.setFilterQuery}),c.a.createElement("div",{className:"PhotoList"},c.a.createElement("ul",{className:"PhotoList__list"},e.visiblePhoto.map(function(e){return c.a.createElement("li",{key:e.id,className:"PhotoList__item"},c.a.createElement(m,{photoData:e}))}))),c.a.createElement(l.a,{currentPage:e.state.currentPage,visibleItems:e.visiblePhoto,generalQuantityItems:e.filteredPhoto.length,selectPage:e.selectPage}))})}},{key:"filteredPhoto",get:function(){var e=this,t=this.photo.filter(function(t){return t.albumId===+e.props.match.params.id?t:null});return this.state.filteredByTagName&&(t=t.filter(function(t){if(t.tags.length>0)return t.tags.find(function(t){if(t.tag===e.state.filteredByTagName)return t})})),t=t.filter(function(t){if(t.title.toLowerCase().includes(e.state.query.toLowerCase()))return t})}},{key:"visiblePhoto",get:function(){var e=(this.state.currentPage-1)*this.state.quantityItemsOnPage,t=e+this.state.quantityItemsOnPage,n=this.filteredPhoto.slice(e,t);return window.scrollTo(0,0),n}}]),t}(u.Component)}}]);
//# sourceMappingURL=3.34906e01.chunk.js.map