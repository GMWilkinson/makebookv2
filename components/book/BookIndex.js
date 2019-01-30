'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _BookBox = require('./BookBox');

var _BookBox2 = _interopRequireDefault(_BookBox);

var _auth = require('../../lib/auth');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BookIndex = function (_React$Component) {
  _inherits(BookIndex, _React$Component);

  function BookIndex(props) {
    _classCallCheck(this, BookIndex);

    var _this = _possibleConstructorReturn(this, (BookIndex.__proto__ || Object.getPrototypeOf(BookIndex)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(BookIndex, [{
    key: 'deleteBook',
    value: function deleteBook(id) {
      var _this2 = this;

      console.log('deleting page', id);
      _axios2.default.delete('/api/books/' + this.props.match.params.id, (0, _auth.authorizationHeader)()).then(function (res) {
        _this2.setState({ page: res.data });
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      _axios2.default.get('/api/books').then(function (result) {
        return _this3.setState({ books: result.data });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { className: 'columns is-multiline' },
        _react2.default.createElement('hr', null),
        _react2.default.createElement(
          'h1',
          { className: 'subtitle column is-12' },
          'All the books'
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(
          'div',
          { className: 'columns column is-12 book-index' },
          this.state.books && this.state.books.map(function (book) {
            return _react2.default.createElement(_BookBox2.default, { className: '', key: book._id, book: book });
          })
        )
      );
    }
  }]);

  return BookIndex;
}(_react2.default.Component);

exports.default = BookIndex;