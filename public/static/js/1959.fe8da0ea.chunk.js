/*! For license information please see 1959.fe8da0ea.chunk.js.LICENSE.txt */
(self.webpackChunksashjs=self.webpackChunksashjs||[]).push([[1959],{60548:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return x}});var o=t(72791),a=t(57689),s=t(42195),c=t.n(s),l=t(89743),n=t(11087),m=t(4942),i=t(29439);function d(e){var r=document.querySelector(":root");Object.keys(e).forEach((function(t){r.style.setProperty(t,e[t])}))}var u=function(e){return/^#([A-Fa-f0-9]{3,4}){1,2}$/.test(e)},p=function(e,r){return e.match(new RegExp(".{".concat(r,"}"),"g"))},g=function(e){return parseInt(e.repeat(2/e.length),16)},y=function(e,r){return"undefined"!==typeof e?e/255:"number"!=typeof r||r<0||r>1?1:r};function h(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!u(e))return null;var t=Math.floor((e.length-1)/3),o=p(e.slice(1),t).map(g),a=(0,i.Z)(o,4),s=a[0],c=a[1],l=a[2],n=a[3];return"rgba(".concat(s,", ").concat(c,", ").concat(l,", ").concat(y(n,r),")")}function v(e,r){e.forEach((function(e){var t;d((t={},(0,m.Z)(t,"--primary-bg-color",h(r)),(0,m.Z)(t,"--primary-bg-hover",h(r)),(0,m.Z)(t,"--primary-bg-border",h(r)),t))}))}function f(){var e=getComputedStyle(document.documentElement).getPropertyValue("--primary-bg-color").trim(),r=localStorage.getItem("sashPrimaryColor")||localStorage.getItem("sashdarkPrimaryColor")||localStorage.getItem("sashtransparentPrimaryColor")||localStorage.getItem("sashtransparent-bgImgPrimaryColor")||localStorage.getItem("sashtransparentBgImgPrimary")||e,t=h(r||"#6c5ffc",.1);document.querySelector("html").style.setProperty("--primary01",t);var o=h(r||"#6c5ffc",.2);document.querySelector("html").style.setProperty("--primary02",o);var a=h(r||"#6c5ffc",.3);document.querySelector("html").style.setProperty("--primary03",a);var s=h(r||"#6c5ffc",.6);document.querySelector("html").style.setProperty("--primary06",s);var c=h(r||"#6c5ffc",.9);document.querySelector("html").style.setProperty("--primary09",c);var l=h(r||"#6c5ffc",.9);document.querySelector("html").style.setProperty("--primary1",l)}f();var S=t(80184);function b(e){localStorage.setItem("sashtransparentBgColor",e);var r,t=document.querySelectorAll("input.color-bg-transparent");r=e,t.forEach((function(e){var t="--transparent-".concat(e.getAttribute("data-id5"));d((0,m.Z)({},t,h(r)))})),document.getElementById("myonoffswitchTransparent").checked=!0,document.querySelector("body").classList.add("transparent-mode"),document.querySelector("body").classList.remove("light-mode"),document.querySelector("body").classList.remove("dark-mode"),document.querySelector("body").classList.remove("bg-img1"),document.querySelector("body").classList.remove("bg-img2"),document.querySelector("body").classList.remove("bg-img3"),document.querySelector("body").classList.remove("bg-img4"),localStorage.removeItem("sashprimaryColor"),localStorage.removeItem("sashprimaryHoverColor"),localStorage.removeItem("sashprimaryBorderColor"),localStorage.removeItem("sashprimaryTransparent"),localStorage.removeItem("sashdarkPrimaryColor"),localStorage.removeItem("sashtransparent-bgImgPrimaryColor"),localStorage.removeItem("sashBgImage"),f()}function I(e){localStorage.setItem("sashtransparent-bgImgPrimaryColor",e);var r,t=document.querySelectorAll("input.color-primary-img-transparent");r=e,t.forEach((function(e){var t,o="--primary-".concat(e.getAttribute("data-id")),a="--primary-".concat(e.getAttribute("data-id1")),s="--primary-".concat(e.getAttribute("data-id2"));d((t={},(0,m.Z)(t,o,h(r)),(0,m.Z)(t,a,h(r)),(0,m.Z)(t,s,h(r)),t))})),document.getElementById("myonoffswitchTransparent").checked=!0,document.querySelector("body").classList.add("transparent-mode"),document.querySelector("body").classList.remove("light-mode"),document.querySelector("body").classList.remove("dark-mode"),localStorage.removeItem("sashprimaryColor"),localStorage.removeItem("sashprimaryHoverColor"),localStorage.removeItem("sashprimaryBorderColor"),localStorage.removeItem("sashprimaryTransparent"),localStorage.removeItem("sashdarkPrimaryColor"),localStorage.removeItem("sashtransparentPrimaryColor"),localStorage.removeItem("sashtransparentBgColor"),document.querySelector("html").style.removeProperty("--transparent-body"),!1===document.querySelector("body").classList.contains("bg-img1")&&!1===document.querySelector("body").classList.contains("bg-img2")&&!1===document.querySelector("body").classList.contains("bg-img3")&&!1===document.querySelector("body").classList.contains("bg-img4")&&(document.querySelector("body").classList.add("bg-img1"),localStorage.setItem("sashBgImage","bg-img1")),f()}var q=function(){return(0,o.useEffect)((function(){!function(){var e,r,t=document.querySelector("html").style,o=document.querySelector("body");if(null!==localStorage.getItem("sashprimaryColor")&&(o.classList.add("light-mode"),document.getElementById("myonoffswitch6").checked=!0,o.classList.remove("dark-mode"),o.classList.remove("transparent-mode"),t.setProperty("--primary-bg-color",localStorage.getItem("sashprimaryColor")),t.setProperty("--primary-bg-hover",localStorage.getItem("sashprimaryHoverColor")),t.setProperty("--primary-bg-border",localStorage.getItem("sashprimaryBorderColor"))),null!==localStorage.getItem("sashdarkPrimaryColor")&&(o.classList.add("dark-mode"),document.getElementById("myonoffswitch23").checked=!0,o.classList.remove("light-mode"),o.classList.remove("transparent-mode"),t.setProperty("--primary-bg-color",localStorage.getItem("sashdarkPrimaryColor")),t.setProperty("--primary-bg-hover",localStorage.getItem("sashdarkPrimaryColor")),t.setProperty("--primary-bg-border",localStorage.getItem("sashdarkPrimaryColor"))),null!==localStorage.getItem("sashtransparentPrimaryColor")&&(o.classList.add("transparent-mode"),document.getElementById("myonoffswitchTransparent"),o.classList.remove("light-mode"),o.classList.remove("dark-mode"),t.setProperty("--primary-bg-color",localStorage.getItem("sashtransparentPrimaryColor"))),null!==localStorage.getItem("sashtransparentBgColor")&&(o.classList.add("transparent-mode"),document.getElementById("myonoffswitchTransparent"),o.classList.remove("light-mode"),o.classList.remove("dark-mode"),t.setProperty("--transparent-body",localStorage.getItem("sashtransparentBgColor"))),null!==localStorage.getItem("sashtransparent-bgImgPrimaryColor")||null!==localStorage.getItem("sashBgImage")){o.classList.add("transparent-mode"),document.getElementById("myonoffswitchTransparent"),o.classList.remove("light-mode"),o.classList.remove("dark-mode");var a=localStorage.getItem("sashBgImage");t.setProperty("--primary-bg-color",localStorage.getItem("sashtransparent-bgImgPrimaryColor")),o.classList.add(a)}localStorage.sashrtl&&(null===(e=document.querySelector(".app"))||void 0===e||e.classList.add("rtl"),document.querySelector("html[lang=en]").setAttribute("dir","rtl"),null===(r=document.querySelector(".app"))||void 0===r||r.classList.remove("ltr"),document.querySelector("#myonoffswitch23").checked=!1,document.querySelector("#myonoffswitch24").checked=!0)}()})),(0,S.jsx)("div",{className:"",children:(0,S.jsx)("div",{className:"switcher-wrapper",children:(0,S.jsx)("div",{className:"demo_changer",children:(0,S.jsx)("div",{className:"form_holder sidebar-right1",children:(0,S.jsx)(c(),{children:(0,S.jsx)(l.Z,{children:(0,S.jsxs)("div",{className:"predefined_styles",children:[(0,S.jsx)("div",{className:"swichermainleft text-center",children:(0,S.jsxs)("div",{className:"p-3 d-grid gap-2",children:[(0,S.jsx)(n.rU,{to:"../../index.html",className:"btn ripple btn-primary mt-0",children:"View Demo"}),(0,S.jsx)(n.rU,{to:"https://themeforest.net/item/sash-bootstrap-5-admin-dashboard-template/35183671",className:"btn ripple btn-secondary",children:"Buy Now"}),(0,S.jsx)(n.rU,{to:"https://themeforest.net/user/spruko/portfolio",className:"btn ripple btn-pink",children:"Our Portfolio"})]})}),(0,S.jsxs)("div",{className:"swichermainleft",children:[(0,S.jsx)("h4",{children:"LTR and RTL VERSIONS"}),(0,S.jsx)("div",{className:"skin-body",children:(0,S.jsxs)("div",{className:"switch_section",children:[(0,S.jsxs)("div",{className:"switch-toggle d-flex",children:[(0,S.jsx)("span",{className:"me-auto",children:"LTR Version"}),(0,S.jsxs)("p",{className:"onoffswitch2",children:[(0,S.jsx)("input",{type:"radio",name:"onoffswitch7",onClick:function(){return function(){var e,r,t;null===(e=document.querySelector(".app"))||void 0===e||e.classList.add("ltr"),document.querySelector("html[lang=en]").setAttribute("dir","ltr"),null===(r=document.getElementById("style"))||void 0===r||r.setAttribute("href","../assets/plugins/bootstrap/css/bootstrap.min.css"),null===(t=document.querySelector(".app"))||void 0===t||t.classList.remove("rtl"),localStorage.setItem("sashltr","true"),localStorage.removeItem("sashrtl")}()},id:"myonoffswitch23",className:"onoffswitch2-checkbox",defaultChecked:!0}),(0,S.jsx)("label",{htmlFor:"myonoffswitch23",className:"onoffswitch2-label"})]})]}),(0,S.jsxs)("div",{className:"switch-toggle d-flex mt-2",children:[(0,S.jsx)("span",{className:"me-auto",children:"RTL Version"}),(0,S.jsxs)("p",{className:"onoffswitch2",children:[(0,S.jsx)("input",{type:"radio",onClick:function(){return function(){var e,r,t;null===(e=document.querySelector(".app"))||void 0===e||e.classList.add("rtl"),document.querySelector("html[lang=en]").setAttribute("dir","rtl"),null===(r=document.getElementById("style"))||void 0===r||r.setAttribute("href","../assets/plugins/bootstrap/css/bootstrap.rtl.min.css"),null===(t=document.querySelector(".app"))||void 0===t||t.classList.remove("ltr"),localStorage.setItem("sashrtl","true"),localStorage.removeItem("sashltr")}()},name:"onoffswitch7",id:"myonoffswitch24",className:"onoffswitch2-checkbox"}),(0,S.jsx)("label",{htmlFor:"myonoffswitch24",className:"onoffswitch2-label"})]})]})]})})]}),(0,S.jsxs)("div",{className:"swichermainleft",children:[(0,S.jsx)("h4",{children:"Light Theme Style"}),(0,S.jsx)("div",{className:"skin-body",children:(0,S.jsxs)("div",{className:"switch_section",children:[(0,S.jsxs)("div",{className:"switch-toggle d-flex",children:[(0,S.jsx)("span",{className:"me-auto",children:"Light Theme"}),(0,S.jsxs)("p",{className:"onoffswitch2",children:[(0,S.jsx)("input",{type:"radio",name:"onoffswitch1",id:"myonoffswitch1",className:"onoffswitch2-checkbox",defaultChecked:!0,onClick:function(){return function(){var e;null===(e=document.querySelector(".app"))||void 0===e||e.classList.add("light-mode"),document.querySelector(".app").classList.remove("transparent-mode"),document.querySelector(".app").classList.remove("dark-mode"),document.querySelector("html").style="",localStorage.clear(),f()}()}}),(0,S.jsx)("label",{htmlFor:"myonoffswitch1",className:"onoffswitch2-label"})]})]}),(0,S.jsxs)("div",{className:"switch-toggle d-flex",children:[(0,S.jsx)("span",{className:"me-auto",children:"Light Primary"}),(0,S.jsx)("div",{className:"",children:(0,S.jsx)("input",{className:"w-30p h-30 input-color-picker color-primary-light",onChange:function(e){var r;r=e.target.value,localStorage.setItem("sashPrimaryColor",r),v(document.querySelectorAll("input.color-primary-light"),r),document.querySelector("body").classList.add("light-mode"),document.querySelector("body").classList.remove("dark-mode"),document.querySelector("body").classList.remove("transparent-mode"),document.querySelector("body").classList.remove("bg-img1"),document.querySelector("body").classList.remove("bg-img2"),document.querySelector("body").classList.remove("bg-img3"),document.querySelector("body").classList.remove("bg-img4"),localStorage.removeItem("sashprimaryColor"),localStorage.removeItem("sashprimaryHoverColor"),localStorage.removeItem("sashprimaryBorderColor"),localStorage.removeItem("sashprimaryTransparent"),localStorage.removeItem("sashtransparentPrimaryColor"),localStorage.removeItem("sashtransparentBgColor"),localStorage.removeItem("sashtransparent-bgImgPrimaryColor"),localStorage.removeItem("sashBgImage"),f()},defaultValue:"#6c5ffc",id:"colorID",type:"color","data-id":"bg-color","data-id1":"bg-hover","data-id2":"bg-border","data-id7":"transparentcolor",name:"lightPrimary"})})]})]})})]}),(0,S.jsxs)("div",{className:"swichermainleft",children:[(0,S.jsx)("h4",{children:"Dark Theme Style"}),(0,S.jsx)("div",{className:"skin-body",children:(0,S.jsxs)("div",{className:"switch_section",children:[(0,S.jsxs)("div",{className:"switch-toggle d-flex mt-2",children:[(0,S.jsx)("span",{className:"me-auto",children:"Dark Theme"}),(0,S.jsxs)("p",{className:"onoffswitch2",children:[(0,S.jsx)("input",{type:"radio",name:"onoffswitch1",id:"myonoffswitch2",className:"onoffswitch2-checkbox",onClick:function(){return function(){var e,r,t;null===(e=document.querySelector(".app"))||void 0===e||e.classList.add("dark-mode"),null===(r=document.querySelector(".app"))||void 0===r||r.classList.remove("transparent-mode"),null===(t=document.querySelector(".app"))||void 0===t||t.classList.remove("light-mode"),document.querySelector("html").style="",localStorage.clear(),f()}()}}),(0,S.jsx)("label",{htmlFor:"myonoffswitch2",className:"onoffswitch2-label"})]})]}),(0,S.jsxs)("div",{className:"switch-toggle d-flex mt-2",children:[(0,S.jsx)("span",{className:"me-auto",children:"Dark Primary"}),(0,S.jsx)("div",{className:"",children:(0,S.jsx)("input",{className:"w-30p h-30 input-dark-color-picker color-primary-dark",id:"darkPrimaryColorID",defaultValue:"#6c5ffc",onChange:function(e){var r;r=e.target.value,localStorage.setItem("sashdarkPrimaryColor",r),v(document.querySelectorAll("input.color-primary-dark"),r),document.querySelector("body").classList.add("dark-mode"),document.querySelector("body").classList.remove("light-mode"),document.querySelector("body").classList.remove("transparent-mode"),document.querySelector("body").classList.remove("bg-img1"),document.querySelector("body").classList.remove("bg-img2"),document.querySelector("body").classList.remove("bg-img3"),document.querySelector("body").classList.remove("bg-img4"),localStorage.removeItem("sashprimaryColor"),localStorage.removeItem("sashprimaryHoverColor"),localStorage.removeItem("sashprimaryBorderColor"),localStorage.removeItem("sashprimaryTransparent"),localStorage.removeItem("sashtransparentPrimaryColor"),localStorage.removeItem("sashtransparentBgColor"),localStorage.removeItem("sashtransparent-bgImgPrimaryColor"),localStorage.removeItem("sashBgImage"),f()},type:"color","data-id":"bg-color","data-id1":"bg-hover","data-id2":"bg-border","data-id3":"primary","data-id8":"transparentcolor",name:"darkPrimary"})})]})]})})]}),(0,S.jsxs)("div",{className:"swichermainleft",children:[(0,S.jsx)("h4",{children:"Transparent Theme Style"}),(0,S.jsx)("div",{className:"skin-body",children:(0,S.jsxs)("div",{className:"switch_section",children:[(0,S.jsxs)("div",{className:"switch-toggle d-flex mt-2",children:[(0,S.jsx)("span",{className:"me-auto",children:"Transparent Theme"}),(0,S.jsxs)("p",{className:"onoffswitch2",children:[(0,S.jsx)("input",{type:"radio",name:"onoffswitch1",onClick:function(){return function(){var e;null===(e=document.querySelector(".app"))||void 0===e||e.classList.add("transparent-mode"),document.querySelector(".app").classList.remove("light-mode"),document.querySelector(".app").classList.remove("dark-mode"),document.querySelector(".app").classList.remove("bg-img1"),document.querySelector(".app").classList.remove("bg-img2"),document.querySelector(".app").classList.remove("bg-img3"),document.querySelector(".app").classList.remove("bg-img4"),document.querySelector("html").style="",localStorage.clear(),f()}()},id:"myonoffswitchTransparent",className:"onoffswitch2-checkbox"}),(0,S.jsx)("label",{htmlFor:"myonoffswitchTransparent",className:"onoffswitch2-label"})]})]}),(0,S.jsxs)("div",{className:"switch-toggle d-flex mt-2",children:[(0,S.jsx)("span",{className:"me-auto",children:"Transparent Primary"}),(0,S.jsx)("div",{className:"",children:(0,S.jsx)("input",{className:"w-30p h-30 input-transparent-color-picker color-primary-transparent",defaultValue:"#6c5ffc",id:"transparentPrimaryColorID",onChange:function(e){var r;r=e.target.value,localStorage.setItem("sashtransparentPrimaryColor",r),v(document.querySelectorAll("input.color-primary-transparent"),r),document.querySelector("body").classList.add("transparent-mode"),document.querySelector("body").classList.remove("light-mode"),document.querySelector("body").classList.remove("dark-mode"),document.querySelector("body").classList.remove("bg-img1"),document.querySelector("body").classList.remove("bg-img2"),document.querySelector("body").classList.remove("bg-img3"),document.querySelector("body").classList.remove("bg-img4"),localStorage.removeItem("sashprimaryColor"),localStorage.removeItem("sashprimaryHoverColor"),localStorage.removeItem("sashprimaryBorderColor"),localStorage.removeItem("sashprimaryTransparent"),localStorage.removeItem("sashtransparentBgColor"),localStorage.removeItem("sashtransparent-bgImgPrimaryColor"),localStorage.removeItem("sashBgImage"),f()},type:"color","data-id":"bg-color","data-id1":"bg-hover","data-id2":"bg-border","data-id3":"primary","data-id4":"primary","data-id9":"transparentcolor",name:"tranparentPrimary"})})]}),(0,S.jsxs)("div",{className:"switch-toggle d-flex mt-2",children:[(0,S.jsx)("span",{className:"me-auto",children:"Transparent Background"}),(0,S.jsx)("div",{className:"",children:(0,S.jsx)("input",{className:"w-30p h-30 input-transparent-color-picker color-bg-transparent",defaultValue:"#6c5ffc",id:"transparentBgColorID",onChange:function(e){b(e.target.value)},type:"color","data-id5":"body","data-id6":"theme","data-id9":"transparentcolor",name:"transparentBackground"})})]})]})})]}),(0,S.jsxs)("div",{className:"swichermainleft",children:[(0,S.jsx)("h4",{children:"Transparent Bg-Image Style"}),(0,S.jsxs)("div",{className:"skin-body switch_section",children:[(0,S.jsxs)("div",{className:"switch-toggle d-flex",children:[(0,S.jsx)("span",{className:"me-auto",children:"Bg-Image Primary"}),(0,S.jsx)("div",{className:"",children:(0,S.jsx)("input",{className:"w-30p h-30 color-primary-img-transparent",defaultValue:"#6c5ffc",id:"transparentBgImgPrimaryColorID",onChange:function(e){I(e.target.value)},type:"color","data-id":"bg-color","data-id1":"bg-hover","data-id2":"bg-border","data-id3":"primary","data-id4":"primary","data-id9":"transparentcolor",name:"tranparentPrimary"})})]}),(0,S.jsxs)("div",{className:"switch-toggle d-flex mt-2",children:[(0,S.jsx)(n.rU,{className:"bg-img1",to:"#",onClick:function(){return document.querySelector(".app").classList.add("bg-img1"),document.querySelector(".app").classList.remove("bg-img2"),document.querySelector(".app").classList.remove("bg-img3"),document.querySelector(".app").classList.remove("bg-img4"),document.getElementById("myonoffswitchTransparent").checked=!0,localStorage.setItem("sashBgImage","bg-img1"),document.querySelector(".app").classList.add("transparent-mode"),document.querySelector(".app").classList.remove("light-mode"),document.querySelector(".app").classList.remove("dark-mode"),localStorage.removeItem("sashprimaryColor"),localStorage.removeItem("sashprimaryHoverColor"),localStorage.removeItem("sashprimaryBorderColor"),localStorage.removeItem("sashprimaryTransparent"),localStorage.removeItem("sashdarkPrimaryColor"),localStorage.removeItem("sashtransparentPrimaryColor"),localStorage.removeItem("sashtransparentBgColor"),document.querySelector("#myonoffswitch2").checked=!1,document.querySelector("#myonoffswitch1").checked=!1,document.querySelector("#myonoffswitchTransparent").checked=!0,void document.querySelector("html").style.removeProperty("--transparent-body")},children:(0,S.jsx)("img",{src:t(54552),alt:"Bg-1",id:"bgimage1"})}),(0,S.jsx)(n.rU,{className:"bg-img2",to:"#",onClick:function(){return document.querySelector(".app").classList.add("bg-img2"),document.querySelector(".app").classList.remove("bg-img1"),document.querySelector(".app").classList.remove("bg-img3"),document.querySelector(".app").classList.remove("bg-img4"),document.getElementById("myonoffswitchTransparent").checked=!0,localStorage.setItem("sashBgImage","bg-img2"),document.querySelector("html").style.removeProperty("--transparent-body"),document.querySelector(".app").classList.add("transparent-mode"),document.querySelector(".app").classList.remove("light-mode"),document.querySelector(".app").classList.remove("dark-mode"),localStorage.removeItem("sashprimaryColor"),localStorage.removeItem("sashprimaryHoverColor"),localStorage.removeItem("sashprimaryBorderColor"),localStorage.removeItem("sashprimaryTransparent"),localStorage.removeItem("sashdarkPrimaryColor"),localStorage.removeItem("sashtransparentPrimaryColor"),localStorage.removeItem("sashtransparentBgColor"),document.querySelector("#myonoffswitch2").checked=!1,document.querySelector("#myonoffswitch1").checked=!1,void(document.querySelector("#myonoffswitchTransparent").checked=!0)},children:(0,S.jsx)("img",{src:t(24901),alt:"Bg-2",id:"bgimage2"})}),(0,S.jsx)(n.rU,{className:"bg-img3",to:"#",onClick:function(){return document.querySelector(".app").classList.add("bg-img3"),document.querySelector(".app").classList.remove("bg-img1"),document.querySelector(".app").classList.remove("bg-img2"),document.querySelector(".app").classList.remove("bg-img4"),document.getElementById("myonoffswitchTransparent").checked=!0,localStorage.setItem("sashBgImage","bg-img3"),document.querySelector("html").style.removeProperty("--transparent-body"),document.querySelector(".app").classList.add("transparent-mode"),document.querySelector(".app").classList.remove("light-mode"),document.querySelector(".app").classList.remove("dark-mode"),localStorage.removeItem("sashprimaryColor"),localStorage.removeItem("sashprimaryHoverColor"),localStorage.removeItem("sashprimaryBorderColor"),localStorage.removeItem("sashprimaryTransparent"),localStorage.removeItem("sashdarkPrimaryColor"),localStorage.removeItem("sashtransparentPrimaryColor"),localStorage.removeItem("sashtransparentBgColor"),document.querySelector("#myonoffswitch2").checked=!1,document.querySelector("#myonoffswitch1").checked=!1,void(document.querySelector("#myonoffswitchTransparent").checked=!0)},children:(0,S.jsx)("img",{src:t(37112),alt:"Bg-3",id:"bgimage3"})}),(0,S.jsx)(n.rU,{className:"bg-img4",to:"#",onClick:function(){return document.querySelector(".app").classList.add("bg-img4"),document.querySelector(".app").classList.remove("bg-img1"),document.querySelector(".app").classList.remove("bg-img2"),document.querySelector(".app").classList.remove("bg-img3"),document.getElementById("myonoffswitchTransparent").checked=!0,localStorage.setItem("sashBgImage","bg-img4"),document.querySelector("html").style.removeProperty("--transparent-body"),document.querySelector(".app").classList.add("transparent-mode"),document.querySelector(".app").classList.remove("light-mode"),document.querySelector(".app").classList.remove("dark-mode"),localStorage.removeItem("sashprimaryColor"),localStorage.removeItem("sashprimaryHoverColor"),localStorage.removeItem("sashprimaryBorderColor"),localStorage.removeItem("sashprimaryTransparent"),localStorage.removeItem("sashdarkPrimaryColor"),localStorage.removeItem("sashtransparentPrimaryColor"),localStorage.removeItem("sashtransparentBgColor"),document.querySelector("#myonoffswitch2").checked=!1,document.querySelector("#myonoffswitch1").checked=!1,void(document.querySelector("#myonoffswitchTransparent").checked=!0)},children:(0,S.jsx)("img",{src:t(54275),alt:"Bg-4",id:"bgimage4"})})]})]})]}),(0,S.jsxs)("div",{className:"swichermainleft",children:[(0,S.jsx)("h4",{children:"Reset All Styles"}),(0,S.jsx)("div",{className:"skin-body",children:(0,S.jsx)("div",{className:"switch_section my-4",children:(0,S.jsx)("button",{className:"btn btn-danger btn-block",onClick:function(){localStorage.clear(),document.querySelector("html").style="",f(),function(){var e,r,t,o,a,s,c,l,n,m,i,d,u,p,g;document.querySelector("#myonoffswitch1").checked=!0,document.querySelector("#myonoffswitch23").checked=!0,null===(e=document.querySelector(".app"))||void 0===e||e.classList.remove("bg-img4"),null===(r=document.querySelector(".app"))||void 0===r||r.classList.remove("bg-img1"),null===(t=document.querySelector(".app"))||void 0===t||t.classList.remove("bg-img2"),null===(o=document.querySelector(".app"))||void 0===o||o.classList.remove("bg-img3"),null===(a=document.querySelector(".app"))||void 0===a||a.classList.remove("transparent-mode"),null===(s=document.querySelector(".app"))||void 0===s||s.classList.remove("dark-mode"),null===(c=document.querySelector(".main-sidemenu"))||void 0===c||c.classList.remove("container"),null===(l=document.querySelector(".main-container"))||void 0===l||l.classList.remove("container"),null===(n=document.querySelector(".side-app"))||void 0===n||n.classList.remove("container"),null===(m=document.querySelector(".app"))||void 0===m||m.classList.add("sidebar-mini"),null===(i=document.querySelector(".header"))||void 0===i||i.classList.add("app-header"),null===(d=document.querySelector(".main-content"))||void 0===d||d.classList.add("app-content"),null===(u=document.querySelector(".main-container"))||void 0===u||u.classList.add("container-fluid"),null===(p=document.querySelector(".app"))||void 0===p||p.classList.add("ltr"),document.querySelector("html[lang=en]").setAttribute("dir","ltr"),null===(g=document.querySelector(".app"))||void 0===g||g.classList.remove("rtl"),f()}()},type:"button",children:"Reset All"})})})]})]})})})})})})})},x=function(){return document.querySelector("body").classList.add("login-img","ltr","sidebar-mini"),(0,S.jsx)(o.Fragment,{children:(0,S.jsxs)("div",{children:[(0,S.jsx)(q,{}),(0,S.jsx)(a.j3,{})]})})}},81694:function(e,r){var t;!function(){"use strict";var o={}.hasOwnProperty;function a(){for(var e=[],r=0;r<arguments.length;r++){var t=arguments[r];if(t){var s=typeof t;if("string"===s||"number"===s)e.push(t);else if(Array.isArray(t)){if(t.length){var c=a.apply(null,t);c&&e.push(c)}}else if("object"===s){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var l in t)o.call(t,l)&&t[l]&&e.push(l)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(t=function(){return a}.apply(r,[]))||(e.exports=t)}()},80888:function(e,r,t){"use strict";var o=t(79047);function a(){}function s(){}s.resetWarningCache=a,e.exports=function(){function e(e,r,t,a,s,c){if(c!==o){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function r(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:s,resetWarningCache:a};return t.PropTypes=t,t}},52007:function(e,r,t){e.exports=t(80888)()},79047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},89743:function(e,r,t){"use strict";var o=t(1413),a=t(45987),s=t(81694),c=t.n(s),l=t(72791),n=t(10162),m=t(80184),i=["bsPrefix","className","as"],d=l.forwardRef((function(e,r){var t=e.bsPrefix,s=e.className,l=e.as,d=void 0===l?"div":l,u=(0,a.Z)(e,i),p=(0,n.vE)(t,"row"),g=(0,n.pi)(),y=(0,n.zG)(),h="".concat(p,"-cols"),v=[];return g.forEach((function(e){var r,t=u[e];delete u[e],r=null!=t&&"object"===typeof t?t.cols:t;var o=e!==y?"-".concat(e):"";null!=r&&v.push("".concat(h).concat(o,"-").concat(r))})),(0,m.jsx)(d,(0,o.Z)((0,o.Z)({ref:r},u),{},{className:c().apply(void 0,[s,p].concat(v))}))}));d.displayName="Row",r.Z=d},10162:function(e,r,t){"use strict";t.d(r,{SC:function(){return i},pi:function(){return n},vE:function(){return l},zG:function(){return m}});var o=t(72791),a=(t(80184),["xxl","xl","lg","md","sm","xs"]),s="xs",c=o.createContext({prefixes:{},breakpoints:a,minBreakpoint:s});c.Consumer,c.Provider;function l(e,r){var t=(0,o.useContext)(c).prefixes;return e||t[r]||r}function n(){return(0,o.useContext)(c).breakpoints}function m(){return(0,o.useContext)(c).minBreakpoint}function i(){return"rtl"===(0,o.useContext)(c).dir}},54552:function(e,r,t){"use strict";e.exports=t.p+"static/media/bg-img1.d6c32f874119f10bb997.jpg"},24901:function(e,r,t){"use strict";e.exports=t.p+"static/media/bg-img2.4b15bf86403bc8c6b71a.jpg"},37112:function(e,r,t){"use strict";e.exports=t.p+"static/media/bg-img3.dc6b61a9bff5015e2b9e.jpg"},54275:function(e,r,t){"use strict";e.exports=t.p+"static/media/bg-img4.a1b89dea78b5fe7b9c59.jpg"},45987:function(e,r,t){"use strict";t.d(r,{Z:function(){return a}});var o=t(63366);function a(e,r){if(null==e)return{};var t,a,s=(0,o.Z)(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}}}]);
//# sourceMappingURL=1959.fe8da0ea.chunk.js.map