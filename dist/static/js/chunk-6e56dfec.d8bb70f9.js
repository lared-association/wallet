(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e56dfec"],{"4ff2":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"information-main-container secondary_page_animate"},[t.latestArticles.length?n("div",{staticClass:"articles-container"},t._l(t.latestArticles,(function(e,o){return n("div",{key:o,staticClass:"article-outer-container"},[n("div",{staticClass:"article-inner-container"},[n("div",{staticClass:"article-left-section"},[n("span",{staticClass:"article-date"},[t._v(t._s(t._f("moment")(e.pubDate,"ddd, MMMM Do YYYY")))]),n("span",{staticClass:"article-from"},[t._v(t._s(t.$t("article_by",{creator:t.getPublisher(e)})))]),n("span",{staticClass:"article-link"},[n("a",{attrs:{href:e.link,target:"_blank"}},[t._v(t._s(t.$t("news_read_more")))])])]),n("div",{staticClass:"article-right-section"},[n("span",{staticClass:"article-title"},[t._v(t._s(e.title))]),n("span",{staticClass:"article-content"},[t._v(t._s(e.contentSnippet))])])])])})),0):n("Spin",{staticClass:"absolute",attrs:{size:"large",fix:""}})],1)},r=[],i=n("a34a"),a=n.n(i),c=n("9ab4"),l=n("60a3"),s=n("2f62");function f(t){return f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function p(t,e,n){return e&&d(t.prototype,e),n&&d(t,n),t}function y(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}function m(t,e){return m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},m(t,e)}function b(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var n,o=g(t);if(e()){var r=g(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return h(this,n)}}function h(t,e){return!e||"object"!==f(e)&&"function"!==typeof e?v(t):e}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function g(t){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},g(t)}var w=function(t){y(n,t);var e=b(n);function n(){return u(this,n),e.apply(this,arguments)}return p(n,[{key:"mounted",value:function(){return Object(c["b"])(this,void 0,void 0,a.a.mark((function t(){return a.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("community/initialize");case 2:case"end":return t.stop()}}),t,this)})))}},{key:"getPublisher",value:function(t){var e=new RegExp(/nemflash\.io/),n=new RegExp(/blog\.nem\.io/);return e.test(t.link)?"nemflash.io":n.test(t.link)?"blog.nem.io":"Unknown"}}]),n}(l["c"]);function _(t){return _="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function O(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function j(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&k(t,e)}function k(t,e){return k=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},k(t,e)}function S(t){function e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}return function(){var n,o=R(t);if(e()){var r=R(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return x(this,n)}}function x(t,e){return!e||"object"!==_(e)&&"function"!==typeof e?C(t):e}function C(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function R(t){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},R(t)}w=Object(c["c"])([Object(l["a"])({computed:Object(s["b"])({latestArticles:"community/latestArticles"})})],w);var P=function(t){j(n,t);var e=S(n);function n(){return O(this,n),e.apply(this,arguments)}return n}(w),E=P,z=(n("747f"),n("2877")),D=Object(z["a"])(E,o,r,!1,null,"32b3d286",null);e["default"]=D.exports},"747f":function(t,e,n){"use strict";var o=n("d771"),r=n.n(o);r.a},d771:function(t,e,n){var o=n("de63");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var r=n("499e").default;r("4f002fba",o,!0,{sourceMap:!1,shadowMode:!1})},de63:function(t,e,n){var o=n("24fb"),r=n("1de5"),i=n("dc5b"),a=n("0743"),c=n("0343"),l=n("d5fa"),s=n("1ec8"),f=n("9a7a");e=o(!1);var u=r(i),d=r(a),p=r(c),y=r(l),m=r(s),b=r(f);e.push([t.i,"@font-face{font-family:noto-sans-bold;src:url("+u+");font-weight:400;font-style:normal}@font-face{font-family:noto-sans-extrabold;src:url("+d+");font-weight:400;font-style:normal}@font-face{font-family:noto-sans-light;src:url("+p+");font-weight:400;font-style:normal}@font-face{font-family:noto-sans-medium;src:url("+y+");font-weight:400;font-style:normal}@font-face{font-family:noto-sans-regular;src:url("+m+");font-weight:400;font-style:normal}@font-face{font-family:noto-sans-semibold;src:url("+b+");font-weight:400;font-style:normal}.information-main-container[data-v-32b3d286]{padding-left:8%;padding-right:10%;grid-template-rows:100%;overflow:hidden;padding-bottom:6%}.articles-container[data-v-32b3d286],.information-main-container[data-v-32b3d286]{position:relative;width:100%;height:100%;display:grid;grid-template-columns:100%}.articles-container[data-v-32b3d286]{padding:0 .2rem;grid-template-rows:2rem;overflow-x:hidden;overflow-y:auto;margin-top:2%}.article-outer-container[data-v-32b3d286]{height:90%}.article-inner-container[data-v-32b3d286]{position:relative;width:100%;height:100%;padding:.2rem;display:grid;grid-template-columns:20% 80%;grid-gap:2%;grid-template-rows:1.75rem;overflow:hidden;border-bottom:.02rem solid #d3d3d3}.article-left-section[data-v-32b3d286]{display:grid;grid-template-columns:100%;grid-template-rows:.3rem .6rem auto}.article-right-section[data-v-32b3d286]{display:grid;grid-template-columns:100%;grid-template-rows:20% 80%}.article-from[data-v-32b3d286]{font-style:italic}.article-date[data-v-32b3d286],.article-from[data-v-32b3d286]{color:#44004e;font-size:.18rem}.link-icon[data-v-32b3d286]{color:#5b5b5b;vertical-align:center}.article-link a[data-v-32b3d286]{color:#5200c6;font-size:.18rem}.article-title[data-v-32b3d286]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:#44004e;font-weight:600;font-size:.18rem}.article-content[data-v-32b3d286]{color:#44004e;font-size:.16rem;font-family:noto-sans-light}",""]),t.exports=e}}]);
//# sourceMappingURL=chunk-6e56dfec.d8bb70f9.js.map