(self.webpackChunksashjs=self.webpackChunksashjs||[]).push([[6654],{80888:function(e,a,i){"use strict";var r=i(79047);function s(){}function t(){}t.resetWarningCache=s,e.exports=function(){function e(e,a,i,s,t,n){if(n!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function a(){return e}e.isRequired=e;var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:t,resetWarningCache:s};return i.PropTypes=i,i}},52007:function(e,a,i){e.exports=i(80888)()},79047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},11701:function(e,a,i){"use strict";i.d(a,{Ed:function(){return t},UI:function(){return s},XW:function(){return n}});var r=i(72791);function s(e,a){var i=0;return r.Children.map(e,(function(e){return r.isValidElement(e)?a(e,i++):e}))}function t(e,a){var i=0;r.Children.forEach(e,(function(e){r.isValidElement(e)&&a(e,i++)}))}function n(e,a){return r.Children.toArray(e).some((function(e){return r.isValidElement(e)&&e.type===a}))}},70783:function(e,a,i){"use strict";var r=i(1413),s=i(45987),t=i(81694),n=i.n(t),o=i(72791),l=i(52007),c=i.n(l),d=i(80184),f=["as","className","type","tooltip"],u={type:c().string,tooltip:c().bool,as:c().elementType},m=o.forwardRef((function(e,a){var i=e.as,t=void 0===i?"div":i,o=e.className,l=e.type,c=void 0===l?"valid":l,u=e.tooltip,m=void 0!==u&&u,v=(0,s.Z)(e,f);return(0,d.jsx)(t,(0,r.Z)((0,r.Z)({},v),{},{ref:a,className:n()(o,"".concat(c,"-").concat(m?"tooltip":"feedback"))}))}));m.displayName="Feedback",m.propTypes=u,a.Z=m},46654:function(e,a,i){"use strict";i.d(a,{Z:function(){return B}});var r=i(1413),s=i(45987),t=i(81694),n=i.n(t),o=i(52007),l=i.n(o),c=i(72791),d=i(70783),f=i(96882),u=i(84934),m=i(10162),v=i(80184),p=["bsPrefix","className","htmlFor"],b=c.forwardRef((function(e,a){var i=e.bsPrefix,t=e.className,o=e.htmlFor,l=(0,s.Z)(e,p),d=(0,c.useContext)(u.Z).controlId;return i=(0,m.vE)(i,"form-check-label"),(0,v.jsx)("label",(0,r.Z)((0,r.Z)({},l),{},{ref:a,htmlFor:o||d,className:n()(t,i)}))}));b.displayName="FormCheckLabel";var x=b,y=i(11701),h=["id","bsPrefix","bsSwitchPrefix","inline","reverse","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],Z=c.forwardRef((function(e,a){var i=e.id,t=e.bsPrefix,o=e.bsSwitchPrefix,l=e.inline,p=void 0!==l&&l,b=e.reverse,Z=void 0!==b&&b,N=e.disabled,I=void 0!==N&&N,j=e.isValid,P=void 0!==j&&j,k=e.isInvalid,w=void 0!==k&&k,F=e.feedbackTooltip,C=void 0!==F&&F,g=e.feedback,E=e.feedbackType,R=e.className,T=e.style,O=e.title,S=void 0===O?"":O,V=e.type,z=void 0===V?"checkbox":V,L=e.label,_=e.children,W=e.as,H=void 0===W?"input":W,U=(0,s.Z)(e,h);t=(0,m.vE)(t,"form-check"),o=(0,m.vE)(o,"form-switch");var A=(0,c.useContext)(u.Z).controlId,D=(0,c.useMemo)((function(){return{controlId:i||A}}),[A,i]),G=!_&&null!=L&&!1!==L||(0,y.XW)(_,x),M=(0,v.jsx)(f.Z,(0,r.Z)((0,r.Z)({},U),{},{type:"switch"===z?"checkbox":z,ref:a,isValid:P,isInvalid:w,disabled:I,as:H}));return(0,v.jsx)(u.Z.Provider,{value:D,children:(0,v.jsx)("div",{style:T,className:n()(R,G&&t,p&&"".concat(t,"-inline"),Z&&"".concat(t,"-reverse"),"switch"===z&&o),children:_||(0,v.jsxs)(v.Fragment,{children:[M,G&&(0,v.jsx)(x,{title:S,children:L}),g&&(0,v.jsx)(d.Z,{type:E,tooltip:C,children:g})]})})})}));Z.displayName="FormCheck";var N=Object.assign(Z,{Input:f.Z,Label:x}),I=i(74292),j=(0,i(66543).Z)("form-floating"),P=["controlId","as"],k=c.forwardRef((function(e,a){var i=e.controlId,t=e.as,n=void 0===t?"div":t,o=(0,s.Z)(e,P),l=(0,c.useMemo)((function(){return{controlId:i}}),[i]);return(0,v.jsx)(u.Z.Provider,{value:l,children:(0,v.jsx)(n,(0,r.Z)((0,r.Z)({},o),{},{ref:a}))})}));k.displayName="FormGroup";var w=k,F=(i(42391),i(2677)),C=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],g=c.forwardRef((function(e,a){var i=e.as,t=void 0===i?"label":i,o=e.bsPrefix,l=e.column,d=e.visuallyHidden,f=e.className,p=e.htmlFor,b=(0,s.Z)(e,C),x=(0,c.useContext)(u.Z).controlId;o=(0,m.vE)(o,"form-label");var y="col-form-label";"string"===typeof l&&(y="".concat(y," ").concat(y,"-").concat(l));var h=n()(f,o,d&&"visually-hidden",l&&y);return p=p||x,l?(0,v.jsx)(F.Z,(0,r.Z)({ref:a,as:"label",className:h,htmlFor:p},b)):(0,v.jsx)(t,(0,r.Z)({ref:a,className:h,htmlFor:p},b))}));g.displayName="FormLabel",g.defaultProps={column:!1,visuallyHidden:!1};var E=g,R=["bsPrefix","className","id"],T=c.forwardRef((function(e,a){var i=e.bsPrefix,t=e.className,o=e.id,l=(0,s.Z)(e,R),d=(0,c.useContext)(u.Z).controlId;return i=(0,m.vE)(i,"form-range"),(0,v.jsx)("input",(0,r.Z)((0,r.Z)({},l),{},{type:"range",ref:a,className:n()(t,i),id:o||d}))}));T.displayName="FormRange";var O=T,S=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],V=c.forwardRef((function(e,a){var i=e.bsPrefix,t=e.size,o=e.htmlSize,l=e.className,d=e.isValid,f=void 0!==d&&d,p=e.isInvalid,b=void 0!==p&&p,x=e.id,y=(0,s.Z)(e,S),h=(0,c.useContext)(u.Z).controlId;return i=(0,m.vE)(i,"form-select"),(0,v.jsx)("select",(0,r.Z)((0,r.Z)({},y),{},{size:o,ref:a,className:n()(l,i,t&&"".concat(i,"-").concat(t),f&&"is-valid",b&&"is-invalid"),id:x||h}))}));V.displayName="FormSelect";var z=V,L=["bsPrefix","className","as","muted"],_=c.forwardRef((function(e,a){var i=e.bsPrefix,t=e.className,o=e.as,l=void 0===o?"small":o,c=e.muted,d=(0,s.Z)(e,L);return i=(0,m.vE)(i,"form-text"),(0,v.jsx)(l,(0,r.Z)((0,r.Z)({},d),{},{ref:a,className:n()(t,i,c&&"text-muted")}))}));_.displayName="FormText";var W=_,H=c.forwardRef((function(e,a){return(0,v.jsx)(N,(0,r.Z)((0,r.Z)({},e),{},{ref:a,type:"switch"}))}));H.displayName="Switch";var U=Object.assign(H,{Input:N.Input,Label:N.Label}),A=["bsPrefix","className","children","controlId","label"],D=c.forwardRef((function(e,a){var i=e.bsPrefix,t=e.className,o=e.children,l=e.controlId,c=e.label,d=(0,s.Z)(e,A);return i=(0,m.vE)(i,"form-floating"),(0,v.jsxs)(w,(0,r.Z)((0,r.Z)({ref:a,className:n()(t,i),controlId:l},d),{},{children:[o,(0,v.jsx)("label",{htmlFor:l,children:c})]}))}));D.displayName="FloatingLabel";var G=D,M=["className","validated","as"],X={_ref:l().any,validated:l().bool,as:l().elementType},q=c.forwardRef((function(e,a){var i=e.className,t=e.validated,o=e.as,l=void 0===o?"form":o,c=(0,s.Z)(e,M);return(0,v.jsx)(l,(0,r.Z)((0,r.Z)({},c),{},{ref:a,className:n()(i,t&&"was-validated")}))}));q.displayName="Form",q.propTypes=X;var B=Object.assign(q,{Group:w,Control:I.Z,Floating:j,Check:N,Switch:U,Label:E,Text:W,Range:O,Select:z,FloatingLabel:G})},96882:function(e,a,i){"use strict";var r=i(1413),s=i(45987),t=i(81694),n=i.n(t),o=i(72791),l=i(84934),c=i(10162),d=i(80184),f=["id","bsPrefix","className","type","isValid","isInvalid","as"],u=o.forwardRef((function(e,a){var i=e.id,t=e.bsPrefix,u=e.className,m=e.type,v=void 0===m?"checkbox":m,p=e.isValid,b=void 0!==p&&p,x=e.isInvalid,y=void 0!==x&&x,h=e.as,Z=void 0===h?"input":h,N=(0,s.Z)(e,f),I=(0,o.useContext)(l.Z).controlId;return t=(0,c.vE)(t,"form-check-input"),(0,d.jsx)(Z,(0,r.Z)((0,r.Z)({},N),{},{ref:a,type:v,id:i||I,className:n()(u,t,b&&"is-valid",y&&"is-invalid")}))}));u.displayName="FormCheckInput",a.Z=u},84934:function(e,a,i){"use strict";var r=i(72791).createContext({});a.Z=r},74292:function(e,a,i){"use strict";var r=i(1413),s=i(4942),t=i(45987),n=i(81694),o=i.n(n),l=i(72791),c=(i(42391),i(70783)),d=i(84934),f=i(10162),u=i(80184),m=["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"],v=l.forwardRef((function(e,a){var i,n,c=e.bsPrefix,v=e.type,p=e.size,b=e.htmlSize,x=e.id,y=e.className,h=e.isValid,Z=void 0!==h&&h,N=e.isInvalid,I=void 0!==N&&N,j=e.plaintext,P=e.readOnly,k=e.as,w=void 0===k?"input":k,F=(0,t.Z)(e,m),C=(0,l.useContext)(d.Z).controlId;(c=(0,f.vE)(c,"form-control"),j)?i=(0,s.Z)({},"".concat(c,"-plaintext"),!0):(n={},(0,s.Z)(n,c,!0),(0,s.Z)(n,"".concat(c,"-").concat(p),p),i=n);return(0,u.jsx)(w,(0,r.Z)((0,r.Z)({},F),{},{type:v,size:b,ref:a,readOnly:P,id:x||C,className:o()(y,i,Z&&"is-valid",I&&"is-invalid","color"===v&&"".concat(c,"-color"))}))}));v.displayName="FormControl",a.Z=Object.assign(v,{Feedback:c.Z})}}]);
//# sourceMappingURL=6654.4dc25719.chunk.js.map