// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"icons.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var icons = ["lni-island", "lni-juice", "lni-invention", "lni-infinite", "lni-leaf", "lni-magnet", "lni-map-marker", "lni-mashroom", "lni-microphone", "lni-microscope", "lni-mouse", "lni-snapchat", "lni-sketch", "lni-eraser", "lni-alarm-clock", "lni-baloon", "lni-bolt-alt", "lni-bricks", "lni-bridge", "lni-briefcase", "lni-brush", "lni-brush-alt", "lni-bug", "lni-bulb", "lni-bullhorn", "lni-burger", "lni-bus", "lni-cake", "lni-camera", "lni-candy", "lni-cloud", "lni-cloudy-sun", "lni-coffee-cup", "lni-compass", "lni-cup", "lni-cut", "lni-drop", "lni-diamond", "lni-dinner", "lni-flower", "lni-graduation", "lni-hand", "lni-heart", "lni-heart-filled", "lni-hand", "lni-home", "lni-hospital"];
var _default = icons;
exports.default = _default;
},{}],"Card.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function Card(id, pair, className) {
  this.id = id;
  this.pair = pair;
  this.className = className;
}

var _default = Card;
exports.default = _default;
},{}],"Board.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _icons = _interopRequireDefault(require("./icons"));

var _Card = _interopRequireDefault(require("./Card"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Board(num) {
  var app = document.getElementById("app");
  var board = document.createElement("ul");
  board.classList.add("board");
  app.appendChild(board);

  function makeCards(num) {
    var iconsLength = _icons.default.length;
    var cards = [];
    var getNumber = getRandomNumber();
    var newCard;

    for (var i = 1; i <= num / 2; i++) {
      var getCardName = getNumber(iconsLength);
      newCard = new _Card.default(i, 0, _icons.default[getCardName]);
      cards.push(newCard);
    }

    console.log(cards);
    var cardsLength = cards.length;

    for (var _i = 0; _i < cardsLength; _i++) {
      cards[_i].pair = num / 2 + 1 + _i;
      newCard = new _Card.default(num / 2 + 1 + _i, _i + 1, cards[_i].className);
      cards.push(newCard);
    }

    appendCardsToDOM(cards);
    return cards;
  }

  function appendCardsToDOM(cards) {
    cards = randomize(cards);
    console.log(cards);

    for (var i = 0; i < cards.length; i++) {
      var el = document.createElement("li");
      el.classList.add("card");
      el.setAttribute("id", "card-".concat(cards[i].id));
      el.setAttribute('data-match', "card-".concat(cards[i].pair));
      var cover = document.createElement("div");
      var back = document.createElement("div");
      cover.classList.add("cover");
      cover.innerHTML = "Cover";
      cover.setAttribute("id", "card-".concat(cards[i].id).concat(cards[i].id).concat(i, "-front"));
      back.classList.add("back", "lni", cards[i].className, "flip-card-back");
      back.setAttribute("id", "card-".concat(cards[i].id).concat(cards[i].id).concat(i, "-back"));
      board.appendChild(el);
      el.appendChild(cover);
      el.appendChild(back);
    }
  }

  function getRandomNumber() {
    var memo = {};
    return function getNum(length) {
      var num = Math.floor(Math.random() * Math.floor(length));

      if (!memo[num]) {
        memo[num] = true;
        return num;
      } else {
        return getNum(length);
      }
    };
  }

  function randomize(arr) {
    var startLength = arr.length - 1;
    var counter = 0;

    while (counter < startLength) {
      console.log(counter, "counter", startLength, "startLength");
      var random = Math.floor(Math.random() * Math.floor(startLength - 1));
      var element = arr.splice(random, 1);
      arr.push.apply(arr, _toConsumableArray(element));
      counter++;
    }

    return arr;
  }

  return makeCards(num);
}

var _default = Board;
exports.default = _default;
},{"./icons":"icons.js","./Card":"Card.js"}],"CountdownTimer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function CountdownTimer() {
  var mins = 2; //calculate the seconds 

  var secs = mins * 60; //countdown function is evoked when page is loaded 

  var countdown = function countdown() {
    return setTimeout(decrement, 60);
  }; // countdown is cleared


  function clearCountdown() {
    mins = 0;
    secs = 0;
    return 0;
  } //Decrement function decrement the value. 


  function decrement() {
    var minutes, seconds;

    if (document.getElementById) {
      minutes = document.getElementById("mins-left");
      seconds = document.getElementById("secs-left"); //if less than a minute remaining 
      //Display only seconds value. 

      if (seconds < 59) {
        seconds.textContent = secs;
      } //Display both minutes and seconds 
      //getminutes and getseconds is used to 
      //get minutes and seconds 
      else {
          minutes.textContent = getminutes();
          seconds.textContent = getseconds();
        } //when less than a minute remaining 
      //colour of the minutes and seconds 
      //changes to red 


      if (mins < 1) {
        minutes.style.color = "red";
        seconds.style.color = "red";
      } //if seconds becomes zero, 
      //then page alert time up 


      if (mins < 0) {
        alert('time up');
        minutes.textContent = 0;
        seconds.textContent = 0;
      } //if seconds > 0 then seconds is decremented 
      else {
          secs--;
          setTimeout(decrement, 1000);
        }
    }
  }

  function getminutes() {
    //minutes is seconds divided by 60, rounded down 
    mins = Math.floor(secs / 60);
    return mins;
  }

  function getseconds() {
    //take minutes remaining (as seconds) away  
    //from total seconds remaining 
    return secs - Math.round(mins * 60);
  }

  var publicFunctions = {
    countdown: countdown,
    clearCountdown: clearCountdown
  };
  return publicFunctions;
}

var _default = CountdownTimer;
exports.default = _default;
},{}],"UI.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _gameState = _interopRequireDefault(require("./gameState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UI = {
  flippedCards: [],
  currentCardToMatch: null,
  cardFlippedCount: 0,
  totalCardsFlippedCount: 0,
  addUIEventListeners: function addUIEventListeners() {
    var _this = this;

    var cards = document.querySelectorAll(".card");
    var resetButton = document.getElementById('game-reset'); // Cards

    cards.forEach(function (element) {
      element.addEventListener("click", function (event) {
        if (_this.cardFlippedCount < 2) {
          _this.updateCardFlippedCount();

          _this.handleCardClick(element, event.target.id);
        }
      });
    }); // Reset Button

    resetButton.addEventListener('click', function (event) {
      _gameState.default.resetGame();
    });
  },
  updateCardFlippedCount: function updateCardFlippedCount() {
    this.cardFlippedCount++;
    this.updateTotalCardsFlippedCount();
  },
  updateTotalCardsFlippedCount: function updateTotalCardsFlippedCount() {
    this.totalCardsFlippedCount++;
    var el = document.getElementById('card-flips');
    el.textContent = this.totalCardsFlippedCount;
  },
  handleCardClick: function handleCardClick(element, targetId) {
    var currentCard = {
      id: element.id,
      match: element.getAttribute('data-match'),
      boardId: targetId
    };

    if (!this.currentCardToMatch) {
      this.currentCardToMatch = currentCard;
    } else {
      this.checkIfCardMatched(currentCard);
    }

    this.triggerCardFlip(targetId);
  },
  checkIfCardMatched: function checkIfCardMatched(card) {
    var cardIds = [card.id, this.currentCardToMatch.id];
    var boardIds = [card.boardId, this.currentCardToMatch.boardId];

    if (this.currentCardToMatch.id === card.match) {
      this.flippedCards.push([].concat(cardIds));
    } else {
      this.triggerCardTurn(boardIds);
    }

    this.clearCurrentCardToMatch();
  },
  clearCurrentCardToMatch: function clearCurrentCardToMatch() {
    this.currentCardToMatch = null;
    this.cardFlippedCount = 0;
  },
  triggerCardFlip: function triggerCardFlip(id) {
    var selectedCard = document.getElementById(id);
    var flip = selectedCard.nextSibling;
    flip.classList.toggle("flip-card-back");
  },
  triggerCardTurn: function triggerCardTurn(cards) {
    setTimeout(function () {
      cards.forEach(function (card) {
        var current = document.getElementById(card).nextSibling;
        current.classList.toggle("flip-card-back");
      });
    }, 1000);
  }
};
var _default = UI;
exports.default = _default;
},{"./gameState":"gameState.js"}],"gameState.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Board = _interopRequireDefault(require("./Board"));

var _CountdownTimer = _interopRequireDefault(require("./CountdownTimer"));

var _UI = _interopRequireDefault(require("./UI"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GameSate = {
  score: 0,
  timer: null,
  level: 1,
  game: null,
  start: function start() {
    console.log("Game started!");
    this.game = new _Board.default(12);

    _UI.default.addUIEventListeners();

    this.initTimer();
  },
  resetGame: function resetGame() {
    this.timer.clearCountdown();
    this.timer = null;
    this.score = 0;
    this.level = 1;
  },
  initTimer: function initTimer() {
    this.timer = (0, _CountdownTimer.default)();
    this.timer.countdown();
  }
};
var _default = GameSate;
exports.default = _default;
},{"./Board":"Board.js","./CountdownTimer":"CountdownTimer.js","./UI":"UI.js"}],"init.js":[function(require,module,exports) {
"use strict";

var _gameState = _interopRequireDefault(require("./gameState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var startBTN = document.getElementById("game-start");
startBTN.addEventListener("click", function () {
  init();
});

function init() {
  console.log("start");
  startBTN.remove();

  _gameState.default.start();
}
},{"./gameState":"gameState.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53481" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","init.js"], null)
//# sourceMappingURL=/init.9d6cb373.js.map