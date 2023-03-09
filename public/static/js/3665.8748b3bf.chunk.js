"use strict";(self.webpackChunksashjs=self.webpackChunksashjs||[]).push([[3665],{87382:function(e,t,n){n.d(t,{Z:function(){return l}});n(72791);var a={},r=n(2461),i=n(80184),l=function(e){return(0,i.jsx)("div",{className:a.PageHeader,children:(0,i.jsxs)("div",{className:"page-header",children:[(0,i.jsx)("h1",{className:"page-title",children:e.titles}),(0,i.jsx)("div",{children:(0,i.jsxs)(r.Z,{children:[e.items.map((function(e,t){return(0,i.jsx)(r.Z.Item,{href:"#",children:e},t)})),(0,i.jsx)(r.Z.Item,{href:"#",active:!0,children:e.active})]})})]})})}},23665:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var a=n(93433),r=n(1413),i=n(29439),l=n(72791),s={},c=n(87382),d=n(43360),o=n(6197),u=n(46654),m=n(9140),h=n(25984),x=n(80184),j=function(){var e=l.useState(!1),t=(0,i.Z)(e,2),n=t[0],s=t[1],c=(0,l.useState)([{id:1,date:"2023/2/21",name:"Anthrax",url:"https://example.com"},{id:2,date:"2023/2/22",name:"Anthrax",url:"https://example.com"}]),m=(0,i.Z)(c,2),j=m[0],b=m[1],v=(0,l.useState)({name:"",url:""}),Z=(0,i.Z)(v,2),N=Z[0],C=Z[1],y=(0,l.useState)({name:"",url:""}),g=(0,i.Z)(y,2),k=g[0],D=g[1],E=(0,l.useState)(null),A=(0,i.Z)(E,2),S=A[0],F=A[1],R=function(e){e.preventDefault();var t=e.target.getAttribute("name"),n=e.target.value,a=(0,r.Z)({},N);a[t]=n,C(a)},q=function(e){e.preventDefault();var t=e.target.getAttribute("name"),n=e.target.value,a=(0,r.Z)({},k);a[t]=n,D(a)},B=function(e,t){e.preventDefault(),F(t.id);var n={fullName:t.fullName,position:t.position,start:t.start,salary:t.salary,email:t.email};D(n)},I=function(){F(null)},w=function(e){var t=(0,a.Z)(j),n=j.findIndex((function(t){return t.id===e}));t.splice(n,1),b(t)};return(0,x.jsxs)("div",{className:"app-container table-responsive",children:[(0,x.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={id:S,fullName:k.fullName,position:k.position,start:N.start,salary:k.salary,email:k.email},n=(0,a.Z)(j);n[j.findIndex((function(e){return e.id===S}))]=t,b(n),F(null)},children:[(0,x.jsx)(d.Z,{variant:"",className:"btn btn-secondary mb-3",onClick:function(){return s(!0)},children:"Add Redirection"}),(0,x.jsxs)("table",{id:"delete-datatable",className:"table table-bordered text-nowrap border-bottom",children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{children:"DATE"}),(0,x.jsx)("th",{children:"NAME"}),(0,x.jsx)("th",{children:"URL / DOMAIN"}),(0,x.jsx)("th",{children:"Actions"})]})}),(0,x.jsx)("tbody",{children:j.map((function(e){return(0,x.jsx)(l.Fragment,{children:S===e.id?(0,x.jsx)(f,{editFormData:k,handleEditFormChange:q,handleCancelClick:I}):(0,x.jsx)(p,{contact:e,handleEditClick:B,handleDeleteClick:w})},e.id)}))})]})]}),(0,x.jsxs)(o.Z,{show:n,onHide:function(){return s(!1)},size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[(0,x.jsxs)(o.Z.Header,{children:[(0,x.jsx)(o.Z.Title,{id:"contained-modal-title-vcenter",children:"Add Redirection"}),(0,x.jsx)(d.Z,{variant:"",className:"btn btn-close",onClick:function(){return s(!1)}})]}),(0,x.jsx)(o.Z.Body,{children:(0,x.jsxs)(u.Z,{onSubmit:function(e){e.preventDefault();var t={id:(0,h.x0)(),fullName:N.fullName,position:N.position,start:N.start,salary:N.salary,email:N.email},n=[].concat((0,a.Z)(j),[t]);b(n)},children:[(0,x.jsx)("input",{type:"text",name:"name",required:!0,placeholder:"Enter a name...",onChange:R,className:"form-control mb-2"}),(0,x.jsx)("input",{type:"text",name:"url",required:!0,placeholder:"Enter an url...",onChange:R,className:"form-control mb-2"}),(0,x.jsx)(d.Z,{variant:"",className:"btn btn-primary me-2",type:"submit",children:"Add"})]})}),(0,x.jsx)(o.Z.Footer,{children:(0,x.jsx)(d.Z,{className:"btn btn-primary",onClick:function(){return s(!1)},children:"Close"})})]})]})},f=function(e){var t=e.editFormData,n=e.handleEditFormChange,a=e.handleCancelClick;return(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:(0,x.jsx)("input",{className:"form-control",type:"date",required:!0,placeholder:"Enter start date...",name:"date",value:t.date,onChange:n})}),(0,x.jsx)("td",{children:(0,x.jsx)("input",{className:"form-control",type:"text",required:!0,placeholder:"Enter an name...",name:"name",value:t.name,onChange:n})}),(0,x.jsx)("td",{children:(0,x.jsx)("input",{className:"form-control",type:"number",required:!0,placeholder:"Enter url...",name:"url",value:t.url,onChange:n})}),(0,x.jsxs)("td",{children:[(0,x.jsx)(d.Z,{variant:"",className:"btn btn-primary me-1",type:"submit",children:"Save"}),(0,x.jsx)(d.Z,{variant:"",className:"btn btn-danger me-1",onClick:a,children:"Cancel"})]})]})},p=function(e){var t=e.contact,n=e.handleEditClick,a=e.handleDeleteClick;return(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:t.date}),(0,x.jsx)("td",{children:t.name}),(0,x.jsx)("td",{children:t.url}),(0,x.jsxs)("td",{children:[(0,x.jsx)(d.Z,{variant:"",className:"btn btn-primary me-1",type:"button",onClick:function(e){return n(e,t)},children:"Edit"}),(0,x.jsx)(d.Z,{variant:"",className:"btn btn-danger me-1",type:"button",onClick:function(){return a(t.id)},children:"Delete"})]})]})},b=function(){return(0,x.jsxs)("div",{className:s.BotRedirection,children:[(0,x.jsx)(c.Z,{titles:"Bot Redirection",active:"Bot Redirection",items:["Home"]}),(0,x.jsx)(m.Z,{children:(0,x.jsx)(m.Z.Body,{children:(0,x.jsx)(j,{})})})]})}}}]);
//# sourceMappingURL=3665.8748b3bf.chunk.js.map