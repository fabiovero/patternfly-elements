!function(n,e){if("function"==typeof define&&define.amd)define(["../rhelement/rhelement.compiled.js"],e);else if("undefined"!=typeof exports)e(require("../rhelement/rhelement.compiled.js"));else{e(n.rhelementCompiled),n.rhCard={}}}(this,function(n){"use strict";var e,t=(e=n)&&e.__esModule?e:{default:e};var r=document.createElement("template");r.innerHTML="\n<style>:host {\n  display: block; }\n\n.card {\n  display: flex;\n  flex-direction: column;\n  background: #e7e7e7;\n  padding: 16px;\n  margin-bottom: 32px; }\n  .card p {\n    margin-top: 0;\n    flex: 1 1 auto; }\n  .card a {\n    color: #06c;\n    text-decoration: none;\n    font-weight: 700; }\n  .card span {\n    font-size: .9rem;\n    font-weight: 400; }\n\n@media (min-width: 768px) {\n  .card-container {\n    display: flex; }\n    .card-container .card {\n      width: 33%;\n      margin: 16px;\n      margin-top: 8px; }\n      .card-container .card:first-child {\n        margin-left: 0; }\n      .card-container .card:last-child {\n        margin-right: 0; } }</style>\n<h3>People who viewed this "+data.contentType+' also viewed</h3>\n<div class="card-container">\n  '+data.results.map(function(n){return'\n    <div class="card">\n      <p><a href="'+n.view_uri+'">'+n.allTitle+"</a></p>\n      <span>\n        "+n.documentKind+' - <rh-datetime\n          datetime="'+n.lastModifiedDate+'"\n          type="local"\n          day="numeric"\n          month="short"\n          year="numeric">\n          '+n.lastModifiedDate+"\n        </rh-datetime>\n      </span>\n    </div>\n  "}).join("\n")+"\n</div>\n";var i=function(n){function e(){return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,"rh-card",r))}return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}(e,t.default),e}();window.customElements.define("rh-card",i)});