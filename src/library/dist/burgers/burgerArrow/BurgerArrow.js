"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BurgerArrow = void 0;

require("../base.css");

require("./styles.css");

var BurgerArrow = function BurgerArrow(_ref) {
  var isClosed = _ref.isClosed;
  return /*#__PURE__*/React.createElement("span", {
    className: "burger burger-arrow ".concat(isClosed && "is-closed")
  });
};

exports.BurgerArrow = BurgerArrow;