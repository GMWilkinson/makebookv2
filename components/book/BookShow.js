'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _reactRouterDom = require('react-router-dom');

var _auth = require('../../lib/auth');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BookShow = function (_React$Component) {
  _inherits(BookShow, _React$Component);

  function BookShow(props) {
    _classCallCheck(this, BookShow);

    var _this = _possibleConstructorReturn(this, (BookShow.__proto__ || Object.getPrototypeOf(BookShow)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(BookShow, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      _axios2.default.get('/api/books/' + this.props.match.params.id).then(function (res) {
        _this2.setState({ book: res.data });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var book = this.state.book;
      return _react2.default.createElement(
        'section',
        { className: 'main-story' },
        book ? _react2.default.createElement(
          'div',
          { className: 'columns is-centered' },
          function () {
            console.log('what is', book);
          }(),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'column is-half', to: '/books/' + book._id + '/story' },
            _react2.default.createElement(
              'h2',
              { className: 'shadow white-text title' },
              book.title
            ),
            _react2.default.createElement(
              'figure',
              { className: 'image is-2by3' },
              _react2.default.createElement('img', { src: book.image })
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            (0, _auth.isAuthenticated)() && _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/books/' + book._id + '/new-page/first' },
              'Start creating your book.'
            )
          )
        ) : _react2.default.createElement(
          'p',
          null,
          'Please wait...'
        )
      );
    }
  }]);

  return BookShow;
}(_react2.default.Component);

exports.default = BookShow;