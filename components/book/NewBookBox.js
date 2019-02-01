'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NewBookBox(_ref) {
  var book = _ref.book;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'article',
      { className: 'card' },
      _react2.default.createElement(
        'div',
        { className: 'card-header' },
        _react2.default.createElement(
          'h3',
          { className: 'is-subtitle is-3' },
          book.title
        )
      ),
      _react2.default.createElement(
        _reactRouterDom.Link,
        { className: 'column is-4', to: '/books/' + book._id + '/pages' },
        _react2.default.createElement(
          'figure',
          { className: 'image content' },
          _react2.default.createElement('img', { src: book.image })
        ),
        _react2.default.createElement(
          'p',
          null,
          book.author
        )
      ),
      _react2.default.createElement(
        'footer',
        { className: 'card-footer' },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { className: 'column is-6 card-footer-item', to: '/books/' + book._id },
          'Read'
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { className: 'column is-6 card-footer-item', to: '/books/' + book._id + '/edit' },
          'Edit'
        )
      )
    )
  );
}

exports.default = NewBookBox;