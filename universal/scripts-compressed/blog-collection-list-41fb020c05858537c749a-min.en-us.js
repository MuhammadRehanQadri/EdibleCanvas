(function(r){var i={};function l(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:false,exports:{}};r[e].call(t.exports,t,t.exports,l);t.l=true;return t.exports}l.m=r;l.c=i;l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:true,get:r})};l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});Object.defineProperty(e,"__esModule",{value:true})};l.t=function(t,e){1&e&&(t=l(t));if(8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);l.r(r);Object.defineProperty(r,"default",{enumerable:true,value:t});if(2&e&&"string"!=typeof t)for(var i in t)l.d(r,i,function(e){return t[e]}.bind(null,i));return r};l.n=function(t){var e=t&&t.__esModule?function e(){return t["default"]}:function e(){return t};l.d(e,"a",e);return e};l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};l.p="https://assets.squarespace.com/universal/scripts-compressed/";return l(l.s="./src/main/webapp/universal/scripts-v6/rollups/blog-collection-list.manifest.js")})({"./src/main/webapp/universal/scripts-v6/blog-collection-list.js":function(e,t){YUI.add("squarespace-blog-collection-list",function(t){var o=t.config.win;var e=o.document;var l=200;var s=t.Squarespace.Template.getTweakValue;var r=function(e){if(!e)return;var t=parseInt(s("tweak-blog-list-columns"),10);var r=parseInt(s("tweak-blog-list-spacing"),10);var i=parseFloat(o.getComputedStyle(e).width);while((i-r*(t-1))/t<l)t--;e.setAttribute("data-columns",t)};var i=function(e){if(!e)return;var t=e.querySelectorAll(".BlogList-item-image img");if("true"===s("tweak-blog-list-item-image-show")){var r="stacked"===s("tweak-blog-list-style").toLowerCase();var i="auto"===s("tweak-blog-list-item-image-aspect-ratio-stacked").toLowerCase();if(r&&i)for(var l=0;l<t.length;l++){var a=t[l];a.style.position=null;a.style.top=null;a.style.right=null;a.style.bottom=null;a.style.left=null;a.style.width=null;a.style.height=null;o.ImageLoader.load(a,{load:true,mode:null})}else for(var n=0;n<t.length;n++)o.ImageLoader.load(t[n],{load:true,mode:"fill"})}};var a=function(e){r(e);i(e)};var n=100;var u=false;var c;var f=function(e){u=u||true;c&&clearTimeout(c);c=setTimeout(function(){if(!t||!t.config||!t.config.win)return;a(e);u=false},n)};var g=["tweak-blog-list-columns","tweak-blog-list-spacing"];var p=["tweak-blog-list-style","tweak-blog-list-columns","tweak-blog-list-spacing","tweak-blog-list-item-image-aspect-ratio-grid","tweak-blog-list-item-image-aspect-ratio-stacked","tweak-blog-list-item-image-show","tweak-blog-list-item-image-width"];var v=function(e){var t=e.getName();g.indexOf(t)>=0&&r();p.indexOf(t)>=0&&i()};t.Global.on("tweak:change",v);var m;var d;t.config.win.Squarespace.onInitialize(t,function(){m=e.querySelector(".BlogList");if(m){a(m);d=f.bind(o,m);o.addEventListener("resize",d)}});t.config.win.Squarespace.onDestroy(t,function(){o.removeEventListener("resize",d)})},"1.0",{requires:[]})},"./src/main/webapp/universal/scripts-v6/rollups/blog-collection-list.manifest.js":function(e,t,r){r("./src/main/webapp/universal/scripts-v6/blog-collection-list.js")}});
//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/blog-collection-list-f305c9c5ab7a13260f8f2-min.en-US.js.map