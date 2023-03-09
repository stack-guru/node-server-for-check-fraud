"use strict";(self.webpackChunksashjs=self.webpackChunksashjs||[]).push([[7847],{87382:function(e,n,t){t.d(n,{Z:function(){return i}});t(72791);var a={},r=t(2461),l=t(80184),i=function(e){return(0,l.jsx)("div",{className:a.PageHeader,children:(0,l.jsxs)("div",{className:"page-header",children:[(0,l.jsx)("h1",{className:"page-title",children:e.titles}),(0,l.jsx)("div",{children:(0,l.jsxs)(r.Z,{children:[e.items.map((function(e,n){return(0,l.jsx)(r.Z.Item,{href:"#",children:e},n)})),(0,l.jsx)(r.Z.Item,{href:"#",active:!0,children:e.active})]})})]})})}},77847:function(e,n,t){t.r(n),t.d(n,{default:function(){return N}});var a=t(72791),r={},l=t(87382),i=t(2677),s=t(9140),c=t(93433),d=t(1413),o=t(29439),m=t(6197),u=t(43360),h=t(46654),x=t(25984),j=t(18622),f=t(58765),b=t(78687),v=t(80184),p=[{value:"admin",label:"admin"},{value:"user",label:"user"}],Z=function(e){var n=e.editFormData,t=(e.handleEditFormChange,e.handleCancelClick),a=e.handleRoleChange;return(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:n.name}),(0,v.jsx)("td",{children:n.email}),(0,v.jsx)("td",{children:(0,v.jsx)(j.ZP,{options:p,placeholder:"role",onChange:a})}),(0,v.jsxs)("td",{children:[(0,v.jsx)(u.Z,{variant:"",className:"btn btn-primary me-1",type:"submit",children:"Save"}),(0,v.jsx)(u.Z,{variant:"",className:"btn btn-danger me-1",onClick:t,children:"Cancel"})]})]})},g=function(e){var n=e.contact,t=e.handleEditClick,a=e.handleDeleteClick;return(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:n.name}),(0,v.jsx)("td",{children:n.email}),(0,v.jsx)("td",{children:n.role}),(0,v.jsxs)("td",{children:[(0,v.jsx)(u.Z,{variant:"",className:"btn btn-primary me-1",type:"button",onClick:function(e){return t(e,n)},children:"Edit"}),(0,v.jsx)(u.Z,{variant:"",className:"btn btn-danger me-1",type:"button",onClick:function(){return a(n.id)},children:"Delete"})]})]})},C=function(){var e=(0,b.I0)(),n=(0,b.v9)((function(e){return e.user})),t=n.users;n.currentUser;(0,a.useEffect)((function(){e((0,f.Rf)())}),[]),(0,a.useEffect)((function(){N(t.map((function(e){return{id:e._id,name:e.name,email:e.email,role:e.role}})))}),[t]);var r=a.useState(!1),l=(0,o.Z)(r,2),i=l[0],s=l[1],j=(0,a.useState)([]),p=(0,o.Z)(j,2),C=p[0],N=p[1],y=(0,a.useState)({name:"",email:"",role:""}),k=(0,o.Z)(y,2),E=k[0],D=k[1],S=(0,a.useState)({name:"",email:"",role:""}),w=(0,o.Z)(S,2),F=w[0],A=w[1],I=(0,a.useState)(null),R=(0,o.Z)(I,2),q=R[0],H=R[1],M=function(e){e.preventDefault();var n=e.target.getAttribute("name"),t=e.target.value,a=(0,d.Z)({},E);a[n]=t,D(a)},U=function(e){e.preventDefault();var n=e.target.getAttribute("name"),t=e.target.value,a=(0,d.Z)({},F);a[n]=t,A(a)},B=function(e){var n=(0,d.Z)({},F);n.role=e.value,A(n)},P=function(e,n){e.preventDefault(),H(n.id);var t={name:n.name,email:n.email,role:n.salary};A(t)},z=function(){H(null)},T=function(e){var n=(0,c.Z)(C),t=C.findIndex((function(n){return n.id===e}));n.splice(t,1),N(n)};return(0,v.jsxs)("div",{className:"app-container",children:[(0,v.jsx)("form",{onSubmit:function(e){e.preventDefault();var n={id:q,name:F.name,email:F.email,role:F.role},t=(0,c.Z)(C);t[C.findIndex((function(e){return e.id===q}))]=n,N(t),H(null)},children:(0,v.jsxs)("table",{id:"delete-datatable",className:"table table-bordered text-nowrap border-bottom",children:[(0,v.jsx)("thead",{children:(0,v.jsxs)("tr",{children:[(0,v.jsx)("th",{children:"Name"}),(0,v.jsx)("th",{children:"Email"}),(0,v.jsx)("th",{children:"Role"}),(0,v.jsx)("th",{children:"Actions"})]})}),(0,v.jsx)("tbody",{children:C.map((function(e){return(0,v.jsx)(a.Fragment,{children:q===e.id?(0,v.jsx)(Z,{editFormData:F,handleEditFormChange:U,handleCancelClick:z,handleRoleChange:B}):(0,v.jsx)(g,{contact:e,handleEditClick:P,handleDeleteClick:T})},e.id)}))})]})}),(0,v.jsxs)(m.Z,{show:i,onHide:function(){return s(!1)},size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[(0,v.jsxs)(m.Z.Header,{children:[(0,v.jsx)(m.Z.Title,{id:"contained-modal-title-vcenter",children:"Add New Row"}),(0,v.jsx)(u.Z,{variant:"",className:"btn btn-close",onClick:function(){return s(!1)}})]}),(0,v.jsx)(m.Z.Body,{children:(0,v.jsxs)(h.Z,{onSubmit:function(e){e.preventDefault();var n={id:(0,x.x0)(),name:E.name,email:E.email,role:E.role},t=[].concat((0,c.Z)(C),[n]);N(t)},children:[(0,v.jsx)("input",{type:"text",name:"fullName",required:!0,placeholder:"Enter a name...",onChange:M,className:"form-control mb-2"}),(0,v.jsx)("input",{type:"text",name:"position",required:!0,placeholder:"Enter an addres...",onChange:M,className:"form-control mb-2"}),(0,v.jsx)("input",{type:"number",name:"salary",required:!0,placeholder:"Enter a phone number...",onChange:M,className:"form-control mb-2"}),(0,v.jsx)("input",{type:"email",name:"email",required:!0,placeholder:"Enter an email...",onChange:M,className:"form-control mb-2"}),(0,v.jsx)(u.Z,{variant:"",className:"btn btn-primary me-2",type:"submit",children:"Add"})]})}),(0,v.jsx)(m.Z.Footer,{children:(0,v.jsx)(u.Z,{className:"btn btn-primary",onClick:function(){return s(!1)},children:"Close"})})]})]})},N=function(){return(0,v.jsxs)("div",{className:r.userManagement,children:[(0,v.jsx)(l.Z,{titles:"User Management",active:"User Management",items:["Home"]}),(0,v.jsx)("div",{className:"row",children:(0,v.jsx)(i.Z,{lg:12,children:(0,v.jsx)(s.Z,{children:(0,v.jsx)(s.Z.Body,{children:(0,v.jsx)(C,{})})})})})]})}}}]);
//# sourceMappingURL=7847.6f1dff02.chunk.js.map