(this["webpackJsonpocean-ui"]=this["webpackJsonpocean-ui"]||[]).push([[8],{136:function(n,e,t){"use strict";t.d(e,"a",(function(){return f})),t.d(e,"b",(function(){return C}));var r=t(0),o=t.n(r),a=t(2),c=t(1),i=t(191),u=t.n(i);function l(){var n=Object(a.a)(["\n  display: inline-block;\n  border: 0;\n  cursor: pointer;\n  transition: background 0.2s ease;\n  padding: 20px 60px;\n  ","\n\n  ","\n\n  \n\n  &:disabled {\n    cursor: default;\n    opacity: 0.75;\n  }\n\n  ","\n"]);return l=function(){return n},n}var s=c.default.button(l(),(function(n){var e=n.theme;return"\n    background: ".concat(e.color.oceanLight,";\n    border-radius: ").concat(e.borderRadius.base,";\n    font-weight: ").concat(e.fontWeight.bold,";\n    font-size: ").concat(e.fontSize.desktop.smaller,";\n    color: ").concat(e.color.white,";\n  ")}),(function(n){var e=n.theme;return"\n    &:hover:not(:disabled) {\n      background: ".concat(u()(e.color.oceanLight).darken(.15).string(),";\n    }\n  ")}),(function(n){return n.isFilled&&"width: 100%;"})),f=function(n){var e=n.title,t=n.disabled,r=n.onClick,a=n.type,c=n.fill;return o.a.createElement(s,{isFilled:c,type:a,disabled:t,onClick:r},e)},d=t(143),b=t(146);function p(){var n=Object(a.a)(["\n  width: 100%;\n  height: 60px;\n  position: relative;\n  ","\n\n  &:focus-within {\n    "," {\n      transform: translateY(-120%);\n      ","\n    }\n\n    "," {\n      svg g {\n        stroke: ",";\n      }\n    }\n  }\n\n  ","\n"]);return p=function(){return n},n}function h(){var n=Object(a.a)(["\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  left: 10px;\n  top: 10px;\n  width: 40px;\n  height: 40px;\n\n  svg {\n    width: 20px;\n    height: 20px;\n    g {\n      transition: all 0.3s ease;\n    }\n  }\n\n  ","\n"]);return h=function(){return n},n}function g(){var n=Object(a.a)(["\n  width: 100%;\n  height: 60px;\n  padding: 27px 20px 13px;\n  outline: 0;\n  background: transparent;\n  box-sizing: border-box;\n  border: 0;\n  line-height: 20px;\n  ","\n"]);return g=function(){return n},n}function m(){var n=Object(a.a)(["\n  position: absolute;\n  top: 50%;\n  left: 20px;\n  transform: translateY(-50%);\n  transition: all 0.3s ease;\n  ","\n\n  ","\n\n  ","\n"]);return m=function(){return n},n}function v(){var n=Object(a.a)(["\n  position: relative;\n\n  "," {\n    margin-top: -2px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n  }\n"]);return v=function(){return n},n}var k=c.default.div(v(),b.a),E=c.default.label(m(),(function(n){var e=n.theme;return"\n    font-size: ".concat(e.fontSize.desktop.small,";\n    color: ").concat(e.color.grey,";\n  ")}),(function(n){var e=n.hasValue,t=n.theme;return e&&"\n    transform: translateY(-120%);\n    font-size: ".concat(t.fontSize.desktop.tiny,";\n  ")}),(function(n){var e=n.hasError,t=n.theme;return e&&"\n    color: ".concat(t.color.danger,";\n  ")})),x=c.default.input(g(),(function(n){var e=n.theme;return"\n    font-weight: ".concat(e.fontWeight.bold,";\n    font-size: ").concat(e.fontSize.desktop.small,";\n    color: ").concat(e.color.black,";\n  ")})),w=c.default.div(h(),(function(n){var e=n.hasError,t=n.theme;return e&&"\n    svg g {\n      stroke: ".concat(t.color.danger,";\n    }\n  ")})),y=c.default.div(p(),(function(n){var e=n.theme;return"\n    background: ".concat(e.color.white,";\n    border-radius: ").concat(e.borderRadius.base,";\n  ")}),E,(function(n){var e=n.theme;return"\n        font-size: ".concat(e.fontSize.desktop.tiny,";\n        color: ").concat(e.color.oceanLight,";\n      ")}),w,(function(n){return n.theme.color.oceanLight}),(function(n){return n.hasIcon&&"\n    ".concat(x," { padding-left: 60px; }\n    ").concat(E," { left: 60px; }\n  ")})),C=function(n){var e=n.value,t=n.type,r=void 0===t?"text":t,a=n.title,c=n.disabled,i=n.error,u=n.onChange,l=n.onBlur,s=n.icon;return o.a.createElement(k,null,o.a.createElement(y,{hasIcon:!!s},s&&o.a.createElement(w,{hasError:!!i},s),o.a.createElement(E,{hasValue:!!e,hasError:!!i},a),o.a.createElement(x,{value:e,type:r,disabled:c,autoComplete:"off",autoCapitalize:"off",spellCheck:"false",autoCorrect:"off",onChange:u,onBlur:l})),o.a.createElement(d.a,{error:i}))}},143:function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var r=t(0),o=t.n(r),a=t(146),c=function(n){var e=n.error;return e?o.a.createElement(a.a,null,e):null}},146:function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var r=t(2);function o(){var n=Object(r.a)(["\n  position: relative;\n  padding: 10px 13px;\n  word-wrap: break-word;\n  ","\n"]);return o=function(){return n},n}var a=t(1).default.div(o(),(function(n){var e=n.theme;return"\n    background-color: ".concat(e.color.danger,";\n    ").concat(e.pattern,";\n    color: ").concat(e.color.white,";\n    border-radius: ").concat(e.borderRadius.base,";\n    font-size: ").concat(e.fontSize.desktop.small,";\n    font-weight: ").concat(e.fontWeight.bold,";\n  ")}))},216:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(26),c=t(8),i=t(76),u=t(7),l=t(75),s=t(136),f=t(31),d=t(44),b=function(n){var e=n.sessionToken,t=n.onLogout,r=n.onOpenTrainingLibrary,a=n.onShowToast;return o.a.createElement("div",{style:{color:"#ffffff",textAlign:"center"}},o.a.createElement("h1",null,"Session token:"),o.a.createElement("div",null,e),o.a.createElement("br",null),o.a.createElement(s.a,{title:"Logout",onClick:t}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(s.a,{title:"TrainingLibrary",onClick:r}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(s.a,{title:"Show Toast",onClick:a}))};e.default=function(){var n=Object(a.d)(),e=u.b.getSessionToken()||void 0;return Object(r.useEffect)((function(){i.b.success("Login successful. Please choose your course")}),[]),o.a.createElement(l.b,null,o.a.createElement(b,{sessionToken:e,onLogout:function(){n(Object(f.d)())},onOpenTrainingLibrary:function(){n(Object(c.d)(d.a.trainingLibrary))},onShowToast:function(){i.b.success("Success",{delay:100}),setTimeout((function(){return i.b.info("Info")}),500),setTimeout((function(){return i.b.warn("Warning",{hideProgressBar:!0,autoClose:!1,closeOnClick:!1})}),1e3),setTimeout((function(){return i.b.warn(o.a.createElement("div",null,"Custorm warning",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("p",null,"Some description"),o.a.createElement("br",null),o.a.createElement("button",{onClick:function(){return alert("click1")}},"my button"),o.a.createElement("button",{onClick:function(){return alert("click2")}},"my button")),{hideProgressBar:!0,autoClose:!1,closeOnClick:!1,style:{background:"grey",border:"2px solid white"}})}),1e3),setTimeout((function(){return i.b.error("Error",{closeOnClick:!1,hideProgressBar:!0,autoClose:!1,position:"top-right"})}),1500),setTimeout((function(){return Object(i.b)("\ud83e\udd84 Icon default!")}),2e3),setTimeout((function(){return i.b.dark("\ud83e\udd84 Dark")}),2500)},segmentId:"content"}))}}}]);
//# sourceMappingURL=8.5661e990.chunk.js.map