(self.webpackChunksashjs=self.webpackChunksashjs||[]).push([[1439],{80888:function(t,e,n){"use strict";var r=n(79047);function o(){}function a(){}a.resetWarningCache=o,t.exports=function(){function t(t,e,n,o,a,s){if(s!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function e(){return t}t.isRequired=t;var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},52007:function(t,e,n){t.exports=n(80888)()},79047:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},9140:function(t,e,n){"use strict";n.d(e,{Z:function(){return N}});var r=n(1413),o=n(45987),a=n(81694),s=n.n(a),i=n(72791),c=n(10162),u=n(66543),l=n(27472),f=n(80184),p=["bsPrefix","className","variant","as"],m=i.forwardRef((function(t,e){var n=t.bsPrefix,a=t.className,i=t.variant,u=t.as,l=void 0===u?"img":u,m=(0,o.Z)(t,p),d=(0,c.vE)(n,"card-img");return(0,f.jsx)(l,(0,r.Z)({ref:e,className:s()(i?"".concat(d,"-").concat(i):d,a)},m))}));m.displayName="CardImg";var d=m,v=n(96040),h=["bsPrefix","className","as"],y=i.forwardRef((function(t,e){var n=t.bsPrefix,a=t.className,u=t.as,l=void 0===u?"div":u,p=(0,o.Z)(t,h),m=(0,c.vE)(n,"card-header"),d=(0,i.useMemo)((function(){return{cardHeaderBsPrefix:m}}),[m]);return(0,f.jsx)(v.Z.Provider,{value:d,children:(0,f.jsx)(l,(0,r.Z)((0,r.Z)({ref:e},p),{},{className:s()(a,m)}))})}));y.displayName="CardHeader";var T=y,b=["bsPrefix","className","bg","text","border","body","children","as"],S=(0,l.Z)("h5"),P=(0,l.Z)("h6"),g=(0,u.Z)("card-body"),D=(0,u.Z)("card-title",{Component:S}),C=(0,u.Z)("card-subtitle",{Component:P}),w=(0,u.Z)("card-link",{Component:"a"}),O=(0,u.Z)("card-text",{Component:"p"}),x=(0,u.Z)("card-footer"),Z=(0,u.Z)("card-img-overlay"),E=i.forwardRef((function(t,e){var n=t.bsPrefix,a=t.className,i=t.bg,u=t.text,l=t.border,p=t.body,m=t.children,d=t.as,v=void 0===d?"div":d,h=(0,o.Z)(t,b),y=(0,c.vE)(n,"card");return(0,f.jsx)(v,(0,r.Z)((0,r.Z)({ref:e},h),{},{className:s()(a,y,i&&"bg-".concat(i),u&&"text-".concat(u),l&&"border-".concat(l)),children:p?(0,f.jsx)(g,{children:m}):m}))}));E.displayName="Card",E.defaultProps={body:!1};var N=Object.assign(E,{Img:d,Title:D,Subtitle:C,Body:g,Link:w,Text:O,Header:T,Footer:x,ImgOverlay:Z})},96040:function(t,e,n){"use strict";var r=n(72791).createContext(null);r.displayName="CardHeaderContext",e.Z=r},2677:function(t,e,n){"use strict";var r=n(29439),o=n(1413),a=n(45987),s=n(81694),i=n.n(s),c=n(72791),u=n(10162),l=n(80184),f=["as","bsPrefix","className"],p=["className"];var m=c.forwardRef((function(t,e){var n=function(t){var e=t.as,n=t.bsPrefix,r=t.className,s=(0,a.Z)(t,f);n=(0,u.vE)(n,"col");var c=(0,u.pi)(),l=(0,u.zG)(),p=[],m=[];return c.forEach((function(t){var e,r,o,a=s[t];delete s[t],"object"===typeof a&&null!=a?(e=a.span,r=a.offset,o=a.order):e=a;var i=t!==l?"-".concat(t):"";e&&p.push(!0===e?"".concat(n).concat(i):"".concat(n).concat(i,"-").concat(e)),null!=o&&m.push("order".concat(i,"-").concat(o)),null!=r&&m.push("offset".concat(i,"-").concat(r))})),[(0,o.Z)((0,o.Z)({},s),{},{className:i().apply(void 0,[r].concat(p,m))}),{as:e,bsPrefix:n,spans:p}]}(t),s=(0,r.Z)(n,2),c=s[0],m=c.className,d=(0,a.Z)(c,p),v=s[1],h=v.as,y=void 0===h?"div":h,T=v.bsPrefix,b=v.spans;return(0,l.jsx)(y,(0,o.Z)((0,o.Z)({},d),{},{ref:e,className:i()(m,!b.length&&T)}))}));m.displayName="Col",e.Z=m},89743:function(t,e,n){"use strict";var r=n(1413),o=n(45987),a=n(81694),s=n.n(a),i=n(72791),c=n(10162),u=n(80184),l=["bsPrefix","className","as"],f=i.forwardRef((function(t,e){var n=t.bsPrefix,a=t.className,i=t.as,f=void 0===i?"div":i,p=(0,o.Z)(t,l),m=(0,c.vE)(n,"row"),d=(0,c.pi)(),v=(0,c.zG)(),h="".concat(m,"-cols"),y=[];return d.forEach((function(t){var e,n=p[t];delete p[t],e=null!=n&&"object"===typeof n?n.cols:n;var r=t!==v?"-".concat(t):"";null!=e&&y.push("".concat(h).concat(r,"-").concat(e))})),(0,u.jsx)(f,(0,r.Z)((0,r.Z)({ref:e},p),{},{className:s().apply(void 0,[a,m].concat(y))}))}));f.displayName="Row",e.Z=f},66543:function(t,e,n){"use strict";n.d(e,{Z:function(){return m}});var r=n(1413),o=n(45987),a=n(81694),s=n.n(a),i=/-(.)/g;var c=n(72791),u=n(10162),l=n(80184),f=["className","bsPrefix","as"],p=function(t){return t[0].toUpperCase()+(e=t,e.replace(i,(function(t,e){return e.toUpperCase()}))).slice(1);var e};function m(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.displayName,a=void 0===n?p(t):n,i=e.Component,m=e.defaultProps,d=c.forwardRef((function(e,n){var a=e.className,c=e.bsPrefix,p=e.as,m=void 0===p?i||"div":p,d=(0,o.Z)(e,f),v=(0,u.vE)(c,t);return(0,l.jsx)(m,(0,r.Z)({ref:n,className:s()(a,v)},d))}));return d.defaultProps=m,d.displayName=a,d}},27472:function(t,e,n){"use strict";var r=n(1413),o=n(72791),a=n(81694),s=n.n(a),i=n(80184);e.Z=function(t){return o.forwardRef((function(e,n){return(0,i.jsx)("div",(0,r.Z)((0,r.Z)({},e),{},{ref:n,className:s()(e.className,t)}))}))}},92702:function(t,e,n){"use strict";var r=n(72791),o=n(52007);function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}function c(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function u(t){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},u(t)}function l(t,e){return l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},l(t,e)}function f(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function m(t){return function(t){if(Array.isArray(t))return d(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function v(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=String(t);if(0===e)return n;var r=n.match(/(.*?)([0-9]+)(.*)/),o=r?r[1]:"",a=r?r[3]:"",s=r?r[2]:n,i=s.length>=e?s:(m(Array(e)).map((function(){return"0"})).join("")+s).slice(-1*e);return"".concat(o).concat(i).concat(a)}var h={daysInHours:!1,zeroPadTime:2};function y(t,e){var n=t.days,r=t.hours,o=t.minutes,a=t.seconds,s=Object.assign(Object.assign({},h),e),i=s.daysInHours,c=s.zeroPadTime,u=s.zeroPadDays,l=void 0===u?c:u,f=Math.min(2,c),p=i?v(r+24*n,c):v(r,f);return{days:i?"":v(n,l),hours:p,minutes:v(o,f),seconds:v(a,f)}}var T=function(t){c(n,t);var e=p(n);function n(){var t;return a(this,n),(t=e.apply(this,arguments)).state={count:t.props.count||3},t.startCountdown=function(){t.interval=window.setInterval((function(){0===t.state.count-1?(t.stopCountdown(),t.props.onComplete&&t.props.onComplete()):t.setState((function(t){return{count:t.count-1}}))}),1e3)},t.stopCountdown=function(){clearInterval(t.interval)},t.addTime=function(e){t.stopCountdown(),t.setState((function(t){return{count:t.count+e}}),t.startCountdown)},t}return i(n,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?(0,r.cloneElement)(this.props.children,{count:this.state.count}):null}}]),n}(r.Component);T.propTypes={count:o.number,children:o.element,onComplete:o.func};var b=function(t){c(n,t);var e=p(n);function n(t){var o;if(a(this,n),(o=e.call(this,t)).mounted=!1,o.initialTimestamp=o.calcOffsetStartTimestamp(),o.offsetStartTimestamp=o.props.autoStart?0:o.initialTimestamp,o.offsetTime=0,o.legacyMode=!1,o.legacyCountdownRef=(0,r.createRef)(),o.tick=function(){var t=o.calcTimeDelta(),e=t.completed&&!o.props.overtime?void 0:o.props.onTick;o.setTimeDeltaState(t,void 0,e)},o.start=function(){if(!o.isStarted()){var t=o.offsetStartTimestamp;o.offsetStartTimestamp=0,o.offsetTime+=t?o.calcOffsetStartTimestamp()-t:0;var e=o.calcTimeDelta();o.setTimeDeltaState(e,"STARTED",o.props.onStart),o.props.controlled||e.completed&&!o.props.overtime||(o.clearTimer(),o.interval=window.setInterval(o.tick,o.props.intervalDelay))}},o.pause=function(){o.isPaused()||(o.clearTimer(),o.offsetStartTimestamp=o.calcOffsetStartTimestamp(),o.setTimeDeltaState(o.state.timeDelta,"PAUSED",o.props.onPause))},o.stop=function(){o.isStopped()||(o.clearTimer(),o.offsetStartTimestamp=o.calcOffsetStartTimestamp(),o.offsetTime=o.offsetStartTimestamp-o.initialTimestamp,o.setTimeDeltaState(o.calcTimeDelta(),"STOPPED",o.props.onStop))},o.isStarted=function(){return o.isStatus("STARTED")},o.isPaused=function(){return o.isStatus("PAUSED")},o.isStopped=function(){return o.isStatus("STOPPED")},o.isCompleted=function(){return o.isStatus("COMPLETED")},t.date){var s=o.calcTimeDelta();o.state={timeDelta:s,status:s.completed?"COMPLETED":"STOPPED"}}else o.legacyMode=!0;return o}return i(n,[{key:"componentDidMount",value:function(){this.legacyMode||(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(t){this.legacyMode||this.props.date!==t.date&&(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0,this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var t=this.props,e=t.date,n=t.now,r=t.precision,o=t.controlled,a=t.overtime;return function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.now,o=void 0===r?Date.now:r,a=n.precision,s=void 0===a?0:a,i=n.controlled,c=n.offsetTime,u=void 0===c?0:c,l=n.overtime;e="string"===typeof t?new Date(t).getTime():t instanceof Date?t.getTime():t,i||(e+=u);var f=i?e:e-o(),p=Math.min(20,Math.max(0,s)),m=Math.round(1e3*parseFloat(((l?f:Math.max(0,f))/1e3).toFixed(p))),d=Math.abs(m)/1e3;return{total:m,days:Math.floor(d/86400),hours:Math.floor(d/3600%24),minutes:Math.floor(d/60%60),seconds:Math.floor(d%60),milliseconds:Number((d%1*1e3).toFixed()),completed:m<=0}}(e,{now:n,precision:r,controlled:o,offsetTime:this.offsetTime,overtime:a})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(t){this.legacyCountdownRef.current.addTime(t)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(t){return this.state.status===t}},{key:"setTimeDeltaState",value:function(t,e,n){var r=this;if(this.mounted){var o=t.completed&&!this.state.timeDelta.completed,a=t.completed&&"STARTED"===e;o&&!this.props.overtime&&this.clearTimer();return this.setState((function(n){var o=e||n.status;return t.completed&&!r.props.overtime?o="COMPLETED":e||"COMPLETED"!==o||(o="STOPPED"),{timeDelta:t,status:o}}),(function(){n&&n(r.state.timeDelta),r.props.onComplete&&(o||a)&&r.props.onComplete(t,a)}))}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var t=this.props,e=t.daysInHours,n=t.zeroPadTime,r=t.zeroPadDays,o=this.state.timeDelta;return Object.assign(Object.assign({},o),{api:this.getApi(),props:this.props,formatted:y(o,{daysInHours:e,zeroPadTime:n,zeroPadDays:r})})}},{key:"render",value:function(){if(this.legacyMode){var t=this.props,e=t.count,n=t.children,o=t.onComplete;return(0,r.createElement)(T,{ref:this.legacyCountdownRef,count:e,onComplete:o},n)}var a=this.props,s=a.className,i=a.overtime,c=a.children,u=a.renderer,l=this.getRenderProps();if(u)return u(l);if(c&&this.state.timeDelta.completed&&!i)return(0,r.cloneElement)(c,{countdown:l});var f=l.formatted,p=f.days,m=f.hours,d=f.minutes,v=f.seconds;return(0,r.createElement)("span",{className:s},l.total<0?"-":"",p,p?":":"",m,":",d,":",v)}}]),n}(r.Component);b.defaultProps=Object.assign(Object.assign({},h),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0}),b.propTypes={date:(0,o.oneOfType)([(0,o.instanceOf)(Date),o.string,o.number]),daysInHours:o.bool,zeroPadTime:o.number,zeroPadDays:o.number,controlled:o.bool,intervalDelay:o.number,precision:o.number,autoStart:o.bool,overtime:o.bool,className:o.string,children:o.element,renderer:o.func,now:o.func,onMount:o.func,onStart:o.func,onPause:o.func,onStop:o.func,onTick:o.func,onComplete:o.func},e.ZP=b}}]);
//# sourceMappingURL=1439.0a204a98.chunk.js.map