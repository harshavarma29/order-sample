(this["webpackJsonporder-book"]=this["webpackJsonporder-book"]||[]).push([[0],{131:function(e,t,r){},132:function(e,t,r){},133:function(e,t,r){},430:function(e,t,r){},431:function(e,t,r){},432:function(e,t,r){"use strict";r.r(t);var c=r(1),n=r(2),i=r.n(n),s=r(16),l=r.n(s),a=(r(131),r(121)),o=r(122),d=r(126),j=r(125),u=(r.p,r(132),r(50)),h=r.n(u),b=function(e){var t=e.selType,r=e.value,n=document.getElementById("make"),s=document.getElementById("book");"order book"===r&&(n&&(n.style.backgroundColor="rgb(206, 203, 203)"),s&&(s.style.backgroundColor="white"));var l=function(e,r,c){t(e),n&&(n.style.backgroundColor=r),s&&(s.style.backgroundColor=c)};return Object(c.jsx)(i.a.Fragment,{children:Object(c.jsxs)("div",{className:h.a.block,children:[Object(c.jsx)("div",{className:h.a.left,onClick:function(){return l("make order","white","rgb(206, 203, 203)")},id:"make",children:"Make Order"}),Object(c.jsx)("div",{className:h.a.right,onClick:function(){return l("order book","rgb(206, 203, 203)","white")},id:"book",children:"Order Book"})]})})},p=i.a.memo(b),m=r(27),O=r(74),x=(r(133),[{name:"BHEL",price:328,quantity:100,status:"hold",order:"Limit",color:"red"},{name:"TATA STEEL",price:457,quantity:40,status:"hold",order:"Market",color:"red"},{name:"FinCap",price:568,quantity:60,status:"hold",order:"Limit",color:"red"},{name:"BHEL",price:330,quantity:34,status:"hold",order:"Market",color:"red"},{name:"UPI",price:122,quantity:70,status:"hold",order:"Limit",color:"red"},{name:"TATA STEEL",price:460,quantity:200,status:"hold",order:"Stop",color:"red"},{name:"FinCap",price:572,quantity:25,status:"hold",order:"Market",color:"red"},{name:"BHEL",price:329,quantity:2,status:"hold",order:"Stop",color:"red"},{name:"GRM",price:642,quantity:30,status:"hold",order:"Limit",color:"red"},{name:"BHEL",price:330,quantity:10,status:"hold",order:"Market",color:"red"}]),y=[{name:"GRM",price:643,quantity:50,status:"hold",order:"Limit",color:"red"},{name:"TATA STEEL",price:457,quantity:70,status:"hold",order:"Market",color:"red"},{name:"UPI",price:114,quantity:25,status:"hold",order:"Limit",color:"red"},{name:"BHEL",price:329,quantity:30,status:"hold",order:"Stop",color:"red"},{name:"BHEL",price:330,quantity:100,status:"hold",order:"Market",color:"red"},{name:"FinCap",price:330,quantity:40,status:"hold",order:"Limit",color:"red"},{name:"TATA STEEL",price:572,quantity:10,status:"hold",order:"Limit",color:"red"},{name:"GRM",price:638,quantity:60,status:"hold",order:"Market",color:"red"},{name:"UPI",price:120,quantity:32,status:"hold",order:"Market",color:"red"},{name:"BHEL",price:457,quantity:90,status:"hold",order:"Stop",color:"red"}],f={BHEL:330,"TATA STEEL":457,UPI:120,GRM:638,FinCap:572},v=(r(134),function(e){var t=e.open,r=Object(n.useState)({quantity:"",price:""}),s=Object(O.a)(r,2),l=s[0],a=s[1],o=Object(n.useState)(""),d=Object(O.a)(o,2),j=d[0],u=d[1],h=function(e){return document.getElementById(e)},b=h("name"),p=h("type"),v=h("order"),k=function(e){e.preventDefault(),u(""),function(e,t,r){if("Select Company"===e.value||"Select Type"===t.value||"Select Order"===r.value||""==l.price||""==l.quantity)return!0}(b,p,v)?u("alert"):("ASK(SELL)"===p.value?y.push({name:b.value,price:l.price,quantity:l.quantity,status:"hold",order:v.value}):x.push({name:b.value,price:l.price,quantity:l.quantity,status:"hold",order:v.value}),t("order book"))},E=function(){v=h("order"),b=h("name"),v&&"Select Company"!=b.value&&"Market"===v.value?(document.getElementById("price").value=f[b.value],a(Object(m.a)(Object(m.a)({},l),{},{price:f[b.value]}))):document.getElementById("price").value=""};return Object(c.jsx)(i.a.Fragment,{children:Object(c.jsx)("form",{children:Object(c.jsxs)("div",{className:"block",children:["alert"===j?Object(c.jsx)("p",{style:{color:"red"},children:"Fill all the feilds"}):"",Object(c.jsx)("div",{className:"blocks block1",children:Object(c.jsxs)("select",{className:"block1-val",id:"name",required:!0,onClick:E,children:[Object(c.jsx)("option",{children:"Select Company"}),Object(c.jsx)("option",{children:"BHEL"}),Object(c.jsx)("option",{children:"TATA STEEL"}),Object(c.jsx)("option",{children:"UPI"}),Object(c.jsx)("option",{children:"GRM"}),Object(c.jsx)("option",{children:"FinCap"})]})}),Object(c.jsxs)("div",{className:"blocks",required:!0,children:[Object(c.jsxs)("select",{id:"type",children:[Object(c.jsx)("option",{children:"Select Type"}),Object(c.jsx)("option",{children:"ASK(SELL)"}),Object(c.jsx)("option",{children:"BID(BUY)"})]}),Object(c.jsxs)("select",{id:"order",required:!0,onClick:E,children:[Object(c.jsx)("option",{children:"Select Order"}),Object(c.jsx)("option",{children:"Market"}),Object(c.jsx)("option",{children:"Limit"}),Object(c.jsx)("option",{children:"Stop"})]})]}),Object(c.jsxs)("div",{className:"blocks",children:[Object(c.jsx)("input",{type:"text",placeholder:"Enter Quantity(Shares)",className:"input",onChange:function(e){return t=e.target.value,void a(Object(m.a)(Object(m.a)({},l),{},{quantity:t}));var t},required:!0}),Object(c.jsx)("input",{type:"text",placeholder:"Enter Price",id:"price",className:"input",onChange:function(e){return t=e.target.value,void a(Object(m.a)(Object(m.a)({},l),{},{price:t}));var t},required:!0})]}),Object(c.jsx)("button",{className:"confirm",onClick:function(e){return k(e)},children:"Confirm"})]})})})}),k=i.a.memo(v),E=(r(430),function(){return x.forEach((function(e){y.forEach((function(t){if("Limit"===e.order&&e.price>t.price&&e.name===t.name||"Stop"===e.order&&e.price<t.price&&e.name===t.name&&"Market"===e.order&&e.price===t.price)return e.status="bought",e.color="green",t.status="Sold",void(t.color="blue")}))})),Object(c.jsx)(i.a.Fragment,{children:Object(c.jsxs)("div",{style:{marginTop:"20px"},children:[Object(c.jsx)("div",{className:"table-title",children:Object(c.jsx)("span",{className:"underline",children:"ASK(SELL) Table"})}),Object(c.jsxs)("table",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"NAME"}),Object(c.jsx)("th",{children:"PRICE"}),Object(c.jsx)("th",{children:"QUANTITY"}),Object(c.jsx)("th",{children:"Order"}),Object(c.jsx)("th",{children:"STATUS"})]}),y.map((function(e,t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e.name}),Object(c.jsx)("td",{children:e.price}),Object(c.jsx)("td",{children:e.quantity}),Object(c.jsx)("td",{children:e.order}),Object(c.jsx)("td",{style:{color:e.color},children:e.status})]},t)}))]}),Object(c.jsx)("div",{className:"table-title",children:Object(c.jsx)("span",{className:"underline",children:"BID(BUY) Table"})}),Object(c.jsxs)("table",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"NAME"}),Object(c.jsx)("th",{children:"PRICE"}),Object(c.jsx)("th",{children:"QUANTITY"}),Object(c.jsx)("th",{children:"Order"}),Object(c.jsx)("th",{children:"STATUS"})]}),x.map((function(e,t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e.name}),Object(c.jsx)("td",{children:e.price}),Object(c.jsx)("td",{children:e.quantity}),Object(c.jsx)("td",{children:e.order}),Object(c.jsx)("td",{style:{color:e.color},children:e.status})]},t)}))]})]})})}),S=i.a.memo(E),T=(r(431),function(){var e=[],t=[];x.forEach((function(t){e.push(t.price)})),y.forEach((function(e){t.push(e.price)}));for(var r=e.concat(t).reduce((function(e,t){return Math.max(e,t)})),n=[],s=0;s<=r+10;s+=50)n.push(s);return Object(c.jsxs)(i.a.Fragment,{children:[Object(c.jsx)("span",{className:"title",children:"Chart"}),Object(c.jsxs)("div",{className:"block-size",children:[Object(c.jsxs)("div",{className:"buyer",children:[Object(c.jsx)("span",{className:"b-title",children:"Buy Chart"}),e.map((function(e,t){return Object(c.jsx)("div",{className:"bar",children:Object(c.jsxs)("div",{className:"buy-progress",id:"buy",style:{width:e+"px"},children:[Object(c.jsx)("span",{style:{float:"right",color:"black"},children:t+1}),Object(c.jsx)("span",{style:{fontSize:"20px"},children:e})]})},t)})),Object(c.jsx)("div",{children:n.map((function(e){return Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"item",style:{float:"right"},children:Object(c.jsx)("span",{style:{float:"right"},children:e})})})}))})]}),Object(c.jsxs)("div",{className:"seller",children:[Object(c.jsx)("span",{className:"s-title",children:"Sell Chart"}),t.map((function(e,t){return Object(c.jsx)("div",{className:"bar",children:Object(c.jsxs)("div",{className:"sell-progress",id:"sell",style:{width:e+"px"},children:[Object(c.jsx)("span",{style:{float:"left",color:"black"},children:t+1}),Object(c.jsx)("span",{style:{fontSize:"20px"},children:e})]})},t)})),Object(c.jsx)("div",{children:n.map((function(e){return Object(c.jsx)("div",{style:{width:r+50+"px"},children:Object(c.jsx)("div",{className:"item",style:{float:"left"},children:Object(c.jsx)("span",{style:{float:"left"},children:e})})})}))})]})]})]})}),g=i.a.memo(T),q=function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(){var e;return Object(a.a)(this,r),(e=t.call(this)).selectType=function(t){e.setState({type:t})},e.state={type:""},e}return Object(o.a)(r,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("span",{className:"title",children:"Order Book"}),Object(c.jsxs)("div",{className:"block-size",children:[Object(c.jsx)(p,{selType:this.selectType,value:this.state.type}),"order book"===this.state.type?Object(c.jsx)(S,{}):Object(c.jsx)(k,{open:this.selectType})]}),Object(c.jsx)(g,{execute:this.state.type})]})}}]),r}(n.PureComponent),L=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,433)).then((function(t){var r=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;r(e),c(e),n(e),i(e),s(e)}))};l.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(q,{})}),document.getElementById("root")),L()},50:function(e,t,r){e.exports={block:"selector_block__110yL",left:"selector_left__13eoi",right:"selector_right__3y8cs"}}},[[432,1,2]]]);
//# sourceMappingURL=main.ab3bcc3b.chunk.js.map