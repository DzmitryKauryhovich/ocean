(this["webpackJsonpocean-ui"]=this["webpackJsonpocean-ui"]||[]).push([[7],{147:function(e,n,t){var r=t(148),a=t(149),i=t(150),o=t(152);e.exports=function(e,n){return r(e)||a(e,n)||i(e,n)||o()}},148:function(e,n){e.exports=function(e){if(Array.isArray(e))return e}},149:function(e,n){e.exports=function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(t.push(o.value),!n||t.length!==n);r=!0);}catch(u){a=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return t}}},150:function(e,n,t){var r=t(151);e.exports=function(e,n){if(e){if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}},151:function(e,n){e.exports=function(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}},152:function(e,n){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},175:function(e,n,t){"use strict";t.d(n,"a",(function(){return E})),t.d(n,"b",(function(){return L}));var r=t(0),a=t.n(r),i=t(26),o=t(55),c=t(43),u=t(199),l=t(44),s=t(2),f=t(1);function d(){var e=Object(s.a)(["\n  color: white;\n  a {\n    color: white;\n  }\n"]);return d=function(){return e},e}var v=f.default.div(d()),g=a.a.memo((function(e){var n=Object(u.a)("translations:trainingLibrary").t,t=e.loading,r=e.error,i=e.categories;return t?a.a.createElement("div",null,"loading..."):r?a.a.createElement("div",null,r.error):i?a.a.createElement(v,null,a.a.createElement("div",null,"Filter - Training, category or course..."),a.a.createElement("div",null,n("translations:trainingLibrary.allTrainingSubjects")),a.a.createElement("br",null),i.map((function(e){var n=e.id,t=e.name,r=e.moduleIds;return a.a.createElement(c.a,{to:"".concat(l.a.modules,"/").concat(n),key:n},a.a.createElement("div",null,"Cat: ",t," (",null===r||void 0===r?void 0:r.length,")"))}))):a.a.createElement("div",null,"no categories")})),m=t(7);function b(){var e=Object(s.a)(["\n  color: white;\n  a {\n    color: white;\n  }\n"]);return b=function(){return e},e}var p=f.default.div(b()),y=a.a.memo((function(){var e=Object(u.a)("translations:login").t,n=[{id:1,name:e("translations:trainingLibrary.elearning"),count:153},{id:2,name:e("translations:trainingLibrary.electronicDistanceCourse"),count:24},{id:3,name:e("translations:trainingLibrary.rapidElearning"),count:12},{id:4,name:e("translations:trainingLibrary.pocketGuides"),count:8},{id:5,name:e("translations:trainingLibrary.learningFilms"),count:19},{id:6,name:e("translations:trainingLibrary.surveys"),count:25}].sort(m.c.sortAlphabet("name"));return a.a.createElement(p,null,a.a.createElement("div",null,e("translations:trainingLibrary.trainingTypes")),a.a.createElement("br",null),n.map((function(e){var n=e.id,t=e.name,r=e.count;return a.a.createElement(c.a,{to:"".concat(l.a.modules,"/").concat(n),key:n},a.a.createElement("div",null,"Type: ",t," (",r,")"))})))}));function O(){var e=Object(s.a)(["\n  color: white;\n  a {\n    color: white;\n  }\n"]);return O=function(){return e},e}var h=f.default.div(O()),j=a.a.memo((function(e){var n=e.loading,t=e.error,r=e.modules,i=e.categoryName;if(n)return a.a.createElement("div",null,"loading...");if(t)return a.a.createElement("div",null,t.error);var o=null===r||void 0===r?void 0:r.length;return o?a.a.createElement(h,null,a.a.createElement("div",null,i),a.a.createElement("div",null,"Filter courses ..."),a.a.createElement("div",null,o," trainigs available"),a.a.createElement("br",null),null===r||void 0===r?void 0:r.map((function(e){var n=e.id,t=e.moduleName,r=e.discName,i=e.numberOfChapters,o=e.discRelease;return a.a.createElement(c.a,{to:"".concat(l.a.course,"/").concat(n),key:n},a.a.createElement("div",null,"Module: ",t," - ",r," (",i,"/",o,")"))}))):a.a.createElement("div",null,"No trainigs available")})),E=function(){var e=Object(i.d)(),n=Object(i.e)((function(e){var n=e.trainingLibrary.trainingLibraryData,t=n.error,r=n.isLoading,a=n.result;return{error:t,isLoading:r,categories:Object(o.b)(a)}})),t=n.isLoading,c=n.error,u=n.categories;return Object(r.useEffect)((function(){u||e(Object(o.d)())}),[e,u]),a.a.createElement(a.a.Fragment,null,a.a.createElement(g,{loading:t,error:c,categories:u}),a.a.createElement("br",null),a.a.createElement(y,null))},w=t(36),L=function(){var e=Object(w.g)().categoryId,n=Object(i.d)(),t=Object(i.e)((function(n){var t,r=n.trainingLibrary.trainingLibraryData,a=r.error,i=r.isLoading,c=r.result;return{error:a,isLoading:i,categories:null===c||void 0===c?void 0:c.categoriesById,categoryName:null===c||void 0===c||null===(t=c.categoriesById[e])||void 0===t?void 0:t.name,modules:Object(o.c)(c,e)}})),c=t.isLoading,u=t.error,l=t.categories,s=t.modules,f=t.categoryName;return Object(r.useEffect)((function(){l||n(Object(o.d)())}),[n,l]),a.a.createElement(j,{loading:c,error:u,categoryName:f,modules:s})}},199:function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var r=t(147),a=t.n(r),i=t(56),o=t.n(i),c=t(0),u=t(45);function l(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"===typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var s={};function f(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"===typeof n[0]&&s[n[0]]||("string"===typeof n[0]&&(s[n[0]]=new Date),l.apply(void 0,n))}function d(e,n,t){e.loadNamespaces(n,(function(){if(e.isInitialized)t();else{e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}}))}function v(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n.languages||!n.languages.length)return f("i18n.languages were undefined or empty",n.languages),!0;var r=n.languages[0],a=!!n.options&&n.options.fallbackLng,i=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var o=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!o(n.isLanguageChangingTo,e))&&(!!n.hasResourceBundle(r,e)||(!n.services.backendConnector.backend||!(!o(r,e)||a&&!o(i,e))))}function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(t,!0).forEach((function(n){o()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,r=Object(c.useContext)(u.a),i=Object(u.d)()&&r||{},o=i.i18n,l=i.defaultNS,s=t||o||Object(u.e)();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new u.b),!s){f("You will need pass in an i18next instance by using initReactI18next");var g=function(e){return Array.isArray(e)?e[e.length-1]:e},b=[g,{},!1];return b.t=g,b.i18n={},b.ready=!1,b}var p=m({},Object(u.c)(),{},s.options.react,{},n),y=p.useSuspense,O=e||l||s.options&&s.options.defaultNS;O="string"===typeof O?[O]:O||["translation"],s.reportNamespaces.addUsedNamespaces&&s.reportNamespaces.addUsedNamespaces(O);var h=(s.isInitialized||s.initializedStoreOnce)&&O.every((function(e){return v(e,s,p)}));function j(){return{t:s.getFixedT(null,"fallback"===p.nsMode?O:O[0])}}var E=Object(c.useState)(j()),w=a()(E,2),L=w[0],C=w[1],N=Object(c.useRef)(!0);Object(c.useEffect)((function(){var e=p.bindI18n,n=p.bindI18nStore;function t(){N.current&&C(j())}return N.current=!0,h||y||d(s,O,(function(){N.current&&C(j())})),e&&s&&s.on(e,t),n&&s&&s.store.on(n,t),function(){N.current=!1,e&&s&&e.split(" ").forEach((function(e){return s.off(e,t)})),n&&s&&n.split(" ").forEach((function(e){return s.store.off(e,t)}))}}),[O.join()]);var k=[L.t,s,h];if(k.t=L.t,k.i18n=s,k.ready=h,h)return k;if(!h&&!y)return k;throw new Promise((function(e){d(s,O,(function(){N.current&&C(j()),e()}))}))}},218:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(175);n.default=function(){return a.a.createElement(i.b,null)}},43:function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var r=t(36),a=t(12),i=t(0),o=t.n(i),c=t(18),u=(t(5),t(4)),l=t(11),s=t(17);o.a.Component;o.a.Component;var f=function(e,n){return"function"===typeof e?e(n):e},d=function(e,n){return"string"===typeof e?Object(c.c)(e,null,null,n):e},v=function(e){return e},g=o.a.forwardRef;"undefined"===typeof g&&(g=v);var m=g((function(e,n){var t=e.innerRef,r=e.navigate,a=e.onClick,i=Object(l.a)(e,["innerRef","navigate","onClick"]),c=i.target,s=Object(u.a)({},i,{onClick:function(e){try{a&&a(e)}catch(n){throw e.preventDefault(),n}e.defaultPrevented||0!==e.button||c&&"_self"!==c||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return s.ref=v!==g&&n||t,o.a.createElement("a",s)}));var b=g((function(e,n){var t=e.component,a=void 0===t?m:t,i=e.replace,c=e.to,b=e.innerRef,p=Object(l.a)(e,["component","replace","to","innerRef"]);return o.a.createElement(r.e.Consumer,null,(function(e){e||Object(s.a)(!1);var t=e.history,r=d(f(c,e.location),e.location),l=r?t.createHref(r):"",m=Object(u.a)({},p,{href:l,navigate:function(){var n=f(c,e.location);(i?t.replace:t.push)(n)}});return v!==g?m.ref=n||b:m.innerRef=b,o.a.createElement(a,m)}))})),p=function(e){return e},y=o.a.forwardRef;"undefined"===typeof y&&(y=p);y((function(e,n){var t=e["aria-current"],a=void 0===t?"page":t,i=e.activeClassName,c=void 0===i?"active":i,v=e.activeStyle,g=e.className,m=e.exact,O=e.isActive,h=e.location,j=e.sensitive,E=e.strict,w=e.style,L=e.to,C=e.innerRef,N=Object(l.a)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return o.a.createElement(r.e.Consumer,null,(function(e){e||Object(s.a)(!1);var t=h||e.location,i=d(f(L,t),t),l=i.pathname,k=l&&l.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),S=k?Object(r.f)(t.pathname,{path:k,exact:m,sensitive:j,strict:E}):null,x=!!(O?O(S,t):S),A=x?function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter((function(e){return e})).join(" ")}(g,c):g,I=x?Object(u.a)({},w,{},v):w,R=Object(u.a)({"aria-current":x&&a||null,className:A,style:I,to:i},N);return p!==y?R.ref=n||C:R.innerRef=C,o.a.createElement(b,R)}))}))}}]);
//# sourceMappingURL=7.f5988439.chunk.js.map