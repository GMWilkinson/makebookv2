'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _auth = require('../../lib/auth');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BookBox(_ref) {
  var _this = this;

  var book = _ref.book;

  return _react2.default.createElement(
    'article',
    { className: 'card column is-4' },
    _react2.default.createElement(
      'h3',
      { className: 'card-header subtitle' },
      book.title
    ),
    _react2.default.createElement(
      _reactRouterDom.Link,
      { className: 'content', to: '/books/' + book._id },
      _react2.default.createElement(
        'p',
        null,
        book.blurb
      ),
      _react2.default.createElement(
        'p',
        null,
        'By ',
        book.author
      )
    ),
    function () {
      if (book.author === (0, _auth.decodeToken)().username) {
        return _react2.default.createElement(
          'footer',
          { className: 'card-footer-item' },
          _react2.default.createElement(
            'button',
            { className: 'button is-danger', onClick: function onClick() {
                return _this.deleteBook(book._id);
              } },
            'Delete'
          )
        );
      }
    }()
  );
}

exports.default = BookBox;