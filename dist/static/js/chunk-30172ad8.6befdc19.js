(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30172ad8"],{"149a":function(t,e,r){var o=r("24fb"),n=r("1de5"),i=r("dc5b"),c=r("0743"),a=r("0343"),f=r("d5fa"),s=r("1ec8"),l=r("9a7a");e=o(!1);var p=n(i),u=n(c),m=n(a),y=n(f),d=n(s),w=n(l);e.push([t.i,"@font-face{font-family:noto-sans-bold;src:url("+p+");font-weight:400;font-style:normal}@font-face{font-family:noto-sans-extrabold;src:url("+u+");font-weight:400;font-style:normal}@font-face{font-family:noto-sans-light;src:url("+m+");font-weight:400;font-style:normal}@font-face{font-family:noto-sans-medium;src:url("+y+");font-weight:400;font-style:normal}@font-face{font-family:noto-sans-regular;src:url("+d+");font-weight:400;font-style:normal}@font-face{font-family:noto-sans-semibold;src:url("+w+");font-weight:400;font-style:normal}.import-way-wrapper[data-v-7c6c0cc4]{height:100%;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.import-way-wrapper .import-way-inner-panel[data-v-7c6c0cc4]{width:100%;padding:0 .5rem;margin:auto 0}.import-way-wrapper .welcome-head[data-v-7c6c0cc4]{margin:0 auto .4rem auto}.import-way-wrapper .welcome-head .title[data-v-7c6c0cc4]{font-size:.45rem;color:#3d3d3d;line-height:.58rem;font-family:noto-sans-medium}.import-way-wrapper .welcome-head .title-tips[data-v-7c6c0cc4]{margin-top:.3rem;font-size:.16rem;color:#3d3d3d}.import-way-wrapper .welcome-head .create-profile[data-v-7c6c0cc4]{color:#b10b0b;cursor:pointer;background-color:transparent}.import-way-wrapper .profile-type[data-v-7c6c0cc4]{display:-webkit-box;display:-ms-flexbox;display:flex}.import-way-wrapper .profile-type .profile-item[data-v-7c6c0cc4]{text-align:center;width:2.6rem;height:2.6rem;margin-right:.42rem;background:#fff;border-radius:.05rem;cursor:pointer}.import-way-wrapper .profile-type .profile-item .img-box[data-v-7c6c0cc4]{height:1.44rem}.import-way-wrapper .profile-type .profile-item .img-box img[data-v-7c6c0cc4]{margin-top:.57rem;width:.58rem;height:.54rem}.import-way-wrapper .profile-type .profile-item .access-name[data-v-7c6c0cc4]{font-size:.2rem;font-family:noto-sans-medium;font-weight:500;color:#3d3d3d;line-height:.33rem}.import-way-wrapper .profile-type .profile-item .access-info[data-v-7c6c0cc4]{margin:.1rem auto 0 auto;width:2.6rem;font-size:.12rem;color:#3d3d3d;line-height:.22rem;opacity:.6}.import-way-wrapper .profile-type .profile-item[data-v-7c6c0cc4]:hover{-webkit-box-shadow:0 0 .05rem #3d3d3d;box-shadow:0 0 .05rem #3d3d3d}.import-way-wrapper .bottom-text[data-v-7c6c0cc4]{margin-top:.4rem;height:.2rem;font-size:.12rem;font-weight:400;color:#888}.import-way-wrapper .bottom-link[data-v-7c6c0cc4]{color:#3d3d3d;cursor:pointer;background-color:transparent}",""]),t.exports=e},"230f":function(t,e,r){"use strict";r("2b6d")},"2b6d":function(t,e,r){var o=r("149a");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=r("499e").default;n("4b515160",o,!0,{sourceMap:!1,shadowMode:!1})},de68:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"import-way-wrapper radius"},[r("div",{staticClass:"import-way-inner-panel"},[r("div",{staticClass:"welcome-head"},[r("p",{staticClass:"title"},[t._v(" "+t._s(t.$t("access_my_profile"))+" ")]),r("p",{staticClass:"title-tips"},[t._v(" "+t._s(t.$t("existing_profile"))+" "),r("span",{staticClass:"create-profile",on:{click:function(e){return t.$router.push({name:"profiles.login"})}}},[t._v(" "+t._s(t.$t("go_to_login"))+" ")])])]),r("div",{staticClass:"profile-type"},t._l(t.importInfoList,(function(e,o){return r("div",{key:o,staticClass:"profile-item",on:{click:function(r){return t.redirect(e.route)}}},[r("div",{staticClass:"img-box radius"},[r("img",{attrs:{src:e.image}})]),r("p",{staticClass:"access-name"},[t._v(" "+t._s(t.$t(e.title))+" ")]),r("p",{staticClass:"access-info"},[t._v(" "+t._s(t.$t(e.description))+" ")])])})),0)])])},n=[],i=r("9ab4"),c=r("a026"),a=r("2fe1"),f=r("133b");function s(t){return s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function u(t,e,r){return e&&p(t.prototype,e),r&&p(t,r),t}function m(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}function y(t,e){return y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},y(t,e)}function d(t){var e=h();return function(){var r,o=g(t);if(e){var n=g(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return w(this,r)}}function w(t,e){return!e||"object"!==s(e)&&"function"!==typeof e?b(t):e}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function g(t){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},g(t)}var v=function(t){m(r,t);var e=d(r);function r(){var t;return l(this,r),t=e.apply(this,arguments),t.importInfoList=[{image:f["f"].createImg,title:"create_profile",description:"create_a_new_profile",route:"profiles.createProfile.info"},{image:f["f"].seedImg,title:"restore_profile",description:"restore_your_profile",route:"profiles.importProfile.info"},{image:f["f"].trezorImg,title:"access_trezor",description:"access_trezor_account",route:null},{image:f["f"].ledgerImg,title:"access_ledger",description:"access_your_ledger_account",route:null}],t}return u(r,[{key:"redirect",value:function(t){return t&&t.length?this.$router.push({name:t,params:{nextPage:"profiles.importProfile.importMnemonic"}}):this.$store.dispatch("notification/ADD_WARNING",this.$t("not_yet_open"))}}]),r}(c["default"]);v=Object(i["c"])([a["b"]],v);var _=v;function x(t){return x="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function O(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function k(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&j(t,e)}function j(t,e){return j=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},j(t,e)}function P(t){var e=R();return function(){var r,o=$(t);if(e){var n=$(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return S(this,r)}}function S(t,e){return!e||"object"!==x(e)&&"function"!==typeof e?C(t):e}function C(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function R(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function $(t){return $=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},$(t)}var z=function(t){k(r,t);var e=P(r);function r(){return O(this,r),e.apply(this,arguments)}return r}(_),E=z,I=(r("230f"),r("2877")),D=Object(I["a"])(E,o,n,!1,null,"7c6c0cc4",null);e["default"]=D.exports}}]);
//# sourceMappingURL=chunk-30172ad8.6befdc19.js.map