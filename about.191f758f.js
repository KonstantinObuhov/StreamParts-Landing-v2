!function(){function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n,i,r,o,s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},l={},c=s.parcelRequire61d8;function u(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}null==c&&((c=function(e){if(e in a)return a[e].exports;if(e in l){var t=l[e];delete l[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){l[e]=t},s.parcelRequire61d8=c),c.register("jxMcu",function(e,t){var n,i,r=c("jFPEE");n="undefined"!=typeof window?window:void 0,i=function(e,t){var n,i=function(e,t,n){var i,r,o=(n=n||ef).createElement("script");if(o.text=e,t)for(i in eh)// Support: Firefox 64+, Edge 18+
// Some browsers don't support the "nonce" property on scripts.
// On the other hand, just using `getAttribute` is not enough as
// the `nonce` attribute is reset to an empty string whenever it
// becomes browsing-context connected.
// See https://github.com/whatwg/html/issues/2369
// See https://html.spec.whatwg.org/#nonce-attributes
// The `node.getAttribute` check was added for the sake of
// `jQuery.globalEval` so that it can fake a nonce-containing node
// via an object.
(r=t[i]||t.getAttribute&&t.getAttribute(i))&&o.setAttribute(i,r);n.head.appendChild(o).parentNode.removeChild(o)},o=function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?eo[es.call(e)]||"object":void 0===e?"undefined":(0,r._)(e)},s=function(e){// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var t=!!e&&"length"in e&&e.length,n=o(e);return!(ed(e)||ep(e))&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)},a=function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},l=function(e,t){return t?// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
"\x00"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},c=function(e,t,n){return ed(t)?em.grep(e,function(e,i){return!!t.call(e,i,e)!==n}):t.nodeType?em.grep(e,function(e){return e===t!==n}):"string"!=typeof t?em.grep(e,function(e){return er.call(t,e)>-1!==n}):em.filter(t,e,n)},u=function(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e},d=function(e){var t={};return em.each(e.match(eD)||[],function(e,n){t[n]=!0}),t},p=function(e){return e},f=function(e){throw e},h=function(e,t,n,i){var r;try{// Check for promise aspect first to privilege synchronous behavior
e&&ed(r=e.promise)?r.call(e).done(t).fail(n):e&&ed(r=e.then)?r.call(e,t,n):// * false: [ value ].slice( 0 ) => resolve( value )
// * true: [ value ].slice( 1 ) => resolve()
t.apply(void 0,[e].slice(i));// For Promises/A+, convert exceptions into rejections
// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
// Deferred#then to conditionally suppress rejection.
}catch(e){// Support: Android 4.0 only
// Strict mode functions invoked without .call/.apply get global-object context
n.apply(void 0,[e])}},v=function(e,t){return t.toUpperCase()},g=// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (trac-9572)
function(e){return e.replace(eN,"ms-").replace(eH,v)},m=function(e,t,n){var i,r;// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(void 0===n&&1===e.nodeType){if(i="data-"+t.replace(eW,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(i))){try{r=n,n="true"===r||"false"!==r&&("null"===r?null:r===+r+""?+r:eF.test(r)?JSON.parse(r):r)}catch(e){}// Make sure we set the data so it isn't changed later
eB.set(e,t,n)}else n=void 0}return n},y=function(e,t,n,i){var r,o,s=20,a=i?function(){return i.cur()}:function(){return em.css(e,t,"")},l=a(),c=n&&n[3]||(em.cssNumber[t]?"":"px"),u=e.nodeType&&(em.cssNumber[t]||"px"!==c&&+l)&&eU.exec(em.css(e,t));if(u&&u[3]!==c){for(// Support: Firefox <=54
// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
l/=2,// Trust units reported by jQuery.css
c=c||u[3],// Iteratively approximate from a nonzero starting point
u=+l||1;s--;)// Evaluate and update our best guess (doubling guesses that zero out).
// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
em.style(e,t,u+c),(1-o)*(1-(o=a()/l||.5))<=0&&(s=0),u/=o;u*=2,em.style(e,t,u+c),// Make sure we update the tween properties later on
n=n||[]}return n&&(u=+u||+l||0,// Apply relative offset (+=/-=) if specified
r=n[1]?u+(n[1]+1)*n[2]:+n[2],i&&(i.unit=c,i.start=u,i.end=r)),r},b=function(e){var t,n=e.ownerDocument,i=e.nodeName,r=eZ[i];return r||(t=n.body.appendChild(n.createElement(i)),r=em.css(t,"display"),t.parentNode.removeChild(t),"none"===r&&(r="block"),eZ[i]=r),r},w=function(e,t){// Determine new display value for elements that need to change
for(var n,i,r=[],o=0,s=e.length;o<s;o++)(i=e[o]).style&&(n=i.style.display,t?("none"!==n||(r[o]=ez.get(i,"display")||null,r[o]||(i.style.display="")),""===i.style.display&&eQ(i)&&(r[o]=b(i))):"none"!==n&&(r[o]="none",// Remember what we're overwriting
ez.set(i,"display",n)));// Set the display of the elements in a second loop to avoid constant reflow
for(o=0;o<s;o++)null!=r[o]&&(e[o].style.display=r[o]);return e},S=function(e,t){// Support: IE <=9 - 11 only
// Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
var n;return(n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&a(e,t))?em.merge([e],n):n},x=function(e,t){for(var n=0,i=e.length;n<i;n++)ez.set(e[n],"globalEval",!t||ez.get(t[n],"globalEval"))},T=function(e,t,n,i,r){for(var s,a,l,c,u,d=t.createDocumentFragment(),p=[],f=0,h=e.length;f<h;f++)if((s=e[f])||0===s){// Add nodes directly
if("object"===o(s))// push.apply(_, arraylike) throws on ancient WebKit
em.merge(p,s.nodeType?[s]:s);else if(e3.test(s)){for(a=a||d.appendChild(t.createElement("div")),l=e2[(e0.exec(s)||["",""])[1].toLowerCase()]||e2._default,a.innerHTML=l[1]+em.htmlPrefilter(s)+l[2],// Descend through wrappers to the right content
u=l[0];u--;)a=a.lastChild;// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
em.merge(p,a.childNodes),// Ensure the created nodes are orphaned (trac-12392)
// Remember the top-level container
(a=d.firstChild).textContent=""}else p.push(t.createTextNode(s))}for(// Remove wrapper from fragment
d.textContent="",f=0;s=p[f++];){// Skip elements already in the context collection (trac-4087)
if(i&&em.inArray(s,i)>-1){r&&r.push(s);continue}// Capture executables
if(c=eX(s),// Append to fragment
a=S(d.appendChild(s),"script"),c&&x(a),n)for(u=0;s=a[u++];)e1.test(s.type||"")&&n.push(s)}return d},E=function(){return!0},C=function(){return!1},A=// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function(e,t,n){// Missing `isSetup` indicates a trigger call, which must force setup through jQuery.event.add
if(!n){void 0===ez.get(e,t)&&em.event.add(e,t,E);return}// Register the controller as a special universal handler for all event namespaces
ez.set(e,t,!1),em.event.add(e,t,{namespace:!1,handler:function(e){var n,i=ez.get(this,t);if(1&e.isTrigger&&this[t]){// Interrupt processing of the outer synthetic .trigger()ed event
if(i)(em.event.special[t]||{}).delegateType&&e.stopPropagation();else if(// Store arguments for use when handling the inner native event
// There will always be at least one argument (an event object), so this array
// will not be confused with a leftover capture object.
i=et.call(arguments),ez.set(this,t,i),// Trigger the native event and capture its result
this[t](),n=ez.get(this,t),ez.set(this,t,!1),i!==n)return(// Cancel the outer synthetic event
e.stopImmediatePropagation(),e.preventDefault(),n)}else i&&(// ...and capture the result
ez.set(this,t,em.event.trigger(i[0],i.slice(1),this)),// Abort handling of the native event by all jQuery handlers while allowing
// native handlers on the same element to run. On target, this is achieved
// by stopping immediate propagation just on the jQuery event. However,
// the native event is re-wrapped by a jQuery one on each level of the
// propagation so the only way to stop it for jQuery is to stop it for
// everyone via native `stopPropagation()`. This is not a problem for
// focus/blur which don't bubble, but it does also stop click on checkboxes
// and radios. We accept this limitation.
e.stopPropagation(),e.isImmediatePropagationStopped=E)}})},k=function(e,t){return a(e,"table")&&a(11!==t.nodeType?t:t.firstChild,"tr")&&em(e).children("tbody")[0]||e},L=function(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e},_=function(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e},O=function(e,t){var n,i,r,o,s,a;if(1===t.nodeType){// 1. Copy private data: events, handlers, etc.
if(ez.hasData(e)&&(a=ez.get(e).events))for(r in ez.remove(t,"handle events"),a)for(n=0,i=a[r].length;n<i;n++)em.event.add(t,r,a[r][n]);// 2. Copy user data
eB.hasData(e)&&(o=eB.access(e),s=em.extend({},o),eB.set(t,s))}},M=function(e,t){var n=t.nodeName.toLowerCase();// Fails to persist the checked state of a cloned checkbox or radio button.
"input"===n&&eJ.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)},D=function(e,t,n){for(var i,r=t?em.filter(t,e):e,o=0;null!=(i=r[o]);o++)n||1!==i.nodeType||em.cleanData(S(i)),i.parentNode&&(n&&eX(i)&&x(S(i,"script")),i.parentNode.removeChild(i));return e},P=function(e,t,n){var i,r,o,s,a=tt.test(t),// Retrieving style before computed somehow
// fixes an issue with getting wrong values
// on detached elements
l=e.style;return(n=n||tn(e))&&(// Support: IE <=9 - 11+
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
(s=s.replace(ex,"$1")||void 0),""!==s||eX(e)||(s=em.style(e,t)),!eu.pixelBoxStyles()&&te.test(s)&&tr.test(t)&&(// Remember the original values
i=l.width,r=l.minWidth,o=l.maxWidth,// Put in the new values to get a computed value out
l.minWidth=l.maxWidth=l.width=s,s=n.width,// Revert the changed values
l.width=i,l.minWidth=r,l.maxWidth=o)),void 0!==s?// IE returns zIndex value as an integer.
s+"":s},j=function(e,t){// Define the hook, we'll check on the first run if it's really needed.
return{get:function(){if(e()){// Hook not needed (or it's not possible to use it due
// to missing dependency), remove it.
delete this.get;return}// Hook needed; redefine it so that the support test is not executed again.
return(this.get=t).apply(this,arguments)}}},I=function(e){for(// Check for vendor prefixed names
var t=e[0].toUpperCase()+e.slice(1),n=to.length;n--;)if((e=to[n]+t)in ts)return e},N=function(e){return em.cssProps[e]||ta[e]||(e in ts?e:ta[e]=I(e)||e)},H=function(e,t,n){// Any relative (+/-) values have already been
// normalized at this point
var i=eU.exec(t);return i?Math.max(0,i[2]-(n||0))+(i[3]||"px"):t},R=function(e,t,n,i,r,o){var s="width"===t?1:0,a=0,l=0,c=0;// Adjustment may not be necessary
if(n===(i?"border":"content"))return 0;for(;s<4;s+=2)"margin"===n&&(c+=em.css(e,n+eV[s],!0,r)),i?("content"===n&&(l-=em.css(e,"padding"+eV[s],!0,r)),"margin"!==n&&(l-=em.css(e,"border"+eV[s]+"Width",!0,r))):(// Add padding
l+=em.css(e,"padding"+eV[s],!0,r),"padding"!==n?l+=em.css(e,"border"+eV[s]+"Width",!0,r):a+=em.css(e,"border"+eV[s]+"Width",!0,r));return!i&&o>=0&&// Assuming integer scroll gutter, subtract the rest and round down
(l+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-l-a-.5))||0),l+c},q=function(e,t,n){// Start with computed style
var i=tn(e),r=(!eu.boxSizingReliable()||n)&&"border-box"===em.css(e,"boxSizing",!1,i),o=r,s=P(e,t,i),l="offset"+t[0].toUpperCase()+t.slice(1);// Support: Firefox <=54
// Return a confounding non-pixel value or feign ignorance, as appropriate.
if(te.test(s)){if(!n)return s;s="auto"}// Adjust for the element's box model
return(!eu.boxSizingReliable()&&r||// Support: IE 10 - 11+, Edge 15 - 18+
// IE/Edge misreport `getComputedStyle` of table rows with width/height
// set in CSS while `offset*` properties report correct values.
// Interestingly, in some cases IE 9 doesn't suffer from this issue.
!eu.reliableTrDimensions()&&a(e,"tr")||// Fall back to offsetWidth/offsetHeight when value is "auto"
// This happens for inline elements with no explicit setting (gh-3571)
"auto"===s||// Support: Android <=4.1 - 4.3 only
// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
!parseFloat(s)&&"inline"===em.css(e,"display",!1,i))&&// Make sure the element is visible & connected
e.getClientRects().length&&(r="border-box"===em.css(e,"boxSizing",!1,i),// Where available, offsetWidth/offsetHeight approximate border box dimensions.
// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
// retrieved value as a content box dimension.
(o=l in e)&&(s=e[l])),// Normalize "" and auto
(s=parseFloat(s)||0)+R(e,t,n||(r?"border":"content"),o,i,s)+"px"},z=function(){return e.setTimeout(function(){tE=void 0}),tE=Date.now()},B=function(e,t){var n,i=0,r={height:e};for(// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
t=t?1:0;i<4;i+=2-t)r["margin"+(n=eV[i])]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r},F=function(e,t,n){for(var i,r=(tL.tweeners[t]||[]).concat(tL.tweeners["*"]),o=0,s=r.length;o<s;o++)if(i=r[o].call(n,t,e))return i},W=function(e,t){var n,i,r,o,s;// camelCase, specialEasing and expand cssHook pass
for(n in e)if(r=t[i=g(n)],Array.isArray(o=e[n])&&(r=o[1],o=e[n]=o[0]),n!==i&&(e[i]=o,delete e[n]),(s=em.cssHooks[i])&&"expand"in s)// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(n in o=s.expand(o),delete e[i],o)n in e||(e[n]=o[n],t[n]=r);else t[i]=r},G=// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
function(e){return(e.match(eD)||[]).join(" ")},U=function(e){return e.getAttribute&&e.getAttribute("class")||""},V=function(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(eD)||[]},Y=function(e){// dataTypeExpression is optional and defaults to "*"
return function(t,n){"string"!=typeof t&&(n=t,t="*");var i,r=0,o=t.toLowerCase().match(eD)||[];if(ed(n))// For each dataType in the dataTypeExpression
for(;i=o[r++];)"+"===i[0]?(e[i=i.slice(1)||"*"]=e[i]||[]).unshift(n):(e[i]=e[i]||[]).push(n)}},X=function(e,t,n,i){var r={},o=e===tZ;function s(a){var l;return r[a]=!0,em.each(e[a]||[],function(e,a){var c=a(t,n,i);return"string"!=typeof c||o||r[c]?o?!(l=c):void 0:(t.dataTypes.unshift(c),s(c),!1)}),l}return s(t.dataTypes[0])||!r["*"]&&s("*")},K=// that takes "flat" options (not to be deep extended)
// Fixes trac-9887
function(e,t){var n,i,r=em.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((r[n]?e:i||(i={}))[n]=t[n]);return i&&em.extend(!0,e,i),e},Q=/* Handles responses to an ajax request:
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
if(o)return o!==l[0]&&l.unshift(o),n[o]},Z=/* Chain conversions given the request and the original response
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
if(s&&e.throws)t=s(t);else try{t=s(t)}catch(e){return{state:"parsererror",error:s?e:"No conversion from "+l+" to "+o}}}}}return{state:"success",data:t}},J=[],ee=Object.getPrototypeOf,et=J.slice,en=J.flat?function(e){return J.flat.call(e)}:function(e){return J.concat.apply([],e)},ei=J.push,er=J.indexOf,eo={},es=eo.toString,ea=eo.hasOwnProperty,el=ea.toString,ec=el.call(Object),eu={},ed=function(e){// Support: Chrome <=57, Firefox <=52
// In some browsers, typeof returns "function" for HTML <object> elements
// (i.e., `typeof document.createElement( "object" ) === "function"`).
// We don't want to classify *any* DOM node as a function.
// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
// Plus for old WebKit, typeof returns "function" for HTML collections
// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},ep=function(e){return null!=e&&e===e.window},ef=e.document,eh={type:!0,src:!0,nonce:!0,noModule:!0},ev="3.7.1",eg=/HTML$/i,em=function(e,t){// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new em.fn.init(e,t)};em.fn=em.prototype={// The current version of jQuery being used
jquery:ev,constructor:em,// The default length of a jQuery object is 0
length:0,toArray:function(){return et.call(this)},// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(e){return(// Return all the elements in a clean array
null==e?et.call(this):e<0?this[e+this.length]:this[e])},// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(e){// Build a new jQuery matched element set
var t=em.merge(this.constructor(),e);// Return the newly-formed element set
return(// Add the old object onto the stack (as a reference)
t.prevObject=this,t)},// Execute a callback for every element in the matched set.
each:function(e){return em.each(this,e)},map:function(e){return this.pushStack(em.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(et.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(em.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(em.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:ei,sort:J.sort,splice:J.splice},em.extend=em.fn.extend=function(){var e,t,n,i,r,o,s=arguments[0]||{},a=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,// Skip the boolean and the target
s=arguments[a]||{},a++),"object"==typeof s||ed(s)||(s={}),a===l&&(s=this,a--);a<l;a++)// Only deal with non-null/undefined values
if(null!=(e=arguments[a]))for(t in e)i=e[t],"__proto__"!==t&&s!==i&&(c&&i&&(em.isPlainObject(i)||(r=Array.isArray(i)))?(n=s[t],o=r&&!Array.isArray(n)?[]:r||em.isPlainObject(n)?n:{},r=!1,// Never move original objects, clone them
s[t]=em.extend(c,o,i)):void 0!==i&&(s[t]=i));// Return the modified object
return s},em.extend({// Unique for each copy of jQuery on the page
expando:"jQuery"+(ev+Math.random()).replace(/\D/g,""),// Assume jQuery is ready without the ready module
isReady:!0,error:function(e){throw Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return(// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
!!e&&"[object Object]"===es.call(e)&&(!(t=ee(e))||"function"==typeof// Objects with prototype are plain iff they were constructed by a global Object function
(n=ea.call(t,"constructor")&&t.constructor)&&el.call(n)===ec))},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},// Evaluates a script in a provided context; falls back to the global one
// if not specified.
globalEval:function(e,t,n){i(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,i=0;if(s(e))for(n=e.length;i<n&&!1!==t.call(e[i],i,e[i]);i++);else for(i in e)if(!1===t.call(e[i],i,e[i]))break;return e},// Retrieve the text value of an array of DOM nodes
text:function(e){var t,n="",i=0,r=e.nodeType;if(!r)for(;t=e[i++];)n+=em.text(t);return 1===r||11===r?e.textContent:9===r?e.documentElement.textContent:3===r||4===r?e.nodeValue:n},// results is for internal usage only
makeArray:function(e,t){var n=t||[];return null!=e&&(s(Object(e))?em.merge(n,"string"==typeof e?[e]:e):ei.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:er.call(t,e,n)},isXMLDoc:function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;// Assume HTML when documentElement doesn't yet exist, such as inside
// document fragments.
return!eg.test(t||n&&n.nodeName||"HTML")},// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
merge:function(e,t){for(var n=+t.length,i=0,r=e.length;i<n;i++)e[r++]=t[i];return e.length=r,e},grep:function(e,t,n){// Go through the array, only saving the items
// that pass the validator function
for(var i=[],r=0,o=e.length,s=!n;r<o;r++)!t(e[r],r)!==s&&i.push(e[r]);return i},// arg is for internal usage only
map:function(e,t,n){var i,r,o=0,a=[];// Go through the array, translating each of the items to their new values
if(s(e))for(i=e.length;o<i;o++)null!=(r=t(e[o],o,n))&&a.push(r);else for(o in e)null!=(r=t(e[o],o,n))&&a.push(r);// Flatten any nested arrays
return en(a)},// A global GUID counter for objects
guid:1,// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:eu}),"function"==typeof Symbol&&(em.fn[Symbol.iterator]=J[Symbol.iterator]),// Populate the class2type map
em.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){eo["[object "+t+"]"]=t.toLowerCase()});var ey=J.pop,eb=J.sort,ew=J.splice,eS="[\\x20\\t\\r\\n\\f]",ex=RegExp("^"+eS+"+|((?:^|[^\\\\])(?:\\\\.)*)"+eS+"+$","g");// Note: an element does not contain itself
em.contains=function(e,t){var n=t&&t.parentNode;return e===n||!!(n&&1===n.nodeType&&// Support: IE 9 - 11+
// IE doesn't have `contains` on SVG.
(e.contains?e.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))};// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
var eT=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;em.escapeSelector=function(e){return(e+"").replace(eT,l)},function(){var t,n,i,r,o,s,l,c,u,d,p=// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function(){try{return s.activeElement}catch(e){}},f=/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */function(){var e=[];function t(i,r){return e.push(i+" ")>n.cacheLength&&delete t[e.shift()],t[i+" "]=r}return t},h=/**
 * Mark a function for special use by jQuery selector module
 * @param {Function} fn The function to mark
 */function(e){return e[P]=!0,e},v=/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */function(e){var t=s.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),// release memory in IE
t=null}},g=/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */function(e){return function(t){return a(t,"input")&&t.type===e}},m=/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */function(e){return function(t){return(a(t,"input")||a(t,"button"))&&t.type===e}},y=/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */function(e){// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
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
!e!==t.isDisabled&&ep(t)===e:t.disabled===e);return"label"in t&&t.disabled===e}},b=/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */function(e){return h(function(t){return t=+t,h(function(n,i){// Match elements found at the specified indexes
for(var r,o=e([],n.length,t),s=o.length;s--;)n[r=o[s]]&&(n[r]=!(i[r]=n[r]))})})},w=/**
 * Checks a node for validity as a jQuery selector context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */function(e){return e&&void 0!==e.getElementsByTagName&&e},S=/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [node] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */function(e){var t,i=e?e.ownerDocument||e:ef;return i!=s&&9===i.nodeType&&i.documentElement&&(l=// Update global variables
(s=i).documentElement,c=!em.isXMLDoc(s),// Support: iOS 7 only, IE 9 - 11+
// Older browsers didn't support unprefixed `matches`.
d=l.matches||l.webkitMatchesSelector||l.msMatchesSelector,l.msMatchesSelector&&// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
ef!=s&&(t=s.defaultView)&&t.top!==t&&t.addEventListener("unload",ed),// Support: IE <10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programmatically-set names,
// so use a roundabout getElementsByName test
eu.getById=v(function(e){return l.appendChild(e).id=em.expando,!s.getElementsByName||!s.getElementsByName(em.expando).length}),// Support: IE 9 only
// Check to see if it's possible to do matchesSelector
// on a disconnected node.
eu.disconnectedMatch=v(function(e){return d.call(e,"*")}),// Support: IE 9 - 11+, Edge 12 - 18+
// IE/Edge don't support the :scope pseudo-class.
eu.scope=v(function(){return s.querySelectorAll(":scope")}),// Support: Chrome 105 - 111 only, Safari 15.4 - 16.3 only
// Make sure the `:has()` argument is parsed unforgivingly.
// We include `*` in the test to detect buggy implementations that are
// _selectively_ forgiving (specifically when the list includes at least
// one valid selector).
// Note that we treat complete lack of support for `:has()` as if it were
// spec-compliant support, which is fine because use of `:has()` in such
// environments will fail in the qSA path and fall back to jQuery traversal
// anyway.
eu.cssHas=v(function(){try{return s.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}}),eu.getById?(n.filter.ID=function(e){var t=e.replace(el,ec);return function(e){return e.getAttribute("id")===t}},n.find.ID=function(e,t){if(void 0!==t.getElementById&&c){var n=t.getElementById(e);return n?[n]:[]}}):(n.filter.ID=function(e){var t=e.replace(el,ec);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},// Support: IE 6 - 7 only
// getElementById is not reliable as a find shortcut
n.find.ID=function(e,t){if(void 0!==t.getElementById&&c){var n,i,r,o=t.getElementById(e);if(o){if(// Verify the id attribute
(n=o.getAttributeNode("id"))&&n.value===e)return[o];for(// Fall back on getElementsByName
r=t.getElementsByName(e),i=0;o=r[i++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),// Tag
n.find.TAG=function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):t.querySelectorAll(e)},// Class
n.find.CLASS=function(e,t){if(void 0!==t.getElementsByClassName&&c)return t.getElementsByClassName(e)},/* QSA/matchesSelector
	---------------------------------------------------------------------- */// QSA and matchesSelector support
u=[],// Build QSA regex
// Regex strategy adopted from Diego Perini
v(function(e){var t;l.appendChild(e).innerHTML="<a id='"+P+"' href='' disabled='disabled'></a><select id='"+P+"-\r\\' disabled='disabled'><option selected=''></option></select>",e.querySelectorAll("[selected]").length||u.push("\\["+eS+"*(?:value|"+B+")"),e.querySelectorAll("[id~="+P+"-]").length||u.push("~="),e.querySelectorAll("a#"+P+"+*").length||u.push(".#.+[+~]"),e.querySelectorAll(":checked").length||u.push(":checked"),// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
(t=s.createElement("input")).setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),// Support: IE 9 - 11+
// IE's :disabled selector does not pick up the children of disabled fieldsets
// Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
// In some of the document kinds, these selectors wouldn't work natively.
// This is probably OK but for backwards compatibility we want to maintain
// handling them through jQuery traversal in jQuery 3.x.
l.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&u.push(":enabled",":disabled"),// Support: IE 11+, Edge 15 - 18+
// IE 11/Edge don't find elements on a `[name='']` query in some cases.
// Adding a temporary attribute to the document before the selection works
// around the issue.
// Interestingly, IE 10 & older don't seem to have the issue.
(t=s.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||u.push("\\["+eS+"*name"+eS+"*="+eS+"*(?:''|\"\")")}),eu.cssHas||// Our regular `try-catch` mechanism fails to detect natively-unsupported
// pseudo-classes inside `:has()` (such as `:has(:contains("Foo"))`)
// in browsers that parse the `:has()` argument as a forgiving selector list.
// https://drafts.csswg.org/selectors/#relational now requires the argument
// to be parsed unforgivingly, but browsers have not yet fully adjusted.
u.push(":has"),u=u.length&&new RegExp(u.join("|")),/* Sorting
	---------------------------------------------------------------------- */// Document order sorting
z=function(e,t){// Flag for duplicate removal
if(e===t)return o=!0,0;// Sort on method existence if only one input has compareDocumentPosition
var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&// Calculate position if both inputs belong to the same document
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!eu.sortDetached&&t.compareDocumentPosition(e)===n?// Choose the first element that is related to our preferred document
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
e===s||e.ownerDocument==ef&&eh.contains(ef,e)?-1:t===s||t.ownerDocument==ef&&eh.contains(ef,t)?1:r?er.call(r,e)-er.call(r,t):0:4&n?-1:1)}),s},x=function(){},T=function(e,t){var i,r,o,s,a,l,c,u=H[e+" "];if(u)return t?0:u.slice(0);for(a=e,l=[],c=n.preFilter;a;){// Filters
for(s in(!i||(r=V.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),l.push(o=[])),i=!1,(r=Y.exec(a))&&(i=r.shift(),o.push({value:i,// Cast descendant combinators to space
type:r[0].replace(ex," ")}),a=a.slice(i.length)),n.filter)(r=Z[s].exec(a))&&(!c[s]||(r=c[s](r)))&&(i=r.shift(),o.push({value:i,type:s,matches:r}),a=a.slice(i.length));if(!i)break}return(// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
t?a.length:a?eh.error(e):H(e,l).slice(0))},E=function(e){for(var t=0,n=e.length,i="";t<n;t++)i+=e[t].value;return i},C=function(e,t,n){var i=t.dir,r=t.next,o=r||i,s=n&&"parentNode"===o,l=I++;return t.first?function(t,n,r){for(;t=t[i];)if(1===t.nodeType||s)return e(t,n,r);return!1}:function(t,n,c){var u,d,p=[j,l];// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(c){for(;t=t[i];)if((1===t.nodeType||s)&&e(t,n,c))return!0}else for(;t=t[i];)if(1===t.nodeType||s){if(d=t[P]||(t[P]={}),r&&a(t,r))t=t[i]||t;else{if((u=d[o])&&u[0]===j&&u[1]===l)return p[2]=u[2];// A match means we're done; a fail means we have to keep checking
if(// Reuse newcache so results back-propagate to previous elements
d[o]=p,p[2]=e(t,n,c))return!0}}return!1}},A=function(e){return e.length>1?function(t,n,i){for(var r=e.length;r--;)if(!e[r](t,n,i))return!1;return!0}:e[0]},k=function(e,t,n){for(var i=0,r=t.length;i<r;i++)eh(e,t[i],n);return n},L=function(e,t,n,i,r){for(var o,s=[],a=0,l=e.length,c=null!=t;a<l;a++)(o=e[a])&&(!n||n(o,i,r))&&(s.push(o),c&&t.push(a));return s},_=function(e,t){var r=t.length>0,o=e.length>0,a=function(a,l,u,d,p){var f,h,v,g=0,m="0",y=a&&[],b=[],w=i,x=a||o&&n.find.TAG("*",p),T=j+=null==w?1:Math.random()||.1,E=x.length;// Add elements passing elementMatchers directly to results
// Support: iOS <=7 - 9 only
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching
// elements by id. (see trac-14142)
for(p&&// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
(i=l==s||l||p);m!==E&&null!=(f=x[m]);m++){if(o&&f){for(h=0,l||f.ownerDocument==s||(S(f),u=!c);v=e[h++];)if(v(f,l||s,u)){D.call(d,f);break}p&&(j=T)}// Track unmatched elements for set filters
r&&((f=!v&&f)&&g--,a&&y.push(f))}// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
g+=m,r&&m!==g){for(h=0;v=t[h++];)v(y,b,l,u);if(a){// Reintegrate element matches to eliminate the need for sorting
if(g>0)for(;m--;)y[m]||b[m]||(b[m]=ey.call(d));// Discard index placeholder values to get only actual matches
b=L(b)}// Add matches to results
D.apply(d,b),p&&!a&&b.length>0&&g+t.length>1&&em.uniqueSort(d)}return p&&(j=T,i=w),y};return r?h(a):a},O=function(e,t/* Internal Use Only */){var r,o=[],s=[],a=R[e+" "];if(!a){for(t||(t=T(e)),r=t.length;r--;)(a=function e(t){for(var r,o,s,a=t.length,l=n.relative[t[0].type],c=l||n.relative[" "],u=l?1:0,d=C(function(e){return e===r},c,!0),p=C(function(e){return er.call(r,e)>-1},c,!0),f=[function(e,t,n){// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
var o=!l&&(n||t!=i)||((r=t).nodeType?d(e,t,n):p(e,t,n));return(// Avoid hanging onto element
// (see https://github.com/jquery/sizzle/issues/299)
r=null,o)}];u<a;u++)if(o=n.relative[t[u].type])f=[C(A(f),o)];else{// Return special upon seeing a positional matcher
if((o=n.filter[t[u].type].apply(null,t[u].matches))[P]){for(// Find the next relative operator (if any) for proper handling
s=++u;s<a&&!n.relative[t[s].type];s++);return function e(t,n,i,r,o,s){return r&&!r[P]&&(r=e(r)),o&&!o[P]&&(o=e(o,s)),h(function(e,s,a,l){var c,u,d,p,f=[],h=[],v=s.length,g=e||k(n||"*",a.nodeType?[a]:a,[]),m=t&&(e||!n)?L(g,f,t,a,l):g;// Apply postFilter
if(i?// Find primary matches
i(m,// If we have a postFinder, or filtered seed, or non-seed postFilter
// or preexisting results,
p=o||(e?t:v||r)?[]:s,a,l):p=m,r)for(c=L(p,h),r(c,[],a,l),// Un-match failing elements by moving them back to matcherIn
u=c.length;u--;)(d=c[u])&&(p[h[u]]=!(m[h[u]]=d));if(e){if(o||t){if(o){for(// Get the final matcherOut by condensing this intermediate into postFinder contexts
c=[],u=p.length;u--;)(d=p[u])&&c.push(m[u]=d);o(null,p=[],c,l)}for(// Move matched elements from seed to results to keep them synchronized
u=p.length;u--;)(d=p[u])&&(c=o?er.call(e,d):f[u])>-1&&(e[c]=!(s[c]=d))}}else p=L(p===s?p.splice(v,p.length):p),o?o(null,s,p,l):D.apply(s,p)})}(u>1&&A(f),u>1&&E(t.slice(0,u-1).concat({value:" "===t[u-2].type?"*":""})).replace(ex,"$1"),o,u<s&&e(t.slice(u,s)),s<a&&e(t=t.slice(s)),s<a&&E(t))}f.push(o)}return A(f)}(t[r]))[P]?o.push(a):s.push(a);// Save selector and tokenization
// Cache the compiled function
(a=R(e,_(s,o))).selector=e}return a},M=/**
 * A low-level selection function that works with jQuery's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with jQuery selector compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */function(e,t,i,r){var o,s,a,l,u,d="function"==typeof e&&e,p=!r&&T(e=d.selector||e);// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(i=i||[],1===p.length){if(// Reduce context if the leading compound selector is an ID
(s=p[0]=p[0].slice(0)).length>2&&"ID"===(a=s[0]).type&&9===t.nodeType&&c&&n.relative[s[1].type]){if(!(t=(n.find.ID(a.matches[0].replace(el,ec),t)||[])[0]))return i;d&&(t=t.parentNode),e=e.slice(s.shift().value.length)}for(// Fetch a seed set for right-to-left matching
o=Z.needsContext.test(e)?0:s.length;// Abort if we hit a combinator
o--&&(a=s[o],!n.relative[l=a.type]);)if((u=n.find[l])&&(r=u(a.matches[0].replace(el,ec),es.test(s[0].type)&&w(t.parentNode)||t))){if(// If seed is empty or no tokens remain, we can return early
s.splice(o,1),!(e=r.length&&E(s)))return D.apply(i,r),i;break}}return(// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
(d||O(e,p))(r,t,!c,i,!t||es.test(e)&&w(t.parentNode)||t),i)},D=ei,P=em.expando,j=0,I=0,N=f(),H=f(),R=f(),q=f(),z=function(e,t){return e===t&&(o=!0),0},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
F="(?:\\\\[\\da-fA-F]{1,6}"+eS+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+",W="\\["+eS+"*("+F+")(?:"+eS+// Operator (capture 2)
"*([*^$|!~]?=)"+eS+// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+F+"))|)"+eS+"*\\]",G=":("+F+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",U=RegExp(eS+"+","g"),V=RegExp("^"+eS+"*,"+eS+"*"),Y=RegExp("^"+eS+"*([>+~]|"+eS+")"+eS+"*"),X=RegExp(eS+"|>"),K=new RegExp(G),Q=RegExp("^"+F+"$"),Z={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),TAG:RegExp("^("+F+"|[*])"),ATTR:RegExp("^"+W),PSEUDO:RegExp("^"+G),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+eS+"*(even|odd|(([+-]|)(\\d*)n|)"+eS+"*(?:([+-]|)"+eS+"*(\\d+)|))"+eS+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:RegExp("^"+eS+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+eS+"*((?:-\\d)?\\d*)"+eS+"*\\)|)(?=[^-]|$)","i")},ee=/^(?:input|select|textarea|button)$/i,en=/^h\d$/i,eo=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,es=/[+~]/,// https://www.w3.org/TR/CSS21/syndata.html#escaped-characters
el=RegExp("\\\\[\\da-fA-F]{1,6}"+eS+"?|\\\\([^\\r\\n\\f])","g"),ec=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},// Support: IE 9 - 11+, Edge 12 - 18+
// Removing the function wrapper causes a "Permission Denied"
// error in IE/Edge.
ed=function(){S()},ep=C(function(e){return!0===e.disabled&&a(e,"fieldset")},{dir:"parentNode",next:"legend"});// Optimize for push.apply( _, NodeList )
try{D.apply(J=et.call(ef.childNodes),ef.childNodes),// Support: Android <=4.0
// Detect silently failing push.apply
// eslint-disable-next-line no-unused-expressions
J[ef.childNodes.length].nodeType}catch(e){D={apply:function(e,t){ei.apply(e,et.call(t))},call:function(e){ei.apply(e,et.call(arguments,1))}}}function eh(e,t,n,i){var r,o,a,l,d,p,f,h=t&&t.ownerDocument,v=t?t.nodeType:9;// Return early from calls with invalid selector or context
if(n=n||[],"string"!=typeof e||!e||1!==v&&9!==v&&11!==v)return n;// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!i&&(S(t),t=t||s,c)){// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(11!==v&&(d=eo.exec(e))){// ID selector
if(r=d[1]){// Document context
if(9===v){if(!(a=t.getElementById(r)))return n;if(a.id===r)return D.call(n,a),n;// Element context
}else // getElementById can match elements by name instead of ID
if(h&&(a=h.getElementById(r))&&eh.contains(t,a)&&a.id===r)return D.call(n,a),n}else if(d[2])return D.apply(n,t.getElementsByTagName(e)),n;else if((r=d[3])&&t.getElementsByClassName)return D.apply(n,t.getElementsByClassName(r)),n}// Take advantage of querySelectorAll
if(!q[e+" "]&&(!u||!u.test(e))){// qSA considers elements outside a scoping root when evaluating child or
// descendant combinators, which is not what we want.
// In such cases, we work around the behavior by prefixing every selector in the
// list with an ID selector referencing the scope context.
// The technique has to be used as well when a leading combinator is used
// as such selectors are not recognized by querySelectorAll.
// Thanks to Andrew Dupont for this technique.
if(f=e,h=t,1===v&&(X.test(e)||Y.test(e))){for(// Expand context for sibling selectors
(h=es.test(e)&&w(t.parentNode)||t)==t&&eu.scope||((l=t.getAttribute("id"))?l=em.escapeSelector(l):t.setAttribute("id",l=P)),o=// Prefix every selector in the list
(p=T(e)).length;o--;)p[o]=(l?"#"+l:":scope")+" "+E(p[o]);f=p.join(",")}try{return D.apply(n,h.querySelectorAll(f)),n}catch(t){q(e,!0)}finally{l===P&&t.removeAttribute("id")}}}// All others
return M(e.replace(ex,"$1"),t,n,i)}// Add button/input type pseudos
for(t in eh.matches=function(e,t){return eh(e,null,null,t)},eh.matchesSelector=function(e,t){if(S(e),c&&!q[t+" "]&&(!u||!u.test(t)))try{var n=d.call(e,t);// IE 9's matchesSelector returns false on disconnected nodes
if(n||eu.disconnectedMatch||// As well, disconnected nodes are said to be in a document
// fragment in IE 9
e.document&&11!==e.document.nodeType)return n}catch(e){q(t,!0)}return eh(t,s,null,[e]).length>0},eh.contains=function(e,t){return(e.ownerDocument||e)!=s&&S(e),em.contains(e,t)},eh.attr=function(e,t){// Set document vars if needed
// Support: IE 11+, Edge 17 - 18+
// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
// two documents; shallow comparisons work.
// eslint-disable-next-line eqeqeq
(e.ownerDocument||e)!=s&&S(e);var i=n.attrHandle[t.toLowerCase()],r=i&&ea.call(n.attrHandle,t.toLowerCase())?i(e,t,!c):void 0;return void 0!==r?r:e.getAttribute(t)},eh.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */em.uniqueSort=function(e){var t,n=[],i=0,s=0;if(// Unless we *know* we can detect duplicates, assume their presence
//
// Support: Android <=4.0+
// Testing for detecting duplicates is unpredictable so instead assume we can't
// depend on duplicate detection in all browsers without a stable sort.
o=!eu.sortStable,r=!eu.sortStable&&et.call(e,0),eb.call(e,z),o){for(;t=e[s++];)t===e[s]&&(i=n.push(s));for(;i--;)ew.call(e,n[i],1)}return(// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
r=null,e)},em.fn.uniqueSort=function(){return this.pushStack(em.uniqueSort(et.apply(this)))},(n=em.expr={// Can be adjusted by the user
cacheLength:50,createPseudo:h,match:Z,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(el,ec),// Move the given value to match[3] whether quoted or unquoted
e[3]=(e[3]||e[4]||e[5]||"").replace(el,ec),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return(/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||eh.error(e[0]),// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&eh.error(e[0]),e)},PSEUDO:function(e){var t,n=!e[6]&&e[2];return Z.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&K.test(n)&&// Get excess from tokenize (recursively)
(t=T(n,!0))&&// advance to the next closing parenthesis
(t=n.indexOf(")",n.length-t)-n.length)&&(// excess is a negative index
e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(el,ec).toLowerCase();return"*"===e?function(){return!0}:function(e){return a(e,t)}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+eS+")"+e+"("+eS+"|$)"),N(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")}))},ATTR:function(e,t,n){return function(i){var r=eh.attr(i,e);return null==r?"!="===t:!t||((r+="","="===t)?r===n:"!="===t?r!==n:"^="===t?n&&0===r.indexOf(n):"*="===t?n&&r.indexOf(n)>-1:"$="===t?n&&r.slice(-n.length)===n:"~="===t?(" "+r.replace(U," ")+" ").indexOf(n)>-1:"|="===t&&(r===n||r.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,i,r){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),l="of-type"===t;return 1===i&&0===r?function(e){return!!e.parentNode}:function(t,n,c){var u,d,p,f,h,v=o!==s?"nextSibling":"previousSibling",g=t.parentNode,m=l&&t.nodeName.toLowerCase(),y=!c&&!l,b=!1;if(g){// :(first|last|only)-(child|of-type)
if(o){for(;v;){for(p=t;p=p[v];)if(l?a(p,m):1===p.nodeType)return!1;// Reverse direction for :only-* (if we haven't yet done so)
h=v="only"===e&&!h&&"nextSibling"}return!0}// non-xml :nth-child(...) stores cache data on `parent`
if(h=[s?g.firstChild:g.lastChild],s&&y){for(b=(f=(u=// Seek `elem` from a previously-cached index
(d=g[P]||(g[P]={}))[e]||[])[0]===j&&u[1])&&u[2],p=f&&g.childNodes[f];p=++f&&p&&p[v]||// Fallback to seeking `elem` from the start
(b=f=0)||h.pop();)if(1===p.nodeType&&++b&&p===t){d[e]=[j,f,b];break}}else // xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(y&&(b=f=(u=(d=t[P]||(t[P]={}))[e]||[])[0]===j&&u[1]),!1===b)// Use the same loop as above to seek `elem` from the start
for(;(p=++f&&p&&p[v]||(b=f=0)||h.pop())&&(!((l?a(p,m):1===p.nodeType)&&++b)||(y&&((d=p[P]||(p[P]={}))[e]=[j,b]),p!==t)););return(// Incorporate the offset, then check against cycle size
(b-=r)===i||b%i==0&&b/i>=0)}}},PSEUDO:function(e,t){// pseudo-class names are case-insensitive
// https://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var i,r=n.pseudos[e]||n.setFilters[e.toLowerCase()]||eh.error("unsupported pseudo: "+e);return(// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as jQuery does
r[P]?r(t):r.length>1?(i=[e,e,"",t],n.setFilters.hasOwnProperty(e.toLowerCase())?h(function(e,n){for(var i,o=r(e,t),s=o.length;s--;)i=er.call(e,o[s]),e[i]=!(n[i]=o[s])}):function(e){return r(e,0,i)}):r)}},pseudos:{// Potentially complex pseudos
not:h(function(e){// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var t=[],n=[],i=O(e.replace(ex,"$1"));return i[P]?h(function(e,t,n,r){// Match elements unmatched by `matcher`
for(var o,s=i(e,null,r,[]),a=e.length;a--;)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),// Don't keep the element
// (see https://github.com/jquery/sizzle/issues/299)
t[0]=null,!n.pop()}}),has:h(function(e){return function(t){return eh(e,t).length>0}}),contains:h(function(e){return e=e.replace(el,ec),function(t){return(t.textContent||em.text(t)).indexOf(e)>-1}}),// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// https://www.w3.org/TR/selectors/#lang-pseudo
lang:h(function(e){return Q.test(e||"")||eh.error("unsupported lang: "+e),e=e.replace(el,ec).toLowerCase(),function(t){var n;do if(n=c?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType)return!1}}),// Miscellaneous
target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===l},focus:function(e){return e===p()&&s.hasFocus()&&!!(e.type||e.href||~e.tabIndex)},// Boolean properties
enabled:y(!1),disabled:y(!0),checked:function(e){// In CSS3, :checked should return both checked and selected elements
// https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
return a(e,"input")&&!!e.checked||a(e,"option")&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},// Contents
empty:function(e){// https://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!n.pseudos.empty(e)},// Element/input types
header:function(e){return en.test(e.nodeName)},input:function(e){return ee.test(e.nodeName)},button:function(e){return a(e,"input")&&"button"===e.type||a(e,"button")},text:function(e){var t;return a(e,"input")&&"text"===e.type&&// Support: IE <10 only
// New HTML5 attribute values (e.g., "search") appear
// with elem.type === "text"
(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},// Position-in-collection
first:b(function(){return[0]}),last:b(function(e,t){return[t-1]}),eq:b(function(e,t,n){return[n<0?n+t:n]}),even:b(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:b(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:b(function(e,t,n){var i;for(i=n<0?n+t:n>t?t:n;--i>=0;)e.push(i);return e}),gt:b(function(e,t,n){for(var i=n<0?n+t:n;++i<t;)e.push(i);return e})}}).pseudos.nth=n.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})n.pseudos[t]=g(t);for(t in{submit:!0,reset:!0})n.pseudos[t]=m(t);x.prototype=n.filters=n.pseudos,n.setFilters=new x,// One-time assignments
// Support: Android <=4.0 - 4.1+
// Sort stability
eu.sortStable=P.split("").sort(z).join("")===P,// Initialize against the default document
S(),// Support: Android <=4.0 - 4.1+
// Detached nodes confoundingly follow *each other*
eu.sortDetached=v(function(e){// Should return 1, but returns 4 (following)
return 1&e.compareDocumentPosition(s.createElement("fieldset"))}),em.find=eh,// Deprecated
em.expr[":"]=em.expr.pseudos,em.unique=em.uniqueSort,// These have always been private, but they used to be documented as part of
// Sizzle so let's maintain them for now for backwards compatibility purposes.
eh.compile=O,eh.select=M,eh.setDocument=S,eh.tokenize=T,eh.escape=em.escapeSelector,eh.getText=em.text,eh.isXML=em.isXMLDoc,eh.selectors=em.expr,eh.support=em.support,eh.uniqueSort=em.uniqueSort;/* eslint-enable */}();var eE=function(e,t,n){for(var i=[],r=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(r&&em(e).is(n))break;i.push(e)}return i},eC=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},eA=em.expr.match.needsContext,ek=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;em.filter=function(e,t,n){var i=t[0];return(n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType)?em.find.matchesSelector(i,e)?[i]:[]:em.find.matches(e,em.grep(t,function(e){return 1===e.nodeType}))},em.fn.extend({find:function(e){var t,n,i=this.length,r=this;if("string"!=typeof e)return this.pushStack(em(e).filter(function(){for(t=0;t<i;t++)if(em.contains(r[t],this))return!0}));for(t=0,n=this.pushStack([]);t<i;t++)em.find(e,r[t],n);return i>1?em.uniqueSort(n):n},filter:function(e){return this.pushStack(c(this,e||[],!1))},not:function(e){return this.pushStack(c(this,e||[],!0))},is:function(e){return!!c(this,// so $("p:first").is("p:last") won't return true for a doc with two "p".
"string"==typeof e&&eA.test(e)?em(e):e||[],!1).length}});// Initialize a jQuery object
// A central reference to the root jQuery(document)
var eL,// Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
// Strict HTML recognition (trac-11290: must start with <)
// Shortcut simple #id case for speed
e_=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;// Give the init function the jQuery prototype for later instantiation
(em.fn.init=function(e,t,n){var i,r;// HANDLE: $(""), $(null), $(undefined), $(false)
if(!e)return this;// Handle HTML strings
if(// Method init() accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
n=n||eL,"string"==typeof e){// Match html or make sure no context is specified for #id
if((i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:e_.exec(e))&&(i[1]||!t)){// HANDLE: $(html) -> $(array)
if(!i[1])return(r=ef.getElementById(i[2]))&&(// Inject the element directly into the jQuery object
this[0]=r,this.length=1),this;// HANDLE: $(html, props)
if(t=t instanceof em?t[0]:t,// Option to run scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
em.merge(this,em.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:ef,!0)),ek.test(i[1])&&em.isPlainObject(t))for(i in t)ed(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);// HANDLE: $(DOMElement)
}return e.nodeType?(this[0]=e,this.length=1,this):ed(e)?void 0!==n.ready?n.ready(e):e(em):em.makeArray(e,this)}).prototype=em.fn,// Initialize central reference
eL=em(ef);var eO=/^(?:parents|prev(?:Until|All))/,eM={children:!0,contents:!0,next:!0,prev:!0};em.fn.extend({has:function(e){var t=em(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(em.contains(this,t[e]))return!0})},closest:function(e,t){var n,i=0,r=this.length,o=[],s="string"!=typeof e&&em(e);// Positional selectors never match, since there's no _selection_ context
if(!eA.test(e)){for(;i<r;i++)for(n=this[i];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&em.find.matchesSelector(n,e))){o.push(n);break}}return this.pushStack(o.length>1?em.uniqueSort(o):o)},// Determine the position of an element within the set
index:function(e){return(// No argument, return index in parent
e?"string"==typeof e?er.call(em(e),this[0]):er.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1)},add:function(e,t){return this.pushStack(em.uniqueSort(em.merge(this.get(),em(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),em.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return eE(e,"parentNode")},parentsUntil:function(e,t,n){return eE(e,"parentNode",n)},next:function(e){return u(e,"nextSibling")},prev:function(e){return u(e,"previousSibling")},nextAll:function(e){return eE(e,"nextSibling")},prevAll:function(e){return eE(e,"previousSibling")},nextUntil:function(e,t,n){return eE(e,"nextSibling",n)},prevUntil:function(e,t,n){return eE(e,"previousSibling",n)},siblings:function(e){return eC((e.parentNode||{}).firstChild,e)},children:function(e){return eC(e.firstChild)},contents:function(e){return null!=e.contentDocument&&// Support: IE 11+
// <object> elements with no `data` attribute has an object
// `contentDocument` with a `null` prototype.
ee(e.contentDocument)?e.contentDocument:(a(e,"template")&&(e=e.content||e),em.merge([],e.childNodes))}},function(e,t){em.fn[e]=function(n,i){var r=em.map(this,t,n);return"Until"!==e.slice(-5)&&(i=n),i&&"string"==typeof i&&(r=em.filter(i,r)),this.length>1&&(eM[e]||em.uniqueSort(r),eO.test(e)&&r.reverse()),this.pushStack(r)}});var eD=/[^\x20\t\r\n\f]+/g;/*
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
 */em.Callbacks=function(e){// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
e="string"==typeof e?d(e):em.extend({},e);var t,n,i,r,s=[],a=[],l=-1,c=function(){for(// Enforce single-firing
r=r||e.once,// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
i=t=!0;a.length;l=-1)for(n=a.shift();++l<s.length;)!1===s[l].apply(n[0],n[1])&&e.stopOnFalse&&(// Jump to end and forget the data so .add doesn't re-fire
l=s.length,n=!1);e.memory||(n=!1),t=!1,r&&(s=n?[]:"")},u={// Add a callback or a collection of callbacks to the list
add:function(){return s&&(n&&!t&&(l=s.length-1,a.push(n)),function t(n){em.each(n,function(n,i){ed(i)?e.unique&&u.has(i)||s.push(i):i&&i.length&&"string"!==o(i)&&t(i)})}(arguments),n&&!t&&c()),this},// Remove a callback from the list
remove:function(){return em.each(arguments,function(e,t){for(var n;(n=em.inArray(t,s,n))>-1;)s.splice(n,1),n<=l&&l--}),this},// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(e){return e?em.inArray(e,s)>-1:s.length>0},// Remove all callbacks from the list
empty:function(){return s&&(s=[]),this},// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function(){return r=a=[],s=n="",this},disabled:function(){return!s},// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function(){return r=a=[],n||t||(s=n=""),this},locked:function(){return!!r},// Call all callbacks with the given context and arguments
fireWith:function(e,n){return r||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||c()),this},// Call all the callbacks with the given arguments
fire:function(){return u.fireWith(this,arguments),this},// To know if the callbacks have already been called at least once
fired:function(){return!!i}};return u},em.extend({Deferred:function(t){var n=[// action, add listener, callbacks,
// ... .then handlers, argument index, [final state]
["notify","progress",em.Callbacks("memory"),em.Callbacks("memory"),2],["resolve","done",em.Callbacks("once memory"),em.Callbacks("once memory"),0,"resolved"],["reject","fail",em.Callbacks("once memory"),em.Callbacks("once memory"),1,"rejected"]],i="pending",r={state:function(){return i},always:function(){return o.done(arguments).fail(arguments),this},catch:function(e){return r.then(null,e)},// Keep pipe for back-compat
pipe:function(){var e=arguments;return em.Deferred(function(t){em.each(n,function(n,i){// Map tuples (progress, done, fail) to arguments (done, fail, progress)
var r=ed(e[i[4]])&&e[i[4]];// deferred.progress(function() { bind to newDefer or newDefer.notify })
// deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
o[i[1]](function(){var e=r&&r.apply(this,arguments);e&&ed(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[i[0]+"With"](this,r?[e]:arguments)})}),e=null}).promise()},then:function(t,i,r){var o=0;function s(t,n,i,r){return function(){var a=this,l=arguments,c=function(){var e,c;// Support: Promises/A+ section 2.3.3.3.3
// https://promisesaplus.com/#point-59
// Ignore double-resolution attempts
if(!(t<o)){// Support: Promises/A+ section 2.3.1
// https://promisesaplus.com/#point-48
if((e=i.apply(a,l))===n.promise())throw TypeError("Thenable self-resolution");// Handle a returned thenable
ed(// Support: Promises/A+ sections 2.3.3.1, 3.5
// https://promisesaplus.com/#point-54
// https://promisesaplus.com/#point-75
// Retrieve `then` only once
c=e&&// Support: Promises/A+ section 2.3.4
// https://promisesaplus.com/#point-64
// Only check objects and functions for thenability
("object"==typeof e||"function"==typeof e)&&e.then)?r?c.call(e,s(o,n,p,r),s(o,n,f,r)):(// ...and disregard older resolution values
o++,c.call(e,s(o,n,p,r),s(o,n,f,r),s(o,n,p,n.notifyWith))):(i!==p&&(a=void 0,l=[e]),// Process the value(s)
// Default process is resolve
(r||n.resolveWith)(a,l))}},u=r?c:function(){try{c()}catch(e){em.Deferred.exceptionHook&&em.Deferred.exceptionHook(e,u.error),t+1>=o&&(i!==f&&(a=void 0,l=[e]),n.rejectWith(a,l))}};// Support: Promises/A+ section 2.3.3.3.1
// https://promisesaplus.com/#point-57
// Re-resolve promises immediately to dodge false rejection from
// subsequent errors
t?u():(em.Deferred.getErrorHook?u.error=em.Deferred.getErrorHook():em.Deferred.getStackHook&&(u.error=em.Deferred.getStackHook()),e.setTimeout(u))}}return em.Deferred(function(e){// progress_handlers.add( ... )
n[0][3].add(s(0,e,ed(r)?r:p,e.notifyWith)),// fulfilled_handlers.add( ... )
n[1][3].add(s(0,e,ed(t)?t:p)),// rejected_handlers.add( ... )
n[2][3].add(s(0,e,ed(i)?i:f))}).promise()},// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(e){return null!=e?em.extend(e,r):r}},o={};// All done!
return(// Add list-specific methods
em.each(n,function(e,t){var s=t[2],a=t[5];// promise.progress = list.add
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
when:function(e){var t=arguments.length,n=t,i=Array(n),r=et.call(arguments),o=em.Deferred(),s=function(e){return function(n){i[e]=this,r[e]=arguments.length>1?et.call(arguments):n,--t||o.resolveWith(i,r)}};// Single- and empty arguments are adopted like Promise.resolve
if(t<=1&&(h(e,o.done(s(n)).resolve,o.reject,!t),"pending"===o.state()||ed(r[n]&&r[n].then)))return o.then();// Multiple arguments are aggregated like Promise.all array elements
for(;n--;)h(r[n],s(n),o.reject);return o.promise()}});// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var eP=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;// If `jQuery.Deferred.getErrorHook` is defined, `asyncError` is an error
// captured before the async barrier to get the original error cause
// which may otherwise be hidden.
em.Deferred.exceptionHook=function(t,n){// Support: IE 8 - 9 only
// Console exists when dev tools are open, which can happen at any time
e.console&&e.console.warn&&t&&eP.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},em.readyException=function(t){e.setTimeout(function(){throw t})};// The deferred used on DOM ready
var e$=em.Deferred();// The ready event handler and self cleanup method
function ej(){ef.removeEventListener("DOMContentLoaded",ej),e.removeEventListener("load",ej),em.ready()}em.fn.ready=function(e){return e$.then(e)// Wrap jQuery.readyException in a function so that the lookup
// happens at the time of error handling instead of callback
// registration.
.catch(function(e){em.readyException(e)}),this},em.extend({// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,// A counter to track how many items to wait for before
// the ready event fires. See trac-6781
readyWait:1,// Handle when the DOM is ready
ready:function(e){// Abort if there are pending holds or we're already ready
!(!0===e?--em.readyWait:em.isReady)&&(// Remember that the DOM is ready
em.isReady=!0,!0!==e&&--em.readyWait>0||// If there are functions bound, to execute
e$.resolveWith(ef,[em]))}}),em.ready.then=e$.then,"complete"!==ef.readyState&&("loading"===ef.readyState||ef.documentElement.doScroll)?(// Use the handy event callback
ef.addEventListener("DOMContentLoaded",ej),// A fallback to window.onload, that will always work
e.addEventListener("load",ej)):e.setTimeout(em.ready);// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var eI=function(e,t,n,i,r,s,a){var l=0,c=e.length,u=null==n;// Sets many values
if("object"===o(n))for(l in r=!0,n)eI(e,t,l,n[l],!0,s,a);else if(void 0!==i&&(r=!0,ed(i)||(a=!0),u&&(a?(t.call(e,i),t=null):(u=t,t=function(e,t,n){return u.call(em(e),n)})),t))for(;l<c;l++)t(e[l],n,a?i:i.call(e[l],l,t(e[l],n)));return r?e:u?t.call(e):c?t(e[0],n):s},eN=/^-ms-/,eH=/-([a-z])/g,eR=function(e){// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function eq(){this.expando=em.expando+eq.uid++}eq.uid=1,eq.prototype={cache:function(e){// Check if the owner object already has a cache
var t=e[this.expando];return!t&&(t={},eR(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var i,r=this.cache(e);// Handle: [ owner, key, value ] args
// Always use camelCase key (gh-2257)
if("string"==typeof t)r[g(t)]=n;else for(i in t)r[g(i)]=t[i];return r},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][g(t)]},access:function(e,t,n){return(// In cases where either:
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
t=Array.isArray(t)?t.map(g):((t=g(t))in i)?[t]:t.match(eD)||[]).length;n--;)delete i[t[n]];// Remove the expando if there's no more data
(void 0===t||em.isEmptyObject(i))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!em.isEmptyObject(t)}};var ez=new eq,eB=new eq,eF=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,eW=/[A-Z]/g;em.extend({hasData:function(e){return eB.hasData(e)||ez.hasData(e)},data:function(e,t,n){return eB.access(e,t,n)},removeData:function(e,t){eB.remove(e,t)},// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function(e,t,n){return ez.access(e,t,n)},_removeData:function(e,t){ez.remove(e,t)}}),em.fn.extend({data:function(e,t){var n,i,r,o=this[0],s=o&&o.attributes;// Gets all values
if(void 0===e){if(this.length&&(r=eB.get(o),1===o.nodeType&&!ez.get(o,"hasDataAttrs"))){for(n=s.length;n--;)// The attrs elements can be null (trac-14894)
s[n]&&0===(i=s[n].name).indexOf("data-")&&m(o,i=g(i.slice(5)),r[i]);ez.set(o,"hasDataAttrs",!0)}return r}return(// Sets multiple values
"object"==typeof e?this.each(function(){eB.set(this,e)}):eI(this,function(t){var n;// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(o&&void 0===t)return void 0!==// Attempt to get data from the cache
// The key will always be camelCased in Data
(n=eB.get(o,e))||void 0!==// Attempt to "discover" the data in
// HTML5 custom data-* attrs
(n=m(o,e))?n:// We tried really hard, but the data doesn't exist.
void 0;// Set the data...
this.each(function(){// We always store the camelCased key
eB.set(this,e,t)})},null,t,arguments.length>1,null,!0))},removeData:function(e){return this.each(function(){eB.remove(this,e)})}}),em.extend({queue:function(e,t,n){var i;if(e)return t=(t||"fx")+"queue",i=ez.get(e,t),n&&(!i||Array.isArray(n)?i=ez.access(e,t,em.makeArray(n)):i.push(n)),i||[]},dequeue:function(e,t){t=t||"fx";var n=em.queue(e,t),i=n.length,r=n.shift(),o=em._queueHooks(e,t);"inprogress"===r&&(r=n.shift(),i--),r&&("fx"===t&&n.unshift("inprogress"),// Clear up the last queue stop function
delete o.stop,r.call(e,function(){em.dequeue(e,t)},o)),!i&&o&&o.empty.fire()},// Not public - generate a queueHooks object, or return the current one
_queueHooks:function(e,t){var n=t+"queueHooks";return ez.get(e,n)||ez.access(e,n,{empty:em.Callbacks("once memory").add(function(){ez.remove(e,[t+"queue",n])})})}}),em.fn.extend({queue:function(e,t){var n=2;return("string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n)?em.queue(this[0],e):void 0===t?this:this.each(function(){var n=em.queue(this,e,t);// Ensure a hooks for this queue
em._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&em.dequeue(this,e)})},dequeue:function(e){return this.each(function(){em.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(e,t){var n,i=1,r=em.Deferred(),o=this,s=this.length,a=function(){--i||r.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)(n=ez.get(o[s],e+"queueHooks"))&&n.empty&&(i++,n.empty.add(a));return a(),r.promise(t)}});var eG=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,eU=RegExp("^(?:([+-])=|)("+eG+")([a-z%]*)$","i"),eV=["Top","Right","Bottom","Left"],eY=ef.documentElement,eX=function(e){return em.contains(e.ownerDocument,e)},eK={composed:!0};eY.getRootNode&&(eX=function(e){return em.contains(e.ownerDocument,e)||e.getRootNode(eK)===e.ownerDocument});var eQ=function(e,t){// Inline style trumps all
return"none"===// isHiddenWithinTree might be called from jQuery#filter function;
// in that case, element will be second argument
(e=t||e).style.display||""===e.style.display&&// Otherwise, check computed style
// Support: Firefox <=43 - 45
// Disconnected elements can have computed display: none, so first confirm that elem is
// in the document.
eX(e)&&"none"===em.css(e,"display")},eZ={};em.fn.extend({show:function(){return w(this,!0)},hide:function(){return w(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){eQ(this)?em(this).show():em(this).hide()})}});var eJ=/^(?:checkbox|radio)$/i,e0=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,e1=/^$|^module$|\/(?:java|ecma)script/i;tp=ef.createDocumentFragment().appendChild(ef.createElement("div")),// Support: Android 4.0 - 4.3 only
// Check state lost if the name is set (trac-11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (trac-14901)
(tf=ef.createElement("input")).setAttribute("type","radio"),tf.setAttribute("checked","checked"),tf.setAttribute("name","t"),tp.appendChild(tf),// Support: Android <=4.1 only
// Older WebKit doesn't clone checked state correctly in fragments
eu.checkClone=tp.cloneNode(!0).cloneNode(!0).lastChild.checked,// Support: IE <=11 only
// Make sure textarea (and checkbox) defaultValue is properly cloned
tp.innerHTML="<textarea>x</textarea>",eu.noCloneChecked=!!tp.cloneNode(!0).lastChild.defaultValue,// Support: IE <=9 only
// IE <=9 replaces <option> tags with their contents when inserted outside of
// the select element.
tp.innerHTML="<option></option>",eu.option=!!tp.lastChild;// We have to close these tags to support XHTML (trac-13200)
var e2={// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};e2.tbody=e2.tfoot=e2.colgroup=e2.caption=e2.thead,e2.th=e2.td,eu.option||(e2.optgroup=e2.option=[1,"<select multiple='multiple'>","</select>"]);var e3=/<|&#?\w+;/,e4=/^([^.]*)(?:\.(.+)|)/;function e6(e,t,n,i,r,o){var s,a;// Types can be a map of types/handlers
if("object"==typeof t){for(a in"string"!=typeof n&&(// ( types-Object, data )
i=i||n,n=void 0),t)e6(e,a,n,i,t[a],o);return e}if(null==i&&null==r?(// ( types, fn )
r=n,i=n=void 0):null==r&&("string"==typeof n?(// ( types, selector, fn )
r=i,i=void 0):(// ( types, data, fn )
r=i,i=n,n=void 0)),!1===r)r=C;else if(!r)return e;return 1===o&&(s=r,// Use same guid so caller can remove using origFn
(r=function(e){return(// Can use an empty set, since event contains the info
em().off(e),s.apply(this,arguments))}).guid=s.guid||(s.guid=em.guid++)),e.each(function(){em.event.add(this,t,r,i,n)})}/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */em.event={global:{},add:function(e,t,n,i,r){var o,s,a,l,c,u,d,p,f,h,v,g=ez.get(e);// Only attach events to objects that accept data
if(eR(e))for(n.handler&&(n=(o=n).handler,r=o.selector),r&&em.find.matchesSelector(eY,r),n.guid||(n.guid=em.guid++),(l=g.events)||(l=g.events=Object.create(null)),(s=g.handle)||(s=g.handle=function(t){// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return void 0!==em&&em.event.triggered!==t.type?em.event.dispatch.apply(e,arguments):void 0}),c=// Handle multiple events separated by a space
(t=(t||"").match(eD)||[""]).length;c--;)// There *must* be a type, no attaching namespace-only handlers
f=v=(a=e4.exec(t[c])||[])[1],h=(a[2]||"").split(".").sort(),f&&(// If event changes its type, use the special event handlers for the changed type
d=em.event.special[f]||{},// If selector defined, determine special event api type, otherwise given type
f=(r?d.delegateType:d.bindType)||f,// Update special based on newly reset type
d=em.event.special[f]||{},// handleObj is passed to all event handlers
u=em.extend({type:f,origType:v,data:i,handler:n,guid:n.guid,selector:r,needsContext:r&&em.expr.match.needsContext.test(r),namespace:h.join(".")},o),(p=l[f])||((p=l[f]=[]).delegateCount=0,(!d.setup||!1===d.setup.call(e,i,h,s))&&e.addEventListener&&e.addEventListener(f,s)),d.add&&(d.add.call(e,u),u.handler.guid||(u.handler.guid=n.guid)),r?p.splice(p.delegateCount++,0,u):p.push(u),// Keep track of which events have ever been used, for event optimization
em.event.global[f]=!0)},// Detach an event or set of events from an element
remove:function(e,t,n,i,r){var o,s,a,l,c,u,d,p,f,h,v,g=ez.hasData(e)&&ez.get(e);if(g&&(l=g.events)){for(c=// Once for each type.namespace in types; type may be omitted
(t=(t||"").match(eD)||[""]).length;c--;){// Unbind all events (on this namespace, if provided) for the element
if(f=v=(a=e4.exec(t[c])||[])[1],h=(a[2]||"").split(".").sort(),!f){for(f in l)em.event.remove(e,f+t[c],n,i,!0);continue}for(d=em.event.special[f]||{},p=l[f=(i?d.delegateType:d.bindType)||f]||[],a=a[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),// Remove matching events
s=o=p.length;o--;)u=p[o],(r||v===u.origType)&&(!n||n.guid===u.guid)&&(!a||a.test(u.namespace))&&(!i||i===u.selector||"**"===i&&u.selector)&&(p.splice(o,1),u.selector&&p.delegateCount--,d.remove&&d.remove.call(e,u));s&&!p.length&&(d.teardown&&!1!==d.teardown.call(e,h,g.handle)||em.removeEvent(e,f,g.handle),delete l[f])}em.isEmptyObject(l)&&ez.remove(e,"handle events")}},dispatch:function(e){var t,n,i,r,o,s,a=Array(arguments.length),l=em.event.fix(e),c=(ez.get(this,"events")||Object.create(null))[l.type]||[],u=em.event.special[l.type]||{};for(t=1,// Use the fix-ed jQuery.Event rather than the (read-only) native event
a[0]=l;t<arguments.length;t++)a[t]=arguments[t];// Call the preDispatch hook for the mapped type, and let it bail if desired
if(l.delegateTarget=this,!u.preDispatch||!1!==u.preDispatch.call(this,l)){for(// Determine handlers
s=em.event.handlers.call(this,l,c),// Run delegates first; they may want to stop propagation beneath us
t=0;(r=s[t++])&&!l.isPropagationStopped();)for(l.currentTarget=r.elem,n=0;(o=r.handlers[n++])&&!l.isImmediatePropagationStopped();)// specially universal or its namespaces are a superset of the event's.
(!l.rnamespace||!1===o.namespace||l.rnamespace.test(o.namespace))&&(l.handleObj=o,l.data=o.data,void 0!==(i=((em.event.special[o.origType]||{}).handle||o.handler).apply(r.elem,a))&&!1===(l.result=i)&&(l.preventDefault(),l.stopPropagation()));return u.postDispatch&&u.postDispatch.call(this,l),l.result}},handlers:function(e,t){var n,i,r,o,s,a=[],l=t.delegateCount,c=e.target;// Find delegate handlers
if(l&&// Support: IE <=9
// Black-hole SVG <use> instance trees (trac-13180)
c.nodeType&&// Support: Firefox <=42
// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
// Support: IE 11 only
// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
!("click"===e.type&&e.button>=1)){for(;c!==this;c=c.parentNode||this)// Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
if(1===c.nodeType&&!("click"===e.type&&!0===c.disabled)){for(n=0,o=[],s={};n<l;n++)void 0===s[// Don't conflict with Object.prototype properties (trac-13203)
r=(i=t[n]).selector+" "]&&(s[r]=i.needsContext?em(r,this).index(c)>-1:em.find(r,this,null,[c]).length),s[r]&&o.push(i);o.length&&a.push({elem:c,handlers:o})}}return(// Add the remaining (directly-bound) handlers
c=this,l<t.length&&a.push({elem:c,handlers:t.slice(l)}),a)},addProp:function(e,t){Object.defineProperty(em.Event.prototype,e,{enumerable:!0,configurable:!0,get:ed(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[em.expando]?e:new em.Event(e)},special:{load:{// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},click:{// Utilize native event to ensure correct state for checkable inputs
setup:function(e){// For mutual compressibility with _default, replace `this` access with a local var.
// `|| data` is dead code meant only to preserve the variable through minification.
var t=this||e;// Return false to allow normal processing in the caller
return eJ.test(t.type)&&t.click&&a(t,"input")&&A(t,"click",!0),!1},trigger:function(e){// For mutual compressibility with _default, replace `this` access with a local var.
// `|| data` is dead code meant only to preserve the variable through minification.
var t=this||e;// Return non-false to allow normal event-path propagation
return eJ.test(t.type)&&t.click&&a(t,"input")&&A(t,"click"),!0},// For cross-browser consistency, suppress native .click() on links
// Also prevent it if we're currently inside a leveraged native-event stack
_default:function(e){var t=e.target;return eJ.test(t.type)&&t.click&&a(t,"input")&&ez.get(t,"click")||a(t,"a")}},beforeunload:{postDispatch:function(e){// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},em.removeEvent=function(e,t,n){// This "if" is needed for plain objects
e.removeEventListener&&e.removeEventListener(t,n)},em.Event=function(e,t){// Allow instantiation without the 'new' keyword
if(!(this instanceof em.Event))return new em.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&// Support: Android <=2.3 only
!1===e.returnValue?E:C,// Create target properties
// Support: Safari <=6 - 7 only
// Target should not be a text node (trac-504, trac-13143)
this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&em.extend(this,t),// Create a timestamp if incoming event doesn't have one
this.timeStamp=e&&e.timeStamp||Date.now(),// Mark it as fixed
this[em.expando]=!0},// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
em.Event.prototype={constructor:em.Event,isDefaultPrevented:C,isPropagationStopped:C,isImmediatePropagationStopped:C,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=E,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=E,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=E,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},// Includes all common event props including KeyEvent and MouseEvent specific props
em.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},em.event.addProp),em.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){if(ef.documentMode){// Support: IE 11+
// Attach a single focusin/focusout handler on the document while someone wants
// focus/blur. This is because the former are synchronous in IE while the latter
// are async. In other browsers, all those handlers are invoked synchronously.
// `handle` from private data would already wrap the event, but we need
// to change the `type` here.
var n=ez.get(this,"handle"),i=em.event.fix(e);i.type="focusin"===e.type?"focus":"blur",i.isSimulated=!0,// First, handle focusin/focusout
n(e),i.target===i.currentTarget&&// `jQuery.event.add`, so event handle will already have been set
// by this point.
n(i)}else // while someone wants focusin/focusout.
em.event.simulate(t,e.target,em.event.fix(e))};em.event.special[e]={// Utilize native event if possible so blur/focus sequence is correct
setup:function(){var i;if(// Claim the first handler
// dataPriv.set( this, "focus", ... )
// dataPriv.set( this, "blur", ... )
A(this,e,!0),!ef.documentMode)return!1;// Support: IE 9 - 11+
// We use the same native handler for focusin & focus (and focusout & blur)
// so we need to coordinate setup & teardown parts between those events.
// Use `delegateType` as the key as `type` is already used by `leverageNative`.
(i=ez.get(this,t))||this.addEventListener(t,n),ez.set(this,t,(i||0)+1)},trigger:function(){// Return non-false to allow normal event-path propagation
return(// Force setup before trigger
A(this,e),!0)},teardown:function(){var e;if(!ef.documentMode)return!1;(e=ez.get(this,t)-1)?ez.set(this,t,e):(this.removeEventListener(t,n),ez.remove(this,t))},// Suppress native focus or blur if we're currently inside
// a leveraged native-event stack
_default:function(t){return ez.get(t.target,e)},delegateType:t},// Support: Firefox <=44
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
em.event.special[t]={setup:function(){// Handle: regular nodes (via `this.ownerDocument`), window
// (via `this.document`) & document (via `this`).
var i=this.ownerDocument||this.document||this,r=ef.documentMode?this:i,o=ez.get(r,t);o||(ef.documentMode?this.addEventListener(t,n):i.addEventListener(e,n,!0)),ez.set(r,t,(o||0)+1)},teardown:function(){var i=this.ownerDocument||this.document||this,r=ef.documentMode?this:i,o=ez.get(r,t)-1;o?ez.set(r,t,o):(ef.documentMode?this.removeEventListener(t,n):i.removeEventListener(e,n,!0),ez.remove(r,t))}}}),// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
em.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){em.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,i=e.relatedTarget,r=e.handleObj;return i&&(i===this||em.contains(this,i))||(e.type=r.origType,n=r.handler.apply(this,arguments),e.type=t),n}}}),em.fn.extend({on:function(e,t,n,i){return e6(this,e,t,n,i)},one:function(e,t,n,i){return e6(this,e,t,n,i,1)},off:function(e,t,n){var i,r;if(e&&e.preventDefault&&e.handleObj)return(// ( event )  dispatched jQuery.Event
i=e.handleObj,em(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this);if("object"==typeof e){// ( types-object [, selector] )
for(r in e)this.off(r,t,e[r]);return this}return(!1===t||"function"==typeof t)&&(// ( types [, fn] )
n=t,t=void 0),!1===n&&(n=C),this.each(function(){em.event.remove(this,e,n,t)})}});var // In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
e9=/<script|<style|<link/i,e7=/checked\s*(?:[^=]|=\s*.checked.)/i,e8=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function e5(e,t,n,r){// Flatten any nested arrays
t=en(t);var o,s,a,l,c,u,d=0,p=e.length,f=p-1,h=t[0],v=ed(h);// We can't cloneNode fragments that contain checked, in WebKit
if(v||p>1&&"string"==typeof h&&!eu.checkClone&&e7.test(h))return e.each(function(i){var o=e.eq(i);v&&(t[0]=h.call(this,i,o.html())),e5(o,t,n,r)});if(p&&(s=(o=T(t,e[0].ownerDocument,!1,e,r)).firstChild,1===o.childNodes.length&&(o=s),s||r)){// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (trac-8070).
for(l=(a=em.map(S(o,"script"),L)).length;d<p;d++)c=o,d!==f&&(c=em.clone(c,!0,!0),l&&// push.apply(_, arraylike) throws on ancient WebKit
em.merge(a,S(c,"script"))),n.call(e[d],c,d);if(l)// Evaluate executable scripts on first document insertion
for(u=a[a.length-1].ownerDocument,// Re-enable scripts
em.map(a,_),d=0;d<l;d++)c=a[d],e1.test(c.type||"")&&!ez.access(c,"globalEval")&&em.contains(u,c)&&(c.src&&"module"!==(c.type||"").toLowerCase()?em._evalUrl&&!c.noModule&&em._evalUrl(c.src,{nonce:c.nonce||c.getAttribute("nonce")},u):// needed as in XML documents they're already not visible when
// inspecting element contents and in HTML documents they have no
// meaning but we're preserving that logic for backwards compatibility.
// This will be removed completely in 4.0. See gh-4904.
i(c.textContent.replace(e8,""),c,u))}return e}em.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var i,r,o,s,a=e.cloneNode(!0),l=eX(e);// Fix IE cloning issues
if(!eu.noCloneChecked&&(1===e.nodeType||11===e.nodeType)&&!em.isXMLDoc(e))for(i=0,// We eschew jQuery#find here for performance reasons:
// https://jsperf.com/getall-vs-sizzle/2
s=S(a),r=(o=S(e)).length;i<r;i++)M(o[i],s[i]);// Copy the events from the original to the clone
if(t){if(n)for(i=0,o=o||S(e),s=s||S(a),r=o.length;i<r;i++)O(o[i],s[i]);else O(e,a)}// Return the cloned set
return(// Preserve script evaluation history
(s=S(a,"script")).length>0&&x(s,!l&&S(e,"script")),a)},cleanData:function(e){for(var t,n,i,r=em.event.special,o=0;void 0!==(n=e[o]);o++)if(eR(n)){if(t=n[ez.expando]){if(t.events)for(i in t.events)r[i]?em.event.remove(n,i):em.removeEvent(n,i,t.handle);// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
n[ez.expando]=void 0}n[eB.expando]&&// Assign undefined instead of using delete, see Data#remove
(n[eB.expando]=void 0)}}}),em.fn.extend({detach:function(e){return D(this,e,!0)},remove:function(e){return D(this,e)},text:function(e){return eI(this,function(e){return void 0===e?em.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e)})},null,e,arguments.length)},append:function(){return e5(this,arguments,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&k(this,e).appendChild(e)})},prepend:function(){return e5(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=k(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return e5(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return e5(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(// Prevent memory leaks
em.cleanData(S(e,!1)),// Remove any remaining nodes
e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return em.clone(this,e,t)})},html:function(e){return eI(this,function(e){var t=this[0]||{},n=0,i=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;// See if we can take a shortcut and just use innerHTML
if("string"==typeof e&&!e9.test(e)&&!e2[(e0.exec(e)||["",""])[1].toLowerCase()]){e=em.htmlPrefilter(e);try{for(;n<i;n++)t=this[n]||{},1===t.nodeType&&(em.cleanData(S(t,!1)),t.innerHTML=e);t=0;// If using innerHTML throws an exception, use the fallback method
}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];// Make the changes, replacing each non-ignored context element with the new content
return e5(this,arguments,function(t){var n=this.parentNode;0>em.inArray(this,e)&&(em.cleanData(S(this)),n&&n.replaceChild(t,this));// Force callback invocation
},e)}}),em.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){em.fn[e]=function(e){for(var n,i=[],r=em(e),o=r.length-1,s=0;s<=o;s++)n=s===o?this:this.clone(!0),em(r[s])[t](n),// Support: Android <=4.0 only, PhantomJS 1 only
// .get() because push.apply(_, arraylike) throws on ancient WebKit
ei.apply(i,n.get());return this.pushStack(i)}});var te=RegExp("^("+eG+")(?!px)[a-z%]+$","i"),tt=/^--/,tn=function(t){// Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},ti=function(e,t,n){var i,r,o={};// Remember the old values, and insert the new ones
for(r in t)o[r]=e.style[r],e.style[r]=t[r];// Revert the old values
for(r in i=n.call(e),t)e.style[r]=o[r];return i},tr=RegExp(eV.join("|"),"i");th=// so they're executed at the same time to save the second computation.
function(){// This is a singleton, we need to execute it only once
if(tT){tx.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",tT.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",eY.appendChild(tx).appendChild(tT);var t=e.getComputedStyle(tT);tg="1%"!==t.top,// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
tS=12===tv(t.marginLeft),// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
// Some styles come back with percentage values, even though they shouldn't
tT.style.right="60%",tb=36===tv(t.right),// Support: IE 9 - 11 only
// Detect misreporting of content dimensions for box-sizing:border-box elements
tm=36===tv(t.width),// Support: IE 9 only
// Detect overflow:scroll screwiness (gh-3699)
// Support: Chrome <=64
// Don't get tricked when zoom affects offsetWidth (gh-4029)
tT.style.position="absolute",ty=12===tv(tT.offsetWidth/3),eY.removeChild(tx),// Nullify the div so it wouldn't be stored in the memory and
// it will also be a sign that checks already performed
tT=null}},tv=function(e){return Math.round(parseFloat(e))},tx=ef.createElement("div"),(tT=ef.createElement("div")).style&&(// Support: IE <=9 - 11 only
// Style of cloned element affects source element cloned (trac-8908)
tT.style.backgroundClip="content-box",tT.cloneNode(!0).style.backgroundClip="",eu.clearCloneStyle="content-box"===tT.style.backgroundClip,em.extend(eu,{boxSizingReliable:function(){return th(),tm},pixelBoxStyles:function(){return th(),tb},pixelPosition:function(){return th(),tg},reliableMarginLeft:function(){return th(),tS},scrollboxSize:function(){return th(),ty},// Support: IE 9 - 11+, Edge 15 - 18+
// IE/Edge misreport `getComputedStyle` of table rows with width/height
// set in CSS while `offset*` properties report correct values.
// Behavior in IE 9 is more subtle than in newer versions & it passes
// some versions of this test; make sure not to make it pass there!
//
// Support: Firefox 70+
// Only Firefox includes border widths
// in computed dimensions. (gh-4529)
reliableTrDimensions:function(){var t,n,i,r;return null==tw&&(t=ef.createElement("table"),n=ef.createElement("tr"),i=ef.createElement("div"),t.style.cssText="position:absolute;left:-11111px;border-collapse:separate",n.style.cssText="box-sizing:content-box;border:1px solid",// Support: Chrome 86+
// Height set through cssText does not get applied.
// Computed height then comes back as 0.
n.style.height="1px",i.style.height="9px",// Support: Android 8 Chrome 86+
// In our bodyBackground.html iframe,
// display for all div elements is set to "inline",
// which causes a problem only in Android 8 Chrome 86.
// Ensuring the div is `display: block`
// gets around this issue.
i.style.display="block",eY.appendChild(t).appendChild(n).appendChild(i),tw=parseInt((r=e.getComputedStyle(n)).height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===n.offsetHeight,eY.removeChild(t)),tw}}));var to=["Webkit","Moz","ms"],ts=ef.createElement("div").style,ta={},// except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
tl=/^(none|table(?!-c[ea]).+)/,tc={position:"absolute",visibility:"hidden",display:"block"},tu={letterSpacing:"0",fontWeight:"400"};function td(e,t,n,i,r){return new td.prototype.init(e,t,n,i,r)}em.extend({// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(e,t){if(t){// We should always get a number back from opacity
var n=P(e,"opacity");return""===n?"1":n}}}},// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,// SVG-related
fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{},// Get and set the style property on a DOM Node
style:function(e,t,n,i){// Don't set styles on text and comment nodes
if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){// Make sure that we're working with the right name
var o,s,a,l=g(t),c=tt.test(t),u=e.style;// Check if we're setting a value
if(c||(t=N(l)),// Gets hook for the prefixed version, then unprefixed version
a=em.cssHooks[t]||em.cssHooks[l],void 0===n)return(// If a hook was provided get the non-computed value from there
a&&"get"in a&&void 0!==(o=a.get(e,!1,i))?o:u[t]);// Make sure that null and NaN values aren't set (trac-7116)
"string"===(s=void 0===n?"undefined":(0,r._)(n))&&(o=eU.exec(n))&&o[1]&&(n=y(e,t,o),// Fixes bug trac-9237
s="number"),null!=n&&n==n&&("number"!==s||c||(n+=o&&o[3]||(em.cssNumber[l]?"":"px")),eu.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,i))||(c?u.setProperty(t,n):u[t]=n))}},css:function(e,t,n,i){var r,o,s,a=g(t);return(// Make numeric if forced or a qualifier was provided and val looks numeric
(tt.test(t)||(t=N(a)),// Try prefixed name followed by the unprefixed name
(s=em.cssHooks[t]||em.cssHooks[a])&&"get"in s&&(r=s.get(e,!0,n)),void 0===r&&(r=P(e,t,i)),"normal"===r&&t in tu&&(r=tu[t]),""===n||n)?(o=parseFloat(r),!0===n||isFinite(o)?o||0:r):r)}}),em.each(["height","width"],function(e,t){em.cssHooks[t]={get:function(e,n,i){if(n)// but it must have a current display style that would benefit
return!tl.test(em.css(e,"display"))||// Support: Safari 8+
// Table columns in Safari have non-zero offsetWidth & zero
// getBoundingClientRect().width unless display is changed.
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
e.getClientRects().length&&e.getBoundingClientRect().width?q(e,t,i):ti(e,tc,function(){return q(e,t,i)})},set:function(e,n,i){var r,o=tn(e),// to avoid forcing a reflow.
s=!eu.scrollboxSize()&&"absolute"===o.position,a=(s||i)&&"border-box"===em.css(e,"boxSizing",!1,o),l=i?R(e,t,i,a,o):0;return a&&s&&(l-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-R(e,t,"border",!1,o)-.5)),l&&(r=eU.exec(n))&&"px"!==(r[3]||"px")&&(e.style[t]=n,n=em.css(e,t)),H(e,n,l)}}}),em.cssHooks.marginLeft=j(eu.reliableMarginLeft,function(e,t){if(t)return(parseFloat(P(e,"marginLeft"))||e.getBoundingClientRect().left-ti(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),// These hooks are used by animate to expand properties
em.each({margin:"",padding:"",border:"Width"},function(e,t){em.cssHooks[e+t]={expand:function(n){for(var i=0,r={},o="string"==typeof n?n.split(" "):[n];i<4;i++)r[e+eV[i]+t]=o[i]||o[i-2]||o[0];return r}},"margin"!==e&&(em.cssHooks[e+t].set=H)}),em.fn.extend({css:function(e,t){return eI(this,function(e,t,n){var i,r,o={},s=0;if(Array.isArray(t)){for(i=tn(e),r=t.length;s<r;s++)o[t[s]]=em.css(e,t[s],!1,i);return o}return void 0!==n?em.style(e,t,n):em.css(e,t)},e,t,arguments.length>1)}}),em.Tween=td,td.prototype={constructor:td,init:function(e,t,n,i,r,o){this.elem=e,this.prop=n,this.easing=r||em.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=i,this.unit=o||(em.cssNumber[n]?"":"px")},cur:function(){var e=td.propHooks[this.prop];return e&&e.get?e.get(this):td.propHooks._default.get(this)},run:function(e){var t,n=td.propHooks[this.prop];return this.options.duration?this.pos=t=em.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):td.propHooks._default.set(this),this}},td.prototype.init.prototype=td.prototype,td.propHooks={_default:{get:function(e){var t;return(// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
(t=em.css(e.elem,e.prop,""))&&"auto"!==t?t:0)},set:function(e){// Use step hook for back compat.
// Use cssHook if its there.
// Use .style if available and use plain properties where available.
em.fx.step[e.prop]?em.fx.step[e.prop](e):1===e.elem.nodeType&&(em.cssHooks[e.prop]||null!=e.elem.style[N(e.prop)])?em.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
td.propHooks.scrollTop=td.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},em.easing={linear:function(e){return e},swing:function(e){return .5-Math.cos(e*Math.PI)/2},_default:"swing"},em.fx=td.prototype.init,// Back compat <1.8 extension point
em.fx.step={};var tp,tf,th,tv,tg,tm,ty,tb,tw,tS,tx,tT,tE,tC,tA=/^(?:toggle|show|hide)$/,tk=/queueHooks$/;function tL(e,t,n){var i,r,o=0,s=tL.prefilters.length,a=em.Deferred().always(function(){// Don't match elem in the :animated selector
delete l.elem}),l=function(){if(r)return!1;for(var t=tE||z(),n=Math.max(0,c.startTime+c.duration-t),i=1-(n/c.duration||0),o=0,s=c.tweens.length;o<s;o++)c.tweens[o].run(i);return(// If there's more to do, yield
(a.notifyWith(e,[c,i,n]),i<1&&s)?n:(s||a.notifyWith(e,[c,1,0]),// Resolve the animation and report its conclusion
a.resolveWith(e,[c]),!1))},c=a.promise({elem:e,props:em.extend({},t),opts:em.extend(!0,{specialEasing:{},easing:em.easing._default},n),originalProperties:t,originalOptions:n,startTime:tE||z(),duration:n.duration,tweens:[],createTween:function(t,n){var i=em.Tween(e,c.opts,t,n,c.opts.specialEasing[t]||c.opts.easing);return c.tweens.push(i),i},stop:function(t){var n=0,// otherwise we skip this part
i=t?c.tweens.length:0;if(r)return this;for(r=!0;n<i;n++)c.tweens[n].run(1);return t?(a.notifyWith(e,[c,1,0]),a.resolveWith(e,[c,t])):a.rejectWith(e,[c,t]),this}}),u=c.props;for(W(u,c.opts.specialEasing);o<s;o++)if(i=tL.prefilters[o].call(c,e,u,c.opts))return ed(i.stop)&&(em._queueHooks(c.elem,c.opts.queue).stop=i.stop.bind(i)),i;return em.map(u,F,c),ed(c.opts.start)&&c.opts.start.call(e,c),// Attach callbacks from options
c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always),em.fx.timer(em.extend(l,{elem:e,anim:c,queue:c.opts.queue})),c}em.Animation=em.extend(tL,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return y(n.elem,e,eU.exec(t),n),n}]},tweener:function(e,t){ed(e)?(t=e,e=["*"]):e=e.match(eD);for(var n,i=0,r=e.length;i<r;i++)n=e[i],tL.tweeners[n]=tL.tweeners[n]||[],tL.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var i,r,o,s,a,l,c,u,d="width"in t||"height"in t,p=this,f={},h=e.style,v=e.nodeType&&eQ(e),g=ez.get(e,"fxshow");// Detect show/hide animations
for(i in n.queue||(null==(s=em._queueHooks(e,"fx")).unqueued&&(s.unqueued=0,a=s.empty.fire,s.empty.fire=function(){s.unqueued||a()}),s.unqueued++,p.always(function(){// Ensure the complete handler is called before this completes
p.always(function(){s.unqueued--,em.queue(e,"fx").length||s.empty.fire()})})),t)if(tA.test(r=t[i])){if(delete t[i],o=o||"toggle"===r,r===(v?"hide":"show")){// Pretend to be hidden if this is a "show" and
// there is still data from a stopped show/hide
if("show"!==r||!g||void 0===g[i])continue;v=!0}f[i]=g&&g[i]||em.style(e,i)}if(!(!// Bail out if this is a no-op like .hide().hide()
(l=!em.isEmptyObject(t))&&em.isEmptyObject(f)))for(i in d&&1===e.nodeType&&(// Support: IE <=9 - 11, Edge 12 - 15
// Record all 3 overflow attributes because IE does not infer the shorthand
// from identically-valued overflowX and overflowY and Edge just mirrors
// the overflowX value there.
n.overflow=[h.overflow,h.overflowX,h.overflowY],null==// Identify a display type, preferring old show/hide data over the CSS cascade
(c=g&&g.display)&&(c=ez.get(e,"display")),"none"===(u=em.css(e,"display"))&&(c?u=c:(// Get nonempty value(s) by temporarily forcing visibility
w([e],!0),c=e.style.display||c,u=em.css(e,"display"),w([e]))),("inline"===u||"inline-block"===u&&null!=c)&&"none"===em.css(e,"float")&&(l||(p.done(function(){h.display=c}),null!=c||(c="none"===(u=h.display)?"":u)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),// Implement show/hide animations
l=!1,f)l||(g?"hidden"in g&&(v=g.hidden):g=ez.access(e,"fxshow",{display:c}),o&&(g.hidden=!v),v&&w([e],!0),/* eslint-disable no-loop-func */p.done(function(){for(i in v||w([e]),ez.remove(e,"fxshow"),f)em.style(e,i,f[i])})),// Per-property setup
l=F(v?g[i]:0,i,p),i in g||(g[i]=l.start,v&&(l.end=l.start,l.start=0))}],prefilter:function(e,t){t?tL.prefilters.unshift(e):tL.prefilters.push(e)}}),em.speed=function(e,t,n){var i=e&&"object"==typeof e?em.extend({},e):{complete:n||!n&&t||ed(e)&&e,duration:e,easing:n&&t||t&&!ed(t)&&t};return em.fx.off?i.duration=0:"number"!=typeof i.duration&&(i.duration in em.fx.speeds?i.duration=em.fx.speeds[i.duration]:i.duration=em.fx.speeds._default),(null==i.queue||!0===i.queue)&&(i.queue="fx"),// Queueing
i.old=i.complete,i.complete=function(){ed(i.old)&&i.old.call(this),i.queue&&em.dequeue(this,i.queue)},i},em.fn.extend({fadeTo:function(e,t,n,i){// Show any hidden elements after setting opacity to 0
return this.filter(eQ).css("opacity",0).show()// Animate to the value specified
.end().animate({opacity:t},e,n,i)},animate:function(e,t,n,i){var r=em.isEmptyObject(e),o=em.speed(t,n,i),s=function(){// Operate on a copy of prop so per-property easing won't be lost
var t=tL(this,em.extend({},e),o);// Empty animations, or finishing resolves immediately
(r||ez.get(this,"finish"))&&t.stop(!0)};return s.finish=s,r||!1===o.queue?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var i=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each(function(){var t=!0,r=null!=e&&e+"queueHooks",o=em.timers,s=ez.get(this);if(r)s[r]&&s[r].stop&&i(s[r]);else for(r in s)s[r]&&s[r].stop&&tk.test(r)&&i(s[r]);for(r=o.length;r--;)o[r].elem===this&&(null==e||o[r].queue===e)&&(o[r].anim.stop(n),t=!1,o.splice(r,1));// Start the next in the queue if the last step wasn't forced.
// Timers currently will call their complete callbacks, which
// will dequeue but only if they were gotoEnd.
(t||!n)&&em.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=ez.get(this),i=n[e+"queue"],r=n[e+"queueHooks"],o=em.timers,s=i?i.length:0;// Look for any active animations, and finish them
for(// Enable finishing flag on private data
n.finish=!0,// Empty the queue first
em.queue(this,e,[]),r&&r.stop&&r.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));// Look for any animations in the old queue and finish them
for(t=0;t<s;t++)i[t]&&i[t].finish&&i[t].finish.call(this);// Turn off finishing flag
delete n.finish})}}),em.each(["toggle","show","hide"],function(e,t){var n=em.fn[t];em.fn[t]=function(e,i,r){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(B(t,!0),e,i,r)}}),// Generate shortcuts for custom animations
em.each({slideDown:B("show"),slideUp:B("hide"),slideToggle:B("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){em.fn[e]=function(e,n,i){return this.animate(t,e,n,i)}}),em.timers=[],em.fx.tick=function(){var e,t=0,n=em.timers;for(tE=Date.now();t<n.length;t++)// Run the timer and safely remove it when done (allowing for external removal)
(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||em.fx.stop(),tE=void 0},em.fx.timer=function(e){em.timers.push(e),em.fx.start()},em.fx.interval=13,em.fx.start=function(){tC||(tC=!0,function t(){tC&&(!1===ef.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(t):e.setTimeout(t,em.fx.interval),em.fx.tick())}())},em.fx.stop=function(){tC=null},em.fx.speeds={slow:600,fast:200,// Default speed
_default:400},// Based off of the plugin by Clint Helfers, with permission.
em.fn.delay=function(t,n){return t=em.fx&&em.fx.speeds[t]||t,n=n||"fx",this.queue(n,function(n,i){var r=e.setTimeout(n,t);i.stop=function(){e.clearTimeout(r)}})},t_=ef.createElement("input"),tO=ef.createElement("select").appendChild(ef.createElement("option")),t_.type="checkbox",// Support: Android <=4.3 only
// Default value for a checkbox should be "on"
eu.checkOn=""!==t_.value,// Support: IE <=11 only
// Must access selectedIndex to make default options select
eu.optSelected=tO.selected,// Support: IE <=11 only
// An input loses its value after becoming a radio
(t_=ef.createElement("input")).value="t",t_.type="radio",eu.radioValue="t"===t_.value;var t_,tO,tM,tD=em.expr.attrHandle;em.fn.extend({attr:function(e,t){return eI(this,em.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){em.removeAttr(this,e)})}}),em.extend({attr:function(e,t,n){var i,r,o=e.nodeType;// Don't get/set attributes on text, comment and attribute nodes
if(3!==o&&8!==o&&2!==o){// Fallback to prop when attributes are not supported
if(void 0===e.getAttribute)return em.prop(e,t,n);if(1===o&&em.isXMLDoc(e)||(r=em.attrHooks[t.toLowerCase()]||(em.expr.match.bool.test(t)?tM:void 0)),void 0!==n){if(null===n){em.removeAttr(e,t);return}return r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n)}return r&&"get"in r&&null!==(i=r.get(e,t))?i:null==(i=em.find.attr(e,t))?void 0:i}},attrHooks:{type:{set:function(e,t){if(!eu.radioValue&&"radio"===t&&a(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,i=0,// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
r=t&&t.match(eD);if(r&&1===e.nodeType)for(;n=r[i++];)e.removeAttribute(n)}}),// Hooks for boolean attributes
tM={set:function(e,t,n){return!1===t?em.removeAttr(e,n):e.setAttribute(n,n),n}},em.each(em.expr.match.bool.source.match(/\w+/g),function(e,t){var n=tD[t]||em.find.attr;tD[t]=function(e,t,i){var r,o,s=t.toLowerCase();return i||(// Avoid an infinite loop by temporarily removing this function from the getter
o=tD[s],tD[s]=r,r=null!=n(e,t,i)?s:null,tD[s]=o),r}});var tP=/^(?:input|select|textarea|button)$/i,t$=/^(?:a|area)$/i;em.fn.extend({prop:function(e,t){return eI(this,em.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[em.propFix[e]||e]})}}),em.extend({prop:function(e,t,n){var i,r,o=e.nodeType;// Don't get/set properties on text, comment and attribute nodes
if(3!==o&&8!==o&&2!==o)return(1===o&&em.isXMLDoc(e)||(// Fix name and attach hooks
t=em.propFix[t]||t,r=em.propHooks[t]),void 0!==n)?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:e[t]=n:r&&"get"in r&&null!==(i=r.get(e,t))?i:e[t]},propHooks:{tabIndex:{get:function(e){// Support: IE <=9 - 11 only
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// Use proper attribute retrieval (trac-12072)
var t=em.find.attr(e,"tabindex");return t?parseInt(t,10):tP.test(e.nodeName)||t$.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),eu.optSelected||(em.propHooks.selected={get:function(e){/* eslint no-unused-expressions: "off" */var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){/* eslint no-unused-expressions: "off" */var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),em.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){em.propFix[this.toLowerCase()]=this}),em.fn.extend({addClass:function(e){var t,n,i,r,o,s;return ed(e)?this.each(function(t){em(this).addClass(e.call(this,t,U(this)))}):(t=V(e)).length?this.each(function(){if(i=U(this),n=1===this.nodeType&&" "+G(i)+" "){for(o=0;o<t.length;o++)r=t[o],0>n.indexOf(" "+r+" ")&&(n+=r+" ");i!==// Only assign if different to avoid unneeded rendering.
(s=G(n))&&this.setAttribute("class",s)}}):this},removeClass:function(e){var t,n,i,r,o,s;return ed(e)?this.each(function(t){em(this).removeClass(e.call(this,t,U(this)))}):arguments.length?(t=V(e)).length?this.each(function(){if(i=U(this),// This expression is here for better compressibility (see addClass)
n=1===this.nodeType&&" "+G(i)+" "){for(o=0;o<t.length;o++)// Remove *all* instances
for(r=t[o];n.indexOf(" "+r+" ")>-1;)n=n.replace(" "+r+" "," ");i!==// Only assign if different to avoid unneeded rendering.
(s=G(n))&&this.setAttribute("class",s)}}):this:this.attr("class","")},toggleClass:function(e,t){var n,i,o,s,a=void 0===e?"undefined":(0,r._)(e),l="string"===a||Array.isArray(e);return ed(e)?this.each(function(n){em(this).toggleClass(e.call(this,n,U(this),t),t)}):"boolean"==typeof t&&l?t?this.addClass(e):this.removeClass(e):(n=V(e),this.each(function(){if(l)for(o=0,// Toggle individual class names
s=em(this);o<n.length;o++)i=n[o],s.hasClass(i)?s.removeClass(i):s.addClass(i);else(void 0===e||"boolean"===a)&&((i=U(this))&&ez.set(this,"__className__",i),this.setAttribute&&this.setAttribute("class",i||!1===e?"":ez.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,i=0;for(t=" "+e+" ";n=this[i++];)if(1===n.nodeType&&(" "+G(U(n))+" ").indexOf(t)>-1)return!0;return!1}});var tj=/\r/g;em.fn.extend({val:function(e){var t,n,i,r=this[0];return arguments.length?(i=ed(e),this.each(function(n){var r;1!==this.nodeType||(null==(r=i?e.call(this,n,em(this).val()):e)?r="":"number"==typeof r?r+="":Array.isArray(r)&&(r=em.map(r,function(e){return null==e?"":e+""})),(t=em.valHooks[this.type]||em.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,r,"value")||(this.value=r))})):r?(t=em.valHooks[r.type]||em.valHooks[r.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(r,"value"))?n:"string"==typeof(n=r.value)?n.replace(tj,""):null==n?"":n:void 0}}),em.extend({valHooks:{option:{get:function(e){var t=em.find.attr(e,"value");return null!=t?t:// option.text throws exceptions (trac-14686, trac-14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
G(em.text(e))}},select:{get:function(e){var t,n,i,r=e.options,o=e.selectedIndex,s="select-one"===e.type,l=s?null:[],c=s?o+1:r.length;// Loop through all the selected options
for(i=o<0?c:s?o:0;i<c;i++)// Support: IE <=9 only
// IE8-9 doesn't update selected after form reset (trac-2551)
if(((n=r[i]).selected||i===o)&&// Don't return options that are disabled or in a disabled optgroup
!n.disabled&&(!n.parentNode.disabled||!a(n.parentNode,"optgroup"))){// We don't need an array for one selects
if(// Get the specific value for the option
t=em(n).val(),s)return t;// Multi-Selects return an array
l.push(t)}return l},set:function(e,t){for(var n,i,r=e.options,o=em.makeArray(t),s=r.length;s--;)/* eslint-disable no-cond-assign */((i=r[s]).selected=em.inArray(em.valHooks.option.get(i),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),// Radios and checkboxes getter/setter
em.each(["radio","checkbox"],function(){em.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=em.inArray(em(e).val(),t)>-1}},eu.checkOn||(em.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});// Return jQuery for attributes-only inclusion
var tI=e.location,tN={guid:Date.now()},tH=/\?/;// Cross-browser xml parsing
em.parseXML=function(t){var n,i;if(!t||"string"!=typeof t)return null;// Support: IE 9 - 11 only
// IE throws on parseFromString with invalid input.
try{n=new e.DOMParser().parseFromString(t,"text/xml")}catch(e){}return i=n&&n.getElementsByTagName("parsererror")[0],(!n||i)&&em.error("Invalid XML: "+(i?em.map(i.childNodes,function(e){return e.textContent}).join("\n"):t)),n};var tR=/^(?:focusinfocus|focusoutblur)$/,tq=function(e){e.stopPropagation()};em.extend(em.event,{trigger:function(t,n,i,r){var o,s,a,l,c,u,d,p,f=[i||ef],h=ea.call(t,"type")?t.type:t,v=ea.call(t,"namespace")?t.namespace.split("."):[];// Don't do events on text and comment nodes
if(s=p=a=i=i||ef,!(3===i.nodeType||8===i.nodeType||tR.test(h+em.event.triggered))&&(h.indexOf(".")>-1&&(h=// Namespaced trigger; create a regexp to match event type in handle()
(v=h.split(".")).shift(),v.sort()),c=0>h.indexOf(":")&&"on"+h,// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
// Caller can pass in a jQuery.Event object, Object, or just an event type string
(t=t[em.expando]?t:new em.Event(h,"object"==typeof t&&t)).isTrigger=r?2:3,t.namespace=v.join("."),t.rnamespace=t.namespace?RegExp("(^|\\.)"+v.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,// Clean up the event in case it is being reused
t.result=void 0,t.target||(t.target=i),// Clone any incoming data and prepend the event, creating the handler arg list
n=null==n?[t]:em.makeArray(n,[t]),// Allow special events to draw outside the lines
d=em.event.special[h]||{},r||!d.trigger||!1!==d.trigger.apply(i,n))){// Determine event propagation path in advance, per W3C events spec (trac-9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
if(!r&&!d.noBubble&&!ep(i)){for(l=d.delegateType||h,tR.test(l+h)||(s=s.parentNode);s;s=s.parentNode)f.push(s),a=s;a===(i.ownerDocument||ef)&&f.push(a.defaultView||a.parentWindow||e)}for(// Fire handlers on the event path
o=0;(s=f[o++])&&!t.isPropagationStopped();)p=s,t.type=o>1?l:d.bindType||h,// jQuery handler
(u=(ez.get(s,"events")||Object.create(null))[t.type]&&ez.get(s,"handle"))&&u.apply(s,n),// Native handler
(u=c&&s[c])&&u.apply&&eR(s)&&(t.result=u.apply(s,n),!1===t.result&&t.preventDefault());return t.type=h,!r&&!t.isDefaultPrevented()&&(!d._default||!1===d._default.apply(f.pop(),n))&&eR(i)&&c&&ed(i[h])&&!ep(i)&&(// Don't re-trigger an onFOO event when we call its FOO() method
(a=i[c])&&(i[c]=null),// Prevent re-triggering of the same event, since we already bubbled it above
em.event.triggered=h,t.isPropagationStopped()&&p.addEventListener(h,tq),i[h](),t.isPropagationStopped()&&p.removeEventListener(h,tq),em.event.triggered=void 0,a&&(i[c]=a)),t.result}},// Piggyback on a donor event to simulate a different one
// Used only for `focus(in | out)` events
simulate:function(e,t,n){var i=em.extend(new em.Event,n,{type:e,isSimulated:!0});em.event.trigger(i,null,t)}}),em.fn.extend({trigger:function(e,t){return this.each(function(){em.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return em.event.trigger(e,t,n,!0)}});var tz=/\[\]$/,tB=/\r?\n/g,tF=/^(?:submit|button|image|reset|file)$/i,tW=/^(?:input|select|textarea|keygen)/i;// Serialize an array of form elements or a set of
// key/values into a query string
em.param=function(e,t){var n,i=[],r=function(e,t){// If value is a function, invoke it and use its return value
var n=ed(t)?t():t;i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";// If an array was passed in, assume that it is an array of form elements.
if(Array.isArray(e)||e.jquery&&!em.isPlainObject(e))em.each(e,function(){r(this.name,this.value)});else // did it), otherwise encode params recursively.
for(n in e)!function e(t,n,i,r){var s;if(Array.isArray(n))em.each(n,function(n,o){i||tz.test(t)?r(t,o):e(t+"["+("object"==typeof o&&null!=o?n:"")+"]",o,i,r)});else if(i||"object"!==o(n))r(t,n);else for(s in n)e(t+"["+s+"]",n[s],i,r)}(n,e[n],t,r);// Return the resulting serialization
return i.join("&")},em.fn.extend({serialize:function(){return em.param(this.serializeArray())},serializeArray:function(){return this.map(function(){// Can add propHook for "elements" to filter or add form elements
var e=em.prop(this,"elements");return e?em.makeArray(e):this}).filter(function(){var e=this.type;// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!em(this).is(":disabled")&&tW.test(this.nodeName)&&!tF.test(e)&&(this.checked||!eJ.test(e))}).map(function(e,t){var n=em(this).val();return null==n?null:Array.isArray(n)?em.map(n,function(e){return{name:t.name,value:e.replace(tB,"\r\n")}}):{name:t.name,value:n.replace(tB,"\r\n")}}).get()}});var tG=/%20/g,tU=/#.*$/,tV=/([?&])_=[^&]*/,tY=/^(.*?):[ \t]*([^\r\n]*)$/mg,tX=/^(?:GET|HEAD)$/,tK=/^\/\//,/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */tQ={},/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */tZ={},tJ="*/".concat("*"),t0=ef.createElement("a");t0.href=tI.href,em.extend({// Counter for holding the number of active queries
active:0,// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:tI.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(tI.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/accepts:{"*":tJ,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{// Convert anything to text
"* text":String,// Text to html (true = no transformation)
"text html":!0,// Evaluate text as a json expression
"text json":JSON.parse,// Parse text as xml
"text xml":em.parseXML},// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:!0,context:!0}},// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(e,t){return t?K(K(e,em.ajaxSettings),t):K(em.ajaxSettings,e)},ajaxPrefilter:Y(tQ),ajaxTransport:Y(tZ),// Main method
ajax:function(t,n){var i=function(t,n,i,a){var c,p,f,w,S,x=n;// Ignore repeat invocations
u||(u=!0,l&&e.clearTimeout(l),// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
r=void 0,// Cache response headers
s=a||"",// Set readyState
T.readyState=t>0?4:0,// Determine if successful
c=t>=200&&t<300||304===t,i&&(w=Q(h,T,i)),!c&&em.inArray("script",h.dataTypes)>-1&&0>em.inArray("json",h.dataTypes)&&(h.converters["text script"]=function(){}),// Convert no matter what (that way responseXXX fields are always set)
w=Z(h,w,T,c),c?(h.ifModified&&((S=T.getResponseHeader("Last-Modified"))&&(em.lastModified[o]=S),(S=T.getResponseHeader("etag"))&&(em.etag[o]=S)),204===t||"HEAD"===h.type?x="nocontent":304===t?x="notmodified":(x=w.state,p=w.data,c=!(f=w.error))):(// Extract error from statusText and normalize for non-aborts
f=x,(t||!x)&&(x="error",t<0&&(t=0))),// Set data for the fake xhr object
T.status=t,T.statusText=(n||x)+"",c?m.resolveWith(v,[p,x,T]):m.rejectWith(v,[T,x,f]),// Status-dependent callbacks
T.statusCode(b),b=void 0,d&&g.trigger(c?"ajaxSuccess":"ajaxError",[T,h,c?p:f]),// Complete
y.fireWith(v,[T,x]),!d||(g.trigger("ajaxComplete",[T,h]),--em.active||em.event.trigger("ajaxStop")))};"object"==typeof t&&(n=t,t=void 0),// Force options to be an object
n=n||{};var r,o,s,a,l,c,u,d,p,f,h=em.ajaxSetup({},n),v=h.context||h,g=h.context&&(v.nodeType||v.jquery)?em(v):em.event,m=em.Deferred(),y=em.Callbacks("once memory"),b=h.statusCode||{},w={},S={},x="canceled",T={readyState:0,// Builds headers hashtable if needed
getResponseHeader:function(e){var t;if(u){if(!a)for(a={};t=tY.exec(s);)a[t[1].toLowerCase()+" "]=(a[t[1].toLowerCase()+" "]||[]).concat(t[2]);t=a[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},// Raw string
getAllResponseHeaders:function(){return u?s:null},// Caches the header
setRequestHeader:function(e,t){return null==u&&(w[e=S[e.toLowerCase()]=S[e.toLowerCase()]||e]=t),this},// Overrides response content-type header
overrideMimeType:function(e){return null==u&&(h.mimeType=e),this},// Status-dependent callbacks
statusCode:function(e){var t;if(e){if(u)T.always(e[T.status]);else for(t in e)b[t]=[b[t],e[t]]}return this},// Cancel the request
abort:function(e){var t=e||x;return r&&r.abort(t),i(0,t),this}};// A cross-domain request is in order when the origin doesn't match the current origin.
if(// Attach deferreds
m.promise(T),// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (trac-10093: consistency with old signature)
// We also use the url parameter if available
h.url=((t||h.url||tI.href)+"").replace(tK,tI.protocol+"//"),// Alias method option to type as per ticket trac-12004
h.type=n.method||n.type||h.method||h.type,// Extract dataTypes list
h.dataTypes=(h.dataType||"*").toLowerCase().match(eD)||[""],null==h.crossDomain){c=ef.createElement("a");// Support: IE <=8 - 11, Edge 12 - 15
// IE throws exception on accessing the href property if url is malformed,
// e.g. http://example.com:80x/
try{c.href=h.url,// Support: IE <=8 - 11 only
// Anchor's host property isn't correctly set when s.url is relative
c.href=c.href,h.crossDomain=t0.protocol+"//"+t0.host!=c.protocol+"//"+c.host}catch(e){// If there is an error parsing the URL, assume it is crossDomain,
// it can be rejected by the transport if it is invalid
h.crossDomain=!0}}// If request was aborted inside a prefilter, stop there
if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=em.param(h.data,h.traditional)),// Apply prefilters
X(tQ,h,n,T),u)return T;// Check for headers option
for(p in// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
(d=em.event&&h.global)&&0==em.active++&&em.event.trigger("ajaxStart"),// Uppercase the type
h.type=h.type.toUpperCase(),// Determine if request has content
h.hasContent=!tX.test(h.type),// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
// Remove hash to simplify url manipulation
o=h.url.replace(tU,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(tG,"+")):(// Remember the hash so we can put it back
f=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(tH.test(o)?"&":"?")+h.data,// trac-9682: remove data so that it's not used in an eventual retry
delete h.data),!1===h.cache&&(o=o.replace(tV,"$1"),f=(tH.test(o)?"&":"?")+"_="+tN.guid+++f),// Put hash and anti-cache on the URL that will be requested (gh-1732)
h.url=o+f),h.ifModified&&(em.lastModified[o]&&T.setRequestHeader("If-Modified-Since",em.lastModified[o]),em.etag[o]&&T.setRequestHeader("If-None-Match",em.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&T.setRequestHeader("Content-Type",h.contentType),// Set the Accepts header for the server, depending on the dataType
T.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+tJ+"; q=0.01":""):h.accepts["*"]),h.headers)T.setRequestHeader(p,h.headers[p]);// Allow custom headers/mimetypes and early abort
if(h.beforeSend&&(!1===h.beforeSend.call(v,T,h)||u))return T.abort();// If no transport, we auto-abort
if(// Aborting is no longer a cancellation
x="abort",// Install callbacks on deferreds
y.add(h.complete),T.done(h.success),T.fail(h.error),// Get transport
r=X(tZ,h,n,T)){// If request was aborted inside ajaxSend, stop there
if(T.readyState=1,d&&g.trigger("ajaxSend",[T,h]),u)return T;h.async&&h.timeout>0&&(l=e.setTimeout(function(){T.abort("timeout")},h.timeout));try{u=!1,r.send(w,i)}catch(e){// Rethrow post-completion exceptions
if(u)throw e;// Propagate others as results
i(-1,e)}}else i(-1,"No Transport");return T},getJSON:function(e,t,n){return em.get(e,t,n,"json")},getScript:function(e,t){return em.get(e,void 0,t,"script")}}),em.each(["get","post"],function(e,t){em[t]=function(e,n,i,r){// The url can be an options object (which then must have .url)
return ed(n)&&(r=r||i,i=n,n=void 0),em.ajax(em.extend({url:e,type:t,dataType:r,data:n,success:i},em.isPlainObject(e)&&e))}}),em.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),em._evalUrl=function(e,t,n){return em.ajax({url:e,// Make this explicit, since user can override this through ajaxSetup (trac-11264)
type:"GET",dataType:"script",cache:!0,async:!1,global:!1,// Only evaluate the response if it is successful (gh-4126)
// dataFilter is not invoked for failure responses, so using it instead
// of the default converter is kludgy but it works.
converters:{"text script":function(){}},dataFilter:function(e){em.globalEval(e,t,n)}})},em.fn.extend({wrapAll:function(e){var t;return this[0]&&(ed(e)&&(e=e.call(this[0])),// The elements to wrap the target around
t=em(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return ed(e)?this.each(function(t){em(this).wrapInner(e.call(this,t))}):this.each(function(){var t=em(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=ed(e);return this.each(function(n){em(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){em(this).replaceWith(this.childNodes)}),this}}),em.expr.pseudos.hidden=function(e){return!em.expr.pseudos.visible(e)},em.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},em.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var t1={// File protocol always yields status code 0, assume 200
0:200,// Support: IE <=9 only
// trac-1450: sometimes IE returns 1223 when it should be 204
1223:204},t2=em.ajaxSettings.xhr();eu.cors=!!t2&&"withCredentials"in t2,eu.ajax=t2=!!t2,em.ajaxTransport(function(t){var n,i;// Cross domain only allowed if supported through XMLHttpRequest
if(eu.cors||t2&&!t.crossDomain)return{send:function(r,o){var s,a=t.xhr();// Apply custom fields if provided
if(a.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(s in t.xhrFields)a[s]=t.xhrFields[s];// Set headers
for(s in t.mimeType&&a.overrideMimeType&&a.overrideMimeType(t.mimeType),t.crossDomain||r["X-Requested-With"]||(r["X-Requested-With"]="XMLHttpRequest"),r)a.setRequestHeader(s,r[s]);// Callback
n=function(e){return function(){n&&(n=i=a.onload=a.onerror=a.onabort=a.ontimeout=a.onreadystatechange=null,"abort"===e?a.abort():"error"===e?"number"!=typeof a.status?o(0,"error"):o(a.status,a.statusText):o(t1[a.status]||a.status,a.statusText,"text"!==// IE9 has no XHR2 but throws on binary (trac-11426)
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
em.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),// Install script dataType
em.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return em.globalEval(e),e}}}),// Handle cache's special case and crossDomain
em.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),// Bind script tag hack transport
em.ajaxTransport("script",function(e){// This transport only deals with cross domain or forced-by-attrs requests
if(e.crossDomain||e.scriptAttrs){var t,n;return{send:function(i,r){t=em("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&r("error"===e.type?404:200,e.type)}),// Use native DOM manipulation to avoid our domManip AJAX trickery
ef.head.appendChild(t[0])},abort:function(){n&&n()}}}});var t3=[],t4=/(=)\?(?=&|$)|\?\?/;// Default jsonp settings
em.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=t3.pop()||em.expando+"_"+tN.guid++;return this[e]=!0,e}}),// Detect, normalize options and install callbacks for jsonp requests
em.ajaxPrefilter("json jsonp",function(t,n,i){var r,o,s,a=!1!==t.jsonp&&(t4.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&t4.test(t.data)&&"data");// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(a||"jsonp"===t.dataTypes[0])// Delegate to script
return(// Get callback name, remembering preexisting value associated with it
r=t.jsonpCallback=ed(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(t4,"$1"+r):!1!==t.jsonp&&(t.url+=(tH.test(t.url)?"&":"?")+t.jsonp+"="+r),// Use data converter to retrieve json after script execution
t.converters["script json"]=function(){return s||em.error(r+" was not called"),s[0]},// Force json dataType
t.dataTypes[0]="json",// Install callback
o=e[r],e[r]=function(){s=arguments},// Clean-up function (fires after converters)
i.always(function(){void 0===o?em(e).removeProp(r):e[r]=o,t[r]&&(// Make sure that re-using the options doesn't screw things around
t.jsonpCallback=n.jsonpCallback,// Save the callback name for future use
t3.push(r)),s&&ed(o)&&o(s[0]),s=o=void 0}),"script")}),// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
eu.createHTMLDocument=((n=ef.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===n.childNodes.length),// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
em.parseHTML=function(e,t,n){var i,r,o;return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(eu.createHTMLDocument?(// Set the base href for the created document
// so any parsed elements with URLs
// are based on the document's URL (gh-2965)
(i=(t=ef.implementation.createHTMLDocument("")).createElement("base")).href=ef.location.href,t.head.appendChild(i)):t=ef),r=ek.exec(e),o=!n&&[],r)?[t.createElement(r[1])]:(r=T([e],t,o),o&&o.length&&em(o).remove(),em.merge([],r.childNodes))},/**
 * Load a url into a page
 */em.fn.load=function(e,t,n){var i,r,o,s=this,a=e.indexOf(" ");return a>-1&&(i=G(e.slice(a)),e=e.slice(0,a)),ed(t)?(// We assume that it's the callback
n=t,t=void 0):t&&"object"==typeof t&&(r="POST"),s.length>0&&em.ajax({url:e,// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:r||"GET",dataType:"html",data:t}).done(function(e){// Save response for use in complete callback
o=arguments,s.html(i?// Exclude scripts to avoid IE 'Permission Denied' errors
em("<div>").append(em.parseHTML(e)).find(i):e);// If the request succeeds, this function gets "data", "status", "jqXHR"
// but they are ignored because response was set above.
// If it fails, this function gets "jqXHR", "status", "error"
}).always(n&&function(e,t){s.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},em.expr.pseudos.animated=function(e){return em.grep(em.timers,function(t){return e===t.elem}).length},em.offset={setOffset:function(e,t,n){var i,r,o,s,a,l,c=em.css(e,"position"),u=em(e),d={};"static"===c&&(e.style.position="relative"),a=u.offset(),o=em.css(e,"top"),l=em.css(e,"left"),("absolute"===c||"fixed"===c)&&(o+l).indexOf("auto")>-1?(s=(i=u.position()).top,r=i.left):(s=parseFloat(o)||0,r=parseFloat(l)||0),ed(t)&&(t=t.call(e,n,em.extend({},a))),null!=t.top&&(d.top=t.top-a.top+s),null!=t.left&&(d.left=t.left-a.left+r),"using"in t?t.using.call(e,d):u.css(d)}},em.fn.extend({// offset() relates an element's border box to the document origin
offset:function(e){// Preserve chaining for setter
if(arguments.length)return void 0===e?this:this.each(function(t){em.offset.setOffset(this,e,t)});var t,n,i=this[0];if(i)return(// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
i.getClientRects().length?(// Get document-relative position by adding viewport scroll to viewport-relative gBCR
t=i.getBoundingClientRect(),n=i.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0})},// position() relates an element's margin box to its offset parent's padding box
// This corresponds to the behavior of CSS absolute positioning
position:function(){if(this[0]){var e,t,n,i=this[0],r={top:0,left:0};// position:fixed elements are offset from the viewport, which itself always has zero offset
if("fixed"===em.css(i,"position"))t=i.getBoundingClientRect();else{for(t=this.offset(),// Account for the *real* offset parent, which can be the document or its root element
// when a statically positioned element is identified
n=i.ownerDocument,e=i.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===em.css(e,"position");)e=e.parentNode;e&&e!==i&&1===e.nodeType&&(// Incorporate borders into its offset, since they are outside its content origin
r=em(e).offset(),r.top+=em.css(e,"borderTopWidth",!0),r.left+=em.css(e,"borderLeftWidth",!0))}// Subtract parent offsets and element margins
return{top:t.top-r.top-em.css(i,"marginTop",!0),left:t.left-r.left-em.css(i,"marginLeft",!0)}}},// This method will return documentElement in the following cases:
// 1) For the element inside the iframe without offsetParent, this method will return
//    documentElement of the parent window
// 2) For the hidden or detached element
// 3) For body or html element, i.e. in case of the html node - it will return itself
//
// but those exceptions were never presented as a real life use-cases
// and might be considered as more preferable results.
//
// This logic, however, is not guaranteed and can change at any point in the future
offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===em.css(e,"position");)e=e.offsetParent;return e||eY})}}),// Create scrollLeft and scrollTop methods
em.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;em.fn[e]=function(i){return eI(this,function(e,i,r){// Coalesce documents and windows
var o;if(ep(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===r)return o?o[t]:e[i];o?o.scrollTo(n?o.pageXOffset:r,n?r:o.pageYOffset):e[i]=r},e,i,arguments.length)}}),// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
em.each(["top","left"],function(e,t){em.cssHooks[t]=j(eu.pixelPosition,function(e,n){if(n)// If curCSS returns percentage, fallback to offset
return n=P(e,t),te.test(n)?em(e).position()[t]+"px":n})}),// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
em.each({Height:"height",Width:"width"},function(e,t){em.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,i){// Margin is only for outerHeight, outerWidth
em.fn[i]=function(r,o){var s=arguments.length&&(n||"boolean"!=typeof r),a=n||(!0===r||!0===o?"margin":"border");return eI(this,function(t,n,r){var o;return ep(t)?0===i.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===r?em.css(t,n,a):em.style(t,n,r,a)},t,s?r:void 0,s)}})}),em.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){em.fn[t]=function(e){return this.on(t,e)}}),em.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){// ( namespace ) or ( selector, types [, fn] )
return 1==arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)}}),em.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){// Handle event binding
em.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}});// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
// Require that the "whitespace run" starts from a non-whitespace
// to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
var t6=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
em.proxy=function(e,t){var n,i,r;// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if("string"==typeof t&&(n=e[t],t=e,e=n),ed(e))return(// Simulated bind
i=et.call(arguments,2),// Set the guid of unique handler to the same of original handler, so it can be removed
(r=function(){return e.apply(t||this,i.concat(et.call(arguments)))}).guid=e.guid=e.guid||em.guid++,r)},em.holdReady=function(e){e?em.readyWait++:em.ready(!0)},em.isArray=Array.isArray,em.parseJSON=JSON.parse,em.nodeName=a,em.isFunction=ed,em.isWindow=ep,em.camelCase=g,em.type=o,em.now=Date.now,em.isNumeric=function(e){// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var t=em.type(e);return("number"===t||"string"===t)&&// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
!isNaN(e-parseFloat(e))},em.trim=function(e){return null==e?"":(e+"").replace(t6,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return em});var t9=e.jQuery,t7=e.$;return em.noConflict=function(t){return e.$===em&&(e.$=t7),t&&e.jQuery===em&&(e.jQuery=t9),em},void 0===t&&(e.jQuery=e.$=em),em},"object"==typeof e.exports?// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket trac-14549 for more info.
e.exports=n.document?i(n,!0):function(e){if(!e.document)throw Error("jQuery requires a window with a document");return i(e)}:i(n)}),c.register("jFPEE",function(t,n){function i(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}e(t.exports,"_type_of",function(){return i}),e(t.exports,"_",function(){return i})});var d=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"menu-burger",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"menu",i=this;u(this,e),this.menuBurger=document.getElementById(t),this.menu=document.getElementById(n),this.menuBurger.addEventListener("click",function(e){i.menuBurger.classList.toggle("open"),i.menu.classList.toggle("open")})};function p(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function f(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),e}var h={},v=c("jFPEE");n=function(e){// This is needed so we can catch the AMD loader configuration and use it
// The inner file should be wrapped (by `banner.start.js`) in a function that
// returns the AMD loader references.
var t=function(){// Restore the Select2 AMD loader so it can be used
// Needed mostly in the language files, where the loader is not inserted
if(e&&e.fn&&e.fn.select2&&e.fn.select2.amd)var t,t=e.fn.select2.amd;// Return the AMD loader configuration so it can be used outside of this file
return function(){if(!t||!t.requirejs){var e,n,i,r,o,s,a,l,c,u,d,p,f,h,g,m,y,b,w,S,x,T;t?n=t:t={},o=function(e,t){return S.call(e,t)},s=/**
     * Given a relative module name, like ./something, normalize it to
     * a real name that can be mapped to a path.
     * @param {String} name the relative name
     * @param {String} baseName a real name that the name arg is relative
     * to.
     * @returns {String} normalized name
     */function(e,t){var n,i,r,o,s,a,l,c,u,d,p,f=t&&t.split("/"),h=b.map,v=h&&h["*"]||{};//Adjust any relative paths.
if(e){//start trimDots
for(s=(e=e.split("/")).length-1,b.nodeIdCompat&&T.test(e[s])&&(e[s]=e[s].replace(T,"")),"."===e[0].charAt(0)&&f&&(e=f.slice(0,f.length-1).concat(e)),u=0;u<e.length;u++)if("."===(p=e[u]))e.splice(u,1),u-=1;else if(".."===p){// If at the start, or previous value is still ..,
// keep them so that when converted to a path it may
// still work when converted to a path, even though
// as an ID it is less than ideal. In larger point
// releases, may be better to just kick out an error.
if(0===u||1===u&&".."===e[2]||".."===e[u-1])continue;u>0&&(e.splice(u-1,2),u-=2)}//end trimDots
e=e.join("/")}//Apply map config if available.
if((f||v)&&h){for(u=(n=e.split("/")).length;u>0;u-=1){if(i=n.slice(0,u).join("/"),f)//So, do joins on the biggest to smallest lengths of baseParts.
{for(d=f.length;d>0;d-=1)//baseName segment has  config, find if it has one for
//this name.
if((r=h[f.slice(0,d).join("/")])&&(r=r[i])){//Match, update name to the new value.
o=r,a=u;break}}if(o)break;!l&&v&&v[i]&&(l=v[i],c=u)}!o&&l&&(o=l,a=c),o&&(n.splice(0,a,o),e=n.join("/"))}return e},a=function(e,t){return function(){//A version of a require function that passes a moduleName
//value for items that may need to
//look up paths relative to the moduleName
var n=x.call(arguments,0);return"string"!=typeof n[0]&&1===n.length&&n.push(null),f.apply(r,n.concat([e,t]))}},l=function(e){return function(t){m[e]=t}},c=function(e){if(o(y,e)){var t=y[e];delete y[e],w[e]=!0,p.apply(r,t)}if(!o(m,e)&&!o(w,e))throw Error("No "+e);return m[e]},u=//with the plugin being undefined if the name
//did not have a plugin prefix.
function(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]},d=//second part is resource ID. Assumes relName has already been normalized.
function(e){return e?u(e):[]},m={},y={},b={},w={},S=Object.prototype.hasOwnProperty,x=[].slice,T=/\.js$/,/**
     * Makes a name map, normalizing the name, and using a plugin
     * for normalization if necessary. Grabs a ref to plugin
     * too, as an optimization.
     */h=function(e,t){var n,i=u(e),r=i[0],o=t[1];//Using ridiculous property names for space reasons
return(e=i[1],r&&(n=c(r=s(r,o))),r)?e=n&&n.normalize?n.normalize(e,function(e){return s(e,o)}):s(e,o):(r=(i=u(e=s(e,o)))[0],e=i[1],r&&(n=c(r))),{f:r?r+"!"+e:e,n:e,pr:r,p:n}},g={require:function(e){return a(e)},exports:function(e){var t=m[e];return void 0!==t?t:m[e]={}},module:function(e){return{id:e,uri:"",exports:m[e],config:function(){return b&&b.config&&b.config[e]||{}}}}},p=function(e,t,n,i){var s,u,p,f,b,S,x,T=[],E=void 0===n?"undefined":(0,v._)(n);//Call the callback to define the module, if necessary.
if(S=d(//Use name if no relName
i=i||e),"undefined"===E||"function"===E){for(b=0,//Pull out the defined dependencies and pass the ordered
//values to the callback.
//Default to [require, exports, module] if no deps
t=!t.length&&n.length?["require","exports","module"]:t;b<t.length;b+=1)//Fast path CommonJS standard dependencies.
if("require"===(u=(f=h(t[b],S)).f))T[b]=g.require(e);else if("exports"===u)//CommonJS module spec 1.1
T[b]=g.exports(e),x=!0;else if("module"===u)s=T[b]=g.module(e);else if(o(m,u)||o(y,u)||o(w,u))T[b]=c(u);else if(f.p)f.p.load(f.n,a(i,!0),l(u),{}),T[b]=m[u];else throw Error(e+" missing "+u);p=n?n.apply(m[e],T):void 0,e&&(s&&s.exports!==r&&s.exports!==m[e]?m[e]=s.exports:p===r&&x||(m[e]=p))}else e&&//worry about defining if have a module name.
(m[e]=n)},e=n=f=function(e,t,n,i,o){if("string"==typeof e)return g[e]?g[e](t):c(h(e,d(t)).f);if(!e.splice){if(//deps is a config object, not an array.
(b=e).deps&&f(b.deps,b.callback),!t)return;t.splice?(//callback is an array, which means it is a dependency list.
//Adjust args if there are dependencies
e=t,t=n,n=null):e=r}return(//Support require(['a'])
t=t||function(){},"function"==typeof n&&(n=i,i=o),i?p(r,e,t,n)://do, and latest browsers "upgrade" to 4 if lower value is used:
//http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
//If want a value immediately, use require('id') instead -- something
//that works in almond on the global level, but not guaranteed and
//unlikely to work in other AMD implementations.
setTimeout(function(){p(r,e,t,n)},4),f)},/**
     * Just drops the config on the floor, but returns req in case
     * the config return value is used.
     */f.config=function(e){return f(e)},/**
     * Expose module registry for debugging and tooling
     */e._defined=m,(i=function(e,t,n){if("string"!=typeof e)throw Error("See almond README: incorrect module build, no module name");t.splice||(//deps is not an array, so probably means
//an object literal or factory function for
//the value. Adjust args.
n=t,t=[]),o(m,e)||o(y,e)||(y[e]=[e,t,n])}).amd={jQuery:!0},t.requirejs=e,t.require=n,t.define=i}}(),t.define("almond",function(){}),/* global jQuery:false, $:false */t.define("jquery",[],function(){var t=e||$;return null==t&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),t}),t.define("select2/utils",["jquery"],function(e){var t=function(e){var t=e.prototype,n=[];for(var i in t)"function"==typeof t[i]&&"constructor"!==i&&n.push(i);return n},n={};n.Extend=function(e,t){var n=function(){this.constructor=e},i={}.hasOwnProperty;for(var r in t)i.call(t,r)&&(e[r]=t[r]);return n.prototype=t.prototype,e.prototype=new n,e.__super__=t.prototype,e},n.Decorate=function(e,n){var i=function(){var t=Array.prototype.unshift,i=n.prototype.constructor.length,r=e.prototype.constructor;i>0&&(t.call(arguments,e.prototype.constructor),r=n.prototype.constructor),r.apply(this,arguments)},r=t(n),o=t(e);n.displayName=e.displayName,i.prototype=new function(){this.constructor=i};for(var s=0;s<o.length;s++){var a=o[s];i.prototype[a]=e.prototype[a]}for(var l=0;l<r.length;l++){var c=r[l];i.prototype[c]=function(e){// Stub out the original method if it's not decorating an actual method
var t=function(){};e in i.prototype&&(t=i.prototype[e]);var r=n.prototype[e];return function(){return Array.prototype.unshift.call(arguments,t),r.apply(this,arguments)}}(c)}return i};var i=function(){this.listeners={}};i.prototype.on=function(e,t){this.listeners=this.listeners||{},e in this.listeners?this.listeners[e].push(t):this.listeners[e]=[t]},i.prototype.trigger=function(e){var t=Array.prototype.slice,n=t.call(arguments,1);this.listeners=this.listeners||{},null==n&&(n=[]),0===n.length&&n.push({}),// Set the `_type` of the first object to the event
n[0]._type=e,e in this.listeners&&this.invoke(this.listeners[e],t.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},i.prototype.invoke=function(e,t){for(var n=0,i=e.length;n<i;n++)e[n].apply(this,t)},n.Observable=i,n.generateChars=function(e){for(var t="",n=0;n<e;n++)t+=Math.floor(36*Math.random()).toString(36);return t},n.bind=function(e,t){return function(){e.apply(t,arguments)}},n._convertData=function(e){for(var t in e){var n=t.split("-"),i=e;if(1!==n.length){for(var r=0;r<n.length;r++){var o=n[r];// Lowercase the first letter
// By default, dash-separated becomes camelCase
(o=o.substring(0,1).toLowerCase()+o.substring(1))in i||(i[o]={}),r==n.length-1&&(i[o]=e[t]),i=i[o]}delete e[t]}}return e},n.hasScroll=function(t,n){// Adapted from the function created by @ShadowScripter
// and adapted by @BillBarry on the Stack Exchange Code Review website.
// The original code can be found at
// http://codereview.stackexchange.com/q/13338
// and was designed to be used with the Sizzle selector engine.
var i=e(n),r=n.style.overflowX,o=n.style.overflowY;return(//Check both x and y declarations
(r!==o||"hidden"!==o&&"visible"!==o)&&("scroll"===r||"scroll"===o||i.innerHeight()<n.scrollHeight||i.innerWidth()<n.scrollWidth))},n.escapeMarkup=function(e){var t={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return(// Do not try to escape the markup if it's not a string
"string"!=typeof e?e:String(e).replace(/[&<>"'\/\\]/g,function(e){return t[e]}))},// Cache objects in Utils.__cache instead of $.data (see #4346)
n.__cache={};var r=0;return n.GetUniqueElementId=function(e){// Get a unique element Id. If element has no id,
// creates a new unique number, stores it in the id
// attribute and returns the new id with a prefix.
// If an id already exists, it simply returns it with a prefix.
var t=e.getAttribute("data-select2-id");return null!=t||(t=e.id?"select2-data-"+e.id:"select2-data-"+(++r).toString()+"-"+n.generateChars(4),e.setAttribute("data-select2-id",t)),t},n.StoreData=function(e,t,i){// Stores an item in the cache for a specified element.
// name is the cache key.
var r=n.GetUniqueElementId(e);n.__cache[r]||(n.__cache[r]={}),n.__cache[r][t]=i},n.GetData=function(t,i){// Retrieves a value from the cache by its key (name)
// name is optional. If no name specified, return
// all cache items for the specified element.
// and for a specified element.
var r=n.GetUniqueElementId(t);return i?n.__cache[r]&&null!=n.__cache[r][i]?n.__cache[r][i]:e(t).data(i):n.__cache[r]},n.RemoveData=function(e){// Removes all cached items for a specified element.
var t=n.GetUniqueElementId(e);null!=n.__cache[t]&&delete n.__cache[t],e.removeAttribute("data-select2-id")},n.copyNonInternalCssClasses=function(e,t){var n=e.getAttribute("class").trim().split(/\s+/);n=n.filter(function(e){// Save all Select2 classes
return 0===e.indexOf("select2-")});var i=t.getAttribute("class").trim().split(/\s+/);i=i.filter(function(e){// Only copy non-Select2 classes
return 0!==e.indexOf("select2-")});var r=n.concat(i);e.setAttribute("class",r.join(" "))},n}),t.define("select2/results",["jquery","./utils"],function(e,t){function n(e,t,i){this.$element=e,this.data=i,this.options=t,n.__super__.constructor.call(this)}return t.Extend(n,t.Observable),n.prototype.render=function(){var t=e('<ul class="select2-results__options" role="listbox"></ul>');return this.options.get("multiple")&&t.attr("aria-multiselectable","true"),this.$results=t,t},n.prototype.clear=function(){this.$results.empty()},n.prototype.displayMessage=function(t){var n=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var i=e('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'),r=this.options.get("translations").get(t.message);i.append(n(r(t.args))),i[0].className+=" select2-results__message",this.$results.append(i)},n.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},n.prototype.append=function(e){this.hideLoading();var t=[];if(null==e.results||0===e.results.length){0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"});return}e.results=this.sort(e.results);for(var n=0;n<e.results.length;n++){var i=e.results[n],r=this.option(i);t.push(r)}this.$results.append(t)},n.prototype.position=function(e,t){t.find(".select2-results").append(e)},n.prototype.sort=function(e){return this.options.get("sorter")(e)},n.prototype.highlightFirstItem=function(){var e=this.$results.find(".select2-results__option--selectable"),t=e.filter(".select2-results__option--selected");t.length>0?t.first().trigger("mouseenter"):// in the dropdown
e.first().trigger("mouseenter"),this.ensureHighlightVisible()},n.prototype.setClasses=function(){var n=this;this.data.current(function(i){var r=i.map(function(e){return e.id.toString()});n.$results.find(".select2-results__option--selectable").each(function(){var n=e(this),i=t.GetData(this,"data"),o=""+i.id;null!=i.element&&i.element.selected||null==i.element&&r.indexOf(o)>-1?(this.classList.add("select2-results__option--selected"),n.attr("aria-selected","true")):(this.classList.remove("select2-results__option--selected"),n.attr("aria-selected","false"))})})},n.prototype.showLoading=function(e){this.hideLoading();var t={disabled:!0,loading:!0,text:this.options.get("translations").get("searching")(e)},n=this.option(t);n.className+=" loading-results",this.$results.prepend(n)},n.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},n.prototype.option=function(n){var i=document.createElement("li");i.classList.add("select2-results__option"),i.classList.add("select2-results__option--selectable");var r={role:"option"},o=window.Element.prototype.matches||window.Element.prototype.msMatchesSelector||window.Element.prototype.webkitMatchesSelector;for(var s in(null!=n.element&&o.call(n.element,":disabled")||null==n.element&&n.disabled)&&(r["aria-disabled"]="true",i.classList.remove("select2-results__option--selectable"),i.classList.add("select2-results__option--disabled")),null==n.id&&i.classList.remove("select2-results__option--selectable"),null!=n._resultId&&(i.id=n._resultId),n.title&&(i.title=n.title),n.children&&(r.role="group",r["aria-label"]=n.text,i.classList.remove("select2-results__option--selectable"),i.classList.add("select2-results__option--group")),r){var a=r[s];i.setAttribute(s,a)}if(n.children){var l=e(i),c=document.createElement("strong");c.className="select2-results__group",this.template(n,c);for(var u=[],d=0;d<n.children.length;d++){var p=n.children[d],f=this.option(p);u.push(f)}var h=e("<ul></ul>",{class:"select2-results__options select2-results__options--nested",role:"none"});h.append(u),l.append(c),l.append(h)}else this.template(n,i);return t.StoreData(i,"data",n),i},n.prototype.bind=function(n,i){var r=this,o=n.id+"-results";this.$results.attr("id",o),n.on("results:all",function(e){r.clear(),r.append(e.data),n.isOpen()&&(r.setClasses(),r.highlightFirstItem())}),n.on("results:append",function(e){r.append(e.data),n.isOpen()&&r.setClasses()}),n.on("query",function(e){r.hideMessages(),r.showLoading(e)}),n.on("select",function(){n.isOpen()&&(r.setClasses(),r.options.get("scrollAfterSelect")&&r.highlightFirstItem())}),n.on("unselect",function(){n.isOpen()&&(r.setClasses(),r.options.get("scrollAfterSelect")&&r.highlightFirstItem())}),n.on("open",function(){// When the dropdown is open, aria-expended="true"
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
o.isDisabled()||e.stopPropagation()})},i.prototype.clear=function(){var e=this.$selection.find(".select2-selection__rendered");e.empty(),e.removeAttr("title")},i.prototype.display=function(e,t){var n=this.options.get("templateSelection");return this.options.get("escapeMarkup")(n(e,t))},i.prototype.selectionContainer=function(){return e('<li class="select2-selection__choice"><button type="button" class="select2-selection__choice__remove" tabindex="-1"><span aria-hidden="true">&times;</span></button><span class="select2-selection__choice__display"></span></li>')},i.prototype.update=function(e){if(this.clear(),0!==e.length){for(var t=[],i=this.$selection.find(".select2-selection__rendered").attr("id")+"-choice-",r=0;r<e.length;r++){var o=e[r],s=this.selectionContainer(),a=this.display(o,s),l=i+n.generateChars(4)+"-";o.id?l+=o.id:l+=n.generateChars(4),s.find(".select2-selection__choice__display").append(a).attr("id",l);var c=o.title||o.text;c&&s.attr("title",c);var u=this.options.get("translations").get("removeItem"),d=s.find(".select2-selection__choice__remove");d.attr("title",u()),d.attr("aria-label",u()),d.attr("aria-describedby",l),n.StoreData(s[0],"data",o),t.push(s)}this.$selection.find(".select2-selection__rendered").append(t)}},i}),t.define("select2/selection/placeholder",[],function(){var e=function(e,t,n){this.placeholder=this.normalizePlaceholder(n.get("placeholder")),e.call(this,t,n)};return e.prototype.normalizePlaceholder=function(e,t){return"string"==typeof t&&(t={id:"",text:t}),t},e.prototype.createPlaceholder=function(e,t){var n=this.selectionContainer();n.html(this.display(t)),n[0].classList.add("select2-selection__placeholder"),n[0].classList.remove("select2-selection__choice");var i=t.title||t.text||n.text();return this.$selection.find(".select2-selection__rendered").attr("title",i),n},e.prototype.update=function(e,t){var n=1==t.length&&t[0].id!=this.placeholder.id;if(t.length>1||n)return e.call(this,t);this.clear();var i=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(i)},e}),t.define("select2/selection/allowClear",["jquery","../keys","../utils"],function(e,t,n){var i=function(){};return i.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(e){i._handleClear(e)}),t.on("keypress",function(e){i._handleKeyboardClear(e,t)})},i.prototype._handleClear=function(e,t){// Ignore the event if it is disabled
if(!this.isDisabled()){var i=this.$selection.find(".select2-selection__clear");// Ignore the event if nothing has been selected
if(0!==i.length){t.stopPropagation();var r=n.GetData(i[0],"data"),o=this.$element.val();this.$element.val(this.placeholder.id);var s={data:r};if(this.trigger("clear",s),s.prevented){this.$element.val(o);return}for(var a=0;a<r.length;a++)// If the event was prevented, don't clear it out.
if(s={data:r[a]},// Trigger the `unselect` event, so people can prevent it from being
// cleared.
this.trigger("unselect",s),s.prevented){this.$element.val(o);return}this.$element.trigger("input").trigger("change"),this.trigger("toggle",{})}}},i.prototype._handleKeyboardClear=function(e,n,i){i.isOpen()||n.which!=t.DELETE&&n.which!=t.BACKSPACE||this._handleClear(n)},i.prototype.update=function(t,i){if(t.call(this,i),this.$selection.find(".select2-selection__clear").remove(),this.$selection[0].classList.remove("select2-selection--clearable"),!(this.$selection.find(".select2-selection__placeholder").length>0)&&0!==i.length){var r=this.$selection.find(".select2-selection__rendered").attr("id"),o=this.options.get("translations").get("removeAllItems"),s=e('<button type="button" class="select2-selection__clear" tabindex="-1"><span aria-hidden="true">&times;</span></button>');s.attr("title",o()),s.attr("aria-label",o()),s.attr("aria-describedby",r),n.StoreData(s[0],"data",i),this.$selection.prepend(s),this.$selection[0].classList.add("select2-selection--clearable")}},i}),t.define("select2/selection/search",["jquery","../utils","../keys"],function(e,t,n){var i=function(e,t,n){e.call(this,t,n)};return i.prototype.render=function(t){var n=this.options.get("translations").get("search"),i=e('<span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" ></textarea></span>');this.$searchContainer=i,this.$search=i.find("textarea"),this.$search.prop("autocomplete",this.options.get("autocomplete")),this.$search.attr("aria-label",n());var r=t.call(this);return this._transferTabIndex(),r.append(this.$searchContainer),r},i.prototype.bind=function(e,i,r){var o=this,s=i.id+"-results",a=i.id+"-container";e.call(this,i,r),o.$search.attr("aria-describedby",a),i.on("open",function(){o.$search.attr("aria-controls",s),o.$search.trigger("focus")}),i.on("close",function(){o.$search.val(""),o.resizeSearch(),o.$search.removeAttr("aria-controls"),o.$search.removeAttr("aria-activedescendant"),o.$search.trigger("focus")}),i.on("enable",function(){o.$search.prop("disabled",!1),o._transferTabIndex()}),i.on("disable",function(){o.$search.prop("disabled",!0)}),i.on("focus",function(e){o.$search.trigger("focus")}),i.on("results:focus",function(e){e.data._resultId?o.$search.attr("aria-activedescendant",e.data._resultId):o.$search.removeAttr("aria-activedescendant")}),this.$selection.on("focusin",".select2-search--inline",function(e){o.trigger("focus",e)}),this.$selection.on("focusout",".select2-search--inline",function(e){o._handleBlur(e)}),this.$selection.on("keydown",".select2-search--inline",function(e){if(e.stopPropagation(),o.trigger("keypress",e),o._keyUpPrevented=e.isDefaultPrevented(),e.which===n.BACKSPACE&&""===o.$search.val()){var i=o.$selection.find(".select2-selection__choice").last();if(i.length>0){var r=t.GetData(i[0],"data");o.searchRemoveChoice(r),e.preventDefault()}}}),this.$selection.on("click",".select2-search--inline",function(e){o.$search.val()&&e.stopPropagation()});// Try to detect the IE version should the `documentMode` property that
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
   */i.prototype._transferTabIndex=function(e){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},i.prototype.createPlaceholder=function(e,t){this.$search.attr("placeholder",t.text)},i.prototype.update=function(e,t){var n=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),e.call(this,t),this.resizeSearch(),n&&this.$search.trigger("focus")},i.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var e=this.$search.val();this.trigger("query",{term:e})}this._keyUpPrevented=!1},i.prototype.searchRemoveChoice=function(e,t){this.trigger("unselect",{data:t}),this.$search.val(t.text),this.handleSearch()},i.prototype.resizeSearch=function(){this.$search.css("width","25px");var e="100%";""===this.$search.attr("placeholder")&&(e=.75*(this.$search.val().length+1)+"em"),this.$search.css("width",e)},i}),t.define("select2/selection/selectionCss",["../utils"],function(e){var t=function(){};return t.prototype.render=function(t){var n=t.call(this),i=this.options.get("selectionCssClass")||"";return -1!==i.indexOf(":all:")&&(i=i.replace(":all:",""),e.copyNonInternalCssClasses(n[0],this.$element[0])),n.addClass(i),n},t}),t.define("select2/selection/eventRelay",["jquery"],function(e){var t=function(){};return t.prototype.bind=function(t,n,i){var r=this,o=["open","opening","close","closing","select","selecting","unselect","unselecting","clear","clearing"],s=["opening","closing","selecting","unselecting","clearing"];t.call(this,n,i),n.on("*",function(t,n){// Ignore events that should not be relayed
if(-1!==o.indexOf(t)){// The parameters should always be an object
n=n||{};// Generate the jQuery event for the Select2 event
var i=e.Event("select2:"+t,{params:n});r.$element.trigger(i),-1!==s.indexOf(t)&&(n.prevented=i.isDefaultPrevented())}})},t}),t.define("select2/translation",["jquery","require"],function(e,t){var n=function(e){this.dict=e||{}};return n.prototype.all=function(){return this.dict},n.prototype.get=function(e){return this.dict[e]},n.prototype.extend=function(t){this.dict=e.extend({},t.all(),this.dict)},// Static functions
n._cache={},n.loadPath=function(e){if(!(e in n._cache)){var i=t(e);n._cache[e]=i}return new n(n._cache[e])},n}),t.define("select2/diacritics",[],function(){return{"Ⓐ":"A",Ａ:"A",À:"A",Á:"A",Â:"A",Ầ:"A",Ấ:"A",Ẫ:"A",Ẩ:"A",Ã:"A",Ā:"A",Ă:"A",Ằ:"A",Ắ:"A",Ẵ:"A",Ẳ:"A",Ȧ:"A",Ǡ:"A",Ä:"A",Ǟ:"A",Ả:"A",Å:"A",Ǻ:"A",Ǎ:"A",Ȁ:"A",Ȃ:"A",Ạ:"A",Ậ:"A",Ặ:"A",Ḁ:"A",Ą:"A",Ⱥ:"A",Ɐ:"A",Ꜳ:"AA",Æ:"AE",Ǽ:"AE",Ǣ:"AE",Ꜵ:"AO",Ꜷ:"AU",Ꜹ:"AV",Ꜻ:"AV",Ꜽ:"AY","Ⓑ":"B",Ｂ:"B",Ḃ:"B",Ḅ:"B",Ḇ:"B",Ƀ:"B",Ƃ:"B",Ɓ:"B","Ⓒ":"C",Ｃ:"C",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",Ç:"C",Ḉ:"C",Ƈ:"C",Ȼ:"C",Ꜿ:"C","Ⓓ":"D",Ｄ:"D",Ḋ:"D",Ď:"D",Ḍ:"D",Ḑ:"D",Ḓ:"D",Ḏ:"D",Đ:"D",Ƌ:"D",Ɗ:"D",Ɖ:"D",Ꝺ:"D",Ǳ:"DZ",Ǆ:"DZ",ǲ:"Dz",ǅ:"Dz","Ⓔ":"E",Ｅ:"E",È:"E",É:"E",Ê:"E",Ề:"E",Ế:"E",Ễ:"E",Ể:"E",Ẽ:"E",Ē:"E",Ḕ:"E",Ḗ:"E",Ĕ:"E",Ė:"E",Ë:"E",Ẻ:"E",Ě:"E",Ȅ:"E",Ȇ:"E",Ẹ:"E",Ệ:"E",Ȩ:"E",Ḝ:"E",Ę:"E",Ḙ:"E",Ḛ:"E",Ɛ:"E",Ǝ:"E","Ⓕ":"F",Ｆ:"F",Ḟ:"F",Ƒ:"F",Ꝼ:"F","Ⓖ":"G",Ｇ:"G",Ǵ:"G",Ĝ:"G",Ḡ:"G",Ğ:"G",Ġ:"G",Ǧ:"G",Ģ:"G",Ǥ:"G",Ɠ:"G",Ꞡ:"G",Ᵹ:"G",Ꝿ:"G","Ⓗ":"H",Ｈ:"H",Ĥ:"H",Ḣ:"H",Ḧ:"H",Ȟ:"H",Ḥ:"H",Ḩ:"H",Ḫ:"H",Ħ:"H",Ⱨ:"H",Ⱶ:"H",Ɥ:"H","Ⓘ":"I",Ｉ:"I",Ì:"I",Í:"I",Î:"I",Ĩ:"I",Ī:"I",Ĭ:"I",İ:"I",Ï:"I",Ḯ:"I",Ỉ:"I",Ǐ:"I",Ȉ:"I",Ȋ:"I",Ị:"I",Į:"I",Ḭ:"I",Ɨ:"I","Ⓙ":"J",Ｊ:"J",Ĵ:"J",Ɉ:"J","Ⓚ":"K",Ｋ:"K",Ḱ:"K",Ǩ:"K",Ḳ:"K",Ķ:"K",Ḵ:"K",Ƙ:"K",Ⱪ:"K",Ꝁ:"K",Ꝃ:"K",Ꝅ:"K",Ꞣ:"K","Ⓛ":"L",Ｌ:"L",Ŀ:"L",Ĺ:"L",Ľ:"L",Ḷ:"L",Ḹ:"L",Ļ:"L",Ḽ:"L",Ḻ:"L",Ł:"L",Ƚ:"L",Ɫ:"L",Ⱡ:"L",Ꝉ:"L",Ꝇ:"L",Ꞁ:"L",Ǉ:"LJ",ǈ:"Lj","Ⓜ":"M",Ｍ:"M",Ḿ:"M",Ṁ:"M",Ṃ:"M",Ɱ:"M",Ɯ:"M","Ⓝ":"N",Ｎ:"N",Ǹ:"N",Ń:"N",Ñ:"N",Ṅ:"N",Ň:"N",Ṇ:"N",Ņ:"N",Ṋ:"N",Ṉ:"N",Ƞ:"N",Ɲ:"N",Ꞑ:"N",Ꞥ:"N",Ǌ:"NJ",ǋ:"Nj","Ⓞ":"O",Ｏ:"O",Ò:"O",Ó:"O",Ô:"O",Ồ:"O",Ố:"O",Ỗ:"O",Ổ:"O",Õ:"O",Ṍ:"O",Ȭ:"O",Ṏ:"O",Ō:"O",Ṑ:"O",Ṓ:"O",Ŏ:"O",Ȯ:"O",Ȱ:"O",Ö:"O",Ȫ:"O",Ỏ:"O",Ő:"O",Ǒ:"O",Ȍ:"O",Ȏ:"O",Ơ:"O",Ờ:"O",Ớ:"O",Ỡ:"O",Ở:"O",Ợ:"O",Ọ:"O",Ộ:"O",Ǫ:"O",Ǭ:"O",Ø:"O",Ǿ:"O",Ɔ:"O",Ɵ:"O",Ꝋ:"O",Ꝍ:"O",Œ:"OE",Ƣ:"OI",Ꝏ:"OO",Ȣ:"OU","Ⓟ":"P",Ｐ:"P",Ṕ:"P",Ṗ:"P",Ƥ:"P",Ᵽ:"P",Ꝑ:"P",Ꝓ:"P",Ꝕ:"P","Ⓠ":"Q",Ｑ:"Q",Ꝗ:"Q",Ꝙ:"Q",Ɋ:"Q","Ⓡ":"R",Ｒ:"R",Ŕ:"R",Ṙ:"R",Ř:"R",Ȑ:"R",Ȓ:"R",Ṛ:"R",Ṝ:"R",Ŗ:"R",Ṟ:"R",Ɍ:"R",Ɽ:"R",Ꝛ:"R",Ꞧ:"R",Ꞃ:"R","Ⓢ":"S",Ｓ:"S",ẞ:"S",Ś:"S",Ṥ:"S",Ŝ:"S",Ṡ:"S",Š:"S",Ṧ:"S",Ṣ:"S",Ṩ:"S",Ș:"S",Ş:"S",Ȿ:"S",Ꞩ:"S",Ꞅ:"S","Ⓣ":"T",Ｔ:"T",Ṫ:"T",Ť:"T",Ṭ:"T",Ț:"T",Ţ:"T",Ṱ:"T",Ṯ:"T",Ŧ:"T",Ƭ:"T",Ʈ:"T",Ⱦ:"T",Ꞇ:"T",Ꜩ:"TZ","Ⓤ":"U",Ｕ:"U",Ù:"U",Ú:"U",Û:"U",Ũ:"U",Ṹ:"U",Ū:"U",Ṻ:"U",Ŭ:"U",Ü:"U",Ǜ:"U",Ǘ:"U",Ǖ:"U",Ǚ:"U",Ủ:"U",Ů:"U",Ű:"U",Ǔ:"U",Ȕ:"U",Ȗ:"U",Ư:"U",Ừ:"U",Ứ:"U",Ữ:"U",Ử:"U",Ự:"U",Ụ:"U",Ṳ:"U",Ų:"U",Ṷ:"U",Ṵ:"U",Ʉ:"U","Ⓥ":"V",Ｖ:"V",Ṽ:"V",Ṿ:"V",Ʋ:"V",Ꝟ:"V",Ʌ:"V",Ꝡ:"VY","Ⓦ":"W",Ｗ:"W",Ẁ:"W",Ẃ:"W",Ŵ:"W",Ẇ:"W",Ẅ:"W",Ẉ:"W",Ⱳ:"W","Ⓧ":"X",Ｘ:"X",Ẋ:"X",Ẍ:"X","Ⓨ":"Y",Ｙ:"Y",Ỳ:"Y",Ý:"Y",Ŷ:"Y",Ỹ:"Y",Ȳ:"Y",Ẏ:"Y",Ÿ:"Y",Ỷ:"Y",Ỵ:"Y",Ƴ:"Y",Ɏ:"Y",Ỿ:"Y","Ⓩ":"Z",Ｚ:"Z",Ź:"Z",Ẑ:"Z",Ż:"Z",Ž:"Z",Ẓ:"Z",Ẕ:"Z",Ƶ:"Z",Ȥ:"Z",Ɀ:"Z",Ⱬ:"Z",Ꝣ:"Z","ⓐ":"a",ａ:"a",ẚ:"a",à:"a",á:"a",â:"a",ầ:"a",ấ:"a",ẫ:"a",ẩ:"a",ã:"a",ā:"a",ă:"a",ằ:"a",ắ:"a",ẵ:"a",ẳ:"a",ȧ:"a",ǡ:"a",ä:"a",ǟ:"a",ả:"a",å:"a",ǻ:"a",ǎ:"a",ȁ:"a",ȃ:"a",ạ:"a",ậ:"a",ặ:"a",ḁ:"a",ą:"a",ⱥ:"a",ɐ:"a",ꜳ:"aa",æ:"ae",ǽ:"ae",ǣ:"ae",ꜵ:"ao",ꜷ:"au",ꜹ:"av",ꜻ:"av",ꜽ:"ay","ⓑ":"b",ｂ:"b",ḃ:"b",ḅ:"b",ḇ:"b",ƀ:"b",ƃ:"b",ɓ:"b","ⓒ":"c",ｃ:"c",ć:"c",ĉ:"c",ċ:"c",č:"c",ç:"c",ḉ:"c",ƈ:"c",ȼ:"c",ꜿ:"c",ↄ:"c","ⓓ":"d",ｄ:"d",ḋ:"d",ď:"d",ḍ:"d",ḑ:"d",ḓ:"d",ḏ:"d",đ:"d",ƌ:"d",ɖ:"d",ɗ:"d",ꝺ:"d",ǳ:"dz",ǆ:"dz","ⓔ":"e",ｅ:"e",è:"e",é:"e",ê:"e",ề:"e",ế:"e",ễ:"e",ể:"e",ẽ:"e",ē:"e",ḕ:"e",ḗ:"e",ĕ:"e",ė:"e",ë:"e",ẻ:"e",ě:"e",ȅ:"e",ȇ:"e",ẹ:"e",ệ:"e",ȩ:"e",ḝ:"e",ę:"e",ḙ:"e",ḛ:"e",ɇ:"e",ɛ:"e",ǝ:"e","ⓕ":"f",ｆ:"f",ḟ:"f",ƒ:"f",ꝼ:"f","ⓖ":"g",ｇ:"g",ǵ:"g",ĝ:"g",ḡ:"g",ğ:"g",ġ:"g",ǧ:"g",ģ:"g",ǥ:"g",ɠ:"g",ꞡ:"g",ᵹ:"g",ꝿ:"g","ⓗ":"h",ｈ:"h",ĥ:"h",ḣ:"h",ḧ:"h",ȟ:"h",ḥ:"h",ḩ:"h",ḫ:"h",ẖ:"h",ħ:"h",ⱨ:"h",ⱶ:"h",ɥ:"h",ƕ:"hv","ⓘ":"i",ｉ:"i",ì:"i",í:"i",î:"i",ĩ:"i",ī:"i",ĭ:"i",ï:"i",ḯ:"i",ỉ:"i",ǐ:"i",ȉ:"i",ȋ:"i",ị:"i",į:"i",ḭ:"i",ɨ:"i",ı:"i","ⓙ":"j",ｊ:"j",ĵ:"j",ǰ:"j",ɉ:"j","ⓚ":"k",ｋ:"k",ḱ:"k",ǩ:"k",ḳ:"k",ķ:"k",ḵ:"k",ƙ:"k",ⱪ:"k",ꝁ:"k",ꝃ:"k",ꝅ:"k",ꞣ:"k","ⓛ":"l",ｌ:"l",ŀ:"l",ĺ:"l",ľ:"l",ḷ:"l",ḹ:"l",ļ:"l",ḽ:"l",ḻ:"l",ſ:"l",ł:"l",ƚ:"l",ɫ:"l",ⱡ:"l",ꝉ:"l",ꞁ:"l",ꝇ:"l",ǉ:"lj","ⓜ":"m",ｍ:"m",ḿ:"m",ṁ:"m",ṃ:"m",ɱ:"m",ɯ:"m","ⓝ":"n",ｎ:"n",ǹ:"n",ń:"n",ñ:"n",ṅ:"n",ň:"n",ṇ:"n",ņ:"n",ṋ:"n",ṉ:"n",ƞ:"n",ɲ:"n",ŉ:"n",ꞑ:"n",ꞥ:"n",ǌ:"nj","ⓞ":"o",ｏ:"o",ò:"o",ó:"o",ô:"o",ồ:"o",ố:"o",ỗ:"o",ổ:"o",õ:"o",ṍ:"o",ȭ:"o",ṏ:"o",ō:"o",ṑ:"o",ṓ:"o",ŏ:"o",ȯ:"o",ȱ:"o",ö:"o",ȫ:"o",ỏ:"o",ő:"o",ǒ:"o",ȍ:"o",ȏ:"o",ơ:"o",ờ:"o",ớ:"o",ỡ:"o",ở:"o",ợ:"o",ọ:"o",ộ:"o",ǫ:"o",ǭ:"o",ø:"o",ǿ:"o",ɔ:"o",ꝋ:"o",ꝍ:"o",ɵ:"o",œ:"oe",ƣ:"oi",ȣ:"ou",ꝏ:"oo","ⓟ":"p",ｐ:"p",ṕ:"p",ṗ:"p",ƥ:"p",ᵽ:"p",ꝑ:"p",ꝓ:"p",ꝕ:"p","ⓠ":"q",ｑ:"q",ɋ:"q",ꝗ:"q",ꝙ:"q","ⓡ":"r",ｒ:"r",ŕ:"r",ṙ:"r",ř:"r",ȑ:"r",ȓ:"r",ṛ:"r",ṝ:"r",ŗ:"r",ṟ:"r",ɍ:"r",ɽ:"r",ꝛ:"r",ꞧ:"r",ꞃ:"r","ⓢ":"s",ｓ:"s",ß:"s",ś:"s",ṥ:"s",ŝ:"s",ṡ:"s",š:"s",ṧ:"s",ṣ:"s",ṩ:"s",ș:"s",ş:"s",ȿ:"s",ꞩ:"s",ꞅ:"s",ẛ:"s","ⓣ":"t",ｔ:"t",ṫ:"t",ẗ:"t",ť:"t",ṭ:"t",ț:"t",ţ:"t",ṱ:"t",ṯ:"t",ŧ:"t",ƭ:"t",ʈ:"t",ⱦ:"t",ꞇ:"t",ꜩ:"tz","ⓤ":"u",ｕ:"u",ù:"u",ú:"u",û:"u",ũ:"u",ṹ:"u",ū:"u",ṻ:"u",ŭ:"u",ü:"u",ǜ:"u",ǘ:"u",ǖ:"u",ǚ:"u",ủ:"u",ů:"u",ű:"u",ǔ:"u",ȕ:"u",ȗ:"u",ư:"u",ừ:"u",ứ:"u",ữ:"u",ử:"u",ự:"u",ụ:"u",ṳ:"u",ų:"u",ṷ:"u",ṵ:"u",ʉ:"u","ⓥ":"v",ｖ:"v",ṽ:"v",ṿ:"v",ʋ:"v",ꝟ:"v",ʌ:"v",ꝡ:"vy","ⓦ":"w",ｗ:"w",ẁ:"w",ẃ:"w",ŵ:"w",ẇ:"w",ẅ:"w",ẘ:"w",ẉ:"w",ⱳ:"w","ⓧ":"x",ｘ:"x",ẋ:"x",ẍ:"x","ⓨ":"y",ｙ:"y",ỳ:"y",ý:"y",ŷ:"y",ỹ:"y",ȳ:"y",ẏ:"y",ÿ:"y",ỷ:"y",ẙ:"y",ỵ:"y",ƴ:"y",ɏ:"y",ỿ:"y","ⓩ":"z",ｚ:"z",ź:"z",ẑ:"z",ż:"z",ž:"z",ẓ:"z",ẕ:"z",ƶ:"z",ȥ:"z",ɀ:"z",ⱬ:"z",ꝣ:"z",Ά:"Α",Έ:"Ε",Ή:"Η",Ί:"Ι",Ϊ:"Ι",Ό:"Ο",Ύ:"Υ",Ϋ:"Υ",Ώ:"Ω",ά:"α",έ:"ε",ή:"η",ί:"ι",ϊ:"ι",ΐ:"ι",ό:"ο",ύ:"υ",ϋ:"υ",ΰ:"υ",ώ:"ω",ς:"σ","’":"'"}}),t.define("select2/data/base",["../utils"],function(e){function t(e,n){t.__super__.constructor.call(this)}return e.Extend(t,e.Observable),t.prototype.current=function(e){throw Error("The `current` method must be defined in child classes.")},t.prototype.query=function(e,t){throw Error("The `query` method must be defined in child classes.")},t.prototype.bind=function(e,t){// Can be implemented in subclasses
},t.prototype.destroy=function(){// Can be implemented in subclasses
},t.prototype.generateResultId=function(t,n){var i=t.id+"-result-";return i+=e.generateChars(4),null!=n.id?i+="-"+n.id.toString():i+="-"+e.generateChars(4),i},t}),t.define("select2/data/select",["./base","../utils","jquery"],function(e,t,n){function i(e,t){this.$element=e,this.options=t,i.__super__.constructor.call(this)}return t.Extend(i,e),i.prototype.current=function(e){var t=this;e(Array.prototype.map.call(this.$element[0].querySelectorAll(":checked"),function(e){return t.item(n(e))}))},i.prototype.select=function(e){var t=this;// If data.element is a DOM node, use it instead
if(e.selected=!0,null!=e.element&&"option"===e.element.tagName.toLowerCase()){e.element.selected=!0,this.$element.trigger("input").trigger("change");return}if(this.$element.prop("multiple"))this.current(function(n){var i=[];(e=[e]).push.apply(e,n);for(var r=0;r<e.length;r++){var o=e[r].id;-1===i.indexOf(o)&&i.push(o)}t.$element.val(i),t.$element.trigger("input").trigger("change")});else{var n=e.id;this.$element.val(n),this.$element.trigger("input").trigger("change")}},i.prototype.unselect=function(e){var t=this;if(this.$element.prop("multiple")){if(e.selected=!1,null!=e.element&&"option"===e.element.tagName.toLowerCase()){e.element.selected=!1,this.$element.trigger("input").trigger("change");return}this.current(function(n){for(var i=[],r=0;r<n.length;r++){var o=n[r].id;o!==e.id&&-1===i.indexOf(o)&&i.push(o)}t.$element.val(i),t.$element.trigger("input").trigger("change")})}},i.prototype.bind=function(e,t){var n=this;this.container=e,e.on("select",function(e){n.select(e.data)}),e.on("unselect",function(e){n.unselect(e.data)})},i.prototype.destroy=function(){// Remove anything added to child elements
this.$element.find("*").each(function(){// Remove any custom data set by Select2
t.RemoveData(this)})},i.prototype.query=function(e,t){var i=[],r=this;this.$element.children().each(function(){if("option"===this.tagName.toLowerCase()||"optgroup"===this.tagName.toLowerCase()){var t=n(this),o=r.item(t),s=r.matches(e,o);null!==s&&i.push(s)}}),t({results:i})},i.prototype.addOptions=function(e){this.$element.append(e)},i.prototype.option=function(e){e.children?(i=document.createElement("optgroup")).label=e.text:void 0!==(i=document.createElement("option")).textContent?i.textContent=e.text:i.innerText=e.text,void 0!==e.id&&(i.value=e.id),e.disabled&&(i.disabled=!0),e.selected&&(i.selected=!0),e.title&&(i.title=e.title);var i,r=this._normalizeItem(e);return r.element=i,// Override the option's data with the combined data
t.StoreData(i,"data",r),n(i)},i.prototype.item=function(e){var i={};if(null!=(i=t.GetData(e[0],"data")))return i;var r=e[0];if("option"===r.tagName.toLowerCase())i={id:e.val(),text:e.text(),disabled:e.prop("disabled"),selected:e.prop("selected"),title:e.prop("title")};else if("optgroup"===r.tagName.toLowerCase()){i={text:e.prop("label"),children:[],title:e.prop("title")};for(var o=e.children("option"),s=[],a=0;a<o.length;a++){var l=n(o[a]),c=this.item(l);s.push(c)}i.children=s}return(i=this._normalizeItem(i)).element=e[0],t.StoreData(e[0],"data",i),i},i.prototype._normalizeItem=function(e){return e!==Object(e)&&(e={id:e,text:e}),null!=(e=n.extend({},{text:""},e)).id&&(e.id=e.id.toString()),null!=e.text&&(e.text=e.text.toString()),null==e._resultId&&e.id&&null!=this.container&&(e._resultId=this.generateResultId(this.container,e)),n.extend({},{selected:!1,disabled:!1},e)},i.prototype.matches=function(e,t){return this.options.get("matcher")(e,t)},i}),t.define("select2/data/array",["./select","../utils","jquery"],function(e,t,n){function i(e,t){this._dataToConvert=t.get("data")||[],i.__super__.constructor.call(this,e,t)}return t.Extend(i,e),i.prototype.bind=function(e,t){i.__super__.bind.call(this,e,t),this.addOptions(this.convertToOptions(this._dataToConvert))},i.prototype.select=function(e){var t=this.$element.find("option").filter(function(t,n){return n.value==e.id.toString()});0===t.length&&(t=this.option(e),this.addOptions(t)),i.__super__.select.call(this,e)},i.prototype.convertToOptions=function(e){for(var t=function(e){return function(){return n(this).val()==e.id}},i=this,r=this.$element.find("option"),o=r.map(function(){return i.item(n(this)).id}).get(),s=[],a=0;a<e.length;a++){var l=this._normalizeItem(e[a]);// Skip items which were pre-loaded, only merge the data
if(o.indexOf(l.id)>=0){var c=r.filter(t(l)),u=this.item(c),d=n.extend(!0,{},l,u),p=this.option(d);c.replaceWith(p);continue}var f=this.option(l);if(l.children){var h=this.convertToOptions(l.children);f.append(h)}s.push(f)}return s},i}),t.define("select2/data/ajax",["./array","../utils","jquery"],function(e,t,n){function i(e,t){this.ajaxOptions=this._applyDefaults(t.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),i.__super__.constructor.call(this,e,t)}return t.Extend(i,e),i.prototype._applyDefaults=function(e){return n.extend({},{data:function(e){return n.extend({},e,{q:e.term})},transport:function(e,t,i){var r=n.ajax(e);return r.then(t),r.fail(i),r}},e,!0)},i.prototype.processResults=function(e){return e},i.prototype.query=function(e,t){var i=function(){var n=o.transport(o,function(n){var i=r.processResults(n,e);r.options.get("debug")&&window.console&&console.error&&(!i||!i.results||!Array.isArray(i.results))&&console.error("Select2: The AJAX results did not return an array in the `results` key of the response."),t(i)},function(){// Attempt to detect if a request was aborted
// Only works if the transport exposes a status property
"status"in n&&(0===n.status||"0"===n.status)||r.trigger("results:message",{message:"errorLoading"})});r._request=n},r=this;null!=this._request&&("function"==typeof this._request.abort&&this._request.abort(),this._request=null);var o=n.extend({type:"GET"},this.ajaxOptions);"function"==typeof o.url&&(o.url=o.url.call(this.$element,e)),"function"==typeof o.data&&(o.data=o.data.call(this.$element,e)),this.ajaxOptions.delay&&null!=e.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(i,this.ajaxOptions.delay)):i()},i}),t.define("select2/data/tags",["jquery"],function(e){var t=function(e,t,n){var i=n.get("tags"),r=n.get("createTag");void 0!==r&&(this.createTag=r);var o=n.get("insertTag");if(void 0!==o&&(this.insertTag=o),e.call(this,t,n),Array.isArray(i))for(var s=0;s<i.length;s++){var a=i[s],l=this._normalizeItem(a),c=this.option(l);this.$element.append(c)}};return t.prototype.query=function(e,t,n){var i=this;if(this._removeOldTags(),null==t.term||null!=t.page){e.call(this,t,n);return}e.call(this,t,function e(r,o){for(var s=r.results,a=0;a<s.length;a++){var l=s[a],c=null!=l.children&&!e({results:l.children},!0);if((l.text||"").toUpperCase()===(t.term||"").toUpperCase()||c){if(o)return!1;r.data=s,n(r);return}}if(o)return!0;var u=i.createTag(t);if(null!=u){var d=i.option(u);d.attr("data-select2-tag","true"),i.addOptions([d]),i.insertTag(s,u)}r.results=s,n(r)})},t.prototype.createTag=function(e,t){if(null==t.term)return null;var n=t.term.trim();return""===n?null:{id:n,text:n}},t.prototype.insertTag=function(e,t,n){t.unshift(n)},t.prototype._removeOldTags=function(t){this.$element.find("option[data-select2-tag]").each(function(){this.selected||e(this).remove()})},t}),t.define("select2/data/tokenizer",["jquery"],function(e){var t=function(e,t,n){var i=n.get("tokenizer");void 0!==i&&(this.tokenizer=i),e.call(this,t,n)};return t.prototype.bind=function(e,t,n){e.call(this,t,n),this.$search=t.dropdown.$search||t.selection.$search||n.find(".select2-search__field")},t.prototype.query=function(t,n,i){var r=function(e){o.trigger("select",{data:e})},o=this;n.term=n.term||"";var s=this.tokenizer(n,this.options,function(t){// Normalize the data object so we can use it for checks
var n=o._normalizeItem(t);// If an existing option wasn't found for it, create the option
if(!o.$element.find("option").filter(function(){return e(this).val()===n.id}).length){var i=o.option(n);i.attr("data-select2-tag",!0),o._removeOldTags(),o.addOptions([i])}// Select the item, now that we know there is an option for it
r(n)});s.term!==n.term&&(this.$search.length&&(this.$search.val(s.term),this.$search.trigger("focus")),n.term=s.term),t.call(this,n,i)},t.prototype.tokenizer=function(t,n,i,r){for(var o=i.get("tokenSeparators")||[],s=n.term,a=0,l=this.createTag||function(e){return{id:e.term,text:e.term}};a<s.length;){var c=s[a];if(-1===o.indexOf(c)){a++;continue}var u=s.substr(0,a),d=l(e.extend({},n,{term:u}));if(null==d){a++;continue}r(d),// Reset the term to not include the tokenized portion
s=s.substr(a+1)||"",a=0}return{term:s}},t}),t.define("select2/data/minimumInputLength",[],function(){var e=function(e,t,n){this.minimumInputLength=n.get("minimumInputLength"),e.call(this,t,n)};return e.prototype.query=function(e,t,n){if(t.term=t.term||"",t.term.length<this.minimumInputLength){this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:t.term,params:t}});return}e.call(this,t,n)},e}),t.define("select2/data/maximumInputLength",[],function(){var e=function(e,t,n){this.maximumInputLength=n.get("maximumInputLength"),e.call(this,t,n)};return e.prototype.query=function(e,t,n){if(t.term=t.term||"",this.maximumInputLength>0&&t.term.length>this.maximumInputLength){this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:t.term,params:t}});return}e.call(this,t,n)},e}),t.define("select2/data/maximumSelectionLength",[],function(){var e=function(e,t,n){this.maximumSelectionLength=n.get("maximumSelectionLength"),e.call(this,t,n)};return e.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("select",function(){i._checkIfMaximumSelected()})},e.prototype.query=function(e,t,n){var i=this;this._checkIfMaximumSelected(function(){e.call(i,t,n)})},e.prototype._checkIfMaximumSelected=function(e,t){var n=this;this.current(function(e){var i=null!=e?e.length:0;if(n.maximumSelectionLength>0&&i>=n.maximumSelectionLength){n.trigger("results:message",{message:"maximumSelected",args:{maximum:n.maximumSelectionLength}});return}t&&t()})},e}),t.define("select2/dropdown",["jquery","./utils"],function(e,t){function n(e,t){this.$element=e,this.options=t,n.__super__.constructor.call(this)}return t.Extend(n,t.Observable),n.prototype.render=function(){var t=e('<span class="select2-dropdown"><span class="select2-results"></span></span>');return t.attr("dir",this.options.get("dir")),this.$dropdown=t,t},n.prototype.bind=function(){// Should be implemented in subclasses
},n.prototype.position=function(e,t){// Should be implemented in subclasses
},n.prototype.destroy=function(){// Remove the dropdown from the DOM
this.$dropdown.remove()},n}),t.define("select2/dropdown/search",["jquery"],function(e){var t=function(){};return t.prototype.render=function(t){var n=t.call(this),i=this.options.get("translations").get("search"),r=e('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');return this.$searchContainer=r,this.$search=r.find("input"),this.$search.prop("autocomplete",this.options.get("autocomplete")),this.$search.attr("aria-label",i()),n.prepend(r),n},t.prototype.bind=function(t,n,i){var r=this,o=n.id+"-results";t.call(this,n,i),this.$search.on("keydown",function(e){r.trigger("keypress",e),r._keyUpPrevented=e.isDefaultPrevented()}),// Workaround for browsers which do not support the `input` event
// This will prevent double-triggering of events for browsers which support
// both the `keyup` and `input` events.
this.$search.on("input",function(t){// Unbind the duplicated `keyup` event
e(this).off("keyup")}),this.$search.on("keyup input",function(e){r.handleSearch(e)}),n.on("open",function(){r.$search.attr("tabindex",0),r.$search.attr("aria-controls",o),r.$search.trigger("focus"),window.setTimeout(function(){r.$search.trigger("focus")},0)}),n.on("close",function(){r.$search.attr("tabindex",-1),r.$search.removeAttr("aria-controls"),r.$search.removeAttr("aria-activedescendant"),r.$search.val(""),r.$search.trigger("blur")}),n.on("focus",function(){n.isOpen()||r.$search.trigger("focus")}),n.on("results:all",function(e){(null==e.query.term||""===e.query.term)&&(r.showSearch(e)?r.$searchContainer[0].classList.remove("select2-search--hide"):r.$searchContainer[0].classList.add("select2-search--hide"))}),n.on("results:focus",function(e){e.data._resultId?r.$search.attr("aria-activedescendant",e.data._resultId):r.$search.removeAttr("aria-activedescendant")})},t.prototype.handleSearch=function(e){if(!this._keyUpPrevented){var t=this.$search.val();this.trigger("query",{term:t})}this._keyUpPrevented=!1},t.prototype.showSearch=function(e,t){return!0},t}),t.define("select2/dropdown/hidePlaceholder",[],function(){var e=function(e,t,n,i){this.placeholder=this.normalizePlaceholder(n.get("placeholder")),e.call(this,t,n,i)};return e.prototype.append=function(e,t){t.results=this.removePlaceholder(t.results),e.call(this,t)},e.prototype.normalizePlaceholder=function(e,t){return"string"==typeof t&&(t={id:"",text:t}),t},e.prototype.removePlaceholder=function(e,t){for(var n=t.slice(0),i=t.length-1;i>=0;i--){var r=t[i];this.placeholder.id===r.id&&n.splice(i,1)}return n},e}),t.define("select2/dropdown/infiniteScroll",["jquery"],function(e){var t=function(e,t,n,i){this.lastParams={},e.call(this,t,n,i),this.$loadingMore=this.createLoadingMore(),this.loading=!1};return t.prototype.append=function(e,t){this.$loadingMore.remove(),this.loading=!1,e.call(this,t),this.showLoadingMore(t)&&(this.$results.append(this.$loadingMore),this.loadMoreIfNeeded())},t.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("query",function(e){i.lastParams=e,i.loading=!0}),t.on("query:append",function(e){i.lastParams=e,i.loading=!0}),this.$results.on("scroll",this.loadMoreIfNeeded.bind(this))},t.prototype.loadMoreIfNeeded=function(){var t=e.contains(document.documentElement,this.$loadingMore[0]);!this.loading&&t&&this.$results.offset().top+this.$results.outerHeight(!1)+50>=this.$loadingMore.offset().top+this.$loadingMore.outerHeight(!1)&&this.loadMore()},t.prototype.loadMore=function(){this.loading=!0;var t=e.extend({},{page:1},this.lastParams);t.page++,this.trigger("query:append",t)},t.prototype.showLoadingMore=function(e,t){return t.pagination&&t.pagination.more},t.prototype.createLoadingMore=function(){var t=e('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'),n=this.options.get("translations").get("loadingMore");return t.html(n(this.lastParams)),t},t}),t.define("select2/dropdown/attachBody",["jquery","../utils"],function(e,t){var n=function(t,n,i){this.$dropdownParent=e(i.get("dropdownParent")||document.body),t.call(this,n,i)};return n.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("open",function(){i._showDropdown(),i._attachPositioningHandler(t),// Must bind after the results handlers to ensure correct sizing
i._bindContainerResultHandlers(t)}),t.on("close",function(){i._hideDropdown(),i._detachPositioningHandler(t)}),this.$dropdownContainer.on("mousedown",function(e){e.stopPropagation()})},n.prototype.destroy=function(e){e.call(this),this.$dropdownContainer.remove()},n.prototype.position=function(e,t,n){// Clone all of the container classes
t.attr("class",n.attr("class")),t[0].classList.remove("select2"),t[0].classList.add("select2-container--open"),t.css({position:"absolute",top:-999999}),this.$container=n},n.prototype.render=function(t){var n=e("<span></span>"),i=t.call(this);return n.append(i),this.$dropdownContainer=n,n},n.prototype._hideDropdown=function(e){this.$dropdownContainer.detach()},n.prototype._bindContainerResultHandlers=function(e,t){// These should only be bound once
if(!this._containerResultsHandlersBound){var n=this;t.on("results:all",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("results:append",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("results:message",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("select",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("unselect",function(){n._positionDropdown(),n._resizeDropdown()}),this._containerResultsHandlersBound=!0}},n.prototype._attachPositioningHandler=function(n,i){var r=this,o="scroll.select2."+i.id,s="resize.select2."+i.id,a="orientationchange.select2."+i.id,l=this.$container.parents().filter(t.hasScroll);l.each(function(){t.StoreData(this,"select2-scroll-position",{x:e(this).scrollLeft(),y:e(this).scrollTop()})}),l.on(o,function(n){var i=t.GetData(this,"select2-scroll-position");e(this).scrollTop(i.y)}),e(window).on(o+" "+s+" "+a,function(e){r._positionDropdown(),r._resizeDropdown()})},n.prototype._detachPositioningHandler=function(n,i){var r="scroll.select2."+i.id,o="resize.select2."+i.id,s="orientationchange.select2."+i.id;this.$container.parents().filter(t.hasScroll).off(r),e(window).off(r+" "+o+" "+s)},n.prototype._positionDropdown=function(){var t=e(window),n=this.$dropdown[0].classList.contains("select2-dropdown--above"),i=this.$dropdown[0].classList.contains("select2-dropdown--below"),r=null,o=this.$container.offset();o.bottom=o.top+this.$container.outerHeight(!1);var s={height:this.$container.outerHeight(!1)};s.top=o.top,s.bottom=o.top+s.height;var a={height:this.$dropdown.outerHeight(!1)},l={top:t.scrollTop(),bottom:t.scrollTop()+t.height()},c=l.top<o.top-a.height,u=l.bottom>o.bottom+a.height,d={left:o.left,top:s.bottom},p=this.$dropdownParent;"static"===p.css("position")&&(p=p.offsetParent());var f={top:0,left:0};(e.contains(document.body,p[0])||p[0].isConnected)&&(f=p.offset()),d.top-=f.top,d.left-=f.left,n||i||(r="below"),u||!c||n?!c&&u&&n&&(r="below"):r="above",("above"==r||n&&"below"!==r)&&(d.top=s.top-f.top-a.height),null!=r&&(this.$dropdown[0].classList.remove("select2-dropdown--below"),this.$dropdown[0].classList.remove("select2-dropdown--above"),this.$dropdown[0].classList.add("select2-dropdown--"+r),this.$container[0].classList.remove("select2-container--below"),this.$container[0].classList.remove("select2-container--above"),this.$container[0].classList.add("select2-container--"+r)),this.$dropdownContainer.css(d)},n.prototype._resizeDropdown=function(){var e={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(e.minWidth=e.width,e.position="relative",e.width="auto"),this.$dropdown.css(e)},n.prototype._showDropdown=function(e){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},n}),t.define("select2/dropdown/minimumResultsForSearch",[],function(){var e=function(e,t,n,i){this.minimumResultsForSearch=n.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),e.call(this,t,n,i)};return e.prototype.showSearch=function(e,t){return!(function e(t){for(var n=0,i=0;i<t.length;i++){var r=t[i];r.children?n+=e(r.children):n++}return n}(t.data.results)<this.minimumResultsForSearch)&&e.call(this,t)},e}),t.define("select2/dropdown/selectOnClose",["../utils"],function(e){var t=function(){};return t.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("close",function(e){i._handleSelectOnClose(e)})},t.prototype._handleSelectOnClose=function(t,n){if(n&&null!=n.originalSelect2Event){var i=n.originalSelect2Event;// Don't select an item if the close event was triggered from a select or
// unselect event
if("select"===i._type||"unselect"===i._type)return}var r=this.getHighlightedResults();// Only select highlighted results
if(!(r.length<1)){var o=e.GetData(r[0],"data");// Don't re-select already selected resulte
null!=o.element&&o.element.selected||null==o.element&&o.selected||this.trigger("select",{data:o})}},t}),t.define("select2/dropdown/closeOnSelect",[],function(){var e=function(){};return e.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("select",function(e){i._selectTriggered(e)}),t.on("unselect",function(e){i._selectTriggered(e)})},e.prototype._selectTriggered=function(e,t){var n=t.originalEvent;// Don't close if the control key is being held
n&&(n.ctrlKey||n.metaKey)||this.trigger("close",{originalEvent:n,originalSelect2Event:t})},e}),t.define("select2/dropdown/dropdownCss",["../utils"],function(e){var t=function(){};return t.prototype.render=function(t){var n=t.call(this),i=this.options.get("dropdownCssClass")||"";return -1!==i.indexOf(":all:")&&(i=i.replace(":all:",""),e.copyNonInternalCssClasses(n[0],this.$element[0])),n.addClass(i),n},t}),t.define("select2/dropdown/tagsSearchHighlight",["../utils"],function(e){var t=function(){};return t.prototype.highlightFirstItem=function(t){var n=this.$results.find(".select2-results__option--selectable:not(.select2-results__option--selected)");if(n.length>0){var i=n.first(),r=e.GetData(i[0],"data").element;if(r&&r.getAttribute&&"true"===r.getAttribute("data-select2-tag")){i.trigger("mouseenter");return}}t.call(this)},t}),t.define("select2/i18n/en",[],function(){// English
return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(e){var t=e.input.length-e.maximum,n="Please delete "+t+" character";return 1!=t&&(n+="s"),n},inputTooShort:function(e){return"Please enter "+(e.minimum-e.input.length)+" or more characters"},loadingMore:function(){return"Loading more results…"},maximumSelected:function(e){var t="You can only select "+e.maximum+" item";return 1!=e.maximum&&(t+="s"),t},noResults:function(){return"No results found"},searching:function(){return"Searching…"},removeAllItems:function(){return"Remove all items"},removeItem:function(){return"Remove item"},search:function(){return"Search"}}}),t.define("select2/defaults",["jquery","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/selectionCss","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./dropdown/dropdownCss","./dropdown/tagsSearchHighlight","./i18n/en"],function(e,t,n,i,r,o,s,a,l,c,u,d,p,f,h,v,g,m,y,b,w,S,x,T,E,C,A,k,L,_,O){var M=function(){this.reset()};return M.prototype.apply=function(u){if(null==(u=e.extend(!0,{},this.defaults,u)).dataAdapter&&(null!=u.ajax?u.dataAdapter=h:null!=u.data?u.dataAdapter=f:u.dataAdapter=p,u.minimumInputLength>0&&(u.dataAdapter=c.Decorate(u.dataAdapter,m)),u.maximumInputLength>0&&(u.dataAdapter=c.Decorate(u.dataAdapter,y)),u.maximumSelectionLength>0&&(u.dataAdapter=c.Decorate(u.dataAdapter,b)),u.tags&&(u.dataAdapter=c.Decorate(u.dataAdapter,v)),(null!=u.tokenSeparators||null!=u.tokenizer)&&(u.dataAdapter=c.Decorate(u.dataAdapter,g))),null==u.resultsAdapter&&(u.resultsAdapter=t,null!=u.ajax&&(u.resultsAdapter=c.Decorate(u.resultsAdapter,T)),null!=u.placeholder&&(u.resultsAdapter=c.Decorate(u.resultsAdapter,x)),u.selectOnClose&&(u.resultsAdapter=c.Decorate(u.resultsAdapter,A)),u.tags&&(u.resultsAdapter=c.Decorate(u.resultsAdapter,_))),null==u.dropdownAdapter){if(u.multiple)u.dropdownAdapter=w;else{var d=c.Decorate(w,S);u.dropdownAdapter=d}0!==u.minimumResultsForSearch&&(u.dropdownAdapter=c.Decorate(u.dropdownAdapter,C)),u.closeOnSelect&&(u.dropdownAdapter=c.Decorate(u.dropdownAdapter,k)),null!=u.dropdownCssClass&&(u.dropdownAdapter=c.Decorate(u.dropdownAdapter,L)),u.dropdownAdapter=c.Decorate(u.dropdownAdapter,E)}null==u.selectionAdapter&&(u.multiple?u.selectionAdapter=i:u.selectionAdapter=n,null!=u.placeholder&&(u.selectionAdapter=c.Decorate(u.selectionAdapter,r)),u.allowClear&&(u.selectionAdapter=c.Decorate(u.selectionAdapter,o)),u.multiple&&(u.selectionAdapter=c.Decorate(u.selectionAdapter,s)),null!=u.selectionCssClass&&(u.selectionAdapter=c.Decorate(u.selectionAdapter,a)),u.selectionAdapter=c.Decorate(u.selectionAdapter,l)),// If the defaults were not previously applied from an element, it is
// possible for the language option to have not been resolved
u.language=this._resolveLanguage(u.language),// Always fall back to English since it will always be complete
u.language.push("en");for(var O=[],M=0;M<u.language.length;M++){var D=u.language[M];-1===O.indexOf(D)&&O.push(D)}return u.language=O,u.translations=this._processTranslations(u.language,u.debug),u},M.prototype.reset=function(){var t=function(e){return e.replace(/[^\u0000-\u007E]/g,// Used 'uni range + named function' from http://jsperf.com/diacritics/18
function(e){return d[e]||e})};this.defaults={amdLanguageBase:"./i18n/",autocomplete:"off",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:c.escapeMarkup,language:{},matcher:function n(i,r){// Always return the object if there is nothing to compare
if(null==i.term||""===i.term.trim())return r;// Do a recursive check for options with children
if(r.children&&r.children.length>0){// Check each child of the option
for(var o=e.extend(!0,{},r),s=r.children.length-1;s>=0;s--)// If there wasn't a match, remove the object in the array
null==n(i,r.children[s])&&o.children.splice(s,1);return(// If any children matched, return the new object
o.children.length>0?o:n(i,o))}var a=t(r.text).toUpperCase(),l=t(i.term).toUpperCase();return(// Check if the text contains the term
a.indexOf(l)>-1?r:null)},minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,scrollAfterSelect:!1,sorter:function(e){return e},templateResult:function(e){return e.text},templateSelection:function(e){return e.text},theme:"default",width:"resolve"}},M.prototype.applyFromElement=function(e,t){var n=e.language,i=this.defaults.language,r=t.prop("lang"),o=t.closest("[lang]").prop("lang"),s=Array.prototype.concat.call(this._resolveLanguage(r),this._resolveLanguage(n),this._resolveLanguage(i),this._resolveLanguage(o));return e.language=s,e},M.prototype._resolveLanguage=function(t){if(!t||e.isEmptyObject(t))return[];if(e.isPlainObject(t))return[t];n=Array.isArray(t)?t:[t];for(var n,i=[],r=0;r<n.length;r++)if(i.push(n[r]),"string"==typeof n[r]&&n[r].indexOf("-")>0){var o=n[r].split("-")[0];i.push(o)}return i},M.prototype._processTranslations=function(t,n){for(var i=new u,r=0;r<t.length;r++){var o=new u,s=t[r];if("string"==typeof s)try{// Try to load it with the original name
o=u.loadPath(s)}catch(e){try{// If we couldn't load it, check if it wasn't the full path
s=this.defaults.amdLanguageBase+s,o=u.loadPath(s)}catch(e){// The translation could not be loaded at all. Sometimes this is
// because of a configuration problem, other times this can be
// because of how Select2 helps load all possible translation files
n&&window.console&&console.warn&&console.warn('Select2: The language file for "'+s+'" could not be automatically loaded. A fallback will be used instead.')}}else o=e.isPlainObject(s)?new u(s):s;i.extend(o)}return i},M.prototype.set=function(t,n){var i=e.camelCase(t),r={};r[i]=n;var o=c._convertData(r);e.extend(!0,this.defaults,o)},new M}),t.define("select2/options",["jquery","./defaults","./utils"],function(e,t,n){var i=function(e,n){this.options=e,null!=n&&this.fromElement(n),null!=n&&(this.options=t.applyFromElement(this.options,n)),this.options=t.apply(this.options)};return i.prototype.fromElement=function(t){var i=function(e,t){return t.toUpperCase()},r=["select2"];null==this.options.multiple&&(this.options.multiple=t.prop("multiple")),null==this.options.disabled&&(this.options.disabled=t.prop("disabled")),null==this.options.autocomplete&&t.prop("autocomplete")&&(this.options.autocomplete=t.prop("autocomplete")),null==this.options.dir&&(t.prop("dir")?this.options.dir=t.prop("dir"):t.closest("[dir]").prop("dir")?this.options.dir=t.closest("[dir]").prop("dir"):this.options.dir="ltr"),t.prop("disabled",this.options.disabled),t.prop("multiple",this.options.multiple),n.GetData(t[0],"select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),n.StoreData(t[0],"data",n.GetData(t[0],"select2Tags")),n.StoreData(t[0],"tags",!0)),n.GetData(t[0],"ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),t.attr("ajax--url",n.GetData(t[0],"ajaxUrl")),n.StoreData(t[0],"ajax-Url",n.GetData(t[0],"ajaxUrl")));// Pre-load all of the attributes which are prefixed with `data-`
for(var o={},s=0;s<t[0].attributes.length;s++){var a=t[0].attributes[s].name,l="data-";if(a.substr(0,l.length)==l){// Get the contents of the attribute after `data-`
var c=a.substring(l.length),u=n.GetData(t[0],c);// Store the data attribute contents into the dataset since
o[c.replace(/-([a-z])/g,i)]=u}}e.fn.jquery&&"1."==e.fn.jquery.substr(0,2)&&t[0].dataset&&(o=e.extend(!0,{},t[0].dataset,o));// Prefer our internal data cache if it exists
var d=e.extend(!0,{},n.GetData(t[0]),o);for(var p in d=n._convertData(d))r.indexOf(p)>-1||(e.isPlainObject(this.options[p])?e.extend(this.options[p],d[p]):this.options[p]=d[p]);return this},i.prototype.get=function(e){return this.options[e]},i.prototype.set=function(e,t){this.options[e]=t},i}),t.define("select2/core",["jquery","./options","./utils","./keys"],function(e,t,n,i){var r=function(e,i){null!=n.GetData(e[0],"select2")&&n.GetData(e[0],"select2").destroy(),this.$element=e,this.id=this._generateId(e),i=i||{},this.options=new t(i,e),r.__super__.constructor.call(this);// Set up the tabindex
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
e.fn.select2.amd=t,n)},"function"==typeof define&&define.amd?define(["jquery"],n):h?h=function(e,t){return void 0===t&&(t="undefined"!=typeof window?c("jxMcu"):c("jxMcu")(e)),n(t),t}:n(jQuery);var g=c("jxMcu");/*@__PURE__*/t(h)(/*@__PURE__*/t(g)),window.$=window.jQuery=/*@__PURE__*/t(g);var m=/*#__PURE__*/function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"tab-nav-item",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"tab-nav-items",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"tab-content";u(this,e),this.tabsNavItems=document.getElementsByClassName(t),this.tabNavList=document.getElementsByClassName(n),this.tabsContentItems=document.getElementsByClassName(i),this.handleClickOnTabs(),window.innerWidth<640&&this.initSelectForTabs()}return f(e,[{key:"handleClickOnTabs",value:function(){var e=this,t=!0,n=!1,i=void 0;try{for(var r,o=this.tabsNavItems[Symbol.iterator]();!(t=(r=o.next()).done);t=!0)r.value.addEventListener("click",function(t){e.switchTab(t.target)})}catch(e){n=!0,i=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw i}}}},{key:"switchTab",value:function(e){var t=e.getAttribute("data-tab"),n=!0,i=!1,r=void 0;try{for(var o,s=this.tabsNavItems[Symbol.iterator]();!(n=(o=s.next()).done);n=!0)o.value.classList.remove("active")}catch(e){i=!0,r=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw r}}var a=!0,l=!1,c=void 0;try{for(var u,d=this.tabsContentItems[Symbol.iterator]();!(a=(u=d.next()).done);a=!0){var p=u.value;p.id===t?p.classList.add("current"):p.classList.remove("current")}}catch(e){l=!0,c=e}finally{try{a||null==d.return||d.return()}finally{if(l)throw c}}e.classList.add("active"),this.tabNavList[0].classList.toggle("expanded")}},{key:"initSelectForTabs",value:function(){var e=/*@__PURE__*/t(g)(".select");e.select2({minimumResultsForSearch:1/0,templateResult:this.getSelectViewTemplate,templateSelection:this.getSelectViewTemplate}),e.on("select2:select",function(e){var t=e.target.value;document.querySelectorAll(".tab-content").forEach(function(e){e.getAttribute("id")===t&&(document.querySelector(".tab-content.current").classList.remove("current"),e.classList.add("current"))})})}},{key:"getSelectViewTemplate",value:function(e){return e.id?/*@__PURE__*/t(g)(/*@__PURE__*/t(g)('[data-template="'.concat(e.id,'"]')).html()):e.text}}]),e}(),y={};function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=Array(t);n<t;n++)i[n]=e[n];return i}function w(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}}function S(e,t){return(/**
 * Swiper 7.4.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: December 24, 2021
 *//* eslint no-param-reassign: "off" */function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,i,r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o=[],s=!0,a=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);s=!0);}catch(e){a=!0,i=e}finally{try{s||null==r.return||r.return()}finally{if(a)throw i}}return o}}(e,t)||w(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())}function x(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||w(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}/**
 * SSR Window 4.0.2
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2021, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: December 13, 2021
 *//* eslint-disable no-param-reassign */function T(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function E(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object.keys(t).forEach(function(n){void 0===e[n]?e[n]=t[n]:T(t[n])&&T(e[n])&&Object.keys(t[n]).length>0&&E(e[n],t[n])})}y=function(){var e,t,n,i,r,o,s,a,l,c,u,d,p,f,h,v,g,m,y,b,w,S,x,T,E,C,A,k,L,_,O,M,D,P,j,I,N,H,R=/**
    * Shows a message in the console of the given type.
    */// function showError(type, text) {
//   win.console && win.console[type] && win.console[type]('fullPage: ' + text);
// }
function(e){return"none"!==iE.getComputedStyle(e).display},q=function(e){return Array.from(e).filter(function(e){return R(e)})},z=/**
    * Equivalent of jQuery function $().
    */function(e,t){return t=arguments.length>1?t:document,t?t.querySelectorAll(e):null},B=/**
    * Checks if the passed element contains the passed class.
    */function(e,t){return null!=e&&e.classList.contains(t)},F=/**
    * Gets the window height. Crossbrowser.
    */function(){return"innerHeight"in iE?iE.innerHeight:iC.documentElement.offsetHeight},W=/**
    * Gets the window width.
    */function(){return iE.innerWidth},G=/**
    * Set's the CSS properties for the passed item/s.
    * @param {NodeList|HTMLElement|Object} items
    * @param {Object} props css properties and values.
    */function(e,t){for(n in e=K(e),t)if(t.hasOwnProperty(n)&&null!==n)for(var n,i=0;i<e.length;i++)e[i].style[n]=t[n];return e},U=/**
    * Gets the previous element to the passed element.
    */function(e){return e.previousElementSibling},V=/**
    * Gets the next element to the passed element.
    */function(e){return e.nextElementSibling},Y=/**
    * Gets the last element from the passed list of elements.
    */function(e){return e[e.length-1]},X=/**
    * Gets index from the passed element.
    * @param {String} selector is optional.
    */function(e,t){e=J(e)?e[0]:e;for(var n=null!=t?z(t,e.parentNode):e.parentNode.childNodes,i=0,r=0;r<n.length;r++){if(n[r]==e)return i;1==n[r].nodeType&&i++}return -1},K=/**
    * Gets an iterable element for the passed element/s
    */function(e){return J(e)?e:[e]},Q=/**
    * Adds the display=none property for the passed element/s
    */function(e){e=K(e);for(var t=0;t<e.length;t++)e[t].style.display="none";return e},Z=/**
    * Adds the display=block property for the passed element/s
    */function(e){e=K(e);for(var t=0;t<e.length;t++)e[t].style.display="block";return e},J=/**
    * Checks if the passed element is an iterable element or not
    */function(e){return"[object Array]"===Object.prototype.toString.call(e)||"[object NodeList]"===Object.prototype.toString.call(e)},ee=/**
    * Adds the passed class to the passed element/s
    */function(e,t){e=K(e);for(var n=0;n<e.length;n++)e[n].classList.add(t);return e},et=/**
    * Removes the passed class to the passed element/s
    * @param {String} `className` can be multiple classnames separated by whitespace
    */function(e,t){e=K(e);for(var n=t.split(" "),i=0;i<n.length;i++){t=n[i];for(var r=0;r<e.length;r++)e[r].classList.remove(t)}return e},en=/**
    * Appends the given element ot the given parent.
    */function(e,t){t.appendChild(e)},ei=/**
    Usage:

    var wrapper = document.createElement('div');
    wrapper.className = 'fp-slides';
    wrap($('.slide'), wrapper);

    https://jsfiddle.net/qwzc7oy3/15/ (vanilla)
    https://jsfiddle.net/oya6ndka/1/ (jquery equivalent)
    */function(e,t,n){var i;t=t||iC.createElement("div");for(var r=0;r<e.length;r++){var o=e[r];(!n||r)&&n||(i=t.cloneNode(!0),o.parentNode.insertBefore(i,o)),i.appendChild(o)}return e},er=/**
    Usage:
    var wrapper = document.createElement('div');
    wrapper.className = 'fp-slides';
    wrap($('.slide'), wrapper);

    https://jsfiddle.net/qwzc7oy3/27/ (vanilla)
    https://jsfiddle.net/oya6ndka/4/ (jquery equivalent)
    */function(e,t){ei(e,t,!0)},eo=/**
    * Usage:
    * wrapInner(document.querySelector('#pepe'), '<div class="test">afdas</div>');
    * wrapInner(document.querySelector('#pepe'), element);
    *
    * https://jsfiddle.net/zexxz0tw/6/
    *
    * https://stackoverflow.com/a/21817590/1081396
    */function(e,t){for(e.appendChild(t);e.firstChild!==t;)t.appendChild(e.firstChild)},es=/**
    * Usage:
    * unwrap(document.querySelector('#pepe'));
    * unwrap(element);
    *
    * https://jsfiddle.net/szjt0hxq/1/
    *
    */function(e){for(var t=iC.createDocumentFragment();e.firstChild;)t.appendChild(e.firstChild);e.parentNode.replaceChild(t,e)},ea=/**
    * Places one element (rel) after another one or group of them (reference).
    * @param {HTMLElement} reference
    * @param {HTMLElement|NodeList|String|Array} el
    * https://jsfiddle.net/9s97hhzv/1/
    */function(e,t){ec(e,e.nextSibling,t)},el=/**
    * Places one element (rel) before another one or group of them (reference).
    * @param {HTMLElement} reference
    * @param {HTMLElement|NodeList|String|Array} el
    * https://jsfiddle.net/9s97hhzv/1/
    */function(e,t){ec(e,e,t)},ec=/**
    * Based in https://stackoverflow.com/a/19316024/1081396
    * and https://stackoverflow.com/a/4793630/1081396
    */function(e,t,n){J(n)||("string"==typeof n&&(n=ex(n)),n=[n]);for(var i=0;i<n.length;i++)e.parentNode.insertBefore(n[i],t)}//http://stackoverflow.com/questions/3464876/javascript-get-window-x-y-position-for-scroll
,eu=function(){var e=iC.documentElement;return(iE.pageYOffset||e.scrollTop)-(e.clientTop||0)},ed=/**
    * Gets the siblings of the passed element
    */function(e){return Array.prototype.filter.call(e.parentNode.children,function(t){return t!==e})},ep=function(e){e.preventDefault()},ef=function(e,t){return e.getAttribute(t)},eh=function(e,t,n){iC.addEventListener(e,t,"undefined"===n?null:n)},ev=function(e,t,n){iE.addEventListener(e,t,"undefined"===n?null:n)},eg=function(e,t,n){iC.removeEventListener(e,t,"undefined"===n?null:n)},em=function(e,t,n){iE.removeEventListener(e,t,"undefined"===n?null:n)},ey=/**
    * Determines whether the passed item is of function type.
    */function(e){if("function"==typeof e)return!0;var t=Object.prototype.toString.call(e);return"[object Function]"===t||"[object GeneratorFunction]"===t},eb=/**
    * Trigger custom events
    */function(e,t,n){var i;n=void 0===n?{}:n,"function"==typeof iE.CustomEvent?i=new CustomEvent(t,{detail:n}):(i=iC.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,n),e.dispatchEvent(i)},ew=/**
    * Polyfill of .matches()
    */function(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t)},eS=/**
    * Toggles the visibility of the passed element el.
    */function(e,t){if("boolean"==typeof t)for(var n=0;n<e.length;n++)e[n].style.display=t?"block":"none";//we don't use it in other way, so no else :)
return e},ex=/**
    * Creates a HTMLElement from the passed HTML string.
    * https://stackoverflow.com/a/494348/1081396
    */function(e){var t=iC.createElement("div");return t.innerHTML=e.trim(),t.firstChild},eT=/**
    * Removes the passed item/s from the DOM.
    */function(e){e=K(e);for(var t=0;t<e.length;t++){var n=e[t];n&&n.parentElement&&n.parentNode.removeChild(n)}}//https://jsfiddle.net/w1rktecz/
,eE=function(e,t,n){for(var i=e[n],r=[];i;)(ew(i,t)||null==t)&&r.push(i),i=i[n];return r},eC=/**
    * Gets all next elements matching the passed selector.
    */function(e,t){return eE(e,t,"nextElementSibling")},eA=/**
    * Gets all previous elements matching the passed selector.
    */function(e,t){return eE(e,t,"previousElementSibling")},ek=/**
    * Converts an object to an array.
    */function(e){return Object.keys(e).map(function(t){return e[t]})},eL=function(e){return e[e.length-1]},e_=/**
    * Gets the average of the last `number` elements of the given array.
    */function(e,t){for(var n=0,i=e.slice(Math.max(e.length-t,1)),r=0;r<i.length;r++)n+=i[r];return Math.ceil(n/t)},eO=/**
    * Sets the value for the given attribute from the `data-` attribute with the same suffix
    * ie: data-srcset ==> srcset  |  data-src ==> src
    */function(e,t){e.setAttribute(t,ef(e,"data-"+t)),e.removeAttribute("data-"+t)},eM=function(e,t){var n=[e];do n.push(e=e.parentNode);while(!ew(e,t))return n},eD=function(){var e=iC.activeElement;return ew(e,"textarea")||ew(e,"input")||ew(e,"select")||"true"==ef(e,"contentEditable")||""==ef(e,"contentEditable")}//utils are public, so we can use it wherever we want
,eP=function(e){Object.assign(iH,e)},e$=function(){return iH},ej=function(){iN.on(iR.onDestroy,eN)},eI=function(e){iN.emit(iR.onClickOrTouch,{e:e,target:e.target})},eN=function(){["click","touchstart"].forEach(function(e){eg(e,eI)})}// changing isWindowFocused to true on focus event
,eH=function(){eP({isWindowFocused:!0})},eR=function(e){rE=e},eq=function(e){return rE},ez=function(){return rk||rT},eB=function(e){rA=Object.assign({},rk=iP({},rT,e))},eF=function(){return rA},eW=function(e,t){rT[e]=t},eG=/*
    * Sets the state for a variable with multiple states (original, and temporal)
    * Some variables such as `autoScrolling` or `recordHistory` might change automatically its state when using `responsive` or `autoScrolling:false`.
    * This function is used to keep track of both states, the original and the temporal one.
    * If type is not 'internal', then we assume the user is globally changing the variable.
    */function(e,t,n){rk[e]=t,"internal"!==n&&(rA[e]=t)},eU=/**
    * Setting options from DOM elements if they are not provided.
    */function(){//no anchors option? Checking for them in the DOM attributes
if(!ez().anchors.length){var e="[data-anchor]",t=z(ez().sectionSelector.split(",").join(e+",")+e,rE);t.length&&t.length===z(ez().sectionSelector,rE).length&&(rC=!0,t.forEach(function(e){ez().anchors.push(ef(e,"data-anchor").toString())}))}//no tooltips option? Checking for them in the DOM attributes
if(!ez().navigationTooltips.length){var n="[data-tooltip]",i=z(ez().sectionSelector.split(",").join(n+",")+n,rE);i.length&&i.forEach(function(e){ez().navigationTooltips.push(ef(e,"data-tooltip").toString())})}},eV=function(e){return e.map(function(e){return e.item})},eY=function(e,t){return e.find(function(e){return e.item===t})},eX=/**
    * Gets the active slide (or section) for the given section
    */function(e){var t=z(rr,e);return t.length&&(e=t[0]),e},eK=function(e){return e?e.activeSlide?e.activeSlide:e:null},eQ=/**
    * Gets the scrolling settings depending on the plugin autoScrolling option
    */function(e){var t,n,i=ez();return i.autoScrolling&&!i.scrollBar?(t=-e,n=z(iz)[0]):(t=e,n=window),{options:t,element:n}},eZ=/**
    * Scrolls the page / slider the given number of pixels.
    * It will do it one or another way dependiong on the library's config.
    */function(e,t){!ez().autoScrolling||ez().scrollBar||e.self!=window&&B(e,ro)?e.self!=window&&B(e,ro)?e.scrollLeft=t:e.scrollTo(0,t):e.style.top=t+"px"},eJ=/**
    * Adds transition animations for the given element
    */function(e){var t="transform "+ez().scrollingSpeed+"ms "+ez().easingcss3;return et(e,iW),G(e,{"-webkit-transition":t,transition:t})},e0=/**
    * Retuns `up` or `down` depending on the scrolling movement to reach its destination
    * from the current section.
    */function(e,t){var n=e.index(),i=X(t,iJ);return n==i?"none":n>i?"up":"down"},e1=/**
    * Remove transition animations for the given element
    */function(e){return ee(e,iW)},e2=/**
    * Returns the cross-browser transform string.
    */function(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}},e3=/**
    * Adds a css3 transform property to the container class with or without animation depending on the animated param.
    */function(e,t){t?eJ(eq()):e1(eq()),clearTimeout(E),G(eq(),e2(e)),iM.test.translate3d=e,E=setTimeout(function(){et(eq(),iW)},10)},e4=/**
    * Scrolls silently (with no animation) the page to the given Y position.
    */function(e){// The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
// that's why we round it to 0.
var t=Math.round(e);if(ez().css3&&ez().autoScrolling&&!ez().scrollBar)e3("translate3d(0px, -"+t+"px, 0px)",!1);else if(ez().autoScrolling&&!ez().scrollBar)G(eq(),{top:-t+"px"}),iM.test.top=-t+"px";else{var n=eQ(t);eZ(n.element,n.options)}},e6=/**
    * Defines the scrolling speed
    */function(e,t){eG("scrollingSpeed",e,t)},e9=function(){rD=z("body")[0],rP=z("html")[0],r$=z("html, body")},e7=/**
    * Simulates the animated scrollTop of jQuery. Used when css3:false or scrollBar:true or autoScrolling:false
    * http://stackoverflow.com/a/16136789/1081396
    */function(e,t,n,i){var r,o=e8(e),s=t-o,a=!1,l=iH.activeAnimation;eP({activeAnimation:!0}),C&&window.cancelAnimationFrame(C),C=function(c){r||(r=c);var u=Math.floor(c-r);if(iH.activeAnimation){//in order to stope it from other function whenever we want
var d=t;n&&(d=iE.fp_easings[ez().easing](u,o,s,n)),u<=n&&eZ(e,d),u<n?window.requestAnimationFrame(C):void 0===i||a||(i(),eP({activeAnimation:!1}),a=!0)}else a||l||(i(),eP({activeAnimation:!1}),a=!0)},window.requestAnimationFrame(C)},e8=/**
    * Getting the position of the element to scroll when using jQuery animations
    */function(e){//gets the top property of the wrapper
return e.self!=iE&&B(e,ro)?e.scrollLeft:!ez().autoScrolling||ez().scrollBar?eu():e.offsetTop},e5=/**
    * Makes sure to only create a Panel object if the element exist
    */function(e){return e&&!e.item?new rO(new rz(e)):e?new rO(e):null},te=function(e){return e?new rM(e):null},tt=/**
    * Dispatch events & callbacks
    */function(e,t){var n=tn(e,t);return eb(eq(),e,n),!1!==ez()[e].apply(n[Object.keys(n)[0]],ek(n))},tn=/**
    * Gets the event's data for the given event on the right format.
    */function(e,t){//using functions to run only the necessary bits within the object
var n={afterRender:function(){return{section:e5(e$().activeSection),slide:te(e$().activeSection.activeSlide)}},onLeave:function(){return{origin:e5(t.items.origin),destination:e5(t.items.destination),direction:t.direction,trigger:e$().scrollTrigger}},afterLoad:function(){return n.onLeave()},afterSlideLoad:function(){return{section:e5(t.items.section),origin:e5(t.items.origin),destination:e5(t.items.destination),direction:t.direction,trigger:e$().scrollTrigger}},onSlideLeave:function(){return n.afterSlideLoad()},beforeLeave:function(){return n.onLeave()},onScrollOverflow:function(){return{section:e5(e$().activeSection),slide:te(e$().activeSection.activeSlide),position:t.position,direction:t.direction}}};return n[e]()},ti=/**
    * Plays video and audio elements.
    */function(e){var t=eX(e);//playing HTML5 media elements
z("video, audio",t).forEach(function(e){e.hasAttribute("data-autoplay")&&"function"==typeof e.play&&e.play()}),z('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){e.hasAttribute("data-autoplay")&&tr(e),//in case the URL was not loaded yet. On page load we need time for the new URL (with the API string) to load.
e.onload=function(){e.hasAttribute("data-autoplay")&&tr(e)}})},tr=/**
    * Plays a youtube video
    */function(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")},to=/**
    * Stops video and audio elements.
    */function(e){var t=eX(e);//stopping HTML5 media elements
z("video, audio",t).forEach(function(e){e.hasAttribute("data-keepplaying")||"function"!=typeof e.pause||e.pause()}),z('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){/youtube\.com\/embed\//.test(ef(e,"src"))&&!e.hasAttribute("data-keepplaying")&&e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})},ts=/*
    * Enables the Youtube videos API so we can control their flow if necessary.
    */function(){z('iframe[src*="youtube.com/embed/"]',eq()).forEach(function(e){ta(e,"enablejsapi=1")})},ta=/**
    * Adds a new parameter and its value to the `src` of a given element
    */function(e,t){var n=ef(e,"src");e.setAttribute("src",n+tl(n)+t)},tl=/*
    * Returns the prefix sign to use for a new parameter in an existen URL.
    *
    * @return {String}  ? | &
    */function(e){return/\?/.test(e)?"&":"?"},tc=/**
    * Lazy loads image, video and audio elements.
    */function(e){ez().lazyLoading&&z("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",eX(e)).forEach(function(e){if(["src","srcset"].forEach(function(t){var n=ef(e,"data-"+t);null!=n&&n&&(eO(e,t),e.addEventListener("load",function(){}))}),ew(e,"source")){var t=i$(e,"video, audio");t&&(t.load(),t.onloadeddata=function(){})}})},tu=/**
    * Sets a class for the body of the page depending on the active section / slide
    */function(){var e=e$().activeSection.item,t=e$().activeSection.activeSlide,n=String(td(e));t&&(n=n+"-"+td(t.item)),n=n.replace("/","-").replace("#","");var i=RegExp("\\b\\s?"+iV+"-[^\\s]+\\b","g");rD.className=rD.className.replace(i,""),ee(rD,iV+"-"+n)},td=/**
    * Gets the anchor for the given slide / section. Its index will be used if there's none.
    */function(e){if(!e)return null;var t=ef(e,"data-anchor"),n=X(e);return null==t&&(t=n),t},tp=/**
    * Sets the state of the website depending on the active section/slide.
    * It changes the URL hash when needed and updates the body class.
    */function(e,t,n){var i="";ez().anchors.length&&!ez().lockAnchors&&(e?(null!=n&&(i=n),null==t&&(t=e),eP({lastScrolledSlide:t}),tf(i+"/"+t)):(null!=e&&eP({lastScrolledSlide:t}),tf(n))),tu()},tf=/**
    * Sets the URL hash.
    */function(e){if(ez().recordHistory)location.hash=e;else if(iA||iL)iE.history.replaceState(void 0,void 0,"#"+e);else{var t=iE.location.href.split("#")[0];iE.location.replace(t+"#"+e)}},th=/**
    * Gets the name for screen readers for a section/slide navigation bullet.
    */function(e,t,n){var i="Section"===t?ez().anchors[e]:ef(n,"data-anchor");return encodeURI(ez().navigationTooltips[e]||i||t+" "+(e+1))},tv=function(e){e.cancelable&&ep(e),eP({scrollTrigger:"horizontalNav"});/*jshint validthis:true */var t=i$(this,iJ),n=z(rs,i$(this,iJ))[0],i=eY(e$().sections,t).slides[X(i$(this,"li"))];iN.emit(iR.landscapeScroll,{slides:n,destination:i.item})},tg=/**
    * Sets the state for the horizontal bullet navigations.
    */function(e,t){ez().slidesNavigation&&null!=e&&(et(z(iX,e),iY),ee(z("a",z("li",e)[t]),iY))},tm=/**
    * Creates a landscape navigation bar with dots for horizontal sliders.
    */function(e){var t=e.item,n=e.slides.length;en(ex('<div class="'+rf+'"><ul></ul></div>'),t);var i=z(rh,t)[0];//top or bottom
ee(i,"fp-"+ez().slidesNavPosition);for(var r=0;r<n;r++){var o=z(ri,t)[r];en(ex('<li><a href="#"><span class="fp-sr-only">'+th(r,"Slide",o)+"</span><span></span></a></li>"),z("ul",i)[0])}//centering it
G(i,{"margin-left":"-"+i.innerWidth/2+"px"});var s=e.activeSlide?e.activeSlide.index():0;ee(z("a",z("li",i)[s]),iY)},ty=/**
    * Allowing or disallowing the mouse/swipe scroll in a given direction. (not for keyboard)
    * @param type m (mouse) or k (keyboard)
    */function(e,t,n){//up, down, left, right
"all"!==t?rj[n][t]=e:Object.keys(rj[n]).forEach(function(t){rj[n][t]=e})},tb=function(){return rj},tw=function(){/*jshint validthis:true */var e=i$(this,iJ);/*jshint validthis:true */B(this,rb)?tb().m.left&&(eP({scrollTrigger:"slideArrow"}),iN.emit(iR.moveSlideLeft,{section:e})):tb().m.right&&(eP({scrollTrigger:"slideArrow"}),iN.emit(iR.moveSlideRight,{section:e}))},tS=/**
    * Creates the control arrows for the given section
    */function(e){var t=e.item,n=[ex(ez().controlArrowsHTML[0]),ex(ez().controlArrowsHTML[1])];ea(z(rs,t)[0],n),ee(n,rm),ee(n[0],rb),ee(n[1],rS),"#fff"!==ez().controlArrowColor&&(G(z(rx,t),{"border-color":"transparent transparent transparent "+ez().controlArrowColor}),G(z(rw,t),{"border-color":"transparent "+ez().controlArrowColor+" transparent transparent"})),ez().loopHorizontal||Q(z(rw,t))},tx=function(e){!ez().loopHorizontal&&ez().controlArrows&&(//hidding it for the fist slide, showing for the rest
eS(z(rw,e.section),0!==e.slideIndex),eS(z(rx,e.section),null!=V(e.destiny)))},tT=/**
    * Defines wheter to record the history for each hash change in the URL.
    */function(e,t){eG("recordHistory",e,t)},tE=/**
    * Sets the autoScroll option.
    * It changes the scroll bar visibility and the history of the site as a result.
    */function(e,t){e||e4(0),eG("autoScrolling",e,t);var n=e$().activeSection.item;if(ez().autoScrolling&&!ez().scrollBar)G(r$,{overflow:"hidden",height:"100%"}),et(rD,"fp-scrollable"),tT(eF().recordHistory,"internal"),G(eq(),{"-ms-touch-action":"none","touch-action":"none"}),null!=n&&e4(n.offsetTop);else if(G(r$,{overflow:"visible",height:"initial"}),ee(rD,"fp-scrollable"),tT(!!ez().autoScrolling&&eF().recordHistory,"internal"),G(eq(),{"-ms-touch-action":"","touch-action":""}),null!=n){var i=eQ(n.offsetTop);i.element.scrollTo(0,i.options)}},tC=/**
    * Adds sections before or after the current one to create the infinite effect.
    */function(e){eP({isDoingContinousVertical:!0});var t=e$().activeSection.item;// Scrolling down
return e.isMovementUp?// Move all next sections to before the active section
el(t,eC(t,iJ)):ea(t,eA(t,iJ).reverse()),// Maintain the displayed position (now that we changed the element order)
e4(e$().activeSection.item.offsetTop),tA(),e.wrapAroundElements=t,e.dtop=e.element.offsetTop,e.yMovement=e0(e$().activeSection,e.element),e},tA=/**
    * Maintains the active slides in the viewport
    * (Because the `scroll` animation might get lost with some actions, such as when using continuousVertical)
    */function(){for(var e=z(rr),t=0;t<e.length;t++)t3(e[t],"internal")},tk=/**
    * Maintains the active slides in the viewport
    * (Because the `scroll` animation might get lost with some actions, such as when using continuousVertical)
    */function(){for(var e=z(rr),t=0;t<e.length;t++)t3(e[t],"internal")},tL=/**
    * Fix section order after continuousVertical changes have been animated
    */function(e){// If continuousVertical is in effect (and autoScrolling would also be in effect then),
// finish moving the elements around so the direct navigation will function more simply
null!=e.wrapAroundElements&&(e.isMovementUp?el(z(iJ)[0],e.wrapAroundElements):ea(z(iJ)[e$().sections.length-1],e.wrapAroundElements),e4(e$().activeSection.item.offsetTop),tk(),eP({isDoingContinousVertical:!1}))},t_=/**
    * Makes sure lazyload is done for other sections in the viewport that are not the
    * active one. 
    */function(){var e=z(i3)[0]||tU()&&z(i6)[0];//quitting when it doesn't apply
ez().lazyLoading&&e&&//making sure to lazy load auto-height sections that are in the viewport
z(iJ+":not("+iX+")").forEach(function(e){tO(e)&&tc(e)})},tO=/**
    * Determines whether a section is in the viewport or not.
    */function(e){var t=e.getBoundingClientRect(),n=t.top,i=t.bottom,r=n+2<iH.windowsHeight&&n>0,o=i>2&&i<iH.windowsHeight;return r||o},tM=function(){/*jshint validthis:true */eb(U(this),"click")},tD=/**
    * Activating the vertical navigation bullets according to the given slide name.
    */function(e,t){var n=z(i8)[0];ez().navigation&&null!=n&&"none"!==n.style.display&&(et(z(iX,n),iY),e?ee(z('a[href="#'+e+'"]',n),iY):ee(z("a",z("li",n)[t]),iY))},tP=/**
    * Creates a vertical navigation bar.
    */function(){eT(z(i8));var e=iC.createElement("div");e.setAttribute("id",i7);var t=iC.createElement("ul");e.appendChild(t),en(e,rD);var n=z(i8)[0];ee(n,"fp-"+ez().navigationPosition),ez().showActiveTooltip&&ee(n,rt);for(var i="",r=0;r<e$().sections.length;r++){var o=e$().sections[r],s="";ez().anchors.length&&(s=o.anchor),i+='<li><a href="#'+encodeURI(s)+'"><span class="fp-sr-only">'+th(o.index(),"Section")+"</span><span></span></a>";var a=ez().navigationTooltips[o.index()];void 0!==a&&""!==a&&(i+='<div class="'+i5+" fp-"+ez().navigationPosition+'">'+a+"</div>"),i+="</li>"}z("ul",n)[0].innerHTML=i;var l=z("li",z(i8)[0])[e$().activeSection.index()];ee(z("a",l),iY)}//Scrolls to the section when clicking the navigation bullet
,t$=function(e){e.preventDefault&&ep(e),eP({scrollTrigger:"verticalNav"});/*jshint validthis:true */// @ts-ignore
var t=X(i$(this,i8+" li"));iN.emit(iR.scrollPage,{destination:e$().sections[t]})},tj=/**
    * Sets to active the current menu and vertical nav items.
    */function(e,t){tI(e),tD(e,t)},tI=/**
    * Activating the website main menu elements according to the given slide name.
    */function(e){ez().menu&&ez().menu.length&&z(ez().menu).forEach(function(t){null!=t&&(et(z(iX,t),iY),ee(z('[data-menuanchor="'+e+'"]',t),iY))})},tN=/**
    * Fires the wheel event once per mouse wheel trigger.
    */function(e,t){if(ey(ez().beforeLeave))return rI(e$().scrollTrigger,function(){return tt(e,t)})},tH=/**
    * Scrolls the site to the given element and scrolls to the slide if a callback is given.
    */function(e,t,n){var i,r,o=e.item;if(null!=o){//there's no element to scroll, leaving the function
var s=tR(o),a={element:o,callback:t,isMovementUp:n,dtop:s,yMovement:e0(e$().activeSection,o),anchorLink:e.anchor,sectionIndex:e.index(),activeSlide:e.activeSlide?e.activeSlide.item:null,leavingSection:e$().activeSection.index()+1,//caching the value of isResizing at the momment the function is called
//because it will be checked later inside a setTimeout and the value might change
localIsResizing:iH.isResizing,items:{origin:e$().activeSection,destination:e},direction:null};if((e$().activeSection.item!=o||iH.isResizing)&&(!ez().scrollBar||eu()!==a.dtop||B(o,i2))){if(null!=a.activeSlide&&(i=ef(a.activeSlide,"data-anchor"),r=X(a.activeSlide,null)),!a.localIsResizing){var l=a.yMovement;//required for continousVertical
if(void 0!==n&&(l=n?"up":"down"),//for the callback
a.direction=l,ey(ez().beforeLeave)&&!1===tN("beforeLeave",a)||ey(ez().onLeave)&&!tt("onLeave",a))return}// If continuousVertical && we need to wrap around
ez().autoScrolling&&ez().continuousVertical&&void 0!==a.isMovementUp&&(!a.isMovementUp&&"up"==a.yMovement||// Intending to scroll down but about to go up or
a.isMovementUp&&"down"==a.yMovement)&&(a=tC(a)),a.localIsResizing||to(e$().activeSection.item),ee(o,iY),et(ed(o),iY),t4(),tc(o),//more than once if the page is scrolling
eP({canScroll:iM.test.isTesting}),tp(r,i,a.anchorLink),iN.emit(iR.onLeave,a),tq(a),eP({lastScrolledDestiny:a.anchorLink}),tj(a.anchorLink,a.sectionIndex)}}},tR=/**
    * Returns the destination Y position based on the scrolling direction and
    * the height of the section.
    */function(e){var t=e.offsetHeight,n=e.offsetTop,i=n,r=n>iH.previousDestTop,o=i-F()+t,s=ez().bigSectionsDestination;return t>F()?(r||s)&&"bottom"!==s||(i=o):(r||iH.isResizing&&null==V(e))&&(i=o),/*
      Keeping record of the last scrolled position to determine the scrolling direction.
      No conventional methods can be used as the scroll bar might not be present
      AND the section might not be active if it is auto-height and didnt reach the middle
      of the viewport.
      */eP({previousDestTop:i}),i},tq=/**
    * Performs the vertical movement (by CSS3 or by jQuery)
    */function(e){var t=ez().scrollingSpeed<700,n=t?700:ez().scrollingSpeed;if(eP({touchDirection:"none",scrollY:Math.round(e.dtop)}),iN.emit(iR.onPerformMovement),ez().css3&&ez().autoScrolling&&!ez().scrollBar)e3("translate3d(0px, -"+Math.round(e.dtop)+"px, 0px)",!0),ez().scrollingSpeed?(clearTimeout(A),A=setTimeout(function(){tz(e),eP({canScroll:!t||iM.test.isTesting})},ez().scrollingSpeed)):tz(e);else{var i=eQ(e.dtop);iM.test.top=-e.dtop+"px",clearTimeout(A),e7(i.element,i.options,ez().scrollingSpeed,function(){ez().scrollBar?/* Hack!
            The timeout prevents setting the most dominant section in the viewport as "active" when the user
            scrolled to a smaller section by using the mousewheel (auto scrolling) rather than draging the scroll bar.
             When using scrollBar:true It seems like the scroll events still getting propagated even after the scrolling animation has finished.
            */A=setTimeout(function(){tz(e)},30):(tz(e),eP({canScroll:!t||iM.test.isTesting}))})}// enabling canScroll after the minimum transition laps
t&&(clearTimeout(k),k=setTimeout(function(){eP({canScroll:!0})},n))},tz=/**
    * Actions to do once the section is loaded.
    */function(e){eP({isBeyondFullpage:!1}),tL(e),ey(ez().afterLoad)&&!e.localIsResizing&&tt("afterLoad",e),t4(),e.localIsResizing||ti(e.element),ee(e.element,iK),et(ed(e.element),iK),t_(),eP({canScroll:!0}),iN.emit(iR.afterSectionLoads,e),ey(e.callback)&&e.callback()},tB=/**
    * Sets fitToSection
    */function(e,t){eG("fitToSection",e,t)},tF=/**
    * Fits the site to the nearest active section
    */function(){//checking fitToSection again in case it was set to false before the timeout delay
iH.canScroll&&(//allows to scroll to an active section and
//if the section is already active, we prevent firing callbacks
eP({isResizing:!0}),tH(iH.activeSection),eP({isResizing:!1}))},tW=/**
    * Checks if the site needs to get responsive and disables autoScrolling if so.
    * A class `fp-responsive` is added to the plugin's container in case the user wants to use it for his own responsive CSS.
    */function(){var e=ez().responsive||ez().responsiveWidth,t=ez().responsiveHeight,n=e&&iE.innerWidth<e,i=t&&iE.innerHeight<t;//backwards compatiblity
e&&t?tG(n||i):e?tG(n):t&&tG(i)},tG=/**
    * Turns fullPage.js to normal scrolling mode when the viewport `width` or `height`
    * are smaller than the set limit values.
    */function(e){var t=tU();e?!t&&(tE(!1,"internal"),tB(!1,"internal"),Q(z(i8)),ee(rD,iF),ey(ez().afterResponsive)&&ez().afterResponsive.call(eq(),e)):t&&(tE(eF().autoScrolling,"internal"),tB(eF().autoScrolling,"internal"),Z(z(i8)),et(rD,iF),ey(ez().afterResponsive)&&ez().afterResponsive.call(eq(),e))},tU=/**
    * Determines whether fullpage.js is in responsive mode or not.
    */function(){return B(rD,iF)},tV=function(e){ez().verticalCentered&&(!ez().scrollOverflow&&rH.shouldBeScrollable(e.item)||rH.isScrollable(e)||B(e.item,rc)||ee(e.item,rc))},tY=/**
    * Styling vertical sections
    */function(e){var t=e.item,n=e.allSlidesItems.length,i=e.index();!e$().activeSection&&e.isVisible&&(ee(t,iY),t4(),rN=e$().activeSection.item),ez().paddingTop&&G(t,{"padding-top":ez().paddingTop}),ez().paddingBottom&&G(t,{"padding-bottom":ez().paddingBottom}),void 0!==ez().sectionsColor[i]&&G(t,{"background-color":ez().sectionsColor[i]}),void 0!==ez().anchors[i]&&t.setAttribute("data-anchor",e.anchor),n||tV(e)},tX=function(){ez().scrollOverflow&&!ez().scrollBar&&(rH.makeScrollable(),rH.focusScrollable())},tK=function(){iN.removeListener(iR.onAfterRenderNoAnchor,tX),eg("keyup",rH.keyUpHandler)},tQ=function(){clearTimeout(_),eP({slideMoving:!1})},tZ=/**
    * Scrolls horizontal sliders.
    */function(e,t,n){var i=i$(e,iJ),r=e$().sections.filter(function(e){return e.item==i})[0],o=r.slides.filter(function(e){return e.item==t})[0],s={slides:e,destiny:t,direction:n,destinyPos:{left:t.offsetLeft},slideIndex:o.index(),section:i,sectionIndex:r.index(),anchorLink:r.anchor,slidesNav:z(rh,i)[0],slideAnchor:o.anchor,prevSlide:r.activeSlide.item,prevSlideIndex:r.activeSlide.index(),items:{section:r,origin:r.activeSlide,destination:o},//caching the value of isResizing at the momment the function is called
//because it will be checked later inside a setTimeout and the value might change
localIsResizing:iH.isResizing};if(s.xMovement=t0(s.prevSlideIndex,s.slideIndex),s.direction=s.direction?s.direction:s.xMovement,s.localIsResizing||eP({canScroll:!1}),ez().onSlideLeave&&!s.localIsResizing&&"none"!==s.xMovement&&ey(ez().onSlideLeave)&&!1===tt("onSlideLeave",s)){eP({slideMoving:!1});return}ee(t,iY),et(ed(t),iY),t4(),s.localIsResizing||(to(s.prevSlide),tc(t)),tx(s),r.isActive&&!s.localIsResizing&&tp(s.slideIndex,s.slideAnchor,s.anchorLink),iN.emit(iR.onSlideLeave,s),tJ(e,s,!0)},tJ=/**
    * Performs the horizontal movement. (CSS3 or jQuery)
    *
    * @param fireCallback {Boolean} - determines whether or not to fire the callback
    */function(e,t,n){var i=t.destinyPos;if(tg(t.slidesNav,t.slideIndex),eP({scrollX:Math.round(i.left)}),ez().css3){var r="translate3d(-"+Math.round(i.left)+"px, 0px, 0px)";iM.test.translate3dH[t.sectionIndex]=r,G(eJ(z(rl,e)),e2(r)),clearTimeout(_),_=setTimeout(function(){n&&t2(t)},ez().scrollingSpeed)}else iM.test.left[t.sectionIndex]=Math.round(i.left),e7(e,Math.round(i.left),ez().scrollingSpeed,function(){n&&t2(t)})},t0=/**
    * Retuns `right` or `left` depending on the scrolling movement to reach its destination
    * from the current slide.
    */function(e,t){return e==t?"none":e>t?"left":"right"},t1=function(){clearTimeout(_)},t2=function(e){e.localIsResizing||(ey(ez().afterSlideLoad)&&tt("afterSlideLoad",e),//needs to be inside the condition to prevent problems with continuousVertical and scrollHorizontally
//and to prevent double scroll right after a windows resize
eP({canScroll:!0}),ti(e.destiny),iN.emit(iR.afterSlideLoads,e)),eP({slideMoving:!1})},t3=/**
    * Slides silently (with no animation) the active slider to the given slide.
    * @param noCallback {bool} true or defined -> no callbacks
    */function(e,t){e6(0,"internal"),void 0!==t&&eP({isResizing:!0}),tZ(i$(e,rs),e),void 0!==t&&eP({isResizing:!1}),e6(eF().scrollingSpeed,"internal")},t4=/** 
     * Updates the state of the app.
     */function(){iH.activeSection=null,iH.sections.map(function(e){var t=B(e.item,iY);e.isActive=t,e.hasScroll=rH.hasScroll(e.item),t&&(iH.activeSection=e),e.slides.length&&(e.activeSlide=null,e.slides.map(function(t){var n=B(t.item,iY);t.hasScroll=rH.hasScroll(e.item),t.isActive=n,n&&(e.activeSlide=t)}))}),t7()},t6=function(){var e=z(ez().sectionSelector,eq()),t=q(e),n=Array.from(e).map(function(e){return new rz(e)}),i=n.filter(function(e){return e.isVisible}),r=i.reduce(function(e,t){return e.concat(t.slides)},[]);rR=t9(iH.activeSection),rq=t9(iH.activeSection?iH.activeSection.activeSlide:null),iH.numSections=t.length,iH.numSlides=i.reduce(function(e,t){return e+t.slides.length},0),iH.sections=i,iH.sectionsIncludingHidden=n,iH.slides=r,iH.panels=iH.sections.concat(iH.slides)},t9=function(e){if(!e)return null;var t=e?e.item:null,n=e.isSection?iH.sectionsIncludingHidden:iH.activeSection.slidesIncludingHidden;if(t){var i=eY(n,t);return i?i.index():null}return null},t7=/**
     * When changes in the DOM take place there's a change 
     * the active section is now hidden or removed. 
     * fullPage.js will scroll to the closest section nearby.
     */function(){var e=iH.activeSection,t=!!iH.activeSection&&iH.activeSection.slides.length,n=iH.activeSection?iH.activeSection.activeSlide:null;if(!e&&iH.sections.length&&!e$().isBeyondFullpage&&rR){var i=t8(rR,iH.sections);i&&(iH.activeSection=i,iH.activeSection.isActive=!0,ee(iH.activeSection.item,iY)),iH.activeSection&&e4(iH.activeSection.item.offsetTop)}if(t&&!n&&rq){var r=t8(rq,iH.activeSection.slides);r&&(iH.activeSection.activeSlide=r,iH.activeSection.activeSlide.isActive=!0,ee(iH.activeSection.activeSlide.item,iY)),iH.activeSection.activeSlide&&t3(iH.activeSection.activeSlide.item,"internal")}},t8=function(e,t){var n,i=e-1,r=e;do{if(n=t[i]||t[r])break;i-=1,r+=1}while(i>=0||r<t.length)return n},t5=/**
    * Adds internal classes to be able to provide customizable selectors
    * keeping the link with the style sheet.
    */function(){ee(z(ez().sectionSelector,eq()),iZ),ee(z(ez().slideSelector,eq()),rn)},ne=/**
    * Styles the horizontal slides for a section.
    */function(e){var t=e.slides.length,n=e.allSlidesItems,i=e.slides,r=100/t;if(!z(rs,e.item)[0]){var o=iC.createElement("div");o.className=ro,er(n,o);var s=iC.createElement("div");s.className=ra,er(n,s)}G(z(rl,e.item),{width:100*t+"%"}),t>1&&(ez().controlArrows&&tS(e),ez().slidesNavigation&&tm(e)),i.forEach(function(e){G(e.item,{width:r+"%"}),ez().verticalCentered&&tV(e)});var a=e.activeSlide||null;//if the slide won't be an starting point, the default will be the first one
null!=a&&iH.activeSection&&(0!==iH.activeSection.index()||0===iH.activeSection.index()&&0!==a.index())?t3(a.item,"internal"):ee(n[0],iY)},nt=/**
     * Creates a Mutation observer.
     */function(e,t,n){var i=new MutationObserver(t);return i.observe(e,n),i},nn=function(){return q(z(ez().slideSelector,eq())).length!==e$().numSlides},ni=/**
     * Listen to changes on sections and fires reBuild
     * when those changes affect the section height.
     */function(e){var t=nn();(nn()||q(z(ez().sectionSelector,eq())).length!==e$().numSections)&&!iH.isDoingContinousVertical&&(ez().observer&&O&&// we modidy the DOM again
O.disconnect(),t6(),t4(),ez().anchors=[],eT(z(i8)),t5(),eU(),ez().navigation&&tP(),t&&(eT(z(rh)),eT(z(ry))),e$().sections.forEach(function(e){e.slides.length?t&&ne(e):tY(e)})),ez().observer&&O&&z(iz)[0]&&O.observe(z(iz)[0],rF)},nr=function(){return!!rW()&&{passive:!1}},no=function(){var e=nl(),t=eQ(e);iM.test.top=-e+"px",eP({canScroll:!1}),e7(t.element,t.options,ez().scrollingSpeed,function(){setTimeout(function(){eP({isBeyondFullpage:!0}),eP({canScroll:!0})},30)})},ns=function(){eq().getBoundingClientRect().bottom>=0&&na()},na=function(){var e=eQ(eL(e$().sections).item.offsetTop);eP({canScroll:!1}),e7(e.element,e.options,ez().scrollingSpeed,function(){eP({canScroll:!0}),eP({isBeyondFullpage:!1}),eP({isAboutToScrollToFullPage:!1})})},nl=function(){return ez().css3?eu()+F():eL(e$().sections).item.offsetTop+eL(e$().sections).item.offsetHeight},nc=function(e,t){new Date().getTime();var n,i=e$().isBeyondFullpage&&e.getBoundingClientRect().bottom>=0&&"up"===rG.getDirection(),r=e$().isAboutToScrollToFullPage;if(r)return ep(t),!1;if(e$().isBeyondFullpage){if(i){if(!r&&(!rU("isNewKeyframe","beyondFullpage")||!rG.isAccelerating()))return(n=eQ(eL(e$().sections).item.offsetTop+eL(e$().sections).item.offsetHeight)).element.scrollTo(0,n.options),eP({isAboutToScrollToFullPage:!1}),ep(t),!1;if(rG.isAccelerating())return i=!1,eP({isAboutToScrollToFullPage:!0}),eP({scrollTrigger:"wheel"}),na(),ep(t),!1}else rU("set","beyondFullpage",1e3);if(!r&&!i)return!0}},nu=/**
    * Moves the page down one section.
    */function(){var e=e$().activeSection.next();//looping to the top if there's no more sections below
!e&&(ez().loopBottom||ez().continuousVertical)&&(e=e$().sections[0]),null!=e?tH(e,null,!1):nd()&&iN.emit(iR.scrollBeyondFullpage)},nd=function(){return eq().scrollHeight<rD.scrollHeight&&ez().scrollBar&&ez().scrollBeyondFullpage},np=/**
    * Moves the page up one section.
    */function(){var e=e$().activeSection.prev();//looping to the bottom if there's no more sections above
!e&&(ez().loopTop||ez().continuousVertical)&&(e=eL(e$().sections)),null!=e&&tH(e,null,!0)},nf=/**
    * Detecting the direction of the mouse movement.
    * Used only for the middle button of the mouse.
    */function(e){ez().autoScrolling&&(iH.canScroll&&(e.pageY<rV&&tb().m.up?np():e.pageY>rV&&tb().m.down&&nu()),rV=e.pageY)},nh=function(e){rV=e},nv=/**
    * Determines the way of scrolling up or down:
    * by 'automatically' scrolling a section or by using the default and normal scrolling.
    */function(e){if(tb().m[e]){var t="down"===e?nu:np;ez().scrollOverflow&&rH.isScrollable(e$().activeSection)?rH.isScrolled(e,e$().activeSection.item)&&rH.shouldMovePage()&&t():t()}},ng=/**
    * Adds the possibility to auto scroll through sections on touch devices.
    */function(){if(rJ.touchmove&&(iA||iL)){ez().autoScrolling&&(rD.removeEventListener(rJ.touchmove,nx,{passive:!1}),rD.addEventListener(rJ.touchmove,nx,{passive:!1}));var e=ez().touchWrapper;e.removeEventListener(rJ.touchstart,nw),e.removeEventListener(rJ.touchmove,ny,{passive:!1}),e.addEventListener(rJ.touchstart,nw),e.addEventListener(rJ.touchmove,ny,{passive:!1})}},nm=/**
    * Removes the auto scrolling for touch devices.
    */function(){if(rJ.touchmove&&(iA||iL)){ez().autoScrolling&&(rD.removeEventListener(rJ.touchmove,ny,{passive:!1}),rD.removeEventListener(rJ.touchmove,nx,{passive:!1}));var e=ez().touchWrapper;e.removeEventListener(rJ.touchstart,nw),e.removeEventListener(rJ.touchmove,ny,{passive:!1})}},ny=/* Detecting touch events

    * As we are changing the top property of the page on scrolling, we can not use the traditional way to detect it.
    * This way, the touchstart and the touch moves shows an small difference between them which is the
    * used one to determine the direction.
    */function(e){var t=i$(e.target,iJ)||e$().activeSection.item,n=rH.isScrollable(e$().activeSection);if(nb(e)){eP({isGrabbing:!0,isUsingWheel:!1}),ez().autoScrolling&&(n&&!iH.canScroll||ez().scrollBar)&&ep(e);var i=nS(e);rK=i.y,rQ=i.x;var r=Math.abs(rY-rK)>iE.innerHeight/100*ez().touchSensitivity,o=Math.abs(rX-rQ)>W()/100*ez().touchSensitivity,s=z(rs,t).length&&Math.abs(rX-rQ)>Math.abs(rY-rK),a=rX>rQ?"right":"left",l=rY>rK?"down":"up";eP({touchDirection:s?a:l}),s?!iH.slideMoving&&o&&(rX>rQ?tb().m.right&&iN.emit(iR.moveSlideRight,{section:t}):tb().m.left&&iN.emit(iR.moveSlideLeft,{section:t})):ez().autoScrolling&&iH.canScroll&&r&&nv(l)}},nb=/**
    * As IE >= 10 fires both touch and mouse events when using a mouse in a touchscreen
    * this way we make sure that is really a touch event what IE is detecting.
    */function(e){//if is not IE   ||  IE is detecting `touch` or `pen`
return void 0===e.pointerType||"mouse"!=e.pointerType},nw=/**
    * Handler for the touch start event.
    */function(e){if(ez().fitToSection&&eP({activeAnimation:!1}),nb(e)){var t=nS(e);rY=t.y,rX=t.x}ev("touchend",r0)},nS=/**
    * Gets the pageX and pageY properties depending on the browser.
    * https://github.com/alvarotrigo/fullPage.js/issues/194#issuecomment-34069854
    */function(e){var t={};return t.y=void 0!==e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,t.x=void 0!==e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,iL&&nb(e)&&ez().scrollBar&&void 0!==e.touches&&(t.y=e.touches[0].pageY,t.x=e.touches[0].pageX),t},nx=/*
    * Preventing bouncing in iOS #2285
    */function(e){ez().autoScrolling&&nb(e)&&tb().m.up&&!iH.canScroll&&ep(e)},nT=/**
    * Slides a slider to the given direction.
    * Optional `section` param.
    */function(e,t){var n=null==t?e$().activeSection.item:t,i=eY(iH.sections,n),r=z(rs,n)[0];if(null!=r&&!iH.slideMoving&&!(i.slides.length<2)){var o=i.activeSlide,s="left"===e?o.prev():o.next();if(!s){//respect loopHorizontal setting
if(!ez().loopHorizontal)return;s="left"===e?eL(i.slides):i.slides[0]}eP({slideMoving:!iM.test.isTesting}),tZ(r,s.item,e)}},nE=/**
    * Slides left the slider of the active section.
    * Optional `section` param.
    */function(e){nT("left",e)},nC=/**
    * Slides right the slider of the active section.
    * Optional `section` param.
    */function(e){nT("right",e)},nA=/**
    * Gets a section by its anchor / index
    */function(e){var t=e$().sections.filter(function(t){return t.anchor===e})[0];return t||(t=e$().sections[void 0!==e?e-1:0]),t},nk=/**
    * Scrolls the slider to the given slide destination for the given section
    */function(e){null!=e&&tZ(i$(e,rs),e)},nL=/**
    * Scrolls to the given section and slide anchors
    */function(e,t){var n=nA(e);//do nothing if there's no section with the given anchor name
if(null!=n){var i=n_(t,n);//we need to scroll to the section and then to the slide
n.anchor&&n.anchor===iH.lastScrolledDestiny||B(n.item,iY)?nk(i):tH(n,function(){nk(i)})}},n_=/**
    * Gets a slide inside a given section by its anchor / index
    */function(e,t){var n=t.slides.filter(function(t){return t.anchor===e})[0];return null==n&&(e=void 0!==e?e:0,n=t.slides[e]),n?n.item:null},nO=/**
    * Moves the page to the given section and slide.
    * Anchors or index positions can be used as params.
    */function(e,t){var n=nA(e);void 0!==t?nL(e,t):null!=n&&tH(n)},nM=function(){clearTimeout(D),eg("keydown",nD),eg("keyup",n$)}//Sliding with arrow keys, both, vertical and horizontal
,nD=function(e){clearTimeout(D);var t=e.keyCode,n=[37,39].indexOf(t)>-1,i=ez().autoScrolling||ez().fitToSection||n;9===t?nI(e):!eD()&&ez().keyboardScrolling&&i&&(M=e.ctrlKey,D=setTimeout(function(){nP(e)},0))},nP=/**
    * Keydown event
    */function(e){var t=e.shiftKey,n=iC.activeElement,i=ew(n,"video")||ew(n,"audio"),r={up:rH.isScrolled("up",e$().activeSection.item),down:rH.isScrolled("down",e$().activeSection.item)},o=[37,39].indexOf(e.keyCode)>-1;if(nF(e),iH.canScroll||o)switch(eP({scrollTrigger:"keydown"}),e.keyCode){//up
case 38:case 33:tb().k.up&&r.up?iH.isBeyondFullpage?iN.emit(iR.onKeyDown,{e:e}):np():rH.focusScrollable();break;//down
case 32://spacebar
if(t&&tb().k.up&&!i&&r.up){np();break}/* falls through */case 40:case 34:if(tb().k.down&&r.down){if(iH.isBeyondFullpage)return;// space bar?
32===e.keyCode&&i||nu()}else rH.focusScrollable();break;//Home
case 36:tb().k.up&&nO(1);break;//End
case 35:tb().k.down&&nO(e$().sections.length);break;//left
case 37:tb().k.left&&nE();break;//right
case 39:tb().k.right&&nC();break;default:return}}//to prevent scrolling while zooming
,n$=function(e){iH.isWindowFocused&&(M=e.ctrlKey)}//when opening a new tab (ctrl + t), `control` won't be pressed when coming back.
,nj=function(){eP({isWindowFocused:!1}),M=!1},nI=/**
    * Makes sure the tab key will only focus elements within the current section/slide
    * preventing this way from breaking the page.
    * Based on "Modals and keyboard traps"
    * from https://developers.google.com/web/fundamentals/accessibility/focus/using-tabindex
    */function(e){var t=e.shiftKey,n=iC.activeElement,i=nz(eX(e$().activeSection.item));function r(e){return ep(e),i[0]?i[0].focus():null}// deactivating tab while scrolling #4550
if(!iH.canScroll){ep(e);return}//outside any section or slide? Let's not hijack the tab!
if(!nB(e)){//is there an element with focus?
n?null==i$(n,i0+","+i0+" "+rr)&&(n=r(e)):r(e);//when reached the first or last focusable element of the section/slide
//we prevent the tab action to keep it in the last focusable element
var o=n==i[0],s=n==i[i.length-1],a=t&&o;if(a||!t&&s){ep(e);var l=nq(a),c=l?l.panel:null;if(c){var u=c.isSection?c:c.parent;iN.emit(iR.onScrollPageAndSlide,{sectionAnchor:u.index()+1,slideAnchor:c.isSection?0:c.index()}),P=l.itemToFocus,ep(e)}}}},nN=function(e){nR()},nH=function(e){(!i$(P,ri)||i$(P,rr))&&nR()},nR=function(){P&&(P.focus(),P=null)},nq=/**
     * Get's the panel containing the element to focus.
     *
     */function(e){var t,n=e?"prevPanel":"nextPanel",i=[],r=eK((iH.activeSection&&iH.activeSection.activeSlide?iH.activeSection.activeSlide:iH.activeSection)[n]());do(i=nz(r.item)).length&&(t={panel:r,itemToFocus:i[e?i.length-1:0]}),r=eK(r[n]());while(r&&0===i.length)return t},nz=/**
    * Gets all the focusable elements inside the passed element.
    */function(e){return[].slice.call(z(iO,e)).filter(function(e){return"-1"!==ef(e,"tabindex")&&//are also not hidden elements (or with hidden parents)
null!==e.offsetParent})},nB=/**
    * Determines whether the focus is outside fullpage.js sections/slides or not.
    */function(e){var t=nz(iC),n=t.indexOf(iC.activeElement),i=t[e.shiftKey?n-1:n+1],r=i$(i,ri),o=i$(i,iJ);return!r&&!o},nF=function(e){!([40,38,32,33,34].indexOf(e.keyCode)>-1)||iH.isBeyondFullpage||i$(e.target,rd)||e.preventDefault()},nW=/**
    * Adds or remove the possibility of scrolling through sections by using the mouse wheel or the trackpad.
    */function(e){e?(nG(),nU()):(nV(),nY())},nG=/**
    * Adds the auto scrolling action for the mouse wheel and trackpad.
    * After this function is called, the mousewheel and trackpad movements will scroll through sections
    * https://developer.mozilla.org/en-US/docs/Web/Events/wheel
    */function(){var e,t="";iE.addEventListener?e="addEventListener":(e="attachEvent",t="on");// detect available wheel event
var n="onwheel"in iC.createElement("div")?"wheel":void 0!==iC.onmousewheel?"mousewheel":"DOMMouseScroll",i=nr();// let's assume that remaining browsers are older Firefox
"DOMMouseScroll"==n?iC[e](t+"MozMousePixelScroll",nX,i):iC[e](t+n,nX,i)},nU=/**
    * Binding the mousemove when the mouse's middle button is pressed
    */function(){eq().addEventListener("mousedown",nK),eq().addEventListener("mouseup",nQ)},nV=/**
    * Removes the auto scrolling action fired by the mouse wheel and trackpad.
    * After this function is called, the mousewheel and trackpad movements won't scroll through sections.
    */function(){iC.addEventListener?(eg("mousewheel",nX,!1),eg("wheel",nX,!1),eg("MozMousePixelScroll",nX,!1)):iC.detachEvent("onmousewheel",nX);//IE 6/7/8
},nY=/**
    * Unbinding the mousemove when the mouse's middle button is released
    */function(){eq().removeEventListener("mousedown",nK),eq().removeEventListener("mouseup",nQ)},nX=/**
     * Detecting mousewheel scrolling
     *
     * http://blogs.sitepointstatic.com/examples/tech/mouse-wheel/index.html
     * http://www.sitepoint.com/html5-javascript-mouse-wheel/
     */function(e){var t=new Date().getTime(),n=B(z(iQ)[0],i9),i=nc(eq(),e);//is scroll allowed?
if(iH.isUsingWheel||eP({isGrabbing:!1,isUsingWheel:!0,touchDirection:"none"}),!tb().m.down&&!tb().m.up)return ep(e),!1;if(i)return!0;//autoscrolling and not zooming?
if(!1===i)return ep(e),!1;if(ez().autoScrolling&&!M&&!n){var r=// cross-browser wheel delta
(e=e||iE.event).wheelDelta||-e.deltaY||-e.detail,o=Math.max(-1,Math.min(1,r)),s=void 0!==e.wheelDeltaX||void 0!==e.deltaX,a=Math.abs(e.wheelDeltaX)<Math.abs(e.wheelDelta)||Math.abs(e.deltaX)<Math.abs(e.deltaY)||!s;r2.length>149&&r2.shift(),//keeping record of the previous scrollings
r2.push(Math.abs(r)),ez().scrollBar&&ep(e);//time difference between the last scroll and the current one
var l=t-r1;return r1=t,l>200&&(r2=[]),eP({wheelDirection:o<0?"down":o>0?"up":"none"}),iH.canScroll&&e_(r2,10)>=e_(r2,70)&&a&&(eP({scrollTrigger:"wheel"}),o<0?nv("down"):nv("up")),!1}ez().fitToSection&&eP({activeAnimation:!1})}//binding the mousemove when the mouse's middle button is released
,nK=function(e){//middle button
2==e.which&&(nh(e.pageY),eq().addEventListener("mousemove",nf))}//unbinding the mousemove when the mouse's middle button is released
,nQ=function(e){//middle button
2==e.which&&eq().removeEventListener("mousemove",nf)},nZ=/**
    * Adds or remove the mouse wheel hijacking
    */function(e){e?(nW(!0),ng()):(nW(!1),nm())},nJ=function(){["mouseenter","touchstart","mouseleave","touchend"].forEach(function(e){eg(e,n1,!0);//true is required!
})},n0=function(e,t){//a way to pass arguments to the onMouseEnterOrLeave function
document["fp_"+e]=t,eh(e,n1,!0)},n1=function(e){var t=e.type,n=!1,i="mouseleave"===t?e.toElement||e.relatedTarget:e.target;if(i==document||!i){nZ(!0);return}"touchend"===t&&(r3=!1,setTimeout(function(){r3=!0},800)),("mouseenter"!==t||r3)&&(ez().normalScrollElements.split(",").forEach(function(e){if(!n){var t=ew(i,e),r=i$(i,e);//leaving a child inside the normalScoll element is not leaving the normalScroll #3661
(t||r)&&(iM.shared.isNormalScrollElement||nZ(!1),iM.shared.isNormalScrollElement=!0,n=!0)}}),!n&&iM.shared.isNormalScrollElement&&(nZ(!0),iM.shared.isNormalScrollElement=!1))},n2=/**
    * Moves the page to the given section and slide with no animation.
    * Anchors or index positions can be used as params.
    */function(e,t){e6(0,"internal"),nO(e,t),e6(eF().scrollingSpeed,"internal")},n3=function(){clearTimeout(j),clearTimeout(I),em("resize",n4)},n4=/*
    * Resize event handler.
    */function(){r9||(!ez().autoScrolling||ez().scrollBar)&&ez().fitToSection||n5(F()),n6(),r9=!0,//http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing    
clearTimeout(j),j=setTimeout(function(){//issue #3336 
//(some apps or browsers, like Chrome/Firefox for Mobile take time to report the real height)
//so we check it 3 times with intervals in that case
// for(var i = 0; i< 4; i++){
n9(),r9=!1},400)},n6=function(){if(iA)// (some apps or browsers, like Chrome/Firefox will delay a bit to scroll 
// to the focused input
for(var e=0;e<4;e++)I=setTimeout(function(){window.requestAnimationFrame(function(){// on Android devices the browser scrolls to the focused element
// messing up the whole page structure. So we need to update the
// translate3d value when the keyboard shows/hides
ez().autoScrolling&&!ez().scrollBar&&(eP({isResizing:!0}),n2(iH.activeSection.index()+1),eP({isResizing:!1}))})},200*e)},n9=/**
    * When resizing the site, we adjust the heights of the sections, slimScroll...
    */function(){if(eP({isResizing:!0}),n5(""),ez().autoScrolling||iH.isBeyondFullpage||ie(),iN.emit(iR.contentChanged),t4(),tW(),iA){var e=iC.activeElement;//if the keyboard is NOT visible
if(!ew(e,"textarea")&&!ew(e,"input")&&!ew(e,"select")){var t=F();//making sure the change in the viewport size is enough to force a rebuild. (20 % of the window to avoid problems when hidding scroll bars)
Math.abs(t-r4)>20*Math.max(r4,t)/100&&(n7(!0),r4=t)}}else n8();eP({isResizing:!1})},n7=/**
     * When resizing is finished, we adjust the slides sizes and positions
     */function(e){if(!B(eq(),iG)){//nothing to do if the plugin was destroyed
//updating global vars
eP({isResizing:!0,windowsHeight:F(),windowsWidth:W()});for(var t=e$().sections,n=0;n<t.length;++n){var i=t[n],r=z(rs,i.item)[0];i.slides.length>1&&tZ(r,i.activeSlide.item)}ez().scrollOverflow&&rH.makeScrollable();var o=e$().activeSection.index();!iH.isBeyondFullpage&&o&&n2(o+1),eP({isResizing:!1}),ey(ez().afterResize)&&e&&ez().afterResize.call(eq(),iE.innerWidth,iE.innerHeight),ey(ez().afterReBuild)&&!e&&ez().afterReBuild.call(eq()),eb(eq(),"afterRebuild")}},n8=/**
    * Adjusts a section to the viewport if it has changed.
    */function(){var e=F(),t=W();(iH.windowsHeight!==e||r6!==t)&&(eP({windowsHeight:e}),r6=t,n7(!0))},n5=function(e){var t=""===e?"":e+"px";e$().sections.forEach(function(e){G(e.item,{height:t})})},ie=/**
     * Defining the value in px of a VH unit. (Used for autoScrolling: false)
     * To fix the height issue on mobile devices when using VH units.
     * https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
     */function(){if(!ez().autoScrolling||ez().scrollBar){// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
var e=.01*iE.innerHeight;// Then we set the value in the --vh custom property to the root of the document
iC.documentElement.style.setProperty("--vh","".concat(e,"px"))}},it=function(){var e,t,n=iE.location.hash;if(n.length){//getting the anchor link in the URL and deleting the `#`
var i=n.replace("#","").split("/"),r=n.indexOf("#/")>-1;//using / for visual reasons and not as a section/slide separator #2803
e=r?"/"+i[1]:decodeURIComponent(i[0]);var o=r?i[2]:i[1];o&&o.length&&(t=decodeURIComponent(o))}return{section:e,slide:t}},ii=function(){em("hashchange",ir)},ir=/**
    * Detecting any change on the URL to scroll to the given anchor link
    * (a way to detect back history button as we play with the hashes on the URL)
    */function(){if(!iH.isScrolling&&!ez().lockAnchors){var e=it(),t=e.section,n=e.slide,i=void 0===iH.lastScrolledDestiny,r=void 0===iH.lastScrolledDestiny&&void 0===n&&!iH.slideMoving;t&&t.length&&(t&&t!==iH.lastScrolledDestiny&&!i||r||!iH.slideMoving&&iH.lastScrolledSlide!=n)&&iN.emit(iR.onScrollPageAndSlide,{sectionAnchor:t,slideAnchor:n})}},io=function(e){var t=e.target;i$(t,ez().menu+" [data-menuanchor]")&&is.call(t,e)}//Menu item handler when not using anchors or using lockAnchors:true
,is=function(e){eP({scrollTrigger:"menu"}),z(ez().menu)[0]&&(ez().lockAnchors||!ez().anchors.length)&&(ep(e),/*jshint validthis:true */iN.emit(iR.onMenuClick,{anchor:ef(this,"data-menuanchor")}))},ia=function(e){var t=e.target;t&&i$(t,i8+" a")?t$.call(t,e.e):ew(t,re)?tM.call(t):(ew(t,rv)||null!=i$(t,rv))&&tv.call(t,e.e)},il=function(e){if(!iH.isResizing&&e$().activeSection&&(eL(e$().sections),!e$().isBeyondFullpage&&!e$().isAboutToScrollToFullPage&&(!ez().autoScrolling||ez().scrollBar))){var t=eu(),n=ic(t),i=0,r=t+F()/2,o=rD.scrollHeight-F()===t,s=e$().sections;if(eP({scrollY:t}),o)i=s.length-1;else if(t)for(var a=0;a<s.length;++a)s[a].item.offsetTop<=r&&(i=a);else i=0;//executing only once the first time we reach the section
if(iu(n)&&!B(e$().activeSection.item,iK)&&(ee(e$().activeSection.item,iK),et(ed(e$().activeSection.item),iK)),c=(l=s[i]).item,!l.isActive){eP({isScrolling:!0});var l,c,u,d,p=e$().activeSection.item,f=e$().activeSection.index()+1,h=e0(e$().activeSection,c),v=l.anchor,g=l.index()+1,m=l.activeSlide,y={activeSection:p,sectionIndex:g-1,anchorLink:v,element:c,leavingSection:f,direction:h,items:{origin:e$().activeSection,destination:l}};m&&(d=m.anchor,u=m.index()),iH.canScroll&&(ee(c,iY),et(ed(c),iY),ey(ez().beforeLeave)&&tN("beforeLeave",y),ey(ez().onLeave)&&tt("onLeave",y),ey(ez().afterLoad)&&tt("afterLoad",y),to(p),tc(c),ti(c),tj(v,g-1),ez().anchors.length&&eP({lastScrolledDestiny:v}),t4(),tp(u,d,v)),clearTimeout(N),N=setTimeout(function(){eP({isScrolling:!1})},100)}ez().fitToSection&&iH.canScroll&&(clearTimeout(H),H=setTimeout(function(){iH.sections.filter(function(e){var t=e.item.getBoundingClientRect();return Math.round(t.bottom)===Math.round(F())||0===Math.round(t.top)}).length||tF()},ez().fitToSectionDelay))}},ic=/**
    * Gets the directon of the the scrolling fired by the scroll event.
    */function(e){var t=e>r7?"down":"up";return r7=e,eP({previousDestTop:e}),t},iu=/**
    * Determines whether the active section has seen in its whole or not.
    */function(e){var t=e$().activeSection.item.offsetTop,n=t+F();return"up"==e?n>=eu()+F():t<=eu()},id=/**
    * Adds or remove the possibility of scrolling through sections by using the keyboard arrow keys
    */function(e,t){void 0!==t?(t=t.replace(/ /g,"").split(",")).forEach(function(t){ty(e,t,"k")}):(ty(e,"all","k"),ez().keyboardScrolling=e)},ip=/**
    * Sets the data-anchor attributes to the menu elements and activates the current one.
    */function(e){var t=e.index();void 0!==ez().anchors[t]&&e.isActive&&tj(ez().anchors[t],t),ez().menu&&ez().css3&&null!=i$(z(ez().menu)[0],iz)&&z(ez().menu).forEach(function(e){rD.appendChild(e)})},ih=/**
    * Works over the DOM structure to set it up for the current fullpage getOptions().
    */function(){G(eM(eq(),"body"),{height:"100%",position:"relative"}),ee(eq(),iq),ee(rP,iU),eP({windowsHeight:F()}),et(eq(),iG),t5();for(var e=e$().sectionsIncludingHidden,t=0;t<e.length;t++){var n=e[t],i=n.allSlidesItems,r=ef(n.item,"style");r&&n.item.setAttribute("data-fp-styles",r),tY(n),ip(n),i.length>0&&ne(n)}//fixed elements need to be moved out of the plugin container due to problems with CSS3.
ez().fixedElements&&ez().css3&&z(ez().fixedElements).forEach(function(e){rD.appendChild(e)}),ez().navigation&&tP(),ts(),ez().scrollOverflow&&rH.makeScrollable()},iv=/**
    * Actions and callbacks to fire afterRender
    */function(){var e=e$().activeSection,t=e$().activeSection.item;ee(t,iK),tc(t),t_(),ti(t),ig()&&ey(ez().afterLoad)&&tt("afterLoad",{activeSection:t,element:t,direction:null,//for backwards compatibility callback (to be removed in a future!)
anchorLink:e.anchor,sectionIndex:e.index(),items:{origin:e$().activeSection,destination:e$().activeSection}}),ey(ez().afterRender)&&tt("afterRender")},ig=/**
    * Determines if the URL anchor destiny is the starting section (the one using 'active' class before initialization)
    */function(){var e=it(),t=nA(e.section);return!e.section||!t||void 0!==t&&t.index()===X(rN)},im=/**
    * Adds or remove the possibility of scrolling through sections by using the mouse wheel/trackpad or touch gestures.
    * Optionally a second parameter can be used to specify the direction for which the action will be applied.
    *
    * @param directions string containing the direction or directions separated by comma.
    */function(e,t){void 0!==t?(t=t.replace(/ /g,"").split(",")).forEach(function(t){ty(e,t,"m")}):ty(e,"all","m")},iy=/**
    * Scrolls to the anchor in the URL when loading the site
    */function(){var e=it(),t=e.section,n=e.slide;t?ez().animateAnchor?nL(t,n):n2(t,n):iN.emit(iR.onAfterRenderNoAnchor,null)},ib=/*
    * Removes inline styles added by fullpage.js
    */function(){//reseting the `top` or `translate` properties to 0
e4(0),z("img[data-src], source[data-src], audio[data-src], iframe[data-src]",eq()).forEach(function(e){eO(e,"src")}),z("img[data-srcset]").forEach(function(e){eO(e,"srcset")}),eT(z(i8+", "+rh+", "+ry)),G(eV(e$().sections),{height:"","background-color":"",padding:""}),G(eV(e$().slides),{width:""}),G(eq(),{height:"",position:"","-ms-touch-action":"","touch-action":""}),G(r$,{overflow:"",height:""}),et(rP,iU),et(rD,iF+" "+iB),rD.className.split(/\s+/).forEach(function(e){0===e.indexOf(iV)&&et(rD,e)}),eV(e$().panels).forEach(function(e){ez().scrollOverflow&&rH.destroyWrapper(e),et(e,rc+" "+iY+" "+iK+" "+rp);var t=ef(e,"data-fp-styles");t&&e.setAttribute("style",t),B(e,iZ)&&!rC&&e.removeAttribute("data-anchor")}),e1(eq()),[i1,rl,rs].forEach(function(e){z(e,eq()).forEach(function(e){//unwrap not being use in case there's no child element inside and its just text
es(e)})}),G(eq(),{"-webkit-transition":"none",transition:"none"}),et(eq(),iq),iE.scrollTo(0,0),[iZ,rn,ra].forEach(function(e){et(z("."+e),e)})},iw=function(){t6(),t4(),ez().scrollBar=ez().scrollBar||ez().hybrid,eU(),ih(),im(!0),nZ(!0),tE(ez().autoScrolling,"internal"),tW(),tu(),"complete"===iC.readyState&&iy(),ev("load",iy),iv(),t6(),t4()},iS=/**
    * Displays warnings
    */function(){var e=ez().licenseKey,t="font-size: 15px;background:yellow;";""===ez().licenseKey.trim()||r8()&&e&&e.length<20&&(console.warn("%c This website was made using fullPage.js slider. More info on the following website:",t),console.warn("%c https://alvarotrigo.com/fullPage/",t)),B(rP,iU)||(ez().continuousVertical&&(ez().loopTop||ez().loopBottom)&&(ez().continuousVertical=!1),ez().scrollOverflow&&(ez().scrollBar||ez().autoScrolling),ez().continuousVertical&&(ez().scrollBar||!ez().autoScrolling)&&(ez().continuousVertical=!1),//using extensions? Wrong file!
iD.forEach(function(e){ez()[e]}),ez().anchors.forEach(function(e){//case insensitive selectors (http://stackoverflow.com/a/19465187/1081396)
var t=[].slice.call(z("[name]")).filter(function(t){return ef(t,"name")&&ef(t,"name").toLowerCase()==e.toLowerCase()}),n=[].slice.call(z("[id]")).filter(function(t){return ef(t,"id")&&ef(t,"id").toLowerCase()==e.toLowerCase()});(n.length||t.length)&&(n.length,n.length||t.length)}))},ix=function(e,t){if(e9(),B(rP,iU)){iS();return}return eW("touchWrapper","string"==typeof e?z(e)[0]:e),eB(t),eR("string"==typeof e?z(e)[0]:e),iN.emit(iR.onInitialise),iS(),iT(),eq()&&(iN.emit(iR.beforeInit),iw(),iN.emit(iR.bindEvents)),iE.fullpage_api},iT=function(){iM.getFullpageData=function(){return{options:ez()}},iM.version="4.0.20",iM.test=Object.assign(iM.test,{top:"0px",translate3d:"translate3d(0px, 0px, 0px)",translate3dH:function(){for(var e=[],t=0;t<z(ez().sectionSelector,eq()).length;t++)e.push("translate3d(0px, 0px, 0px)");return e}(),left:function(){for(var e=[],t=0;t<z(ez().sectionSelector,eq()).length;t++)e.push(0);return e}(),options:ez(),setAutoScrolling:null}),//mean to be used on their own by developers
iM.shared=Object.assign(iM.shared,{afterRenderActions:null,isNormalScrollElement:!1}),iE.fullpage_api=iM};Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(e){// 1. Let O be ? ToObject(this value).
if(this==null)throw TypeError('"this" is null or not defined');var t=Object(this),n=t.length>>>0;// 2. Let len be ? ToLength(? Get(O, "length")).
if("function"!=typeof e)throw TypeError("predicate must be a function");for(// 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
var i=arguments[1],r=0;r<n;){// a. Let Pk be ! ToString(k).
// b. Let kValue be ? Get(O, Pk).
// c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
// d. If testResult is true, return kValue.
var o=t[r];if(e.call(i,o,r,t))return o;// e. Increase k by 1.
r++}// 7. Return undefined.
}}),Array.from||(Array.from=(e=Object.prototype.toString,t=function(t){return"function"==typeof t||"[object Function]"===e.call(t)},n=function(e){var t=Number(e);return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t},function(e){var i,r,o=Object(e);// 3. ReturnIfAbrupt(items).
if(null==e)throw TypeError("Array.from requires an array-like object - not null or undefined");// 4. If mapfn is undefined, then let mapping be false.
var s=arguments.length>1?arguments[1]:void 0;if(void 0!==s){// 5. else
// 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
if(!t(s))throw TypeError("Array.from: when provided, the second argument must be a function");// 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
arguments.length>2&&(i=arguments[2])}// 10. Let lenValue be Get(items, "length").
for(// 11. Let len be ToLength(lenValue).
var a=Math.min(Math.max(n(o.length),0),9007199254740991),l=t(this)?Object(new this(a)):Array(a),c=0;c<a;)r=o[c],s?l[c]=void 0===i?s(r,c):s.call(i,r,c):l[c]=r,c+=1;// 18. Let putStatus be Put(A, "length", len, true).
return l.length=a,l}));var iE=window,iC=document,iA=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),ik=/(Mac|iPhone|iPod|iPad)/i.test(iE.navigator.userAgent),iL="ontouchstart"in iE||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,i_=!!window.MSInputMethodContext&&!!document.documentMode,iO='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',iM={test:{},shared:{}},iD=["parallax","scrollOverflowReset","dragAndMove","offsetSections","fadingEffect","responsiveSlides","continuousHorizontal","interlockedSlides","scrollHorizontally","resetSliders","cards","dropEffect","waterEffect"];/**
    * Extends a given Object properties and its childs.
    */function iP(e){e=e||{};for(var t=1,n=arguments.length;t<n;++t){var i=arguments[t];if(i){for(var r in i)if(i.hasOwnProperty(r)&&"__proto__"!=r&&"constructor"!=r){// based on https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/
if("[object Object]"===Object.prototype.toString.call(i[r])){e[r]=iP(e[r],i[r]);continue}e[r]=i[r]}}}return e}/**
    * http://stackoverflow.com/questions/22100853/dom-pure-javascript-solution-to-jquery-closest-implementation
    * Returns the element or `false` if there's none
    */function i$(e,t){return e&&1===e.nodeType?ew(e,t)?e:i$(e.parentNode,t):null}iE.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)}),"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(e,t){if(null==e)throw TypeError("Cannot convert undefined or null to object");for(var n=Object(e),i=1;i<arguments.length;i++){var r=arguments[i];if(null!=r)// Skip over if undefined or null
for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n},writable:!0,configurable:!0}),String.prototype.padStart||(String.prototype.padStart=function(e,t){return(e>>=0,t=String(void 0!==t?t:" "),this.length>e)?String(this):((e-=this.length)>t.length&&(t+=Array.apply(null,Array(e)).map(function(){return t}).join("")),t.slice(0,e)+String(this))}),// @ts-ignore
window.fp_utils={$:z,deepExtend:iP,hasClass:B,getWindowHeight:F,css:G,prev:U,next:V,last:Y,index:X,getList:K,hide:Q,show:Z,isArrayOrList:J,addClass:ee,removeClass:et,appendTo:en,wrap:ei,wrapAll:er,unwrap:es,closest:i$,after:ea,before:el,insertBefore:ec,getScrollTop:eu,siblings:ed,preventDefault:ep,isFunction:ey,trigger:eb,matches:ew,toggle:eS,createElementFromHTML:ex,remove:eT,// "filter": filter,
untilAll:eE,nextAll:eC,prevAll:eA};var ij=/*#__PURE__*/Object.freeze({__proto__:null,// showError: showError,
isVisible:R,getVisible:q,$:z,deepExtend:iP,hasClass:B,getWindowHeight:F,getWindowWidth:W,css:G,prev:U,next:V,last:Y,index:X,getList:K,hide:Q,show:Z,isArrayOrList:J,addClass:ee,removeClass:et,appendTo:en,wrap:ei,wrapAll:er,wrapInner:eo,unwrap:es,closest:i$,after:ea,before:el,insertBefore:ec,getScrollTop:eu,siblings:ed,preventDefault:ep,getAttr:ef,docAddEvent:eh,windowAddEvent:ev,docRemoveEvent:eg,windowRemoveEvent:em,isFunction:ey,trigger:eb,matches:ew,toggle:eS,createElementFromHTML:ex,remove:eT,untilAll:eE,nextAll:eC,prevAll:eA,toArray:ek,getLast:eL,getAverage:e_,setSrc:eO,getParentsUntil:eM,isInsideInput:eD});function iI(e){return(iI="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var iN={events:{},on:function(e,t){var n=this;return"object"!==iI(this.events[e])&&(this.events[e]=[]),this.events[e].push(t),function(){return n.removeListener(e,t)}},removeListener:function(e,t){if("object"===iI(this.events[e])){var n=this.events[e].indexOf(t);n>-1&&this.events[e].splice(n,1)}},emit:function(e){for(var t=this,n=arguments.length,i=Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];"object"===iI(this.events[e])&&this.events[e].forEach(function(e){return e.apply(t,i)})},once:function(e,t){var n=this,i=this.on(e,function(){i();for(var e=arguments.length,r=Array(e),o=0;o<e;o++)r[o]=arguments[o];t.apply(n,r)})}},iH={numSections:0,numSlides:0,slides:[],sections:[],activeSection:null,scrollTrigger:null,isBeyondFullpage:!1,aboutToScrollToFullPage:!1,slideMoving:!1,isResizing:!1,isScrolling:!1,lastScrolledDestiny:void 0,lastScrolledSlide:void 0,activeAnimation:!1,canScroll:!0,touchDirection:"none",wheelDirection:"none",isGrabbing:!1,isUsingWheel:!1,isWindowFocused:!0,previousDestTop:0,windowsHeight:F(),isDoingContinousVertical:!1,timeouts:{},scrollY:0,scrollX:0};iE.state=iH;var iR={onAfterRenderNoAnchor:"onAfterRenderNoAnchor",onClickOrTouch:"onClickOrTouch",moveSlideLeft:"moveSlideLeft",moveSlideRight:"moveSlideRight",onInitialise:"onInitialise",beforeInit:"beforeInit",bindEvents:"bindEvents",onDestroy:"onDestroy",contentChanged:"contentChanged",onScrollOverflowScrolled:"onScrollOverflowScrolled",onScrollPageAndSlide:"onScrollPageAndSlide",onKeyDown:"onKeyDown",onMenuClick:"onMenuClick",scrollPage:"scrollPage",landscapeScroll:"landscapeScroll",scrollBeyondFullpage:"scrollBeyondFullpage",onPerformMovement:"onPerformMovement",onSlideLeave:"onSlideLeave",onLeave:"onLeave",afterSectionLoads:"afterSectionLoads",afterSlideLoads:"afterSlideLoads"};iN.on(iR.bindEvents,function(){//Scrolls to the section when clicking the navigation bullet
//simulating the jQuery .on('click') event using delegation
["click","touchstart"].forEach(function(e){eh(e,eI)}),ev("focus",eH),ej()});// keeping central set of classnames and selectors
var iq="fullpage-wrapper",iz="."+iq,iB="fp-scrollable",iF="fp-responsive",iW="fp-notransition",iG="fp-destroyed",iU="fp-enabled",iV="fp-viewing",iY="active",iX="."+iY,iK="fp-completely",iQ="."+iK,iZ="fp-section",iJ="."+iZ,i0=iJ+iX,i1=".fp-tableCell",i2="fp-auto-height",i3="."+i2,i4="fp-auto-height-responsive",i6="."+i4,i9="fp-normal-scroll",i7="fp-nav",i8="#"+i7,i5="fp-tooltip",re="."+i5,rt="fp-show-active",rn="fp-slide",ri="."+rn,rr=ri+iX,ro="fp-slides",rs="."+ro,ra="fp-slidesContainer",rl="."+ra,rc="fp-table",ru="fp-overflow",rd="."+ru,rp="fp-is-overflow",rf="fp-slidesNav",rh="."+rf,rv=rh+" a",rg="fp-arrow",rm="fp-controlArrow",ry="."+rm,rb="fp-prev",rw=ry+"."+rb,rS="fp-next",rx=ry+"."+rS,rT={//navigation
menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,licenseKey:"",credits:{enabled:!0,label:"Made with fullPage.js",position:"right"},//scrolling
css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:600,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!0,scrollOverflowReset:!1,touchSensitivity:5,touchWrapper:null,bigSectionsDestination:null,//Accessibility
keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,allowCorrectDirection:!1,//design
scrollOverflowMacStyle:!0,controlArrows:!0,controlArrowsHTML:['<div class="'+rg+'"></div>','<div class="'+rg+'"></div>'],controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,//backwards compabitility with responsiveWiddth
responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},cards:!1,cardsOptions:{perspective:100,fadeContent:!0,fadeBackground:!0},//Custom selectors
sectionSelector:".section",slideSelector:".slide",//events
afterLoad:null,beforeLeave:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,onScrollOverflow:null,lazyLoading:!0,observer:!0,scrollBeyondFullpage:!0},rE=null,rC=!1,rA=iP({},rT),rk=null,rL=function(e){this.anchor=e.anchor,this.item=e.item,this.index=e.index(),this.isLast=this.index===e.item.parentElement.querySelectorAll(e.selector).length-1,this.isFirst=!this.index,this.isActive=e.isActive},r_=function(e,t){this.parent=this.parent||null,this.selector=t,this.anchor=ef(e,"data-anchor")||ez().anchors[X(e,ez().sectionSelector)],this.item=e,this.isVisible=R(e),this.isActive=B(e,iY),this.hasScroll=B(e,ru)||null!=z(rd,e)[0],this.isSection=t===ez().sectionSelector,this.container=i$(e,rl)||i$(e,iz),this.index=function(){return this.siblings().indexOf(this)}};r_.prototype.siblings=function(){return this.isSection?this.isVisible?iH.sections:iH.sectionsIncludingHidden:this.parent?this.parent.slides:0},r_.prototype.prev=function(){var e=this.siblings(),t=(this.isSection?e.indexOf(this):this.parent.slides.indexOf(this))-1;return t>=0?e[t]:null},r_.prototype.next=function(){var e=this.siblings(),t=(this.isSection?e.indexOf(this):this.parent.slides.indexOf(this))+1;return t<e.length?e[t]:null},r_.prototype.prevPanel=function(){return this.prev()||(this.parent?this.parent.prev():null)},r_.prototype.nextPanel=function(){return this.next()||(this.parent?this.parent.next():null)},r_.prototype.getSiblings=function(){return this.isSection?iH.sections:iH.panels};var rO=function(e){rL.call(this,e)},rM=function(e){rL.call(this,e)};iM.setScrollingSpeed=e6;var rD=null,rP=null,r$=null,rj={};rj.m={up:!0,down:!0,left:!0,right:!0},rj.k=iP({},rj.m),iN.on(iR.onClickOrTouch,function(e){var t=e.target;(ew(t,ry)||i$(t,ry))&&tw.call(t,e)}//Scrolling horizontally when clicking on the slider controls.
),iM.setRecordHistory=tT,iM.setAutoScrolling=tE,iM.test.setAutoScrolling=tE,new Date().getTime();/**
     * Triggers the callback once per scroll wheel action.
     * Based on scrolling speed delay.
     */var rI=(r=!0,o=new Date().getTime(),s=!iE.fullpage_api,function(e,t){var n=new Date().getTime(),a="wheel"===e?ez().scrollingSpeed:100;return r=s||n-o>=a,s=!iE.fullpage_api,r&&(i=t(),o=n),void 0===i||i});iM.moveTo=moveTo,iM.getScrollY=function(){return iH.scrollY},iN.on(iR.onDestroy,function(){clearTimeout(A),clearTimeout(k)}),iM.setFitToSection=tB,iM.fitToSection=tF,iM.setResponsive=tG;var rN=null;iM.getActiveSection=/**
    * Gets the active section.
    */function(){return e$().activeSection},iN.on(iR.bindEvents,function(){// We can't focus scrollOverflow before scrolling
// to the anchor (if we need to)
iN.on(iR.onAfterRenderNoAnchor,tX),iN.on(iR.onLeave,rH.onLeave),iN.on(iR.onSlideLeave,rH.onLeave),iN.on(iR.afterSlideLoads,rH.afterLoad),iN.on(iR.afterSectionLoads,rH.afterLoad),iN.on(iR.onDestroy,tK),eh("keyup",rH.keyUpHandler)});var rH={focusedElem:null,shouldFocusScrollable:!0,isInnerScrollAllowed:!0,timeBeforeReachingLimit:null,timeLastScroll:null,preventScrollWithMouseWheel:function(e){if(!iH.canScroll)return ep(e),!1},preventScrollWithKeyboard:function(e){if(!eD()&&ez().keyboardScrolling&&[38,33,32,40,34,36,35].indexOf(e.keyCode)>-1&&!rH.isInnerScrollAllowed)return ep(e),!1},keyUpHandler:function(){rH.shouldFocusScrollable=iH.canScroll},// Leaving sections or slides
onLeave:function(){clearTimeout(L),rH.isInnerScrollAllowed=!1},// Loading sections or slides
afterLoad:function(){rH.isInnerScrollAllowed=!1,clearTimeout(L),L=setTimeout(function(){rH.shouldFocusScrollable=iH.canScroll},200)},// Unfocusing the scrollable element from the orgin section/slide
unfocusScrollable:function(){iC.activeElement===this.focusedElem&&(// @ts-ignore
this.focusedElem.blur(),rH.isInnerScrollAllowed=!1)},focusScrollable:function(){if(ez().scrollOverflow&&rH.shouldFocusScrollable){rH.unfocusScrollable();var e=rH.getScrollableItem(e$().activeSection.item);// On desktop we focus the scrollable to be able to use the mouse wheel
!e||iA||iL||(this.focusedElem=e,// to avoid issue #4484 & #4493 on Safari
requestAnimationFrame(function(){e.focus(),rH.isInnerScrollAllowed=!0})),rH.shouldFocusScrollable=!1}},makeScrollable:function(){ez().scrollOverflowMacStyle&&!ik&&ee(rD,"fp-scroll-mac"),e$().panels.forEach(function(e){if((!e.slides||!e.slides.length)&&!(B(e.item,i4)&&tU())){var t=eX(e.item),n=rH.shouldBeScrollable(e.item),i=e.isSection?e:e.parent;if(i_){var r=n?"addClass":"removeClass";ij[r](i.item,rp),ij[r](e.item,rp)}else ee(i.item,rp),ee(e.item,rp);e.hasScroll||(rH.createWrapper(t),rH.bindEvents(t)),// this is executed on page load (after images load)
e.hasScroll=!0}})},bindEvents:function(e){rH.getScrollableItem(e).addEventListener("scroll",rH.onPanelScroll),e.addEventListener("wheel",rH.preventScrollWithMouseWheel,{passive:!1}),e.addEventListener("keydown",rH.preventScrollWithKeyboard,{passive:!1})},createWrapper:function(e){var t=document.createElement("div");t.className=ru,eo(e,t),t.setAttribute("tabindex","-1")},destroyWrapper:function(e){var t=z(rd,e)[0];t&&(es(t),e.removeAttribute("tabindex"))},getScrollableItem:function(e){var t=eX(e);return z(rd,t)[0]||t},hasScroll:function(e){return B(e,ru)||null!=z(rd,e)[0]},isScrollable:function(e){return e.isSection&&e.activeSlide?e.activeSlide.hasScroll:e.hasScroll},shouldBeScrollable:function(e){return rH.getScrollableItem(e).scrollHeight>iE.innerHeight},isScrolled:function(e,t){if(!iH.canScroll)return!1;// we won't allow scrolloverflow on scrollBar:true
if(ez().scrollBar)return!0;var n=rH.getScrollableItem(t);if(!ez().scrollOverflow||!B(n,ru)||// Checking the section first 
// In case they apply to both section + slide #4505
B(t,"fp-noscroll")||// Checking the slide (in case it has)
B(eX(t),"fp-noscroll"))return!0;var i=n.scrollTop,r="down"===e&&n.scrollHeight<=Math.ceil(n.offsetHeight+i)+(i_?1:0),o="up"===e&&i<=0||r;return o||(this.timeBeforeReachingLimit=new Date().getTime()),o},shouldMovePage:function(){this.timeLastScroll=new Date().getTime();var e=this.timeLastScroll-rH.timeBeforeReachingLimit,t=(iA||iL)&&iH.isGrabbing,n=iH.isUsingWheel&&e>600;return t&&e>400||n},onPanelScroll:(a=0,function(e){var t=e.target.scrollTop,n="none"!==iH.touchDirection?iH.touchDirection:a<t?"down":"up";a=t,ey(ez().onScrollOverflow)&&tt("onScrollOverflow",{position:t,direction:n}),B(e.target,ru)&&iH.canScroll&&rH.isScrolled(n,e.target)&&rH.shouldMovePage()&&rH.shouldBeScrollable(e$().activeSection.item)&&iN.emit(iR.onScrollOverflowScrolled,{direction:n})})};iM.landscapeScroll=tZ,iN.on(iR.bindEvents,function(){iN.on(iR.onPerformMovement,tQ)});var rR=null,rq=null,rz=function(e){var t=this;[].push.call(arguments,ez().sectionSelector),r_.apply(this,arguments),this.allSlidesItems=z(ez().slideSelector,e),this.slidesIncludingHidden=Array.from(this.allSlidesItems).map(function(e){return new rB(e,t)}),this.slides=this.slidesIncludingHidden.filter(function(e){return e.isVisible}),this.activeSlide=this.slides.length?this.slides.filter(function(e){return e.isActive})[0]||this.slides[0]:null};rz.prototype=r_.prototype,rz.prototype.constructor=rz;/**
    * Slide object
    */var rB=function(e,t){this.parent=t,r_.call(this,e,ez().slideSelector)};rB.prototype=r_.prototype,rB.prototype.constructor=rz;var rF={attributes:!1,subtree:!0,childList:!0,characterData:!0};iN.on(iR.bindEvents,function(){ez().observer&&"MutationObserver"in window&&z(iz)[0]&&(O=nt(z(iz)[0],ni,rF)),iN.on(iR.contentChanged,ni)}),iM.render=ni;var rW=function(){//cheks for passive event support
var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});ev("testPassive",null,t),em("testPassive",null,t)}catch(e){}return function(){return e}}(),rG=(u=new Date().getTime(),d=[],{registerEvent:function(e){var t=(e=e||iE.event).wheelDelta||-e.deltaY||-e.detail,n=void 0!==e.wheelDeltaX||void 0!==e.deltaX;l=Math.abs(e.wheelDeltaX)<Math.abs(e.wheelDelta)||Math.abs(e.deltaX)<Math.abs(e.deltaY)||!n;var i=new Date().getTime();c=0>Math.max(-1,Math.min(1,t))?"down":"up",d.length>149&&d.shift(),//keeping record of the previous scrollings
d.push(Math.abs(t));var r=i-u;u=i,r>200&&(d=[])},isAccelerating:function(){var e=e_(d,10),t=e_(d,70);return!!d.length&&e>=t&&l},getDirection:function(){return c}}),rU=(p=!1,f={},h={},function(e,t,n){switch(e){case"set":f[t]=new Date().getTime(),h[t]=n;break;case"isNewKeyframe":p=new Date().getTime()-f[t]>h[t]}return p});iM.moveSectionDown=nu,iM.moveSectionUp=np;var rV=0,rY=0,rX=0,rK=0,rQ=0,rZ=(iE.PointerEvent&&(v={down:"pointerdown",move:"pointermove"}),v),rJ={touchmove:"ontouchmove"in window?"touchmove":rZ?rZ.move:null,touchstart:"ontouchstart"in window?"touchstart":rZ?rZ.down:null};/**
    * Handler for the touch end event.
    */function r0(){em("touchend",r0),eP({isGrabbing:!1})}iM.moveSlideLeft=nE,iM.moveSlideRight=nC,iM.moveTo=nO,iN.on(iR.bindEvents,function(){//when opening a new tab (ctrl + t), `control` won't be pressed when coming back.
ev("blur",nj),eh("keydown",nD),eh("keyup",n$),iN.on(iR.onDestroy,nM),iN.on(iR.afterSlideLoads,nN),iN.on(iR.afterSectionLoads,nH)});var r1=new Date().getTime(),r2=[];iM.setMouseWheelScrolling=nW;var r3=!0;iN.on(iR.bindEvents,function(){ez().normalScrollElements&&(["mouseenter","touchstart"].forEach(function(e){n0(e,!1)}),["mouseleave","touchend"].forEach(function(e){n0(e,!0)})),iN.on(iR.onDestroy,nJ)}),iM.silentMoveTo=n2;var r4=F(),r6=W(),r9=!1;iM.reBuild=n7,iN.on(iR.bindEvents,function(){// Setting VH correctly in mobile devices
n4(),ev("resize",n4),iN.on(iR.onDestroy,n3)}),iM.setLockAnchors=/**
    * Sets lockAnchors
    */function(e){ez().lockAnchors=e},iN.on(iR.bindEvents,function(){//detecting any change on the URL to scroll to the given anchor link
//(a way to detect back history button as we play with the hashes on the URL)
ev("hashchange",ir),iN.on(iR.onDestroy,ii)}),iN.on(iR.bindEvents,function(){eh("wheel",rG.registerEvent,nr()),iN.on(iR.scrollBeyondFullpage,no),iN.on(iR.onKeyDown,ns)}),iN.on(iR.bindEvents,function(){iN.on(iR.onClickOrTouch,io)}),iN.on(iR.bindEvents,function(){iN.on(iR.onClickOrTouch,ia)});var r7=0;iN.on(iR.onDestroy,function(){clearTimeout(N),clearTimeout(H)}),iN.on(iR.bindEvents,function(){ev("scroll",il),iC.body.addEventListener("scroll",il),iN.on(iR.onScrollPageAndSlide,function(e){nL(e.sectionAnchor,e.slideAnchor)}),iN.on(iR.onMenuClick,function(e){nO(e.anchor,void 0)}),iN.on(iR.onScrollOverflowScrolled,function(e){("down"===e.direction?nu:np)()}),iN.on(iR.scrollPage,function(e){tH(e.destination)})}),iN.on(iR.onDestroy,function(){em("scroll",il)}),iM.getActiveSlide=/**
    * Gets the active slide.
    */function(){return te(e$().activeSection.activeSlide)},iM.getScrollX=function(){return iH.scrollX},iN.on(iR.bindEvents,function(){iN.on(iR.onDestroy,t1),iN.on(iR.landscapeScroll,function(e){tZ(e.slides,e.destination)}),iN.on(iR.moveSlideRight,function(e){nC(e.section)}),iN.on(iR.moveSlideLeft,function(e){nE(e.section)})}),iN.on(iR.bindEvents,function(){var e=ez().credits.position||"right",t=["left","right"].indexOf(e)>-1?"".concat(e,": 0;"):"",n='\n        <div class="fp-watermark" style="'.concat(t,'">\n            <a href="https://alvarotrigo.com/fullPage/" \n                rel="nofollow noopener" \n                target="_blank" \n                style="text-decoration:none; color: #000;">\n                    ').concat(ez().credits.label||"Made with fullPage.js","\n            </a>\n        </div>\n    "),i=eL(iH.sections),r=!iH.isValid||ez().credits.enabled;i&&i.item&&r&&i.item.insertAdjacentHTML("beforeend",n)}),g=function(){return"reverse"},m=function(e){return e?isNaN(e)?e.charCodeAt(0)-72:e:""},y=function(e){var t=72+e;return t>90&&t<97&&(t+=15),String.fromCharCode(t).toUpperCase()},iN.on(iR.onInitialise,function(){var e,t,n,i;eP({isValid:(ez().licenseKey,t=function(e){var t=parseInt("514").toString(16);if(!e||e.length<29||4===e.split(b[0]).length)return null;var n=["Each","for"][g()]().join(""),i=e[["split"]]("-"),r=[];i[n](function(e,n){if(n<4){var i,o,s=(i=e[e.length-1],o=["NaN","is"][g()]().join(""),window[o](i)?m(i):i-iY.length);r.push(s);var a=m(e[s]);1===n&&(a=a.toString().padStart(2,"0")),t+=a,0!==n&&1!==n||(t+="-")}});var o=0,s="";return e.split("-").forEach(function(e,t){if(t<4){for(var n=0,i=0;i<4;i++)i!==r[t]&&(n+=Math.abs(m(e[i])),isNaN(e[i])||o++);var a=y(n);s+=a}}),s+=y(o),{v:new Date(t+"T00:00"),o:t.split("-")[2]===8*(iY.length-2)+"",l:s}}(e=ez().licenseKey),i=x[g()]().join(""),n=e&&0===i.indexOf(e)&&e.length===i.length,(t||n)&&(t&&S<=t.v&&t.l===e.split(b[0])[4]||n||t.o)||!1)})}),b=["-"],w="2023-4-29".split("-"),S=new Date(w[0],w[1],w[2]),x=["se","licen","-","v3","l","gp"],//@ts-check
iM.setKeyboardScrolling=id,iM.shared.afterRenderActions=iv,iM.setAllowScrolling=im,iM.destroy=/*
    * Destroys fullpage.js plugin events and optinally its html markup and styles
    */function(e){tE(!1,"internal"),im(!0),nZ(!1),id(!1),ee(eq(),iG),iN.emit(iR.onDestroy),e&&ib()};var r8=function(){return ez()&&iH.isValid||iC.domain.indexOf("alvarotrigo.com")>-1};return(// @ts-ignore
iE.fp_easings=iP(iE.fp_easings,{easeInOutCubic:function(e,t,n,i){return(e/=i/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t}}),iE.jQuery&&(T=iE.jQuery)&&ix&&(T.fn.fullpage=function(e){e=T.extend({},e,{$:T}),new ix(this[0],e),Object.keys(iM).forEach(function(e){ez().$.fn.fullpage[e]=iM[e]})}),ix)}();var C={body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},createElementNS:function(){return{}},importNode:function(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function A(){var e="undefined"!=typeof document?document:{};return E(e,C),e}var k={document:C,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState:function(){},pushState:function(){},go:function(){},back:function(){}},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){},matchMedia:function(){return{}},requestAnimationFrame:function(e){return"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0)},cancelAnimationFrame:function(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function L(){var e="undefined"!=typeof window?window:{};return E(e,k),e}/**
 * Dom7 4.0.6
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * https://framework7.io/docs/dom7.html
 *
 * Copyright 2023, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: February 2, 2023
 */function _(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=c("jFPEE");function M(e,t){return t&&("object"===(0,v._type_of)(t)||"function"==typeof t)?t:_(e)}function D(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function P(e,t,n){return(P=D()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var r=new(Function.bind.apply(e,i));return n&&O(r,n.prototype),r}).apply(null,arguments)}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e){var t="function"==typeof Map?new Map:void 0;return(I=function(e){if(null===e||-1===Function.toString.call(e).indexOf("[native code]"))return e;if("function"!=typeof e)throw TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return P(e,arguments,j(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),O(n,e)})(e)}var N=/*#__PURE__*/function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(i,e);var t,n=(t=D(),function(){var e,n=j(i);if(t){var r=j(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return M(this,e)});function i(e){var t,r,o;return(u(this,i),"number"==typeof e)?t=n.call(this,e):(o=(r=_(t=n.call.apply(n,[this].concat(x(e||[]))))).__proto__,Object.defineProperty(r,"__proto__",{get:function(){return o},set:function(e){o.__proto__=e}})),M(t)}return i}(I(Array));function H(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[];return e.forEach(function(e){Array.isArray(e)?t.push.apply(t,x(H(e))):t.push(e)}),t}function R(e,t){return Array.prototype.filter.call(e,t)}function q(e,t){var n=L(),i=A(),r=[];if(!t&&e instanceof N)return e;if(!e)return new N(r);if("string"==typeof e){var o=e.trim();if(o.indexOf("<")>=0&&o.indexOf(">")>=0){var s="div";0===o.indexOf("<li")&&(s="ul"),0===o.indexOf("<tr")&&(s="tbody"),(0===o.indexOf("<td")||0===o.indexOf("<th"))&&(s="tr"),0===o.indexOf("<tbody")&&(s="table"),0===o.indexOf("<option")&&(s="select");var a=i.createElement(s);a.innerHTML=o;for(var l=0;l<a.childNodes.length;l+=1)r.push(a.childNodes[l])}else r=// eslint-disable-next-line
function(e,t){if("string"!=typeof e)return[e];for(var n=[],i=t.querySelectorAll(e),r=0;r<i.length;r+=1)n.push(i[r]);return n}(e.trim(),t||i);// arr = qsa(selector, document);
}else if(e.nodeType||e===n||e===i)r.push(e);else if(Array.isArray(e)){if(e instanceof N)return e;r=e}return new N(function(e){for(var t=[],n=0;n<e.length;n+=1)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(r))}q.fn=N.prototype;var z="resize scroll".split(" ");function B(e){return function(){for(var t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i];if(void 0===n[0]){for(var r=0;r<this.length;r+=1)0>z.indexOf(e)&&(e in this[r]?this[r][e]():q(this[r]).trigger(e));return this}return this.on.apply(this,[e].concat(x(n)))}}B("click"),B("blur"),B("focus"),B("focusin"),B("focusout"),B("keyup"),B("keydown"),B("keypress"),B("submit"),B("change"),B("mousedown"),B("mousemove"),B("mouseup"),B("mouseenter"),B("mouseleave"),B("mouseout"),B("mouseover"),B("touchstart"),B("touchend"),B("touchmove"),B("resize"),B("scroll");var F={addClass:// eslint-disable-next-line
function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var i=H(t.map(function(e){return e.split(" ")}));return this.forEach(function(e){var t;(t=e.classList).add.apply(t,x(i))}),this},removeClass:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var i=H(t.map(function(e){return e.split(" ")}));return this.forEach(function(e){var t;(t=e.classList).remove.apply(t,x(i))}),this},hasClass:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var i=H(t.map(function(e){return e.split(" ")}));return R(this,function(e){return i.filter(function(t){return e.classList.contains(t)}).length>0}).length>0},toggleClass:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var i=H(t.map(function(e){return e.split(" ")}));this.forEach(function(e){i.forEach(function(t){e.classList.toggle(t)})})},attr:function(e,t){if(1==arguments.length&&"string"==typeof e)return(// Get attr
this[0]?this[0].getAttribute(e):void 0);// Set attrs
for(var n=0;n<this.length;n+=1)if(2==arguments.length)this[n].setAttribute(e,t);else for(var i in e)this[n][i]=e[i],this[n].setAttribute(i,e[i]);return this},removeAttr:function(e){for(var t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},transform:function(e){for(var t=0;t<this.length;t+=1)this[t].style.transform=e;return this},transition:function(e){for(var t=0;t<this.length;t+=1)this[t].style.transitionDuration="string"!=typeof e?"".concat(e,"ms"):e;return this},on:function(){for(var e,t,n=arguments.length,i=Array(n),r=0;r<n;r++)i[r]=arguments[r];var o=function(e){var t=e.target;if(t){var n=e.target.dom7EventData||[];if(0>n.indexOf(e)&&n.unshift(e),q(t).is(c))u.apply(t,n);else for(var i=q(t).parents(),r=0;r<i.length;r+=1)q(i[r]).is(c)&&u.apply(i[r],n)}},s=function(e){var t=e&&e.target&&e.target.dom7EventData||[];0>t.indexOf(e)&&t.unshift(e),u.apply(this,t)},a=S(i,4),l=a[0],c=a[1],u=a[2],d=a[3];"function"==typeof i[1]&&(l=(e=S(i,3))[0],u=e[1],d=e[2],c=void 0),d||(d=!1);for(var p=l.split(" "),f=0;f<this.length;f+=1){var h=this[f];if(c)for(t=0;t<p.length;t+=1){var v=p[t];h.dom7LiveListeners||(h.dom7LiveListeners={}),h.dom7LiveListeners[v]||(h.dom7LiveListeners[v]=[]),h.dom7LiveListeners[v].push({listener:u,proxyListener:o}),h.addEventListener(v,o,d)}else for(t=0;t<p.length;t+=1){var g=p[t];h.dom7Listeners||(h.dom7Listeners={}),h.dom7Listeners[g]||(h.dom7Listeners[g]=[]),h.dom7Listeners[g].push({listener:u,proxyListener:s}),h.addEventListener(g,s,d)}}return this},off:function(){for(var e,t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i];var r=S(n,4),o=r[0],s=r[1],a=r[2],l=r[3];"function"==typeof n[1]&&(o=(e=S(n,3))[0],a=e[1],l=e[2],s=void 0),l||(l=!1);for(var c=o.split(" "),u=0;u<c.length;u+=1)for(var d=c[u],p=0;p<this.length;p+=1){var f=this[p],h=void 0;if(!s&&f.dom7Listeners?h=f.dom7Listeners[d]:s&&f.dom7LiveListeners&&(h=f.dom7LiveListeners[d]),h&&h.length)for(var v=h.length-1;v>=0;v-=1){var g=h[v];a&&g.listener===a?(f.removeEventListener(d,g.proxyListener,l),h.splice(v,1)):a&&g.listener&&g.listener.dom7proxy&&g.listener.dom7proxy===a?(f.removeEventListener(d,g.proxyListener,l),h.splice(v,1)):a||(f.removeEventListener(d,g.proxyListener,l),h.splice(v,1))}}return this},trigger:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var i=L(),r=t[0].split(" "),o=t[1],s=0;s<r.length;s+=1)for(var a=r[s],l=0;l<this.length;l+=1){var c=this[l];if(i.CustomEvent){var u=new i.CustomEvent(a,{detail:o,bubbles:!0,cancelable:!0});c.dom7EventData=t.filter(function(e,t){return t>0}),c.dispatchEvent(u),c.dom7EventData=[],delete c.dom7EventData}}return this},transitionEnd:function(e){var t=this;return e&&t.on("transitionend",function n(i){i.target===this&&(e.call(this,i),t.off("transitionend",n))}),this},outerWidth:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(this.length>0){if(e){var t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},styles:function(){var e=L();return this[0]?e.getComputedStyle(this[0],null):{}},offset:function(){if(this.length>0){var e=L(),t=A(),n=this[0],i=n.getBoundingClientRect(),r=t.body,o=n.clientTop||r.clientTop||0,s=n.clientLeft||r.clientLeft||0,a=n===e?e.scrollY:n.scrollTop,l=n===e?e.scrollX:n.scrollLeft;return{top:i.top+a-o,left:i.left+l-s}}return null},css:function(e,t){var n,i=L();if(1==arguments.length){if("string"==typeof e)// .css('width')
{if(this[0])return i.getComputedStyle(this[0],null).getPropertyValue(e)}else{// .css({ width: '100px' })
for(n=0;n<this.length;n+=1)for(var r in e)this[n].style[r]=e[r];return this}}if(2==arguments.length&&"string"==typeof e)// .css('width', '100px')
for(n=0;n<this.length;n+=1)this[n].style[e]=t;return this},each:function(e){return e&&this.forEach(function(t,n){e.apply(t,[t,n])}),this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:null;for(var t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(var t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(e){var t,n,i=L(),r=A(),o=this[0];if(!o||void 0===e)return!1;if("string"==typeof e){if(o.matches)return o.matches(e);if(o.webkitMatchesSelector)return o.webkitMatchesSelector(e);if(o.msMatchesSelector)return o.msMatchesSelector(e);for(n=0,t=q(e);n<t.length;n+=1)if(t[n]===o)return!0;return!1}if(e===r)return o===r;if(e===i)return o===i;if(e.nodeType||e instanceof N){for(n=0,t=e.nodeType?[e]:e;n<t.length;n+=1)if(t[n]===o)return!0}return!1},index:function(){var e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;var t=this.length;if(e>t-1)return q([]);if(e<0){var n=t+e;return n<0?q([]):q([this[n]])}return q([this[e]])},append:function(){for(var e,t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i];for(var r=A(),o=0;o<n.length;o+=1){e=n[o];for(var s=0;s<this.length;s+=1)if("string"==typeof e){var a=r.createElement("div");for(a.innerHTML=e;a.firstChild;)this[s].appendChild(a.firstChild)}else if(e instanceof N)for(var l=0;l<e.length;l+=1)this[s].appendChild(e[l]);else this[s].appendChild(e)}return this},prepend:function(e){var t,n,i=A();for(t=0;t<this.length;t+=1)if("string"==typeof e){var r=i.createElement("div");for(r.innerHTML=e,n=r.childNodes.length-1;n>=0;n-=1)this[t].insertBefore(r.childNodes[n],this[t].childNodes[0])}else if(e instanceof N)for(n=0;n<e.length;n+=1)this[t].insertBefore(e[n],this[t].childNodes[0]);else this[t].insertBefore(e,this[t].childNodes[0]);return this},next:function(e){if(this.length>0){if(e)return this[0].nextElementSibling&&q(this[0].nextElementSibling).is(e)?q([this[0].nextElementSibling]):q([]);if(this[0].nextElementSibling)return q([this[0].nextElementSibling])}return q([])},nextAll:function(e){var t=[],n=this[0];if(!n)return q([]);for(;n.nextElementSibling;){var i=n.nextElementSibling;// eslint-disable-line
e?q(i).is(e)&&t.push(i):t.push(i),n=i}return q(t)},prev:function(e){if(this.length>0){var t=this[0];if(e)return t.previousElementSibling&&q(t.previousElementSibling).is(e)?q([t.previousElementSibling]):q([]);if(t.previousElementSibling)return q([t.previousElementSibling])}return q([])},prevAll:function(e){var t=[],n=this[0];if(!n)return q([]);for(;n.previousElementSibling;){var i=n.previousElementSibling;// eslint-disable-line
e?q(i).is(e)&&t.push(i):t.push(i),n=i}return q(t)},parent:function(e){for(var t=[],n=0;n<this.length;n+=1)null!==this[n].parentNode&&(e?q(this[n].parentNode).is(e)&&t.push(this[n].parentNode):t.push(this[n].parentNode));return q(t)},parents:function(e){for(var t=[],n=0;n<this.length;n+=1)for(var i=this[n].parentNode;i;)e?q(i).is(e)&&t.push(i):t.push(i),i=i.parentNode;return q(t)},closest:function(e){var t=this;// eslint-disable-line
return void 0===e?q([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){for(var t=[],n=0;n<this.length;n+=1)for(var i=this[n].querySelectorAll(e),r=0;r<i.length;r+=1)t.push(i[r]);return q(t)},children:function(e){for(var t=[],n=0;n<this.length;n+=1)for(var i=this[n].children,r=0;r<i.length;r+=1)(!e||q(i[r]).is(e))&&t.push(i[r]);return q(t)},filter:function(e){return q(R(this,e))},remove:function(){for(var e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this}};function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function G(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return setTimeout(e,t)}function U(){return Date.now()}function V(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function Y(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var i=Object(t[0]),r=["__proto__","constructor","prototype"],o=1;o<t.length;o+=1)!function(e){var n=t[e];if(null!=n&&// eslint-disable-next-line
("undefined"!=typeof window&&void 0!==window.HTMLElement?!(n instanceof HTMLElement):!n||1!==n.nodeType&&11!==n.nodeType))for(var o=Object.keys(Object(n)).filter(function(e){return 0>r.indexOf(e)}),s=0,a=o.length;s<a;s+=1){var l=o[s],c=Object.getOwnPropertyDescriptor(n,l);void 0!==c&&c.enumerable&&(V(i[l])&&V(n[l])?n[l].__swiper__?i[l]=n[l]:Y(i[l],n[l]):!V(i[l])&&V(n[l])?(i[l]={},n[l].__swiper__?i[l]=n[l]:Y(i[l],n[l])):i[l]=n[l])}}(o);return i}function X(e,t,n){e.style.setProperty(t,n)}function K(e){var t,n=e.swiper,i=e.targetPosition,r=e.side,o=L(),s=-n.translate,a=null,l=n.params.speed;n.wrapperEl.style.scrollSnapType="none",o.cancelAnimationFrame(n.cssModeFrameID);var c=i>s?"next":"prev",u=function(e,t){return"next"===c&&e>=t||"prev"===c&&e<=t},d=function(){t=new Date().getTime(),null===a&&(a=t);var e=s+(.5-Math.cos(Math.max(Math.min((t-a)/l,1),0)*Math.PI)/2)*(i-s);if(u(e,i)&&(e=i),n.wrapperEl.scrollTo(W({},r,e)),u(e,i)){n.wrapperEl.style.overflow="hidden",n.wrapperEl.style.scrollSnapType="",setTimeout(function(){n.wrapperEl.style.overflow="",n.wrapperEl.scrollTo(W({},r,e))}),o.cancelAnimationFrame(n.cssModeFrameID);return}n.cssModeFrameID=o.requestAnimationFrame(d)};d()}function Q(){if(!i){var e,t;e=L(),i={smoothScroll:(t=A()).documentElement&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch),passiveListener:function(){var t=!1;try{var n=Object.defineProperty({},"passive",{// eslint-disable-next-line
get:function(){t=!0}});e.addEventListener("testPassiveListener",null,n)}catch(e){}return t}(),gestures:"ongesturestart"in e}}return i}function Z(e){var t=e.swiper,n=e.runCallbacks,i=e.direction,r=e.step,o=t.activeIndex,s=t.previousIndex,a=i;if(a||(a=o>s?"next":o<s?"prev":"reset"),t.emit("transition".concat(r)),n&&o!==s){if("reset"===a){t.emit("slideResetTransition".concat(r));return}t.emit("slideChangeTransition".concat(r)),"next"===a?t.emit("slideNextTransition".concat(r)):t.emit("slidePrevTransition".concat(r))}}Object.keys(F).forEach(function(e){Object.defineProperty(q.fn,e,{value:F[e],writable:!0})});var v=c("jFPEE");function J(e){var t=A(),n=L(),i=this.touchEventsData,r=this.params,o=this.touches;if(this.enabled&&(!this.animating||!r.preventInteractionOnTransition)){!this.animating&&r.cssMode&&r.loop&&this.loopFix();var s=e;s.originalEvent&&(s=s.originalEvent);var a=q(s.target);if(("wrapper"!==r.touchEventsTarget||a.closest(this.wrapperEl).length)&&(i.isTouchEvent="touchstart"===s.type,(i.isTouchEvent||!("which"in s)||3!==s.which)&&(i.isTouchEvent||!("button"in s)||!(s.button>0))&&(!i.isTouched||!i.isMoved))){r.noSwipingClass&&""!==r.noSwipingClass&&s.target&&s.target.shadowRoot&&e.path&&e.path[0]&&(a=q(e.path[0]));var l=r.noSwipingSelector?r.noSwipingSelector:".".concat(r.noSwipingClass),c=!!(s.target&&s.target.shadowRoot);if(r.noSwiping&&(c?function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this;return function t(n){return n&&n!==A()&&n!==L()?(n.assignedSlot&&(n=n.assignedSlot),n.closest(e)||t(n.getRootNode().host)):null}(t)}(l,s.target):a.closest(l)[0])){this.allowClick=!0;return}if(r.swipeHandler&&!a.closest(r.swipeHandler)[0])return;o.currentX="touchstart"===s.type?s.targetTouches[0].pageX:s.pageX,o.currentY="touchstart"===s.type?s.targetTouches[0].pageY:s.pageY;var u=o.currentX,d=o.currentY,p=r.edgeSwipeDetection||r.iOSEdgeSwipeDetection,f=r.edgeSwipeThreshold||r.iOSEdgeSwipeThreshold;if(p&&(u<=f||u>=n.innerWidth-f)){if("prevent"!==p)return;e.preventDefault()}if(Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=u,o.startY=d,i.touchStartTime=U(),this.allowClick=!0,this.updateSize(),this.swipeDirection=void 0,r.threshold>0&&(i.allowThresholdMove=!1),"touchstart"!==s.type){var h=!0;a.is(i.focusableElements)&&(h=!1),t.activeElement&&q(t.activeElement).is(i.focusableElements)&&t.activeElement!==a[0]&&t.activeElement.blur();var v=h&&this.allowTouchMove&&r.touchStartPreventDefault;(r.touchStartForcePreventDefault||v)&&!a[0].isContentEditable&&s.preventDefault()}this.emit("touchStart",s)}}}function ee(e){var t,n=A(),i=this.touchEventsData,r=this.params,o=this.touches,s=this.rtlTranslate;if(!!this.enabled){var a=e;if(a.originalEvent&&(a=a.originalEvent),!i.isTouched){i.startMoving&&i.isScrolling&&this.emit("touchMoveOpposite",a);return}if(!i.isTouchEvent||"touchmove"===a.type){var l="touchmove"===a.type&&a.targetTouches&&(a.targetTouches[0]||a.changedTouches[0]),c="touchmove"===a.type?l.pageX:a.pageX,u="touchmove"===a.type?l.pageY:a.pageY;if(a.preventedByNestedSwiper){o.startX=c,o.startY=u;return}if(!this.allowTouchMove){// isMoved = true;
this.allowClick=!1,i.isTouched&&(Object.assign(o,{startX:c,startY:u,currentX:c,currentY:u}),i.touchStartTime=U());return}if(i.isTouchEvent&&r.touchReleaseOnEdges&&!r.loop){if(this.isVertical()){if(u<o.startY&&this.translate<=this.maxTranslate()||u>o.startY&&this.translate>=this.minTranslate()){i.isTouched=!1,i.isMoved=!1;return}}else if(c<o.startX&&this.translate<=this.maxTranslate()||c>o.startX&&this.translate>=this.minTranslate())return}if(i.isTouchEvent&&n.activeElement&&a.target===n.activeElement&&q(a.target).is(i.focusableElements)){i.isMoved=!0,this.allowClick=!1;return}if(i.allowTouchCallbacks&&this.emit("touchMove",a),!a.targetTouches||!(a.targetTouches.length>1)){o.currentX=c,o.currentY=u;var d=o.currentX-o.startX,p=o.currentY-o.startY;if(!(this.params.threshold&&Math.sqrt(Math.pow(d,2)+Math.pow(p,2))<this.params.threshold)){if(void 0===i.isScrolling&&(this.isHorizontal()&&o.currentY===o.startY||this.isVertical()&&o.currentX===o.startX?i.isScrolling=!1:d*d+p*p>=25&&(t=180*Math.atan2(Math.abs(p),Math.abs(d))/Math.PI,i.isScrolling=this.isHorizontal()?t>r.touchAngle:90-t>r.touchAngle)),i.isScrolling&&this.emit("touchMoveOpposite",a),void 0===i.startMoving&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(i.startMoving=!0),i.isScrolling){i.isTouched=!1;return}if(i.startMoving){this.allowClick=!1,!r.cssMode&&a.cancelable&&a.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&a.stopPropagation(),i.isMoved||(r.loop&&!r.cssMode&&this.loopFix(),i.startTranslate=this.getTranslate(),this.setTransition(0),this.animating&&this.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,r.grabCursor&&(!0===this.allowSlideNext||!0===this.allowSlidePrev)&&this.setGrabCursor(!0),this.emit("sliderFirstMove",a)),this.emit("sliderMove",a),i.isMoved=!0;var f=this.isHorizontal()?d:p;o.diff=f,f*=r.touchRatio,s&&(f=-f),this.swipeDirection=f>0?"prev":"next",i.currentTranslate=f+i.startTranslate;var h=!0,v=r.resistanceRatio;// Threshold
if(r.touchReleaseOnEdges&&(v=0),f>0&&i.currentTranslate>this.minTranslate()?(h=!1,r.resistance&&(i.currentTranslate=this.minTranslate()-1+Math.pow(-this.minTranslate()+i.startTranslate+f,v))):f<0&&i.currentTranslate<this.maxTranslate()&&(h=!1,r.resistance&&(i.currentTranslate=this.maxTranslate()+1-Math.pow(this.maxTranslate()-i.startTranslate-f,v))),h&&(a.preventedByNestedSwiper=!0),!this.allowSlideNext&&"next"===this.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!this.allowSlidePrev&&"prev"===this.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),this.allowSlidePrev||this.allowSlideNext||(i.currentTranslate=i.startTranslate),r.threshold>0){if(Math.abs(f)>r.threshold||i.allowThresholdMove){if(!i.allowThresholdMove){i.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,i.currentTranslate=i.startTranslate,o.diff=this.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{i.currentTranslate=i.startTranslate;return}}r.followFinger&&!r.cssMode&&((r.freeMode&&r.freeMode.enabled&&this.freeMode||r.watchSlidesProgress)&&(this.updateActiveIndex(),this.updateSlidesClasses()),this.params.freeMode&&r.freeMode.enabled&&this.freeMode&&this.freeMode.onTouchMove(),// Update progress
this.updateProgress(i.currentTranslate),this.setTranslate(i.currentTranslate))}}}}}}function et(e){var t,n=this,i=n.touchEventsData,r=n.params,o=n.touches,s=n.rtlTranslate,a=n.slidesGrid;if(n.enabled){var l=e;if(l.originalEvent&&(l=l.originalEvent),i.allowTouchCallbacks&&n.emit("touchEnd",l),i.allowTouchCallbacks=!1,!i.isTouched){i.isMoved&&r.grabCursor&&n.setGrabCursor(!1),i.isMoved=!1,i.startMoving=!1;return}// Return Grab Cursor
r.grabCursor&&i.isMoved&&i.isTouched&&(!0===n.allowSlideNext||!0===n.allowSlidePrev)&&n.setGrabCursor(!1);// Time diff
var c=U(),u=c-i.touchStartTime;if(n.allowClick){var d=l.path||l.composedPath&&l.composedPath();n.updateClickedSlide(d&&d[0]||l.target),n.emit("tap click",l),u<300&&c-i.lastClickTime<300&&n.emit("doubleTap doubleClick",l)}if(i.lastClickTime=U(),G(function(){n.destroyed||(n.allowClick=!0)}),!i.isTouched||!i.isMoved||!n.swipeDirection||0===o.diff||i.currentTranslate===i.startTranslate){i.isTouched=!1,i.isMoved=!1,i.startMoving=!1;return}if(i.isTouched=!1,i.isMoved=!1,i.startMoving=!1,t=r.followFinger?s?n.translate:-n.translate:-i.currentTranslate,!r.cssMode){if(n.params.freeMode&&r.freeMode.enabled){n.freeMode.onTouchEnd({currentPos:t});return}// Find current slide
for(var p=0,f=n.slidesSizesGrid[0],h=0;h<a.length;h+=h<r.slidesPerGroupSkip?1:r.slidesPerGroup){var v=h<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;void 0!==a[h+v]?t>=a[h]&&t<a[h+v]&&(p=h,f=a[h+v]-a[h]):t>=a[h]&&(p=h,f=a[a.length-1]-a[a.length-2])}// Find current slide size
var g=(t-a[p])/f,m=p<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;if(u>r.longSwipesMs){// Long touches
if(!r.longSwipes){n.slideTo(n.activeIndex);return}"next"===n.swipeDirection&&(g>=r.longSwipesRatio?n.slideTo(p+m):n.slideTo(p)),"prev"===n.swipeDirection&&(g>1-r.longSwipesRatio?n.slideTo(p+m):n.slideTo(p))}else{// Short swipes
if(!r.shortSwipes){n.slideTo(n.activeIndex);return}n.navigation&&(l.target===n.navigation.nextEl||l.target===n.navigation.prevEl)?l.target===n.navigation.nextEl?n.slideTo(p+m):n.slideTo(p):("next"===n.swipeDirection&&n.slideTo(p+m),"prev"===n.swipeDirection&&n.slideTo(p))}}}}function en(){var e=this.params,t=this.el;if(!t||0!==t.offsetWidth){e.breakpoints&&this.setBreakpoint();// Save locks
var n=this.allowSlideNext,i=this.allowSlidePrev,r=this.snapGrid;// Disable locks on resize
this.allowSlideNext=!0,this.allowSlidePrev=!0,this.updateSize(),this.updateSlides(),this.updateSlidesClasses(),("auto"===e.slidesPerView||e.slidesPerView>1)&&this.isEnd&&!this.isBeginning&&!this.params.centeredSlides?this.slideTo(this.slides.length-1,0,!1,!0):this.slideTo(this.activeIndex,0,!1,!0),this.autoplay&&this.autoplay.running&&this.autoplay.paused&&this.autoplay.run(),// Return locks after resize
this.allowSlidePrev=i,this.allowSlideNext=n,this.params.watchOverflow&&r!==this.snapGrid&&this.checkOverflow()}// Breakpoints
}function ei(e){this.enabled&&!this.allowClick&&(this.params.preventClicks&&e.preventDefault(),this.params.preventClicksPropagation&&this.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))}function er(){var e=this.wrapperEl,t=this.rtlTranslate;if(this.enabled){this.previousTranslate=this.translate,this.isHorizontal()?this.translate=-e.scrollLeft:this.translate=-e.scrollTop,-0===this.translate&&(this.translate=0),this.updateActiveIndex(),this.updateSlidesClasses();var n=this.maxTranslate()-this.minTranslate();(0===n?0:(this.translate-this.minTranslate())/n)!==this.progress&&this.updateProgress(t?-this.translate:this.translate),this.emit("setTranslate",this.translate,!1)}}var eo=!1;function es(){}var ea=function(e,t){var n=A(),i=e.params,r=e.touchEvents,o=e.el,s=e.wrapperEl,a=e.device,l=e.support,c=!!i.nested,u="on"===t?"addEventListener":"removeEventListener";if(l.touch){var d="touchstart"===r.start&&!!l.passiveListener&&!!i.passiveListeners&&{passive:!0,capture:!1};o[u](r.start,e.onTouchStart,d),o[u](r.move,e.onTouchMove,l.passiveListener?{passive:!1,capture:c}:c),o[u](r.end,e.onTouchEnd,d),r.cancel&&o[u](r.cancel,e.onTouchEnd,d)}else o[u](r.start,e.onTouchStart,!1),n[u](r.move,e.onTouchMove,c),n[u](r.end,e.onTouchEnd,!1);// Prevent Links Clicks
(i.preventClicks||i.preventClicksPropagation)&&o[u]("click",e.onClick,!0),i.cssMode&&s[u]("scroll",e.onScroll),i.updateOnWindowResize?e[t](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",en,!0):e[t]("observerUpdate",en,!0)},el=function(e,t){return e.grid&&t.grid&&t.grid.rows>1},ec={init:!0,direction:"horizontal",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",// Overrides
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
_emitClasses:!1},eu={eventsEmitter:{on:function(e,t,n){var i=this;if("function"!=typeof t)return i;var r=n?"unshift":"push";return e.split(" ").forEach(function(e){i.eventsListeners[e]||(i.eventsListeners[e]=[]),i.eventsListeners[e][r](t)}),i},once:function(e,t,n){var i=this;if("function"!=typeof t)return i;function r(){for(var n=arguments.length,o=Array(n),s=0;s<n;s++)o[s]=arguments[s];i.off(e,r),r.__emitterProxy&&delete r.__emitterProxy,t.apply(i,o)}return r.__emitterProxy=t,i.on(e,r,n)},onAny:function(e,t){return"function"!=typeof e||0>this.eventsAnyListeners.indexOf(e)&&this.eventsAnyListeners[t?"unshift":"push"](e),this},offAny:function(e){if(!this.eventsAnyListeners)return this;var t=this.eventsAnyListeners.indexOf(e);return t>=0&&this.eventsAnyListeners.splice(t,1),this},off:function(e,t){var n=this;return n.eventsListeners&&e.split(" ").forEach(function(e){void 0===t?n.eventsListeners[e]=[]:n.eventsListeners[e]&&n.eventsListeners[e].forEach(function(i,r){(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[e].splice(r,1)})}),n},emit:function(){for(var e,t,n,i=arguments.length,r=Array(i),o=0;o<i;o++)r[o]=arguments[o];var s=this;return s.eventsListeners&&("string"==typeof r[0]||Array.isArray(r[0])?(e=r[0],t=r.slice(1,r.length),n=s):(e=r[0].events,t=r[0].data,n=r[0].context||s),t.unshift(n),(Array.isArray(e)?e:e.split(" ")).forEach(function(e){s.eventsAnyListeners&&s.eventsAnyListeners.length&&s.eventsAnyListeners.forEach(function(i){i.apply(n,[e].concat(x(t)))}),s.eventsListeners&&s.eventsListeners[e]&&s.eventsListeners[e].forEach(function(e){e.apply(n,t)})})),s}},update:{updateSize:function(){var e,t,n=this.$el;e=void 0!==this.params.width&&null!==this.params.width?this.params.width:n[0].clientWidth,t=void 0!==this.params.height&&null!==this.params.height?this.params.height:n[0].clientHeight,0===e&&this.isHorizontal()||0===t&&this.isVertical()||(// Subtract paddings
e=e-parseInt(n.css("padding-left")||0,10)-parseInt(n.css("padding-right")||0,10),t=t-parseInt(n.css("padding-top")||0,10)-parseInt(n.css("padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(this,{width:e,height:t,size:this.isHorizontal()?e:t}))},updateSlides:function(){var e,t=function(e){return i.isHorizontal()?e:({width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"})[e]},n=function(e,n){return parseFloat(e.getPropertyValue(t(n))||0)},i=this,r=i.params,o=i.$wrapperEl,s=i.size,a=i.rtlTranslate,l=i.wrongRTL,c=i.virtual&&r.virtual.enabled,u=c?i.virtual.slides.length:i.slides.length,d=o.children(".".concat(i.params.slideClass)),p=c?i.virtual.slides.length:d.length,f=[],h=[],v=[],g=r.slidesOffsetBefore;"function"==typeof g&&(g=r.slidesOffsetBefore.call(i));var m=r.slidesOffsetAfter;"function"==typeof m&&(m=r.slidesOffsetAfter.call(i));var y=i.snapGrid.length,b=i.slidesGrid.length,w=r.spaceBetween,S=-g,x=0,T=0;if(void 0!==s){"string"==typeof w&&w.indexOf("%")>=0&&(w=parseFloat(w.replace("%",""))/100*s),i.virtualSize=-w,a?d.css({marginLeft:"",marginBottom:"",marginTop:""}):d.css({marginRight:"",marginBottom:"",marginTop:""}),r.centeredSlides&&r.cssMode&&(X(i.wrapperEl,"--swiper-centered-offset-before",""),X(i.wrapperEl,"--swiper-centered-offset-after",""));var E=r.grid&&r.grid.rows>1&&i.grid;E&&i.grid.initSlides(p);for(var C="auto"===r.slidesPerView&&r.breakpoints&&Object.keys(r.breakpoints).filter(function(e){return void 0!==r.breakpoints[e].slidesPerView}).length>0,A=0;A<p;A+=1){e=0;var k=d.eq(A);if(E&&i.grid.updateSlide(A,k,p,t),"none"!==k.css("display")){if("auto"===r.slidesPerView){C&&(d[A].style[t("width")]="");var L=getComputedStyle(k[0]),_=k[0].style.transform,O=k[0].style.webkitTransform;if(_&&(k[0].style.transform="none"),O&&(k[0].style.webkitTransform="none"),r.roundLengths)e=i.isHorizontal()?k.outerWidth(!0):k.outerHeight(!0);else{// eslint-disable-next-line
var M=n(L,"width"),D=n(L,"padding-left"),P=n(L,"padding-right"),j=n(L,"margin-left"),I=n(L,"margin-right"),N=L.getPropertyValue("box-sizing");if(N&&"border-box"===N)e=M+j+I;else{var H=k[0],R=H.clientWidth;e=M+D+P+j+I+(H.offsetWidth-R)}}_&&(k[0].style.transform=_),O&&(k[0].style.webkitTransform=O),r.roundLengths&&(e=Math.floor(e))}else e=(s-(r.slidesPerView-1)*w)/r.slidesPerView,r.roundLengths&&(e=Math.floor(e)),d[A]&&(d[A].style[t("width")]="".concat(e,"px"));d[A]&&(d[A].swiperSlideSize=e),v.push(e),r.centeredSlides?(S=S+e/2+x/2+w,0===x&&0!==A&&(S=S-s/2-w),0===A&&(S=S-s/2-w),.001>Math.abs(S)&&(S=0),r.roundLengths&&(S=Math.floor(S)),T%r.slidesPerGroup==0&&f.push(S),h.push(S)):(r.roundLengths&&(S=Math.floor(S)),(T-Math.min(i.params.slidesPerGroupSkip,T))%i.params.slidesPerGroup==0&&f.push(S),h.push(S),S=S+e+w),i.virtualSize+=e+w,x=e,T+=1}// eslint-disable-line
}// Remove last grid elements depending on width
if(i.virtualSize=Math.max(i.virtualSize,s)+m,a&&l&&("slide"===r.effect||"coverflow"===r.effect)&&o.css({width:"".concat(i.virtualSize+r.spaceBetween,"px")}),r.setWrapperSize&&o.css(W({},t("width"),"".concat(i.virtualSize+r.spaceBetween,"px"))),E&&i.grid.updateWrapperSize(e,f,t),!r.centeredSlides){for(var q=[],z=0;z<f.length;z+=1){var B=f[z];r.roundLengths&&(B=Math.floor(B)),f[z]<=i.virtualSize-s&&q.push(B)}f=q,Math.floor(i.virtualSize-s)-Math.floor(f[f.length-1])>1&&f.push(i.virtualSize-s)}if(0===f.length&&(f=[0]),0!==r.spaceBetween){var F=i.isHorizontal()&&a?"marginLeft":t("marginRight");d.filter(function(e,t){return!r.cssMode||t!==d.length-1}).css(W({},F,"".concat(w,"px")))}if(r.centeredSlides&&r.centeredSlidesBounds){var G=0;v.forEach(function(e){G+=e+(r.spaceBetween?r.spaceBetween:0)});var U=(G-=r.spaceBetween)-s;f=f.map(function(e){return e<0?-g:e>U?U+m:e})}if(r.centerInsufficientSlides){var V=0;if(v.forEach(function(e){V+=e+(r.spaceBetween?r.spaceBetween:0)}),(V-=r.spaceBetween)<s){var Y=(s-V)/2;f.forEach(function(e,t){f[t]=e-Y}),h.forEach(function(e,t){h[t]=e+Y})}}if(Object.assign(i,{slides:d,snapGrid:f,slidesGrid:h,slidesSizesGrid:v}),r.centeredSlides&&r.cssMode&&!r.centeredSlidesBounds){X(i.wrapperEl,"--swiper-centered-offset-before","".concat(-f[0],"px")),X(i.wrapperEl,"--swiper-centered-offset-after","".concat(i.size/2-v[v.length-1]/2,"px"));var K=-i.snapGrid[0],Q=-i.slidesGrid[0];i.snapGrid=i.snapGrid.map(function(e){return e+K}),i.slidesGrid=i.slidesGrid.map(function(e){return e+Q})}p!==u&&i.emit("slidesLengthChange"),f.length!==y&&(i.params.watchOverflow&&i.checkOverflow(),i.emit("snapGridLengthChange")),h.length!==b&&i.emit("slidesGridLengthChange"),r.watchSlidesProgress&&i.updateSlidesOffset()}},updateAutoHeight:function(e){var t,n=this,i=[],r=n.virtual&&n.params.virtual.enabled,o=0;"number"==typeof e?n.setTransition(e):!0===e&&n.setTransition(n.params.speed);var s=function(e){return r?n.slides.filter(function(t){return parseInt(t.getAttribute("data-swiper-slide-index"),10)===e})[0]:n.slides.eq(e)[0]};// Find slides currently in view
if("auto"!==n.params.slidesPerView&&n.params.slidesPerView>1){if(n.params.centeredSlides)n.visibleSlides.each(function(e){i.push(e)});else for(t=0;t<Math.ceil(n.params.slidesPerView);t+=1){var a=n.activeIndex+t;if(a>n.slides.length&&!r)break;i.push(s(a))}}else i.push(s(n.activeIndex));// Find new height from highest slide in view
for(t=0;t<i.length;t+=1)if(void 0!==i[t]){var l=i[t].offsetHeight;o=l>o?l:o}// Update Height
(o||0===o)&&n.$wrapperEl.css("height","".concat(o,"px"))},updateSlidesOffset:function(){for(var e=this.slides,t=0;t<e.length;t+=1)e[t].swiperSlideOffset=this.isHorizontal()?e[t].offsetLeft:e[t].offsetTop},updateSlidesProgress:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this&&this.translate||0,t=this.params,n=this.slides,i=this.rtlTranslate,r=this.snapGrid;if(0!==n.length){void 0===n[0].swiperSlideOffset&&this.updateSlidesOffset();var o=-e;i&&(o=e),n.removeClass(t.slideVisibleClass),this.visibleSlidesIndexes=[],this.visibleSlides=[];for(var s=0;s<n.length;s+=1){var a=n[s],l=a.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(l-=n[0].swiperSlideOffset);var c=(o+(t.centeredSlides?this.minTranslate():0)-l)/(a.swiperSlideSize+t.spaceBetween),u=(o-r[0]+(t.centeredSlides?this.minTranslate():0)-l)/(a.swiperSlideSize+t.spaceBetween),d=-(o-l),p=d+this.slidesSizesGrid[s];(d>=0&&d<this.size-1||p>1&&p<=this.size||d<=0&&p>=this.size)&&(this.visibleSlides.push(a),this.visibleSlidesIndexes.push(s),n.eq(s).addClass(t.slideVisibleClass)),a.progress=i?-c:c,a.originalProgress=i?-u:u}this.visibleSlides=q(this.visibleSlides)}},updateProgress:function(e){if(void 0===e){var t=this.rtlTranslate?-1:1;// eslint-disable-next-line
e=this&&this.translate&&this.translate*t||0}var n=this.params,i=this.maxTranslate()-this.minTranslate(),r=this.progress,o=this.isBeginning,s=this.isEnd,a=o,l=s;0===i?(r=0,o=!0,s=!0):(o=(r=(e-this.minTranslate())/i)<=0,s=r>=1),Object.assign(this,{progress:r,isBeginning:o,isEnd:s}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&this.updateSlidesProgress(e),o&&!a&&this.emit("reachBeginning toEdge"),s&&!l&&this.emit("reachEnd toEdge"),(a&&!o||l&&!s)&&this.emit("fromEdge"),this.emit("progress",r)},updateSlidesClasses:function(){var e,t=this.slides,n=this.params,i=this.$wrapperEl,r=this.activeIndex,o=this.realIndex,s=this.virtual&&n.virtual.enabled;t.removeClass("".concat(n.slideActiveClass," ").concat(n.slideNextClass," ").concat(n.slidePrevClass," ").concat(n.slideDuplicateActiveClass," ").concat(n.slideDuplicateNextClass," ").concat(n.slideDuplicatePrevClass)),// Active classes
(e=s?this.$wrapperEl.find(".".concat(n.slideClass,'[data-swiper-slide-index="').concat(r,'"]')):t.eq(r)).addClass(n.slideActiveClass),n.loop&&(e.hasClass(n.slideDuplicateClass)?i.children(".".concat(n.slideClass,":not(.").concat(n.slideDuplicateClass,')[data-swiper-slide-index="').concat(o,'"]')).addClass(n.slideDuplicateActiveClass):i.children(".".concat(n.slideClass,".").concat(n.slideDuplicateClass,'[data-swiper-slide-index="').concat(o,'"]')).addClass(n.slideDuplicateActiveClass));var a=e.nextAll(".".concat(n.slideClass)).eq(0).addClass(n.slideNextClass);n.loop&&0===a.length&&(a=t.eq(0)).addClass(n.slideNextClass);var l=e.prevAll(".".concat(n.slideClass)).eq(0).addClass(n.slidePrevClass);n.loop&&0===l.length&&(l=t.eq(-1)).addClass(n.slidePrevClass),n.loop&&(a.hasClass(n.slideDuplicateClass)?i.children(".".concat(n.slideClass,":not(.").concat(n.slideDuplicateClass,')[data-swiper-slide-index="').concat(a.attr("data-swiper-slide-index"),'"]')).addClass(n.slideDuplicateNextClass):i.children(".".concat(n.slideClass,".").concat(n.slideDuplicateClass,'[data-swiper-slide-index="').concat(a.attr("data-swiper-slide-index"),'"]')).addClass(n.slideDuplicateNextClass),l.hasClass(n.slideDuplicateClass)?i.children(".".concat(n.slideClass,":not(.").concat(n.slideDuplicateClass,')[data-swiper-slide-index="').concat(l.attr("data-swiper-slide-index"),'"]')).addClass(n.slideDuplicatePrevClass):i.children(".".concat(n.slideClass,".").concat(n.slideDuplicateClass,'[data-swiper-slide-index="').concat(l.attr("data-swiper-slide-index"),'"]')).addClass(n.slideDuplicatePrevClass)),this.emitSlidesClasses()},updateActiveIndex:function(e){var t,n=this.rtlTranslate?this.translate:-this.translate,i=this.slidesGrid,r=this.snapGrid,o=this.params,s=this.activeIndex,a=this.realIndex,l=this.snapIndex,c=e;if(void 0===c){for(var u=0;u<i.length;u+=1)void 0!==i[u+1]?n>=i[u]&&n<i[u+1]-(i[u+1]-i[u])/2?c=u:n>=i[u]&&n<i[u+1]&&(c=u+1):n>=i[u]&&(c=u);// Normalize slideIndex
o.normalizeSlideIndex&&(c<0||void 0===c)&&(c=0)}if(r.indexOf(n)>=0)t=r.indexOf(n);else{var d=Math.min(o.slidesPerGroupSkip,c);t=d+Math.floor((c-d)/o.slidesPerGroup)}if(t>=r.length&&(t=r.length-1),c===s){t!==l&&(this.snapIndex=t,this.emit("snapIndexChange"));return}// Get real index
var p=parseInt(this.slides.eq(c).attr("data-swiper-slide-index")||c,10);Object.assign(this,{snapIndex:t,realIndex:p,previousIndex:s,activeIndex:c}),this.emit("activeIndexChange"),this.emit("snapIndexChange"),a!==p&&this.emit("realIndexChange"),(this.initialized||this.params.runCallbacksOnInit)&&this.emit("slideChange")},updateClickedSlide:function(e){var t,n=this.params,i=q(e).closest(".".concat(n.slideClass))[0],r=!1;if(i){for(var o=0;o<this.slides.length;o+=1)if(this.slides[o]===i){r=!0,t=o;break}}if(i&&r)this.clickedSlide=i,this.virtual&&this.params.virtual.enabled?this.clickedIndex=parseInt(q(i).attr("data-swiper-slide-index"),10):this.clickedIndex=t;else{this.clickedSlide=void 0,this.clickedIndex=void 0;return}n.slideToClickedSlide&&void 0!==this.clickedIndex&&this.clickedIndex!==this.activeIndex&&this.slideToClickedSlide()}},translate:{getTranslate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.isHorizontal()?"x":"y",t=this.params,n=this.rtlTranslate,i=this.translate,r=this.$wrapperEl;if(t.virtualTranslate)return n?-i:i;if(t.cssMode)return i;var o=function(e){var t,n,i,r,o,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"x",a=L(),l=((n=L()).getComputedStyle&&(t=n.getComputedStyle(e,null)),!t&&e.currentStyle&&(t=e.currentStyle),t||(t=e.style),t);return a.WebKitCSSMatrix?((r=l.transform||l.webkitTransform).split(",").length>6&&(r=r.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),// Some old versions of Webkit choke when 'none' is passed; pass
// empty string instead in this case
o=new a.WebKitCSSMatrix("none"===r?"":r)):i=(o=l.MozTransform||l.OTransform||l.MsTransform||l.msTransform||l.transform||l.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(","),"x"===s&&(r=a.WebKitCSSMatrix?o.m41:16===i.length?parseFloat(i[12]):parseFloat(i[4])),"y"===s&&(r=a.WebKitCSSMatrix?o.m42:16===i.length?parseFloat(i[13]):parseFloat(i[5])),r||0}(r[0],e);return n&&(o=-o),o||0},setTranslate:function(e,t){var n=this.rtlTranslate,i=this.params,r=this.$wrapperEl,o=this.wrapperEl,s=this.progress,a=0,l=0;this.isHorizontal()?a=n?-e:e:l=e,i.roundLengths&&(a=Math.floor(a),l=Math.floor(l)),i.cssMode?o[this.isHorizontal()?"scrollLeft":"scrollTop"]=this.isHorizontal()?-a:-l:i.virtualTranslate||r.transform("translate3d(".concat(a,"px, ").concat(l,"px, ").concat(0,"px)")),this.previousTranslate=this.translate,this.translate=this.isHorizontal()?a:l;var c=this.maxTranslate()-this.minTranslate();(0===c?0:(e-this.minTranslate())/c)!==s&&this.updateProgress(e),this.emit("setTranslate",this.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.params.speed,n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],i=!(arguments.length>3)||void 0===arguments[3]||arguments[3],r=arguments.length>4?arguments[4]:void 0,o=this,s=o.params,a=o.wrapperEl;if(o.animating&&s.preventInteractionOnTransition)return!1;var l=o.minTranslate(),c=o.maxTranslate();if(u=i&&e>l?l:i&&e<c?c:e,o.updateProgress(u),s.cssMode){var u,d,p=o.isHorizontal();if(0===t)a[p?"scrollLeft":"scrollTop"]=-u;else{if(!o.support.smoothScroll)return K({swiper:o,targetPosition:-u,side:p?"left":"top"}),!0;a.scrollTo((W(d={},p?"left":"top",-u),W(d,"behavior","smooth"),d))}return!0}return 0===t?(o.setTransition(0),o.setTranslate(u),n&&(o.emit("beforeTransitionStart",t,r),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(u),n&&(o.emit("beforeTransitionStart",t,r),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(e){o&&!o.destroyed&&e.target===this&&(o.$wrapperEl[0].removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.$wrapperEl[0].removeEventListener("webkitTransitionEnd",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,n&&o.emit("transitionEnd"))}),o.$wrapperEl[0].addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.$wrapperEl[0].addEventListener("webkitTransitionEnd",o.onTranslateToWrapperTransitionEnd))),!0}},transition:{setTransition:function(e,t){this.params.cssMode||this.$wrapperEl.transition(e),this.emit("setTransition",e,t)},transitionStart:function(){var e=!(arguments.length>0)||void 0===arguments[0]||arguments[0],t=arguments.length>1?arguments[1]:void 0,n=this.params;n.cssMode||(n.autoHeight&&this.updateAutoHeight(),Z({swiper:this,runCallbacks:e,direction:t,step:"Start"}))},transitionEnd:function(){var e=!(arguments.length>0)||void 0===arguments[0]||arguments[0],t=arguments.length>1?arguments[1]:void 0,n=this.params;this.animating=!1,n.cssMode||(this.setTransition(0),Z({swiper:this,runCallbacks:e,direction:t,step:"End"}))}},slide:{slideTo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.params.speed,n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],i=arguments.length>3?arguments[3]:void 0,r=arguments.length>4?arguments[4]:void 0;if("number"!=typeof e&&"string"!=typeof e)throw Error("The 'index' argument cannot have type other than 'number' or 'string'. [".concat(void 0===e?"undefined":(0,v._)(e),"] given."));if("string"==typeof e){/**
     * The `index` argument converted from `string` to `number`.
     * @type {number}
     */var o=parseInt(e,10);if(!isFinite(o))throw Error("The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(e,"] given."));// Knowing that the converted `index` is a valid number,
// we can update the original argument's value.
e=o}var s=this,a=e;a<0&&(a=0);var l=s.params,c=s.snapGrid,u=s.slidesGrid,d=s.previousIndex,p=s.activeIndex,f=s.rtlTranslate,h=s.wrapperEl,g=s.enabled;if(s.animating&&l.preventInteractionOnTransition||!g&&!i&&!r)return!1;var m=Math.min(s.params.slidesPerGroupSkip,a),y=m+Math.floor((a-m)/s.params.slidesPerGroup);y>=c.length&&(y=c.length-1),(p||l.initialSlide||0)===(d||0)&&n&&s.emit("beforeSlideChangeStart");var b=-c[y];// Update progress
if(s.updateProgress(b),l.normalizeSlideIndex)for(var w=0;w<u.length;w+=1){var S=-Math.floor(100*b),x=Math.floor(100*u[w]),T=Math.floor(100*u[w+1]);void 0!==u[w+1]?S>=x&&S<T-(T-x)/2?a=w:S>=x&&S<T&&(a=w+1):S>=x&&(a=w)}// Directions locks
if(s.initialized&&a!==p&&(!s.allowSlideNext&&b<s.translate&&b<s.minTranslate()||!s.allowSlidePrev&&b>s.translate&&b>s.maxTranslate()&&(p||0)!==a))return!1;if(E=a>p?"next":a<p?"prev":"reset",f&&-b===s.translate||!f&&b===s.translate)return s.updateActiveIndex(a),l.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),"slide"!==l.effect&&s.setTranslate(b),"reset"!==E&&(s.transitionStart(n,E),s.transitionEnd(n,E)),!1;if(l.cssMode){var E,C,A=s.isHorizontal(),k=f?b:-b;if(0===t){var L=s.virtual&&s.params.virtual.enabled;L&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),h[A?"scrollLeft":"scrollTop"]=k,L&&requestAnimationFrame(function(){s.wrapperEl.style.scrollSnapType="",s._swiperImmediateVirtual=!1})}else{if(!s.support.smoothScroll)return K({swiper:s,targetPosition:k,side:A?"left":"top"}),!0;h.scrollTo((W(C={},A?"left":"top",k),W(C,"behavior","smooth"),C))}return!0}return s.setTransition(t),s.setTranslate(b),s.updateActiveIndex(a),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,i),s.transitionStart(n,E),0===t?s.transitionEnd(n,E):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(e){s&&!s.destroyed&&e.target===this&&(s.$wrapperEl[0].removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.$wrapperEl[0].removeEventListener("webkitTransitionEnd",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(n,E))}),s.$wrapperEl[0].addEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.$wrapperEl[0].addEventListener("webkitTransitionEnd",s.onSlideToWrapperTransitionEnd)),!0},slideToLoop:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.params.speed,n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],i=arguments.length>3?arguments[3]:void 0,r=e;return this.params.loop&&(r+=this.loopedSlides),this.slideTo(r,t,n,i)},slideNext:/* eslint no-unused-vars: "off" */function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.params.speed,t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],n=arguments.length>2?arguments[2]:void 0,i=this.animating,r=this.enabled,o=this.params;if(!r)return this;var s=o.slidesPerGroup;"auto"===o.slidesPerView&&1===o.slidesPerGroup&&o.slidesPerGroupAuto&&(s=Math.max(this.slidesPerViewDynamic("current",!0),1));var a=this.activeIndex<o.slidesPerGroupSkip?1:s;if(o.loop){if(i&&o.loopPreventsSlide)return!1;this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft}return o.rewind&&this.isEnd?this.slideTo(0,e,t,n):this.slideTo(this.activeIndex+a,e,t,n)},slidePrev:/* eslint no-unused-vars: "off" */function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.params.speed,n=!(arguments.length>1)||void 0===arguments[1]||arguments[1],i=arguments.length>2?arguments[2]:void 0,r=function(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)},o=this.params,s=this.animating,a=this.snapGrid,l=this.slidesGrid,c=this.rtlTranslate;if(!this.enabled)return this;if(o.loop){if(s&&o.loopPreventsSlide)return!1;this.loopFix(),this._clientLeft=this.$wrapperEl[0].clientLeft}var u=r(c?this.translate:-this.translate),d=a.map(function(e){return r(e)}),p=a[d.indexOf(u)-1];void 0===p&&o.cssMode&&(a.forEach(function(t,n){u>=t&&(e=n)}),void 0!==e&&(p=a[e>0?e-1:e]));var f=0;return(void 0!==p&&((f=l.indexOf(p))<0&&(f=this.activeIndex-1),"auto"===o.slidesPerView&&1===o.slidesPerGroup&&o.slidesPerGroupAuto&&(f=Math.max(f=f-this.slidesPerViewDynamic("previous",!0)+1,0))),o.rewind&&this.isBeginning)?this.slideTo(this.slides.length-1,t,n,i):this.slideTo(f,t,n,i)},slideReset:/* eslint no-unused-vars: "off" */function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.params.speed,t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],n=arguments.length>2?arguments[2]:void 0;return this.slideTo(this.activeIndex,e,t,n)},slideToClosest:/* eslint no-unused-vars: "off" */function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.params.speed,t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],n=arguments.length>2?arguments[2]:void 0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5,r=this.activeIndex,o=Math.min(this.params.slidesPerGroupSkip,r),s=o+Math.floor((r-o)/this.params.slidesPerGroup),a=this.rtlTranslate?this.translate:-this.translate;if(a>=this.snapGrid[s]){// The current translate is on or after the current snap index, so the choice
// is between the current index and the one after it.
var l=this.snapGrid[s];a-l>(this.snapGrid[s+1]-l)*i&&(r+=this.params.slidesPerGroup)}else{// The current translate is before the current snap index, so the choice
// is between the current index and the one before it.
var c=this.snapGrid[s-1];a-c<=(this.snapGrid[s]-c)*i&&(r-=this.params.slidesPerGroup)}return r=Math.min(r=Math.max(r,0),this.slidesGrid.length-1),this.slideTo(r,e,t,n)},slideToClickedSlide:function(){var e,t=this,n=t.params,i=t.$wrapperEl,r="auto"===n.slidesPerView?t.slidesPerViewDynamic():n.slidesPerView,o=t.clickedIndex;if(n.loop){if(t.animating)return;e=parseInt(q(t.clickedSlide).attr("data-swiper-slide-index"),10),n.centeredSlides?o<t.loopedSlides-r/2||o>t.slides.length-t.loopedSlides+r/2?(t.loopFix(),o=i.children(".".concat(n.slideClass,'[data-swiper-slide-index="').concat(e,'"]:not(.').concat(n.slideDuplicateClass,")")).eq(0).index(),G(function(){t.slideTo(o)})):t.slideTo(o):o>t.slides.length-r?(t.loopFix(),o=i.children(".".concat(n.slideClass,'[data-swiper-slide-index="').concat(e,'"]:not(.').concat(n.slideDuplicateClass,")")).eq(0).index(),G(function(){t.slideTo(o)})):t.slideTo(o)}else t.slideTo(o)}},loop:{loopCreate:function(){var e=this,t=A(),n=e.params,i=e.$wrapperEl,r=i.children().length>0?q(i.children()[0].parentNode):i;r.children(".".concat(n.slideClass,".").concat(n.slideDuplicateClass)).remove();var o=r.children(".".concat(n.slideClass));if(n.loopFillGroupWithBlank){var s=n.slidesPerGroup-o.length%n.slidesPerGroup;if(s!==n.slidesPerGroup){for(var a=0;a<s;a+=1){var l=q(t.createElement("div")).addClass("".concat(n.slideClass," ").concat(n.slideBlankClass));r.append(l)}o=r.children(".".concat(n.slideClass))}}"auto"!==n.slidesPerView||n.loopedSlides||(n.loopedSlides=o.length),e.loopedSlides=Math.ceil(parseFloat(n.loopedSlides||n.slidesPerView,10)),e.loopedSlides+=n.loopAdditionalSlides,e.loopedSlides>o.length&&(e.loopedSlides=o.length);var c=[],u=[];o.each(function(t,n){var i=q(t);n<e.loopedSlides&&u.push(t),n<o.length&&n>=o.length-e.loopedSlides&&c.push(t),i.attr("data-swiper-slide-index",n)});for(var d=0;d<u.length;d+=1)r.append(q(u[d].cloneNode(!0)).addClass(n.slideDuplicateClass));for(var p=c.length-1;p>=0;p-=1)r.prepend(q(c[p].cloneNode(!0)).addClass(n.slideDuplicateClass))},loopFix:function(){this.emit("beforeLoopFix");var e,t=this.activeIndex,n=this.slides,i=this.loopedSlides,r=this.allowSlidePrev,o=this.allowSlideNext,s=this.snapGrid,a=this.rtlTranslate;this.allowSlidePrev=!0,this.allowSlideNext=!0;var l=-s[t]-this.getTranslate();// Fix For Negative Oversliding
t<i?(e=n.length-3*i+t+i,this.slideTo(e,0,!1,!0)&&0!==l&&this.setTranslate((a?-this.translate:this.translate)-l)):t>=n.length-i&&(e=-n.length+t+i+i,this.slideTo(e,0,!1,!0)&&0!==l&&this.setTranslate((a?-this.translate:this.translate)-l)),this.allowSlidePrev=r,this.allowSlideNext=o,this.emit("loopFix")},loopDestroy:function(){var e=this.$wrapperEl,t=this.params,n=this.slides;e.children(".".concat(t.slideClass,".").concat(t.slideDuplicateClass,",.").concat(t.slideClass,".").concat(t.slideBlankClass)).remove(),n.removeAttr("data-swiper-slide-index")}},grabCursor:{setGrabCursor:function(e){if(!this.support.touch&&this.params.simulateTouch&&(!this.params.watchOverflow||!this.isLocked)&&!this.params.cssMode){var t="container"===this.params.touchEventsTarget?this.el:this.wrapperEl;t.style.cursor="move",t.style.cursor=e?"-webkit-grabbing":"-webkit-grab",t.style.cursor=e?"-moz-grabbin":"-moz-grab",t.style.cursor=e?"grabbing":"grab"}},unsetGrabCursor:function(){this.support.touch||this.params.watchOverflow&&this.isLocked||this.params.cssMode||(this["container"===this.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="")}},events:{attachEvents:function(){var e=A(),t=this.params,n=this.support;this.onTouchStart=J.bind(this),this.onTouchMove=ee.bind(this),this.onTouchEnd=et.bind(this),t.cssMode&&(this.onScroll=er.bind(this)),this.onClick=ei.bind(this),n.touch&&!eo&&(e.addEventListener("touchstart",es),eo=!0),ea(this,"on")},detachEvents:function(){ea(this,"off")}},breakpoints:{setBreakpoint:function(){var e=this.activeIndex,t=this.initialized,n=this.loopedSlides,i=this.params,r=this.$el,o=i.breakpoints;if(o&&(!o||0!==Object.keys(o).length)){var s=this.getBreakpoint(o,this.params.breakpointsBase,this.el);if(s&&this.currentBreakpoint!==s){var a=(s in o?o[s]:void 0)||this.originalParams,l=el(this,i),c=el(this,a),u=i.enabled;l&&!c?(r.removeClass("".concat(i.containerModifierClass,"grid ").concat(i.containerModifierClass,"grid-column")),this.emitContainerClasses()):!l&&c&&(r.addClass("".concat(i.containerModifierClass,"grid")),(a.grid.fill&&"column"===a.grid.fill||!a.grid.fill&&"column"===i.grid.fill)&&r.addClass("".concat(i.containerModifierClass,"grid-column")),this.emitContainerClasses());var d=a.direction&&a.direction!==i.direction,p=i.loop&&(a.slidesPerView!==i.slidesPerView||d);d&&t&&this.changeDirection(),Y(this.params,a);var f=this.params.enabled;Object.assign(this,{allowTouchMove:this.params.allowTouchMove,allowSlideNext:this.params.allowSlideNext,allowSlidePrev:this.params.allowSlidePrev}),u&&!f?this.disable():!u&&f&&this.enable(),this.currentBreakpoint=s,this.emit("_beforeBreakpoint",a),p&&t&&(this.loopDestroy(),this.loopCreate(),this.updateSlides(),this.slideTo(e-(void 0===n?0:n)+this.loopedSlides,0,!1)),this.emit("breakpoint",a)}}// Get breakpoint for window width and update parameters
},getBreakpoint:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"window",n=arguments.length>2?arguments[2]:void 0;if(e&&("container"!==t||n)){var i=!1,r=L(),o="window"===t?r.innerHeight:n.clientHeight,s=Object.keys(e).map(function(e){return"string"==typeof e&&0===e.indexOf("@")?{value:o*parseFloat(e.substr(1)),point:e}:{value:e,point:e}});s.sort(function(e,t){return parseInt(e.value,10)-parseInt(t.value,10)});for(var a=0;a<s.length;a+=1){var l=s[a],c=l.point,u=l.value;"window"===t?r.matchMedia("(min-width: ".concat(u,"px)")).matches&&(i=c):u<=n.clientWidth&&(i=c)}return i||"max"}}},checkOverflow:{checkOverflow:function(){var e=this.isLocked,t=this.params,n=t.slidesOffsetBefore;if(n){var i=this.slides.length-1,r=this.slidesGrid[i]+this.slidesSizesGrid[i]+2*n;this.isLocked=this.size>r}else this.isLocked=1===this.snapGrid.length;!0===t.allowSlideNext&&(this.allowSlideNext=!this.isLocked),!0===t.allowSlidePrev&&(this.allowSlidePrev=!this.isLocked),e&&e!==this.isLocked&&(this.isEnd=!1),e!==this.isLocked&&this.emit(this.isLocked?"lock":"unlock")}},classes:{addClasses:function(){var e,t,n,i=this.classNames,r=this.params,o=this.rtl,s=this.$el,a=this.device,l=this.support,c=(e=["initialized",r.direction,{"pointer-events":!l.touch},{"free-mode":this.params.freeMode&&r.freeMode.enabled},{autoheight:r.autoHeight},{rtl:o},{grid:r.grid&&r.grid.rows>1},{"grid-column":r.grid&&r.grid.rows>1&&"column"===r.grid.fill},{android:a.android},{ios:a.ios},{"css-mode":r.cssMode},{centered:r.cssMode&&r.centeredSlides}],t=r.containerModifierClass,n=[],e.forEach(function(e){"object"==typeof e?Object.keys(e).forEach(function(i){e[i]&&n.push(t+i)}):"string"==typeof e&&n.push(t+e)}),n);// prettier-ignore
i.push.apply(i,x(c)),s.addClass(x(i).join(" ")),this.emitContainerClasses()},removeClasses:function(){var e=this.$el,t=this.classNames;e.removeClass(t.join(" ")),this.emitContainerClasses()}},images:{loadImage:function(e,t,n,i,r,o){var s,a=function(){o&&o()},l=L();q(e).parent("picture")[0]||e.complete&&r?a():t?((s=new l.Image).onload=a,s.onerror=a,i&&(s.sizes=i),n&&(s.srcset=n),t&&(s.src=t)):a()},preloadImages:function(){var e=function(){null!=t&&t&&!t.destroyed&&(void 0!==t.imagesLoaded&&(t.imagesLoaded+=1),t.imagesLoaded===t.imagesToLoad.length&&(t.params.updateOnImagesReady&&t.update(),t.emit("imagesReady")))},t=this;t.imagesToLoad=t.$el.find("img");for(var n=0;n<t.imagesToLoad.length;n+=1){var i=t.imagesToLoad[n];t.loadImage(i,i.currentSrc||i.getAttribute("src"),i.srcset||i.getAttribute("srcset"),i.sizes||i.getAttribute("sizes"),!0,e)}}}},ed={},ep=/*#__PURE__*/function(){function e(){for(var t,n,i,s,a=arguments.length,l=Array(a),c=0;c<a;c++)l[c]=arguments[c];if(u(this,e),1===l.length&&l[0].constructor&&"Object"===Object.prototype.toString.call(l[0]).slice(8,-1)?i=l[0]:(n=(s=S(l,2))[0],i=s[1]),i||(i={}),i=Y({},i),n&&!i.el&&(i.el=n),i.el&&q(i.el).length>1){var d=[];return q(i.el).each(function(t){var n=Y({},i,{el:t});d.push(new e(n))}),d}// Swiper Instance
var p=this;p.__swiper__=!0,p.support=Q(),p.device=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r||(r=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).userAgent,t=Q(),n=L(),i=n.navigator.platform,r=e||n.navigator.userAgent,o={ios:!1,android:!1},s=n.screen.width,a=n.screen.height,l=r.match(/(Android);?[\s\/]+([\d.]+)?/),c=r.match(/(iPad).*OS\s([\d_]+)/),u=r.match(/(iPod)(.*OS\s([\d_]+))?/),d=!c&&r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),p="MacIntel"===i;return!c&&p&&t.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf("".concat(s,"x").concat(a))>=0&&((c=r.match(/(Version)\/([\d.]+)/))||(c=[0,1,"13_0_0"]),p=!1),l&&"Win32"!==i&&(o.os="android",o.android=!0),(c||d||u)&&(o.os="ios",o.ios=!0),o}(e)),r}({userAgent:i.userAgent}),p.browser=function(){if(!o){var e,t;o={isSafari:(t=(e=L()).navigator.userAgent.toLowerCase()).indexOf("safari")>=0&&0>t.indexOf("chrome")&&0>t.indexOf("android"),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}return o}(),p.eventsListeners={},p.eventsAnyListeners=[],p.modules=x(p.__modules__),i.modules&&Array.isArray(i.modules)&&(t=p.modules).push.apply(t,x(i.modules));var f={};p.modules.forEach(function(e){var t;e({swiper:p,extendParams:(t=i,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.keys(e)[0],i=e[n];if("object"!=typeof i||null===i||(["navigation","pagination","scrollbar"].indexOf(n)>=0&&!0===t[n]&&(t[n]={auto:!0}),!(n in t&&"enabled"in i))){Y(f,e);return}!0===t[n]&&(t[n]={enabled:!0}),"object"!=typeof t[n]||"enabled"in t[n]||(t[n].enabled=!0),t[n]||(t[n]={enabled:!1}),Y(f,e)}),on:p.on.bind(p),once:p.once.bind(p),off:p.off.bind(p),emit:p.emit.bind(p)})});var h=Y({},ec,f);// Extend defaults with passed params
// Return app instance
return p.params=Y({},h,ed,i),p.originalParams=Y({},p.params),p.passedParams=Y({},i),p.params&&p.params.on&&Object.keys(p.params.on).forEach(function(e){p.on(e,p.params.on[e])}),p.params&&p.params.onAny&&p.onAny(p.params.onAny),// Save Dom lib
p.$=q,Object.assign(p,{enabled:p.params.enabled,el:n,// Classes
classNames:[],// Slides
slides:q(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],// isDirection
isHorizontal:function(){return"horizontal"===p.params.direction},isVertical:function(){return"vertical"===p.params.direction},// Indexes
activeIndex:0,realIndex:0,//
isBeginning:!0,isEnd:!1,// Props
translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,// Locks
allowSlideNext:p.params.allowSlideNext,allowSlidePrev:p.params.allowSlidePrev,// Touch Events
touchEvents:(p.touchEventsTouch={start:"touchstart",move:"touchmove",end:"touchend",cancel:"touchcancel"},p.touchEventsDesktop={start:"pointerdown",move:"pointermove",end:"pointerup"},p.support.touch||!p.params.simulateTouch?p.touchEventsTouch:p.touchEventsDesktop),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,// Form elements to match
focusableElements:p.params.focusableElements,// Last click time
lastClickTime:U(),clickTimeout:void 0,// Velocities
velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},// Clicks
allowClick:!0,// Touches
allowTouchMove:p.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},// Images
imagesToLoad:[],imagesLoaded:0}),p.emit("_swiper"),p.params.init&&p.init(),p}return f(e,[{key:"enable",value:function(){this.enabled||(this.enabled=!0,this.params.grabCursor&&this.setGrabCursor(),this.emit("enable"))}},{key:"disable",value:function(){this.enabled&&(this.enabled=!1,this.params.grabCursor&&this.unsetGrabCursor(),this.emit("disable"))}},{key:"setProgress",value:function(e,t){e=Math.min(Math.max(e,0),1);var n=this.minTranslate(),i=(this.maxTranslate()-n)*e+n;this.translateTo(i,void 0===t?0:t),this.updateActiveIndex(),this.updateSlidesClasses()}},{key:"emitContainerClasses",value:function(){var e=this;if(e.params._emitClasses&&e.el){var t=e.el.className.split(" ").filter(function(t){return 0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass)});e.emit("_containerClasses",t.join(" "))}}},{key:"getSlideClasses",value:function(e){var t=this;return e.className.split(" ").filter(function(e){return 0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass)}).join(" ")}},{key:"emitSlidesClasses",value:function(){var e=this;if(e.params._emitClasses&&e.el){var t=[];e.slides.each(function(n){var i=e.getSlideClasses(n);t.push({slideEl:n,classNames:i}),e.emit("_slideClass",n,i)}),e.emit("_slideClasses",t)}}},{key:"slidesPerViewDynamic",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"current",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.params,i=this.slides,r=this.slidesGrid,o=this.slidesSizesGrid,s=this.size,a=this.activeIndex,l=1;if(n.centeredSlides){for(var c,u=i[a].swiperSlideSize,d=a+1;d<i.length;d+=1)i[d]&&!c&&(u+=i[d].swiperSlideSize,l+=1,u>s&&(c=!0));for(var p=a-1;p>=0;p-=1)i[p]&&!c&&(u+=i[p].swiperSlideSize,l+=1,u>s&&(c=!0))}else // eslint-disable-next-line
if("current"===e)for(var f=a+1;f<i.length;f+=1)(t?r[f]+o[f]-r[a]<s:r[f]-r[a]<s)&&(l+=1);else for(var h=a-1;h>=0;h-=1)r[a]-r[h]<s&&(l+=1);return l}},{key:"update",value:function(){var e=function(){var e=Math.min(Math.max(t.rtlTranslate?-1*t.translate:t.translate,t.maxTranslate()),t.minTranslate());t.setTranslate(e),t.updateActiveIndex(),t.updateSlidesClasses()},t=this;if(t&&!t.destroyed){var n=t.snapGrid,i=t.params;// Breakpoints
i.breakpoints&&t.setBreakpoint(),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.params.freeMode&&t.params.freeMode.enabled?(e(),t.params.autoHeight&&t.updateAutoHeight()):(("auto"===t.params.slidesPerView||t.params.slidesPerView>1)&&t.isEnd&&!t.params.centeredSlides?t.slideTo(t.slides.length-1,0,!1,!0):t.slideTo(t.activeIndex,0,!1,!0))||e(),i.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}}},{key:"changeDirection",value:function(e){var t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],n=this.params.direction;return e||(e="horizontal"===n?"vertical":"horizontal"),e===n||"horizontal"!==e&&"vertical"!==e||(this.$el.removeClass("".concat(this.params.containerModifierClass).concat(n)).addClass("".concat(this.params.containerModifierClass).concat(e)),this.emitContainerClasses(),this.params.direction=e,this.slides.each(function(t){"vertical"===e?t.style.width="":t.style.height=""}),this.emit("changeDirection"),t&&this.update()),this}},{key:"mount",value:function(e){var t=this;if(t.mounted)return!0;// Find el
var n=q(e||t.params.el);if(!(e=n[0]))return!1;e.swiper=t;var i=function(){return".".concat((t.params.wrapperClass||"").trim().split(" ").join("."))},r=function(){if(e&&e.shadowRoot&&e.shadowRoot.querySelector){var t=q(e.shadowRoot.querySelector(i()));// Children needs to return slot items
return t.children=function(e){return n.children(e)},t}return n.children(i())}();if(0===r.length&&t.params.createElements){var o=A().createElement("div");r=q(o),o.className=t.params.wrapperClass,n.append(o),n.children(".".concat(t.params.slideClass)).each(function(e){r.append(e)})}return Object.assign(t,{$el:n,el:e,$wrapperEl:r,wrapperEl:r[0],mounted:!0,// RTL
rtl:"rtl"===e.dir.toLowerCase()||"rtl"===n.css("direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===e.dir.toLowerCase()||"rtl"===n.css("direction")),wrongRTL:"-webkit-box"===r.css("display")}),!0}},{key:"init",value:function(e){return this.initialized||!1===this.mount(e)||(this.emit("beforeInit"),this.params.breakpoints&&this.setBreakpoint(),// Add Classes
this.addClasses(),this.params.loop&&this.loopCreate(),// Update size
this.updateSize(),this.updateSlides(),this.params.watchOverflow&&this.checkOverflow(),this.params.grabCursor&&this.enabled&&this.setGrabCursor(),this.params.preloadImages&&this.preloadImages(),this.params.loop?this.slideTo(this.params.initialSlide+this.loopedSlides,0,this.params.runCallbacksOnInit,!1,!0):this.slideTo(this.params.initialSlide,0,this.params.runCallbacksOnInit,!1,!0),// Attach events
this.attachEvents(),this.initialized=!0,this.emit("init"),this.emit("afterInit")),this}},{key:"destroy",value:function(){var e=!(arguments.length>0)||void 0===arguments[0]||arguments[0],t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],n=this,i=n.params,r=n.$el,o=n.$wrapperEl,s=n.slides;return void 0===n.params||n.destroyed||(n.emit("beforeDestroy"),n.initialized=!1,n.detachEvents(),i.loop&&n.loopDestroy(),t&&(n.removeClasses(),r.removeAttr("style"),o.removeAttr("style"),s&&s.length&&s.removeClass([i.slideVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),n.emit("destroy"),Object.keys(n.eventsListeners).forEach(function(e){n.off(e)}),!1!==e&&(n.$el[0].swiper=null,function(e){Object.keys(e).forEach(function(t){try{e[t]=null}catch(e){}try{delete e[t]}catch(e){}})}(n)),n.destroyed=!0),null}}],[{key:"extendDefaults",value:function(e){Y(ed,e)}},{key:"extendedDefaults",get:function(){return ed}},{key:"defaults",get:function(){return ec}},{key:"installModule",value:function(t){e.prototype.__modules__||(e.prototype.__modules__=[]);var n=e.prototype.__modules__;"function"==typeof t&&0>n.indexOf(t)&&n.push(t)}},{key:"use",value:function(t){return Array.isArray(t)?t.forEach(function(t){return e.installModule(t)}):e.installModule(t),e}}]),e}();function ef(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return".".concat(e.trim().replace(/([\.:!\/])/g,"\\$1")// eslint-disable-line
.replace(/ /g,"."))}function eh(e){var t,n=e.swiper,i=e.extendParams,r=e.on,o=e.emit,s=function(){return!n.params.pagination.el||!n.pagination.el||!n.pagination.$el||0===n.pagination.$el.length},a=function(e,t){var i=n.params.pagination.bulletActiveClass;e[t]().addClass("".concat(i,"-").concat(t))[t]().addClass("".concat(i,"-").concat(t,"-").concat(t))},l=function(){// Render || Update Pagination bullets/items
var e=n.rtl,i=n.params.pagination;if(!s()){var r=n.virtual&&n.params.virtual.enabled?n.virtual.slides.length:n.slides.length,l=n.pagination.$el,c=n.params.loop?Math.ceil((r-2*n.loopedSlides)/n.params.slidesPerGroup):n.snapGrid.length;// Types
if(n.params.loop?((u=Math.ceil((n.activeIndex-n.loopedSlides)/n.params.slidesPerGroup))>r-1-2*n.loopedSlides&&(u-=r-2*n.loopedSlides),u>c-1&&(u-=c),u<0&&"bullets"!==n.params.paginationType&&(u=c+u)):u=void 0!==n.snapIndex?n.snapIndex:n.activeIndex||0,"bullets"===i.type&&n.pagination.bullets&&n.pagination.bullets.length>0){var u,d,p,h,v=n.pagination.bullets;if(i.dynamicBullets&&(t=v.eq(0)[n.isHorizontal()?"outerWidth":"outerHeight"](!0),l.css(n.isHorizontal()?"width":"height","".concat(t*(i.dynamicMainBullets+4),"px")),i.dynamicMainBullets>1&&void 0!==n.previousIndex&&((f+=u-(n.previousIndex-n.loopedSlides||0))>i.dynamicMainBullets-1?f=i.dynamicMainBullets-1:f<0&&(f=0)),h=((p=(d=Math.max(u-f,0))+(Math.min(v.length,i.dynamicMainBullets)-1))+d)/2),v.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map(function(e){return"".concat(i.bulletActiveClass).concat(e)}).join(" ")),l.length>1)v.each(function(e){var t=q(e),n=t.index();n===u&&t.addClass(i.bulletActiveClass),i.dynamicBullets&&(n>=d&&n<=p&&t.addClass("".concat(i.bulletActiveClass,"-main")),n===d&&a(t,"prev"),n===p&&a(t,"next"))});else{var g=v.eq(u),m=g.index();if(g.addClass(i.bulletActiveClass),i.dynamicBullets){for(var y=v.eq(d),b=v.eq(p),w=d;w<=p;w+=1)v.eq(w).addClass("".concat(i.bulletActiveClass,"-main"));if(n.params.loop){if(m>=v.length){for(var S=i.dynamicMainBullets;S>=0;S-=1)v.eq(v.length-S).addClass("".concat(i.bulletActiveClass,"-main"));v.eq(v.length-i.dynamicMainBullets-1).addClass("".concat(i.bulletActiveClass,"-prev"))}else a(y,"prev"),a(b,"next")}else a(y,"prev"),a(b,"next")}}if(i.dynamicBullets){var x=Math.min(v.length,i.dynamicMainBullets+4),T=(t*x-t)/2-h*t;v.css(n.isHorizontal()?e?"right":"left":"top","".concat(T,"px"))}}if("fraction"===i.type&&(l.find(ef(i.currentClass)).text(i.formatFractionCurrent(u+1)),l.find(ef(i.totalClass)).text(i.formatFractionTotal(c))),"progressbar"===i.type){E=i.progressbarOpposite?n.isHorizontal()?"vertical":"horizontal":n.isHorizontal()?"horizontal":"vertical";var E,C=(u+1)/c,A=1,k=1;"horizontal"===E?A=C:k=C,l.find(ef(i.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(".concat(A,") scaleY(").concat(k,")")).transition(n.params.speed)}"custom"===i.type&&i.renderCustom?(l.html(i.renderCustom(n,u+1,c)),o("paginationRender",l[0])):o("paginationUpdate",l[0]),n.params.watchOverflow&&n.enabled&&l[n.isLocked?"addClass":"removeClass"](i.lockClass)}},c=function(){// Render Container
var e=n.params.pagination;if(!s()){var t=n.virtual&&n.params.virtual.enabled?n.virtual.slides.length:n.slides.length,i=n.pagination.$el,r="";if("bullets"===e.type){var a=n.params.loop?Math.ceil((t-2*n.loopedSlides)/n.params.slidesPerGroup):n.snapGrid.length;n.params.freeMode&&n.params.freeMode.enabled&&!n.params.loop&&a>t&&(a=t);for(var l=0;l<a;l+=1)e.renderBullet?r+=e.renderBullet.call(n,l,e.bulletClass):r+="<".concat(e.bulletElement,' class="').concat(e.bulletClass,'"></').concat(e.bulletElement,">");i.html(r),n.pagination.bullets=i.find(ef(e.bulletClass))}"fraction"===e.type&&(r=e.renderFraction?e.renderFraction.call(n,e.currentClass,e.totalClass):'<span class="'.concat(e.currentClass,'"></span>')+" / "+'<span class="'.concat(e.totalClass,'"></span>'),i.html(r)),"progressbar"===e.type&&(r=e.renderProgressbar?e.renderProgressbar.call(n,e.progressbarFillClass):'<span class="'.concat(e.progressbarFillClass,'"></span>'),i.html(r)),"custom"!==e.type&&o("paginationRender",n.pagination.$el[0])}},u=function(){n.params.pagination=(e=n.originalParams.pagination,t=n.params.pagination,i={el:"swiper-pagination"},r=A(),n.params.createElements&&Object.keys(i).forEach(function(o){if(!t[o]&&!0===t.auto){var s=n.$el.children(".".concat(i[o]))[0];s||((s=r.createElement("div")).className=i[o],n.$el.append(s)),t[o]=s,e[o]=s}}),t);var e,t,i,r,o=n.params.pagination;if(o.el){var s=q(o.el);0===s.length||(n.params.uniqueNavElements&&"string"==typeof o.el&&s.length>1&&(s=n.$el.find(o.el)).length>1&&(s=s.filter(function(e){return q(e).parents(".swiper")[0]===n.el})),"bullets"===o.type&&o.clickable&&s.addClass(o.clickableClass),s.addClass(o.modifierClass+o.type),s.addClass(o.modifierClass+n.params.direction),"bullets"===o.type&&o.dynamicBullets&&(s.addClass("".concat(o.modifierClass).concat(o.type,"-dynamic")),f=0,o.dynamicMainBullets<1&&(o.dynamicMainBullets=1)),"progressbar"===o.type&&o.progressbarOpposite&&s.addClass(o.progressbarOppositeClass),o.clickable&&s.on("click",ef(o.bulletClass),function(e){e.preventDefault();var t=q(this).index()*n.params.slidesPerGroup;n.params.loop&&(t+=n.loopedSlides),n.slideTo(t)}),Object.assign(n.pagination,{$el:s,el:s[0]}),n.enabled||s.addClass(o.lockClass))}},d=function(){var e=n.params.pagination;if(!s()){var t=n.pagination.$el;t.removeClass(e.hiddenClass),t.removeClass(e.modifierClass+e.type),t.removeClass(e.modifierClass+n.params.direction),n.pagination.bullets&&n.pagination.bullets.removeClass&&n.pagination.bullets.removeClass(e.bulletActiveClass),e.clickable&&t.off("click",ef(e.bulletClass))}},p="swiper-pagination";i({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",// 'bullets' or 'progressbar' or 'fraction' or 'custom'
dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:function(e){return e},formatFractionTotal:function(e){return e},bulletClass:"".concat(p,"-bullet"),bulletActiveClass:"".concat(p,"-bullet-active"),modifierClass:"".concat(p,"-"),currentClass:"".concat(p,"-current"),totalClass:"".concat(p,"-total"),hiddenClass:"".concat(p,"-hidden"),progressbarFillClass:"".concat(p,"-progressbar-fill"),progressbarOppositeClass:"".concat(p,"-progressbar-opposite"),clickableClass:"".concat(p,"-clickable"),lockClass:"".concat(p,"-lock"),horizontalClass:"".concat(p,"-horizontal"),verticalClass:"".concat(p,"-vertical")}}),n.pagination={el:null,$el:null,bullets:[]};var f=0;r("init",function(){u(),c(),l()}),r("activeIndexChange",function(){n.params.loop?l():void 0===n.snapIndex&&l()}),r("snapIndexChange",function(){n.params.loop||l()}),r("slidesLengthChange",function(){n.params.loop&&(c(),l())}),r("snapGridLengthChange",function(){n.params.loop||(c(),l())}),r("destroy",function(){d()}),r("enable disable",function(){var e=n.pagination.$el;e&&e[n.enabled?"removeClass":"addClass"](n.params.pagination.lockClass)}),r("lock unlock",function(){l()}),r("click",function(e,t){var i=t.target,r=n.pagination.$el;if(n.params.pagination.el&&n.params.pagination.hideOnClick&&r.length>0&&!q(i).hasClass(n.params.pagination.bulletClass)){if(n.navigation&&(n.navigation.nextEl&&i===n.navigation.nextEl||n.navigation.prevEl&&i===n.navigation.prevEl))return;!0===r.hasClass(n.params.pagination.hiddenClass)?o("paginationShow"):o("paginationHide"),r.toggleClass(n.params.pagination.hiddenClass)}}),Object.assign(n.pagination,{render:c,update:l,init:u,destroy:d})}/* eslint no-underscore-dangle: "off" *//* eslint no-use-before-define: "off" */function ev(e){var t,n=e.swiper,i=e.extendParams,r=e.on,o=e.emit,s=function(){return void 0===t&&!n.autoplay.running&&(n.autoplay.running=!0,o("autoplayStart"),h(),!0)},a=function(){return!!n.autoplay.running&&void 0!==t&&(t&&(clearTimeout(t),t=void 0),n.autoplay.running=!1,o("autoplayStop"),!0)},l=function(e){n.autoplay.running&&(n.autoplay.paused||(t&&clearTimeout(t),n.autoplay.paused=!0,0!==e&&n.params.autoplay.waitForTransition?["transitionend","webkitTransitionEnd"].forEach(function(e){n.$wrapperEl[0].addEventListener(e,v)}):(n.autoplay.paused=!1,h())))},c=function(){var e=A();"hidden"===e.visibilityState&&n.autoplay.running&&l(),"visible"===e.visibilityState&&n.autoplay.paused&&(h(),n.autoplay.paused=!1)},u=function(){n.params.autoplay.disableOnInteraction?a():l(),["transitionend","webkitTransitionEnd"].forEach(function(e){n.$wrapperEl[0].removeEventListener(e,v)})},d=function(){n.params.autoplay.disableOnInteraction||(n.autoplay.paused=!1,h())},p=function(){n.params.autoplay.pauseOnMouseEnter&&(n.$el.on("mouseenter",u),n.$el.on("mouseleave",d))},f=function(){n.$el.off("mouseenter",u),n.$el.off("mouseleave",d)};function h(){var e=n.slides.eq(n.activeIndex),i=n.params.autoplay.delay;e.attr("data-swiper-autoplay")&&(i=e.attr("data-swiper-autoplay")||n.params.autoplay.delay),clearTimeout(t),t=G(function(){var e;n.params.autoplay.reverseDirection?n.params.loop?(n.loopFix(),e=n.slidePrev(n.params.speed,!0,!0),o("autoplay")):n.isBeginning?n.params.autoplay.stopOnLastSlide?a():(e=n.slideTo(n.slides.length-1,n.params.speed,!0,!0),o("autoplay")):(e=n.slidePrev(n.params.speed,!0,!0),o("autoplay")):n.params.loop?(n.loopFix(),e=n.slideNext(n.params.speed,!0,!0),o("autoplay")):n.isEnd?n.params.autoplay.stopOnLastSlide?a():(e=n.slideTo(0,n.params.speed,!0,!0),o("autoplay")):(e=n.slideNext(n.params.speed,!0,!0),o("autoplay")),n.params.cssMode&&n.autoplay.running?h():!1===e&&h()},i)}function v(e){n&&!n.destroyed&&n.$wrapperEl&&e.target===n.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach(function(e){n.$wrapperEl[0].removeEventListener(e,v)}),n.autoplay.paused=!1,n.autoplay.running?h():a())}n.autoplay={running:!1,paused:!1},i({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}}),r("init",function(){n.params.autoplay.enabled&&(s(),A().addEventListener("visibilitychange",c),p())}),r("beforeTransitionStart",function(e,t,i){n.autoplay.running&&(i||!n.params.autoplay.disableOnInteraction?n.autoplay.pause(t):a())}),r("sliderFirstMove",function(){n.autoplay.running&&(n.params.autoplay.disableOnInteraction?a():l())}),r("touchEnd",function(){n.params.cssMode&&n.autoplay.paused&&!n.params.autoplay.disableOnInteraction&&h()}),r("destroy",function(){f(),n.autoplay.running&&a(),A().removeEventListener("visibilitychange",c)}),Object.assign(n.autoplay,{pause:l,run:h,start:s,stop:a})}function eg(e){var t=e.effect,n=e.swiper,i=e.on,r=e.setTranslate,o=e.setTransition,s=e.overwriteParams,a=e.perspective;i("beforeInit",function(){if(n.params.effect===t){n.classNames.push("".concat(n.params.containerModifierClass).concat(t)),a&&a()&&n.classNames.push("".concat(n.params.containerModifierClass,"3d"));var e=s?s():{};Object.assign(n.params,e),Object.assign(n.originalParams,e)}}),i("setTranslate",function(){n.params.effect===t&&r()}),i("setTransition",function(e,i){n.params.effect===t&&o(i)})}function em(e,t){return e.transformEl?t.find(e.transformEl).css({"backface-visibility":"hidden","-webkit-backface-visibility":"hidden"}):t}function ey(e){var t=e.swiper,n=e.duration,i=e.transformEl,r=e.allSlides,o=t.slides,s=t.activeIndex,a=t.$wrapperEl;if(t.params.virtualTranslate&&0!==n){var l=!1;(r?i?o.find(i):o:i?o.eq(s).find(i):o.eq(s)).transitionEnd(function(){if(!l&&t&&!t.destroyed){l=!0,t.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],n=0;n<e.length;n+=1)a.trigger(e[n])}})}}function eb(e){var t=e.swiper,n=e.extendParams,i=e.on;n({fadeEffect:{crossFade:!1,transformEl:null}}),eg({effect:"fade",swiper:t,on:i,setTranslate:function(){for(var e=t.slides,n=t.params.fadeEffect,i=0;i<e.length;i+=1){var r=t.slides.eq(i),o=-r[0].swiperSlideOffset;t.params.virtualTranslate||(o-=t.translate);var s=0;t.isHorizontal()||(s=o,o=0);var a=t.params.fadeEffect.crossFade?Math.max(1-Math.abs(r[0].progress),0):1+Math.min(Math.max(r[0].progress,-1),0);em(n,r).css({opacity:a}).transform("translate3d(".concat(o,"px, ").concat(s,"px, 0px)"))}},setTransition:function(e){var n=t.params.fadeEffect.transformEl;(n?t.slides.find(n):t.slides).transition(e),ey({swiper:t,duration:e,transformEl:n,allSlides:!0})},overwriteParams:function(){return{slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode}}})}function ew(e){var t=e.swiper,n=e.extendParams,i=e.on;n({creativeEffect:{transformEl:null,limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}}),eg({effect:"creative",swiper:t,on:i,setTranslate:function(){var e=t.slides,n=t.$wrapperEl,i=t.slidesSizesGrid,r=t.params.creativeEffect,o=r.progressMultiplier,s=t.params.centeredSlides;if(s){var a=i[0]/2-t.params.slidesOffsetBefore||0;n.transform("translateX(calc(50% - ".concat(a,"px))"))}for(var l=0;l<e.length;l+=1)!function(n){var i=e.eq(n),a=i[0].progress,l=Math.min(Math.max(i[0].progress,-r.limitProgress),r.limitProgress),c=l;s||(c=Math.min(Math.max(i[0].originalProgress,-r.limitProgress),r.limitProgress));var u=i[0].swiperSlideOffset,d=[t.params.cssMode?-u-t.translate:-u,0,0],p=[0,0,0],f=!1;t.isHorizontal()||(d[1]=d[0],d[0]=0);var h={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};l<0?(h=r.next,f=!0):l>0&&(h=r.prev,f=!0),d.forEach(function(e,t){var n;d[t]="calc(".concat(e,"px + (").concat("string"==typeof(n=h.translate[t])?n:"".concat(n,"px")," * ").concat(Math.abs(l*o),"))")}),p.forEach(function(e,t){p[t]=h.rotate[t]*Math.abs(l*o)}),i[0].style.zIndex=-Math.abs(Math.round(a))+e.length;var v=d.join(", "),g="rotateX(".concat(p[0],"deg) rotateY(").concat(p[1],"deg) rotateZ(").concat(p[2],"deg)"),m=c<0?"scale(".concat(1+(1-h.scale)*c*o,")"):"scale(".concat(1-(1-h.scale)*c*o,")"),y=c<0?1+(1-h.opacity)*c*o:1-(1-h.opacity)*c*o,b="translate3d(".concat(v,") ").concat(g," ").concat(m);if(f&&h.shadow||!f){var w,S,x,T=i.children(".swiper-slide-shadow");if(0===T.length&&h.shadow&&((x=(S=r.transformEl?i.find(r.transformEl):i).children(".".concat("swiper-slide-shadow".concat(w?"-".concat(w):"")))).length||(x=q('<div class="swiper-slide-shadow'.concat(w?"-".concat(w):"",'"></div>')),S.append(x)),T=x),T.length){var E=r.shadowPerProgress?l*(1/r.limitProgress):l;T[0].style.opacity=Math.min(Math.max(Math.abs(E),0),1)}}var C=em(r,i);C.transform(b).css({opacity:y}),h.origin&&C.css("transform-origin",h.origin)}(l)},setTransition:function(e){var n=t.params.creativeEffect.transformEl;(n?t.slides.find(n):t.slides).transition(e).find(".swiper-slide-shadow").transition(e),ey({swiper:t,duration:e,transformEl:n,allSlides:!0})},perspective:function(){return t.params.creativeEffect.perspective},overwriteParams:function(){return{watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode}}})}Object.keys(eu).forEach(function(e){Object.keys(eu[e]).forEach(function(t){ep.prototype[t]=eu[e][t]})}),ep.use([function(e){var t=e.swiper,n=e.on,i=e.emit,r=L(),o=null,s=function(){t&&!t.destroyed&&t.initialized&&(i("beforeResize"),i("resize"))},a=function(){t&&!t.destroyed&&t.initialized&&(o=new ResizeObserver(function(e){var n=t.width,i=t.height,r=n,o=i;e.forEach(function(e){var n=e.contentBoxSize,i=e.contentRect,s=e.target;s&&s!==t.el||(r=i?i.width:(n[0]||n).inlineSize,o=i?i.height:(n[0]||n).blockSize)}),(r!==n||o!==i)&&s()})).observe(t.el)},l=function(){o&&o.unobserve&&t.el&&(o.unobserve(t.el),o=null)},c=function(){t&&!t.destroyed&&t.initialized&&i("orientationchange")};n("init",function(){if(t.params.resizeObserver&&void 0!==r.ResizeObserver){a();return}r.addEventListener("resize",s),r.addEventListener("orientationchange",c)}),n("destroy",function(){l(),r.removeEventListener("resize",s),r.removeEventListener("orientationchange",c)})},function(e){var t=e.swiper,n=e.extendParams,i=e.on,r=e.emit,o=[],s=L(),a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=new(s.MutationObserver||s.WebkitMutationObserver)(function(e){// The observerUpdate event should only be triggered
// once despite the number of mutations.  Additional
// triggers are redundant and are very costly
if(1===e.length){r("observerUpdate",e[0]);return}var t=function(){r("observerUpdate",e[0])};s.requestAnimationFrame?s.requestAnimationFrame(t):s.setTimeout(t,0)});n.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),o.push(n)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),i("init",function(){if(t.params.observer){if(t.params.observeParents)for(var e=t.$el.parents(),n=0;n<e.length;n+=1)a(e[n]);// Observe container
a(t.$el[0],{childList:t.params.observeSlideChildren}),a(t.$wrapperEl[0],{attributes:!1})}}),i("destroy",function(){o.forEach(function(e){e.disconnect()}),o.splice(0,o.length)})}]);var g=c("jxMcu");window.$=window.jQuery=/*@__PURE__*/t(g);var eS=/*#__PURE__*/function(){function e(){var n=this;u(this,e),this.header=document.querySelector(".header"),this.deliverySlider=new ep(".delivery",{modules:[ev,eh,eb,ew],loop:!0,centeredSlides:!0,effect:"creative",grabCursor:!0,autoplay:{delay:4e3,disableOnInteraction:!1},pagination:{el:".delivery-pagination",clickable:!0},creativeEffect:{limitProgress:2,prev:{translate:["-100%",-60,-60]},next:{translate:["100%",-60,-60]}},breakpoints:{641:{slidesPerView:1.5,spaceBetween:10,creativeEffect:{limitProgress:2,prev:{translate:["-90%",-40,-40]},next:{translate:["90%",-40,-40]}}},769:{spaceBetween:40,slidesPerView:2,creativeEffect:{limitProgress:2,prev:{translate:["-90%",-40,-40]},next:{translate:["90%",-40,-40]}}}}}),/*@__PURE__*/t(g)(".delivery-next-btn").on("click",function(){n.deliverySlider.slideNext()}),/*@__PURE__*/t(g)(".delivery-slide").on("click",function(){n.deliverySlider.slideNext()}),this.aboutSlider=new ep(".about",{modules:[ev,eh,eb,ew],slidesPerView:1,loop:!0,grabCursor:!0,direction:"horizontal",pagination:{el:".about-pagination",clickable:!0},breakpoints:{640:{direction:"vertical"}}}),/*@__PURE__*/t(g)(".about-slide").on("click",function(){n.aboutSlider.slideNext()}),this.geographySlider=new ep(".geography",{modules:[ev,eh,eb,ew],effect:"fade",loop:!0,observer:!0,grabCursor:!0,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{el:".geography-pagination",bulletClass:"swiper-pagination-bullet-custom",bulletActiveClass:"swiper-pagination-bullet-custom--active",renderBullet:function(e,t){return'<div class="'.concat(t,'" data-index="').concat(e,'">\n                          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="2" viewBox="0 0 80 2" fill="none">\n                            <line y1="1" x2="0" y2="1" stroke="white" stroke-width="2"/>\n                          </svg>\n                        </div>')},clickable:!0},on:{init:function(){var e;this.el.style.setProperty("--delay",this.params.autoplay.delay),document.querySelectorAll(".swiper-pagination-bullet-custom line").forEach(function(e){e.setAttribute("x2","0")}),null===(e=document.querySelector(".swiper-pagination-bullet-custom.swiper-pagination-bullet-custom--active line"))||void 0===e||e.setAttribute("x2","80")},slideChange:function(){var e;document.querySelectorAll(".swiper-pagination-bullet-custom line").forEach(function(e){e.setAttribute("x2","0")}),null===(e=document.querySelector(".swiper-pagination-bullet-custom.swiper-pagination-bullet-custom--active line"))||void 0===e||e.setAttribute("x2","80")}}});var i=this.header;this.geographySlider,/*@__PURE__*/t(g)(".geography-slide").on("click",function(){n.geographySlider.slideNext()}),window.innerWidth>1366&&(this.fullPageSlider=/*@__PURE__*/t(y)("#fullpage",{navigation:!1,//scrollOverflow: true,
onLeave:function(e,t,n,r,o){!0===t.isLast?i.classList.add("close"):document.querySelector(".header.close")&&i.classList.remove("close");/*if (document.querySelector(".fp-viewing-1") && document.querySelector(".geography")) {
            geographySlider.slideToLoop(0, 0)
          }
          if (document.querySelector(".fp-viewing-3") && document.querySelector(".geography")) {
            geographySlider.slideToLoop(0, 0)
          }*/}}),/*@__PURE__*/t(g)(".move-down").on("click",function(){n.fullPageSlider.moveSectionDown()})),window.innerWidth<=1366&&this.handleHeaderAfterScroll(i)}return f(e,[{key:"handleHeaderAfterScroll",value:function(e){window.addEventListener("scroll",function(){var n=/*@__PURE__*/t(g)(".footer"),i=/*@__PURE__*/t(g)(window).scrollTop(),r=/*@__PURE__*/t(g)(window).height(),o=n.offset().top,s=n.outerHeight();i+r>=o&&i+r-2*s<=o+(r-s)?e.classList.add("close"):e.classList.remove("close")})}}]),e}();window.addEventListener("load",function(){new eS,new d,new m})}();//# sourceMappingURL=about.191f758f.js.map

//# sourceMappingURL=about.191f758f.js.map
