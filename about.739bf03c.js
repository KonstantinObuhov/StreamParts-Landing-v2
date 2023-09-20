// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"j9r0q":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ba60c367739bf03c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"ebWYT":[function(require,module,exports) {
// import 'jquery';
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _fullpageJs = require("./components/fullpage4/dist/fullpage.js");
var _fullpageCss = require("./components/fullpage4/dist/fullpage.css");
var _menu = require("./components/menu");
var _menuDefault = parcelHelpers.interopDefault(_menu);
var _tabs = require("./components/tabs");
var _tabsDefault = parcelHelpers.interopDefault(_tabs);
var _sliders = require("./components/sliders");
var _slidersDefault = parcelHelpers.interopDefault(_sliders);
// import 'select2/dist/js/select2';
window.addEventListener("load", function() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor)=>{
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
    new (0, _menuDefault.default);
    new (0, _tabsDefault.default);
    var container = document.querySelector(".containerMin");
    var domRect;
    var result;
    let box = document.querySelectorAll(".geographySlider__box");
    let nav = document.querySelectorAll(".geographySlider__nav");
    if (container) {
        domRect = container.getBoundingClientRect();
        if (window.innerWidth > 768) result = domRect.left + 50;
        else if (window.innerWidth > 375) result = domRect.left + 30;
        else result = domRect.left + 12;
    }
    box?.forEach(function(el) {
        el.style.left = "" + result + "px";
    });
    nav?.forEach(function(el) {
        el.style.left = "" + result + "px";
    });
    if (window.innerWidth <= 992) {
        box?.forEach(function(el) {
            el.style.right = "" + result + "px";
        });
        nav?.forEach(function(el) {
            el.style.right = "" + result + "px";
        });
    }
    window.addEventListener("resize", function() {
        box?.forEach(function(el) {
            el.style.left = "" + result + "px";
        });
        nav?.forEach(function(el) {
            el.style.left = "" + result + "px";
        });
        if (window.innerWidth <= 992) {
            box?.forEach(function(el) {
                el.style.right = "" + result + "px";
            });
            nav?.forEach(function(el) {
                el.style.right = "" + result + "px";
            });
        }
    });
    function formatState(state) {
        if (!state.id) return state.text;
        var baseUrl = $(state.element).data("image");
        var $state = $('<img src="' + baseUrl + '" class="w-[24px] h-[24px] mr-[8px] object-contain pointer-events-none" /> <div class="leading-7 text-left pointer-events-none">' + state.text + "</div>");
        return $state;
    }
    if (window.innerWidth < 640) {
        $(".select").select2({
            minimumResultsForSearch: Infinity,
            templateResult: formatState,
            templateSelection: formatState
        });
        $(".select").on("select2:select", function(e) {
            let getVal = e.target.value;
            console.log(getVal);
            let content = document.querySelectorAll(".tab-content");
            content.forEach(function(item) {
                let id = item.getAttribute("id");
                if (id == getVal) {
                    document.querySelector(".tab-content.current").classList.remove("current");
                    item.classList.add("current");
                }
            });
        });
    }
    if (document.title == "Главная") {
        $("#index").addClass("active");
        $("#indexFooter").addClass("active");
        $("#indexMobile").addClass("active");
    } else if (document.title == "О компании") {
        $("#about").addClass("active");
        $("#aboutFooter").addClass("active");
        $("#aboutMobile").addClass("active");
    }
});

},{"./components/fullpage4/dist/fullpage.js":"kVjo2","./components/fullpage4/dist/fullpage.css":"fLy4C","./components/menu":"gho2s","./components/tabs":"c6jhF","./components/sliders":"8H3W5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kVjo2":[function(require,module,exports) {
/*!
* fullPage 4.0.20
* https://github.com/alvarotrigo/fullPage.js
*
* @license GPLv3 for open source use only
* or Fullpage Commercial License for commercial use
* http://alvarotrigo.com/fullPage/pricing/
*
* Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
*/ (function(global, factory) {
    module.exports = factory();
})(this, function() {
    "use strict";
    // https://tc39.github.io/ecma262/#sec-array.prototype.find
    if (!Array.prototype.find) Object.defineProperty(Array.prototype, "find", {
        value: function value(predicate) {
            // 1. Let O be ? ToObject(this value).
            if (this == null) throw new TypeError('"this" is null or not defined');
            var o = Object(this); // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0; // 3. If IsCallable(predicate) is false, throw a TypeError exception.
            if (typeof predicate !== "function") throw new TypeError("predicate must be a function");
             // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
            var thisArg = arguments[1]; // 5. Let k be 0.
            var k = 0; // 6. Repeat, while k < len
            while(k < len){
                // a. Let Pk be ! ToString(k).
                // b. Let kValue be ? Get(O, Pk).
                // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
                // d. If testResult is true, return kValue.
                var kValue = o[k];
                if (predicate.call(thisArg, kValue, k, o)) return kValue;
                 // e. Increase k by 1.
                k++;
            } // 7. Return undefined.
            return undefined;
        }
    });
    // Production steps of ECMA-262, Edition 6, 22.1.2.1
    if (!Array.from) Array.from = function() {
        var toStr = Object.prototype.toString;
        var isCallable = function isCallable(fn) {
            return typeof fn === "function" || toStr.call(fn) === "[object Function]";
        };
        var toInteger = function toInteger(value) {
            var number = Number(value);
            if (isNaN(number)) return 0;
            if (number === 0 || !isFinite(number)) return number;
            return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
        };
        var maxSafeInteger = Math.pow(2, 53) - 1;
        var toLength = function toLength(value) {
            var len = toInteger(value);
            return Math.min(Math.max(len, 0), maxSafeInteger);
        }; // The length property of the from method is 1.
        return function from(arrayLike) {
            // 1. Let C be the this value.
            var C = this; // 2. Let items be ToObject(arrayLike).
            var items = Object(arrayLike); // 3. ReturnIfAbrupt(items).
            if (arrayLike == null) throw new TypeError("Array.from requires an array-like object - not null or undefined");
             // 4. If mapfn is undefined, then let mapping be false.
            var mapFn = arguments.length > 1 ? arguments[1] : void 0;
            var T;
            if (typeof mapFn !== "undefined") {
                // 5. else
                // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
                if (!isCallable(mapFn)) throw new TypeError("Array.from: when provided, the second argument must be a function");
                 // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
                if (arguments.length > 2) T = arguments[2];
            } // 10. Let lenValue be Get(items, "length").
            // 11. Let len be ToLength(lenValue).
            var len = toLength(items.length); // 13. If IsConstructor(C) is true, then
            // 13. a. Let A be the result of calling the [[Construct]] internal method
            // of C with an argument list containing the single item len.
            // 14. a. Else, Let A be ArrayCreate(len).
            var A = isCallable(C) ? Object(new C(len)) : new Array(len); // 16. Let k be 0.
            var k = 0; // 17. Repeat, while k < len… (also steps a - h)
            var kValue;
            while(k < len){
                kValue = items[k];
                if (mapFn) A[k] = typeof T === "undefined" ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
                else A[k] = kValue;
                k += 1;
            } // 18. Let putStatus be Put(A, "length", len, true).
            A.length = len; // 20. Return A.
            return A;
        };
    }();
    var win = window;
    var doc = document;
    var isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/);
    var isMacDevice = /(Mac|iPhone|iPod|iPad)/i.test(win.navigator.userAgent); // @ts-ignore
    var isTouch = "ontouchstart" in win || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints;
    var isIE11 = !!window.MSInputMethodContext && !!document.documentMode; // taken from https://github.com/udacity/ud891/blob/gh-pages/lesson2-focus/07-modals-and-keyboard-traps/solution/modal.js
    var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]'; // cache common elements
    var FP = {
        test: {},
        shared: {}
    };
    var extensions = [
        "parallax",
        "scrollOverflowReset",
        "dragAndMove",
        "offsetSections",
        "fadingEffect",
        "responsiveSlides",
        "continuousHorizontal",
        "interlockedSlides",
        "scrollHorizontally",
        "resetSliders",
        "cards",
        "dropEffect",
        "waterEffect"
    ];
    /**
    * forEach polyfill for IE
    * https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Browser_Compatibility
    */ if (win.NodeList && !NodeList.prototype.forEach) NodeList.prototype.forEach = function(callback, thisArg) {
        thisArg = thisArg || window;
        for(var i = 0; i < this.length; i++)callback.call(thisArg, this[i], i, this);
    };
    if (typeof Object.assign != "function") // Must be writable: true, enumerable: false, configurable: true
    Object.defineProperty(Object, "assign", {
        value: function assign(target, varArgs) {
            if (target == null) // TypeError if undefined or null
            throw new TypeError("Cannot convert undefined or null to object");
            var to = Object(target);
            for(var index = 1; index < arguments.length; index++){
                var nextSource = arguments[index];
                if (nextSource != null) {
                    // Skip over if undefined or null
                    for(var nextKey in nextSource)// Avoid bugs when hasOwnProperty is shadowed
                    if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) to[nextKey] = nextSource[nextKey];
                }
            }
            return to;
        },
        writable: true,
        configurable: true
    });
    // https://stackoverflow.com/questions/51719553/padstart-not-working-in-ie11
    // https://github.com/behnammodi/polyfill/blob/master/string.polyfill.js
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
    if (!String.prototype.padStart) String.prototype.padStart = function padStart(targetLength, padString) {
        targetLength = targetLength >> 0; //truncate if number or convert non-number to 0;
        padString = String(typeof padString !== "undefined" ? padString : " ");
        if (this.length > targetLength) return String(this);
        else {
            targetLength = targetLength - this.length;
            if (targetLength > padString.length) padString += Array.apply(null, Array(targetLength)).map(function() {
                return padString;
            }).join("");
            return padString.slice(0, targetLength) + String(this);
        }
    };
    //utils
    /**
    * Shows a message in the console of the given type.
    */ // function showError(type, text) {
    //   win.console && win.console[type] && win.console[type]('fullPage: ' + text);
    // }
    function isVisible(el) {
        var style = win.getComputedStyle(el);
        return style.display !== "none";
    }
    function getVisible(elements) {
        return Array.from(elements).filter(function(e) {
            return isVisible(e);
        });
    }
    /**
    * Equivalent of jQuery function $().
    */ function $(selector, context) {
        context = arguments.length > 1 ? context : document;
        return context ? context.querySelectorAll(selector) : null;
    }
    /**
    * Extends a given Object properties and its childs.
    */ function deepExtend(out) {
        out = out || {};
        for(var i = 1, len = arguments.length; i < len; ++i){
            var obj = arguments[i];
            if (!obj) continue;
            for(var key in obj){
                if (!obj.hasOwnProperty(key) || key == "__proto__" || key == "constructor") continue;
                 // based on https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/
                if (Object.prototype.toString.call(obj[key]) === "[object Object]") {
                    out[key] = deepExtend(out[key], obj[key]);
                    continue;
                }
                out[key] = obj[key];
            }
        }
        return out;
    }
    /**
    * Checks if the passed element contains the passed class.
    */ function hasClass(el, className) {
        if (el == null) return false;
        return el.classList.contains(className);
    }
    /**
    * Gets the window height. Crossbrowser.
    */ function getWindowHeight() {
        return "innerHeight" in win ? win.innerHeight : doc.documentElement.offsetHeight;
    }
    /**
    * Gets the window width.
    */ function getWindowWidth() {
        return win.innerWidth;
    }
    /**
    * Set's the CSS properties for the passed item/s.
    * @param {NodeList|HTMLElement|Object} items
    * @param {Object} props css properties and values.
    */ function css(items, props) {
        items = getList(items);
        var key;
        for(key in props)if (props.hasOwnProperty(key)) {
            if (key !== null) for(var i = 0; i < items.length; i++){
                var item = items[i];
                item.style[key] = props[key];
            }
        }
        return items;
    }
    /**
    * Gets the previous element to the passed element.
    */ function prev(item) {
        return item.previousElementSibling;
    }
    /**
    * Gets the next element to the passed element.
    */ function next(item) {
        return item.nextElementSibling;
    }
    /**
    * Gets the last element from the passed list of elements.
    */ function last(item) {
        return item[item.length - 1];
    }
    /**
    * Gets index from the passed element.
    * @param {String} selector is optional.
    */ function index(item, selector) {
        item = isArrayOrList(item) ? item[0] : item;
        var children = selector != null ? $(selector, item.parentNode) : item.parentNode.childNodes;
        var num = 0;
        for(var i = 0; i < children.length; i++){
            if (children[i] == item) return num;
            if (children[i].nodeType == 1) num++;
        }
        return -1;
    }
    /**
    * Gets an iterable element for the passed element/s
    */ function getList(item) {
        return !isArrayOrList(item) ? [
            item
        ] : item;
    }
    /**
    * Adds the display=none property for the passed element/s
    */ function hide(el) {
        el = getList(el);
        for(var i = 0; i < el.length; i++)el[i].style.display = "none";
        return el;
    }
    /**
    * Adds the display=block property for the passed element/s
    */ function show(el) {
        el = getList(el);
        for(var i = 0; i < el.length; i++)el[i].style.display = "block";
        return el;
    }
    /**
    * Checks if the passed element is an iterable element or not
    */ function isArrayOrList(el) {
        return Object.prototype.toString.call(el) === "[object Array]" || Object.prototype.toString.call(el) === "[object NodeList]";
    }
    /**
    * Adds the passed class to the passed element/s
    */ function addClass(el, className) {
        el = getList(el);
        for(var i = 0; i < el.length; i++){
            var item = el[i];
            item.classList.add(className);
        }
        return el;
    }
    /**
    * Removes the passed class to the passed element/s
    * @param {String} `className` can be multiple classnames separated by whitespace
    */ function removeClass(el, className) {
        el = getList(el);
        var classNames = className.split(" ");
        for(var a = 0; a < classNames.length; a++){
            className = classNames[a];
            for(var i = 0; i < el.length; i++){
                var item = el[i];
                item.classList.remove(className);
            }
        }
        return el;
    }
    /**
    * Appends the given element ot the given parent.
    */ function appendTo(el, parent) {
        parent.appendChild(el);
    }
    /**
    Usage:

    var wrapper = document.createElement('div');
    wrapper.className = 'fp-slides';
    wrap($('.slide'), wrapper);

    https://jsfiddle.net/qwzc7oy3/15/ (vanilla)
    https://jsfiddle.net/oya6ndka/1/ (jquery equivalent)
    */ function wrap(toWrap, wrapper, isWrapAll) {
        var newParent;
        wrapper = wrapper || doc.createElement("div");
        for(var i = 0; i < toWrap.length; i++){
            var item = toWrap[i];
            if (isWrapAll && !i || !isWrapAll) {
                newParent = wrapper.cloneNode(true);
                item.parentNode.insertBefore(newParent, item);
            }
            newParent.appendChild(item);
        }
        return toWrap;
    }
    /**
    Usage:
    var wrapper = document.createElement('div');
    wrapper.className = 'fp-slides';
    wrap($('.slide'), wrapper);

    https://jsfiddle.net/qwzc7oy3/27/ (vanilla)
    https://jsfiddle.net/oya6ndka/4/ (jquery equivalent)
    */ function wrapAll(toWrap, wrapper) {
        wrap(toWrap, wrapper, true);
    }
    /**
    * Usage:
    * wrapInner(document.querySelector('#pepe'), '<div class="test">afdas</div>');
    * wrapInner(document.querySelector('#pepe'), element);
    *
    * https://jsfiddle.net/zexxz0tw/6/
    *
    * https://stackoverflow.com/a/21817590/1081396
    */ function wrapInner(parent, wrapper) {
        parent.appendChild(wrapper);
        while(parent.firstChild !== wrapper)wrapper.appendChild(parent.firstChild);
    }
    /**
    * Usage:
    * unwrap(document.querySelector('#pepe'));
    * unwrap(element);
    *
    * https://jsfiddle.net/szjt0hxq/1/
    *
    */ function unwrap(wrapper) {
        var wrapperContent = doc.createDocumentFragment();
        while(wrapper.firstChild)wrapperContent.appendChild(wrapper.firstChild);
        wrapper.parentNode.replaceChild(wrapperContent, wrapper);
    }
    /**
    * http://stackoverflow.com/questions/22100853/dom-pure-javascript-solution-to-jquery-closest-implementation
    * Returns the element or `false` if there's none
    */ function closest(el, selector) {
        if (el && el.nodeType === 1) {
            if (matches(el, selector)) return el;
            return closest(el.parentNode, selector);
        }
        return null;
    }
    /**
    * Places one element (rel) after another one or group of them (reference).
    * @param {HTMLElement} reference
    * @param {HTMLElement|NodeList|String|Array} el
    * https://jsfiddle.net/9s97hhzv/1/
    */ function after(reference, el) {
        insertBefore(reference, reference.nextSibling, el);
    }
    /**
    * Places one element (rel) before another one or group of them (reference).
    * @param {HTMLElement} reference
    * @param {HTMLElement|NodeList|String|Array} el
    * https://jsfiddle.net/9s97hhzv/1/
    */ function before(reference, el) {
        insertBefore(reference, reference, el);
    }
    /**
    * Based in https://stackoverflow.com/a/19316024/1081396
    * and https://stackoverflow.com/a/4793630/1081396
    */ function insertBefore(reference, beforeElement, el) {
        if (!isArrayOrList(el)) {
            if (typeof el == "string") el = createElementFromHTML(el);
            el = [
                el
            ];
        }
        for(var i = 0; i < el.length; i++)reference.parentNode.insertBefore(el[i], beforeElement);
    } //http://stackoverflow.com/questions/3464876/javascript-get-window-x-y-position-for-scroll
    function getScrollTop() {
        var docElement = doc.documentElement;
        return (win.pageYOffset || docElement.scrollTop) - (docElement.clientTop || 0);
    }
    /**
    * Gets the siblings of the passed element
    */ function siblings(el) {
        return Array.prototype.filter.call(el.parentNode.children, function(child) {
            return child !== el;
        });
    }
    function preventDefault(event) {
        event.preventDefault();
    }
    function getAttr(el, attr) {
        return el.getAttribute(attr);
    }
    function docAddEvent(event, callback, options) {
        doc.addEventListener(event, callback, options === "undefined" ? null : options);
    }
    function windowAddEvent(event, callback, options) {
        win.addEventListener(event, callback, options === "undefined" ? null : options);
    }
    function docRemoveEvent(event, callback, options) {
        doc.removeEventListener(event, callback, options === "undefined" ? null : options);
    }
    function windowRemoveEvent(event, callback, options) {
        win.removeEventListener(event, callback, options === "undefined" ? null : options);
    }
    /**
    * Determines whether the passed item is of function type.
    */ function isFunction(item) {
        if (typeof item === "function") return true;
        var type = Object.prototype.toString.call(item);
        return type === "[object Function]" || type === "[object GeneratorFunction]";
    }
    /**
    * Trigger custom events
    */ function trigger(el, eventName, data) {
        var event;
        data = typeof data === "undefined" ? {} : data; // Native
        if (typeof win.CustomEvent === "function") event = new CustomEvent(eventName, {
            detail: data
        });
        else {
            event = doc.createEvent("CustomEvent");
            event.initCustomEvent(eventName, true, true, data);
        }
        el.dispatchEvent(event);
    }
    /**
    * Polyfill of .matches()
    */ function matches(el, selector) {
        return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
    }
    /**
    * Toggles the visibility of the passed element el.
    */ function toggle(el, value) {
        if (typeof value === "boolean") for(var i = 0; i < el.length; i++)el[i].style.display = value ? "block" : "none";
         //we don't use it in other way, so no else :)
        return el;
    }
    /**
    * Creates a HTMLElement from the passed HTML string.
    * https://stackoverflow.com/a/494348/1081396
    */ function createElementFromHTML(htmlString) {
        var div = doc.createElement("div");
        div.innerHTML = htmlString.trim(); // Change this to div.childNodes to support multiple top-level nodes
        return div.firstChild;
    }
    /**
    * Removes the passed item/s from the DOM.
    */ function remove(items) {
        items = getList(items);
        for(var i = 0; i < items.length; i++){
            var item = items[i];
            if (item && item.parentElement) item.parentNode.removeChild(item);
        }
    } //https://jsfiddle.net/w1rktecz/
    function untilAll(item, selector, fn) {
        var sibling = item[fn];
        var siblings = [];
        while(sibling){
            if (matches(sibling, selector) || selector == null) siblings.push(sibling);
            sibling = sibling[fn];
        }
        return siblings;
    }
    /**
    * Gets all next elements matching the passed selector.
    */ function nextAll(item, selector) {
        return untilAll(item, selector, "nextElementSibling");
    }
    /**
    * Gets all previous elements matching the passed selector.
    */ function prevAll(item, selector) {
        return untilAll(item, selector, "previousElementSibling");
    }
    /**
    * Converts an object to an array.
    */ function toArray(objectData) {
        return Object.keys(objectData).map(function(key) {
            return objectData[key];
        });
    }
    function getLast(items) {
        return items[items.length - 1];
    }
    /**
    * Gets the average of the last `number` elements of the given array.
    */ function getAverage(elements, number) {
        var sum = 0; //taking `number` elements from the end to make the average, if there are not enought, 1
        var lastElements = elements.slice(Math.max(elements.length - number, 1));
        for(var i = 0; i < lastElements.length; i++)sum = sum + lastElements[i];
        return Math.ceil(sum / number);
    }
    /**
    * Sets the value for the given attribute from the `data-` attribute with the same suffix
    * ie: data-srcset ==> srcset  |  data-src ==> src
    */ function setSrc(element, attribute) {
        element.setAttribute(attribute, getAttr(element, "data-" + attribute));
        element.removeAttribute("data-" + attribute);
    }
    function getParentsUntil(item, topParentSelector) {
        var parents = [
            item
        ];
        do {
            item = item.parentNode;
            parents.push(item);
        }while (!matches(item, topParentSelector));
        return parents;
    }
    function isInsideInput() {
        var activeElement = doc.activeElement;
        return matches(activeElement, "textarea") || matches(activeElement, "input") || matches(activeElement, "select") || getAttr(activeElement, "contentEditable") == "true" || getAttr(activeElement, "contentEditable") == "";
    } //utils are public, so we can use it wherever we want
    // @ts-ignore
    window["fp_utils"] = {
        "$": $,
        "deepExtend": deepExtend,
        "hasClass": hasClass,
        "getWindowHeight": getWindowHeight,
        "css": css,
        "prev": prev,
        "next": next,
        "last": last,
        "index": index,
        "getList": getList,
        "hide": hide,
        "show": show,
        "isArrayOrList": isArrayOrList,
        "addClass": addClass,
        "removeClass": removeClass,
        "appendTo": appendTo,
        "wrap": wrap,
        "wrapAll": wrapAll,
        "unwrap": unwrap,
        "closest": closest,
        "after": after,
        "before": before,
        "insertBefore": insertBefore,
        "getScrollTop": getScrollTop,
        "siblings": siblings,
        "preventDefault": preventDefault,
        "isFunction": isFunction,
        "trigger": trigger,
        "matches": matches,
        "toggle": toggle,
        "createElementFromHTML": createElementFromHTML,
        "remove": remove,
        // "filter": filter,
        "untilAll": untilAll,
        "nextAll": nextAll,
        "prevAll": prevAll
    };
    var utils = /*#__PURE__*/ Object.freeze({
        __proto__: null,
        // showError: showError,
        isVisible: isVisible,
        getVisible: getVisible,
        $: $,
        deepExtend: deepExtend,
        hasClass: hasClass,
        getWindowHeight: getWindowHeight,
        getWindowWidth: getWindowWidth,
        css: css,
        prev: prev,
        next: next,
        last: last,
        index: index,
        getList: getList,
        hide: hide,
        show: show,
        isArrayOrList: isArrayOrList,
        addClass: addClass,
        removeClass: removeClass,
        appendTo: appendTo,
        wrap: wrap,
        wrapAll: wrapAll,
        wrapInner: wrapInner,
        unwrap: unwrap,
        closest: closest,
        after: after,
        before: before,
        insertBefore: insertBefore,
        getScrollTop: getScrollTop,
        siblings: siblings,
        preventDefault: preventDefault,
        getAttr: getAttr,
        docAddEvent: docAddEvent,
        windowAddEvent: windowAddEvent,
        docRemoveEvent: docRemoveEvent,
        windowRemoveEvent: windowRemoveEvent,
        isFunction: isFunction,
        trigger: trigger,
        matches: matches,
        toggle: toggle,
        createElementFromHTML: createElementFromHTML,
        remove: remove,
        untilAll: untilAll,
        nextAll: nextAll,
        prevAll: prevAll,
        toArray: toArray,
        getLast: getLast,
        getAverage: getAverage,
        setSrc: setSrc,
        getParentsUntil: getParentsUntil,
        isInsideInput: isInsideInput
    });
    function _typeof(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function(obj) {
            return typeof obj;
        };
        else _typeof = function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        return _typeof(obj);
    }
    var EventEmitter = {
        events: {},
        on: function on(event, listener) {
            var _this = this;
            if (_typeof(this.events[event]) !== "object") this.events[event] = [];
            this.events[event].push(listener);
            return function() {
                return _this.removeListener(event, listener);
            };
        },
        removeListener: function removeListener(event, listener) {
            if (_typeof(this.events[event]) === "object") {
                var idx = this.events[event].indexOf(listener);
                if (idx > -1) this.events[event].splice(idx, 1);
            }
        },
        emit: function emit(event) {
            var _this2 = this;
            for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
            if (_typeof(this.events[event]) === "object") this.events[event].forEach(function(listener) {
                return listener.apply(_this2, args);
            });
        },
        once: function once(event, listener) {
            var _this3 = this;
            var remove = this.on(event, function() {
                remove();
                for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
                listener.apply(_this3, args);
            });
        }
    };
    var state = {
        numSections: 0,
        numSlides: 0,
        slides: [],
        sections: [],
        activeSection: null,
        scrollTrigger: null,
        isBeyondFullpage: false,
        aboutToScrollToFullPage: false,
        slideMoving: false,
        isResizing: false,
        isScrolling: false,
        lastScrolledDestiny: undefined,
        lastScrolledSlide: undefined,
        activeAnimation: false,
        canScroll: true,
        touchDirection: "none",
        wheelDirection: "none",
        isGrabbing: false,
        isUsingWheel: false,
        isWindowFocused: true,
        previousDestTop: 0,
        windowsHeight: getWindowHeight(),
        isDoingContinousVertical: false,
        timeouts: {},
        scrollY: 0,
        scrollX: 0
    }; // @ts-ignore
    win.state = state;
    function setState(props) {
        Object.assign(state, props);
    }
    function getState() {
        return state;
    }
    function getActivePanel() {
        return state.activeSection && state.activeSection.activeSlide ? state.activeSection.activeSlide : state.activeSection;
    }
    var events = {
        onAfterRenderNoAnchor: "onAfterRenderNoAnchor",
        onClickOrTouch: "onClickOrTouch",
        moveSlideLeft: "moveSlideLeft",
        moveSlideRight: "moveSlideRight",
        onInitialise: "onInitialise",
        beforeInit: "beforeInit",
        bindEvents: "bindEvents",
        onDestroy: "onDestroy",
        contentChanged: "contentChanged",
        onScrollOverflowScrolled: "onScrollOverflowScrolled",
        onScrollPageAndSlide: "onScrollPageAndSlide",
        onKeyDown: "onKeyDown",
        onMenuClick: "onMenuClick",
        scrollPage: "scrollPage",
        landscapeScroll: "landscapeScroll",
        scrollBeyondFullpage: "scrollBeyondFullpage",
        onPerformMovement: "onPerformMovement",
        onSlideLeave: "onSlideLeave",
        onLeave: "onLeave",
        afterSectionLoads: "afterSectionLoads",
        afterSlideLoads: "afterSlideLoads"
    };
    EventEmitter.on(events.bindEvents, bindEvents$c);
    function bindEvents$c() {
        //Scrolls to the section when clicking the navigation bullet
        //simulating the jQuery .on('click') event using delegation
        [
            "click",
            "touchstart"
        ].forEach(function(eventName) {
            docAddEvent(eventName, delegatedEvents);
        });
        windowAddEvent("focus", focusHandler);
        internalEvents();
    }
    function internalEvents() {
        EventEmitter.on(events.onDestroy, onDestroy$9);
    }
    function delegatedEvents(e) {
        EventEmitter.emit(events.onClickOrTouch, {
            e: e,
            target: e.target
        });
    }
    function onDestroy$9() {
        [
            "click",
            "touchstart"
        ].forEach(function(eventName) {
            docRemoveEvent(eventName, delegatedEvents);
        });
    } // changing isWindowFocused to true on focus event
    function focusHandler() {
        setState({
            isWindowFocused: true
        });
    }
    // keeping central set of classnames and selectors
    var WRAPPER = "fullpage-wrapper";
    var WRAPPER_SEL = "." + WRAPPER; // slimscroll
    var SCROLLABLE = "fp-scrollable";
    var RESPONSIVE = "fp-responsive";
    var NO_TRANSITION = "fp-notransition";
    var DESTROYED = "fp-destroyed";
    var ENABLED = "fp-enabled";
    var VIEWING_PREFIX = "fp-viewing";
    var ACTIVE = "active";
    var ACTIVE_SEL = "." + ACTIVE;
    var COMPLETELY = "fp-completely";
    var COMPLETELY_SEL = "." + COMPLETELY; // section
    var SECTION_DEFAULT_SEL = ".section";
    var SECTION = "fp-section";
    var SECTION_SEL = "." + SECTION;
    var SECTION_ACTIVE_SEL = SECTION_SEL + ACTIVE_SEL;
    var TABLE_CELL = "fp-tableCell";
    var TABLE_CELL_SEL = "." + TABLE_CELL;
    var AUTO_HEIGHT = "fp-auto-height";
    var AUTO_HEIGHT_SEL = "." + AUTO_HEIGHT;
    var AUTO_HEIGHT_RESPONSIVE = "fp-auto-height-responsive";
    var AUTO_HEIGHT_RESPONSIVE_SEL = "." + AUTO_HEIGHT_RESPONSIVE;
    var NORMAL_SCROLL = "fp-normal-scroll";
    var SECTION_NAV = "fp-nav";
    var SECTION_NAV_SEL = "#" + SECTION_NAV;
    var SECTION_NAV_TOOLTIP = "fp-tooltip";
    var SECTION_NAV_TOOLTIP_SEL = "." + SECTION_NAV_TOOLTIP;
    var SHOW_ACTIVE_TOOLTIP = "fp-show-active"; // slide
    var SLIDE_DEFAULT_SEL = ".slide";
    var SLIDE = "fp-slide";
    var SLIDE_SEL = "." + SLIDE;
    var SLIDE_ACTIVE_SEL = SLIDE_SEL + ACTIVE_SEL;
    var SLIDES_WRAPPER = "fp-slides";
    var SLIDES_WRAPPER_SEL = "." + SLIDES_WRAPPER;
    var SLIDES_CONTAINER = "fp-slidesContainer";
    var SLIDES_CONTAINER_SEL = "." + SLIDES_CONTAINER;
    var TABLE = "fp-table";
    var OVERFLOW = "fp-overflow";
    var OVERFLOW_SEL = "." + OVERFLOW;
    var IS_OVERFLOW = "fp-is-overflow"; // slide nav
    var SLIDES_NAV = "fp-slidesNav";
    var SLIDES_NAV_SEL = "." + SLIDES_NAV;
    var SLIDES_NAV_LINK_SEL = SLIDES_NAV_SEL + " a";
    var SLIDES_STYLED_ARROW = "fp-arrow";
    var SLIDES_ARROW = "fp-controlArrow";
    var SLIDES_ARROW_SEL = "." + SLIDES_ARROW;
    var SLIDES_PREV = "fp-prev";
    var SLIDES_PREV_SEL = "." + SLIDES_PREV;
    var SLIDES_ARROW_PREV_SEL = SLIDES_ARROW_SEL + SLIDES_PREV_SEL;
    var SLIDES_NEXT = "fp-next";
    var SLIDES_NEXT_SEL = "." + SLIDES_NEXT;
    var SLIDES_ARROW_NEXT_SEL = SLIDES_ARROW_SEL + SLIDES_NEXT_SEL;
    var defaultOptions = {
        //navigation
        menu: false,
        anchors: [],
        lockAnchors: false,
        navigation: false,
        navigationPosition: "right",
        navigationTooltips: [],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: "bottom",
        scrollBar: false,
        hybrid: false,
        licenseKey: "",
        credits: {
            "enabled": true,
            "label": "Made with fullPage.js",
            "position": "right"
        },
        //scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 600,
        easing: "easeInOutCubic",
        easingcss3: "ease",
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: null,
        scrollOverflow: true,
        scrollOverflowReset: false,
        touchSensitivity: 5,
        touchWrapper: null,
        bigSectionsDestination: null,
        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,
        allowCorrectDirection: false,
        //design
        scrollOverflowMacStyle: true,
        controlArrows: true,
        controlArrowsHTML: [
            '<div class="' + SLIDES_STYLED_ARROW + '"></div>',
            '<div class="' + SLIDES_STYLED_ARROW + '"></div>'
        ],
        controlArrowColor: "#fff",
        verticalCentered: true,
        sectionsColor: [],
        paddingTop: 0,
        paddingBottom: 0,
        fixedElements: null,
        responsive: 0,
        //backwards compabitility with responsiveWiddth
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,
        parallax: false,
        parallaxOptions: {
            type: "reveal",
            percentage: 62,
            property: "translate"
        },
        cards: false,
        cardsOptions: {
            perspective: 100,
            fadeContent: true,
            fadeBackground: true
        },
        //Custom selectors
        sectionSelector: SECTION_DEFAULT_SEL,
        slideSelector: SLIDE_DEFAULT_SEL,
        //events
        afterLoad: null,
        beforeLeave: null,
        onLeave: null,
        afterRender: null,
        afterResize: null,
        afterReBuild: null,
        afterSlideLoad: null,
        onSlideLeave: null,
        afterResponsive: null,
        onScrollOverflow: null,
        lazyLoading: true,
        observer: true,
        scrollBeyondFullpage: true
    };
    var container = null;
    var g_initialAnchorsInDom = false;
    var originals = deepExtend({}, defaultOptions); //deep copy
    var g_options = null;
    function getInitialAnchorsInDom() {
        return g_initialAnchorsInDom;
    }
    function setContainer(value) {
        container = value;
    }
    function getContainer(value) {
        return container;
    }
    function getOptions() {
        return g_options || defaultOptions;
    }
    function setOptions(options) {
        g_options = deepExtend({}, defaultOptions, options);
        originals = Object.assign({}, g_options);
    }
    function getOriginals() {
        return originals;
    }
    function setOption(name, value) {
        defaultOptions[name] = value;
    }
    /*
    * Sets the state for a variable with multiple states (original, and temporal)
    * Some variables such as `autoScrolling` or `recordHistory` might change automatically its state when using `responsive` or `autoScrolling:false`.
    * This function is used to keep track of both states, the original and the temporal one.
    * If type is not 'internal', then we assume the user is globally changing the variable.
    */ function setVariableState(variable, value, type) {
        g_options[variable] = value;
        if (type !== "internal") originals[variable] = value;
    }
    /**
    * Setting options from DOM elements if they are not provided.
    */ function setOptionsFromDOM() {
        //no anchors option? Checking for them in the DOM attributes
        if (!getOptions().anchors.length) {
            var anchorsAttribute = "[data-anchor]";
            var anchors = $(getOptions().sectionSelector.split(",").join(anchorsAttribute + ",") + anchorsAttribute, container);
            if (anchors.length && anchors.length === $(getOptions().sectionSelector, container).length) {
                g_initialAnchorsInDom = true;
                anchors.forEach(function(item) {
                    getOptions().anchors.push(getAttr(item, "data-anchor").toString());
                });
            }
        } //no tooltips option? Checking for them in the DOM attributes
        if (!getOptions().navigationTooltips.length) {
            var tooltipsAttribute = "[data-tooltip]";
            var tooltips = $(getOptions().sectionSelector.split(",").join(tooltipsAttribute + ",") + tooltipsAttribute, container);
            if (tooltips.length) tooltips.forEach(function(item) {
                getOptions().navigationTooltips.push(getAttr(item, "data-tooltip").toString());
            });
        }
    }
    var plainItem = function plainItem(panel) {
        this.anchor = panel.anchor;
        this.item = panel.item;
        this.index = panel.index();
        this.isLast = this.index === panel.item.parentElement.querySelectorAll(panel.selector).length - 1;
        this.isFirst = !this.index;
        this.isActive = panel.isActive;
    };
    /**
    * Item. Slide or Section objects share the same properties.
    */ var Item = function Item(el, selector) {
        this.parent = this.parent || null;
        this.selector = selector;
        this.anchor = getAttr(el, "data-anchor") || getOptions().anchors[index(el, getOptions().sectionSelector)];
        this.item = el;
        this.isVisible = isVisible(el);
        this.isActive = hasClass(el, ACTIVE);
        this.hasScroll = hasClass(el, OVERFLOW) || $(OVERFLOW_SEL, el)[0] != null;
        this.isSection = selector === getOptions().sectionSelector;
        this.container = closest(el, SLIDES_CONTAINER_SEL) || closest(el, WRAPPER_SEL);
        this.index = function() {
            return this.siblings().indexOf(this);
        };
    };
    Item.prototype.siblings = function() {
        if (this.isSection) {
            if (this.isVisible) return state.sections;
            else return state.sectionsIncludingHidden;
        }
        return this.parent ? this.parent.slides : 0;
    };
    Item.prototype.prev = function() {
        var siblings = this.siblings();
        var currentIndex = this.isSection ? siblings.indexOf(this) : this.parent.slides.indexOf(this);
        var prevIndex = currentIndex - 1;
        if (prevIndex >= 0) return siblings[prevIndex];
        return null;
    };
    Item.prototype.next = function() {
        var siblings = this.siblings();
        var currentIndex = this.isSection ? siblings.indexOf(this) : this.parent.slides.indexOf(this);
        var nextIndex = currentIndex + 1;
        if (nextIndex < siblings.length) return siblings[nextIndex];
        return null;
    };
    Item.prototype["prevPanel"] = function() {
        return this.prev() || (this.parent ? this.parent.prev() : null);
    };
    Item.prototype["nextPanel"] = function() {
        return this.next() || (this.parent ? this.parent.next() : null);
    };
    Item.prototype.getSiblings = function() {
        if (this.isSection) return state.sections;
        return state.panels;
    };
    function getNodes(panels) {
        return panels.map(function(panel) {
            return panel.item;
        });
    }
    function getPanelByElement(panels, el) {
        return panels.find(function(panel) {
            return panel.item === el;
        });
    }
    var Section = function Section(el) {
        plainItem.call(this, el);
    };
    var Slide = function Slide(el) {
        plainItem.call(this, el);
    };
    /**
    * Gets the active slide (or section) for the given section
    */ function getSlideOrSection(destiny) {
        var slide = $(SLIDE_ACTIVE_SEL, destiny);
        if (slide.length) destiny = slide[0];
        return destiny;
    }
    function getSlideOrSectionPanel(panel) {
        if (!panel) return null;
        return panel.activeSlide ? panel.activeSlide : panel;
    }
    function isFullPageAbove() {
        return getContainer().getBoundingClientRect().bottom >= 0;
    }
    /**
    * Gets the scrolling settings depending on the plugin autoScrolling option
    */ function getScrollSettings(top) {
        var options = getOptions();
        var position;
        var element; //top property animation
        if (options.autoScrolling && !options.scrollBar) {
            position = -top;
            element = $(WRAPPER_SEL)[0];
        } else {
            position = top;
            element = window;
        }
        return {
            options: position,
            element: element
        };
    }
    /**
    * Scrolls the page / slider the given number of pixels.
    * It will do it one or another way dependiong on the library's config.
    */ function setScrolling(element, val) {
        if (!getOptions().autoScrolling || getOptions().scrollBar || element.self != window && hasClass(element, SLIDES_WRAPPER)) {
            //scrolling horizontally through the slides?
            if (element.self != window && hasClass(element, SLIDES_WRAPPER)) element.scrollLeft = val;
            else element.scrollTo(0, val);
        } else element.style.top = val + "px";
    }
    /**
    * Adds transition animations for the given element
    */ function addAnimation(element) {
        var transition = "transform " + getOptions().scrollingSpeed + "ms " + getOptions().easingcss3;
        removeClass(element, NO_TRANSITION);
        return css(element, {
            "-webkit-transition": transition,
            "transition": transition
        });
    }
    /**
    * Retuns `up` or `down` depending on the scrolling movement to reach its destination
    * from the current section.
    */ function getYmovement(activeSection, destiny) {
        var fromIndex = activeSection.index();
        var toIndex = index(destiny, SECTION_SEL);
        if (fromIndex == toIndex) return "none";
        if (fromIndex > toIndex) return "up";
        return "down";
    }
    /**
    * Remove transition animations for the given element
    */ function removeAnimation(element) {
        return addClass(element, NO_TRANSITION);
    }
    /**
    * Returns the cross-browser transform string.
    */ function getTransforms(translate3d) {
        return {
            "-webkit-transform": translate3d,
            "-moz-transform": translate3d,
            "-ms-transform": translate3d,
            "transform": translate3d
        };
    }
    var silentScrollId;
    /**
    * Adds a css3 transform property to the container class with or without animation depending on the animated param.
    */ function transformContainer(translate3d, animated) {
        if (animated) addAnimation(getContainer());
        else removeAnimation(getContainer());
        clearTimeout(silentScrollId);
        css(getContainer(), getTransforms(translate3d));
        FP.test.translate3d = translate3d; //syncronously removing the class after the animation has been applied.
        silentScrollId = setTimeout(function() {
            removeClass(getContainer(), NO_TRANSITION);
        }, 10);
    }
    /**
    * Scrolls silently (with no animation) the page to the given Y position.
    */ function silentScroll(top) {
        // The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
        // that's why we round it to 0.
        var roundedTop = Math.round(top);
        if (getOptions().css3 && getOptions().autoScrolling && !getOptions().scrollBar) {
            var translate3d = "translate3d(0px, -" + roundedTop + "px, 0px)";
            transformContainer(translate3d, false);
        } else if (getOptions().autoScrolling && !getOptions().scrollBar) {
            css(getContainer(), {
                "top": -roundedTop + "px"
            });
            FP.test.top = -roundedTop + "px";
        } else {
            var scrollSettings = getScrollSettings(roundedTop);
            setScrolling(scrollSettings.element, scrollSettings.options);
        }
    }
    FP.setScrollingSpeed = setScrollingSpeed;
    /**
    * Defines the scrolling speed
    */ function setScrollingSpeed(value, type) {
        setVariableState("scrollingSpeed", value, type);
    }
    var $body = null;
    var $html = null;
    var $htmlBody = null; // caching common elements
    function setCache() {
        $body = $("body")[0];
        $html = $("html")[0];
        $htmlBody = $("html, body");
    }
    //@ts-check
    var _g_animateScroll;
    /**
    * Simulates the animated scrollTop of jQuery. Used when css3:false or scrollBar:true or autoScrolling:false
    * http://stackoverflow.com/a/16136789/1081396
    */ function scrollTo(element, to, duration, callback) {
        var start = getScrolledPosition(element);
        var change = to - start;
        var isCallbackFired = false;
        var startTime;
        var wasAnimationActive = state.activeAnimation;
        setState({
            activeAnimation: true
        }); // Cancelling any possible previous animations (io: clicking on nav dots very fast)
        if (_g_animateScroll) window.cancelAnimationFrame(_g_animateScroll);
        _g_animateScroll = function g_animateScroll(timestamp) {
            if (!startTime) startTime = timestamp;
            var currentTime = Math.floor(timestamp - startTime);
            if (state.activeAnimation) {
                //in order to stope it from other function whenever we want
                var val = to;
                if (duration) // @ts-ignore
                val = win.fp_easings[getOptions().easing](currentTime, start, change, duration);
                if (currentTime <= duration) setScrolling(element, val);
                if (currentTime < duration) window.requestAnimationFrame(_g_animateScroll);
                else if (typeof callback !== "undefined" && !isCallbackFired) {
                    callback();
                    setState({
                        activeAnimation: false
                    });
                    isCallbackFired = true;
                }
            } else if (!isCallbackFired && !wasAnimationActive) {
                callback();
                setState({
                    activeAnimation: false
                });
                isCallbackFired = true;
            }
        };
        window.requestAnimationFrame(_g_animateScroll);
    }
    /**
    * Getting the position of the element to scroll when using jQuery animations
    */ function getScrolledPosition(element) {
        var position; //is not the window element and is a slide?
        if (element.self != win && hasClass(element, SLIDES_WRAPPER)) position = element.scrollLeft;
        else if (!getOptions().autoScrolling || getOptions().scrollBar) position = getScrollTop();
        else position = element.offsetTop;
         //gets the top property of the wrapper
        return position;
    }
    /**
    * Makes sure to only create a Panel object if the element exist
    */ function nullOrSection(el) {
        if (el && !el.item) return new Section(new SectionPanel(el));
        return el ? new Section(el) : null;
    }
    function nullOrSlide(el) {
        return el ? new Slide(el) : null;
    }
    /**
    * Dispatch events & callbacks
    */ function fireCallback(eventName, v) {
        var eventData = getEventData(eventName, v);
        trigger(getContainer(), eventName, eventData);
        if (getOptions()[eventName].apply(eventData[Object.keys(eventData)[0]], toArray(eventData)) === false) return false;
        return true;
    }
    /**
    * Gets the event's data for the given event on the right format.
    */ function getEventData(eventName, v) {
        //using functions to run only the necessary bits within the object
        var paramsPerEvent = {
            afterRender: function afterRender() {
                return {
                    section: nullOrSection(getState().activeSection),
                    slide: nullOrSlide(getState().activeSection.activeSlide)
                };
            },
            onLeave: function onLeave() {
                return {
                    origin: nullOrSection(v.items.origin),
                    destination: nullOrSection(v.items.destination),
                    direction: v.direction,
                    trigger: getState().scrollTrigger
                };
            },
            afterLoad: function afterLoad() {
                return paramsPerEvent.onLeave();
            },
            afterSlideLoad: function afterSlideLoad() {
                return {
                    section: nullOrSection(v.items.section),
                    origin: nullOrSection(v.items.origin),
                    destination: nullOrSection(v.items.destination),
                    direction: v.direction,
                    trigger: getState().scrollTrigger
                };
            },
            onSlideLeave: function onSlideLeave() {
                return paramsPerEvent.afterSlideLoad();
            },
            beforeLeave: function beforeLeave() {
                return paramsPerEvent.onLeave();
            },
            onScrollOverflow: function onScrollOverflow() {
                return {
                    section: nullOrSection(getState().activeSection),
                    slide: nullOrSlide(getState().activeSection.activeSlide),
                    position: v.position,
                    direction: v.direction
                };
            }
        };
        return paramsPerEvent[eventName]();
    }
    /**
    * Plays video and audio elements.
    */ function playMedia(destiny) {
        var panel = getSlideOrSection(destiny); //playing HTML5 media elements
        $("video, audio", panel).forEach(function(element) {
            if (element.hasAttribute("data-autoplay") && typeof element.play === "function") element.play();
        }); //youtube videos
        $('iframe[src*="youtube.com/embed/"]', panel).forEach(function(element) {
            if (element.hasAttribute("data-autoplay")) playYoutube(element);
             //in case the URL was not loaded yet. On page load we need time for the new URL (with the API string) to load.
            element.onload = function() {
                if (element.hasAttribute("data-autoplay")) playYoutube(element);
            };
        });
    }
    /**
    * Plays a youtube video
    */ function playYoutube(element) {
        element.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
    }
    /**
    * Stops video and audio elements.
    */ function stopMedia(destiny) {
        var panel = getSlideOrSection(destiny); //stopping HTML5 media elements
        $("video, audio", panel).forEach(function(element) {
            if (!element.hasAttribute("data-keepplaying") && typeof element.pause === "function") element.pause();
        }); //youtube videos
        $('iframe[src*="youtube.com/embed/"]', panel).forEach(function(element) {
            if (/youtube\.com\/embed\//.test(getAttr(element, "src")) && !element.hasAttribute("data-keepplaying")) element.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
        });
    }
    /*
    * Enables the Youtube videos API so we can control their flow if necessary.
    */ function enableYoutubeAPI() {
        $('iframe[src*="youtube.com/embed/"]', getContainer()).forEach(function(item) {
            addURLParam(item, "enablejsapi=1");
        });
    }
    /**
    * Adds a new parameter and its value to the `src` of a given element
    */ function addURLParam(element, newParam) {
        var originalSrc = getAttr(element, "src");
        element.setAttribute("src", originalSrc + getUrlParamSign(originalSrc) + newParam);
    }
    /*
    * Returns the prefix sign to use for a new parameter in an existen URL.
    *
    * @return {String}  ? | &
    */ function getUrlParamSign(url) {
        return !/\?/.test(url) ? "?" : "&";
    }
    /**
    * Lazy loads image, video and audio elements.
    */ function lazyLoad(destiny) {
        if (!getOptions().lazyLoading) return;
        var panel = getSlideOrSection(destiny);
        $("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]", panel).forEach(function(element) {
            [
                "src",
                "srcset"
            ].forEach(function(type) {
                var attribute = getAttr(element, "data-" + type);
                if (attribute != null && attribute) {
                    setSrc(element, type);
                    element.addEventListener("load", function() {});
                }
            });
            if (matches(element, "source")) {
                var elementToPlay = closest(element, "video, audio");
                if (elementToPlay) {
                    elementToPlay.load();
                    elementToPlay.onloadeddata = function() {};
                }
            }
        });
    }
    /**
    * Sets a class for the body of the page depending on the active section / slide
    */ function setBodyClass() {
        var section = getState().activeSection.item;
        var slide = getState().activeSection.activeSlide;
        var sectionAnchor = getAnchor(section);
        var text = String(sectionAnchor);
        if (slide) {
            var slideAnchor = getAnchor(slide.item);
            text = text + "-" + slideAnchor;
        } //changing slash for dash to make it a valid CSS style
        text = text.replace("/", "-").replace("#", ""); //removing previous anchor classes
        var classRe = new RegExp("\\b\\s?" + VIEWING_PREFIX + "-[^\\s]+\\b", "g");
        $body.className = $body.className.replace(classRe, ""); //adding the current anchor
        addClass($body, VIEWING_PREFIX + "-" + text);
    }
    /**
    * Gets the anchor for the given slide / section. Its index will be used if there's none.
    */ function getAnchor(element) {
        if (!element) return null;
        var anchor = getAttr(element, "data-anchor");
        var elementIndex = index(element); //Slide without anchor link? We take the index instead.
        if (anchor == null) anchor = elementIndex;
        return anchor;
    }
    /**
    * Sets the state of the website depending on the active section/slide.
    * It changes the URL hash when needed and updates the body class.
    */ function setPageStatus(slideIndex, slideAnchor, anchorLink) {
        var sectionHash = "";
        if (getOptions().anchors.length && !getOptions().lockAnchors) {
            //isn't it the first slide?
            if (slideIndex) {
                if (anchorLink != null) sectionHash = anchorLink;
                 //slide without anchor link? We take the index instead.
                if (slideAnchor == null) slideAnchor = slideIndex;
                setState({
                    lastScrolledSlide: slideAnchor
                });
                setUrlHash(sectionHash + "/" + slideAnchor); //first slide won't have slide anchor, just the section one
            } else if (slideIndex != null) {
                setState({
                    lastScrolledSlide: slideAnchor
                });
                setUrlHash(anchorLink);
            } else setUrlHash(anchorLink);
        }
        setBodyClass();
    }
    /**
    * Sets the URL hash.
    */ function setUrlHash(url) {
        if (getOptions().recordHistory) location.hash = url;
        else //Mobile Chrome doesn't work the normal way, so... lets use HTML5 for phones :)
        if (isTouchDevice || isTouch) win.history.replaceState(undefined, undefined, "#" + url);
        else {
            var baseUrl = win.location.href.split("#")[0];
            win.location.replace(baseUrl + "#" + url);
        }
    }
    /**
    * Gets the name for screen readers for a section/slide navigation bullet.
    */ function getBulletLinkName(i, defaultName, item) {
        var anchor = defaultName === "Section" ? getOptions().anchors[i] : getAttr(item, "data-anchor");
        return encodeURI(getOptions().navigationTooltips[i] || anchor || defaultName + " " + (i + 1));
    }
    function slideBulletHandler(e) {
        // not all events are cancellable 
        // https://www.uriports.com/blog/easy-fix-for-intervention-ignored-attempt-to-cancel-a-touchmove-event-with-cancelable-false/
        if (e.cancelable) preventDefault(e);
        setState({
            scrollTrigger: "horizontalNav"
        });
        /*jshint validthis:true */ var sectionElem = closest(this, SECTION_SEL);
        var slides = $(SLIDES_WRAPPER_SEL, closest(this, SECTION_SEL))[0];
        var section = getPanelByElement(getState().sections, sectionElem);
        var destiny = section.slides[index(closest(this, "li"))];
        EventEmitter.emit(events.landscapeScroll, {
            slides: slides,
            destination: destiny.item
        });
    }
    /**
    * Sets the state for the horizontal bullet navigations.
    */ function activeSlidesNavigation(slidesNav, slideIndex) {
        if (getOptions().slidesNavigation && slidesNav != null) {
            removeClass($(ACTIVE_SEL, slidesNav), ACTIVE);
            addClass($("a", $("li", slidesNav)[slideIndex]), ACTIVE);
        }
    }
    /**
    * Creates a landscape navigation bar with dots for horizontal sliders.
    */ function addSlidesNavigation(section) {
        var sectionElem = section.item;
        var numSlides = section.slides.length;
        appendTo(createElementFromHTML('<div class="' + SLIDES_NAV + '"><ul></ul></div>'), sectionElem);
        var nav = $(SLIDES_NAV_SEL, sectionElem)[0]; //top or bottom
        addClass(nav, "fp-" + getOptions().slidesNavPosition);
        for(var i = 0; i < numSlides; i++){
            var slide = $(SLIDE_SEL, sectionElem)[i];
            appendTo(createElementFromHTML('<li><a href="#"><span class="fp-sr-only">' + getBulletLinkName(i, "Slide", slide) + "</span><span></span></a></li>"), $("ul", nav)[0]);
        } //centering it
        css(nav, {
            "margin-left": "-" + nav.innerWidth / 2 + "px"
        });
        var activeSlideIndex = section.activeSlide ? section.activeSlide.index() : 0;
        addClass($("a", $("li", nav)[activeSlideIndex]), ACTIVE);
    }
    var isScrollAllowed = {};
    isScrollAllowed.m = {
        "up": true,
        "down": true,
        "left": true,
        "right": true
    };
    isScrollAllowed.k = deepExtend({}, isScrollAllowed.m);
    /**
    * Allowing or disallowing the mouse/swipe scroll in a given direction. (not for keyboard)
    * @param type m (mouse) or k (keyboard)
    */ function setIsScrollAllowed(value, direction, type) {
        //up, down, left, right
        if (direction !== "all") isScrollAllowed[type][direction] = value;
        else Object.keys(isScrollAllowed[type]).forEach(function(key) {
            isScrollAllowed[type][key] = value;
        });
    }
    function getIsScrollAllowed() {
        return isScrollAllowed;
    }
    EventEmitter.on(events.onClickOrTouch, onClickOrTouch$2);
    function onClickOrTouch$2(params) {
        var target = params.target;
        if (matches(target, SLIDES_ARROW_SEL) || closest(target, SLIDES_ARROW_SEL)) slideArrowHandler.call(target, params);
    } //Scrolling horizontally when clicking on the slider controls.
    function slideArrowHandler() {
        /*jshint validthis:true */ var section = closest(this, SECTION_SEL);
        /*jshint validthis:true */ if (hasClass(this, SLIDES_PREV)) {
            if (getIsScrollAllowed().m.left) {
                setState({
                    scrollTrigger: "slideArrow"
                });
                EventEmitter.emit(events.moveSlideLeft, {
                    section: section
                });
            }
        } else if (getIsScrollAllowed().m.right) {
            setState({
                scrollTrigger: "slideArrow"
            });
            EventEmitter.emit(events.moveSlideRight, {
                section: section
            });
        }
    }
    /**
    * Creates the control arrows for the given section
    */ function createSlideArrows(section) {
        var sectionElem = section.item;
        var arrows = [
            createElementFromHTML(getOptions().controlArrowsHTML[0]),
            createElementFromHTML(getOptions().controlArrowsHTML[1])
        ];
        after($(SLIDES_WRAPPER_SEL, sectionElem)[0], arrows);
        addClass(arrows, SLIDES_ARROW);
        addClass(arrows[0], SLIDES_PREV);
        addClass(arrows[1], SLIDES_NEXT);
        if (getOptions().controlArrowColor !== "#fff") {
            css($(SLIDES_ARROW_NEXT_SEL, sectionElem), {
                "border-color": "transparent transparent transparent " + getOptions().controlArrowColor
            });
            css($(SLIDES_ARROW_PREV_SEL, sectionElem), {
                "border-color": "transparent " + getOptions().controlArrowColor + " transparent transparent"
            });
        }
        if (!getOptions().loopHorizontal) hide($(SLIDES_ARROW_PREV_SEL, sectionElem));
    }
    function toggleControlArrows(v) {
        if (!getOptions().loopHorizontal && getOptions().controlArrows) {
            //hidding it for the fist slide, showing for the rest
            toggle($(SLIDES_ARROW_PREV_SEL, v.section), v.slideIndex !== 0); //hidding it for the last slide, showing for the rest
            toggle($(SLIDES_ARROW_NEXT_SEL, v.section), next(v.destiny) != null);
        }
    }
    FP.setRecordHistory = setRecordHistory;
    /**
    * Defines wheter to record the history for each hash change in the URL.
    */ function setRecordHistory(value, type) {
        setVariableState("recordHistory", value, type);
    }
    FP.setAutoScrolling = setAutoScrolling;
    FP.test.setAutoScrolling = setAutoScrolling;
    /**
    * Sets the autoScroll option.
    * It changes the scroll bar visibility and the history of the site as a result.
    */ function setAutoScrolling(value, type) {
        //removing the transformation
        if (!value) silentScroll(0);
        setVariableState("autoScrolling", value, type);
        var element = getState().activeSection.item;
        if (getOptions().autoScrolling && !getOptions().scrollBar) {
            css($htmlBody, {
                "overflow": "hidden",
                "height": "100%"
            });
            removeClass($body, "fp-scrollable");
            setRecordHistory(getOriginals().recordHistory, "internal"); //for IE touch devices
            css(getContainer(), {
                "-ms-touch-action": "none",
                "touch-action": "none"
            });
            if (element != null) //moving the container up
            silentScroll(element.offsetTop);
        } else {
            css($htmlBody, {
                "overflow": "visible",
                "height": "initial"
            });
            addClass($body, "fp-scrollable");
            var recordHistory = !getOptions().autoScrolling ? false : getOriginals().recordHistory;
            setRecordHistory(recordHistory, "internal"); //for IE touch devices
            css(getContainer(), {
                "-ms-touch-action": "",
                "touch-action": ""
            }); //scrolling the page to the section with no animation
            if (element != null) {
                var scrollSettings = getScrollSettings(element.offsetTop);
                scrollSettings.element.scrollTo(0, scrollSettings.options);
            }
        }
    }
    //@ts-check
    /**
    * Adds sections before or after the current one to create the infinite effect.
    */ function createInfiniteSections(v) {
        setState({
            isDoingContinousVertical: true
        });
        var activeSectionItem = getState().activeSection.item; // Scrolling down
        if (!v.isMovementUp) // Move all previous sections to after the active section
        after(activeSectionItem, prevAll(activeSectionItem, SECTION_SEL).reverse());
        else // Scrolling up
        // Move all next sections to before the active section
        before(activeSectionItem, nextAll(activeSectionItem, SECTION_SEL));
         // Maintain the displayed position (now that we changed the element order)
        silentScroll(getState().activeSection.item.offsetTop); // Maintain the active slides visible in the viewport
        keepSlidesPosition$1(); // save for later the elements that still need to be reordered
        v.wrapAroundElements = activeSectionItem; // Recalculate animation variables
        v.dtop = v.element.offsetTop;
        v.yMovement = getYmovement(getState().activeSection, v.element);
        return v;
    }
    /**
    * Maintains the active slides in the viewport
    * (Because the `scroll` animation might get lost with some actions, such as when using continuousVertical)
    */ function keepSlidesPosition$1() {
        var activeSlides = $(SLIDE_ACTIVE_SEL);
        for(var i = 0; i < activeSlides.length; i++)silentLandscapeScroll(activeSlides[i], "internal");
    }
    //@ts-check
    /**
    * Maintains the active slides in the viewport
    * (Because the `scroll` animation might get lost with some actions, such as when using continuousVertical)
    */ function keepSlidesPosition() {
        var activeSlides = $(SLIDE_ACTIVE_SEL);
        for(var i = 0; i < activeSlides.length; i++)silentLandscapeScroll(activeSlides[i], "internal");
    }
    /**
    * Fix section order after continuousVertical changes have been animated
    */ function continuousVerticalFixSectionOrder(v) {
        // If continuousVertical is in effect (and autoScrolling would also be in effect then),
        // finish moving the elements around so the direct navigation will function more simply
        if (v.wrapAroundElements == null) return;
        if (v.isMovementUp) before($(SECTION_SEL)[0], v.wrapAroundElements);
        else after($(SECTION_SEL)[getState().sections.length - 1], v.wrapAroundElements);
        silentScroll(getState().activeSection.item.offsetTop); // Maintain the active slides visible in the viewport
        keepSlidesPosition();
        setState({
            isDoingContinousVertical: false
        });
    }
    /**
    * Makes sure lazyload is done for other sections in the viewport that are not the
    * active one. 
    */ function lazyLoadOthers() {
        var hasAutoHeightSections = $(AUTO_HEIGHT_SEL)[0] || isResponsiveMode() && $(AUTO_HEIGHT_RESPONSIVE_SEL)[0]; //quitting when it doesn't apply
        if (!getOptions().lazyLoading || !hasAutoHeightSections) return;
         //making sure to lazy load auto-height sections that are in the viewport
        $(SECTION_SEL + ":not(" + ACTIVE_SEL + ")").forEach(function(section) {
            if (isSectionInViewport(section)) lazyLoad(section);
        });
    }
    /**
    * Determines whether a section is in the viewport or not.
    */ function isSectionInViewport(el) {
        var rect = el.getBoundingClientRect();
        var top = rect.top;
        var bottom = rect.bottom; //sometimes there's a 1px offset on the bottom of the screen even when the 
        //section's height is the window.innerHeight one. I guess because pixels won't allow decimals.
        //using this prevents from lazyLoading the section that is not yet visible 
        //(only 1 pixel offset is)
        var pixelOffset = 2;
        var isTopInView = top + pixelOffset < state.windowsHeight && top > 0;
        var isBottomInView = bottom > pixelOffset && bottom < state.windowsHeight;
        return isTopInView || isBottomInView;
    }
    function tooltipTextHandler() {
        /*jshint validthis:true */ trigger(prev(this), "click");
    }
    /**
    * Activating the vertical navigation bullets according to the given slide name.
    */ function activateNavDots(name, sectionIndex) {
        var nav = $(SECTION_NAV_SEL)[0];
        if (getOptions().navigation && nav != null && nav.style.display !== "none") {
            removeClass($(ACTIVE_SEL, nav), ACTIVE);
            if (name) addClass($('a[href="#' + name + '"]', nav), ACTIVE);
            else addClass($("a", $("li", nav)[sectionIndex]), ACTIVE);
        }
    }
    /**
    * Creates a vertical navigation bar.
    */ function addVerticalNavigation() {
        remove($(SECTION_NAV_SEL));
        var navigation = doc.createElement("div");
        navigation.setAttribute("id", SECTION_NAV);
        var divUl = doc.createElement("ul");
        navigation.appendChild(divUl);
        appendTo(navigation, $body);
        var nav = $(SECTION_NAV_SEL)[0];
        addClass(nav, "fp-" + getOptions().navigationPosition);
        if (getOptions().showActiveTooltip) addClass(nav, SHOW_ACTIVE_TOOLTIP);
        var li = "";
        for(var i = 0; i < getState().sections.length; i++){
            var section = getState().sections[i];
            var link = "";
            if (getOptions().anchors.length) link = section.anchor;
            li += '<li><a href="#' + encodeURI(link) + '"><span class="fp-sr-only">' + getBulletLinkName(section.index(), "Section") + "</span><span></span></a>"; // Only add tooltip if needed (defined by user)
            var tooltip = getOptions().navigationTooltips[section.index()];
            if (typeof tooltip !== "undefined" && tooltip !== "") li += '<div class="' + SECTION_NAV_TOOLTIP + " fp-" + getOptions().navigationPosition + '">' + tooltip + "</div>";
            li += "</li>";
        }
        $("ul", nav)[0].innerHTML = li; //activating the current active section
        var bullet = $("li", $(SECTION_NAV_SEL)[0])[getState().activeSection.index()];
        addClass($("a", bullet), ACTIVE);
    } //Scrolls to the section when clicking the navigation bullet
    function sectionBulletHandler(e) {
        if (e.preventDefault) preventDefault(e);
        setState({
            scrollTrigger: "verticalNav"
        });
        /*jshint validthis:true */ // @ts-ignore
        var indexBullet = index(closest(this, SECTION_NAV_SEL + " li"));
        EventEmitter.emit(events.scrollPage, {
            destination: getState().sections[indexBullet]
        });
    }
    /**
    * Sets to active the current menu and vertical nav items.
    */ function activateMenuAndNav(anchor, index) {
        activateMenuElement(anchor);
        activateNavDots(anchor, index);
    }
    /**
    * Activating the website main menu elements according to the given slide name.
    */ function activateMenuElement(name) {
        if (getOptions().menu && getOptions().menu.length) $(getOptions().menu).forEach(function(menu) {
            if (menu != null) {
                removeClass($(ACTIVE_SEL, menu), ACTIVE);
                addClass($('[data-menuanchor="' + name + '"]', menu), ACTIVE);
            }
        });
    }
    new Date().getTime();
    /**
     * Triggers the callback once per scroll wheel action.
     * Based on scrolling speed delay.
     */ var oncePerScroll = function() {
        var canTriggerEvent = true;
        var prevWheelTime = new Date().getTime();
        var result;
        var isScrollingOnInit = !win.fullpage_api;
        return function(scrollTrigger, callback) {
            var currentTime = new Date().getTime();
            var timeThreshold = scrollTrigger === "wheel" ? getOptions().scrollingSpeed : 100;
            canTriggerEvent = isScrollingOnInit || currentTime - prevWheelTime >= timeThreshold;
            isScrollingOnInit = !win.fullpage_api;
            if (canTriggerEvent) {
                result = callback();
                prevWheelTime = currentTime;
            }
            return typeof result !== "undefined" ? result : true;
        };
    }();
    /**
    * Fires the wheel event once per mouse wheel trigger.
    */ function fireCallbackOncePerScroll(callbackName, params) {
        if (!isFunction(getOptions().beforeLeave)) return;
        var result = oncePerScroll(getState().scrollTrigger, function() {
            return fireCallback(callbackName, params);
        });
        return result;
    }
    FP.moveTo = moveTo;
    FP.getScrollY = function() {
        return state.scrollY;
    };
    var g_afterSectionLoadsId;
    var g_transitionLapseId;
    EventEmitter.on(events.onDestroy, onDestroy$8);
    /**
    * Scrolls the site to the given element and scrolls to the slide if a callback is given.
    */ function scrollPage(section, callback, isMovementUp) {
        var element = section.item;
        if (element == null) return;
         //there's no element to scroll, leaving the function
        var dtop = getDestinationPosition(element);
        var slideAnchorLink;
        var slideIndex; //local variables
        var v = {
            "element": element,
            "callback": callback,
            "isMovementUp": isMovementUp,
            "dtop": dtop,
            "yMovement": getYmovement(getState().activeSection, element),
            "anchorLink": section.anchor,
            "sectionIndex": section.index(),
            "activeSlide": section.activeSlide ? section.activeSlide.item : null,
            "leavingSection": getState().activeSection.index() + 1,
            //caching the value of isResizing at the momment the function is called
            //because it will be checked later inside a setTimeout and the value might change
            "localIsResizing": state.isResizing,
            "items": {
                "origin": getState().activeSection,
                "destination": section
            },
            "direction": null
        }; //quiting when destination scroll is the same as the current one
        if (getState().activeSection.item == element && !state.isResizing || getOptions().scrollBar && getScrollTop() === v.dtop && !hasClass(element, AUTO_HEIGHT)) return;
        if (v.activeSlide != null) {
            slideAnchorLink = getAttr(v.activeSlide, "data-anchor");
            slideIndex = index(v.activeSlide, null);
        } //callback (onLeave) if the site is not just resizing and readjusting the slides
        if (!v.localIsResizing) {
            var direction = v.yMovement; //required for continousVertical
            if (typeof isMovementUp !== "undefined") direction = isMovementUp ? "up" : "down";
             //for the callback
            v.direction = direction;
            if (isFunction(getOptions().beforeLeave)) {
                if (fireCallbackOncePerScroll("beforeLeave", v) === false) return;
            }
            if (isFunction(getOptions().onLeave)) {
                if (!fireCallback("onLeave", v)) return;
            }
        } // If continuousVertical && we need to wrap around
        if (getOptions().autoScrolling && getOptions().continuousVertical && typeof v.isMovementUp !== "undefined" && (!v.isMovementUp && v.yMovement == "up" || // Intending to scroll down but about to go up or
        v.isMovementUp && v.yMovement == "down")) // intending to scroll up but about to go down
        v = createInfiniteSections(v);
         //pausing media of the leaving section (if we are not just resizing, as destinatino will be the same one)
        if (!v.localIsResizing) stopMedia(getState().activeSection.item);
        addClass(element, ACTIVE);
        removeClass(siblings(element), ACTIVE);
        updateState();
        lazyLoad(element); //preventing from activating the MouseWheelHandler event
        //more than once if the page is scrolling
        setState({
            canScroll: FP.test.isTesting
        });
        setPageStatus(slideIndex, slideAnchorLink, v.anchorLink);
        EventEmitter.emit(events.onLeave, v);
        performMovement(v); //flag to avoid callingn `scrollPage()` twice in case of using anchor links
        setState({
            lastScrolledDestiny: v.anchorLink
        }); //avoid firing it twice (as it does also on scroll)
        activateMenuAndNav(v.anchorLink, v.sectionIndex);
    }
    function onDestroy$8() {
        clearTimeout(g_afterSectionLoadsId);
        clearTimeout(g_transitionLapseId);
    }
    /**
    * Returns the destination Y position based on the scrolling direction and
    * the height of the section.
    */ function getDestinationPosition(element) {
        var elementHeight = element.offsetHeight;
        var elementTop = element.offsetTop; //top of the desination will be at the top of the viewport
        var position = elementTop;
        var isScrollingDown = elementTop > state.previousDestTop;
        var sectionBottom = position - getWindowHeight() + elementHeight;
        var bigSectionsDestination = getOptions().bigSectionsDestination; //is the destination element bigger than the viewport?
        if (elementHeight > getWindowHeight()) //scrolling up?
        {
            if (!isScrollingDown && !bigSectionsDestination || bigSectionsDestination === "bottom") position = sectionBottom;
        } else if (isScrollingDown || state.isResizing && next(element) == null) //The bottom of the destination will be at the bottom of the viewport
        position = sectionBottom;
        /*
      Keeping record of the last scrolled position to determine the scrolling direction.
      No conventional methods can be used as the scroll bar might not be present
      AND the section might not be active if it is auto-height and didnt reach the middle
      of the viewport.
      */ setState({
            previousDestTop: position
        });
        return position;
    }
    /**
    * Performs the vertical movement (by CSS3 or by jQuery)
    */ function performMovement(v) {
        var isFastSpeed = getOptions().scrollingSpeed < 700;
        var transitionLapse = isFastSpeed ? 700 : getOptions().scrollingSpeed;
        setState({
            touchDirection: "none",
            scrollY: Math.round(v.dtop)
        });
        EventEmitter.emit(events.onPerformMovement); // using CSS3 translate functionality
        if (getOptions().css3 && getOptions().autoScrolling && !getOptions().scrollBar) {
            // The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
            // that's why we round it to 0.
            var translate3d = "translate3d(0px, -" + Math.round(v.dtop) + "px, 0px)";
            transformContainer(translate3d, true); //even when the scrollingSpeed is 0 there's a little delay, which might cause the
            //scrollingSpeed to change in case of using silentMoveTo();ç
            if (getOptions().scrollingSpeed) {
                clearTimeout(g_afterSectionLoadsId);
                g_afterSectionLoadsId = setTimeout(function() {
                    afterSectionLoads$1(v); //disabling canScroll when using fastSpeed
                    setState({
                        canScroll: !isFastSpeed || FP.test.isTesting
                    });
                }, getOptions().scrollingSpeed);
            } else afterSectionLoads$1(v);
        } else {
            var scrollSettings = getScrollSettings(v.dtop);
            FP.test.top = -v.dtop + "px";
            clearTimeout(g_afterSectionLoadsId);
            scrollTo(scrollSettings.element, scrollSettings.options, getOptions().scrollingSpeed, function() {
                if (getOptions().scrollBar) /* Hack!
            The timeout prevents setting the most dominant section in the viewport as "active" when the user
            scrolled to a smaller section by using the mousewheel (auto scrolling) rather than draging the scroll bar.
             When using scrollBar:true It seems like the scroll events still getting propagated even after the scrolling animation has finished.
            */ g_afterSectionLoadsId = setTimeout(function() {
                    afterSectionLoads$1(v);
                }, 30);
                else {
                    afterSectionLoads$1(v); //disabling canScroll when using fastSpeed
                    setState({
                        canScroll: !isFastSpeed || FP.test.isTesting
                    });
                }
            });
        } // enabling canScroll after the minimum transition laps
        if (isFastSpeed) {
            clearTimeout(g_transitionLapseId);
            g_transitionLapseId = setTimeout(function() {
                setState({
                    canScroll: true
                });
            }, transitionLapse);
        }
    }
    /**
    * Actions to do once the section is loaded.
    */ function afterSectionLoads$1(v) {
        setState({
            isBeyondFullpage: false
        });
        continuousVerticalFixSectionOrder(v); //callback (afterLoad) if the site is not just resizing and readjusting the slides
        if (isFunction(getOptions().afterLoad) && !v.localIsResizing) fireCallback("afterLoad", v);
        updateState();
        if (!v.localIsResizing) playMedia(v.element);
        addClass(v.element, COMPLETELY);
        removeClass(siblings(v.element), COMPLETELY);
        lazyLoadOthers();
        setState({
            canScroll: true
        });
        EventEmitter.emit(events.afterSectionLoads, v);
        if (isFunction(v.callback)) v.callback();
    }
    FP.setFitToSection = setFitToSection;
    FP.fitToSection = fitToSection;
    /**
    * Sets fitToSection
    */ function setFitToSection(value, type) {
        setVariableState("fitToSection", value, type);
    }
    /**
    * Fits the site to the nearest active section
    */ function fitToSection() {
        //checking fitToSection again in case it was set to false before the timeout delay
        if (state.canScroll) {
            //allows to scroll to an active section and
            //if the section is already active, we prevent firing callbacks
            setState({
                isResizing: true
            });
            scrollPage(state.activeSection);
            setState({
                isResizing: false
            });
        }
    }
    FP.setResponsive = setResponsive;
    /**
    * Checks if the site needs to get responsive and disables autoScrolling if so.
    * A class `fp-responsive` is added to the plugin's container in case the user wants to use it for his own responsive CSS.
    */ function responsive() {
        var widthLimit = getOptions().responsive || getOptions().responsiveWidth; //backwards compatiblity
        var heightLimit = getOptions().responsiveHeight; //only calculating what we need. Remember its called on the resize event.
        var isBreakingPointWidth = widthLimit && win.innerWidth < widthLimit;
        var isBreakingPointHeight = heightLimit && win.innerHeight < heightLimit;
        if (widthLimit && heightLimit) setResponsive(isBreakingPointWidth || isBreakingPointHeight);
        else if (widthLimit) setResponsive(isBreakingPointWidth);
        else if (heightLimit) setResponsive(isBreakingPointHeight);
    }
    /**
    * Turns fullPage.js to normal scrolling mode when the viewport `width` or `height`
    * are smaller than the set limit values.
    */ function setResponsive(active) {
        var isResponsive = isResponsiveMode();
        if (active) {
            if (!isResponsive) {
                setAutoScrolling(false, "internal");
                setFitToSection(false, "internal");
                hide($(SECTION_NAV_SEL));
                addClass($body, RESPONSIVE);
                if (isFunction(getOptions().afterResponsive)) getOptions().afterResponsive.call(getContainer(), active);
            }
        } else if (isResponsive) {
            setAutoScrolling(getOriginals().autoScrolling, "internal");
            setFitToSection(getOriginals().autoScrolling, "internal");
            show($(SECTION_NAV_SEL));
            removeClass($body, RESPONSIVE);
            if (isFunction(getOptions().afterResponsive)) getOptions().afterResponsive.call(getContainer(), active);
        }
    }
    /**
    * Determines whether fullpage.js is in responsive mode or not.
    */ function isResponsiveMode() {
        return hasClass($body, RESPONSIVE);
    }
    function addTableClass(element) {
        if (!getOptions().verticalCentered) return;
         // Overflowing sections when scrollOverflow is disabled will be autoHeight
        // and won't require vertical aligment
        if (!getOptions().scrollOverflow && scrollOverflowHandler.shouldBeScrollable(element.item)) return;
        if (!scrollOverflowHandler.isScrollable(element)) //In case we are styling for the 2nd time as in with reponsiveSlides
        {
            if (!hasClass(element.item, TABLE)) addClass(element.item, TABLE);
        }
    }
    var startingSection = null;
    FP.getActiveSection = getActiveSection;
    function getStartingSection() {
        return startingSection;
    }
    /**
    * Styling vertical sections
    */ function styleSection(section) {
        var sectionElem = section.item;
        var hasSlides = section.allSlidesItems.length;
        var index = section.index(); //if no active section is defined, the 1st one will be the default one
        if (!getState().activeSection && section.isVisible) {
            addClass(sectionElem, ACTIVE);
            updateState();
            startingSection = getState().activeSection.item;
        }
        if (getOptions().paddingTop) css(sectionElem, {
            "padding-top": getOptions().paddingTop
        });
        if (getOptions().paddingBottom) css(sectionElem, {
            "padding-bottom": getOptions().paddingBottom
        });
        if (typeof getOptions().sectionsColor[index] !== "undefined") css(sectionElem, {
            "background-color": getOptions().sectionsColor[index]
        });
        if (typeof getOptions().anchors[index] !== "undefined") sectionElem.setAttribute("data-anchor", section.anchor);
        if (!hasSlides) addTableClass(section);
    }
    /**
    * Gets the active section.
    */ function getActiveSection() {
        return getState().activeSection;
    }
    function getSectionFromPanel(panel) {
        return panel.isSection ? panel : panel.parent;
    }
    var g_focusScrollableId;
    EventEmitter.on(events.bindEvents, bindEvents$b);
    function bindEvents$b() {
        // We can't focus scrollOverflow before scrolling
        // to the anchor (if we need to)
        EventEmitter.on(events.onAfterRenderNoAnchor, afterRender);
        EventEmitter.on(events.onLeave, scrollOverflowHandler.onLeave);
        EventEmitter.on(events.onSlideLeave, scrollOverflowHandler.onLeave);
        EventEmitter.on(events.afterSlideLoads, scrollOverflowHandler.afterLoad);
        EventEmitter.on(events.afterSectionLoads, scrollOverflowHandler.afterLoad);
        EventEmitter.on(events.onDestroy, onDestroy$7);
        docAddEvent("keyup", scrollOverflowHandler.keyUpHandler);
    }
    function afterRender() {
        if (getOptions().scrollOverflow && !getOptions().scrollBar) {
            scrollOverflowHandler.makeScrollable();
            scrollOverflowHandler.focusScrollable();
        }
    }
    function onDestroy$7() {
        EventEmitter.removeListener(events.onAfterRenderNoAnchor, afterRender);
        docRemoveEvent("keyup", scrollOverflowHandler.keyUpHandler);
    }
    var scrollOverflowHandler = {
        focusedElem: null,
        shouldFocusScrollable: true,
        isInnerScrollAllowed: true,
        timeBeforeReachingLimit: null,
        timeLastScroll: null,
        preventScrollWithMouseWheel: function preventScrollWithMouseWheel(e) {
            if (!state.canScroll) {
                preventDefault(e);
                return false;
            }
        },
        preventScrollWithKeyboard: function preventScrollWithKeyboard(e) {
            if (!isInsideInput() && getOptions().keyboardScrolling) {
                var directionKeys = [
                    38,
                    33,
                    32,
                    40,
                    34,
                    36,
                    35
                ];
                if (directionKeys.indexOf(e.keyCode) > -1 && !scrollOverflowHandler.isInnerScrollAllowed) {
                    preventDefault(e);
                    return false;
                }
            }
        },
        keyUpHandler: function keyUpHandler() {
            scrollOverflowHandler.shouldFocusScrollable = state.canScroll;
        },
        // Leaving sections or slides
        onLeave: function onLeave() {
            clearTimeout(g_focusScrollableId);
            scrollOverflowHandler.isInnerScrollAllowed = false;
        },
        // Loading sections or slides
        afterLoad: function afterLoad() {
            scrollOverflowHandler.isInnerScrollAllowed = false; // Delaying it to avoid issues on Safari when focusing elements #4484 & #4493
            clearTimeout(g_focusScrollableId);
            g_focusScrollableId = setTimeout(function() {
                scrollOverflowHandler.shouldFocusScrollable = state.canScroll;
            }, 200);
        },
        // Unfocusing the scrollable element from the orgin section/slide
        unfocusScrollable: function unfocusScrollable() {
            if (doc.activeElement === this.focusedElem) {
                // @ts-ignore
                this.focusedElem.blur();
                scrollOverflowHandler.isInnerScrollAllowed = false;
            }
        },
        focusScrollable: function focusScrollable() {
            if (!getOptions().scrollOverflow || !scrollOverflowHandler.shouldFocusScrollable) return;
            scrollOverflowHandler.unfocusScrollable();
            var scrollableItem = scrollOverflowHandler.getScrollableItem(getState().activeSection.item); // On desktop we focus the scrollable to be able to use the mouse wheel
            // We avoid it on mobile due to a bug in iOS Safari
            if (scrollableItem && !isTouchDevice && !isTouch) {
                this.focusedElem = scrollableItem; // Forcing the focus on the next paint 
                // to avoid issue #4484 & #4493 on Safari
                requestAnimationFrame(function() {
                    scrollableItem.focus();
                    scrollOverflowHandler.isInnerScrollAllowed = true;
                });
            }
            scrollOverflowHandler.shouldFocusScrollable = false;
        },
        makeScrollable: function makeScrollable() {
            if (getOptions().scrollOverflowMacStyle && !isMacDevice) addClass($body, "fp-scroll-mac");
            getState().panels.forEach(function(el) {
                if (el.slides && el.slides.length) return;
                if (hasClass(el.item, AUTO_HEIGHT_RESPONSIVE) && isResponsiveMode()) return;
                else {
                    var item = getSlideOrSection(el.item);
                    var shouldBeScrollable = scrollOverflowHandler.shouldBeScrollable(el.item);
                    var section = getSectionFromPanel(el);
                    if (isIE11) {
                        var toggleAction = shouldBeScrollable ? "addClass" : "removeClass";
                        utils[toggleAction](section.item, IS_OVERFLOW);
                        utils[toggleAction](el.item, IS_OVERFLOW);
                    } else {
                        addClass(section.item, IS_OVERFLOW);
                        addClass(el.item, IS_OVERFLOW);
                    }
                    if (!el.hasScroll) {
                        scrollOverflowHandler.createWrapper(item);
                        scrollOverflowHandler.bindEvents(item);
                    } // updating the state now in case 
                    // this is executed on page load (after images load)
                    el.hasScroll = true;
                }
            });
        },
        bindEvents: function bindEvents(item) {
            scrollOverflowHandler.getScrollableItem(item).addEventListener("scroll", scrollOverflowHandler.onPanelScroll);
            item.addEventListener("wheel", scrollOverflowHandler.preventScrollWithMouseWheel, {
                passive: false
            });
            item.addEventListener("keydown", scrollOverflowHandler.preventScrollWithKeyboard, {
                passive: false
            });
        },
        createWrapper: function createWrapper(item) {
            var overflowWrapper = document.createElement("div");
            overflowWrapper.className = OVERFLOW;
            wrapInner(item, overflowWrapper);
            overflowWrapper.setAttribute("tabindex", "-1");
        },
        destroyWrapper: function destroyWrapper(item) {
            var overflowWrapper = $(OVERFLOW_SEL, item)[0];
            if (overflowWrapper) {
                unwrap(overflowWrapper);
                item.removeAttribute("tabindex");
            }
        },
        getScrollableItem: function getScrollableItem(sectionItem) {
            var panel = getSlideOrSection(sectionItem);
            return $(OVERFLOW_SEL, panel)[0] || panel;
        },
        hasScroll: function hasScroll(panelItem) {
            return hasClass(panelItem, OVERFLOW) || $(OVERFLOW_SEL, panelItem)[0] != null;
        },
        isScrollable: function isScrollable(panel) {
            return panel.isSection && panel.activeSlide ? panel.activeSlide.hasScroll : panel.hasScroll;
        },
        shouldBeScrollable: function shouldBeScrollable(item) {
            var scrollable = scrollOverflowHandler.getScrollableItem(item);
            return scrollable.scrollHeight > win.innerHeight;
        },
        isScrolled: function isScrolled(direction, el) {
            if (!state.canScroll) return false;
             // we won't allow scrolloverflow on scrollBar:true
            if (getOptions().scrollBar) return true;
            var scrollableItem = scrollOverflowHandler.getScrollableItem(el);
            if (!getOptions().scrollOverflow || !hasClass(scrollableItem, OVERFLOW) || // Checking the section first 
            // In case they apply to both section + slide #4505
            hasClass(el, "fp-noscroll") || // Checking the slide (in case it has)
            hasClass(getSlideOrSection(el), "fp-noscroll")) return true;
             // ie11 wrongly calculates scrollHeight when using the CSS style
            // overflow: auto   It adds 1 more pixel compared to offsetHeight
            var ie11offset = isIE11 ? 1 : 0;
            var positionY = scrollableItem.scrollTop;
            var isTopReached = direction === "up" && positionY <= 0;
            var isBottomReached = direction === "down" && scrollableItem.scrollHeight <= Math.ceil(scrollableItem.offsetHeight + positionY) + ie11offset;
            var isScrolled = isTopReached || isBottomReached;
            if (!isScrolled) this.timeBeforeReachingLimit = new Date().getTime();
            return isScrolled;
        },
        shouldMovePage: function shouldMovePage() {
            this.timeLastScroll = new Date().getTime();
            var timeDiff = this.timeLastScroll - scrollOverflowHandler.timeBeforeReachingLimit;
            var isUsingTouch = isTouchDevice || isTouch;
            var isGrabbing = isUsingTouch && state.isGrabbing;
            var isNotFirstTimeReachingLimit = state.isUsingWheel && timeDiff > 600;
            return isGrabbing && timeDiff > 400 || isNotFirstTimeReachingLimit;
        },
        onPanelScroll: function() {
            var prevPosition = 0;
            return function(e) {
                var currentPosition = e.target.scrollTop;
                var direction = state.touchDirection !== "none" ? state.touchDirection : prevPosition < currentPosition ? "down" : "up";
                prevPosition = currentPosition;
                if (isFunction(getOptions().onScrollOverflow)) fireCallback("onScrollOverflow", {
                    position: currentPosition,
                    direction: direction
                });
                if (hasClass(e.target, OVERFLOW) && state.canScroll) {
                    if (scrollOverflowHandler.isScrolled(direction, e.target) && scrollOverflowHandler.shouldMovePage()) // Checking again if we have a scrollable content
                    // To avoid issues like #4479 where the scroll event gets
                    // triggered after removing/hidding content if this was scrolled
                    {
                        if (scrollOverflowHandler.shouldBeScrollable(getState().activeSection.item)) EventEmitter.emit(events.onScrollOverflowScrolled, {
                            direction: direction
                        });
                    }
                }
            };
        }()
    };
    var g_afterSlideLoadsId;
    FP.landscapeScroll = landscapeScroll;
    EventEmitter.on(events.bindEvents, bindEvents$a);
    function bindEvents$a() {
        EventEmitter.on(events.onPerformMovement, onPerformMovement);
    }
    function onPerformMovement() {
        clearTimeout(g_afterSlideLoadsId);
        setState({
            slideMoving: false
        });
    }
    /**
    * Scrolls horizontal sliders.
    */ function landscapeScroll(slides, destiny, direction) {
        var sectionElem = closest(slides, SECTION_SEL);
        var section = getState().sections.filter(function(section) {
            return section.item == sectionElem;
        })[0];
        var slide = section.slides.filter(function(slide) {
            return slide.item == destiny;
        })[0];
        var v = {
            "slides": slides,
            "destiny": destiny,
            "direction": direction,
            "destinyPos": {
                "left": destiny.offsetLeft
            },
            "slideIndex": slide.index(),
            "section": sectionElem,
            "sectionIndex": section.index(),
            "anchorLink": section.anchor,
            "slidesNav": $(SLIDES_NAV_SEL, sectionElem)[0],
            "slideAnchor": slide.anchor,
            "prevSlide": section.activeSlide.item,
            "prevSlideIndex": section.activeSlide.index(),
            "items": {
                "section": section,
                "origin": section.activeSlide,
                "destination": slide
            },
            //caching the value of isResizing at the momment the function is called
            //because it will be checked later inside a setTimeout and the value might change
            "localIsResizing": state.isResizing
        };
        v.xMovement = getXmovement(v.prevSlideIndex, v.slideIndex);
        v.direction = v.direction ? v.direction : v.xMovement; //important!! Only do it when not resizing
        if (!v.localIsResizing) //preventing from scrolling to the next/prev section when using scrollHorizontally
        setState({
            canScroll: false
        });
        if (getOptions().onSlideLeave) //if the site is not just resizing and readjusting the slides
        {
            if (!v.localIsResizing && v.xMovement !== "none") {
                if (isFunction(getOptions().onSlideLeave)) {
                    if (fireCallback("onSlideLeave", v) === false) {
                        setState({
                            slideMoving: false
                        });
                        return;
                    }
                }
            }
        }
        addClass(destiny, ACTIVE);
        removeClass(siblings(destiny), ACTIVE);
        updateState();
        if (!v.localIsResizing) {
            stopMedia(v.prevSlide);
            lazyLoad(destiny);
        }
        toggleControlArrows(v); //only changing the URL if the slides are in the current section (not for resize re-adjusting)
        if (section.isActive && !v.localIsResizing) setPageStatus(v.slideIndex, v.slideAnchor, v.anchorLink);
        EventEmitter.emit(events.onSlideLeave, v);
        performHorizontalMove(slides, v, true);
    }
    /**
    * Performs the horizontal movement. (CSS3 or jQuery)
    *
    * @param fireCallback {Boolean} - determines whether or not to fire the callback
    */ function performHorizontalMove(slides, v, fireCallback) {
        var destinyPos = v.destinyPos;
        activeSlidesNavigation(v.slidesNav, v.slideIndex);
        setState({
            scrollX: Math.round(destinyPos.left)
        });
        if (getOptions().css3) {
            var translate3d = "translate3d(-" + Math.round(destinyPos.left) + "px, 0px, 0px)";
            FP.test.translate3dH[v.sectionIndex] = translate3d;
            css(addAnimation($(SLIDES_CONTAINER_SEL, slides)), getTransforms(translate3d));
            clearTimeout(g_afterSlideLoadsId);
            g_afterSlideLoadsId = setTimeout(function() {
                if (fireCallback) afterSlideLoads(v);
            }, getOptions().scrollingSpeed);
        } else {
            FP.test.left[v.sectionIndex] = Math.round(destinyPos.left);
            scrollTo(slides, Math.round(destinyPos.left), getOptions().scrollingSpeed, function() {
                if (fireCallback) afterSlideLoads(v);
            });
        }
    }
    /**
    * Retuns `right` or `left` depending on the scrolling movement to reach its destination
    * from the current slide.
    */ function getXmovement(fromIndex, toIndex) {
        if (fromIndex == toIndex) return "none";
        if (fromIndex > toIndex) return "left";
        return "right";
    }
    function onDestroy$6() {
        clearTimeout(g_afterSlideLoadsId);
    }
    function afterSlideLoads(v) {
        //if the site is not just resizing and readjusting the slides
        if (!v.localIsResizing) {
            if (isFunction(getOptions().afterSlideLoad)) fireCallback("afterSlideLoad", v);
             //needs to be inside the condition to prevent problems with continuousVertical and scrollHorizontally
            //and to prevent double scroll right after a windows resize
            setState({
                canScroll: true
            });
            playMedia(v.destiny);
            EventEmitter.emit(events.afterSlideLoads, v);
        } //letting them slide again
        setState({
            slideMoving: false
        });
    }
    /**
    * Slides silently (with no animation) the active slider to the given slide.
    * @param noCallback {bool} true or defined -> no callbacks
    */ function silentLandscapeScroll(activeSlide, noCallbacks) {
        setScrollingSpeed(0, "internal");
        if (typeof noCallbacks !== "undefined") //preventing firing callbacks afterSlideLoad etc.
        setState({
            isResizing: true
        });
        landscapeScroll(closest(activeSlide, SLIDES_WRAPPER_SEL), activeSlide);
        if (typeof noCallbacks !== "undefined") setState({
            isResizing: false
        });
        setScrollingSpeed(getOriginals().scrollingSpeed, "internal");
    }
    var g_prevActiveSectionIndex = null;
    var g_prevActiveSlideIndex = null;
    /** 
     * Updates the state of the app.
     */ function updateState() {
        state.activeSection = null;
        state.sections.map(function(section) {
            var isActive = hasClass(section.item, ACTIVE);
            section.isActive = isActive;
            section.hasScroll = scrollOverflowHandler.hasScroll(section.item);
            if (isActive) state.activeSection = section;
            if (section.slides.length) {
                section.activeSlide = null;
                section.slides.map(function(slide) {
                    var isActiveSlide = hasClass(slide.item, ACTIVE);
                    slide.hasScroll = scrollOverflowHandler.hasScroll(section.item);
                    slide.isActive = isActiveSlide;
                    if (isActiveSlide) section.activeSlide = slide;
                });
            }
        });
        scrollToNewActivePanel();
    }
    function updateStructuralState() {
        var allSectionItems = $(getOptions().sectionSelector, getContainer());
        var sectionsItems = getVisible(allSectionItems);
        var allSections = Array.from(allSectionItems).map(function(item) {
            return new SectionPanel(item);
        });
        var sections = allSections.filter(function(item) {
            return item.isVisible;
        });
        var slides = sections.reduce(function(acc, section) {
            return acc.concat(section.slides);
        }, []); // keeping track of the previously active section
        g_prevActiveSectionIndex = getPrevActivePanelIndex(state.activeSection);
        g_prevActiveSlideIndex = getPrevActivePanelIndex(state.activeSection ? state.activeSection.activeSlide : null);
        state.numSections = sectionsItems.length;
        state.numSlides = sections.reduce(function(acc, section) {
            return acc + section.slides.length;
        }, 0);
        state.sections = sections;
        state.sectionsIncludingHidden = allSections;
        state.slides = slides;
        state.panels = state.sections.concat(state.slides);
    }
    function getPrevActivePanelIndex(activePanel) {
        if (!activePanel) return null;
        var prevActivePanelItem = activePanel ? activePanel.item : null;
        var hiddenPanels = activePanel.isSection ? state.sectionsIncludingHidden : state.activeSection.slidesIncludingHidden;
        if (prevActivePanelItem) {
            var panel = getPanelByElement(hiddenPanels, prevActivePanelItem);
            return panel ? panel.index() : null;
        }
        return null;
    }
    /**
     * When changes in the DOM take place there's a change 
     * the active section is now hidden or removed. 
     * fullPage.js will scroll to the closest section nearby.
     */ function scrollToNewActivePanel() {
        var activeSection = state.activeSection;
        var activeSectionHasSlides = state.activeSection ? state.activeSection.slides.length : false;
        var activeSlide = state.activeSection ? state.activeSection.activeSlide : null; // Hidding / removing the active section ?
        if (!activeSection && state.sections.length && !getState().isBeyondFullpage && g_prevActiveSectionIndex) {
            var newActiveSection = getNewActivePanel(g_prevActiveSectionIndex, state.sections);
            if (newActiveSection) {
                state.activeSection = newActiveSection;
                state.activeSection.isActive = true;
                addClass(state.activeSection.item, ACTIVE);
            }
            if (state.activeSection) silentScroll(state.activeSection.item.offsetTop);
        }
        if (activeSectionHasSlides && !activeSlide && g_prevActiveSlideIndex) {
            var newActiveSlide = getNewActivePanel(g_prevActiveSlideIndex, state.activeSection.slides);
            if (newActiveSlide) {
                state.activeSection.activeSlide = newActiveSlide;
                state.activeSection.activeSlide.isActive = true;
                addClass(state.activeSection.activeSlide.item, ACTIVE);
            }
            if (state.activeSection.activeSlide) silentLandscapeScroll(state.activeSection.activeSlide.item, "internal");
        }
    }
    function getNewActivePanel(prevActivePanelIndex, siblings) {
        var newActiveSection;
        var prevIndex = prevActivePanelIndex - 1;
        var nextIndex = prevActivePanelIndex;
        do {
            newActiveSection = siblings[prevIndex] || siblings[nextIndex];
            if (newActiveSection) break;
            prevIndex = prevIndex - 1;
            nextIndex = nextIndex + 1;
        }while (prevIndex >= 0 || nextIndex < siblings.length);
        return newActiveSection;
    }
    /**
    * Section object
    */ var SectionPanel = function SectionPanel(el) {
        var _this = this;
        [].push.call(arguments, getOptions().sectionSelector);
        Item.apply(this, arguments);
        this.allSlidesItems = $(getOptions().slideSelector, el);
        this.slidesIncludingHidden = Array.from(this.allSlidesItems).map(function(item) {
            return new SlidePanel(item, _this);
        });
        this.slides = this.slidesIncludingHidden.filter(function(slidePanel) {
            return slidePanel.isVisible;
        });
        this.activeSlide = this.slides.length ? this.slides.filter(function(slide) {
            return slide.isActive;
        })[0] || this.slides[0] : null;
    };
    SectionPanel.prototype = Item.prototype;
    SectionPanel.prototype.constructor = SectionPanel;
    /**
    * Slide object
    */ var SlidePanel = function SlidePanel(el, section) {
        this.parent = section;
        Item.call(this, el, getOptions().slideSelector);
    };
    SlidePanel.prototype = Item.prototype;
    SlidePanel.prototype.constructor = SectionPanel;
    /**
    * Adds internal classes to be able to provide customizable selectors
    * keeping the link with the style sheet.
    */ function addInternalSelectors() {
        addClass($(getOptions().sectionSelector, getContainer()), SECTION);
        addClass($(getOptions().slideSelector, getContainer()), SLIDE);
    }
    /**
    * Styles the horizontal slides for a section.
    */ function styleSlides(section) {
        var numSlides = section.slides.length;
        var slidesElems = section.allSlidesItems;
        var slides = section.slides;
        var sliderWidth = numSlides * 100;
        var slideWidth = 100 / numSlides;
        if (!$(SLIDES_WRAPPER_SEL, section.item)[0]) {
            var slidesWrapper = doc.createElement("div");
            slidesWrapper.className = SLIDES_WRAPPER; //fp-slides
            wrapAll(slidesElems, slidesWrapper);
            var slidesContainer = doc.createElement("div");
            slidesContainer.className = SLIDES_CONTAINER; //fp-slidesContainer
            wrapAll(slidesElems, slidesContainer);
        }
        css($(SLIDES_CONTAINER_SEL, section.item), {
            "width": sliderWidth + "%"
        });
        if (numSlides > 1) {
            if (getOptions().controlArrows) createSlideArrows(section);
            if (getOptions().slidesNavigation) addSlidesNavigation(section);
        }
        slides.forEach(function(slide) {
            css(slide.item, {
                "width": slideWidth + "%"
            });
            if (getOptions().verticalCentered) addTableClass(slide);
        });
        var startingSlide = section.activeSlide || null; //if the slide won't be an starting point, the default will be the first one
        //the active section isn't the first one? Is not the first slide of the first section? Then we load that section/slide by default.
        if (startingSlide != null && state.activeSection && (state.activeSection.index() !== 0 || state.activeSection.index() === 0 && startingSlide.index() !== 0)) silentLandscapeScroll(startingSlide.item, "internal");
        else addClass(slidesElems[0], ACTIVE);
    }
    var g_wrapperObserver;
    var g_wrapperObserveConfig = {
        attributes: false,
        subtree: true,
        childList: true,
        characterData: true
    };
    EventEmitter.on(events.bindEvents, bindEvents$9);
    FP["render"] = onContentChange;
    function bindEvents$9() {
        if (getOptions().observer && "MutationObserver" in window && $(WRAPPER_SEL)[0]) g_wrapperObserver = createObserver($(WRAPPER_SEL)[0], onContentChange, g_wrapperObserveConfig);
        EventEmitter.on(events.contentChanged, onContentChange);
    }
    /**
     * Creates a Mutation observer.
     */ function createObserver(target, callback, config) {
        var observer = new MutationObserver(callback);
        observer.observe(target, config);
        return observer;
    }
    function didSlidesChange() {
        return getVisible($(getOptions().slideSelector, getContainer())).length !== getState().numSlides;
    }
    function didSectionsChange() {
        return getVisible($(getOptions().sectionSelector, getContainer())).length !== getState().numSections;
    }
    function didSectionsOrSlidesChange() {
        return didSlidesChange() || didSectionsChange();
    }
    /**
     * Listen to changes on sections and fires reBuild
     * when those changes affect the section height.
     */ function onContentChange(mutations) {
        var _didSlidesChange = didSlidesChange();
        if (didSectionsOrSlidesChange() && !state.isDoingContinousVertical) {
            if (getOptions().observer && g_wrapperObserver) // Temporally disabling the observer while 
            // we modidy the DOM again
            g_wrapperObserver.disconnect();
            updateStructuralState();
            updateState(); // Removing navs and anchors options
            getOptions().anchors = [];
            remove($(SECTION_NAV_SEL));
            addInternalSelectors();
            setOptionsFromDOM();
            if (getOptions().navigation) addVerticalNavigation();
            if (_didSlidesChange) {
                remove($(SLIDES_NAV_SEL));
                remove($(SLIDES_ARROW_SEL));
            }
            getState().sections.forEach(function(section) {
                if (section.slides.length) {
                    if (_didSlidesChange) styleSlides(section);
                } else styleSection(section);
            });
        }
        if (getOptions().observer && g_wrapperObserver && $(WRAPPER_SEL)[0]) g_wrapperObserver.observe($(WRAPPER_SEL)[0], g_wrapperObserveConfig);
    }
    var supportsPassiveEvents = function() {
        //cheks for passive event support
        var g_supportsPassive = false;
        try {
            var opts = Object.defineProperty({}, "passive", {
                get: function get() {
                    g_supportsPassive = true;
                }
            });
            windowAddEvent("testPassive", null, opts);
            windowRemoveEvent("testPassive", null, opts);
        } catch (e) {}
        return function() {
            return g_supportsPassive;
        };
    }();
    function getPassiveOptionsIfPossible() {
        return supportsPassiveEvents() ? {
            passive: false
        } : false;
    }
    var wheelDataHandler = function() {
        var _prevTime = new Date().getTime();
        var _scrollings = [];
        var isScrollingVertically;
        var direction;
        return {
            registerEvent: function registerEvent(e) {
                e = e || win.event;
                var value = e.wheelDelta || -e.deltaY || -e.detail;
                var delta = Math.max(-1, Math.min(1, value));
                var horizontalDetection = typeof e.wheelDeltaX !== "undefined" || typeof e.deltaX !== "undefined";
                isScrollingVertically = Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) || Math.abs(e.deltaX) < Math.abs(e.deltaY) || !horizontalDetection;
                var curTime = new Date().getTime();
                direction = delta < 0 ? "down" : "up"; //Limiting the array to 150 (lets not waste memory!)
                if (_scrollings.length > 149) _scrollings.shift();
                 //keeping record of the previous scrollings
                _scrollings.push(Math.abs(value)); //time difference between the last scroll and the current one
                var timeDiff = curTime - _prevTime;
                _prevTime = curTime; //haven't they scrolled in a while?
                //(enough to be consider a different scrolling action to scroll another section)
                if (timeDiff > 200) //emptying the array, we dont care about old scrollings for our averages
                _scrollings = [];
            },
            isAccelerating: function isAccelerating() {
                var averageEnd = getAverage(_scrollings, 10);
                var averageMiddle = getAverage(_scrollings, 70);
                var isAccelerating = averageEnd >= averageMiddle;
                return _scrollings.length ? isAccelerating && isScrollingVertically : false;
            },
            getDirection: function getDirection() {
                return direction;
            }
        };
    }();
    function scrollBeyondFullPage() {
        var dtop = getDestinationOffset();
        var scrollSettings = getScrollSettings(dtop);
        FP.test.top = -dtop + "px";
        setState({
            canScroll: false
        });
        scrollTo(scrollSettings.element, scrollSettings.options, getOptions().scrollingSpeed, function() {
            setTimeout(function() {
                setState({
                    isBeyondFullpage: true
                });
                setState({
                    canScroll: true
                });
            }, 30);
        });
    }
    function onKeyDown() {
        if (!isFullPageAbove()) return;
        else scrollUpToFullpage();
    }
    function scrollUpToFullpage() {
        var scrollSettings = getScrollSettings(getLast(getState().sections).item.offsetTop);
        setState({
            canScroll: false
        });
        scrollTo(scrollSettings.element, scrollSettings.options, getOptions().scrollingSpeed, function() {
            setState({
                canScroll: true
            });
            setState({
                isBeyondFullpage: false
            });
            setState({
                isAboutToScrollToFullPage: false
            });
        });
    }
    function getDestinationOffset() {
        if (!getOptions().css3) return getLast(getState().sections).item.offsetTop + getLast(getState().sections).item.offsetHeight;
        return getScrollTop() + getWindowHeight();
    }
    function beyondFullPageHandler(container, e) {
        new Date().getTime();
        var pauseScroll = getState().isBeyondFullpage && container.getBoundingClientRect().bottom >= 0 && wheelDataHandler.getDirection() === "up";
        var g_isAboutToScrollToFullPage = getState().isAboutToScrollToFullPage;
        if (g_isAboutToScrollToFullPage) {
            preventDefault(e);
            return false;
        }
        if (getState().isBeyondFullpage) {
            if (!pauseScroll) keyframeTime("set", "beyondFullpage", 1000);
            else {
                var shouldSetFixedPosition = !g_isAboutToScrollToFullPage && (!keyframeTime("isNewKeyframe", "beyondFullpage") || !wheelDataHandler.isAccelerating());
                var scrollSettings;
                if (shouldSetFixedPosition) {
                    scrollSettings = getScrollSettings(getLast(getState().sections).item.offsetTop + getLast(getState().sections).item.offsetHeight);
                    scrollSettings.element.scrollTo(0, scrollSettings.options);
                    setState({
                        isAboutToScrollToFullPage: false
                    });
                    preventDefault(e);
                    return false;
                } else if (wheelDataHandler.isAccelerating()) {
                    pauseScroll = false;
                    setState({
                        isAboutToScrollToFullPage: true
                    });
                    setState({
                        scrollTrigger: "wheel"
                    });
                    scrollUpToFullpage();
                    preventDefault(e);
                    return false;
                }
            }
            if (!g_isAboutToScrollToFullPage) {
                // allow normal scrolling, but quitting
                if (!pauseScroll) return true;
            }
        }
    }
    var keyframeTime = function() {
        var isNew = false;
        var frames = {};
        var timeframes = {};
        return function(action, name, timeframe) {
            switch(action){
                case "set":
                    frames[name] = new Date().getTime();
                    timeframes[name] = timeframe;
                    break;
                case "isNewKeyframe":
                    var current = new Date().getTime();
                    isNew = current - frames[name] > timeframes[name];
                    break;
            }
            return isNew;
        };
    }();
    FP.moveSectionDown = moveSectionDown;
    /**
    * Moves the page down one section.
    */ function moveSectionDown() {
        var next = getState().activeSection.next(); //looping to the top if there's no more sections below
        if (!next && (getOptions().loopBottom || getOptions().continuousVertical)) next = getState().sections[0];
        if (next != null) scrollPage(next, null, false);
        else if (hasContentBeyondFullPage()) EventEmitter.emit(events.scrollBeyondFullpage);
    }
    function hasContentBeyondFullPage() {
        return getContainer().scrollHeight < $body.scrollHeight && getOptions().scrollBar && getOptions().scrollBeyondFullpage;
    }
    FP.moveSectionUp = moveSectionUp;
    /**
    * Moves the page up one section.
    */ function moveSectionUp() {
        var prev = getState().activeSection.prev(); //looping to the bottom if there's no more sections above
        if (!prev && (getOptions().loopTop || getOptions().continuousVertical)) prev = getLast(getState().sections);
        if (prev != null) scrollPage(prev, null, true);
    }
    var oldPageY = 0;
    /**
    * Detecting the direction of the mouse movement.
    * Used only for the middle button of the mouse.
    */ function mouseMoveHandler(e) {
        if (!getOptions().autoScrolling) return;
        if (state.canScroll) {
            // moving up
            if (e.pageY < oldPageY && getIsScrollAllowed().m.up) moveSectionUp();
            else if (e.pageY > oldPageY && getIsScrollAllowed().m.down) moveSectionDown();
        }
        oldPageY = e.pageY;
    }
    function setOldPageY(value) {
        oldPageY = value;
    }
    /**
    * Determines the way of scrolling up or down:
    * by 'automatically' scrolling a section or by using the default and normal scrolling.
    */ function scrolling(type) {
        if (!getIsScrollAllowed().m[type]) return;
        var scrollSection = type === "down" ? moveSectionDown : moveSectionUp;
        if (getOptions().scrollOverflow && scrollOverflowHandler.isScrollable(getState().activeSection)) //is the scrollbar at the start/end of the scroll?
        {
            if (scrollOverflowHandler.isScrolled(type, getState().activeSection.item) && scrollOverflowHandler.shouldMovePage()) scrollSection();
        } else scrollSection();
    }
    var touchStartY = 0;
    var touchStartX = 0;
    var touchEndY = 0;
    var touchEndX = 0;
    var MSPointer = getMSPointer();
    var pointers = {
        touchmove: "ontouchmove" in window ? "touchmove" : MSPointer ? MSPointer.move : null,
        touchstart: "ontouchstart" in window ? "touchstart" : MSPointer ? MSPointer.down : null
    };
    /**
    * Adds the possibility to auto scroll through sections on touch devices.
    */ function addTouchHandler() {
        if (!pointers.touchmove) return;
        if (isTouchDevice || isTouch) {
            if (getOptions().autoScrolling) {
                $body.removeEventListener(pointers.touchmove, preventBouncing, {
                    passive: false
                });
                $body.addEventListener(pointers.touchmove, preventBouncing, {
                    passive: false
                });
            }
            var touchWrapper = getOptions().touchWrapper;
            touchWrapper.removeEventListener(pointers.touchstart, touchStartHandler);
            touchWrapper.removeEventListener(pointers.touchmove, touchMoveHandler, {
                passive: false
            });
            touchWrapper.addEventListener(pointers.touchstart, touchStartHandler);
            touchWrapper.addEventListener(pointers.touchmove, touchMoveHandler, {
                passive: false
            });
        }
    }
    /**
    * Removes the auto scrolling for touch devices.
    */ function removeTouchHandler() {
        if (!pointers.touchmove) return;
        if (isTouchDevice || isTouch) {
            // normalScrollElements requires it off #2691
            if (getOptions().autoScrolling) {
                $body.removeEventListener(pointers.touchmove, touchMoveHandler, {
                    passive: false
                });
                $body.removeEventListener(pointers.touchmove, preventBouncing, {
                    passive: false
                });
            }
            var touchWrapper = getOptions().touchWrapper;
            touchWrapper.removeEventListener(pointers.touchstart, touchStartHandler);
            touchWrapper.removeEventListener(pointers.touchmove, touchMoveHandler, {
                passive: false
            });
        }
    }
    /* Detecting touch events

    * As we are changing the top property of the page on scrolling, we can not use the traditional way to detect it.
    * This way, the touchstart and the touch moves shows an small difference between them which is the
    * used one to determine the direction.
    */ function touchMoveHandler(e) {
        var activeSection = closest(e.target, SECTION_SEL) || getState().activeSection.item;
        var hasActiveSectionOverflow = scrollOverflowHandler.isScrollable(getState().activeSection);
        if (isReallyTouch(e)) {
            setState({
                isGrabbing: true,
                isUsingWheel: false
            });
            if (getOptions().autoScrolling) {
                if (hasActiveSectionOverflow && !state.canScroll || getOptions().scrollBar) //preventing the easing on iOS devices
                preventDefault(e);
            }
            var touchEvents = getEventsPage(e);
            touchEndY = touchEvents.y;
            touchEndX = touchEvents.x;
            var isVerticalMovementEnough = Math.abs(touchStartY - touchEndY) > win.innerHeight / 100 * getOptions().touchSensitivity;
            var isHorizontalMovementEnough = Math.abs(touchStartX - touchEndX) > getWindowWidth() / 100 * getOptions().touchSensitivity;
            var isHorizontalPredominantMove = $(SLIDES_WRAPPER_SEL, activeSection).length && Math.abs(touchStartX - touchEndX) > Math.abs(touchStartY - touchEndY);
            var directionH = touchStartX > touchEndX ? "right" : "left";
            var directionV = touchStartY > touchEndY ? "down" : "up";
            var direction = isHorizontalPredominantMove ? directionH : directionV;
            setState({
                touchDirection: direction
            }); //if movement in the X axys is greater than in the Y and the currect section has slides...
            if (isHorizontalPredominantMove) //is the movement greater than the minimum resistance to scroll?
            {
                if (!state.slideMoving && isHorizontalMovementEnough) {
                    if (touchStartX > touchEndX) {
                        if (getIsScrollAllowed().m.right) EventEmitter.emit(events.moveSlideRight, {
                            section: activeSection
                        });
                    } else if (getIsScrollAllowed().m.left) EventEmitter.emit(events.moveSlideLeft, {
                        section: activeSection
                    });
                }
            } else if (getOptions().autoScrolling && state.canScroll) //is the movement greater than the minimum resistance to scroll?
            {
                if (isVerticalMovementEnough) scrolling(directionV);
            }
        }
    }
    /**
    * As IE >= 10 fires both touch and mouse events when using a mouse in a touchscreen
    * this way we make sure that is really a touch event what IE is detecting.
    */ function isReallyTouch(e) {
        //if is not IE   ||  IE is detecting `touch` or `pen`
        return typeof e.pointerType === "undefined" || e.pointerType != "mouse";
    }
    /**
    * Handler for the touch start event.
    */ function touchStartHandler(e) {
        //stopping the auto scroll to adjust to a section
        if (getOptions().fitToSection) setState({
            activeAnimation: false
        });
        if (isReallyTouch(e)) {
            var touchEvents = getEventsPage(e);
            touchStartY = touchEvents.y;
            touchStartX = touchEvents.x;
        }
        windowAddEvent("touchend", touchEndHandler);
    }
    /**
    * Handler for the touch end event.
    */ function touchEndHandler() {
        windowRemoveEvent("touchend", touchEndHandler);
        setState({
            isGrabbing: false
        });
    }
    /**
    * Gets the pageX and pageY properties depending on the browser.
    * https://github.com/alvarotrigo/fullPage.js/issues/194#issuecomment-34069854
    */ function getEventsPage(e) {
        var events = {};
        events.y = typeof e.pageY !== "undefined" && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY;
        events.x = typeof e.pageX !== "undefined" && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX; //in touch devices with scrollBar:true, e.pageY is detected, but we have to deal with touch events. #1008
        if (isTouch && isReallyTouch(e) && getOptions().scrollBar && typeof e.touches !== "undefined") {
            events.y = e.touches[0].pageY;
            events.x = e.touches[0].pageX;
        }
        return events;
    }
    /*
    * Returns and object with Microsoft pointers (for IE<11 and for IE >= 11)
    * http://msdn.microsoft.com/en-us/library/ie/dn304886(v=vs.85).aspx
    */ function getMSPointer() {
        var pointer; //IE >= 11 & rest of browsers
        if (win.PointerEvent) pointer = {
            down: "pointerdown",
            move: "pointermove"
        };
        return pointer;
    }
    /*
    * Preventing bouncing in iOS #2285
    */ function preventBouncing(e) {
        if (getOptions().autoScrolling && isReallyTouch(e) && getIsScrollAllowed().m.up) //preventing the easing on iOS devices
        {
            if (!state.canScroll) preventDefault(e);
        }
    }
    FP.moveSlideLeft = moveSlideLeft;
    FP.moveSlideRight = moveSlideRight;
    /**
    * Slides a slider to the given direction.
    * Optional `section` param.
    */ function moveSlide(direction, section) {
        var activeSectionItem = section == null ? getState().activeSection.item : section;
        var activeSection = getPanelByElement(state.sections, activeSectionItem);
        var slides = $(SLIDES_WRAPPER_SEL, activeSectionItem)[0]; // more than one slide needed and nothing should be sliding
        if (slides == null || state.slideMoving || activeSection.slides.length < 2) return;
        var currentSlide = activeSection.activeSlide;
        var destiny = direction === "left" ? currentSlide.prev() : currentSlide.next(); //isn't there a next slide in the secuence?
        if (!destiny) {
            //respect loopHorizontal setting
            if (!getOptions().loopHorizontal) return;
            destiny = direction === "left" ? getLast(activeSection.slides) : activeSection.slides[0];
        }
        setState({
            slideMoving: !FP.test.isTesting
        });
        landscapeScroll(slides, destiny.item, direction);
    }
    /**
    * Slides left the slider of the active section.
    * Optional `section` param.
    */ function moveSlideLeft(section) {
        moveSlide("left", section);
    }
    /**
    * Slides right the slider of the active section.
    * Optional `section` param.
    */ function moveSlideRight(section) {
        moveSlide("right", section);
    }
    /**
    * Gets a section by its anchor / index
    */ function getSectionByAnchor(sectionAnchor) {
        var section = getState().sections.filter(function(section) {
            return section.anchor === sectionAnchor;
        })[0];
        if (!section) {
            var sectionIndex = typeof sectionAnchor !== "undefined" ? sectionAnchor - 1 : 0;
            section = getState().sections[sectionIndex];
        }
        return section;
    }
    /**
    * Scrolls the slider to the given slide destination for the given section
    */ function scrollSlider(slideElem) {
        if (slideElem != null) landscapeScroll(closest(slideElem, SLIDES_WRAPPER_SEL), slideElem);
    }
    /**
    * Scrolls to the given section and slide anchors
    */ function scrollPageAndSlide(sectionAnchor, slideAnchor) {
        var section = getSectionByAnchor(sectionAnchor); //do nothing if there's no section with the given anchor name
        if (section == null) return;
        var slideElem = getSlideByAnchor(slideAnchor, section); //we need to scroll to the section and then to the slide
        if ((!section.anchor || section.anchor !== state.lastScrolledDestiny) && !hasClass(section.item, ACTIVE)) scrollPage(section, function() {
            scrollSlider(slideElem);
        });
        else scrollSlider(slideElem);
    }
    /**
    * Gets a slide inside a given section by its anchor / index
    */ function getSlideByAnchor(slideAnchor, section) {
        var slide = section.slides.filter(function(slide) {
            return slide.anchor === slideAnchor;
        })[0];
        if (slide == null) {
            slideAnchor = typeof slideAnchor !== "undefined" ? slideAnchor : 0;
            slide = section.slides[slideAnchor];
        }
        return slide ? slide.item : null;
    }
    FP.moveTo = moveTo$1;
    /**
    * Moves the page to the given section and slide.
    * Anchors or index positions can be used as params.
    */ function moveTo$1(sectionAnchor, slideAnchor) {
        var destiny = getSectionByAnchor(sectionAnchor);
        if (typeof slideAnchor !== "undefined") scrollPageAndSlide(sectionAnchor, slideAnchor);
        else if (destiny != null) scrollPage(destiny);
    }
    //@ts-check
    var g_controlPressed;
    var g_keydownId;
    var g_elToFocus;
    EventEmitter.on(events.bindEvents, bindEvents$8);
    function bindEvents$8() {
        //when opening a new tab (ctrl + t), `control` won't be pressed when coming back.
        windowAddEvent("blur", blurHandler); //Sliding with arrow keys, both, vertical and horizontal
        docAddEvent("keydown", keydownHandler); //to prevent scrolling while zooming
        docAddEvent("keyup", keyUpHandler);
        EventEmitter.on(events.onDestroy, onDestroy$5);
        EventEmitter.on(events.afterSlideLoads, onAfterSlideLoads);
        EventEmitter.on(events.afterSectionLoads, afterSectionLoads);
    }
    function onDestroy$5() {
        clearTimeout(g_keydownId);
        docRemoveEvent("keydown", keydownHandler);
        docRemoveEvent("keyup", keyUpHandler);
    } //Sliding with arrow keys, both, vertical and horizontal
    function keydownHandler(e) {
        clearTimeout(g_keydownId);
        var keyCode = e.keyCode;
        var isPressingHorizontalArrows = [
            37,
            39
        ].indexOf(keyCode) > -1;
        var canScrollWithKeyboard = getOptions().autoScrolling || getOptions().fitToSection || isPressingHorizontalArrows; //tab?
        if (keyCode === 9) onTab(e);
        else if (!isInsideInput() && getOptions().keyboardScrolling && canScrollWithKeyboard) {
            g_controlPressed = e.ctrlKey;
            g_keydownId = setTimeout(function() {
                onkeydown(e);
            }, 0);
        }
    }
    /**
    * Keydown event
    */ function onkeydown(e) {
        var shiftPressed = e.shiftKey;
        var activeElement = doc.activeElement;
        var isMediaFocused = matches(activeElement, "video") || matches(activeElement, "audio");
        var isScrolled = {
            up: scrollOverflowHandler.isScrolled("up", getState().activeSection.item),
            down: scrollOverflowHandler.isScrolled("down", getState().activeSection.item)
        };
        var isUsingHorizontalArrowKeys = [
            37,
            39
        ].indexOf(e.keyCode) > -1;
        cancelDirectionKeyEvents(e); //do nothing if we can not scroll or we are not using horizotnal key arrows.
        if (!state.canScroll && !isUsingHorizontalArrowKeys) return;
        setState({
            scrollTrigger: "keydown"
        });
        switch(e.keyCode){
            //up
            case 38:
            case 33:
                if (getIsScrollAllowed().k.up && isScrolled.up) {
                    if (state.isBeyondFullpage) EventEmitter.emit(events.onKeyDown, {
                        e: e
                    });
                    else moveSectionUp();
                } else scrollOverflowHandler.focusScrollable();
                break;
            //down
            case 32:
                //spacebar
                if (shiftPressed && getIsScrollAllowed().k.up && !isMediaFocused && isScrolled.up) {
                    moveSectionUp();
                    break;
                }
            /* falls through */ case 40:
            case 34:
                if (getIsScrollAllowed().k.down && isScrolled.down) {
                    if (state.isBeyondFullpage) return;
                     // space bar?
                    if (e.keyCode !== 32 || !isMediaFocused) moveSectionDown();
                } else scrollOverflowHandler.focusScrollable();
                break;
            //Home
            case 36:
                if (getIsScrollAllowed().k.up) moveTo$1(1);
                break;
            //End
            case 35:
                if (getIsScrollAllowed().k.down) moveTo$1(getState().sections.length);
                break;
            //left
            case 37:
                if (getIsScrollAllowed().k.left) moveSlideLeft();
                break;
            //right
            case 39:
                if (getIsScrollAllowed().k.right) moveSlideRight();
                break;
            default:
                return;
        }
    } //to prevent scrolling while zooming
    function keyUpHandler(e) {
        if (state.isWindowFocused) //the keyup gets fired on new tab ctrl + t in Firefox
        g_controlPressed = e.ctrlKey;
    } //when opening a new tab (ctrl + t), `control` won't be pressed when coming back.
    function blurHandler() {
        setState({
            isWindowFocused: false
        });
        g_controlPressed = false;
    }
    /**
    * Makes sure the tab key will only focus elements within the current section/slide
    * preventing this way from breaking the page.
    * Based on "Modals and keyboard traps"
    * from https://developers.google.com/web/fundamentals/accessibility/focus/using-tabindex
    */ function onTab(e) {
        var isShiftPressed = e.shiftKey;
        var activeElement = doc.activeElement;
        var focusableElements = getFocusables(getSlideOrSection(getState().activeSection.item));
        function preventAndFocusFirst(e) {
            preventDefault(e);
            return focusableElements[0] ? focusableElements[0].focus() : null;
        } // deactivating tab while scrolling #4550
        if (!state.canScroll) {
            preventDefault(e);
            return;
        } //outside any section or slide? Let's not hijack the tab!
        if (isFocusOutside(e)) return;
         //is there an element with focus?
        if (activeElement) {
            if (closest(activeElement, SECTION_ACTIVE_SEL + "," + SECTION_ACTIVE_SEL + " " + SLIDE_ACTIVE_SEL) == null) activeElement = preventAndFocusFirst(e);
        } else preventAndFocusFirst(e);
         //when reached the first or last focusable element of the section/slide
        //we prevent the tab action to keep it in the last focusable element
        var isFirstFocusableInSection = activeElement == focusableElements[0];
        var isLastFocusableInSection = activeElement == focusableElements[focusableElements.length - 1];
        var isNextItem = !isShiftPressed && isLastFocusableInSection;
        var isPrevItem = isShiftPressed && isFirstFocusableInSection;
        if (isPrevItem || isNextItem) {
            preventDefault(e);
            var focusInfo = getPanelWithFocusable(isPrevItem);
            var destinationPanel = focusInfo ? focusInfo.panel : null;
            if (destinationPanel) {
                var destinationSection = destinationPanel.isSection ? destinationPanel : destinationPanel.parent;
                EventEmitter.emit(events.onScrollPageAndSlide, {
                    sectionAnchor: destinationSection.index() + 1,
                    slideAnchor: destinationPanel.isSection ? 0 : destinationPanel.index()
                });
                g_elToFocus = focusInfo.itemToFocus;
                preventDefault(e);
            }
        }
    }
    function onAfterSlideLoads(v) {
        focusItem();
    }
    function afterSectionLoads(v) {
        if (!closest(g_elToFocus, SLIDE_SEL) || closest(g_elToFocus, SLIDE_ACTIVE_SEL)) focusItem();
    }
    function focusItem() {
        if (g_elToFocus) {
            g_elToFocus.focus();
            g_elToFocus = null;
        }
    }
    /**
     * Get's the panel containing the element to focus.
     *
     */ function getPanelWithFocusable(isPrevItem) {
        var action = isPrevItem ? "prevPanel" : "nextPanel";
        var focusableElements = [];
        var panelWithFocusables;
        var currentPanel = getSlideOrSectionPanel(getActivePanel()[action]());
        do {
            focusableElements = getFocusables(currentPanel.item);
            if (focusableElements.length) panelWithFocusables = {
                panel: currentPanel,
                itemToFocus: focusableElements[isPrevItem ? focusableElements.length - 1 : 0]
            };
            currentPanel = getSlideOrSectionPanel(currentPanel[action]());
        }while (currentPanel && focusableElements.length === 0);
        return panelWithFocusables;
    }
    /**
    * Gets all the focusable elements inside the passed element.
    */ function getFocusables(el) {
        return [].slice.call($(focusableElementsString, el)).filter(function(item) {
            return getAttr(item, "tabindex") !== "-1" && //are also not hidden elements (or with hidden parents)
            item.offsetParent !== null;
        });
    }
    /**
    * Determines whether the focus is outside fullpage.js sections/slides or not.
    */ function isFocusOutside(e) {
        var allFocusables = getFocusables(doc);
        var currentFocusIndex = allFocusables.indexOf(doc.activeElement);
        var focusDestinationIndex = e.shiftKey ? currentFocusIndex - 1 : currentFocusIndex + 1;
        var focusDestination = allFocusables[focusDestinationIndex];
        var destinationItemSlide = closest(focusDestination, SLIDE_SEL);
        var destinationItemSection = closest(focusDestination, SECTION_SEL);
        return !destinationItemSlide && !destinationItemSection;
    }
    function shouldCancelKeyboardNavigation(e) {
        // https://keycode.info/for/34
        // 40 = arrow down
        // 38 = arrow up
        // 32 = spacebar
        // 33  = PageUp
        // 34 = PageDown
        var keyControls = [
            40,
            38,
            32,
            33,
            34
        ];
        return keyControls.indexOf(e.keyCode) > -1 && !state.isBeyondFullpage;
    } //preventing the scroll with arrow keys & spacebar & Page Up & Down keys
    function cancelDirectionKeyEvents(e) {
        if (shouldCancelKeyboardNavigation(e) && !closest(e.target, OVERFLOW_SEL)) e.preventDefault();
    }
    function getControlPressed() {
        return g_controlPressed;
    }
    var prevTime = new Date().getTime();
    var scrollings = [];
    FP.setMouseWheelScrolling = setMouseWheelScrolling;
    /**
    * Adds or remove the possibility of scrolling through sections by using the mouse wheel or the trackpad.
    */ function setMouseWheelScrolling(value) {
        if (value) {
            addMouseWheelHandler();
            addMiddleWheelHandler();
        } else {
            removeMouseWheelHandler();
            removeMiddleWheelHandler();
        }
    }
    /**
    * Adds the auto scrolling action for the mouse wheel and trackpad.
    * After this function is called, the mousewheel and trackpad movements will scroll through sections
    * https://developer.mozilla.org/en-US/docs/Web/Events/wheel
    */ function addMouseWheelHandler() {
        var prefix = "";
        var _addEventListener;
        if (win.addEventListener) _addEventListener = "addEventListener";
        else {
            _addEventListener = "attachEvent";
            prefix = "on";
        } // detect available wheel event
        var support = "onwheel" in doc.createElement("div") ? "wheel" : // @ts-ignore
        doc.onmousewheel !== undefined ? "mousewheel" : "DOMMouseScroll"; // let's assume that remaining browsers are older Firefox
        var passiveEvent = getPassiveOptionsIfPossible();
        if (support == "DOMMouseScroll") doc[_addEventListener](prefix + "MozMousePixelScroll", MouseWheelHandler, passiveEvent);
        else doc[_addEventListener](prefix + support, MouseWheelHandler, passiveEvent);
    }
    /**
    * Binding the mousemove when the mouse's middle button is pressed
    */ function addMiddleWheelHandler() {
        getContainer().addEventListener("mousedown", mouseDownHandler);
        getContainer().addEventListener("mouseup", mouseUpHandler);
    }
    /**
    * Removes the auto scrolling action fired by the mouse wheel and trackpad.
    * After this function is called, the mousewheel and trackpad movements won't scroll through sections.
    */ function removeMouseWheelHandler() {
        if (doc.addEventListener) {
            docRemoveEvent("mousewheel", MouseWheelHandler, false); //IE9, Chrome, Safari, Oper
            docRemoveEvent("wheel", MouseWheelHandler, false); //Firefox
            docRemoveEvent("MozMousePixelScroll", MouseWheelHandler, false); //old Firefox
        } else // @ts-ignore
        doc.detachEvent("onmousewheel", MouseWheelHandler); //IE 6/7/8
    }
    /**
    * Unbinding the mousemove when the mouse's middle button is released
    */ function removeMiddleWheelHandler() {
        getContainer().removeEventListener("mousedown", mouseDownHandler);
        getContainer().removeEventListener("mouseup", mouseUpHandler);
    }
    /**
     * Detecting mousewheel scrolling
     *
     * http://blogs.sitepointstatic.com/examples/tech/mouse-wheel/index.html
     * http://www.sitepoint.com/html5-javascript-mouse-wheel/
     */ function MouseWheelHandler(e) {
        var curTime = new Date().getTime();
        var isNormalScroll = hasClass($(COMPLETELY_SEL)[0], NORMAL_SCROLL);
        var isScrollAllowedBeyondFullPage = beyondFullPageHandler(getContainer(), e);
        if (!state.isUsingWheel) setState({
            isGrabbing: false,
            isUsingWheel: true,
            touchDirection: "none"
        });
         //is scroll allowed?
        if (!getIsScrollAllowed().m.down && !getIsScrollAllowed().m.up) {
            preventDefault(e);
            return false;
        }
        if (isScrollAllowedBeyondFullPage) return true;
        else if (isScrollAllowedBeyondFullPage === false) {
            preventDefault(e);
            return false;
        } //autoscrolling and not zooming?
        if (getOptions().autoScrolling && !getControlPressed() && !isNormalScroll) {
            // cross-browser wheel delta
            e = e || win.event;
            var value = e.wheelDelta || -e.deltaY || -e.detail;
            var delta = Math.max(-1, Math.min(1, value));
            var horizontalDetection = typeof e.wheelDeltaX !== "undefined" || typeof e.deltaX !== "undefined";
            var isScrollingVertically = Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) || Math.abs(e.deltaX) < Math.abs(e.deltaY) || !horizontalDetection;
            var direction = delta < 0 ? "down" : delta > 0 ? "up" : "none"; //Limiting the array to 150 (lets not waste memory!)
            if (scrollings.length > 149) scrollings.shift();
             //keeping record of the previous scrollings
            scrollings.push(Math.abs(value)); //preventing to scroll the site on mouse wheel when scrollbar is present
            if (getOptions().scrollBar) preventDefault(e);
             //time difference between the last scroll and the current one
            var timeDiff = curTime - prevTime;
            prevTime = curTime; //haven't they scrolled in a while?
            //(enough to be consider a different scrolling action to scroll another section)
            if (timeDiff > 200) //emptying the array, we dont care about old scrollings for our averages
            scrollings = [];
            setState({
                wheelDirection: direction
            });
            if (state.canScroll) {
                var averageEnd = getAverage(scrollings, 10);
                var averageMiddle = getAverage(scrollings, 70);
                var isAccelerating = averageEnd >= averageMiddle; //to avoid double swipes...
                if (isAccelerating && isScrollingVertically) {
                    setState({
                        scrollTrigger: "wheel"
                    }); //scrolling down?
                    if (delta < 0) scrolling("down");
                    else scrolling("up");
                }
            }
            return false;
        }
        if (getOptions().fitToSection) //stopping the auto scroll to adjust to a section
        setState({
            activeAnimation: false
        });
    } //binding the mousemove when the mouse's middle button is released
    function mouseDownHandler(e) {
        //middle button
        if (e.which == 2) {
            setOldPageY(e.pageY);
            getContainer().addEventListener("mousemove", mouseMoveHandler);
        }
    } //unbinding the mousemove when the mouse's middle button is released
    function mouseUpHandler(e) {
        //middle button
        if (e.which == 2) getContainer().removeEventListener("mousemove", mouseMoveHandler);
    }
    /**
    * Adds or remove the mouse wheel hijacking
    */ function setMouseHijack(value) {
        if (value) {
            setMouseWheelScrolling(true);
            addTouchHandler();
        } else {
            setMouseWheelScrolling(false);
            removeTouchHandler();
        }
    }
    var g_canFireMouseEnterNormalScroll = true;
    EventEmitter.on(events.bindEvents, bindEvents$7);
    function bindEvents$7() {
        /**
      * Applying normalScroll elements.
      * Ignoring the scrolls over the specified selectors.
      */ if (getOptions().normalScrollElements) {
            [
                "mouseenter",
                "touchstart"
            ].forEach(function(eventName) {
                forMouseLeaveOrTouch(eventName, false);
            });
            [
                "mouseleave",
                "touchend"
            ].forEach(function(eventName) {
                forMouseLeaveOrTouch(eventName, true);
            });
        }
        EventEmitter.on(events.onDestroy, onDestroy$4);
    }
    function onDestroy$4() {
        [
            "mouseenter",
            "touchstart",
            "mouseleave",
            "touchend"
        ].forEach(function(eventName) {
            docRemoveEvent(eventName, onMouseEnterOrLeave, true); //true is required!
        });
    }
    function forMouseLeaveOrTouch(eventName, allowScrolling) {
        //a way to pass arguments to the onMouseEnterOrLeave function
        document["fp_" + eventName] = allowScrolling;
        docAddEvent(eventName, onMouseEnterOrLeave, true); //capturing phase
    }
    function onMouseEnterOrLeave(e) {
        var type = e.type;
        var isInsideOneNormalScroll = false; //onMouseLeave will use the destination target, not the one we are moving away from
        var target = type === "mouseleave" ? e.toElement || e.relatedTarget : e.target; //coming from closing a normalScrollElements modal or moving outside viewport?
        if (target == document || !target) {
            setMouseHijack(true);
            return;
        }
        if (type === "touchend") {
            g_canFireMouseEnterNormalScroll = false;
            setTimeout(function() {
                g_canFireMouseEnterNormalScroll = true;
            }, 800);
        } //preventing mouseenter event to do anything when coming from a touchEnd event
        //fixing issue #3576
        if (type === "mouseenter" && !g_canFireMouseEnterNormalScroll) return;
        var normalSelectors = getOptions().normalScrollElements.split(",");
        normalSelectors.forEach(function(normalSelector) {
            if (!isInsideOneNormalScroll) {
                var isNormalScrollTarget = matches(target, normalSelector); //leaving a child inside the normalScoll element is not leaving the normalScroll #3661
                var isNormalScrollChildFocused = closest(target, normalSelector);
                if (isNormalScrollTarget || isNormalScrollChildFocused) {
                    if (!FP.shared.isNormalScrollElement) setMouseHijack(false);
                    FP.shared.isNormalScrollElement = true;
                    isInsideOneNormalScroll = true;
                }
            }
        }); //not inside a single normal scroll element anymore?
        if (!isInsideOneNormalScroll && FP.shared.isNormalScrollElement) {
            setMouseHijack(true);
            FP.shared.isNormalScrollElement = false;
        }
    }
    FP.silentMoveTo = silentMoveTo;
    /**
    * Moves the page to the given section and slide with no animation.
    * Anchors or index positions can be used as params.
    */ function silentMoveTo(sectionAnchor, slideAnchor) {
        setScrollingSpeed(0, "internal");
        moveTo$1(sectionAnchor, slideAnchor);
        setScrollingSpeed(getOriginals().scrollingSpeed, "internal");
    }
    var previousHeight = getWindowHeight();
    var windowsWidth = getWindowWidth();
    var g_resizeId;
    var g_isConsecutiveResize = false;
    var g_resizeMobileHandlerId;
    FP.reBuild = reBuild;
    EventEmitter.on(events.bindEvents, bindEvents$6);
    function bindEvents$6() {
        // Setting VH correctly in mobile devices
        resizeHandler(); //when resizing the site, we adjust the heights of the sections, slimScroll...
        windowAddEvent("resize", resizeHandler);
        EventEmitter.on(events.onDestroy, onDestroy$3);
    }
    function onDestroy$3() {
        clearTimeout(g_resizeId);
        clearTimeout(g_resizeMobileHandlerId);
        windowRemoveEvent("resize", resizeHandler);
    }
    /*
    * Resize event handler.
    */ function resizeHandler() {
        if (!g_isConsecutiveResize) {
            if (getOptions().autoScrolling && !getOptions().scrollBar || !getOptions().fitToSection) setSectionsHeight(getWindowHeight());
        }
        fitToActiveSection();
        g_isConsecutiveResize = true; //in order to call the functions only when the resize is finished
        //http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing    
        clearTimeout(g_resizeId);
        g_resizeId = setTimeout(function() {
            //issue #3336 
            //(some apps or browsers, like Chrome/Firefox for Mobile take time to report the real height)
            //so we check it 3 times with intervals in that case
            // for(var i = 0; i< 4; i++){
            resizeActions();
            g_isConsecutiveResize = false; // }
        }, 400);
    }
    function fitToActiveSection() {
        if (isTouchDevice) // Issue #4393 and previously in v3, #3336
        // (some apps or browsers, like Chrome/Firefox will delay a bit to scroll 
        // to the focused input
        for(var i = 0; i < 4; i++)g_resizeMobileHandlerId = setTimeout(function() {
            window.requestAnimationFrame(function() {
                // on Android devices the browser scrolls to the focused element
                // messing up the whole page structure. So we need to update the
                // translate3d value when the keyboard shows/hides
                if (getOptions().autoScrolling && !getOptions().scrollBar) {
                    setState({
                        isResizing: true
                    });
                    silentMoveTo(state.activeSection.index() + 1);
                    setState({
                        isResizing: false
                    });
                }
            });
        }, 200 * i);
    }
    /**
    * When resizing the site, we adjust the heights of the sections, slimScroll...
    */ function resizeActions() {
        setState({
            isResizing: true
        });
        setSectionsHeight("");
        if (!getOptions().autoScrolling && !state.isBeyondFullpage) setVhUnits();
        EventEmitter.emit(events.contentChanged);
        updateState(); //checking if it needs to get responsive
        responsive(); // rebuild immediately on touch devices
        if (isTouchDevice) {
            var activeElement = doc.activeElement; //if the keyboard is NOT visible
            if (!matches(activeElement, "textarea") && !matches(activeElement, "input") && !matches(activeElement, "select")) {
                var currentHeight = getWindowHeight(); //making sure the change in the viewport size is enough to force a rebuild. (20 % of the window to avoid problems when hidding scroll bars)
                if (Math.abs(currentHeight - previousHeight) > 20 * Math.max(previousHeight, currentHeight) / 100) {
                    reBuild(true);
                    previousHeight = currentHeight;
                }
            }
        } else adjustToNewViewport();
        setState({
            isResizing: false
        });
    }
    /**
     * When resizing is finished, we adjust the slides sizes and positions
     */ function reBuild(resizing) {
        if (hasClass(getContainer(), DESTROYED)) return;
         //nothing to do if the plugin was destroyed
        //updating global vars
        setState({
            isResizing: true,
            windowsHeight: getWindowHeight(),
            windowsWidth: getWindowWidth()
        });
        var sections = getState().sections;
        for(var i = 0; i < sections.length; ++i){
            var section = sections[i];
            var slidesWrap = $(SLIDES_WRAPPER_SEL, section.item)[0];
            var slides = section.slides; //adjusting the position fo the FULL WIDTH slides...
            if (slides.length > 1) landscapeScroll(slidesWrap, section.activeSlide.item);
        }
        if (getOptions().scrollOverflow) scrollOverflowHandler.makeScrollable();
        var sectionIndex = getState().activeSection.index();
        if (!state.isBeyondFullpage) //isn't it the first section?
        {
            if (sectionIndex) //adjusting the position for the current section
            silentMoveTo(sectionIndex + 1);
        }
        setState({
            isResizing: false
        });
        if (isFunction(getOptions().afterResize) && resizing) getOptions().afterResize.call(getContainer(), win.innerWidth, win.innerHeight);
        if (isFunction(getOptions().afterReBuild) && !resizing) getOptions().afterReBuild.call(getContainer());
        trigger(getContainer(), "afterRebuild");
    }
    /**
    * Adjusts a section to the viewport if it has changed.
    */ function adjustToNewViewport() {
        var newWindowHeight = getWindowHeight();
        var newWindowWidth = getWindowWidth();
        if (state.windowsHeight !== newWindowHeight || windowsWidth !== newWindowWidth) {
            setState({
                windowsHeight: newWindowHeight
            });
            windowsWidth = newWindowWidth;
            reBuild(true);
        }
    }
    function setSectionsHeight(value) {
        var propertyValue = value === "" ? "" : value + "px";
        getState().sections.forEach(function(section) {
            css(section.item, {
                "height": propertyValue
            });
        });
    }
    /**
     * Defining the value in px of a VH unit. (Used for autoScrolling: false)
     * To fix the height issue on mobile devices when using VH units.
     * https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
     */ function setVhUnits() {
        if (!getOptions().autoScrolling || getOptions().scrollBar) {
            // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
            var vh = win.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document
            doc.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
        }
    }
    function getAnchorsURL() {
        var section;
        var slide;
        var hash = win.location.hash;
        if (hash.length) {
            //getting the anchor link in the URL and deleting the `#`
            var anchorsParts = hash.replace("#", "").split("/"); //using / for visual reasons and not as a section/slide separator #2803
            var isFunkyAnchor = hash.indexOf("#/") > -1;
            section = isFunkyAnchor ? "/" + anchorsParts[1] : decodeURIComponent(anchorsParts[0]);
            var slideAnchor = isFunkyAnchor ? anchorsParts[2] : anchorsParts[1];
            if (slideAnchor && slideAnchor.length) slide = decodeURIComponent(slideAnchor);
        }
        return {
            section: section,
            slide: slide
        };
    }
    FP.setLockAnchors = setLockAnchors;
    EventEmitter.on(events.bindEvents, bindEvents$5);
    function bindEvents$5() {
        //detecting any change on the URL to scroll to the given anchor link
        //(a way to detect back history button as we play with the hashes on the URL)
        windowAddEvent("hashchange", hashChangeHandler);
        EventEmitter.on(events.onDestroy, onDestroy$2);
    }
    function onDestroy$2() {
        windowRemoveEvent("hashchange", hashChangeHandler);
    }
    /**
    * Sets lockAnchors
    */ function setLockAnchors(value) {
        getOptions().lockAnchors = value;
    }
    /**
    * Detecting any change on the URL to scroll to the given anchor link
    * (a way to detect back history button as we play with the hashes on the URL)
    */ function hashChangeHandler() {
        if (!state.isScrolling && !getOptions().lockAnchors) {
            var anchors = getAnchorsURL();
            var sectionAnchor = anchors.section;
            var slideAnchor = anchors.slide; //when moving to a slide in the first section for the first time (first time to add an anchor to the URL)
            var isFirstSlideMove = typeof state.lastScrolledDestiny === "undefined";
            var isFirstScrollMove = typeof state.lastScrolledDestiny === "undefined" && typeof slideAnchor === "undefined" && !state.slideMoving;
            if (sectionAnchor && sectionAnchor.length) /*in order to call scrollpage() only once for each destination at a time
          It is called twice for each scroll otherwise, as in case of using anchorlinks `hashChange`
          event is fired on every scroll too.*/ {
                if (sectionAnchor && sectionAnchor !== state.lastScrolledDestiny && !isFirstSlideMove || isFirstScrollMove || !state.slideMoving && state.lastScrolledSlide != slideAnchor) EventEmitter.emit(events.onScrollPageAndSlide, {
                    sectionAnchor: sectionAnchor,
                    slideAnchor: slideAnchor
                });
            }
        }
    }
    EventEmitter.on(events.bindEvents, bindEvents$4);
    function bindEvents$4() {
        docAddEvent("wheel", wheelDataHandler.registerEvent, getPassiveOptionsIfPossible());
        EventEmitter.on(events.scrollBeyondFullpage, scrollBeyondFullPage);
        EventEmitter.on(events.onKeyDown, onKeyDown);
    }
    EventEmitter.on(events.bindEvents, bindEvents$3);
    function bindEvents$3() {
        EventEmitter.on(events.onClickOrTouch, onClickOrTouch$1);
    }
    function onClickOrTouch$1(params) {
        var target = params.target;
        if (closest(target, getOptions().menu + " [data-menuanchor]")) menuItemsHandler.call(target, params);
    } //Menu item handler when not using anchors or using lockAnchors:true
    function menuItemsHandler(e) {
        setState({
            scrollTrigger: "menu"
        });
        if ($(getOptions().menu)[0] && (getOptions().lockAnchors || !getOptions().anchors.length)) {
            preventDefault(e);
            /*jshint validthis:true */ EventEmitter.emit(events.onMenuClick, {
                anchor: getAttr(this, "data-menuanchor")
            });
        }
    }
    EventEmitter.on(events.bindEvents, bindEvents$2);
    function bindEvents$2() {
        EventEmitter.on(events.onClickOrTouch, onClickOrTouch);
    }
    function onClickOrTouch(params) {
        var target = params.target;
        if (target && closest(target, SECTION_NAV_SEL + " a")) sectionBulletHandler.call(target, params.e);
        else if (matches(target, SECTION_NAV_TOOLTIP_SEL)) tooltipTextHandler.call(target);
        else if (matches(target, SLIDES_NAV_LINK_SEL) || closest(target, SLIDES_NAV_LINK_SEL) != null) slideBulletHandler.call(target, params.e);
    }
    var lastScroll = 0;
    var g_scrollId;
    var g_scrollId2;
    EventEmitter.on(events.onDestroy, onDestroy$1); //when scrolling...
    function scrollHandler(e) {
        var currentSection;
        var currentSectionElem;
        if (state.isResizing || !getState().activeSection) return;
        getLast(getState().sections);
        if (getState().isBeyondFullpage || getState().isAboutToScrollToFullPage) return;
        if (!getOptions().autoScrolling || getOptions().scrollBar) {
            var currentScroll = getScrollTop();
            var scrollDirection = getScrollDirection(currentScroll);
            var visibleSectionIndex = 0;
            var screen_mid = currentScroll + getWindowHeight() / 2.0;
            var isAtBottom = $body.scrollHeight - getWindowHeight() === currentScroll;
            var sections = getState().sections;
            setState({
                scrollY: currentScroll
            }); //when using `auto-height` for a small last section it won't be centered in the viewport
            if (isAtBottom) visibleSectionIndex = sections.length - 1;
            else if (!currentScroll) visibleSectionIndex = 0;
            else for(var i = 0; i < sections.length; ++i){
                var section = sections[i].item; // Pick the the last section which passes the middle line of the screen.
                if (section.offsetTop <= screen_mid) visibleSectionIndex = i;
            }
            if (isCompletelyInViewPort(scrollDirection)) {
                if (!hasClass(getState().activeSection.item, COMPLETELY)) {
                    addClass(getState().activeSection.item, COMPLETELY);
                    removeClass(siblings(getState().activeSection.item), COMPLETELY);
                }
            } //geting the last one, the current one on the screen
            currentSection = sections[visibleSectionIndex];
            currentSectionElem = currentSection.item; //setting the visible section as active when manually scrolling
            //executing only once the first time we reach the section
            if (!currentSection.isActive) {
                setState({
                    isScrolling: true
                });
                var leavingSection = getState().activeSection.item;
                var leavingSectionIndex = getState().activeSection.index() + 1;
                var yMovement = getYmovement(getState().activeSection, currentSectionElem);
                var anchorLink = currentSection.anchor;
                var sectionIndex = currentSection.index() + 1;
                var activeSlide = currentSection.activeSlide;
                var slideIndex;
                var slideAnchorLink;
                var callbacksParams = {
                    activeSection: leavingSection,
                    sectionIndex: sectionIndex - 1,
                    anchorLink: anchorLink,
                    element: currentSectionElem,
                    leavingSection: leavingSectionIndex,
                    direction: yMovement,
                    items: {
                        origin: getState().activeSection,
                        destination: currentSection
                    }
                };
                if (activeSlide) {
                    slideAnchorLink = activeSlide.anchor;
                    slideIndex = activeSlide.index();
                }
                if (state.canScroll) {
                    addClass(currentSectionElem, ACTIVE);
                    removeClass(siblings(currentSectionElem), ACTIVE);
                    if (isFunction(getOptions().beforeLeave)) fireCallbackOncePerScroll("beforeLeave", callbacksParams);
                    if (isFunction(getOptions().onLeave)) fireCallback("onLeave", callbacksParams);
                    if (isFunction(getOptions().afterLoad)) fireCallback("afterLoad", callbacksParams);
                    stopMedia(leavingSection);
                    lazyLoad(currentSectionElem);
                    playMedia(currentSectionElem);
                    activateMenuAndNav(anchorLink, sectionIndex - 1);
                    if (getOptions().anchors.length) //needed to enter in hashChange event when using the menu with anchor links
                    setState({
                        lastScrolledDestiny: anchorLink
                    });
                    updateState();
                    setPageStatus(slideIndex, slideAnchorLink, anchorLink);
                } //small timeout in order to avoid entering in hashChange event when scrolling is not finished yet
                clearTimeout(g_scrollId);
                g_scrollId = setTimeout(function() {
                    setState({
                        isScrolling: false
                    });
                }, 100);
            }
            if (getOptions().fitToSection && state.canScroll) {
                clearTimeout(g_scrollId2);
                g_scrollId2 = setTimeout(function() {
                    var fixedSections = state.sections.filter(function(section) {
                        var sectionValues = section.item.getBoundingClientRect();
                        return Math.round(sectionValues.bottom) === Math.round(getWindowHeight()) || Math.round(sectionValues.top) === 0;
                    }); // No section is fitting the viewport? Let's fix that!
                    if (!fixedSections.length) fitToSection();
                }, getOptions().fitToSectionDelay);
            }
        }
    }
    function onDestroy$1() {
        clearTimeout(g_scrollId);
        clearTimeout(g_scrollId2);
    }
    /**
    * Gets the directon of the the scrolling fired by the scroll event.
    */ function getScrollDirection(currentScroll) {
        var direction = currentScroll > lastScroll ? "down" : "up";
        lastScroll = currentScroll; //needed for auto-height sections to determine if we want to scroll to the top or bottom of the destination
        setState({
            previousDestTop: currentScroll
        });
        return direction;
    }
    /**
    * Determines whether the active section has seen in its whole or not.
    */ function isCompletelyInViewPort(movement) {
        var top = getState().activeSection.item.offsetTop;
        var bottom = top + getWindowHeight();
        if (movement == "up") return bottom >= getScrollTop() + getWindowHeight();
        return top <= getScrollTop();
    }
    EventEmitter.on(events.bindEvents, bindEvents$1);
    EventEmitter.on(events.onDestroy, onDestroy);
    function onDestroy() {
        windowRemoveEvent("scroll", scrollHandler);
    }
    function bindEvents$1() {
        windowAddEvent("scroll", scrollHandler);
        doc.body.addEventListener("scroll", scrollHandler);
        EventEmitter.on(events.onScrollPageAndSlide, function(params) {
            scrollPageAndSlide(params.sectionAnchor, params.slideAnchor);
        });
        EventEmitter.on(events.onMenuClick, function(params) {
            moveTo$1(params.anchor, undefined);
        });
        EventEmitter.on(events.onScrollOverflowScrolled, function(params) {
            var scrollSection = params.direction === "down" ? moveSectionDown : moveSectionUp;
            scrollSection();
        });
        EventEmitter.on(events.scrollPage, function(params) {
            scrollPage(params.destination);
        });
    }
    FP.getActiveSlide = getActiveSlide;
    FP.getScrollX = function() {
        return state.scrollX;
    };
    EventEmitter.on(events.bindEvents, bindEvents);
    function bindEvents() {
        EventEmitter.on(events.onDestroy, onDestroy$6);
        EventEmitter.on(events.landscapeScroll, function(params) {
            landscapeScroll(params.slides, params.destination);
        });
        EventEmitter.on(events.moveSlideRight, function(params) {
            moveSlideRight(params.section);
        });
        EventEmitter.on(events.moveSlideLeft, function(params) {
            moveSlideLeft(params.section);
        });
    }
    /**
    * Gets the active slide.
    */ function getActiveSlide() {
        return nullOrSlide(getState().activeSection.activeSlide);
    }
    EventEmitter.on(events.bindEvents, init$1);
    function init$1() {
        var position = getOptions().credits.position || "right";
        var positionStyle = [
            "left",
            "right"
        ].indexOf(position) > -1 ? "".concat(position, ": 0;") : "";
        var waterMark = '\n        <div class="fp-watermark" style="'.concat(positionStyle, '">\n            <a href="https://alvarotrigo.com/fullPage/" \n                rel="nofollow noopener" \n                target="_blank" \n                style="text-decoration:none; color: #000;">\n                    ').concat(getOptions().credits.label || "Made with fullPage.js", "\n            </a>\n        </div>\n    ");
        var lastSection = getLast(state.sections);
        var shouldUseWaterMark = !state.isValid || getOptions().credits.enabled;
        if (lastSection && lastSection.item && shouldUseWaterMark) lastSection.item.insertAdjacentHTML("beforeend", waterMark);
    }
    !function() {
        EventEmitter.on(events.onInitialise, function() {
            var n, a, l;
            setState({
                isValid: (getOptions().licenseKey, n = getOptions().licenseKey, a = function(n) {
                    var e = parseInt("514").toString(16);
                    if (!n || n.length < 29 || 4 === n.split(t[0]).length) return null;
                    var r = [
                        "Each",
                        "for"
                    ][i()]().join(""), a = n[[
                        "split"
                    ]]("-"), l = [];
                    a[r](function(t, n) {
                        if (n < 4) {
                            var r = function(t) {
                                var n = t[t.length - 1], e = [
                                    "NaN",
                                    "is"
                                ][i()]().join("");
                                return window[e](n) ? o(n) : function(t) {
                                    return t - ACTIVE.length;
                                }(n);
                            }(t);
                            l.push(r);
                            var s = o(t[r]);
                            if (1 === n) {
                                var a = [
                                    "pa",
                                    "dS",
                                    "t",
                                    "art"
                                ].join("");
                                s = s.toString()[a](2, "0");
                            }
                            e += s, 0 !== n && 1 !== n || (e += "-");
                        }
                    });
                    var m = 0, f = "";
                    return n.split("-").forEach(function(t, n) {
                        if (n < 4) {
                            var _i = 0;
                            for(var e = 0; e < 4; e++)e !== l[n] && (_i += Math.abs(o(t[e])), isNaN(t[e]) || m++);
                            var r = s(_i);
                            f += r;
                        }
                    }), f += s(m), {
                        v: new Date(e + "T00:00"),
                        o: e.split("-")[2] === 8 * (ACTIVE.length - 2) + "",
                        l: f
                    };
                }(n), l = function(t) {
                    var n = r[i()]().join("");
                    return t && 0 === n.indexOf(t) && t.length === n.length;
                }(n), (a || l) && (a && e <= a.v && a.l === n.split(t[0])[4] || l || a.o) || !1)
            });
        });
        var t = [
            "-"
        ];
        var n = "2023-4-29".split("-"), e = new Date(n[0], n[1], n[2]), r = [
            "se",
            "licen",
            "-",
            "v3",
            "l",
            "gp"
        ];
        function i() {
            return [
                "re",
                "verse"
            ].join("");
        }
        function o(t) {
            return t ? isNaN(t) ? t.charCodeAt(0) - 72 : t : "";
        }
        function s(t) {
            var n = 72 + t;
            return n > 90 && n < 97 && (n += 15), String.fromCharCode(n).toUpperCase();
        }
    }();
    //@ts-check
    FP.setKeyboardScrolling = setKeyboardScrolling;
    /**
    * Adds or remove the possibility of scrolling through sections by using the keyboard arrow keys
    */ function setKeyboardScrolling(value, directions) {
        if (typeof directions !== "undefined") {
            directions = directions.replace(/ /g, "").split(",");
            directions.forEach(function(direction) {
                setIsScrollAllowed(value, direction, "k");
            });
        } else {
            setIsScrollAllowed(value, "all", "k");
            getOptions().keyboardScrolling = value;
        }
    }
    /**
    * Sets the data-anchor attributes to the menu elements and activates the current one.
    */ function styleMenu(section) {
        var index = section.index();
        if (typeof getOptions().anchors[index] !== "undefined") //activating the menu / nav element on load
        {
            if (section.isActive) activateMenuAndNav(getOptions().anchors[index], index);
        } //moving the menu outside the main container if it is inside (avoid problems with fixed positions when using CSS3 tranforms)
        if (getOptions().menu && getOptions().css3 && closest($(getOptions().menu)[0], WRAPPER_SEL) != null) $(getOptions().menu).forEach(function(menu) {
            $body.appendChild(menu);
        });
    }
    /**
    * Works over the DOM structure to set it up for the current fullpage getOptions().
    */ function prepareDom() {
        css(getParentsUntil(getContainer(), "body"), {
            "height": "100%",
            "position": "relative"
        }); //adding a class to recognize the container internally in the code
        addClass(getContainer(), WRAPPER);
        addClass($html, ENABLED); //due to https://github.com/alvarotrigo/fullPage.js/issues/1502
        setState({
            windowsHeight: getWindowHeight()
        });
        removeClass(getContainer(), DESTROYED); //in case it was destroyed before initializing it again
        addInternalSelectors();
        var sections = getState().sectionsIncludingHidden; //styling the sections / slides / menu
        for(var i = 0; i < sections.length; i++){
            var section = sections[i];
            var slides = section.allSlidesItems; //caching the original styles to add them back on destroy('all')
            var originalStyles = getAttr(section.item, "style");
            if (originalStyles) section.item.setAttribute("data-fp-styles", originalStyles);
            styleSection(section);
            styleMenu(section); // if there's any slide
            if (slides.length > 0) styleSlides(section);
        } //fixed elements need to be moved out of the plugin container due to problems with CSS3.
        if (getOptions().fixedElements && getOptions().css3) $(getOptions().fixedElements).forEach(function(item) {
            $body.appendChild(item);
        });
         //vertical centered of the navigation + active bullet
        if (getOptions().navigation) addVerticalNavigation();
        enableYoutubeAPI();
        if (getOptions().scrollOverflow) scrollOverflowHandler.makeScrollable();
    }
    FP.shared.afterRenderActions = afterRenderActions;
    /**
    * Actions and callbacks to fire afterRender
    */ function afterRenderActions() {
        var section = getState().activeSection;
        var sectionElem = getState().activeSection.item;
        addClass(sectionElem, COMPLETELY);
        lazyLoad(sectionElem);
        lazyLoadOthers();
        playMedia(sectionElem);
        if (isDestinyTheStartingSection() && isFunction(getOptions().afterLoad)) fireCallback("afterLoad", {
            activeSection: sectionElem,
            element: sectionElem,
            direction: null,
            //for backwards compatibility callback (to be removed in a future!)
            anchorLink: section.anchor,
            sectionIndex: section.index(),
            items: {
                origin: getState().activeSection,
                destination: getState().activeSection
            }
        });
        if (isFunction(getOptions().afterRender)) fireCallback("afterRender");
    }
    /**
    * Determines if the URL anchor destiny is the starting section (the one using 'active' class before initialization)
    */ function isDestinyTheStartingSection() {
        var anchor = getAnchorsURL();
        var destinationSection = getSectionByAnchor(anchor.section);
        return !anchor.section || !destinationSection || typeof destinationSection !== "undefined" && destinationSection.index() === index(getStartingSection());
    }
    FP.setAllowScrolling = setAllowScrolling;
    /**
    * Adds or remove the possibility of scrolling through sections by using the mouse wheel/trackpad or touch gestures.
    * Optionally a second parameter can be used to specify the direction for which the action will be applied.
    *
    * @param directions string containing the direction or directions separated by comma.
    */ function setAllowScrolling(value, directions) {
        if (typeof directions !== "undefined") {
            directions = directions.replace(/ /g, "").split(",");
            directions.forEach(function(direction) {
                setIsScrollAllowed(value, direction, "m");
            });
        } else setIsScrollAllowed(value, "all", "m");
    }
    /**
    * Scrolls to the anchor in the URL when loading the site
    */ function scrollToAnchor() {
        var anchors = getAnchorsURL();
        var sectionAnchor = anchors.section;
        var slideAnchor = anchors.slide;
        if (sectionAnchor) {
            //if theres any #
            if (getOptions().animateAnchor) scrollPageAndSlide(sectionAnchor, slideAnchor);
            else silentMoveTo(sectionAnchor, slideAnchor);
        } else EventEmitter.emit(events.onAfterRenderNoAnchor, null);
    }
    /*
    * Removes inline styles added by fullpage.js
    */ function destroyStructure() {
        //reseting the `top` or `translate` properties to 0
        silentScroll(0); //loading all the lazy load content
        $("img[data-src], source[data-src], audio[data-src], iframe[data-src]", getContainer()).forEach(function(item) {
            setSrc(item, "src");
        });
        $("img[data-srcset]").forEach(function(item) {
            setSrc(item, "srcset");
        });
        remove($(SECTION_NAV_SEL + ", " + SLIDES_NAV_SEL + ", " + SLIDES_ARROW_SEL)); //removing inline styles
        css(getNodes(getState().sections), {
            "height": "",
            "background-color": "",
            "padding": ""
        });
        css(getNodes(getState().slides), {
            "width": ""
        });
        css(getContainer(), {
            "height": "",
            "position": "",
            "-ms-touch-action": "",
            "touch-action": ""
        });
        css($htmlBody, {
            "overflow": "",
            "height": ""
        }); // remove .fp-enabled class
        removeClass($html, ENABLED); // remove .fp-responsive class & .fp-scrollable
        removeClass($body, RESPONSIVE + " " + SCROLLABLE); // remove all of the .fp-viewing- classes
        $body.className.split(/\s+/).forEach(function(className) {
            if (className.indexOf(VIEWING_PREFIX) === 0) removeClass($body, className);
        }); //removing added classes
        getNodes(getState().panels).forEach(function(item) {
            if (getOptions().scrollOverflow) scrollOverflowHandler.destroyWrapper(item);
            removeClass(item, TABLE + " " + ACTIVE + " " + COMPLETELY + " " + IS_OVERFLOW);
            var previousStyles = getAttr(item, "data-fp-styles");
            if (previousStyles) item.setAttribute("style", previousStyles);
             //removing anchors if they were not set using the HTML markup
            if (hasClass(item, SECTION) && !getInitialAnchorsInDom()) item.removeAttribute("data-anchor");
        }); //removing the applied transition from the fullpage wrapper
        removeAnimation(getContainer()); //Unwrapping content
        [
            TABLE_CELL_SEL,
            SLIDES_CONTAINER_SEL,
            SLIDES_WRAPPER_SEL
        ].forEach(function(selector) {
            $(selector, getContainer()).forEach(function(item) {
                //unwrap not being use in case there's no child element inside and its just text
                unwrap(item);
            });
        }); //removing the applied transition from the fullpage wrapper
        css(getContainer(), {
            "-webkit-transition": "none",
            "transition": "none"
        });
        removeClass(getContainer(), WRAPPER); //scrolling the page to the top with no animation
        win.scrollTo(0, 0); //removing selectors
        var usedSelectors = [
            SECTION,
            SLIDE,
            SLIDES_CONTAINER
        ];
        usedSelectors.forEach(function(item) {
            removeClass($("." + item), item);
        });
    }
    FP.destroy = destroy;
    function init() {
        updateStructuralState();
        updateState();
        getOptions().scrollBar = getOptions().scrollBar || getOptions().hybrid;
        setOptionsFromDOM();
        prepareDom();
        setAllowScrolling(true);
        setMouseHijack(true);
        setAutoScrolling(getOptions().autoScrolling, "internal");
        responsive(); //setting the class for the body element
        setBodyClass();
        if (doc.readyState === "complete") scrollToAnchor();
        windowAddEvent("load", scrollToAnchor);
        afterRenderActions(); // Updating the state again with the new DOM
        updateStructuralState();
        updateState();
    }
    /*
    * Destroys fullpage.js plugin events and optinally its html markup and styles
    */ function destroy(all) {
        setAutoScrolling(false, "internal");
        setAllowScrolling(true);
        setMouseHijack(false);
        setKeyboardScrolling(false);
        addClass(getContainer(), DESTROYED);
        EventEmitter.emit(events.onDestroy); //lets make a mess!
        if (all) destroyStructure();
    }
    var isOK = function isOK() {
        return getOptions() && state.isValid || doc.domain.indexOf("alvarotrigo.com") > -1;
    };
    /**
    * Displays warnings
    */ function displayWarnings() {
        var l = getOptions()["licenseKey"];
        var msgStyle = "font-size: 15px;background:yellow;";
        if (getOptions().licenseKey.trim() === "") ;
        else if (!isOK()) ;
        else if (l && l.length < 20) {
            console.warn("%c This website was made using fullPage.js slider. More info on the following website:", msgStyle);
            console.warn("%c https://alvarotrigo.com/fullPage/", msgStyle);
        }
        if (hasClass($html, ENABLED)) // showError('error', 'Fullpage.js can only be initialized once and you are doing it multiple times!');
        return;
         // Disable mutually exclusive settings
        if (getOptions().continuousVertical && (getOptions().loopTop || getOptions().loopBottom)) getOptions().continuousVertical = false;
        getOptions().scrollOverflow && (getOptions().scrollBar || getOptions().autoScrolling);
        if (getOptions().continuousVertical && (getOptions().scrollBar || !getOptions().autoScrolling)) getOptions().continuousVertical = false;
         //using extensions? Wrong file!
        extensions.forEach(function(extension) {
            getOptions()[extension];
        }); //anchors can not have the same value as any element ID or NAME
        getOptions().anchors.forEach(function(name) {
            //case insensitive selectors (http://stackoverflow.com/a/19465187/1081396)
            var nameAttr = [].slice.call($("[name]")).filter(function(item) {
                return getAttr(item, "name") && getAttr(item, "name").toLowerCase() == name.toLowerCase();
            });
            var idAttr = [].slice.call($("[id]")).filter(function(item) {
                return getAttr(item, "id") && getAttr(item, "id").toLowerCase() == name.toLowerCase();
            });
            if (idAttr.length || nameAttr.length) {
                // showError('error', 'data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).');
                var propertyName = idAttr.length ? "id" : "name";
                idAttr.length || nameAttr.length;
            }
        });
    }
    function fullpage(containerSelector, options) {
        setCache(); //only once my friend!
        if (hasClass($html, ENABLED)) {
            displayWarnings();
            return;
        }
        setOption("touchWrapper", typeof containerSelector === "string" ? $(containerSelector)[0] : containerSelector); // Creating some defaults, extending them with any options that were provided
        setOptions(options);
        setContainer(typeof containerSelector === "string" ? $(containerSelector)[0] : containerSelector);
        EventEmitter.emit(events.onInitialise);
        displayWarnings();
        setAPI();
        if (getContainer()) {
            EventEmitter.emit(events.beforeInit);
            init();
            EventEmitter.emit(events.bindEvents);
        } // @ts-ignore
        return win.fullpage_api;
    }
    function setAPI() {
        FP.getFullpageData = function() {
            return {
                options: getOptions()
            };
        }; //public functions
        FP.version = "4.0.20";
        FP.test = Object.assign(FP.test, {
            top: "0px",
            translate3d: "translate3d(0px, 0px, 0px)",
            translate3dH: function() {
                var a = [];
                for(var i = 0; i < $(getOptions().sectionSelector, getContainer()).length; i++)a.push("translate3d(0px, 0px, 0px)");
                return a;
            }(),
            left: function() {
                var a = [];
                for(var i = 0; i < $(getOptions().sectionSelector, getContainer()).length; i++)a.push(0);
                return a;
            }(),
            options: getOptions(),
            setAutoScrolling: null
        }); //functions we want to share across files but which are not
        //mean to be used on their own by developers
        FP.shared = Object.assign(FP.shared, {
            afterRenderActions: null,
            isNormalScrollElement: false
        }); // @ts-ignore
        win.fullpage_api = FP;
    }
    // @ts-ignore
    win.fp_easings = deepExtend(win.fp_easings, {
        easeInOutCubic: function easeInOutCubic(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t + 2) + b;
        }
    });
    /**
     * jQuery adapter for fullPage.js 3.0.0
     */ // @ts-ignore
    if (win.jQuery) (function($, fullpage) {
        if (!$ || !fullpage) // showError('error', 'jQuery is required to use the jQuery fullpage adapter!');
        return;
        $.fn.fullpage = function(options) {
            options = $.extend({}, options, {
                "$": $
            });
            new fullpage(this[0], options); // Creating the $.fn.fullpage object
            Object.keys(FP).forEach(function(key) {
                getOptions().$.fn.fullpage[key] = FP[key];
            });
        }; // @ts-ignore
    })(win.jQuery, fullpage);
    return fullpage;
});

},{}],"fLy4C":[function() {},{}],"gho2s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const MENU_BURGER_EL_ID = "menu-burger";
const MENU_EL_ID = "menu";
class Menu {
    constructor(menuBurgerEltId = MENU_BURGER_EL_ID, menuElId = MENU_EL_ID){
        this.menuBurger = document.getElementById(menuBurgerEltId);
        this.menu = document.getElementById(menuElId);
        this.menuBurger.addEventListener("click", (event)=>{
            this.menuBurger.classList.toggle("open");
            this.menu.classList.toggle("open");
        });
    }
}
exports.default = Menu;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"c6jhF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const TAB_NAV_LIST_CLASS = "tab-nav-items";
const TAB_NAV_CLASS = "tab-nav-item";
const TAB_CONTENT_CLASS = "tab-content";
class Tabs {
    constructor(tabNavClass = TAB_NAV_CLASS, tabNavListClass = TAB_NAV_LIST_CLASS, tabContentClass = TAB_CONTENT_CLASS){
        this.tabsNavItems = document.getElementsByClassName(tabNavClass);
        this.tabNavList = document.getElementsByClassName(tabNavListClass);
        this.tabsContentItems = document.getElementsByClassName(tabContentClass);
        this.handleClickOnTabs();
    }
    handleClickOnTabs() {
        for (let tabsNavItem of this.tabsNavItems)tabsNavItem.addEventListener("click", (event)=>{
            this.switchTab(event.target);
        // console.log(event.target);
        });
    }
    switchTab(tab) {
        let activeTabId = tab.getAttribute("data-tab");
        for (let tabsNavItem of this.tabsNavItems)tabsNavItem.classList.remove("active");
        for (let tabsContentItem of this.tabsContentItems)if (tabsContentItem.id === activeTabId) tabsContentItem.classList.add("current");
        else tabsContentItem.classList.remove("current");
        tab.classList.add("active");
        this.tabNavList[0].classList.toggle("expanded");
    }
}
exports.default = Tabs;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8H3W5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _swiper = require("swiper");
var _swiperDefault = parcelHelpers.interopDefault(_swiper);
var _pagination = require("swiper/modules/pagination/pagination");
var _paginationDefault = parcelHelpers.interopDefault(_pagination);
var _autoplay = require("swiper/modules/autoplay/autoplay");
var _autoplayDefault = parcelHelpers.interopDefault(_autoplay);
var _effectFade = require("swiper/modules/effect-fade/effect-fade");
var _effectFadeDefault = parcelHelpers.interopDefault(_effectFade);
var _effectCreative = require("swiper/modules/effect-creative/effect-creative");
var _effectCreativeDefault = parcelHelpers.interopDefault(_effectCreative);
if (document.querySelector(".deliverySlides")) {
    const deliverySlide = new (0, _swiperDefault.default)(".deliverySlides", {
        modules: [
            (0, _autoplayDefault.default),
            (0, _paginationDefault.default),
            (0, _effectFadeDefault.default),
            (0, _effectCreativeDefault.default)
        ],
        loop: true,
        centeredSlides: true,
        effect: "creative",
        pagination: {
            el: ".paginationBeliverySlides",
            clickable: true
        },
        creativeEffect: {
            limitProgress: 2,
            prev: {
                translate: [
                    "-100%",
                    -60,
                    -60
                ]
            },
            next: {
                translate: [
                    "100%",
                    -60,
                    -60
                ]
            }
        },
        breakpoints: {
            641: {
                slidesPerView: 1.5,
                spaceBetween: 10,
                creativeEffect: {
                    limitProgress: 2,
                    prev: {
                        translate: [
                            "-90%",
                            -40,
                            -40
                        ]
                    },
                    next: {
                        translate: [
                            "90%",
                            -40,
                            -40
                        ]
                    }
                }
            },
            769: {
                spaceBetween: 40,
                slidesPerView: 2,
                creativeEffect: {
                    limitProgress: 2,
                    prev: {
                        translate: [
                            "-90%",
                            -40,
                            -40
                        ]
                    },
                    next: {
                        translate: [
                            "90%",
                            -40,
                            -40
                        ]
                    }
                }
            }
        }
    });
}
if (document.querySelector(".aboutSlides")) {
    const aboutSlides = new (0, _swiperDefault.default)(".aboutSlides", {
        modules: [
            (0, _autoplayDefault.default),
            (0, _paginationDefault.default),
            (0, _effectFadeDefault.default),
            (0, _effectCreativeDefault.default)
        ],
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: ".aboutSlides__pagination",
            clickable: true
        },
        breakpoints: {
            481: {
                direction: "vertical"
            }
        }
    });
}
const geographySlider = new (0, _swiperDefault.default)(".geographySlider", {
    modules: [
        (0, _autoplayDefault.default),
        (0, _paginationDefault.default),
        (0, _effectFadeDefault.default),
        (0, _effectCreativeDefault.default)
    ],
    effect: "fade",
    loop: true,
    observer: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".geographySlider__pagination",
        bulletClass: "swiper-pagination-bullet-custom",
        bulletActiveClass: "swiper-pagination-bullet-custom--active",
        renderBullet: function(index, className) {
            return `<div class="${className}" data-index="${index}">
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="2" viewBox="0 0 80 2" fill="none">
            <line y1="1" x2="0" y2="1" stroke="white" stroke-width="2"/>
          </svg>
          </div>`;
        },
        clickable: true
    },
    on: {
        init: function() {
            const _self = this;
            _self.el.style.setProperty("--delay", _self.params.autoplay.delay);
            document.querySelectorAll(".swiper-pagination-bullet-custom line").forEach((element)=>{
                element.setAttribute("x2", "0");
            });
            document.querySelector(".swiper-pagination-bullet-custom.swiper-pagination-bullet-custom--active line")?.setAttribute("x2", "80");
        // _self.el.addEventListener('mouseenter', function() {
        //   _self.el.classList.add('swiper--pause');
        //   _self.autoplay.stop();
        // });
        // _self.el.addEventListener('mouseleave', function() {
        //   _self.el.classList.remove('swiper--pause');
        //   _self.autoplay.start();
        // });
        },
        slideChange: function() {
            document.querySelectorAll(".swiper-pagination-bullet-custom line").forEach((element)=>{
                element.setAttribute("x2", "0");
            });
            document.querySelector(".swiper-pagination-bullet-custom.swiper-pagination-bullet-custom--active line")?.setAttribute("x2", "80");
        }
    }
});
const header = document.querySelector(".header");
if (window.innerWidth > 1366) $("#fullpage")?.fullpage({
    navigation: false,
    onLeave: function(anchor, index, nextIndex, direction, destination) {
        if (index.isLast == true) header.classList.add("close");
        else if (document.querySelector(".header.close")) header.classList.remove("close");
        if (document.querySelector(".fp-viewing-1") && document.querySelector(".geographySlider")) geographySlider.slideToLoop(0, 0);
        if (document.querySelector(".fp-viewing-3") && document.querySelector(".geographySlider")) geographySlider.slideToLoop(0, 0);
    }
});

},{"swiper":"cCbRx","swiper/modules/pagination/pagination":"40Lys","swiper/modules/autoplay/autoplay":"1YoHq","swiper/modules/effect-fade/effect-fade":"fBGpM","swiper/modules/effect-creative/effect-creative":"6uSvC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cCbRx":[function(require,module,exports) {
/**
 * Swiper 7.4.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: December 24, 2021
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Swiper", ()=>(0, _coreJsDefault.default));
parcelHelpers.export(exports, "default", ()=>(0, _coreJsDefault.default));
parcelHelpers.export(exports, "Virtual", ()=>(0, _virtualJsDefault.default));
parcelHelpers.export(exports, "Keyboard", ()=>(0, _keyboardJsDefault.default));
parcelHelpers.export(exports, "Mousewheel", ()=>(0, _mousewheelJsDefault.default));
parcelHelpers.export(exports, "Navigation", ()=>(0, _navigationJsDefault.default));
parcelHelpers.export(exports, "Pagination", ()=>(0, _paginationJsDefault.default));
parcelHelpers.export(exports, "Scrollbar", ()=>(0, _scrollbarJsDefault.default));
parcelHelpers.export(exports, "Parallax", ()=>(0, _parallaxJsDefault.default));
parcelHelpers.export(exports, "Zoom", ()=>(0, _zoomJsDefault.default));
parcelHelpers.export(exports, "Lazy", ()=>(0, _lazyJsDefault.default));
parcelHelpers.export(exports, "Controller", ()=>(0, _controllerJsDefault.default));
parcelHelpers.export(exports, "A11y", ()=>(0, _a11YJsDefault.default));
parcelHelpers.export(exports, "History", ()=>(0, _historyJsDefault.default));
parcelHelpers.export(exports, "HashNavigation", ()=>(0, _hashNavigationJsDefault.default));
parcelHelpers.export(exports, "Autoplay", ()=>(0, _autoplayJsDefault.default));
parcelHelpers.export(exports, "Thumbs", ()=>(0, _thumbsJsDefault.default));
parcelHelpers.export(exports, "FreeMode", ()=>(0, _freeModeJsDefault.default));
parcelHelpers.export(exports, "Grid", ()=>(0, _gridJsDefault.default));
parcelHelpers.export(exports, "Manipulation", ()=>(0, _manipulationJsDefault.default));
parcelHelpers.export(exports, "EffectFade", ()=>(0, _effectFadeJsDefault.default));
parcelHelpers.export(exports, "EffectCube", ()=>(0, _effectCubeJsDefault.default));
parcelHelpers.export(exports, "EffectFlip", ()=>(0, _effectFlipJsDefault.default));
parcelHelpers.export(exports, "EffectCoverflow", ()=>(0, _effectCoverflowJsDefault.default));
parcelHelpers.export(exports, "EffectCreative", ()=>(0, _effectCreativeJsDefault.default));
parcelHelpers.export(exports, "EffectCards", ()=>(0, _effectCardsJsDefault.default));
var _coreJs = require("./core/core.js");
var _coreJsDefault = parcelHelpers.interopDefault(_coreJs);
var _virtualJs = require("./modules/virtual/virtual.js");
var _virtualJsDefault = parcelHelpers.interopDefault(_virtualJs);
var _keyboardJs = require("./modules/keyboard/keyboard.js");
var _keyboardJsDefault = parcelHelpers.interopDefault(_keyboardJs);
var _mousewheelJs = require("./modules/mousewheel/mousewheel.js");
var _mousewheelJsDefault = parcelHelpers.interopDefault(_mousewheelJs);
var _navigationJs = require("./modules/navigation/navigation.js");
var _navigationJsDefault = parcelHelpers.interopDefault(_navigationJs);
var _paginationJs = require("./modules/pagination/pagination.js");
var _paginationJsDefault = parcelHelpers.interopDefault(_paginationJs);
var _scrollbarJs = require("./modules/scrollbar/scrollbar.js");
var _scrollbarJsDefault = parcelHelpers.interopDefault(_scrollbarJs);
var _parallaxJs = require("./modules/parallax/parallax.js");
var _parallaxJsDefault = parcelHelpers.interopDefault(_parallaxJs);
var _zoomJs = require("./modules/zoom/zoom.js");
var _zoomJsDefault = parcelHelpers.interopDefault(_zoomJs);
var _lazyJs = require("./modules/lazy/lazy.js");
var _lazyJsDefault = parcelHelpers.interopDefault(_lazyJs);
var _controllerJs = require("./modules/controller/controller.js");
var _controllerJsDefault = parcelHelpers.interopDefault(_controllerJs);
var _a11YJs = require("./modules/a11y/a11y.js");
var _a11YJsDefault = parcelHelpers.interopDefault(_a11YJs);
var _historyJs = require("./modules/history/history.js");
var _historyJsDefault = parcelHelpers.interopDefault(_historyJs);
var _hashNavigationJs = require("./modules/hash-navigation/hash-navigation.js");
var _hashNavigationJsDefault = parcelHelpers.interopDefault(_hashNavigationJs);
var _autoplayJs = require("./modules/autoplay/autoplay.js");
var _autoplayJsDefault = parcelHelpers.interopDefault(_autoplayJs);
var _thumbsJs = require("./modules/thumbs/thumbs.js");
var _thumbsJsDefault = parcelHelpers.interopDefault(_thumbsJs);
var _freeModeJs = require("./modules/free-mode/free-mode.js");
var _freeModeJsDefault = parcelHelpers.interopDefault(_freeModeJs);
var _gridJs = require("./modules/grid/grid.js");
var _gridJsDefault = parcelHelpers.interopDefault(_gridJs);
var _manipulationJs = require("./modules/manipulation/manipulation.js");
var _manipulationJsDefault = parcelHelpers.interopDefault(_manipulationJs);
var _effectFadeJs = require("./modules/effect-fade/effect-fade.js");
var _effectFadeJsDefault = parcelHelpers.interopDefault(_effectFadeJs);
var _effectCubeJs = require("./modules/effect-cube/effect-cube.js");
var _effectCubeJsDefault = parcelHelpers.interopDefault(_effectCubeJs);
var _effectFlipJs = require("./modules/effect-flip/effect-flip.js");
var _effectFlipJsDefault = parcelHelpers.interopDefault(_effectFlipJs);
var _effectCoverflowJs = require("./modules/effect-coverflow/effect-coverflow.js");
var _effectCoverflowJsDefault = parcelHelpers.interopDefault(_effectCoverflowJs);
var _effectCreativeJs = require("./modules/effect-creative/effect-creative.js");
var _effectCreativeJsDefault = parcelHelpers.interopDefault(_effectCreativeJs);
var _effectCardsJs = require("./modules/effect-cards/effect-cards.js");
var _effectCardsJsDefault = parcelHelpers.interopDefault(_effectCardsJs);

},{"./core/core.js":"jvZQa","./modules/virtual/virtual.js":"13JV9","./modules/keyboard/keyboard.js":"82wTs","./modules/mousewheel/mousewheel.js":"dP6Ui","./modules/navigation/navigation.js":"lGdRo","./modules/pagination/pagination.js":"40Lys","./modules/scrollbar/scrollbar.js":"bfOsF","./modules/parallax/parallax.js":"aEM3Y","./modules/zoom/zoom.js":"5YHxH","./modules/lazy/lazy.js":"kPhLF","./modules/controller/controller.js":"hcdrq","./modules/a11y/a11y.js":"lDTl7","./modules/history/history.js":"7pifE","./modules/hash-navigation/hash-navigation.js":"6TTnC","./modules/autoplay/autoplay.js":"1YoHq","./modules/thumbs/thumbs.js":"e0dJV","./modules/free-mode/free-mode.js":"4NFQW","./modules/grid/grid.js":"gE5KG","./modules/manipulation/manipulation.js":"ga5Sr","./modules/effect-fade/effect-fade.js":"fBGpM","./modules/effect-cube/effect-cube.js":"hV6iY","./modules/effect-flip/effect-flip.js":"dI6Dz","./modules/effect-coverflow/effect-coverflow.js":"9UFNU","./modules/effect-creative/effect-creative.js":"6uSvC","./modules/effect-cards/effect-cards.js":"9saRD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jvZQa":[function(require,module,exports) {
/* eslint no-param-reassign: "off" */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _domJs = require("../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _utilsJs = require("../shared/utils.js");
var _getSupportJs = require("../shared/get-support.js");
var _getDeviceJs = require("../shared/get-device.js");
var _getBrowserJs = require("../shared/get-browser.js");
var _resizeJs = require("./modules/resize/resize.js");
var _resizeJsDefault = parcelHelpers.interopDefault(_resizeJs);
var _observerJs = require("./modules/observer/observer.js");
var _observerJsDefault = parcelHelpers.interopDefault(_observerJs);
var _eventsEmitterJs = require("./events-emitter.js");
var _eventsEmitterJsDefault = parcelHelpers.interopDefault(_eventsEmitterJs);
var _indexJs = require("./update/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("./translate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("./transition/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("./slide/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("./loop/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("./grab-cursor/index.js");
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs5);
var _indexJs6 = require("./events/index.js");
var _indexJsDefault6 = parcelHelpers.interopDefault(_indexJs6);
var _indexJs7 = require("./breakpoints/index.js");
var _indexJsDefault7 = parcelHelpers.interopDefault(_indexJs7);
var _indexJs8 = require("./classes/index.js");
var _indexJsDefault8 = parcelHelpers.interopDefault(_indexJs8);
var _indexJs9 = require("./images/index.js");
var _indexJsDefault9 = parcelHelpers.interopDefault(_indexJs9);
var _indexJs10 = require("./check-overflow/index.js");
var _indexJsDefault10 = parcelHelpers.interopDefault(_indexJs10);
var _defaultsJs = require("./defaults.js");
var _defaultsJsDefault = parcelHelpers.interopDefault(_defaultsJs);
var _moduleExtendParamsJs = require("./moduleExtendParams.js");
var _moduleExtendParamsJsDefault = parcelHelpers.interopDefault(_moduleExtendParamsJs);
const prototypes = {
    eventsEmitter: (0, _eventsEmitterJsDefault.default),
    update: (0, _indexJsDefault.default),
    translate: (0, _indexJsDefault1.default),
    transition: (0, _indexJsDefault2.default),
    slide: (0, _indexJsDefault3.default),
    loop: (0, _indexJsDefault4.default),
    grabCursor: (0, _indexJsDefault5.default),
    events: (0, _indexJsDefault6.default),
    breakpoints: (0, _indexJsDefault7.default),
    checkOverflow: (0, _indexJsDefault10.default),
    classes: (0, _indexJsDefault8.default),
    images: (0, _indexJsDefault9.default)
};
const extendedDefaults = {};
class Swiper {
    constructor(...args){
        let el;
        let params;
        if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") params = args[0];
        else [el, params] = args;
        if (!params) params = {};
        params = (0, _utilsJs.extend)({}, params);
        if (el && !params.el) params.el = el;
        if (params.el && (0, _domJsDefault.default)(params.el).length > 1) {
            const swipers = [];
            (0, _domJsDefault.default)(params.el).each((containerEl)=>{
                const newParams = (0, _utilsJs.extend)({}, params, {
                    el: containerEl
                });
                swipers.push(new Swiper(newParams));
            });
            return swipers;
        } // Swiper Instance
        const swiper = this;
        swiper.__swiper__ = true;
        swiper.support = (0, _getSupportJs.getSupport)();
        swiper.device = (0, _getDeviceJs.getDevice)({
            userAgent: params.userAgent
        });
        swiper.browser = (0, _getBrowserJs.getBrowser)();
        swiper.eventsListeners = {};
        swiper.eventsAnyListeners = [];
        swiper.modules = [
            ...swiper.__modules__
        ];
        if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
        const allModulesParams = {};
        swiper.modules.forEach((mod)=>{
            mod({
                swiper,
                extendParams: (0, _moduleExtendParamsJsDefault.default)(params, allModulesParams),
                on: swiper.on.bind(swiper),
                once: swiper.once.bind(swiper),
                off: swiper.off.bind(swiper),
                emit: swiper.emit.bind(swiper)
            });
        }); // Extend defaults with modules params
        const swiperParams = (0, _utilsJs.extend)({}, (0, _defaultsJsDefault.default), allModulesParams); // Extend defaults with passed params
        swiper.params = (0, _utilsJs.extend)({}, swiperParams, extendedDefaults, params);
        swiper.originalParams = (0, _utilsJs.extend)({}, swiper.params);
        swiper.passedParams = (0, _utilsJs.extend)({}, params); // add event listeners
        if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName)=>{
            swiper.on(eventName, swiper.params.on[eventName]);
        });
        if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
         // Save Dom lib
        swiper.$ = (0, _domJsDefault.default); // Extend Swiper
        Object.assign(swiper, {
            enabled: swiper.params.enabled,
            el,
            // Classes
            classNames: [],
            // Slides
            slides: (0, _domJsDefault.default)(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            // isDirection
            isHorizontal () {
                return swiper.params.direction === "horizontal";
            },
            isVertical () {
                return swiper.params.direction === "vertical";
            },
            // Indexes
            activeIndex: 0,
            realIndex: 0,
            //
            isBeginning: true,
            isEnd: false,
            // Props
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: false,
            // Locks
            allowSlideNext: swiper.params.allowSlideNext,
            allowSlidePrev: swiper.params.allowSlidePrev,
            // Touch Events
            touchEvents: function touchEvents() {
                const touch = [
                    "touchstart",
                    "touchmove",
                    "touchend",
                    "touchcancel"
                ];
                const desktop = [
                    "pointerdown",
                    "pointermove",
                    "pointerup"
                ];
                swiper.touchEventsTouch = {
                    start: touch[0],
                    move: touch[1],
                    end: touch[2],
                    cancel: touch[3]
                };
                swiper.touchEventsDesktop = {
                    start: desktop[0],
                    move: desktop[1],
                    end: desktop[2]
                };
                return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
            }(),
            touchEventsData: {
                isTouched: undefined,
                isMoved: undefined,
                allowTouchCallbacks: undefined,
                touchStartTime: undefined,
                isScrolling: undefined,
                currentTranslate: undefined,
                startTranslate: undefined,
                allowThresholdMove: undefined,
                // Form elements to match
                focusableElements: swiper.params.focusableElements,
                // Last click time
                lastClickTime: (0, _utilsJs.now)(),
                clickTimeout: undefined,
                // Velocities
                velocities: [],
                allowMomentumBounce: undefined,
                isTouchEvent: undefined,
                startMoving: undefined
            },
            // Clicks
            allowClick: true,
            // Touches
            allowTouchMove: swiper.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            // Images
            imagesToLoad: [],
            imagesLoaded: 0
        });
        swiper.emit("_swiper"); // Init
        if (swiper.params.init) swiper.init();
         // Return app instance
        return swiper;
    }
    enable() {
        const swiper = this;
        if (swiper.enabled) return;
        swiper.enabled = true;
        if (swiper.params.grabCursor) swiper.setGrabCursor();
        swiper.emit("enable");
    }
    disable() {
        const swiper = this;
        if (!swiper.enabled) return;
        swiper.enabled = false;
        if (swiper.params.grabCursor) swiper.unsetGrabCursor();
        swiper.emit("disable");
    }
    setProgress(progress, speed) {
        const swiper = this;
        progress = Math.min(Math.max(progress, 0), 1);
        const min = swiper.minTranslate();
        const max = swiper.maxTranslate();
        const current = (max - min) * progress + min;
        swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
    }
    emitContainerClasses() {
        const swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        const cls = swiper.el.className.split(" ").filter((className)=>{
            return className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
        });
        swiper.emit("_containerClasses", cls.join(" "));
    }
    getSlideClasses(slideEl) {
        const swiper = this;
        return slideEl.className.split(" ").filter((className)=>{
            return className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0;
        }).join(" ");
    }
    emitSlidesClasses() {
        const swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        const updates = [];
        swiper.slides.each((slideEl)=>{
            const classNames = swiper.getSlideClasses(slideEl);
            updates.push({
                slideEl,
                classNames
            });
            swiper.emit("_slideClass", slideEl, classNames);
        });
        swiper.emit("_slideClasses", updates);
    }
    slidesPerViewDynamic(view = "current", exact = false) {
        const swiper = this;
        const { params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex } = swiper;
        let spv = 1;
        if (params.centeredSlides) {
            let slideSize = slides[activeIndex].swiperSlideSize;
            let breakLoop;
            for(let i = activeIndex + 1; i < slides.length; i += 1)if (slides[i] && !breakLoop) {
                slideSize += slides[i].swiperSlideSize;
                spv += 1;
                if (slideSize > swiperSize) breakLoop = true;
            }
            for(let i = activeIndex - 1; i >= 0; i -= 1)if (slides[i] && !breakLoop) {
                slideSize += slides[i].swiperSlideSize;
                spv += 1;
                if (slideSize > swiperSize) breakLoop = true;
            }
        } else {
            // eslint-disable-next-line
            if (view === "current") for(let i = activeIndex + 1; i < slides.length; i += 1){
                const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                if (slideInView) spv += 1;
            }
            else // previous
            for(let i = activeIndex - 1; i >= 0; i -= 1){
                const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                if (slideInView) spv += 1;
            }
        }
        return spv;
    }
    update() {
        const swiper = this;
        if (!swiper || swiper.destroyed) return;
        const { snapGrid, params } = swiper; // Breakpoints
        if (params.breakpoints) swiper.setBreakpoint();
        swiper.updateSize();
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();
        function setTranslate() {
            const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
            const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
            swiper.setTranslate(newTranslate);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
        let translated;
        if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
            setTranslate();
            if (swiper.params.autoHeight) swiper.updateAutoHeight();
        } else {
            if ((swiper.params.slidesPerView === "auto" || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
            else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (!translated) setTranslate();
        }
        if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        swiper.emit("update");
    }
    changeDirection(newDirection, needUpdate = true) {
        const swiper = this;
        const currentDirection = swiper.params.direction;
        if (!newDirection) // eslint-disable-next-line
        newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
        if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") return swiper;
        swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`);
        swiper.emitContainerClasses();
        swiper.params.direction = newDirection;
        swiper.slides.each((slideEl)=>{
            if (newDirection === "vertical") slideEl.style.width = "";
            else slideEl.style.height = "";
        });
        swiper.emit("changeDirection");
        if (needUpdate) swiper.update();
        return swiper;
    }
    mount(el) {
        const swiper = this;
        if (swiper.mounted) return true; // Find el
        const $el = (0, _domJsDefault.default)(el || swiper.params.el);
        el = $el[0];
        if (!el) return false;
        el.swiper = swiper;
        const getWrapperSelector = ()=>{
            return `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
        };
        const getWrapper = ()=>{
            if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                const res = (0, _domJsDefault.default)(el.shadowRoot.querySelector(getWrapperSelector())); // Children needs to return slot items
                res.children = (options)=>$el.children(options);
                return res;
            }
            return $el.children(getWrapperSelector());
        }; // Find Wrapper
        let $wrapperEl = getWrapper();
        if ($wrapperEl.length === 0 && swiper.params.createElements) {
            const document = (0, _ssrWindow.getDocument)();
            const wrapper = document.createElement("div");
            $wrapperEl = (0, _domJsDefault.default)(wrapper);
            wrapper.className = swiper.params.wrapperClass;
            $el.append(wrapper);
            $el.children(`.${swiper.params.slideClass}`).each((slideEl)=>{
                $wrapperEl.append(slideEl);
            });
        }
        Object.assign(swiper, {
            $el,
            el,
            $wrapperEl,
            wrapperEl: $wrapperEl[0],
            mounted: true,
            // RTL
            rtl: el.dir.toLowerCase() === "rtl" || $el.css("direction") === "rtl",
            rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || $el.css("direction") === "rtl"),
            wrongRTL: $wrapperEl.css("display") === "-webkit-box"
        });
        return true;
    }
    init(el) {
        const swiper = this;
        if (swiper.initialized) return swiper;
        const mounted = swiper.mount(el);
        if (mounted === false) return swiper;
        swiper.emit("beforeInit"); // Set breakpoint
        if (swiper.params.breakpoints) swiper.setBreakpoint();
         // Add Classes
        swiper.addClasses(); // Create loop
        if (swiper.params.loop) swiper.loopCreate();
         // Update size
        swiper.updateSize(); // Update slides
        swiper.updateSlides();
        if (swiper.params.watchOverflow) swiper.checkOverflow();
         // Set Grab Cursor
        if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
        if (swiper.params.preloadImages) swiper.preloadImages();
         // Slide To Initial Slide
        if (swiper.params.loop) swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true);
        else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
         // Attach events
        swiper.attachEvents(); // Init Flag
        swiper.initialized = true; // Emit
        swiper.emit("init");
        swiper.emit("afterInit");
        return swiper;
    }
    destroy(deleteInstance = true, cleanStyles = true) {
        const swiper = this;
        const { params, $el, $wrapperEl, slides } = swiper;
        if (typeof swiper.params === "undefined" || swiper.destroyed) return null;
        swiper.emit("beforeDestroy"); // Init Flag
        swiper.initialized = false; // Detach events
        swiper.detachEvents(); // Destroy loop
        if (params.loop) swiper.loopDestroy();
         // Cleanup styles
        if (cleanStyles) {
            swiper.removeClasses();
            $el.removeAttr("style");
            $wrapperEl.removeAttr("style");
            if (slides && slides.length) slides.removeClass([
                params.slideVisibleClass,
                params.slideActiveClass,
                params.slideNextClass,
                params.slidePrevClass
            ].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index");
        }
        swiper.emit("destroy"); // Detach emitter events
        Object.keys(swiper.eventsListeners).forEach((eventName)=>{
            swiper.off(eventName);
        });
        if (deleteInstance !== false) {
            swiper.$el[0].swiper = null;
            (0, _utilsJs.deleteProps)(swiper);
        }
        swiper.destroyed = true;
        return null;
    }
    static extendDefaults(newDefaults) {
        (0, _utilsJs.extend)(extendedDefaults, newDefaults);
    }
    static get extendedDefaults() {
        return extendedDefaults;
    }
    static get defaults() {
        return 0, _defaultsJsDefault.default;
    }
    static installModule(mod) {
        if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
        const modules = Swiper.prototype.__modules__;
        if (typeof mod === "function" && modules.indexOf(mod) < 0) modules.push(mod);
    }
    static use(module) {
        if (Array.isArray(module)) {
            module.forEach((m)=>Swiper.installModule(m));
            return Swiper;
        }
        Swiper.installModule(module);
        return Swiper;
    }
}
Object.keys(prototypes).forEach((prototypeGroup)=>{
    Object.keys(prototypes[prototypeGroup]).forEach((protoMethod)=>{
        Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
    });
});
Swiper.use([
    (0, _resizeJsDefault.default),
    (0, _observerJsDefault.default)
]);
exports.default = Swiper;

},{"ssr-window":"3lyfI","../shared/dom.js":"7pW5q","../shared/utils.js":"dbikn","../shared/get-support.js":"dU80s","../shared/get-device.js":"fHzNz","../shared/get-browser.js":"2AwWY","./modules/resize/resize.js":"awiu0","./modules/observer/observer.js":"Fvg8a","./events-emitter.js":"970nW","./update/index.js":"5pXU1","./translate/index.js":"82UFa","./transition/index.js":"8Knou","./slide/index.js":"5VZY1","./loop/index.js":"6S1wN","./grab-cursor/index.js":"6y5ez","./events/index.js":"jPWSg","./breakpoints/index.js":"6sZHb","./classes/index.js":"dJ7YF","./images/index.js":"4xpbQ","./check-overflow/index.js":"cCZBR","./defaults.js":"jwKb5","./moduleExtendParams.js":"2G6E7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3lyfI":[function(require,module,exports) {
/**
 * SSR Window 4.0.2
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2021, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: December 13, 2021
 */ /* eslint-disable no-param-reassign */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "extend", ()=>extend);
parcelHelpers.export(exports, "getDocument", ()=>getDocument);
parcelHelpers.export(exports, "getWindow", ()=>getWindow);
parcelHelpers.export(exports, "ssrDocument", ()=>ssrDocument);
parcelHelpers.export(exports, "ssrWindow", ()=>ssrWindow);
function isObject(obj) {
    return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
}
function extend(target = {}, src = {}) {
    Object.keys(src).forEach((key)=>{
        if (typeof target[key] === "undefined") target[key] = src[key];
        else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
    });
}
const ssrDocument = {
    body: {},
    addEventListener () {},
    removeEventListener () {},
    activeElement: {
        blur () {},
        nodeName: ""
    },
    querySelector () {
        return null;
    },
    querySelectorAll () {
        return [];
    },
    getElementById () {
        return null;
    },
    createEvent () {
        return {
            initEvent () {}
        };
    },
    createElement () {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute () {},
            getElementsByTagName () {
                return [];
            }
        };
    },
    createElementNS () {
        return {};
    },
    importNode () {
        return null;
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    }
};
function getDocument() {
    const doc = typeof document !== "undefined" ? document : {};
    extend(doc, ssrDocument);
    return doc;
}
const ssrWindow = {
    document: ssrDocument,
    navigator: {
        userAgent: ""
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    },
    history: {
        replaceState () {},
        pushState () {},
        go () {},
        back () {}
    },
    CustomEvent: function CustomEvent() {
        return this;
    },
    addEventListener () {},
    removeEventListener () {},
    getComputedStyle () {
        return {
            getPropertyValue () {
                return "";
            }
        };
    },
    Image () {},
    Date () {},
    screen: {},
    setTimeout () {},
    clearTimeout () {},
    matchMedia () {
        return {};
    },
    requestAnimationFrame (callback) {
        if (typeof setTimeout === "undefined") {
            callback();
            return null;
        }
        return setTimeout(callback, 0);
    },
    cancelAnimationFrame (id) {
        if (typeof setTimeout === "undefined") return;
        clearTimeout(id);
    }
};
function getWindow() {
    const win = typeof window !== "undefined" ? window : {};
    extend(win, ssrWindow);
    return win;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7pW5q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dom7 = require("dom7");
const Methods = {
    addClass: (0, _dom7.addClass),
    removeClass: (0, _dom7.removeClass),
    hasClass: (0, _dom7.hasClass),
    toggleClass: (0, _dom7.toggleClass),
    attr: (0, _dom7.attr),
    removeAttr: (0, _dom7.removeAttr),
    transform: (0, _dom7.transform),
    transition: (0, _dom7.transition),
    on: (0, _dom7.on),
    off: (0, _dom7.off),
    trigger: (0, _dom7.trigger),
    transitionEnd: (0, _dom7.transitionEnd),
    outerWidth: (0, _dom7.outerWidth),
    outerHeight: (0, _dom7.outerHeight),
    styles: (0, _dom7.styles),
    offset: (0, _dom7.offset),
    css: (0, _dom7.css),
    each: (0, _dom7.each),
    html: (0, _dom7.html),
    text: (0, _dom7.text),
    is: (0, _dom7.is),
    index: (0, _dom7.index),
    eq: (0, _dom7.eq),
    append: (0, _dom7.append),
    prepend: (0, _dom7.prepend),
    next: (0, _dom7.next),
    nextAll: (0, _dom7.nextAll),
    prev: (0, _dom7.prev),
    prevAll: (0, _dom7.prevAll),
    parent: (0, _dom7.parent),
    parents: (0, _dom7.parents),
    closest: (0, _dom7.closest),
    find: (0, _dom7.find),
    children: (0, _dom7.children),
    filter: (0, _dom7.filter),
    remove: (0, _dom7.remove)
};
Object.keys(Methods).forEach((methodName)=>{
    Object.defineProperty((0, _dom7.$).fn, methodName, {
        value: Methods[methodName],
        writable: true
    });
});
exports.default = (0, _dom7.$);

},{"dom7":"fDQYr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fDQYr":[function(require,module,exports) {
/**
 * Dom7 4.0.6
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * https://framework7.io/docs/dom7.html
 *
 * Copyright 2023, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: February 2, 2023
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "$", ()=>$);
parcelHelpers.export(exports, "add", ()=>add);
parcelHelpers.export(exports, "addClass", ()=>addClass);
parcelHelpers.export(exports, "animate", ()=>animate);
parcelHelpers.export(exports, "animationEnd", ()=>animationEnd);
parcelHelpers.export(exports, "append", ()=>append);
parcelHelpers.export(exports, "appendTo", ()=>appendTo);
parcelHelpers.export(exports, "attr", ()=>attr);
parcelHelpers.export(exports, "blur", ()=>blur);
parcelHelpers.export(exports, "change", ()=>change);
parcelHelpers.export(exports, "children", ()=>children);
parcelHelpers.export(exports, "click", ()=>click);
parcelHelpers.export(exports, "closest", ()=>closest);
parcelHelpers.export(exports, "css", ()=>css);
parcelHelpers.export(exports, "data", ()=>data);
parcelHelpers.export(exports, "dataset", ()=>dataset);
parcelHelpers.export(exports, "detach", ()=>detach);
parcelHelpers.export(exports, "each", ()=>each);
parcelHelpers.export(exports, "empty", ()=>empty);
parcelHelpers.export(exports, "eq", ()=>eq);
parcelHelpers.export(exports, "filter", ()=>filter);
parcelHelpers.export(exports, "find", ()=>find);
parcelHelpers.export(exports, "focus", ()=>focus);
parcelHelpers.export(exports, "focusin", ()=>focusin);
parcelHelpers.export(exports, "focusout", ()=>focusout);
parcelHelpers.export(exports, "hasClass", ()=>hasClass);
parcelHelpers.export(exports, "height", ()=>height);
parcelHelpers.export(exports, "hide", ()=>hide);
parcelHelpers.export(exports, "html", ()=>html);
parcelHelpers.export(exports, "index", ()=>index);
parcelHelpers.export(exports, "insertAfter", ()=>insertAfter);
parcelHelpers.export(exports, "insertBefore", ()=>insertBefore);
parcelHelpers.export(exports, "is", ()=>is);
parcelHelpers.export(exports, "keydown", ()=>keydown);
parcelHelpers.export(exports, "keypress", ()=>keypress);
parcelHelpers.export(exports, "keyup", ()=>keyup);
parcelHelpers.export(exports, "mousedown", ()=>mousedown);
parcelHelpers.export(exports, "mouseenter", ()=>mouseenter);
parcelHelpers.export(exports, "mouseleave", ()=>mouseleave);
parcelHelpers.export(exports, "mousemove", ()=>mousemove);
parcelHelpers.export(exports, "mouseout", ()=>mouseout);
parcelHelpers.export(exports, "mouseover", ()=>mouseover);
parcelHelpers.export(exports, "mouseup", ()=>mouseup);
parcelHelpers.export(exports, "next", ()=>next);
parcelHelpers.export(exports, "nextAll", ()=>nextAll);
parcelHelpers.export(exports, "off", ()=>off);
parcelHelpers.export(exports, "offset", ()=>offset);
parcelHelpers.export(exports, "on", ()=>on);
parcelHelpers.export(exports, "once", ()=>once);
parcelHelpers.export(exports, "outerHeight", ()=>outerHeight);
parcelHelpers.export(exports, "outerWidth", ()=>outerWidth);
parcelHelpers.export(exports, "parent", ()=>parent);
parcelHelpers.export(exports, "parents", ()=>parents);
parcelHelpers.export(exports, "prepend", ()=>prepend);
parcelHelpers.export(exports, "prependTo", ()=>prependTo);
parcelHelpers.export(exports, "prev", ()=>prev);
parcelHelpers.export(exports, "prevAll", ()=>prevAll);
parcelHelpers.export(exports, "prop", ()=>prop);
parcelHelpers.export(exports, "remove", ()=>remove);
parcelHelpers.export(exports, "removeAttr", ()=>removeAttr);
parcelHelpers.export(exports, "removeClass", ()=>removeClass);
parcelHelpers.export(exports, "removeData", ()=>removeData);
parcelHelpers.export(exports, "resize", ()=>resize);
parcelHelpers.export(exports, "scroll", ()=>scroll);
parcelHelpers.export(exports, "scrollLeft", ()=>scrollLeft);
parcelHelpers.export(exports, "scrollTo", ()=>scrollTo);
parcelHelpers.export(exports, "scrollTop", ()=>scrollTop);
parcelHelpers.export(exports, "show", ()=>show);
parcelHelpers.export(exports, "siblings", ()=>siblings);
parcelHelpers.export(exports, "stop", ()=>stop);
parcelHelpers.export(exports, "styles", ()=>styles);
parcelHelpers.export(exports, "submit", ()=>submit);
parcelHelpers.export(exports, "text", ()=>text);
parcelHelpers.export(exports, "toggleClass", ()=>toggleClass);
parcelHelpers.export(exports, "touchend", ()=>touchend);
parcelHelpers.export(exports, "touchmove", ()=>touchmove);
parcelHelpers.export(exports, "touchstart", ()=>touchstart);
parcelHelpers.export(exports, "transform", ()=>transform);
parcelHelpers.export(exports, "transition", ()=>transition);
parcelHelpers.export(exports, "transitionEnd", ()=>transitionEnd);
parcelHelpers.export(exports, "transitionStart", ()=>transitionStart);
parcelHelpers.export(exports, "trigger", ()=>trigger);
parcelHelpers.export(exports, "val", ()=>val);
parcelHelpers.export(exports, "value", ()=>value);
parcelHelpers.export(exports, "width", ()=>width);
var _ssrWindow = require("ssr-window");
/* eslint-disable no-proto */ function makeReactive(obj) {
    const proto = obj.__proto__;
    Object.defineProperty(obj, "__proto__", {
        get () {
            return proto;
        },
        set (value) {
            proto.__proto__ = value;
        }
    });
}
class Dom7 extends Array {
    constructor(items){
        if (typeof items === "number") super(items);
        else {
            super(...items || []);
            makeReactive(this);
        }
    }
}
function arrayFlat(arr = []) {
    const res = [];
    arr.forEach((el)=>{
        if (Array.isArray(el)) res.push(...arrayFlat(el));
        else res.push(el);
    });
    return res;
}
function arrayFilter(arr, callback) {
    return Array.prototype.filter.call(arr, callback);
}
function arrayUnique(arr) {
    const uniqueArray = [];
    for(let i = 0; i < arr.length; i += 1)if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
    return uniqueArray;
}
function toCamelCase(string) {
    return string.toLowerCase().replace(/-(.)/g, (match, group)=>group.toUpperCase());
}
// eslint-disable-next-line
function qsa(selector, context) {
    if (typeof selector !== "string") return [
        selector
    ];
    const a = [];
    const res = context.querySelectorAll(selector);
    for(let i = 0; i < res.length; i += 1)a.push(res[i]);
    return a;
}
function $(selector, context) {
    const window = (0, _ssrWindow.getWindow)();
    const document = (0, _ssrWindow.getDocument)();
    let arr = [];
    if (!context && selector instanceof Dom7) return selector;
    if (!selector) return new Dom7(arr);
    if (typeof selector === "string") {
        const html = selector.trim();
        if (html.indexOf("<") >= 0 && html.indexOf(">") >= 0) {
            let toCreate = "div";
            if (html.indexOf("<li") === 0) toCreate = "ul";
            if (html.indexOf("<tr") === 0) toCreate = "tbody";
            if (html.indexOf("<td") === 0 || html.indexOf("<th") === 0) toCreate = "tr";
            if (html.indexOf("<tbody") === 0) toCreate = "table";
            if (html.indexOf("<option") === 0) toCreate = "select";
            const tempParent = document.createElement(toCreate);
            tempParent.innerHTML = html;
            for(let i = 0; i < tempParent.childNodes.length; i += 1)arr.push(tempParent.childNodes[i]);
        } else arr = qsa(selector.trim(), context || document);
         // arr = qsa(selector, document);
    } else if (selector.nodeType || selector === window || selector === document) arr.push(selector);
    else if (Array.isArray(selector)) {
        if (selector instanceof Dom7) return selector;
        arr = selector;
    }
    return new Dom7(arrayUnique(arr));
}
$.fn = Dom7.prototype;
// eslint-disable-next-line
function addClass(...classes) {
    const classNames = arrayFlat(classes.map((c)=>c.split(" ")));
    this.forEach((el)=>{
        el.classList.add(...classNames);
    });
    return this;
}
function removeClass(...classes) {
    const classNames = arrayFlat(classes.map((c)=>c.split(" ")));
    this.forEach((el)=>{
        el.classList.remove(...classNames);
    });
    return this;
}
function toggleClass(...classes) {
    const classNames = arrayFlat(classes.map((c)=>c.split(" ")));
    this.forEach((el)=>{
        classNames.forEach((className)=>{
            el.classList.toggle(className);
        });
    });
}
function hasClass(...classes) {
    const classNames = arrayFlat(classes.map((c)=>c.split(" ")));
    return arrayFilter(this, (el)=>{
        return classNames.filter((className)=>el.classList.contains(className)).length > 0;
    }).length > 0;
}
function attr(attrs, value) {
    if (arguments.length === 1 && typeof attrs === "string") {
        // Get attr
        if (this[0]) return this[0].getAttribute(attrs);
        return undefined;
    } // Set attrs
    for(let i = 0; i < this.length; i += 1){
        if (arguments.length === 2) // String
        this[i].setAttribute(attrs, value);
        else // Object
        for(const attrName in attrs){
            this[i][attrName] = attrs[attrName];
            this[i].setAttribute(attrName, attrs[attrName]);
        }
    }
    return this;
}
function removeAttr(attr) {
    for(let i = 0; i < this.length; i += 1)this[i].removeAttribute(attr);
    return this;
}
function prop(props, value) {
    if (arguments.length === 1 && typeof props === "string") {
        // Get prop
        if (this[0]) return this[0][props];
    } else {
        // Set props
        for(let i = 0; i < this.length; i += 1){
            if (arguments.length === 2) // String
            this[i][props] = value;
            else // Object
            for(const propName in props)this[i][propName] = props[propName];
        }
        return this;
    }
    return this;
}
function data(key, value) {
    let el;
    if (typeof value === "undefined") {
        el = this[0];
        if (!el) return undefined; // Get value
        if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) return el.dom7ElementDataStorage[key];
        const dataKey = el.getAttribute(`data-${key}`);
        if (dataKey) return dataKey;
        return undefined;
    } // Set value
    for(let i = 0; i < this.length; i += 1){
        el = this[i];
        if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
        el.dom7ElementDataStorage[key] = value;
    }
    return this;
}
function removeData(key) {
    for(let i = 0; i < this.length; i += 1){
        const el = this[i];
        if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
            el.dom7ElementDataStorage[key] = null;
            delete el.dom7ElementDataStorage[key];
        }
    }
}
function dataset() {
    const el = this[0];
    if (!el) return undefined;
    const dataset = {}; // eslint-disable-line
    if (el.dataset) for(const dataKey in el.dataset)dataset[dataKey] = el.dataset[dataKey];
    else for(let i = 0; i < el.attributes.length; i += 1){
        const attr = el.attributes[i];
        if (attr.name.indexOf("data-") >= 0) dataset[toCamelCase(attr.name.split("data-")[1])] = attr.value;
    }
    for(const key in dataset){
        if (dataset[key] === "false") dataset[key] = false;
        else if (dataset[key] === "true") dataset[key] = true;
        else if (parseFloat(dataset[key]) === dataset[key] * 1) dataset[key] *= 1;
    }
    return dataset;
}
function val(value) {
    if (typeof value === "undefined") {
        // get value
        const el = this[0];
        if (!el) return undefined;
        if (el.multiple && el.nodeName.toLowerCase() === "select") {
            const values = [];
            for(let i = 0; i < el.selectedOptions.length; i += 1)values.push(el.selectedOptions[i].value);
            return values;
        }
        return el.value;
    } // set value
    for(let i = 0; i < this.length; i += 1){
        const el = this[i];
        if (Array.isArray(value) && el.multiple && el.nodeName.toLowerCase() === "select") for(let j = 0; j < el.options.length; j += 1)el.options[j].selected = value.indexOf(el.options[j].value) >= 0;
        else el.value = value;
    }
    return this;
}
function value(value) {
    return this.val(value);
}
function transform(transform) {
    for(let i = 0; i < this.length; i += 1)this[i].style.transform = transform;
    return this;
}
function transition(duration) {
    for(let i = 0; i < this.length; i += 1)this[i].style.transitionDuration = typeof duration !== "string" ? `${duration}ms` : duration;
    return this;
}
function on(...args) {
    let [eventType, targetSelector, listener, capture] = args;
    if (typeof args[1] === "function") {
        [eventType, listener, capture] = args;
        targetSelector = undefined;
    }
    if (!capture) capture = false;
    function handleLiveEvent(e) {
        const target = e.target;
        if (!target) return;
        const eventData = e.target.dom7EventData || [];
        if (eventData.indexOf(e) < 0) eventData.unshift(e);
        if ($(target).is(targetSelector)) listener.apply(target, eventData);
        else {
            const parents = $(target).parents(); // eslint-disable-line
            for(let k = 0; k < parents.length; k += 1)if ($(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
        }
    }
    function handleEvent(e) {
        const eventData = e && e.target ? e.target.dom7EventData || [] : [];
        if (eventData.indexOf(e) < 0) eventData.unshift(e);
        listener.apply(this, eventData);
    }
    const events = eventType.split(" ");
    let j;
    for(let i = 0; i < this.length; i += 1){
        const el = this[i];
        if (!targetSelector) for(j = 0; j < events.length; j += 1){
            const event = events[j];
            if (!el.dom7Listeners) el.dom7Listeners = {};
            if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
            el.dom7Listeners[event].push({
                listener,
                proxyListener: handleEvent
            });
            el.addEventListener(event, handleEvent, capture);
        }
        else // Live events
        for(j = 0; j < events.length; j += 1){
            const event = events[j];
            if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
            if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
            el.dom7LiveListeners[event].push({
                listener,
                proxyListener: handleLiveEvent
            });
            el.addEventListener(event, handleLiveEvent, capture);
        }
    }
    return this;
}
function off(...args) {
    let [eventType, targetSelector, listener, capture] = args;
    if (typeof args[1] === "function") {
        [eventType, listener, capture] = args;
        targetSelector = undefined;
    }
    if (!capture) capture = false;
    const events = eventType.split(" ");
    for(let i = 0; i < events.length; i += 1){
        const event = events[i];
        for(let j = 0; j < this.length; j += 1){
            const el = this[j];
            let handlers;
            if (!targetSelector && el.dom7Listeners) handlers = el.dom7Listeners[event];
            else if (targetSelector && el.dom7LiveListeners) handlers = el.dom7LiveListeners[event];
            if (handlers && handlers.length) for(let k = handlers.length - 1; k >= 0; k -= 1){
                const handler = handlers[k];
                if (listener && handler.listener === listener) {
                    el.removeEventListener(event, handler.proxyListener, capture);
                    handlers.splice(k, 1);
                } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                    el.removeEventListener(event, handler.proxyListener, capture);
                    handlers.splice(k, 1);
                } else if (!listener) {
                    el.removeEventListener(event, handler.proxyListener, capture);
                    handlers.splice(k, 1);
                }
            }
        }
    }
    return this;
}
function once(...args) {
    const dom = this;
    let [eventName, targetSelector, listener, capture] = args;
    if (typeof args[1] === "function") {
        [eventName, listener, capture] = args;
        targetSelector = undefined;
    }
    function onceHandler(...eventArgs) {
        listener.apply(this, eventArgs);
        dom.off(eventName, targetSelector, onceHandler, capture);
        if (onceHandler.dom7proxy) delete onceHandler.dom7proxy;
    }
    onceHandler.dom7proxy = listener;
    return dom.on(eventName, targetSelector, onceHandler, capture);
}
function trigger(...args) {
    const window = (0, _ssrWindow.getWindow)();
    const events = args[0].split(" ");
    const eventData = args[1];
    for(let i = 0; i < events.length; i += 1){
        const event = events[i];
        for(let j = 0; j < this.length; j += 1){
            const el = this[j];
            if (window.CustomEvent) {
                const evt = new window.CustomEvent(event, {
                    detail: eventData,
                    bubbles: true,
                    cancelable: true
                });
                el.dom7EventData = args.filter((data, dataIndex)=>dataIndex > 0);
                el.dispatchEvent(evt);
                el.dom7EventData = [];
                delete el.dom7EventData;
            }
        }
    }
    return this;
}
function transitionStart(callback) {
    const dom = this;
    function fireCallBack(e) {
        if (e.target !== this) return;
        callback.call(this, e);
        dom.off("transitionstart", fireCallBack);
    }
    if (callback) dom.on("transitionstart", fireCallBack);
    return this;
}
function transitionEnd(callback) {
    const dom = this;
    function fireCallBack(e) {
        if (e.target !== this) return;
        callback.call(this, e);
        dom.off("transitionend", fireCallBack);
    }
    if (callback) dom.on("transitionend", fireCallBack);
    return this;
}
function animationEnd(callback) {
    const dom = this;
    function fireCallBack(e) {
        if (e.target !== this) return;
        callback.call(this, e);
        dom.off("animationend", fireCallBack);
    }
    if (callback) dom.on("animationend", fireCallBack);
    return this;
}
function width() {
    const window = (0, _ssrWindow.getWindow)();
    if (this[0] === window) return window.innerWidth;
    if (this.length > 0) return parseFloat(this.css("width"));
    return null;
}
function outerWidth(includeMargins) {
    if (this.length > 0) {
        if (includeMargins) {
            const styles = this.styles();
            return this[0].offsetWidth + parseFloat(styles.getPropertyValue("margin-right")) + parseFloat(styles.getPropertyValue("margin-left"));
        }
        return this[0].offsetWidth;
    }
    return null;
}
function height() {
    const window = (0, _ssrWindow.getWindow)();
    if (this[0] === window) return window.innerHeight;
    if (this.length > 0) return parseFloat(this.css("height"));
    return null;
}
function outerHeight(includeMargins) {
    if (this.length > 0) {
        if (includeMargins) {
            const styles = this.styles();
            return this[0].offsetHeight + parseFloat(styles.getPropertyValue("margin-top")) + parseFloat(styles.getPropertyValue("margin-bottom"));
        }
        return this[0].offsetHeight;
    }
    return null;
}
function offset() {
    if (this.length > 0) {
        const window = (0, _ssrWindow.getWindow)();
        const document = (0, _ssrWindow.getDocument)();
        const el = this[0];
        const box = el.getBoundingClientRect();
        const body = document.body;
        const clientTop = el.clientTop || body.clientTop || 0;
        const clientLeft = el.clientLeft || body.clientLeft || 0;
        const scrollTop = el === window ? window.scrollY : el.scrollTop;
        const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
        return {
            top: box.top + scrollTop - clientTop,
            left: box.left + scrollLeft - clientLeft
        };
    }
    return null;
}
function hide() {
    for(let i = 0; i < this.length; i += 1)this[i].style.display = "none";
    return this;
}
function show() {
    const window = (0, _ssrWindow.getWindow)();
    for(let i = 0; i < this.length; i += 1){
        const el = this[i];
        if (el.style.display === "none") el.style.display = "";
        if (window.getComputedStyle(el, null).getPropertyValue("display") === "none") // Still not visible
        el.style.display = "block";
    }
    return this;
}
function styles() {
    const window = (0, _ssrWindow.getWindow)();
    if (this[0]) return window.getComputedStyle(this[0], null);
    return {};
}
function css(props, value) {
    const window = (0, _ssrWindow.getWindow)();
    let i;
    if (arguments.length === 1) {
        if (typeof props === "string") {
            // .css('width')
            if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
        } else {
            // .css({ width: '100px' })
            for(i = 0; i < this.length; i += 1)for(const prop in props)this[i].style[prop] = props[prop];
            return this;
        }
    }
    if (arguments.length === 2 && typeof props === "string") {
        // .css('width', '100px')
        for(i = 0; i < this.length; i += 1)this[i].style[props] = value;
        return this;
    }
    return this;
}
function each(callback) {
    if (!callback) return this;
    this.forEach((el, index)=>{
        callback.apply(el, [
            el,
            index
        ]);
    });
    return this;
}
function filter(callback) {
    const result = arrayFilter(this, callback);
    return $(result);
}
function html(html) {
    if (typeof html === "undefined") return this[0] ? this[0].innerHTML : null;
    for(let i = 0; i < this.length; i += 1)this[i].innerHTML = html;
    return this;
}
function text(text) {
    if (typeof text === "undefined") return this[0] ? this[0].textContent.trim() : null;
    for(let i = 0; i < this.length; i += 1)this[i].textContent = text;
    return this;
}
function is(selector) {
    const window = (0, _ssrWindow.getWindow)();
    const document = (0, _ssrWindow.getDocument)();
    const el = this[0];
    let compareWith;
    let i;
    if (!el || typeof selector === "undefined") return false;
    if (typeof selector === "string") {
        if (el.matches) return el.matches(selector);
        if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
        if (el.msMatchesSelector) return el.msMatchesSelector(selector);
        compareWith = $(selector);
        for(i = 0; i < compareWith.length; i += 1){
            if (compareWith[i] === el) return true;
        }
        return false;
    }
    if (selector === document) return el === document;
    if (selector === window) return el === window;
    if (selector.nodeType || selector instanceof Dom7) {
        compareWith = selector.nodeType ? [
            selector
        ] : selector;
        for(i = 0; i < compareWith.length; i += 1){
            if (compareWith[i] === el) return true;
        }
        return false;
    }
    return false;
}
function index() {
    let child = this[0];
    let i;
    if (child) {
        i = 0; // eslint-disable-next-line
        while((child = child.previousSibling) !== null)if (child.nodeType === 1) i += 1;
        return i;
    }
    return undefined;
}
function eq(index) {
    if (typeof index === "undefined") return this;
    const length = this.length;
    if (index > length - 1) return $([]);
    if (index < 0) {
        const returnIndex = length + index;
        if (returnIndex < 0) return $([]);
        return $([
            this[returnIndex]
        ]);
    }
    return $([
        this[index]
    ]);
}
function append(...els) {
    let newChild;
    const document = (0, _ssrWindow.getDocument)();
    for(let k = 0; k < els.length; k += 1){
        newChild = els[k];
        for(let i = 0; i < this.length; i += 1){
            if (typeof newChild === "string") {
                const tempDiv = document.createElement("div");
                tempDiv.innerHTML = newChild;
                while(tempDiv.firstChild)this[i].appendChild(tempDiv.firstChild);
            } else if (newChild instanceof Dom7) for(let j = 0; j < newChild.length; j += 1)this[i].appendChild(newChild[j]);
            else this[i].appendChild(newChild);
        }
    }
    return this;
}
function appendTo(parent) {
    $(parent).append(this);
    return this;
}
function prepend(newChild) {
    const document = (0, _ssrWindow.getDocument)();
    let i;
    let j;
    for(i = 0; i < this.length; i += 1){
        if (typeof newChild === "string") {
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = newChild;
            for(j = tempDiv.childNodes.length - 1; j >= 0; j -= 1)this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
        } else if (newChild instanceof Dom7) for(j = 0; j < newChild.length; j += 1)this[i].insertBefore(newChild[j], this[i].childNodes[0]);
        else this[i].insertBefore(newChild, this[i].childNodes[0]);
    }
    return this;
}
function prependTo(parent) {
    $(parent).prepend(this);
    return this;
}
function insertBefore(selector) {
    const before = $(selector);
    for(let i = 0; i < this.length; i += 1){
        if (before.length === 1) before[0].parentNode.insertBefore(this[i], before[0]);
        else if (before.length > 1) for(let j = 0; j < before.length; j += 1)before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
    }
}
function insertAfter(selector) {
    const after = $(selector);
    for(let i = 0; i < this.length; i += 1){
        if (after.length === 1) after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
        else if (after.length > 1) for(let j = 0; j < after.length; j += 1)after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
    }
}
function next(selector) {
    if (this.length > 0) {
        if (selector) {
            if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) return $([
                this[0].nextElementSibling
            ]);
            return $([]);
        }
        if (this[0].nextElementSibling) return $([
            this[0].nextElementSibling
        ]);
        return $([]);
    }
    return $([]);
}
function nextAll(selector) {
    const nextEls = [];
    let el = this[0];
    if (!el) return $([]);
    while(el.nextElementSibling){
        const next = el.nextElementSibling; // eslint-disable-line
        if (selector) {
            if ($(next).is(selector)) nextEls.push(next);
        } else nextEls.push(next);
        el = next;
    }
    return $(nextEls);
}
function prev(selector) {
    if (this.length > 0) {
        const el = this[0];
        if (selector) {
            if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) return $([
                el.previousElementSibling
            ]);
            return $([]);
        }
        if (el.previousElementSibling) return $([
            el.previousElementSibling
        ]);
        return $([]);
    }
    return $([]);
}
function prevAll(selector) {
    const prevEls = [];
    let el = this[0];
    if (!el) return $([]);
    while(el.previousElementSibling){
        const prev = el.previousElementSibling; // eslint-disable-line
        if (selector) {
            if ($(prev).is(selector)) prevEls.push(prev);
        } else prevEls.push(prev);
        el = prev;
    }
    return $(prevEls);
}
function siblings(selector) {
    return this.nextAll(selector).add(this.prevAll(selector));
}
function parent(selector) {
    const parents = []; // eslint-disable-line
    for(let i = 0; i < this.length; i += 1)if (this[i].parentNode !== null) {
        if (selector) {
            if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
        } else parents.push(this[i].parentNode);
    }
    return $(parents);
}
function parents(selector) {
    const parents = []; // eslint-disable-line
    for(let i = 0; i < this.length; i += 1){
        let parent = this[i].parentNode; // eslint-disable-line
        while(parent){
            if (selector) {
                if ($(parent).is(selector)) parents.push(parent);
            } else parents.push(parent);
            parent = parent.parentNode;
        }
    }
    return $(parents);
}
function closest(selector) {
    let closest = this; // eslint-disable-line
    if (typeof selector === "undefined") return $([]);
    if (!closest.is(selector)) closest = closest.parents(selector).eq(0);
    return closest;
}
function find(selector) {
    const foundElements = [];
    for(let i = 0; i < this.length; i += 1){
        const found = this[i].querySelectorAll(selector);
        for(let j = 0; j < found.length; j += 1)foundElements.push(found[j]);
    }
    return $(foundElements);
}
function children(selector) {
    const children = []; // eslint-disable-line
    for(let i = 0; i < this.length; i += 1){
        const childNodes = this[i].children;
        for(let j = 0; j < childNodes.length; j += 1)if (!selector || $(childNodes[j]).is(selector)) children.push(childNodes[j]);
    }
    return $(children);
}
function remove() {
    for(let i = 0; i < this.length; i += 1)if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
    return this;
}
function detach() {
    return this.remove();
}
function add(...els) {
    const dom = this;
    let i;
    let j;
    for(i = 0; i < els.length; i += 1){
        const toAdd = $(els[i]);
        for(j = 0; j < toAdd.length; j += 1)dom.push(toAdd[j]);
    }
    return dom;
}
function empty() {
    for(let i = 0; i < this.length; i += 1){
        const el = this[i];
        if (el.nodeType === 1) {
            for(let j = 0; j < el.childNodes.length; j += 1)if (el.childNodes[j].parentNode) el.childNodes[j].parentNode.removeChild(el.childNodes[j]);
            el.textContent = "";
        }
    }
    return this;
}
// eslint-disable-next-line
function scrollTo(...args) {
    const window = (0, _ssrWindow.getWindow)();
    let [left, top, duration, easing, callback] = args;
    if (args.length === 4 && typeof easing === "function") {
        callback = easing;
        [left, top, duration, callback, easing] = args;
    }
    if (typeof easing === "undefined") easing = "swing";
    return this.each(function animate() {
        const el = this;
        let currentTop;
        let currentLeft;
        let maxTop;
        let maxLeft;
        let newTop;
        let newLeft;
        let scrollTop; // eslint-disable-line
        let scrollLeft; // eslint-disable-line
        let animateTop = top > 0 || top === 0;
        let animateLeft = left > 0 || left === 0;
        if (typeof easing === "undefined") easing = "swing";
        if (animateTop) {
            currentTop = el.scrollTop;
            if (!duration) el.scrollTop = top;
        }
        if (animateLeft) {
            currentLeft = el.scrollLeft;
            if (!duration) el.scrollLeft = left;
        }
        if (!duration) return;
        if (animateTop) {
            maxTop = el.scrollHeight - el.offsetHeight;
            newTop = Math.max(Math.min(top, maxTop), 0);
        }
        if (animateLeft) {
            maxLeft = el.scrollWidth - el.offsetWidth;
            newLeft = Math.max(Math.min(left, maxLeft), 0);
        }
        let startTime = null;
        if (animateTop && newTop === currentTop) animateTop = false;
        if (animateLeft && newLeft === currentLeft) animateLeft = false;
        function render(time = new Date().getTime()) {
            if (startTime === null) startTime = time;
            const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
            const easeProgress = easing === "linear" ? progress : 0.5 - Math.cos(progress * Math.PI) / 2;
            let done;
            if (animateTop) scrollTop = currentTop + easeProgress * (newTop - currentTop);
            if (animateLeft) scrollLeft = currentLeft + easeProgress * (newLeft - currentLeft);
            if (animateTop && newTop > currentTop && scrollTop >= newTop) {
                el.scrollTop = newTop;
                done = true;
            }
            if (animateTop && newTop < currentTop && scrollTop <= newTop) {
                el.scrollTop = newTop;
                done = true;
            }
            if (animateLeft && newLeft > currentLeft && scrollLeft >= newLeft) {
                el.scrollLeft = newLeft;
                done = true;
            }
            if (animateLeft && newLeft < currentLeft && scrollLeft <= newLeft) {
                el.scrollLeft = newLeft;
                done = true;
            }
            if (done) {
                if (callback) callback();
                return;
            }
            if (animateTop) el.scrollTop = scrollTop;
            if (animateLeft) el.scrollLeft = scrollLeft;
            window.requestAnimationFrame(render);
        }
        window.requestAnimationFrame(render);
    });
} // scrollTop(top, duration, easing, callback) {
function scrollTop(...args) {
    let [top, duration, easing, callback] = args;
    if (args.length === 3 && typeof easing === "function") [top, duration, callback, easing] = args;
    const dom = this;
    if (typeof top === "undefined") {
        if (dom.length > 0) return dom[0].scrollTop;
        return null;
    }
    return dom.scrollTo(undefined, top, duration, easing, callback);
}
function scrollLeft(...args) {
    let [left, duration, easing, callback] = args;
    if (args.length === 3 && typeof easing === "function") [left, duration, callback, easing] = args;
    const dom = this;
    if (typeof left === "undefined") {
        if (dom.length > 0) return dom[0].scrollLeft;
        return null;
    }
    return dom.scrollTo(left, undefined, duration, easing, callback);
}
// eslint-disable-next-line
function animate(initialProps, initialParams) {
    const window = (0, _ssrWindow.getWindow)();
    const els = this;
    const a = {
        props: Object.assign({}, initialProps),
        params: Object.assign({
            duration: 300,
            easing: "swing" // or 'linear'
        }, initialParams),
        elements: els,
        animating: false,
        que: [],
        easingProgress (easing, progress) {
            if (easing === "swing") return 0.5 - Math.cos(progress * Math.PI) / 2;
            if (typeof easing === "function") return easing(progress);
            return progress;
        },
        stop () {
            if (a.frameId) window.cancelAnimationFrame(a.frameId);
            a.animating = false;
            a.elements.each((el)=>{
                const element = el;
                delete element.dom7AnimateInstance;
            });
            a.que = [];
        },
        done (complete) {
            a.animating = false;
            a.elements.each((el)=>{
                const element = el;
                delete element.dom7AnimateInstance;
            });
            if (complete) complete(els);
            if (a.que.length > 0) {
                const que = a.que.shift();
                a.animate(que[0], que[1]);
            }
        },
        animate (props, params) {
            if (a.animating) {
                a.que.push([
                    props,
                    params
                ]);
                return a;
            }
            const elements = []; // Define & Cache Initials & Units
            a.elements.each((el, index)=>{
                let initialFullValue;
                let initialValue;
                let unit;
                let finalValue;
                let finalFullValue;
                if (!el.dom7AnimateInstance) a.elements[index].dom7AnimateInstance = a;
                elements[index] = {
                    container: el
                };
                Object.keys(props).forEach((prop)=>{
                    initialFullValue = window.getComputedStyle(el, null).getPropertyValue(prop).replace(",", ".");
                    initialValue = parseFloat(initialFullValue);
                    unit = initialFullValue.replace(initialValue, "");
                    finalValue = parseFloat(props[prop]);
                    finalFullValue = props[prop] + unit;
                    elements[index][prop] = {
                        initialFullValue,
                        initialValue,
                        unit,
                        finalValue,
                        finalFullValue,
                        currentValue: initialValue
                    };
                });
            });
            let startTime = null;
            let time;
            let elementsDone = 0;
            let propsDone = 0;
            let done;
            let began = false;
            a.animating = true;
            function render() {
                time = new Date().getTime();
                let progress;
                let easeProgress; // let el;
                if (!began) {
                    began = true;
                    if (params.begin) params.begin(els);
                }
                if (startTime === null) startTime = time;
                if (params.progress) // eslint-disable-next-line
                params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), startTime + params.duration - time < 0 ? 0 : startTime + params.duration - time, startTime);
                elements.forEach((element)=>{
                    const el = element;
                    if (done || el.done) return;
                    Object.keys(props).forEach((prop)=>{
                        if (done || el.done) return;
                        progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);
                        easeProgress = a.easingProgress(params.easing, progress);
                        const { initialValue, finalValue, unit } = el[prop];
                        el[prop].currentValue = initialValue + easeProgress * (finalValue - initialValue);
                        const currentValue = el[prop].currentValue;
                        if (finalValue > initialValue && currentValue >= finalValue || finalValue < initialValue && currentValue <= finalValue) {
                            el.container.style[prop] = finalValue + unit;
                            propsDone += 1;
                            if (propsDone === Object.keys(props).length) {
                                el.done = true;
                                elementsDone += 1;
                            }
                            if (elementsDone === elements.length) done = true;
                        }
                        if (done) {
                            a.done(params.complete);
                            return;
                        }
                        el.container.style[prop] = currentValue + unit;
                    });
                });
                if (done) return; // Then call
                a.frameId = window.requestAnimationFrame(render);
            }
            a.frameId = window.requestAnimationFrame(render);
            return a;
        }
    };
    if (a.elements.length === 0) return els;
    let animateInstance;
    for(let i = 0; i < a.elements.length; i += 1)if (a.elements[i].dom7AnimateInstance) animateInstance = a.elements[i].dom7AnimateInstance;
    else a.elements[i].dom7AnimateInstance = a;
    if (!animateInstance) animateInstance = a;
    if (initialProps === "stop") animateInstance.stop();
    else animateInstance.animate(a.props, a.params);
    return els;
}
function stop() {
    const els = this;
    for(let i = 0; i < els.length; i += 1)if (els[i].dom7AnimateInstance) els[i].dom7AnimateInstance.stop();
}
const noTrigger = "resize scroll".split(" ");
function shortcut(name) {
    function eventHandler(...args) {
        if (typeof args[0] === "undefined") {
            for(let i = 0; i < this.length; i += 1)if (noTrigger.indexOf(name) < 0) {
                if (name in this[i]) this[i][name]();
                else $(this[i]).trigger(name);
            }
            return this;
        }
        return this.on(name, ...args);
    }
    return eventHandler;
}
const click = shortcut("click");
const blur = shortcut("blur");
const focus = shortcut("focus");
const focusin = shortcut("focusin");
const focusout = shortcut("focusout");
const keyup = shortcut("keyup");
const keydown = shortcut("keydown");
const keypress = shortcut("keypress");
const submit = shortcut("submit");
const change = shortcut("change");
const mousedown = shortcut("mousedown");
const mousemove = shortcut("mousemove");
const mouseup = shortcut("mouseup");
const mouseenter = shortcut("mouseenter");
const mouseleave = shortcut("mouseleave");
const mouseout = shortcut("mouseout");
const mouseover = shortcut("mouseover");
const touchstart = shortcut("touchstart");
const touchend = shortcut("touchend");
const touchmove = shortcut("touchmove");
const resize = shortcut("resize");
const scroll = shortcut("scroll");
exports.default = $;

},{"ssr-window":"3lyfI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dbikn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animateCSSModeScroll", ()=>animateCSSModeScroll);
parcelHelpers.export(exports, "deleteProps", ()=>deleteProps);
parcelHelpers.export(exports, "nextTick", ()=>nextTick);
parcelHelpers.export(exports, "now", ()=>now);
parcelHelpers.export(exports, "getTranslate", ()=>getTranslate);
parcelHelpers.export(exports, "isObject", ()=>isObject);
parcelHelpers.export(exports, "extend", ()=>extend);
parcelHelpers.export(exports, "getComputedStyle", ()=>getComputedStyle);
parcelHelpers.export(exports, "setCSSProperty", ()=>setCSSProperty);
var _ssrWindow = require("ssr-window");
function deleteProps(obj) {
    const object = obj;
    Object.keys(object).forEach((key)=>{
        try {
            object[key] = null;
        } catch (e) {}
        try {
            delete object[key];
        } catch (e) {}
    });
}
function nextTick(callback, delay = 0) {
    return setTimeout(callback, delay);
}
function now() {
    return Date.now();
}
function getComputedStyle(el) {
    const window1 = (0, _ssrWindow.getWindow)();
    let style;
    if (window1.getComputedStyle) style = window1.getComputedStyle(el, null);
    if (!style && el.currentStyle) style = el.currentStyle;
    if (!style) style = el.style;
    return style;
}
function getTranslate(el, axis = "x") {
    const window1 = (0, _ssrWindow.getWindow)();
    let matrix;
    let curTransform;
    let transformMatrix;
    const curStyle = getComputedStyle(el, null);
    if (window1.WebKitCSSMatrix) {
        curTransform = curStyle.transform || curStyle.webkitTransform;
        if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a)=>a.replace(",", ".")).join(", ");
         // Some old versions of Webkit choke when 'none' is passed; pass
        // empty string instead in this case
        transformMatrix = new window1.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
    } else {
        transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
        matrix = transformMatrix.toString().split(",");
    }
    if (axis === "x") {
        // Latest Chrome and webkits Fix
        if (window1.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
        else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
        else curTransform = parseFloat(matrix[4]);
    }
    if (axis === "y") {
        // Latest Chrome and webkits Fix
        if (window1.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
        else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
        else curTransform = parseFloat(matrix[5]);
    }
    return curTransform || 0;
}
function isObject(o) {
    return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
}
function isNode(node) {
    // eslint-disable-next-line
    if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") return node instanceof HTMLElement;
    return node && (node.nodeType === 1 || node.nodeType === 11);
}
function extend(...args) {
    const to = Object(args[0]);
    const noExtend = [
        "__proto__",
        "constructor",
        "prototype"
    ];
    for(let i = 1; i < args.length; i += 1){
        const nextSource = args[i];
        if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
            const keysArray = Object.keys(Object(nextSource)).filter((key)=>noExtend.indexOf(key) < 0);
            for(let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1){
                const nextKey = keysArray[nextIndex];
                const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                if (desc !== undefined && desc.enumerable) {
                    if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                        if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey];
                        else extend(to[nextKey], nextSource[nextKey]);
                    } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                        to[nextKey] = {};
                        if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey];
                        else extend(to[nextKey], nextSource[nextKey]);
                    } else to[nextKey] = nextSource[nextKey];
                }
            }
        }
    }
    return to;
}
function setCSSProperty(el, varName, varValue) {
    el.style.setProperty(varName, varValue);
}
function animateCSSModeScroll({ swiper, targetPosition, side }) {
    const window1 = (0, _ssrWindow.getWindow)();
    const startPosition = -swiper.translate;
    let startTime = null;
    let time;
    const duration = swiper.params.speed;
    swiper.wrapperEl.style.scrollSnapType = "none";
    window1.cancelAnimationFrame(swiper.cssModeFrameID);
    const dir = targetPosition > startPosition ? "next" : "prev";
    const isOutOfBound = (current, target)=>{
        return dir === "next" && current >= target || dir === "prev" && current <= target;
    };
    const animate = ()=>{
        time = new Date().getTime();
        if (startTime === null) startTime = time;
        const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
        const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
        let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
        if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
        swiper.wrapperEl.scrollTo({
            [side]: currentPosition
        });
        if (isOutOfBound(currentPosition, targetPosition)) {
            swiper.wrapperEl.style.overflow = "hidden";
            swiper.wrapperEl.style.scrollSnapType = "";
            setTimeout(()=>{
                swiper.wrapperEl.style.overflow = "";
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
            });
            window1.cancelAnimationFrame(swiper.cssModeFrameID);
            return;
        }
        swiper.cssModeFrameID = window1.requestAnimationFrame(animate);
    };
    animate();
}

},{"ssr-window":"3lyfI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dU80s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getSupport", ()=>getSupport);
var _ssrWindow = require("ssr-window");
let support;
function calcSupport() {
    const window = (0, _ssrWindow.getWindow)();
    const document = (0, _ssrWindow.getDocument)();
    return {
        smoothScroll: document.documentElement && "scrollBehavior" in document.documentElement.style,
        touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
        passiveListener: function checkPassiveListener() {
            let supportsPassive = false;
            try {
                const opts = Object.defineProperty({}, "passive", {
                    // eslint-disable-next-line
                    get () {
                        supportsPassive = true;
                    }
                });
                window.addEventListener("testPassiveListener", null, opts);
            } catch (e) {}
            return supportsPassive;
        }(),
        gestures: function checkGestures() {
            return "ongesturestart" in window;
        }()
    };
}
function getSupport() {
    if (!support) support = calcSupport();
    return support;
}

},{"ssr-window":"3lyfI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fHzNz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDevice", ()=>getDevice);
var _ssrWindow = require("ssr-window");
var _getSupportJs = require("./get-support.js");
let deviceCached;
function calcDevice({ userAgent } = {}) {
    const support = (0, _getSupportJs.getSupport)();
    const window = (0, _ssrWindow.getWindow)();
    const platform = window.navigator.platform;
    const ua = userAgent || window.navigator.userAgent;
    const device = {
        ios: false,
        android: false
    };
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
    let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    const windows = platform === "Win32";
    let macos = platform === "MacIntel"; // iPadOs 13 fix
    const iPadScreens = [
        "1024x1366",
        "1366x1024",
        "834x1194",
        "1194x834",
        "834x1112",
        "1112x834",
        "768x1024",
        "1024x768",
        "820x1180",
        "1180x820",
        "810x1080",
        "1080x810"
    ];
    if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
        ipad = ua.match(/(Version)\/([\d.]+)/);
        if (!ipad) ipad = [
            0,
            1,
            "13_0_0"
        ];
        macos = false;
    } // Android
    if (android && !windows) {
        device.os = "android";
        device.android = true;
    }
    if (ipad || iphone || ipod) {
        device.os = "ios";
        device.ios = true;
    } // Export object
    return device;
}
function getDevice(overrides = {}) {
    if (!deviceCached) deviceCached = calcDevice(overrides);
    return deviceCached;
}

},{"ssr-window":"3lyfI","./get-support.js":"dU80s","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2AwWY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getBrowser", ()=>getBrowser);
var _ssrWindow = require("ssr-window");
let browser;
function calcBrowser() {
    const window = (0, _ssrWindow.getWindow)();
    function isSafari() {
        const ua = window.navigator.userAgent.toLowerCase();
        return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
    }
    return {
        isSafari: isSafari(),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
    };
}
function getBrowser() {
    if (!browser) browser = calcBrowser();
    return browser;
}

},{"ssr-window":"3lyfI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"awiu0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Resize);
var _ssrWindow = require("ssr-window");
function Resize({ swiper, on, emit }) {
    const window = (0, _ssrWindow.getWindow)();
    let observer = null;
    const resizeHandler = ()=>{
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        emit("beforeResize");
        emit("resize");
    };
    const createObserver = ()=>{
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        observer = new ResizeObserver((entries)=>{
            const { width, height } = swiper;
            let newWidth = width;
            let newHeight = height;
            entries.forEach(({ contentBoxSize, contentRect, target })=>{
                if (target && target !== swiper.el) return;
                newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
            });
            if (newWidth !== width || newHeight !== height) resizeHandler();
        });
        observer.observe(swiper.el);
    };
    const removeObserver = ()=>{
        if (observer && observer.unobserve && swiper.el) {
            observer.unobserve(swiper.el);
            observer = null;
        }
    };
    const orientationChangeHandler = ()=>{
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        emit("orientationchange");
    };
    on("init", ()=>{
        if (swiper.params.resizeObserver && typeof window.ResizeObserver !== "undefined") {
            createObserver();
            return;
        }
        window.addEventListener("resize", resizeHandler);
        window.addEventListener("orientationchange", orientationChangeHandler);
    });
    on("destroy", ()=>{
        removeObserver();
        window.removeEventListener("resize", resizeHandler);
        window.removeEventListener("orientationchange", orientationChangeHandler);
    });
}

},{"ssr-window":"3lyfI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Fvg8a":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Observer);
var _ssrWindow = require("ssr-window");
function Observer({ swiper, extendParams, on, emit }) {
    const observers = [];
    const window = (0, _ssrWindow.getWindow)();
    const attach = (target, options = {})=>{
        const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
        const observer = new ObserverFunc((mutations)=>{
            // The observerUpdate event should only be triggered
            // once despite the number of mutations.  Additional
            // triggers are redundant and are very costly
            if (mutations.length === 1) {
                emit("observerUpdate", mutations[0]);
                return;
            }
            const observerUpdate = function observerUpdate() {
                emit("observerUpdate", mutations[0]);
            };
            if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate);
            else window.setTimeout(observerUpdate, 0);
        });
        observer.observe(target, {
            attributes: typeof options.attributes === "undefined" ? true : options.attributes,
            childList: typeof options.childList === "undefined" ? true : options.childList,
            characterData: typeof options.characterData === "undefined" ? true : options.characterData
        });
        observers.push(observer);
    };
    const init = ()=>{
        if (!swiper.params.observer) return;
        if (swiper.params.observeParents) {
            const containerParents = swiper.$el.parents();
            for(let i = 0; i < containerParents.length; i += 1)attach(containerParents[i]);
        } // Observe container
        attach(swiper.$el[0], {
            childList: swiper.params.observeSlideChildren
        }); // Observe wrapper
        attach(swiper.$wrapperEl[0], {
            attributes: false
        });
    };
    const destroy = ()=>{
        observers.forEach((observer)=>{
            observer.disconnect();
        });
        observers.splice(0, observers.length);
    };
    extendParams({
        observer: false,
        observeParents: false,
        observeSlideChildren: false
    });
    on("init", init);
    on("destroy", destroy);
}

},{"ssr-window":"3lyfI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"970nW":[function(require,module,exports) {
/* eslint-disable no-underscore-dangle */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    on (events, handler, priority) {
        const self = this;
        if (typeof handler !== "function") return self;
        const method = priority ? "unshift" : "push";
        events.split(" ").forEach((event)=>{
            if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
            self.eventsListeners[event][method](handler);
        });
        return self;
    },
    once (events, handler, priority) {
        const self = this;
        if (typeof handler !== "function") return self;
        function onceHandler(...args) {
            self.off(events, onceHandler);
            if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
            handler.apply(self, args);
        }
        onceHandler.__emitterProxy = handler;
        return self.on(events, onceHandler, priority);
    },
    onAny (handler, priority) {
        const self = this;
        if (typeof handler !== "function") return self;
        const method = priority ? "unshift" : "push";
        if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
        return self;
    },
    offAny (handler) {
        const self = this;
        if (!self.eventsAnyListeners) return self;
        const index = self.eventsAnyListeners.indexOf(handler);
        if (index >= 0) self.eventsAnyListeners.splice(index, 1);
        return self;
    },
    off (events, handler) {
        const self = this;
        if (!self.eventsListeners) return self;
        events.split(" ").forEach((event)=>{
            if (typeof handler === "undefined") self.eventsListeners[event] = [];
            else if (self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler, index)=>{
                if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
            });
        });
        return self;
    },
    emit (...args) {
        const self = this;
        if (!self.eventsListeners) return self;
        let events;
        let data;
        let context;
        if (typeof args[0] === "string" || Array.isArray(args[0])) {
            events = args[0];
            data = args.slice(1, args.length);
            context = self;
        } else {
            events = args[0].events;
            data = args[0].data;
            context = args[0].context || self;
        }
        data.unshift(context);
        const eventsArray = Array.isArray(events) ? events : events.split(" ");
        eventsArray.forEach((event)=>{
            if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler)=>{
                eventHandler.apply(context, [
                    event,
                    ...data
                ]);
            });
            if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler)=>{
                eventHandler.apply(context, data);
            });
        });
        return self;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5pXU1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _updateSizeJs = require("./updateSize.js");
var _updateSizeJsDefault = parcelHelpers.interopDefault(_updateSizeJs);
var _updateSlidesJs = require("./updateSlides.js");
var _updateSlidesJsDefault = parcelHelpers.interopDefault(_updateSlidesJs);
var _updateAutoHeightJs = require("./updateAutoHeight.js");
var _updateAutoHeightJsDefault = parcelHelpers.interopDefault(_updateAutoHeightJs);
var _updateSlidesOffsetJs = require("./updateSlidesOffset.js");
var _updateSlidesOffsetJsDefault = parcelHelpers.interopDefault(_updateSlidesOffsetJs);
var _updateSlidesProgressJs = require("./updateSlidesProgress.js");
var _updateSlidesProgressJsDefault = parcelHelpers.interopDefault(_updateSlidesProgressJs);
var _updateProgressJs = require("./updateProgress.js");
var _updateProgressJsDefault = parcelHelpers.interopDefault(_updateProgressJs);
var _updateSlidesClassesJs = require("./updateSlidesClasses.js");
var _updateSlidesClassesJsDefault = parcelHelpers.interopDefault(_updateSlidesClassesJs);
var _updateActiveIndexJs = require("./updateActiveIndex.js");
var _updateActiveIndexJsDefault = parcelHelpers.interopDefault(_updateActiveIndexJs);
var _updateClickedSlideJs = require("./updateClickedSlide.js");
var _updateClickedSlideJsDefault = parcelHelpers.interopDefault(_updateClickedSlideJs);
exports.default = {
    updateSize: (0, _updateSizeJsDefault.default),
    updateSlides: (0, _updateSlidesJsDefault.default),
    updateAutoHeight: (0, _updateAutoHeightJsDefault.default),
    updateSlidesOffset: (0, _updateSlidesOffsetJsDefault.default),
    updateSlidesProgress: (0, _updateSlidesProgressJsDefault.default),
    updateProgress: (0, _updateProgressJsDefault.default),
    updateSlidesClasses: (0, _updateSlidesClassesJsDefault.default),
    updateActiveIndex: (0, _updateActiveIndexJsDefault.default),
    updateClickedSlide: (0, _updateClickedSlideJsDefault.default)
};

},{"./updateSize.js":"bsa2K","./updateSlides.js":"eZm9z","./updateAutoHeight.js":"7KfeT","./updateSlidesOffset.js":"6FBIR","./updateSlidesProgress.js":"f3Dkt","./updateProgress.js":"2zH9x","./updateSlidesClasses.js":"28hyn","./updateActiveIndex.js":"8xZJ6","./updateClickedSlide.js":"e8k92","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bsa2K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>updateSize);
function updateSize() {
    const swiper = this;
    let width;
    let height;
    const $el = swiper.$el;
    if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) width = swiper.params.width;
    else width = $el[0].clientWidth;
    if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) height = swiper.params.height;
    else height = $el[0].clientHeight;
    if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
     // Subtract paddings
    width = width - parseInt($el.css("padding-left") || 0, 10) - parseInt($el.css("padding-right") || 0, 10);
    height = height - parseInt($el.css("padding-top") || 0, 10) - parseInt($el.css("padding-bottom") || 0, 10);
    if (Number.isNaN(width)) width = 0;
    if (Number.isNaN(height)) height = 0;
    Object.assign(swiper, {
        width,
        height,
        size: swiper.isHorizontal() ? width : height
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eZm9z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>updateSlides);
var _utilsJs = require("../../shared/utils.js");
function updateSlides() {
    const swiper = this;
    function getDirectionLabel(property) {
        if (swiper.isHorizontal()) return property;
         // prettier-ignore
        return ({
            "width": "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            "marginRight": "marginBottom"
        })[property];
    }
    function getDirectionPropertyValue(node, label) {
        return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
    }
    const params = swiper.params;
    const { $wrapperEl, size: swiperSize, rtlTranslate: rtl, wrongRTL } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
    const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    let snapGrid = [];
    const slidesGrid = [];
    const slidesSizesGrid = [];
    let offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === "function") offsetBefore = params.slidesOffsetBefore.call(swiper);
    let offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === "function") offsetAfter = params.slidesOffsetAfter.call(swiper);
    const previousSnapGridLength = swiper.snapGrid.length;
    const previousSlidesGridLength = swiper.slidesGrid.length;
    let spaceBetween = params.spaceBetween;
    let slidePosition = -offsetBefore;
    let prevSlideSize = 0;
    let index = 0;
    if (typeof swiperSize === "undefined") return;
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
    swiper.virtualSize = -spaceBetween; // reset margins
    if (rtl) slides.css({
        marginLeft: "",
        marginBottom: "",
        marginTop: ""
    });
    else slides.css({
        marginRight: "",
        marginBottom: "",
        marginTop: ""
    }); // reset cssMode offsets
    if (params.centeredSlides && params.cssMode) {
        (0, _utilsJs.setCSSProperty)(swiper.wrapperEl, "--swiper-centered-offset-before", "");
        (0, _utilsJs.setCSSProperty)(swiper.wrapperEl, "--swiper-centered-offset-after", "");
    }
    const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
    if (gridEnabled) swiper.grid.initSlides(slidesLength);
     // Calc slides
    let slideSize;
    const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key)=>{
        return typeof params.breakpoints[key].slidesPerView !== "undefined";
    }).length > 0;
    for(let i = 0; i < slidesLength; i += 1){
        slideSize = 0;
        const slide = slides.eq(i);
        if (gridEnabled) swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
        if (slide.css("display") === "none") continue; // eslint-disable-line
        if (params.slidesPerView === "auto") {
            if (shouldResetSlideSize) slides[i].style[getDirectionLabel("width")] = ``;
            const slideStyles = getComputedStyle(slide[0]);
            const currentTransform = slide[0].style.transform;
            const currentWebKitTransform = slide[0].style.webkitTransform;
            if (currentTransform) slide[0].style.transform = "none";
            if (currentWebKitTransform) slide[0].style.webkitTransform = "none";
            if (params.roundLengths) slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
            else {
                // eslint-disable-next-line
                const width = getDirectionPropertyValue(slideStyles, "width");
                const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                const boxSizing = slideStyles.getPropertyValue("box-sizing");
                if (boxSizing && boxSizing === "border-box") slideSize = width + marginLeft + marginRight;
                else {
                    const { clientWidth, offsetWidth } = slide[0];
                    slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                }
            }
            if (currentTransform) slide[0].style.transform = currentTransform;
            if (currentWebKitTransform) slide[0].style.webkitTransform = currentWebKitTransform;
            if (params.roundLengths) slideSize = Math.floor(slideSize);
        } else {
            slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
            if (params.roundLengths) slideSize = Math.floor(slideSize);
            if (slides[i]) slides[i].style[getDirectionLabel("width")] = `${slideSize}px`;
        }
        if (slides[i]) slides[i].swiperSlideSize = slideSize;
        slidesSizesGrid.push(slideSize);
        if (params.centeredSlides) {
            slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
            if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
            if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
            if (Math.abs(slidePosition) < 0.001) slidePosition = 0;
            if (params.roundLengths) slidePosition = Math.floor(slidePosition);
            if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
            slidesGrid.push(slidePosition);
        } else {
            if (params.roundLengths) slidePosition = Math.floor(slidePosition);
            if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
            slidesGrid.push(slidePosition);
            slidePosition = slidePosition + slideSize + spaceBetween;
        }
        swiper.virtualSize += slideSize + spaceBetween;
        prevSlideSize = slideSize;
        index += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) $wrapperEl.css({
        width: `${swiper.virtualSize + params.spaceBetween}px`
    });
    if (params.setWrapperSize) $wrapperEl.css({
        [getDirectionLabel("width")]: `${swiper.virtualSize + params.spaceBetween}px`
    });
    if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
     // Remove last grid elements depending on width
    if (!params.centeredSlides) {
        const newSlidesGrid = [];
        for(let i = 0; i < snapGrid.length; i += 1){
            let slidesGridItem = snapGrid[i];
            if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
            if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
        }
        snapGrid = newSlidesGrid;
        if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
    }
    if (snapGrid.length === 0) snapGrid = [
        0
    ];
    if (params.spaceBetween !== 0) {
        const key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
        slides.filter((_, slideIndex)=>{
            if (!params.cssMode) return true;
            if (slideIndex === slides.length - 1) return false;
            return true;
        }).css({
            [key]: `${spaceBetween}px`
        });
    }
    if (params.centeredSlides && params.centeredSlidesBounds) {
        let allSlidesSize = 0;
        slidesSizesGrid.forEach((slideSizeValue)=>{
            allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
        });
        allSlidesSize -= params.spaceBetween;
        const maxSnap = allSlidesSize - swiperSize;
        snapGrid = snapGrid.map((snap)=>{
            if (snap < 0) return -offsetBefore;
            if (snap > maxSnap) return maxSnap + offsetAfter;
            return snap;
        });
    }
    if (params.centerInsufficientSlides) {
        let allSlidesSize = 0;
        slidesSizesGrid.forEach((slideSizeValue)=>{
            allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
        });
        allSlidesSize -= params.spaceBetween;
        if (allSlidesSize < swiperSize) {
            const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
            snapGrid.forEach((snap, snapIndex)=>{
                snapGrid[snapIndex] = snap - allSlidesOffset;
            });
            slidesGrid.forEach((snap, snapIndex)=>{
                slidesGrid[snapIndex] = snap + allSlidesOffset;
            });
        }
    }
    Object.assign(swiper, {
        slides,
        snapGrid,
        slidesGrid,
        slidesSizesGrid
    });
    if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
        (0, _utilsJs.setCSSProperty)(swiper.wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
        (0, _utilsJs.setCSSProperty)(swiper.wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
        const addToSnapGrid = -swiper.snapGrid[0];
        const addToSlidesGrid = -swiper.slidesGrid[0];
        swiper.snapGrid = swiper.snapGrid.map((v)=>v + addToSnapGrid);
        swiper.slidesGrid = swiper.slidesGrid.map((v)=>v + addToSlidesGrid);
    }
    if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
    if (snapGrid.length !== previousSnapGridLength) {
        if (swiper.params.watchOverflow) swiper.checkOverflow();
        swiper.emit("snapGridLengthChange");
    }
    if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
    if (params.watchSlidesProgress) swiper.updateSlidesOffset();
}

},{"../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7KfeT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>updateAutoHeight);
function updateAutoHeight(speed) {
    const swiper = this;
    const activeSlides = [];
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let newHeight = 0;
    let i;
    if (typeof speed === "number") swiper.setTransition(speed);
    else if (speed === true) swiper.setTransition(swiper.params.speed);
    const getSlideByIndex = (index)=>{
        if (isVirtual) return swiper.slides.filter((el)=>parseInt(el.getAttribute("data-swiper-slide-index"), 10) === index)[0];
        return swiper.slides.eq(index)[0];
    }; // Find slides currently in view
    if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) {
        if (swiper.params.centeredSlides) swiper.visibleSlides.each((slide)=>{
            activeSlides.push(slide);
        });
        else for(i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1){
            const index = swiper.activeIndex + i;
            if (index > swiper.slides.length && !isVirtual) break;
            activeSlides.push(getSlideByIndex(index));
        }
    } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
     // Find new height from highest slide in view
    for(i = 0; i < activeSlides.length; i += 1)if (typeof activeSlides[i] !== "undefined") {
        const height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
    }
     // Update Height
    if (newHeight || newHeight === 0) swiper.$wrapperEl.css("height", `${newHeight}px`);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6FBIR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>updateSlidesOffset);
function updateSlidesOffset() {
    const swiper = this;
    const slides = swiper.slides;
    for(let i = 0; i < slides.length; i += 1)slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f3Dkt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>updateSlidesProgress);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function updateSlidesProgress(translate = this && this.translate || 0) {
    const swiper = this;
    const params = swiper.params;
    const { slides, rtlTranslate: rtl, snapGrid } = swiper;
    if (slides.length === 0) return;
    if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
    let offsetCenter = -translate;
    if (rtl) offsetCenter = translate; // Visible Slides
    slides.removeClass(params.slideVisibleClass);
    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];
    for(let i = 0; i < slides.length; i += 1){
        const slide = slides[i];
        let slideOffset = slide.swiperSlideOffset;
        if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
        const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
        const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
        const slideBefore = -(offsetCenter - slideOffset);
        const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
        const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
        if (isVisible) {
            swiper.visibleSlides.push(slide);
            swiper.visibleSlidesIndexes.push(i);
            slides.eq(i).addClass(params.slideVisibleClass);
        }
        slide.progress = rtl ? -slideProgress : slideProgress;
        slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
    }
    swiper.visibleSlides = (0, _domJsDefault.default)(swiper.visibleSlides);
}

},{"../../shared/dom.js":"7pW5q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2zH9x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>updateProgress);
function updateProgress(translate) {
    const swiper = this;
    if (typeof translate === "undefined") {
        const multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line
        translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
    }
    const params = swiper.params;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    let { progress, isBeginning, isEnd } = swiper;
    const wasBeginning = isBeginning;
    const wasEnd = isEnd;
    if (translatesDiff === 0) {
        progress = 0;
        isBeginning = true;
        isEnd = true;
    } else {
        progress = (translate - swiper.minTranslate()) / translatesDiff;
        isBeginning = progress <= 0;
        isEnd = progress >= 1;
    }
    Object.assign(swiper, {
        progress,
        isBeginning,
        isEnd
    });
    if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
    if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
    if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
    if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
    swiper.emit("progress", progress);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"28hyn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>updateSlidesClasses);
function updateSlidesClasses() {
    const swiper = this;
    const { slides, params, $wrapperEl, activeIndex, realIndex } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);
    let activeSlide;
    if (isVirtual) activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`);
    else activeSlide = slides.eq(activeIndex);
     // Active classes
    activeSlide.addClass(params.slideActiveClass);
    if (params.loop) {
        // Duplicate to all looped slides
        if (activeSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
        else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
    } // Next Slide
    let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);
    if (params.loop && nextSlide.length === 0) {
        nextSlide = slides.eq(0);
        nextSlide.addClass(params.slideNextClass);
    } // Prev Slide
    let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);
    if (params.loop && prevSlide.length === 0) {
        prevSlide = slides.eq(-1);
        prevSlide.addClass(params.slidePrevClass);
    }
    if (params.loop) {
        // Duplicate to all looped slides
        if (nextSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass);
        else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicateNextClass);
        if (prevSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass);
        else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr("data-swiper-slide-index")}"]`).addClass(params.slideDuplicatePrevClass);
    }
    swiper.emitSlidesClasses();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8xZJ6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>updateActiveIndex);
function updateActiveIndex(newActiveIndex) {
    const swiper = this;
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    const { slidesGrid, snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex } = swiper;
    let activeIndex = newActiveIndex;
    let snapIndex;
    if (typeof activeIndex === "undefined") {
        for(let i = 0; i < slidesGrid.length; i += 1){
            if (typeof slidesGrid[i + 1] !== "undefined") {
                if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i;
                else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
            } else if (translate >= slidesGrid[i]) activeIndex = i;
        } // Normalize slideIndex
        if (params.normalizeSlideIndex) {
            if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
        }
    }
    if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate);
    else {
        const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
        snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    if (activeIndex === previousIndex) {
        if (snapIndex !== previousSnapIndex) {
            swiper.snapIndex = snapIndex;
            swiper.emit("snapIndexChange");
        }
        return;
    } // Get real index
    const realIndex = parseInt(swiper.slides.eq(activeIndex).attr("data-swiper-slide-index") || activeIndex, 10);
    Object.assign(swiper, {
        snapIndex,
        realIndex,
        previousIndex,
        activeIndex
    });
    swiper.emit("activeIndexChange");
    swiper.emit("snapIndexChange");
    if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
    if (swiper.initialized || swiper.params.runCallbacksOnInit) swiper.emit("slideChange");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e8k92":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>updateClickedSlide);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function updateClickedSlide(e) {
    const swiper = this;
    const params = swiper.params;
    const slide = (0, _domJsDefault.default)(e).closest(`.${params.slideClass}`)[0];
    let slideFound = false;
    let slideIndex;
    if (slide) {
        for(let i = 0; i < swiper.slides.length; i += 1)if (swiper.slides[i] === slide) {
            slideFound = true;
            slideIndex = i;
            break;
        }
    }
    if (slide && slideFound) {
        swiper.clickedSlide = slide;
        if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt((0, _domJsDefault.default)(slide).attr("data-swiper-slide-index"), 10);
        else swiper.clickedIndex = slideIndex;
    } else {
        swiper.clickedSlide = undefined;
        swiper.clickedIndex = undefined;
        return;
    }
    if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
}

},{"../../shared/dom.js":"7pW5q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"82UFa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getTranslateJs = require("./getTranslate.js");
var _getTranslateJsDefault = parcelHelpers.interopDefault(_getTranslateJs);
var _setTranslateJs = require("./setTranslate.js");
var _setTranslateJsDefault = parcelHelpers.interopDefault(_setTranslateJs);
var _minTranslateJs = require("./minTranslate.js");
var _minTranslateJsDefault = parcelHelpers.interopDefault(_minTranslateJs);
var _maxTranslateJs = require("./maxTranslate.js");
var _maxTranslateJsDefault = parcelHelpers.interopDefault(_maxTranslateJs);
var _translateToJs = require("./translateTo.js");
var _translateToJsDefault = parcelHelpers.interopDefault(_translateToJs);
exports.default = {
    getTranslate: (0, _getTranslateJsDefault.default),
    setTranslate: (0, _setTranslateJsDefault.default),
    minTranslate: (0, _minTranslateJsDefault.default),
    maxTranslate: (0, _maxTranslateJsDefault.default),
    translateTo: (0, _translateToJsDefault.default)
};

},{"./getTranslate.js":"l7sfz","./setTranslate.js":"g0P3q","./minTranslate.js":"hopBm","./maxTranslate.js":"izojh","./translateTo.js":"9fo5P","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l7sfz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getSwiperTranslate);
var _utilsJs = require("../../shared/utils.js");
function getSwiperTranslate(axis = this.isHorizontal() ? "x" : "y") {
    const swiper = this;
    const { params, rtlTranslate: rtl, translate, $wrapperEl } = swiper;
    if (params.virtualTranslate) return rtl ? -translate : translate;
    if (params.cssMode) return translate;
    let currentTranslate = (0, _utilsJs.getTranslate)($wrapperEl[0], axis);
    if (rtl) currentTranslate = -currentTranslate;
    return currentTranslate || 0;
}

},{"../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g0P3q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>setTranslate);
function setTranslate(translate, byController) {
    const swiper = this;
    const { rtlTranslate: rtl, params, $wrapperEl, wrapperEl, progress } = swiper;
    let x = 0;
    let y = 0;
    const z = 0;
    if (swiper.isHorizontal()) x = rtl ? -translate : translate;
    else y = translate;
    if (params.roundLengths) {
        x = Math.floor(x);
        y = Math.floor(y);
    }
    if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y;
    else if (!params.virtualTranslate) $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) newProgress = 0;
    else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
    if (newProgress !== progress) swiper.updateProgress(translate);
    swiper.emit("setTranslate", swiper.translate, byController);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hopBm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>minTranslate);
function minTranslate() {
    return -this.snapGrid[0];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"izojh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>maxTranslate);
function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9fo5P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>translateTo);
var _utilsJs = require("../../shared/utils.js");
function translateTo(translate = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
    const swiper = this;
    const { params, wrapperEl } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition) return false;
    const minTranslate = swiper.minTranslate();
    const maxTranslate = swiper.maxTranslate();
    let newTranslate;
    if (translateBounds && translate > minTranslate) newTranslate = minTranslate;
    else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;
    else newTranslate = translate; // Update progress
    swiper.updateProgress(newTranslate);
    if (params.cssMode) {
        const isH = swiper.isHorizontal();
        if (speed === 0) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
        else {
            if (!swiper.support.smoothScroll) {
                (0, _utilsJs.animateCSSModeScroll)({
                    swiper,
                    targetPosition: -newTranslate,
                    side: isH ? "left" : "top"
                });
                return true;
            }
            wrapperEl.scrollTo({
                [isH ? "left" : "top"]: -newTranslate,
                behavior: "smooth"
            });
        }
        return true;
    }
    if (speed === 0) {
        swiper.setTransition(0);
        swiper.setTranslate(newTranslate);
        if (runCallbacks) {
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.emit("transitionEnd");
        }
    } else {
        swiper.setTransition(speed);
        swiper.setTranslate(newTranslate);
        if (runCallbacks) {
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.emit("transitionStart");
        }
        if (!swiper.animating) {
            swiper.animating = true;
            if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                if (!swiper || swiper.destroyed) return;
                if (e.target !== this) return;
                swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
                swiper.onTranslateToWrapperTransitionEnd = null;
                delete swiper.onTranslateToWrapperTransitionEnd;
                if (runCallbacks) swiper.emit("transitionEnd");
            };
            swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
            swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onTranslateToWrapperTransitionEnd);
        }
    }
    return true;
}

},{"../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Knou":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setTransitionJs = require("./setTransition.js");
var _setTransitionJsDefault = parcelHelpers.interopDefault(_setTransitionJs);
var _transitionStartJs = require("./transitionStart.js");
var _transitionStartJsDefault = parcelHelpers.interopDefault(_transitionStartJs);
var _transitionEndJs = require("./transitionEnd.js");
var _transitionEndJsDefault = parcelHelpers.interopDefault(_transitionEndJs);
exports.default = {
    setTransition: (0, _setTransitionJsDefault.default),
    transitionStart: (0, _transitionStartJsDefault.default),
    transitionEnd: (0, _transitionEndJsDefault.default)
};

},{"./setTransition.js":"g4hnj","./transitionStart.js":"ZupG2","./transitionEnd.js":"6fcJ0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g4hnj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>setTransition);
function setTransition(duration, byController) {
    const swiper = this;
    if (!swiper.params.cssMode) swiper.$wrapperEl.transition(duration);
    swiper.emit("setTransition", duration, byController);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ZupG2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>transitionStart);
var _transitionEmitJs = require("./transitionEmit.js");
var _transitionEmitJsDefault = parcelHelpers.interopDefault(_transitionEmitJs);
function transitionStart(runCallbacks = true, direction) {
    const swiper = this;
    const { params } = swiper;
    if (params.cssMode) return;
    if (params.autoHeight) swiper.updateAutoHeight();
    (0, _transitionEmitJsDefault.default)({
        swiper,
        runCallbacks,
        direction,
        step: "Start"
    });
}

},{"./transitionEmit.js":"d6fZ6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d6fZ6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>transitionEmit);
function transitionEmit({ swiper, runCallbacks, direction, step }) {
    const { activeIndex, previousIndex } = swiper;
    let dir = direction;
    if (!dir) {
        if (activeIndex > previousIndex) dir = "next";
        else if (activeIndex < previousIndex) dir = "prev";
        else dir = "reset";
    }
    swiper.emit(`transition${step}`);
    if (runCallbacks && activeIndex !== previousIndex) {
        if (dir === "reset") {
            swiper.emit(`slideResetTransition${step}`);
            return;
        }
        swiper.emit(`slideChangeTransition${step}`);
        if (dir === "next") swiper.emit(`slideNextTransition${step}`);
        else swiper.emit(`slidePrevTransition${step}`);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6fcJ0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>transitionEnd);
var _transitionEmitJs = require("./transitionEmit.js");
var _transitionEmitJsDefault = parcelHelpers.interopDefault(_transitionEmitJs);
function transitionEnd(runCallbacks = true, direction) {
    const swiper = this;
    const { params } = swiper;
    swiper.animating = false;
    if (params.cssMode) return;
    swiper.setTransition(0);
    (0, _transitionEmitJsDefault.default)({
        swiper,
        runCallbacks,
        direction,
        step: "End"
    });
}

},{"./transitionEmit.js":"d6fZ6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5VZY1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _slideToJs = require("./slideTo.js");
var _slideToJsDefault = parcelHelpers.interopDefault(_slideToJs);
var _slideToLoopJs = require("./slideToLoop.js");
var _slideToLoopJsDefault = parcelHelpers.interopDefault(_slideToLoopJs);
var _slideNextJs = require("./slideNext.js");
var _slideNextJsDefault = parcelHelpers.interopDefault(_slideNextJs);
var _slidePrevJs = require("./slidePrev.js");
var _slidePrevJsDefault = parcelHelpers.interopDefault(_slidePrevJs);
var _slideResetJs = require("./slideReset.js");
var _slideResetJsDefault = parcelHelpers.interopDefault(_slideResetJs);
var _slideToClosestJs = require("./slideToClosest.js");
var _slideToClosestJsDefault = parcelHelpers.interopDefault(_slideToClosestJs);
var _slideToClickedSlideJs = require("./slideToClickedSlide.js");
var _slideToClickedSlideJsDefault = parcelHelpers.interopDefault(_slideToClickedSlideJs);
exports.default = {
    slideTo: (0, _slideToJsDefault.default),
    slideToLoop: (0, _slideToLoopJsDefault.default),
    slideNext: (0, _slideNextJsDefault.default),
    slidePrev: (0, _slidePrevJsDefault.default),
    slideReset: (0, _slideResetJsDefault.default),
    slideToClosest: (0, _slideToClosestJsDefault.default),
    slideToClickedSlide: (0, _slideToClickedSlideJsDefault.default)
};

},{"./slideTo.js":"iYsU0","./slideToLoop.js":"c0zrc","./slideNext.js":"6QRzM","./slidePrev.js":"2gloi","./slideReset.js":"2Jl3v","./slideToClosest.js":"c03V7","./slideToClickedSlide.js":"kCvnh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iYsU0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>slideTo);
var _utilsJs = require("../../shared/utils.js");
function slideTo(index = 0, speed = this.params.speed, runCallbacks = true, internal, initial) {
    if (typeof index !== "number" && typeof index !== "string") throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index}] given.`);
    if (typeof index === "string") {
        /**
     * The `index` argument converted from `string` to `number`.
     * @type {number}
     */ const indexAsNumber = parseInt(index, 10);
        /**
     * Determines whether the `index` argument is a valid `number`
     * after being converted from the `string` type.
     * @type {boolean}
     */ const isValidNumber = isFinite(indexAsNumber);
        if (!isValidNumber) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
         // Knowing that the converted `index` is a valid number,
        // we can update the original argument's value.
        index = indexAsNumber;
    }
    const swiper = this;
    let slideIndex = index;
    if (slideIndex < 0) slideIndex = 0;
    const { params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) return false;
    const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
    let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
    const translate = -snapGrid[snapIndex]; // Update progress
    swiper.updateProgress(translate); // Normalize slideIndex
    if (params.normalizeSlideIndex) for(let i = 0; i < slidesGrid.length; i += 1){
        const normalizedTranslate = -Math.floor(translate * 100);
        const normalizedGrid = Math.floor(slidesGrid[i] * 100);
        const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
        if (typeof slidesGrid[i + 1] !== "undefined") {
            if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i;
            else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
        } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
    }
     // Directions locks
    if (swiper.initialized && slideIndex !== activeIndex) {
        if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) return false;
        if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
            if ((activeIndex || 0) !== slideIndex) return false;
        }
    }
    let direction;
    if (slideIndex > activeIndex) direction = "next";
    else if (slideIndex < activeIndex) direction = "prev";
    else direction = "reset"; // Update Index
    if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
        swiper.updateActiveIndex(slideIndex); // Update Height
        if (params.autoHeight) swiper.updateAutoHeight();
        swiper.updateSlidesClasses();
        if (params.effect !== "slide") swiper.setTranslate(translate);
        if (direction !== "reset") {
            swiper.transitionStart(runCallbacks, direction);
            swiper.transitionEnd(runCallbacks, direction);
        }
        return false;
    }
    if (params.cssMode) {
        const isH = swiper.isHorizontal();
        const t = rtl ? translate : -translate;
        if (speed === 0) {
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            if (isVirtual) {
                swiper.wrapperEl.style.scrollSnapType = "none";
                swiper._immediateVirtual = true;
            }
            wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
            if (isVirtual) requestAnimationFrame(()=>{
                swiper.wrapperEl.style.scrollSnapType = "";
                swiper._swiperImmediateVirtual = false;
            });
        } else {
            if (!swiper.support.smoothScroll) {
                (0, _utilsJs.animateCSSModeScroll)({
                    swiper,
                    targetPosition: t,
                    side: isH ? "left" : "top"
                });
                return true;
            }
            wrapperEl.scrollTo({
                [isH ? "left" : "top"]: t,
                behavior: "smooth"
            });
        }
        return true;
    }
    swiper.setTransition(speed);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit("beforeTransitionStart", speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    if (speed === 0) swiper.transitionEnd(runCallbacks, direction);
    else if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
            if (!swiper || swiper.destroyed) return;
            if (e.target !== this) return;
            swiper.$wrapperEl[0].removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
            swiper.onSlideToWrapperTransitionEnd = null;
            delete swiper.onSlideToWrapperTransitionEnd;
            swiper.transitionEnd(runCallbacks, direction);
        };
        swiper.$wrapperEl[0].addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
        swiper.$wrapperEl[0].addEventListener("webkitTransitionEnd", swiper.onSlideToWrapperTransitionEnd);
    }
    return true;
}

},{"../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c0zrc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>slideToLoop);
function slideToLoop(index = 0, speed = this.params.speed, runCallbacks = true, internal) {
    const swiper = this;
    let newIndex = index;
    if (swiper.params.loop) newIndex += swiper.loopedSlides;
    return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6QRzM":[function(require,module,exports) {
/* eslint no-unused-vars: "off" */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>slideNext);
function slideNext(speed = this.params.speed, runCallbacks = true, internal) {
    const swiper = this;
    const { animating, enabled, params } = swiper;
    if (!enabled) return swiper;
    let perGroup = params.slidesPerGroup;
    if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
    const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
    if (params.loop) {
        if (animating && params.loopPreventsSlide) return false;
        swiper.loopFix(); // eslint-disable-next-line
        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }
    if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
    return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2gloi":[function(require,module,exports) {
/* eslint no-unused-vars: "off" */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>slidePrev);
function slidePrev(speed = this.params.speed, runCallbacks = true, internal) {
    const swiper = this;
    const { params, animating, snapGrid, slidesGrid, rtlTranslate, enabled } = swiper;
    if (!enabled) return swiper;
    if (params.loop) {
        if (animating && params.loopPreventsSlide) return false;
        swiper.loopFix(); // eslint-disable-next-line
        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }
    const translate = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize(val) {
        if (val < 0) return -Math.floor(Math.abs(val));
        return Math.floor(val);
    }
    const normalizedTranslate = normalize(translate);
    const normalizedSnapGrid = snapGrid.map((val)=>normalize(val));
    let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    if (typeof prevSnap === "undefined" && params.cssMode) {
        let prevSnapIndex;
        snapGrid.forEach((snap, snapIndex)=>{
            if (normalizedTranslate >= snap) // prevSnap = snap;
            prevSnapIndex = snapIndex;
        });
        if (typeof prevSnapIndex !== "undefined") prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
    let prevIndex = 0;
    if (typeof prevSnap !== "undefined") {
        prevIndex = slidesGrid.indexOf(prevSnap);
        if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
        if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
            prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
            prevIndex = Math.max(prevIndex, 0);
        }
    }
    if (params.rewind && swiper.isBeginning) return swiper.slideTo(swiper.slides.length - 1, speed, runCallbacks, internal);
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Jl3v":[function(require,module,exports) {
/* eslint no-unused-vars: "off" */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>slideReset);
function slideReset(speed = this.params.speed, runCallbacks = true, internal) {
    const swiper = this;
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c03V7":[function(require,module,exports) {
/* eslint no-unused-vars: "off" */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>slideToClosest);
function slideToClosest(speed = this.params.speed, runCallbacks = true, internal, threshold = 0.5) {
    const swiper = this;
    let index = swiper.activeIndex;
    const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
    const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    if (translate >= swiper.snapGrid[snapIndex]) {
        // The current translate is on or after the current snap index, so the choice
        // is between the current index and the one after it.
        const currentSnap = swiper.snapGrid[snapIndex];
        const nextSnap = swiper.snapGrid[snapIndex + 1];
        if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
    } else {
        // The current translate is before the current snap index, so the choice
        // is between the current index and the one before it.
        const prevSnap = swiper.snapGrid[snapIndex - 1];
        const currentSnap = swiper.snapGrid[snapIndex];
        if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
    }
    index = Math.max(index, 0);
    index = Math.min(index, swiper.slidesGrid.length - 1);
    return swiper.slideTo(index, speed, runCallbacks, internal);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kCvnh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>slideToClickedSlide);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _utilsJs = require("../../shared/utils.js");
function slideToClickedSlide() {
    const swiper = this;
    const { params, $wrapperEl } = swiper;
    const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    let slideToIndex = swiper.clickedIndex;
    let realIndex;
    if (params.loop) {
        if (swiper.animating) return;
        realIndex = parseInt((0, _domJsDefault.default)(swiper.clickedSlide).attr("data-swiper-slide-index"), 10);
        if (params.centeredSlides) {
            if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                swiper.loopFix();
                slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
                (0, _utilsJs.nextTick)(()=>{
                    swiper.slideTo(slideToIndex);
                });
            } else swiper.slideTo(slideToIndex);
        } else if (slideToIndex > swiper.slides.length - slidesPerView) {
            swiper.loopFix();
            slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
            (0, _utilsJs.nextTick)(()=>{
                swiper.slideTo(slideToIndex);
            });
        } else swiper.slideTo(slideToIndex);
    } else swiper.slideTo(slideToIndex);
}

},{"../../shared/dom.js":"7pW5q","../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6S1wN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _loopCreateJs = require("./loopCreate.js");
var _loopCreateJsDefault = parcelHelpers.interopDefault(_loopCreateJs);
var _loopFixJs = require("./loopFix.js");
var _loopFixJsDefault = parcelHelpers.interopDefault(_loopFixJs);
var _loopDestroyJs = require("./loopDestroy.js");
var _loopDestroyJsDefault = parcelHelpers.interopDefault(_loopDestroyJs);
exports.default = {
    loopCreate: (0, _loopCreateJsDefault.default),
    loopFix: (0, _loopFixJsDefault.default),
    loopDestroy: (0, _loopDestroyJsDefault.default)
};

},{"./loopCreate.js":"2lRpX","./loopFix.js":"iCLJj","./loopDestroy.js":"in4TF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2lRpX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>loopCreate);
var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function loopCreate() {
    const swiper = this;
    const document = (0, _ssrWindow.getDocument)();
    const { params, $wrapperEl } = swiper; // Remove duplicated slides
    const $selector = $wrapperEl.children().length > 0 ? (0, _domJsDefault.default)($wrapperEl.children()[0].parentNode) : $wrapperEl;
    $selector.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
    let slides = $selector.children(`.${params.slideClass}`);
    if (params.loopFillGroupWithBlank) {
        const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;
        if (blankSlidesNum !== params.slidesPerGroup) {
            for(let i = 0; i < blankSlidesNum; i += 1){
                const blankNode = (0, _domJsDefault.default)(document.createElement("div")).addClass(`${params.slideClass} ${params.slideBlankClass}`);
                $selector.append(blankNode);
            }
            slides = $selector.children(`.${params.slideClass}`);
        }
    }
    if (params.slidesPerView === "auto" && !params.loopedSlides) params.loopedSlides = slides.length;
    swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
    swiper.loopedSlides += params.loopAdditionalSlides;
    if (swiper.loopedSlides > slides.length) swiper.loopedSlides = slides.length;
    const prependSlides = [];
    const appendSlides = [];
    slides.each((el, index)=>{
        const slide = (0, _domJsDefault.default)(el);
        if (index < swiper.loopedSlides) appendSlides.push(el);
        if (index < slides.length && index >= slides.length - swiper.loopedSlides) prependSlides.push(el);
        slide.attr("data-swiper-slide-index", index);
    });
    for(let i = 0; i < appendSlides.length; i += 1)$selector.append((0, _domJsDefault.default)(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
    for(let i = prependSlides.length - 1; i >= 0; i -= 1)$selector.prepend((0, _domJsDefault.default)(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
}

},{"ssr-window":"3lyfI","../../shared/dom.js":"7pW5q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iCLJj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>loopFix);
function loopFix() {
    const swiper = this;
    swiper.emit("beforeLoopFix");
    const { activeIndex, slides, loopedSlides, allowSlidePrev, allowSlideNext, snapGrid, rtlTranslate: rtl } = swiper;
    let newIndex;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;
    const snapTranslate = -snapGrid[activeIndex];
    const diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding
    if (activeIndex < loopedSlides) {
        newIndex = slides.length - loopedSlides * 3 + activeIndex;
        newIndex += loopedSlides;
        const slideChanged = swiper.slideTo(newIndex, 0, false, true);
        if (slideChanged && diff !== 0) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    } else if (activeIndex >= slides.length - loopedSlides) {
        // Fix For Positive Oversliding
        newIndex = -slides.length + activeIndex + loopedSlides;
        newIndex += loopedSlides;
        const slideChanged = swiper.slideTo(newIndex, 0, false, true);
        if (slideChanged && diff !== 0) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    swiper.emit("loopFix");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"in4TF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>loopDestroy);
function loopDestroy() {
    const swiper = this;
    const { $wrapperEl, params, slides } = swiper;
    $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
    slides.removeAttr("data-swiper-slide-index");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6y5ez":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setGrabCursorJs = require("./setGrabCursor.js");
var _setGrabCursorJsDefault = parcelHelpers.interopDefault(_setGrabCursorJs);
var _unsetGrabCursorJs = require("./unsetGrabCursor.js");
var _unsetGrabCursorJsDefault = parcelHelpers.interopDefault(_unsetGrabCursorJs);
exports.default = {
    setGrabCursor: (0, _setGrabCursorJsDefault.default),
    unsetGrabCursor: (0, _unsetGrabCursorJsDefault.default)
};

},{"./setGrabCursor.js":"6iLu0","./unsetGrabCursor.js":"fKd0x","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6iLu0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>setGrabCursor);
function setGrabCursor(moving) {
    const swiper = this;
    if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
    const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
    el.style.cursor = "move";
    el.style.cursor = moving ? "-webkit-grabbing" : "-webkit-grab";
    el.style.cursor = moving ? "-moz-grabbin" : "-moz-grab";
    el.style.cursor = moving ? "grabbing" : "grab";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fKd0x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>unsetGrabCursor);
function unsetGrabCursor() {
    const swiper = this;
    if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
    swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jPWSg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _onTouchStartJs = require("./onTouchStart.js");
var _onTouchStartJsDefault = parcelHelpers.interopDefault(_onTouchStartJs);
var _onTouchMoveJs = require("./onTouchMove.js");
var _onTouchMoveJsDefault = parcelHelpers.interopDefault(_onTouchMoveJs);
var _onTouchEndJs = require("./onTouchEnd.js");
var _onTouchEndJsDefault = parcelHelpers.interopDefault(_onTouchEndJs);
var _onResizeJs = require("./onResize.js");
var _onResizeJsDefault = parcelHelpers.interopDefault(_onResizeJs);
var _onClickJs = require("./onClick.js");
var _onClickJsDefault = parcelHelpers.interopDefault(_onClickJs);
var _onScrollJs = require("./onScroll.js");
var _onScrollJsDefault = parcelHelpers.interopDefault(_onScrollJs);
let dummyEventAttached = false;
function dummyEventListener() {}
const events = (swiper, method)=>{
    const document = (0, _ssrWindow.getDocument)();
    const { params, touchEvents, el, wrapperEl, device, support } = swiper;
    const capture = !!params.nested;
    const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
    const swiperMethod = method; // Touch Events
    if (!support.touch) {
        el[domMethod](touchEvents.start, swiper.onTouchStart, false);
        document[domMethod](touchEvents.move, swiper.onTouchMove, capture);
        document[domMethod](touchEvents.end, swiper.onTouchEnd, false);
    } else {
        const passiveListener = touchEvents.start === "touchstart" && support.passiveListener && params.passiveListeners ? {
            passive: true,
            capture: false
        } : false;
        el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
        el[domMethod](touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
            passive: false,
            capture
        } : capture);
        el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);
        if (touchEvents.cancel) el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
    } // Prevent Links Clicks
    if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
    if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
     // Resize handler
    if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", (0, _onResizeJsDefault.default), true);
    else swiper[swiperMethod]("observerUpdate", (0, _onResizeJsDefault.default), true);
};
function attachEvents() {
    const swiper = this;
    const document = (0, _ssrWindow.getDocument)();
    const { params, support } = swiper;
    swiper.onTouchStart = (0, _onTouchStartJsDefault.default).bind(swiper);
    swiper.onTouchMove = (0, _onTouchMoveJsDefault.default).bind(swiper);
    swiper.onTouchEnd = (0, _onTouchEndJsDefault.default).bind(swiper);
    if (params.cssMode) swiper.onScroll = (0, _onScrollJsDefault.default).bind(swiper);
    swiper.onClick = (0, _onClickJsDefault.default).bind(swiper);
    if (support.touch && !dummyEventAttached) {
        document.addEventListener("touchstart", dummyEventListener);
        dummyEventAttached = true;
    }
    events(swiper, "on");
}
function detachEvents() {
    const swiper = this;
    events(swiper, "off");
}
exports.default = {
    attachEvents,
    detachEvents
};

},{"ssr-window":"3lyfI","./onTouchStart.js":"kkzrg","./onTouchMove.js":"cSIvX","./onTouchEnd.js":"db2nG","./onResize.js":"4q7ER","./onClick.js":"leO2O","./onScroll.js":"ik2Ty","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kkzrg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>onTouchStart);
var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _utilsJs = require("../../shared/utils.js"); // Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd
function closestElement(selector, base = this) {
    function __closestFrom(el) {
        if (!el || el === (0, _ssrWindow.getDocument)() || el === (0, _ssrWindow.getWindow)()) return null;
        if (el.assignedSlot) el = el.assignedSlot;
        const found = el.closest(selector);
        return found || __closestFrom(el.getRootNode().host);
    }
    return __closestFrom(base);
}
function onTouchStart(event) {
    const swiper = this;
    const document = (0, _ssrWindow.getDocument)();
    const window = (0, _ssrWindow.getWindow)();
    const data = swiper.touchEventsData;
    const { params, touches, enabled } = swiper;
    if (!enabled) return;
    if (swiper.animating && params.preventInteractionOnTransition) return;
    if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    let $targetEl = (0, _domJsDefault.default)(e.target);
    if (params.touchEventsTarget === "wrapper") {
        if (!$targetEl.closest(swiper.wrapperEl).length) return;
    }
    data.isTouchEvent = e.type === "touchstart";
    if (!data.isTouchEvent && "which" in e && e.which === 3) return;
    if (!data.isTouchEvent && "button" in e && e.button > 0) return;
    if (data.isTouched && data.isMoved) return; // change target el for shadow root component
    const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
    if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) $targetEl = (0, _domJsDefault.default)(event.path[0]);
    const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
    const isTargetShadow = !!(e.target && e.target.shadowRoot); // use closestElement for shadow root element to get the actual closest for nested shadow root element
    if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, e.target) : $targetEl.closest(noSwipingSelector)[0])) {
        swiper.allowClick = true;
        return;
    }
    if (params.swipeHandler) {
        if (!$targetEl.closest(params.swipeHandler)[0]) return;
    }
    touches.currentX = e.type === "touchstart" ? e.targetTouches[0].pageX : e.pageX;
    touches.currentY = e.type === "touchstart" ? e.targetTouches[0].pageY : e.pageY;
    const startX = touches.currentX;
    const startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore
    const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
    const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
    if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
        if (edgeSwipeDetection === "prevent") event.preventDefault();
        else return;
    }
    Object.assign(data, {
        isTouched: true,
        isMoved: false,
        allowTouchCallbacks: true,
        isScrolling: undefined,
        startMoving: undefined
    });
    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = (0, _utilsJs.now)();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = undefined;
    if (params.threshold > 0) data.allowThresholdMove = false;
    if (e.type !== "touchstart") {
        let preventDefault = true;
        if ($targetEl.is(data.focusableElements)) preventDefault = false;
        if (document.activeElement && (0, _domJsDefault.default)(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) document.activeElement.blur();
        const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
        if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) e.preventDefault();
    }
    swiper.emit("touchStart", e);
}

},{"ssr-window":"3lyfI","../../shared/dom.js":"7pW5q","../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cSIvX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>onTouchMove);
var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _utilsJs = require("../../shared/utils.js");
function onTouchMove(event) {
    const document = (0, _ssrWindow.getDocument)();
    const swiper = this;
    const data = swiper.touchEventsData;
    const { params, touches, rtlTranslate: rtl, enabled } = swiper;
    if (!enabled) return;
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    if (!data.isTouched) {
        if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
        return;
    }
    if (data.isTouchEvent && e.type !== "touchmove") return;
    const targetTouch = e.type === "touchmove" && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
    const pageX = e.type === "touchmove" ? targetTouch.pageX : e.pageX;
    const pageY = e.type === "touchmove" ? targetTouch.pageY : e.pageY;
    if (e.preventedByNestedSwiper) {
        touches.startX = pageX;
        touches.startY = pageY;
        return;
    }
    if (!swiper.allowTouchMove) {
        // isMoved = true;
        swiper.allowClick = false;
        if (data.isTouched) {
            Object.assign(touches, {
                startX: pageX,
                startY: pageY,
                currentX: pageX,
                currentY: pageY
            });
            data.touchStartTime = (0, _utilsJs.now)();
        }
        return;
    }
    if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
        if (swiper.isVertical()) // Vertical
        {
            if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                data.isTouched = false;
                data.isMoved = false;
                return;
            }
        } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
    }
    if (data.isTouchEvent && document.activeElement) {
        if (e.target === document.activeElement && (0, _domJsDefault.default)(e.target).is(data.focusableElements)) {
            data.isMoved = true;
            swiper.allowClick = false;
            return;
        }
    }
    if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
    if (e.targetTouches && e.targetTouches.length > 1) return;
    touches.currentX = pageX;
    touches.currentY = pageY;
    const diffX = touches.currentX - touches.startX;
    const diffY = touches.currentY - touches.startY;
    if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
    if (typeof data.isScrolling === "undefined") {
        let touchAngle;
        if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false;
        else // eslint-disable-next-line
        if (diffX * diffX + diffY * diffY >= 25) {
            touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
            data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
        }
    }
    if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
    if (typeof data.startMoving === "undefined") {
        if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
    }
    if (data.isScrolling) {
        data.isTouched = false;
        return;
    }
    if (!data.startMoving) return;
    swiper.allowClick = false;
    if (!params.cssMode && e.cancelable) e.preventDefault();
    if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
    if (!data.isMoved) {
        if (params.loop && !params.cssMode) swiper.loopFix();
        data.startTranslate = swiper.getTranslate();
        swiper.setTransition(0);
        if (swiper.animating) swiper.$wrapperEl.trigger("webkitTransitionEnd transitionend");
        data.allowMomentumBounce = false; // Grab Cursor
        if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
        swiper.emit("sliderFirstMove", e);
    }
    swiper.emit("sliderMove", e);
    data.isMoved = true;
    let diff = swiper.isHorizontal() ? diffX : diffY;
    touches.diff = diff;
    diff *= params.touchRatio;
    if (rtl) diff = -diff;
    swiper.swipeDirection = diff > 0 ? "prev" : "next";
    data.currentTranslate = diff + data.startTranslate;
    let disableParentSwiper = true;
    let resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) resistanceRatio = 0;
    if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
    } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
    }
    if (disableParentSwiper) e.preventedByNestedSwiper = true;
     // Directions locks
    if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
    if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
    if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
     // Threshold
    if (params.threshold > 0) {
        if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
            if (!data.allowThresholdMove) {
                data.allowThresholdMove = true;
                touches.startX = touches.currentX;
                touches.startY = touches.currentY;
                data.currentTranslate = data.startTranslate;
                touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                return;
            }
        } else {
            data.currentTranslate = data.startTranslate;
            return;
        }
    }
    if (!params.followFinger || params.cssMode) return; // Update active index in free mode
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
    }
    if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
     // Update progress
    swiper.updateProgress(data.currentTranslate); // Update translate
    swiper.setTranslate(data.currentTranslate);
}

},{"ssr-window":"3lyfI","../../shared/dom.js":"7pW5q","../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"db2nG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>onTouchEnd);
var _utilsJs = require("../../shared/utils.js");
function onTouchEnd(event) {
    const swiper = this;
    const data = swiper.touchEventsData;
    const { params, touches, rtlTranslate: rtl, slidesGrid, enabled } = swiper;
    if (!enabled) return;
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
        if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
        data.isMoved = false;
        data.startMoving = false;
        return;
    } // Return Grab Cursor
    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
     // Time diff
    const touchEndTime = (0, _utilsJs.now)();
    const timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click
    if (swiper.allowClick) {
        const pathTree = e.path || e.composedPath && e.composedPath();
        swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
        swiper.emit("tap click", e);
        if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
    }
    data.lastClickTime = (0, _utilsJs.now)();
    (0, _utilsJs.nextTick)(()=>{
        if (!swiper.destroyed) swiper.allowClick = true;
    });
    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
        data.isTouched = false;
        data.isMoved = false;
        data.startMoving = false;
        return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    let currentPos;
    if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate;
    else currentPos = -data.currentTranslate;
    if (params.cssMode) return;
    if (swiper.params.freeMode && params.freeMode.enabled) {
        swiper.freeMode.onTouchEnd({
            currentPos
        });
        return;
    } // Find current slide
    let stopIndex = 0;
    let groupSize = swiper.slidesSizesGrid[0];
    for(let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup){
        const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
        if (typeof slidesGrid[i + increment] !== "undefined") {
            if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                stopIndex = i;
                groupSize = slidesGrid[i + increment] - slidesGrid[i];
            }
        } else if (currentPos >= slidesGrid[i]) {
            stopIndex = i;
            groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
        }
    } // Find current slide size
    const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
    const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (timeDiff > params.longSwipesMs) {
        // Long touches
        if (!params.longSwipes) {
            swiper.slideTo(swiper.activeIndex);
            return;
        }
        if (swiper.swipeDirection === "next") {
            if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + increment);
            else swiper.slideTo(stopIndex);
        }
        if (swiper.swipeDirection === "prev") {
            if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment);
            else swiper.slideTo(stopIndex);
        }
    } else {
        // Short swipes
        if (!params.shortSwipes) {
            swiper.slideTo(swiper.activeIndex);
            return;
        }
        const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
        if (!isNavButtonTarget) {
            if (swiper.swipeDirection === "next") swiper.slideTo(stopIndex + increment);
            if (swiper.swipeDirection === "prev") swiper.slideTo(stopIndex);
        } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment);
        else swiper.slideTo(stopIndex);
    }
}

},{"../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4q7ER":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>onResize);
function onResize() {
    const swiper = this;
    const { params, el } = swiper;
    if (el && el.offsetWidth === 0) return; // Breakpoints
    if (params.breakpoints) swiper.setBreakpoint();
     // Save locks
    const { allowSlideNext, allowSlidePrev, snapGrid } = swiper; // Disable locks on resize
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateSlidesClasses();
    if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    else swiper.slideTo(swiper.activeIndex, 0, false, true);
    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.run();
     // Return locks after resize
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"leO2O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>onClick);
function onClick(e) {
    const swiper = this;
    if (!swiper.enabled) return;
    if (!swiper.allowClick) {
        if (swiper.params.preventClicks) e.preventDefault();
        if (swiper.params.preventClicksPropagation && swiper.animating) {
            e.stopPropagation();
            e.stopImmediatePropagation();
        }
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ik2Ty":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>onScroll);
function onScroll() {
    const swiper = this;
    const { wrapperEl, rtlTranslate, enabled } = swiper;
    if (!enabled) return;
    swiper.previousTranslate = swiper.translate;
    if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft;
    else swiper.translate = -wrapperEl.scrollTop;
     // eslint-disable-next-line
    if (swiper.translate === -0) swiper.translate = 0;
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) newProgress = 0;
    else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
    if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
    swiper.emit("setTranslate", swiper.translate, false);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6sZHb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setBreakpointJs = require("./setBreakpoint.js");
var _setBreakpointJsDefault = parcelHelpers.interopDefault(_setBreakpointJs);
var _getBreakpointJs = require("./getBreakpoint.js");
var _getBreakpointJsDefault = parcelHelpers.interopDefault(_getBreakpointJs);
exports.default = {
    setBreakpoint: (0, _setBreakpointJsDefault.default),
    getBreakpoint: (0, _getBreakpointJsDefault.default)
};

},{"./setBreakpoint.js":"9am8j","./getBreakpoint.js":"dePRa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9am8j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>setBreakpoint);
var _utilsJs = require("../../shared/utils.js");
const isGridEnabled = (swiper, params)=>{
    return swiper.grid && params.grid && params.grid.rows > 1;
};
function setBreakpoint() {
    const swiper = this;
    const { activeIndex, initialized, loopedSlides = 0, params, $el } = swiper;
    const breakpoints = params.breakpoints;
    if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters
    const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
    if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
    const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
    const breakpointParams = breakpointOnlyParams || swiper.originalParams;
    const wasMultiRow = isGridEnabled(swiper, params);
    const isMultiRow = isGridEnabled(swiper, breakpointParams);
    const wasEnabled = params.enabled;
    if (wasMultiRow && !isMultiRow) {
        $el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`);
        swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
        $el.addClass(`${params.containerModifierClass}grid`);
        if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") $el.addClass(`${params.containerModifierClass}grid-column`);
        swiper.emitContainerClasses();
    }
    const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
    const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
    if (directionChanged && initialized) swiper.changeDirection();
    (0, _utilsJs.extend)(swiper.params, breakpointParams);
    const isEnabled = swiper.params.enabled;
    Object.assign(swiper, {
        allowTouchMove: swiper.params.allowTouchMove,
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev
    });
    if (wasEnabled && !isEnabled) swiper.disable();
    else if (!wasEnabled && isEnabled) swiper.enable();
    swiper.currentBreakpoint = breakpoint;
    swiper.emit("_beforeBreakpoint", breakpointParams);
    if (needsReLoop && initialized) {
        swiper.loopDestroy();
        swiper.loopCreate();
        swiper.updateSlides();
        swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
    }
    swiper.emit("breakpoint", breakpointParams);
}

},{"../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dePRa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getBreakpoint);
var _ssrWindow = require("ssr-window");
function getBreakpoint(breakpoints, base = "window", containerEl) {
    if (!breakpoints || base === "container" && !containerEl) return undefined;
    let breakpoint = false;
    const window = (0, _ssrWindow.getWindow)();
    const currentHeight = base === "window" ? window.innerHeight : containerEl.clientHeight;
    const points = Object.keys(breakpoints).map((point)=>{
        if (typeof point === "string" && point.indexOf("@") === 0) {
            const minRatio = parseFloat(point.substr(1));
            const value = currentHeight * minRatio;
            return {
                value,
                point
            };
        }
        return {
            value: point,
            point
        };
    });
    points.sort((a, b)=>parseInt(a.value, 10) - parseInt(b.value, 10));
    for(let i = 0; i < points.length; i += 1){
        const { point, value } = points[i];
        if (base === "window") {
            if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
        } else if (value <= containerEl.clientWidth) breakpoint = point;
    }
    return breakpoint || "max";
}

},{"ssr-window":"3lyfI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dJ7YF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _addClassesJs = require("./addClasses.js");
var _addClassesJsDefault = parcelHelpers.interopDefault(_addClassesJs);
var _removeClassesJs = require("./removeClasses.js");
var _removeClassesJsDefault = parcelHelpers.interopDefault(_removeClassesJs);
exports.default = {
    addClasses: (0, _addClassesJsDefault.default),
    removeClasses: (0, _removeClassesJsDefault.default)
};

},{"./addClasses.js":"2wJnK","./removeClasses.js":"bfksE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2wJnK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>addClasses);
function prepareClasses(entries, prefix) {
    const resultClasses = [];
    entries.forEach((item)=>{
        if (typeof item === "object") Object.keys(item).forEach((classNames)=>{
            if (item[classNames]) resultClasses.push(prefix + classNames);
        });
        else if (typeof item === "string") resultClasses.push(prefix + item);
    });
    return resultClasses;
}
function addClasses() {
    const swiper = this;
    const { classNames, params, rtl, $el, device, support } = swiper; // prettier-ignore
    const suffixes = prepareClasses([
        "initialized",
        params.direction,
        {
            "pointer-events": !support.touch
        },
        {
            "free-mode": swiper.params.freeMode && params.freeMode.enabled
        },
        {
            "autoheight": params.autoHeight
        },
        {
            "rtl": rtl
        },
        {
            "grid": params.grid && params.grid.rows > 1
        },
        {
            "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
        },
        {
            "android": device.android
        },
        {
            "ios": device.ios
        },
        {
            "css-mode": params.cssMode
        },
        {
            "centered": params.cssMode && params.centeredSlides
        }
    ], params.containerModifierClass);
    classNames.push(...suffixes);
    $el.addClass([
        ...classNames
    ].join(" "));
    swiper.emitContainerClasses();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bfksE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>removeClasses);
function removeClasses() {
    const swiper = this;
    const { $el, classNames } = swiper;
    $el.removeClass(classNames.join(" "));
    swiper.emitContainerClasses();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4xpbQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _loadImageJs = require("./loadImage.js");
var _loadImageJsDefault = parcelHelpers.interopDefault(_loadImageJs);
var _preloadImagesJs = require("./preloadImages.js");
var _preloadImagesJsDefault = parcelHelpers.interopDefault(_preloadImagesJs);
exports.default = {
    loadImage: (0, _loadImageJsDefault.default),
    preloadImages: (0, _preloadImagesJsDefault.default)
};

},{"./loadImage.js":"lapsD","./preloadImages.js":"4DDtH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lapsD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>loadImage);
var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
    const window = (0, _ssrWindow.getWindow)();
    let image;
    function onReady() {
        if (callback) callback();
    }
    const isPicture = (0, _domJsDefault.default)(imageEl).parent("picture")[0];
    if (!isPicture && (!imageEl.complete || !checkForComplete)) {
        if (src) {
            image = new window.Image();
            image.onload = onReady;
            image.onerror = onReady;
            if (sizes) image.sizes = sizes;
            if (srcset) image.srcset = srcset;
            if (src) image.src = src;
        } else onReady();
    } else // image already loaded...
    onReady();
}

},{"ssr-window":"3lyfI","../../shared/dom.js":"7pW5q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4DDtH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>preloadImages);
function preloadImages() {
    const swiper = this;
    swiper.imagesToLoad = swiper.$el.find("img");
    function onReady() {
        if (typeof swiper === "undefined" || swiper === null || !swiper || swiper.destroyed) return;
        if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;
        if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
            if (swiper.params.updateOnImagesReady) swiper.update();
            swiper.emit("imagesReady");
        }
    }
    for(let i = 0; i < swiper.imagesToLoad.length; i += 1){
        const imageEl = swiper.imagesToLoad[i];
        swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute("src"), imageEl.srcset || imageEl.getAttribute("srcset"), imageEl.sizes || imageEl.getAttribute("sizes"), true, onReady);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cCZBR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function checkOverflow() {
    const swiper = this;
    const { isLocked: wasLocked, params } = swiper;
    const { slidesOffsetBefore } = params;
    if (slidesOffsetBefore) {
        const lastSlideIndex = swiper.slides.length - 1;
        const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
        swiper.isLocked = swiper.size > lastSlideRightEdge;
    } else swiper.isLocked = swiper.snapGrid.length === 1;
    if (params.allowSlideNext === true) swiper.allowSlideNext = !swiper.isLocked;
    if (params.allowSlidePrev === true) swiper.allowSlidePrev = !swiper.isLocked;
    if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
    if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
}
exports.default = {
    checkOverflow
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jwKb5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    init: true,
    direction: "horizontal",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: false,
    updateOnWindowResize: true,
    resizeObserver: true,
    nested: false,
    createElements: false,
    enabled: true,
    focusableElements: "input, select, option, textarea, button, video, label",
    // Overrides
    width: null,
    height: null,
    //
    preventInteractionOnTransition: false,
    // ssr
    userAgent: null,
    url: null,
    // To support iOS's swipe-to-go-back gesture (when being used in-app).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,
    // Autoheight
    autoHeight: false,
    // Set wrapper width
    setWrapperSize: false,
    // Virtual Translate
    virtualTranslate: false,
    // Effects
    effect: "slide",
    // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
    // Breakpoints
    breakpoints: undefined,
    breakpointsBase: "window",
    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: false,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0,
    // in px
    slidesOffsetAfter: 0,
    // in px
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,
    // Disable swiper and hide navigation when container not overflow
    watchOverflow: true,
    // Round length
    roundLengths: false,
    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 0,
    touchMoveStopPropagation: false,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,
    // Unique Navigation Elements
    uniqueNavElements: true,
    // Resistance
    resistance: true,
    resistanceRatio: 0.85,
    // Progress
    watchSlidesProgress: false,
    // Cursor
    grabCursor: false,
    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    // Images
    preloadImages: true,
    updateOnImagesReady: true,
    // loop
    loop: false,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: false,
    loopPreventsSlide: true,
    // rewind
    rewind: false,
    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null,
    // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    // Passive Listeners
    passiveListeners: true,
    // NS
    containerModifierClass: "swiper-",
    // NEW
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    // Callbacks
    runCallbacksOnInit: true,
    // Internals
    _emitClasses: false
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2G6E7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>moduleExtendParams);
var _utilsJs = require("../shared/utils.js");
function moduleExtendParams(params, allModulesParams) {
    return function extendParams(obj = {}) {
        const moduleParamName = Object.keys(obj)[0];
        const moduleParams = obj[moduleParamName];
        if (typeof moduleParams !== "object" || moduleParams === null) {
            (0, _utilsJs.extend)(allModulesParams, obj);
            return;
        }
        if ([
            "navigation",
            "pagination",
            "scrollbar"
        ].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) params[moduleParamName] = {
            auto: true
        };
        if (!(moduleParamName in params && "enabled" in moduleParams)) {
            (0, _utilsJs.extend)(allModulesParams, obj);
            return;
        }
        if (params[moduleParamName] === true) params[moduleParamName] = {
            enabled: true
        };
        if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
        if (!params[moduleParamName]) params[moduleParamName] = {
            enabled: false
        };
        (0, _utilsJs.extend)(allModulesParams, obj);
    };
}

},{"../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"13JV9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Virtual);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _utilsJs = require("../../shared/utils.js");
function Virtual({ swiper, extendParams, on }) {
    extendParams({
        virtual: {
            enabled: false,
            slides: [],
            cache: true,
            renderSlide: null,
            renderExternal: null,
            renderExternalUpdate: true,
            addSlidesBefore: 0,
            addSlidesAfter: 0
        }
    });
    let cssModeTimeout;
    swiper.virtual = {
        cache: {},
        from: undefined,
        to: undefined,
        slides: [],
        offset: 0,
        slidesGrid: []
    };
    function renderSlide(slide, index) {
        const params = swiper.params.virtual;
        if (params.cache && swiper.virtual.cache[index]) return swiper.virtual.cache[index];
        const $slideEl = params.renderSlide ? (0, _domJsDefault.default)(params.renderSlide.call(swiper, slide, index)) : (0, _domJsDefault.default)(`<div class="${swiper.params.slideClass}" data-swiper-slide-index="${index}">${slide}</div>`);
        if (!$slideEl.attr("data-swiper-slide-index")) $slideEl.attr("data-swiper-slide-index", index);
        if (params.cache) swiper.virtual.cache[index] = $slideEl;
        return $slideEl;
    }
    function update(force) {
        const { slidesPerView, slidesPerGroup, centeredSlides } = swiper.params;
        const { addSlidesBefore, addSlidesAfter } = swiper.params.virtual;
        const { from: previousFrom, to: previousTo, slides, slidesGrid: previousSlidesGrid, offset: previousOffset } = swiper.virtual;
        if (!swiper.params.cssMode) swiper.updateActiveIndex();
        const activeIndex = swiper.activeIndex || 0;
        let offsetProp;
        if (swiper.rtlTranslate) offsetProp = "right";
        else offsetProp = swiper.isHorizontal() ? "left" : "top";
        let slidesAfter;
        let slidesBefore;
        if (centeredSlides) {
            slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
            slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
        } else {
            slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
            slidesBefore = slidesPerGroup + addSlidesBefore;
        }
        const from = Math.max((activeIndex || 0) - slidesBefore, 0);
        const to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
        const offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
        Object.assign(swiper.virtual, {
            from,
            to,
            offset,
            slidesGrid: swiper.slidesGrid
        });
        function onRendered() {
            swiper.updateSlides();
            swiper.updateProgress();
            swiper.updateSlidesClasses();
            if (swiper.lazy && swiper.params.lazy.enabled) swiper.lazy.load();
        }
        if (previousFrom === from && previousTo === to && !force) {
            if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) swiper.slides.css(offsetProp, `${offset}px`);
            swiper.updateProgress();
            return;
        }
        if (swiper.params.virtual.renderExternal) {
            swiper.params.virtual.renderExternal.call(swiper, {
                offset,
                from,
                to,
                slides: function getSlides() {
                    const slidesToRender = [];
                    for(let i = from; i <= to; i += 1)slidesToRender.push(slides[i]);
                    return slidesToRender;
                }()
            });
            if (swiper.params.virtual.renderExternalUpdate) onRendered();
            return;
        }
        const prependIndexes = [];
        const appendIndexes = [];
        if (force) swiper.$wrapperEl.find(`.${swiper.params.slideClass}`).remove();
        else {
            for(let i = previousFrom; i <= previousTo; i += 1)if (i < from || i > to) swiper.$wrapperEl.find(`.${swiper.params.slideClass}[data-swiper-slide-index="${i}"]`).remove();
        }
        for(let i = 0; i < slides.length; i += 1)if (i >= from && i <= to) {
            if (typeof previousTo === "undefined" || force) appendIndexes.push(i);
            else {
                if (i > previousTo) appendIndexes.push(i);
                if (i < previousFrom) prependIndexes.push(i);
            }
        }
        appendIndexes.forEach((index)=>{
            swiper.$wrapperEl.append(renderSlide(slides[index], index));
        });
        prependIndexes.sort((a, b)=>b - a).forEach((index)=>{
            swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
        });
        swiper.$wrapperEl.children(".swiper-slide").css(offsetProp, `${offset}px`);
        onRendered();
    }
    function appendSlide(slides) {
        if (typeof slides === "object" && "length" in slides) {
            for(let i = 0; i < slides.length; i += 1)if (slides[i]) swiper.virtual.slides.push(slides[i]);
        } else swiper.virtual.slides.push(slides);
        update(true);
    }
    function prependSlide(slides) {
        const activeIndex = swiper.activeIndex;
        let newActiveIndex = activeIndex + 1;
        let numberOfNewSlides = 1;
        if (Array.isArray(slides)) {
            for(let i = 0; i < slides.length; i += 1)if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
            newActiveIndex = activeIndex + slides.length;
            numberOfNewSlides = slides.length;
        } else swiper.virtual.slides.unshift(slides);
        if (swiper.params.virtual.cache) {
            const cache = swiper.virtual.cache;
            const newCache = {};
            Object.keys(cache).forEach((cachedIndex)=>{
                const $cachedEl = cache[cachedIndex];
                const cachedElIndex = $cachedEl.attr("data-swiper-slide-index");
                if (cachedElIndex) $cachedEl.attr("data-swiper-slide-index", parseInt(cachedElIndex, 10) + numberOfNewSlides);
                newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
            });
            swiper.virtual.cache = newCache;
        }
        update(true);
        swiper.slideTo(newActiveIndex, 0);
    }
    function removeSlide(slidesIndexes) {
        if (typeof slidesIndexes === "undefined" || slidesIndexes === null) return;
        let activeIndex = swiper.activeIndex;
        if (Array.isArray(slidesIndexes)) for(let i = slidesIndexes.length - 1; i >= 0; i -= 1){
            swiper.virtual.slides.splice(slidesIndexes[i], 1);
            if (swiper.params.virtual.cache) delete swiper.virtual.cache[slidesIndexes[i]];
            if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
            activeIndex = Math.max(activeIndex, 0);
        }
        else {
            swiper.virtual.slides.splice(slidesIndexes, 1);
            if (swiper.params.virtual.cache) delete swiper.virtual.cache[slidesIndexes];
            if (slidesIndexes < activeIndex) activeIndex -= 1;
            activeIndex = Math.max(activeIndex, 0);
        }
        update(true);
        swiper.slideTo(activeIndex, 0);
    }
    function removeAllSlides() {
        swiper.virtual.slides = [];
        if (swiper.params.virtual.cache) swiper.virtual.cache = {};
        update(true);
        swiper.slideTo(0, 0);
    }
    on("beforeInit", ()=>{
        if (!swiper.params.virtual.enabled) return;
        swiper.virtual.slides = swiper.params.virtual.slides;
        swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
        if (!swiper.params.initialSlide) update();
    });
    on("setTranslate", ()=>{
        if (!swiper.params.virtual.enabled) return;
        if (swiper.params.cssMode && !swiper._immediateVirtual) {
            clearTimeout(cssModeTimeout);
            cssModeTimeout = setTimeout(()=>{
                update();
            }, 100);
        } else update();
    });
    on("init update resize", ()=>{
        if (!swiper.params.virtual.enabled) return;
        if (swiper.params.cssMode) (0, _utilsJs.setCSSProperty)(swiper.wrapperEl, "--swiper-virtual-size", `${swiper.virtualSize}px`);
    });
    Object.assign(swiper.virtual, {
        appendSlide,
        prependSlide,
        removeSlide,
        removeAllSlides,
        update
    });
}

},{"../../shared/dom.js":"7pW5q","../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"82wTs":[function(require,module,exports) {
/* eslint-disable consistent-return */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Keyboard);
var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function Keyboard({ swiper, extendParams, on, emit }) {
    const document = (0, _ssrWindow.getDocument)();
    const window = (0, _ssrWindow.getWindow)();
    swiper.keyboard = {
        enabled: false
    };
    extendParams({
        keyboard: {
            enabled: false,
            onlyInViewport: true,
            pageUpDown: true
        }
    });
    function handle(event) {
        if (!swiper.enabled) return;
        const { rtlTranslate: rtl } = swiper;
        let e = event;
        if (e.originalEvent) e = e.originalEvent; // jquery fix
        const kc = e.keyCode || e.charCode;
        const pageUpDown = swiper.params.keyboard.pageUpDown;
        const isPageUp = pageUpDown && kc === 33;
        const isPageDown = pageUpDown && kc === 34;
        const isArrowLeft = kc === 37;
        const isArrowRight = kc === 39;
        const isArrowUp = kc === 38;
        const isArrowDown = kc === 40; // Directions locks
        if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) return false;
        if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) return false;
        if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return undefined;
        if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === "input" || document.activeElement.nodeName.toLowerCase() === "textarea")) return undefined;
        if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
            let inView = false; // Check that swiper should be inside of visible area of window
            if (swiper.$el.parents(`.${swiper.params.slideClass}`).length > 0 && swiper.$el.parents(`.${swiper.params.slideActiveClass}`).length === 0) return undefined;
            const $el = swiper.$el;
            const swiperWidth = $el[0].clientWidth;
            const swiperHeight = $el[0].clientHeight;
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const swiperOffset = swiper.$el.offset();
            if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
            const swiperCoord = [
                [
                    swiperOffset.left,
                    swiperOffset.top
                ],
                [
                    swiperOffset.left + swiperWidth,
                    swiperOffset.top
                ],
                [
                    swiperOffset.left,
                    swiperOffset.top + swiperHeight
                ],
                [
                    swiperOffset.left + swiperWidth,
                    swiperOffset.top + swiperHeight
                ]
            ];
            for(let i = 0; i < swiperCoord.length; i += 1){
                const point = swiperCoord[i];
                if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
                    if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
                    inView = true;
                }
            }
            if (!inView) return undefined;
        }
        if (swiper.isHorizontal()) {
            if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
            }
            if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
            if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
        } else {
            if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
            }
            if (isPageDown || isArrowDown) swiper.slideNext();
            if (isPageUp || isArrowUp) swiper.slidePrev();
        }
        emit("keyPress", kc);
        return undefined;
    }
    function enable() {
        if (swiper.keyboard.enabled) return;
        (0, _domJsDefault.default)(document).on("keydown", handle);
        swiper.keyboard.enabled = true;
    }
    function disable() {
        if (!swiper.keyboard.enabled) return;
        (0, _domJsDefault.default)(document).off("keydown", handle);
        swiper.keyboard.enabled = false;
    }
    on("init", ()=>{
        if (swiper.params.keyboard.enabled) enable();
    });
    on("destroy", ()=>{
        if (swiper.keyboard.enabled) disable();
    });
    Object.assign(swiper.keyboard, {
        enable,
        disable
    });
}

},{"ssr-window":"3lyfI","../../shared/dom.js":"7pW5q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dP6Ui":[function(require,module,exports) {
/* eslint-disable consistent-return */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Mousewheel);
var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _utilsJs = require("../../shared/utils.js");
function Mousewheel({ swiper, extendParams, on, emit }) {
    const window = (0, _ssrWindow.getWindow)();
    extendParams({
        mousewheel: {
            enabled: false,
            releaseOnEdges: false,
            invert: false,
            forceToAxis: false,
            sensitivity: 1,
            eventsTarget: "container",
            thresholdDelta: null,
            thresholdTime: null
        }
    });
    swiper.mousewheel = {
        enabled: false
    };
    let timeout;
    let lastScrollTime = (0, _utilsJs.now)();
    let lastEventBeforeSnap;
    const recentWheelEvents = [];
    function normalize(e) {
        // Reasonable defaults
        const PIXEL_STEP = 10;
        const LINE_HEIGHT = 40;
        const PAGE_HEIGHT = 800;
        let sX = 0;
        let sY = 0; // spinX, spinY
        let pX = 0;
        let pY = 0; // pixelX, pixelY
        // Legacy
        if ("detail" in e) sY = e.detail;
        if ("wheelDelta" in e) sY = -e.wheelDelta / 120;
        if ("wheelDeltaY" in e) sY = -e.wheelDeltaY / 120;
        if ("wheelDeltaX" in e) sX = -e.wheelDeltaX / 120;
         // side scrolling on FF with DOMMouseScroll
        if ("axis" in e && e.axis === e.HORIZONTAL_AXIS) {
            sX = sY;
            sY = 0;
        }
        pX = sX * PIXEL_STEP;
        pY = sY * PIXEL_STEP;
        if ("deltaY" in e) pY = e.deltaY;
        if ("deltaX" in e) pX = e.deltaX;
        if (e.shiftKey && !pX) {
            // if user scrolls with shift he wants horizontal scroll
            pX = pY;
            pY = 0;
        }
        if ((pX || pY) && e.deltaMode) {
            if (e.deltaMode === 1) {
                // delta in LINE units
                pX *= LINE_HEIGHT;
                pY *= LINE_HEIGHT;
            } else {
                // delta in PAGE units
                pX *= PAGE_HEIGHT;
                pY *= PAGE_HEIGHT;
            }
        } // Fall-back if spin cannot be determined
        if (pX && !sX) sX = pX < 1 ? -1 : 1;
        if (pY && !sY) sY = pY < 1 ? -1 : 1;
        return {
            spinX: sX,
            spinY: sY,
            pixelX: pX,
            pixelY: pY
        };
    }
    function handleMouseEnter() {
        if (!swiper.enabled) return;
        swiper.mouseEntered = true;
    }
    function handleMouseLeave() {
        if (!swiper.enabled) return;
        swiper.mouseEntered = false;
    }
    function animateSlider(newEvent) {
        if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) // Prevent if delta of wheel scroll delta is below configured threshold
        return false;
        if (swiper.params.mousewheel.thresholdTime && (0, _utilsJs.now)() - lastScrollTime < swiper.params.mousewheel.thresholdTime) // Prevent if time between scrolls is below configured threshold
        return false;
         // If the movement is NOT big enough and
        // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
        //   Don't go any further (avoid insignificant scroll movement).
        if (newEvent.delta >= 6 && (0, _utilsJs.now)() - lastScrollTime < 60) // Return false as a default
        return true;
         // If user is scrolling towards the end:
        //   If the slider hasn't hit the latest slide or
        //   if the slider is a loop and
        //   if the slider isn't moving right now:
        //     Go to next slide and
        //     emit a scroll event.
        // Else (the user is scrolling towards the beginning) and
        // if the slider hasn't hit the first slide or
        // if the slider is a loop and
        // if the slider isn't moving right now:
        //   Go to prev slide and
        //   emit a scroll event.
        if (newEvent.direction < 0) {
            if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
                swiper.slideNext();
                emit("scroll", newEvent.raw);
            }
        } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
            swiper.slidePrev();
            emit("scroll", newEvent.raw);
        } // If you got here is because an animation has been triggered so store the current time
        lastScrollTime = new window.Date().getTime(); // Return false as a default
        return false;
    }
    function releaseScroll(newEvent) {
        const params = swiper.params.mousewheel;
        if (newEvent.direction < 0) {
            if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) // Return true to animate scroll on edges
            return true;
        } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) // Return true to animate scroll on edges
        return true;
        return false;
    }
    function handle(event1) {
        let e = event1;
        let disableParentSwiper = true;
        if (!swiper.enabled) return;
        const params = swiper.params.mousewheel;
        if (swiper.params.cssMode) e.preventDefault();
        let target = swiper.$el;
        if (swiper.params.mousewheel.eventsTarget !== "container") target = (0, _domJsDefault.default)(swiper.params.mousewheel.eventsTarget);
        if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;
        if (e.originalEvent) e = e.originalEvent; // jquery fix
        let delta = 0;
        const rtlFactor = swiper.rtlTranslate ? -1 : 1;
        const data = normalize(e);
        if (params.forceToAxis) {
            if (swiper.isHorizontal()) {
                if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;
                else return true;
            } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;
            else return true;
        } else delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
        if (delta === 0) return true;
        if (params.invert) delta = -delta; // Get the scroll positions
        let positions = swiper.getTranslate() + delta * params.sensitivity;
        if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
        if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate(); // When loop is true:
        //     the disableParentSwiper will be true.
        // When loop is false:
        //     if the scroll positions is not on edge,
        //     then the disableParentSwiper will be true.
        //     if the scroll on edge positions,
        //     then the disableParentSwiper will be false.
        disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
        if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
        if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
            // Register the new event in a variable which stores the relevant data
            const newEvent = {
                time: (0, _utilsJs.now)(),
                delta: Math.abs(delta),
                direction: Math.sign(delta),
                raw: event1
            }; // Keep the most recent events
            if (recentWheelEvents.length >= 2) recentWheelEvents.shift(); // only store the last N events
            const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
            recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:
            //   If direction has changed or
            //   if the scroll is quicker than the previous one:
            //     Animate the slider.
            // Else (this is the first time the wheel is moved):
            //     Animate the slider.
            if (prevEvent) {
                if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) animateSlider(newEvent);
            } else animateSlider(newEvent);
             // If it's time to release the scroll:
            //   Return now so you don't hit the preventDefault.
            if (releaseScroll(newEvent)) return true;
        } else {
            // Freemode or scrollContainer:
            // If we recently snapped after a momentum scroll, then ignore wheel events
            // to give time for the deceleration to finish. Stop ignoring after 500 msecs
            // or if it's a new scroll (larger delta or inverse sign as last event before
            // an end-of-momentum snap).
            const newEvent = {
                time: (0, _utilsJs.now)(),
                delta: Math.abs(delta),
                direction: Math.sign(delta)
            };
            const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
            if (!ignoreWheelEvents) {
                lastEventBeforeSnap = undefined;
                if (swiper.params.loop) swiper.loopFix();
                let position = swiper.getTranslate() + delta * params.sensitivity;
                const wasBeginning = swiper.isBeginning;
                const wasEnd = swiper.isEnd;
                if (position >= swiper.minTranslate()) position = swiper.minTranslate();
                if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
                swiper.setTransition(0);
                swiper.setTranslate(position);
                swiper.updateProgress();
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
                if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) swiper.updateSlidesClasses();
                if (swiper.params.freeMode.sticky) {
                    // When wheel scrolling starts with sticky (aka snap) enabled, then detect
                    // the end of a momentum scroll by storing recent (N=15?) wheel events.
                    // 1. do all N events have decreasing or same (absolute value) delta?
                    // 2. did all N events arrive in the last M (M=500?) msecs?
                    // 3. does the earliest event have an (absolute value) delta that's
                    //    at least P (P=1?) larger than the most recent event's delta?
                    // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
                    // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
                    // Snap immediately and ignore remaining wheel events in this scroll.
                    // See comment above for "remaining wheel events in this scroll" determination.
                    // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
                    clearTimeout(timeout);
                    timeout = undefined;
                    if (recentWheelEvents.length >= 15) recentWheelEvents.shift(); // only store the last N events
                    const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
                    const firstEvent = recentWheelEvents[0];
                    recentWheelEvents.push(newEvent);
                    if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
                    recentWheelEvents.splice(0);
                    else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
                        // We're at the end of the deceleration of a momentum scroll, so there's no need
                        // to wait for more events. Snap ASAP on the next tick.
                        // Also, because there's some remaining momentum we'll bias the snap in the
                        // direction of the ongoing scroll because it's better UX for the scroll to snap
                        // in the same direction as the scroll instead of reversing to snap.  Therefore,
                        // if it's already scrolled more than 20% in the current direction, keep going.
                        const snapToThreshold = delta > 0 ? 0.8 : 0.2;
                        lastEventBeforeSnap = newEvent;
                        recentWheelEvents.splice(0);
                        timeout = (0, _utilsJs.nextTick)(()=>{
                            swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                        }, 0); // no delay; move on next tick
                    }
                    if (!timeout) // if we get here, then we haven't detected the end of a momentum scroll, so
                    // we'll consider a scroll "complete" when there haven't been any wheel events
                    // for 500ms.
                    timeout = (0, _utilsJs.nextTick)(()=>{
                        const snapToThreshold = 0.5;
                        lastEventBeforeSnap = newEvent;
                        recentWheelEvents.splice(0);
                        swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                    }, 500);
                } // Emit event
                if (!ignoreWheelEvents) emit("scroll", e); // Stop autoplay
                if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop(); // Return page scroll on edge positions
                if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
            }
        }
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
        return false;
    }
    function events(method) {
        let target = swiper.$el;
        if (swiper.params.mousewheel.eventsTarget !== "container") target = (0, _domJsDefault.default)(swiper.params.mousewheel.eventsTarget);
        target[method]("mouseenter", handleMouseEnter);
        target[method]("mouseleave", handleMouseLeave);
        target[method]("wheel", handle);
    }
    function enable() {
        if (swiper.params.cssMode) {
            swiper.wrapperEl.removeEventListener("wheel", handle);
            return true;
        }
        if (swiper.mousewheel.enabled) return false;
        events("on");
        swiper.mousewheel.enabled = true;
        return true;
    }
    function disable() {
        if (swiper.params.cssMode) {
            swiper.wrapperEl.addEventListener(event, handle);
            return true;
        }
        if (!swiper.mousewheel.enabled) return false;
        events("off");
        swiper.mousewheel.enabled = false;
        return true;
    }
    on("init", ()=>{
        if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) disable();
        if (swiper.params.mousewheel.enabled) enable();
    });
    on("destroy", ()=>{
        if (swiper.params.cssMode) enable();
        if (swiper.mousewheel.enabled) disable();
    });
    Object.assign(swiper.mousewheel, {
        enable,
        disable
    });
}

},{"ssr-window":"3lyfI","../../shared/dom.js":"7pW5q","../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lGdRo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Navigation);
var _createElementIfNotDefinedJs = require("../../shared/create-element-if-not-defined.js");
var _createElementIfNotDefinedJsDefault = parcelHelpers.interopDefault(_createElementIfNotDefinedJs);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function Navigation({ swiper, extendParams, on, emit }) {
    extendParams({
        navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: false,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock"
        }
    });
    swiper.navigation = {
        nextEl: null,
        $nextEl: null,
        prevEl: null,
        $prevEl: null
    };
    function getEl(el) {
        let $el;
        if (el) {
            $el = (0, _domJsDefault.default)(el);
            if (swiper.params.uniqueNavElements && typeof el === "string" && $el.length > 1 && swiper.$el.find(el).length === 1) $el = swiper.$el.find(el);
        }
        return $el;
    }
    function toggleEl($el, disabled) {
        const params = swiper.params.navigation;
        if ($el && $el.length > 0) {
            $el[disabled ? "addClass" : "removeClass"](params.disabledClass);
            if ($el[0] && $el[0].tagName === "BUTTON") $el[0].disabled = disabled;
            if (swiper.params.watchOverflow && swiper.enabled) $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
        }
    }
    function update() {
        // Update Navigation Buttons
        if (swiper.params.loop) return;
        const { $nextEl, $prevEl } = swiper.navigation;
        toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind);
        toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind);
    }
    function onPrevClick(e) {
        e.preventDefault();
        if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
        swiper.slidePrev();
    }
    function onNextClick(e) {
        e.preventDefault();
        if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
        swiper.slideNext();
    }
    function init() {
        const params = swiper.params.navigation;
        swiper.params.navigation = (0, _createElementIfNotDefinedJsDefault.default)(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
            nextEl: "swiper-button-next",
            prevEl: "swiper-button-prev"
        });
        if (!(params.nextEl || params.prevEl)) return;
        const $nextEl = getEl(params.nextEl);
        const $prevEl = getEl(params.prevEl);
        if ($nextEl && $nextEl.length > 0) $nextEl.on("click", onNextClick);
        if ($prevEl && $prevEl.length > 0) $prevEl.on("click", onPrevClick);
        Object.assign(swiper.navigation, {
            $nextEl,
            nextEl: $nextEl && $nextEl[0],
            $prevEl,
            prevEl: $prevEl && $prevEl[0]
        });
        if (!swiper.enabled) {
            if ($nextEl) $nextEl.addClass(params.lockClass);
            if ($prevEl) $prevEl.addClass(params.lockClass);
        }
    }
    function destroy() {
        const { $nextEl, $prevEl } = swiper.navigation;
        if ($nextEl && $nextEl.length) {
            $nextEl.off("click", onNextClick);
            $nextEl.removeClass(swiper.params.navigation.disabledClass);
        }
        if ($prevEl && $prevEl.length) {
            $prevEl.off("click", onPrevClick);
            $prevEl.removeClass(swiper.params.navigation.disabledClass);
        }
    }
    on("init", ()=>{
        init();
        update();
    });
    on("toEdge fromEdge lock unlock", ()=>{
        update();
    });
    on("destroy", ()=>{
        destroy();
    });
    on("enable disable", ()=>{
        const { $nextEl, $prevEl } = swiper.navigation;
        if ($nextEl) $nextEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
        if ($prevEl) $prevEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
    });
    on("click", (_s, e)=>{
        const { $nextEl, $prevEl } = swiper.navigation;
        const targetEl = e.target;
        if (swiper.params.navigation.hideOnClick && !(0, _domJsDefault.default)(targetEl).is($prevEl) && !(0, _domJsDefault.default)(targetEl).is($nextEl)) {
            if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
            let isHidden;
            if ($nextEl) isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
            else if ($prevEl) isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
            if (isHidden === true) emit("navigationShow");
            else emit("navigationHide");
            if ($nextEl) $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
            if ($prevEl) $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
        }
    });
    Object.assign(swiper.navigation, {
        update,
        init,
        destroy
    });
}

},{"../../shared/create-element-if-not-defined.js":"4uqq0","../../shared/dom.js":"7pW5q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4uqq0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>createElementIfNotDefined);
var _ssrWindow = require("ssr-window");
function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
    const document = (0, _ssrWindow.getDocument)();
    if (swiper.params.createElements) Object.keys(checkProps).forEach((key)=>{
        if (!params[key] && params.auto === true) {
            let element = swiper.$el.children(`.${checkProps[key]}`)[0];
            if (!element) {
                element = document.createElement("div");
                element.className = checkProps[key];
                swiper.$el.append(element);
            }
            params[key] = element;
            originalParams[key] = element;
        }
    });
    return params;
}

},{"ssr-window":"3lyfI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"40Lys":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Pagination);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _classesToSelectorJs = require("../../shared/classes-to-selector.js");
var _classesToSelectorJsDefault = parcelHelpers.interopDefault(_classesToSelectorJs);
var _createElementIfNotDefinedJs = require("../../shared/create-element-if-not-defined.js");
var _createElementIfNotDefinedJsDefault = parcelHelpers.interopDefault(_createElementIfNotDefinedJs);
function Pagination({ swiper, extendParams, on, emit }) {
    const pfx = "swiper-pagination";
    extendParams({
        pagination: {
            el: null,
            bulletElement: "span",
            clickable: false,
            hideOnClick: false,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: false,
            type: "bullets",
            // 'bullets' or 'progressbar' or 'fraction' or 'custom'
            dynamicBullets: false,
            dynamicMainBullets: 1,
            formatFractionCurrent: (number)=>number,
            formatFractionTotal: (number)=>number,
            bulletClass: `${pfx}-bullet`,
            bulletActiveClass: `${pfx}-bullet-active`,
            modifierClass: `${pfx}-`,
            currentClass: `${pfx}-current`,
            totalClass: `${pfx}-total`,
            hiddenClass: `${pfx}-hidden`,
            progressbarFillClass: `${pfx}-progressbar-fill`,
            progressbarOppositeClass: `${pfx}-progressbar-opposite`,
            clickableClass: `${pfx}-clickable`,
            lockClass: `${pfx}-lock`,
            horizontalClass: `${pfx}-horizontal`,
            verticalClass: `${pfx}-vertical`
        }
    });
    swiper.pagination = {
        el: null,
        $el: null,
        bullets: []
    };
    let bulletSize;
    let dynamicBulletIndex = 0;
    function isPaginationDisabled() {
        return !swiper.params.pagination.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0;
    }
    function setSideBullets($bulletEl, position) {
        const { bulletActiveClass } = swiper.params.pagination;
        $bulletEl[position]().addClass(`${bulletActiveClass}-${position}`)[position]().addClass(`${bulletActiveClass}-${position}-${position}`);
    }
    function update() {
        // Render || Update Pagination bullets/items
        const rtl = swiper.rtl;
        const params = swiper.params.pagination;
        if (isPaginationDisabled()) return;
        const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
        const $el = swiper.pagination.$el; // Current/Total
        let current;
        const total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
        if (swiper.params.loop) {
            current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
            if (current > slidesLength - 1 - swiper.loopedSlides * 2) current -= slidesLength - swiper.loopedSlides * 2;
            if (current > total - 1) current -= total;
            if (current < 0 && swiper.params.paginationType !== "bullets") current = total + current;
        } else if (typeof swiper.snapIndex !== "undefined") current = swiper.snapIndex;
        else current = swiper.activeIndex || 0;
         // Types
        if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
            const bullets = swiper.pagination.bullets;
            let firstIndex;
            let lastIndex;
            let midIndex;
            if (params.dynamicBullets) {
                bulletSize = bullets.eq(0)[swiper.isHorizontal() ? "outerWidth" : "outerHeight"](true);
                $el.css(swiper.isHorizontal() ? "width" : "height", `${bulletSize * (params.dynamicMainBullets + 4)}px`);
                if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
                    dynamicBulletIndex += current - (swiper.previousIndex - swiper.loopedSlides || 0);
                    if (dynamicBulletIndex > params.dynamicMainBullets - 1) dynamicBulletIndex = params.dynamicMainBullets - 1;
                    else if (dynamicBulletIndex < 0) dynamicBulletIndex = 0;
                }
                firstIndex = Math.max(current - dynamicBulletIndex, 0);
                lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                midIndex = (lastIndex + firstIndex) / 2;
            }
            bullets.removeClass([
                "",
                "-next",
                "-next-next",
                "-prev",
                "-prev-prev",
                "-main"
            ].map((suffix)=>`${params.bulletActiveClass}${suffix}`).join(" "));
            if ($el.length > 1) bullets.each((bullet)=>{
                const $bullet = (0, _domJsDefault.default)(bullet);
                const bulletIndex = $bullet.index();
                if (bulletIndex === current) $bullet.addClass(params.bulletActiveClass);
                if (params.dynamicBullets) {
                    if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) $bullet.addClass(`${params.bulletActiveClass}-main`);
                    if (bulletIndex === firstIndex) setSideBullets($bullet, "prev");
                    if (bulletIndex === lastIndex) setSideBullets($bullet, "next");
                }
            });
            else {
                const $bullet = bullets.eq(current);
                const bulletIndex = $bullet.index();
                $bullet.addClass(params.bulletActiveClass);
                if (params.dynamicBullets) {
                    const $firstDisplayedBullet = bullets.eq(firstIndex);
                    const $lastDisplayedBullet = bullets.eq(lastIndex);
                    for(let i = firstIndex; i <= lastIndex; i += 1)bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
                    if (swiper.params.loop) {
                        if (bulletIndex >= bullets.length) {
                            for(let i = params.dynamicMainBullets; i >= 0; i -= 1)bullets.eq(bullets.length - i).addClass(`${params.bulletActiveClass}-main`);
                            bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(`${params.bulletActiveClass}-prev`);
                        } else {
                            setSideBullets($firstDisplayedBullet, "prev");
                            setSideBullets($lastDisplayedBullet, "next");
                        }
                    } else {
                        setSideBullets($firstDisplayedBullet, "prev");
                        setSideBullets($lastDisplayedBullet, "next");
                    }
                }
            }
            if (params.dynamicBullets) {
                const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                const offsetProp = rtl ? "right" : "left";
                bullets.css(swiper.isHorizontal() ? offsetProp : "top", `${bulletsOffset}px`);
            }
        }
        if (params.type === "fraction") {
            $el.find((0, _classesToSelectorJsDefault.default)(params.currentClass)).text(params.formatFractionCurrent(current + 1));
            $el.find((0, _classesToSelectorJsDefault.default)(params.totalClass)).text(params.formatFractionTotal(total));
        }
        if (params.type === "progressbar") {
            let progressbarDirection;
            if (params.progressbarOpposite) progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal";
            else progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
            const scale = (current + 1) / total;
            let scaleX = 1;
            let scaleY = 1;
            if (progressbarDirection === "horizontal") scaleX = scale;
            else scaleY = scale;
            $el.find((0, _classesToSelectorJsDefault.default)(params.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed);
        }
        if (params.type === "custom" && params.renderCustom) {
            $el.html(params.renderCustom(swiper, current + 1, total));
            emit("paginationRender", $el[0]);
        } else emit("paginationUpdate", $el[0]);
        if (swiper.params.watchOverflow && swiper.enabled) $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
    }
    function render() {
        // Render Container
        const params = swiper.params.pagination;
        if (isPaginationDisabled()) return;
        const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
        const $el = swiper.pagination.$el;
        let paginationHTML = "";
        if (params.type === "bullets") {
            let numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
            if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.loop && numberOfBullets > slidesLength) numberOfBullets = slidesLength;
            for(let i = 0; i < numberOfBullets; i += 1)if (params.renderBullet) paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
            else paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
            $el.html(paginationHTML);
            swiper.pagination.bullets = $el.find((0, _classesToSelectorJsDefault.default)(params.bulletClass));
        }
        if (params.type === "fraction") {
            if (params.renderFraction) paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
            else paginationHTML = `<span class="${params.currentClass}"></span>` + " / " + `<span class="${params.totalClass}"></span>`;
            $el.html(paginationHTML);
        }
        if (params.type === "progressbar") {
            if (params.renderProgressbar) paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
            else paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
            $el.html(paginationHTML);
        }
        if (params.type !== "custom") emit("paginationRender", swiper.pagination.$el[0]);
    }
    function init() {
        swiper.params.pagination = (0, _createElementIfNotDefinedJsDefault.default)(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
            el: "swiper-pagination"
        });
        const params = swiper.params.pagination;
        if (!params.el) return;
        let $el = (0, _domJsDefault.default)(params.el);
        if ($el.length === 0) return;
        if (swiper.params.uniqueNavElements && typeof params.el === "string" && $el.length > 1) {
            $el = swiper.$el.find(params.el); // check if it belongs to another nested Swiper
            if ($el.length > 1) $el = $el.filter((el)=>{
                if ((0, _domJsDefault.default)(el).parents(".swiper")[0] !== swiper.el) return false;
                return true;
            });
        }
        if (params.type === "bullets" && params.clickable) $el.addClass(params.clickableClass);
        $el.addClass(params.modifierClass + params.type);
        $el.addClass(params.modifierClass + swiper.params.direction);
        if (params.type === "bullets" && params.dynamicBullets) {
            $el.addClass(`${params.modifierClass}${params.type}-dynamic`);
            dynamicBulletIndex = 0;
            if (params.dynamicMainBullets < 1) params.dynamicMainBullets = 1;
        }
        if (params.type === "progressbar" && params.progressbarOpposite) $el.addClass(params.progressbarOppositeClass);
        if (params.clickable) $el.on("click", (0, _classesToSelectorJsDefault.default)(params.bulletClass), function onClick(e) {
            e.preventDefault();
            let index = (0, _domJsDefault.default)(this).index() * swiper.params.slidesPerGroup;
            if (swiper.params.loop) index += swiper.loopedSlides;
            swiper.slideTo(index);
        });
        Object.assign(swiper.pagination, {
            $el,
            el: $el[0]
        });
        if (!swiper.enabled) $el.addClass(params.lockClass);
    }
    function destroy() {
        const params = swiper.params.pagination;
        if (isPaginationDisabled()) return;
        const $el = swiper.pagination.$el;
        $el.removeClass(params.hiddenClass);
        $el.removeClass(params.modifierClass + params.type);
        $el.removeClass(params.modifierClass + swiper.params.direction);
        if (swiper.pagination.bullets && swiper.pagination.bullets.removeClass) swiper.pagination.bullets.removeClass(params.bulletActiveClass);
        if (params.clickable) $el.off("click", (0, _classesToSelectorJsDefault.default)(params.bulletClass));
    }
    on("init", ()=>{
        init();
        render();
        update();
    });
    on("activeIndexChange", ()=>{
        if (swiper.params.loop) update();
        else if (typeof swiper.snapIndex === "undefined") update();
    });
    on("snapIndexChange", ()=>{
        if (!swiper.params.loop) update();
    });
    on("slidesLengthChange", ()=>{
        if (swiper.params.loop) {
            render();
            update();
        }
    });
    on("snapGridLengthChange", ()=>{
        if (!swiper.params.loop) {
            render();
            update();
        }
    });
    on("destroy", ()=>{
        destroy();
    });
    on("enable disable", ()=>{
        const { $el } = swiper.pagination;
        if ($el) $el[swiper.enabled ? "removeClass" : "addClass"](swiper.params.pagination.lockClass);
    });
    on("lock unlock", ()=>{
        update();
    });
    on("click", (_s, e)=>{
        const targetEl = e.target;
        const { $el } = swiper.pagination;
        if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && $el.length > 0 && !(0, _domJsDefault.default)(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
            if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
            const isHidden = $el.hasClass(swiper.params.pagination.hiddenClass);
            if (isHidden === true) emit("paginationShow");
            else emit("paginationHide");
            $el.toggleClass(swiper.params.pagination.hiddenClass);
        }
    });
    Object.assign(swiper.pagination, {
        render,
        update,
        init,
        destroy
    });
}

},{"../../shared/dom.js":"7pW5q","../../shared/classes-to-selector.js":"227R4","../../shared/create-element-if-not-defined.js":"4uqq0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"227R4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>classesToSelector);
function classesToSelector(classes = "") {
    return `.${classes.trim().replace(/([\.:!\/])/g, "\\$1") // eslint-disable-line
    .replace(/ /g, ".")}`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bfOsF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Scrollbar);
var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _utilsJs = require("../../shared/utils.js");
var _createElementIfNotDefinedJs = require("../../shared/create-element-if-not-defined.js");
var _createElementIfNotDefinedJsDefault = parcelHelpers.interopDefault(_createElementIfNotDefinedJs);
function Scrollbar({ swiper, extendParams, on, emit }) {
    const document = (0, _ssrWindow.getDocument)();
    let isTouched = false;
    let timeout = null;
    let dragTimeout = null;
    let dragStartPos;
    let dragSize;
    let trackSize;
    let divider;
    extendParams({
        scrollbar: {
            el: null,
            dragSize: "auto",
            hide: false,
            draggable: false,
            snapOnRelease: true,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag"
        }
    });
    swiper.scrollbar = {
        el: null,
        dragEl: null,
        $el: null,
        $dragEl: null
    };
    function setTranslate() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        const { scrollbar, rtlTranslate: rtl, progress } = swiper;
        const { $dragEl, $el } = scrollbar;
        const params = swiper.params.scrollbar;
        let newSize = dragSize;
        let newPos = (trackSize - dragSize) * progress;
        if (rtl) {
            newPos = -newPos;
            if (newPos > 0) {
                newSize = dragSize - newPos;
                newPos = 0;
            } else if (-newPos + dragSize > trackSize) newSize = trackSize + newPos;
        } else if (newPos < 0) {
            newSize = dragSize + newPos;
            newPos = 0;
        } else if (newPos + dragSize > trackSize) newSize = trackSize - newPos;
        if (swiper.isHorizontal()) {
            $dragEl.transform(`translate3d(${newPos}px, 0, 0)`);
            $dragEl[0].style.width = `${newSize}px`;
        } else {
            $dragEl.transform(`translate3d(0px, ${newPos}px, 0)`);
            $dragEl[0].style.height = `${newSize}px`;
        }
        if (params.hide) {
            clearTimeout(timeout);
            $el[0].style.opacity = 1;
            timeout = setTimeout(()=>{
                $el[0].style.opacity = 0;
                $el.transition(400);
            }, 1000);
        }
    }
    function setTransition(duration) {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        swiper.scrollbar.$dragEl.transition(duration);
    }
    function updateSize() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        const { scrollbar } = swiper;
        const { $dragEl, $el } = scrollbar;
        $dragEl[0].style.width = "";
        $dragEl[0].style.height = "";
        trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
        divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
        if (swiper.params.scrollbar.dragSize === "auto") dragSize = trackSize * divider;
        else dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
        if (swiper.isHorizontal()) $dragEl[0].style.width = `${dragSize}px`;
        else $dragEl[0].style.height = `${dragSize}px`;
        if (divider >= 1) $el[0].style.display = "none";
        else $el[0].style.display = "";
        if (swiper.params.scrollbar.hide) $el[0].style.opacity = 0;
        if (swiper.params.watchOverflow && swiper.enabled) scrollbar.$el[swiper.isLocked ? "addClass" : "removeClass"](swiper.params.scrollbar.lockClass);
    }
    function getPointerPosition(e) {
        if (swiper.isHorizontal()) return e.type === "touchstart" || e.type === "touchmove" ? e.targetTouches[0].clientX : e.clientX;
        return e.type === "touchstart" || e.type === "touchmove" ? e.targetTouches[0].clientY : e.clientY;
    }
    function setDragPosition(e) {
        const { scrollbar, rtlTranslate: rtl } = swiper;
        const { $el } = scrollbar;
        let positionRatio;
        positionRatio = (getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? "left" : "top"] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
        positionRatio = Math.max(Math.min(positionRatio, 1), 0);
        if (rtl) positionRatio = 1 - positionRatio;
        const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
        swiper.updateProgress(position);
        swiper.setTranslate(position);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
    }
    function onDragStart(e) {
        const params = swiper.params.scrollbar;
        const { scrollbar, $wrapperEl } = swiper;
        const { $el, $dragEl } = scrollbar;
        isTouched = true;
        dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? "left" : "top"] : null;
        e.preventDefault();
        e.stopPropagation();
        $wrapperEl.transition(100);
        $dragEl.transition(100);
        setDragPosition(e);
        clearTimeout(dragTimeout);
        $el.transition(0);
        if (params.hide) $el.css("opacity", 1);
        if (swiper.params.cssMode) swiper.$wrapperEl.css("scroll-snap-type", "none");
        emit("scrollbarDragStart", e);
    }
    function onDragMove(e) {
        const { scrollbar, $wrapperEl } = swiper;
        const { $el, $dragEl } = scrollbar;
        if (!isTouched) return;
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
        setDragPosition(e);
        $wrapperEl.transition(0);
        $el.transition(0);
        $dragEl.transition(0);
        emit("scrollbarDragMove", e);
    }
    function onDragEnd(e) {
        const params = swiper.params.scrollbar;
        const { scrollbar, $wrapperEl } = swiper;
        const { $el } = scrollbar;
        if (!isTouched) return;
        isTouched = false;
        if (swiper.params.cssMode) {
            swiper.$wrapperEl.css("scroll-snap-type", "");
            $wrapperEl.transition("");
        }
        if (params.hide) {
            clearTimeout(dragTimeout);
            dragTimeout = (0, _utilsJs.nextTick)(()=>{
                $el.css("opacity", 0);
                $el.transition(400);
            }, 1000);
        }
        emit("scrollbarDragEnd", e);
        if (params.snapOnRelease) swiper.slideToClosest();
    }
    function events(method) {
        const { scrollbar, touchEventsTouch, touchEventsDesktop, params, support } = swiper;
        const $el = scrollbar.$el;
        const target = $el[0];
        const activeListener = support.passiveListener && params.passiveListeners ? {
            passive: false,
            capture: false
        } : false;
        const passiveListener = support.passiveListener && params.passiveListeners ? {
            passive: true,
            capture: false
        } : false;
        if (!target) return;
        const eventMethod = method === "on" ? "addEventListener" : "removeEventListener";
        if (!support.touch) {
            target[eventMethod](touchEventsDesktop.start, onDragStart, activeListener);
            document[eventMethod](touchEventsDesktop.move, onDragMove, activeListener);
            document[eventMethod](touchEventsDesktop.end, onDragEnd, passiveListener);
        } else {
            target[eventMethod](touchEventsTouch.start, onDragStart, activeListener);
            target[eventMethod](touchEventsTouch.move, onDragMove, activeListener);
            target[eventMethod](touchEventsTouch.end, onDragEnd, passiveListener);
        }
    }
    function enableDraggable() {
        if (!swiper.params.scrollbar.el) return;
        events("on");
    }
    function disableDraggable() {
        if (!swiper.params.scrollbar.el) return;
        events("off");
    }
    function init() {
        const { scrollbar, $el: $swiperEl } = swiper;
        swiper.params.scrollbar = (0, _createElementIfNotDefinedJsDefault.default)(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
            el: "swiper-scrollbar"
        });
        const params = swiper.params.scrollbar;
        if (!params.el) return;
        let $el = (0, _domJsDefault.default)(params.el);
        if (swiper.params.uniqueNavElements && typeof params.el === "string" && $el.length > 1 && $swiperEl.find(params.el).length === 1) $el = $swiperEl.find(params.el);
        let $dragEl = $el.find(`.${swiper.params.scrollbar.dragClass}`);
        if ($dragEl.length === 0) {
            $dragEl = (0, _domJsDefault.default)(`<div class="${swiper.params.scrollbar.dragClass}"></div>`);
            $el.append($dragEl);
        }
        Object.assign(scrollbar, {
            $el,
            el: $el[0],
            $dragEl,
            dragEl: $dragEl[0]
        });
        if (params.draggable) enableDraggable();
        if ($el) $el[swiper.enabled ? "removeClass" : "addClass"](swiper.params.scrollbar.lockClass);
    }
    function destroy() {
        disableDraggable();
    }
    on("init", ()=>{
        init();
        updateSize();
        setTranslate();
    });
    on("update resize observerUpdate lock unlock", ()=>{
        updateSize();
    });
    on("setTranslate", ()=>{
        setTranslate();
    });
    on("setTransition", (_s, duration)=>{
        setTransition(duration);
    });
    on("enable disable", ()=>{
        const { $el } = swiper.scrollbar;
        if ($el) $el[swiper.enabled ? "removeClass" : "addClass"](swiper.params.scrollbar.lockClass);
    });
    on("destroy", ()=>{
        destroy();
    });
    Object.assign(swiper.scrollbar, {
        updateSize,
        setTranslate,
        init,
        destroy
    });
}

},{"ssr-window":"3lyfI","../../shared/dom.js":"7pW5q","../../shared/utils.js":"dbikn","../../shared/create-element-if-not-defined.js":"4uqq0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aEM3Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Parallax);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function Parallax({ swiper, extendParams, on }) {
    extendParams({
        parallax: {
            enabled: false
        }
    });
    const setTransform = (el, progress)=>{
        const { rtl } = swiper;
        const $el = (0, _domJsDefault.default)(el);
        const rtlFactor = rtl ? -1 : 1;
        const p = $el.attr("data-swiper-parallax") || "0";
        let x = $el.attr("data-swiper-parallax-x");
        let y = $el.attr("data-swiper-parallax-y");
        const scale = $el.attr("data-swiper-parallax-scale");
        const opacity = $el.attr("data-swiper-parallax-opacity");
        if (x || y) {
            x = x || "0";
            y = y || "0";
        } else if (swiper.isHorizontal()) {
            x = p;
            y = "0";
        } else {
            y = p;
            x = "0";
        }
        if (x.indexOf("%") >= 0) x = `${parseInt(x, 10) * progress * rtlFactor}%`;
        else x = `${x * progress * rtlFactor}px`;
        if (y.indexOf("%") >= 0) y = `${parseInt(y, 10) * progress}%`;
        else y = `${y * progress}px`;
        if (typeof opacity !== "undefined" && opacity !== null) {
            const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
            $el[0].style.opacity = currentOpacity;
        }
        if (typeof scale === "undefined" || scale === null) $el.transform(`translate3d(${x}, ${y}, 0px)`);
        else {
            const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
            $el.transform(`translate3d(${x}, ${y}, 0px) scale(${currentScale})`);
        }
    };
    const setTranslate = ()=>{
        const { $el, slides, progress, snapGrid } = swiper;
        $el.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((el)=>{
            setTransform(el, progress);
        });
        slides.each((slideEl, slideIndex)=>{
            let slideProgress = slideEl.progress;
            if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== "auto") slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
            slideProgress = Math.min(Math.max(slideProgress, -1), 1);
            (0, _domJsDefault.default)(slideEl).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((el)=>{
                setTransform(el, slideProgress);
            });
        });
    };
    const setTransition = (duration = swiper.params.speed)=>{
        const { $el } = swiper;
        $el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((parallaxEl)=>{
            const $parallaxEl = (0, _domJsDefault.default)(parallaxEl);
            let parallaxDuration = parseInt($parallaxEl.attr("data-swiper-parallax-duration"), 10) || duration;
            if (duration === 0) parallaxDuration = 0;
            $parallaxEl.transition(parallaxDuration);
        });
    };
    on("beforeInit", ()=>{
        if (!swiper.params.parallax.enabled) return;
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
    });
    on("init", ()=>{
        if (!swiper.params.parallax.enabled) return;
        setTranslate();
    });
    on("setTranslate", ()=>{
        if (!swiper.params.parallax.enabled) return;
        setTranslate();
    });
    on("setTransition", (_swiper, duration)=>{
        if (!swiper.params.parallax.enabled) return;
        setTransition(duration);
    });
}

},{"../../shared/dom.js":"7pW5q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5YHxH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Zoom);
var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _utilsJs = require("../../shared/utils.js");
function Zoom({ swiper, extendParams, on, emit }) {
    const window = (0, _ssrWindow.getWindow)();
    extendParams({
        zoom: {
            enabled: false,
            maxRatio: 3,
            minRatio: 1,
            toggle: true,
            containerClass: "swiper-zoom-container",
            zoomedSlideClass: "swiper-slide-zoomed"
        }
    });
    swiper.zoom = {
        enabled: false
    };
    let currentScale = 1;
    let isScaling = false;
    let gesturesEnabled;
    let fakeGestureTouched;
    let fakeGestureMoved;
    const gesture = {
        $slideEl: undefined,
        slideWidth: undefined,
        slideHeight: undefined,
        $imageEl: undefined,
        $imageWrapEl: undefined,
        maxRatio: 3
    };
    const image = {
        isTouched: undefined,
        isMoved: undefined,
        currentX: undefined,
        currentY: undefined,
        minX: undefined,
        minY: undefined,
        maxX: undefined,
        maxY: undefined,
        width: undefined,
        height: undefined,
        startX: undefined,
        startY: undefined,
        touchesStart: {},
        touchesCurrent: {}
    };
    const velocity = {
        x: undefined,
        y: undefined,
        prevPositionX: undefined,
        prevPositionY: undefined,
        prevTime: undefined
    };
    let scale = 1;
    Object.defineProperty(swiper.zoom, "scale", {
        get () {
            return scale;
        },
        set (value) {
            if (scale !== value) {
                const imageEl = gesture.$imageEl ? gesture.$imageEl[0] : undefined;
                const slideEl = gesture.$slideEl ? gesture.$slideEl[0] : undefined;
                emit("zoomChange", value, imageEl, slideEl);
            }
            scale = value;
        }
    });
    function getDistanceBetweenTouches(e) {
        if (e.targetTouches.length < 2) return 1;
        const x1 = e.targetTouches[0].pageX;
        const y1 = e.targetTouches[0].pageY;
        const x2 = e.targetTouches[1].pageX;
        const y2 = e.targetTouches[1].pageY;
        const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        return distance;
    } // Events
    function onGestureStart(e) {
        const support = swiper.support;
        const params = swiper.params.zoom;
        fakeGestureTouched = false;
        fakeGestureMoved = false;
        if (!support.gestures) {
            if (e.type !== "touchstart" || e.type === "touchstart" && e.targetTouches.length < 2) return;
            fakeGestureTouched = true;
            gesture.scaleStart = getDistanceBetweenTouches(e);
        }
        if (!gesture.$slideEl || !gesture.$slideEl.length) {
            gesture.$slideEl = (0, _domJsDefault.default)(e.target).closest(`.${swiper.params.slideClass}`);
            if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
            gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0);
            gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
            gesture.maxRatio = gesture.$imageWrapEl.attr("data-swiper-zoom") || params.maxRatio;
            if (gesture.$imageWrapEl.length === 0) {
                gesture.$imageEl = undefined;
                return;
            }
        }
        if (gesture.$imageEl) gesture.$imageEl.transition(0);
        isScaling = true;
    }
    function onGestureChange(e) {
        const support = swiper.support;
        const params = swiper.params.zoom;
        const zoom = swiper.zoom;
        if (!support.gestures) {
            if (e.type !== "touchmove" || e.type === "touchmove" && e.targetTouches.length < 2) return;
            fakeGestureMoved = true;
            gesture.scaleMove = getDistanceBetweenTouches(e);
        }
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
            if (e.type === "gesturechange") onGestureStart(e);
            return;
        }
        if (support.gestures) zoom.scale = e.scale * currentScale;
        else zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
        if (zoom.scale > gesture.maxRatio) zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
        if (zoom.scale < params.minRatio) zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
        gesture.$imageEl.transform(`translate3d(0,0,0) scale(${zoom.scale})`);
    }
    function onGestureEnd(e) {
        const device = swiper.device;
        const support = swiper.support;
        const params = swiper.params.zoom;
        const zoom = swiper.zoom;
        if (!support.gestures) {
            if (!fakeGestureTouched || !fakeGestureMoved) return;
            if (e.type !== "touchend" || e.type === "touchend" && e.changedTouches.length < 2 && !device.android) return;
            fakeGestureTouched = false;
            fakeGestureMoved = false;
        }
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
        gesture.$imageEl.transition(swiper.params.speed).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
        currentScale = zoom.scale;
        isScaling = false;
        if (zoom.scale === 1) gesture.$slideEl = undefined;
    }
    function onTouchStart(e) {
        const device = swiper.device;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        if (image.isTouched) return;
        if (device.android && e.cancelable) e.preventDefault();
        image.isTouched = true;
        image.touchesStart.x = e.type === "touchstart" ? e.targetTouches[0].pageX : e.pageX;
        image.touchesStart.y = e.type === "touchstart" ? e.targetTouches[0].pageY : e.pageY;
    }
    function onTouchMove(e) {
        const zoom = swiper.zoom;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        swiper.allowClick = false;
        if (!image.isTouched || !gesture.$slideEl) return;
        if (!image.isMoved) {
            image.width = gesture.$imageEl[0].offsetWidth;
            image.height = gesture.$imageEl[0].offsetHeight;
            image.startX = (0, _utilsJs.getTranslate)(gesture.$imageWrapEl[0], "x") || 0;
            image.startY = (0, _utilsJs.getTranslate)(gesture.$imageWrapEl[0], "y") || 0;
            gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
            gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
            gesture.$imageWrapEl.transition(0);
        } // Define if we need image drag
        const scaledWidth = image.width * zoom.scale;
        const scaledHeight = image.height * zoom.scale;
        if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
        image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
        image.maxX = -image.minX;
        image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
        image.maxY = -image.minY;
        image.touchesCurrent.x = e.type === "touchmove" ? e.targetTouches[0].pageX : e.pageX;
        image.touchesCurrent.y = e.type === "touchmove" ? e.targetTouches[0].pageY : e.pageY;
        if (!image.isMoved && !isScaling) {
            if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
                image.isTouched = false;
                return;
            }
            if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
                image.isTouched = false;
                return;
            }
        }
        if (e.cancelable) e.preventDefault();
        e.stopPropagation();
        image.isMoved = true;
        image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
        image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;
        if (image.currentX < image.minX) image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
        if (image.currentX > image.maxX) image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
        if (image.currentY < image.minY) image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
        if (image.currentY > image.maxY) image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
         // Velocity
        if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
        if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
        if (!velocity.prevTime) velocity.prevTime = Date.now();
        velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
        velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
        if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
        if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
        velocity.prevPositionX = image.touchesCurrent.x;
        velocity.prevPositionY = image.touchesCurrent.y;
        velocity.prevTime = Date.now();
        gesture.$imageWrapEl.transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
    }
    function onTouchEnd() {
        const zoom = swiper.zoom;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        if (!image.isTouched || !image.isMoved) {
            image.isTouched = false;
            image.isMoved = false;
            return;
        }
        image.isTouched = false;
        image.isMoved = false;
        let momentumDurationX = 300;
        let momentumDurationY = 300;
        const momentumDistanceX = velocity.x * momentumDurationX;
        const newPositionX = image.currentX + momentumDistanceX;
        const momentumDistanceY = velocity.y * momentumDurationY;
        const newPositionY = image.currentY + momentumDistanceY; // Fix duration
        if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
        if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
        const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
        image.currentX = newPositionX;
        image.currentY = newPositionY; // Define if we need image drag
        const scaledWidth = image.width * zoom.scale;
        const scaledHeight = image.height * zoom.scale;
        image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
        image.maxX = -image.minX;
        image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
        image.maxY = -image.minY;
        image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
        image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
        gesture.$imageWrapEl.transition(momentumDuration).transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
    }
    function onTransitionEnd() {
        const zoom = swiper.zoom;
        if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
            if (gesture.$imageEl) gesture.$imageEl.transform("translate3d(0,0,0) scale(1)");
            if (gesture.$imageWrapEl) gesture.$imageWrapEl.transform("translate3d(0,0,0)");
            zoom.scale = 1;
            currentScale = 1;
            gesture.$slideEl = undefined;
            gesture.$imageEl = undefined;
            gesture.$imageWrapEl = undefined;
        }
    }
    function zoomIn(e) {
        const zoom = swiper.zoom;
        const params = swiper.params.zoom;
        if (!gesture.$slideEl) {
            if (e && e.target) gesture.$slideEl = (0, _domJsDefault.default)(e.target).closest(`.${swiper.params.slideClass}`);
            if (!gesture.$slideEl) {
                if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
                else gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
            }
            gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0);
            gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
        }
        if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;
        if (swiper.params.cssMode) {
            swiper.wrapperEl.style.overflow = "hidden";
            swiper.wrapperEl.style.touchAction = "none";
        }
        gesture.$slideEl.addClass(`${params.zoomedSlideClass}`);
        let touchX;
        let touchY;
        let offsetX;
        let offsetY;
        let diffX;
        let diffY;
        let translateX;
        let translateY;
        let imageWidth;
        let imageHeight;
        let scaledWidth;
        let scaledHeight;
        let translateMinX;
        let translateMinY;
        let translateMaxX;
        let translateMaxY;
        let slideWidth;
        let slideHeight;
        if (typeof image.touchesStart.x === "undefined" && e) {
            touchX = e.type === "touchend" ? e.changedTouches[0].pageX : e.pageX;
            touchY = e.type === "touchend" ? e.changedTouches[0].pageY : e.pageY;
        } else {
            touchX = image.touchesStart.x;
            touchY = image.touchesStart.y;
        }
        zoom.scale = gesture.$imageWrapEl.attr("data-swiper-zoom") || params.maxRatio;
        currentScale = gesture.$imageWrapEl.attr("data-swiper-zoom") || params.maxRatio;
        if (e) {
            slideWidth = gesture.$slideEl[0].offsetWidth;
            slideHeight = gesture.$slideEl[0].offsetHeight;
            offsetX = gesture.$slideEl.offset().left + window.scrollX;
            offsetY = gesture.$slideEl.offset().top + window.scrollY;
            diffX = offsetX + slideWidth / 2 - touchX;
            diffY = offsetY + slideHeight / 2 - touchY;
            imageWidth = gesture.$imageEl[0].offsetWidth;
            imageHeight = gesture.$imageEl[0].offsetHeight;
            scaledWidth = imageWidth * zoom.scale;
            scaledHeight = imageHeight * zoom.scale;
            translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
            translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
            translateMaxX = -translateMinX;
            translateMaxY = -translateMinY;
            translateX = diffX * zoom.scale;
            translateY = diffY * zoom.scale;
            if (translateX < translateMinX) translateX = translateMinX;
            if (translateX > translateMaxX) translateX = translateMaxX;
            if (translateY < translateMinY) translateY = translateMinY;
            if (translateY > translateMaxY) translateY = translateMaxY;
        } else {
            translateX = 0;
            translateY = 0;
        }
        gesture.$imageWrapEl.transition(300).transform(`translate3d(${translateX}px, ${translateY}px,0)`);
        gesture.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
    }
    function zoomOut() {
        const zoom = swiper.zoom;
        const params = swiper.params.zoom;
        if (!gesture.$slideEl) {
            if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
            else gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
            gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0);
            gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
        }
        if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;
        if (swiper.params.cssMode) {
            swiper.wrapperEl.style.overflow = "";
            swiper.wrapperEl.style.touchAction = "";
        }
        zoom.scale = 1;
        currentScale = 1;
        gesture.$imageWrapEl.transition(300).transform("translate3d(0,0,0)");
        gesture.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)");
        gesture.$slideEl.removeClass(`${params.zoomedSlideClass}`);
        gesture.$slideEl = undefined;
    } // Toggle Zoom
    function zoomToggle(e) {
        const zoom = swiper.zoom;
        if (zoom.scale && zoom.scale !== 1) // Zoom Out
        zoomOut();
        else // Zoom In
        zoomIn(e);
    }
    function getListeners() {
        const support = swiper.support;
        const passiveListener = swiper.touchEvents.start === "touchstart" && support.passiveListener && swiper.params.passiveListeners ? {
            passive: true,
            capture: false
        } : false;
        const activeListenerWithCapture = support.passiveListener ? {
            passive: false,
            capture: true
        } : true;
        return {
            passiveListener,
            activeListenerWithCapture
        };
    }
    function getSlideSelector() {
        return `.${swiper.params.slideClass}`;
    }
    function toggleGestures(method) {
        const { passiveListener } = getListeners();
        const slideSelector = getSlideSelector();
        swiper.$wrapperEl[method]("gesturestart", slideSelector, onGestureStart, passiveListener);
        swiper.$wrapperEl[method]("gesturechange", slideSelector, onGestureChange, passiveListener);
        swiper.$wrapperEl[method]("gestureend", slideSelector, onGestureEnd, passiveListener);
    }
    function enableGestures() {
        if (gesturesEnabled) return;
        gesturesEnabled = true;
        toggleGestures("on");
    }
    function disableGestures() {
        if (!gesturesEnabled) return;
        gesturesEnabled = false;
        toggleGestures("off");
    } // Attach/Detach Events
    function enable() {
        const zoom = swiper.zoom;
        if (zoom.enabled) return;
        zoom.enabled = true;
        const support = swiper.support;
        const { passiveListener, activeListenerWithCapture } = getListeners();
        const slideSelector = getSlideSelector(); // Scale image
        if (support.gestures) {
            swiper.$wrapperEl.on(swiper.touchEvents.start, enableGestures, passiveListener);
            swiper.$wrapperEl.on(swiper.touchEvents.end, disableGestures, passiveListener);
        } else if (swiper.touchEvents.start === "touchstart") {
            swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);
            swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
            swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);
            if (swiper.touchEvents.cancel) swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
        } // Move image
        swiper.$wrapperEl.on(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, onTouchMove, activeListenerWithCapture);
    }
    function disable() {
        const zoom = swiper.zoom;
        if (!zoom.enabled) return;
        const support = swiper.support;
        zoom.enabled = false;
        const { passiveListener, activeListenerWithCapture } = getListeners();
        const slideSelector = getSlideSelector(); // Scale image
        if (support.gestures) {
            swiper.$wrapperEl.off(swiper.touchEvents.start, enableGestures, passiveListener);
            swiper.$wrapperEl.off(swiper.touchEvents.end, disableGestures, passiveListener);
        } else if (swiper.touchEvents.start === "touchstart") {
            swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);
            swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
            swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);
            if (swiper.touchEvents.cancel) swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
        } // Move image
        swiper.$wrapperEl.off(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, onTouchMove, activeListenerWithCapture);
    }
    on("init", ()=>{
        if (swiper.params.zoom.enabled) enable();
    });
    on("destroy", ()=>{
        disable();
    });
    on("touchStart", (_s, e)=>{
        if (!swiper.zoom.enabled) return;
        onTouchStart(e);
    });
    on("touchEnd", (_s, e)=>{
        if (!swiper.zoom.enabled) return;
        onTouchEnd(e);
    });
    on("doubleTap", (_s, e)=>{
        if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) zoomToggle(e);
    });
    on("transitionEnd", ()=>{
        if (swiper.zoom.enabled && swiper.params.zoom.enabled) onTransitionEnd();
    });
    on("slideChange", ()=>{
        if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) onTransitionEnd();
    });
    Object.assign(swiper.zoom, {
        enable,
        disable,
        in: zoomIn,
        out: zoomOut,
        toggle: zoomToggle
    });
}

},{"ssr-window":"3lyfI","../../shared/dom.js":"7pW5q","../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kPhLF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Lazy);
var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function Lazy({ swiper, extendParams, on, emit }) {
    extendParams({
        lazy: {
            checkInView: false,
            enabled: false,
            loadPrevNext: false,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: false,
            scrollingElement: "",
            elementClass: "swiper-lazy",
            loadingClass: "swiper-lazy-loading",
            loadedClass: "swiper-lazy-loaded",
            preloaderClass: "swiper-lazy-preloader"
        }
    });
    swiper.lazy = {};
    let scrollHandlerAttached = false;
    let initialImageLoaded = false;
    function loadInSlide(index, loadInDuplicate = true) {
        const params = swiper.params.lazy;
        if (typeof index === "undefined") return;
        if (swiper.slides.length === 0) return;
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        const $slideEl = isVirtual ? swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-swiper-slide-index="${index}"]`) : swiper.slides.eq(index);
        const $images = $slideEl.find(`.${params.elementClass}:not(.${params.loadedClass}):not(.${params.loadingClass})`);
        if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) $images.push($slideEl[0]);
        if ($images.length === 0) return;
        $images.each((imageEl)=>{
            const $imageEl = (0, _domJsDefault.default)(imageEl);
            $imageEl.addClass(params.loadingClass);
            const background = $imageEl.attr("data-background");
            const src = $imageEl.attr("data-src");
            const srcset = $imageEl.attr("data-srcset");
            const sizes = $imageEl.attr("data-sizes");
            const $pictureEl = $imageEl.parent("picture");
            swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, ()=>{
                if (typeof swiper === "undefined" || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) return;
                if (background) {
                    $imageEl.css("background-image", `url("${background}")`);
                    $imageEl.removeAttr("data-background");
                } else {
                    if (srcset) {
                        $imageEl.attr("srcset", srcset);
                        $imageEl.removeAttr("data-srcset");
                    }
                    if (sizes) {
                        $imageEl.attr("sizes", sizes);
                        $imageEl.removeAttr("data-sizes");
                    }
                    if ($pictureEl.length) $pictureEl.children("source").each((sourceEl)=>{
                        const $source = (0, _domJsDefault.default)(sourceEl);
                        if ($source.attr("data-srcset")) {
                            $source.attr("srcset", $source.attr("data-srcset"));
                            $source.removeAttr("data-srcset");
                        }
                    });
                    if (src) {
                        $imageEl.attr("src", src);
                        $imageEl.removeAttr("data-src");
                    }
                }
                $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
                $slideEl.find(`.${params.preloaderClass}`).remove();
                if (swiper.params.loop && loadInDuplicate) {
                    const slideOriginalIndex = $slideEl.attr("data-swiper-slide-index");
                    if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
                        const originalSlide = swiper.$wrapperEl.children(`[data-swiper-slide-index="${slideOriginalIndex}"]:not(.${swiper.params.slideDuplicateClass})`);
                        loadInSlide(originalSlide.index(), false);
                    } else {
                        const duplicatedSlide = swiper.$wrapperEl.children(`.${swiper.params.slideDuplicateClass}[data-swiper-slide-index="${slideOriginalIndex}"]`);
                        loadInSlide(duplicatedSlide.index(), false);
                    }
                }
                emit("lazyImageReady", $slideEl[0], $imageEl[0]);
                if (swiper.params.autoHeight) swiper.updateAutoHeight();
            });
            emit("lazyImageLoad", $slideEl[0], $imageEl[0]);
        });
    }
    function load() {
        const { $wrapperEl, params: swiperParams, slides, activeIndex } = swiper;
        const isVirtual = swiper.virtual && swiperParams.virtual.enabled;
        const params = swiperParams.lazy;
        let slidesPerView = swiperParams.slidesPerView;
        if (slidesPerView === "auto") slidesPerView = 0;
        function slideExist(index) {
            if (isVirtual) {
                if ($wrapperEl.children(`.${swiperParams.slideClass}[data-swiper-slide-index="${index}"]`).length) return true;
            } else if (slides[index]) return true;
            return false;
        }
        function slideIndex(slideEl) {
            if (isVirtual) return (0, _domJsDefault.default)(slideEl).attr("data-swiper-slide-index");
            return (0, _domJsDefault.default)(slideEl).index();
        }
        if (!initialImageLoaded) initialImageLoaded = true;
        if (swiper.params.watchSlidesProgress) $wrapperEl.children(`.${swiperParams.slideVisibleClass}`).each((slideEl)=>{
            const index = isVirtual ? (0, _domJsDefault.default)(slideEl).attr("data-swiper-slide-index") : (0, _domJsDefault.default)(slideEl).index();
            loadInSlide(index);
        });
        else if (slidesPerView > 1) {
            for(let i = activeIndex; i < activeIndex + slidesPerView; i += 1)if (slideExist(i)) loadInSlide(i);
        } else loadInSlide(activeIndex);
        if (params.loadPrevNext) {
            if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
                const amount = params.loadPrevNextAmount;
                const spv = slidesPerView;
                const maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
                const minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides
                for(let i = activeIndex + slidesPerView; i < maxIndex; i += 1)if (slideExist(i)) loadInSlide(i);
                 // Prev Slides
                for(let i = minIndex; i < activeIndex; i += 1)if (slideExist(i)) loadInSlide(i);
            } else {
                const nextSlide = $wrapperEl.children(`.${swiperParams.slideNextClass}`);
                if (nextSlide.length > 0) loadInSlide(slideIndex(nextSlide));
                const prevSlide = $wrapperEl.children(`.${swiperParams.slidePrevClass}`);
                if (prevSlide.length > 0) loadInSlide(slideIndex(prevSlide));
            }
        }
    }
    function checkInViewOnLoad() {
        const window = (0, _ssrWindow.getWindow)();
        if (!swiper || swiper.destroyed) return;
        const $scrollElement = swiper.params.lazy.scrollingElement ? (0, _domJsDefault.default)(swiper.params.lazy.scrollingElement) : (0, _domJsDefault.default)(window);
        const isWindow = $scrollElement[0] === window;
        const scrollElementWidth = isWindow ? window.innerWidth : $scrollElement[0].offsetWidth;
        const scrollElementHeight = isWindow ? window.innerHeight : $scrollElement[0].offsetHeight;
        const swiperOffset = swiper.$el.offset();
        const { rtlTranslate: rtl } = swiper;
        let inView = false;
        if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
        const swiperCoord = [
            [
                swiperOffset.left,
                swiperOffset.top
            ],
            [
                swiperOffset.left + swiper.width,
                swiperOffset.top
            ],
            [
                swiperOffset.left,
                swiperOffset.top + swiper.height
            ],
            [
                swiperOffset.left + swiper.width,
                swiperOffset.top + swiper.height
            ]
        ];
        for(let i = 0; i < swiperCoord.length; i += 1){
            const point = swiperCoord[i];
            if (point[0] >= 0 && point[0] <= scrollElementWidth && point[1] >= 0 && point[1] <= scrollElementHeight) {
                if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
                inView = true;
            }
        }
        const passiveListener = swiper.touchEvents.start === "touchstart" && swiper.support.passiveListener && swiper.params.passiveListeners ? {
            passive: true,
            capture: false
        } : false;
        if (inView) {
            load();
            $scrollElement.off("scroll", checkInViewOnLoad, passiveListener);
        } else if (!scrollHandlerAttached) {
            scrollHandlerAttached = true;
            $scrollElement.on("scroll", checkInViewOnLoad, passiveListener);
        }
    }
    on("beforeInit", ()=>{
        if (swiper.params.lazy.enabled && swiper.params.preloadImages) swiper.params.preloadImages = false;
    });
    on("init", ()=>{
        if (swiper.params.lazy.enabled) {
            if (swiper.params.lazy.checkInView) checkInViewOnLoad();
            else load();
        }
    });
    on("scroll", ()=>{
        if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.freeMode.sticky) load();
    });
    on("scrollbarDragMove resize _freeModeNoMomentumRelease", ()=>{
        if (swiper.params.lazy.enabled) {
            if (swiper.params.lazy.checkInView) checkInViewOnLoad();
            else load();
        }
    });
    on("transitionStart", ()=>{
        if (swiper.params.lazy.enabled) {
            if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !initialImageLoaded) {
                if (swiper.params.lazy.checkInView) checkInViewOnLoad();
                else load();
            }
        }
    });
    on("transitionEnd", ()=>{
        if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
            if (swiper.params.lazy.checkInView) checkInViewOnLoad();
            else load();
        }
    });
    on("slideChange", ()=>{
        const { lazy, cssMode, watchSlidesProgress, touchReleaseOnEdges, resistanceRatio } = swiper.params;
        if (lazy.enabled && (cssMode || watchSlidesProgress && (touchReleaseOnEdges || resistanceRatio === 0))) load();
    });
    Object.assign(swiper.lazy, {
        load,
        loadInSlide
    });
}

},{"ssr-window":"3lyfI","../../shared/dom.js":"7pW5q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hcdrq":[function(require,module,exports) {
/* eslint no-bitwise: ["error", { "allow": [">>"] }] */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Controller);
var _utilsJs = require("../../shared/utils.js");
function Controller({ swiper, extendParams, on }) {
    extendParams({
        controller: {
            control: undefined,
            inverse: false,
            by: "slide" // or 'container'
        }
    });
    swiper.controller = {
        control: undefined
    };
    function LinearSpline(x, y) {
        const binarySearch = function search() {
            let maxIndex;
            let minIndex;
            let guess;
            return (array, val)=>{
                minIndex = -1;
                maxIndex = array.length;
                while(maxIndex - minIndex > 1){
                    guess = maxIndex + minIndex >> 1;
                    if (array[guess] <= val) minIndex = guess;
                    else maxIndex = guess;
                }
                return maxIndex;
            };
        }();
        this.x = x;
        this.y = y;
        this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
        // (x1,y1) is the known point before given value,
        // (x3,y3) is the known point after given value.
        let i1;
        let i3;
        this.interpolate = function interpolate(x2) {
            if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):
            i3 = binarySearch(this.x, x2);
            i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
            // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
            return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
        };
        return this;
    } // xxx: for now i will just save one spline function to to
    function getInterpolateFunction(c) {
        if (!swiper.controller.spline) swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
    }
    function setTranslate(_t, byController) {
        const controlled = swiper.controller.control;
        let multiplier;
        let controlledTranslate;
        const Swiper = swiper.constructor;
        function setControlledTranslate(c) {
            // this will create an Interpolate function based on the snapGrids
            // x is the Grid of the scrolled scroller and y will be the controlled scroller
            // it makes sense to create this only once and recall it for the interpolation
            // the function does a lot of value caching for performance
            const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
            if (swiper.params.controller.by === "slide") {
                getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
                // but it did not work out
                controlledTranslate = -swiper.controller.spline.interpolate(-translate);
            }
            if (!controlledTranslate || swiper.params.controller.by === "container") {
                multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
                controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
            }
            if (swiper.params.controller.inverse) controlledTranslate = c.maxTranslate() - controlledTranslate;
            c.updateProgress(controlledTranslate);
            c.setTranslate(controlledTranslate, swiper);
            c.updateActiveIndex();
            c.updateSlidesClasses();
        }
        if (Array.isArray(controlled)) {
            for(let i = 0; i < controlled.length; i += 1)if (controlled[i] !== byController && controlled[i] instanceof Swiper) setControlledTranslate(controlled[i]);
        } else if (controlled instanceof Swiper && byController !== controlled) setControlledTranslate(controlled);
    }
    function setTransition(duration, byController) {
        const Swiper = swiper.constructor;
        const controlled = swiper.controller.control;
        let i;
        function setControlledTransition(c) {
            c.setTransition(duration, swiper);
            if (duration !== 0) {
                c.transitionStart();
                if (c.params.autoHeight) (0, _utilsJs.nextTick)(()=>{
                    c.updateAutoHeight();
                });
                c.$wrapperEl.transitionEnd(()=>{
                    if (!controlled) return;
                    if (c.params.loop && swiper.params.controller.by === "slide") c.loopFix();
                    c.transitionEnd();
                });
            }
        }
        if (Array.isArray(controlled)) {
            for(i = 0; i < controlled.length; i += 1)if (controlled[i] !== byController && controlled[i] instanceof Swiper) setControlledTransition(controlled[i]);
        } else if (controlled instanceof Swiper && byController !== controlled) setControlledTransition(controlled);
    }
    function removeSpline() {
        if (!swiper.controller.control) return;
        if (swiper.controller.spline) {
            swiper.controller.spline = undefined;
            delete swiper.controller.spline;
        }
    }
    on("beforeInit", ()=>{
        swiper.controller.control = swiper.params.controller.control;
    });
    on("update", ()=>{
        removeSpline();
    });
    on("resize", ()=>{
        removeSpline();
    });
    on("observerUpdate", ()=>{
        removeSpline();
    });
    on("setTranslate", (_s, translate, byController)=>{
        if (!swiper.controller.control) return;
        swiper.controller.setTranslate(translate, byController);
    });
    on("setTransition", (_s, duration, byController)=>{
        if (!swiper.controller.control) return;
        swiper.controller.setTransition(duration, byController);
    });
    Object.assign(swiper.controller, {
        setTranslate,
        setTransition
    });
}

},{"../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lDTl7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>A11y);
var _classesToSelectorJs = require("../../shared/classes-to-selector.js");
var _classesToSelectorJsDefault = parcelHelpers.interopDefault(_classesToSelectorJs);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function A11y({ swiper, extendParams, on }) {
    extendParams({
        a11y: {
            enabled: true,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            slideLabelMessage: "{{index}} / {{slidesLength}}",
            containerMessage: null,
            containerRoleDescriptionMessage: null,
            itemRoleDescriptionMessage: null,
            slideRole: "group"
        }
    });
    let liveRegion = null;
    function notify(message) {
        const notification = liveRegion;
        if (notification.length === 0) return;
        notification.html("");
        notification.html(message);
    }
    function getRandomNumber(size = 16) {
        const randomChar = ()=>Math.round(16 * Math.random()).toString(16);
        return "x".repeat(size).replace(/x/g, randomChar);
    }
    function makeElFocusable($el) {
        $el.attr("tabIndex", "0");
    }
    function makeElNotFocusable($el) {
        $el.attr("tabIndex", "-1");
    }
    function addElRole($el, role) {
        $el.attr("role", role);
    }
    function addElRoleDescription($el, description) {
        $el.attr("aria-roledescription", description);
    }
    function addElControls($el, controls) {
        $el.attr("aria-controls", controls);
    }
    function addElLabel($el, label) {
        $el.attr("aria-label", label);
    }
    function addElId($el, id) {
        $el.attr("id", id);
    }
    function addElLive($el, live) {
        $el.attr("aria-live", live);
    }
    function disableEl($el) {
        $el.attr("aria-disabled", true);
    }
    function enableEl($el) {
        $el.attr("aria-disabled", false);
    }
    function onEnterOrSpaceKey(e) {
        if (e.keyCode !== 13 && e.keyCode !== 32) return;
        const params = swiper.params.a11y;
        const $targetEl = (0, _domJsDefault.default)(e.target);
        if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
            if (!(swiper.isEnd && !swiper.params.loop)) swiper.slideNext();
            if (swiper.isEnd) notify(params.lastSlideMessage);
            else notify(params.nextSlideMessage);
        }
        if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
            if (!(swiper.isBeginning && !swiper.params.loop)) swiper.slidePrev();
            if (swiper.isBeginning) notify(params.firstSlideMessage);
            else notify(params.prevSlideMessage);
        }
        if (swiper.pagination && $targetEl.is((0, _classesToSelectorJsDefault.default)(swiper.params.pagination.bulletClass))) $targetEl[0].click();
    }
    function updateNavigation() {
        if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
        const { $nextEl, $prevEl } = swiper.navigation;
        if ($prevEl && $prevEl.length > 0) {
            if (swiper.isBeginning) {
                disableEl($prevEl);
                makeElNotFocusable($prevEl);
            } else {
                enableEl($prevEl);
                makeElFocusable($prevEl);
            }
        }
        if ($nextEl && $nextEl.length > 0) {
            if (swiper.isEnd) {
                disableEl($nextEl);
                makeElNotFocusable($nextEl);
            } else {
                enableEl($nextEl);
                makeElFocusable($nextEl);
            }
        }
    }
    function hasPagination() {
        return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
    }
    function hasClickablePagination() {
        return hasPagination() && swiper.params.pagination.clickable;
    }
    function updatePagination() {
        const params = swiper.params.a11y;
        if (!hasPagination()) return;
        swiper.pagination.bullets.each((bulletEl)=>{
            const $bulletEl = (0, _domJsDefault.default)(bulletEl);
            if (swiper.params.pagination.clickable) {
                makeElFocusable($bulletEl);
                if (!swiper.params.pagination.renderBullet) {
                    addElRole($bulletEl, "button");
                    addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
                }
            }
            if ($bulletEl.is(`.${swiper.params.pagination.bulletActiveClass}`)) $bulletEl.attr("aria-current", "true");
            else $bulletEl.removeAttr("aria-current");
        });
    }
    const initNavEl = ($el, wrapperId, message)=>{
        makeElFocusable($el);
        if ($el[0].tagName !== "BUTTON") {
            addElRole($el, "button");
            $el.on("keydown", onEnterOrSpaceKey);
        }
        addElLabel($el, message);
        addElControls($el, wrapperId);
    };
    function init() {
        const params = swiper.params.a11y;
        swiper.$el.append(liveRegion); // Container
        const $containerEl = swiper.$el;
        if (params.containerRoleDescriptionMessage) addElRoleDescription($containerEl, params.containerRoleDescriptionMessage);
        if (params.containerMessage) addElLabel($containerEl, params.containerMessage);
         // Wrapper
        const $wrapperEl = swiper.$wrapperEl;
        const wrapperId = $wrapperEl.attr("id") || `swiper-wrapper-${getRandomNumber(16)}`;
        const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? "off" : "polite";
        addElId($wrapperEl, wrapperId);
        addElLive($wrapperEl, live); // Slide
        if (params.itemRoleDescriptionMessage) addElRoleDescription((0, _domJsDefault.default)(swiper.slides), params.itemRoleDescriptionMessage);
        addElRole((0, _domJsDefault.default)(swiper.slides), params.slideRole);
        const slidesLength = swiper.params.loop ? swiper.slides.filter((el)=>!el.classList.contains(swiper.params.slideDuplicateClass)).length : swiper.slides.length;
        swiper.slides.each((slideEl, index)=>{
            const $slideEl = (0, _domJsDefault.default)(slideEl);
            const slideIndex = swiper.params.loop ? parseInt($slideEl.attr("data-swiper-slide-index"), 10) : index;
            const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
            addElLabel($slideEl, ariaLabelMessage);
        }); // Navigation
        let $nextEl;
        let $prevEl;
        if (swiper.navigation && swiper.navigation.$nextEl) $nextEl = swiper.navigation.$nextEl;
        if (swiper.navigation && swiper.navigation.$prevEl) $prevEl = swiper.navigation.$prevEl;
        if ($nextEl && $nextEl.length) initNavEl($nextEl, wrapperId, params.nextSlideMessage);
        if ($prevEl && $prevEl.length) initNavEl($prevEl, wrapperId, params.prevSlideMessage);
         // Pagination
        if (hasClickablePagination()) swiper.pagination.$el.on("keydown", (0, _classesToSelectorJsDefault.default)(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
    }
    function destroy() {
        if (liveRegion && liveRegion.length > 0) liveRegion.remove();
        let $nextEl;
        let $prevEl;
        if (swiper.navigation && swiper.navigation.$nextEl) $nextEl = swiper.navigation.$nextEl;
        if (swiper.navigation && swiper.navigation.$prevEl) $prevEl = swiper.navigation.$prevEl;
        if ($nextEl) $nextEl.off("keydown", onEnterOrSpaceKey);
        if ($prevEl) $prevEl.off("keydown", onEnterOrSpaceKey);
         // Pagination
        if (hasClickablePagination()) swiper.pagination.$el.off("keydown", (0, _classesToSelectorJsDefault.default)(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
    }
    on("beforeInit", ()=>{
        liveRegion = (0, _domJsDefault.default)(`<span class="${swiper.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`);
    });
    on("afterInit", ()=>{
        if (!swiper.params.a11y.enabled) return;
        init();
        updateNavigation();
    });
    on("toEdge", ()=>{
        if (!swiper.params.a11y.enabled) return;
        updateNavigation();
    });
    on("fromEdge", ()=>{
        if (!swiper.params.a11y.enabled) return;
        updateNavigation();
    });
    on("paginationUpdate", ()=>{
        if (!swiper.params.a11y.enabled) return;
        updatePagination();
    });
    on("destroy", ()=>{
        if (!swiper.params.a11y.enabled) return;
        destroy();
    });
}

},{"../../shared/classes-to-selector.js":"227R4","../../shared/dom.js":"7pW5q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7pifE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>History);
var _ssrWindow = require("ssr-window");
function History({ swiper, extendParams, on }) {
    extendParams({
        history: {
            enabled: false,
            root: "",
            replaceState: false,
            key: "slides"
        }
    });
    let initialized = false;
    let paths = {};
    const slugify = (text)=>{
        return text.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
    };
    const getPathValues = (urlOverride)=>{
        const window = (0, _ssrWindow.getWindow)();
        let location;
        if (urlOverride) location = new URL(urlOverride);
        else location = window.location;
        const pathArray = location.pathname.slice(1).split("/").filter((part)=>part !== "");
        const total = pathArray.length;
        const key = pathArray[total - 2];
        const value = pathArray[total - 1];
        return {
            key,
            value
        };
    };
    const setHistory = (key, index)=>{
        const window = (0, _ssrWindow.getWindow)();
        if (!initialized || !swiper.params.history.enabled) return;
        let location;
        if (swiper.params.url) location = new URL(swiper.params.url);
        else location = window.location;
        const slide = swiper.slides.eq(index);
        let value = slugify(slide.attr("data-history"));
        if (swiper.params.history.root.length > 0) {
            let root = swiper.params.history.root;
            if (root[root.length - 1] === "/") root = root.slice(0, root.length - 1);
            value = `${root}/${key}/${value}`;
        } else if (!location.pathname.includes(key)) value = `${key}/${value}`;
        const currentState = window.history.state;
        if (currentState && currentState.value === value) return;
        if (swiper.params.history.replaceState) window.history.replaceState({
            value
        }, null, value);
        else window.history.pushState({
            value
        }, null, value);
    };
    const scrollToSlide = (speed, value, runCallbacks)=>{
        if (value) for(let i = 0, length = swiper.slides.length; i < length; i += 1){
            const slide = swiper.slides.eq(i);
            const slideHistory = slugify(slide.attr("data-history"));
            if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                const index = slide.index();
                swiper.slideTo(index, speed, runCallbacks);
            }
        }
        else swiper.slideTo(0, speed, runCallbacks);
    };
    const setHistoryPopState = ()=>{
        paths = getPathValues(swiper.params.url);
        scrollToSlide(swiper.params.speed, swiper.paths.value, false);
    };
    const init = ()=>{
        const window = (0, _ssrWindow.getWindow)();
        if (!swiper.params.history) return;
        if (!window.history || !window.history.pushState) {
            swiper.params.history.enabled = false;
            swiper.params.hashNavigation.enabled = true;
            return;
        }
        initialized = true;
        paths = getPathValues(swiper.params.url);
        if (!paths.key && !paths.value) return;
        scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
        if (!swiper.params.history.replaceState) window.addEventListener("popstate", setHistoryPopState);
    };
    const destroy = ()=>{
        const window = (0, _ssrWindow.getWindow)();
        if (!swiper.params.history.replaceState) window.removeEventListener("popstate", setHistoryPopState);
    };
    on("init", ()=>{
        if (swiper.params.history.enabled) init();
    });
    on("destroy", ()=>{
        if (swiper.params.history.enabled) destroy();
    });
    on("transitionEnd _freeModeNoMomentumRelease", ()=>{
        if (initialized) setHistory(swiper.params.history.key, swiper.activeIndex);
    });
    on("slideChange", ()=>{
        if (initialized && swiper.params.cssMode) setHistory(swiper.params.history.key, swiper.activeIndex);
    });
}

},{"ssr-window":"3lyfI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6TTnC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>HashNavigation);
var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function HashNavigation({ swiper, extendParams, emit, on }) {
    let initialized = false;
    const document = (0, _ssrWindow.getDocument)();
    const window = (0, _ssrWindow.getWindow)();
    extendParams({
        hashNavigation: {
            enabled: false,
            replaceState: false,
            watchState: false
        }
    });
    const onHashChange = ()=>{
        emit("hashChange");
        const newHash = document.location.hash.replace("#", "");
        const activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr("data-hash");
        if (newHash !== activeSlideHash) {
            const newIndex = swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-hash="${newHash}"]`).index();
            if (typeof newIndex === "undefined") return;
            swiper.slideTo(newIndex);
        }
    };
    const setHash = ()=>{
        if (!initialized || !swiper.params.hashNavigation.enabled) return;
        if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
            window.history.replaceState(null, null, `#${swiper.slides.eq(swiper.activeIndex).attr("data-hash")}` || "");
            emit("hashSet");
        } else {
            const slide = swiper.slides.eq(swiper.activeIndex);
            const hash = slide.attr("data-hash") || slide.attr("data-history");
            document.location.hash = hash || "";
            emit("hashSet");
        }
    };
    const init = ()=>{
        if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
        initialized = true;
        const hash = document.location.hash.replace("#", "");
        if (hash) {
            const speed = 0;
            for(let i = 0, length = swiper.slides.length; i < length; i += 1){
                const slide = swiper.slides.eq(i);
                const slideHash = slide.attr("data-hash") || slide.attr("data-history");
                if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                    const index = slide.index();
                    swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
                }
            }
        }
        if (swiper.params.hashNavigation.watchState) (0, _domJsDefault.default)(window).on("hashchange", onHashChange);
    };
    const destroy = ()=>{
        if (swiper.params.hashNavigation.watchState) (0, _domJsDefault.default)(window).off("hashchange", onHashChange);
    };
    on("init", ()=>{
        if (swiper.params.hashNavigation.enabled) init();
    });
    on("destroy", ()=>{
        if (swiper.params.hashNavigation.enabled) destroy();
    });
    on("transitionEnd _freeModeNoMomentumRelease", ()=>{
        if (initialized) setHash();
    });
    on("slideChange", ()=>{
        if (initialized && swiper.params.cssMode) setHash();
    });
}

},{"ssr-window":"3lyfI","../../shared/dom.js":"7pW5q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1YoHq":[function(require,module,exports) {
/* eslint no-underscore-dangle: "off" */ /* eslint no-use-before-define: "off" */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Autoplay);
var _ssrWindow = require("ssr-window");
var _utilsJs = require("../../shared/utils.js");
function Autoplay({ swiper, extendParams, on, emit }) {
    let timeout;
    swiper.autoplay = {
        running: false,
        paused: false
    };
    extendParams({
        autoplay: {
            enabled: false,
            delay: 3000,
            waitForTransition: true,
            disableOnInteraction: true,
            stopOnLastSlide: false,
            reverseDirection: false,
            pauseOnMouseEnter: false
        }
    });
    function run() {
        const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
        let delay = swiper.params.autoplay.delay;
        if ($activeSlideEl.attr("data-swiper-autoplay")) delay = $activeSlideEl.attr("data-swiper-autoplay") || swiper.params.autoplay.delay;
        clearTimeout(timeout);
        timeout = (0, _utilsJs.nextTick)(()=>{
            let autoplayResult;
            if (swiper.params.autoplay.reverseDirection) {
                if (swiper.params.loop) {
                    swiper.loopFix();
                    autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
                    emit("autoplay");
                } else if (!swiper.isBeginning) {
                    autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
                    emit("autoplay");
                } else if (!swiper.params.autoplay.stopOnLastSlide) {
                    autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
                    emit("autoplay");
                } else stop();
            } else if (swiper.params.loop) {
                swiper.loopFix();
                autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
                emit("autoplay");
            } else if (!swiper.isEnd) {
                autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
                emit("autoplay");
            } else if (!swiper.params.autoplay.stopOnLastSlide) {
                autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
                emit("autoplay");
            } else stop();
            if (swiper.params.cssMode && swiper.autoplay.running) run();
            else if (autoplayResult === false) run();
        }, delay);
    }
    function start() {
        if (typeof timeout !== "undefined") return false;
        if (swiper.autoplay.running) return false;
        swiper.autoplay.running = true;
        emit("autoplayStart");
        run();
        return true;
    }
    function stop() {
        if (!swiper.autoplay.running) return false;
        if (typeof timeout === "undefined") return false;
        if (timeout) {
            clearTimeout(timeout);
            timeout = undefined;
        }
        swiper.autoplay.running = false;
        emit("autoplayStop");
        return true;
    }
    function pause(speed) {
        if (!swiper.autoplay.running) return;
        if (swiper.autoplay.paused) return;
        if (timeout) clearTimeout(timeout);
        swiper.autoplay.paused = true;
        if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
            swiper.autoplay.paused = false;
            run();
        } else [
            "transitionend",
            "webkitTransitionEnd"
        ].forEach((event)=>{
            swiper.$wrapperEl[0].addEventListener(event, onTransitionEnd);
        });
    }
    function onVisibilityChange() {
        const document = (0, _ssrWindow.getDocument)();
        if (document.visibilityState === "hidden" && swiper.autoplay.running) pause();
        if (document.visibilityState === "visible" && swiper.autoplay.paused) {
            run();
            swiper.autoplay.paused = false;
        }
    }
    function onTransitionEnd(e) {
        if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
        if (e.target !== swiper.$wrapperEl[0]) return;
        [
            "transitionend",
            "webkitTransitionEnd"
        ].forEach((event)=>{
            swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
        });
        swiper.autoplay.paused = false;
        if (!swiper.autoplay.running) stop();
        else run();
    }
    function onMouseEnter() {
        if (swiper.params.autoplay.disableOnInteraction) stop();
        else pause();
        [
            "transitionend",
            "webkitTransitionEnd"
        ].forEach((event)=>{
            swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
        });
    }
    function onMouseLeave() {
        if (swiper.params.autoplay.disableOnInteraction) return;
        swiper.autoplay.paused = false;
        run();
    }
    function attachMouseEvents() {
        if (swiper.params.autoplay.pauseOnMouseEnter) {
            swiper.$el.on("mouseenter", onMouseEnter);
            swiper.$el.on("mouseleave", onMouseLeave);
        }
    }
    function detachMouseEvents() {
        swiper.$el.off("mouseenter", onMouseEnter);
        swiper.$el.off("mouseleave", onMouseLeave);
    }
    on("init", ()=>{
        if (swiper.params.autoplay.enabled) {
            start();
            const document = (0, _ssrWindow.getDocument)();
            document.addEventListener("visibilitychange", onVisibilityChange);
            attachMouseEvents();
        }
    });
    on("beforeTransitionStart", (_s, speed, internal)=>{
        if (swiper.autoplay.running) {
            if (internal || !swiper.params.autoplay.disableOnInteraction) swiper.autoplay.pause(speed);
            else stop();
        }
    });
    on("sliderFirstMove", ()=>{
        if (swiper.autoplay.running) {
            if (swiper.params.autoplay.disableOnInteraction) stop();
            else pause();
        }
    });
    on("touchEnd", ()=>{
        if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) run();
    });
    on("destroy", ()=>{
        detachMouseEvents();
        if (swiper.autoplay.running) stop();
        const document = (0, _ssrWindow.getDocument)();
        document.removeEventListener("visibilitychange", onVisibilityChange);
    });
    Object.assign(swiper.autoplay, {
        pause,
        run,
        start,
        stop
    });
}

},{"ssr-window":"3lyfI","../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e0dJV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Thumb);
var _utilsJs = require("../../shared/utils.js");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function Thumb({ swiper, extendParams, on }) {
    extendParams({
        thumbs: {
            swiper: null,
            multipleActiveThumbs: true,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-thumbs"
        }
    });
    let initialized = false;
    let swiperCreated = false;
    swiper.thumbs = {
        swiper: null
    };
    function onThumbClick() {
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) return;
        const clickedIndex = thumbsSwiper.clickedIndex;
        const clickedSlide = thumbsSwiper.clickedSlide;
        if (clickedSlide && (0, _domJsDefault.default)(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
        if (typeof clickedIndex === "undefined" || clickedIndex === null) return;
        let slideToIndex;
        if (thumbsSwiper.params.loop) slideToIndex = parseInt((0, _domJsDefault.default)(thumbsSwiper.clickedSlide).attr("data-swiper-slide-index"), 10);
        else slideToIndex = clickedIndex;
        if (swiper.params.loop) {
            let currentIndex = swiper.activeIndex;
            if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
                swiper.loopFix(); // eslint-disable-next-line
                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
                currentIndex = swiper.activeIndex;
            }
            const prevIndex = swiper.slides.eq(currentIndex).prevAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
            const nextIndex = swiper.slides.eq(currentIndex).nextAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
            if (typeof prevIndex === "undefined") slideToIndex = nextIndex;
            else if (typeof nextIndex === "undefined") slideToIndex = prevIndex;
            else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;
            else slideToIndex = prevIndex;
        }
        swiper.slideTo(slideToIndex);
    }
    function init() {
        const { thumbs: thumbsParams } = swiper.params;
        if (initialized) return false;
        initialized = true;
        const SwiperClass = swiper.constructor;
        if (thumbsParams.swiper instanceof SwiperClass) {
            swiper.thumbs.swiper = thumbsParams.swiper;
            Object.assign(swiper.thumbs.swiper.originalParams, {
                watchSlidesProgress: true,
                slideToClickedSlide: false
            });
            Object.assign(swiper.thumbs.swiper.params, {
                watchSlidesProgress: true,
                slideToClickedSlide: false
            });
        } else if ((0, _utilsJs.isObject)(thumbsParams.swiper)) {
            const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
            Object.assign(thumbsSwiperParams, {
                watchSlidesProgress: true,
                slideToClickedSlide: false
            });
            swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
            swiperCreated = true;
        }
        swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
        swiper.thumbs.swiper.on("tap", onThumbClick);
        return true;
    }
    function update(initial) {
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) return;
        const slidesPerView = thumbsSwiper.params.slidesPerView === "auto" ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
        const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
        const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
        if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
            let currentThumbsIndex = thumbsSwiper.activeIndex;
            let newThumbsIndex;
            let direction;
            if (thumbsSwiper.params.loop) {
                if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
                    thumbsSwiper.loopFix(); // eslint-disable-next-line
                    thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
                    currentThumbsIndex = thumbsSwiper.activeIndex;
                } // Find actual thumbs index to slide to
                const prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
                const nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
                if (typeof prevThumbsIndex === "undefined") newThumbsIndex = nextThumbsIndex;
                else if (typeof nextThumbsIndex === "undefined") newThumbsIndex = prevThumbsIndex;
                else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) newThumbsIndex = thumbsSwiper.params.slidesPerGroup > 1 ? nextThumbsIndex : currentThumbsIndex;
                else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) newThumbsIndex = nextThumbsIndex;
                else newThumbsIndex = prevThumbsIndex;
                direction = swiper.activeIndex > swiper.previousIndex ? "next" : "prev";
            } else {
                newThumbsIndex = swiper.realIndex;
                direction = newThumbsIndex > swiper.previousIndex ? "next" : "prev";
            }
            if (useOffset) newThumbsIndex += direction === "next" ? autoScrollOffset : -1 * autoScrollOffset;
            if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
                if (thumbsSwiper.params.centeredSlides) {
                    if (newThumbsIndex > currentThumbsIndex) newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
                    else newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
                } else newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup;
                thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
            }
        } // Activate thumbs
        let thumbsToActivate = 1;
        const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
        if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) thumbsToActivate = swiper.params.slidesPerView;
        if (!swiper.params.thumbs.multipleActiveThumbs) thumbsToActivate = 1;
        thumbsToActivate = Math.floor(thumbsToActivate);
        thumbsSwiper.slides.removeClass(thumbActiveClass);
        if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) for(let i = 0; i < thumbsToActivate; i += 1)thumbsSwiper.$wrapperEl.children(`[data-swiper-slide-index="${swiper.realIndex + i}"]`).addClass(thumbActiveClass);
        else for(let i = 0; i < thumbsToActivate; i += 1)thumbsSwiper.slides.eq(swiper.realIndex + i).addClass(thumbActiveClass);
    }
    on("beforeInit", ()=>{
        const { thumbs } = swiper.params;
        if (!thumbs || !thumbs.swiper) return;
        init();
        update(true);
    });
    on("slideChange update resize observerUpdate", ()=>{
        if (!swiper.thumbs.swiper) return;
        update();
    });
    on("setTransition", (_s, duration)=>{
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) return;
        thumbsSwiper.setTransition(duration);
    });
    on("beforeDestroy", ()=>{
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) return;
        if (swiperCreated && thumbsSwiper) thumbsSwiper.destroy();
    });
    Object.assign(swiper.thumbs, {
        init,
        update
    });
}

},{"../../shared/utils.js":"dbikn","../../shared/dom.js":"7pW5q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4NFQW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>freeMode);
var _utilsJs = require("../../shared/utils.js");
function freeMode({ swiper, extendParams, emit, once }) {
    extendParams({
        freeMode: {
            enabled: false,
            momentum: true,
            momentumRatio: 1,
            momentumBounce: true,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 1,
            sticky: false,
            minimumVelocity: 0.02
        }
    });
    function onTouchMove() {
        const { touchEventsData: data, touches } = swiper; // Velocity
        if (data.velocities.length === 0) data.velocities.push({
            position: touches[swiper.isHorizontal() ? "startX" : "startY"],
            time: data.touchStartTime
        });
        data.velocities.push({
            position: touches[swiper.isHorizontal() ? "currentX" : "currentY"],
            time: (0, _utilsJs.now)()
        });
    }
    function onTouchEnd({ currentPos }) {
        const { params, $wrapperEl, rtlTranslate: rtl, snapGrid, touchEventsData: data } = swiper; // Time diff
        const touchEndTime = (0, _utilsJs.now)();
        const timeDiff = touchEndTime - data.touchStartTime;
        if (currentPos < -swiper.minTranslate()) {
            swiper.slideTo(swiper.activeIndex);
            return;
        }
        if (currentPos > -swiper.maxTranslate()) {
            if (swiper.slides.length < snapGrid.length) swiper.slideTo(snapGrid.length - 1);
            else swiper.slideTo(swiper.slides.length - 1);
            return;
        }
        if (params.freeMode.momentum) {
            if (data.velocities.length > 1) {
                const lastMoveEvent = data.velocities.pop();
                const velocityEvent = data.velocities.pop();
                const distance = lastMoveEvent.position - velocityEvent.position;
                const time = lastMoveEvent.time - velocityEvent.time;
                swiper.velocity = distance / time;
                swiper.velocity /= 2;
                if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) swiper.velocity = 0;
                 // this implies that the user stopped moving a finger then released.
                // There would be no events with distance zero, so the last event is stale.
                if (time > 150 || (0, _utilsJs.now)() - lastMoveEvent.time > 300) swiper.velocity = 0;
            } else swiper.velocity = 0;
            swiper.velocity *= params.freeMode.momentumVelocityRatio;
            data.velocities.length = 0;
            let momentumDuration = 1000 * params.freeMode.momentumRatio;
            const momentumDistance = swiper.velocity * momentumDuration;
            let newPosition = swiper.translate + momentumDistance;
            if (rtl) newPosition = -newPosition;
            let doBounce = false;
            let afterBouncePosition;
            const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
            let needsLoopFix;
            if (newPosition < swiper.maxTranslate()) {
                if (params.freeMode.momentumBounce) {
                    if (newPosition + swiper.maxTranslate() < -bounceAmount) newPosition = swiper.maxTranslate() - bounceAmount;
                    afterBouncePosition = swiper.maxTranslate();
                    doBounce = true;
                    data.allowMomentumBounce = true;
                } else newPosition = swiper.maxTranslate();
                if (params.loop && params.centeredSlides) needsLoopFix = true;
            } else if (newPosition > swiper.minTranslate()) {
                if (params.freeMode.momentumBounce) {
                    if (newPosition - swiper.minTranslate() > bounceAmount) newPosition = swiper.minTranslate() + bounceAmount;
                    afterBouncePosition = swiper.minTranslate();
                    doBounce = true;
                    data.allowMomentumBounce = true;
                } else newPosition = swiper.minTranslate();
                if (params.loop && params.centeredSlides) needsLoopFix = true;
            } else if (params.freeMode.sticky) {
                let nextSlide;
                for(let j = 0; j < snapGrid.length; j += 1)if (snapGrid[j] > -newPosition) {
                    nextSlide = j;
                    break;
                }
                if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === "next") newPosition = snapGrid[nextSlide];
                else newPosition = snapGrid[nextSlide - 1];
                newPosition = -newPosition;
            }
            if (needsLoopFix) once("transitionEnd", ()=>{
                swiper.loopFix();
            });
             // Fix duration
            if (swiper.velocity !== 0) {
                if (rtl) momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
                else momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
                if (params.freeMode.sticky) {
                    // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
                    // event, then durations can be 20+ seconds to slide one (or zero!) slides.
                    // It's easy to see this when simulating touch with mouse events. To fix this,
                    // limit single-slide swipes to the default slide duration. This also has the
                    // nice side effect of matching slide speed if the user stopped moving before
                    // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
                    // For faster swipes, also apply limits (albeit higher ones).
                    const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
                    const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
                    if (moveDistance < currentSlideSize) momentumDuration = params.speed;
                    else if (moveDistance < 2 * currentSlideSize) momentumDuration = params.speed * 1.5;
                    else momentumDuration = params.speed * 2.5;
                }
            } else if (params.freeMode.sticky) {
                swiper.slideToClosest();
                return;
            }
            if (params.freeMode.momentumBounce && doBounce) {
                swiper.updateProgress(afterBouncePosition);
                swiper.setTransition(momentumDuration);
                swiper.setTranslate(newPosition);
                swiper.transitionStart(true, swiper.swipeDirection);
                swiper.animating = true;
                $wrapperEl.transitionEnd(()=>{
                    if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
                    emit("momentumBounce");
                    swiper.setTransition(params.speed);
                    setTimeout(()=>{
                        swiper.setTranslate(afterBouncePosition);
                        $wrapperEl.transitionEnd(()=>{
                            if (!swiper || swiper.destroyed) return;
                            swiper.transitionEnd();
                        });
                    }, 0);
                });
            } else if (swiper.velocity) {
                emit("_freeModeNoMomentumRelease");
                swiper.updateProgress(newPosition);
                swiper.setTransition(momentumDuration);
                swiper.setTranslate(newPosition);
                swiper.transitionStart(true, swiper.swipeDirection);
                if (!swiper.animating) {
                    swiper.animating = true;
                    $wrapperEl.transitionEnd(()=>{
                        if (!swiper || swiper.destroyed) return;
                        swiper.transitionEnd();
                    });
                }
            } else swiper.updateProgress(newPosition);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        } else if (params.freeMode.sticky) {
            swiper.slideToClosest();
            return;
        } else if (params.freeMode) emit("_freeModeNoMomentumRelease");
        if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
            swiper.updateProgress();
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
    }
    Object.assign(swiper, {
        freeMode: {
            onTouchMove,
            onTouchEnd
        }
    });
}

},{"../../shared/utils.js":"dbikn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gE5KG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Grid);
function Grid({ swiper, extendParams }) {
    extendParams({
        grid: {
            rows: 1,
            fill: "column"
        }
    });
    let slidesNumberEvenToRows;
    let slidesPerRow;
    let numFullColumns;
    const initSlides = (slidesLength)=>{
        const { slidesPerView } = swiper.params;
        const { rows, fill } = swiper.params.grid;
        slidesPerRow = slidesNumberEvenToRows / rows;
        numFullColumns = Math.floor(slidesLength / rows);
        if (Math.floor(slidesLength / rows) === slidesLength / rows) slidesNumberEvenToRows = slidesLength;
        else slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
        if (slidesPerView !== "auto" && fill === "row") slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
    };
    const updateSlide = (i, slide, slidesLength, getDirectionLabel)=>{
        const { slidesPerGroup, spaceBetween } = swiper.params;
        const { rows, fill } = swiper.params.grid; // Set slides order
        let newSlideOrderIndex;
        let column;
        let row;
        if (fill === "row" && slidesPerGroup > 1) {
            const groupIndex = Math.floor(i / (slidesPerGroup * rows));
            const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
            const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
            row = Math.floor(slideIndexInGroup / columnsInGroup);
            column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
            newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
            slide.css({
                "-webkit-order": newSlideOrderIndex,
                order: newSlideOrderIndex
            });
        } else if (fill === "column") {
            column = Math.floor(i / rows);
            row = i - column * rows;
            if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
                row += 1;
                if (row >= rows) {
                    row = 0;
                    column += 1;
                }
            }
        } else {
            row = Math.floor(i / slidesPerRow);
            column = i - row * slidesPerRow;
        }
        slide.css(getDirectionLabel("margin-top"), row !== 0 ? spaceBetween && `${spaceBetween}px` : "");
    };
    const updateWrapperSize = (slideSize, snapGrid, getDirectionLabel)=>{
        const { spaceBetween, centeredSlides, roundLengths } = swiper.params;
        const { rows } = swiper.params.grid;
        swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
        swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
        swiper.$wrapperEl.css({
            [getDirectionLabel("width")]: `${swiper.virtualSize + spaceBetween}px`
        });
        if (centeredSlides) {
            snapGrid.splice(0, snapGrid.length);
            const newSlidesGrid = [];
            for(let i = 0; i < snapGrid.length; i += 1){
                let slidesGridItem = snapGrid[i];
                if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
            }
            snapGrid.push(...newSlidesGrid);
        }
    };
    swiper.grid = {
        initSlides,
        updateSlide,
        updateWrapperSize
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ga5Sr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Manipulation);
var _appendSlideJs = require("./methods/appendSlide.js");
var _appendSlideJsDefault = parcelHelpers.interopDefault(_appendSlideJs);
var _prependSlideJs = require("./methods/prependSlide.js");
var _prependSlideJsDefault = parcelHelpers.interopDefault(_prependSlideJs);
var _addSlideJs = require("./methods/addSlide.js");
var _addSlideJsDefault = parcelHelpers.interopDefault(_addSlideJs);
var _removeSlideJs = require("./methods/removeSlide.js");
var _removeSlideJsDefault = parcelHelpers.interopDefault(_removeSlideJs);
var _removeAllSlidesJs = require("./methods/removeAllSlides.js");
var _removeAllSlidesJsDefault = parcelHelpers.interopDefault(_removeAllSlidesJs);
function Manipulation({ swiper }) {
    Object.assign(swiper, {
        appendSlide: (0, _appendSlideJsDefault.default).bind(swiper),
        prependSlide: (0, _prependSlideJsDefault.default).bind(swiper),
        addSlide: (0, _addSlideJsDefault.default).bind(swiper),
        removeSlide: (0, _removeSlideJsDefault.default).bind(swiper),
        removeAllSlides: (0, _removeAllSlidesJsDefault.default).bind(swiper)
    });
}

},{"./methods/appendSlide.js":"69bun","./methods/prependSlide.js":"djuuM","./methods/addSlide.js":"4opfk","./methods/removeSlide.js":"8WI06","./methods/removeAllSlides.js":"7pufd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"69bun":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>appendSlide);
function appendSlide(slides) {
    const swiper = this;
    const { $wrapperEl, params } = swiper;
    if (params.loop) swiper.loopDestroy();
    if (typeof slides === "object" && "length" in slides) {
        for(let i = 0; i < slides.length; i += 1)if (slides[i]) $wrapperEl.append(slides[i]);
    } else $wrapperEl.append(slides);
    if (params.loop) swiper.loopCreate();
    if (!params.observer) swiper.update();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"djuuM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>prependSlide);
function prependSlide(slides) {
    const swiper = this;
    const { params, $wrapperEl, activeIndex } = swiper;
    if (params.loop) swiper.loopDestroy();
    let newActiveIndex = activeIndex + 1;
    if (typeof slides === "object" && "length" in slides) {
        for(let i = 0; i < slides.length; i += 1)if (slides[i]) $wrapperEl.prepend(slides[i]);
        newActiveIndex = activeIndex + slides.length;
    } else $wrapperEl.prepend(slides);
    if (params.loop) swiper.loopCreate();
    if (!params.observer) swiper.update();
    swiper.slideTo(newActiveIndex, 0, false);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4opfk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>addSlide);
function addSlide(index, slides) {
    const swiper = this;
    const { $wrapperEl, params, activeIndex } = swiper;
    let activeIndexBuffer = activeIndex;
    if (params.loop) {
        activeIndexBuffer -= swiper.loopedSlides;
        swiper.loopDestroy();
        swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
    }
    const baseLength = swiper.slides.length;
    if (index <= 0) {
        swiper.prependSlide(slides);
        return;
    }
    if (index >= baseLength) {
        swiper.appendSlide(slides);
        return;
    }
    let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
    const slidesBuffer = [];
    for(let i = baseLength - 1; i >= index; i -= 1){
        const currentSlide = swiper.slides.eq(i);
        currentSlide.remove();
        slidesBuffer.unshift(currentSlide);
    }
    if (typeof slides === "object" && "length" in slides) {
        for(let i = 0; i < slides.length; i += 1)if (slides[i]) $wrapperEl.append(slides[i]);
        newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
    } else $wrapperEl.append(slides);
    for(let i = 0; i < slidesBuffer.length; i += 1)$wrapperEl.append(slidesBuffer[i]);
    if (params.loop) swiper.loopCreate();
    if (!params.observer) swiper.update();
    if (params.loop) swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    else swiper.slideTo(newActiveIndex, 0, false);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8WI06":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>removeSlide);
function removeSlide(slidesIndexes) {
    const swiper = this;
    const { params, $wrapperEl, activeIndex } = swiper;
    let activeIndexBuffer = activeIndex;
    if (params.loop) {
        activeIndexBuffer -= swiper.loopedSlides;
        swiper.loopDestroy();
        swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
    }
    let newActiveIndex = activeIndexBuffer;
    let indexToRemove;
    if (typeof slidesIndexes === "object" && "length" in slidesIndexes) {
        for(let i = 0; i < slidesIndexes.length; i += 1){
            indexToRemove = slidesIndexes[i];
            if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
            if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
        }
        newActiveIndex = Math.max(newActiveIndex, 0);
    } else {
        indexToRemove = slidesIndexes;
        if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
        if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
        newActiveIndex = Math.max(newActiveIndex, 0);
    }
    if (params.loop) swiper.loopCreate();
    if (!params.observer) swiper.update();
    if (params.loop) swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    else swiper.slideTo(newActiveIndex, 0, false);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7pufd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>removeAllSlides);
function removeAllSlides() {
    const swiper = this;
    const slidesIndexes = [];
    for(let i = 0; i < swiper.slides.length; i += 1)slidesIndexes.push(i);
    swiper.removeSlide(slidesIndexes);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fBGpM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>EffectFade);
var _effectInitJs = require("../../shared/effect-init.js");
var _effectInitJsDefault = parcelHelpers.interopDefault(_effectInitJs);
var _effectTargetJs = require("../../shared/effect-target.js");
var _effectTargetJsDefault = parcelHelpers.interopDefault(_effectTargetJs);
var _effectVirtualTransitionEndJs = require("../../shared/effect-virtual-transition-end.js");
var _effectVirtualTransitionEndJsDefault = parcelHelpers.interopDefault(_effectVirtualTransitionEndJs);
function EffectFade({ swiper, extendParams, on }) {
    extendParams({
        fadeEffect: {
            crossFade: false,
            transformEl: null
        }
    });
    const setTranslate = ()=>{
        const { slides } = swiper;
        const params = swiper.params.fadeEffect;
        for(let i = 0; i < slides.length; i += 1){
            const $slideEl = swiper.slides.eq(i);
            const offset = $slideEl[0].swiperSlideOffset;
            let tx = -offset;
            if (!swiper.params.virtualTranslate) tx -= swiper.translate;
            let ty = 0;
            if (!swiper.isHorizontal()) {
                ty = tx;
                tx = 0;
            }
            const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
            const $targetEl = (0, _effectTargetJsDefault.default)(params, $slideEl);
            $targetEl.css({
                opacity: slideOpacity
            }).transform(`translate3d(${tx}px, ${ty}px, 0px)`);
        }
    };
    const setTransition = (duration)=>{
        const { transformEl } = swiper.params.fadeEffect;
        const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
        $transitionElements.transition(duration);
        (0, _effectVirtualTransitionEndJsDefault.default)({
            swiper,
            duration,
            transformEl,
            allSlides: true
        });
    };
    (0, _effectInitJsDefault.default)({
        effect: "fade",
        swiper,
        on,
        setTranslate,
        setTransition,
        overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                spaceBetween: 0,
                virtualTranslate: !swiper.params.cssMode
            })
    });
}

},{"../../shared/effect-init.js":"5DnvG","../../shared/effect-target.js":"eKqS8","../../shared/effect-virtual-transition-end.js":"VhYFx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5DnvG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>effectInit);
function effectInit(params) {
    const { effect, swiper, on, setTranslate, setTransition, overwriteParams, perspective } = params;
    on("beforeInit", ()=>{
        if (swiper.params.effect !== effect) return;
        swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
        if (perspective && perspective()) swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
        const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
        Object.assign(swiper.params, overwriteParamsResult);
        Object.assign(swiper.originalParams, overwriteParamsResult);
    });
    on("setTranslate", ()=>{
        if (swiper.params.effect !== effect) return;
        setTranslate();
    });
    on("setTransition", (_s, duration)=>{
        if (swiper.params.effect !== effect) return;
        setTransition(duration);
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eKqS8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>effectTarget);
function effectTarget(effectParams, $slideEl) {
    if (effectParams.transformEl) return $slideEl.find(effectParams.transformEl).css({
        "backface-visibility": "hidden",
        "-webkit-backface-visibility": "hidden"
    });
    return $slideEl;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"VhYFx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>effectVirtualTransitionEnd);
function effectVirtualTransitionEnd({ swiper, duration, transformEl, allSlides }) {
    const { slides, activeIndex, $wrapperEl } = swiper;
    if (swiper.params.virtualTranslate && duration !== 0) {
        let eventTriggered = false;
        let $transitionEndTarget;
        if (allSlides) $transitionEndTarget = transformEl ? slides.find(transformEl) : slides;
        else $transitionEndTarget = transformEl ? slides.eq(activeIndex).find(transformEl) : slides.eq(activeIndex);
        $transitionEndTarget.transitionEnd(()=>{
            if (eventTriggered) return;
            if (!swiper || swiper.destroyed) return;
            eventTriggered = true;
            swiper.animating = false;
            const triggerEvents = [
                "webkitTransitionEnd",
                "transitionend"
            ];
            for(let i = 0; i < triggerEvents.length; i += 1)$wrapperEl.trigger(triggerEvents[i]);
        });
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hV6iY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>EffectCube);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _effectInitJs = require("../../shared/effect-init.js");
var _effectInitJsDefault = parcelHelpers.interopDefault(_effectInitJs);
function EffectCube({ swiper, extendParams, on }) {
    extendParams({
        cubeEffect: {
            slideShadows: true,
            shadow: true,
            shadowOffset: 20,
            shadowScale: 0.94
        }
    });
    const setTranslate = ()=>{
        const { $el, $wrapperEl, slides, width: swiperWidth, height: swiperHeight, rtlTranslate: rtl, size: swiperSize, browser } = swiper;
        const params = swiper.params.cubeEffect;
        const isHorizontal = swiper.isHorizontal();
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        let wrapperRotate = 0;
        let $cubeShadowEl;
        if (params.shadow) {
            if (isHorizontal) {
                $cubeShadowEl = $wrapperEl.find(".swiper-cube-shadow");
                if ($cubeShadowEl.length === 0) {
                    $cubeShadowEl = (0, _domJsDefault.default)('<div class="swiper-cube-shadow"></div>');
                    $wrapperEl.append($cubeShadowEl);
                }
                $cubeShadowEl.css({
                    height: `${swiperWidth}px`
                });
            } else {
                $cubeShadowEl = $el.find(".swiper-cube-shadow");
                if ($cubeShadowEl.length === 0) {
                    $cubeShadowEl = (0, _domJsDefault.default)('<div class="swiper-cube-shadow"></div>');
                    $el.append($cubeShadowEl);
                }
            }
        }
        for(let i = 0; i < slides.length; i += 1){
            const $slideEl = slides.eq(i);
            let slideIndex = i;
            if (isVirtual) slideIndex = parseInt($slideEl.attr("data-swiper-slide-index"), 10);
            let slideAngle = slideIndex * 90;
            let round = Math.floor(slideAngle / 360);
            if (rtl) {
                slideAngle = -slideAngle;
                round = Math.floor(-slideAngle / 360);
            }
            const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
            let tx = 0;
            let ty = 0;
            let tz = 0;
            if (slideIndex % 4 === 0) {
                tx = -round * 4 * swiperSize;
                tz = 0;
            } else if ((slideIndex - 1) % 4 === 0) {
                tx = 0;
                tz = -round * 4 * swiperSize;
            } else if ((slideIndex - 2) % 4 === 0) {
                tx = swiperSize + round * 4 * swiperSize;
                tz = swiperSize;
            } else if ((slideIndex - 3) % 4 === 0) {
                tx = -swiperSize;
                tz = 3 * swiperSize + swiperSize * 4 * round;
            }
            if (rtl) tx = -tx;
            if (!isHorizontal) {
                ty = tx;
                tx = 0;
            }
            const transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
            if (progress <= 1 && progress > -1) {
                wrapperRotate = slideIndex * 90 + progress * 90;
                if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
            }
            $slideEl.transform(transform);
            if (params.slideShadows) {
                // Set shadows
                let shadowBefore = isHorizontal ? $slideEl.find(".swiper-slide-shadow-left") : $slideEl.find(".swiper-slide-shadow-top");
                let shadowAfter = isHorizontal ? $slideEl.find(".swiper-slide-shadow-right") : $slideEl.find(".swiper-slide-shadow-bottom");
                if (shadowBefore.length === 0) {
                    shadowBefore = (0, _domJsDefault.default)(`<div class="swiper-slide-shadow-${isHorizontal ? "left" : "top"}"></div>`);
                    $slideEl.append(shadowBefore);
                }
                if (shadowAfter.length === 0) {
                    shadowAfter = (0, _domJsDefault.default)(`<div class="swiper-slide-shadow-${isHorizontal ? "right" : "bottom"}"></div>`);
                    $slideEl.append(shadowAfter);
                }
                if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
            }
        }
        $wrapperEl.css({
            "-webkit-transform-origin": `50% 50% -${swiperSize / 2}px`,
            "transform-origin": `50% 50% -${swiperSize / 2}px`
        });
        if (params.shadow) {
            if (isHorizontal) $cubeShadowEl.transform(`translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`);
            else {
                const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
                const scale1 = params.shadowScale;
                const scale2 = params.shadowScale / multiplier;
                const offset = params.shadowOffset;
                $cubeShadowEl.transform(`scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`);
            }
        }
        const zFactor = browser.isSafari || browser.isWebView ? -swiperSize / 2 : 0;
        $wrapperEl.transform(`translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`);
    };
    const setTransition = (duration)=>{
        const { $el, slides } = swiper;
        slides.transition(duration).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(duration);
        if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) $el.find(".swiper-cube-shadow").transition(duration);
    };
    (0, _effectInitJsDefault.default)({
        effect: "cube",
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: ()=>true,
        overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: false,
                virtualTranslate: true
            })
    });
}

},{"../../shared/dom.js":"7pW5q","../../shared/effect-init.js":"5DnvG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dI6Dz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>EffectFlip);
var _createShadowJs = require("../../shared/create-shadow.js");
var _createShadowJsDefault = parcelHelpers.interopDefault(_createShadowJs);
var _effectInitJs = require("../../shared/effect-init.js");
var _effectInitJsDefault = parcelHelpers.interopDefault(_effectInitJs);
var _effectTargetJs = require("../../shared/effect-target.js");
var _effectTargetJsDefault = parcelHelpers.interopDefault(_effectTargetJs);
var _effectVirtualTransitionEndJs = require("../../shared/effect-virtual-transition-end.js");
var _effectVirtualTransitionEndJsDefault = parcelHelpers.interopDefault(_effectVirtualTransitionEndJs);
function EffectFlip({ swiper, extendParams, on }) {
    extendParams({
        flipEffect: {
            slideShadows: true,
            limitRotation: true,
            transformEl: null
        }
    });
    const setTranslate = ()=>{
        const { slides, rtlTranslate: rtl } = swiper;
        const params = swiper.params.flipEffect;
        for(let i = 0; i < slides.length; i += 1){
            const $slideEl = slides.eq(i);
            let progress = $slideEl[0].progress;
            if (swiper.params.flipEffect.limitRotation) progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
            const offset = $slideEl[0].swiperSlideOffset;
            const rotate = -180 * progress;
            let rotateY = rotate;
            let rotateX = 0;
            let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
            let ty = 0;
            if (!swiper.isHorizontal()) {
                ty = tx;
                tx = 0;
                rotateX = -rotateY;
                rotateY = 0;
            } else if (rtl) rotateY = -rotateY;
            $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
            if (params.slideShadows) {
                // Set shadows
                let shadowBefore = swiper.isHorizontal() ? $slideEl.find(".swiper-slide-shadow-left") : $slideEl.find(".swiper-slide-shadow-top");
                let shadowAfter = swiper.isHorizontal() ? $slideEl.find(".swiper-slide-shadow-right") : $slideEl.find(".swiper-slide-shadow-bottom");
                if (shadowBefore.length === 0) shadowBefore = (0, _createShadowJsDefault.default)(params, $slideEl, swiper.isHorizontal() ? "left" : "top");
                if (shadowAfter.length === 0) shadowAfter = (0, _createShadowJsDefault.default)(params, $slideEl, swiper.isHorizontal() ? "right" : "bottom");
                if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
            }
            const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            const $targetEl = (0, _effectTargetJsDefault.default)(params, $slideEl);
            $targetEl.transform(transform);
        }
    };
    const setTransition = (duration)=>{
        const { transformEl } = swiper.params.flipEffect;
        const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
        $transitionElements.transition(duration).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(duration);
        (0, _effectVirtualTransitionEndJsDefault.default)({
            swiper,
            duration,
            transformEl
        });
    };
    (0, _effectInitJsDefault.default)({
        effect: "flip",
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: ()=>true,
        overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                spaceBetween: 0,
                virtualTranslate: !swiper.params.cssMode
            })
    });
}

},{"../../shared/create-shadow.js":"9JYAP","../../shared/effect-init.js":"5DnvG","../../shared/effect-target.js":"eKqS8","../../shared/effect-virtual-transition-end.js":"VhYFx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9JYAP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>createShadow);
var _domJs = require("./dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function createShadow(params, $slideEl, side) {
    const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ""}`;
    const $shadowContainer = params.transformEl ? $slideEl.find(params.transformEl) : $slideEl;
    let $shadowEl = $shadowContainer.children(`.${shadowClass}`);
    if (!$shadowEl.length) {
        $shadowEl = (0, _domJsDefault.default)(`<div class="swiper-slide-shadow${side ? `-${side}` : ""}"></div>`);
        $shadowContainer.append($shadowEl);
    }
    return $shadowEl;
}

},{"./dom.js":"7pW5q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9UFNU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>EffectCoverflow);
var _createShadowJs = require("../../shared/create-shadow.js");
var _createShadowJsDefault = parcelHelpers.interopDefault(_createShadowJs);
var _effectInitJs = require("../../shared/effect-init.js");
var _effectInitJsDefault = parcelHelpers.interopDefault(_effectInitJs);
var _effectTargetJs = require("../../shared/effect-target.js");
var _effectTargetJsDefault = parcelHelpers.interopDefault(_effectTargetJs);
function EffectCoverflow({ swiper, extendParams, on }) {
    extendParams({
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: true,
            transformEl: null
        }
    });
    const setTranslate = ()=>{
        const { width: swiperWidth, height: swiperHeight, slides, slidesSizesGrid } = swiper;
        const params = swiper.params.coverflowEffect;
        const isHorizontal = swiper.isHorizontal();
        const transform = swiper.translate;
        const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
        const rotate = isHorizontal ? params.rotate : -params.rotate;
        const translate = params.depth; // Each slide offset from center
        for(let i = 0, length = slides.length; i < length; i += 1){
            const $slideEl = slides.eq(i);
            const slideSize = slidesSizesGrid[i];
            const slideOffset = $slideEl[0].swiperSlideOffset;
            const offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * params.modifier;
            let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
            let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0
            let translateZ = -translate * Math.abs(offsetMultiplier);
            let stretch = params.stretch; // Allow percentage to make a relative stretch for responsive sliders
            if (typeof stretch === "string" && stretch.indexOf("%") !== -1) stretch = parseFloat(params.stretch) / 100 * slideSize;
            let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
            let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
            let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier); // Fix for ultra small values
            if (Math.abs(translateX) < 0.001) translateX = 0;
            if (Math.abs(translateY) < 0.001) translateY = 0;
            if (Math.abs(translateZ) < 0.001) translateZ = 0;
            if (Math.abs(rotateY) < 0.001) rotateY = 0;
            if (Math.abs(rotateX) < 0.001) rotateX = 0;
            if (Math.abs(scale) < 0.001) scale = 0;
            const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
            const $targetEl = (0, _effectTargetJsDefault.default)(params, $slideEl);
            $targetEl.transform(slideTransform);
            $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
            if (params.slideShadows) {
                // Set shadows
                let $shadowBeforeEl = isHorizontal ? $slideEl.find(".swiper-slide-shadow-left") : $slideEl.find(".swiper-slide-shadow-top");
                let $shadowAfterEl = isHorizontal ? $slideEl.find(".swiper-slide-shadow-right") : $slideEl.find(".swiper-slide-shadow-bottom");
                if ($shadowBeforeEl.length === 0) $shadowBeforeEl = (0, _createShadowJsDefault.default)(params, $slideEl, isHorizontal ? "left" : "top");
                if ($shadowAfterEl.length === 0) $shadowAfterEl = (0, _createShadowJsDefault.default)(params, $slideEl, isHorizontal ? "right" : "bottom");
                if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
            }
        }
    };
    const setTransition = (duration)=>{
        const { transformEl } = swiper.params.coverflowEffect;
        const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
        $transitionElements.transition(duration).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(duration);
    };
    (0, _effectInitJsDefault.default)({
        effect: "coverflow",
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: ()=>true,
        overwriteParams: ()=>({
                watchSlidesProgress: true
            })
    });
}

},{"../../shared/create-shadow.js":"9JYAP","../../shared/effect-init.js":"5DnvG","../../shared/effect-target.js":"eKqS8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6uSvC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>EffectCreative);
var _createShadowJs = require("../../shared/create-shadow.js");
var _createShadowJsDefault = parcelHelpers.interopDefault(_createShadowJs);
var _effectInitJs = require("../../shared/effect-init.js");
var _effectInitJsDefault = parcelHelpers.interopDefault(_effectInitJs);
var _effectTargetJs = require("../../shared/effect-target.js");
var _effectTargetJsDefault = parcelHelpers.interopDefault(_effectTargetJs);
var _effectVirtualTransitionEndJs = require("../../shared/effect-virtual-transition-end.js");
var _effectVirtualTransitionEndJsDefault = parcelHelpers.interopDefault(_effectVirtualTransitionEndJs);
function EffectCreative({ swiper, extendParams, on }) {
    extendParams({
        creativeEffect: {
            transformEl: null,
            limitProgress: 1,
            shadowPerProgress: false,
            progressMultiplier: 1,
            perspective: true,
            prev: {
                translate: [
                    0,
                    0,
                    0
                ],
                rotate: [
                    0,
                    0,
                    0
                ],
                opacity: 1,
                scale: 1
            },
            next: {
                translate: [
                    0,
                    0,
                    0
                ],
                rotate: [
                    0,
                    0,
                    0
                ],
                opacity: 1,
                scale: 1
            }
        }
    });
    const getTranslateValue = (value)=>{
        if (typeof value === "string") return value;
        return `${value}px`;
    };
    const setTranslate = ()=>{
        const { slides, $wrapperEl, slidesSizesGrid } = swiper;
        const params = swiper.params.creativeEffect;
        const { progressMultiplier: multiplier } = params;
        const isCenteredSlides = swiper.params.centeredSlides;
        if (isCenteredSlides) {
            const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
            $wrapperEl.transform(`translateX(calc(50% - ${margin}px))`);
        }
        for(let i = 0; i < slides.length; i += 1){
            const $slideEl = slides.eq(i);
            const slideProgress = $slideEl[0].progress;
            const progress = Math.min(Math.max($slideEl[0].progress, -params.limitProgress), params.limitProgress);
            let originalProgress = progress;
            if (!isCenteredSlides) originalProgress = Math.min(Math.max($slideEl[0].originalProgress, -params.limitProgress), params.limitProgress);
            const offset = $slideEl[0].swiperSlideOffset;
            const t = [
                swiper.params.cssMode ? -offset - swiper.translate : -offset,
                0,
                0
            ];
            const r = [
                0,
                0,
                0
            ];
            let custom = false;
            if (!swiper.isHorizontal()) {
                t[1] = t[0];
                t[0] = 0;
            }
            let data = {
                translate: [
                    0,
                    0,
                    0
                ],
                rotate: [
                    0,
                    0,
                    0
                ],
                scale: 1,
                opacity: 1
            };
            if (progress < 0) {
                data = params.next;
                custom = true;
            } else if (progress > 0) {
                data = params.prev;
                custom = true;
            } // set translate
            t.forEach((value, index)=>{
                t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
            }); // set rotates
            r.forEach((value, index)=>{
                r[index] = data.rotate[index] * Math.abs(progress * multiplier);
            });
            $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
            const translateString = t.join(", ");
            const rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`;
            const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
            const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
            const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`; // Set shadows
            if (custom && data.shadow || !custom) {
                let $shadowEl = $slideEl.children(".swiper-slide-shadow");
                if ($shadowEl.length === 0 && data.shadow) $shadowEl = (0, _createShadowJsDefault.default)(params, $slideEl);
                if ($shadowEl.length) {
                    const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
                    $shadowEl[0].style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
                }
            }
            const $targetEl = (0, _effectTargetJsDefault.default)(params, $slideEl);
            $targetEl.transform(transform).css({
                opacity: opacityString
            });
            if (data.origin) $targetEl.css("transform-origin", data.origin);
        }
    };
    const setTransition = (duration)=>{
        const { transformEl } = swiper.params.creativeEffect;
        const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
        $transitionElements.transition(duration).find(".swiper-slide-shadow").transition(duration);
        (0, _effectVirtualTransitionEndJsDefault.default)({
            swiper,
            duration,
            transformEl,
            allSlides: true
        });
    };
    (0, _effectInitJsDefault.default)({
        effect: "creative",
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: ()=>swiper.params.creativeEffect.perspective,
        overwriteParams: ()=>({
                watchSlidesProgress: true,
                virtualTranslate: !swiper.params.cssMode
            })
    });
}

},{"../../shared/create-shadow.js":"9JYAP","../../shared/effect-init.js":"5DnvG","../../shared/effect-target.js":"eKqS8","../../shared/effect-virtual-transition-end.js":"VhYFx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9saRD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>EffectCards);
var _createShadowJs = require("../../shared/create-shadow.js");
var _createShadowJsDefault = parcelHelpers.interopDefault(_createShadowJs);
var _effectInitJs = require("../../shared/effect-init.js");
var _effectInitJsDefault = parcelHelpers.interopDefault(_effectInitJs);
var _effectTargetJs = require("../../shared/effect-target.js");
var _effectTargetJsDefault = parcelHelpers.interopDefault(_effectTargetJs);
var _effectVirtualTransitionEndJs = require("../../shared/effect-virtual-transition-end.js");
var _effectVirtualTransitionEndJsDefault = parcelHelpers.interopDefault(_effectVirtualTransitionEndJs);
function EffectCards({ swiper, extendParams, on }) {
    extendParams({
        cardsEffect: {
            slideShadows: true,
            transformEl: null
        }
    });
    const setTranslate = ()=>{
        const { slides, activeIndex } = swiper;
        const params = swiper.params.cardsEffect;
        const { startTranslate, isTouched } = swiper.touchEventsData;
        const currentTranslate = swiper.translate;
        for(let i = 0; i < slides.length; i += 1){
            const $slideEl = slides.eq(i);
            const slideProgress = $slideEl[0].progress;
            const progress = Math.min(Math.max(slideProgress, -4), 4);
            let offset = $slideEl[0].swiperSlideOffset;
            if (swiper.params.centeredSlides && !swiper.params.cssMode) swiper.$wrapperEl.transform(`translateX(${swiper.minTranslate()}px)`);
            if (swiper.params.centeredSlides && swiper.params.cssMode) offset -= slides[0].swiperSlideOffset;
            let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
            let tY = 0;
            const tZ = -100 * Math.abs(progress);
            let scale = 1;
            let rotate = -2 * progress;
            let tXAdd = 8 - Math.abs(progress) * 0.75;
            const isSwipeToNext = (i === activeIndex || i === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
            const isSwipeToPrev = (i === activeIndex || i === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
            if (isSwipeToNext || isSwipeToPrev) {
                const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
                rotate += -28 * progress * subProgress;
                scale += -0.5 * subProgress;
                tXAdd += 96 * subProgress;
                tY = `${-25 * subProgress * Math.abs(progress)}%`;
            }
            if (progress < 0) // next
            tX = `calc(${tX}px + (${tXAdd * Math.abs(progress)}%))`;
            else if (progress > 0) // prev
            tX = `calc(${tX}px + (-${tXAdd * Math.abs(progress)}%))`;
            else tX = `${tX}px`;
            if (!swiper.isHorizontal()) {
                const prevY = tY;
                tY = tX;
                tX = prevY;
            }
            const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;
            const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${rotate}deg)
        scale(${scaleString})
      `;
            if (params.slideShadows) {
                // Set shadows
                let $shadowEl = $slideEl.find(".swiper-slide-shadow");
                if ($shadowEl.length === 0) $shadowEl = (0, _createShadowJsDefault.default)(params, $slideEl);
                if ($shadowEl.length) $shadowEl[0].style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
            }
            $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
            const $targetEl = (0, _effectTargetJsDefault.default)(params, $slideEl);
            $targetEl.transform(transform);
        }
    };
    const setTransition = (duration)=>{
        const { transformEl } = swiper.params.cardsEffect;
        const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
        $transitionElements.transition(duration).find(".swiper-slide-shadow").transition(duration);
        (0, _effectVirtualTransitionEndJsDefault.default)({
            swiper,
            duration,
            transformEl
        });
    };
    (0, _effectInitJsDefault.default)({
        effect: "cards",
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: ()=>true,
        overwriteParams: ()=>({
                watchSlidesProgress: true,
                virtualTranslate: !swiper.params.cssMode
            })
    });
}

},{"../../shared/create-shadow.js":"9JYAP","../../shared/effect-init.js":"5DnvG","../../shared/effect-target.js":"eKqS8","../../shared/effect-virtual-transition-end.js":"VhYFx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["j9r0q","ebWYT"], "ebWYT", "parcelRequire61d8")

//# sourceMappingURL=about.739bf03c.js.map
