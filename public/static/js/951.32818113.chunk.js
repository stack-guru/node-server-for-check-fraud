"use strict";(self.webpackChunksashjs=self.webpackChunksashjs||[]).push([[951],{40761:function(t,e,n){n.d(e,{kZ:function(){return b}});var r=n(85652),o=n(44801),i=n(93265),a=n(39265);var f=n(43120),u=n(77902),c=n(10881),s=n(10543),p=n(3676);function d(t,e,n){void 0===n&&(n=!1);var d=(0,a.Re)(e),l=(0,a.Re)(e)&&function(t){var e=t.getBoundingClientRect(),n=(0,p.NM)(e.width)/t.offsetWidth||1,r=(0,p.NM)(e.height)/t.offsetHeight||1;return 1!==n||1!==r}(e),v=(0,c.Z)(e),h=(0,r.Z)(t,l,n),m={scrollLeft:0,scrollTop:0},Z={x:0,y:0};return(d||!d&&!n)&&(("body"!==(0,f.Z)(e)||(0,s.Z)(v))&&(m=function(t){return t!==(0,i.Z)(t)&&(0,a.Re)(t)?{scrollLeft:(e=t).scrollLeft,scrollTop:e.scrollTop}:(0,o.Z)(t);var e}(e)),(0,a.Re)(e)?((Z=(0,r.Z)(e,!0)).x+=e.clientLeft,Z.y+=e.clientTop):v&&(Z.x=(0,u.Z)(v))),{x:h.left+m.scrollLeft-Z.x,y:h.top+m.scrollTop-Z.y,width:h.width,height:h.height}}var l=n(79818),v=n(37467),h=n(35411),m=n(22570);function Z(t){var e=new Map,n=new Set,r=[];function o(t){n.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!n.has(t)){var r=e.get(t);r&&o(r)}})),r.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){n.has(t.name)||o(t)})),r}function g(t){var e;return function(){return e||(e=new Promise((function(n){Promise.resolve().then((function(){e=void 0,n(t())}))}))),e}}var y={placement:"bottom",modifiers:[],strategy:"absolute"};function w(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some((function(t){return!(t&&"function"===typeof t.getBoundingClientRect)}))}function b(t){void 0===t&&(t={});var e=t,n=e.defaultModifiers,r=void 0===n?[]:n,o=e.defaultOptions,i=void 0===o?y:o;return function(t,e,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},y,i),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},f=[],u=!1,c={state:o,setOptions:function(n){var u="function"===typeof n?n(o.options):n;s(),o.options=Object.assign({},i,o.options,u),o.scrollParents={reference:(0,a.kK)(t)?(0,v.Z)(t):t.contextElement?(0,v.Z)(t.contextElement):[],popper:(0,v.Z)(e)};var p=function(t){var e=Z(t);return m.xs.reduce((function(t,n){return t.concat(e.filter((function(t){return t.phase===n})))}),[])}(function(t){var e=t.reduce((function(t,e){var n=t[e.name];return t[e.name]=n?Object.assign({},n,e,{options:Object.assign({},n.options,e.options),data:Object.assign({},n.data,e.data)}):e,t}),{});return Object.keys(e).map((function(t){return e[t]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=p.filter((function(t){return t.enabled})),o.orderedModifiers.forEach((function(t){var e=t.name,n=t.options,r=void 0===n?{}:n,i=t.effect;if("function"===typeof i){var a=i({state:o,name:e,instance:c,options:r}),u=function(){};f.push(a||u)}})),c.update()},forceUpdate:function(){if(!u){var t=o.elements,e=t.reference,n=t.popper;if(w(e,n)){o.rects={reference:d(e,(0,h.Z)(n),"fixed"===o.options.strategy),popper:(0,l.Z)(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(t){return o.modifiersData[t.name]=Object.assign({},t.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,f=i.options,s=void 0===f?{}:f,p=i.name;"function"===typeof a&&(o=a({state:o,options:s,name:p,instance:c})||o)}else o.reset=!1,r=-1}}},update:g((function(){return new Promise((function(t){c.forceUpdate(),t(o)}))})),destroy:function(){s(),u=!0}};if(!w(t,e))return c;function s(){f.forEach((function(t){return t()})),f=[]}return c.setOptions(n).then((function(t){!u&&n.onFirstUpdate&&n.onFirstUpdate(t)})),c}}},71942:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(39265);function o(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&(0,r.Zq)(n)){var o=e;do{if(o&&t.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}},85652:function(t,e,n){n.d(e,{Z:function(){return f}});var r=n(39265),o=n(3676),i=n(93265),a=n(38044);function f(t,e,n){void 0===e&&(e=!1),void 0===n&&(n=!1);var f=t.getBoundingClientRect(),u=1,c=1;e&&(0,r.Re)(t)&&(u=t.offsetWidth>0&&(0,o.NM)(f.width)/t.offsetWidth||1,c=t.offsetHeight>0&&(0,o.NM)(f.height)/t.offsetHeight||1);var s=((0,r.kK)(t)?(0,i.Z)(t):window).visualViewport,p=!(0,a.Z)()&&n,d=(f.left+(p&&s?s.offsetLeft:0))/u,l=(f.top+(p&&s?s.offsetTop:0))/c,v=f.width/u,h=f.height/c;return{width:v,height:h,top:l,right:d+v,bottom:l+h,left:d,x:d,y:l}}},7427:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(93265);function o(t){return(0,r.Z)(t).getComputedStyle(t)}},10881:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(39265);function o(t){return(((0,r.kK)(t)?t.ownerDocument:t.document)||window.document).documentElement}},79818:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(85652);function o(t){var e=(0,r.Z)(t),n=t.offsetWidth,o=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-o)<=1&&(o=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:o}}},43120:function(t,e,n){function r(t){return t?(t.nodeName||"").toLowerCase():null}n.d(e,{Z:function(){return r}})},35411:function(t,e,n){n.d(e,{Z:function(){return p}});var r=n(93265),o=n(43120),i=n(7427),a=n(39265);function f(t){return["table","td","th"].indexOf((0,o.Z)(t))>=0}var u=n(48779),c=n(33118);function s(t){return(0,a.Re)(t)&&"fixed"!==(0,i.Z)(t).position?t.offsetParent:null}function p(t){for(var e=(0,r.Z)(t),n=s(t);n&&f(n)&&"static"===(0,i.Z)(n).position;)n=s(n);return n&&("html"===(0,o.Z)(n)||"body"===(0,o.Z)(n)&&"static"===(0,i.Z)(n).position)?e:n||function(t){var e=/firefox/i.test((0,c.Z)());if(/Trident/i.test((0,c.Z)())&&(0,a.Re)(t)&&"fixed"===(0,i.Z)(t).position)return null;var n=(0,u.Z)(t);for((0,a.Zq)(n)&&(n=n.host);(0,a.Re)(n)&&["html","body"].indexOf((0,o.Z)(n))<0;){var r=(0,i.Z)(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||e&&"filter"===r.willChange||e&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(t)||e}},48779:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n(43120),o=n(10881),i=n(39265);function a(t){return"html"===(0,r.Z)(t)?t:t.assignedSlot||t.parentNode||((0,i.Zq)(t)?t.host:null)||(0,o.Z)(t)}},93265:function(t,e,n){function r(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}n.d(e,{Z:function(){return r}})},44801:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(93265);function o(t){var e=(0,r.Z)(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}},77902:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n(85652),o=n(10881),i=n(44801);function a(t){return(0,r.Z)((0,o.Z)(t)).left+(0,i.Z)(t).scrollLeft}},39265:function(t,e,n){n.d(e,{Re:function(){return i},Zq:function(){return a},kK:function(){return o}});var r=n(93265);function o(t){return t instanceof(0,r.Z)(t).Element||t instanceof Element}function i(t){return t instanceof(0,r.Z)(t).HTMLElement||t instanceof HTMLElement}function a(t){return"undefined"!==typeof ShadowRoot&&(t instanceof(0,r.Z)(t).ShadowRoot||t instanceof ShadowRoot)}},38044:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(33118);function o(){return!/^((?!chrome|android).)*safari/i.test((0,r.Z)())}},10543:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(7427);function o(t){var e=(0,r.Z)(t),n=e.overflow,o=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+o)}},37467:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n(48779),o=n(10543),i=n(43120),a=n(39265);function f(t){return["html","body","#document"].indexOf((0,i.Z)(t))>=0?t.ownerDocument.body:(0,a.Re)(t)&&(0,o.Z)(t)?t:f((0,r.Z)(t))}var u=n(93265);function c(t,e){var n;void 0===e&&(e=[]);var i=f(t),a=i===(null==(n=t.ownerDocument)?void 0:n.body),s=(0,u.Z)(i),p=a?[s].concat(s.visualViewport||[],(0,o.Z)(i)?i:[]):i,d=e.concat(p);return a?d:d.concat(c((0,r.Z)(p)))}},22570:function(t,e,n){n.d(e,{BL:function(){return c},Ct:function(){return m},F2:function(){return i},I:function(){return o},Pj:function(){return d},YP:function(){return v},bw:function(){return h},d7:function(){return f},k5:function(){return l},mv:function(){return u},t$:function(){return a},ut:function(){return s},we:function(){return r},xs:function(){return Z},zV:function(){return p}});var r="top",o="bottom",i="right",a="left",f="auto",u=[r,o,i,a],c="start",s="end",p="clippingParents",d="viewport",l="popper",v="reference",h=u.reduce((function(t,e){return t.concat([e+"-"+c,e+"-"+s])}),[]),m=[].concat(u,[f]).reduce((function(t,e){return t.concat([e,e+"-"+c,e+"-"+s])}),[]),Z=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"]},78702:function(t,e,n){var r=n(65532),o=n(79818),i=n(71942),a=n(35411),f=n(65376),u=n(84666),c=n(1340),s=n(42031),p=n(22570),d=function(t,e){return t="function"===typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t,(0,c.Z)("number"!==typeof t?t:(0,s.Z)(t,p.mv))};e.Z={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,n=t.state,i=t.name,c=t.options,s=n.elements.arrow,l=n.modifiersData.popperOffsets,v=(0,r.Z)(n.placement),h=(0,f.Z)(v),m=[p.t$,p.F2].indexOf(v)>=0?"height":"width";if(s&&l){var Z=d(c.padding,n),g=(0,o.Z)(s),y="y"===h?p.we:p.t$,w="y"===h?p.I:p.F2,b=n.rects.reference[m]+n.rects.reference[h]-l[h]-n.rects.popper[m],x=l[h]-n.rects.reference[h],O=(0,a.Z)(s),k=O?"y"===h?O.clientHeight||0:O.clientWidth||0:0,j=b/2-x/2,D=Z[y],E=k-g[m]-Z[w],L=k/2-g[m]/2+j,R=(0,u.u)(D,L,E),M=h;n.modifiersData[i]=((e={})[M]=R,e.centerOffset=R-L,e)}},effect:function(t){var e=t.state,n=t.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=e.elements.popper.querySelector(r)))&&(0,i.Z)(e.elements.popper,r)&&(e.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]}},19224:function(t,e,n){var r=n(22570),o=n(35411),i=n(93265),a=n(10881),f=n(7427),u=n(65532),c=n(35227),s=n(3676),p={top:"auto",right:"auto",bottom:"auto",left:"auto"};function d(t){var e,n=t.popper,u=t.popperRect,c=t.placement,d=t.variation,l=t.offsets,v=t.position,h=t.gpuAcceleration,m=t.adaptive,Z=t.roundOffsets,g=t.isFixed,y=l.x,w=void 0===y?0:y,b=l.y,x=void 0===b?0:b,O="function"===typeof Z?Z({x:w,y:x}):{x:w,y:x};w=O.x,x=O.y;var k=l.hasOwnProperty("x"),j=l.hasOwnProperty("y"),D=r.t$,E=r.we,L=window;if(m){var R=(0,o.Z)(n),M="clientHeight",F="clientWidth";if(R===(0,i.Z)(n)&&(R=(0,a.Z)(n),"static"!==(0,f.Z)(R).position&&"absolute"===v&&(M="scrollHeight",F="scrollWidth")),c===r.we||(c===r.t$||c===r.F2)&&d===r.ut)E=r.I,x-=(g&&R===L&&L.visualViewport?L.visualViewport.height:R[M])-u.height,x*=h?1:-1;if(c===r.t$||(c===r.we||c===r.I)&&d===r.ut)D=r.F2,w-=(g&&R===L&&L.visualViewport?L.visualViewport.width:R[F])-u.width,w*=h?1:-1}var A,P=Object.assign({position:v},m&&p),V=!0===Z?function(t){var e=t.x,n=t.y,r=window.devicePixelRatio||1;return{x:(0,s.NM)(e*r)/r||0,y:(0,s.NM)(n*r)/r||0}}({x:w,y:x}):{x:w,y:x};return w=V.x,x=V.y,h?Object.assign({},P,((A={})[E]=j?"0":"",A[D]=k?"0":"",A.transform=(L.devicePixelRatio||1)<=1?"translate("+w+"px, "+x+"px)":"translate3d("+w+"px, "+x+"px, 0)",A)):Object.assign({},P,((e={})[E]=j?x+"px":"",e[D]=k?w+"px":"",e.transform="",e))}e.Z={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,n=t.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,f=n.roundOffsets,s=void 0===f||f,p={placement:(0,u.Z)(e.placement),variation:(0,c.Z)(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:o,isFixed:"fixed"===e.options.strategy};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,d(Object.assign({},p,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:a,roundOffsets:s})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,d(Object.assign({},p,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}}},71217:function(t,e,n){var r=n(93265),o={passive:!0};e.Z={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,n=t.instance,i=t.options,a=i.scroll,f=void 0===a||a,u=i.resize,c=void 0===u||u,s=(0,r.Z)(e.elements.popper),p=[].concat(e.scrollParents.reference,e.scrollParents.popper);return f&&p.forEach((function(t){t.addEventListener("scroll",n.update,o)})),c&&s.addEventListener("resize",n.update,o),function(){f&&p.forEach((function(t){t.removeEventListener("scroll",n.update,o)})),c&&s.removeEventListener("resize",n.update,o)}},data:{}}},95468:function(t,e,n){n.d(e,{Z:function(){return p}});var r={left:"right",right:"left",bottom:"top",top:"bottom"};function o(t){return t.replace(/left|right|bottom|top/g,(function(t){return r[t]}))}var i=n(65532),a={start:"end",end:"start"};function f(t){return t.replace(/start|end/g,(function(t){return a[t]}))}var u=n(79913),c=n(35227),s=n(22570);var p={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var a=n.mainAxis,p=void 0===a||a,d=n.altAxis,l=void 0===d||d,v=n.fallbackPlacements,h=n.padding,m=n.boundary,Z=n.rootBoundary,g=n.altBoundary,y=n.flipVariations,w=void 0===y||y,b=n.allowedAutoPlacements,x=e.options.placement,O=(0,i.Z)(x),k=v||(O===x||!w?[o(x)]:function(t){if((0,i.Z)(t)===s.d7)return[];var e=o(t);return[f(t),e,f(e)]}(x)),j=[x].concat(k).reduce((function(t,n){return t.concat((0,i.Z)(n)===s.d7?function(t,e){void 0===e&&(e={});var n=e,r=n.placement,o=n.boundary,a=n.rootBoundary,f=n.padding,p=n.flipVariations,d=n.allowedAutoPlacements,l=void 0===d?s.Ct:d,v=(0,c.Z)(r),h=v?p?s.bw:s.bw.filter((function(t){return(0,c.Z)(t)===v})):s.mv,m=h.filter((function(t){return l.indexOf(t)>=0}));0===m.length&&(m=h);var Z=m.reduce((function(e,n){return e[n]=(0,u.Z)(t,{placement:n,boundary:o,rootBoundary:a,padding:f})[(0,i.Z)(n)],e}),{});return Object.keys(Z).sort((function(t,e){return Z[t]-Z[e]}))}(e,{placement:n,boundary:m,rootBoundary:Z,padding:h,flipVariations:w,allowedAutoPlacements:b}):n)}),[]),D=e.rects.reference,E=e.rects.popper,L=new Map,R=!0,M=j[0],F=0;F<j.length;F++){var A=j[F],P=(0,i.Z)(A),V=(0,c.Z)(A)===s.BL,B=[s.we,s.I].indexOf(P)>=0,W=B?"width":"height",H=(0,u.Z)(e,{placement:A,boundary:m,rootBoundary:Z,altBoundary:g,padding:h}),I=B?V?s.F2:s.t$:V?s.I:s.we;D[W]>E[W]&&(I=o(I));var q=o(I),C=[];if(p&&C.push(H[P]<=0),l&&C.push(H[I]<=0,H[q]<=0),C.every((function(t){return t}))){M=A,R=!1;break}L.set(A,C)}if(R)for(var T=function(t){var e=j.find((function(e){var n=L.get(e);if(n)return n.slice(0,t).every((function(t){return t}))}));if(e)return M=e,"break"},N=w?3:1;N>0;N--){if("break"===T(N))break}e.placement!==M&&(e.modifiersData[r]._skip=!0,e.placement=M,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}}},41668:function(t,e,n){var r=n(22570),o=n(79913);function i(t,e,n){return void 0===n&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function a(t){return[r.we,r.F2,r.I,r.t$].some((function(e){return t[e]>=0}))}e.Z={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,n=t.name,r=e.rects.reference,f=e.rects.popper,u=e.modifiersData.preventOverflow,c=(0,o.Z)(e,{elementContext:"reference"}),s=(0,o.Z)(e,{altBoundary:!0}),p=i(c,r),d=i(s,f,u),l=a(p),v=a(d);e.modifiersData[n]={referenceClippingOffsets:p,popperEscapeOffsets:d,isReferenceHidden:l,hasPopperEscaped:v},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":v})}}},5934:function(t,e,n){var r=n(65532),o=n(22570);e.Z={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,n=t.options,i=t.name,a=n.offset,f=void 0===a?[0,0]:a,u=o.Ct.reduce((function(t,n){return t[n]=function(t,e,n){var i=(0,r.Z)(t),a=[o.t$,o.we].indexOf(i)>=0?-1:1,f="function"===typeof n?n(Object.assign({},e,{placement:t})):n,u=f[0],c=f[1];return u=u||0,c=(c||0)*a,[o.t$,o.F2].indexOf(i)>=0?{x:c,y:u}:{x:u,y:c}}(n,e.rects,f),t}),{}),c=u[e.placement],s=c.x,p=c.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=s,e.modifiersData.popperOffsets.y+=p),e.modifiersData[i]=u}}},60545:function(t,e,n){var r=n(76425);e.Z={name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,n=t.name;e.modifiersData[n]=(0,r.Z)({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}}},29790:function(t,e,n){n.d(e,{Z:function(){return l}});var r=n(22570),o=n(65532),i=n(65376);var a=n(84666),f=n(79818),u=n(35411),c=n(79913),s=n(35227),p=n(59139),d=n(3676);var l={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,l=t.name,v=n.mainAxis,h=void 0===v||v,m=n.altAxis,Z=void 0!==m&&m,g=n.boundary,y=n.rootBoundary,w=n.altBoundary,b=n.padding,x=n.tether,O=void 0===x||x,k=n.tetherOffset,j=void 0===k?0:k,D=(0,c.Z)(e,{boundary:g,rootBoundary:y,padding:b,altBoundary:w}),E=(0,o.Z)(e.placement),L=(0,s.Z)(e.placement),R=!L,M=(0,i.Z)(E),F="x"===M?"y":"x",A=e.modifiersData.popperOffsets,P=e.rects.reference,V=e.rects.popper,B="function"===typeof j?j(Object.assign({},e.rects,{placement:e.placement})):j,W="number"===typeof B?{mainAxis:B,altAxis:B}:Object.assign({mainAxis:0,altAxis:0},B),H=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,I={x:0,y:0};if(A){if(h){var q,C="y"===M?r.we:r.t$,T="y"===M?r.I:r.F2,N="y"===M?"height":"width",$=A[M],S=$+D[C],K=$-D[T],z=O?-V[N]/2:0,U=L===r.BL?P[N]:V[N],Y=L===r.BL?-V[N]:-P[N],_=e.elements.arrow,X=O&&_?(0,f.Z)(_):{width:0,height:0},G=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:(0,p.Z)(),J=G[C],Q=G[T],tt=(0,a.u)(0,P[N],X[N]),et=R?P[N]/2-z-tt-J-W.mainAxis:U-tt-J-W.mainAxis,nt=R?-P[N]/2+z+tt+Q+W.mainAxis:Y+tt+Q+W.mainAxis,rt=e.elements.arrow&&(0,u.Z)(e.elements.arrow),ot=rt?"y"===M?rt.clientTop||0:rt.clientLeft||0:0,it=null!=(q=null==H?void 0:H[M])?q:0,at=$+et-it-ot,ft=$+nt-it,ut=(0,a.u)(O?(0,d.VV)(S,at):S,$,O?(0,d.Fp)(K,ft):K);A[M]=ut,I[M]=ut-$}if(Z){var ct,st="x"===M?r.we:r.t$,pt="x"===M?r.I:r.F2,dt=A[F],lt="y"===F?"height":"width",vt=dt+D[st],ht=dt-D[pt],mt=-1!==[r.we,r.t$].indexOf(E),Zt=null!=(ct=null==H?void 0:H[F])?ct:0,gt=mt?vt:dt-P[lt]-V[lt]-Zt+W.altAxis,yt=mt?dt+P[lt]+V[lt]-Zt-W.altAxis:ht,wt=O&&mt?(0,a.q)(gt,dt,yt):(0,a.u)(O?gt:vt,dt,O?yt:ht);A[F]=wt,I[F]=wt-dt}e.modifiersData[l]=I}},requiresIfExists:["offset"]}},76425:function(t,e,n){n.d(e,{Z:function(){return f}});var r=n(65532),o=n(35227),i=n(65376),a=n(22570);function f(t){var e,n=t.reference,f=t.element,u=t.placement,c=u?(0,r.Z)(u):null,s=u?(0,o.Z)(u):null,p=n.x+n.width/2-f.width/2,d=n.y+n.height/2-f.height/2;switch(c){case a.we:e={x:p,y:n.y-f.height};break;case a.I:e={x:p,y:n.y+n.height};break;case a.F2:e={x:n.x+n.width,y:d};break;case a.t$:e={x:n.x-f.width,y:d};break;default:e={x:n.x,y:n.y}}var l=c?(0,i.Z)(c):null;if(null!=l){var v="y"===l?"height":"width";switch(s){case a.BL:e[l]=e[l]-(n[v]/2-f[v]/2);break;case a.ut:e[l]=e[l]+(n[v]/2-f[v]/2)}}return e}},79913:function(t,e,n){n.d(e,{Z:function(){return k}});var r=n(22570),o=n(93265),i=n(10881),a=n(77902),f=n(38044);var u=n(7427),c=n(44801),s=n(3676);var p=n(37467),d=n(35411),l=n(39265),v=n(85652),h=n(48779),m=n(71942),Z=n(43120);function g(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function y(t,e,n){return e===r.Pj?g(function(t,e){var n=(0,o.Z)(t),r=(0,i.Z)(t),u=n.visualViewport,c=r.clientWidth,s=r.clientHeight,p=0,d=0;if(u){c=u.width,s=u.height;var l=(0,f.Z)();(l||!l&&"fixed"===e)&&(p=u.offsetLeft,d=u.offsetTop)}return{width:c,height:s,x:p+(0,a.Z)(t),y:d}}(t,n)):(0,l.kK)(e)?function(t,e){var n=(0,v.Z)(t,!1,"fixed"===e);return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}(e,n):g(function(t){var e,n=(0,i.Z)(t),r=(0,c.Z)(t),o=null==(e=t.ownerDocument)?void 0:e.body,f=(0,s.Fp)(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),p=(0,s.Fp)(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),d=-r.scrollLeft+(0,a.Z)(t),l=-r.scrollTop;return"rtl"===(0,u.Z)(o||n).direction&&(d+=(0,s.Fp)(n.clientWidth,o?o.clientWidth:0)-f),{width:f,height:p,x:d,y:l}}((0,i.Z)(t)))}function w(t,e,n,r){var o="clippingParents"===e?function(t){var e=(0,p.Z)((0,h.Z)(t)),n=["absolute","fixed"].indexOf((0,u.Z)(t).position)>=0&&(0,l.Re)(t)?(0,d.Z)(t):t;return(0,l.kK)(n)?e.filter((function(t){return(0,l.kK)(t)&&(0,m.Z)(t,n)&&"body"!==(0,Z.Z)(t)})):[]}(t):[].concat(e),i=[].concat(o,[n]),a=i[0],f=i.reduce((function(e,n){var o=y(t,n,r);return e.top=(0,s.Fp)(o.top,e.top),e.right=(0,s.VV)(o.right,e.right),e.bottom=(0,s.VV)(o.bottom,e.bottom),e.left=(0,s.Fp)(o.left,e.left),e}),y(t,a,r));return f.width=f.right-f.left,f.height=f.bottom-f.top,f.x=f.left,f.y=f.top,f}var b=n(76425),x=n(1340),O=n(42031);function k(t,e){void 0===e&&(e={});var n=e,o=n.placement,a=void 0===o?t.placement:o,f=n.strategy,u=void 0===f?t.strategy:f,c=n.boundary,s=void 0===c?r.zV:c,p=n.rootBoundary,d=void 0===p?r.Pj:p,h=n.elementContext,m=void 0===h?r.k5:h,Z=n.altBoundary,y=void 0!==Z&&Z,k=n.padding,j=void 0===k?0:k,D=(0,x.Z)("number"!==typeof j?j:(0,O.Z)(j,r.mv)),E=m===r.k5?r.YP:r.k5,L=t.rects.popper,R=t.elements[y?E:m],M=w((0,l.kK)(R)?R:R.contextElement||(0,i.Z)(t.elements.popper),s,d,u),F=(0,v.Z)(t.elements.reference),A=(0,b.Z)({reference:F,element:L,strategy:"absolute",placement:a}),P=g(Object.assign({},L,A)),V=m===r.k5?P:F,B={top:M.top-V.top+D.top,bottom:V.bottom-M.bottom+D.bottom,left:M.left-V.left+D.left,right:V.right-M.right+D.right},W=t.modifiersData.offset;if(m===r.k5&&W){var H=W[a];Object.keys(B).forEach((function(t){var e=[r.F2,r.I].indexOf(t)>=0?1:-1,n=[r.we,r.I].indexOf(t)>=0?"y":"x";B[t]+=H[n]*e}))}return B}},42031:function(t,e,n){function r(t,e){return e.reduce((function(e,n){return e[n]=t,e}),{})}n.d(e,{Z:function(){return r}})},65532:function(t,e,n){function r(t){return t.split("-")[0]}n.d(e,{Z:function(){return r}})},59139:function(t,e,n){function r(){return{top:0,right:0,bottom:0,left:0}}n.d(e,{Z:function(){return r}})},65376:function(t,e,n){function r(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}n.d(e,{Z:function(){return r}})},35227:function(t,e,n){function r(t){return t.split("-")[1]}n.d(e,{Z:function(){return r}})},3676:function(t,e,n){n.d(e,{Fp:function(){return r},NM:function(){return i},VV:function(){return o}});var r=Math.max,o=Math.min,i=Math.round},1340:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(59139);function o(t){return Object.assign({},(0,r.Z)(),t)}},33118:function(t,e,n){function r(){var t=navigator.userAgentData;return null!=t&&t.brands?t.brands.map((function(t){return t.brand+"/"+t.version})).join(" "):navigator.userAgent}n.d(e,{Z:function(){return r}})},84666:function(t,e,n){n.d(e,{q:function(){return i},u:function(){return o}});var r=n(3676);function o(t,e,n){return(0,r.Fp)(t,(0,r.VV)(e,n))}function i(t,e,n){var r=o(t,e,n);return r>n?n:r}}}]);
//# sourceMappingURL=951.32818113.chunk.js.map