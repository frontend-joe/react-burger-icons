"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BurgerSexy = void 0;

require("../base.css");

require("./styles.css");

var _jsxRuntime = require("react/jsx-runtime");

var BurgerSexy = function BurgerSexy(_ref) {
  var isClosed = _ref.isClosed;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    className: "burger burger-sexy ".concat(isClosed && "is-closed")
  });
};

exports.BurgerSexy = BurgerSexy;