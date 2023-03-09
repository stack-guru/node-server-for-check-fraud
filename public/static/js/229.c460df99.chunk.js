"use strict";(self.webpackChunksashjs=self.webpackChunksashjs||[]).push([[229],{73193:function(n,e,r){var o,t=r(1413),a=r(45987),i=r(4942),c=r(81694),s=r.n(c),u=r(75427),l=r(72791),f=r(18875),d=r(71380),p=r(82777),m=r(67202),v=r(85007),Z=r(80184),h=["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"],g={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function x(n,e){var r=e["offset".concat(n[0].toUpperCase()).concat(n.slice(1))],o=g[n];return r+parseInt((0,u.Z)(e,o[0]),10)+parseInt((0,u.Z)(e,o[1]),10)}var E=(o={},(0,i.Z)(o,f.Wj,"collapse"),(0,i.Z)(o,f.Ix,"collapsing"),(0,i.Z)(o,f.d0,"collapsing"),(0,i.Z)(o,f.cn,"collapse show"),o),y={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:x},b=l.forwardRef((function(n,e){var r=n.onEnter,o=n.onEntering,i=n.onEntered,c=n.onExit,u=n.onExiting,f=n.className,g=n.children,y=n.dimension,b=void 0===y?"height":y,w=n.getDimensionValue,N=void 0===w?x:w,k=(0,a.Z)(n,h),j="function"===typeof b?b():b,F=(0,l.useMemo)((function(){return(0,p.Z)((function(n){n.style[j]="0"}),r)}),[j,r]),O=(0,l.useMemo)((function(){return(0,p.Z)((function(n){var e="scroll".concat(j[0].toUpperCase()).concat(j.slice(1));n.style[j]="".concat(n[e],"px")}),o)}),[j,o]),C=(0,l.useMemo)((function(){return(0,p.Z)((function(n){n.style[j]=null}),i)}),[j,i]),M=(0,l.useMemo)((function(){return(0,p.Z)((function(n){n.style[j]="".concat(N(j,n),"px"),(0,m.Z)(n)}),c)}),[c,N,j]),P=(0,l.useMemo)((function(){return(0,p.Z)((function(n){n.style[j]=null}),u)}),[j,u]);return(0,Z.jsx)(v.Z,(0,t.Z)((0,t.Z)({ref:e,addEndListener:d.Z},k),{},{"aria-expanded":k.role?k.in:null,onEnter:F,onEntering:O,onEntered:C,onExit:M,onExiting:P,childRef:g.ref,children:function(n,e){return l.cloneElement(g,(0,t.Z)((0,t.Z)({},e),{},{className:s()(f,g.props.className,E[n],"width"===j&&"collapse-horizontal")}))}}))}));b.defaultProps=y,e.Z=b},25167:function(n,e,r){r.d(e,{Z:function(){return U}});var o=r(29439),t=r(45987),a=r(1413),i=r(81694),c=r.n(i),s=r(49815),u=r(72791),l=new WeakMap,f=function(n,e){if(n&&e){var r=l.get(e)||new Map;l.set(e,r);var o=r.get(n);return o||((o=e.matchMedia(n)).refCount=0,r.set(o.media,o)),o}};function d(n,e){void 0===e&&(e="undefined"===typeof window?void 0:window);var r=f(n,e),o=(0,u.useState)((function(){return!!r&&r.matches})),t=o[0],a=o[1];return(0,s.Z)((function(){var r=f(n,e);if(!r)return a(!1);var o=l.get(e),t=function(){a(r.matches)};return r.refCount++,r.addListener(t),t(),function(){r.removeListener(t),r.refCount--,r.refCount<=0&&(null==o||o.delete(r.media)),r=void 0}}),[n]),t}var p,m=function(n){var e=Object.keys(n);function r(n,e){return n===e?e:n?n+" and "+e:e}function o(r){var o=function(n){return e[Math.min(e.indexOf(n)+1,e.length-1)]}(r),t=n[o];return"(max-width: "+(t="number"===typeof t?t-.2+"px":"calc("+t+" - 0.2px)")+")"}return function(e,t,a){var i,c;return"object"===typeof e?(i=e,a=t,t=!0):((c={})[e]=t=t||!0,i=c),d((0,u.useMemo)((function(){return Object.entries(i).reduce((function(e,t){var a=t[0],i=t[1];return"up"!==i&&!0!==i||(e=r(e,function(e){var r=n[e];return"number"===typeof r&&(r+="px"),"(min-width: "+r+")"}(a))),"down"!==i&&!0!==i||(e=r(e,o(a))),e}),"")}),[JSON.stringify(i)]),a)}}({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400}),v=r(39007),Z=r(57246),h=r(72709),g=r(66543),x=(0,g.Z)("offcanvas-body"),E=r(4942),y=r(18875),b=r(71380),w=r(85007),N=r(10162),k=r(80184),j=["bsPrefix","className","children"],F=(p={},(0,E.Z)(p,y.d0,"show"),(0,E.Z)(p,y.cn,"show"),p),O=u.forwardRef((function(n,e){var r=n.bsPrefix,o=n.className,i=n.children,s=(0,t.Z)(n,j);return r=(0,N.vE)(r,"offcanvas"),(0,k.jsx)(w.Z,(0,a.Z)((0,a.Z)({ref:e,addEndListener:b.Z},s),{},{childRef:i.ref,children:function(n,e){return u.cloneElement(i,(0,a.Z)((0,a.Z)({},e),{},{className:c()(o,i.props.className,(n===y.d0||n===y.Ix)&&"".concat(r,"-toggling"),F[n])}))}}))}));O.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1},O.displayName="OffcanvasToggling";var C=O,M=r(99820),P=r(5715),S=r(32086),R=["bsPrefix","className"],D=u.forwardRef((function(n,e){var r=n.bsPrefix,o=n.className,i=(0,t.Z)(n,R);return r=(0,N.vE)(r,"offcanvas-header"),(0,k.jsx)(S.Z,(0,a.Z)((0,a.Z)({ref:e},i),{},{className:c()(o,r)}))}));D.displayName="OffcanvasHeader",D.defaultProps={closeLabel:"Close",closeButton:!1};var H=D,L=(0,r(27472).Z)("h5"),T=(0,g.Z)("offcanvas-title",{Component:L}),A=r(99106),I=["bsPrefix","className","children","aria-labelledby","placement","responsive","show","backdrop","keyboard","scroll","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager","renderStaticNode"];function B(n){return(0,k.jsx)(C,(0,a.Z)({},n))}function K(n){return(0,k.jsx)(h.Z,(0,a.Z)({},n))}var V=u.forwardRef((function(n,e){var r=n.bsPrefix,i=n.className,s=n.children,l=n["aria-labelledby"],f=n.placement,d=n.responsive,p=n.show,h=n.backdrop,g=n.keyboard,x=n.scroll,E=n.onEscapeKeyDown,y=n.onShow,b=n.onHide,w=n.container,j=n.autoFocus,F=n.enforceFocus,O=n.restoreFocus,C=n.restoreFocusOptions,S=n.onEntered,R=n.onExit,D=n.onExiting,H=n.onEnter,L=n.onEntering,T=n.onExited,V=n.backdropClassName,U=n.manager,W=n.renderStaticNode,z=(0,t.Z)(n,I),J=(0,u.useRef)();r=(0,N.vE)(r,"offcanvas");var q=((0,u.useContext)(P.Z)||{}).onToggle,G=(0,u.useState)(!1),Q=(0,o.Z)(G,2),X=Q[0],Y=Q[1],$=m(d||"xs","up");(0,u.useEffect)((function(){Y(d?p&&!$:p)}),[p,d,$]);var _=(0,v.Z)((function(){null==q||q(),null==b||b()})),nn=(0,u.useMemo)((function(){return{onHide:_}}),[_]);var en=(0,u.useCallback)((function(n){return(0,k.jsx)("div",(0,a.Z)((0,a.Z)({},n),{},{className:c()("".concat(r,"-backdrop"),V)}))}),[V,r]),rn=function(n){return(0,k.jsx)("div",(0,a.Z)((0,a.Z)((0,a.Z)({},n),z),{},{className:c()(i,d?"".concat(r,"-").concat(d):r,"".concat(r,"-").concat(f)),"aria-labelledby":l,children:s}))};return(0,k.jsxs)(k.Fragment,{children:[!X&&(d||W)&&rn({}),(0,k.jsx)(M.Z.Provider,{value:nn,children:(0,k.jsx)(Z.Z,{show:X,ref:e,backdrop:h,container:w,keyboard:g,autoFocus:j,enforceFocus:F&&!x,restoreFocus:O,restoreFocusOptions:C,onEscapeKeyDown:E,onShow:y,onHide:_,onEnter:function(n){n&&(n.style.visibility="visible");for(var e=arguments.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];null==H||H.apply(void 0,[n].concat(r))},onEntering:L,onEntered:S,onExit:R,onExiting:D,onExited:function(n){n&&(n.style.visibility="");for(var e=arguments.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];null==T||T.apply(void 0,r)},manager:U||(x?(J.current||(J.current=new A.Z({handleContainerOverflow:!1})),J.current):(0,A.t)()),transition:B,backdropTransition:K,renderBackdrop:en,renderDialog:rn})})]})}));V.displayName="Offcanvas",V.defaultProps={show:!1,backdrop:!0,keyboard:!0,scroll:!1,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,placement:"start",renderStaticNode:!1};var U=Object.assign(V,{Body:x,Header:H,Title:T})},82777:function(n,e){e.Z=function(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];return e.filter((function(n){return null!=n})).reduce((function(n,e){if("function"!==typeof e)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===n?e:function(){for(var r=arguments.length,o=new Array(r),t=0;t<r;t++)o[t]=arguments[t];n.apply(this,o),e.apply(this,o)}}),null)}}}]);
//# sourceMappingURL=229.c460df99.chunk.js.map