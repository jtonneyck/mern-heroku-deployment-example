(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(t,n,e){t.exports=e(42)},23:function(t,n,e){},24:function(t,n,e){},42:function(t,n,e){"use strict";e.r(n);var o=e(1),a=e.n(o),c=e(11),i=e.n(c),r=(e(23),e(12)),s=e(13),u=e(16),l=e(14),h=e(17),m=(e(24),e(15)),p=e.n(m),f=function(t){function n(){var t;return Object(r.a)(this,n),(t=Object(u.a)(this,Object(l.a)(n).call(this))).state={countries:[]},t}return Object(h.a)(n,t),Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;p.a.get("".concat("https://countries-ironhack-react.herokuapp.com","/countries/")).then((function(n){t.setState({countries:n.data})})).catch((function(t){}))}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},this.state.countries.map((function(t){return a.a.createElement("h1",null,t.name.common)})))}}]),n}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.faafc57d.chunk.js.map