"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BurgerSwipe = void 0;

require("../base.css");

require("./styles.css");

var BurgerSwipe = function BurgerSwipe(_ref) {
  var isClosed = _ref.isClosed;
  return /*#__PURE__*/React.createElement("span", {
    className: "burger burger-swipe ".concat(isClosed && "is-closed")
  });
};

exports.BurgerSwipe = BurgerSwipe;