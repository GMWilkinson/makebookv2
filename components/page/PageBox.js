'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PageBox(_ref) {
  var page = _ref.page,
      book = _ref.book;

  return _react2.default.createElement(
    _reactRouterDom.Link,
    { to: '/books/' + this.props.match.params.id + '/pages/new/writing' },
    _react2.default.createElement(
      'article',
      { className: 'column is-4' },
      _react2.default.createElement(
        'p',
        null,
        book.text
      )
    )
  );
}

exports.default = PageBox;