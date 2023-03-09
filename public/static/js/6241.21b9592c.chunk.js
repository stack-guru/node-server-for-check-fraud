"use strict";(self.webpackChunksashjs=self.webpackChunksashjs||[]).push([[6241],{68536:function(e,l,a){a.d(l,{DM:function(){return P},Db:function(){return Z},FH:function(){return J},PY:function(){return D},bS:function(){return N},jL:function(){return R},le:function(){return F},s7:function(){return w},vD:function(){return T}});var n=a(37762),t=a(15671),r=a(43144),i=a(60136),s=a(29388),o=a(1413),c=a(29439),u=a(72791),h=a(29194),p=a(90235),d=a(75737),v=a.n(d),f=(a(98404),a(38596)),b=a(6330),g=a(83985),j=a.n(g),x=(a(67367),a(94269)),m=a(43360),C=a(25088),S=(a(31596),a(18267)),y=a(80184);var Z=function(e){(0,i.Z)(a,e);var l=(0,s.Z)(a);function a(e){var n;return(0,t.Z)(this,a),(n=l.call(this,e)).state={files:[]},n}return(0,r.Z)(a,[{key:"handleChange",value:function(e){this.setState({files:e})}},{key:"render",value:function(){return(0,y.jsx)(h.A0,{acceptedFiles:["image/*"],onChange:this.handleChange.bind(this),showFileNames:!0,dropzoneText:"Drag and Drop a file here or Click",showAlerts:!0,filesLimit:20})}}]),a}(u.Component);var k=[{value:"Choose one",label:"Choose one",isDisabled:"true"},{value:"Chuck Testa",label:"Chuck Testa"},{value:"Sage Cattabriga-Alosa",label:"Sage Cattabriga-Alosa"},{value:"Nikola Tesla",label:"Nikola Tesla"},{value:"Cattabriga-Alosa",label:"Cattabriga-Alosa"},{value:"Nikola Alosa",label:"Nikola Alosa"}];(0,p.ZP)();(0,f.Z)((function(e){return(0,b.Z)({container:{display:"flex",flexWrap:"wrap",height:40},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:150}})}));var P=function(e){(0,i.Z)(a,e);var l=(0,s.Z)(a);function a(){var e;(0,t.Z)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=l.call.apply(l,[this].concat(r))).state={displayColorPicker:!1,color:{r:"241",g:"112",b:"19",a:"1"}},e.handleClick=function(){e.setState({displayColorPicker:!e.state.displayColorPicker})},e.handleClose=function(){e.setState({displayColorPicker:!1})},e.handleChange=function(l){e.setState({color:l.rgb})},e}return(0,r.Z)(a,[{key:"render",value:function(){return(0,y.jsxs)("div",{children:[(0,y.jsx)("p",{className:"mt-4 mb-1",children:"Show Adove photoshop with Alphaline and pallete. "}),(0,y.jsx)(m.Z,{className:"btn-pill",variant:"primary",size:"sm",onClick:this.handleClick,children:(0,y.jsx)(C.Z,{})}),this.state.displayColorPicker?(0,y.jsxs)("div",{children:[(0,y.jsx)("div",{onClick:this.handleClose}),(0,y.jsx)(x.xS,{className:"mt-3",color:this.state.color,onChange:this.handleChange})]}):null]})}}]),a}(u.Component);var A=[{label:"Java Script",options:[{value:"Jquery",label:"Jquery"},{value:"Angular JS",label:"Angular JS"},{value:"React JS",label:"React JS"},{value:"Vue JS",label:"Vue JS"}]},{label:"Popular",options:[{value:"Java Script",label:"Java Script"},{value:"Java",label:"Java"},{value:"Python",label:"Python"},{value:"TypeScript",label:"TypeScript"},{value:"PHP",label:"PHP"},{value:"Ruby on Rails",label:"Ruby on Rails"}]}],J=function(e){(0,i.Z)(a,e);var l=(0,s.Z)(a);function a(){var e;(0,t.Z)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=l.call.apply(l,[this].concat(r))).state={selected:[k[0]]},e.onChange=function(l){console.log(l),e.setState({selected:l})},e}return(0,r.Z)(a,[{key:"render",value:function(){var e=this.state.selected;return(0,y.jsx)(j(),{options:A,selected:e,allowDuplicates:!0,simpleValue:!1,onChange:this.onChange})}}]),a}(u.Component);function R(){var e=(0,u.useState)([""]),l=(0,c.Z)(e,2),a=l[0],t=l[1];return(0,y.jsx)(j(),{canFilter:!0,selected:a,options:[{value:"HTML5",label:"HTML5"},{value:"CSS 3",label:"CSS 3"},{value:"PHP",label:"PHP"},{value:"J-Query",label:"J-Query"},{value:".Net",label:".Net"},{value:"Java",label:"Java"},{value:"Android",label:"Android"},{value:"React JS",label:"React JS"},{value:"Angular JS",label:"Angular JS"},{value:"PhotoShop",label:"PhotoShop"},{value:"Python",label:"Python"},{value:"Sql",label:"Sql"},{value:"JavaScript",label:"JavaScript"}],filterCallback:function(e,l){if(""===l)return!0;console.log(e);var a,t=l.split(" "),r=!1,i=(0,n.Z)(t);try{for(i.s();!(a=i.n()).done;){var s=a.value;if(console.log(s),!1===(r=new RegExp(s,"i").test(e.label)))break}}catch(o){i.e(o)}finally{i.f()}return r},onChange:function(e){t(e),console.log(e)}})}function N(){var e=(0,u.useState)([""]),l=(0,c.Z)(e,2),a=l[0],t=l[1];return(0,y.jsx)(j(),{canFilter:!0,selected:a,options:[{label:"Software Side",options:[{value:"Web designer",label:"Web designer"},{value:"Web Developer",label:"Web Developer"},{value:"Application Developer",label:"Application Developer"},{value:"App Designer",label:"App Designer"}]},{label:"Voice Side",options:[{value:"Tell Caller",label:"Tell Caller"},{value:"Recruiter",label:"Recruiter"},{value:"HR",label:"HR"},{value:"Data Entry",label:"Data Entry"},{value:"Mapping",label:"Mapping"},{value:"US Recruiter",label:"US Recruiter"}]}],filterCallback:function(e,l){if(""===l)return!0;console.log(e);var a,t=l.split(" "),r=!1,i=(0,n.Z)(t);try{for(i.s();!(a=i.n()).done;){var s=a.value;if(console.log(s),!1===(r=new RegExp(s,"i").test(e.label)))break}}catch(o){i.e(o)}finally{i.f()}return r},onChange:function(e){t(e),console.log(e)}})}var D=function(){return(0,y.jsx)("div",{children:(0,y.jsx)(v(),{country:"us",value:"1425652",onChange:function(e){return console.log({phone:e})}})})};function w(e){var l=(0,S.uI)({disabled:!0}),a=l.getRootProps,n=l.getInputProps;return(0,y.jsx)("section",{className:"container",children:(0,y.jsxs)("div",(0,o.Z)((0,o.Z)({},a({className:"dropzone file_upload disabled"})),{},{children:[(0,y.jsx)("input",(0,o.Z)({},n())),(0,y.jsx)("p",{children:(0,y.jsx)("del",{children:"Drag 'n' drop some files here, or click to select files"})})]}))})}function T(e){var l=(0,S.uI)(),a=l.acceptedFiles,n=l.getRootProps,t=l.getInputProps,r=a.map((function(e){return(0,y.jsxs)("li",{children:[e.path," - ",e.size," bytes"]},e.path)}));return(0,y.jsxs)("section",{className:"container file_upload",children:[(0,y.jsxs)("div",(0,o.Z)((0,o.Z)({},n({className:"dropzone file_upload"})),{},{children:[(0,y.jsx)("input",(0,o.Z)({},t())),(0,y.jsx)("p",{children:"Drag 'n' drop some files here, or click to select files"})]})),(0,y.jsxs)("aside",{className:"dropzone-main",children:[(0,y.jsx)("h4",{className:"mb-0",children:"Files"}),(0,y.jsx)("ul",{children:r})]})]})}function F(e){var l=(0,S.uI)({accept:{"image/jpeg":[],"image/png":[]}}),a=l.acceptedFiles,n=l.fileRejections,t=l.getRootProps,r=l.getInputProps,i=a.map((function(e){return(0,y.jsxs)("li",{children:[e.path," - ",e.size," bytes"]},e.path)})),s=n.map((function(e){var l=e.file,a=e.errors;return(0,y.jsxs)("li",{children:[l.path," - ",l.size," bytes",(0,y.jsx)("ul",{children:a.map((function(e){return(0,y.jsx)("li",{children:e.message},e.code)}))})]},l.path)}));return(0,y.jsxs)("section",{className:"",children:[(0,y.jsxs)("div",(0,o.Z)((0,o.Z)({},t({className:"dropzone specificFile"})),{},{children:[(0,y.jsx)("input",(0,o.Z)({},r())),(0,y.jsx)("p",{children:"Drag 'n' drop some files here, or click to select files"}),(0,y.jsx)("em",{children:"(Only *.jpeg and *.png images will be accepted)"})]})),(0,y.jsxs)("aside",{children:[(0,y.jsx)("h4",{children:"Accepted files"}),(0,y.jsx)("ul",{children:i}),(0,y.jsx)("h4",{children:"Rejected files"}),(0,y.jsx)("ul",{children:s})]})]})}},87382:function(e,l,a){a.d(l,{Z:function(){return i}});a(72791);var n={},t=a(2461),r=a(80184),i=function(e){return(0,r.jsx)("div",{className:n.PageHeader,children:(0,r.jsxs)("div",{className:"page-header",children:[(0,r.jsx)("h1",{className:"page-title",children:e.titles}),(0,r.jsx)("div",{children:(0,r.jsxs)(t.Z,{children:[e.items.map((function(e,l){return(0,r.jsx)(t.Z.Item,{href:"#",children:e},l)})),(0,r.jsx)(t.Z.Item,{href:"#",active:!0,children:e.active})]})})]})})}}}]);
//# sourceMappingURL=6241.21b9592c.chunk.js.map