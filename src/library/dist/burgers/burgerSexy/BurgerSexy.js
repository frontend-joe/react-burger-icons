"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BurgerSexy = void 0;

require("../base.css");

require("./styles.css");

var BurgerSexy = function BurgerSexy(_ref) {
  var isClosed = _ref.isClosed;
  return /*#__PURE__*/React.createElement("span", {
    className: "burger burger-sexy ".concat(isClosed && "is-closed")
  });
};

exports.BurgerSexy = BurgerSexy;