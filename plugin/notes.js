!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";var e=function(){var e,t=null;function n(n){var a;!t||t.closed?(n||(n="plugin/notes/notes.html"),(t=window.open(n,"reveal.js - Notes","width=1100,height=700"))?(a=setInterval((function(){t.postMessage(JSON.stringify({namespace:"reveal-notes",type:"connect",url:window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,state:e.getState()}),"*")}),500),window.addEventListener("message",(function(n){var s,r,i,d,c=JSON.parse(n.data);c&&"reveal-notes"===c.namespace&&"connected"===c.type&&(clearInterval(a),e.on("slidechanged",o),e.on("fragmentshown",o),e.on("fragmenthidden",o),e.on("overviewhidden",o),e.on("overviewshown",o),e.on("paused",o),e.on("resumed",o),o()),c&&"reveal-notes"===c.namespace&&"call"===c.type&&(s=c.methodName,r=c.arguments,i=c.callId,d=e[s].apply(e,r),t.postMessage(JSON.stringify({namespace:"reveal-notes",type:"return",result:d,callId:i}),"*"))}))):alert("Speaker view popup failed to open. Please make sure popups are allowed and reopen the speaker view.")):t.focus();function o(n){var a=e.getCurrentSlide(),o=a.querySelector("aside.notes"),s=a.querySelector(".current-fragment"),r={namespace:"reveal-notes",type:"state",notes:"",markdown:!1,whitespace:"normal",state:e.getState()};if(a.hasAttribute("data-notes")&&(r.notes=a.getAttribute("data-notes"),r.whitespace="pre-wrap"),s){var i=s.querySelector("aside.notes");i?o=i:s.hasAttribute("data-notes")&&(r.notes=s.getAttribute("data-notes"),r.whitespace="pre-wrap",o=null)}o&&(r.notes=o.innerHTML,r.markdown="string"==typeof o.getAttribute("data-markdown")),t.postMessage(JSON.stringify(r),"*")}}return{id:"notes",init:function(t){e=t,/receiver/i.test(window.location.search)||(null!==window.location.search.match(/(\?|\&)notes/gi)&&n(),e.addKeyBinding({keyCode:83,key:"S",description:"Speaker notes view"},(function(){n()})))},open:n}}();Reveal.registerPlugin(e)}));
