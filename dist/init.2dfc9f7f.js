parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"t1X9":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var l=["lni-island","lni-juice","lni-invention","lni-infinite","lni-leaf","lni-magnet","lni-map-marker","lni-mashroom","lni-microphone","lni-microscope","lni-mouse","lni-snapchat","lni-sketch","lni-eraser","lni-alarm-clock","lni-baloon","lni-bolt-alt","lni-bricks","lni-bridge","lni-briefcase","lni-brush","lni-brush-alt","lni-bug","lni-bulb","lni-bullhorn","lni-burger","lni-bus","lni-cake","lni-camera","lni-candy","lni-cloud","lni-cloudy-sun","lni-coffee-cup","lni-compass","lni-cup","lni-cut","lni-drop","lni-diamond","lni-dinner","lni-flower","lni-graduation","lni-hand","lni-heart","lni-heart-filled","lni-hand","lni-home","lni-hospital"],i=l;exports.default=i;
},{}],"x392":[function(require,module,exports) {
"use strict";function e(e,t,s){this.id=e,this.pair=t,this.className=s}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e;exports.default=t;
},{}],"qpgg":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("./icons")),r=e(require("./Card"));function e(t){return t&&t.__esModule?t:{default:t}}function a(t){return c(t)||i(t)||o(t)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(t,r){if(t){if("string"==typeof t)return d(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?d(t,r):void 0}}function i(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function c(t){if(Array.isArray(t))return d(t)}function d(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,a=new Array(r);e<r;e++)a[e]=t[e];return a}function l(e){var n=document.getElementById("app"),o=document.getElementById("board");return o.classList.add("board"),n.appendChild(o),function(e){var n=[6,12,18,24,30,36][e-1];o.children.length>0&&function(t){for(;t.firstChild;)t.removeChild(t.firstChild)}(o);for(var i,c,d=t.default.length,l=[],u=(i={},function t(r){var e=Math.floor(Math.random()*Math.floor(r));return i[e]?t(r):(i[e]=!0,e)}),s=1;s<=n/2;s++){var f=u(d);c=new r.default(s,0,t.default[f]),l.push(c)}console.log("ORiginal cards length",l);for(var p=l.length,h=0;h<p;h++)l[h].pair=n/2+1+h,c=new r.default(n/2+1+h,h+1,l[h].className),l.push(c);return function(t){t=function(t){for(var r=t.length-1,e=0;e<r;){var n=Math.floor(Math.random()*Math.floor(r-1)),o=t.splice(n,1);t.push.apply(t,a(o)),e++}return t}(t);for(var r=0;r<t.length;r++){var e=document.createElement("li");e.classList.add("card"),e.setAttribute("id","card-".concat(t[r].id)),e.setAttribute("data-match","card-".concat(t[r].pair));var n=document.createElement("div"),i=document.createElement("div");n.classList.add("cover"),n.setAttribute("id","card-".concat(t[r].id).concat(t[r].id).concat(r,"-front")),i.classList.add("back","lni",t[r].className,"flip-card-back"),i.setAttribute("id","card-".concat(t[r].id).concat(t[r].id).concat(r,"-back")),o.appendChild(e),e.appendChild(n),e.appendChild(i)}}(l),l}(e)}var u=l;exports.default=u;
},{"./icons":"t1X9","./Card":"x392"}],"h2mJ":[function(require,module,exports) {
"use strict";function t(){var t=2,e=60*t;function n(){var o,u;document.getElementById&&(o=document.getElementById("mins-left"),(u=document.getElementById("secs-left"))<59?u.textContent=e:(o.textContent=t=Math.floor(e/60),u.textContent=e-Math.round(60*t)),t<0?(o.textContent=0,u.textContent=0):(e--,setTimeout(n,1e3)))}return{countdown:function(){return setTimeout(n,60)},clearCountdown:function(){return t=0,e=0,0}}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t;exports.default=e;
},{}],"yntx":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("./gameState"));function e(t){return t&&t.__esModule?t:{default:t}}var a={flippedCards:[],totalCards:0,currentCardToMatch:null,cardFlippedCount:0,totalCardsFlippedCount:0,addUIEventListeners:function(){var t=this,e=document.querySelectorAll(".card");this.totalCards=e.length/2,this.makeResetButton(),e.forEach(function(e){e.addEventListener("click",function(a){t.cardFlippedCount<2&&(t.updateCardFlippedCount(),t.handleCardClick(e,a.target.id))})})},makeResetButton:function(){var e=document.querySelector(".game-state"),a=document.getElementById("game-reset");a||((a=document.createElement("button")).textContent="Reset Game",a.setAttribute("id","game-reset"),e.appendChild(a)),a.addEventListener("click",function(e){t.default.resetGame()})},updateCardFlippedCount:function(){this.cardFlippedCount++,this.updateTotalCardsFlippedCount()},updateTotalCardsFlippedCount:function(){this.totalCardsFlippedCount++,document.getElementById("card-flips").textContent=this.totalCardsFlippedCount},handleCardClick:function(t,e){var a={id:t.id,match:t.getAttribute("data-match"),boardId:e};this.currentCardToMatch?this.checkIfCardMatched(a):this.currentCardToMatch=a,this.triggerCardFlip(e)},checkIfCardMatched:function(t){var e=[t.id,this.currentCardToMatch.id],a=[t.boardId,this.currentCardToMatch.boardId];this.currentCardToMatch.id===t.match?(this.flippedCards.push([].concat(e)),this.clearCurrentCardToMatch(),this.totalCards===this.flippedCards.length&&(console.log("Game Won!"),this.handleGameWin())):this.triggerCardTurn(a)},clearCurrentCardToMatch:function(){this.currentCardToMatch=null,this.cardFlippedCount=0},triggerCardFlip:function(t){document.getElementById(t).nextSibling.classList.toggle("flip-card-back")},triggerCardTurn:function(t){var e=this.clearCurrentCardToMatch.bind(this);setTimeout(function(){t.forEach(function(t){document.getElementById(t).nextSibling.classList.toggle("flip-card-back")}),e()},1e3)},handleGameWin:function(){var e=this;this.updateSuccessMessage(!0),this.resetCardState(),setTimeout(function(){t.default.updateGameOnWin(2*e.totalCards)},1e3)},updateSuccessMessage:function(t){var e=document.getElementById("game-success");e.textContent=t?"Yay, you won!!!":"It's ok to finally, pick yourself and try again"},resetCardState:function(){this.flippedCards=[],this.currentCardToMatch=null,this.cardFlippedCount=0,this.totalCardsFlippedCount=0},clearSuccessMessage:function(){document.getElementById("game-success").textContent=""},updatePoints:function(t){document.getElementById("points").textContent=t},updateLevel:function(t){document.getElementById("level").textContent=t}},n=a;exports.default=n;
},{"./gameState":"Oo4C"}],"Oo4C":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=l(require("./Board")),t=l(require("./CountdownTimer")),i=l(require("./UI"));function l(e){return e&&e.__esModule?e:{default:e}}var n={points:0,timer:null,level:0,game:null,start:function(){console.log("Game started!"),this.levelUp(),this.initTimer(),this.game=new e.default(this.level),i.default.addUIEventListeners()},resetGame:function(){this.timer.clearCountdown(),this.points=0,this.level=1,this.game=new e.default(this.level),this.updateGameOnWin(0),this.initTimer()},initTimer:function(){this.timer=(0,t.default)(),this.timer.countdown()},updateGameOnWin:function(t){this.timer.clearCountdown(),this.calculatePoints(t),this.levelUp(),this.game=new e.default(this.level),i.default.addUIEventListeners(),i.default.clearSuccessMessage(),this.initTimer()},calculatePoints:function(e){var t=100*e;i.default.updatePoints(t)},levelUp:function(){this.level++,i.default.updateLevel(this.level)}},s=n;exports.default=s;
},{"./Board":"qpgg","./CountdownTimer":"h2mJ","./UI":"yntx"}],"FyzG":[function(require,module,exports) {
"use strict";var e=t(require("./gameState"));function t(e){return e&&e.__esModule?e:{default:e}}var n=document.getElementById("game-start");function r(){console.log("start"),n.remove(),e.default.start()}n.addEventListener("click",function(){r()});
},{"./gameState":"Oo4C"}]},{},["FyzG"], null)
//# sourceMappingURL=init.2dfc9f7f.js.map