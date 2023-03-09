"use strict";(self.webpackChunksashjs=self.webpackChunksashjs||[]).push([[2149],{87382:function(e,t,n){n.d(t,{Z:function(){return s}});n(72791);var a={},r=n(2461),d=n(80184),s=function(e){return(0,d.jsx)("div",{className:a.PageHeader,children:(0,d.jsxs)("div",{className:"page-header",children:[(0,d.jsx)("h1",{className:"page-title",children:e.titles}),(0,d.jsx)("div",{children:(0,d.jsxs)(r.Z,{children:[e.items.map((function(e,t){return(0,d.jsx)(r.Z.Item,{href:"#",children:e},t)})),(0,d.jsx)(r.Z.Item,{href:"#",active:!0,children:e.active})]})})]})})}},72149:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var a=n(93433),r=n(1413),d=n(29439),s=n(72791),i={},l=n(87382),c=n(43360),o=n(6197),u=n(46654),h=n(9140),m=n(25984),x=n(80184),j=function(){var e=s.useState(!1),t=(0,d.Z)(e,2),n=t[0],i=t[1],l=(0,s.useState)([{id:1,date:"2023/2/21",address:"7.7.7.*"},{id:2,date:"2023/2/22",address:"7.7.*.7"}]),h=(0,d.Z)(l,2),j=h[0],v=h[1],p=(0,s.useState)({date:"",address:""}),Z=(0,d.Z)(p,2),C=Z[0],k=Z[1],g=(0,s.useState)({date:"",address:""}),N=(0,d.Z)(g,2),y=N[0],D=N[1],E=(0,s.useState)(null),S=(0,d.Z)(E,2),A=S[0],I=S[1],F=function(e){e.preventDefault();var t=e.target.getAttribute("name"),n=e.target.value,a=(0,r.Z)({},y);a[t]=n,D(a)},B=function(e,t){e.preventDefault(),I(t.id);var n={date:t.date,address:t.address};D(n)},w=function(){I(null)},H=function(e){var t=(0,a.Z)(j),n=j.findIndex((function(t){return t.id===e}));t.splice(n,1),v(t)};return(0,x.jsxs)("div",{className:"app-container table-responsive",children:[(0,x.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={id:A,date:y.date,address:y.address},n=(0,a.Z)(j);n[j.findIndex((function(e){return e.id===A}))]=t,v(n),I(null)},children:[(0,x.jsx)(c.Z,{variant:"",className:"btn btn-secondary mb-3",onClick:function(){return i(!0)},children:"Add IP Address"}),(0,x.jsxs)("table",{id:"delete-datatable",className:"table table-bordered text-nowrap border-bottom",children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{children:"DATE"}),(0,x.jsx)("th",{children:"IP ADDRESS"})]})}),(0,x.jsx)("tbody",{children:j.map((function(e){return(0,x.jsx)(s.Fragment,{children:A===e.id?(0,x.jsx)(f,{editFormData:y,handleEditFormChange:F,handleCancelClick:w}):(0,x.jsx)(b,{contact:e,handleEditClick:B,handleDeleteClick:H})},e.id)}))})]})]}),(0,x.jsxs)(o.Z,{show:n,onHide:function(){return i(!1)},size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[(0,x.jsxs)(o.Z.Header,{children:[(0,x.jsx)(o.Z.Title,{id:"contained-modal-title-vcenter",children:"Add IP Address"}),(0,x.jsx)(c.Z,{variant:"",className:"btn btn-close",onClick:function(){return i(!1)}})]}),(0,x.jsx)(o.Z.Body,{children:(0,x.jsxs)(u.Z,{onSubmit:function(e){e.preventDefault();var t={id:(0,m.x0)(),date:C.date,address:C.address},n=[].concat((0,a.Z)(j),[t]);v(n)},children:[(0,x.jsx)("input",{type:"text",name:"date",required:!0,placeholder:"Enter a ip address...",onChange:function(e){e.preventDefault();var t=e.target.getAttribute("name"),n=e.target.value,a=(0,r.Z)({},C);a[t]=n,k(a)},className:"form-control mb-2"}),(0,x.jsx)(c.Z,{variant:"",className:"btn btn-primary me-2",type:"submit",children:"Add"})]})}),(0,x.jsx)(o.Z.Footer,{children:(0,x.jsx)(c.Z,{className:"btn btn-primary",onClick:function(){return i(!1)},children:"Close"})})]})]})},f=function(e){var t=e.editFormData,n=e.handleEditFormChange,a=e.handleCancelClick;return(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:(0,x.jsx)("input",{className:"form-control",type:"date",required:!0,placeholder:"Enter start date...",name:"date",value:t.date,onChange:n})}),(0,x.jsx)("td",{children:(0,x.jsx)("input",{className:"form-control",type:"text",required:!0,placeholder:"Enter an ip address...",name:"address",value:t.address,onChange:n})}),(0,x.jsxs)("td",{children:[(0,x.jsx)(c.Z,{variant:"",className:"btn btn-primary me-1",type:"submit",children:"Save"}),(0,x.jsx)(c.Z,{variant:"",className:"btn btn-danger me-1",onClick:a,children:"Cancel"})]})]})},b=function(e){var t=e.contact,n=e.handleEditClick,a=e.handleDeleteClick;return(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:t.date}),(0,x.jsx)("td",{children:t.address}),(0,x.jsxs)("td",{children:[(0,x.jsx)(c.Z,{variant:"",className:"btn btn-primary me-1",type:"button",onClick:function(e){return n(e,t)},children:"Edit"}),(0,x.jsx)(c.Z,{variant:"",className:"btn btn-danger me-1",type:"button",onClick:function(){return a(t.id)},children:"Delete"})]})]})},v=function(){return(0,x.jsxs)("div",{className:i.BlackList,children:[(0,x.jsx)(l.Z,{titles:"BlackList Ips",active:"BlackList Ips",items:["Home"]}),(0,x.jsx)(h.Z,{children:(0,x.jsx)(h.Z.Body,{children:(0,x.jsx)(j,{})})})]})}}}]);
//# sourceMappingURL=2149.a218485c.chunk.js.map