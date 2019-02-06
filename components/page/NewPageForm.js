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
    { className: 'column is-8 is-offset-2', onSubmit: handleSubmit },
    _react2.default.createElement(_FormInput2.default, { className: '', name: 'pageName', handleChange: handleChange }),
    _react2.default.createElement(
      'div',
      { className: '' },
      _react2.default.createElement(
        'label',
        { className: 'label is-size-5', htmlFor: 'text' },
        'Text'
      ),
      _react2.default.createElement('textarea', { className: 'textarea new-page-textarea', rows: '20', name: 'text', onChange: handleChange })
    ),
    _react2.default.createElement(
      'div',
      { className: 'button-box has-text-centered' },
      _react2.default.createElement(_FormButton2.default, { text: 'Create' })
    )
  );
}

exports.default = NewPageForm;