(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{21:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c=t(0),o=t(1),r=t.n(o),a=t(15),u=t.n(a),i=(t(21),t(6)),s=t(3),l=t(4),d=t.n(l),j="api/persons",b={getAll:function(){return d.a.get(j).then((function(e){return e.data}))},create:function(e){return d.a.post(j,e).then((function(e){return e.data}))},update:function(e,n){return d.a.put("".concat(j,"/").concat(e),n).then((function(e){return e.data}))},remove:function(e){return d.a.delete("".concat(j,"/").concat(e)).then((function(e){return e.data}))}},m=function(e){var n=e.nameFilter,t=e.handleFilter;return Object(c.jsxs)("div",{children:["filter: ",Object(c.jsx)("input",{value:n,onChange:t})]})},h=function(e){var n=e.newName,t=e.newNumber,o=e.handleNewName,r=e.handleNewNumber,a=e.handleNewPersonSubmit;return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{onSubmit:a,children:[Object(c.jsxs)("div",{children:["name: ",Object(c.jsx)("input",{value:n,onChange:o})]}),Object(c.jsxs)("div",{children:["number: ",Object(c.jsx)("input",{value:t,onChange:r})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"add"})})]})})},f=function(e){var n=e.notification;return null===n.message?null:Object(c.jsx)("div",{className:"message",style:{color:n.color},children:n.message})},O=function(e){var n=e.personsToShow,t=e.handleDelete;return Object(c.jsx)("div",{children:n.map((function(e,n){return Object(c.jsxs)("div",{children:[e.name," ",e.number,Object(c.jsx)("button",{onClick:function(){return t(e.id)},children:"delete"})]},n)}))})},v=function(){var e=Object(o.useState)([]),n=Object(s.a)(e,2),t=n[0],r=n[1],a=Object(o.useState)(""),u=Object(s.a)(a,2),l=u[0],d=u[1],j=Object(o.useState)(""),v=Object(s.a)(j,2),w=v[0],x=v[1],p=Object(o.useState)(""),g=Object(s.a)(p,2),N=g[0],S=g[1],C=Object(o.useState)({message:null,color:null}),y=Object(s.a)(C,2),k=y[0],L=y[1];Object(o.useEffect)((function(){b.getAll().then((function(e){return r(e)}))}),[]);var T=t.filter((function(e){return e.name.toLowerCase().includes(N.toLowerCase())}));return Object(c.jsxs)("div",{children:[Object(c.jsx)(f,{notification:k}),Object(c.jsx)("h2",{children:"Phonebook"}),Object(c.jsx)(m,{nameFilter:N,handleFilter:function(e){S(e.target.value)}}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Add a new"}),Object(c.jsx)(h,{newName:l,newNumber:w,handleNewName:function(e){d(e.target.value)},handleNewNumber:function(e){x(e.target.value)},handleNewPersonSubmit:function(e){if(e.preventDefault(),t.some((function(e){return e.name.toLowerCase()===l.toLowerCase()}))){var n=t.find((function(e){return e.name.toLowerCase()===l.toLowerCase()}));window.confirm("update ".concat(n.name,"?"))&&(n=Object(i.a)(Object(i.a)({},n),{},{number:w}),b.update(n.id,n).then((function(e){r(t.map((function(t){return t.id!==n.id?t:e}))),d(""),x(""),L({message:"".concat(e.name,"'s number has been updated"),color:"green"}),setTimeout((function(){L({message:null,color:null})}),4e3)})))}else{var c={name:l,number:w};b.create(c).then((function(e){r(t.concat(e)),d(""),x(""),L({message:"".concat(e.name," added"),color:"cyan"}),setTimeout((function(){L({message:null,color:null})}),4e3)}))}}})]}),Object(c.jsx)("h2",{children:"Numbers"}),Object(c.jsx)(O,{personsToShow:T,handleDelete:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Are you sure you want to delete ".concat(n.name))&&b.remove(e).then((function(){r(t.filter((function(n){return n.id!==e}))),L({message:"".concat(n.name," has been deleted"),color:"red"}),setTimeout((function(){L({message:null,color:null})}),4e3)})).catch((function(e){L({message:"".concat(n.name," has already been deleted"),color:"red"}),setTimeout((function(){L({message:null,color:null})}),4e3)}))}})]})};u.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.1283ddfa.chunk.js.map