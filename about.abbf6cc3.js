let e,t,n;function i(e){return e&&e.__esModule?e.default:e}var r,o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},a={},l=o.parcelRequire61d8;null==l&&((l=function(e){if(e in s)return s[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return s[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},o.parcelRequire61d8=l),l.register("3oRXo",function(e,t){var n,i;n="undefined"!=typeof window?window:e.exports,i=function(e,t){var n,i=[],r=Object.getPrototypeOf,o=i.slice,s=i.flat?function(e){return i.flat.call(e)}:function(e){return i.concat.apply([],e)},a=i.push,l=i.indexOf,c={},u=c.toString,d=c.hasOwnProperty,p=d.toString,h=p.call(Object),f={},g=function(e){// Support: Chrome <=57, Firefox <=52
// In some browsers, typeof returns "function" for HTML <object> elements
// (i.e., `typeof document.createElement( "object" ) === "function"`).
// We don't want to classify *any* DOM node as a function.
// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
// Plus for old WebKit, typeof returns "function" for HTML collections
// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},m=function(e){return null!=e&&e===e.window},v=e.document,y={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var i,r,o=(n=n||v).createElement("script");if(o.text=e,t)for(i in y)// Support: Firefox 64+, Edge 18+
// Some browsers don't support the "nonce" property on scripts.
// On the other hand, just using `getAttribute` is not enough as
// the `nonce` attribute is reset to an empty string whenever it
// becomes browsing-context connected.
// See https://github.com/whatwg/html/issues/2369
// See https://html.spec.whatwg.org/#nonce-attributes
// The `node.getAttribute` check was added for the sake of
// `jQuery.globalEval` so that it can fake a nonce-containing node
// via an object.
(r=t[i]||t.getAttribute&&t.getAttribute(i))&&o.setAttribute(i,r);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[u.call(e)]||"object":typeof e}/* global Symbol */// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module
var S="3.7.1",x=/HTML$/i,T=function(e,t){// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new T.fn.init(e,t)};function E(e){// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var t=!!e&&"length"in e&&e.length,n=w(e);return!(g(e)||m(e))&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}function C(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}T.fn=T.prototype={// The current version of jQuery being used
jquery:S,constructor:T,// The default length of a jQuery object is 0
length:0,toArray:function(){return o.call(this)},// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(e){return(// Return all the elements in a clean array
null==e?o.call(this):e<0?this[e+this.length]:this[e])},// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(e){// Build a new jQuery matched element set
var t=T.merge(this.constructor(),e);// Return the newly-formed element set
return(// Add the old object onto the stack (as a reference)
t.prevObject=this,t)},// Execute a callback for every element in the matched set.
each:function(e){return T.each(this,e)},map:function(e){return this.pushStack(T.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(T.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(T.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:a,sort:i.sort,splice:i.splice},T.extend=T.fn.extend=function(){var e,t,n,i,r,o,s=arguments[0]||{},a=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,// Skip the boolean and the target
s=arguments[a]||{},a++),"object"==typeof s||g(s)||(s={}),a===l&&(s=this,a--);a<l;a++)// Only deal with non-null/undefined values
if(null!=(e=arguments[a]))for(t in e)i=e[t],"__proto__"!==t&&s!==i&&(c&&i&&(T.isPlainObject(i)||(r=Array.isArray(i)))?(n=s[t],o=r&&!Array.isArray(n)?[]:r||T.isPlainObject(n)?n:{},r=!1,// Never move original objects, clone them
s[t]=T.extend(c,o,i)):void 0!==i&&(s[t]=i));// Return the modified object
return s},T.extend({// Unique for each copy of jQuery on the page
expando:"jQuery"+(S+Math.random()).replace(/\D/g,""),// Assume jQuery is ready without the ready module
isReady:!0,error:function(e){throw Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return(// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
!!e&&"[object Object]"===u.call(e)&&(!(t=r(e))||"function"==typeof// Objects with prototype are plain iff they were constructed by a global Object function
(n=d.call(t,"constructor")&&t.constructor)&&p.call(n)===h))},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},// Evaluates a script in a provided context; falls back to the global one
// if not specified.
globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,i=0;if(E(e))for(n=e.length;i<n&&!1!==t.call(e[i],i,e[i]);i++);else for(i in e)if(!1===t.call(e[i],i,e[i]))break;return e},// Retrieve the text value of an array of DOM nodes
text:function(e){var t,n="",i=0,r=e.nodeType;if(!r)for(;t=e[i++];)n+=T.text(t);return 1===r||11===r?e.textContent:9===r?e.documentElement.textContent:3===r||4===r?e.nodeValue:n},// results is for internal usage only
makeArray:function(e,t){var n=t||[];return null!=e&&(E(Object(e))?T.merge(n,"string"==typeof e?[e]:e):a.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:l.call(t,e,n)},isXMLDoc:function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;// Assume HTML when documentElement doesn't yet exist, such as inside
// document fragments.
return!x.test(t||n&&n.nodeName||"HTML")},// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
merge:function(e,t){for(var n=+t.length,i=0,r=e.length;i<n;i++)e[r++]=t[i];return e.length=r,e},grep:function(e,t,n){// Go through the array, only saving the items
// that pass the validator function
for(var i=[],r=0,o=e.length,s=!n;r<o;r++)!t(e[r],r)!==s&&i.push(e[r]);return i},// arg is for internal usage only
map:function(e,t,n){var i,r,o=0,a=[];// Go through the array, translating each of the items to their new values
if(E(e))for(i=e.length;o<i;o++)null!=(r=t(e[o],o,n))&&a.push(r);else for(o in e)null!=(r=t(e[o],o,n))&&a.push(r);// Flatten any nested arrays
return s(a)},// A global GUID counter for objects
guid:1,// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:f}),"function"==typeof Symbol&&(T.fn[Symbol.iterator]=i[Symbol.iterator]),// Populate the class2type map
T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});var A=i.pop,L=i.sort,k=i.splice,_="[\\x20\\t\\r\\n\\f]",D=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g");// Note: an element does not contain itself
T.contains=function(e,t){var n=t&&t.parentNode;return e===n||!!(n&&1===n.nodeType&&// Support: IE 9 - 11+
// IE doesn't have `contains` on SVG.
(e.contains?e.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))};// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
var O=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function M(e,t){return t?// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
"\x00"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}T.escapeSelector=function(e){return(e+"").replace(O,M)},function(){var t,n,r,s,c,u,p,h,g,m,y=a,b=T.expando,w=0,S=0,x=et(),E=et(),O=et(),M=et(),P=function(e,t){return e===t&&(c=!0),0},j="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
I="(?:\\\\[\\da-fA-F]{1,6}"+_+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+",N="\\["+_+"*("+I+")(?:"+_+// Operator (capture 2)
"*([*^$|!~]?=)"+_+// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+_+"*\\]",H=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",R=RegExp(_+"+","g"),q=RegExp("^"+_+"*,"+_+"*"),z=RegExp("^"+_+"*([>+~]|"+_+")"+_+"*"),B=RegExp(_+"|>"),F=new RegExp(H),W=RegExp("^"+I+"$"),G={ID:RegExp("^#("+I+")"),CLASS:RegExp("^\\.("+I+")"),TAG:RegExp("^("+I+"|[*])"),ATTR:RegExp("^"+N),PSEUDO:RegExp("^"+H),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),bool:RegExp("^(?:"+j+")$","i"),// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},U=/^(?:input|select|textarea|button)$/i,V=/^h\d$/i,X=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Y=/[+~]/,// https://www.w3.org/TR/CSS21/syndata.html#escaped-characters
K=RegExp("\\\\[\\da-fA-F]{1,6}"+_+"?|\\\\([^\\r\\n\\f])","g"),Q=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},// Support: IE 9 - 11+, Edge 12 - 18+
// Removing the function wrapper causes a "Permission Denied"
// error in IE/Edge.
Z=function(){ea()},J=ed(function(e){return!0===e.disabled&&C(e,"fieldset")},{dir:"parentNode",next:"legend"});// Optimize for push.apply( _, NodeList )
try{y.apply(i=o.call(v.childNodes),v.childNodes),// Support: Android <=4.0
// Detect silently failing push.apply
// eslint-disable-next-line no-unused-expressions
i[v.childNodes.length].nodeType}catch(e){y={apply:function(e,t){a.apply(e,o.call(t))},call:function(e){a.apply(e,o.call(arguments,1))}}}function ee(e,t,n,i){var r,o,s,a,l,c,d,p=t&&t.ownerDocument,m=t?t.nodeType:9;// Return early from calls with invalid selector or context
if(n=n||[],"string"!=typeof e||!e||1!==m&&9!==m&&11!==m)return n;// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!i&&(ea(t),t=t||u,h)){// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(11!==m&&(l=X.exec(e))){// ID selector
if(r=l[1]){// Document context
if(9===m){if(!(s=t.getElementById(r)))return n;if(s.id===r)return y.call(n,s),n;// Element context
}else // getElementById can match elements by name instead of ID
if(p&&(s=p.getElementById(r))&&ee.contains(t,s)&&s.id===r)return y.call(n,s),n}else if(l[2])return y.apply(n,t.getElementsByTagName(e)),n;else if((r=l[3])&&t.getElementsByClassName)return y.apply(n,t.getElementsByClassName(r)),n}// Take advantage of querySelectorAll
if(!M[e+" "]&&(!g||!g.test(e))){// qSA considers elements outside a scoping root when evaluating child or
// descendant combinators, which is not what we want.
// In such cases, we work around the behavior by prefixing every selector in the
// list with an ID selector referencing the scope context.
// The technique has to be used as well when a leading combinator is used
// as such selectors are not recognized by querySelectorAll.
// Thanks to Andrew Dupont for this technique.
if(d=e,p=t,1===m&&(B.test(e)||z.test(e))){for(// Expand context for sibling selectors
(p=Y.test(e)&&es(t.parentNode)||t)==t&&f.scope||((a=t.getAttribute("id"))?a=T.escapeSelector(a):t.setAttribute("id",a=b)),o=// Prefix every selector in the list
(c=ec(e)).length;o--;)c[o]=(a?"#"+a:":scope")+" "+eu(c[o]);d=c.join(",")}try{return y.apply(n,p.querySelectorAll(d)),n}catch(t){M(e,!0)}finally{a===b&&t.removeAttribute("id")}}}// All others
return eg(e.replace(D,"$1"),t,n,i)}/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */function et(){var e=[];function t(i,r){return e.push(i+" ")>n.cacheLength&&delete t[e.shift()],t[i+" "]=r}return t}/**
 * Mark a function for special use by jQuery selector module
 * @param {Function} fn The function to mark
 */function en(e){return e[b]=!0,e}/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */function ei(e){var t=u.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),// release memory in IE
t=null}}/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */function er(e){// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
return function(t){// Only certain elements can match :enabled or :disabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
if("form"in t)return(// Check for inherited disabledness on relevant non-disabled elements:
// * listed form-associated elements in a disabled fieldset
//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
// * option elements in a disabled optgroup
//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
// All such elements have a "form" property.
t.parentNode&&!1===t.disabled?// Option elements defer to a parent optgroup if present
"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||// Where there is no isDisabled, check manually
!e!==t.isDisabled&&J(t)===e:t.disabled===e);return"label"in t&&t.disabled===e}}/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */function eo(e){return en(function(t){return t=+t,en(function(n,i){// Match elements found at the specified indexes
for(var r,o=e([],n.length,t),s=o.length;s--;)n[r=o[s]]&&(n[r]=!(i[r]=n[r]))})})}/**
 * Checks a node for validity as a jQuery selector context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */function es(e){return e&&void 0!==e.getElementsByTagName&&e}/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [node] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */function ea(e){var t,i=e?e.ownerDocument||e:v;return i!=u&&9===i.nodeType&&i.documentElement&&(p=// Update global variables
(u=i).documentElement,h=!T.isXMLDoc(u),// Support: iOS 7 only, IE 9 - 11+
// Older browsers didn't support unprefixed `matches`.
m=p.matches||p.webkitMatchesSelector||p.msMatchesSelector,p.msMatchesSelector&&// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
v!=u&&(t=u.defaultView)&&t.top!==t&&t.addEventListener("unload",Z),// Support: IE <10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programmatically-set names,
// so use a roundabout getElementsByName test
f.getById=ei(function(e){return p.appendChild(e).id=T.expando,!u.getElementsByName||!u.getElementsByName(T.expando).length}),// Support: IE 9 only
// Check to see if it's possible to do matchesSelector
// on a disconnected node.
f.disconnectedMatch=ei(function(e){return m.call(e,"*")}),// Support: IE 9 - 11+, Edge 12 - 18+
// IE/Edge don't support the :scope pseudo-class.
f.scope=ei(function(){return u.querySelectorAll(":scope")}),// Support: Chrome 105 - 111 only, Safari 15.4 - 16.3 only
// Make sure the `:has()` argument is parsed unforgivingly.
// We include `*` in the test to detect buggy implementations that are
// _selectively_ forgiving (specifically when the list includes at least
// one valid selector).
// Note that we treat complete lack of support for `:has()` as if it were
// spec-compliant support, which is fine because use of `:has()` in such
// environments will fail in the qSA path and fall back to jQuery traversal
// anyway.
f.cssHas=ei(function(){try{return u.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}}),f.getById?(n.filter.ID=function(e){var t=e.replace(K,Q);return function(e){return e.getAttribute("id")===t}},n.find.ID=function(e,t){if(void 0!==t.getElementById&&h){var n=t.getElementById(e);return n?[n]:[]}}):(n.filter.ID=function(e){var t=e.replace(K,Q);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},// Support: IE 6 - 7 only
// getElementById is not reliable as a find shortcut
n.find.ID=function(e,t){if(void 0!==t.getElementById&&h){var n,i,r,o=t.getElementById(e);if(o){if(// Verify the id attribute
(n=o.getAttributeNode("id"))&&n.value===e)return[o];for(// Fall back on getElementsByName
r=t.getElementsByName(e),i=0;o=r[i++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),// Tag
n.find.TAG=function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):t.querySelectorAll(e)},// Class
n.find.CLASS=function(e,t){if(void 0!==t.getElementsByClassName&&h)return t.getElementsByClassName(e)},/* QSA/matchesSelector
	---------------------------------------------------------------------- */// QSA and matchesSelector support
g=[],// Build QSA regex
// Regex strategy adopted from Diego Perini
ei(function(e){var t;p.appendChild(e).innerHTML="<a id='"+b+"' href='' disabled='disabled'></a><select id='"+b+"-\r\\' disabled='disabled'><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+_+"*(?:value|"+j+")"),e.querySelectorAll("[id~="+b+"-]").length||g.push("~="),e.querySelectorAll("a#"+b+"+*").length||g.push(".#.+[+~]"),e.querySelectorAll(":checked").length||g.push(":checked"),// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
(t=u.createElement("input")).setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),// Support: IE 9 - 11+
// IE's :disabled selector does not pick up the children of disabled fieldsets
// Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
// In some of the document kinds, these selectors wouldn't work natively.
// This is probably OK but for backwards compatibility we want to maintain
// handling them through jQuery traversal in jQuery 3.x.
p.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&g.push(":enabled",":disabled"),// Support: IE 11+, Edge 15 - 18+
// IE 11/Edge don't find elements on a `[name='']` query in some cases.
// Adding a temporary attribute to the document before the selection works
// around the issue.
// Interestingly, IE 10 & older don't seem to have the issue.
(t=u.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||g.push("\\["+_+"*name"+_+"*="+_+"*(?:''|\"\")")}),f.cssHas||// Our regular `try-catch` mechanism fails to detect natively-unsupported
// pseudo-classes inside `:has()` (such as `:has(:contains("Foo"))`)
// in browsers that parse the `:has()` argument as a forgiving selector list.
// https://drafts.csswg.org/selectors/#relational now requires the argument
// to be parsed unforgivingly, but browsers have not yet fully adjusted.
g.push(":has"),g=g.length&&new RegExp(g.join("|")),/* Sorting
	---------------------------------------------------------------------- */// Document order sorting
P=function(e,t){// Flag for duplicate removal
if(e===t)return c=!0,0;// Sort on method existence if only one input has compareDocumentPosition
var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&// Calculate position if both inputs belong to the same document
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!f.sortDetached&&t.compareDocumentPosition(e)===n?// Choose the first element that is related to our preferred document
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
e===u||e.ownerDocument==v&&ee.contains(v,e)?-1:t===u||t.ownerDocument==v&&ee.contains(v,t)?1:s?l.call(s,e)-l.call(s,t):0:4&n?-1:1)}),u}// Add button/input type pseudos
for(t in ee.matches=function(e,t){return ee(e,null,null,t)},ee.matchesSelector=function(e,t){if(ea(e),h&&!M[t+" "]&&(!g||!g.test(t)))try{var n=m.call(e,t);// IE 9's matchesSelector returns false on disconnected nodes
if(n||f.disconnectedMatch||// As well, disconnected nodes are said to be in a document
// fragment in IE 9
e.document&&11!==e.document.nodeType)return n}catch(e){M(t,!0)}return ee(t,u,null,[e]).length>0},ee.contains=function(e,t){return(e.ownerDocument||e)!=u&&ea(e),T.contains(e,t)},ee.attr=function(e,t){// Set document vars if needed
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
(e.ownerDocument||e)!=u&&ea(e);var i=n.attrHandle[t.toLowerCase()],r=i&&d.call(n.attrHandle,t.toLowerCase())?i(e,t,!h):void 0;return void 0!==r?r:e.getAttribute(t)},ee.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */T.uniqueSort=function(e){var t,n=[],i=0,r=0;if(// Unless we *know* we can detect duplicates, assume their presence
//
// Support: Android <=4.0+
// Testing for detecting duplicates is unpredictable so instead assume we can't
// depend on duplicate detection in all browsers without a stable sort.
c=!f.sortStable,s=!f.sortStable&&o.call(e,0),L.call(e,P),c){for(;t=e[r++];)t===e[r]&&(i=n.push(r));for(;i--;)k.call(e,n[i],1)}return(// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
s=null,e)},T.fn.uniqueSort=function(){return this.pushStack(T.uniqueSort(o.apply(this)))},(n=T.expr={// Can be adjusted by the user
cacheLength:50,createPseudo:en,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(K,Q),// Move the given value to match[3] whether quoted or unquoted
e[3]=(e[3]||e[4]||e[5]||"").replace(K,Q),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return(/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ee.error(e[0]),// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ee.error(e[0]),e)},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&F.test(n)&&// Get excess from tokenize (recursively)
(t=ec(n,!0))&&// advance to the next closing parenthesis
(t=n.indexOf(")",n.length-t)-n.length)&&(// excess is a negative index
e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(K,Q).toLowerCase();return"*"===e?function(){return!0}:function(e){return C(e,t)}},CLASS:function(e){var t=x[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"),x(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")}))},ATTR:function(e,t,n){return function(i){var r=ee.attr(i,e);return null==r?"!="===t:!t||((r+="","="===t)?r===n:"!="===t?r!==n:"^="===t?n&&0===r.indexOf(n):"*="===t?n&&r.indexOf(n)>-1:"$="===t?n&&r.slice(-n.length)===n:"~="===t?(" "+r.replace(R," ")+" ").indexOf(n)>-1:"|="===t&&(r===n||r.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,i,r){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===i&&0===r?function(e){return!!e.parentNode}:function(t,n,l){var c,u,d,p,h,f=o!==s?"nextSibling":"previousSibling",g=t.parentNode,m=a&&t.nodeName.toLowerCase(),v=!l&&!a,y=!1;if(g){// :(first|last|only)-(child|of-type)
if(o){for(;f;){for(d=t;d=d[f];)if(a?C(d,m):1===d.nodeType)return!1;// Reverse direction for :only-* (if we haven't yet done so)
h=f="only"===e&&!h&&"nextSibling"}return!0}// non-xml :nth-child(...) stores cache data on `parent`
if(h=[s?g.firstChild:g.lastChild],s&&v){for(y=(p=(c=// Seek `elem` from a previously-cached index
(u=g[b]||(g[b]={}))[e]||[])[0]===w&&c[1])&&c[2],d=p&&g.childNodes[p];d=++p&&d&&d[f]||// Fallback to seeking `elem` from the start
(y=p=0)||h.pop();)if(1===d.nodeType&&++y&&d===t){u[e]=[w,p,y];break}}else // xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(v&&(y=p=(c=(u=t[b]||(t[b]={}))[e]||[])[0]===w&&c[1]),!1===y)// Use the same loop as above to seek `elem` from the start
for(;(d=++p&&d&&d[f]||(y=p=0)||h.pop())&&(!((a?C(d,m):1===d.nodeType)&&++y)||(v&&((u=d[b]||(d[b]={}))[e]=[w,y]),d!==t)););return(// Incorporate the offset, then check against cycle size
(y-=r)===i||y%i==0&&y/i>=0)}}},PSEUDO:function(e,t){// pseudo-class names are case-insensitive
// https://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var i,r=n.pseudos[e]||n.setFilters[e.toLowerCase()]||ee.error("unsupported pseudo: "+e);return(// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as jQuery does
r[b]?r(t):r.length>1?(i=[e,e,"",t],n.setFilters.hasOwnProperty(e.toLowerCase())?en(function(e,n){for(var i,o=r(e,t),s=o.length;s--;)i=l.call(e,o[s]),e[i]=!(n[i]=o[s])}):function(e){return r(e,0,i)}):r)}},pseudos:{// Potentially complex pseudos
not:en(function(e){// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var t=[],n=[],i=ef(e.replace(D,"$1"));return i[b]?en(function(e,t,n,r){// Match elements unmatched by `matcher`
for(var o,s=i(e,null,r,[]),a=e.length;a--;)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),// Don't keep the element
// (see https://github.com/jquery/sizzle/issues/299)
t[0]=null,!n.pop()}}),has:en(function(e){return function(t){return ee(e,t).length>0}}),contains:en(function(e){return e=e.replace(K,Q),function(t){return(t.textContent||T.text(t)).indexOf(e)>-1}}),// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// https://www.w3.org/TR/selectors/#lang-pseudo
lang:en(function(e){return W.test(e||"")||ee.error("unsupported lang: "+e),e=e.replace(K,Q).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType)return!1}}),// Miscellaneous
target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===p},focus:function(e){return e===// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function(){try{return u.activeElement}catch(e){}}()&&u.hasFocus()&&!!(e.type||e.href||~e.tabIndex)},// Boolean properties
enabled:er(!1),disabled:er(!0),checked:function(e){// In CSS3, :checked should return both checked and selected elements
// https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
return C(e,"input")&&!!e.checked||C(e,"option")&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},// Contents
empty:function(e){// https://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!n.pseudos.empty(e)},// Element/input types
header:function(e){return V.test(e.nodeName)},input:function(e){return U.test(e.nodeName)},button:function(e){return C(e,"input")&&"button"===e.type||C(e,"button")},text:function(e){var t;return C(e,"input")&&"text"===e.type&&// Support: IE <10 only
// New HTML5 attribute values (e.g., "search") appear
// with elem.type === "text"
(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},// Position-in-collection
first:eo(function(){return[0]}),last:eo(function(e,t){return[t-1]}),eq:eo(function(e,t,n){return[n<0?n+t:n]}),even:eo(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:eo(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:eo(function(e,t,n){var i;for(i=n<0?n+t:n>t?t:n;--i>=0;)e.push(i);return e}),gt:eo(function(e,t,n){for(var i=n<0?n+t:n;++i<t;)e.push(i);return e})}}).pseudos.nth=n.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})n.pseudos[t]=/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */function(e){return function(t){return C(t,"input")&&t.type===e}}(t);for(t in{submit:!0,reset:!0})n.pseudos[t]=/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */function(e){return function(t){return(C(t,"input")||C(t,"button"))&&t.type===e}}(t);// Easy API for creating new setFilters
function el(){}function ec(e,t){var i,r,o,s,a,l,c,u=E[e+" "];if(u)return t?0:u.slice(0);for(a=e,l=[],c=n.preFilter;a;){// Filters
for(s in(!i||(r=q.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),l.push(o=[])),i=!1,(r=z.exec(a))&&(i=r.shift(),o.push({value:i,// Cast descendant combinators to space
type:r[0].replace(D," ")}),a=a.slice(i.length)),n.filter)(r=G[s].exec(a))&&(!c[s]||(r=c[s](r)))&&(i=r.shift(),o.push({value:i,type:s,matches:r}),a=a.slice(i.length));if(!i)break}return(// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
t?a.length:a?ee.error(e):E(e,l).slice(0))}function eu(e){for(var t=0,n=e.length,i="";t<n;t++)i+=e[t].value;return i}function ed(e,t,n){var i=t.dir,r=t.next,o=r||i,s=n&&"parentNode"===o,a=S++;return t.first?function(t,n,r){for(;t=t[i];)if(1===t.nodeType||s)return e(t,n,r);return!1}:function(t,n,l){var c,u,d=[w,a];// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(l){for(;t=t[i];)if((1===t.nodeType||s)&&e(t,n,l))return!0}else for(;t=t[i];)if(1===t.nodeType||s){if(u=t[b]||(t[b]={}),r&&C(t,r))t=t[i]||t;else{if((c=u[o])&&c[0]===w&&c[1]===a)return d[2]=c[2];// A match means we're done; a fail means we have to keep checking
if(// Reuse newcache so results back-propagate to previous elements
u[o]=d,d[2]=e(t,n,l))return!0}}return!1}}function ep(e){return e.length>1?function(t,n,i){for(var r=e.length;r--;)if(!e[r](t,n,i))return!1;return!0}:e[0]}function eh(e,t,n,i,r){for(var o,s=[],a=0,l=e.length,c=null!=t;a<l;a++)(o=e[a])&&(!n||n(o,i,r))&&(s.push(o),c&&t.push(a));return s}function ef(e,t/* Internal Use Only */){var i,o,s,a,c=[],d=[],p=O[e+" "];if(!p){for(t||(t=ec(e)),a=t.length;a--;)(p=function e(t){for(var i,o,s,a=t.length,c=n.relative[t[0].type],u=c||n.relative[" "],d=c?1:0,p=ed(function(e){return e===i},u,!0),h=ed(function(e){return l.call(i,e)>-1},u,!0),f=[function(e,t,n){// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
var o=!c&&(n||t!=r)||((i=t).nodeType?p(e,t,n):h(e,t,n));return(// Avoid hanging onto element
// (see https://github.com/jquery/sizzle/issues/299)
i=null,o)}];d<a;d++)if(o=n.relative[t[d].type])f=[ed(ep(f),o)];else{// Return special upon seeing a positional matcher
if((o=n.filter[t[d].type].apply(null,t[d].matches))[b]){for(// Find the next relative operator (if any) for proper handling
s=++d;s<a&&!n.relative[t[s].type];s++);return function e(t,n,i,r,o,s){return r&&!r[b]&&(r=e(r)),o&&!o[b]&&(o=e(o,s)),en(function(e,s,a,c){var u,d,p,h,f=[],g=[],m=s.length,v=e||function(e,t,n){for(var i=0,r=t.length;i<r;i++)ee(e,t[i],n);return n}(n||"*",a.nodeType?[a]:a,[]),b=t&&(e||!n)?eh(v,f,t,a,c):v;// Apply postFilter
if(i?// Find primary matches
i(b,// If we have a postFinder, or filtered seed, or non-seed postFilter
// or preexisting results,
h=o||(e?t:m||r)?[]:s,a,c):h=b,r)for(u=eh(h,g),r(u,[],a,c),// Un-match failing elements by moving them back to matcherIn
d=u.length;d--;)(p=u[d])&&(h[g[d]]=!(b[g[d]]=p));if(e){if(o||t){if(o){for(// Get the final matcherOut by condensing this intermediate into postFinder contexts
u=[],d=h.length;d--;)(p=h[d])&&u.push(b[d]=p);o(null,h=[],u,c)}for(// Move matched elements from seed to results to keep them synchronized
d=h.length;d--;)(p=h[d])&&(u=o?l.call(e,p):f[d])>-1&&(e[u]=!(s[u]=p))}}else h=eh(h===s?h.splice(m,h.length):h),o?o(null,s,h,c):y.apply(s,h)})}(d>1&&ep(f),d>1&&eu(t.slice(0,d-1).concat({value:" "===t[d-2].type?"*":""})).replace(D,"$1"),o,d<s&&e(t.slice(d,s)),s<a&&e(t=t.slice(s)),s<a&&eu(t))}f.push(o)}return ep(f)}(t[a]))[b]?c.push(p):d.push(p);// Save selector and tokenization
// Cache the compiled function
(p=O(e,(i=c.length>0,o=d.length>0,s=function(e,t,s,a,l){var p,f,g,m=0,v="0",b=e&&[],S=[],x=r,E=e||o&&n.find.TAG("*",l),C=w+=null==x?1:Math.random()||.1,L=E.length;// Add elements passing elementMatchers directly to results
// Support: iOS <=7 - 9 only
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching
// elements by id. (see trac-14142)
for(l&&// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
(r=t==u||t||l);v!==L&&null!=(p=E[v]);v++){if(o&&p){for(f=0,t||p.ownerDocument==u||(ea(p),s=!h);g=d[f++];)if(g(p,t||u,s)){y.call(a,p);break}l&&(w=C)}// Track unmatched elements for set filters
i&&((p=!g&&p)&&m--,e&&b.push(p))}// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
m+=v,i&&v!==m){for(f=0;g=c[f++];)g(b,S,t,s);if(e){// Reintegrate element matches to eliminate the need for sorting
if(m>0)for(;v--;)b[v]||S[v]||(S[v]=A.call(a));// Discard index placeholder values to get only actual matches
S=eh(S)}// Add matches to results
y.apply(a,S),l&&!e&&S.length>0&&m+c.length>1&&T.uniqueSort(a)}return l&&(w=C,r=x),b},i?en(s):s))).selector=e}return p}/**
 * A low-level selection function that works with jQuery's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with jQuery selector compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */function eg(e,t,i,r){var o,s,a,l,c,u="function"==typeof e&&e,d=!r&&ec(e=u.selector||e);// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(i=i||[],1===d.length){if(// Reduce context if the leading compound selector is an ID
(s=d[0]=d[0].slice(0)).length>2&&"ID"===(a=s[0]).type&&9===t.nodeType&&h&&n.relative[s[1].type]){if(!(t=(n.find.ID(a.matches[0].replace(K,Q),t)||[])[0]))return i;u&&(t=t.parentNode),e=e.slice(s.shift().value.length)}for(// Fetch a seed set for right-to-left matching
o=G.needsContext.test(e)?0:s.length;// Abort if we hit a combinator
o--&&(a=s[o],!n.relative[l=a.type]);)if((c=n.find[l])&&(r=c(a.matches[0].replace(K,Q),Y.test(s[0].type)&&es(t.parentNode)||t))){if(// If seed is empty or no tokens remain, we can return early
s.splice(o,1),!(e=r.length&&eu(s)))return y.apply(i,r),i;break}}return(// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
(u||ef(e,d))(r,t,!h,i,!t||Y.test(e)&&es(t.parentNode)||t),i)}el.prototype=n.filters=n.pseudos,n.setFilters=new el,// One-time assignments
// Support: Android <=4.0 - 4.1+
// Sort stability
f.sortStable=b.split("").sort(P).join("")===b,// Initialize against the default document
ea(),// Support: Android <=4.0 - 4.1+
// Detached nodes confoundingly follow *each other*
f.sortDetached=ei(function(e){// Should return 1, but returns 4 (following)
return 1&e.compareDocumentPosition(u.createElement("fieldset"))}),T.find=ee,// Deprecated
T.expr[":"]=T.expr.pseudos,T.unique=T.uniqueSort,// These have always been private, but they used to be documented as part of
// Sizzle so let's maintain them for now for backwards compatibility purposes.
ee.compile=ef,ee.select=eg,ee.setDocument=ea,ee.tokenize=ec,ee.escape=T.escapeSelector,ee.getText=T.text,ee.isXML=T.isXMLDoc,ee.selectors=T.expr,ee.support=T.support,ee.uniqueSort=T.uniqueSort;/* eslint-enable */}();var P=function(e,t,n){for(var i=[],r=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(r&&T(e).is(n))break;i.push(e)}return i},j=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},I=T.expr.match.needsContext,N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;// Implement the identical functionality for filter and not
function H(e,t,n){return g(t)?T.grep(e,function(e,i){return!!t.call(e,i,e)!==n}):t.nodeType?T.grep(e,function(e){return e===t!==n}):"string"!=typeof t?T.grep(e,function(e){return l.call(t,e)>-1!==n}):T.filter(t,e,n)}T.filter=function(e,t,n){var i=t[0];return(n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType)?T.find.matchesSelector(i,e)?[i]:[]:T.find.matches(e,T.grep(t,function(e){return 1===e.nodeType}))},T.fn.extend({find:function(e){var t,n,i=this.length,r=this;if("string"!=typeof e)return this.pushStack(T(e).filter(function(){for(t=0;t<i;t++)if(T.contains(r[t],this))return!0}));for(t=0,n=this.pushStack([]);t<i;t++)T.find(e,r[t],n);return i>1?T.uniqueSort(n):n},filter:function(e){return this.pushStack(H(this,e||[],!1))},not:function(e){return this.pushStack(H(this,e||[],!0))},is:function(e){return!!H(this,// so $("p:first").is("p:last") won't return true for a doc with two "p".
"string"==typeof e&&I.test(e)?T(e):e||[],!1).length}});// Initialize a jQuery object
// A central reference to the root jQuery(document)
var R,// Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
// Strict HTML recognition (trac-11290: must start with <)
// Shortcut simple #id case for speed
q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;// Give the init function the jQuery prototype for later instantiation
(T.fn.init=function(e,t,n){var i,r;// HANDLE: $(""), $(null), $(undefined), $(false)
if(!e)return this;// Handle HTML strings
if(// Method init() accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
n=n||R,"string"==typeof e){// Match html or make sure no context is specified for #id
if((i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:q.exec(e))&&(i[1]||!t)){// HANDLE: $(html) -> $(array)
if(!i[1])return(r=v.getElementById(i[2]))&&(// Inject the element directly into the jQuery object
this[0]=r,this.length=1),this;// HANDLE: $(html, props)
if(t=t instanceof T?t[0]:t,// Option to run scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
T.merge(this,T.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:v,!0)),N.test(i[1])&&T.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);// HANDLE: $(DOMElement)
}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(T):T.makeArray(e,this)}).prototype=T.fn,// Initialize central reference
R=T(v);var z=/^(?:parents|prev(?:Until|All))/,B={children:!0,contents:!0,next:!0,prev:!0};function F(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}T.fn.extend({has:function(e){var t=T(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(T.contains(this,t[e]))return!0})},closest:function(e,t){var n,i=0,r=this.length,o=[],s="string"!=typeof e&&T(e);// Positional selectors never match, since there's no _selection_ context
if(!I.test(e)){for(;i<r;i++)for(n=this[i];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&T.find.matchesSelector(n,e))){o.push(n);break}}return this.pushStack(o.length>1?T.uniqueSort(o):o)},// Determine the position of an element within the set
index:function(e){return(// No argument, return index in parent
e?"string"==typeof e?l.call(T(e),this[0]):l.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1)},add:function(e,t){return this.pushStack(T.uniqueSort(T.merge(this.get(),T(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),T.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return P(e,"parentNode")},parentsUntil:function(e,t,n){return P(e,"parentNode",n)},next:function(e){return F(e,"nextSibling")},prev:function(e){return F(e,"previousSibling")},nextAll:function(e){return P(e,"nextSibling")},prevAll:function(e){return P(e,"previousSibling")},nextUntil:function(e,t,n){return P(e,"nextSibling",n)},prevUntil:function(e,t,n){return P(e,"previousSibling",n)},siblings:function(e){return j((e.parentNode||{}).firstChild,e)},children:function(e){return j(e.firstChild)},contents:function(e){return null!=e.contentDocument&&// Support: IE 11+
// <object> elements with no `data` attribute has an object
// `contentDocument` with a `null` prototype.
r(e.contentDocument)?e.contentDocument:(C(e,"template")&&(e=e.content||e),T.merge([],e.childNodes))}},function(e,t){T.fn[e]=function(n,i){var r=T.map(this,t,n);return"Until"!==e.slice(-5)&&(i=n),i&&"string"==typeof i&&(r=T.filter(i,r)),this.length>1&&(B[e]||T.uniqueSort(r),z.test(e)&&r.reverse()),this.pushStack(r)}});var W=/[^\x20\t\r\n\f]+/g;function G(e){return e}function U(e){throw e}function V(e,t,n,i){var r;try{// Check for promise aspect first to privilege synchronous behavior
e&&g(r=e.promise)?r.call(e).done(t).fail(n):e&&g(r=e.then)?r.call(e,t,n):// * false: [ value ].slice( 0 ) => resolve( value )
// * true: [ value ].slice( 1 ) => resolve()
t.apply(void 0,[e].slice(i));// For Promises/A+, convert exceptions into rejections
// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
// Deferred#then to conditionally suppress rejection.
}catch(e){// Support: Android 4.0 only
// Strict mode functions invoked without .call/.apply get global-object context
n.apply(void 0,[e])}}/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */T.Callbacks=function(e){// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
e="string"==typeof e?(t=e,n={},T.each(t.match(W)||[],function(e,t){n[t]=!0}),n):T.extend({},e);var t,n,i,r,o,s,a=[],l=[],c=-1,u=function(){for(// Enforce single-firing
s=s||e.once,// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
o=i=!0;l.length;c=-1)for(r=l.shift();++c<a.length;)!1===a[c].apply(r[0],r[1])&&e.stopOnFalse&&(// Jump to end and forget the data so .add doesn't re-fire
c=a.length,r=!1);e.memory||(r=!1),i=!1,s&&(a=r?[]:"")},d={// Add a callback or a collection of callbacks to the list
add:function(){return a&&(r&&!i&&(c=a.length-1,l.push(r)),function t(n){T.each(n,function(n,i){g(i)?e.unique&&d.has(i)||a.push(i):i&&i.length&&"string"!==w(i)&&t(i)})}(arguments),r&&!i&&u()),this},// Remove a callback from the list
remove:function(){return T.each(arguments,function(e,t){for(var n;(n=T.inArray(t,a,n))>-1;)a.splice(n,1),n<=c&&c--}),this},// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(e){return e?T.inArray(e,a)>-1:a.length>0},// Remove all callbacks from the list
empty:function(){return a&&(a=[]),this},// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function(){return s=l=[],a=r="",this},disabled:function(){return!a},// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function(){return s=l=[],r||i||(a=r=""),this},locked:function(){return!!s},// Call all callbacks with the given context and arguments
fireWith:function(e,t){return s||(t=[e,(t=t||[]).slice?t.slice():t],l.push(t),i||u()),this},// Call all the callbacks with the given arguments
fire:function(){return d.fireWith(this,arguments),this},// To know if the callbacks have already been called at least once
fired:function(){return!!o}};return d},T.extend({Deferred:function(t){var n=[// action, add listener, callbacks,
// ... .then handlers, argument index, [final state]
["notify","progress",T.Callbacks("memory"),T.Callbacks("memory"),2],["resolve","done",T.Callbacks("once memory"),T.Callbacks("once memory"),0,"resolved"],["reject","fail",T.Callbacks("once memory"),T.Callbacks("once memory"),1,"rejected"]],i="pending",r={state:function(){return i},always:function(){return o.done(arguments).fail(arguments),this},catch:function(e){return r.then(null,e)},// Keep pipe for back-compat
pipe:function(){var e=arguments;return T.Deferred(function(t){T.each(n,function(n,i){// Map tuples (progress, done, fail) to arguments (done, fail, progress)
var r=g(e[i[4]])&&e[i[4]];// deferred.progress(function() { bind to newDefer or newDefer.notify })
// deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
o[i[1]](function(){var e=r&&r.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[i[0]+"With"](this,r?[e]:arguments)})}),e=null}).promise()},then:function(t,i,r){var o=0;function s(t,n,i,r){return function(){var a=this,l=arguments,c=function(){var e,c;// Support: Promises/A+ section 2.3.3.3.3
// https://promisesaplus.com/#point-59
// Ignore double-resolution attempts
if(!(t<o)){// Support: Promises/A+ section 2.3.1
// https://promisesaplus.com/#point-48
if((e=i.apply(a,l))===n.promise())throw TypeError("Thenable self-resolution");// Handle a returned thenable
g(// Support: Promises/A+ sections 2.3.3.1, 3.5
// https://promisesaplus.com/#point-54
// https://promisesaplus.com/#point-75
// Retrieve `then` only once
c=e&&// Support: Promises/A+ section 2.3.4
// https://promisesaplus.com/#point-64
// Only check objects and functions for thenability
("object"==typeof e||"function"==typeof e)&&e.then)?r?c.call(e,s(o,n,G,r),s(o,n,U,r)):(// ...and disregard older resolution values
o++,c.call(e,s(o,n,G,r),s(o,n,U,r),s(o,n,G,n.notifyWith))):(i!==G&&(a=void 0,l=[e]),// Process the value(s)
// Default process is resolve
(r||n.resolveWith)(a,l))}},u=r?c:function(){try{c()}catch(e){T.Deferred.exceptionHook&&T.Deferred.exceptionHook(e,u.error),t+1>=o&&(i!==U&&(a=void 0,l=[e]),n.rejectWith(a,l))}};// Support: Promises/A+ section 2.3.3.3.1
// https://promisesaplus.com/#point-57
// Re-resolve promises immediately to dodge false rejection from
// subsequent errors
t?u():(T.Deferred.getErrorHook?u.error=T.Deferred.getErrorHook():T.Deferred.getStackHook&&(u.error=T.Deferred.getStackHook()),e.setTimeout(u))}}return T.Deferred(function(e){// progress_handlers.add( ... )
n[0][3].add(s(0,e,g(r)?r:G,e.notifyWith)),// fulfilled_handlers.add( ... )
n[1][3].add(s(0,e,g(t)?t:G)),// rejected_handlers.add( ... )
n[2][3].add(s(0,e,g(i)?i:U))}).promise()},// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(e){return null!=e?T.extend(e,r):r}},o={};// All done!
return(// Add list-specific methods
T.each(n,function(e,t){var s=t[2],a=t[5];// promise.progress = list.add
// promise.done = list.add
// promise.fail = list.add
r[t[1]]=s.add,a&&s.add(function(){// state = "resolved" (i.e., fulfilled)
// state = "rejected"
i=a},// fulfilled_callbacks.disable
n[3-e][2].disable,// fulfilled_handlers.disable
n[3-e][3].disable,n[0][2].lock,n[0][3].lock),// progress_handlers.fire
// fulfilled_handlers.fire
// rejected_handlers.fire
s.add(t[3].fire),// deferred.notify = function() { deferred.notifyWith(...) }
// deferred.resolve = function() { deferred.resolveWith(...) }
// deferred.reject = function() { deferred.rejectWith(...) }
o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},// deferred.notifyWith = list.fireWith
// deferred.resolveWith = list.fireWith
// deferred.rejectWith = list.fireWith
o[t[0]+"With"]=s.fireWith}),// Make the deferred a promise
r.promise(o),t&&t.call(o,o),o)},// Deferred helper
when:function(e){var t=arguments.length,n=t,i=Array(n),r=o.call(arguments),s=T.Deferred(),a=function(e){return function(n){i[e]=this,r[e]=arguments.length>1?o.call(arguments):n,--t||s.resolveWith(i,r)}};// Single- and empty arguments are adopted like Promise.resolve
if(t<=1&&(V(e,s.done(a(n)).resolve,s.reject,!t),"pending"===s.state()||g(r[n]&&r[n].then)))return s.then();// Multiple arguments are aggregated like Promise.all array elements
for(;n--;)V(r[n],a(n),s.reject);return s.promise()}});// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var X=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;// If `jQuery.Deferred.getErrorHook` is defined, `asyncError` is an error
// captured before the async barrier to get the original error cause
// which may otherwise be hidden.
T.Deferred.exceptionHook=function(t,n){// Support: IE 8 - 9 only
// Console exists when dev tools are open, which can happen at any time
e.console&&e.console.warn&&t&&X.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},T.readyException=function(t){e.setTimeout(function(){throw t})};// The deferred used on DOM ready
var Y=T.Deferred();// The ready event handler and self cleanup method
function K(){v.removeEventListener("DOMContentLoaded",K),e.removeEventListener("load",K),T.ready()}T.fn.ready=function(e){return Y.then(e)// Wrap jQuery.readyException in a function so that the lookup
// happens at the time of error handling instead of callback
// registration.
.catch(function(e){T.readyException(e)}),this},T.extend({// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,// A counter to track how many items to wait for before
// the ready event fires. See trac-6781
readyWait:1,// Handle when the DOM is ready
ready:function(e){// Abort if there are pending holds or we're already ready
!(!0===e?--T.readyWait:T.isReady)&&(// Remember that the DOM is ready
T.isReady=!0,!0!==e&&--T.readyWait>0||// If there are functions bound, to execute
Y.resolveWith(v,[T]))}}),T.ready.then=Y.then,"complete"!==v.readyState&&("loading"===v.readyState||v.documentElement.doScroll)?(// Use the handy event callback
v.addEventListener("DOMContentLoaded",K),// A fallback to window.onload, that will always work
e.addEventListener("load",K)):e.setTimeout(T.ready);// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var Q=function(e,t,n,i,r,o,s){var a=0,l=e.length,c=null==n;// Sets many values
if("object"===w(n))for(a in r=!0,n)Q(e,t,a,n[a],!0,o,s);else if(void 0!==i&&(r=!0,g(i)||(s=!0),c&&(s?(t.call(e,i),t=null):(c=t,t=function(e,t,n){return c.call(T(e),n)})),t))for(;a<l;a++)t(e[a],n,s?i:i.call(e[a],a,t(e[a],n)));return r?e:c?t.call(e):l?t(e[0],n):o},Z=/^-ms-/,J=/-([a-z])/g;// Used by camelCase as callback to replace()
function ee(e,t){return t.toUpperCase()}// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (trac-9572)
function et(e){return e.replace(Z,"ms-").replace(J,ee)}var en=function(e){// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function ei(){this.expando=T.expando+ei.uid++}ei.uid=1,ei.prototype={cache:function(e){// Check if the owner object already has a cache
var t=e[this.expando];return!t&&(t={},en(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var i,r=this.cache(e);// Handle: [ owner, key, value ] args
// Always use camelCase key (gh-2257)
if("string"==typeof t)r[et(t)]=n;else for(i in t)r[et(i)]=t[i];return r},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][et(t)]},access:function(e,t,n){return(// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(// When the key is not a string, or both a key and value
// are specified, set or extend (existing objects) with either:
//
//   1. An object of properties
//   2. A key and value
//
this.set(e,t,n),void 0!==n?n:t))},remove:function(e,t){var n,i=e[this.expando];if(void 0!==i){if(void 0!==t)for(n=(// We always set camelCase keys, so remove that.
t=Array.isArray(t)?t.map(et):((t=et(t))in i)?[t]:t.match(W)||[]).length;n--;)delete i[t[n]];// Remove the expando if there's no more data
(void 0===t||T.isEmptyObject(i))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!T.isEmptyObject(t)}};var er=new ei,eo=new ei,es=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ea=/[A-Z]/g;function el(e,t,n){var i,r;// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(void 0===n&&1===e.nodeType){if(i="data-"+t.replace(ea,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(i))){try{r=n,n="true"===r||"false"!==r&&("null"===r?null:r===+r+""?+r:es.test(r)?JSON.parse(r):r)}catch(e){}// Make sure we set the data so it isn't changed later
eo.set(e,t,n)}else n=void 0}return n}T.extend({hasData:function(e){return eo.hasData(e)||er.hasData(e)},data:function(e,t,n){return eo.access(e,t,n)},removeData:function(e,t){eo.remove(e,t)},// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function(e,t,n){return er.access(e,t,n)},_removeData:function(e,t){er.remove(e,t)}}),T.fn.extend({data:function(e,t){var n,i,r,o=this[0],s=o&&o.attributes;// Gets all values
if(void 0===e){if(this.length&&(r=eo.get(o),1===o.nodeType&&!er.get(o,"hasDataAttrs"))){for(n=s.length;n--;)// The attrs elements can be null (trac-14894)
s[n]&&0===(i=s[n].name).indexOf("data-")&&el(o,i=et(i.slice(5)),r[i]);er.set(o,"hasDataAttrs",!0)}return r}return(// Sets multiple values
"object"==typeof e?this.each(function(){eo.set(this,e)}):Q(this,function(t){var n;// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(o&&void 0===t)return void 0!==// Attempt to get data from the cache
// The key will always be camelCased in Data
(n=eo.get(o,e))||void 0!==// Attempt to "discover" the data in
// HTML5 custom data-* attrs
(n=el(o,e))?n:// We tried really hard, but the data doesn't exist.
void 0;// Set the data...
this.each(function(){// We always store the camelCased key
eo.set(this,e,t)})},null,t,arguments.length>1,null,!0))},removeData:function(e){return this.each(function(){eo.remove(this,e)})}}),T.extend({queue:function(e,t,n){var i;if(e)return t=(t||"fx")+"queue",i=er.get(e,t),n&&(!i||Array.isArray(n)?i=er.access(e,t,T.makeArray(n)):i.push(n)),i||[]},dequeue:function(e,t){t=t||"fx";var n=T.queue(e,t),i=n.length,r=n.shift(),o=T._queueHooks(e,t);"inprogress"===r&&(r=n.shift(),i--),r&&("fx"===t&&n.unshift("inprogress"),// Clear up the last queue stop function
delete o.stop,r.call(e,function(){T.dequeue(e,t)},o)),!i&&o&&o.empty.fire()},// Not public - generate a queueHooks object, or return the current one
_queueHooks:function(e,t){var n=t+"queueHooks";return er.get(e,n)||er.access(e,n,{empty:T.Callbacks("once memory").add(function(){er.remove(e,[t+"queue",n])})})}}),T.fn.extend({queue:function(e,t){var n=2;return("string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n)?T.queue(this[0],e):void 0===t?this:this.each(function(){var n=T.queue(this,e,t);// Ensure a hooks for this queue
T._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&T.dequeue(this,e)})},dequeue:function(e){return this.each(function(){T.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(e,t){var n,i=1,r=T.Deferred(),o=this,s=this.length,a=function(){--i||r.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)(n=er.get(o[s],e+"queueHooks"))&&n.empty&&(i++,n.empty.add(a));return a(),r.promise(t)}});var ec=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,eu=RegExp("^(?:([+-])=|)("+ec+")([a-z%]*)$","i"),ed=["Top","Right","Bottom","Left"],ep=v.documentElement,eh=function(e){return T.contains(e.ownerDocument,e)},ef={composed:!0};ep.getRootNode&&(eh=function(e){return T.contains(e.ownerDocument,e)||e.getRootNode(ef)===e.ownerDocument});var eg=function(e,t){// Inline style trumps all
return"none"===// isHiddenWithinTree might be called from jQuery#filter function;
// in that case, element will be second argument
(e=t||e).style.display||""===e.style.display&&// Otherwise, check computed style
// Support: Firefox <=43 - 45
// Disconnected elements can have computed display: none, so first confirm that elem is
// in the document.
eh(e)&&"none"===T.css(e,"display")};function em(e,t,n,i){var r,o,s=20,a=i?function(){return i.cur()}:function(){return T.css(e,t,"")},l=a(),c=n&&n[3]||(T.cssNumber[t]?"":"px"),u=e.nodeType&&(T.cssNumber[t]||"px"!==c&&+l)&&eu.exec(T.css(e,t));if(u&&u[3]!==c){for(// Support: Firefox <=54
// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
l/=2,// Trust units reported by jQuery.css
c=c||u[3],// Iteratively approximate from a nonzero starting point
u=+l||1;s--;)// Evaluate and update our best guess (doubling guesses that zero out).
// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
T.style(e,t,u+c),(1-o)*(1-(o=a()/l||.5))<=0&&(s=0),u/=o;u*=2,T.style(e,t,u+c),// Make sure we update the tween properties later on
n=n||[]}return n&&(u=+u||+l||0,// Apply relative offset (+=/-=) if specified
r=n[1]?u+(n[1]+1)*n[2]:+n[2],i&&(i.unit=c,i.start=u,i.end=r)),r}var ev={};function ey(e,t){// Determine new display value for elements that need to change
for(var n,i,r=[],o=0,s=e.length;o<s;o++)(i=e[o]).style&&(n=i.style.display,t?("none"!==n||(r[o]=er.get(i,"display")||null,r[o]||(i.style.display="")),""===i.style.display&&eg(i)&&(r[o]=function(e){var t,n=e.ownerDocument,i=e.nodeName,r=ev[i];return r||(t=n.body.appendChild(n.createElement(i)),r=T.css(t,"display"),t.parentNode.removeChild(t),"none"===r&&(r="block"),ev[i]=r),r}(i))):"none"!==n&&(r[o]="none",// Remember what we're overwriting
er.set(i,"display",n)));// Set the display of the elements in a second loop to avoid constant reflow
for(o=0;o<s;o++)null!=r[o]&&(e[o].style.display=r[o]);return e}T.fn.extend({show:function(){return ey(this,!0)},hide:function(){return ey(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){eg(this)?T(this).show():T(this).hide()})}});var eb=/^(?:checkbox|radio)$/i,ew=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,eS=/^$|^module$|\/(?:java|ecma)script/i;e6=v.createDocumentFragment().appendChild(v.createElement("div")),// Support: Android 4.0 - 4.3 only
// Check state lost if the name is set (trac-11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (trac-14901)
(e9=v.createElement("input")).setAttribute("type","radio"),e9.setAttribute("checked","checked"),e9.setAttribute("name","t"),e6.appendChild(e9),// Support: Android <=4.1 only
// Older WebKit doesn't clone checked state correctly in fragments
f.checkClone=e6.cloneNode(!0).cloneNode(!0).lastChild.checked,// Support: IE <=11 only
// Make sure textarea (and checkbox) defaultValue is properly cloned
e6.innerHTML="<textarea>x</textarea>",f.noCloneChecked=!!e6.cloneNode(!0).lastChild.defaultValue,// Support: IE <=9 only
// IE <=9 replaces <option> tags with their contents when inserted outside of
// the select element.
e6.innerHTML="<option></option>",f.option=!!e6.lastChild;// We have to close these tags to support XHTML (trac-13200)
var ex={// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function eT(e,t){// Support: IE <=9 - 11 only
// Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
var n;return(n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&C(e,t))?T.merge([e],n):n}// Mark scripts as having already been evaluated
function eE(e,t){for(var n=0,i=e.length;n<i;n++)er.set(e[n],"globalEval",!t||er.get(t[n],"globalEval"))}ex.tbody=ex.tfoot=ex.colgroup=ex.caption=ex.thead,ex.th=ex.td,f.option||(ex.optgroup=ex.option=[1,"<select multiple='multiple'>","</select>"]);var eC=/<|&#?\w+;/;function eA(e,t,n,i,r){for(var o,s,a,l,c,u=t.createDocumentFragment(),d=[],p=0,h=e.length;p<h;p++)if((o=e[p])||0===o){// Add nodes directly
if("object"===w(o))// push.apply(_, arraylike) throws on ancient WebKit
T.merge(d,o.nodeType?[o]:o);else if(eC.test(o)){for(s=s||u.appendChild(t.createElement("div")),a=ex[(ew.exec(o)||["",""])[1].toLowerCase()]||ex._default,s.innerHTML=a[1]+T.htmlPrefilter(o)+a[2],// Descend through wrappers to the right content
c=a[0];c--;)s=s.lastChild;// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
T.merge(d,s.childNodes),// Ensure the created nodes are orphaned (trac-12392)
// Remember the top-level container
(s=u.firstChild).textContent=""}else d.push(t.createTextNode(o))}for(// Remove wrapper from fragment
u.textContent="",p=0;o=d[p++];){// Skip elements already in the context collection (trac-4087)
if(i&&T.inArray(o,i)>-1){r&&r.push(o);continue}// Capture executables
if(l=eh(o),// Append to fragment
s=eT(u.appendChild(o),"script"),l&&eE(s),n)for(c=0;o=s[c++];)eS.test(o.type||"")&&n.push(o)}return u}var eL=/^([^.]*)(?:\.(.+)|)/;function e$(){return!0}function ek(){return!1}function e_(e,t,n,i,r,o){var s,a;// Types can be a map of types/handlers
if("object"==typeof t){for(a in"string"!=typeof n&&(// ( types-Object, data )
i=i||n,n=void 0),t)e_(e,a,n,i,t[a],o);return e}if(null==i&&null==r?(// ( types, fn )
r=n,i=n=void 0):null==r&&("string"==typeof n?(// ( types, selector, fn )
r=i,i=void 0):(// ( types, data, fn )
r=i,i=n,n=void 0)),!1===r)r=ek;else if(!r)return e;return 1===o&&(s=r,// Use same guid so caller can remove using origFn
(r=function(e){return(// Can use an empty set, since event contains the info
T().off(e),s.apply(this,arguments))}).guid=s.guid||(s.guid=T.guid++)),e.each(function(){T.event.add(this,t,r,i,n)})}// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function eD(e,t,n){// Missing `isSetup` indicates a trigger call, which must force setup through jQuery.event.add
if(!n){void 0===er.get(e,t)&&T.event.add(e,t,e$);return}// Register the controller as a special universal handler for all event namespaces
er.set(e,t,!1),T.event.add(e,t,{namespace:!1,handler:function(e){var n,i=er.get(this,t);if(1&e.isTrigger&&this[t]){// Interrupt processing of the outer synthetic .trigger()ed event
if(i)(T.event.special[t]||{}).delegateType&&e.stopPropagation();else if(// Store arguments for use when handling the inner native event
// There will always be at least one argument (an event object), so this array
// will not be confused with a leftover capture object.
i=o.call(arguments),er.set(this,t,i),// Trigger the native event and capture its result
this[t](),n=er.get(this,t),er.set(this,t,!1),i!==n)return(// Cancel the outer synthetic event
e.stopImmediatePropagation(),e.preventDefault(),n)}else i&&(// ...and capture the result
er.set(this,t,T.event.trigger(i[0],i.slice(1),this)),// Abort handling of the native event by all jQuery handlers while allowing
// native handlers on the same element to run. On target, this is achieved
// by stopping immediate propagation just on the jQuery event. However,
// the native event is re-wrapped by a jQuery one on each level of the
// propagation so the only way to stop it for jQuery is to stop it for
// everyone via native `stopPropagation()`. This is not a problem for
// focus/blur which don't bubble, but it does also stop click on checkboxes
// and radios. We accept this limitation.
e.stopPropagation(),e.isImmediatePropagationStopped=e$)}})}/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */T.event={global:{},add:function(e,t,n,i,r){var o,s,a,l,c,u,d,p,h,f,g,m=er.get(e);// Only attach events to objects that accept data
if(en(e))for(n.handler&&(n=(o=n).handler,r=o.selector),r&&T.find.matchesSelector(ep,r),n.guid||(n.guid=T.guid++),(l=m.events)||(l=m.events=Object.create(null)),(s=m.handle)||(s=m.handle=function(t){// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return T.event.triggered!==t.type?T.event.dispatch.apply(e,arguments):void 0}),c=// Handle multiple events separated by a space
(t=(t||"").match(W)||[""]).length;c--;)// There *must* be a type, no attaching namespace-only handlers
h=g=(a=eL.exec(t[c])||[])[1],f=(a[2]||"").split(".").sort(),h&&(// If event changes its type, use the special event handlers for the changed type
d=T.event.special[h]||{},// If selector defined, determine special event api type, otherwise given type
h=(r?d.delegateType:d.bindType)||h,// Update special based on newly reset type
d=T.event.special[h]||{},// handleObj is passed to all event handlers
u=T.extend({type:h,origType:g,data:i,handler:n,guid:n.guid,selector:r,needsContext:r&&T.expr.match.needsContext.test(r),namespace:f.join(".")},o),(p=l[h])||((p=l[h]=[]).delegateCount=0,(!d.setup||!1===d.setup.call(e,i,f,s))&&e.addEventListener&&e.addEventListener(h,s)),d.add&&(d.add.call(e,u),u.handler.guid||(u.handler.guid=n.guid)),r?p.splice(p.delegateCount++,0,u):p.push(u),// Keep track of which events have ever been used, for event optimization
T.event.global[h]=!0)},// Detach an event or set of events from an element
remove:function(e,t,n,i,r){var o,s,a,l,c,u,d,p,h,f,g,m=er.hasData(e)&&er.get(e);if(m&&(l=m.events)){for(c=// Once for each type.namespace in types; type may be omitted
(t=(t||"").match(W)||[""]).length;c--;){// Unbind all events (on this namespace, if provided) for the element
if(h=g=(a=eL.exec(t[c])||[])[1],f=(a[2]||"").split(".").sort(),!h){for(h in l)T.event.remove(e,h+t[c],n,i,!0);continue}for(d=T.event.special[h]||{},p=l[h=(i?d.delegateType:d.bindType)||h]||[],a=a[2]&&RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"),// Remove matching events
s=o=p.length;o--;)u=p[o],(r||g===u.origType)&&(!n||n.guid===u.guid)&&(!a||a.test(u.namespace))&&(!i||i===u.selector||"**"===i&&u.selector)&&(p.splice(o,1),u.selector&&p.delegateCount--,d.remove&&d.remove.call(e,u));s&&!p.length&&(d.teardown&&!1!==d.teardown.call(e,f,m.handle)||T.removeEvent(e,h,m.handle),delete l[h])}T.isEmptyObject(l)&&er.remove(e,"handle events")}},dispatch:function(e){var t,n,i,r,o,s,a=Array(arguments.length),l=T.event.fix(e),c=(er.get(this,"events")||Object.create(null))[l.type]||[],u=T.event.special[l.type]||{};for(t=1,// Use the fix-ed jQuery.Event rather than the (read-only) native event
a[0]=l;t<arguments.length;t++)a[t]=arguments[t];// Call the preDispatch hook for the mapped type, and let it bail if desired
if(l.delegateTarget=this,!u.preDispatch||!1!==u.preDispatch.call(this,l)){for(// Determine handlers
s=T.event.handlers.call(this,l,c),// Run delegates first; they may want to stop propagation beneath us
t=0;(r=s[t++])&&!l.isPropagationStopped();)for(l.currentTarget=r.elem,n=0;(o=r.handlers[n++])&&!l.isImmediatePropagationStopped();)// specially universal or its namespaces are a superset of the event's.
(!l.rnamespace||!1===o.namespace||l.rnamespace.test(o.namespace))&&(l.handleObj=o,l.data=o.data,void 0!==(i=((T.event.special[o.origType]||{}).handle||o.handler).apply(r.elem,a))&&!1===(l.result=i)&&(l.preventDefault(),l.stopPropagation()));return u.postDispatch&&u.postDispatch.call(this,l),l.result}},handlers:function(e,t){var n,i,r,o,s,a=[],l=t.delegateCount,c=e.target;// Find delegate handlers
if(l&&// Support: IE <=9
// Black-hole SVG <use> instance trees (trac-13180)
c.nodeType&&// Support: Firefox <=42
// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
// Support: IE 11 only
// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
!("click"===e.type&&e.button>=1)){for(;c!==this;c=c.parentNode||this)// Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
if(1===c.nodeType&&!("click"===e.type&&!0===c.disabled)){for(n=0,o=[],s={};n<l;n++)void 0===s[// Don't conflict with Object.prototype properties (trac-13203)
r=(i=t[n]).selector+" "]&&(s[r]=i.needsContext?T(r,this).index(c)>-1:T.find(r,this,null,[c]).length),s[r]&&o.push(i);o.length&&a.push({elem:c,handlers:o})}}return(// Add the remaining (directly-bound) handlers
c=this,l<t.length&&a.push({elem:c,handlers:t.slice(l)}),a)},addProp:function(e,t){Object.defineProperty(T.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[T.expando]?e:new T.Event(e)},special:{load:{// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},click:{// Utilize native event to ensure correct state for checkable inputs
setup:function(e){// For mutual compressibility with _default, replace `this` access with a local var.
// `|| data` is dead code meant only to preserve the variable through minification.
var t=this||e;// Return false to allow normal processing in the caller
return eb.test(t.type)&&t.click&&C(t,"input")&&eD(t,"click",!0),!1},trigger:function(e){// For mutual compressibility with _default, replace `this` access with a local var.
// `|| data` is dead code meant only to preserve the variable through minification.
var t=this||e;// Return non-false to allow normal event-path propagation
return eb.test(t.type)&&t.click&&C(t,"input")&&eD(t,"click"),!0},// For cross-browser consistency, suppress native .click() on links
// Also prevent it if we're currently inside a leveraged native-event stack
_default:function(e){var t=e.target;return eb.test(t.type)&&t.click&&C(t,"input")&&er.get(t,"click")||C(t,"a")}},beforeunload:{postDispatch:function(e){// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},T.removeEvent=function(e,t,n){// This "if" is needed for plain objects
e.removeEventListener&&e.removeEventListener(t,n)},T.Event=function(e,t){// Allow instantiation without the 'new' keyword
if(!(this instanceof T.Event))return new T.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&// Support: Android <=2.3 only
!1===e.returnValue?e$:ek,// Create target properties
// Support: Safari <=6 - 7 only
// Target should not be a text node (trac-504, trac-13143)
this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&T.extend(this,t),// Create a timestamp if incoming event doesn't have one
this.timeStamp=e&&e.timeStamp||Date.now(),// Mark it as fixed
this[T.expando]=!0},// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
T.Event.prototype={constructor:T.Event,isDefaultPrevented:ek,isPropagationStopped:ek,isImmediatePropagationStopped:ek,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=e$,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=e$,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=e$,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},// Includes all common event props including KeyEvent and MouseEvent specific props
T.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},T.event.addProp),T.each({focus:"focusin",blur:"focusout"},function(e,t){function n(e){if(v.documentMode){// Support: IE 11+
// Attach a single focusin/focusout handler on the document while someone wants
// focus/blur. This is because the former are synchronous in IE while the latter
// are async. In other browsers, all those handlers are invoked synchronously.
// `handle` from private data would already wrap the event, but we need
// to change the `type` here.
var n=er.get(this,"handle"),i=T.event.fix(e);i.type="focusin"===e.type?"focus":"blur",i.isSimulated=!0,// First, handle focusin/focusout
n(e),i.target===i.currentTarget&&// `jQuery.event.add`, so event handle will already have been set
// by this point.
n(i)}else // while someone wants focusin/focusout.
T.event.simulate(t,e.target,T.event.fix(e))}T.event.special[e]={// Utilize native event if possible so blur/focus sequence is correct
setup:function(){var i;if(// Claim the first handler
// dataPriv.set( this, "focus", ... )
// dataPriv.set( this, "blur", ... )
eD(this,e,!0),!v.documentMode)return!1;// Support: IE 9 - 11+
// We use the same native handler for focusin & focus (and focusout & blur)
// so we need to coordinate setup & teardown parts between those events.
// Use `delegateType` as the key as `type` is already used by `leverageNative`.
(i=er.get(this,t))||this.addEventListener(t,n),er.set(this,t,(i||0)+1)},trigger:function(){// Return non-false to allow normal event-path propagation
return(// Force setup before trigger
eD(this,e),!0)},teardown:function(){var e;if(!v.documentMode)return!1;(e=er.get(this,t)-1)?er.set(this,t,e):(this.removeEventListener(t,n),er.remove(this,t))},// Suppress native focus or blur if we're currently inside
// a leveraged native-event stack
_default:function(t){return er.get(t.target,e)},delegateType:t},// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
//
// Support: IE 9 - 11+
// To preserve relative focusin/focus & focusout/blur event order guaranteed on the 3.x branch,
// attach a single handler for both events in IE.
T.event.special[t]={setup:function(){// Handle: regular nodes (via `this.ownerDocument`), window
// (via `this.document`) & document (via `this`).
var i=this.ownerDocument||this.document||this,r=v.documentMode?this:i,o=er.get(r,t);o||(v.documentMode?this.addEventListener(t,n):i.addEventListener(e,n,!0)),er.set(r,t,(o||0)+1)},teardown:function(){var i=this.ownerDocument||this.document||this,r=v.documentMode?this:i,o=er.get(r,t)-1;o?er.set(r,t,o):(v.documentMode?this.removeEventListener(t,n):i.removeEventListener(e,n,!0),er.remove(r,t))}}}),// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
T.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){T.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,i=e.relatedTarget,r=e.handleObj;return i&&(i===this||T.contains(this,i))||(e.type=r.origType,n=r.handler.apply(this,arguments),e.type=t),n}}}),T.fn.extend({on:function(e,t,n,i){return e_(this,e,t,n,i)},one:function(e,t,n,i){return e_(this,e,t,n,i,1)},off:function(e,t,n){var i,r;if(e&&e.preventDefault&&e.handleObj)return(// ( event )  dispatched jQuery.Event
i=e.handleObj,T(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this);if("object"==typeof e){// ( types-object [, selector] )
for(r in e)this.off(r,t,e[r]);return this}return(!1===t||"function"==typeof t)&&(// ( types [, fn] )
n=t,t=void 0),!1===n&&(n=ek),this.each(function(){T.event.remove(this,e,n,t)})}});var // In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
eO=/<script|<style|<link/i,eM=/checked\s*(?:[^=]|=\s*.checked.)/i,eP=/^\s*<!\[CDATA\[|\]\]>\s*$/g;// Prefer a tbody over its parent table for containing new rows
function ej(e,t){return C(e,"table")&&C(11!==t.nodeType?t:t.firstChild,"tr")&&T(e).children("tbody")[0]||e}// Replace/restore the type attribute of script elements for safe DOM manipulation
function eI(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function eN(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function eH(e,t){var n,i,r,o,s,a;if(1===t.nodeType){// 1. Copy private data: events, handlers, etc.
if(er.hasData(e)&&(a=er.get(e).events))for(r in er.remove(t,"handle events"),a)for(n=0,i=a[r].length;n<i;n++)T.event.add(t,r,a[r][n]);// 2. Copy user data
eo.hasData(e)&&(o=eo.access(e),s=T.extend({},o),eo.set(t,s))}}function eR(e,t,n,i){// Flatten any nested arrays
t=s(t);var r,o,a,l,c,u,d=0,p=e.length,h=p-1,m=t[0],v=g(m);// We can't cloneNode fragments that contain checked, in WebKit
if(v||p>1&&"string"==typeof m&&!f.checkClone&&eM.test(m))return e.each(function(r){var o=e.eq(r);v&&(t[0]=m.call(this,r,o.html())),eR(o,t,n,i)});if(p&&(o=(r=eA(t,e[0].ownerDocument,!1,e,i)).firstChild,1===r.childNodes.length&&(r=o),o||i)){// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (trac-8070).
for(l=(a=T.map(eT(r,"script"),eI)).length;d<p;d++)c=r,d!==h&&(c=T.clone(c,!0,!0),l&&// push.apply(_, arraylike) throws on ancient WebKit
T.merge(a,eT(c,"script"))),n.call(e[d],c,d);if(l)// Evaluate executable scripts on first document insertion
for(u=a[a.length-1].ownerDocument,// Re-enable scripts
T.map(a,eN),d=0;d<l;d++)c=a[d],eS.test(c.type||"")&&!er.access(c,"globalEval")&&T.contains(u,c)&&(c.src&&"module"!==(c.type||"").toLowerCase()?T._evalUrl&&!c.noModule&&T._evalUrl(c.src,{nonce:c.nonce||c.getAttribute("nonce")},u):// needed as in XML documents they're already not visible when
// inspecting element contents and in HTML documents they have no
// meaning but we're preserving that logic for backwards compatibility.
// This will be removed completely in 4.0. See gh-4904.
b(c.textContent.replace(eP,""),c,u))}return e}function eq(e,t,n){for(var i,r=t?T.filter(t,e):e,o=0;null!=(i=r[o]);o++)n||1!==i.nodeType||T.cleanData(eT(i)),i.parentNode&&(n&&eh(i)&&eE(eT(i,"script")),i.parentNode.removeChild(i));return e}T.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var i,r,o,s,a=e.cloneNode(!0),l=eh(e);// Fix IE cloning issues
if(!f.noCloneChecked&&(1===e.nodeType||11===e.nodeType)&&!T.isXMLDoc(e))for(i=0,// We eschew jQuery#find here for performance reasons:
// https://jsperf.com/getall-vs-sizzle/2
s=eT(a),r=(o=eT(e)).length;i<r;i++)!// Fix IE bugs, see support tests
function(e,t){var n=t.nodeName.toLowerCase();// Fails to persist the checked state of a cloned checkbox or radio button.
"input"===n&&eb.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}(o[i],s[i]);// Copy the events from the original to the clone
if(t){if(n)for(i=0,o=o||eT(e),s=s||eT(a),r=o.length;i<r;i++)eH(o[i],s[i]);else eH(e,a)}// Return the cloned set
return(// Preserve script evaluation history
(s=eT(a,"script")).length>0&&eE(s,!l&&eT(e,"script")),a)},cleanData:function(e){for(var t,n,i,r=T.event.special,o=0;void 0!==(n=e[o]);o++)if(en(n)){if(t=n[er.expando]){if(t.events)for(i in t.events)r[i]?T.event.remove(n,i):T.removeEvent(n,i,t.handle);// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
n[er.expando]=void 0}n[eo.expando]&&// Assign undefined instead of using delete, see Data#remove
(n[eo.expando]=void 0)}}}),T.fn.extend({detach:function(e){return eq(this,e,!0)},remove:function(e){return eq(this,e)},text:function(e){return Q(this,function(e){return void 0===e?T.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e)})},null,e,arguments.length)},append:function(){return eR(this,arguments,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&ej(this,e).appendChild(e)})},prepend:function(){return eR(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=ej(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return eR(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return eR(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(// Prevent memory leaks
T.cleanData(eT(e,!1)),// Remove any remaining nodes
e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return T.clone(this,e,t)})},html:function(e){return Q(this,function(e){var t=this[0]||{},n=0,i=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;// See if we can take a shortcut and just use innerHTML
if("string"==typeof e&&!eO.test(e)&&!ex[(ew.exec(e)||["",""])[1].toLowerCase()]){e=T.htmlPrefilter(e);try{for(;n<i;n++)t=this[n]||{},1===t.nodeType&&(T.cleanData(eT(t,!1)),t.innerHTML=e);t=0;// If using innerHTML throws an exception, use the fallback method
}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];// Make the changes, replacing each non-ignored context element with the new content
return eR(this,arguments,function(t){var n=this.parentNode;0>T.inArray(this,e)&&(T.cleanData(eT(this)),n&&n.replaceChild(t,this));// Force callback invocation
},e)}}),T.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){T.fn[e]=function(e){for(var n,i=[],r=T(e),o=r.length-1,s=0;s<=o;s++)n=s===o?this:this.clone(!0),T(r[s])[t](n),// Support: Android <=4.0 only, PhantomJS 1 only
// .get() because push.apply(_, arraylike) throws on ancient WebKit
a.apply(i,n.get());return this.pushStack(i)}});var ez=RegExp("^("+ec+")(?!px)[a-z%]+$","i"),eB=/^--/,eF=function(t){// Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},eW=function(e,t,n){var i,r,o={};// Remember the old values, and insert the new ones
for(r in t)o[r]=e.style[r],e.style[r]=t[r];// Revert the old values
for(r in i=n.call(e),t)e.style[r]=o[r];return i},eG=RegExp(ed.join("|"),"i");function eU(e,t,n){var i,r,o,s,a=eB.test(t),// Retrieving style before computed somehow
// fixes an issue with getting wrong values
// on detached elements
l=e.style;return(n=n||eF(e))&&(// Support: IE <=9 - 11+
// IE only supports `"float"` in `getPropertyValue`; in computed styles
// it's only available as `"cssFloat"`. We no longer modify properties
// sent to `.css()` apart from camelCasing, so we need to check both.
// Normally, this would create difference in behavior: if
// `getPropertyValue` returns an empty string, the value returned
// by `.css()` would be `undefined`. This is usually the case for
// disconnected elements. However, in IE even disconnected elements
// with no styles return `"none"` for `getPropertyValue( "float" )`
s=n.getPropertyValue(t)||n[t],a&&s&&// Spec requires trimming whitespace for custom properties (gh-4926).
// Firefox only trims leading whitespace. Chrome just collapses
// both leading & trailing whitespace to a single space.
//
// Fall back to `undefined` if empty string returned.
// This collapses a missing definition with property defined
// and set to an empty string but there's no standard API
// allowing us to differentiate them without a performance penalty
// and returning `undefined` aligns with older jQuery.
//
// rtrimCSS treats U+000D CARRIAGE RETURN and U+000C FORM FEED
// as whitespace while CSS does not, but this is not a problem
// because CSS preprocessing replaces them with U+000A LINE FEED
// (which *is* CSS whitespace)
// https://www.w3.org/TR/css-syntax-3/#input-preprocessing
(s=s.replace(D,"$1")||void 0),""!==s||eh(e)||(s=T.style(e,t)),!f.pixelBoxStyles()&&ez.test(s)&&eG.test(t)&&(// Remember the original values
i=l.width,r=l.minWidth,o=l.maxWidth,// Put in the new values to get a computed value out
l.minWidth=l.maxWidth=l.width=s,s=n.width,// Revert the changed values
l.width=i,l.minWidth=r,l.maxWidth=o)),void 0!==s?// IE returns zIndex value as an integer.
s+"":s}function eV(e,t){// Define the hook, we'll check on the first run if it's really needed.
return{get:function(){if(e()){// Hook not needed (or it's not possible to use it due
// to missing dependency), remove it.
delete this.get;return}// Hook needed; redefine it so that the support test is not executed again.
return(this.get=t).apply(this,arguments)}}}!function(){// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function t(){// This is a singleton, we need to execute it only once
if(u){c.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ep.appendChild(c).appendChild(u);var t=e.getComputedStyle(u);i="1%"!==t.top,// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
l=12===n(t.marginLeft),// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
// Some styles come back with percentage values, even though they shouldn't
u.style.right="60%",s=36===n(t.right),// Support: IE 9 - 11 only
// Detect misreporting of content dimensions for box-sizing:border-box elements
r=36===n(t.width),// Support: IE 9 only
// Detect overflow:scroll screwiness (gh-3699)
// Support: Chrome <=64
// Don't get tricked when zoom affects offsetWidth (gh-4029)
u.style.position="absolute",o=12===n(u.offsetWidth/3),ep.removeChild(c),// Nullify the div so it wouldn't be stored in the memory and
// it will also be a sign that checks already performed
u=null}}function n(e){return Math.round(parseFloat(e))}var i,r,o,s,a,l,c=v.createElement("div"),u=v.createElement("div");// Finish early in limited (non-browser) environments
u.style&&(// Support: IE <=9 - 11 only
// Style of cloned element affects source element cloned (trac-8908)
u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",f.clearCloneStyle="content-box"===u.style.backgroundClip,T.extend(f,{boxSizingReliable:function(){return t(),r},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),l},scrollboxSize:function(){return t(),o},// Support: IE 9 - 11+, Edge 15 - 18+
// IE/Edge misreport `getComputedStyle` of table rows with width/height
// set in CSS while `offset*` properties report correct values.
// Behavior in IE 9 is more subtle than in newer versions & it passes
// some versions of this test; make sure not to make it pass there!
//
// Support: Firefox 70+
// Only Firefox includes border widths
// in computed dimensions. (gh-4529)
reliableTrDimensions:function(){var t,n,i,r;return null==a&&(t=v.createElement("table"),n=v.createElement("tr"),i=v.createElement("div"),t.style.cssText="position:absolute;left:-11111px;border-collapse:separate",n.style.cssText="box-sizing:content-box;border:1px solid",// Support: Chrome 86+
// Height set through cssText does not get applied.
// Computed height then comes back as 0.
n.style.height="1px",i.style.height="9px",// Support: Android 8 Chrome 86+
// In our bodyBackground.html iframe,
// display for all div elements is set to "inline",
// which causes a problem only in Android 8 Chrome 86.
// Ensuring the div is `display: block`
// gets around this issue.
i.style.display="block",ep.appendChild(t).appendChild(n).appendChild(i),a=parseInt((r=e.getComputedStyle(n)).height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===n.offsetHeight,ep.removeChild(t)),a}}))}();var eX=["Webkit","Moz","ms"],eY=v.createElement("div").style,eK={};// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function eQ(e){return T.cssProps[e]||eK[e]||(e in eY?e:eK[e]=// Return a vendor-prefixed property or undefined
function(e){for(// Check for vendor prefixed names
var t=e[0].toUpperCase()+e.slice(1),n=eX.length;n--;)if((e=eX[n]+t)in eY)return e}(e)||e)}var // except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
eZ=/^(none|table(?!-c[ea]).+)/,eJ={position:"absolute",visibility:"hidden",display:"block"},e0={letterSpacing:"0",fontWeight:"400"};function e1(e,t,n){// Any relative (+/-) values have already been
// normalized at this point
var i=eu.exec(t);return i?Math.max(0,i[2]-(n||0))+(i[3]||"px"):t}function e2(e,t,n,i,r,o){var s="width"===t?1:0,a=0,l=0,c=0;// Adjustment may not be necessary
if(n===(i?"border":"content"))return 0;for(;s<4;s+=2)"margin"===n&&(c+=T.css(e,n+ed[s],!0,r)),i?("content"===n&&(l-=T.css(e,"padding"+ed[s],!0,r)),"margin"!==n&&(l-=T.css(e,"border"+ed[s]+"Width",!0,r))):(// Add padding
l+=T.css(e,"padding"+ed[s],!0,r),"padding"!==n?l+=T.css(e,"border"+ed[s]+"Width",!0,r):a+=T.css(e,"border"+ed[s]+"Width",!0,r));return!i&&o>=0&&// Assuming integer scroll gutter, subtract the rest and round down
(l+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-l-a-.5))||0),l+c}function e3(e,t,n){// Start with computed style
var i=eF(e),r=(!f.boxSizingReliable()||n)&&"border-box"===T.css(e,"boxSizing",!1,i),o=r,s=eU(e,t,i),a="offset"+t[0].toUpperCase()+t.slice(1);// Support: Firefox <=54
// Return a confounding non-pixel value or feign ignorance, as appropriate.
if(ez.test(s)){if(!n)return s;s="auto"}// Adjust for the element's box model
return(!f.boxSizingReliable()&&r||// Support: IE 10 - 11+, Edge 15 - 18+
// IE/Edge misreport `getComputedStyle` of table rows with width/height
// set in CSS while `offset*` properties report correct values.
// Interestingly, in some cases IE 9 doesn't suffer from this issue.
!f.reliableTrDimensions()&&C(e,"tr")||// Fall back to offsetWidth/offsetHeight when value is "auto"
// This happens for inline elements with no explicit setting (gh-3571)
"auto"===s||// Support: Android <=4.1 - 4.3 only
// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
!parseFloat(s)&&"inline"===T.css(e,"display",!1,i))&&// Make sure the element is visible & connected
e.getClientRects().length&&(r="border-box"===T.css(e,"boxSizing",!1,i),// Where available, offsetWidth/offsetHeight approximate border box dimensions.
// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
// retrieved value as a content box dimension.
(o=a in e)&&(s=e[a])),// Normalize "" and auto
(s=parseFloat(s)||0)+e2(e,t,n||(r?"border":"content"),o,i,s)+"px"}function e4(e,t,n,i,r){return new e4.prototype.init(e,t,n,i,r)}T.extend({// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(e,t){if(t){// We should always get a number back from opacity
var n=eU(e,"opacity");return""===n?"1":n}}}},// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,// SVG-related
fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{},// Get and set the style property on a DOM Node
style:function(e,t,n,i){// Don't set styles on text and comment nodes
if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){// Make sure that we're working with the right name
var r,o,s,a=et(t),l=eB.test(t),c=e.style;// Check if we're setting a value
if(l||(t=eQ(a)),// Gets hook for the prefixed version, then unprefixed version
s=T.cssHooks[t]||T.cssHooks[a],void 0===n)return(// If a hook was provided get the non-computed value from there
s&&"get"in s&&void 0!==(r=s.get(e,!1,i))?r:c[t]);// Make sure that null and NaN values aren't set (trac-7116)
"string"==(o=typeof n)&&(r=eu.exec(n))&&r[1]&&(n=em(e,t,r),// Fixes bug trac-9237
o="number"),null!=n&&n==n&&("number"!==o||l||(n+=r&&r[3]||(T.cssNumber[a]?"":"px")),f.clearCloneStyle||""!==n||0!==t.indexOf("background")||(c[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,i))||(l?c.setProperty(t,n):c[t]=n))}},css:function(e,t,n,i){var r,o,s,a=et(t);return(// Make numeric if forced or a qualifier was provided and val looks numeric
(eB.test(t)||(t=eQ(a)),// Try prefixed name followed by the unprefixed name
(s=T.cssHooks[t]||T.cssHooks[a])&&"get"in s&&(r=s.get(e,!0,n)),void 0===r&&(r=eU(e,t,i)),"normal"===r&&t in e0&&(r=e0[t]),""===n||n)?(o=parseFloat(r),!0===n||isFinite(o)?o||0:r):r)}}),T.each(["height","width"],function(e,t){T.cssHooks[t]={get:function(e,n,i){if(n)// but it must have a current display style that would benefit
return!eZ.test(T.css(e,"display"))||// Support: Safari 8+
// Table columns in Safari have non-zero offsetWidth & zero
// getBoundingClientRect().width unless display is changed.
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
e.getClientRects().length&&e.getBoundingClientRect().width?e3(e,t,i):eW(e,eJ,function(){return e3(e,t,i)})},set:function(e,n,i){var r,o=eF(e),// to avoid forcing a reflow.
s=!f.scrollboxSize()&&"absolute"===o.position,a=(s||i)&&"border-box"===T.css(e,"boxSizing",!1,o),l=i?e2(e,t,i,a,o):0;return a&&s&&(l-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-e2(e,t,"border",!1,o)-.5)),l&&(r=eu.exec(n))&&"px"!==(r[3]||"px")&&(e.style[t]=n,n=T.css(e,t)),e1(e,n,l)}}}),T.cssHooks.marginLeft=eV(f.reliableMarginLeft,function(e,t){if(t)return(parseFloat(eU(e,"marginLeft"))||e.getBoundingClientRect().left-eW(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),// These hooks are used by animate to expand properties
T.each({margin:"",padding:"",border:"Width"},function(e,t){T.cssHooks[e+t]={expand:function(n){for(var i=0,r={},o="string"==typeof n?n.split(" "):[n];i<4;i++)r[e+ed[i]+t]=o[i]||o[i-2]||o[0];return r}},"margin"!==e&&(T.cssHooks[e+t].set=e1)}),T.fn.extend({css:function(e,t){return Q(this,function(e,t,n){var i,r,o={},s=0;if(Array.isArray(t)){for(i=eF(e),r=t.length;s<r;s++)o[t[s]]=T.css(e,t[s],!1,i);return o}return void 0!==n?T.style(e,t,n):T.css(e,t)},e,t,arguments.length>1)}}),T.Tween=e4,e4.prototype={constructor:e4,init:function(e,t,n,i,r,o){this.elem=e,this.prop=n,this.easing=r||T.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=i,this.unit=o||(T.cssNumber[n]?"":"px")},cur:function(){var e=e4.propHooks[this.prop];return e&&e.get?e.get(this):e4.propHooks._default.get(this)},run:function(e){var t,n=e4.propHooks[this.prop];return this.options.duration?this.pos=t=T.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):e4.propHooks._default.set(this),this}},e4.prototype.init.prototype=e4.prototype,e4.propHooks={_default:{get:function(e){var t;return(// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
(t=T.css(e.elem,e.prop,""))&&"auto"!==t?t:0)},set:function(e){// Use step hook for back compat.
// Use cssHook if its there.
// Use .style if available and use plain properties where available.
T.fx.step[e.prop]?T.fx.step[e.prop](e):1===e.elem.nodeType&&(T.cssHooks[e.prop]||null!=e.elem.style[eQ(e.prop)])?T.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
e4.propHooks.scrollTop=e4.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},T.easing={linear:function(e){return e},swing:function(e){return .5-Math.cos(e*Math.PI)/2},_default:"swing"},T.fx=e4.prototype.init,// Back compat <1.8 extension point
T.fx.step={};var e6,e9,e7,e5,e8=/^(?:toggle|show|hide)$/,te=/queueHooks$/;// Animations created synchronously will run synchronously
function tt(){return e.setTimeout(function(){e7=void 0}),e7=Date.now()}// Generate parameters to create a standard animation
function tn(e,t){var n,i=0,r={height:e};for(// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
t=t?1:0;i<4;i+=2-t)r["margin"+(n=ed[i])]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function ti(e,t,n){for(var i,r=(tr.tweeners[t]||[]).concat(tr.tweeners["*"]),o=0,s=r.length;o<s;o++)if(i=r[o].call(n,t,e))return i}function tr(e,t,n){var i,r,o=0,s=tr.prefilters.length,a=T.Deferred().always(function(){// Don't match elem in the :animated selector
delete l.elem}),l=function(){if(r)return!1;for(var t=e7||tt(),n=Math.max(0,c.startTime+c.duration-t),i=1-(n/c.duration||0),o=0,s=c.tweens.length;o<s;o++)c.tweens[o].run(i);return(// If there's more to do, yield
(a.notifyWith(e,[c,i,n]),i<1&&s)?n:(s||a.notifyWith(e,[c,1,0]),// Resolve the animation and report its conclusion
a.resolveWith(e,[c]),!1))},c=a.promise({elem:e,props:T.extend({},t),opts:T.extend(!0,{specialEasing:{},easing:T.easing._default},n),originalProperties:t,originalOptions:n,startTime:e7||tt(),duration:n.duration,tweens:[],createTween:function(t,n){var i=T.Tween(e,c.opts,t,n,c.opts.specialEasing[t]||c.opts.easing);return c.tweens.push(i),i},stop:function(t){var n=0,// otherwise we skip this part
i=t?c.tweens.length:0;if(r)return this;for(r=!0;n<i;n++)c.tweens[n].run(1);return t?(a.notifyWith(e,[c,1,0]),a.resolveWith(e,[c,t])):a.rejectWith(e,[c,t]),this}}),u=c.props;for(function(e,t){var n,i,r,o,s;// camelCase, specialEasing and expand cssHook pass
for(n in e)if(r=t[i=et(n)],Array.isArray(o=e[n])&&(r=o[1],o=e[n]=o[0]),n!==i&&(e[i]=o,delete e[n]),(s=T.cssHooks[i])&&("expand"in s))// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(n in o=s.expand(o),delete e[i],o)(n in e)||(e[n]=o[n],t[n]=r);else t[i]=r}(u,c.opts.specialEasing);o<s;o++)if(i=tr.prefilters[o].call(c,e,u,c.opts))return g(i.stop)&&(T._queueHooks(c.elem,c.opts.queue).stop=i.stop.bind(i)),i;return T.map(u,ti,c),g(c.opts.start)&&c.opts.start.call(e,c),// Attach callbacks from options
c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always),T.fx.timer(T.extend(l,{elem:e,anim:c,queue:c.opts.queue})),c}T.Animation=T.extend(tr,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return em(n.elem,e,eu.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(W);for(var n,i=0,r=e.length;i<r;i++)n=e[i],tr.tweeners[n]=tr.tweeners[n]||[],tr.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var i,r,o,s,a,l,c,u,d="width"in t||"height"in t,p=this,h={},f=e.style,g=e.nodeType&&eg(e),m=er.get(e,"fxshow");// Detect show/hide animations
for(i in n.queue||(null==(s=T._queueHooks(e,"fx")).unqueued&&(s.unqueued=0,a=s.empty.fire,s.empty.fire=function(){s.unqueued||a()}),s.unqueued++,p.always(function(){// Ensure the complete handler is called before this completes
p.always(function(){s.unqueued--,T.queue(e,"fx").length||s.empty.fire()})})),t)if(r=t[i],e8.test(r)){if(delete t[i],o=o||"toggle"===r,r===(g?"hide":"show")){// Pretend to be hidden if this is a "show" and
// there is still data from a stopped show/hide
if("show"!==r||!m||void 0===m[i])continue;g=!0}h[i]=m&&m[i]||T.style(e,i)}if(!(!// Bail out if this is a no-op like .hide().hide()
(l=!T.isEmptyObject(t))&&T.isEmptyObject(h)))for(i in d&&1===e.nodeType&&(// Support: IE <=9 - 11, Edge 12 - 15
// Record all 3 overflow attributes because IE does not infer the shorthand
// from identically-valued overflowX and overflowY and Edge just mirrors
// the overflowX value there.
n.overflow=[f.overflow,f.overflowX,f.overflowY],null==// Identify a display type, preferring old show/hide data over the CSS cascade
(c=m&&m.display)&&(c=er.get(e,"display")),"none"===(u=T.css(e,"display"))&&(c?u=c:(// Get nonempty value(s) by temporarily forcing visibility
ey([e],!0),c=e.style.display||c,u=T.css(e,"display"),ey([e]))),("inline"===u||"inline-block"===u&&null!=c)&&"none"===T.css(e,"float")&&(l||(p.done(function(){f.display=c}),null!=c||(c="none"===(u=f.display)?"":u)),f.display="inline-block")),n.overflow&&(f.overflow="hidden",p.always(function(){f.overflow=n.overflow[0],f.overflowX=n.overflow[1],f.overflowY=n.overflow[2]})),// Implement show/hide animations
l=!1,h)l||(m?"hidden"in m&&(g=m.hidden):m=er.access(e,"fxshow",{display:c}),o&&(m.hidden=!g),g&&ey([e],!0),/* eslint-disable no-loop-func */p.done(function(){for(i in g||ey([e]),er.remove(e,"fxshow"),h)T.style(e,i,h[i])})),// Per-property setup
l=ti(g?m[i]:0,i,p),i in m||(m[i]=l.start,g&&(l.end=l.start,l.start=0))}],prefilter:function(e,t){t?tr.prefilters.unshift(e):tr.prefilters.push(e)}}),T.speed=function(e,t,n){var i=e&&"object"==typeof e?T.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return T.fx.off?i.duration=0:"number"!=typeof i.duration&&(i.duration in T.fx.speeds?i.duration=T.fx.speeds[i.duration]:i.duration=T.fx.speeds._default),(null==i.queue||!0===i.queue)&&(i.queue="fx"),// Queueing
i.old=i.complete,i.complete=function(){g(i.old)&&i.old.call(this),i.queue&&T.dequeue(this,i.queue)},i},T.fn.extend({fadeTo:function(e,t,n,i){// Show any hidden elements after setting opacity to 0
return this.filter(eg).css("opacity",0).show()// Animate to the value specified
.end().animate({opacity:t},e,n,i)},animate:function(e,t,n,i){var r=T.isEmptyObject(e),o=T.speed(t,n,i),s=function(){// Operate on a copy of prop so per-property easing won't be lost
var t=tr(this,T.extend({},e),o);// Empty animations, or finishing resolves immediately
(r||er.get(this,"finish"))&&t.stop(!0)};return s.finish=s,r||!1===o.queue?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var i=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each(function(){var t=!0,r=null!=e&&e+"queueHooks",o=T.timers,s=er.get(this);if(r)s[r]&&s[r].stop&&i(s[r]);else for(r in s)s[r]&&s[r].stop&&te.test(r)&&i(s[r]);for(r=o.length;r--;)o[r].elem===this&&(null==e||o[r].queue===e)&&(o[r].anim.stop(n),t=!1,o.splice(r,1));// Start the next in the queue if the last step wasn't forced.
// Timers currently will call their complete callbacks, which
// will dequeue but only if they were gotoEnd.
(t||!n)&&T.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=er.get(this),i=n[e+"queue"],r=n[e+"queueHooks"],o=T.timers,s=i?i.length:0;// Look for any active animations, and finish them
for(// Enable finishing flag on private data
n.finish=!0,// Empty the queue first
T.queue(this,e,[]),r&&r.stop&&r.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));// Look for any animations in the old queue and finish them
for(t=0;t<s;t++)i[t]&&i[t].finish&&i[t].finish.call(this);// Turn off finishing flag
delete n.finish})}}),T.each(["toggle","show","hide"],function(e,t){var n=T.fn[t];T.fn[t]=function(e,i,r){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(tn(t,!0),e,i,r)}}),// Generate shortcuts for custom animations
T.each({slideDown:tn("show"),slideUp:tn("hide"),slideToggle:tn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){T.fn[e]=function(e,n,i){return this.animate(t,e,n,i)}}),T.timers=[],T.fx.tick=function(){var e,t=0,n=T.timers;for(e7=Date.now();t<n.length;t++)// Run the timer and safely remove it when done (allowing for external removal)
(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||T.fx.stop(),e7=void 0},T.fx.timer=function(e){T.timers.push(e),T.fx.start()},T.fx.interval=13,T.fx.start=function(){e5||(e5=!0,function t(){e5&&(!1===v.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(t):e.setTimeout(t,T.fx.interval),T.fx.tick())}())},T.fx.stop=function(){e5=null},T.fx.speeds={slow:600,fast:200,// Default speed
_default:400},// Based off of the plugin by Clint Helfers, with permission.
T.fn.delay=function(t,n){return t=T.fx&&T.fx.speeds[t]||t,n=n||"fx",this.queue(n,function(n,i){var r=e.setTimeout(n,t);i.stop=function(){e.clearTimeout(r)}})},to=v.createElement("input"),ts=v.createElement("select").appendChild(v.createElement("option")),to.type="checkbox",// Support: Android <=4.3 only
// Default value for a checkbox should be "on"
f.checkOn=""!==to.value,// Support: IE <=11 only
// Must access selectedIndex to make default options select
f.optSelected=ts.selected,// Support: IE <=11 only
// An input loses its value after becoming a radio
(to=v.createElement("input")).value="t",to.type="radio",f.radioValue="t"===to.value;var to,ts,ta,tl=T.expr.attrHandle;T.fn.extend({attr:function(e,t){return Q(this,T.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){T.removeAttr(this,e)})}}),T.extend({attr:function(e,t,n){var i,r,o=e.nodeType;// Don't get/set attributes on text, comment and attribute nodes
if(3!==o&&8!==o&&2!==o){// Fallback to prop when attributes are not supported
if(void 0===e.getAttribute)return T.prop(e,t,n);if(1===o&&T.isXMLDoc(e)||(r=T.attrHooks[t.toLowerCase()]||(T.expr.match.bool.test(t)?ta:void 0)),void 0!==n){if(null===n){T.removeAttr(e,t);return}return r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n)}return r&&"get"in r&&null!==(i=r.get(e,t))?i:null==(i=T.find.attr(e,t))?void 0:i}},attrHooks:{type:{set:function(e,t){if(!f.radioValue&&"radio"===t&&C(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,i=0,// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
r=t&&t.match(W);if(r&&1===e.nodeType)for(;n=r[i++];)e.removeAttribute(n)}}),// Hooks for boolean attributes
ta={set:function(e,t,n){return!1===t?T.removeAttr(e,n):e.setAttribute(n,n),n}},T.each(T.expr.match.bool.source.match(/\w+/g),function(e,t){var n=tl[t]||T.find.attr;tl[t]=function(e,t,i){var r,o,s=t.toLowerCase();return i||(// Avoid an infinite loop by temporarily removing this function from the getter
o=tl[s],tl[s]=r,r=null!=n(e,t,i)?s:null,tl[s]=o),r}});var tc=/^(?:input|select|textarea|button)$/i,tu=/^(?:a|area)$/i;// Strip and collapse whitespace according to HTML spec
// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
function td(e){return(e.match(W)||[]).join(" ")}function tp(e){return e.getAttribute&&e.getAttribute("class")||""}function th(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(W)||[]}T.fn.extend({prop:function(e,t){return Q(this,T.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[T.propFix[e]||e]})}}),T.extend({prop:function(e,t,n){var i,r,o=e.nodeType;// Don't get/set properties on text, comment and attribute nodes
if(3!==o&&8!==o&&2!==o)return(1===o&&T.isXMLDoc(e)||(// Fix name and attach hooks
t=T.propFix[t]||t,r=T.propHooks[t]),void 0!==n)?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:e[t]=n:r&&"get"in r&&null!==(i=r.get(e,t))?i:e[t]},propHooks:{tabIndex:{get:function(e){// Support: IE <=9 - 11 only
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// Use proper attribute retrieval (trac-12072)
var t=T.find.attr(e,"tabindex");return t?parseInt(t,10):tc.test(e.nodeName)||tu.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),f.optSelected||(T.propHooks.selected={get:function(e){/* eslint no-unused-expressions: "off" */var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){/* eslint no-unused-expressions: "off" */var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),T.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){T.propFix[this.toLowerCase()]=this}),T.fn.extend({addClass:function(e){var t,n,i,r,o,s;return g(e)?this.each(function(t){T(this).addClass(e.call(this,t,tp(this)))}):(t=th(e)).length?this.each(function(){if(i=tp(this),n=1===this.nodeType&&" "+td(i)+" "){for(o=0;o<t.length;o++)r=t[o],0>n.indexOf(" "+r+" ")&&(n+=r+" ");i!==// Only assign if different to avoid unneeded rendering.
(s=td(n))&&this.setAttribute("class",s)}}):this},removeClass:function(e){var t,n,i,r,o,s;return g(e)?this.each(function(t){T(this).removeClass(e.call(this,t,tp(this)))}):arguments.length?(t=th(e)).length?this.each(function(){if(i=tp(this),// This expression is here for better compressibility (see addClass)
n=1===this.nodeType&&" "+td(i)+" "){for(o=0;o<t.length;o++)// Remove *all* instances
for(r=t[o];n.indexOf(" "+r+" ")>-1;)n=n.replace(" "+r+" "," ");i!==// Only assign if different to avoid unneeded rendering.
(s=td(n))&&this.setAttribute("class",s)}}):this:this.attr("class","")},toggleClass:function(e,t){var n,i,r,o,s=typeof e,a="string"===s||Array.isArray(e);return g(e)?this.each(function(n){T(this).toggleClass(e.call(this,n,tp(this),t),t)}):"boolean"==typeof t&&a?t?this.addClass(e):this.removeClass(e):(n=th(e),this.each(function(){if(a)for(r=0,// Toggle individual class names
o=T(this);r<n.length;r++)i=n[r],o.hasClass(i)?o.removeClass(i):o.addClass(i);else(void 0===e||"boolean"===s)&&((i=tp(this))&&er.set(this,"__className__",i),this.setAttribute&&this.setAttribute("class",i||!1===e?"":er.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,i=0;for(t=" "+e+" ";n=this[i++];)if(1===n.nodeType&&(" "+td(tp(n))+" ").indexOf(t)>-1)return!0;return!1}});var tf=/\r/g;T.fn.extend({val:function(e){var t,n,i,r=this[0];return arguments.length?(i=g(e),this.each(function(n){var r;1!==this.nodeType||(null==(r=i?e.call(this,n,T(this).val()):e)?r="":"number"==typeof r?r+="":Array.isArray(r)&&(r=T.map(r,function(e){return null==e?"":e+""})),(t=T.valHooks[this.type]||T.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,r,"value")||(this.value=r))})):r?(t=T.valHooks[r.type]||T.valHooks[r.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(r,"value"))?n:"string"==typeof(n=r.value)?n.replace(tf,""):null==n?"":n:void 0}}),T.extend({valHooks:{option:{get:function(e){var t=T.find.attr(e,"value");return null!=t?t:// option.text throws exceptions (trac-14686, trac-14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
td(T.text(e))}},select:{get:function(e){var t,n,i,r=e.options,o=e.selectedIndex,s="select-one"===e.type,a=s?null:[],l=s?o+1:r.length;// Loop through all the selected options
for(i=o<0?l:s?o:0;i<l;i++)// Support: IE <=9 only
// IE8-9 doesn't update selected after form reset (trac-2551)
if(((n=r[i]).selected||i===o)&&// Don't return options that are disabled or in a disabled optgroup
!n.disabled&&(!n.parentNode.disabled||!C(n.parentNode,"optgroup"))){// We don't need an array for one selects
if(// Get the specific value for the option
t=T(n).val(),s)return t;// Multi-Selects return an array
a.push(t)}return a},set:function(e,t){for(var n,i,r=e.options,o=T.makeArray(t),s=r.length;s--;)/* eslint-disable no-cond-assign */((i=r[s]).selected=T.inArray(T.valHooks.option.get(i),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),// Radios and checkboxes getter/setter
T.each(["radio","checkbox"],function(){T.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=T.inArray(T(e).val(),t)>-1}},f.checkOn||(T.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});// Return jQuery for attributes-only inclusion
var tg=e.location,tm={guid:Date.now()},tv=/\?/;// Cross-browser xml parsing
T.parseXML=function(t){var n,i;if(!t||"string"!=typeof t)return null;// Support: IE 9 - 11 only
// IE throws on parseFromString with invalid input.
try{n=new e.DOMParser().parseFromString(t,"text/xml")}catch(e){}return i=n&&n.getElementsByTagName("parsererror")[0],(!n||i)&&T.error("Invalid XML: "+(i?T.map(i.childNodes,function(e){return e.textContent}).join("\n"):t)),n};var ty=/^(?:focusinfocus|focusoutblur)$/,tb=function(e){e.stopPropagation()};T.extend(T.event,{trigger:function(t,n,i,r){var o,s,a,l,c,u,p,h,f=[i||v],y=d.call(t,"type")?t.type:t,b=d.call(t,"namespace")?t.namespace.split("."):[];// Don't do events on text and comment nodes
if(s=h=a=i=i||v,!(3===i.nodeType||8===i.nodeType||ty.test(y+T.event.triggered))&&(y.indexOf(".")>-1&&(y=// Namespaced trigger; create a regexp to match event type in handle()
(b=y.split(".")).shift(),b.sort()),c=0>y.indexOf(":")&&"on"+y,// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
// Caller can pass in a jQuery.Event object, Object, or just an event type string
(t=t[T.expando]?t:new T.Event(y,"object"==typeof t&&t)).isTrigger=r?2:3,t.namespace=b.join("."),t.rnamespace=t.namespace?RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,// Clean up the event in case it is being reused
t.result=void 0,t.target||(t.target=i),// Clone any incoming data and prepend the event, creating the handler arg list
n=null==n?[t]:T.makeArray(n,[t]),// Allow special events to draw outside the lines
p=T.event.special[y]||{},r||!p.trigger||!1!==p.trigger.apply(i,n))){// Determine event propagation path in advance, per W3C events spec (trac-9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
if(!r&&!p.noBubble&&!m(i)){for(l=p.delegateType||y,ty.test(l+y)||(s=s.parentNode);s;s=s.parentNode)f.push(s),a=s;a===(i.ownerDocument||v)&&f.push(a.defaultView||a.parentWindow||e)}for(// Fire handlers on the event path
o=0;(s=f[o++])&&!t.isPropagationStopped();)h=s,t.type=o>1?l:p.bindType||y,// jQuery handler
(u=(er.get(s,"events")||Object.create(null))[t.type]&&er.get(s,"handle"))&&u.apply(s,n),// Native handler
(u=c&&s[c])&&u.apply&&en(s)&&(t.result=u.apply(s,n),!1===t.result&&t.preventDefault());return t.type=y,!r&&!t.isDefaultPrevented()&&(!p._default||!1===p._default.apply(f.pop(),n))&&en(i)&&c&&g(i[y])&&!m(i)&&(// Don't re-trigger an onFOO event when we call its FOO() method
(a=i[c])&&(i[c]=null),// Prevent re-triggering of the same event, since we already bubbled it above
T.event.triggered=y,t.isPropagationStopped()&&h.addEventListener(y,tb),i[y](),t.isPropagationStopped()&&h.removeEventListener(y,tb),T.event.triggered=void 0,a&&(i[c]=a)),t.result}},// Piggyback on a donor event to simulate a different one
// Used only for `focus(in | out)` events
simulate:function(e,t,n){var i=T.extend(new T.Event,n,{type:e,isSimulated:!0});T.event.trigger(i,null,t)}}),T.fn.extend({trigger:function(e,t){return this.each(function(){T.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return T.event.trigger(e,t,n,!0)}});var tw=/\[\]$/,tS=/\r?\n/g,tx=/^(?:submit|button|image|reset|file)$/i,tT=/^(?:input|select|textarea|keygen)/i;// Serialize an array of form elements or a set of
// key/values into a query string
T.param=function(e,t){var n,i=[],r=function(e,t){// If value is a function, invoke it and use its return value
var n=g(t)?t():t;i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";// If an array was passed in, assume that it is an array of form elements.
if(Array.isArray(e)||e.jquery&&!T.isPlainObject(e))T.each(e,function(){r(this.name,this.value)});else // did it), otherwise encode params recursively.
for(n in e)!function e(t,n,i,r){var o;if(Array.isArray(n))T.each(n,function(n,o){i||tw.test(t)?r(t,o):e(t+"["+("object"==typeof o&&null!=o?n:"")+"]",o,i,r)});else if(i||"object"!==w(n))r(t,n);else for(o in n)e(t+"["+o+"]",n[o],i,r)}(n,e[n],t,r);// Return the resulting serialization
return i.join("&")},T.fn.extend({serialize:function(){return T.param(this.serializeArray())},serializeArray:function(){return this.map(function(){// Can add propHook for "elements" to filter or add form elements
var e=T.prop(this,"elements");return e?T.makeArray(e):this}).filter(function(){var e=this.type;// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!T(this).is(":disabled")&&tT.test(this.nodeName)&&!tx.test(e)&&(this.checked||!eb.test(e))}).map(function(e,t){var n=T(this).val();return null==n?null:Array.isArray(n)?T.map(n,function(e){return{name:t.name,value:e.replace(tS,"\r\n")}}):{name:t.name,value:n.replace(tS,"\r\n")}}).get()}});var tE=/%20/g,tC=/#.*$/,tA=/([?&])_=[^&]*/,tL=/^(.*?):[ \t]*([^\r\n]*)$/mg,t$=/^(?:GET|HEAD)$/,tk=/^\/\//,/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */t_={},/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */tD={},tO="*/".concat("*"),tM=v.createElement("a");// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function tP(e){// dataTypeExpression is optional and defaults to "*"
return function(t,n){"string"!=typeof t&&(n=t,t="*");var i,r=0,o=t.toLowerCase().match(W)||[];if(g(n))// For each dataType in the dataTypeExpression
for(;i=o[r++];)"+"===i[0]?(e[i=i.slice(1)||"*"]=e[i]||[]).unshift(n):(e[i]=e[i]||[]).push(n)}}// Base inspection function for prefilters and transports
function tj(e,t,n,i){var r={},o=e===tD;function s(a){var l;return r[a]=!0,T.each(e[a]||[],function(e,a){var c=a(t,n,i);return"string"!=typeof c||o||r[c]?o?!(l=c):void 0:(t.dataTypes.unshift(c),s(c),!1)}),l}return s(t.dataTypes[0])||!r["*"]&&s("*")}// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes trac-9887
function tI(e,t){var n,i,r=T.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((r[n]?e:i||(i={}))[n]=t[n]);return i&&T.extend(!0,e,i),e}tM.href=tg.href,T.extend({// Counter for holding the number of active queries
active:0,// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:tg.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(tg.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/accepts:{"*":tO,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{// Convert anything to text
"* text":String,// Text to html (true = no transformation)
"text html":!0,// Evaluate text as a json expression
"text json":JSON.parse,// Parse text as xml
"text xml":T.parseXML},// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:!0,context:!0}},// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(e,t){return t?tI(tI(e,T.ajaxSettings),t):tI(T.ajaxSettings,e)},ajaxPrefilter:tP(t_),ajaxTransport:tP(tD),// Main method
ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),// Force options to be an object
n=n||{};var i,r,o,s,a,l,c,u,d,p,h=T.ajaxSetup({},n),f=h.context||h,g=h.context&&(f.nodeType||f.jquery)?T(f):T.event,m=T.Deferred(),y=T.Callbacks("once memory"),b=h.statusCode||{},w={},S={},x="canceled",E={readyState:0,// Builds headers hashtable if needed
getResponseHeader:function(e){var t;if(c){if(!s)for(s={};t=tL.exec(o);)s[t[1].toLowerCase()+" "]=(s[t[1].toLowerCase()+" "]||[]).concat(t[2]);t=s[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},// Raw string
getAllResponseHeaders:function(){return c?o:null},// Caches the header
setRequestHeader:function(e,t){return null==c&&(w[e=S[e.toLowerCase()]=S[e.toLowerCase()]||e]=t),this},// Overrides response content-type header
overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},// Status-dependent callbacks
statusCode:function(e){var t;if(e){if(c)E.always(e[E.status]);else for(t in e)b[t]=[b[t],e[t]]}return this},// Cancel the request
abort:function(e){var t=e||x;return i&&i.abort(t),C(0,t),this}};// A cross-domain request is in order when the origin doesn't match the current origin.
if(// Attach deferreds
m.promise(E),// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (trac-10093: consistency with old signature)
// We also use the url parameter if available
h.url=((t||h.url||tg.href)+"").replace(tk,tg.protocol+"//"),// Alias method option to type as per ticket trac-12004
h.type=n.method||n.type||h.method||h.type,// Extract dataTypes list
h.dataTypes=(h.dataType||"*").toLowerCase().match(W)||[""],null==h.crossDomain){l=v.createElement("a");// Support: IE <=8 - 11, Edge 12 - 15
// IE throws exception on accessing the href property if url is malformed,
// e.g. http://example.com:80x/
try{l.href=h.url,// Support: IE <=8 - 11 only
// Anchor's host property isn't correctly set when s.url is relative
l.href=l.href,h.crossDomain=tM.protocol+"//"+tM.host!=l.protocol+"//"+l.host}catch(e){// If there is an error parsing the URL, assume it is crossDomain,
// it can be rejected by the transport if it is invalid
h.crossDomain=!0}}// If request was aborted inside a prefilter, stop there
if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=T.param(h.data,h.traditional)),// Apply prefilters
tj(t_,h,n,E),c)return E;// Check for headers option
for(d in// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
(u=T.event&&h.global)&&0==T.active++&&T.event.trigger("ajaxStart"),// Uppercase the type
h.type=h.type.toUpperCase(),// Determine if request has content
h.hasContent=!t$.test(h.type),// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
// Remove hash to simplify url manipulation
r=h.url.replace(tC,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(tE,"+")):(// Remember the hash so we can put it back
p=h.url.slice(r.length),h.data&&(h.processData||"string"==typeof h.data)&&(r+=(tv.test(r)?"&":"?")+h.data,// trac-9682: remove data so that it's not used in an eventual retry
delete h.data),!1===h.cache&&(r=r.replace(tA,"$1"),p=(tv.test(r)?"&":"?")+"_="+tm.guid+++p),// Put hash and anti-cache on the URL that will be requested (gh-1732)
h.url=r+p),h.ifModified&&(T.lastModified[r]&&E.setRequestHeader("If-Modified-Since",T.lastModified[r]),T.etag[r]&&E.setRequestHeader("If-None-Match",T.etag[r])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),// Set the Accepts header for the server, depending on the dataType
E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+tO+"; q=0.01":""):h.accepts["*"]),h.headers)E.setRequestHeader(d,h.headers[d]);// Allow custom headers/mimetypes and early abort
if(h.beforeSend&&(!1===h.beforeSend.call(f,E,h)||c))return E.abort();// If no transport, we auto-abort
if(// Aborting is no longer a cancellation
x="abort",// Install callbacks on deferreds
y.add(h.complete),E.done(h.success),E.fail(h.error),// Get transport
i=tj(tD,h,n,E)){// If request was aborted inside ajaxSend, stop there
if(E.readyState=1,u&&g.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(a=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(w,C)}catch(e){// Rethrow post-completion exceptions
if(c)throw e;// Propagate others as results
C(-1,e)}}else C(-1,"No Transport");// Callback for when everything is done
function C(t,n,s,l){var d,p,v,w,S,x=n;// Ignore repeat invocations
c||(c=!0,a&&e.clearTimeout(a),// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
i=void 0,// Cache response headers
o=l||"",// Set readyState
E.readyState=t>0?4:0,// Determine if successful
d=t>=200&&t<300||304===t,s&&(w=/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */function(e,t,n){// Remove auto dataType and get content-type in the process
for(var i,r,o,s,a=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));// Check if we're dealing with a known content-type
if(i){for(r in a)if(a[r]&&a[r].test(i)){l.unshift(r);break}}// Check to see if we have a response for the expected dataType
if(l[0]in n)o=l[0];else{// Try convertible dataTypes
for(r in n){if(!l[0]||e.converters[r+" "+l[0]]){o=r;break}s||(s=r)}// Or just use first one
o=o||s}// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(o)return o!==l[0]&&l.unshift(o),n[o]}(h,E,s)),!d&&T.inArray("script",h.dataTypes)>-1&&0>T.inArray("json",h.dataTypes)&&(h.converters["text script"]=function(){}),// Convert no matter what (that way responseXXX fields are always set)
w=/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */function(e,t,n,i){var r,o,s,a,l,c={},u=e.dataTypes.slice();// Create converters map with lowercased keys
if(u[1])for(s in e.converters)c[s.toLowerCase()]=e.converters[s];// Convert to each sequential dataType
for(o=u.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&i&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=u.shift()){// There's only work to do if current dataType is non-auto
if("*"===o)o=l;else if("*"!==l&&l!==o){// If none found, seek a pair
if(!// Seek a direct converter
(s=c[l+" "+o]||c["* "+o])){for(r in c)if(// If conv2 outputs current
(a=r.split(" "))[1]===o&&// If prev can be converted to accepted input
(s=c[l+" "+a[0]]||c["* "+a[0]])){// Condense equivalence converters
!0===s?s=c[r]:!0!==c[r]&&(o=a[0],u.unshift(a[1]));break}}// Apply converter (if not an equivalence)
if(!0!==s){// Unless errors are allowed to bubble, catch and return them
if(s&&e.throws)t=s(t);else try{t=s(t)}catch(e){return{state:"parsererror",error:s?e:"No conversion from "+l+" to "+o}}}}}return{state:"success",data:t}}(h,w,E,d),d?(h.ifModified&&((S=E.getResponseHeader("Last-Modified"))&&(T.lastModified[r]=S),(S=E.getResponseHeader("etag"))&&(T.etag[r]=S)),204===t||"HEAD"===h.type?x="nocontent":304===t?x="notmodified":(x=w.state,p=w.data,d=!(v=w.error))):(// Extract error from statusText and normalize for non-aborts
v=x,(t||!x)&&(x="error",t<0&&(t=0))),// Set data for the fake xhr object
E.status=t,E.statusText=(n||x)+"",d?m.resolveWith(f,[p,x,E]):m.rejectWith(f,[E,x,v]),// Status-dependent callbacks
E.statusCode(b),b=void 0,u&&g.trigger(d?"ajaxSuccess":"ajaxError",[E,h,d?p:v]),// Complete
y.fireWith(f,[E,x]),!u||(g.trigger("ajaxComplete",[E,h]),--T.active||T.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return T.get(e,t,n,"json")},getScript:function(e,t){return T.get(e,void 0,t,"script")}}),T.each(["get","post"],function(e,t){T[t]=function(e,n,i,r){// The url can be an options object (which then must have .url)
return g(n)&&(r=r||i,i=n,n=void 0),T.ajax(T.extend({url:e,type:t,dataType:r,data:n,success:i},T.isPlainObject(e)&&e))}}),T.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),T._evalUrl=function(e,t,n){return T.ajax({url:e,// Make this explicit, since user can override this through ajaxSetup (trac-11264)
type:"GET",dataType:"script",cache:!0,async:!1,global:!1,// Only evaluate the response if it is successful (gh-4126)
// dataFilter is not invoked for failure responses, so using it instead
// of the default converter is kludgy but it works.
converters:{"text script":function(){}},dataFilter:function(e){T.globalEval(e,t,n)}})},T.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),// The elements to wrap the target around
t=T(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){T(this).wrapInner(e.call(this,t))}):this.each(function(){var t=T(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){T(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){T(this).replaceWith(this.childNodes)}),this}}),T.expr.pseudos.hidden=function(e){return!T.expr.pseudos.visible(e)},T.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},T.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var tN={// File protocol always yields status code 0, assume 200
0:200,// Support: IE <=9 only
// trac-1450: sometimes IE returns 1223 when it should be 204
1223:204},tH=T.ajaxSettings.xhr();f.cors=!!tH&&"withCredentials"in tH,f.ajax=tH=!!tH,T.ajaxTransport(function(t){var n,i;// Cross domain only allowed if supported through XMLHttpRequest
if(f.cors||tH&&!t.crossDomain)return{send:function(r,o){var s,a=t.xhr();// Apply custom fields if provided
if(a.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(s in t.xhrFields)a[s]=t.xhrFields[s];// Set headers
for(s in t.mimeType&&a.overrideMimeType&&a.overrideMimeType(t.mimeType),t.crossDomain||r["X-Requested-With"]||(r["X-Requested-With"]="XMLHttpRequest"),r)a.setRequestHeader(s,r[s]);// Callback
n=function(e){return function(){n&&(n=i=a.onload=a.onerror=a.onabort=a.ontimeout=a.onreadystatechange=null,"abort"===e?a.abort():"error"===e?"number"!=typeof a.status?o(0,"error"):o(a.status,a.statusText):o(tN[a.status]||a.status,a.statusText,"text"!==// IE9 has no XHR2 but throws on binary (trac-11426)
// For XHR2 non-text, let the caller handle it (gh-2498)
(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},// Listen to events
a.onload=n(),i=a.onerror=a.ontimeout=n("error"),void 0!==a.onabort?a.onabort=i:a.onreadystatechange=function(){// Check readyState before timeout as it changes
4===a.readyState&&// but that will not handle a native abort
// Also, save errorCallback to a variable
// as xhr.onerror cannot be accessed
e.setTimeout(function(){n&&i()})},// Create the abort callback
n=n("abort");try{// Do send the request (this may raise an exception)
a.send(t.hasContent&&t.data||null)}catch(e){// trac-14683: Only rethrow if this hasn't been notified as an error yet
if(n)throw e}},abort:function(){n&&n()}}}),// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
T.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),// Install script dataType
T.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return T.globalEval(e),e}}}),// Handle cache's special case and crossDomain
T.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),// Bind script tag hack transport
T.ajaxTransport("script",function(e){// This transport only deals with cross domain or forced-by-attrs requests
if(e.crossDomain||e.scriptAttrs){var t,n;return{send:function(i,r){t=T("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&r("error"===e.type?404:200,e.type)}),// Use native DOM manipulation to avoid our domManip AJAX trickery
v.head.appendChild(t[0])},abort:function(){n&&n()}}}});var tR=[],tq=/(=)\?(?=&|$)|\?\?/;// Default jsonp settings
T.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=tR.pop()||T.expando+"_"+tm.guid++;return this[e]=!0,e}}),// Detect, normalize options and install callbacks for jsonp requests
T.ajaxPrefilter("json jsonp",function(t,n,i){var r,o,s,a=!1!==t.jsonp&&(tq.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&tq.test(t.data)&&"data");// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(a||"jsonp"===t.dataTypes[0])// Delegate to script
return(// Get callback name, remembering preexisting value associated with it
r=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(tq,"$1"+r):!1!==t.jsonp&&(t.url+=(tv.test(t.url)?"&":"?")+t.jsonp+"="+r),// Use data converter to retrieve json after script execution
t.converters["script json"]=function(){return s||T.error(r+" was not called"),s[0]},// Force json dataType
t.dataTypes[0]="json",// Install callback
o=e[r],e[r]=function(){s=arguments},// Clean-up function (fires after converters)
i.always(function(){void 0===o?T(e).removeProp(r):e[r]=o,t[r]&&(// Make sure that re-using the options doesn't screw things around
t.jsonpCallback=n.jsonpCallback,// Save the callback name for future use
tR.push(r)),s&&g(o)&&o(s[0]),s=o=void 0}),"script")}),// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
f.createHTMLDocument=((n=v.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===n.childNodes.length),// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
T.parseHTML=function(e,t,n){var i,r,o;return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(f.createHTMLDocument?(// Set the base href for the created document
// so any parsed elements with URLs
// are based on the document's URL (gh-2965)
(i=(t=v.implementation.createHTMLDocument("")).createElement("base")).href=v.location.href,t.head.appendChild(i)):t=v),r=N.exec(e),o=!n&&[],r)?[t.createElement(r[1])]:(r=eA([e],t,o),o&&o.length&&T(o).remove(),T.merge([],r.childNodes))},/**
 * Load a url into a page
 */T.fn.load=function(e,t,n){var i,r,o,s=this,a=e.indexOf(" ");return a>-1&&(i=td(e.slice(a)),e=e.slice(0,a)),g(t)?(// We assume that it's the callback
n=t,t=void 0):t&&"object"==typeof t&&(r="POST"),s.length>0&&T.ajax({url:e,// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:r||"GET",dataType:"html",data:t}).done(function(e){// Save response for use in complete callback
o=arguments,s.html(i?// Exclude scripts to avoid IE 'Permission Denied' errors
T("<div>").append(T.parseHTML(e)).find(i):e);// If the request succeeds, this function gets "data", "status", "jqXHR"
// but they are ignored because response was set above.
// If it fails, this function gets "jqXHR", "status", "error"
}).always(n&&function(e,t){s.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},T.expr.pseudos.animated=function(e){return T.grep(T.timers,function(t){return e===t.elem}).length},T.offset={setOffset:function(e,t,n){var i,r,o,s,a,l,c=T.css(e,"position"),u=T(e),d={};"static"===c&&(e.style.position="relative"),a=u.offset(),o=T.css(e,"top"),l=T.css(e,"left"),("absolute"===c||"fixed"===c)&&(o+l).indexOf("auto")>-1?(s=(i=u.position()).top,r=i.left):(s=parseFloat(o)||0,r=parseFloat(l)||0),g(t)&&(t=t.call(e,n,T.extend({},a))),null!=t.top&&(d.top=t.top-a.top+s),null!=t.left&&(d.left=t.left-a.left+r),"using"in t?t.using.call(e,d):u.css(d)}},T.fn.extend({// offset() relates an element's border box to the document origin
offset:function(e){// Preserve chaining for setter
if(arguments.length)return void 0===e?this:this.each(function(t){T.offset.setOffset(this,e,t)});var t,n,i=this[0];if(i)return(// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
i.getClientRects().length?(// Get document-relative position by adding viewport scroll to viewport-relative gBCR
t=i.getBoundingClientRect(),n=i.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0})},// position() relates an element's margin box to its offset parent's padding box
// This corresponds to the behavior of CSS absolute positioning
position:function(){if(this[0]){var e,t,n,i=this[0],r={top:0,left:0};// position:fixed elements are offset from the viewport, which itself always has zero offset
if("fixed"===T.css(i,"position"))t=i.getBoundingClientRect();else{for(t=this.offset(),// Account for the *real* offset parent, which can be the document or its root element
// when a statically positioned element is identified
n=i.ownerDocument,e=i.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===T.css(e,"position");)e=e.parentNode;e&&e!==i&&1===e.nodeType&&(// Incorporate borders into its offset, since they are outside its content origin
r=T(e).offset(),r.top+=T.css(e,"borderTopWidth",!0),r.left+=T.css(e,"borderLeftWidth",!0))}// Subtract parent offsets and element margins
return{top:t.top-r.top-T.css(i,"marginTop",!0),left:t.left-r.left-T.css(i,"marginLeft",!0)}}},// This method will return documentElement in the following cases:
// 1) For the element inside the iframe without offsetParent, this method will return
//    documentElement of the parent window
// 2) For the hidden or detached element
// 3) For body or html element, i.e. in case of the html node - it will return itself
//
// but those exceptions were never presented as a real life use-cases
// and might be considered as more preferable results.
//
// This logic, however, is not guaranteed and can change at any point in the future
offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===T.css(e,"position");)e=e.offsetParent;return e||ep})}}),// Create scrollLeft and scrollTop methods
T.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;T.fn[e]=function(i){return Q(this,function(e,i,r){// Coalesce documents and windows
var o;if(m(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===r)return o?o[t]:e[i];o?o.scrollTo(n?o.pageXOffset:r,n?r:o.pageYOffset):e[i]=r},e,i,arguments.length)}}),// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
T.each(["top","left"],function(e,t){T.cssHooks[t]=eV(f.pixelPosition,function(e,n){if(n)// If curCSS returns percentage, fallback to offset
return n=eU(e,t),ez.test(n)?T(e).position()[t]+"px":n})}),// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
T.each({Height:"height",Width:"width"},function(e,t){T.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,i){// Margin is only for outerHeight, outerWidth
T.fn[i]=function(r,o){var s=arguments.length&&(n||"boolean"!=typeof r),a=n||(!0===r||!0===o?"margin":"border");return Q(this,function(t,n,r){var o;return m(t)?0===i.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===r?T.css(t,n,a):T.style(t,n,r,a)},t,s?r:void 0,s)}})}),T.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){T.fn[t]=function(e){return this.on(t,e)}}),T.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){// ( namespace ) or ( selector, types [, fn] )
return 1==arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)}}),T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){// Handle event binding
T.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}});// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
// Require that the "whitespace run" starts from a non-whitespace
// to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
var tz=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
T.proxy=function(e,t){var n,i,r;// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return(// Simulated bind
i=o.call(arguments,2),// Set the guid of unique handler to the same of original handler, so it can be removed
(r=function(){return e.apply(t||this,i.concat(o.call(arguments)))}).guid=e.guid=e.guid||T.guid++,r)},T.holdReady=function(e){e?T.readyWait++:T.ready(!0)},T.isArray=Array.isArray,T.parseJSON=JSON.parse,T.nodeName=C,T.isFunction=g,T.isWindow=m,T.camelCase=et,T.type=w,T.now=Date.now,T.isNumeric=function(e){// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var t=T.type(e);return("number"===t||"string"===t)&&// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
!isNaN(e-parseFloat(e))},T.trim=function(e){return null==e?"":(e+"").replace(tz,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return T});var tB=e.jQuery,tF=e.$;return T.noConflict=function(t){return e.$===T&&(e.$=tF),t&&e.jQuery===T&&(e.jQuery=tB),T},void 0===t&&(e.jQuery=e.$=T),T},"object"==typeof e.exports?// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket trac-14549 for more info.
e.exports=n.document?i(n,!0):function(e){if(!e.document)throw Error("jQuery requires a window with a document");return i(e)}:i(n)});class c{constructor(e="menu-burger",t="menu"){this.menuBurger=document.getElementById(e),this.menu=document.getElementById(t),this.menuBurger.addEventListener("click",e=>{this.menuBurger.classList.toggle("open"),this.menu.classList.toggle("open")})}}var u={};r=function(e){// This is needed so we can catch the AMD loader configuration and use it
// The inner file should be wrapped (by `banner.start.js`) in a function that
// returns the AMD loader references.
var t=function(){// Restore the Select2 AMD loader so it can be used
// Needed mostly in the language files, where the loader is not inserted
if(e&&e.fn&&e.fn.select2&&e.fn.select2.amd)var t,t=e.fn.select2.amd;// Return the AMD loader configuration so it can be used outside of this file
return function(){if(!t||!t.requirejs){var e,n,i;t?n=t:t={},function(t){var r,o,s,a,l={},c={},u={},d={},p=Object.prototype.hasOwnProperty,h=[].slice,f=/\.js$/;function g(e,t){return p.call(e,t)}/**
     * Given a relative module name, like ./something, normalize it to
     * a real name that can be mapped to a path.
     * @param {String} name the relative name
     * @param {String} baseName a real name that the name arg is relative
     * to.
     * @returns {String} normalized name
     */function m(e,t){var n,i,r,o,s,a,l,c,d,p,h,g=t&&t.split("/"),m=u.map,v=m&&m["*"]||{};//Adjust any relative paths.
if(e){//start trimDots
for(s=(e=e.split("/")).length-1,u.nodeIdCompat&&f.test(e[s])&&(e[s]=e[s].replace(f,"")),"."===e[0].charAt(0)&&g&&(e=g.slice(0,g.length-1).concat(e)),d=0;d<e.length;d++)if("."===(h=e[d]))e.splice(d,1),d-=1;else if(".."===h){// If at the start, or previous value is still ..,
// keep them so that when converted to a path it may
// still work when converted to a path, even though
// as an ID it is less than ideal. In larger point
// releases, may be better to just kick out an error.
if(0===d||1===d&&".."===e[2]||".."===e[d-1])continue;d>0&&(e.splice(d-1,2),d-=2)}//end trimDots
e=e.join("/")}//Apply map config if available.
if((g||v)&&m){for(d=(n=e.split("/")).length;d>0;d-=1){if(i=n.slice(0,d).join("/"),g)//So, do joins on the biggest to smallest lengths of baseParts.
{for(p=g.length;p>0;p-=1)//baseName segment has  config, find if it has one for
//this name.
if((r=m[g.slice(0,p).join("/")])&&(r=r[i])){//Match, update name to the new value.
o=r,a=d;break}}if(o)break;!l&&v&&v[i]&&(l=v[i],c=d)}!o&&l&&(o=l,a=c),o&&(n.splice(0,a,o),e=n.join("/"))}return e}function v(e,n){return function(){//A version of a require function that passes a moduleName
//value for items that may need to
//look up paths relative to the moduleName
var i=h.call(arguments,0);return"string"!=typeof i[0]&&1===i.length&&i.push(null),o.apply(t,i.concat([e,n]))}}function y(e){if(g(c,e)){var n=c[e];delete c[e],d[e]=!0,r.apply(t,n)}if(!g(l,e)&&!g(d,e))throw Error("No "+e);return l[e]}//Turns a plugin!resource to [plugin, resource]
//with the plugin being undefined if the name
//did not have a plugin prefix.
function b(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}/**
     * Makes a name map, normalizing the name, and using a plugin
     * for normalization if necessary. Grabs a ref to plugin
     * too, as an optimization.
     */s=function(e,t){var n,i=b(e),r=i[0],o=t[1];//Using ridiculous property names for space reasons
return(e=i[1],r&&(n=y(r=m(r,o))),r)?e=n&&n.normalize?n.normalize(e,function(e){return m(e,o)}):m(e,o):(r=(i=b(e=m(e,o)))[0],e=i[1],r&&(n=y(r))),{f:r?r+"!"+e:e,n:e,pr:r,p:n}},a={require:function(e){return v(e)},exports:function(e){var t=l[e];return void 0!==t?t:l[e]={}},module:function(e){return{id:e,uri:"",exports:l[e],config:function(){return u&&u.config&&u.config[e]||{}}}}},r=function(e,n,i,r){var o,u,p,h,f,m,w,S,x=[],T=typeof i;//Call the callback to define the module, if necessary.
if(w=(o=//Use name if no relName
r=r||e)?b(o):[],"undefined"===T||"function"===T){for(m=0,//Pull out the defined dependencies and pass the ordered
//values to the callback.
//Default to [require, exports, module] if no deps
n=!n.length&&i.length?["require","exports","module"]:n;m<n.length;m+=1)//Fast path CommonJS standard dependencies.
if("require"===(p=(f=s(n[m],w)).f))x[m]=a.require(e);else if("exports"===p)//CommonJS module spec 1.1
x[m]=a.exports(e),S=!0;else if("module"===p)u=x[m]=a.module(e);else if(g(l,p)||g(c,p)||g(d,p))x[m]=y(p);else if(f.p)f.p.load(f.n,v(r,!0),function(e){return function(t){l[e]=t}}(p),{}),x[m]=l[p];else throw Error(e+" missing "+p);h=i?i.apply(l[e],x):void 0,e&&(u&&u.exports!==t&&u.exports!==l[e]?l[e]=u.exports:h===t&&S||(l[e]=h))}else e&&//worry about defining if have a module name.
(l[e]=i)},e=n=o=function(e,n,i,l,c){if("string"==typeof e){var d;return a[e]?a[e](n):y(s(e,(d=n)?b(d):[]).f)}if(!e.splice){if(//deps is a config object, not an array.
(u=e).deps&&o(u.deps,u.callback),!n)return;n.splice?(//callback is an array, which means it is a dependency list.
//Adjust args if there are dependencies
e=n,n=i,i=null):e=t}return(//Support require(['a'])
n=n||function(){},"function"==typeof i&&(i=l,l=c),l?r(t,e,n,i)://do, and latest browsers "upgrade" to 4 if lower value is used:
//http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
//If want a value immediately, use require('id') instead -- something
//that works in almond on the global level, but not guaranteed and
//unlikely to work in other AMD implementations.
setTimeout(function(){r(t,e,n,i)},4),o)},/**
     * Just drops the config on the floor, but returns req in case
     * the config return value is used.
     */o.config=function(e){return o(e)},/**
     * Expose module registry for debugging and tooling
     */e._defined=l,(i=function(e,t,n){if("string"!=typeof e)throw Error("See almond README: incorrect module build, no module name");t.splice||(//deps is not an array, so probably means
//an object literal or factory function for
//the value. Adjust args.
n=t,t=[]),g(l,e)||g(c,e)||(c[e]=[e,t,n])}).amd={jQuery:!0}}(),t.requirejs=e,t.require=n,t.define=i}}(),t.define("almond",function(){}),/* global jQuery:false, $:false */t.define("jquery",[],function(){var t=e||$;return null==t&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),t}),t.define("select2/utils",["jquery"],function(e){var t={};function n(e){var t=e.prototype,n=[];for(var i in t)"function"==typeof t[i]&&"constructor"!==i&&n.push(i);return n}t.Extend=function(e,t){var n={}.hasOwnProperty;function i(){this.constructor=e}for(var r in t)n.call(t,r)&&(e[r]=t[r]);return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e},t.Decorate=function(e,t){var i=n(t),r=n(e);function o(){var n=Array.prototype.unshift,i=t.prototype.constructor.length,r=e.prototype.constructor;i>0&&(n.call(arguments,e.prototype.constructor),r=t.prototype.constructor),r.apply(this,arguments)}t.displayName=e.displayName,o.prototype=new function(){this.constructor=o};for(var s=0;s<r.length;s++){var a=r[s];o.prototype[a]=e.prototype[a]}for(var l=0;l<i.length;l++){var c=i[l];o.prototype[c]=function(e){// Stub out the original method if it's not decorating an actual method
var n=function(){};e in o.prototype&&(n=o.prototype[e]);var i=t.prototype[e];return function(){return Array.prototype.unshift.call(arguments,n),i.apply(this,arguments)}}(c)}return o};var i=function(){this.listeners={}};i.prototype.on=function(e,t){this.listeners=this.listeners||{},e in this.listeners?this.listeners[e].push(t):this.listeners[e]=[t]},i.prototype.trigger=function(e){var t=Array.prototype.slice,n=t.call(arguments,1);this.listeners=this.listeners||{},null==n&&(n=[]),0===n.length&&n.push({}),// Set the `_type` of the first object to the event
n[0]._type=e,e in this.listeners&&this.invoke(this.listeners[e],t.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},i.prototype.invoke=function(e,t){for(var n=0,i=e.length;n<i;n++)e[n].apply(this,t)},t.Observable=i,t.generateChars=function(e){for(var t="",n=0;n<e;n++)t+=Math.floor(36*Math.random()).toString(36);return t},t.bind=function(e,t){return function(){e.apply(t,arguments)}},t._convertData=function(e){for(var t in e){var n=t.split("-"),i=e;if(1!==n.length){for(var r=0;r<n.length;r++){var o=n[r];// Lowercase the first letter
// By default, dash-separated becomes camelCase
(o=o.substring(0,1).toLowerCase()+o.substring(1))in i||(i[o]={}),r==n.length-1&&(i[o]=e[t]),i=i[o]}delete e[t]}}return e},t.hasScroll=function(t,n){// Adapted from the function created by @ShadowScripter
// and adapted by @BillBarry on the Stack Exchange Code Review website.
// The original code can be found at
// http://codereview.stackexchange.com/q/13338
// and was designed to be used with the Sizzle selector engine.
var i=e(n),r=n.style.overflowX,o=n.style.overflowY;return(//Check both x and y declarations
(r!==o||"hidden"!==o&&"visible"!==o)&&("scroll"===r||"scroll"===o||i.innerHeight()<n.scrollHeight||i.innerWidth()<n.scrollWidth))},t.escapeMarkup=function(e){var t={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return(// Do not try to escape the markup if it's not a string
"string"!=typeof e?e:String(e).replace(/[&<>"'\/\\]/g,function(e){return t[e]}))},// Cache objects in Utils.__cache instead of $.data (see #4346)
t.__cache={};var r=0;return t.GetUniqueElementId=function(e){// Get a unique element Id. If element has no id,
// creates a new unique number, stores it in the id
// attribute and returns the new id with a prefix.
// If an id already exists, it simply returns it with a prefix.
var n=e.getAttribute("data-select2-id");return null!=n||(n=e.id?"select2-data-"+e.id:"select2-data-"+(++r).toString()+"-"+t.generateChars(4),e.setAttribute("data-select2-id",n)),n},t.StoreData=function(e,n,i){// Stores an item in the cache for a specified element.
// name is the cache key.
var r=t.GetUniqueElementId(e);t.__cache[r]||(t.__cache[r]={}),t.__cache[r][n]=i},t.GetData=function(n,i){// Retrieves a value from the cache by its key (name)
// name is optional. If no name specified, return
// all cache items for the specified element.
// and for a specified element.
var r=t.GetUniqueElementId(n);return i?t.__cache[r]&&null!=t.__cache[r][i]?t.__cache[r][i]:e(n).data(i):t.__cache[r]},t.RemoveData=function(e){// Removes all cached items for a specified element.
var n=t.GetUniqueElementId(e);null!=t.__cache[n]&&delete t.__cache[n],e.removeAttribute("data-select2-id")},t.copyNonInternalCssClasses=function(e,t){var n=e.getAttribute("class").trim().split(/\s+/);n=n.filter(function(e){// Save all Select2 classes
return 0===e.indexOf("select2-")});var i=t.getAttribute("class").trim().split(/\s+/);i=i.filter(function(e){// Only copy non-Select2 classes
return 0!==e.indexOf("select2-")});var r=n.concat(i);e.setAttribute("class",r.join(" "))},t}),t.define("select2/results",["jquery","./utils"],function(e,t){function n(e,t,i){this.$element=e,this.data=i,this.options=t,n.__super__.constructor.call(this)}return t.Extend(n,t.Observable),n.prototype.render=function(){var t=e('<ul class="select2-results__options" role="listbox"></ul>');return this.options.get("multiple")&&t.attr("aria-multiselectable","true"),this.$results=t,t},n.prototype.clear=function(){this.$results.empty()},n.prototype.displayMessage=function(t){var n=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var i=e('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'),r=this.options.get("translations").get(t.message);i.append(n(r(t.args))),i[0].className+=" select2-results__message",this.$results.append(i)},n.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},n.prototype.append=function(e){this.hideLoading();var t=[];if(null==e.results||0===e.results.length){0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"});return}e.results=this.sort(e.results);for(var n=0;n<e.results.length;n++){var i=e.results[n],r=this.option(i);t.push(r)}this.$results.append(t)},n.prototype.position=function(e,t){t.find(".select2-results").append(e)},n.prototype.sort=function(e){return this.options.get("sorter")(e)},n.prototype.highlightFirstItem=function(){var e=this.$results.find(".select2-results__option--selectable"),t=e.filter(".select2-results__option--selected");t.length>0?t.first().trigger("mouseenter"):// in the dropdown
e.first().trigger("mouseenter"),this.ensureHighlightVisible()},n.prototype.setClasses=function(){var n=this;this.data.current(function(i){var r=i.map(function(e){return e.id.toString()});n.$results.find(".select2-results__option--selectable").each(function(){var n=e(this),i=t.GetData(this,"data"),o=""+i.id;null!=i.element&&i.element.selected||null==i.element&&r.indexOf(o)>-1?(this.classList.add("select2-results__option--selected"),n.attr("aria-selected","true")):(this.classList.remove("select2-results__option--selected"),n.attr("aria-selected","false"))})})},n.prototype.showLoading=function(e){this.hideLoading();var t={disabled:!0,loading:!0,text:this.options.get("translations").get("searching")(e)},n=this.option(t);n.className+=" loading-results",this.$results.prepend(n)},n.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},n.prototype.option=function(n){var i=document.createElement("li");i.classList.add("select2-results__option"),i.classList.add("select2-results__option--selectable");var r={role:"option"},o=window.Element.prototype.matches||window.Element.prototype.msMatchesSelector||window.Element.prototype.webkitMatchesSelector;for(var s in(null!=n.element&&o.call(n.element,":disabled")||null==n.element&&n.disabled)&&(r["aria-disabled"]="true",i.classList.remove("select2-results__option--selectable"),i.classList.add("select2-results__option--disabled")),null==n.id&&i.classList.remove("select2-results__option--selectable"),null!=n._resultId&&(i.id=n._resultId),n.title&&(i.title=n.title),n.children&&(r.role="group",r["aria-label"]=n.text,i.classList.remove("select2-results__option--selectable"),i.classList.add("select2-results__option--group")),r){var a=r[s];i.setAttribute(s,a)}if(n.children){var l=e(i),c=document.createElement("strong");c.className="select2-results__group",this.template(n,c);for(var u=[],d=0;d<n.children.length;d++){var p=n.children[d],h=this.option(p);u.push(h)}var f=e("<ul></ul>",{class:"select2-results__options select2-results__options--nested",role:"none"});f.append(u),l.append(c),l.append(f)}else this.template(n,i);return t.StoreData(i,"data",n),i},n.prototype.bind=function(n,i){var r=this,o=n.id+"-results";this.$results.attr("id",o),n.on("results:all",function(e){r.clear(),r.append(e.data),n.isOpen()&&(r.setClasses(),r.highlightFirstItem())}),n.on("results:append",function(e){r.append(e.data),n.isOpen()&&r.setClasses()}),n.on("query",function(e){r.hideMessages(),r.showLoading(e)}),n.on("select",function(){n.isOpen()&&(r.setClasses(),r.options.get("scrollAfterSelect")&&r.highlightFirstItem())}),n.on("unselect",function(){n.isOpen()&&(r.setClasses(),r.options.get("scrollAfterSelect")&&r.highlightFirstItem())}),n.on("open",function(){// When the dropdown is open, aria-expended="true"
r.$results.attr("aria-expanded","true"),r.$results.attr("aria-hidden","false"),r.setClasses(),r.ensureHighlightVisible()}),n.on("close",function(){// When the dropdown is closed, aria-expended="false"
r.$results.attr("aria-expanded","false"),r.$results.attr("aria-hidden","true"),r.$results.removeAttr("aria-activedescendant")}),n.on("results:toggle",function(){var e=r.getHighlightedResults();0!==e.length&&e.trigger("mouseup")}),n.on("results:select",function(){var e=r.getHighlightedResults();if(0!==e.length){var n=t.GetData(e[0],"data");e.hasClass("select2-results__option--selected")?r.trigger("close",{}):r.trigger("select",{data:n})}}),n.on("results:previous",function(){var e=r.getHighlightedResults(),t=r.$results.find(".select2-results__option--selectable"),n=t.index(e);// If we are already at the top, don't move further
// If no options, currentIndex will be -1
if(!(n<=0)){var i=n-1;// If none are highlighted, highlight the first
0===e.length&&(i=0);var o=t.eq(i);o.trigger("mouseenter");var s=r.$results.offset().top,a=o.offset().top,l=r.$results.scrollTop()+(a-s);0===i?r.$results.scrollTop(0):a-s<0&&r.$results.scrollTop(l)}}),n.on("results:next",function(){var e=r.getHighlightedResults(),t=r.$results.find(".select2-results__option--selectable"),n=t.index(e)+1;// If we are at the last option, stay there
if(!(n>=t.length)){var i=t.eq(n);i.trigger("mouseenter");var o=r.$results.offset().top+r.$results.outerHeight(!1),s=i.offset().top+i.outerHeight(!1),a=r.$results.scrollTop()+s-o;0===n?r.$results.scrollTop(0):s>o&&r.$results.scrollTop(a)}}),n.on("results:focus",function(e){e.element[0].classList.add("select2-results__option--highlighted"),e.element[0].setAttribute("aria-selected","true")}),n.on("results:message",function(e){r.displayMessage(e)}),e.fn.mousewheel&&this.$results.on("mousewheel",function(e){var t=r.$results.scrollTop(),n=r.$results.get(0).scrollHeight-t+e.deltaY,i=e.deltaY>0&&t-e.deltaY<=0,o=e.deltaY<0&&n<=r.$results.height();i?(r.$results.scrollTop(0),e.preventDefault(),e.stopPropagation()):o&&(r.$results.scrollTop(r.$results.get(0).scrollHeight-r.$results.height()),e.preventDefault(),e.stopPropagation())}),this.$results.on("mouseup",".select2-results__option--selectable",function(n){var i=e(this),o=t.GetData(this,"data");if(i.hasClass("select2-results__option--selected")){r.options.get("multiple")?r.trigger("unselect",{originalEvent:n,data:o}):r.trigger("close",{});return}r.trigger("select",{originalEvent:n,data:o})}),this.$results.on("mouseenter",".select2-results__option--selectable",function(n){var i=t.GetData(this,"data");r.getHighlightedResults().removeClass("select2-results__option--highlighted").attr("aria-selected","false"),r.trigger("results:focus",{data:i,element:e(this)})})},n.prototype.getHighlightedResults=function(){return this.$results.find(".select2-results__option--highlighted")},n.prototype.destroy=function(){this.$results.remove()},n.prototype.ensureHighlightVisible=function(){var e=this.getHighlightedResults();if(0!==e.length){var t=this.$results.find(".select2-results__option--selectable").index(e),n=this.$results.offset().top,i=e.offset().top,r=this.$results.scrollTop()+(i-n),o=i-n;r-=2*e.outerHeight(!1),t<=2?this.$results.scrollTop(0):(o>this.$results.outerHeight()||o<0)&&this.$results.scrollTop(r)}},n.prototype.template=function(t,n){var i=this.options.get("templateResult"),r=this.options.get("escapeMarkup"),o=i(t,n);null==o?n.style.display="none":"string"==typeof o?n.innerHTML=r(o):e(n).append(o)},n}),t.define("select2/keys",[],function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46}}),t.define("select2/selection/base",["jquery","../utils","../keys"],function(e,t,n){function i(e,t){this.$element=e,this.options=t,i.__super__.constructor.call(this)}return t.Extend(i,t.Observable),i.prototype.render=function(){var n=e('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=t.GetData(this.$element[0],"old-tabindex")?this._tabindex=t.GetData(this.$element[0],"old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),n.attr("title",this.$element.attr("title")),n.attr("tabindex",this._tabindex),n.attr("aria-disabled","false"),this.$selection=n,n},i.prototype.bind=function(e,t){var i=this,r=e.id+"-results";this.container=e,this.$selection.on("focus",function(e){i.trigger("focus",e)}),this.$selection.on("blur",function(e){i._handleBlur(e)}),this.$selection.on("keydown",function(e){i.trigger("keypress",e),e.which===n.SPACE&&e.preventDefault()}),e.on("results:focus",function(e){i.$selection.attr("aria-activedescendant",e.data._resultId)}),e.on("selection:update",function(e){i.update(e.data)}),e.on("open",function(){// When the dropdown is open, aria-expanded="true"
i.$selection.attr("aria-expanded","true"),i.$selection.attr("aria-owns",r),i._attachCloseHandler(e)}),e.on("close",function(){// When the dropdown is closed, aria-expanded="false"
i.$selection.attr("aria-expanded","false"),i.$selection.removeAttr("aria-activedescendant"),i.$selection.removeAttr("aria-owns"),i.$selection.trigger("focus"),i._detachCloseHandler(e)}),e.on("enable",function(){i.$selection.attr("tabindex",i._tabindex),i.$selection.attr("aria-disabled","false")}),e.on("disable",function(){i.$selection.attr("tabindex","-1"),i.$selection.attr("aria-disabled","true")})},i.prototype._handleBlur=function(t){var n=this;// This needs to be delayed as the active element is the body when the tab
// key is pressed, possibly along with others.
window.setTimeout(function(){// Don't trigger `blur` if the focus is still in the selection
document.activeElement==n.$selection[0]||e.contains(n.$selection[0],document.activeElement)||n.trigger("blur",t)},1)},i.prototype._attachCloseHandler=function(n){e(document.body).on("mousedown.select2."+n.id,function(n){var i=e(n.target).closest(".select2");e(".select2.select2-container--open").each(function(){this!=i[0]&&t.GetData(this,"element").select2("close")})})},i.prototype._detachCloseHandler=function(t){e(document.body).off("mousedown.select2."+t.id)},i.prototype.position=function(e,t){t.find(".selection").append(e)},i.prototype.destroy=function(){this._detachCloseHandler(this.container)},i.prototype.update=function(e){throw Error("The `update` method must be defined in child classes.")},/**
   * Helper method to abstract the "enabled" (not "disabled") state of this
   * object.
   *
   * @return {true} if the instance is not disabled.
   * @return {false} if the instance is disabled.
   */i.prototype.isEnabled=function(){return!this.isDisabled()},/**
   * Helper method to abstract the "disabled" state of this object.
   *
   * @return {true} if the disabled option is true.
   * @return {false} if the disabled option is false.
   */i.prototype.isDisabled=function(){return this.options.get("disabled")},i}),t.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(e,t,n,i){function r(){r.__super__.constructor.apply(this,arguments)}return n.Extend(r,t),r.prototype.render=function(){var e=r.__super__.render.call(this);return e[0].classList.add("select2-selection--single"),e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),e},r.prototype.bind=function(e,t){var n=this;r.__super__.bind.apply(this,arguments);var i=e.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",i).attr("role","textbox").attr("aria-readonly","true"),this.$selection.attr("aria-labelledby",i),this.$selection.attr("aria-controls",i),this.$selection.on("mousedown",function(e){// Only respond to left clicks
1===e.which&&n.trigger("toggle",{originalEvent:e})}),this.$selection.on("focus",function(e){// User focuses on the container
}),this.$selection.on("blur",function(e){// User exits the container
}),e.on("focus",function(t){e.isOpen()||n.$selection.trigger("focus")})},r.prototype.clear=function(){var e=this.$selection.find(".select2-selection__rendered");e.empty(),e.removeAttr("title")},r.prototype.display=function(e,t){var n=this.options.get("templateSelection");return this.options.get("escapeMarkup")(n(e,t))},r.prototype.selectionContainer=function(){return e("<span></span>")},r.prototype.update=function(e){if(0===e.length){this.clear();return}var t=e[0],n=this.$selection.find(".select2-selection__rendered"),i=this.display(t,n);n.empty().append(i);var r=t.title||t.text;r?n.attr("title",r):n.removeAttr("title")},r}),t.define("select2/selection/multiple",["jquery","./base","../utils"],function(e,t,n){function i(e,t){i.__super__.constructor.apply(this,arguments)}return n.Extend(i,t),i.prototype.render=function(){var e=i.__super__.render.call(this);return e[0].classList.add("select2-selection--multiple"),e.html('<ul class="select2-selection__rendered"></ul>'),e},i.prototype.bind=function(t,r){var o=this;i.__super__.bind.apply(this,arguments);var s=t.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",s),this.$selection.on("click",function(e){o.trigger("toggle",{originalEvent:e})}),this.$selection.on("click",".select2-selection__choice__remove",function(t){// Ignore the event if it is disabled
if(!o.isDisabled()){var i=e(this).parent(),r=n.GetData(i[0],"data");o.trigger("unselect",{originalEvent:t,data:r})}}),this.$selection.on("keydown",".select2-selection__choice__remove",function(e){// Ignore the event if it is disabled
o.isDisabled()||e.stopPropagation()})},i.prototype.clear=function(){var e=this.$selection.find(".select2-selection__rendered");e.empty(),e.removeAttr("title")},i.prototype.display=function(e,t){var n=this.options.get("templateSelection");return this.options.get("escapeMarkup")(n(e,t))},i.prototype.selectionContainer=function(){return e('<li class="select2-selection__choice"><button type="button" class="select2-selection__choice__remove" tabindex="-1"><span aria-hidden="true">&times;</span></button><span class="select2-selection__choice__display"></span></li>')},i.prototype.update=function(e){if(this.clear(),0!==e.length){for(var t=[],i=this.$selection.find(".select2-selection__rendered").attr("id")+"-choice-",r=0;r<e.length;r++){var o=e[r],s=this.selectionContainer(),a=this.display(o,s),l=i+n.generateChars(4)+"-";o.id?l+=o.id:l+=n.generateChars(4),s.find(".select2-selection__choice__display").append(a).attr("id",l);var c=o.title||o.text;c&&s.attr("title",c);var u=this.options.get("translations").get("removeItem"),d=s.find(".select2-selection__choice__remove");d.attr("title",u()),d.attr("aria-label",u()),d.attr("aria-describedby",l),n.StoreData(s[0],"data",o),t.push(s)}this.$selection.find(".select2-selection__rendered").append(t)}},i}),t.define("select2/selection/placeholder",[],function(){function e(e,t,n){this.placeholder=this.normalizePlaceholder(n.get("placeholder")),e.call(this,t,n)}return e.prototype.normalizePlaceholder=function(e,t){return"string"==typeof t&&(t={id:"",text:t}),t},e.prototype.createPlaceholder=function(e,t){var n=this.selectionContainer();n.html(this.display(t)),n[0].classList.add("select2-selection__placeholder"),n[0].classList.remove("select2-selection__choice");var i=t.title||t.text||n.text();return this.$selection.find(".select2-selection__rendered").attr("title",i),n},e.prototype.update=function(e,t){var n=1==t.length&&t[0].id!=this.placeholder.id;if(t.length>1||n)return e.call(this,t);this.clear();var i=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(i)},e}),t.define("select2/selection/allowClear",["jquery","../keys","../utils"],function(e,t,n){function i(){}return i.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(e){i._handleClear(e)}),t.on("keypress",function(e){i._handleKeyboardClear(e,t)})},i.prototype._handleClear=function(e,t){// Ignore the event if it is disabled
if(!this.isDisabled()){var i=this.$selection.find(".select2-selection__clear");// Ignore the event if nothing has been selected
if(0!==i.length){t.stopPropagation();var r=n.GetData(i[0],"data"),o=this.$element.val();this.$element.val(this.placeholder.id);var s={data:r};if(this.trigger("clear",s),s.prevented){this.$element.val(o);return}for(var a=0;a<r.length;a++)// If the event was prevented, don't clear it out.
if(s={data:r[a]},// Trigger the `unselect` event, so people can prevent it from being
// cleared.
this.trigger("unselect",s),s.prevented){this.$element.val(o);return}this.$element.trigger("input").trigger("change"),this.trigger("toggle",{})}}},i.prototype._handleKeyboardClear=function(e,n,i){i.isOpen()||n.which!=t.DELETE&&n.which!=t.BACKSPACE||this._handleClear(n)},i.prototype.update=function(t,i){if(t.call(this,i),this.$selection.find(".select2-selection__clear").remove(),this.$selection[0].classList.remove("select2-selection--clearable"),!(this.$selection.find(".select2-selection__placeholder").length>0)&&0!==i.length){var r=this.$selection.find(".select2-selection__rendered").attr("id"),o=this.options.get("translations").get("removeAllItems"),s=e('<button type="button" class="select2-selection__clear" tabindex="-1"><span aria-hidden="true">&times;</span></button>');s.attr("title",o()),s.attr("aria-label",o()),s.attr("aria-describedby",r),n.StoreData(s[0],"data",i),this.$selection.prepend(s),this.$selection[0].classList.add("select2-selection--clearable")}},i}),t.define("select2/selection/search",["jquery","../utils","../keys"],function(e,t,n){function i(e,t,n){e.call(this,t,n)}return i.prototype.render=function(t){var n=this.options.get("translations").get("search"),i=e('<span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" ></textarea></span>');this.$searchContainer=i,this.$search=i.find("textarea"),this.$search.prop("autocomplete",this.options.get("autocomplete")),this.$search.attr("aria-label",n());var r=t.call(this);return this._transferTabIndex(),r.append(this.$searchContainer),r},i.prototype.bind=function(e,i,r){var o=this,s=i.id+"-results",a=i.id+"-container";e.call(this,i,r),o.$search.attr("aria-describedby",a),i.on("open",function(){o.$search.attr("aria-controls",s),o.$search.trigger("focus")}),i.on("close",function(){o.$search.val(""),o.resizeSearch(),o.$search.removeAttr("aria-controls"),o.$search.removeAttr("aria-activedescendant"),o.$search.trigger("focus")}),i.on("enable",function(){o.$search.prop("disabled",!1),o._transferTabIndex()}),i.on("disable",function(){o.$search.prop("disabled",!0)}),i.on("focus",function(e){o.$search.trigger("focus")}),i.on("results:focus",function(e){e.data._resultId?o.$search.attr("aria-activedescendant",e.data._resultId):o.$search.removeAttr("aria-activedescendant")}),this.$selection.on("focusin",".select2-search--inline",function(e){o.trigger("focus",e)}),this.$selection.on("focusout",".select2-search--inline",function(e){o._handleBlur(e)}),this.$selection.on("keydown",".select2-search--inline",function(e){if(e.stopPropagation(),o.trigger("keypress",e),o._keyUpPrevented=e.isDefaultPrevented(),e.which===n.BACKSPACE&&""===o.$search.val()){var i=o.$selection.find(".select2-selection__choice").last();if(i.length>0){var r=t.GetData(i[0],"data");o.searchRemoveChoice(r),e.preventDefault()}}}),this.$selection.on("click",".select2-search--inline",function(e){o.$search.val()&&e.stopPropagation()});// Try to detect the IE version should the `documentMode` property that
// is stored on the document. This is only implemented in IE and is
// slightly cleaner than doing a user agent check.
// This property is not available in Edge, but Edge also doesn't have
// this bug.
var l=document.documentMode,c=l&&l<=11;// Workaround for browsers which do not support the `input` event
// This will prevent double-triggering of events for browsers which support
// both the `keyup` and `input` events.
this.$selection.on("input.searchcheck",".select2-search--inline",function(e){// IE will trigger the `input` event when a placeholder is used on a
// search box. To get around this issue, we are forced to ignore all
// `input` events in IE and keep using `keyup`.
if(c){o.$selection.off("input.search input.searchcheck");return}// Unbind the duplicated `keyup` event
o.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(e){// IE will trigger the `input` event when a placeholder is used on a
// search box. To get around this issue, we are forced to ignore all
// `input` events in IE and keep using `keyup`.
if(c&&"input"===e.type){o.$selection.off("input.search input.searchcheck");return}var t=e.which;// We can freely ignore events from modifier keys
t!=n.SHIFT&&t!=n.CTRL&&t!=n.ALT&&t!=n.TAB&&o.handleSearch(e)})},/**
   * This method will transfer the tabindex attribute from the rendered
   * selection to the search box. This allows for the search box to be used as
   * the primary focus instead of the selection container.
   *
   * @private
   */i.prototype._transferTabIndex=function(e){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},i.prototype.createPlaceholder=function(e,t){this.$search.attr("placeholder",t.text)},i.prototype.update=function(e,t){var n=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),e.call(this,t),this.resizeSearch(),n&&this.$search.trigger("focus")},i.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var e=this.$search.val();this.trigger("query",{term:e})}this._keyUpPrevented=!1},i.prototype.searchRemoveChoice=function(e,t){this.trigger("unselect",{data:t}),this.$search.val(t.text),this.handleSearch()},i.prototype.resizeSearch=function(){this.$search.css("width","25px");var e="100%";""===this.$search.attr("placeholder")&&(e=.75*(this.$search.val().length+1)+"em"),this.$search.css("width",e)},i}),t.define("select2/selection/selectionCss",["../utils"],function(e){function t(){}return t.prototype.render=function(t){var n=t.call(this),i=this.options.get("selectionCssClass")||"";return -1!==i.indexOf(":all:")&&(i=i.replace(":all:",""),e.copyNonInternalCssClasses(n[0],this.$element[0])),n.addClass(i),n},t}),t.define("select2/selection/eventRelay",["jquery"],function(e){function t(){}return t.prototype.bind=function(t,n,i){var r=this,o=["open","opening","close","closing","select","selecting","unselect","unselecting","clear","clearing"],s=["opening","closing","selecting","unselecting","clearing"];t.call(this,n,i),n.on("*",function(t,n){// Ignore events that should not be relayed
if(-1!==o.indexOf(t)){// The parameters should always be an object
n=n||{};// Generate the jQuery event for the Select2 event
var i=e.Event("select2:"+t,{params:n});r.$element.trigger(i),-1!==s.indexOf(t)&&(n.prevented=i.isDefaultPrevented())}})},t}),t.define("select2/translation",["jquery","require"],function(e,t){function n(e){this.dict=e||{}}return n.prototype.all=function(){return this.dict},n.prototype.get=function(e){return this.dict[e]},n.prototype.extend=function(t){this.dict=e.extend({},t.all(),this.dict)},// Static functions
n._cache={},n.loadPath=function(e){if(!(e in n._cache)){var i=t(e);n._cache[e]=i}return new n(n._cache[e])},n}),t.define("select2/diacritics",[],function(){return{"Ⓐ":"A",Ａ:"A",À:"A",Á:"A",Â:"A",Ầ:"A",Ấ:"A",Ẫ:"A",Ẩ:"A",Ã:"A",Ā:"A",Ă:"A",Ằ:"A",Ắ:"A",Ẵ:"A",Ẳ:"A",Ȧ:"A",Ǡ:"A",Ä:"A",Ǟ:"A",Ả:"A",Å:"A",Ǻ:"A",Ǎ:"A",Ȁ:"A",Ȃ:"A",Ạ:"A",Ậ:"A",Ặ:"A",Ḁ:"A",Ą:"A",Ⱥ:"A",Ɐ:"A",Ꜳ:"AA",Æ:"AE",Ǽ:"AE",Ǣ:"AE",Ꜵ:"AO",Ꜷ:"AU",Ꜹ:"AV",Ꜻ:"AV",Ꜽ:"AY","Ⓑ":"B",Ｂ:"B",Ḃ:"B",Ḅ:"B",Ḇ:"B",Ƀ:"B",Ƃ:"B",Ɓ:"B","Ⓒ":"C",Ｃ:"C",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",Ç:"C",Ḉ:"C",Ƈ:"C",Ȼ:"C",Ꜿ:"C","Ⓓ":"D",Ｄ:"D",Ḋ:"D",Ď:"D",Ḍ:"D",Ḑ:"D",Ḓ:"D",Ḏ:"D",Đ:"D",Ƌ:"D",Ɗ:"D",Ɖ:"D",Ꝺ:"D",Ǳ:"DZ",Ǆ:"DZ",ǲ:"Dz",ǅ:"Dz","Ⓔ":"E",Ｅ:"E",È:"E",É:"E",Ê:"E",Ề:"E",Ế:"E",Ễ:"E",Ể:"E",Ẽ:"E",Ē:"E",Ḕ:"E",Ḗ:"E",Ĕ:"E",Ė:"E",Ë:"E",Ẻ:"E",Ě:"E",Ȅ:"E",Ȇ:"E",Ẹ:"E",Ệ:"E",Ȩ:"E",Ḝ:"E",Ę:"E",Ḙ:"E",Ḛ:"E",Ɛ:"E",Ǝ:"E","Ⓕ":"F",Ｆ:"F",Ḟ:"F",Ƒ:"F",Ꝼ:"F","Ⓖ":"G",Ｇ:"G",Ǵ:"G",Ĝ:"G",Ḡ:"G",Ğ:"G",Ġ:"G",Ǧ:"G",Ģ:"G",Ǥ:"G",Ɠ:"G",Ꞡ:"G",Ᵹ:"G",Ꝿ:"G","Ⓗ":"H",Ｈ:"H",Ĥ:"H",Ḣ:"H",Ḧ:"H",Ȟ:"H",Ḥ:"H",Ḩ:"H",Ḫ:"H",Ħ:"H",Ⱨ:"H",Ⱶ:"H",Ɥ:"H","Ⓘ":"I",Ｉ:"I",Ì:"I",Í:"I",Î:"I",Ĩ:"I",Ī:"I",Ĭ:"I",İ:"I",Ï:"I",Ḯ:"I",Ỉ:"I",Ǐ:"I",Ȉ:"I",Ȋ:"I",Ị:"I",Į:"I",Ḭ:"I",Ɨ:"I","Ⓙ":"J",Ｊ:"J",Ĵ:"J",Ɉ:"J","Ⓚ":"K",Ｋ:"K",Ḱ:"K",Ǩ:"K",Ḳ:"K",Ķ:"K",Ḵ:"K",Ƙ:"K",Ⱪ:"K",Ꝁ:"K",Ꝃ:"K",Ꝅ:"K",Ꞣ:"K","Ⓛ":"L",Ｌ:"L",Ŀ:"L",Ĺ:"L",Ľ:"L",Ḷ:"L",Ḹ:"L",Ļ:"L",Ḽ:"L",Ḻ:"L",Ł:"L",Ƚ:"L",Ɫ:"L",Ⱡ:"L",Ꝉ:"L",Ꝇ:"L",Ꞁ:"L",Ǉ:"LJ",ǈ:"Lj","Ⓜ":"M",Ｍ:"M",Ḿ:"M",Ṁ:"M",Ṃ:"M",Ɱ:"M",Ɯ:"M","Ⓝ":"N",Ｎ:"N",Ǹ:"N",Ń:"N",Ñ:"N",Ṅ:"N",Ň:"N",Ṇ:"N",Ņ:"N",Ṋ:"N",Ṉ:"N",Ƞ:"N",Ɲ:"N",Ꞑ:"N",Ꞥ:"N",Ǌ:"NJ",ǋ:"Nj","Ⓞ":"O",Ｏ:"O",Ò:"O",Ó:"O",Ô:"O",Ồ:"O",Ố:"O",Ỗ:"O",Ổ:"O",Õ:"O",Ṍ:"O",Ȭ:"O",Ṏ:"O",Ō:"O",Ṑ:"O",Ṓ:"O",Ŏ:"O",Ȯ:"O",Ȱ:"O",Ö:"O",Ȫ:"O",Ỏ:"O",Ő:"O",Ǒ:"O",Ȍ:"O",Ȏ:"O",Ơ:"O",Ờ:"O",Ớ:"O",Ỡ:"O",Ở:"O",Ợ:"O",Ọ:"O",Ộ:"O",Ǫ:"O",Ǭ:"O",Ø:"O",Ǿ:"O",Ɔ:"O",Ɵ:"O",Ꝋ:"O",Ꝍ:"O",Œ:"OE",Ƣ:"OI",Ꝏ:"OO",Ȣ:"OU","Ⓟ":"P",Ｐ:"P",Ṕ:"P",Ṗ:"P",Ƥ:"P",Ᵽ:"P",Ꝑ:"P",Ꝓ:"P",Ꝕ:"P","Ⓠ":"Q",Ｑ:"Q",Ꝗ:"Q",Ꝙ:"Q",Ɋ:"Q","Ⓡ":"R",Ｒ:"R",Ŕ:"R",Ṙ:"R",Ř:"R",Ȑ:"R",Ȓ:"R",Ṛ:"R",Ṝ:"R",Ŗ:"R",Ṟ:"R",Ɍ:"R",Ɽ:"R",Ꝛ:"R",Ꞧ:"R",Ꞃ:"R","Ⓢ":"S",Ｓ:"S",ẞ:"S",Ś:"S",Ṥ:"S",Ŝ:"S",Ṡ:"S",Š:"S",Ṧ:"S",Ṣ:"S",Ṩ:"S",Ș:"S",Ş:"S",Ȿ:"S",Ꞩ:"S",Ꞅ:"S","Ⓣ":"T",Ｔ:"T",Ṫ:"T",Ť:"T",Ṭ:"T",Ț:"T",Ţ:"T",Ṱ:"T",Ṯ:"T",Ŧ:"T",Ƭ:"T",Ʈ:"T",Ⱦ:"T",Ꞇ:"T",Ꜩ:"TZ","Ⓤ":"U",Ｕ:"U",Ù:"U",Ú:"U",Û:"U",Ũ:"U",Ṹ:"U",Ū:"U",Ṻ:"U",Ŭ:"U",Ü:"U",Ǜ:"U",Ǘ:"U",Ǖ:"U",Ǚ:"U",Ủ:"U",Ů:"U",Ű:"U",Ǔ:"U",Ȕ:"U",Ȗ:"U",Ư:"U",Ừ:"U",Ứ:"U",Ữ:"U",Ử:"U",Ự:"U",Ụ:"U",Ṳ:"U",Ų:"U",Ṷ:"U",Ṵ:"U",Ʉ:"U","Ⓥ":"V",Ｖ:"V",Ṽ:"V",Ṿ:"V",Ʋ:"V",Ꝟ:"V",Ʌ:"V",Ꝡ:"VY","Ⓦ":"W",Ｗ:"W",Ẁ:"W",Ẃ:"W",Ŵ:"W",Ẇ:"W",Ẅ:"W",Ẉ:"W",Ⱳ:"W","Ⓧ":"X",Ｘ:"X",Ẋ:"X",Ẍ:"X","Ⓨ":"Y",Ｙ:"Y",Ỳ:"Y",Ý:"Y",Ŷ:"Y",Ỹ:"Y",Ȳ:"Y",Ẏ:"Y",Ÿ:"Y",Ỷ:"Y",Ỵ:"Y",Ƴ:"Y",Ɏ:"Y",Ỿ:"Y","Ⓩ":"Z",Ｚ:"Z",Ź:"Z",Ẑ:"Z",Ż:"Z",Ž:"Z",Ẓ:"Z",Ẕ:"Z",Ƶ:"Z",Ȥ:"Z",Ɀ:"Z",Ⱬ:"Z",Ꝣ:"Z","ⓐ":"a",ａ:"a",ẚ:"a",à:"a",á:"a",â:"a",ầ:"a",ấ:"a",ẫ:"a",ẩ:"a",ã:"a",ā:"a",ă:"a",ằ:"a",ắ:"a",ẵ:"a",ẳ:"a",ȧ:"a",ǡ:"a",ä:"a",ǟ:"a",ả:"a",å:"a",ǻ:"a",ǎ:"a",ȁ:"a",ȃ:"a",ạ:"a",ậ:"a",ặ:"a",ḁ:"a",ą:"a",ⱥ:"a",ɐ:"a",ꜳ:"aa",æ:"ae",ǽ:"ae",ǣ:"ae",ꜵ:"ao",ꜷ:"au",ꜹ:"av",ꜻ:"av",ꜽ:"ay","ⓑ":"b",ｂ:"b",ḃ:"b",ḅ:"b",ḇ:"b",ƀ:"b",ƃ:"b",ɓ:"b","ⓒ":"c",ｃ:"c",ć:"c",ĉ:"c",ċ:"c",č:"c",ç:"c",ḉ:"c",ƈ:"c",ȼ:"c",ꜿ:"c",ↄ:"c","ⓓ":"d",ｄ:"d",ḋ:"d",ď:"d",ḍ:"d",ḑ:"d",ḓ:"d",ḏ:"d",đ:"d",ƌ:"d",ɖ:"d",ɗ:"d",ꝺ:"d",ǳ:"dz",ǆ:"dz","ⓔ":"e",ｅ:"e",è:"e",é:"e",ê:"e",ề:"e",ế:"e",ễ:"e",ể:"e",ẽ:"e",ē:"e",ḕ:"e",ḗ:"e",ĕ:"e",ė:"e",ë:"e",ẻ:"e",ě:"e",ȅ:"e",ȇ:"e",ẹ:"e",ệ:"e",ȩ:"e",ḝ:"e",ę:"e",ḙ:"e",ḛ:"e",ɇ:"e",ɛ:"e",ǝ:"e","ⓕ":"f",ｆ:"f",ḟ:"f",ƒ:"f",ꝼ:"f","ⓖ":"g",ｇ:"g",ǵ:"g",ĝ:"g",ḡ:"g",ğ:"g",ġ:"g",ǧ:"g",ģ:"g",ǥ:"g",ɠ:"g",ꞡ:"g",ᵹ:"g",ꝿ:"g","ⓗ":"h",ｈ:"h",ĥ:"h",ḣ:"h",ḧ:"h",ȟ:"h",ḥ:"h",ḩ:"h",ḫ:"h",ẖ:"h",ħ:"h",ⱨ:"h",ⱶ:"h",ɥ:"h",ƕ:"hv","ⓘ":"i",ｉ:"i",ì:"i",í:"i",î:"i",ĩ:"i",ī:"i",ĭ:"i",ï:"i",ḯ:"i",ỉ:"i",ǐ:"i",ȉ:"i",ȋ:"i",ị:"i",į:"i",ḭ:"i",ɨ:"i",ı:"i","ⓙ":"j",ｊ:"j",ĵ:"j",ǰ:"j",ɉ:"j","ⓚ":"k",ｋ:"k",ḱ:"k",ǩ:"k",ḳ:"k",ķ:"k",ḵ:"k",ƙ:"k",ⱪ:"k",ꝁ:"k",ꝃ:"k",ꝅ:"k",ꞣ:"k","ⓛ":"l",ｌ:"l",ŀ:"l",ĺ:"l",ľ:"l",ḷ:"l",ḹ:"l",ļ:"l",ḽ:"l",ḻ:"l",ſ:"l",ł:"l",ƚ:"l",ɫ:"l",ⱡ:"l",ꝉ:"l",ꞁ:"l",ꝇ:"l",ǉ:"lj","ⓜ":"m",ｍ:"m",ḿ:"m",ṁ:"m",ṃ:"m",ɱ:"m",ɯ:"m","ⓝ":"n",ｎ:"n",ǹ:"n",ń:"n",ñ:"n",ṅ:"n",ň:"n",ṇ:"n",ņ:"n",ṋ:"n",ṉ:"n",ƞ:"n",ɲ:"n",ŉ:"n",ꞑ:"n",ꞥ:"n",ǌ:"nj","ⓞ":"o",ｏ:"o",ò:"o",ó:"o",ô:"o",ồ:"o",ố:"o",ỗ:"o",ổ:"o",õ:"o",ṍ:"o",ȭ:"o",ṏ:"o",ō:"o",ṑ:"o",ṓ:"o",ŏ:"o",ȯ:"o",ȱ:"o",ö:"o",ȫ:"o",ỏ:"o",ő:"o",ǒ:"o",ȍ:"o",ȏ:"o",ơ:"o",ờ:"o",ớ:"o",ỡ:"o",ở:"o",ợ:"o",ọ:"o",ộ:"o",ǫ:"o",ǭ:"o",ø:"o",ǿ:"o",ɔ:"o",ꝋ:"o",ꝍ:"o",ɵ:"o",œ:"oe",ƣ:"oi",ȣ:"ou",ꝏ:"oo","ⓟ":"p",ｐ:"p",ṕ:"p",ṗ:"p",ƥ:"p",ᵽ:"p",ꝑ:"p",ꝓ:"p",ꝕ:"p","ⓠ":"q",ｑ:"q",ɋ:"q",ꝗ:"q",ꝙ:"q","ⓡ":"r",ｒ:"r",ŕ:"r",ṙ:"r",ř:"r",ȑ:"r",ȓ:"r",ṛ:"r",ṝ:"r",ŗ:"r",ṟ:"r",ɍ:"r",ɽ:"r",ꝛ:"r",ꞧ:"r",ꞃ:"r","ⓢ":"s",ｓ:"s",ß:"s",ś:"s",ṥ:"s",ŝ:"s",ṡ:"s",š:"s",ṧ:"s",ṣ:"s",ṩ:"s",ș:"s",ş:"s",ȿ:"s",ꞩ:"s",ꞅ:"s",ẛ:"s","ⓣ":"t",ｔ:"t",ṫ:"t",ẗ:"t",ť:"t",ṭ:"t",ț:"t",ţ:"t",ṱ:"t",ṯ:"t",ŧ:"t",ƭ:"t",ʈ:"t",ⱦ:"t",ꞇ:"t",ꜩ:"tz","ⓤ":"u",ｕ:"u",ù:"u",ú:"u",û:"u",ũ:"u",ṹ:"u",ū:"u",ṻ:"u",ŭ:"u",ü:"u",ǜ:"u",ǘ:"u",ǖ:"u",ǚ:"u",ủ:"u",ů:"u",ű:"u",ǔ:"u",ȕ:"u",ȗ:"u",ư:"u",ừ:"u",ứ:"u",ữ:"u",ử:"u",ự:"u",ụ:"u",ṳ:"u",ų:"u",ṷ:"u",ṵ:"u",ʉ:"u","ⓥ":"v",ｖ:"v",ṽ:"v",ṿ:"v",ʋ:"v",ꝟ:"v",ʌ:"v",ꝡ:"vy","ⓦ":"w",ｗ:"w",ẁ:"w",ẃ:"w",ŵ:"w",ẇ:"w",ẅ:"w",ẘ:"w",ẉ:"w",ⱳ:"w","ⓧ":"x",ｘ:"x",ẋ:"x",ẍ:"x","ⓨ":"y",ｙ:"y",ỳ:"y",ý:"y",ŷ:"y",ỹ:"y",ȳ:"y",ẏ:"y",ÿ:"y",ỷ:"y",ẙ:"y",ỵ:"y",ƴ:"y",ɏ:"y",ỿ:"y","ⓩ":"z",ｚ:"z",ź:"z",ẑ:"z",ż:"z",ž:"z",ẓ:"z",ẕ:"z",ƶ:"z",ȥ:"z",ɀ:"z",ⱬ:"z",ꝣ:"z",Ά:"Α",Έ:"Ε",Ή:"Η",Ί:"Ι",Ϊ:"Ι",Ό:"Ο",Ύ:"Υ",Ϋ:"Υ",Ώ:"Ω",ά:"α",έ:"ε",ή:"η",ί:"ι",ϊ:"ι",ΐ:"ι",ό:"ο",ύ:"υ",ϋ:"υ",ΰ:"υ",ώ:"ω",ς:"σ","’":"'"}}),t.define("select2/data/base",["../utils"],function(e){function t(e,n){t.__super__.constructor.call(this)}return e.Extend(t,e.Observable),t.prototype.current=function(e){throw Error("The `current` method must be defined in child classes.")},t.prototype.query=function(e,t){throw Error("The `query` method must be defined in child classes.")},t.prototype.bind=function(e,t){// Can be implemented in subclasses
},t.prototype.destroy=function(){// Can be implemented in subclasses
},t.prototype.generateResultId=function(t,n){var i=t.id+"-result-";return i+=e.generateChars(4),null!=n.id?i+="-"+n.id.toString():i+="-"+e.generateChars(4),i},t}),t.define("select2/data/select",["./base","../utils","jquery"],function(e,t,n){function i(e,t){this.$element=e,this.options=t,i.__super__.constructor.call(this)}return t.Extend(i,e),i.prototype.current=function(e){var t=this;e(Array.prototype.map.call(this.$element[0].querySelectorAll(":checked"),function(e){return t.item(n(e))}))},i.prototype.select=function(e){var t=this;// If data.element is a DOM node, use it instead
if(e.selected=!0,null!=e.element&&"option"===e.element.tagName.toLowerCase()){e.element.selected=!0,this.$element.trigger("input").trigger("change");return}if(this.$element.prop("multiple"))this.current(function(n){var i=[];(e=[e]).push.apply(e,n);for(var r=0;r<e.length;r++){var o=e[r].id;-1===i.indexOf(o)&&i.push(o)}t.$element.val(i),t.$element.trigger("input").trigger("change")});else{var n=e.id;this.$element.val(n),this.$element.trigger("input").trigger("change")}},i.prototype.unselect=function(e){var t=this;if(this.$element.prop("multiple")){if(e.selected=!1,null!=e.element&&"option"===e.element.tagName.toLowerCase()){e.element.selected=!1,this.$element.trigger("input").trigger("change");return}this.current(function(n){for(var i=[],r=0;r<n.length;r++){var o=n[r].id;o!==e.id&&-1===i.indexOf(o)&&i.push(o)}t.$element.val(i),t.$element.trigger("input").trigger("change")})}},i.prototype.bind=function(e,t){var n=this;this.container=e,e.on("select",function(e){n.select(e.data)}),e.on("unselect",function(e){n.unselect(e.data)})},i.prototype.destroy=function(){// Remove anything added to child elements
this.$element.find("*").each(function(){// Remove any custom data set by Select2
t.RemoveData(this)})},i.prototype.query=function(e,t){var i=[],r=this;this.$element.children().each(function(){if("option"===this.tagName.toLowerCase()||"optgroup"===this.tagName.toLowerCase()){var t=n(this),o=r.item(t),s=r.matches(e,o);null!==s&&i.push(s)}}),t({results:i})},i.prototype.addOptions=function(e){this.$element.append(e)},i.prototype.option=function(e){e.children?(i=document.createElement("optgroup")).label=e.text:void 0!==(i=document.createElement("option")).textContent?i.textContent=e.text:i.innerText=e.text,void 0!==e.id&&(i.value=e.id),e.disabled&&(i.disabled=!0),e.selected&&(i.selected=!0),e.title&&(i.title=e.title);var i,r=this._normalizeItem(e);return r.element=i,// Override the option's data with the combined data
t.StoreData(i,"data",r),n(i)},i.prototype.item=function(e){var i={};if(null!=(i=t.GetData(e[0],"data")))return i;var r=e[0];if("option"===r.tagName.toLowerCase())i={id:e.val(),text:e.text(),disabled:e.prop("disabled"),selected:e.prop("selected"),title:e.prop("title")};else if("optgroup"===r.tagName.toLowerCase()){i={text:e.prop("label"),children:[],title:e.prop("title")};for(var o=e.children("option"),s=[],a=0;a<o.length;a++){var l=n(o[a]),c=this.item(l);s.push(c)}i.children=s}return(i=this._normalizeItem(i)).element=e[0],t.StoreData(e[0],"data",i),i},i.prototype._normalizeItem=function(e){return e!==Object(e)&&(e={id:e,text:e}),null!=(e=n.extend({},{text:""},e)).id&&(e.id=e.id.toString()),null!=e.text&&(e.text=e.text.toString()),null==e._resultId&&e.id&&null!=this.container&&(e._resultId=this.generateResultId(this.container,e)),n.extend({},{selected:!1,disabled:!1},e)},i.prototype.matches=function(e,t){return this.options.get("matcher")(e,t)},i}),t.define("select2/data/array",["./select","../utils","jquery"],function(e,t,n){function i(e,t){this._dataToConvert=t.get("data")||[],i.__super__.constructor.call(this,e,t)}return t.Extend(i,e),i.prototype.bind=function(e,t){i.__super__.bind.call(this,e,t),this.addOptions(this.convertToOptions(this._dataToConvert))},i.prototype.select=function(e){var t=this.$element.find("option").filter(function(t,n){return n.value==e.id.toString()});0===t.length&&(t=this.option(e),this.addOptions(t)),i.__super__.select.call(this,e)},i.prototype.convertToOptions=function(e){for(var t=this,i=this.$element.find("option"),r=i.map(function(){return t.item(n(this)).id}).get(),o=[],s=0;s<e.length;s++){var a=this._normalizeItem(e[s]);// Skip items which were pre-loaded, only merge the data
if(r.indexOf(a.id)>=0){var l=i.filter(// Filter out all items except for the one passed in the argument
function(e){return function(){return n(this).val()==e.id}}(a)),c=this.item(l),u=n.extend(!0,{},a,c),d=this.option(u);l.replaceWith(d);continue}var p=this.option(a);if(a.children){var h=this.convertToOptions(a.children);p.append(h)}o.push(p)}return o},i}),t.define("select2/data/ajax",["./array","../utils","jquery"],function(e,t,n){function i(e,t){this.ajaxOptions=this._applyDefaults(t.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),i.__super__.constructor.call(this,e,t)}return t.Extend(i,e),i.prototype._applyDefaults=function(e){return n.extend({},{data:function(e){return n.extend({},e,{q:e.term})},transport:function(e,t,i){var r=n.ajax(e);return r.then(t),r.fail(i),r}},e,!0)},i.prototype.processResults=function(e){return e},i.prototype.query=function(e,t){var i=this;null!=this._request&&("function"==typeof this._request.abort&&this._request.abort(),this._request=null);var r=n.extend({type:"GET"},this.ajaxOptions);function o(){var n=r.transport(r,function(n){var r=i.processResults(n,e);i.options.get("debug")&&window.console&&console.error&&(!r||!r.results||!Array.isArray(r.results))&&console.error("Select2: The AJAX results did not return an array in the `results` key of the response."),t(r)},function(){// Attempt to detect if a request was aborted
// Only works if the transport exposes a status property
"status"in n&&(0===n.status||"0"===n.status)||i.trigger("results:message",{message:"errorLoading"})});i._request=n}"function"==typeof r.url&&(r.url=r.url.call(this.$element,e)),"function"==typeof r.data&&(r.data=r.data.call(this.$element,e)),this.ajaxOptions.delay&&null!=e.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(o,this.ajaxOptions.delay)):o()},i}),t.define("select2/data/tags",["jquery"],function(e){function t(e,t,n){var i=n.get("tags"),r=n.get("createTag");void 0!==r&&(this.createTag=r);var o=n.get("insertTag");if(void 0!==o&&(this.insertTag=o),e.call(this,t,n),Array.isArray(i))for(var s=0;s<i.length;s++){var a=i[s],l=this._normalizeItem(a),c=this.option(l);this.$element.append(c)}}return t.prototype.query=function(e,t,n){var i=this;if(this._removeOldTags(),null==t.term||null!=t.page){e.call(this,t,n);return}e.call(this,t,function e(r,o){for(var s=r.results,a=0;a<s.length;a++){var l=s[a],c=null!=l.children&&!e({results:l.children},!0);if((l.text||"").toUpperCase()===(t.term||"").toUpperCase()||c){if(o)return!1;r.data=s,n(r);return}}if(o)return!0;var u=i.createTag(t);if(null!=u){var d=i.option(u);d.attr("data-select2-tag","true"),i.addOptions([d]),i.insertTag(s,u)}r.results=s,n(r)})},t.prototype.createTag=function(e,t){if(null==t.term)return null;var n=t.term.trim();return""===n?null:{id:n,text:n}},t.prototype.insertTag=function(e,t,n){t.unshift(n)},t.prototype._removeOldTags=function(t){this.$element.find("option[data-select2-tag]").each(function(){this.selected||e(this).remove()})},t}),t.define("select2/data/tokenizer",["jquery"],function(e){function t(e,t,n){var i=n.get("tokenizer");void 0!==i&&(this.tokenizer=i),e.call(this,t,n)}return t.prototype.bind=function(e,t,n){e.call(this,t,n),this.$search=t.dropdown.$search||t.selection.$search||n.find(".select2-search__field")},t.prototype.query=function(t,n,i){var r=this;n.term=n.term||"";var o=this.tokenizer(n,this.options,function(t){// Normalize the data object so we can use it for checks
var n=r._normalizeItem(t);// If an existing option wasn't found for it, create the option
if(!r.$element.find("option").filter(function(){return e(this).val()===n.id}).length){var i=r.option(n);i.attr("data-select2-tag",!0),r._removeOldTags(),r.addOptions([i])}// Select the item, now that we know there is an option for it
r.trigger("select",{data:n})});o.term!==n.term&&(this.$search.length&&(this.$search.val(o.term),this.$search.trigger("focus")),n.term=o.term),t.call(this,n,i)},t.prototype.tokenizer=function(t,n,i,r){for(var o=i.get("tokenSeparators")||[],s=n.term,a=0,l=this.createTag||function(e){return{id:e.term,text:e.term}};a<s.length;){var c=s[a];if(-1===o.indexOf(c)){a++;continue}var u=s.substr(0,a),d=l(e.extend({},n,{term:u}));if(null==d){a++;continue}r(d),// Reset the term to not include the tokenized portion
s=s.substr(a+1)||"",a=0}return{term:s}},t}),t.define("select2/data/minimumInputLength",[],function(){function e(e,t,n){this.minimumInputLength=n.get("minimumInputLength"),e.call(this,t,n)}return e.prototype.query=function(e,t,n){if(t.term=t.term||"",t.term.length<this.minimumInputLength){this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:t.term,params:t}});return}e.call(this,t,n)},e}),t.define("select2/data/maximumInputLength",[],function(){function e(e,t,n){this.maximumInputLength=n.get("maximumInputLength"),e.call(this,t,n)}return e.prototype.query=function(e,t,n){if(t.term=t.term||"",this.maximumInputLength>0&&t.term.length>this.maximumInputLength){this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:t.term,params:t}});return}e.call(this,t,n)},e}),t.define("select2/data/maximumSelectionLength",[],function(){function e(e,t,n){this.maximumSelectionLength=n.get("maximumSelectionLength"),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("select",function(){i._checkIfMaximumSelected()})},e.prototype.query=function(e,t,n){var i=this;this._checkIfMaximumSelected(function(){e.call(i,t,n)})},e.prototype._checkIfMaximumSelected=function(e,t){var n=this;this.current(function(e){var i=null!=e?e.length:0;if(n.maximumSelectionLength>0&&i>=n.maximumSelectionLength){n.trigger("results:message",{message:"maximumSelected",args:{maximum:n.maximumSelectionLength}});return}t&&t()})},e}),t.define("select2/dropdown",["jquery","./utils"],function(e,t){function n(e,t){this.$element=e,this.options=t,n.__super__.constructor.call(this)}return t.Extend(n,t.Observable),n.prototype.render=function(){var t=e('<span class="select2-dropdown"><span class="select2-results"></span></span>');return t.attr("dir",this.options.get("dir")),this.$dropdown=t,t},n.prototype.bind=function(){// Should be implemented in subclasses
},n.prototype.position=function(e,t){// Should be implemented in subclasses
},n.prototype.destroy=function(){// Remove the dropdown from the DOM
this.$dropdown.remove()},n}),t.define("select2/dropdown/search",["jquery"],function(e){function t(){}return t.prototype.render=function(t){var n=t.call(this),i=this.options.get("translations").get("search"),r=e('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');return this.$searchContainer=r,this.$search=r.find("input"),this.$search.prop("autocomplete",this.options.get("autocomplete")),this.$search.attr("aria-label",i()),n.prepend(r),n},t.prototype.bind=function(t,n,i){var r=this,o=n.id+"-results";t.call(this,n,i),this.$search.on("keydown",function(e){r.trigger("keypress",e),r._keyUpPrevented=e.isDefaultPrevented()}),// Workaround for browsers which do not support the `input` event
// This will prevent double-triggering of events for browsers which support
// both the `keyup` and `input` events.
this.$search.on("input",function(t){// Unbind the duplicated `keyup` event
e(this).off("keyup")}),this.$search.on("keyup input",function(e){r.handleSearch(e)}),n.on("open",function(){r.$search.attr("tabindex",0),r.$search.attr("aria-controls",o),r.$search.trigger("focus"),window.setTimeout(function(){r.$search.trigger("focus")},0)}),n.on("close",function(){r.$search.attr("tabindex",-1),r.$search.removeAttr("aria-controls"),r.$search.removeAttr("aria-activedescendant"),r.$search.val(""),r.$search.trigger("blur")}),n.on("focus",function(){n.isOpen()||r.$search.trigger("focus")}),n.on("results:all",function(e){(null==e.query.term||""===e.query.term)&&(r.showSearch(e)?r.$searchContainer[0].classList.remove("select2-search--hide"):r.$searchContainer[0].classList.add("select2-search--hide"))}),n.on("results:focus",function(e){e.data._resultId?r.$search.attr("aria-activedescendant",e.data._resultId):r.$search.removeAttr("aria-activedescendant")})},t.prototype.handleSearch=function(e){if(!this._keyUpPrevented){var t=this.$search.val();this.trigger("query",{term:t})}this._keyUpPrevented=!1},t.prototype.showSearch=function(e,t){return!0},t}),t.define("select2/dropdown/hidePlaceholder",[],function(){function e(e,t,n,i){this.placeholder=this.normalizePlaceholder(n.get("placeholder")),e.call(this,t,n,i)}return e.prototype.append=function(e,t){t.results=this.removePlaceholder(t.results),e.call(this,t)},e.prototype.normalizePlaceholder=function(e,t){return"string"==typeof t&&(t={id:"",text:t}),t},e.prototype.removePlaceholder=function(e,t){for(var n=t.slice(0),i=t.length-1;i>=0;i--){var r=t[i];this.placeholder.id===r.id&&n.splice(i,1)}return n},e}),t.define("select2/dropdown/infiniteScroll",["jquery"],function(e){function t(e,t,n,i){this.lastParams={},e.call(this,t,n,i),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return t.prototype.append=function(e,t){this.$loadingMore.remove(),this.loading=!1,e.call(this,t),this.showLoadingMore(t)&&(this.$results.append(this.$loadingMore),this.loadMoreIfNeeded())},t.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("query",function(e){i.lastParams=e,i.loading=!0}),t.on("query:append",function(e){i.lastParams=e,i.loading=!0}),this.$results.on("scroll",this.loadMoreIfNeeded.bind(this))},t.prototype.loadMoreIfNeeded=function(){var t=e.contains(document.documentElement,this.$loadingMore[0]);!this.loading&&t&&this.$results.offset().top+this.$results.outerHeight(!1)+50>=this.$loadingMore.offset().top+this.$loadingMore.outerHeight(!1)&&this.loadMore()},t.prototype.loadMore=function(){this.loading=!0;var t=e.extend({},{page:1},this.lastParams);t.page++,this.trigger("query:append",t)},t.prototype.showLoadingMore=function(e,t){return t.pagination&&t.pagination.more},t.prototype.createLoadingMore=function(){var t=e('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'),n=this.options.get("translations").get("loadingMore");return t.html(n(this.lastParams)),t},t}),t.define("select2/dropdown/attachBody",["jquery","../utils"],function(e,t){function n(t,n,i){this.$dropdownParent=e(i.get("dropdownParent")||document.body),t.call(this,n,i)}return n.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("open",function(){i._showDropdown(),i._attachPositioningHandler(t),// Must bind after the results handlers to ensure correct sizing
i._bindContainerResultHandlers(t)}),t.on("close",function(){i._hideDropdown(),i._detachPositioningHandler(t)}),this.$dropdownContainer.on("mousedown",function(e){e.stopPropagation()})},n.prototype.destroy=function(e){e.call(this),this.$dropdownContainer.remove()},n.prototype.position=function(e,t,n){// Clone all of the container classes
t.attr("class",n.attr("class")),t[0].classList.remove("select2"),t[0].classList.add("select2-container--open"),t.css({position:"absolute",top:-999999}),this.$container=n},n.prototype.render=function(t){var n=e("<span></span>"),i=t.call(this);return n.append(i),this.$dropdownContainer=n,n},n.prototype._hideDropdown=function(e){this.$dropdownContainer.detach()},n.prototype._bindContainerResultHandlers=function(e,t){// These should only be bound once
if(!this._containerResultsHandlersBound){var n=this;t.on("results:all",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("results:append",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("results:message",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("select",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("unselect",function(){n._positionDropdown(),n._resizeDropdown()}),this._containerResultsHandlersBound=!0}},n.prototype._attachPositioningHandler=function(n,i){var r=this,o="scroll.select2."+i.id,s="resize.select2."+i.id,a="orientationchange.select2."+i.id,l=this.$container.parents().filter(t.hasScroll);l.each(function(){t.StoreData(this,"select2-scroll-position",{x:e(this).scrollLeft(),y:e(this).scrollTop()})}),l.on(o,function(n){var i=t.GetData(this,"select2-scroll-position");e(this).scrollTop(i.y)}),e(window).on(o+" "+s+" "+a,function(e){r._positionDropdown(),r._resizeDropdown()})},n.prototype._detachPositioningHandler=function(n,i){var r="scroll.select2."+i.id,o="resize.select2."+i.id,s="orientationchange.select2."+i.id;this.$container.parents().filter(t.hasScroll).off(r),e(window).off(r+" "+o+" "+s)},n.prototype._positionDropdown=function(){var t=e(window),n=this.$dropdown[0].classList.contains("select2-dropdown--above"),i=this.$dropdown[0].classList.contains("select2-dropdown--below"),r=null,o=this.$container.offset();o.bottom=o.top+this.$container.outerHeight(!1);var s={height:this.$container.outerHeight(!1)};s.top=o.top,s.bottom=o.top+s.height;var a={height:this.$dropdown.outerHeight(!1)},l={top:t.scrollTop(),bottom:t.scrollTop()+t.height()},c=l.top<o.top-a.height,u=l.bottom>o.bottom+a.height,d={left:o.left,top:s.bottom},p=this.$dropdownParent;"static"===p.css("position")&&(p=p.offsetParent());var h={top:0,left:0};(e.contains(document.body,p[0])||p[0].isConnected)&&(h=p.offset()),d.top-=h.top,d.left-=h.left,n||i||(r="below"),u||!c||n?!c&&u&&n&&(r="below"):r="above",("above"==r||n&&"below"!==r)&&(d.top=s.top-h.top-a.height),null!=r&&(this.$dropdown[0].classList.remove("select2-dropdown--below"),this.$dropdown[0].classList.remove("select2-dropdown--above"),this.$dropdown[0].classList.add("select2-dropdown--"+r),this.$container[0].classList.remove("select2-container--below"),this.$container[0].classList.remove("select2-container--above"),this.$container[0].classList.add("select2-container--"+r)),this.$dropdownContainer.css(d)},n.prototype._resizeDropdown=function(){var e={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(e.minWidth=e.width,e.position="relative",e.width="auto"),this.$dropdown.css(e)},n.prototype._showDropdown=function(e){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},n}),t.define("select2/dropdown/minimumResultsForSearch",[],function(){function e(e,t,n,i){this.minimumResultsForSearch=n.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),e.call(this,t,n,i)}return e.prototype.showSearch=function(e,t){return!(function e(t){for(var n=0,i=0;i<t.length;i++){var r=t[i];r.children?n+=e(r.children):n++}return n}(t.data.results)<this.minimumResultsForSearch)&&e.call(this,t)},e}),t.define("select2/dropdown/selectOnClose",["../utils"],function(e){function t(){}return t.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("close",function(e){i._handleSelectOnClose(e)})},t.prototype._handleSelectOnClose=function(t,n){if(n&&null!=n.originalSelect2Event){var i=n.originalSelect2Event;// Don't select an item if the close event was triggered from a select or
// unselect event
if("select"===i._type||"unselect"===i._type)return}var r=this.getHighlightedResults();// Only select highlighted results
if(!(r.length<1)){var o=e.GetData(r[0],"data");// Don't re-select already selected resulte
null!=o.element&&o.element.selected||null==o.element&&o.selected||this.trigger("select",{data:o})}},t}),t.define("select2/dropdown/closeOnSelect",[],function(){function e(){}return e.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("select",function(e){i._selectTriggered(e)}),t.on("unselect",function(e){i._selectTriggered(e)})},e.prototype._selectTriggered=function(e,t){var n=t.originalEvent;// Don't close if the control key is being held
n&&(n.ctrlKey||n.metaKey)||this.trigger("close",{originalEvent:n,originalSelect2Event:t})},e}),t.define("select2/dropdown/dropdownCss",["../utils"],function(e){function t(){}return t.prototype.render=function(t){var n=t.call(this),i=this.options.get("dropdownCssClass")||"";return -1!==i.indexOf(":all:")&&(i=i.replace(":all:",""),e.copyNonInternalCssClasses(n[0],this.$element[0])),n.addClass(i),n},t}),t.define("select2/dropdown/tagsSearchHighlight",["../utils"],function(e){function t(){}return t.prototype.highlightFirstItem=function(t){var n=this.$results.find(".select2-results__option--selectable:not(.select2-results__option--selected)");if(n.length>0){var i=n.first(),r=e.GetData(i[0],"data").element;if(r&&r.getAttribute&&"true"===r.getAttribute("data-select2-tag")){i.trigger("mouseenter");return}}t.call(this)},t}),t.define("select2/i18n/en",[],function(){// English
return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(e){var t=e.input.length-e.maximum,n="Please delete "+t+" character";return 1!=t&&(n+="s"),n},inputTooShort:function(e){return"Please enter "+(e.minimum-e.input.length)+" or more characters"},loadingMore:function(){return"Loading more results…"},maximumSelected:function(e){var t="You can only select "+e.maximum+" item";return 1!=e.maximum&&(t+="s"),t},noResults:function(){return"No results found"},searching:function(){return"Searching…"},removeAllItems:function(){return"Remove all items"},removeItem:function(){return"Remove item"},search:function(){return"Search"}}}),t.define("select2/defaults",["jquery","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/selectionCss","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./dropdown/dropdownCss","./dropdown/tagsSearchHighlight","./i18n/en"],function(e,t,n,i,r,o,s,a,l,c,u,d,p,h,f,g,m,v,y,b,w,S,x,T,E,C,A,L,k,_,D){function O(){this.reset()}return O.prototype.apply=function(u){if(null==(u=e.extend(!0,{},this.defaults,u)).dataAdapter&&(null!=u.ajax?u.dataAdapter=f:null!=u.data?u.dataAdapter=h:u.dataAdapter=p,u.minimumInputLength>0&&(u.dataAdapter=c.Decorate(u.dataAdapter,v)),u.maximumInputLength>0&&(u.dataAdapter=c.Decorate(u.dataAdapter,y)),u.maximumSelectionLength>0&&(u.dataAdapter=c.Decorate(u.dataAdapter,b)),u.tags&&(u.dataAdapter=c.Decorate(u.dataAdapter,g)),(null!=u.tokenSeparators||null!=u.tokenizer)&&(u.dataAdapter=c.Decorate(u.dataAdapter,m))),null==u.resultsAdapter&&(u.resultsAdapter=t,null!=u.ajax&&(u.resultsAdapter=c.Decorate(u.resultsAdapter,T)),null!=u.placeholder&&(u.resultsAdapter=c.Decorate(u.resultsAdapter,x)),u.selectOnClose&&(u.resultsAdapter=c.Decorate(u.resultsAdapter,A)),u.tags&&(u.resultsAdapter=c.Decorate(u.resultsAdapter,_))),null==u.dropdownAdapter){if(u.multiple)u.dropdownAdapter=w;else{var d=c.Decorate(w,S);u.dropdownAdapter=d}0!==u.minimumResultsForSearch&&(u.dropdownAdapter=c.Decorate(u.dropdownAdapter,C)),u.closeOnSelect&&(u.dropdownAdapter=c.Decorate(u.dropdownAdapter,L)),null!=u.dropdownCssClass&&(u.dropdownAdapter=c.Decorate(u.dropdownAdapter,k)),u.dropdownAdapter=c.Decorate(u.dropdownAdapter,E)}null==u.selectionAdapter&&(u.multiple?u.selectionAdapter=i:u.selectionAdapter=n,null!=u.placeholder&&(u.selectionAdapter=c.Decorate(u.selectionAdapter,r)),u.allowClear&&(u.selectionAdapter=c.Decorate(u.selectionAdapter,o)),u.multiple&&(u.selectionAdapter=c.Decorate(u.selectionAdapter,s)),null!=u.selectionCssClass&&(u.selectionAdapter=c.Decorate(u.selectionAdapter,a)),u.selectionAdapter=c.Decorate(u.selectionAdapter,l)),// If the defaults were not previously applied from an element, it is
// possible for the language option to have not been resolved
u.language=this._resolveLanguage(u.language),// Always fall back to English since it will always be complete
u.language.push("en");for(var D=[],O=0;O<u.language.length;O++){var M=u.language[O];-1===D.indexOf(M)&&D.push(M)}return u.language=D,u.translations=this._processTranslations(u.language,u.debug),u},O.prototype.reset=function(){function t(e){return e.replace(/[^\u0000-\u007E]/g,// Used 'uni range + named function' from http://jsperf.com/diacritics/18
function(e){return d[e]||e})}this.defaults={amdLanguageBase:"./i18n/",autocomplete:"off",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:c.escapeMarkup,language:{},matcher:function n(i,r){// Always return the object if there is nothing to compare
if(null==i.term||""===i.term.trim())return r;// Do a recursive check for options with children
if(r.children&&r.children.length>0){// Check each child of the option
for(var o=e.extend(!0,{},r),s=r.children.length-1;s>=0;s--)// If there wasn't a match, remove the object in the array
null==n(i,r.children[s])&&o.children.splice(s,1);return(// If any children matched, return the new object
o.children.length>0?o:n(i,o))}var a=t(r.text).toUpperCase(),l=t(i.term).toUpperCase();return(// Check if the text contains the term
a.indexOf(l)>-1?r:null)},minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,scrollAfterSelect:!1,sorter:function(e){return e},templateResult:function(e){return e.text},templateSelection:function(e){return e.text},theme:"default",width:"resolve"}},O.prototype.applyFromElement=function(e,t){var n=e.language,i=this.defaults.language,r=t.prop("lang"),o=t.closest("[lang]").prop("lang"),s=Array.prototype.concat.call(this._resolveLanguage(r),this._resolveLanguage(n),this._resolveLanguage(i),this._resolveLanguage(o));return e.language=s,e},O.prototype._resolveLanguage=function(t){if(!t||e.isEmptyObject(t))return[];if(e.isPlainObject(t))return[t];n=Array.isArray(t)?t:[t];for(var n,i=[],r=0;r<n.length;r++)if(i.push(n[r]),"string"==typeof n[r]&&n[r].indexOf("-")>0){var o=n[r].split("-")[0];i.push(o)}return i},O.prototype._processTranslations=function(t,n){for(var i=new u,r=0;r<t.length;r++){var o=new u,s=t[r];if("string"==typeof s)try{// Try to load it with the original name
o=u.loadPath(s)}catch(e){try{// If we couldn't load it, check if it wasn't the full path
s=this.defaults.amdLanguageBase+s,o=u.loadPath(s)}catch(e){// The translation could not be loaded at all. Sometimes this is
// because of a configuration problem, other times this can be
// because of how Select2 helps load all possible translation files
n&&window.console&&console.warn&&console.warn('Select2: The language file for "'+s+'" could not be automatically loaded. A fallback will be used instead.')}}else o=e.isPlainObject(s)?new u(s):s;i.extend(o)}return i},O.prototype.set=function(t,n){var i=e.camelCase(t),r={};r[i]=n;var o=c._convertData(r);e.extend(!0,this.defaults,o)},new O}),t.define("select2/options",["jquery","./defaults","./utils"],function(e,t,n){function i(e,n){this.options=e,null!=n&&this.fromElement(n),null!=n&&(this.options=t.applyFromElement(this.options,n)),this.options=t.apply(this.options)}return i.prototype.fromElement=function(t){var i=["select2"];null==this.options.multiple&&(this.options.multiple=t.prop("multiple")),null==this.options.disabled&&(this.options.disabled=t.prop("disabled")),null==this.options.autocomplete&&t.prop("autocomplete")&&(this.options.autocomplete=t.prop("autocomplete")),null==this.options.dir&&(t.prop("dir")?this.options.dir=t.prop("dir"):t.closest("[dir]").prop("dir")?this.options.dir=t.closest("[dir]").prop("dir"):this.options.dir="ltr"),t.prop("disabled",this.options.disabled),t.prop("multiple",this.options.multiple),n.GetData(t[0],"select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),n.StoreData(t[0],"data",n.GetData(t[0],"select2Tags")),n.StoreData(t[0],"tags",!0)),n.GetData(t[0],"ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),t.attr("ajax--url",n.GetData(t[0],"ajaxUrl")),n.StoreData(t[0],"ajax-Url",n.GetData(t[0],"ajaxUrl")));var r={};function o(e,t){return t.toUpperCase()}// Pre-load all of the attributes which are prefixed with `data-`
for(var s=0;s<t[0].attributes.length;s++){var a=t[0].attributes[s].name,l="data-";if(a.substr(0,l.length)==l){// Get the contents of the attribute after `data-`
var c=a.substring(l.length),u=n.GetData(t[0],c);// Store the data attribute contents into the dataset since
r[c.replace(/-([a-z])/g,o)]=u}}e.fn.jquery&&"1."==e.fn.jquery.substr(0,2)&&t[0].dataset&&(r=e.extend(!0,{},t[0].dataset,r));// Prefer our internal data cache if it exists
var d=e.extend(!0,{},n.GetData(t[0]),r);for(var p in d=n._convertData(d))i.indexOf(p)>-1||(e.isPlainObject(this.options[p])?e.extend(this.options[p],d[p]):this.options[p]=d[p]);return this},i.prototype.get=function(e){return this.options[e]},i.prototype.set=function(e,t){this.options[e]=t},i}),t.define("select2/core",["jquery","./options","./utils","./keys"],function(e,t,n,i){var r=function(e,i){null!=n.GetData(e[0],"select2")&&n.GetData(e[0],"select2").destroy(),this.$element=e,this.id=this._generateId(e),i=i||{},this.options=new t(i,e),r.__super__.constructor.call(this);// Set up the tabindex
var o=e.attr("tabindex")||0;n.StoreData(e[0],"old-tabindex",o),e.attr("tabindex","-1");// Set up containers and adapters
var s=this.options.get("dataAdapter");this.dataAdapter=new s(e,this.options);var a=this.render();this._placeContainer(a);var l=this.options.get("selectionAdapter");this.selection=new l(e,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,a);var c=this.options.get("dropdownAdapter");this.dropdown=new c(e,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,a);var u=this.options.get("resultsAdapter");this.results=new u(e,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);// Bind events
var d=this;// Bind the container to all of the adapters
this._bindAdapters(),// Register any DOM event handlers
this._registerDomEvents(),// Register any internal event handlers
this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),// Set the initial state
this.dataAdapter.current(function(e){d.trigger("selection:update",{data:e})}),// Hide the original select
e[0].classList.add("select2-hidden-accessible"),e.attr("aria-hidden","true"),// Synchronize any monitored attributes
this._syncAttributes(),n.StoreData(e[0],"select2",this),// Ensure backwards compatibility with $element.data('select2').
e.data("select2",this)};return n.Extend(r,n.Observable),r.prototype._generateId=function(e){return"select2-"+(null!=e.attr("id")?e.attr("id"):null!=e.attr("name")?e.attr("name")+"-"+n.generateChars(2):n.generateChars(4)).replace(/(:|\.|\[|\]|,)/g,"")},r.prototype._placeContainer=function(e){e.insertAfter(this.$element);var t=this._resolveWidth(this.$element,this.options.get("width"));null!=t&&e.css("width",t)},r.prototype._resolveWidth=function(e,t){var n=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==t){var i=this._resolveWidth(e,"style");return null!=i?i:this._resolveWidth(e,"element")}if("element"==t){var r=e.outerWidth(!1);return r<=0?"auto":r+"px"}if("style"==t){var o=e.attr("style");if("string"!=typeof o)return null;for(var s=o.split(";"),a=0,l=s.length;a<l;a+=1){var c=s[a].replace(/\s/g,"").match(n);if(null!==c&&c.length>=1)return c[1]}return null}return"computedstyle"==t?window.getComputedStyle(e[0]).width:t},r.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},r.prototype._registerDomEvents=function(){var e=this;this.$element.on("change.select2",function(){e.dataAdapter.current(function(t){e.trigger("selection:update",{data:t})})}),this.$element.on("focus.select2",function(t){e.trigger("focus",t)}),this._syncA=n.bind(this._syncAttributes,this),this._syncS=n.bind(this._syncSubtree,this),this._observer=new window.MutationObserver(function(t){e._syncA(),e._syncS(t)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})},r.prototype._registerDataEvents=function(){var e=this;this.dataAdapter.on("*",function(t,n){e.trigger(t,n)})},r.prototype._registerSelectionEvents=function(){var e=this,t=["toggle","focus"];this.selection.on("toggle",function(){e.toggleDropdown()}),this.selection.on("focus",function(t){e.focus(t)}),this.selection.on("*",function(n,i){-1===t.indexOf(n)&&e.trigger(n,i)})},r.prototype._registerDropdownEvents=function(){var e=this;this.dropdown.on("*",function(t,n){e.trigger(t,n)})},r.prototype._registerResultsEvents=function(){var e=this;this.results.on("*",function(t,n){e.trigger(t,n)})},r.prototype._registerEvents=function(){var e=this;this.on("open",function(){e.$container[0].classList.add("select2-container--open")}),this.on("close",function(){e.$container[0].classList.remove("select2-container--open")}),this.on("enable",function(){e.$container[0].classList.remove("select2-container--disabled")}),this.on("disable",function(){e.$container[0].classList.add("select2-container--disabled")}),this.on("blur",function(){e.$container[0].classList.remove("select2-container--focus")}),this.on("query",function(t){e.isOpen()||e.trigger("open",{}),this.dataAdapter.query(t,function(n){e.trigger("results:all",{data:n,query:t})})}),this.on("query:append",function(t){this.dataAdapter.query(t,function(n){e.trigger("results:append",{data:n,query:t})})}),this.on("keypress",function(t){var n=t.which;e.isOpen()?n===i.ESC||n===i.UP&&t.altKey?(e.close(t),t.preventDefault()):n===i.ENTER||n===i.TAB?(e.trigger("results:select",{}),t.preventDefault()):n===i.SPACE&&t.ctrlKey?(e.trigger("results:toggle",{}),t.preventDefault()):n===i.UP?(e.trigger("results:previous",{}),t.preventDefault()):n===i.DOWN&&(e.trigger("results:next",{}),t.preventDefault()):(n===i.ENTER||n===i.SPACE||n===i.DOWN&&t.altKey)&&(e.open(),t.preventDefault())})},r.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.isDisabled()?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},r.prototype._isChangeMutation=function(e){var t=this;if(e.addedNodes&&e.addedNodes.length>0){for(var n=0;n<e.addedNodes.length;n++)if(e.addedNodes[n].selected)return!0}else if(e.removedNodes&&e.removedNodes.length>0)return!0;else if(Array.isArray(e))return e.some(function(e){return t._isChangeMutation(e)});return!1},r.prototype._syncSubtree=function(e){var t=this._isChangeMutation(e),n=this;// Only re-pull the data if we think there is a change
t&&this.dataAdapter.current(function(e){n.trigger("selection:update",{data:e})})},/**
   * Override the trigger method to automatically trigger pre-events when
   * there are events that can be prevented.
   */r.prototype.trigger=function(e,t){var n=r.__super__.trigger,i={open:"opening",close:"closing",select:"selecting",unselect:"unselecting",clear:"clearing"};if(void 0===t&&(t={}),e in i){var o=i[e],s={prevented:!1,name:e,args:t};if(n.call(this,o,s),s.prevented){t.prevented=!0;return}}n.call(this,e,t)},r.prototype.toggleDropdown=function(){this.isDisabled()||(this.isOpen()?this.close():this.open())},r.prototype.open=function(){!this.isOpen()&&(this.isDisabled()||this.trigger("query",{}))},r.prototype.close=function(e){this.isOpen()&&this.trigger("close",{originalEvent:e})},/**
   * Helper method to abstract the "enabled" (not "disabled") state of this
   * object.
   *
   * @return {true} if the instance is not disabled.
   * @return {false} if the instance is disabled.
   */r.prototype.isEnabled=function(){return!this.isDisabled()},/**
   * Helper method to abstract the "disabled" state of this object.
   *
   * @return {true} if the disabled option is true.
   * @return {false} if the disabled option is false.
   */r.prototype.isDisabled=function(){return this.options.get("disabled")},r.prototype.isOpen=function(){return this.$container[0].classList.contains("select2-container--open")},r.prototype.hasFocus=function(){return this.$container[0].classList.contains("select2-container--focus")},r.prototype.focus=function(e){// No need to re-trigger focus events if we are already focused
this.hasFocus()||(this.$container[0].classList.add("select2-container--focus"),this.trigger("focus",{}))},r.prototype.enable=function(e){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),(null==e||0===e.length)&&(e=[!0]);var t=!e[0];this.$element.prop("disabled",t)},r.prototype.data=function(){this.options.get("debug")&&arguments.length>0&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var e=[];return this.dataAdapter.current(function(t){e=t}),e},r.prototype.val=function(e){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==e||0===e.length)return this.$element.val();var t=e[0];Array.isArray(t)&&(t=t.map(function(e){return e.toString()})),this.$element.val(t).trigger("input").trigger("change")},r.prototype.destroy=function(){n.RemoveData(this.$container[0]),this.$container.remove(),this._observer.disconnect(),this._observer=null,this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",n.GetData(this.$element[0],"old-tabindex")),this.$element[0].classList.remove("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),n.RemoveData(this.$element[0]),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},r.prototype.render=function(){var t=e('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return t.attr("dir",this.options.get("dir")),this.$container=t,this.$container[0].classList.add("select2-container--"+this.options.get("theme")),n.StoreData(t[0],"element",this.$element),t},r}),t.define("jquery-mousewheel",["jquery"],function(e){// Used to shim jQuery.mousewheel for non-full builds.
return e}),t.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults","./select2/utils"],function(e,t,n,i,r){if(null==e.fn.select2){// All methods that should return the element
var o=["open","close","destroy"];e.fn.select2=function(t){if("object"==typeof(t=t||{}))return this.each(function(){var i=e.extend(!0,{},t);new n(e(this),i)}),this;if("string"==typeof t){var i,s=Array.prototype.slice.call(arguments,1);return(// Check if we should be returning `this`
(this.each(function(){var e=r.GetData(this,"select2");null==e&&window.console&&console.error&&console.error("The select2('"+t+"') method was called on an element that is not using Select2."),i=e[t].apply(e,s)}),o.indexOf(t)>-1)?this:i)}throw Error("Invalid arguments for Select2: "+t)}}return null==e.fn.select2.defaults&&(e.fn.select2.defaults=i),n}),{define:t.define,require:t.require}}(),n=t.require("jquery.select2");// Return the Select2 instance for anyone who is importing it.
return(// Hold the AMD module references on the jQuery function that was just loaded
// This allows Select2 to use the internal loader outside of this file, such
// as in the language files.
e.fn.select2.amd=t,n)},"function"==typeof define&&define.amd?define(["jquery"],r):u?u=function(e,t){return void 0===t&&(t="undefined"!=typeof window?l("3oRXo"):l("3oRXo")(e)),r(t),t}:r(jQuery);var d=l("3oRXo");/*@__PURE__*/i(u)(/*@__PURE__*/i(d)),window.$=window.jQuery=/*@__PURE__*/i(d);class p{handleClickOnTabs(){for(let e of this.tabsNavItems)e.addEventListener("click",e=>{this.switchTab(e.target)})}switchTab(e){let t=e.getAttribute("data-tab");for(let e of this.tabsNavItems)e.classList.remove("active");for(let e of this.tabsContentItems)e.id===t?e.classList.add("current"):e.classList.remove("current");e.classList.add("active"),this.tabNavList[0].classList.toggle("expanded")}initSelectForTabs(){let e=/*@__PURE__*/i(d)(".select");e.select2({minimumResultsForSearch:1/0,templateResult:this.getSelectViewTemplate,templateSelection:this.getSelectViewTemplate}),e.on("select2:select",function(e){let t=e.target.value;document.querySelectorAll(".tab-content").forEach(function(e){e.getAttribute("id")===t&&(document.querySelector(".tab-content.current").classList.remove("current"),e.classList.add("current"))})})}getSelectViewTemplate(e){return e.id?/*@__PURE__*/i(d)(/*@__PURE__*/i(d)(`[data-template="${e.id}"]`).html()):e.text}constructor(e="tab-nav-item",t="tab-nav-items",n="tab-content"){this.tabsNavItems=document.getElementsByClassName(e),this.tabNavList=document.getElementsByClassName(t),this.tabsContentItems=document.getElementsByClassName(n),this.handleClickOnTabs(),window.innerWidth<640&&this.initSelectForTabs()}}var h={};/**
 * Swiper 7.4.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: December 24, 2021
 *//* eslint no-param-reassign: "off" *//**
 * SSR Window 4.0.2
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2021, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: December 13, 2021
 *//* eslint-disable no-param-reassign */function f(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function g(e={},t={}){Object.keys(t).forEach(n=>{void 0===e[n]?e[n]=t[n]:f(t[n])&&f(e[n])&&Object.keys(t[n]).length>0&&g(e[n],t[n])})}h=function(){Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(e){// 1. Let O be ? ToObject(this value).
if(this==null)throw TypeError('"this" is null or not defined');var t=Object(this),n=t.length>>>0;// 2. Let len be ? ToLength(? Get(O, "length")).
if("function"!=typeof e)throw TypeError("predicate must be a function");for(// 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
var i=arguments[1],r=0;r<n;){// a. Let Pk be ! ToString(k).
// b. Let kValue be ? Get(O, Pk).
// c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
// d. If testResult is true, return kValue.
var o=t[r];if(e.call(i,o,r,t))return o;// e. Increase k by 1.
r++}// 7. Return undefined.
}}),Array.from||(Array.from=(f=Object.prototype.toString,g=function(e){return"function"==typeof e||"[object Function]"===f.call(e)},m=function(e){var t=Number(e);return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t},function(e){var t,n,i=Object(e);// 3. ReturnIfAbrupt(items).
if(null==e)throw TypeError("Array.from requires an array-like object - not null or undefined");// 4. If mapfn is undefined, then let mapping be false.
var r=arguments.length>1?arguments[1]:void 0;if(void 0!==r){// 5. else
// 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
if(!g(r))throw TypeError("Array.from: when provided, the second argument must be a function");// 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
arguments.length>2&&(t=arguments[2])}// 10. Let lenValue be Get(items, "length").
for(// 11. Let len be ToLength(lenValue).
var o=Math.min(Math.max(m(i.length),0),9007199254740991),s=g(this)?Object(new this(o)):Array(o),a=0;a<o;)n=i[a],r?s[a]=void 0===t?r(n,a):r.call(t,n,a):s[a]=n,a+=1;// 18. Let putStatus be Put(A, "length", len, true).
return s.length=o,s}));var e,t,n,i,r,o,s,a,l,c,u,d,p,h,f,g,m,v,y,b,w,S,x,T,E,C,A,L,k,_,D,O=window,M=document,P=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),j=/(Mac|iPhone|iPod|iPad)/i.test(O.navigator.userAgent),I="ontouchstart"in O||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,N=!!window.MSInputMethodContext&&!!document.documentMode,H={test:{},shared:{}},R=["parallax","scrollOverflowReset","dragAndMove","offsetSections","fadingEffect","responsiveSlides","continuousHorizontal","interlockedSlides","scrollHorizontally","resetSliders","cards","dropEffect","waterEffect"];//utils
/**
    * Shows a message in the console of the given type.
    */// function showError(type, text) {
//   win.console && win.console[type] && win.console[type]('fullPage: ' + text);
// }
function q(e){return"none"!==O.getComputedStyle(e).display}function z(e){return Array.from(e).filter(function(e){return q(e)})}/**
    * Equivalent of jQuery function $().
    */function B(e,t){return t=arguments.length>1?t:document,t?t.querySelectorAll(e):null}/**
    * Extends a given Object properties and its childs.
    */function F(e){e=e||{};for(var t=1,n=arguments.length;t<n;++t){var i=arguments[t];if(i){for(var r in i)if(i.hasOwnProperty(r)&&"__proto__"!=r&&"constructor"!=r){// based on https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/
if("[object Object]"===Object.prototype.toString.call(i[r])){e[r]=F(e[r],i[r]);continue}e[r]=i[r]}}}return e}/**
    * Checks if the passed element contains the passed class.
    */function W(e,t){return null!=e&&e.classList.contains(t)}/**
    * Gets the window height. Crossbrowser.
    */function G(){return"innerHeight"in O?O.innerHeight:M.documentElement.offsetHeight}/**
    * Gets the window width.
    */function U(){return O.innerWidth}/**
    * Set's the CSS properties for the passed item/s.
    * @param {NodeList|HTMLElement|Object} items
    * @param {Object} props css properties and values.
    */function V(e,t){for(n in e=Z(e),t)if(t.hasOwnProperty(n)&&null!==n)for(var n,i=0;i<e.length;i++)e[i].style[n]=t[n];return e}/**
    * Gets the previous element to the passed element.
    */function X(e){return e.previousElementSibling}/**
    * Gets the next element to the passed element.
    */function Y(e){return e.nextElementSibling}/**
    * Gets the last element from the passed list of elements.
    */function K(e){return e[e.length-1]}/**
    * Gets index from the passed element.
    * @param {String} selector is optional.
    */function Q(e,t){e=et(e)?e[0]:e;for(var n=null!=t?B(t,e.parentNode):e.parentNode.childNodes,i=0,r=0;r<n.length;r++){if(n[r]==e)return i;1==n[r].nodeType&&i++}return -1}/**
    * Gets an iterable element for the passed element/s
    */function Z(e){return et(e)?e:[e]}/**
    * Adds the display=none property for the passed element/s
    */function J(e){e=Z(e);for(var t=0;t<e.length;t++)e[t].style.display="none";return e}/**
    * Adds the display=block property for the passed element/s
    */function ee(e){e=Z(e);for(var t=0;t<e.length;t++)e[t].style.display="block";return e}/**
    * Checks if the passed element is an iterable element or not
    */function et(e){return"[object Array]"===Object.prototype.toString.call(e)||"[object NodeList]"===Object.prototype.toString.call(e)}/**
    * Adds the passed class to the passed element/s
    */function en(e,t){e=Z(e);for(var n=0;n<e.length;n++)e[n].classList.add(t);return e}/**
    * Removes the passed class to the passed element/s
    * @param {String} `className` can be multiple classnames separated by whitespace
    */function ei(e,t){e=Z(e);for(var n=t.split(" "),i=0;i<n.length;i++){t=n[i];for(var r=0;r<e.length;r++)e[r].classList.remove(t)}return e}/**
    * Appends the given element ot the given parent.
    */function er(e,t){t.appendChild(e)}/**
    Usage:

    var wrapper = document.createElement('div');
    wrapper.className = 'fp-slides';
    wrap($('.slide'), wrapper);

    https://jsfiddle.net/qwzc7oy3/15/ (vanilla)
    https://jsfiddle.net/oya6ndka/1/ (jquery equivalent)
    */function eo(e,t,n){var i;t=t||M.createElement("div");for(var r=0;r<e.length;r++){var o=e[r];(!n||r)&&n||(i=t.cloneNode(!0),o.parentNode.insertBefore(i,o)),i.appendChild(o)}return e}/**
    Usage:
    var wrapper = document.createElement('div');
    wrapper.className = 'fp-slides';
    wrap($('.slide'), wrapper);

    https://jsfiddle.net/qwzc7oy3/27/ (vanilla)
    https://jsfiddle.net/oya6ndka/4/ (jquery equivalent)
    */function es(e,t){eo(e,t,!0)}/**
    * Usage:
    * wrapInner(document.querySelector('#pepe'), '<div class="test">afdas</div>');
    * wrapInner(document.querySelector('#pepe'), element);
    *
    * https://jsfiddle.net/zexxz0tw/6/
    *
    * https://stackoverflow.com/a/21817590/1081396
    */function ea(e,t){for(e.appendChild(t);e.firstChild!==t;)t.appendChild(e.firstChild)}/**
    * Usage:
    * unwrap(document.querySelector('#pepe'));
    * unwrap(element);
    *
    * https://jsfiddle.net/szjt0hxq/1/
    *
    */function el(e){for(var t=M.createDocumentFragment();e.firstChild;)t.appendChild(e.firstChild);e.parentNode.replaceChild(t,e)}/**
    * http://stackoverflow.com/questions/22100853/dom-pure-javascript-solution-to-jquery-closest-implementation
    * Returns the element or `false` if there's none
    */function ec(e,t){return e&&1===e.nodeType?eT(e,t)?e:ec(e.parentNode,t):null}/**
    * Places one element (rel) after another one or group of them (reference).
    * @param {HTMLElement} reference
    * @param {HTMLElement|NodeList|String|Array} el
    * https://jsfiddle.net/9s97hhzv/1/
    */function eu(e,t){ep(e,e.nextSibling,t)}/**
    * Places one element (rel) before another one or group of them (reference).
    * @param {HTMLElement} reference
    * @param {HTMLElement|NodeList|String|Array} el
    * https://jsfiddle.net/9s97hhzv/1/
    */function ed(e,t){ep(e,e,t)}/**
    * Based in https://stackoverflow.com/a/19316024/1081396
    * and https://stackoverflow.com/a/4793630/1081396
    */function ep(e,t,n){et(n)||("string"==typeof n&&(n=eC(n)),n=[n]);for(var i=0;i<n.length;i++)e.parentNode.insertBefore(n[i],t)}//http://stackoverflow.com/questions/3464876/javascript-get-window-x-y-position-for-scroll
function eh(){var e=M.documentElement;return(O.pageYOffset||e.scrollTop)-(e.clientTop||0)}/**
    * Gets the siblings of the passed element
    */function ef(e){return Array.prototype.filter.call(e.parentNode.children,function(t){return t!==e})}function eg(e){e.preventDefault()}function em(e,t){return e.getAttribute(t)}function ev(e,t,n){M.addEventListener(e,t,"undefined"===n?null:n)}function ey(e,t,n){O.addEventListener(e,t,"undefined"===n?null:n)}function eb(e,t,n){M.removeEventListener(e,t,"undefined"===n?null:n)}function ew(e,t,n){O.removeEventListener(e,t,"undefined"===n?null:n)}/**
    * Determines whether the passed item is of function type.
    */function eS(e){if("function"==typeof e)return!0;var t=Object.prototype.toString.call(e);return"[object Function]"===t||"[object GeneratorFunction]"===t}/**
    * Trigger custom events
    */function ex(e,t,n){var i;n=void 0===n?{}:n,"function"==typeof O.CustomEvent?i=new CustomEvent(t,{detail:n}):(i=M.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,n),e.dispatchEvent(i)}/**
    * Polyfill of .matches()
    */function eT(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t)}/**
    * Toggles the visibility of the passed element el.
    */function eE(e,t){if("boolean"==typeof t)for(var n=0;n<e.length;n++)e[n].style.display=t?"block":"none";//we don't use it in other way, so no else :)
return e}/**
    * Creates a HTMLElement from the passed HTML string.
    * https://stackoverflow.com/a/494348/1081396
    */function eC(e){var t=M.createElement("div");return t.innerHTML=e.trim(),t.firstChild}/**
    * Removes the passed item/s from the DOM.
    */function eA(e){e=Z(e);for(var t=0;t<e.length;t++){var n=e[t];n&&n.parentElement&&n.parentNode.removeChild(n)}}//https://jsfiddle.net/w1rktecz/
function eL(e,t,n){for(var i=e[n],r=[];i;)(eT(i,t)||null==t)&&r.push(i),i=i[n];return r}/**
    * Gets all next elements matching the passed selector.
    */function e$(e,t){return eL(e,t,"nextElementSibling")}/**
    * Gets all previous elements matching the passed selector.
    */function ek(e,t){return eL(e,t,"previousElementSibling")}/**
    * Converts an object to an array.
    */function e_(e){return Object.keys(e).map(function(t){return e[t]})}function eD(e){return e[e.length-1]}/**
    * Gets the average of the last `number` elements of the given array.
    */function eO(e,t){for(var n=0,i=e.slice(Math.max(e.length-t,1)),r=0;r<i.length;r++)n+=i[r];return Math.ceil(n/t)}/**
    * Sets the value for the given attribute from the `data-` attribute with the same suffix
    * ie: data-srcset ==> srcset  |  data-src ==> src
    */function eM(e,t){e.setAttribute(t,em(e,"data-"+t)),e.removeAttribute("data-"+t)}function eP(e,t){var n=[e];do n.push(e=e.parentNode);while(!eT(e,t))return n}function ej(){var e=M.activeElement;return eT(e,"textarea")||eT(e,"input")||eT(e,"select")||"true"==em(e,"contentEditable")||""==em(e,"contentEditable")}//utils are public, so we can use it wherever we want
O.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)}),"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(e,t){if(null==e)throw TypeError("Cannot convert undefined or null to object");for(var n=Object(e),i=1;i<arguments.length;i++){var r=arguments[i];if(null!=r)// Skip over if undefined or null
for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n},writable:!0,configurable:!0}),String.prototype.padStart||(String.prototype.padStart=function(e,t){return(e>>=0,t=String(void 0!==t?t:" "),this.length>e)?String(this):((e-=this.length)>t.length&&(t+=Array.apply(null,Array(e)).map(function(){return t}).join("")),t.slice(0,e)+String(this))}),// @ts-ignore
window.fp_utils={$:B,deepExtend:F,hasClass:W,getWindowHeight:G,css:V,prev:X,next:Y,last:K,index:Q,getList:Z,hide:J,show:ee,isArrayOrList:et,addClass:en,removeClass:ei,appendTo:er,wrap:eo,wrapAll:es,unwrap:el,closest:ec,after:eu,before:ed,insertBefore:ep,getScrollTop:eh,siblings:ef,preventDefault:eg,isFunction:eS,trigger:ex,matches:eT,toggle:eE,createElementFromHTML:eC,remove:eA,// "filter": filter,
untilAll:eL,nextAll:e$,prevAll:ek};var eI=/*#__PURE__*/Object.freeze({__proto__:null,// showError: showError,
isVisible:q,getVisible:z,$:B,deepExtend:F,hasClass:W,getWindowHeight:G,getWindowWidth:U,css:V,prev:X,next:Y,last:K,index:Q,getList:Z,hide:J,show:ee,isArrayOrList:et,addClass:en,removeClass:ei,appendTo:er,wrap:eo,wrapAll:es,wrapInner:ea,unwrap:el,closest:ec,after:eu,before:ed,insertBefore:ep,getScrollTop:eh,siblings:ef,preventDefault:eg,getAttr:em,docAddEvent:ev,windowAddEvent:ey,docRemoveEvent:eb,windowRemoveEvent:ew,isFunction:eS,trigger:ex,matches:eT,toggle:eE,createElementFromHTML:eC,remove:eA,untilAll:eL,nextAll:e$,prevAll:ek,toArray:e_,getLast:eD,getAverage:eO,setSrc:eM,getParentsUntil:eP,isInsideInput:ej});function eN(e){return(eN="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var eH={events:{},on:function(e,t){var n=this;return"object"!==eN(this.events[e])&&(this.events[e]=[]),this.events[e].push(t),function(){return n.removeListener(e,t)}},removeListener:function(e,t){if("object"===eN(this.events[e])){var n=this.events[e].indexOf(t);n>-1&&this.events[e].splice(n,1)}},emit:function(e){for(var t=this,n=arguments.length,i=Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];"object"===eN(this.events[e])&&this.events[e].forEach(function(e){return e.apply(t,i)})},once:function(e,t){var n=this,i=this.on(e,function(){i();for(var e=arguments.length,r=Array(e),o=0;o<e;o++)r[o]=arguments[o];t.apply(n,r)})}},eR={numSections:0,numSlides:0,slides:[],sections:[],activeSection:null,scrollTrigger:null,isBeyondFullpage:!1,aboutToScrollToFullPage:!1,slideMoving:!1,isResizing:!1,isScrolling:!1,lastScrolledDestiny:void 0,lastScrolledSlide:void 0,activeAnimation:!1,canScroll:!0,touchDirection:"none",wheelDirection:"none",isGrabbing:!1,isUsingWheel:!1,isWindowFocused:!0,previousDestTop:0,windowsHeight:G(),isDoingContinousVertical:!1,timeouts:{},scrollY:0,scrollX:0};function eq(e){Object.assign(eR,e)}O.state=eR;var ez={onAfterRenderNoAnchor:"onAfterRenderNoAnchor",onClickOrTouch:"onClickOrTouch",moveSlideLeft:"moveSlideLeft",moveSlideRight:"moveSlideRight",onInitialise:"onInitialise",beforeInit:"beforeInit",bindEvents:"bindEvents",onDestroy:"onDestroy",contentChanged:"contentChanged",onScrollOverflowScrolled:"onScrollOverflowScrolled",onScrollPageAndSlide:"onScrollPageAndSlide",onKeyDown:"onKeyDown",onMenuClick:"onMenuClick",scrollPage:"scrollPage",landscapeScroll:"landscapeScroll",scrollBeyondFullpage:"scrollBeyondFullpage",onPerformMovement:"onPerformMovement",onSlideLeave:"onSlideLeave",onLeave:"onLeave",afterSectionLoads:"afterSectionLoads",afterSlideLoads:"afterSlideLoads"};function eB(e){eH.emit(ez.onClickOrTouch,{e:e,target:e.target})}function eF(){["click","touchstart"].forEach(function(e){eb(e,eB)})}// changing isWindowFocused to true on focus event
function eW(){eq({isWindowFocused:!0})}eH.on(ez.bindEvents,function(){//Scrolls to the section when clicking the navigation bullet
//simulating the jQuery .on('click') event using delegation
["click","touchstart"].forEach(function(e){ev(e,eB)}),ey("focus",eW),eH.on(ez.onDestroy,eF)});// keeping central set of classnames and selectors
var eG="fullpage-wrapper",eU="."+eG,eV="fp-responsive",eX="fp-notransition",eY="fp-destroyed",eK="fp-enabled",eQ="fp-viewing",eZ="active",eJ="."+eZ,e0="fp-completely",e1="."+e0,e2="fp-section",e3="."+e2,e4=e3+eJ,e6="fp-auto-height",e9="."+e6,e7="fp-auto-height-responsive",e5="."+e7,e8="fp-nav",te="#"+e8,tt="fp-tooltip",tn="."+tt,ti="fp-slide",tr="."+ti,to=tr+eJ,ts="fp-slides",ta="."+ts,tl="fp-slidesContainer",tc="."+tl,tu="fp-table",td="fp-overflow",tp="."+td,th="fp-is-overflow",tf="fp-slidesNav",tg="."+tf,tm=tg+" a",tv="fp-arrow",ty="fp-controlArrow",tb="."+ty,tw="fp-prev",tS=tb+"."+tw,tx="fp-next",tT=tb+"."+tx,tE={//navigation
menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,licenseKey:"",credits:{enabled:!0,label:"Made with fullPage.js",position:"right"},//scrolling
css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:600,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!0,scrollOverflowReset:!1,touchSensitivity:5,touchWrapper:null,bigSectionsDestination:null,//Accessibility
keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,allowCorrectDirection:!1,//design
scrollOverflowMacStyle:!0,controlArrows:!0,controlArrowsHTML:['<div class="'+tv+'"></div>','<div class="'+tv+'"></div>'],controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,//backwards compabitility with responsiveWiddth
responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},cards:!1,cardsOptions:{perspective:100,fadeContent:!0,fadeBackground:!0},//Custom selectors
sectionSelector:".section",slideSelector:".slide",//events
afterLoad:null,beforeLeave:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,onScrollOverflow:null,lazyLoading:!0,observer:!0,scrollBeyondFullpage:!0},tC=null,tA=!1,tL=F({},tE),t$=null;function tk(){return t$||tE}/*
    * Sets the state for a variable with multiple states (original, and temporal)
    * Some variables such as `autoScrolling` or `recordHistory` might change automatically its state when using `responsive` or `autoScrolling:false`.
    * This function is used to keep track of both states, the original and the temporal one.
    * If type is not 'internal', then we assume the user is globally changing the variable.
    */function t_(e,t,n){t$[e]=t,"internal"!==n&&(tL[e]=t)}/**
    * Setting options from DOM elements if they are not provided.
    */function tD(){//no anchors option? Checking for them in the DOM attributes
if(!tk().anchors.length){var e="[data-anchor]",t=B(tk().sectionSelector.split(",").join(e+",")+e,tC);t.length&&t.length===B(tk().sectionSelector,tC).length&&(tA=!0,t.forEach(function(e){tk().anchors.push(em(e,"data-anchor").toString())}))}//no tooltips option? Checking for them in the DOM attributes
if(!tk().navigationTooltips.length){var n="[data-tooltip]",i=B(tk().sectionSelector.split(",").join(n+",")+n,tC);i.length&&i.forEach(function(e){tk().navigationTooltips.push(em(e,"data-tooltip").toString())})}}var tO=function(e){this.anchor=e.anchor,this.item=e.item,this.index=e.index(),this.isLast=this.index===e.item.parentElement.querySelectorAll(e.selector).length-1,this.isFirst=!this.index,this.isActive=e.isActive},tM=function(e,t){this.parent=this.parent||null,this.selector=t,this.anchor=em(e,"data-anchor")||tk().anchors[Q(e,tk().sectionSelector)],this.item=e,this.isVisible=q(e),this.isActive=W(e,eZ),this.hasScroll=W(e,td)||null!=B(tp,e)[0],this.isSection=t===tk().sectionSelector,this.container=ec(e,tc)||ec(e,eU),this.index=function(){return this.siblings().indexOf(this)}};function tP(e){return e.map(function(e){return e.item})}function tj(e,t){return e.find(function(e){return e.item===t})}tM.prototype.siblings=function(){return this.isSection?this.isVisible?eR.sections:eR.sectionsIncludingHidden:this.parent?this.parent.slides:0},tM.prototype.prev=function(){var e=this.siblings(),t=(this.isSection?e.indexOf(this):this.parent.slides.indexOf(this))-1;return t>=0?e[t]:null},tM.prototype.next=function(){var e=this.siblings(),t=(this.isSection?e.indexOf(this):this.parent.slides.indexOf(this))+1;return t<e.length?e[t]:null},tM.prototype.prevPanel=function(){return this.prev()||(this.parent?this.parent.prev():null)},tM.prototype.nextPanel=function(){return this.next()||(this.parent?this.parent.next():null)},tM.prototype.getSiblings=function(){return this.isSection?eR.sections:eR.panels};var tI=function(e){tO.call(this,e)},tN=function(e){tO.call(this,e)};/**
    * Gets the active slide (or section) for the given section
    */function tH(e){var t=B(to,e);return t.length&&(e=t[0]),e}function tR(e){return e?e.activeSlide?e.activeSlide:e:null}/**
    * Gets the scrolling settings depending on the plugin autoScrolling option
    */function tq(e){var t,n,i=tk();return i.autoScrolling&&!i.scrollBar?(t=-e,n=B(eU)[0]):(t=e,n=window),{options:t,element:n}}/**
    * Scrolls the page / slider the given number of pixels.
    * It will do it one or another way dependiong on the library's config.
    */function tz(e,t){!tk().autoScrolling||tk().scrollBar||e.self!=window&&W(e,ts)?e.self!=window&&W(e,ts)?e.scrollLeft=t:e.scrollTo(0,t):e.style.top=t+"px"}/**
    * Adds transition animations for the given element
    */function tB(e){var t="transform "+tk().scrollingSpeed+"ms "+tk().easingcss3;return ei(e,eX),V(e,{"-webkit-transition":t,transition:t})}/**
    * Retuns `up` or `down` depending on the scrolling movement to reach its destination
    * from the current section.
    */function tF(e,t){var n=e.index(),i=Q(t,e3);return n==i?"none":n>i?"up":"down"}/**
    * Returns the cross-browser transform string.
    */function tW(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}/**
    * Adds a css3 transform property to the container class with or without animation depending on the animated param.
    */function tG(e,t){t?tB(tC):en(tC,eX),clearTimeout(v),V(tC,tW(e)),H.test.translate3d=e,v=setTimeout(function(){ei(tC,eX)},10)}/**
    * Scrolls silently (with no animation) the page to the given Y position.
    */function tU(e){// The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
// that's why we round it to 0.
var t=Math.round(e);if(tk().css3&&tk().autoScrolling&&!tk().scrollBar)tG("translate3d(0px, -"+t+"px, 0px)",!1);else if(tk().autoScrolling&&!tk().scrollBar)V(tC,{top:-t+"px"}),H.test.top=-t+"px";else{var n=tq(t);tz(n.element,n.options)}}/**
    * Defines the scrolling speed
    */function tV(e,t){t_("scrollingSpeed",e,t)}H.setScrollingSpeed=tV;var tX=null,tY=null,tK=null;/**
    * Simulates the animated scrollTop of jQuery. Used when css3:false or scrollBar:true or autoScrolling:false
    * http://stackoverflow.com/a/16136789/1081396
    */function tQ(e,t,n,i){var r,o=e.self!=O&&W(e,ts)?e.scrollLeft:!tk().autoScrolling||tk().scrollBar?eh():e.offsetTop,s=t-o,a=!1,l=eR.activeAnimation;eq({activeAnimation:!0}),y&&window.cancelAnimationFrame(y),y=function(c){r||(r=c);var u=Math.floor(c-r);if(eR.activeAnimation){//in order to stope it from other function whenever we want
var d=t;n&&(d=O.fp_easings[tk().easing](u,o,s,n)),u<=n&&tz(e,d),u<n?window.requestAnimationFrame(y):void 0===i||a||(i(),eq({activeAnimation:!1}),a=!0)}else a||l||(i(),eq({activeAnimation:!1}),a=!0)},window.requestAnimationFrame(y)}/**
    * Makes sure to only create a Panel object if the element exist
    */function tZ(e){return e&&!e.item?new tI(new nI(e)):e?new tI(e):null}function tJ(e){return e?new tN(e):null}/**
    * Dispatch events & callbacks
    */function t0(e,t){var n,i=(n={afterRender:function(){return{section:tZ(eR.activeSection),slide:tJ(eR.activeSection.activeSlide)}},onLeave:function(){return{origin:tZ(t.items.origin),destination:tZ(t.items.destination),direction:t.direction,trigger:eR.scrollTrigger}},afterLoad:function(){return n.onLeave()},afterSlideLoad:function(){return{section:tZ(t.items.section),origin:tZ(t.items.origin),destination:tZ(t.items.destination),direction:t.direction,trigger:eR.scrollTrigger}},onSlideLeave:function(){return n.afterSlideLoad()},beforeLeave:function(){return n.onLeave()},onScrollOverflow:function(){return{section:tZ(eR.activeSection),slide:tJ(eR.activeSection.activeSlide),position:t.position,direction:t.direction}}})[e]();return ex(tC,e,i),!1!==tk()[e].apply(i[Object.keys(i)[0]],e_(i))}/**
    * Plays video and audio elements.
    */function t1(e){var t=tH(e);//playing HTML5 media elements
B("video, audio",t).forEach(function(e){e.hasAttribute("data-autoplay")&&"function"==typeof e.play&&e.play()}),B('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){e.hasAttribute("data-autoplay")&&t2(e),//in case the URL was not loaded yet. On page load we need time for the new URL (with the API string) to load.
e.onload=function(){e.hasAttribute("data-autoplay")&&t2(e)}})}/**
    * Plays a youtube video
    */function t2(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}/**
    * Stops video and audio elements.
    */function t3(e){var t=tH(e);//stopping HTML5 media elements
B("video, audio",t).forEach(function(e){e.hasAttribute("data-keepplaying")||"function"!=typeof e.pause||e.pause()}),B('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){/youtube\.com\/embed\//.test(em(e,"src"))&&!e.hasAttribute("data-keepplaying")&&e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}/**
    * Lazy loads image, video and audio elements.
    */function t4(e){tk().lazyLoading&&B("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",tH(e)).forEach(function(e){if(["src","srcset"].forEach(function(t){var n=em(e,"data-"+t);null!=n&&n&&(eM(e,t),e.addEventListener("load",function(){}))}),eT(e,"source")){var t=ec(e,"video, audio");t&&(t.load(),t.onloadeddata=function(){})}})}/**
    * Sets a class for the body of the page depending on the active section / slide
    */function t6(){var e=eR.activeSection.item,t=eR.activeSection.activeSlide,n=String(t9(e));t&&(n=n+"-"+t9(t.item)),n=n.replace("/","-").replace("#","");var i=RegExp("\\b\\s?"+eQ+"-[^\\s]+\\b","g");tX.className=tX.className.replace(i,""),en(tX,eQ+"-"+n)}/**
    * Gets the anchor for the given slide / section. Its index will be used if there's none.
    */function t9(e){if(!e)return null;var t=em(e,"data-anchor"),n=Q(e);return null==t&&(t=n),t}/**
    * Sets the state of the website depending on the active section/slide.
    * It changes the URL hash when needed and updates the body class.
    */function t7(e,t,n){var i="";tk().anchors.length&&!tk().lockAnchors&&(e?(null!=n&&(i=n),null==t&&(t=e),eq({lastScrolledSlide:t}),t5(i+"/"+t)):(null!=e&&eq({lastScrolledSlide:t}),t5(n))),t6()}/**
    * Sets the URL hash.
    */function t5(e){if(tk().recordHistory)location.hash=e;else if(P||I)O.history.replaceState(void 0,void 0,"#"+e);else{var t=O.location.href.split("#")[0];O.location.replace(t+"#"+e)}}/**
    * Gets the name for screen readers for a section/slide navigation bullet.
    */function t8(e,t,n){var i="Section"===t?tk().anchors[e]:em(n,"data-anchor");return encodeURI(tk().navigationTooltips[e]||i||t+" "+(e+1))}function ne(e){e.cancelable&&eg(e),eq({scrollTrigger:"horizontalNav"});/*jshint validthis:true */var t=ec(this,e3),n=B(ta,ec(this,e3))[0],i=tj(eR.sections,t).slides[Q(ec(this,"li"))];eH.emit(ez.landscapeScroll,{slides:n,destination:i.item})}var nt={};/**
    * Allowing or disallowing the mouse/swipe scroll in a given direction. (not for keyboard)
    * @param type m (mouse) or k (keyboard)
    */function nn(e,t,n){//up, down, left, right
"all"!==t?nt[n][t]=e:Object.keys(nt[n]).forEach(function(t){nt[n][t]=e})}function ni(){/*jshint validthis:true */var e=ec(this,e3);/*jshint validthis:true */W(this,tw)?nt.m.left&&(eq({scrollTrigger:"slideArrow"}),eH.emit(ez.moveSlideLeft,{section:e})):nt.m.right&&(eq({scrollTrigger:"slideArrow"}),eH.emit(ez.moveSlideRight,{section:e}))}/**
    * Defines wheter to record the history for each hash change in the URL.
    */function nr(e,t){t_("recordHistory",e,t)}/**
    * Sets the autoScroll option.
    * It changes the scroll bar visibility and the history of the site as a result.
    */function no(e,t){e||tU(0),t_("autoScrolling",e,t);var n=eR.activeSection.item;if(tk().autoScrolling&&!tk().scrollBar)V(tK,{overflow:"hidden",height:"100%"}),ei(tX,"fp-scrollable"),nr(tL.recordHistory,"internal"),V(tC,{"-ms-touch-action":"none","touch-action":"none"}),null!=n&&tU(n.offsetTop);else if(V(tK,{overflow:"visible",height:"initial"}),en(tX,"fp-scrollable"),nr(!!tk().autoScrolling&&tL.recordHistory,"internal"),V(tC,{"-ms-touch-action":"","touch-action":""}),null!=n){var i=tq(n.offsetTop);i.element.scrollTo(0,i.options)}}/**
    * Makes sure lazyload is done for other sections in the viewport that are not the
    * active one. 
    */function ns(){var e=B(e9)[0]||W(tX,eV)&&B(e5)[0];//quitting when it doesn't apply
tk().lazyLoading&&e&&//making sure to lazy load auto-height sections that are in the viewport
B(e3+":not("+eJ+")").forEach(function(e){var t,n,i,r,o;n=(t=e.getBoundingClientRect()).top,i=t.bottom,r=n+2<eR.windowsHeight&&n>0,o=i>2&&i<eR.windowsHeight,(r||o)&&t4(e)})}function na(){/*jshint validthis:true */ex(X(this),"click")}/**
    * Creates a vertical navigation bar.
    */function nl(){eA(B(te));var e=M.createElement("div");e.setAttribute("id",e8);var t=M.createElement("ul");e.appendChild(t),er(e,tX);var n=B(te)[0];en(n,"fp-"+tk().navigationPosition),tk().showActiveTooltip&&en(n,"fp-show-active");for(var i="",r=0;r<eR.sections.length;r++){var o=eR.sections[r],s="";tk().anchors.length&&(s=o.anchor),i+='<li><a href="#'+encodeURI(s)+'"><span class="fp-sr-only">'+t8(o.index(),"Section")+"</span><span></span></a>";var a=tk().navigationTooltips[o.index()];void 0!==a&&""!==a&&(i+='<div class="'+tt+" fp-"+tk().navigationPosition+'">'+a+"</div>"),i+="</li>"}B("ul",n)[0].innerHTML=i;var l=B("li",B(te)[0])[eR.activeSection.index()];en(B("a",l),eZ)}//Scrolls to the section when clicking the navigation bullet
function nc(e){e.preventDefault&&eg(e),eq({scrollTrigger:"verticalNav"});/*jshint validthis:true */// @ts-ignore
var t=Q(ec(this,te+" li"));eH.emit(ez.scrollPage,{destination:eR.sections[t]})}/**
    * Sets to active the current menu and vertical nav items.
    */function nu(e,t){var n;tk().menu&&tk().menu.length&&B(tk().menu).forEach(function(t){null!=t&&(ei(B(eJ,t),eZ),en(B('[data-menuanchor="'+e+'"]',t),eZ))}),n=B(te)[0],tk().navigation&&null!=n&&"none"!==n.style.display&&(ei(B(eJ,n),eZ),e?en(B('a[href="#'+e+'"]',n),eZ):en(B("a",B("li",n)[t]),eZ))}nt.m={up:!0,down:!0,left:!0,right:!0},nt.k=F({},nt.m),eH.on(ez.onClickOrTouch,function(e){var t=e.target;(eT(t,tb)||ec(t,tb))&&ni.call(t,e)}//Scrolling horizontally when clicking on the slider controls.
),H.setRecordHistory=nr,H.setAutoScrolling=no,H.test.setAutoScrolling=no,new Date().getTime();/**
     * Triggers the callback once per scroll wheel action.
     * Based on scrolling speed delay.
     */var nd=(n=!0,i=new Date().getTime(),r=!O.fullpage_api,function(e,o){var s=new Date().getTime(),a="wheel"===e?tk().scrollingSpeed:100;return n=r||s-i>=a,r=!O.fullpage_api,n&&(t=o(),i=s),void 0===t||t});/**
    * Fires the wheel event once per mouse wheel trigger.
    */function np(e,t){if(eS(tk().beforeLeave))return nd(eR.scrollTrigger,function(){return t0(e,t)})}/**
    * Scrolls the site to the given element and scrolls to the slide if a callback is given.
    */function nh(e,t,n){var i,r,o=e.item;if(null!=o){//there's no element to scroll, leaving the function
var s=(l=o.offsetHeight,u=c=o.offsetTop,d=c>eR.previousDestTop,p=u-G()+l,h=tk().bigSectionsDestination,l>G()?(d||h)&&"bottom"!==h||(u=p):(d||eR.isResizing&&null==Y(o))&&(u=p),/*
      Keeping record of the last scrolled position to determine the scrolling direction.
      No conventional methods can be used as the scroll bar might not be present
      AND the section might not be active if it is auto-height and didnt reach the middle
      of the viewport.
      */eq({previousDestTop:u}),u),a={element:o,callback:t,isMovementUp:n,dtop:s,yMovement:tF(eR.activeSection,o),anchorLink:e.anchor,sectionIndex:e.index(),activeSlide:e.activeSlide?e.activeSlide.item:null,leavingSection:eR.activeSection.index()+1,//caching the value of isResizing at the momment the function is called
//because it will be checked later inside a setTimeout and the value might change
localIsResizing:eR.isResizing,items:{origin:eR.activeSection,destination:e},direction:null};if((eR.activeSection.item!=o||eR.isResizing)&&(!tk().scrollBar||eh()!==a.dtop||W(o,e6))){if(null!=a.activeSlide&&(i=em(a.activeSlide,"data-anchor"),r=Q(a.activeSlide,null)),!a.localIsResizing){var l,c,u,d,p,h,f,g,m=a.yMovement;//required for continousVertical
if(void 0!==n&&(m=n?"up":"down"),//for the callback
a.direction=m,eS(tk().beforeLeave)&&!1===np("beforeLeave",a)||eS(tk().onLeave)&&!t0("onLeave",a))return}// If continuousVertical && we need to wrap around
tk().autoScrolling&&tk().continuousVertical&&void 0!==a.isMovementUp&&(!a.isMovementUp&&"up"==a.yMovement||// Intending to scroll down but about to go up or
a.isMovementUp&&"down"==a.yMovement)&&(f=a,eq({isDoingContinousVertical:!0}),g=eR.activeSection.item,f.isMovementUp?// Move all next sections to before the active section
ed(g,e$(g,e3)):eu(g,ek(g,e3).reverse()),// Maintain the displayed position (now that we changed the element order)
tU(eR.activeSection.item.offsetTop),/**
    * Maintains the active slides in the viewport
    * (Because the `scroll` animation might get lost with some actions, such as when using continuousVertical)
    */function(){for(var e=B(to),t=0;t<e.length;t++)nk(e[t],"internal")}(),f.wrapAroundElements=g,f.dtop=f.element.offsetTop,f.yMovement=tF(eR.activeSection,f.element),a=f),a.localIsResizing||t3(eR.activeSection.item),en(o,eZ),ei(ef(o),eZ),nO(),t4(o),//more than once if the page is scrolling
eq({canScroll:H.test.isTesting}),t7(r,i,a.anchorLink),eH.emit(ez.onLeave,a),/**
    * Performs the vertical movement (by CSS3 or by jQuery)
    */function(e){var t=tk().scrollingSpeed<700,n=t?700:tk().scrollingSpeed;if(eq({touchDirection:"none",scrollY:Math.round(e.dtop)}),eH.emit(ez.onPerformMovement),tk().css3&&tk().autoScrolling&&!tk().scrollBar)tG("translate3d(0px, -"+Math.round(e.dtop)+"px, 0px)",!0),tk().scrollingSpeed?(clearTimeout(b),b=setTimeout(function(){nf(e),eq({canScroll:!t||H.test.isTesting})},tk().scrollingSpeed)):nf(e);else{var i=tq(e.dtop);H.test.top=-e.dtop+"px",clearTimeout(b),tQ(i.element,i.options,tk().scrollingSpeed,function(){tk().scrollBar?/* Hack!
            The timeout prevents setting the most dominant section in the viewport as "active" when the user
            scrolled to a smaller section by using the mousewheel (auto scrolling) rather than draging the scroll bar.
             When using scrollBar:true It seems like the scroll events still getting propagated even after the scrolling animation has finished.
            */b=setTimeout(function(){nf(e)},30):(nf(e),eq({canScroll:!t||H.test.isTesting}))})}// enabling canScroll after the minimum transition laps
t&&(clearTimeout(w),w=setTimeout(function(){eq({canScroll:!0})},n))}(a),eq({lastScrolledDestiny:a.anchorLink}),nu(a.anchorLink,a.sectionIndex)}}}/**
    * Actions to do once the section is loaded.
    */function nf(e){eq({isBeyondFullpage:!1}),null!=e.wrapAroundElements&&(e.isMovementUp?ed(B(e3)[0],e.wrapAroundElements):eu(B(e3)[eR.sections.length-1],e.wrapAroundElements),tU(eR.activeSection.item.offsetTop),//@ts-check
/**
    * Maintains the active slides in the viewport
    * (Because the `scroll` animation might get lost with some actions, such as when using continuousVertical)
    */function(){for(var e=B(to),t=0;t<e.length;t++)nk(e[t],"internal")}(),eq({isDoingContinousVertical:!1})),eS(tk().afterLoad)&&!e.localIsResizing&&t0("afterLoad",e),nO(),e.localIsResizing||t1(e.element),en(e.element,e0),ei(ef(e.element),e0),ns(),eq({canScroll:!0}),eH.emit(ez.afterSectionLoads,e),eS(e.callback)&&e.callback()}/**
    * Sets fitToSection
    */function ng(e,t){t_("fitToSection",e,t)}/**
    * Fits the site to the nearest active section
    */function nm(){//checking fitToSection again in case it was set to false before the timeout delay
eR.canScroll&&(//allows to scroll to an active section and
//if the section is already active, we prevent firing callbacks
eq({isResizing:!0}),nh(eR.activeSection),eq({isResizing:!1}))}/**
    * Checks if the site needs to get responsive and disables autoScrolling if so.
    * A class `fp-responsive` is added to the plugin's container in case the user wants to use it for his own responsive CSS.
    */function nv(){var e=tk().responsive||tk().responsiveWidth,t=tk().responsiveHeight,n=e&&O.innerWidth<e,i=t&&O.innerHeight<t;//backwards compatiblity
e&&t?ny(n||i):e?ny(n):t&&ny(i)}/**
    * Turns fullPage.js to normal scrolling mode when the viewport `width` or `height`
    * are smaller than the set limit values.
    */function ny(e){var t=W(tX,eV);e?!t&&(no(!1,"internal"),ng(!1,"internal"),J(B(te)),en(tX,eV),eS(tk().afterResponsive))&&tk().afterResponsive.call(tC,e):t&&(no(tL.autoScrolling,"internal"),ng(tL.autoScrolling,"internal"),ee(B(te)),ei(tX,eV),eS(tk().afterResponsive))&&tk().afterResponsive.call(tC,e)}function nb(e){tk().verticalCentered&&(!tk().scrollOverflow&&nE.shouldBeScrollable(e.item)||nE.isScrollable(e)||W(e.item,tu)||en(e.item,tu))}H.moveTo=moveTo,H.getScrollY=function(){return eR.scrollY},eH.on(ez.onDestroy,function(){clearTimeout(b),clearTimeout(w)}),H.setFitToSection=ng,H.fitToSection=nm,H.setResponsive=ny;var nw=null;/**
    * Styling vertical sections
    */function nS(e){var t=e.item,n=e.allSlidesItems.length,i=e.index();!eR.activeSection&&e.isVisible&&(en(t,eZ),nO(),nw=eR.activeSection.item),tk().paddingTop&&V(t,{"padding-top":tk().paddingTop}),tk().paddingBottom&&V(t,{"padding-bottom":tk().paddingBottom}),void 0!==tk().sectionsColor[i]&&V(t,{"background-color":tk().sectionsColor[i]}),void 0!==tk().anchors[i]&&t.setAttribute("data-anchor",e.anchor),n||nb(e)}function nx(){tk().scrollOverflow&&!tk().scrollBar&&(nE.makeScrollable(),nE.focusScrollable())}function nT(){eH.removeListener(ez.onAfterRenderNoAnchor,nx),eb("keyup",nE.keyUpHandler)}H.getActiveSection=/**
    * Gets the active section.
    */function(){return eR.activeSection},eH.on(ez.bindEvents,function(){// We can't focus scrollOverflow before scrolling
// to the anchor (if we need to)
eH.on(ez.onAfterRenderNoAnchor,nx),eH.on(ez.onLeave,nE.onLeave),eH.on(ez.onSlideLeave,nE.onLeave),eH.on(ez.afterSlideLoads,nE.afterLoad),eH.on(ez.afterSectionLoads,nE.afterLoad),eH.on(ez.onDestroy,nT),ev("keyup",nE.keyUpHandler)});var nE={focusedElem:null,shouldFocusScrollable:!0,isInnerScrollAllowed:!0,timeBeforeReachingLimit:null,timeLastScroll:null,preventScrollWithMouseWheel:function(e){if(!eR.canScroll)return eg(e),!1},preventScrollWithKeyboard:function(e){if(!ej()&&tk().keyboardScrolling&&[38,33,32,40,34,36,35].indexOf(e.keyCode)>-1&&!nE.isInnerScrollAllowed)return eg(e),!1},keyUpHandler:function(){nE.shouldFocusScrollable=eR.canScroll},// Leaving sections or slides
onLeave:function(){clearTimeout(S),nE.isInnerScrollAllowed=!1},// Loading sections or slides
afterLoad:function(){nE.isInnerScrollAllowed=!1,clearTimeout(S),S=setTimeout(function(){nE.shouldFocusScrollable=eR.canScroll},200)},// Unfocusing the scrollable element from the orgin section/slide
unfocusScrollable:function(){M.activeElement===this.focusedElem&&(// @ts-ignore
this.focusedElem.blur(),nE.isInnerScrollAllowed=!1)},focusScrollable:function(){if(tk().scrollOverflow&&nE.shouldFocusScrollable){nE.unfocusScrollable();var e=nE.getScrollableItem(eR.activeSection.item);// On desktop we focus the scrollable to be able to use the mouse wheel
!e||P||I||(this.focusedElem=e,// to avoid issue #4484 & #4493 on Safari
requestAnimationFrame(function(){e.focus(),nE.isInnerScrollAllowed=!0})),nE.shouldFocusScrollable=!1}},makeScrollable:function(){tk().scrollOverflowMacStyle&&!j&&en(tX,"fp-scroll-mac"),eR.panels.forEach(function(e){if((!e.slides||!e.slides.length)&&!(W(e.item,e7)&&W(tX,eV))){var t=tH(e.item),n=nE.shouldBeScrollable(e.item),i=e.isSection?e:e.parent;if(N){var r=n?"addClass":"removeClass";eI[r](i.item,th),eI[r](e.item,th)}else en(i.item,th),en(e.item,th);e.hasScroll||(nE.createWrapper(t),nE.bindEvents(t)),// this is executed on page load (after images load)
e.hasScroll=!0}})},bindEvents:function(e){nE.getScrollableItem(e).addEventListener("scroll",nE.onPanelScroll),e.addEventListener("wheel",nE.preventScrollWithMouseWheel,{passive:!1}),e.addEventListener("keydown",nE.preventScrollWithKeyboard,{passive:!1})},createWrapper:function(e){var t=document.createElement("div");t.className=td,ea(e,t),t.setAttribute("tabindex","-1")},destroyWrapper:function(e){var t=B(tp,e)[0];t&&(el(t),e.removeAttribute("tabindex"))},getScrollableItem:function(e){var t=tH(e);return B(tp,t)[0]||t},hasScroll:function(e){return W(e,td)||null!=B(tp,e)[0]},isScrollable:function(e){return e.isSection&&e.activeSlide?e.activeSlide.hasScroll:e.hasScroll},shouldBeScrollable:function(e){return nE.getScrollableItem(e).scrollHeight>O.innerHeight},isScrolled:function(e,t){if(!eR.canScroll)return!1;// we won't allow scrolloverflow on scrollBar:true
if(tk().scrollBar)return!0;var n=nE.getScrollableItem(t);if(!tk().scrollOverflow||!W(n,td)||// Checking the section first 
// In case they apply to both section + slide #4505
W(t,"fp-noscroll")||// Checking the slide (in case it has)
W(tH(t),"fp-noscroll"))return!0;var i=n.scrollTop,r="down"===e&&n.scrollHeight<=Math.ceil(n.offsetHeight+i)+(N?1:0),o="up"===e&&i<=0||r;return o||(this.timeBeforeReachingLimit=new Date().getTime()),o},shouldMovePage:function(){this.timeLastScroll=new Date().getTime();var e=this.timeLastScroll-nE.timeBeforeReachingLimit,t=(P||I)&&eR.isGrabbing,n=eR.isUsingWheel&&e>600;return t&&e>400||n},onPanelScroll:(o=0,function(e){var t=e.target.scrollTop,n="none"!==eR.touchDirection?eR.touchDirection:o<t?"down":"up";o=t,eS(tk().onScrollOverflow)&&t0("onScrollOverflow",{position:t,direction:n}),W(e.target,td)&&eR.canScroll&&nE.isScrolled(n,e.target)&&nE.shouldMovePage()&&nE.shouldBeScrollable(eR.activeSection.item)&&eH.emit(ez.onScrollOverflowScrolled,{direction:n})})};function nC(){clearTimeout(x),eq({slideMoving:!1})}/**
    * Scrolls horizontal sliders.
    */function nA(e,t,n){var i,r,o=ec(e,e3),s=eR.sections.filter(function(e){return e.item==o})[0],a=s.slides.filter(function(e){return e.item==t})[0],l={slides:e,destiny:t,direction:n,destinyPos:{left:t.offsetLeft},slideIndex:a.index(),section:o,sectionIndex:s.index(),anchorLink:s.anchor,slidesNav:B(tg,o)[0],slideAnchor:a.anchor,prevSlide:s.activeSlide.item,prevSlideIndex:s.activeSlide.index(),items:{section:s,origin:s.activeSlide,destination:a},//caching the value of isResizing at the momment the function is called
//because it will be checked later inside a setTimeout and the value might change
localIsResizing:eR.isResizing};if(l.xMovement=(i=l.prevSlideIndex)==(r=l.slideIndex)?"none":i>r?"left":"right",l.direction=l.direction?l.direction:l.xMovement,l.localIsResizing||eq({canScroll:!1}),tk().onSlideLeave&&!l.localIsResizing&&"none"!==l.xMovement&&eS(tk().onSlideLeave)&&!1===t0("onSlideLeave",l)){eq({slideMoving:!1});return}en(t,eZ),ei(ef(t),eZ),nO(),l.localIsResizing||(t3(l.prevSlide),t4(t)),!tk().loopHorizontal&&tk().controlArrows&&(//hidding it for the fist slide, showing for the rest
eE(B(tS,l.section),0!==l.slideIndex),eE(B(tT,l.section),null!=Y(l.destiny))),s.isActive&&!l.localIsResizing&&t7(l.slideIndex,l.slideAnchor,l.anchorLink),eH.emit(ez.onSlideLeave,l),/**
    * Performs the horizontal movement. (CSS3 or jQuery)
    *
    * @param fireCallback {Boolean} - determines whether or not to fire the callback
    */function(e,t,n){var i,r,o=t.destinyPos;if(i=t.slidesNav,r=t.slideIndex,tk().slidesNavigation&&null!=i&&(ei(B(eJ,i),eZ),en(B("a",B("li",i)[r]),eZ)),eq({scrollX:Math.round(o.left)}),tk().css3){var s="translate3d(-"+Math.round(o.left)+"px, 0px, 0px)";H.test.translate3dH[t.sectionIndex]=s,V(tB(B(tc,e)),tW(s)),clearTimeout(x),x=setTimeout(function(){n&&n$(t)},tk().scrollingSpeed)}else H.test.left[t.sectionIndex]=Math.round(o.left),tQ(e,Math.round(o.left),tk().scrollingSpeed,function(){n&&n$(t)})}(e,l,!0)}function nL(){clearTimeout(x)}function n$(e){e.localIsResizing||(eS(tk().afterSlideLoad)&&t0("afterSlideLoad",e),//needs to be inside the condition to prevent problems with continuousVertical and scrollHorizontally
//and to prevent double scroll right after a windows resize
eq({canScroll:!0}),t1(e.destiny),eH.emit(ez.afterSlideLoads,e)),eq({slideMoving:!1})}/**
    * Slides silently (with no animation) the active slider to the given slide.
    * @param noCallback {bool} true or defined -> no callbacks
    */function nk(e,t){tV(0,"internal"),void 0!==t&&eq({isResizing:!0}),nA(ec(e,ta),e),void 0!==t&&eq({isResizing:!1}),tV(tL.scrollingSpeed,"internal")}H.landscapeScroll=nA,eH.on(ez.bindEvents,function(){eH.on(ez.onPerformMovement,nC)});var n_=null,nD=null;/** 
     * Updates the state of the app.
     */function nO(){eR.activeSection=null,eR.sections.map(function(e){var t=W(e.item,eZ);e.isActive=t,e.hasScroll=nE.hasScroll(e.item),t&&(eR.activeSection=e),e.slides.length&&(e.activeSlide=null,e.slides.map(function(t){var n=W(t.item,eZ);t.hasScroll=nE.hasScroll(e.item),t.isActive=n,n&&(e.activeSlide=t)}))}),/**
     * When changes in the DOM take place there's a change 
     * the active section is now hidden or removed. 
     * fullPage.js will scroll to the closest section nearby.
     */function(){var e=eR.activeSection,t=!!eR.activeSection&&eR.activeSection.slides.length,n=eR.activeSection?eR.activeSection.activeSlide:null;if(!e&&eR.sections.length&&!eR.isBeyondFullpage&&n_){var i=nj(n_,eR.sections);i&&(eR.activeSection=i,eR.activeSection.isActive=!0,en(eR.activeSection.item,eZ)),eR.activeSection&&tU(eR.activeSection.item.offsetTop)}if(t&&!n&&nD){var r=nj(nD,eR.activeSection.slides);r&&(eR.activeSection.activeSlide=r,eR.activeSection.activeSlide.isActive=!0,en(eR.activeSection.activeSlide.item,eZ)),eR.activeSection.activeSlide&&nk(eR.activeSection.activeSlide.item,"internal")}}()}function nM(){var e=B(tk().sectionSelector,tC),t=z(e),n=Array.from(e).map(function(e){return new nI(e)}),i=n.filter(function(e){return e.isVisible}),r=i.reduce(function(e,t){return e.concat(t.slides)},[]);n_=nP(eR.activeSection),nD=nP(eR.activeSection?eR.activeSection.activeSlide:null),eR.numSections=t.length,eR.numSlides=i.reduce(function(e,t){return e+t.slides.length},0),eR.sections=i,eR.sectionsIncludingHidden=n,eR.slides=r,eR.panels=eR.sections.concat(eR.slides)}function nP(e){if(!e)return null;var t=e?e.item:null,n=e.isSection?eR.sectionsIncludingHidden:eR.activeSection.slidesIncludingHidden;if(t){var i=tj(n,t);return i?i.index():null}return null}function nj(e,t){var n,i=e-1,r=e;do{if(n=t[i]||t[r])break;i-=1,r+=1}while(i>=0||r<t.length)return n}/**
    * Section object
    */var nI=function(e){var t=this;[].push.call(arguments,tk().sectionSelector),tM.apply(this,arguments),this.allSlidesItems=B(tk().slideSelector,e),this.slidesIncludingHidden=Array.from(this.allSlidesItems).map(function(e){return new nN(e,t)}),this.slides=this.slidesIncludingHidden.filter(function(e){return e.isVisible}),this.activeSlide=this.slides.length?this.slides.filter(function(e){return e.isActive})[0]||this.slides[0]:null};nI.prototype=tM.prototype,nI.prototype.constructor=nI;/**
    * Slide object
    */var nN=function(e,t){this.parent=t,tM.call(this,e,tk().slideSelector)};/**
    * Adds internal classes to be able to provide customizable selectors
    * keeping the link with the style sheet.
    */function nH(){en(B(tk().sectionSelector,tC),e2),en(B(tk().slideSelector,tC),ti)}/**
    * Styles the horizontal slides for a section.
    */function nR(e){var t,n,i=e.slides.length,r=e.allSlidesItems,o=e.slides,s=100/i;if(!B(ta,e.item)[0]){var a=M.createElement("div");a.className=ts,es(r,a);var l=M.createElement("div");l.className=tl,es(r,l)}V(B(tc,e.item),{width:100*i+"%"}),i>1&&(tk().controlArrows&&(t=e.item,n=[eC(tk().controlArrowsHTML[0]),eC(tk().controlArrowsHTML[1])],eu(B(ta,t)[0],n),en(n,ty),en(n[0],tw),en(n[1],tx),"#fff"!==tk().controlArrowColor&&(V(B(tT,t),{"border-color":"transparent transparent transparent "+tk().controlArrowColor}),V(B(tS,t),{"border-color":"transparent "+tk().controlArrowColor+" transparent transparent"})),tk().loopHorizontal||J(B(tS,t))),tk().slidesNavigation&&/**
    * Creates a landscape navigation bar with dots for horizontal sliders.
    */function(e){var t=e.item,n=e.slides.length;er(eC('<div class="'+tf+'"><ul></ul></div>'),t);var i=B(tg,t)[0];//top or bottom
en(i,"fp-"+tk().slidesNavPosition);for(var r=0;r<n;r++){var o=B(tr,t)[r];er(eC('<li><a href="#"><span class="fp-sr-only">'+t8(r,"Slide",o)+"</span><span></span></a></li>"),B("ul",i)[0])}//centering it
V(i,{"margin-left":"-"+i.innerWidth/2+"px"});var s=e.activeSlide?e.activeSlide.index():0;en(B("a",B("li",i)[s]),eZ)}(e)),o.forEach(function(e){V(e.item,{width:s+"%"}),tk().verticalCentered&&nb(e)});var c=e.activeSlide||null;//if the slide won't be an starting point, the default will be the first one
null!=c&&eR.activeSection&&(0!==eR.activeSection.index()||0===eR.activeSection.index()&&0!==c.index())?nk(c.item,"internal"):en(r[0],eZ)}nN.prototype=tM.prototype,nN.prototype.constructor=nI;var nq={attributes:!1,subtree:!0,childList:!0,characterData:!0};function nz(){return z(B(tk().slideSelector,tC)).length!==eR.numSlides}/**
     * Listen to changes on sections and fires reBuild
     * when those changes affect the section height.
     */function nB(e){var t=nz();(nz()||z(B(tk().sectionSelector,tC)).length!==eR.numSections)&&!eR.isDoingContinousVertical&&(tk().observer&&T&&// we modidy the DOM again
T.disconnect(),nM(),nO(),tk().anchors=[],eA(B(te)),nH(),tD(),tk().navigation&&nl(),t&&(eA(B(tg)),eA(B(tb))),eR.sections.forEach(function(e){e.slides.length?t&&nR(e):nS(e)})),tk().observer&&T&&B(eU)[0]&&T.observe(B(eU)[0],nq)}eH.on(ez.bindEvents,function(){var e,t;tk().observer&&"MutationObserver"in window&&B(eU)[0]&&(e=B(eU)[0],(t=new MutationObserver(nB)).observe(e,nq),T=t),eH.on(ez.contentChanged,nB)}),H.render=nB;var nF=function(){//cheks for passive event support
var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});ey("testPassive",null,t),ew("testPassive",null,t)}catch(e){}return function(){return e}}();function nW(){return!!nF()&&{passive:!1}}var nG=(l=new Date().getTime(),c=[],{registerEvent:function(e){var t=(e=e||O.event).wheelDelta||-e.deltaY||-e.detail,n=void 0!==e.wheelDeltaX||void 0!==e.deltaX;s=Math.abs(e.wheelDeltaX)<Math.abs(e.wheelDelta)||Math.abs(e.deltaX)<Math.abs(e.deltaY)||!n;var i=new Date().getTime();a=0>Math.max(-1,Math.min(1,t))?"down":"up",c.length>149&&c.shift(),//keeping record of the previous scrollings
c.push(Math.abs(t));var r=i-l;l=i,r>200&&(c=[])},isAccelerating:function(){var e=eO(c,10),t=eO(c,70);return!!c.length&&e>=t&&s},getDirection:function(){return a}});function nU(){var e=tk().css3?eh()+G():eD(eR.sections).item.offsetTop+eD(eR.sections).item.offsetHeight,t=tq(e);H.test.top=-e+"px",eq({canScroll:!1}),tQ(t.element,t.options,tk().scrollingSpeed,function(){setTimeout(function(){eq({isBeyondFullpage:!0}),eq({canScroll:!0})},30)})}function nV(){tC.getBoundingClientRect().bottom>=0&&nX()}function nX(){var e=tq(eD(eR.sections).item.offsetTop);eq({canScroll:!1}),tQ(e.element,e.options,tk().scrollingSpeed,function(){eq({canScroll:!0}),eq({isBeyondFullpage:!1}),eq({isAboutToScrollToFullPage:!1})})}var nY=(u=!1,d={},p={},function(e,t,n){switch(e){case"set":d[t]=new Date().getTime(),p[t]=n;break;case"isNewKeyframe":u=new Date().getTime()-d[t]>p[t]}return u});/**
    * Moves the page down one section.
    */function nK(){var e=eR.activeSection.next();//looping to the top if there's no more sections below
!e&&(tk().loopBottom||tk().continuousVertical)&&(e=eR.sections[0]),null!=e?nh(e,null,!1):tC.scrollHeight<tX.scrollHeight&&tk().scrollBar&&tk().scrollBeyondFullpage&&eH.emit(ez.scrollBeyondFullpage)}/**
    * Moves the page up one section.
    */function nQ(){var e=eR.activeSection.prev();//looping to the bottom if there's no more sections above
!e&&(tk().loopTop||tk().continuousVertical)&&(e=eD(eR.sections)),null!=e&&nh(e,null,!0)}H.moveSectionDown=nK,H.moveSectionUp=nQ;var nZ=0;/**
    * Detecting the direction of the mouse movement.
    * Used only for the middle button of the mouse.
    */function nJ(e){tk().autoScrolling&&(eR.canScroll&&(e.pageY<nZ&&nt.m.up?nQ():e.pageY>nZ&&nt.m.down&&nK()),nZ=e.pageY)}/**
    * Determines the way of scrolling up or down:
    * by 'automatically' scrolling a section or by using the default and normal scrolling.
    */function n0(e){if(nt.m[e]){var t="down"===e?nK:nQ;tk().scrollOverflow&&nE.isScrollable(eR.activeSection)?nE.isScrolled(e,eR.activeSection.item)&&nE.shouldMovePage()&&t():t()}}var n1=0,n2=0,n3=0,n4=0,n6=(O.PointerEvent&&(e={down:"pointerdown",move:"pointermove"}),e),n9={touchmove:"ontouchmove"in window?"touchmove":n6?n6.move:null,touchstart:"ontouchstart"in window?"touchstart":n6?n6.down:null};/* Detecting touch events

    * As we are changing the top property of the page on scrolling, we can not use the traditional way to detect it.
    * This way, the touchstart and the touch moves shows an small difference between them which is the
    * used one to determine the direction.
    */function n7(e){var t=ec(e.target,e3)||eR.activeSection.item,n=nE.isScrollable(eR.activeSection);if(n5(e)){eq({isGrabbing:!0,isUsingWheel:!1}),tk().autoScrolling&&(n&&!eR.canScroll||tk().scrollBar)&&eg(e);var i=it(e);n3=i.y,n4=i.x;var r=Math.abs(n1-n3)>O.innerHeight/100*tk().touchSensitivity,o=Math.abs(n2-n4)>U()/100*tk().touchSensitivity,s=B(ta,t).length&&Math.abs(n2-n4)>Math.abs(n1-n3),a=n2>n4?"right":"left",l=n1>n3?"down":"up";eq({touchDirection:s?a:l}),s?!eR.slideMoving&&o&&(n2>n4?nt.m.right&&eH.emit(ez.moveSlideRight,{section:t}):nt.m.left&&eH.emit(ez.moveSlideLeft,{section:t})):tk().autoScrolling&&eR.canScroll&&r&&n0(l)}}/**
    * As IE >= 10 fires both touch and mouse events when using a mouse in a touchscreen
    * this way we make sure that is really a touch event what IE is detecting.
    */function n5(e){//if is not IE   ||  IE is detecting `touch` or `pen`
return void 0===e.pointerType||"mouse"!=e.pointerType}/**
    * Handler for the touch start event.
    */function n8(e){if(tk().fitToSection&&eq({activeAnimation:!1}),n5(e)){var t=it(e);n1=t.y,n2=t.x}ey("touchend",ie)}/**
    * Handler for the touch end event.
    */function ie(){ew("touchend",ie),eq({isGrabbing:!1})}/**
    * Gets the pageX and pageY properties depending on the browser.
    * https://github.com/alvarotrigo/fullPage.js/issues/194#issuecomment-34069854
    */function it(e){var t={};return t.y=void 0!==e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,t.x=void 0!==e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,I&&n5(e)&&tk().scrollBar&&void 0!==e.touches&&(t.y=e.touches[0].pageY,t.x=e.touches[0].pageX),t}/*
    * Preventing bouncing in iOS #2285
    */function ii(e){tk().autoScrolling&&n5(e)&&nt.m.up&&!eR.canScroll&&eg(e)}/**
    * Slides a slider to the given direction.
    * Optional `section` param.
    */function ir(e,t){var n=null==t?eR.activeSection.item:t,i=tj(eR.sections,n),r=B(ta,n)[0];if(null!=r&&!eR.slideMoving&&!(i.slides.length<2)){var o=i.activeSlide,s="left"===e?o.prev():o.next();if(!s){//respect loopHorizontal setting
if(!tk().loopHorizontal)return;s="left"===e?eD(i.slides):i.slides[0]}eq({slideMoving:!H.test.isTesting}),nA(r,s.item,e)}}/**
    * Slides left the slider of the active section.
    * Optional `section` param.
    */function io(e){ir("left",e)}/**
    * Slides right the slider of the active section.
    * Optional `section` param.
    */function is(e){ir("right",e)}/**
    * Gets a section by its anchor / index
    */function ia(e){var t=eR.sections.filter(function(t){return t.anchor===e})[0];return t||(t=eR.sections[void 0!==e?e-1:0]),t}/**
    * Scrolls the slider to the given slide destination for the given section
    */function il(e){null!=e&&nA(ec(e,ta),e)}/**
    * Scrolls to the given section and slide anchors
    */function ic(e,t){var n=ia(e);//do nothing if there's no section with the given anchor name
if(null!=n){var i,r,o=(i=t,null==(r=n.slides.filter(function(e){return e.anchor===i})[0])&&(i=void 0!==i?i:0,r=n.slides[i]),r?r.item:null);//we need to scroll to the section and then to the slide
n.anchor&&n.anchor===eR.lastScrolledDestiny||W(n.item,eZ)?il(o):nh(n,function(){il(o)})}}/**
    * Moves the page to the given section and slide.
    * Anchors or index positions can be used as params.
    */function iu(e,t){var n=ia(e);void 0!==t?ic(e,t):null!=n&&nh(n)}function id(){clearTimeout(C),eb("keydown",ip),eb("keyup",ih)}//Sliding with arrow keys, both, vertical and horizontal
function ip(e){clearTimeout(C);var t=e.keyCode,n=[37,39].indexOf(t)>-1,i=tk().autoScrolling||tk().fitToSection||n;9===t?/**
    * Makes sure the tab key will only focus elements within the current section/slide
    * preventing this way from breaking the page.
    * Based on "Modals and keyboard traps"
    * from https://developers.google.com/web/fundamentals/accessibility/focus/using-tabindex
    */function(e){var t,n,i,r,o,s=e.shiftKey,a=M.activeElement,l=ib(tH(eR.activeSection.item));function c(e){return eg(e),l[0]?l[0].focus():null}// deactivating tab while scrolling #4550
if(!eR.canScroll){eg(e);return}//outside any section or slide? Let's not hijack the tab!
if(n=(t=ib(M)).indexOf(M.activeElement),r=ec(i=t[e.shiftKey?n-1:n+1],tr),o=ec(i,e3),r||o){//is there an element with focus?
a?null==ec(a,e4+","+e4+" "+to)&&(a=c(e)):c(e);//when reached the first or last focusable element of the section/slide
//we prevent the tab action to keep it in the last focusable element
var u=a==l[0],d=a==l[l.length-1],p=s&&u;if(p||!s&&d){eg(e);var h=/**
     * Get's the panel containing the element to focus.
     *
     */function(e){var t,n=e?"prevPanel":"nextPanel",i=[],r=tR((eR.activeSection&&eR.activeSection.activeSlide?eR.activeSection.activeSlide:eR.activeSection)[n]());do(i=ib(r.item)).length&&(t={panel:r,itemToFocus:i[e?i.length-1:0]}),r=tR(r[n]());while(r&&0===i.length)return t}(p),f=h?h.panel:null;if(f){var g=f.isSection?f:f.parent;eH.emit(ez.onScrollPageAndSlide,{sectionAnchor:g.index()+1,slideAnchor:f.isSection?0:f.index()}),A=h.itemToFocus,eg(e)}}}}(e):!ej()&&tk().keyboardScrolling&&i&&(E=e.ctrlKey,C=setTimeout(function(){/**
    * Keydown event
    */(function(e){var t=e.shiftKey,n=M.activeElement,i=eT(n,"video")||eT(n,"audio"),r={up:nE.isScrolled("up",eR.activeSection.item),down:nE.isScrolled("down",eR.activeSection.item)},o=[37,39].indexOf(e.keyCode)>-1;if(!([40,38,32,33,34].indexOf(e.keyCode)>-1)||eR.isBeyondFullpage||ec(e.target,tp)||e.preventDefault(),eR.canScroll||o)switch(eq({scrollTrigger:"keydown"}),e.keyCode){//up
case 38:case 33:nt.k.up&&r.up?eR.isBeyondFullpage?eH.emit(ez.onKeyDown,{e:e}):nQ():nE.focusScrollable();break;//down
case 32://spacebar
if(t&&nt.k.up&&!i&&r.up){nQ();break}/* falls through */case 40:case 34:if(nt.k.down&&r.down){if(eR.isBeyondFullpage)return;// space bar?
32===e.keyCode&&i||nK()}else nE.focusScrollable();break;//Home
case 36:nt.k.up&&iu(1);break;//End
case 35:nt.k.down&&iu(eR.sections.length);break;//left
case 37:nt.k.left&&io();break;//right
case 39:nt.k.right&&is();break;default:return}}//to prevent scrolling while zooming
)(e)},0))}function ih(e){eR.isWindowFocused&&(E=e.ctrlKey)}//when opening a new tab (ctrl + t), `control` won't be pressed when coming back.
function ig(){eq({isWindowFocused:!1}),E=!1}function im(e){iy()}function iv(e){(!ec(A,tr)||ec(A,to))&&iy()}function iy(){A&&(A.focus(),A=null)}/**
    * Gets all the focusable elements inside the passed element.
    */function ib(e){return[].slice.call(B('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',e)).filter(function(e){return"-1"!==em(e,"tabindex")&&//are also not hidden elements (or with hidden parents)
null!==e.offsetParent})}H.moveSlideLeft=io,H.moveSlideRight=is,H.moveTo=iu,eH.on(ez.bindEvents,function(){//when opening a new tab (ctrl + t), `control` won't be pressed when coming back.
ey("blur",ig),ev("keydown",ip),ev("keyup",ih),eH.on(ez.onDestroy,id),eH.on(ez.afterSlideLoads,im),eH.on(ez.afterSectionLoads,iv)});var iw=new Date().getTime(),iS=[];/**
    * Adds or remove the possibility of scrolling through sections by using the mouse wheel or the trackpad.
    */function ix(e){var t,n,i,r;e?(n="",O.addEventListener?t="addEventListener":(t="attachEvent",n="on"),i="onwheel"in M.createElement("div")?"wheel":void 0!==M.onmousewheel?"mousewheel":"DOMMouseScroll",r=nW(),"DOMMouseScroll"==i?M[t](n+"MozMousePixelScroll",iT,r):M[t](n+i,iT,r),tC.addEventListener("mousedown",iE),tC.addEventListener("mouseup",iC)):(M.addEventListener?(eb("mousewheel",iT,!1),eb("wheel",iT,!1),eb("MozMousePixelScroll",iT,!1)):M.detachEvent("onmousewheel",iT),tC.removeEventListener("mousedown",iE),tC.removeEventListener("mouseup",iC))}/**
     * Detecting mousewheel scrolling
     *
     * http://blogs.sitepointstatic.com/examples/tech/mouse-wheel/index.html
     * http://www.sitepoint.com/html5-javascript-mouse-wheel/
     */function iT(e){var t=new Date().getTime(),n=W(B(e1)[0],"fp-normal-scroll"),i=function(e,t){new Date().getTime();var n,i=eR.isBeyondFullpage&&e.getBoundingClientRect().bottom>=0&&"up"===nG.getDirection(),r=eR.isAboutToScrollToFullPage;if(r)return eg(t),!1;if(eR.isBeyondFullpage){if(i){if(!r&&(!nY("isNewKeyframe","beyondFullpage")||!nG.isAccelerating()))return(n=tq(eD(eR.sections).item.offsetTop+eD(eR.sections).item.offsetHeight)).element.scrollTo(0,n.options),eq({isAboutToScrollToFullPage:!1}),eg(t),!1;if(nG.isAccelerating())return i=!1,eq({isAboutToScrollToFullPage:!0}),eq({scrollTrigger:"wheel"}),nX(),eg(t),!1}else nY("set","beyondFullpage",1e3);if(!r&&!i)return!0}}(tC,e);//is scroll allowed?
if(eR.isUsingWheel||eq({isGrabbing:!1,isUsingWheel:!0,touchDirection:"none"}),!nt.m.down&&!nt.m.up)return eg(e),!1;if(i)return!0;//autoscrolling and not zooming?
if(!1===i)return eg(e),!1;if(tk().autoScrolling&&!E&&!n){var r=// cross-browser wheel delta
(e=e||O.event).wheelDelta||-e.deltaY||-e.detail,o=Math.max(-1,Math.min(1,r)),s=void 0!==e.wheelDeltaX||void 0!==e.deltaX,a=Math.abs(e.wheelDeltaX)<Math.abs(e.wheelDelta)||Math.abs(e.deltaX)<Math.abs(e.deltaY)||!s;iS.length>149&&iS.shift(),//keeping record of the previous scrollings
iS.push(Math.abs(r)),tk().scrollBar&&eg(e);//time difference between the last scroll and the current one
var l=t-iw;return iw=t,l>200&&(iS=[]),eq({wheelDirection:o<0?"down":o>0?"up":"none"}),eR.canScroll&&eO(iS,10)>=eO(iS,70)&&a&&(eq({scrollTrigger:"wheel"}),o<0?n0("down"):n0("up")),!1}tk().fitToSection&&eq({activeAnimation:!1})}//binding the mousemove when the mouse's middle button is released
function iE(e){//middle button
2==e.which&&(nZ=e.pageY,tC.addEventListener("mousemove",nJ))}//unbinding the mousemove when the mouse's middle button is released
function iC(e){//middle button
2==e.which&&tC.removeEventListener("mousemove",nJ)}/**
    * Adds or remove the mouse wheel hijacking
    */function iA(e){e?(ix(!0),/**
    * Adds the possibility to auto scroll through sections on touch devices.
    */function(){if(n9.touchmove&&(P||I)){tk().autoScrolling&&(tX.removeEventListener(n9.touchmove,ii,{passive:!1}),tX.addEventListener(n9.touchmove,ii,{passive:!1}));var e=tk().touchWrapper;e.removeEventListener(n9.touchstart,n8),e.removeEventListener(n9.touchmove,n7,{passive:!1}),e.addEventListener(n9.touchstart,n8),e.addEventListener(n9.touchmove,n7,{passive:!1})}}()):(ix(!1),/**
    * Removes the auto scrolling for touch devices.
    */function(){if(n9.touchmove&&(P||I)){tk().autoScrolling&&(tX.removeEventListener(n9.touchmove,n7,{passive:!1}),tX.removeEventListener(n9.touchmove,ii,{passive:!1}));var e=tk().touchWrapper;e.removeEventListener(n9.touchstart,n8),e.removeEventListener(n9.touchmove,n7,{passive:!1})}}())}H.setMouseWheelScrolling=ix;var iL=!0;function i$(){["mouseenter","touchstart","mouseleave","touchend"].forEach(function(e){eb(e,i_,!0);//true is required!
})}function ik(e,t){//a way to pass arguments to the onMouseEnterOrLeave function
document["fp_"+e]=t,ev(e,i_,!0)}function i_(e){var t=e.type,n=!1,i="mouseleave"===t?e.toElement||e.relatedTarget:e.target;if(i==document||!i){iA(!0);return}"touchend"===t&&(iL=!1,setTimeout(function(){iL=!0},800)),("mouseenter"!==t||iL)&&(tk().normalScrollElements.split(",").forEach(function(e){if(!n){var t=eT(i,e),r=ec(i,e);//leaving a child inside the normalScoll element is not leaving the normalScroll #3661
(t||r)&&(H.shared.isNormalScrollElement||iA(!1),H.shared.isNormalScrollElement=!0,n=!0)}}),!n&&H.shared.isNormalScrollElement&&(iA(!0),H.shared.isNormalScrollElement=!1))}/**
    * Moves the page to the given section and slide with no animation.
    * Anchors or index positions can be used as params.
    */function iD(e,t){tV(0,"internal"),iu(e,t),tV(tL.scrollingSpeed,"internal")}eH.on(ez.bindEvents,function(){tk().normalScrollElements&&(["mouseenter","touchstart"].forEach(function(e){ik(e,!1)}),["mouseleave","touchend"].forEach(function(e){ik(e,!0)})),eH.on(ez.onDestroy,i$)}),H.silentMoveTo=iD;var iO=G(),iM=U(),iP=!1;function ij(){clearTimeout(L),clearTimeout(k),ew("resize",iI)}/*
    * Resize event handler.
    */function iI(){iP||(!tk().autoScrolling||tk().scrollBar)&&tk().fitToSection||iH(G()),function(){if(P)// (some apps or browsers, like Chrome/Firefox will delay a bit to scroll 
// to the focused input
for(var e=0;e<4;e++)k=setTimeout(function(){window.requestAnimationFrame(function(){// on Android devices the browser scrolls to the focused element
// messing up the whole page structure. So we need to update the
// translate3d value when the keyboard shows/hides
tk().autoScrolling&&!tk().scrollBar&&(eq({isResizing:!0}),iD(eR.activeSection.index()+1),eq({isResizing:!1}))})},200*e)}(),iP=!0,//http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing    
clearTimeout(L),L=setTimeout(function(){//issue #3336 
//(some apps or browsers, like Chrome/Firefox for Mobile take time to report the real height)
//so we check it 3 times with intervals in that case
// for(var i = 0; i< 4; i++){
/**
    * When resizing the site, we adjust the heights of the sections, slimScroll...
    */(function(){if(eq({isResizing:!0}),iH(""),tk().autoScrolling||eR.isBeyondFullpage||/**
     * Defining the value in px of a VH unit. (Used for autoScrolling: false)
     * To fix the height issue on mobile devices when using VH units.
     * https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
     */function(){if(!tk().autoScrolling||tk().scrollBar){// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
var e=.01*O.innerHeight;// Then we set the value in the --vh custom property to the root of the document
M.documentElement.style.setProperty("--vh","".concat(e,"px"))}}(),eH.emit(ez.contentChanged),nO(),nv(),P){var e,t,n=M.activeElement;//if the keyboard is NOT visible
if(!eT(n,"textarea")&&!eT(n,"input")&&!eT(n,"select")){var i=G();//making sure the change in the viewport size is enough to force a rebuild. (20 % of the window to avoid problems when hidding scroll bars)
Math.abs(i-iO)>20*Math.max(iO,i)/100&&(iN(!0),iO=i)}}else e=G(),t=U(),(eR.windowsHeight!==e||iM!==t)&&(eq({windowsHeight:e}),iM=t,iN(!0));eq({isResizing:!1})})(),iP=!1},400)}/**
     * When resizing is finished, we adjust the slides sizes and positions
     */function iN(e){if(!W(tC,eY)){//nothing to do if the plugin was destroyed
//updating global vars
eq({isResizing:!0,windowsHeight:G(),windowsWidth:U()});for(var t=eR.sections,n=0;n<t.length;++n){var i=t[n],r=B(ta,i.item)[0];i.slides.length>1&&nA(r,i.activeSlide.item)}tk().scrollOverflow&&nE.makeScrollable();var o=eR.activeSection.index();!eR.isBeyondFullpage&&o&&iD(o+1),eq({isResizing:!1}),eS(tk().afterResize)&&e&&tk().afterResize.call(tC,O.innerWidth,O.innerHeight),eS(tk().afterReBuild)&&!e&&tk().afterReBuild.call(tC),ex(tC,"afterRebuild")}}function iH(e){var t=""===e?"":e+"px";eR.sections.forEach(function(e){V(e.item,{height:t})})}function iR(){var e,t,n=O.location.hash;if(n.length){//getting the anchor link in the URL and deleting the `#`
var i=n.replace("#","").split("/"),r=n.indexOf("#/")>-1;//using / for visual reasons and not as a section/slide separator #2803
e=r?"/"+i[1]:decodeURIComponent(i[0]);var o=r?i[2]:i[1];o&&o.length&&(t=decodeURIComponent(o))}return{section:e,slide:t}}function iq(){ew("hashchange",iz)}/**
    * Detecting any change on the URL to scroll to the given anchor link
    * (a way to detect back history button as we play with the hashes on the URL)
    */function iz(){if(!eR.isScrolling&&!tk().lockAnchors){var e=iR(),t=e.section,n=e.slide,i=void 0===eR.lastScrolledDestiny,r=void 0===eR.lastScrolledDestiny&&void 0===n&&!eR.slideMoving;t&&t.length&&(t&&t!==eR.lastScrolledDestiny&&!i||r||!eR.slideMoving&&eR.lastScrolledSlide!=n)&&eH.emit(ez.onScrollPageAndSlide,{sectionAnchor:t,slideAnchor:n})}}function iB(e){var t=e.target;ec(t,tk().menu+" [data-menuanchor]")&&iF.call(t,e)}//Menu item handler when not using anchors or using lockAnchors:true
function iF(e){eq({scrollTrigger:"menu"}),B(tk().menu)[0]&&(tk().lockAnchors||!tk().anchors.length)&&(eg(e),/*jshint validthis:true */eH.emit(ez.onMenuClick,{anchor:em(this,"data-menuanchor")}))}function iW(e){var t=e.target;t&&ec(t,te+" a")?nc.call(t,e.e):eT(t,tn)?na.call(t):(eT(t,tm)||null!=ec(t,tm))&&ne.call(t,e.e)}H.reBuild=iN,eH.on(ez.bindEvents,function(){// Setting VH correctly in mobile devices
iI(),ey("resize",iI),eH.on(ez.onDestroy,ij)}),H.setLockAnchors=/**
    * Sets lockAnchors
    */function(e){tk().lockAnchors=e},eH.on(ez.bindEvents,function(){//detecting any change on the URL to scroll to the given anchor link
//(a way to detect back history button as we play with the hashes on the URL)
ey("hashchange",iz),eH.on(ez.onDestroy,iq)}),eH.on(ez.bindEvents,function(){ev("wheel",nG.registerEvent,nW()),eH.on(ez.scrollBeyondFullpage,nU),eH.on(ez.onKeyDown,nV)}),eH.on(ez.bindEvents,function(){eH.on(ez.onClickOrTouch,iB)}),eH.on(ez.bindEvents,function(){eH.on(ez.onClickOrTouch,iW)});var iG=0;function iU(e){if(!eR.isResizing&&eR.activeSection&&(eD(eR.sections),!eR.isBeyondFullpage&&!eR.isAboutToScrollToFullPage&&(!tk().autoScrolling||tk().scrollBar))){var t=eh(),n=(l=t>iG?"down":"up",iG=t,eq({previousDestTop:t}),l),i=0,r=t+G()/2,o=tX.scrollHeight-G()===t,s=eR.sections;if(eq({scrollY:t}),o)i=s.length-1;else if(t)for(var a=0;a<s.length;++a)s[a].item.offsetTop<=r&&(i=a);else i=0;//executing only once the first time we reach the section
if(u=(c=eR.activeSection.item.offsetTop)+G(),("up"==n?u>=eh()+G():c<=eh())&&!W(eR.activeSection.item,e0)&&(en(eR.activeSection.item,e0),ei(ef(eR.activeSection.item),e0)),p=(d=s[i]).item,!d.isActive){eq({isScrolling:!0});var l,c,u,d,p,h,f,g=eR.activeSection.item,m=eR.activeSection.index()+1,v=tF(eR.activeSection,p),y=d.anchor,b=d.index()+1,w=d.activeSlide,S={activeSection:g,sectionIndex:b-1,anchorLink:y,element:p,leavingSection:m,direction:v,items:{origin:eR.activeSection,destination:d}};w&&(f=w.anchor,h=w.index()),eR.canScroll&&(en(p,eZ),ei(ef(p),eZ),eS(tk().beforeLeave)&&np("beforeLeave",S),eS(tk().onLeave)&&t0("onLeave",S),eS(tk().afterLoad)&&t0("afterLoad",S),t3(g),t4(p),t1(p),nu(y,b-1),tk().anchors.length&&eq({lastScrolledDestiny:y}),nO(),t7(h,f,y)),clearTimeout(_),_=setTimeout(function(){eq({isScrolling:!1})},100)}tk().fitToSection&&eR.canScroll&&(clearTimeout(D),D=setTimeout(function(){eR.sections.filter(function(e){var t=e.item.getBoundingClientRect();return Math.round(t.bottom)===Math.round(G())||0===Math.round(t.top)}).length||nm()},tk().fitToSectionDelay))}}/**
    * Adds or remove the possibility of scrolling through sections by using the keyboard arrow keys
    */function iV(e,t){void 0!==t?(t=t.replace(/ /g,"").split(",")).forEach(function(t){nn(e,t,"k")}):(nn(e,"all","k"),tk().keyboardScrolling=e)}/**
    * Actions and callbacks to fire afterRender
    */function iX(){var e,t,n=eR.activeSection,i=eR.activeSection.item;en(i,e0),t4(i),ns(),t1(i),t=ia((e=iR()).section),(!e.section||!t||void 0!==t&&t.index()===Q(nw))&&eS(tk().afterLoad)&&t0("afterLoad",{activeSection:i,element:i,direction:null,//for backwards compatibility callback (to be removed in a future!)
anchorLink:n.anchor,sectionIndex:n.index(),items:{origin:eR.activeSection,destination:eR.activeSection}}),eS(tk().afterRender)&&t0("afterRender")}/**
    * Adds or remove the possibility of scrolling through sections by using the mouse wheel/trackpad or touch gestures.
    * Optionally a second parameter can be used to specify the direction for which the action will be applied.
    *
    * @param directions string containing the direction or directions separated by comma.
    */function iY(e,t){void 0!==t?(t=t.replace(/ /g,"").split(",")).forEach(function(t){nn(e,t,"m")}):nn(e,"all","m")}/**
    * Scrolls to the anchor in the URL when loading the site
    */function iK(){var e=iR(),t=e.section,n=e.slide;t?tk().animateAnchor?ic(t,n):iD(t,n):eH.emit(ez.onAfterRenderNoAnchor,null)}/**
    * Displays warnings
    */function iQ(){var e=tk().licenseKey,t="font-size: 15px;background:yellow;";""===tk().licenseKey.trim()||(tk()&&eR.isValid||M.domain.indexOf("alvarotrigo.com")>-1)&&e&&e.length<20&&(console.warn("%c This website was made using fullPage.js slider. More info on the following website:",t),console.warn("%c https://alvarotrigo.com/fullPage/",t)),W(tY,eK)||(tk().continuousVertical&&(tk().loopTop||tk().loopBottom)&&(tk().continuousVertical=!1),tk().scrollOverflow&&(tk().scrollBar||tk().autoScrolling),tk().continuousVertical&&(tk().scrollBar||!tk().autoScrolling)&&(tk().continuousVertical=!1),//using extensions? Wrong file!
R.forEach(function(e){tk()[e]}),tk().anchors.forEach(function(e){//case insensitive selectors (http://stackoverflow.com/a/19465187/1081396)
var t=[].slice.call(B("[name]")).filter(function(t){return em(t,"name")&&em(t,"name").toLowerCase()==e.toLowerCase()}),n=[].slice.call(B("[id]")).filter(function(t){return em(t,"id")&&em(t,"id").toLowerCase()==e.toLowerCase()});(n.length||t.length)&&(n.length,n.length||t.length)}))}function iZ(e,t){var n;if(tX=B("body")[0],tY=B("html")[0],tK=B("html, body"),W(tY,eK)){iQ();return}return n="string"==typeof e?B(e)[0]:e,tE.touchWrapper=n,tL=Object.assign({},t$=F({},tE,t)),tC="string"==typeof e?B(e)[0]:e,eH.emit(ez.onInitialise),iQ(),H.getFullpageData=function(){return{options:tk()}},H.version="4.0.20",H.test=Object.assign(H.test,{top:"0px",translate3d:"translate3d(0px, 0px, 0px)",translate3dH:function(){for(var e=[],t=0;t<B(tk().sectionSelector,tC).length;t++)e.push("translate3d(0px, 0px, 0px)");return e}(),left:function(){for(var e=[],t=0;t<B(tk().sectionSelector,tC).length;t++)e.push(0);return e}(),options:tk(),setAutoScrolling:null}),//mean to be used on their own by developers
H.shared=Object.assign(H.shared,{afterRenderActions:null,isNormalScrollElement:!1}),O.fullpage_api=H,tC&&(eH.emit(ez.beforeInit),nM(),nO(),tk().scrollBar=tk().scrollBar||tk().hybrid,tD(),/**
    * Works over the DOM structure to set it up for the current fullpage getOptions().
    */function(){V(eP(tC,"body"),{height:"100%",position:"relative"}),en(tC,eG),en(tY,eK),eq({windowsHeight:G()}),ei(tC,eY),nH();for(var e=eR.sectionsIncludingHidden,t=0;t<e.length;t++){var n=e[t],i=n.allSlidesItems,r=em(n.item,"style");r&&n.item.setAttribute("data-fp-styles",r),nS(n),/**
    * Sets the data-anchor attributes to the menu elements and activates the current one.
    */function(e){var t=e.index();void 0!==tk().anchors[t]&&e.isActive&&nu(tk().anchors[t],t),tk().menu&&tk().css3&&null!=ec(B(tk().menu)[0],eU)&&B(tk().menu).forEach(function(e){tX.appendChild(e)})}(n),i.length>0&&nR(n)}//fixed elements need to be moved out of the plugin container due to problems with CSS3.
tk().fixedElements&&tk().css3&&B(tk().fixedElements).forEach(function(e){tX.appendChild(e)}),tk().navigation&&nl(),B('iframe[src*="youtube.com/embed/"]',tC).forEach(function(e){/**
    * Adds a new parameter and its value to the `src` of a given element
    */(function(e,t){var n=em(e,"src");e.setAttribute("src",n+(/\?/.test(n)?"&":"?")+t)})(e,"enablejsapi=1")}),tk().scrollOverflow&&nE.makeScrollable()}(),iY(!0),iA(!0),no(tk().autoScrolling,"internal"),nv(),t6(),"complete"===M.readyState&&iK(),ey("load",iK),iX(),nM(),nO(),eH.emit(ez.bindEvents)),O.fullpage_api}return eH.on(ez.onDestroy,function(){clearTimeout(_),clearTimeout(D)}),eH.on(ez.bindEvents,function(){ey("scroll",iU),M.body.addEventListener("scroll",iU),eH.on(ez.onScrollPageAndSlide,function(e){ic(e.sectionAnchor,e.slideAnchor)}),eH.on(ez.onMenuClick,function(e){iu(e.anchor,void 0)}),eH.on(ez.onScrollOverflowScrolled,function(e){("down"===e.direction?nK:nQ)()}),eH.on(ez.scrollPage,function(e){nh(e.destination)})}),eH.on(ez.onDestroy,function(){ew("scroll",iU)}),H.getActiveSlide=/**
    * Gets the active slide.
    */function(){return tJ(eR.activeSection.activeSlide)},H.getScrollX=function(){return eR.scrollX},eH.on(ez.bindEvents,function(){eH.on(ez.onDestroy,nL),eH.on(ez.landscapeScroll,function(e){nA(e.slides,e.destination)}),eH.on(ez.moveSlideRight,function(e){is(e.section)}),eH.on(ez.moveSlideLeft,function(e){io(e.section)})}),eH.on(ez.bindEvents,function(){var e=tk().credits.position||"right",t=["left","right"].indexOf(e)>-1?"".concat(e,": 0;"):"",n='\n        <div class="fp-watermark" style="'.concat(t,'">\n            <a href="https://alvarotrigo.com/fullPage/" \n                rel="nofollow noopener" \n                target="_blank" \n                style="text-decoration:none; color: #000;">\n                    ').concat(tk().credits.label||"Made with fullPage.js","\n            </a>\n        </div>\n    "),i=eD(eR.sections),r=!eR.isValid||tk().credits.enabled;i&&i.item&&r&&i.item.insertAdjacentHTML("beforeend",n)}),function(){eH.on(ez.onInitialise,function(){var t,a,l,c;eq({isValid:(tk().licenseKey,a=function(t){var n=parseInt("514").toString(16);if(!t||t.length<29||4===t.split(e[0]).length)return null;var i=["Each","for"][r()]().join(""),a=t[["split"]]("-"),l=[];a[i](function(e,t){if(t<4){var i,s,a=(i=e[e.length-1],s=["NaN","is"][r()]().join(""),window[s](i)?o(i):i-eZ.length);l.push(a);var c=o(e[a]);1===t&&(c=c.toString().padStart(2,"0")),n+=c,0!==t&&1!==t||(n+="-")}});var c=0,u="";return t.split("-").forEach(function(e,t){if(t<4){for(var n=0,i=0;i<4;i++)i!==l[t]&&(n+=Math.abs(o(e[i])),isNaN(e[i])||c++);var r=s(n);u+=r}}),u+=s(c),{v:new Date(n+"T00:00"),o:n.split("-")[2]===8*(eZ.length-2)+"",l:u}}(t=tk().licenseKey),c=i[r()]().join(""),l=t&&0===c.indexOf(t)&&t.length===c.length,(a||l)&&(a&&n<=a.v&&a.l===t.split(e[0])[4]||l||a.o)||!1)})});var e=["-"],t="2023-4-29".split("-"),n=new Date(t[0],t[1],t[2]),i=["se","licen","-","v3","l","gp"];function r(){return"reverse"}function o(e){return e?isNaN(e)?e.charCodeAt(0)-72:e:""}function s(e){var t=72+e;return t>90&&t<97&&(t+=15),String.fromCharCode(t).toUpperCase()}}(),//@ts-check
H.setKeyboardScrolling=iV,H.shared.afterRenderActions=iX,H.setAllowScrolling=iY,H.destroy=/*
    * Destroys fullpage.js plugin events and optinally its html markup and styles
    */function(e){no(!1,"internal"),iY(!0),iA(!1),iV(!1),en(tC,eY),eH.emit(ez.onDestroy),e&&(//reseting the `top` or `translate` properties to 0
tU(0),B("img[data-src], source[data-src], audio[data-src], iframe[data-src]",tC).forEach(function(e){eM(e,"src")}),B("img[data-srcset]").forEach(function(e){eM(e,"srcset")}),eA(B(te+", "+tg+", "+tb)),V(tP(eR.sections),{height:"","background-color":"",padding:""}),V(tP(eR.slides),{width:""}),V(tC,{height:"",position:"","-ms-touch-action":"","touch-action":""}),V(tK,{overflow:"",height:""}),ei(tY,eK),ei(tX,eV+" fp-scrollable"),tX.className.split(/\s+/).forEach(function(e){0===e.indexOf(eQ)&&ei(tX,e)}),tP(eR.panels).forEach(function(e){tk().scrollOverflow&&nE.destroyWrapper(e),ei(e,tu+" "+eZ+" "+e0+" "+th);var t=em(e,"data-fp-styles");t&&e.setAttribute("style",t),W(e,e2)&&!tA&&e.removeAttribute("data-anchor")}),en(tC,eX),[".fp-tableCell",tc,ta].forEach(function(e){B(e,tC).forEach(function(e){//unwrap not being use in case there's no child element inside and its just text
el(e)})}),V(tC,{"-webkit-transition":"none",transition:"none"}),ei(tC,eG),O.scrollTo(0,0),[e2,ti,tl].forEach(function(e){ei(B("."+e),e)}))},// @ts-ignore
O.fp_easings=F(O.fp_easings,{easeInOutCubic:function(e,t,n,i){return(e/=i/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t}}),O.jQuery&&(h=O.jQuery)&&iZ&&(h.fn.fullpage=function(e){e=h.extend({},e,{$:h}),new iZ(this[0],e),Object.keys(H).forEach(function(e){tk().$.fn.fullpage[e]=H[e]})}),iZ}();const m={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function v(){let e="undefined"!=typeof document?document:{};return g(e,m),e}const y={document:m,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function b(){let e="undefined"!=typeof window?window:{};return g(e,y),e}class w extends Array{constructor(e){"number"==typeof e?super(e):(super(...e||[]),/**
 * Dom7 4.0.6
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * https://framework7.io/docs/dom7.html
 *
 * Copyright 2023, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: February 2, 2023
 *//* eslint-disable no-proto */function(e){let t=e.__proto__;Object.defineProperty(e,"__proto__",{get:()=>t,set(e){t.__proto__=e}})}(this))}}function S(e=[]){let t=[];return e.forEach(e=>{Array.isArray(e)?t.push(...S(e)):t.push(e)}),t}function x(e,t){return Array.prototype.filter.call(e,t)}function T(e,t){let n=b(),i=v(),r=[];if(!t&&e instanceof w)return e;if(!e)return new w(r);if("string"==typeof e){let n=e.trim();if(n.indexOf("<")>=0&&n.indexOf(">")>=0){let e="div";0===n.indexOf("<li")&&(e="ul"),0===n.indexOf("<tr")&&(e="tbody"),(0===n.indexOf("<td")||0===n.indexOf("<th"))&&(e="tr"),0===n.indexOf("<tbody")&&(e="table"),0===n.indexOf("<option")&&(e="select");let t=i.createElement(e);t.innerHTML=n;for(let e=0;e<t.childNodes.length;e+=1)r.push(t.childNodes[e])}else r=// eslint-disable-next-line
function(e,t){if("string"!=typeof e)return[e];let n=[],i=t.querySelectorAll(e);for(let e=0;e<i.length;e+=1)n.push(i[e]);return n}(e.trim(),t||i);// arr = qsa(selector, document);
}else if(e.nodeType||e===n||e===i)r.push(e);else if(Array.isArray(e)){if(e instanceof w)return e;r=e}return new w(function(e){let t=[];for(let n=0;n<e.length;n+=1)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(r))}T.fn=w.prototype;const E="resize scroll".split(" ");function C(e){return function(...t){if(void 0===t[0]){for(let t=0;t<this.length;t+=1)0>E.indexOf(e)&&(e in this[t]?this[t][e]():T(this[t]).trigger(e));return this}return this.on(e,...t)}}C("click"),C("blur"),C("focus"),C("focusin"),C("focusout"),C("keyup"),C("keydown"),C("keypress"),C("submit"),C("change"),C("mousedown"),C("mousemove"),C("mouseup"),C("mouseenter"),C("mouseleave"),C("mouseout"),C("mouseover"),C("touchstart"),C("touchend"),C("touchmove"),C("resize"),C("scroll");const A={addClass:// eslint-disable-next-line
function(...e){let t=S(e.map(e=>e.split(" ")));return this.forEach(e=>{e.classList.add(...t)}),this},removeClass:function(...e){let t=S(e.map(e=>e.split(" ")));return this.forEach(e=>{e.classList.remove(...t)}),this},hasClass:function(...e){let t=S(e.map(e=>e.split(" ")));return x(this,e=>t.filter(t=>e.classList.contains(t)).length>0).length>0},toggleClass:function(...e){let t=S(e.map(e=>e.split(" ")));this.forEach(e=>{t.forEach(t=>{e.classList.toggle(t)})})},attr:function(e,t){if(1==arguments.length&&"string"==typeof e)return(// Get attr
this[0]?this[0].getAttribute(e):void 0);// Set attrs
for(let n=0;n<this.length;n+=1)if(2==arguments.length)this[n].setAttribute(e,t);else for(let t in e)this[n][t]=e[t],this[n].setAttribute(t,e[t]);return this},removeAttr:function(e){for(let t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},transform:function(e){for(let t=0;t<this.length;t+=1)this[t].style.transform=e;return this},transition:function(e){for(let t=0;t<this.length;t+=1)this[t].style.transitionDuration="string"!=typeof e?`${e}ms`:e;return this},on:function(...e){let t,[n,i,r,o]=e;function s(e){let t=e.target;if(!t)return;let n=e.target.dom7EventData||[];if(0>n.indexOf(e)&&n.unshift(e),T(t).is(i))r.apply(t,n);else{let e=T(t).parents();// eslint-disable-line
for(let t=0;t<e.length;t+=1)T(e[t]).is(i)&&r.apply(e[t],n)}}function a(e){let t=e&&e.target&&e.target.dom7EventData||[];0>t.indexOf(e)&&t.unshift(e),r.apply(this,t)}"function"==typeof e[1]&&([n,r,o]=e,i=void 0),o||(o=!1);let l=n.split(" ");for(let e=0;e<this.length;e+=1){let n=this[e];if(i)for(t=0;t<l.length;t+=1){let e=l[t];n.dom7LiveListeners||(n.dom7LiveListeners={}),n.dom7LiveListeners[e]||(n.dom7LiveListeners[e]=[]),n.dom7LiveListeners[e].push({listener:r,proxyListener:s}),n.addEventListener(e,s,o)}else for(t=0;t<l.length;t+=1){let e=l[t];n.dom7Listeners||(n.dom7Listeners={}),n.dom7Listeners[e]||(n.dom7Listeners[e]=[]),n.dom7Listeners[e].push({listener:r,proxyListener:a}),n.addEventListener(e,a,o)}}return this},off:function(...e){let[t,n,i,r]=e;"function"==typeof e[1]&&([t,i,r]=e,n=void 0),r||(r=!1);let o=t.split(" ");for(let e=0;e<o.length;e+=1){let t=o[e];for(let e=0;e<this.length;e+=1){let o;let s=this[e];if(!n&&s.dom7Listeners?o=s.dom7Listeners[t]:n&&s.dom7LiveListeners&&(o=s.dom7LiveListeners[t]),o&&o.length)for(let e=o.length-1;e>=0;e-=1){let n=o[e];i&&n.listener===i?(s.removeEventListener(t,n.proxyListener,r),o.splice(e,1)):i&&n.listener&&n.listener.dom7proxy&&n.listener.dom7proxy===i?(s.removeEventListener(t,n.proxyListener,r),o.splice(e,1)):i||(s.removeEventListener(t,n.proxyListener,r),o.splice(e,1))}}}return this},trigger:function(...e){let t=b(),n=e[0].split(" "),i=e[1];for(let r=0;r<n.length;r+=1){let o=n[r];for(let n=0;n<this.length;n+=1){let r=this[n];if(t.CustomEvent){let n=new t.CustomEvent(o,{detail:i,bubbles:!0,cancelable:!0});r.dom7EventData=e.filter((e,t)=>t>0),r.dispatchEvent(n),r.dom7EventData=[],delete r.dom7EventData}}}return this},transitionEnd:function(e){let t=this;return e&&t.on("transitionend",function n(i){i.target===this&&(e.call(this,i),t.off("transitionend",n))}),this},outerWidth:function(e){if(this.length>0){if(e){let e=this.styles();return this[0].offsetWidth+parseFloat(e.getPropertyValue("margin-right"))+parseFloat(e.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(this.length>0){if(e){let e=this.styles();return this[0].offsetHeight+parseFloat(e.getPropertyValue("margin-top"))+parseFloat(e.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},styles:function(){let e=b();return this[0]?e.getComputedStyle(this[0],null):{}},offset:function(){if(this.length>0){let e=b(),t=v(),n=this[0],i=n.getBoundingClientRect(),r=t.body,o=n.clientTop||r.clientTop||0,s=n.clientLeft||r.clientLeft||0,a=n===e?e.scrollY:n.scrollTop,l=n===e?e.scrollX:n.scrollLeft;return{top:i.top+a-o,left:i.left+l-s}}return null},css:function(e,t){let n;let i=b();if(1==arguments.length){if("string"==typeof e)// .css('width')
{if(this[0])return i.getComputedStyle(this[0],null).getPropertyValue(e)}else{// .css({ width: '100px' })
for(n=0;n<this.length;n+=1)for(let t in e)this[n].style[t]=e[t];return this}}if(2==arguments.length&&"string"==typeof e)// .css('width', '100px')
for(n=0;n<this.length;n+=1)this[n].style[e]=t;return this},each:function(e){return e&&this.forEach((t,n)=>{e.apply(t,[t,n])}),this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:null;for(let t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(let t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(e){let t,n;let i=b(),r=v(),o=this[0];if(!o||void 0===e)return!1;if("string"==typeof e){if(o.matches)return o.matches(e);if(o.webkitMatchesSelector)return o.webkitMatchesSelector(e);if(o.msMatchesSelector)return o.msMatchesSelector(e);for(n=0,t=T(e);n<t.length;n+=1)if(t[n]===o)return!0;return!1}if(e===r)return o===r;if(e===i)return o===i;if(e.nodeType||e instanceof w){for(n=0,t=e.nodeType?[e]:e;n<t.length;n+=1)if(t[n]===o)return!0}return!1},index:function(){let e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;let t=this.length;if(e>t-1)return T([]);if(e<0){let n=t+e;return n<0?T([]):T([this[n]])}return T([this[e]])},append:function(...e){let t;let n=v();for(let i=0;i<e.length;i+=1){t=e[i];for(let e=0;e<this.length;e+=1)if("string"==typeof t){let i=n.createElement("div");for(i.innerHTML=t;i.firstChild;)this[e].appendChild(i.firstChild)}else if(t instanceof w)for(let n=0;n<t.length;n+=1)this[e].appendChild(t[n]);else this[e].appendChild(t)}return this},prepend:function(e){let t,n;let i=v();for(t=0;t<this.length;t+=1)if("string"==typeof e){let r=i.createElement("div");for(r.innerHTML=e,n=r.childNodes.length-1;n>=0;n-=1)this[t].insertBefore(r.childNodes[n],this[t].childNodes[0])}else if(e instanceof w)for(n=0;n<e.length;n+=1)this[t].insertBefore(e[n],this[t].childNodes[0]);else this[t].insertBefore(e,this[t].childNodes[0]);return this},next:function(e){if(this.length>0){if(e)return this[0].nextElementSibling&&T(this[0].nextElementSibling).is(e)?T([this[0].nextElementSibling]):T([]);if(this[0].nextElementSibling)return T([this[0].nextElementSibling])}return T([])},nextAll:function(e){let t=[],n=this[0];if(!n)return T([]);for(;n.nextElementSibling;){let i=n.nextElementSibling;// eslint-disable-line
e?T(i).is(e)&&t.push(i):t.push(i),n=i}return T(t)},prev:function(e){if(this.length>0){let t=this[0];if(e)return t.previousElementSibling&&T(t.previousElementSibling).is(e)?T([t.previousElementSibling]):T([]);if(t.previousElementSibling)return T([t.previousElementSibling])}return T([])},prevAll:function(e){let t=[],n=this[0];if(!n)return T([]);for(;n.previousElementSibling;){let i=n.previousElementSibling;// eslint-disable-line
e?T(i).is(e)&&t.push(i):t.push(i),n=i}return T(t)},parent:function(e){let t=[];// eslint-disable-line
for(let n=0;n<this.length;n+=1)null!==this[n].parentNode&&(e?T(this[n].parentNode).is(e)&&t.push(this[n].parentNode):t.push(this[n].parentNode));return T(t)},parents:function(e){let t=[];// eslint-disable-line
for(let n=0;n<this.length;n+=1){let i=this[n].parentNode;// eslint-disable-line
for(;i;)e?T(i).is(e)&&t.push(i):t.push(i),i=i.parentNode}return T(t)},closest:function(e){let t=this;// eslint-disable-line
return void 0===e?T([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){let t=[];for(let n=0;n<this.length;n+=1){let i=this[n].querySelectorAll(e);for(let e=0;e<i.length;e+=1)t.push(i[e])}return T(t)},children:function(e){let t=[];// eslint-disable-line
for(let n=0;n<this.length;n+=1){let i=this[n].children;for(let n=0;n<i.length;n+=1)(!e||T(i[n]).is(e))&&t.push(i[n])}return T(t)},filter:function(e){let t=x(this,e);return T(t)},remove:function(){for(let e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this}};function L(e,t=0){return setTimeout(e,t)}function k(){return Date.now()}function _(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function D(...e){let t=Object(e[0]),n=["__proto__","constructor","prototype"];for(let i=1;i<e.length;i+=1){let r=e[i];if(null!=r&&// eslint-disable-next-line
("undefined"!=typeof window&&void 0!==window.HTMLElement?!(r instanceof HTMLElement):!r||1!==r.nodeType&&11!==r.nodeType)){let e=Object.keys(Object(r)).filter(e=>0>n.indexOf(e));for(let n=0,i=e.length;n<i;n+=1){let i=e[n],o=Object.getOwnPropertyDescriptor(r,i);void 0!==o&&o.enumerable&&(_(t[i])&&_(r[i])?r[i].__swiper__?t[i]=r[i]:D(t[i],r[i]):!_(t[i])&&_(r[i])?(t[i]={},r[i].__swiper__?t[i]=r[i]:D(t[i],r[i])):t[i]=r[i])}}}return t}function O(e,t,n){e.style.setProperty(t,n)}function M({swiper:e,targetPosition:t,side:n}){let i;let r=b(),o=-e.translate,s=null,a=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);let l=t>o?"next":"prev",c=(e,t)=>"next"===l&&e>=t||"prev"===l&&e<=t,u=()=>{i=new Date().getTime(),null===s&&(s=i);let l=Math.max(Math.min((i-s)/a,1),0),d=o+(.5-Math.cos(l*Math.PI)/2)*(t-o);if(c(d,t)&&(d=t),e.wrapperEl.scrollTo({[n]:d}),c(d,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:d})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(u)};u()}function P(){return e||(e=function(){let e=b(),t=v();return{smoothScroll:t.documentElement&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch),passiveListener:function(){let t=!1;try{let n=Object.defineProperty({},"passive",{// eslint-disable-next-line
get(){t=!0}});e.addEventListener("testPassiveListener",null,n)}catch(e){}return t}(),gestures:"ongesturestart"in e}}()),e}function j({swiper:e,runCallbacks:t,direction:n,step:i}){let{activeIndex:r,previousIndex:o}=e,s=n;if(s||(s=r>o?"next":r<o?"prev":"reset"),e.emit(`transition${i}`),t&&r!==o){if("reset"===s){e.emit(`slideResetTransition${i}`);return}e.emit(`slideChangeTransition${i}`),"next"===s?e.emit(`slideNextTransition${i}`):e.emit(`slidePrevTransition${i}`)}}function I(e){let t=v(),n=b(),i=this.touchEventsData,{params:r,touches:o,enabled:s}=this;if(!s||this.animating&&r.preventInteractionOnTransition)return;!this.animating&&r.cssMode&&r.loop&&this.loopFix();let a=e;a.originalEvent&&(a=a.originalEvent);let l=T(a.target);if("wrapper"===r.touchEventsTarget&&!l.closest(this.wrapperEl).length||(i.isTouchEvent="touchstart"===a.type,!i.isTouchEvent&&"which"in a&&3===a.which||!i.isTouchEvent&&"button"in a&&a.button>0||i.isTouched&&i.isMoved))return;let c=!!r.noSwipingClass&&""!==r.noSwipingClass;c&&a.target&&a.target.shadowRoot&&e.path&&e.path[0]&&(l=T(e.path[0]));let u=r.noSwipingSelector?r.noSwipingSelector:`.${r.noSwipingClass}`,d=!!(a.target&&a.target.shadowRoot);if(r.noSwiping&&(d?function(e,t=this){return function t(n){if(!n||n===v()||n===b())return null;n.assignedSlot&&(n=n.assignedSlot);let i=n.closest(e);return i||t(n.getRootNode().host)}(t)}(u,a.target):l.closest(u)[0])){this.allowClick=!0;return}if(r.swipeHandler&&!l.closest(r.swipeHandler)[0])return;o.currentX="touchstart"===a.type?a.targetTouches[0].pageX:a.pageX,o.currentY="touchstart"===a.type?a.targetTouches[0].pageY:a.pageY;let p=o.currentX,h=o.currentY,f=r.edgeSwipeDetection||r.iOSEdgeSwipeDetection,g=r.edgeSwipeThreshold||r.iOSEdgeSwipeThreshold;if(f&&(p<=g||p>=n.innerWidth-g)){if("prevent"!==f)return;e.preventDefault()}if(Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=p,o.startY=h,i.touchStartTime=k(),this.allowClick=!0,this.updateSize(),this.swipeDirection=void 0,r.threshold>0&&(i.allowThresholdMove=!1),"touchstart"!==a.type){let e=!0;l.is(i.focusableElements)&&(e=!1),t.activeElement&&T(t.activeElement).is(i.focusableElements)&&t.activeElement!==l[0]&&t.activeElement.blur();let n=e&&this.allowTouchMove&&r.touchStartPreventDefault;(r.touchStartForcePreventDefault||n)&&!l[0].isContentEditable&&a.preventDefault()}this.emit("touchStart",a)}function N(e){let t=v(),n=this.touchEventsData,{params:i,touches:r,rtlTranslate:o,enabled:s}=this;if(!s)return;let a=e;if(a.originalEvent&&(a=a.originalEvent),!n.isTouched){n.startMoving&&n.isScrolling&&this.emit("touchMoveOpposite",a);return}if(n.isTouchEvent&&"touchmove"!==a.type)return;let l="touchmove"===a.type&&a.targetTouches&&(a.targetTouches[0]||a.changedTouches[0]),c="touchmove"===a.type?l.pageX:a.pageX,u="touchmove"===a.type?l.pageY:a.pageY;if(a.preventedByNestedSwiper){r.startX=c,r.startY=u;return}if(!this.allowTouchMove){// isMoved = true;
this.allowClick=!1,n.isTouched&&(Object.assign(r,{startX:c,startY:u,currentX:c,currentY:u}),n.touchStartTime=k());return}if(n.isTouchEvent&&i.touchReleaseOnEdges&&!i.loop){if(this.isVertical()){if(u<r.startY&&this.translate<=this.maxTranslate()||u>r.startY&&this.translate>=this.minTranslate()){n.isTouched=!1,n.isMoved=!1;return}}else if(c<r.startX&&this.translate<=this.maxTranslate()||c>r.startX&&this.translate>=this.minTranslate())return}if(n.isTouchEvent&&t.activeElement&&a.target===t.activeElement&&T(a.target).is(n.focusableElements)){n.isMoved=!0,this.allowClick=!1;return}if(n.allowTouchCallbacks&&this.emit("touchMove",a),a.targetTouches&&a.targetTouches.length>1)return;r.currentX=c,r.currentY=u;let d=r.currentX-r.startX,p=r.currentY-r.startY;if(this.params.threshold&&Math.sqrt(d**2+p**2)<this.params.threshold)return;if(void 0===n.isScrolling){let e;this.isHorizontal()&&r.currentY===r.startY||this.isVertical()&&r.currentX===r.startX?n.isScrolling=!1:d*d+p*p>=25&&(e=180*Math.atan2(Math.abs(p),Math.abs(d))/Math.PI,n.isScrolling=this.isHorizontal()?e>i.touchAngle:90-e>i.touchAngle)}if(n.isScrolling&&this.emit("touchMoveOpposite",a),void 0===n.startMoving&&(r.currentX!==r.startX||r.currentY!==r.startY)&&(n.startMoving=!0),n.isScrolling){n.isTouched=!1;return}if(!n.startMoving)return;this.allowClick=!1,!i.cssMode&&a.cancelable&&a.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&a.stopPropagation(),n.isMoved||(i.loop&&!i.cssMode&&this.loopFix(),n.startTranslate=this.getTranslate(),this.setTransition(0),this.animating&&this.$wrapperEl.trigger("webkitTransitionEnd transitionend"),n.allowMomentumBounce=!1,i.grabCursor&&(!0===this.allowSlideNext||!0===this.allowSlidePrev)&&this.setGrabCursor(!0),this.emit("sliderFirstMove",a)),this.emit("sliderMove",a),n.isMoved=!0;let h=this.isHorizontal()?d:p;r.diff=h,h*=i.touchRatio,o&&(h=-h),this.swipeDirection=h>0?"prev":"next",n.currentTranslate=h+n.startTranslate;let f=!0,g=i.resistanceRatio;// Threshold
if(i.touchReleaseOnEdges&&(g=0),h>0&&n.currentTranslate>this.minTranslate()?(f=!1,i.resistance&&(n.currentTranslate=this.minTranslate()-1+(-this.minTranslate()+n.startTranslate+h)**g)):h<0&&n.currentTranslate<this.maxTranslate()&&(f=!1,i.resistance&&(n.currentTranslate=this.maxTranslate()+1-(this.maxTranslate()-n.startTranslate-h)**g)),f&&(a.preventedByNestedSwiper=!0),!this.allowSlideNext&&"next"===this.swipeDirection&&n.currentTranslate<n.startTranslate&&(n.currentTranslate=n.startTranslate),!this.allowSlidePrev&&"prev"===this.swipeDirection&&n.currentTranslate>n.startTranslate&&(n.currentTranslate=n.startTranslate),this.allowSlidePrev||this.allowSlideNext||(n.currentTranslate=n.startTranslate),i.threshold>0){if(Math.abs(h)>i.threshold||n.allowThresholdMove){if(!n.allowThresholdMove){n.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,n.currentTranslate=n.startTranslate,r.diff=this.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY;return}}else{n.currentTranslate=n.startTranslate;return}}i.followFinger&&!i.cssMode&&((i.freeMode&&i.freeMode.enabled&&this.freeMode||i.watchSlidesProgress)&&(this.updateActiveIndex(),this.updateSlidesClasses()),this.params.freeMode&&i.freeMode.enabled&&this.freeMode&&this.freeMode.onTouchMove(),// Update progress
this.updateProgress(n.currentTranslate),this.setTranslate(n.currentTranslate))}function H(e){let t;let n=this,i=n.touchEventsData,{params:r,touches:o,rtlTranslate:s,slidesGrid:a,enabled:l}=n;if(!l)return;let c=e;if(c.originalEvent&&(c=c.originalEvent),i.allowTouchCallbacks&&n.emit("touchEnd",c),i.allowTouchCallbacks=!1,!i.isTouched){i.isMoved&&r.grabCursor&&n.setGrabCursor(!1),i.isMoved=!1,i.startMoving=!1;return}// Return Grab Cursor
r.grabCursor&&i.isMoved&&i.isTouched&&(!0===n.allowSlideNext||!0===n.allowSlidePrev)&&n.setGrabCursor(!1);// Time diff
let u=k(),d=u-i.touchStartTime;if(n.allowClick){let e=c.path||c.composedPath&&c.composedPath();n.updateClickedSlide(e&&e[0]||c.target),n.emit("tap click",c),d<300&&u-i.lastClickTime<300&&n.emit("doubleTap doubleClick",c)}if(i.lastClickTime=k(),L(()=>{n.destroyed||(n.allowClick=!0)}),!i.isTouched||!i.isMoved||!n.swipeDirection||0===o.diff||i.currentTranslate===i.startTranslate){i.isTouched=!1,i.isMoved=!1,i.startMoving=!1;return}if(i.isTouched=!1,i.isMoved=!1,i.startMoving=!1,t=r.followFinger?s?n.translate:-n.translate:-i.currentTranslate,r.cssMode)return;if(n.params.freeMode&&r.freeMode.enabled){n.freeMode.onTouchEnd({currentPos:t});return}// Find current slide
let p=0,h=n.slidesSizesGrid[0];for(let e=0;e<a.length;e+=e<r.slidesPerGroupSkip?1:r.slidesPerGroup){let n=e<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;void 0!==a[e+n]?t>=a[e]&&t<a[e+n]&&(p=e,h=a[e+n]-a[e]):t>=a[e]&&(p=e,h=a[a.length-1]-a[a.length-2])}// Find current slide size
let f=(t-a[p])/h,g=p<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;if(d>r.longSwipesMs){// Long touches
if(!r.longSwipes){n.slideTo(n.activeIndex);return}"next"===n.swipeDirection&&(f>=r.longSwipesRatio?n.slideTo(p+g):n.slideTo(p)),"prev"===n.swipeDirection&&(f>1-r.longSwipesRatio?n.slideTo(p+g):n.slideTo(p))}else{// Short swipes
if(!r.shortSwipes){n.slideTo(n.activeIndex);return}let e=n.navigation&&(c.target===n.navigation.nextEl||c.target===n.navigation.prevEl);e?c.target===n.navigation.nextEl?n.slideTo(p+g):n.slideTo(p):("next"===n.swipeDirection&&n.slideTo(p+g),"prev"===n.swipeDirection&&n.slideTo(p))}}function R(){let{params:e,el:t}=this;if(t&&0===t.offsetWidth)return;// Breakpoints
e.breakpoints&&this.setBreakpoint();// Save locks
let{allowSlideNext:n,allowSlidePrev:i,snapGrid:r}=this;// Disable locks on resize
this.allowSlideNext=!0,this.allowSlidePrev=!0,this.updateSize(),this.updateSlides(),this.updateSlidesClasses(),("auto"===e.slidesPerView||e.slidesPerView>1)&&this.isEnd&&!this.isBeginning&&!this.params.centeredSlides?this.slideTo(this.slides.length-1,0,!1,!0):this.slideTo(this.activeIndex,0,!1,!0),this.autoplay&&this.autoplay.running&&this.autoplay.paused&&this.autoplay.run(),// Return locks after resize
this.allowSlidePrev=i,this.allowSlideNext=n,this.params.watchOverflow&&r!==this.snapGrid&&this.checkOverflow()}function q(e){this.enabled&&!this.allowClick&&(this.params.preventClicks&&e.preventDefault(),this.params.preventClicksPropagation&&this.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))}function z(){let{wrapperEl:e,rtlTranslate:t,enabled:n}=this;if(!n)return;this.previousTranslate=this.translate,this.isHorizontal()?this.translate=-e.scrollLeft:this.translate=-e.scrollTop,-0===this.translate&&(this.translate=0),this.updateActiveIndex(),this.updateSlidesClasses();let i=this.maxTranslate()-this.minTranslate();(0===i?0:(this.translate-this.minTranslate())/i)!==this.progress&&this.updateProgress(t?-this.translate:this.translate),this.emit("setTranslate",this.translate,!1)}Object.keys(A).forEach(e=>{Object.defineProperty(T.fn,e,{value:A[e],writable:!0})});let B=!1;function F(){}const W=(e,t)=>{let n=v(),{params:i,touchEvents:r,el:o,wrapperEl:s,device:a,support:l}=e,c=!!i.nested,u="on"===t?"addEventListener":"removeEventListener";if(l.touch){let t="touchstart"===r.start&&!!l.passiveListener&&!!i.passiveListeners&&{passive:!0,capture:!1};o[u](r.start,e.onTouchStart,t),o[u](r.move,e.onTouchMove,l.passiveListener?{passive:!1,capture:c}:c),o[u](r.end,e.onTouchEnd,t),r.cancel&&o[u](r.cancel,e.onTouchEnd,t)}else o[u](r.start,e.onTouchStart,!1),n[u](r.move,e.onTouchMove,c),n[u](r.end,e.onTouchEnd,!1);// Prevent Links Clicks
(i.preventClicks||i.preventClicksPropagation)&&o[u]("click",e.onClick,!0),i.cssMode&&s[u]("scroll",e.onScroll),i.updateOnWindowResize?e[t](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",R,!0):e[t]("observerUpdate",R,!0)},G=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;var U={init:!0,direction:"horizontal",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",// Overrides
width:null,height:null,//
preventInteractionOnTransition:!1,// ssr
userAgent:null,url:null,// To support iOS's swipe-to-go-back gesture (when being used in-app).
edgeSwipeDetection:!1,edgeSwipeThreshold:20,// Autoheight
autoHeight:!1,// Set wrapper width
setWrapperSize:!1,// Virtual Translate
virtualTranslate:!1,// Effects
effect:"slide",// 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
// Breakpoints
breakpoints:void 0,breakpointsBase:"window",// Slides grid
spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,// in px
slidesOffsetAfter:0,// in px
normalizeSlideIndex:!0,centerInsufficientSlides:!1,// Disable swiper and hide navigation when container not overflow
watchOverflow:!0,// Round length
roundLengths:!1,// Touches
touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,// Unique Navigation Elements
uniqueNavElements:!0,// Resistance
resistance:!0,resistanceRatio:.85,// Progress
watchSlidesProgress:!1,// Cursor
grabCursor:!1,// Clicks
preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,// Images
preloadImages:!0,updateOnImagesReady:!0,// loop
loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,loopPreventsSlide:!0,// rewind
rewind:!1,// Swiping/no swiping
allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,// '.swipe-handler',
noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,// Passive Listeners
passiveListeners:!0,// NS
containerModifierClass:"swiper-",// NEW
slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",// Callbacks
runCallbacksOnInit:!0,// Internals
_emitClasses:!1};const V={eventsEmitter:{on(e,t,n){let i=this;if("function"!=typeof t)return i;let r=n?"unshift":"push";return e.split(" ").forEach(e=>{i.eventsListeners[e]||(i.eventsListeners[e]=[]),i.eventsListeners[e][r](t)}),i},once(e,t,n){let i=this;if("function"!=typeof t)return i;function r(...n){i.off(e,r),r.__emitterProxy&&delete r.__emitterProxy,t.apply(i,n)}return r.__emitterProxy=t,i.on(e,r,n)},onAny(e,t){return"function"!=typeof e||0>this.eventsAnyListeners.indexOf(e)&&this.eventsAnyListeners[t?"unshift":"push"](e),this},offAny(e){if(!this.eventsAnyListeners)return this;let t=this.eventsAnyListeners.indexOf(e);return t>=0&&this.eventsAnyListeners.splice(t,1),this},off(e,t){let n=this;return n.eventsListeners&&e.split(" ").forEach(e=>{void 0===t?n.eventsListeners[e]=[]:n.eventsListeners[e]&&n.eventsListeners[e].forEach((i,r)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[e].splice(r,1)})}),n},emit(...e){let t,n,i;let r=this;if(!r.eventsListeners)return r;"string"==typeof e[0]||Array.isArray(e[0])?(t=e[0],n=e.slice(1,e.length),i=r):(t=e[0].events,n=e[0].data,i=e[0].context||r),n.unshift(i);let o=Array.isArray(t)?t:t.split(" ");return o.forEach(e=>{r.eventsAnyListeners&&r.eventsAnyListeners.length&&r.eventsAnyListeners.forEach(t=>{t.apply(i,[e,...n])}),r.eventsListeners&&r.eventsListeners[e]&&r.eventsListeners[e].forEach(e=>{e.apply(i,n)})}),r}},update:{updateSize:function(){let e,t;let n=this.$el;e=void 0!==this.params.width&&null!==this.params.width?this.params.width:n[0].clientWidth,t=void 0!==this.params.height&&null!==this.params.height?this.params.height:n[0].clientHeight,0===e&&this.isHorizontal()||0===t&&this.isVertical()||(// Subtract paddings
e=e-parseInt(n.css("padding-left")||0,10)-parseInt(n.css("padding-right")||0,10),t=t-parseInt(n.css("padding-top")||0,10)-parseInt(n.css("padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(this,{width:e,height:t,size:this.isHorizontal()?e:t}))},updateSlides:function(){let e;let t=this;function n(e){return t.isHorizontal()?e:({width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"})[e]}function i(e,t){return parseFloat(e.getPropertyValue(n(t))||0)}let r=t.params,{$wrapperEl:o,size:s,rtlTranslate:a,wrongRTL:l}=t,c=t.virtual&&r.virtual.enabled,u=c?t.virtual.slides.length:t.slides.length,d=o.children(`.${t.params.slideClass}`),p=c?t.virtual.slides.length:d.length,h=[],f=[],g=[],m=r.slidesOffsetBefore;"function"==typeof m&&(m=r.slidesOffsetBefore.call(t));let v=r.slidesOffsetAfter;"function"==typeof v&&(v=r.slidesOffsetAfter.call(t));let y=t.snapGrid.length,b=t.slidesGrid.length,w=r.spaceBetween,S=-m,x=0,T=0;if(void 0===s)return;"string"==typeof w&&w.indexOf("%")>=0&&(w=parseFloat(w.replace("%",""))/100*s),t.virtualSize=-w,a?d.css({marginLeft:"",marginBottom:"",marginTop:""}):d.css({marginRight:"",marginBottom:"",marginTop:""}),r.centeredSlides&&r.cssMode&&(O(t.wrapperEl,"--swiper-centered-offset-before",""),O(t.wrapperEl,"--swiper-centered-offset-after",""));let E=r.grid&&r.grid.rows>1&&t.grid;E&&t.grid.initSlides(p);let C="auto"===r.slidesPerView&&r.breakpoints&&Object.keys(r.breakpoints).filter(e=>void 0!==r.breakpoints[e].slidesPerView).length>0;for(let o=0;o<p;o+=1){e=0;let a=d.eq(o);if(E&&t.grid.updateSlide(o,a,p,n),"none"!==a.css("display")){if("auto"===r.slidesPerView){C&&(d[o].style[n("width")]="");let s=getComputedStyle(a[0]),l=a[0].style.transform,c=a[0].style.webkitTransform;if(l&&(a[0].style.transform="none"),c&&(a[0].style.webkitTransform="none"),r.roundLengths)e=t.isHorizontal()?a.outerWidth(!0):a.outerHeight(!0);else{// eslint-disable-next-line
let t=i(s,"width"),n=i(s,"padding-left"),r=i(s,"padding-right"),o=i(s,"margin-left"),l=i(s,"margin-right"),c=s.getPropertyValue("box-sizing");if(c&&"border-box"===c)e=t+o+l;else{let{clientWidth:i,offsetWidth:s}=a[0];e=t+n+r+o+l+(s-i)}}l&&(a[0].style.transform=l),c&&(a[0].style.webkitTransform=c),r.roundLengths&&(e=Math.floor(e))}else e=(s-(r.slidesPerView-1)*w)/r.slidesPerView,r.roundLengths&&(e=Math.floor(e)),d[o]&&(d[o].style[n("width")]=`${e}px`);d[o]&&(d[o].swiperSlideSize=e),g.push(e),r.centeredSlides?(S=S+e/2+x/2+w,0===x&&0!==o&&(S=S-s/2-w),0===o&&(S=S-s/2-w),.001>Math.abs(S)&&(S=0),r.roundLengths&&(S=Math.floor(S)),T%r.slidesPerGroup==0&&h.push(S),f.push(S)):(r.roundLengths&&(S=Math.floor(S)),(T-Math.min(t.params.slidesPerGroupSkip,T))%t.params.slidesPerGroup==0&&h.push(S),f.push(S),S=S+e+w),t.virtualSize+=e+w,x=e,T+=1}// eslint-disable-line
}// Remove last grid elements depending on width
if(t.virtualSize=Math.max(t.virtualSize,s)+v,a&&l&&("slide"===r.effect||"coverflow"===r.effect)&&o.css({width:`${t.virtualSize+r.spaceBetween}px`}),r.setWrapperSize&&o.css({[n("width")]:`${t.virtualSize+r.spaceBetween}px`}),E&&t.grid.updateWrapperSize(e,h,n),!r.centeredSlides){let e=[];for(let n=0;n<h.length;n+=1){let i=h[n];r.roundLengths&&(i=Math.floor(i)),h[n]<=t.virtualSize-s&&e.push(i)}h=e,Math.floor(t.virtualSize-s)-Math.floor(h[h.length-1])>1&&h.push(t.virtualSize-s)}if(0===h.length&&(h=[0]),0!==r.spaceBetween){let e=t.isHorizontal()&&a?"marginLeft":n("marginRight");d.filter((e,t)=>!r.cssMode||t!==d.length-1).css({[e]:`${w}px`})}if(r.centeredSlides&&r.centeredSlidesBounds){let e=0;g.forEach(t=>{e+=t+(r.spaceBetween?r.spaceBetween:0)}),e-=r.spaceBetween;let t=e-s;h=h.map(e=>e<0?-m:e>t?t+v:e)}if(r.centerInsufficientSlides){let e=0;if(g.forEach(t=>{e+=t+(r.spaceBetween?r.spaceBetween:0)}),(e-=r.spaceBetween)<s){let t=(s-e)/2;h.forEach((e,n)=>{h[n]=e-t}),f.forEach((e,n)=>{f[n]=e+t})}}if(Object.assign(t,{slides:d,snapGrid:h,slidesGrid:f,slidesSizesGrid:g}),r.centeredSlides&&r.cssMode&&!r.centeredSlidesBounds){O(t.wrapperEl,"--swiper-centered-offset-before",`${-h[0]}px`),O(t.wrapperEl,"--swiper-centered-offset-after",`${t.size/2-g[g.length-1]/2}px`);let e=-t.snapGrid[0],n=-t.slidesGrid[0];t.snapGrid=t.snapGrid.map(t=>t+e),t.slidesGrid=t.slidesGrid.map(e=>e+n)}p!==u&&t.emit("slidesLengthChange"),h.length!==y&&(t.params.watchOverflow&&t.checkOverflow(),t.emit("snapGridLengthChange")),f.length!==b&&t.emit("slidesGridLengthChange"),r.watchSlidesProgress&&t.updateSlidesOffset()},updateAutoHeight:function(e){let t;let n=this,i=[],r=n.virtual&&n.params.virtual.enabled,o=0;"number"==typeof e?n.setTransition(e):!0===e&&n.setTransition(n.params.speed);let s=e=>r?n.slides.filter(t=>parseInt(t.getAttribute("data-swiper-slide-index"),10)===e)[0]:n.slides.eq(e)[0];// Find slides currently in view
if("auto"!==n.params.slidesPerView&&n.params.slidesPerView>1){if(n.params.centeredSlides)n.visibleSlides.each(e=>{i.push(e)});else for(t=0;t<Math.ceil(n.params.slidesPerView);t+=1){let e=n.activeIndex+t;if(e>n.slides.length&&!r)break;i.push(s(e))}}else i.push(s(n.activeIndex));// Find new height from highest slide in view
for(t=0;t<i.length;t+=1)if(void 0!==i[t]){let e=i[t].offsetHeight;o=e>o?e:o}// Update Height
(o||0===o)&&n.$wrapperEl.css("height",`${o}px`)},updateSlidesOffset:function(){let e=this.slides;for(let t=0;t<e.length;t+=1)e[t].swiperSlideOffset=this.isHorizontal()?e[t].offsetLeft:e[t].offsetTop},updateSlidesProgress:function(e=this&&this.translate||0){let t=this.params,{slides:n,rtlTranslate:i,snapGrid:r}=this;if(0===n.length)return;void 0===n[0].swiperSlideOffset&&this.updateSlidesOffset();let o=-e;i&&(o=e),n.removeClass(t.slideVisibleClass),this.visibleSlidesIndexes=[],this.visibleSlides=[];for(let e=0;e<n.length;e+=1){let s=n[e],a=s.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(a-=n[0].swiperSlideOffset);let l=(o+(t.centeredSlides?this.minTranslate():0)-a)/(s.swiperSlideSize+t.spaceBetween),c=(o-r[0]+(t.centeredSlides?this.minTranslate():0)-a)/(s.swiperSlideSize+t.spaceBetween),u=-(o-a),d=u+this.slidesSizesGrid[e],p=u>=0&&u<this.size-1||d>1&&d<=this.size||u<=0&&d>=this.size;p&&(this.visibleSlides.push(s),this.visibleSlidesIndexes.push(e),n.eq(e).addClass(t.slideVisibleClass)),s.progress=i?-l:l,s.originalProgress=i?-c:c}this.visibleSlides=T(this.visibleSlides)},updateProgress:function(e){if(void 0===e){let t=this.rtlTranslate?-1:1;// eslint-disable-next-line
e=this&&this.translate&&this.translate*t||0}let t=this.params,n=this.maxTranslate()-this.minTranslate(),{progress:i,isBeginning:r,isEnd:o}=this,s=r,a=o;0===n?(i=0,r=!0,o=!0):(r=(i=(e-this.minTranslate())/n)<=0,o=i>=1),Object.assign(this,{progress:i,isBeginning:r,isEnd:o}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&this.updateSlidesProgress(e),r&&!s&&this.emit("reachBeginning toEdge"),o&&!a&&this.emit("reachEnd toEdge"),(s&&!r||a&&!o)&&this.emit("fromEdge"),this.emit("progress",i)},updateSlidesClasses:function(){let e;let{slides:t,params:n,$wrapperEl:i,activeIndex:r,realIndex:o}=this,s=this.virtual&&n.virtual.enabled;t.removeClass(`${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`),// Active classes
(e=s?this.$wrapperEl.find(`.${n.slideClass}[data-swiper-slide-index="${r}"]`):t.eq(r)).addClass(n.slideActiveClass),n.loop&&(e.hasClass(n.slideDuplicateClass)?i.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${o}"]`).addClass(n.slideDuplicateActiveClass):i.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${o}"]`).addClass(n.slideDuplicateActiveClass));let a=e.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);n.loop&&0===a.length&&(a=t.eq(0)).addClass(n.slideNextClass);let l=e.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);n.loop&&0===l.length&&(l=t.eq(-1)).addClass(n.slidePrevClass),n.loop&&(a.hasClass(n.slideDuplicateClass)?i.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${a.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass):i.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${a.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass),l.hasClass(n.slideDuplicateClass)?i.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass):i.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass)),this.emitSlidesClasses()},updateActiveIndex:function(e){let t;let n=this.rtlTranslate?this.translate:-this.translate,{slidesGrid:i,snapGrid:r,params:o,activeIndex:s,realIndex:a,snapIndex:l}=this,c=e;if(void 0===c){for(let e=0;e<i.length;e+=1)void 0!==i[e+1]?n>=i[e]&&n<i[e+1]-(i[e+1]-i[e])/2?c=e:n>=i[e]&&n<i[e+1]&&(c=e+1):n>=i[e]&&(c=e);// Normalize slideIndex
o.normalizeSlideIndex&&(c<0||void 0===c)&&(c=0)}if(r.indexOf(n)>=0)t=r.indexOf(n);else{let e=Math.min(o.slidesPerGroupSkip,c);t=e+Math.floor((c-e)/o.slidesPerGroup)}if(t>=r.length&&(t=r.length-1),c===s){t!==l&&(this.snapIndex=t,this.emit("snapIndexChange"));return}// Get real index
let u=parseInt(this.slides.eq(c).attr("data-swiper-slide-index")||c,10);Object.assign(this,{snapIndex:t,realIndex:u,previousIndex:s,activeIndex:c}),this.emit("activeIndexChange"),this.emit("snapIndexChange"),a!==u&&this.emit("realIndexChange"),(this.initialized||this.params.runCallbacksOnInit)&&this.emit("slideChange")},updateClickedSlide:function(e){let t;let n=this.params,i=T(e).closest(`.${n.slideClass}`)[0],r=!1;if(i){for(let e=0;e<this.slides.length;e+=1)if(this.slides[e]===i){r=!0,t=e;break}}if(i&&r)this.clickedSlide=i,this.virtual&&this.params.virtual.enabled?this.clickedIndex=parseInt(T(i).attr("data-swiper-slide-index"),10):this.clickedIndex=t;else{this.clickedSlide=void 0,this.clickedIndex=void 0;return}n.slideToClickedSlide&&void 0!==this.clickedIndex&&this.clickedIndex!==this.activeIndex&&this.slideToClickedSlide()}},translate:{getTranslate:function(e=this.isHorizontal()?"x":"y"){let{params:t,rtlTranslate:n,translate:i,$wrapperEl:r}=this;if(t.virtualTranslate)return n?-i:i;if(t.cssMode)return i;let o=function(e,t="x"){let n,i,r;let o=b(),s=function(e){let t;let n=b();return n.getComputedStyle&&(t=n.getComputedStyle(e,null)),!t&&e.currentStyle&&(t=e.currentStyle),t||(t=e.style),t}(e,null);return o.WebKitCSSMatrix?((i=s.transform||s.webkitTransform).split(",").length>6&&(i=i.split(", ").map(e=>e.replace(",",".")).join(", ")),// Some old versions of Webkit choke when 'none' is passed; pass
// empty string instead in this case
r=new o.WebKitCSSMatrix("none"===i?"":i)):n=(r=s.MozTransform||s.OTransform||s.MsTransform||s.msTransform||s.transform||s.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(","),"x"===t&&(i=o.WebKitCSSMatrix?r.m41:16===n.length?parseFloat(n[12]):parseFloat(n[4])),"y"===t&&(i=o.WebKitCSSMatrix?r.m42:16===n.length?parseFloat(n[13]):parseFloat(n[5])),i||0}(r[0],e);return n&&(o=-o),o||0},setTranslate:function(e,t){let{rtlTranslate:n,params:i,$wrapperEl:r,wrapperEl:o,progress:s}=this,a=0,l=0;this.isHorizontal()?a=n?-e:e:l=e,i.roundLengths&&(a=Math.floor(a),l=Math.floor(l)),i.cssMode?o[this.isHorizontal()?"scrollLeft":"scrollTop"]=this.isHorizontal()?-a:-l:i.virtualTranslate||r.transform(`translate3d(${a}px, ${l}px, 0px)`),this.previousTranslate=this.translate,this.translate=this.isHorizontal()?a:l;let c=this.maxTranslate()-this.minTranslate();(0===c?0:(e-this.minTranslate())/c)!==s&&this.updateProgress(e),this.emit("setTranslate",this.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e=0,t=this.params.speed,n=!0,i=!0,r){let o;let s=this,{params:a,wrapperEl:l}=s;if(s.animating&&a.preventInteractionOnTransition)return!1;let c=s.minTranslate(),u=s.maxTranslate();if(o=i&&e>c?c:i&&e<u?u:e,s.updateProgress(o),a.cssMode){let e=s.isHorizontal();if(0===t)l[e?"scrollLeft":"scrollTop"]=-o;else{if(!s.support.smoothScroll)return M({swiper:s,targetPosition:-o,side:e?"left":"top"}),!0;l.scrollTo({[e?"left":"top"]:-o,behavior:"smooth"})}return!0}return 0===t?(s.setTransition(0),s.setTranslate(o),n&&(s.emit("beforeTransitionStart",t,r),s.emit("transitionEnd"))):(s.setTransition(t),s.setTranslate(o),n&&(s.emit("beforeTransitionStart",t,r),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(e){s&&!s.destroyed&&e.target===this&&(s.$wrapperEl[0].removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.$wrapperEl[0].removeEventListener("webkitTransitionEnd",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,n&&s.emit("transitionEnd"))}),s.$wrapperEl[0].addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.$wrapperEl[0].addEventListener("webkitTransitionEnd",s.onTranslateToWrapperTransitionEnd))),!0}},transition:{setTransition:function(e,t){this.params.cssMode||this.$wrapperEl.transition(e),this.emit("setTransition",e,t)},transitionStart:function(e=!0,t){let{params:n}=this;n.cssMode||(n.autoHeight&&this.updateAutoHeight(),j({swiper:this,runCallbacks:e,direction:t,step:"Start"}))},transitionEnd:function(e=!0,t){let{params:n}=this;this.animating=!1,n.cssMode||(this.setTransition(0),j({swiper:this,runCallbacks:e,direction:t,step:"End"}))}},slide:{slideTo:function(e=0,t=this.params.speed,n=!0,i,r){let o;if("number"!=typeof e&&"string"!=typeof e)throw Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);if("string"==typeof e){/**
     * The `index` argument converted from `string` to `number`.
     * @type {number}
     */let t=parseInt(e,10),n=isFinite(t);if(!n)throw Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);// Knowing that the converted `index` is a valid number,
// we can update the original argument's value.
e=t}let s=this,a=e;a<0&&(a=0);let{params:l,snapGrid:c,slidesGrid:u,previousIndex:d,activeIndex:p,rtlTranslate:h,wrapperEl:f,enabled:g}=s;if(s.animating&&l.preventInteractionOnTransition||!g&&!i&&!r)return!1;let m=Math.min(s.params.slidesPerGroupSkip,a),v=m+Math.floor((a-m)/s.params.slidesPerGroup);v>=c.length&&(v=c.length-1),(p||l.initialSlide||0)===(d||0)&&n&&s.emit("beforeSlideChangeStart");let y=-c[v];// Update progress
if(s.updateProgress(y),l.normalizeSlideIndex)for(let e=0;e<u.length;e+=1){let t=-Math.floor(100*y),n=Math.floor(100*u[e]),i=Math.floor(100*u[e+1]);void 0!==u[e+1]?t>=n&&t<i-(i-n)/2?a=e:t>=n&&t<i&&(a=e+1):t>=n&&(a=e)}// Directions locks
if(s.initialized&&a!==p&&(!s.allowSlideNext&&y<s.translate&&y<s.minTranslate()||!s.allowSlidePrev&&y>s.translate&&y>s.maxTranslate()&&(p||0)!==a))return!1;if(o=a>p?"next":a<p?"prev":"reset",h&&-y===s.translate||!h&&y===s.translate)return s.updateActiveIndex(a),l.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),"slide"!==l.effect&&s.setTranslate(y),"reset"!==o&&(s.transitionStart(n,o),s.transitionEnd(n,o)),!1;if(l.cssMode){let e=s.isHorizontal(),n=h?y:-y;if(0===t){let t=s.virtual&&s.params.virtual.enabled;t&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),f[e?"scrollLeft":"scrollTop"]=n,t&&requestAnimationFrame(()=>{s.wrapperEl.style.scrollSnapType="",s._swiperImmediateVirtual=!1})}else{if(!s.support.smoothScroll)return M({swiper:s,targetPosition:n,side:e?"left":"top"}),!0;f.scrollTo({[e?"left":"top"]:n,behavior:"smooth"})}return!0}return s.setTransition(t),s.setTranslate(y),s.updateActiveIndex(a),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,i),s.transitionStart(n,o),0===t?s.transitionEnd(n,o):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(e){s&&!s.destroyed&&e.target===this&&(s.$wrapperEl[0].removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.$wrapperEl[0].removeEventListener("webkitTransitionEnd",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(n,o))}),s.$wrapperEl[0].addEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.$wrapperEl[0].addEventListener("webkitTransitionEnd",s.onSlideToWrapperTransitionEnd)),!0},slideToLoop:function(e=0,t=this.params.speed,n=!0,i){let r=e;return this.params.loop&&(r+=this.loopedSlides),this.slideTo(r,t,n,i)},slideNext:/* eslint no-unused-vars: "off" */function(e=this.params.speed,t=!0,n){let{animating:i,enabled:r,params:o}=this;if(!r)return this;let s=o.slidesPerGroup;"auto"===o.slidesPerView&&1===o.slidesPerGroup&&o.slidesPerGroupAuto&&(s=Math.max(this.slidesPerViewDynamic("current",!0),1));let a=this.activeIndex<o.slidesPerGroupSkip?1:s;if(o.loop){if(i&&o.loopPreventsSlide)return!1;this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft}return o.rewind&&this.isEnd?this.slideTo(0,e,t,n):this.slideTo(this.activeIndex+a,e,t,n)},slidePrev:/* eslint no-unused-vars: "off" */function(e=this.params.speed,t=!0,n){let{params:i,animating:r,snapGrid:o,slidesGrid:s,rtlTranslate:a,enabled:l}=this;if(!l)return this;if(i.loop){if(r&&i.loopPreventsSlide)return!1;this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft}let c=a?this.translate:-this.translate;function u(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}let d=u(c),p=o.map(e=>u(e)),h=o[p.indexOf(d)-1];if(void 0===h&&i.cssMode){let e;o.forEach((t,n)=>{d>=t&&(e=n)}),void 0!==e&&(h=o[e>0?e-1:e])}let f=0;return(void 0!==h&&((f=s.indexOf(h))<0&&(f=this.activeIndex-1),"auto"===i.slidesPerView&&1===i.slidesPerGroup&&i.slidesPerGroupAuto&&(f=Math.max(f=f-this.slidesPerViewDynamic("previous",!0)+1,0))),i.rewind&&this.isBeginning)?this.slideTo(this.slides.length-1,e,t,n):this.slideTo(f,e,t,n)},slideReset:/* eslint no-unused-vars: "off" */function(e=this.params.speed,t=!0,n){return this.slideTo(this.activeIndex,e,t,n)},slideToClosest:/* eslint no-unused-vars: "off" */function(e=this.params.speed,t=!0,n,i=.5){let r=this.activeIndex,o=Math.min(this.params.slidesPerGroupSkip,r),s=o+Math.floor((r-o)/this.params.slidesPerGroup),a=this.rtlTranslate?this.translate:-this.translate;if(a>=this.snapGrid[s]){// The current translate is on or after the current snap index, so the choice
// is between the current index and the one after it.
let e=this.snapGrid[s],t=this.snapGrid[s+1];a-e>(t-e)*i&&(r+=this.params.slidesPerGroup)}else{// The current translate is before the current snap index, so the choice
// is between the current index and the one before it.
let e=this.snapGrid[s-1],t=this.snapGrid[s];a-e<=(t-e)*i&&(r-=this.params.slidesPerGroup)}return r=Math.min(r=Math.max(r,0),this.slidesGrid.length-1),this.slideTo(r,e,t,n)},slideToClickedSlide:function(){let e;let t=this,{params:n,$wrapperEl:i}=t,r="auto"===n.slidesPerView?t.slidesPerViewDynamic():n.slidesPerView,o=t.clickedIndex;if(n.loop){if(t.animating)return;e=parseInt(T(t.clickedSlide).attr("data-swiper-slide-index"),10),n.centeredSlides?o<t.loopedSlides-r/2||o>t.slides.length-t.loopedSlides+r/2?(t.loopFix(),o=i.children(`.${n.slideClass}[data-swiper-slide-index="${e}"]:not(.${n.slideDuplicateClass})`).eq(0).index(),L(()=>{t.slideTo(o)})):t.slideTo(o):o>t.slides.length-r?(t.loopFix(),o=i.children(`.${n.slideClass}[data-swiper-slide-index="${e}"]:not(.${n.slideDuplicateClass})`).eq(0).index(),L(()=>{t.slideTo(o)})):t.slideTo(o)}else t.slideTo(o)}},loop:{loopCreate:function(){let e=this,t=v(),{params:n,$wrapperEl:i}=e,r=i.children().length>0?T(i.children()[0].parentNode):i;r.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();let o=r.children(`.${n.slideClass}`);if(n.loopFillGroupWithBlank){let e=n.slidesPerGroup-o.length%n.slidesPerGroup;if(e!==n.slidesPerGroup){for(let i=0;i<e;i+=1){let e=T(t.createElement("div")).addClass(`${n.slideClass} ${n.slideBlankClass}`);r.append(e)}o=r.children(`.${n.slideClass}`)}}"auto"!==n.slidesPerView||n.loopedSlides||(n.loopedSlides=o.length),e.loopedSlides=Math.ceil(parseFloat(n.loopedSlides||n.slidesPerView,10)),e.loopedSlides+=n.loopAdditionalSlides,e.loopedSlides>o.length&&(e.loopedSlides=o.length);let s=[],a=[];o.each((t,n)=>{let i=T(t);n<e.loopedSlides&&a.push(t),n<o.length&&n>=o.length-e.loopedSlides&&s.push(t),i.attr("data-swiper-slide-index",n)});for(let e=0;e<a.length;e+=1)r.append(T(a[e].cloneNode(!0)).addClass(n.slideDuplicateClass));for(let e=s.length-1;e>=0;e-=1)r.prepend(T(s[e].cloneNode(!0)).addClass(n.slideDuplicateClass))},loopFix:function(){let e;this.emit("beforeLoopFix");let{activeIndex:t,slides:n,loopedSlides:i,allowSlidePrev:r,allowSlideNext:o,snapGrid:s,rtlTranslate:a}=this;this.allowSlidePrev=!0,this.allowSlideNext=!0;let l=-s[t],c=l-this.getTranslate();if(t<i){e=n.length-3*i+t+i;let r=this.slideTo(e,0,!1,!0);r&&0!==c&&this.setTranslate((a?-this.translate:this.translate)-c)}else if(t>=n.length-i){e=-n.length+t+i+i;let r=this.slideTo(e,0,!1,!0);r&&0!==c&&this.setTranslate((a?-this.translate:this.translate)-c)}this.allowSlidePrev=r,this.allowSlideNext=o,this.emit("loopFix")},loopDestroy:function(){let{$wrapperEl:e,params:t,slides:n}=this;e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(),n.removeAttr("data-swiper-slide-index")}},grabCursor:{setGrabCursor:function(e){if(this.support.touch||!this.params.simulateTouch||this.params.watchOverflow&&this.isLocked||this.params.cssMode)return;let t="container"===this.params.touchEventsTarget?this.el:this.wrapperEl;t.style.cursor="move",t.style.cursor=e?"-webkit-grabbing":"-webkit-grab",t.style.cursor=e?"-moz-grabbin":"-moz-grab",t.style.cursor=e?"grabbing":"grab"},unsetGrabCursor:function(){this.support.touch||this.params.watchOverflow&&this.isLocked||this.params.cssMode||(this["container"===this.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="")}},events:{attachEvents:function(){let e=v(),{params:t,support:n}=this;this.onTouchStart=I.bind(this),this.onTouchMove=N.bind(this),this.onTouchEnd=H.bind(this),t.cssMode&&(this.onScroll=z.bind(this)),this.onClick=q.bind(this),n.touch&&!B&&(e.addEventListener("touchstart",F),B=!0),W(this,"on")},detachEvents:function(){W(this,"off")}},breakpoints:{setBreakpoint:function(){let{activeIndex:e,initialized:t,loopedSlides:n=0,params:i,$el:r}=this,o=i.breakpoints;if(!o||o&&0===Object.keys(o).length)return;// Get breakpoint for window width and update parameters
let s=this.getBreakpoint(o,this.params.breakpointsBase,this.el);if(!s||this.currentBreakpoint===s)return;let a=s in o?o[s]:void 0,l=a||this.originalParams,c=G(this,i),u=G(this,l),d=i.enabled;c&&!u?(r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`),this.emitContainerClasses()):!c&&u&&(r.addClass(`${i.containerModifierClass}grid`),(l.grid.fill&&"column"===l.grid.fill||!l.grid.fill&&"column"===i.grid.fill)&&r.addClass(`${i.containerModifierClass}grid-column`),this.emitContainerClasses());let p=l.direction&&l.direction!==i.direction,h=i.loop&&(l.slidesPerView!==i.slidesPerView||p);p&&t&&this.changeDirection(),D(this.params,l);let f=this.params.enabled;Object.assign(this,{allowTouchMove:this.params.allowTouchMove,allowSlideNext:this.params.allowSlideNext,allowSlidePrev:this.params.allowSlidePrev}),d&&!f?this.disable():!d&&f&&this.enable(),this.currentBreakpoint=s,this.emit("_beforeBreakpoint",l),h&&t&&(this.loopDestroy(),this.loopCreate(),this.updateSlides(),this.slideTo(e-n+this.loopedSlides,0,!1)),this.emit("breakpoint",l)},getBreakpoint:function(e,t="window",n){if(!e||"container"===t&&!n)return;let i=!1,r=b(),o="window"===t?r.innerHeight:n.clientHeight,s=Object.keys(e).map(e=>{if("string"==typeof e&&0===e.indexOf("@")){let t=parseFloat(e.substr(1));return{value:o*t,point:e}}return{value:e,point:e}});s.sort((e,t)=>parseInt(e.value,10)-parseInt(t.value,10));for(let e=0;e<s.length;e+=1){let{point:o,value:a}=s[e];"window"===t?r.matchMedia(`(min-width: ${a}px)`).matches&&(i=o):a<=n.clientWidth&&(i=o)}return i||"max"}},checkOverflow:{checkOverflow:function(){let{isLocked:e,params:t}=this,{slidesOffsetBefore:n}=t;if(n){let e=this.slides.length-1,t=this.slidesGrid[e]+this.slidesSizesGrid[e]+2*n;this.isLocked=this.size>t}else this.isLocked=1===this.snapGrid.length;!0===t.allowSlideNext&&(this.allowSlideNext=!this.isLocked),!0===t.allowSlidePrev&&(this.allowSlidePrev=!this.isLocked),e&&e!==this.isLocked&&(this.isEnd=!1),e!==this.isLocked&&this.emit(this.isLocked?"lock":"unlock")}},classes:{addClasses:function(){let{classNames:e,params:t,rtl:n,$el:i,device:r,support:o}=this,s=function(e,t){let n=[];return e.forEach(e=>{"object"==typeof e?Object.keys(e).forEach(i=>{e[i]&&n.push(t+i)}):"string"==typeof e&&n.push(t+e)}),n}(["initialized",t.direction,{"pointer-events":!o.touch},{"free-mode":this.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:n},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&"column"===t.grid.fill},{android:r.android},{ios:r.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides}],t.containerModifierClass);// prettier-ignore
e.push(...s),i.addClass([...e].join(" ")),this.emitContainerClasses()},removeClasses:function(){let{$el:e,classNames:t}=this;e.removeClass(t.join(" ")),this.emitContainerClasses()}},images:{loadImage:function(e,t,n,i,r,o){let s;let a=b();function l(){o&&o()}let c=T(e).parent("picture")[0];c||e.complete&&r?l():t?((s=new a.Image).onload=l,s.onerror=l,i&&(s.sizes=i),n&&(s.srcset=n),t&&(s.src=t)):l()},preloadImages:function(){let e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(let n=0;n<e.imagesToLoad.length;n+=1){let i=e.imagesToLoad[n];e.loadImage(i,i.currentSrc||i.getAttribute("src"),i.srcset||i.getAttribute("srcset"),i.sizes||i.getAttribute("sizes"),!0,t)}}}},X={};class Y{enable(){this.enabled||(this.enabled=!0,this.params.grabCursor&&this.setGrabCursor(),this.emit("enable"))}disable(){this.enabled&&(this.enabled=!1,this.params.grabCursor&&this.unsetGrabCursor(),this.emit("disable"))}setProgress(e,t){e=Math.min(Math.max(e,0),1);let n=this.minTranslate(),i=this.maxTranslate(),r=(i-n)*e+n;this.translateTo(r,void 0===t?0:t),this.updateActiveIndex(),this.updateSlidesClasses()}emitContainerClasses(){let e=this;if(!e.params._emitClasses||!e.el)return;let t=e.el.className.split(" ").filter(t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){let t=this;return e.className.split(" ").filter(e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass)).join(" ")}emitSlidesClasses(){let e=this;if(!e.params._emitClasses||!e.el)return;let t=[];e.slides.each(n=>{let i=e.getSlideClasses(n);t.push({slideEl:n,classNames:i}),e.emit("_slideClass",n,i)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e="current",t=!1){let{params:n,slides:i,slidesGrid:r,slidesSizesGrid:o,size:s,activeIndex:a}=this,l=1;if(n.centeredSlides){let e,t=i[a].swiperSlideSize;for(let n=a+1;n<i.length;n+=1)i[n]&&!e&&(t+=i[n].swiperSlideSize,l+=1,t>s&&(e=!0));for(let n=a-1;n>=0;n-=1)i[n]&&!e&&(t+=i[n].swiperSlideSize,l+=1,t>s&&(e=!0))}else // eslint-disable-next-line
if("current"===e)for(let e=a+1;e<i.length;e+=1){let n=t?r[e]+o[e]-r[a]<s:r[e]-r[a]<s;n&&(l+=1)}else for(let e=a-1;e>=0;e-=1){let t=r[a]-r[e]<s;t&&(l+=1)}return l}update(){let e=this;if(!e||e.destroyed)return;let{snapGrid:t,params:n}=e;// Breakpoints
function i(){let t=e.rtlTranslate?-1*e.translate:e.translate,n=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(n),e.updateActiveIndex(),e.updateSlidesClasses()}n.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode&&e.params.freeMode.enabled?(i(),e.params.autoHeight&&e.updateAutoHeight()):(("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0))||i(),n.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t=!0){let n=this.params.direction;return e||(e="horizontal"===n?"vertical":"horizontal"),e===n||"horizontal"!==e&&"vertical"!==e||(this.$el.removeClass(`${this.params.containerModifierClass}${n}`).addClass(`${this.params.containerModifierClass}${e}`),this.emitContainerClasses(),this.params.direction=e,this.slides.each(t=>{"vertical"===e?t.style.width="":t.style.height=""}),this.emit("changeDirection"),t&&this.update()),this}mount(e){let t=this;if(t.mounted)return!0;// Find el
let n=T(e||t.params.el);if(!(e=n[0]))return!1;e.swiper=t;let i=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`,r=(()=>{if(e&&e.shadowRoot&&e.shadowRoot.querySelector){let t=T(e.shadowRoot.querySelector(i()));// Children needs to return slot items
return t.children=e=>n.children(e),t}return n.children(i())})();if(0===r.length&&t.params.createElements){let e=v(),i=e.createElement("div");r=T(i),i.className=t.params.wrapperClass,n.append(i),n.children(`.${t.params.slideClass}`).each(e=>{r.append(e)})}return Object.assign(t,{$el:n,el:e,$wrapperEl:r,wrapperEl:r[0],mounted:!0,// RTL
rtl:"rtl"===e.dir.toLowerCase()||"rtl"===n.css("direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===e.dir.toLowerCase()||"rtl"===n.css("direction")),wrongRTL:"-webkit-box"===r.css("display")}),!0}init(e){if(this.initialized)return this;let t=this.mount(e);return!1===t||(this.emit("beforeInit"),this.params.breakpoints&&this.setBreakpoint(),// Add Classes
this.addClasses(),this.params.loop&&this.loopCreate(),// Update size
this.updateSize(),this.updateSlides(),this.params.watchOverflow&&this.checkOverflow(),this.params.grabCursor&&this.enabled&&this.setGrabCursor(),this.params.preloadImages&&this.preloadImages(),this.params.loop?this.slideTo(this.params.initialSlide+this.loopedSlides,0,this.params.runCallbacksOnInit,!1,!0):this.slideTo(this.params.initialSlide,0,this.params.runCallbacksOnInit,!1,!0),// Attach events
this.attachEvents(),this.initialized=!0,this.emit("init"),this.emit("afterInit")),this}destroy(e=!0,t=!0){let n=this,{params:i,$el:r,$wrapperEl:o,slides:s}=n;return void 0===n.params||n.destroyed||(n.emit("beforeDestroy"),n.initialized=!1,n.detachEvents(),i.loop&&n.loopDestroy(),t&&(n.removeClasses(),r.removeAttr("style"),o.removeAttr("style"),s&&s.length&&s.removeClass([i.slideVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),n.emit("destroy"),Object.keys(n.eventsListeners).forEach(e=>{n.off(e)}),!1!==e&&(n.$el[0].swiper=null,function(e){Object.keys(e).forEach(t=>{try{e[t]=null}catch(e){}try{delete e[t]}catch(e){}})}(n)),n.destroyed=!0),null}static extendDefaults(e){D(X,e)}static get extendedDefaults(){return X}static get defaults(){return U}static installModule(e){Y.prototype.__modules__||(Y.prototype.__modules__=[]);let t=Y.prototype.__modules__;"function"==typeof e&&0>t.indexOf(e)&&t.push(e)}static use(e){return Array.isArray(e)?e.forEach(e=>Y.installModule(e)):Y.installModule(e),Y}constructor(...e){let i,r;if(1===e.length&&e[0].constructor&&"Object"===Object.prototype.toString.call(e[0]).slice(8,-1)?r=e[0]:[i,r]=e,r||(r={}),r=D({},r),i&&!r.el&&(r.el=i),r.el&&T(r.el).length>1){let e=[];return T(r.el).each(t=>{let n=D({},r,{el:t});e.push(new Y(n))}),e}// Swiper Instance
let o=this;o.__swiper__=!0,o.support=P(),o.device=function(e={}){return t||(t=function({userAgent:e}={}){let t=P(),n=b(),i=n.navigator.platform,r=e||n.navigator.userAgent,o={ios:!1,android:!1},s=n.screen.width,a=n.screen.height,l=r.match(/(Android);?[\s\/]+([\d.]+)?/),c=r.match(/(iPad).*OS\s([\d_]+)/),u=r.match(/(iPod)(.*OS\s([\d_]+))?/),d=!c&&r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),p="MacIntel"===i;return!c&&p&&t.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${s}x${a}`)>=0&&((c=r.match(/(Version)\/([\d.]+)/))||(c=[0,1,"13_0_0"]),p=!1),l&&"Win32"!==i&&(o.os="android",o.android=!0),(c||d||u)&&(o.os="ios",o.ios=!0),o}(e)),t}({userAgent:r.userAgent}),o.browser=(n||(n=function(){let e=b();return{isSafari:function(){let t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&0>t.indexOf("chrome")&&0>t.indexOf("android")}(),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}()),n),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],r.modules&&Array.isArray(r.modules)&&o.modules.push(...r.modules);let s={};o.modules.forEach(e=>{var t;e({swiper:o,extendParams:(t=r,function(e={}){let n=Object.keys(e)[0],i=e[n];if("object"!=typeof i||null===i||(["navigation","pagination","scrollbar"].indexOf(n)>=0&&!0===t[n]&&(t[n]={auto:!0}),!(n in t&&"enabled"in i))){D(s,e);return}!0===t[n]&&(t[n]={enabled:!0}),"object"!=typeof t[n]||"enabled"in t[n]||(t[n].enabled=!0),t[n]||(t[n]={enabled:!1}),D(s,e)}),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});let a=D({},U,s);// Extend defaults with passed params
// Return app instance
return o.params=D({},a,X,r),o.originalParams=D({},o.params),o.passedParams=D({},r),o.params&&o.params.on&&Object.keys(o.params.on).forEach(e=>{o.on(e,o.params.on[e])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),// Save Dom lib
o.$=T,Object.assign(o,{enabled:o.params.enabled,el:i,// Classes
classNames:[],// Slides
slides:T(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],// isDirection
isHorizontal:()=>"horizontal"===o.params.direction,isVertical:()=>"vertical"===o.params.direction,// Indexes
activeIndex:0,realIndex:0,//
isBeginning:!0,isEnd:!1,// Props
translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,// Locks
allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,// Touch Events
touchEvents:(o.touchEventsTouch={start:"touchstart",move:"touchmove",end:"touchend",cancel:"touchcancel"},o.touchEventsDesktop={start:"pointerdown",move:"pointermove",end:"pointerup"},o.support.touch||!o.params.simulateTouch?o.touchEventsTouch:o.touchEventsDesktop),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,// Form elements to match
focusableElements:o.params.focusableElements,// Last click time
lastClickTime:k(),clickTimeout:void 0,// Velocities
velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},// Clicks
allowClick:!0,// Touches
allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},// Images
imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}}function K(e=""){return`.${e.trim().replace(/([\.:!\/])/g,"\\$1")// eslint-disable-line
.replace(/ /g,".")}`}function Q({swiper:e,extendParams:t,on:n,emit:i}){let r;let o="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",// 'bullets' or 'progressbar' or 'fraction' or 'custom'
dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${o}-bullet`,bulletActiveClass:`${o}-bullet-active`,modifierClass:`${o}-`,currentClass:`${o}-current`,totalClass:`${o}-total`,hiddenClass:`${o}-hidden`,progressbarFillClass:`${o}-progressbar-fill`,progressbarOppositeClass:`${o}-progressbar-opposite`,clickableClass:`${o}-clickable`,lockClass:`${o}-lock`,horizontalClass:`${o}-horizontal`,verticalClass:`${o}-vertical`}}),e.pagination={el:null,$el:null,bullets:[]};let s=0;function a(){return!e.params.pagination.el||!e.pagination.el||!e.pagination.$el||0===e.pagination.$el.length}function l(t,n){let{bulletActiveClass:i}=e.params.pagination;t[n]().addClass(`${i}-${n}`)[n]().addClass(`${i}-${n}-${n}`)}function c(){let t;// Render || Update Pagination bullets/items
let n=e.rtl,o=e.params.pagination;if(a())return;let c=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,u=e.pagination.$el,d=e.params.loop?Math.ceil((c-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;// Types
if(e.params.loop?((t=Math.ceil((e.activeIndex-e.loopedSlides)/e.params.slidesPerGroup))>c-1-2*e.loopedSlides&&(t-=c-2*e.loopedSlides),t>d-1&&(t-=d),t<0&&"bullets"!==e.params.paginationType&&(t=d+t)):t=void 0!==e.snapIndex?e.snapIndex:e.activeIndex||0,"bullets"===o.type&&e.pagination.bullets&&e.pagination.bullets.length>0){let i,a,c;let d=e.pagination.bullets;if(o.dynamicBullets&&(r=d.eq(0)[e.isHorizontal()?"outerWidth":"outerHeight"](!0),u.css(e.isHorizontal()?"width":"height",`${r*(o.dynamicMainBullets+4)}px`),o.dynamicMainBullets>1&&void 0!==e.previousIndex&&((s+=t-(e.previousIndex-e.loopedSlides||0))>o.dynamicMainBullets-1?s=o.dynamicMainBullets-1:s<0&&(s=0)),c=((a=(i=Math.max(t-s,0))+(Math.min(d.length,o.dynamicMainBullets)-1))+i)/2),d.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map(e=>`${o.bulletActiveClass}${e}`).join(" ")),u.length>1)d.each(e=>{let n=T(e),r=n.index();r===t&&n.addClass(o.bulletActiveClass),o.dynamicBullets&&(r>=i&&r<=a&&n.addClass(`${o.bulletActiveClass}-main`),r===i&&l(n,"prev"),r===a&&l(n,"next"))});else{let n=d.eq(t),r=n.index();if(n.addClass(o.bulletActiveClass),o.dynamicBullets){let t=d.eq(i),n=d.eq(a);for(let e=i;e<=a;e+=1)d.eq(e).addClass(`${o.bulletActiveClass}-main`);if(e.params.loop){if(r>=d.length){for(let e=o.dynamicMainBullets;e>=0;e-=1)d.eq(d.length-e).addClass(`${o.bulletActiveClass}-main`);d.eq(d.length-o.dynamicMainBullets-1).addClass(`${o.bulletActiveClass}-prev`)}else l(t,"prev"),l(n,"next")}else l(t,"prev"),l(n,"next")}}if(o.dynamicBullets){let t=Math.min(d.length,o.dynamicMainBullets+4),i=(r*t-r)/2-c*r;d.css(e.isHorizontal()?n?"right":"left":"top",`${i}px`)}}if("fraction"===o.type&&(u.find(K(o.currentClass)).text(o.formatFractionCurrent(t+1)),u.find(K(o.totalClass)).text(o.formatFractionTotal(d))),"progressbar"===o.type){let n;n=o.progressbarOpposite?e.isHorizontal()?"vertical":"horizontal":e.isHorizontal()?"horizontal":"vertical";let i=(t+1)/d,r=1,s=1;"horizontal"===n?r=i:s=i,u.find(K(o.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${r}) scaleY(${s})`).transition(e.params.speed)}"custom"===o.type&&o.renderCustom?(u.html(o.renderCustom(e,t+1,d)),i("paginationRender",u[0])):i("paginationUpdate",u[0]),e.params.watchOverflow&&e.enabled&&u[e.isLocked?"addClass":"removeClass"](o.lockClass)}function u(){// Render Container
let t=e.params.pagination;if(a())return;let n=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,r=e.pagination.$el,o="";if("bullets"===t.type){let i=e.params.loop?Math.ceil((n-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&!e.params.loop&&i>n&&(i=n);for(let n=0;n<i;n+=1)t.renderBullet?o+=t.renderBullet.call(e,n,t.bulletClass):o+=`<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;r.html(o),e.pagination.bullets=r.find(K(t.bulletClass))}"fraction"===t.type&&(o=t.renderFraction?t.renderFraction.call(e,t.currentClass,t.totalClass):`<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`,r.html(o)),"progressbar"===t.type&&(o=t.renderProgressbar?t.renderProgressbar.call(e,t.progressbarFillClass):`<span class="${t.progressbarFillClass}"></span>`,r.html(o)),"custom"!==t.type&&i("paginationRender",e.pagination.$el[0])}function d(){e.params.pagination=function(e,t,n,i){let r=v();return e.params.createElements&&Object.keys(i).forEach(o=>{if(!n[o]&&!0===n.auto){let s=e.$el.children(`.${i[o]}`)[0];s||((s=r.createElement("div")).className=i[o],e.$el.append(s)),n[o]=s,t[o]=s}}),n}(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});let t=e.params.pagination;if(!t.el)return;let n=T(t.el);0===n.length||(e.params.uniqueNavElements&&"string"==typeof t.el&&n.length>1&&(n=e.$el.find(t.el)).length>1&&(n=n.filter(t=>T(t).parents(".swiper")[0]===e.el)),"bullets"===t.type&&t.clickable&&n.addClass(t.clickableClass),n.addClass(t.modifierClass+t.type),n.addClass(t.modifierClass+e.params.direction),"bullets"===t.type&&t.dynamicBullets&&(n.addClass(`${t.modifierClass}${t.type}-dynamic`),s=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),"progressbar"===t.type&&t.progressbarOpposite&&n.addClass(t.progressbarOppositeClass),t.clickable&&n.on("click",K(t.bulletClass),function(t){t.preventDefault();let n=T(this).index()*e.params.slidesPerGroup;e.params.loop&&(n+=e.loopedSlides),e.slideTo(n)}),Object.assign(e.pagination,{$el:n,el:n[0]}),e.enabled||n.addClass(t.lockClass))}function p(){let t=e.params.pagination;if(a())return;let n=e.pagination.$el;n.removeClass(t.hiddenClass),n.removeClass(t.modifierClass+t.type),n.removeClass(t.modifierClass+e.params.direction),e.pagination.bullets&&e.pagination.bullets.removeClass&&e.pagination.bullets.removeClass(t.bulletActiveClass),t.clickable&&n.off("click",K(t.bulletClass))}n("init",()=>{d(),u(),c()}),n("activeIndexChange",()=>{e.params.loop?c():void 0===e.snapIndex&&c()}),n("snapIndexChange",()=>{e.params.loop||c()}),n("slidesLengthChange",()=>{e.params.loop&&(u(),c())}),n("snapGridLengthChange",()=>{e.params.loop||(u(),c())}),n("destroy",()=>{p()}),n("enable disable",()=>{let{$el:t}=e.pagination;t&&t[e.enabled?"removeClass":"addClass"](e.params.pagination.lockClass)}),n("lock unlock",()=>{c()}),n("click",(t,n)=>{let r=n.target,{$el:o}=e.pagination;if(e.params.pagination.el&&e.params.pagination.hideOnClick&&o.length>0&&!T(r).hasClass(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&r===e.navigation.nextEl||e.navigation.prevEl&&r===e.navigation.prevEl))return;let t=o.hasClass(e.params.pagination.hiddenClass);!0===t?i("paginationShow"):i("paginationHide"),o.toggleClass(e.params.pagination.hiddenClass)}}),Object.assign(e.pagination,{render:u,update:c,init:d,destroy:p})}/* eslint no-underscore-dangle: "off" *//* eslint no-use-before-define: "off" */function Z({swiper:e,extendParams:t,on:n,emit:i}){let r;function o(){let t=e.slides.eq(e.activeIndex),n=e.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(n=t.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(r),r=L(()=>{let t;e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),t=e.slidePrev(e.params.speed,!0,!0),i("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?a():(t=e.slideTo(e.slides.length-1,e.params.speed,!0,!0),i("autoplay")):(t=e.slidePrev(e.params.speed,!0,!0),i("autoplay")):e.params.loop?(e.loopFix(),t=e.slideNext(e.params.speed,!0,!0),i("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?a():(t=e.slideTo(0,e.params.speed,!0,!0),i("autoplay")):(t=e.slideNext(e.params.speed,!0,!0),i("autoplay")),e.params.cssMode&&e.autoplay.running?o():!1===t&&o()},n)}function s(){return void 0===r&&!e.autoplay.running&&(e.autoplay.running=!0,i("autoplayStart"),o(),!0)}function a(){return!!e.autoplay.running&&void 0!==r&&(r&&(clearTimeout(r),r=void 0),e.autoplay.running=!1,i("autoplayStop"),!0)}function l(t){e.autoplay.running&&(e.autoplay.paused||(r&&clearTimeout(r),e.autoplay.paused=!0,0!==t&&e.params.autoplay.waitForTransition?["transitionend","webkitTransitionEnd"].forEach(t=>{e.$wrapperEl[0].addEventListener(t,u)}):(e.autoplay.paused=!1,o())))}function c(){let t=v();"hidden"===t.visibilityState&&e.autoplay.running&&l(),"visible"===t.visibilityState&&e.autoplay.paused&&(o(),e.autoplay.paused=!1)}function u(t){e&&!e.destroyed&&e.$wrapperEl&&t.target===e.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach(t=>{e.$wrapperEl[0].removeEventListener(t,u)}),e.autoplay.paused=!1,e.autoplay.running?o():a())}function d(){e.params.autoplay.disableOnInteraction?a():l(),["transitionend","webkitTransitionEnd"].forEach(t=>{e.$wrapperEl[0].removeEventListener(t,u)})}function p(){e.params.autoplay.disableOnInteraction||(e.autoplay.paused=!1,o())}e.autoplay={running:!1,paused:!1},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}}),n("init",()=>{if(e.params.autoplay.enabled){s();let t=v();t.addEventListener("visibilitychange",c),e.params.autoplay.pauseOnMouseEnter&&(e.$el.on("mouseenter",d),e.$el.on("mouseleave",p))}}),n("beforeTransitionStart",(t,n,i)=>{e.autoplay.running&&(i||!e.params.autoplay.disableOnInteraction?e.autoplay.pause(n):a())}),n("sliderFirstMove",()=>{e.autoplay.running&&(e.params.autoplay.disableOnInteraction?a():l())}),n("touchEnd",()=>{e.params.cssMode&&e.autoplay.paused&&!e.params.autoplay.disableOnInteraction&&o()}),n("destroy",()=>{e.$el.off("mouseenter",d),e.$el.off("mouseleave",p),e.autoplay.running&&a();let t=v();t.removeEventListener("visibilitychange",c)}),Object.assign(e.autoplay,{pause:l,run:o,start:s,stop:a})}function J(e){let{effect:t,swiper:n,on:i,setTranslate:r,setTransition:o,overwriteParams:s,perspective:a}=e;i("beforeInit",()=>{if(n.params.effect!==t)return;n.classNames.push(`${n.params.containerModifierClass}${t}`),a&&a()&&n.classNames.push(`${n.params.containerModifierClass}3d`);let e=s?s():{};Object.assign(n.params,e),Object.assign(n.originalParams,e)}),i("setTranslate",()=>{n.params.effect===t&&r()}),i("setTransition",(e,i)=>{n.params.effect===t&&o(i)})}function ee(e,t){return e.transformEl?t.find(e.transformEl).css({"backface-visibility":"hidden","-webkit-backface-visibility":"hidden"}):t}function et({swiper:e,duration:t,transformEl:n,allSlides:i}){let{slides:r,activeIndex:o,$wrapperEl:s}=e;if(e.params.virtualTranslate&&0!==t){let t=!1;(i?n?r.find(n):r:n?r.eq(o).find(n):r.eq(o)).transitionEnd(()=>{if(t||!e||e.destroyed)return;t=!0,e.animating=!1;let n=["webkitTransitionEnd","transitionend"];for(let e=0;e<n.length;e+=1)s.trigger(n[e])})}}function en({swiper:e,extendParams:t,on:n}){t({fadeEffect:{crossFade:!1,transformEl:null}}),J({effect:"fade",swiper:e,on:n,setTranslate:()=>{let{slides:t}=e,n=e.params.fadeEffect;for(let i=0;i<t.length;i+=1){let t=e.slides.eq(i),r=t[0].swiperSlideOffset,o=-r;e.params.virtualTranslate||(o-=e.translate);let s=0;e.isHorizontal()||(s=o,o=0);let a=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(t[0].progress),0):1+Math.min(Math.max(t[0].progress,-1),0),l=ee(n,t);l.css({opacity:a}).transform(`translate3d(${o}px, ${s}px, 0px)`)}},setTransition:t=>{let{transformEl:n}=e.params.fadeEffect,i=n?e.slides.find(n):e.slides;i.transition(t),et({swiper:e,duration:t,transformEl:n,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}function ei({swiper:e,extendParams:t,on:n}){t({creativeEffect:{transformEl:null,limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});let i=e=>"string"==typeof e?e:`${e}px`;J({effect:"creative",swiper:e,on:n,setTranslate:()=>{let{slides:t,$wrapperEl:n,slidesSizesGrid:r}=e,o=e.params.creativeEffect,{progressMultiplier:s}=o,a=e.params.centeredSlides;if(a){let t=r[0]/2-e.params.slidesOffsetBefore||0;n.transform(`translateX(calc(50% - ${t}px))`)}for(let n=0;n<t.length;n+=1){let r=t.eq(n),l=r[0].progress,c=Math.min(Math.max(r[0].progress,-o.limitProgress),o.limitProgress),u=c;a||(u=Math.min(Math.max(r[0].originalProgress,-o.limitProgress),o.limitProgress));let d=r[0].swiperSlideOffset,p=[e.params.cssMode?-d-e.translate:-d,0,0],h=[0,0,0],f=!1;e.isHorizontal()||(p[1]=p[0],p[0]=0);let g={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};c<0?(g=o.next,f=!0):c>0&&(g=o.prev,f=!0),p.forEach((e,t)=>{p[t]=`calc(${e}px + (${i(g.translate[t])} * ${Math.abs(c*s)}))`}),h.forEach((e,t)=>{h[t]=g.rotate[t]*Math.abs(c*s)}),r[0].style.zIndex=-Math.abs(Math.round(l))+t.length;let m=p.join(", "),v=`rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`,y=u<0?`scale(${1+(1-g.scale)*u*s})`:`scale(${1-(1-g.scale)*u*s})`,b=u<0?1+(1-g.opacity)*u*s:1-(1-g.opacity)*u*s,w=`translate3d(${m}) ${v} ${y}`;if(f&&g.shadow||!f){let e=r.children(".swiper-slide-shadow");if(0===e.length&&g.shadow&&(e=function(e,t,n){let i=`swiper-slide-shadow${n?`-${n}`:""}`,r=e.transformEl?t.find(e.transformEl):t,o=r.children(`.${i}`);return o.length||(o=T(`<div class="swiper-slide-shadow${n?`-${n}`:""}"></div>`),r.append(o)),o}(o,r)),e.length){let t=o.shadowPerProgress?c*(1/o.limitProgress):c;e[0].style.opacity=Math.min(Math.max(Math.abs(t),0),1)}}let S=ee(o,r);S.transform(w).css({opacity:b}),g.origin&&S.css("transform-origin",g.origin)}},setTransition:t=>{let{transformEl:n}=e.params.creativeEffect,i=n?e.slides.find(n):e.slides;i.transition(t).find(".swiper-slide-shadow").transition(t),et({swiper:e,duration:t,transformEl:n,allSlides:!0})},perspective:()=>e.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}Object.keys(V).forEach(e=>{Object.keys(V[e]).forEach(t=>{Y.prototype[t]=V[e][t]})}),Y.use([function({swiper:e,on:t,emit:n}){let i=b(),r=null,o=()=>{e&&!e.destroyed&&e.initialized&&(n("beforeResize"),n("resize"))},s=()=>{e&&!e.destroyed&&e.initialized&&(r=new ResizeObserver(t=>{let{width:n,height:i}=e,r=n,s=i;t.forEach(({contentBoxSize:t,contentRect:n,target:i})=>{i&&i!==e.el||(r=n?n.width:(t[0]||t).inlineSize,s=n?n.height:(t[0]||t).blockSize)}),(r!==n||s!==i)&&o()})).observe(e.el)},a=()=>{r&&r.unobserve&&e.el&&(r.unobserve(e.el),r=null)},l=()=>{e&&!e.destroyed&&e.initialized&&n("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&void 0!==i.ResizeObserver){s();return}i.addEventListener("resize",o),i.addEventListener("orientationchange",l)}),t("destroy",()=>{a(),i.removeEventListener("resize",o),i.removeEventListener("orientationchange",l)})},function({swiper:e,extendParams:t,on:n,emit:i}){let r=[],o=b(),s=(e,t={})=>{let n=o.MutationObserver||o.WebkitMutationObserver,s=new n(e=>{// The observerUpdate event should only be triggered
// once despite the number of mutations.  Additional
// triggers are redundant and are very costly
if(1===e.length){i("observerUpdate",e[0]);return}let t=function(){i("observerUpdate",e[0])};o.requestAnimationFrame?o.requestAnimationFrame(t):o.setTimeout(t,0)});s.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),r.push(s)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",()=>{if(e.params.observer){if(e.params.observeParents){let t=e.$el.parents();for(let e=0;e<t.length;e+=1)s(t[e])}// Observe container
s(e.$el[0],{childList:e.params.observeSlideChildren}),s(e.$wrapperEl[0],{attributes:!1})}}),n("destroy",()=>{r.forEach(e=>{e.disconnect()}),r.splice(0,r.length)})}]);var d=l("3oRXo");window.$=window.jQuery=/*@__PURE__*/i(d);class er{handleHeaderAfterScroll(e){window.addEventListener("scroll",()=>{let t=/*@__PURE__*/i(d)(".footer"),n=/*@__PURE__*/i(d)(window).scrollTop(),r=/*@__PURE__*/i(d)(window).height(),o=t.offset().top,s=t.outerHeight();n+r>=o&&n+r-2*s<=o+(r-s)?e.classList.add("close"):e.classList.remove("close")})}constructor(){this.header=document.querySelector(".header"),this.deliverySlider=new Y(".delivery",{modules:[Z,Q,en,ei],loop:!0,centeredSlides:!0,effect:"creative",grabCursor:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".delivery-pagination",clickable:!0},creativeEffect:{limitProgress:2,prev:{translate:["-100%",-60,-60]},next:{translate:["100%",-60,-60]}},breakpoints:{641:{slidesPerView:1.5,spaceBetween:10,creativeEffect:{limitProgress:2,prev:{translate:["-90%",-40,-40]},next:{translate:["90%",-40,-40]}}},769:{spaceBetween:40,slidesPerView:2,creativeEffect:{limitProgress:2,prev:{translate:["-90%",-40,-40]},next:{translate:["90%",-40,-40]}}}}}),/*@__PURE__*/i(d)(".delivery-next-btn").on("click",()=>{this.deliverySlider.slideNext()}),this.aboutSlider=new Y(".about",{modules:[Z,Q,en,ei],slidesPerView:1,loop:!0,grabCursor:!0,direction:"horizontal",pagination:{el:".about-pagination",clickable:!0},breakpoints:{640:{direction:"vertical"}}}),/*@__PURE__*/i(d)(".about-slide").on("click",()=>{this.aboutSlider.slideNext()}),this.geographySlider=new Y(".geography",{modules:[Z,Q,en,ei],effect:"fade",loop:!0,observer:!0,grabCursor:!0,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{el:".geography-pagination",bulletClass:"swiper-pagination-bullet-custom",bulletActiveClass:"swiper-pagination-bullet-custom--active",renderBullet:function(e,t){return`<div class="${t}" data-index="${e}">
                          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="2" viewBox="0 0 80 2" fill="none">
                            <line y1="1" x2="0" y2="1" stroke="white" stroke-width="2"/>
                          </svg>
                        </div>`},clickable:!0},on:{init(){var e;this.el.style.setProperty("--delay",this.params.autoplay.delay),document.querySelectorAll(".swiper-pagination-bullet-custom line").forEach(e=>{e.setAttribute("x2","0")}),null===(e=document.querySelector(".swiper-pagination-bullet-custom.swiper-pagination-bullet-custom--active line"))||void 0===e||e.setAttribute("x2","80")},slideChange:function(){var e;document.querySelectorAll(".swiper-pagination-bullet-custom line").forEach(e=>{e.setAttribute("x2","0")}),null===(e=document.querySelector(".swiper-pagination-bullet-custom.swiper-pagination-bullet-custom--active line"))||void 0===e||e.setAttribute("x2","80")}}});let e=this.header;this.geographySlider,window.innerWidth>1366&&(this.fullPageSlider=/*@__PURE__*/i(h)("#fullpage",{navigation:!1,onLeave(t,n,i,r,o){!0===n.isLast?e.classList.add("close"):document.querySelector(".header.close")&&e.classList.remove("close");/*if (document.querySelector(".fp-viewing-1") && document.querySelector(".geography")) {
            geographySlider.slideToLoop(0, 0)
          }
          if (document.querySelector(".fp-viewing-3") && document.querySelector(".geography")) {
            geographySlider.slideToLoop(0, 0)
          }*/}}),/*@__PURE__*/i(d)(".move-down").on("click",()=>{this.fullPageSlider.moveSectionDown()})),window.innerWidth<=1366&&this.handleHeaderAfterScroll(e)}}window.addEventListener("load",function(){new er,new c,new p});//# sourceMappingURL=about.abbf6cc3.js.map

//# sourceMappingURL=about.abbf6cc3.js.map
