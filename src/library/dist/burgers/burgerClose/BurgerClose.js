"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BurgerClose = void 0;

require("../base.css");

require("./styles.css");

var BurgerClose = function BurgerClose(_ref) {
  var isClosed = _ref.isClosed;
  return /*#__PURE__*/React.createElement("span", {
    className: "burger burger-close ".concat(isClosed && "is-closed")
  });
};

exports.BurgerClose = BurgerClose;