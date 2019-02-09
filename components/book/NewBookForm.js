'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _auth = require('../../lib/auth');

var _FormInput = require('./FormInput');

var _FormInput2 = _interopRequireDefault(_FormInput);

var _FormButton = require('./FormButton');

var _FormButton2 = _interopRequireDefault(_FormButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NewBookForm(_ref) {
  var handleChange = _ref.handleChange,
      handleSubmit = _ref.handleSubmit;

  return _react2.default.createElement(
    'form',
    { className: 'column is-4 is-offset-4', onSubmit: handleSubmit },
    _react2.default.createElement(_FormInput2.default, { name: 'title', type: 'text', handleChange: handleChange }),
    _react2.default.createElement(
      'span',
      null,
      'Your Author name must be ',
      _react2.default.createElement(
        'strong',
        null,
        (0, _auth.decodeToken)().username
      )
    ),
    _react2.default.createElement(_FormInput2.default, { name: 'author', type: 'text', handleChange: handleChange }),
    _react2.default.createElement(_FormInput2.default, { className: 'blurb-input', name: 'blurb', type: 'text', handleChange: handleChange }),
    _react2.default.createElement(
      'label',
      { htmlFor: 'blurb' },
      'Don\'t worry, you can always add/change this later'
    ),
    _react2.default.createElement(_FormInput2.default, { name: 'image', type: 'text', handleChange: handleChange }),
    _react2.default.createElement(_FormButton2.default, { text: 'Create Book' })
  );
}

exports.default = NewBookForm;