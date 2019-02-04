'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NewBookBox(_ref) {
  var _this = this;

  var book = _ref.book;

  return _react2.default.createElement(
    'div',
    { className: 'column is-12' },
    _react2.default.createElement(
      'article',
      { className: 'card book-card-box' },
      _react2.default.createElement(
        'div',
        { className: 'card-header' },
        _react2.default.createElement(
          'h3',
          { className: 'is-subtitle is-3' },
          _react2.default.createElement(
            'strong',
            null,
            book.title
          ),
          ' By ',
          book.author
        )
      ),
      _react2.default.createElement(
        _reactRouterDom.Link,
        { className: 'column', to: '/books/' + book._id + '/pages' },
        _react2.default.createElement(
          'figure',
          { className: 'content has-text-centered' },
          _react2.default.createElement(
            'p',
            { className: 'papayawhip' },
            'Click here to continue with this book.'
          ),
          _react2.default.createElement(
            'p',
            { className: '' },
            book.blurb
          )
        )
      ),
      _react2.default.createElement(
        'footer',
        { className: 'card-footer' },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { className: 'column is-4 card-footer-item', to: '/books/' + book._id },
          'Read'
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { className: 'column is-4 card-footer-item', to: '/books/' + book._id + '/edit' },
          'Edit'
        ),
        _react2.default.createElement(
          'p',
          { className: 'column is-4 card-footer-item delete-box', onClick: function onClick() {
              return _this.deleteBook(book._id);
            } },
          'Delete'
        )
      )
    )
  );
}

exports.default = NewBookBox;