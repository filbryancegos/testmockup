!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t){},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){window.scrollY>=E?(document.body.style.paddingTop=b.offsetHeight+"px",document.body.classList.add("fixed-nav")):(document.body.classList.remove("fixed-nav"),document.body.style.paddingTop=0)}var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(0);var s=document.querySelector(".menu-btn"),a=document.querySelector(".menu"),i=document.querySelector(".menu-nav"),l=document.querySelector(".menu-branding"),u=document.querySelectorAll(".nav-item"),d=!1,f=function(){d?(s.classList.remove("close"),a.classList.remove("show"),i.classList.remove("show"),l.classList.remove("show"),u.forEach(function(e){return e.classList.remove("show")}),d=!1):(s.classList.add("close"),a.classList.add("show"),i.classList.add("show"),l.classList.add("show"),u.forEach(function(e){return e.classList.add("show")}),d=!0)};s.addEventListener("click",f),u.forEach(function(e){e.addEventListener("click",function(t){var n=t,r=e.parentElement.children;Array.from(r).forEach(function(e){e.classList.contains("current")&&e.classList.remove("current")}),n.target.parentElement.classList.add("current")})});var m=document.querySelectorAll(".slideDown"),v=document.querySelectorAll(".slideLeft"),y=document.querySelectorAll(".slideRight"),L=function(e){setTimeout(function(){e.classList.remove("animated","slideInDown"),e.classList.remove("animated","slideInLeft"),e.classList.remove("animated","slideInRight")},1e3)},h=function(){m.forEach(function(e){e.classList.add("animated","slideInDown"),L(e)})},p=function(){v.forEach(function(e){e.classList.add("animated","slideInLeft"),L(e)})},w=function(){y.forEach(function(e){e.classList.add("animated","slideInRight"),L(e)})},g=function(){h(),p(),w()};g();var q,S=function(){clearTimeout(q),q=setTimeout(function(){g(),p(),w()},500)};window.addEventListener("resize",S);var b=document.querySelector("header"),E=b.offsetTop;window.addEventListener("scroll",o);var A=document.querySelectorAll("#our-expertise .progress-wrap"),x=["branding","design","development"],T=0,I=0,k=function(e,t){function n(){I>=t?clearInterval(c):(I++,r.style.width=I+"%",o.innerText=I+"%",o.style.left=I+5+"%")}var r=e.querySelector(".progress-bar"),o=e.querySelector(".content .percent");I=0;var c=setInterval(n,50)};A.forEach(function(e){if(T>=3)T=1;else{var t=x[T];if(e.classList.add(t),e.classList.contains("branding")){var n=90;k(e,n)}else if(e.classList.contains("design")){var n=80;k(e,n)}else if(e.classList.contains("development")){var n=85;k(e,n)}T++}});var D=document.querySelector("#form"),O=function(){function e(){r(this,e)}return c(e,null,[{key:"showAlert",value:function(e,t){var n=document.createElement("div");n.className="alert alert-"+t,n.appendChild(document.createTextNode(e));var r=document.querySelector("#contact-form .slideLeft"),o=document.querySelector("#form");r.insertBefore(n,o),setTimeout(function(){return document.querySelector(".alert").remove()},3e3)}},{key:"clearFields",value:function(){document.querySelector("#name").value="",document.querySelector("#email").value="",document.querySelector("#message").value=""}}]),e}(),P=function(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)};D&&D.addEventListener("submit",function(e){e.preventDefault();var t=document.querySelector("#name").value,n=document.querySelector("#email").value,r=document.querySelector("#message").value;""===t||""===n||""===r?O.showAlert("Please fill in all fields","danger"):P(n)?(O.clearFields(),O.showAlert("Email sent","success")):O.showAlert("Email not valid","danger")})}]);