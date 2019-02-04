'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _randomHint = require('../../lib/randomHint');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HintBox() {
  return _react2.default.createElement(
    'article',
    null,
    _react2.default.createElement(
      'div',
      { className: 'hero' },
      _react2.default.createElement(
        'div',
        { className: 'hero-body' },
        _react2.default.createElement(
          'div',
          { className: 'container has-text-centered' },
          _react2.default.createElement(
            'p',
            { className: 'title' },
            (0, _randomHint.hintRandomizer)()
          )
        )
      )
    )
  );
}

exports.default = HintBox;