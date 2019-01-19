'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FormInput = require('./FormInput');

var _FormInput2 = _interopRequireDefault(_FormInput);

var _FormTextarea = require('./FormTextarea');

var _FormTextarea2 = _interopRequireDefault(_FormTextarea);

var _FormButton = require('./FormButton');

var _FormButton2 = _interopRequireDefault(_FormButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NewPageForm(_ref) {
  var handleChange = _ref.handleChange,
      handleSubmit = _ref.handleSubmit;

  return _react2.default.createElement(
    'form',
    { onSubmit: handleSubmit },
    _react2.default.createElement(_FormInput2.default, { name: 'pageName', handleChange: handleChange }),
    _react2.default.createElement(_FormTextarea2.default, { name: 'text', handleChange: handleChange }),
    _react2.default.createElement(_FormButton2.default, { text: 'Create' })
  );
}

exports.default = NewPageForm;