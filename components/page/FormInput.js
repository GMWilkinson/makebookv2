"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FormInput(_ref) {
  var name = _ref.name,
      type = _ref.type,
      handleChange = _ref.handleChange;

  return _react2.default.createElement(
    "div",
    { className: "field" },
    _react2.default.createElement(
      "label",
      { className: "label is-size-5", htmlFor: name },
      name[0].toUpperCase() + name.substr(1, name.length - 1)
    ),
    _react2.default.createElement("input", { className: "input is-link", name: name, type: type, onChange: handleChange })
  );
}

exports.default = FormInput;