(self.webpackChunksashjs=self.webpackChunksashjs||[]).push([[232],{87382:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});t(72791);var r={},i=t(2461),o=t(80184),s=function(e){return(0,o.jsx)("div",{className:r.PageHeader,children:(0,o.jsxs)("div",{className:"page-header",children:[(0,o.jsx)("h1",{className:"page-title",children:e.titles}),(0,o.jsx)("div",{children:(0,o.jsxs)(i.Z,{children:[e.items.map((function(e,n){return(0,o.jsx)(i.Z.Item,{href:"#",children:e},n)})),(0,o.jsx)(i.Z.Item,{href:"#",active:!0,children:e.active})]})})]})})}},80023:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return v}});var r=t(29439),i=t(72791),o={},s=t(87382),a=t(89743),c=t(2677),l=t(9140),u=t(43360),d=t(6197),f=t(28187),h=t.n(f),m=t(80184),v=function(){var e=(0,i.useState)(!1),n=(0,r.Z)(e,2),t=n[0],f=n[1],v=function(){return f(!1)},p=(0,i.useState)("<center>  </center>"),Z=(0,r.Z)(p,2),b=Z[0],x=Z[1];return(0,m.jsxs)("div",{className:o.FormEditor,children:[(0,m.jsx)(s.Z,{titles:"Form Editor",active:"Form Editor",items:["Forms"]}),(0,m.jsx)(a.Z,{children:(0,m.jsx)(c.Z,{md:12,children:(0,m.jsxs)(l.Z,{children:[(0,m.jsx)(l.Z.Header,{children:(0,m.jsx)(l.Z.Title,{as:"h3",children:"Sun Form Editor"})}),(0,m.jsx)(l.Z.Body,{children:(0,m.jsx)(h(),{})})]})})}),(0,m.jsx)(a.Z,{children:(0,m.jsx)(c.Z,{md:12,children:(0,m.jsxs)(l.Z,{children:[(0,m.jsx)(l.Z.Header,{children:(0,m.jsx)(l.Z.Title,{children:"Form Editor in Modal"})}),(0,m.jsx)(l.Z.Body,{children:(0,m.jsxs)("div",{className:"text-center p-4 bg-light border",children:[(0,m.jsx)(u.Z,{variant:"primary",onClick:function(){return f(!0)},children:"View live demo"}),(0,m.jsxs)(d.Z,{show:t,onHide:v,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[(0,m.jsx)(d.Z.Header,{closeButton:!0,children:(0,m.jsx)(d.Z.Title,{children:"Create New Document"})}),(0,m.jsx)(d.Z.Body,{children:(0,m.jsx)(h(),{})}),(0,m.jsxs)(d.Z.Footer,{children:[(0,m.jsx)(u.Z,{variant:"secondary",onClick:v,children:"Close"}),(0,m.jsx)(u.Z,{variant:"primary",onClick:v,children:"Save Changes"})]})]})]})})]})})}),(0,m.jsx)(a.Z,{children:(0,m.jsx)(c.Z,{md:12,children:(0,m.jsxs)(l.Z,{children:[(0,m.jsx)(l.Z.Header,{children:(0,m.jsx)(l.Z.Title,{children:"From Inline-Edit Editor"})}),(0,m.jsxs)(l.Z.Body,{children:[(0,m.jsx)(h(),{setContents:b,onChange:x,setOptions:{buttonList:[["undo","redo"],["font","fontSize"],["paragraphStyle","blockquote"],["bold","underline","italic","strike","subscript","superscript"],["fontColor","hiliteColor"],["align","list","lineHeight"],["outdent","indent"],["table","horizontalRule","link","image","video"],["preview","print"],["removeFormat"]],defaultTag:"div",minHeight:"300px",showPathLabel:!1,attributesWhitelist:{all:"style",table:"cellpadding|width|cellspacing|height|style",tr:"valign|style",td:"styleinsert|height|style",img:"title|alt|src|style"}}}),(0,m.jsx)("hr",{}),(0,m.jsx)(l.Z.Title,{as:"h6",children:"Example given value output:"}),(0,m.jsx)("textarea",{className:"text-editor bg-white text-dark border",disabled:!0,value:JSON.stringify(b,null,2),style:{width:"100%",resize:"none",height:"600px"}})]})]})})})]})}},73201:function(e,n,t){"use strict";var r=t(72791),i=function(e){return e&&"function"!==typeof e?function(n){e.current=n}:e};n.Z=function(e,n){return(0,r.useMemo)((function(){return function(e,n){var t=i(e),r=i(n);return function(e){t&&t(e),r&&r(e)}}(e,n)}),[e,n])}},71306:function(e,n,t){"use strict";t.d(n,{$F:function(){return s},PB:function(){return o}});var r="data-rr-ui-",i="rrUi";function o(e){return"".concat(r).concat(e)}function s(e){return"".concat(i).concat(e)}},58865:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(72791),i=t(97357),o=(0,r.createContext)(i.Z?window:void 0);o.Provider;function s(){return(0,r.useContext)(o)}},3070:function(e,n,t){"use strict";var r=t(97357),i=!1,o=!1;try{var s={get passive(){return i=!0},get once(){return o=i=!0}};r.Z&&(window.addEventListener("test",s,s),window.removeEventListener("test",s,!0))}catch(a){}n.ZP=function(e,n,t,r){if(r&&"boolean"!==typeof r&&!o){var s=r.once,a=r.capture,c=t;!o&&s&&(c=t.__once||function e(r){this.removeEventListener(n,e,a),t.call(this,r)},t.__once=c),e.addEventListener(n,c,i?r:a)}e.addEventListener(n,t,r)}},97357:function(e,n){"use strict";n.Z=!("undefined"===typeof window||!window.document||!window.document.createElement)},53189:function(e,n,t){"use strict";function r(e,n){return e.contains?e.contains(n):e.compareDocumentPosition?e===n||!!(16&e.compareDocumentPosition(n)):void 0}t.d(n,{Z:function(){return r}})},92899:function(e,n,t){"use strict";var r=t(3070),i=t(36382);n.Z=function(e,n,t,o){return(0,r.ZP)(e,n,t,o),function(){(0,i.Z)(e,n,t,o)}}},78376:function(e,n,t){"use strict";function r(e){return e&&e.ownerDocument||document}t.d(n,{Z:function(){return r}})},13808:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=Function.prototype.bind.call(Function.prototype.call,[].slice);function i(e,n){return r(e.querySelectorAll(n))}},36382:function(e,n){"use strict";n.Z=function(e,n,t,r){var i=r&&"boolean"!==typeof r?r.capture:r;e.removeEventListener(n,t,i),t.__once&&e.removeEventListener(n,t.__once,i)}},80888:function(e,n,t){"use strict";var r=t(79047);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,n,t,i,o,s){if(s!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:o,resetWarningCache:i};return t.PropTypes=t,t}},52007:function(e,n,t){e.exports=t(80888)()},79047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2461:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var r=t(1413),i=t(45987),o=t(81694),s=t.n(o),a=t(72791),c=t(10162),l=t(16445),u=t(80184),d=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],f=a.forwardRef((function(e,n){var t=e.bsPrefix,o=e.active,a=e.children,f=e.className,h=e.as,m=void 0===h?"li":h,v=e.linkAs,p=void 0===v?l.Z:v,Z=e.linkProps,b=e.href,x=e.title,j=e.target,y=(0,i.Z)(e,d),g=(0,c.vE)(t,"breadcrumb-item");return(0,u.jsx)(m,(0,r.Z)((0,r.Z)({ref:n},y),{},{className:s()(g,f,{active:o}),"aria-current":o?"page":void 0,children:o?a:(0,u.jsx)(p,(0,r.Z)((0,r.Z)({},Z),{},{href:b,title:x,target:j,children:a}))}))}));f.displayName="BreadcrumbItem",f.defaultProps={active:!1,linkProps:{}};var h=f,m=["bsPrefix","className","listProps","children","label","as"],v=a.forwardRef((function(e,n){var t=e.bsPrefix,o=e.className,a=e.listProps,l=e.children,d=e.label,f=e.as,h=void 0===f?"nav":f,v=(0,i.Z)(e,m),p=(0,c.vE)(t,"breadcrumb");return(0,u.jsx)(h,(0,r.Z)((0,r.Z)({"aria-label":d,className:o,ref:n},v),{},{children:(0,u.jsx)("ol",(0,r.Z)((0,r.Z)({},a),{},{className:s()(p,null==a?void 0:a.className),children:l}))}))}));v.displayName="Breadcrumb",v.defaultProps={label:"breadcrumb",listProps:{}};var p=Object.assign(v,{Item:h})},6197:function(e,n,t){"use strict";t.d(n,{Z:function(){return L}});var r,i=t(29439),o=t(45987),s=t(1413),a=t(81694),c=t.n(a),l=t(3070),u=t(97357),d=t(78376),f=t(36382);function h(e){if((!r&&0!==r||e)&&u.Z){var n=document.createElement("div");n.style.position="absolute",n.style.top="-9999px",n.style.width="50px",n.style.height="50px",n.style.overflow="scroll",document.body.appendChild(n),r=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return r}var m=t(28633),v=t(39007),p=t(73201),Z=t(91683),b=t(33690),x=t(72791),j=t(57246),y=t(99106),g=t(72709),w=t(28239),E=t(99820),N=t(10162),k=t(80184),P=["bsPrefix","className","contentClassName","centered","size","fullscreen","children","scrollable"],C=x.forwardRef((function(e,n){var t=e.bsPrefix,r=e.className,i=e.contentClassName,a=e.centered,l=e.size,u=e.fullscreen,d=e.children,f=e.scrollable,h=(0,o.Z)(e,P);t=(0,N.vE)(t,"modal");var m="".concat(t,"-dialog"),v="string"===typeof u?"".concat(t,"-fullscreen-").concat(u):"".concat(t,"-fullscreen");return(0,k.jsx)("div",(0,s.Z)((0,s.Z)({},h),{},{ref:n,className:c()(m,r,l&&"".concat(t,"-").concat(l),a&&"".concat(m,"-centered"),f&&"".concat(m,"-scrollable"),u&&v),children:(0,k.jsx)("div",{className:c()("".concat(t,"-content"),i),children:d})}))}));C.displayName="ModalDialog";var F=C,T=t(55649),O=t(90808),_=t(29101),R=["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","aria-describedby","aria-label","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"],S={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:F};function D(e){return(0,k.jsx)(g.Z,(0,s.Z)((0,s.Z)({},e),{},{timeout:null}))}function H(e){return(0,k.jsx)(g.Z,(0,s.Z)((0,s.Z)({},e),{},{timeout:null}))}var I=x.forwardRef((function(e,n){var t=e.bsPrefix,r=e.className,a=e.style,g=e.dialogClassName,w=e.contentClassName,P=e.children,C=e.dialogAs,F=e["aria-labelledby"],T=e["aria-describedby"],O=e["aria-label"],_=e.show,S=e.animation,I=e.backdrop,L=e.keyboard,B=e.onEscapeKeyDown,A=e.onShow,z=e.onHide,M=e.container,U=e.autoFocus,W=e.enforceFocus,K=e.restoreFocus,q=e.restoreFocusOptions,V=e.onEntered,J=e.onExit,Y=e.onExiting,$=e.onEnter,G=e.onEntering,Q=e.onExited,X=e.backdropClassName,ee=e.manager,ne=(0,o.Z)(e,R),te=(0,x.useState)({}),re=(0,i.Z)(te,2),ie=re[0],oe=re[1],se=(0,x.useState)(!1),ae=(0,i.Z)(se,2),ce=ae[0],le=ae[1],ue=(0,x.useRef)(!1),de=(0,x.useRef)(!1),fe=(0,x.useRef)(null),he=(0,m.Z)(),me=(0,i.Z)(he,2),ve=me[0],pe=me[1],Ze=(0,p.Z)(n,pe),be=(0,v.Z)(z),xe=(0,N.SC)();t=(0,N.vE)(t,"modal");var je=(0,x.useMemo)((function(){return{onHide:be}}),[be]);function ye(){return ee||(0,y.t)({isRTL:xe})}function ge(e){if(u.Z){var n=ye().getScrollbarWidth()>0,t=e.scrollHeight>(0,d.Z)(e).documentElement.clientHeight;oe({paddingRight:n&&!t?h():void 0,paddingLeft:!n&&t?h():void 0})}}var we=(0,v.Z)((function(){ve&&ge(ve.dialog)}));(0,Z.Z)((function(){(0,f.Z)(window,"resize",we),null==fe.current||fe.current()}));var Ee=function(){ue.current=!0},Ne=function(e){ue.current&&ve&&e.target===ve.dialog&&(de.current=!0),ue.current=!1},ke=function(){le(!0),fe.current=(0,b.Z)(ve.dialog,(function(){le(!1)}))},Pe=function(e){"static"!==I?de.current||e.target!==e.currentTarget?de.current=!1:null==z||z():function(e){e.target===e.currentTarget&&ke()}(e)},Ce=(0,x.useCallback)((function(e){return(0,k.jsx)("div",(0,s.Z)((0,s.Z)({},e),{},{className:c()("".concat(t,"-backdrop"),X,!S&&"show")}))}),[S,X,t]),Fe=(0,s.Z)((0,s.Z)({},a),ie);Fe.display="block";return(0,k.jsx)(E.Z.Provider,{value:je,children:(0,k.jsx)(j.Z,{show:_,ref:Ze,backdrop:I,container:M,keyboard:!0,autoFocus:U,enforceFocus:W,restoreFocus:K,restoreFocusOptions:q,onEscapeKeyDown:function(e){L?null==B||B(e):(e.preventDefault(),"static"===I&&ke())},onShow:A,onHide:z,onEnter:function(e,n){e&&ge(e),null==$||$(e,n)},onEntering:function(e,n){null==G||G(e,n),(0,l.ZP)(window,"resize",we)},onEntered:V,onExit:function(e){null==fe.current||fe.current(),null==J||J(e)},onExiting:Y,onExited:function(e){e&&(e.style.display=""),null==Q||Q(e),(0,f.Z)(window,"resize",we)},manager:ye(),transition:S?D:void 0,backdropTransition:S?H:void 0,renderBackdrop:Ce,renderDialog:function(e){return(0,k.jsx)("div",(0,s.Z)((0,s.Z)({role:"dialog"},e),{},{style:Fe,className:c()(r,t,ce&&"".concat(t,"-static"),!S&&"show"),onClick:I?Pe:void 0,onMouseUp:Ne,"aria-label":O,"aria-labelledby":F,"aria-describedby":T,children:(0,k.jsx)(C,(0,s.Z)((0,s.Z)({},ne),{},{onMouseDown:Ee,className:g,contentClassName:w,children:P}))}))}})})}));I.displayName="Modal",I.defaultProps=S;var L=Object.assign(I,{Body:w.Z,Header:O.Z,Title:_.Z,Footer:T.Z,Dialog:F,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150})},28239:function(e,n,t){"use strict";var r=t(66543);n.Z=(0,r.Z)("modal-body")},55649:function(e,n,t){"use strict";var r=t(66543);n.Z=(0,r.Z)("modal-footer")},90808:function(e,n,t){"use strict";var r=t(1413),i=t(45987),o=t(81694),s=t.n(o),a=t(72791),c=t(10162),l=t(32086),u=t(80184),d=["bsPrefix","className"],f=a.forwardRef((function(e,n){var t=e.bsPrefix,o=e.className,a=(0,i.Z)(e,d);return t=(0,c.vE)(t,"modal-header"),(0,u.jsx)(l.Z,(0,r.Z)((0,r.Z)({ref:n},a),{},{className:s()(o,t)}))}));f.displayName="ModalHeader",f.defaultProps={closeLabel:"Close",closeButton:!1},n.Z=f},29101:function(e,n,t){"use strict";var r=t(66543),i=(0,t(27472).Z)("h4");n.Z=(0,r.Z)("modal-title",{Component:i})},97699:function(e,n,t){var r={"./ckb.js":82871,"./da.js":59651,"./de.js":64639,"./en.js":75213,"./es.js":47068,"./fr.js":78488,"./he.js":93179,"./index.js":57670,"./it.js":63577,"./ja.js":10916,"./ko.js":19920,"./lv.js":39985,"./nl.js":14076,"./pl.js":71676,"./pt_br.js":3204,"./ro.js":59575,"./ru.js":70123,"./se.js":52372,"./ua.js":63854,"./zh_cn.js":79602};function i(e){var n=o(e);return t(n)}function o(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=o,e.exports=i,i.id=97699}}]);
//# sourceMappingURL=232.fe725d29.chunk.js.map