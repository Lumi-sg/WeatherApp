(()=>{"use strict";var t={28:(t,n,e)=>{e.d(n,{Z:()=>a});var r=e(81),o=e.n(r),i=e(645),c=e.n(i)()(o());c.push([t.id,"body {\n\tfont-family: Arial, sans-serif;\n\tmargin: 0;\n    background-color: black;\n\tcolor: white;\n}\n\ndiv {\n\tmargin: 10px;\n}\n\nh1 {\n\ttext-align: center;\n}\n\nform {\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: center;\n\talign-items: center;\n\tmargin-bottom: 20px;\n}\n\nlabel {\n\tmargin-right: 10px;\n}\n\ninput {\n\tpadding: 5px;\n\tfont-size: 16px;\n\tborder-radius: 5px;\n\tborder: 1px solid #ccc;\n\tmargin-right: 10px;\n}\n\nbutton {\n\tpadding: 5px 10px;\n\tfont-size: 16px;\n\tborder-radius: 5px;\n\tbackground-color: #007bff;\n\tcolor: #fff;\n\tborder: none;\n\tcursor: pointer;\n}\n\nbutton:hover {\n\tbackground-color: #0056b3;\n}\n\n#current-conditions,\n#todays-forecast,\n#tomorrows-forecast {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tmargin-bottom: 20px;\n}\n\n#current-icon,\n#today-icon,\n#tomorrow-icon {\n\twidth: 100px;\n\theight: 100px;\n}\n\np {\n\tfont-size: 20px;\n\tmargin: 5px 0;\n}\n\nh2 {\n\tmargin-top: 0;\n\tmargin-bottom: 10px;\n}\n",""]);const a=c},645:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",r=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),r&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),r&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var c={};if(r)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(c[s]=!0)}for(var u=0;u<t.length;u++){var d=[].concat(t[u]);r&&c[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var n=[];function e(t){for(var e=-1,r=0;r<n.length;r++)if(n[r].identifier===t){e=r;break}return e}function r(t,r){for(var i={},c=[],a=0;a<t.length;a++){var s=t[a],u=r.base?s[0]+r.base:s[0],d=i[u]||0,l="".concat(u," ").concat(d);i[u]=d+1;var p=e(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,r);r.byIndex=a,n.splice(a,0,{identifier:l,updater:m,references:1})}c.push(l)}return c}function o(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var c=0;c<i.length;c++){var a=e(i[c]);n[a].references--}for(var s=r(t,o),u=0;u<i.length;u++){var d=e(i[u]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=s}}},569:t=>{var n={};t.exports=function(t,e){var r=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},565:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},589:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return t[r](i,i.exports,e),i.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.nc=void 0,(()=>{var t=e(379),n=e.n(t),r=e(795),o=e.n(r),i=e(569),c=e.n(i),a=e(565),s=e.n(a),u=e(216),d=e.n(u),l=e(589),p=e.n(l),f=e(28),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=c().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals,function(){const t=document.querySelector("body"),n=document.createElement("div"),e=document.createElement("h1"),r=document.createElement("form"),o=document.createElement("label"),i=document.createElement("input"),c=document.createElement("button"),a=document.createElement("div"),s=document.createElement("img"),u=document.createElement("p"),d=document.createElement("p");e.classList.add("location"),e.textContent="Weather",o.setAttribute("for","location-input"),o.textContent="",i.setAttribute("type","text"),i.setAttribute("id","location-input"),i.setAttribute("name","location"),i.setAttribute("placeholder","Enter your location"),c.setAttribute("type","submit"),c.textContent="Go!",c.classList.add("submit"),a.setAttribute("id","current-conditions"),s.setAttribute("id","current-icon"),u.setAttribute("id","current-temp"),d.setAttribute("id","current-condition"),a.appendChild(s),a.appendChild(u),a.appendChild(d),n.appendChild(e),n.appendChild(a),n.appendChild(r),r.appendChild(o),r.appendChild(i),r.appendChild(c),r.classList.add("location-form"),t.appendChild(n)}();const v=document.querySelector(".location-form");v.addEventListener("submit",(async()=>{const t=v.elements.location.value;event.preventDefault();const n=await async function(t){const n=await fetch(`https://api.weatherapi.com/v1/current.json?key=bebb8c9c18cf423fb6c70957230204&q=${t}`,{mode:"cors"});return await n.json()}(t);!async function(t){document.querySelector(".location").textContent=t.location.name+" , "+t.location.region+" , "+t.location.country,document.querySelector("#current-icon").src=t.current.condition.icon,document.querySelector("#current-temp").textContent=t.current.temp_c+"°C",document.querySelector("#current-condition").textContent=t.current.condition.text}(n),console.log(n)}))})()})();