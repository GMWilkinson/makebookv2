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
        { className: 'column', to: '/books/' + book._id },
        _react2.default.createElement(
          'figure',
          { className: 'content has-text-centered' },
          _react2.default.createElement(
            'p',
            { className: '' },
            book.blurb
          )
        )
      )
    )
  );
}

exports.default = BookBox;