"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = debounce;
//eslint-disable-next-line
function debounce(n, t, u) {
  var e;return function () {
    var i = this,
        o = arguments,
        a = u && !e;clearTimeout(e), e = setTimeout(function () {
      e = null, u || n.apply(i, o);
    }, t), a && n.apply(i, o);
  };
}