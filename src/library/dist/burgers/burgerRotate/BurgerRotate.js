"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BurgerRotate = void 0;

require("../base.css");

require("./styles.css");

var BurgerRotate = function BurgerRotate(_ref) {
  var isClosed = _ref.isClosed;
  return /*#__PURE__*/React.createElement("span", {
    className: "burger burger-rotate ".concat(isClosed && "is-closed")
  });
};

exports.BurgerRotate = BurgerRotate;