"use strict";(self.webpackChunksashjs=self.webpackChunksashjs||[]).push([[9704],{49704:function(e,t,n){n.d(t,{Z:function(){return k}});var a=n(64750),r=n(37762),i=n(97326),s=n(93433),l=n(15671),o=n(43144),c=n(60136),d=n(29388),f=n(77826),u=n(58620),v=function(e){(0,c.Z)(n,e);var t=(0,d.Z)(n);function n(){var e;return(0,l.Z)(this,n),(e=t.apply(this,arguments)).state={textId:(0,f.a6)()},e}return(0,o.Z)(n,[{key:"render",value:function(){var e=this.context,t=e.theme,n=e.dateEnv,a=e.options,r=e.viewApi,i=this.props,l=i.cellId,o=i.dayDate,c=i.todayRange,d=this.state.textId,v=(0,f.a$)(o,c),h=a.listDayFormat?n.format(o,a.listDayFormat):"",m=a.listDaySideFormat?n.format(o,a.listDaySideFormat):"",y=Object.assign({date:n.toDate(o),view:r,textId:d,text:h,sideText:m,navLinkAttrs:(0,f.b1)(this.context,o),sideNavLinkAttrs:(0,f.b1)(this.context,o,"day",!1)},v);return(0,u.createElement)(f.C,{elTag:"tr",elClasses:["fc-list-day"].concat((0,s.Z)((0,f.a_)(v,t))),elAttrs:{"data-date":(0,f.bw)(o)},renderProps:y,generatorName:"dayHeaderContent",customGenerator:a.dayHeaderContent,defaultGenerator:g,classNameGenerator:a.dayHeaderClassNames,didMount:a.dayHeaderDidMount,willUnmount:a.dayHeaderWillUnmount},(function(e){return(0,u.createElement)("th",{scope:"colgroup",colSpan:3,id:l,"aria-labelledby":d},(0,u.createElement)(e,{elTag:"div",elClasses:["fc-list-day-cushion",t.getClass("tableCellShaded")]}))}))}}]),n}(f.Y);function g(e){return(0,u.createElement)(u.Fragment,null,e.text&&(0,u.createElement)("a",Object.assign({id:e.textId,className:"fc-list-day-text"},e.navLinkAttrs),e.text),e.sideText&&(0,u.createElement)("a",Object.assign({"aria-hidden":!0,className:"fc-list-day-side-text"},e.sideNavLinkAttrs),e.sideText))}var h=(0,f.x)({hour:"numeric",minute:"2-digit",meridiem:"short"}),m=function(e){(0,c.Z)(n,e);var t=(0,d.Z)(n);function n(){return(0,l.Z)(this,n),t.apply(this,arguments)}return(0,o.Z)(n,[{key:"render",value:function(){var e=this.props,t=this.context,n=t.options,a=e.seg,r=e.timeHeaderId,i=e.eventHeaderId,s=e.dateHeaderId,l=n.eventTimeFormat||h;return(0,u.createElement)(f.co,Object.assign({},e,{elTag:"tr",elClasses:["fc-list-event",a.eventRange.def.url&&"fc-event-forced-url"],defaultGenerator:function(){return function(e,t){var n=(0,f.bV)(e,t);return(0,u.createElement)("a",Object.assign({},n),e.eventRange.def.title)}(a,t)},seg:a,timeText:"",disableDragging:!0,disableResizing:!0}),(function(e,n){return(0,u.createElement)(u.Fragment,null,function(e,t,n,a,r){var i=n.options;if(!1!==i.displayEventTime){var s,l=e.eventRange.def,o=e.eventRange.instance,c=!1;if(l.allDay?c=!0:(0,f.aA)(e.eventRange.range)?e.isStart?s=(0,f.bR)(e,t,n,null,null,o.range.start,e.end):e.isEnd?s=(0,f.bR)(e,t,n,null,null,e.start,o.range.end):c=!0:s=(0,f.bR)(e,t,n),c){var d={text:n.options.allDayText,view:n.viewApi};return(0,u.createElement)(f.C,{elTag:"td",elClasses:["fc-list-event-time"],elAttrs:{headers:"".concat(a," ").concat(r)},renderProps:d,generatorName:"allDayContent",customGenerator:i.allDayContent,defaultGenerator:y,classNameGenerator:i.allDayClassNames,didMount:i.allDayDidMount,willUnmount:i.allDayWillUnmount})}return(0,u.createElement)("td",{className:"fc-list-event-time"},s)}return null}(a,l,t,r,s),(0,u.createElement)("td",{"aria-hidden":!0,className:"fc-list-event-graphic"},(0,u.createElement)("span",{className:"fc-list-event-dot",style:{borderColor:n.borderColor||n.backgroundColor}})),(0,u.createElement)(e,{elTag:"td",elClasses:["fc-list-event-title"],elAttrs:{headers:"".concat(i," ").concat(s)}}))}))}}]),n}(f.Y);function y(e){return e.text}var p=function(e){(0,c.Z)(n,e);var t=(0,d.Z)(n);function n(){var e;return(0,l.Z)(this,n),(e=t.apply(this,arguments)).computeDateVars=(0,f.z)(x),e.eventStoreToSegs=(0,f.z)(e._eventStoreToSegs),e.state={timeHeaderId:(0,f.a6)(),eventHeaderId:(0,f.a6)(),dateHeaderIdRoot:(0,f.a6)()},e.setRootEl=function(t){t?e.context.registerInteractiveComponent((0,i.Z)(e),{el:t}):e.context.unregisterInteractiveComponent((0,i.Z)(e))},e}return(0,o.Z)(n,[{key:"render",value:function(){var e=this.props,t=this.context,n=this.computeDateVars(e.dateProfile),a=n.dayDates,r=n.dayRanges,i=this.eventStoreToSegs(e.eventStore,e.eventUiBases,r);return(0,u.createElement)(f.cu,{elRef:this.setRootEl,elClasses:["fc-list",t.theme.getClass("table"),!1!==t.options.stickyHeaderDates?"fc-list-sticky":""],viewSpec:t.viewSpec},(0,u.createElement)(f.ce,{liquid:!e.isHeightAuto,overflowX:e.isHeightAuto?"visible":"hidden",overflowY:e.isHeightAuto?"visible":"auto"},i.length>0?this.renderSegList(i,a):this.renderEmptyMessage()))}},{key:"renderEmptyMessage",value:function(){var e=this.context,t=e.options,n=e.viewApi,a={text:t.noEventsText,view:n};return(0,u.createElement)(f.C,{elTag:"div",elClasses:["fc-list-empty"],renderProps:a,generatorName:"noEventsContent",customGenerator:t.noEventsContent,defaultGenerator:b,classNameGenerator:t.noEventsClassNames,didMount:t.noEventsDidMount,willUnmount:t.noEventsWillUnmount},(function(e){return(0,u.createElement)(e,{elTag:"div",elClasses:["fc-list-empty-cushion"]})}))}},{key:"renderSegList",value:function(e,t){var n=this.context,a=n.theme,i=n.options,s=this.state,l=s.timeHeaderId,o=s.eventHeaderId,c=s.dateHeaderIdRoot,d=function(e){var t,n,a=[];for(t=0;t<e.length;t+=1)(a[(n=e[t]).dayIndex]||(a[n.dayIndex]=[])).push(n);return a}(e);return(0,u.createElement)(f.ci,{unit:"day"},(function(e,n){for(var s=[],g=0;g<d.length;g+=1){var h=d[g];if(h){var y=(0,f.bw)(t[g]),p=c+"-"+y;s.push((0,u.createElement)(v,{key:y,cellId:p,dayDate:t[g],todayRange:n})),h=(0,f.bS)(h,i.eventOrder);var b,x=(0,r.Z)(h);try{for(x.s();!(b=x.n()).done;){var E=b.value;s.push((0,u.createElement)(m,Object.assign({key:y+":"+E.eventRange.instance.instanceId,seg:E,isDragging:!1,isResizing:!1,isDateSelecting:!1,isSelected:!1,timeHeaderId:l,eventHeaderId:o,dateHeaderId:p},(0,f.bT)(E,n,e))))}}catch(D){x.e(D)}finally{x.f()}}}return(0,u.createElement)("table",{className:"fc-list-table "+a.getClass("table")},(0,u.createElement)("thead",null,(0,u.createElement)("tr",null,(0,u.createElement)("th",{scope:"col",id:l},i.timeHint),(0,u.createElement)("th",{scope:"col","aria-hidden":!0}),(0,u.createElement)("th",{scope:"col",id:o},i.eventHint))),(0,u.createElement)("tbody",null,s))}))}},{key:"_eventStoreToSegs",value:function(e,t,n){return this.eventRangesToSegs((0,f.ag)(e,t,this.props.dateProfile.activeRange,this.context.options.nextDayThreshold).fg,n)}},{key:"eventRangesToSegs",value:function(e,t){var n,a=[],i=(0,r.Z)(e);try{for(i.s();!(n=i.n()).done;){var l=n.value;a.push.apply(a,(0,s.Z)(this.eventRangeToSegs(l,t)))}}catch(o){i.e(o)}finally{i.f()}return a}},{key:"eventRangeToSegs",value:function(e,t){var n,a,r,i=this.context.dateEnv,s=this.context.options.nextDayThreshold,l=e.range,o=e.def.allDay,c=[];for(n=0;n<t.length;n+=1)if((a=(0,f.o)(l,t[n]))&&(r={component:this,eventRange:e,start:a.start,end:a.end,isStart:e.isStart&&a.start.valueOf()===l.start.valueOf(),isEnd:e.isEnd&&a.end.valueOf()===l.end.valueOf(),dayIndex:n},c.push(r),!r.isEnd&&!o&&n+1<t.length&&l.end<i.add(t[n+1].start,s))){r.end=l.end,r.isEnd=!0;break}return c}}]),n}(f.bf);function b(e){return e.text}function x(e){for(var t=(0,f.q)(e.renderRange.start),n=e.renderRange.end,a=[],r=[];t<n;)a.push(t),r.push({start:t,end:(0,f.t)(t,1)}),t=(0,f.t)(t,1);return{dayDates:a,dayRanges:r}}var E={listDayFormat:D,listDaySideFormat:D,noEventsClassNames:f.n,noEventsContent:f.n,noEventsDidMount:f.n,noEventsWillUnmount:f.n};function D(e){return!1===e?null:(0,f.x)(e)}(0,f.i)(':root{--fc-list-event-dot-width:10px;--fc-list-event-hover-bg-color:#f5f5f5}.fc-theme-standard .fc-list{border:1px solid var(--fc-border-color)}.fc .fc-list-empty{align-items:center;background-color:var(--fc-neutral-bg-color);display:flex;height:100%;justify-content:center}.fc .fc-list-empty-cushion{margin:5em 0}.fc .fc-list-table{border-style:hidden;width:100%}.fc .fc-list-table tr>*{border-left:0;border-right:0}.fc .fc-list-sticky .fc-list-day>*{background:var(--fc-page-bg-color);position:sticky;top:0}.fc .fc-list-table thead{left:-10000px;position:absolute}.fc .fc-list-table tbody>tr:first-child th{border-top:0}.fc .fc-list-table th{padding:0}.fc .fc-list-day-cushion,.fc .fc-list-table td{padding:8px 14px}.fc .fc-list-day-cushion:after{clear:both;content:"";display:table}.fc-theme-standard .fc-list-day-cushion{background-color:var(--fc-neutral-bg-color)}.fc-direction-ltr .fc-list-day-text,.fc-direction-rtl .fc-list-day-side-text{float:left}.fc-direction-ltr .fc-list-day-side-text,.fc-direction-rtl .fc-list-day-text{float:right}.fc-direction-ltr .fc-list-table .fc-list-event-graphic{padding-right:0}.fc-direction-rtl .fc-list-table .fc-list-event-graphic{padding-left:0}.fc .fc-list-event.fc-event-forced-url{cursor:pointer}.fc .fc-list-event:hover td{background-color:var(--fc-list-event-hover-bg-color)}.fc .fc-list-event-graphic,.fc .fc-list-event-time{white-space:nowrap;width:1px}.fc .fc-list-event-dot{border:calc(var(--fc-list-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-list-event-dot-width)/2);box-sizing:content-box;display:inline-block;height:0;width:0}.fc .fc-list-event-title a{color:inherit;text-decoration:none}.fc .fc-list-event.fc-event-forced-url:hover a{text-decoration:underline}');var k=(0,a.rx)({name:"@fullcalendar/list",optionRefiners:E,views:{list:{component:p,buttonTextKey:"list",listDayFormat:{month:"long",day:"numeric",year:"numeric"}},listDay:{type:"list",duration:{days:1},listDayFormat:{weekday:"long"}},listWeek:{type:"list",duration:{weeks:1},listDayFormat:{weekday:"long"},listDaySideFormat:{month:"long",day:"numeric",year:"numeric"}},listMonth:{type:"list",duration:{month:1},listDaySideFormat:{weekday:"long"}},listYear:{type:"list",duration:{year:1},listDaySideFormat:{weekday:"long"}}}})}}]);
//# sourceMappingURL=9704.72a6ca64.chunk.js.map