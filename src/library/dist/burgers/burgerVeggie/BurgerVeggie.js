"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BurgerVeggie = void 0;

require("../base.css");

require("./styles.css");

var BurgerVeggie = function BurgerVeggie(_ref) {
  var isClosed = _ref.isClosed;
  return /*#__PURE__*/React.createElement("span", {
    className: "burger burger-veggie ".concat(isClosed && "is-closed")
  });
};

exports.BurgerVeggie = BurgerVeggie;