"use strict";(self.webpackChunksashjs=self.webpackChunksashjs||[]).push([[4361],{87382:function(e,a,r){r.d(a,{Z:function(){return c}});r(72791);var s={},n=r(2461),t=r(80184),c=function(e){return(0,t.jsx)("div",{className:s.PageHeader,children:(0,t.jsxs)("div",{className:"page-header",children:[(0,t.jsx)("h1",{className:"page-title",children:e.titles}),(0,t.jsx)("div",{children:(0,t.jsxs)(n.Z,{children:[e.items.map((function(e,a){return(0,t.jsx)(n.Z.Item,{href:"#",children:e},a)})),(0,t.jsx)(n.Z.Item,{href:"#",active:!0,children:e.active})]})})]})})}},4361:function(e,a,r){r.r(a),r.d(a,{default:function(){return p}});var s=r(74165),n=r(15861),t=r(29439),c=r(72791),i={},l=r(31243),o=r(87382),d=r(2677),u=r(9140),f=r(43360),m=r(89743),v=r(7680),h=r(78687),x=r(80184),p=function(){var e=(0,h.I0)(),a=(0,h.v9)((function(e){return e.user})),r=a.apiKey,p=a.currentUser,Z=(0,c.useState)(!1),b=(0,t.Z)(Z,2),j=b[0],N=b[1],y=(0,c.useState)(!1),g=(0,t.Z)(y,2),P=g[0],w=g[1],k=(0,c.useState)(""),C=(0,t.Z)(k,2),E=C[0],R=C[1],I=(0,c.useState)([]),B=(0,t.Z)(I,2),H=B[0],S=B[1],D=(0,c.useState)([]),z=(0,t.Z)(D,2),O=z[0],T=z[1],U=(0,c.useState)([]),A=(0,t.Z)(U,2),F=A[0],G=A[1];(0,c.useEffect)((function(){e((0,v.Pi)({email:p.email}))}),[]),(0,c.useEffect)((function(){H.length||O.length||F.length||E&&K(E.split("\n"))}),[H,O,F]);var K=function(){var e=(0,n.Z)((0,s.Z)().mark((function e(a){var n,t,c,i,o;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],t=[],c=[],i=(0,s.Z)().mark((function e(i){var o;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a[i]){e.next=2;break}return e.abrupt("return","continue");case 2:o="".concat("https://killbot-service.herokuapp.com/","api/check-disposal-email?apiKey=").concat(r,"&email=").concat(a[i]),l.Z.get(o).then((function(e){e.data.email?e.data.email.isDisposable?c.push(a[i]):t.push(a[i]):n.push(a[i]),i===a.length-1&&(S(t),T(c),G(n),N(!0),w(!1))})).catch((function(e){n.push(a[i]),i===a.length-1&&(S(t),T(c),G(n),N(!0),w(!1))}));case 4:case"end":return e.stop()}}),e)})),o=0;case 5:if(!(o<a.length)){e.next=13;break}return e.delegateYield(i(o),"t0",7);case 7:if("continue"!==e.t0){e.next=10;break}return e.abrupt("continue",10);case 10:o++,e.next=5;break;case 13:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return(0,x.jsxs)("div",{className:i.DisposalEmail,children:[(0,x.jsx)(o.Z,{titles:"Disposal Email Identify",active:"Disposal Email Identify",items:["Home"]}),(0,x.jsx)("div",{className:"row",children:(0,x.jsxs)(d.Z,{lg:12,children:[(0,x.jsx)(u.Z,{children:(0,x.jsxs)(u.Z.Body,{children:[(0,x.jsx)("div",{className:"text-muted",children:"Email List"}),(0,x.jsx)("textarea",{className:"form-control",rows:8,placeholder:"test1@example.com",onChange:function(e){return R(e.target.value)}}),(0,x.jsx)("div",{className:"text-end mt-3",children:(0,x.jsx)(f.Z,{variant:"secondary",className:"me-1",onClick:function(){E&&(w(!0),S([]),T([]),G([]),N(!1))},disabled:P,children:"Submit"})})]})}),j&&(0,x.jsxs)("div",{children:[(0,x.jsxs)(u.Z,{children:[(0,x.jsx)(u.Z.Header,{children:(0,x.jsx)(m.Z,{style:{width:"100%"},children:(0,x.jsx)(d.Z,{md:6,children:(0,x.jsxs)("div",{className:"text-muted",children:["Real / Valid:"," ",(0,x.jsx)("span",{style:{color:"#13bfa6"},children:H.length})]})})})}),(0,x.jsx)(u.Z.Body,{children:H.map((function(e,a){return(0,x.jsx)("div",{children:(0,x.jsx)("span",{style:{color:"#13bfa6"},children:e})},e+a+459)}))})]}),(0,x.jsxs)(u.Z,{children:[(0,x.jsx)(u.Z.Header,{children:(0,x.jsx)(m.Z,{style:{width:"100%"},children:(0,x.jsx)(d.Z,{md:6,children:(0,x.jsxs)("div",{className:"text-muted",children:["Disposable:"," ",(0,x.jsx)("span",{style:{color:"#ffc107"},children:O.length})]})})})}),(0,x.jsx)(u.Z.Body,{children:O.map((function(e,a){return(0,x.jsx)("div",{children:(0,x.jsx)("span",{style:{color:"#ffc107"},children:e})},e+a+987)}))})]}),(0,x.jsxs)(u.Z,{children:[(0,x.jsx)(u.Z.Header,{children:(0,x.jsx)(m.Z,{style:{width:"100%"},children:(0,x.jsx)(d.Z,{md:6,children:(0,x.jsxs)("div",{className:"text-muted",children:["Wrong/Error:"," ",(0,x.jsx)("span",{style:{color:"#bc243c"},children:F.length})]})})})}),(0,x.jsx)(u.Z.Body,{children:F.map((function(e,a){return(0,x.jsx)("div",{children:(0,x.jsx)("span",{style:{color:"#bc243c"},children:e})},e+a+333)}))})]})]})]})})]})}},2461:function(e,a,r){r.d(a,{Z:function(){return x}});var s=r(1413),n=r(45987),t=r(81694),c=r.n(t),i=r(72791),l=r(10162),o=r(16445),d=r(80184),u=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],f=i.forwardRef((function(e,a){var r=e.bsPrefix,t=e.active,i=e.children,f=e.className,m=e.as,v=void 0===m?"li":m,h=e.linkAs,x=void 0===h?o.Z:h,p=e.linkProps,Z=e.href,b=e.title,j=e.target,N=(0,n.Z)(e,u),y=(0,l.vE)(r,"breadcrumb-item");return(0,d.jsx)(v,(0,s.Z)((0,s.Z)({ref:a},N),{},{className:c()(y,f,{active:t}),"aria-current":t?"page":void 0,children:t?i:(0,d.jsx)(x,(0,s.Z)((0,s.Z)({},p),{},{href:Z,title:b,target:j,children:i}))}))}));f.displayName="BreadcrumbItem",f.defaultProps={active:!1,linkProps:{}};var m=f,v=["bsPrefix","className","listProps","children","label","as"],h=i.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,i=e.listProps,o=e.children,u=e.label,f=e.as,m=void 0===f?"nav":f,h=(0,n.Z)(e,v),x=(0,l.vE)(r,"breadcrumb");return(0,d.jsx)(m,(0,s.Z)((0,s.Z)({"aria-label":u,className:t,ref:a},h),{},{children:(0,d.jsx)("ol",(0,s.Z)((0,s.Z)({},i),{},{className:c()(x,null==i?void 0:i.className),children:o}))}))}));h.displayName="Breadcrumb",h.defaultProps={label:"breadcrumb",listProps:{}};var x=Object.assign(h,{Item:m})},43360:function(e,a,r){var s=r(1413),n=r(29439),t=r(45987),c=r(81694),i=r.n(c),l=r(72791),o=r(15341),d=r(10162),u=r(80184),f=["as","bsPrefix","variant","size","active","className"],m=l.forwardRef((function(e,a){var r=e.as,c=e.bsPrefix,l=e.variant,m=e.size,v=e.active,h=e.className,x=(0,t.Z)(e,f),p=(0,d.vE)(c,"btn"),Z=(0,o.FT)((0,s.Z)({tagName:r},x)),b=(0,n.Z)(Z,2),j=b[0],N=b[1].tagName;return(0,u.jsx)(N,(0,s.Z)((0,s.Z)((0,s.Z)({},j),x),{},{ref:a,className:i()(h,p,v&&"active",l&&"".concat(p,"-").concat(l),m&&"".concat(p,"-").concat(m),x.href&&x.disabled&&"disabled")}))}));m.displayName="Button",m.defaultProps={variant:"primary",active:!1,disabled:!1},a.Z=m},9140:function(e,a,r){r.d(a,{Z:function(){return I}});var s=r(1413),n=r(45987),t=r(81694),c=r.n(t),i=r(72791),l=r(10162),o=r(66543),d=r(27472),u=r(80184),f=["bsPrefix","className","variant","as"],m=i.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,i=e.variant,o=e.as,d=void 0===o?"img":o,m=(0,n.Z)(e,f),v=(0,l.vE)(r,"card-img");return(0,u.jsx)(d,(0,s.Z)({ref:a,className:c()(i?"".concat(v,"-").concat(i):v,t)},m))}));m.displayName="CardImg";var v=m,h=r(96040),x=["bsPrefix","className","as"],p=i.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,o=e.as,d=void 0===o?"div":o,f=(0,n.Z)(e,x),m=(0,l.vE)(r,"card-header"),v=(0,i.useMemo)((function(){return{cardHeaderBsPrefix:m}}),[m]);return(0,u.jsx)(h.Z.Provider,{value:v,children:(0,u.jsx)(d,(0,s.Z)((0,s.Z)({ref:a},f),{},{className:c()(t,m)}))})}));p.displayName="CardHeader";var Z=p,b=["bsPrefix","className","bg","text","border","body","children","as"],j=(0,d.Z)("h5"),N=(0,d.Z)("h6"),y=(0,o.Z)("card-body"),g=(0,o.Z)("card-title",{Component:j}),P=(0,o.Z)("card-subtitle",{Component:N}),w=(0,o.Z)("card-link",{Component:"a"}),k=(0,o.Z)("card-text",{Component:"p"}),C=(0,o.Z)("card-footer"),E=(0,o.Z)("card-img-overlay"),R=i.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,i=e.bg,o=e.text,d=e.border,f=e.body,m=e.children,v=e.as,h=void 0===v?"div":v,x=(0,n.Z)(e,b),p=(0,l.vE)(r,"card");return(0,u.jsx)(h,(0,s.Z)((0,s.Z)({ref:a},x),{},{className:c()(t,p,i&&"bg-".concat(i),o&&"text-".concat(o),d&&"border-".concat(d)),children:f?(0,u.jsx)(y,{children:m}):m}))}));R.displayName="Card",R.defaultProps={body:!1};var I=Object.assign(R,{Img:v,Title:g,Subtitle:P,Body:y,Link:w,Text:k,Header:Z,Footer:C,ImgOverlay:E})},96040:function(e,a,r){var s=r(72791).createContext(null);s.displayName="CardHeaderContext",a.Z=s},2677:function(e,a,r){var s=r(29439),n=r(1413),t=r(45987),c=r(81694),i=r.n(c),l=r(72791),o=r(10162),d=r(80184),u=["as","bsPrefix","className"],f=["className"];var m=l.forwardRef((function(e,a){var r=function(e){var a=e.as,r=e.bsPrefix,s=e.className,c=(0,t.Z)(e,u);r=(0,o.vE)(r,"col");var l=(0,o.pi)(),d=(0,o.zG)(),f=[],m=[];return l.forEach((function(e){var a,s,n,t=c[e];delete c[e],"object"===typeof t&&null!=t?(a=t.span,s=t.offset,n=t.order):a=t;var i=e!==d?"-".concat(e):"";a&&f.push(!0===a?"".concat(r).concat(i):"".concat(r).concat(i,"-").concat(a)),null!=n&&m.push("order".concat(i,"-").concat(n)),null!=s&&m.push("offset".concat(i,"-").concat(s))})),[(0,n.Z)((0,n.Z)({},c),{},{className:i().apply(void 0,[s].concat(f,m))}),{as:a,bsPrefix:r,spans:f}]}(e),c=(0,s.Z)(r,2),l=c[0],m=l.className,v=(0,t.Z)(l,f),h=c[1],x=h.as,p=void 0===x?"div":x,Z=h.bsPrefix,b=h.spans;return(0,d.jsx)(p,(0,n.Z)((0,n.Z)({},v),{},{ref:a,className:i()(m,!b.length&&Z)}))}));m.displayName="Col",a.Z=m},89743:function(e,a,r){var s=r(1413),n=r(45987),t=r(81694),c=r.n(t),i=r(72791),l=r(10162),o=r(80184),d=["bsPrefix","className","as"],u=i.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,i=e.as,u=void 0===i?"div":i,f=(0,n.Z)(e,d),m=(0,l.vE)(r,"row"),v=(0,l.pi)(),h=(0,l.zG)(),x="".concat(m,"-cols"),p=[];return v.forEach((function(e){var a,r=f[e];delete f[e],a=null!=r&&"object"===typeof r?r.cols:r;var s=e!==h?"-".concat(e):"";null!=a&&p.push("".concat(x).concat(s,"-").concat(a))})),(0,o.jsx)(u,(0,s.Z)((0,s.Z)({ref:a},f),{},{className:c().apply(void 0,[t,m].concat(p))}))}));u.displayName="Row",a.Z=u},66543:function(e,a,r){r.d(a,{Z:function(){return m}});var s=r(1413),n=r(45987),t=r(81694),c=r.n(t),i=/-(.)/g;var l=r(72791),o=r(10162),d=r(80184),u=["className","bsPrefix","as"],f=function(e){return e[0].toUpperCase()+(a=e,a.replace(i,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function m(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=a.displayName,t=void 0===r?f(e):r,i=a.Component,m=a.defaultProps,v=l.forwardRef((function(a,r){var t=a.className,l=a.bsPrefix,f=a.as,m=void 0===f?i||"div":f,v=(0,n.Z)(a,u),h=(0,o.vE)(l,e);return(0,d.jsx)(m,(0,s.Z)({ref:r,className:c()(t,h)},v))}));return v.defaultProps=m,v.displayName=t,v}},27472:function(e,a,r){var s=r(1413),n=r(72791),t=r(81694),c=r.n(t),i=r(80184);a.Z=function(e){return n.forwardRef((function(a,r){return(0,i.jsx)("div",(0,s.Z)((0,s.Z)({},a),{},{ref:r,className:c()(a.className,e)}))}))}}}]);
//# sourceMappingURL=4361.b40346d7.chunk.js.map