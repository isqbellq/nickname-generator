(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),i=(n(14),n(1)),s=n(2),u=n(4),l=n(3),h=n(5),p=function(t){function e(){return Object(i.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Nickname Generator"))}}]),e}(a.Component),j=function(t){function e(){return Object(i.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t,e=this.props.nickAdj,n=this.props.nickNoun;return this.props.nickAdj&&this.props.nickNoun?t=r.a.createElement("div",{className:"nickname"},r.a.createElement("h2",{style:{color:"#666"}},e," "),r.a.createElement("h2",null,n)):this.props.nickAdj&&this.props.nickNoun||(t=r.a.createElement("h2",{style:{color:"#666"}},"Press the button to start generating names.")),r.a.createElement("div",null,t)}}]),e}(a.Component),d=function(t){function e(){return Object(i.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"generator"},r.a.createElement(j,{nickAdj:this.props.nickAdj,nickNoun:this.props.nickNoun}),r.a.createElement("button",{onClick:this.props.generate},"New Nickname"))}}]),e}(a.Component);function m(t){return t.charAt(0).toUpperCase()+t.slice(1)}var k=function(t){function e(){var t;return Object(i.a)(this,e),(t=Object(u.a)(this,Object(l.a)(e).call(this))).generate=function(){var e=t.state.nouns,n=t.state.adjs,a=e[Math.floor(Math.random()*e.length)],r=n[Math.floor(Math.random()*n.length)],c=m(a),o=m(r);t.setState({nickAdj:o,nickNoun:c})},t.state={adjs:[],nouns:[],nickAdj:"",nickNoun:""},t}return Object(h.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("https://raw.githubusercontent.com/dariusk/corpora/master/data/words/adjs.json").then(function(t){return t.json()}).then(function(e){t.setState({adjs:e.adjs})}),fetch("https://raw.githubusercontent.com/words/an-array-of-english-words/master/words.json").then(function(t){return t.json()}).then(function(e){t.setState({nouns:e})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement(d,{generate:this.generate,nickAdj:this.state.nickAdj,nickNoun:this.state.nickNoun}))}}]),e}(a.Component);o.a.render(r.a.createElement(k,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.256b96c1.chunk.js.map