'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BookBox(_ref) {
  var _this = this;

  var book = _ref.book;

  return _react2.default.createElement(
    _reactRouterDom.Link,
    { className: 'column is-4', to: '/books/' + book._id },
    _react2.default.createElement(
      'article',
      null,
      _react2.default.createElement(
        'h3',
        { className: 'is-subtitle is-3' },
        book.title
      ),
      _react2.default.createElement(
        'figure',
        { className: 'image' },
        _react2.default.createElement('img', { src: book.image })
      ),
      _react2.default.createElement(
        'p',
        null,
        book.author
      ),
      _react2.default.createElement(
        'a',
        { className: 'card-footer-item', onClick: function onClick() {
            return _this.deleteBook(book._id);
          } },
        'Delete'
      )
    )
  );
}

exports.default = BookBox;