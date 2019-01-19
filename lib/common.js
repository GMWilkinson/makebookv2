"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleChange = handleChange;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function handleChange(e) {
  var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;

  this.setState(_defineProperty({}, name, value));
}