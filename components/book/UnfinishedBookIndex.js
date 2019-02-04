'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _NewBookBox = require('./NewBookBox');

var _NewBookBox2 = _interopRequireDefault(_NewBookBox);

var _auth = require('../../lib/auth');

var _HintBox = require('../page/HintBox');

var _HintBox2 = _interopRequireDefault(_HintBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UnfinishedBookIndex = function (_React$Component) {
  _inherits(UnfinishedBookIndex, _React$Component);

  function UnfinishedBookIndex(props) {
    _classCallCheck(this, UnfinishedBookIndex);

    var _this = _possibleConstructorReturn(this, (UnfinishedBookIndex.__proto__ || Object.getPrototypeOf(UnfinishedBookIndex)).call(this, props));

    _this.state = {};
    _this.handleClick = _this.handleClick.bind(_this);
    _this.deleteBook = _this.deleteBook.bind(_this);
    return _this;
  }

  _createClass(UnfinishedBookIndex, [{
    key: 'handleClick',
    value: function handleClick() {
      var _this2 = this;

      var book = this.state.books;
      var bookId = book[0]._id;
      console.log('In onClick, pageId and bookId', book);
      _axios2.default.get('/api/books/' + bookId).then(function () {
        return _this2.setState({ isCompleted: true });
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      _axios2.default.get('/api/books/unfinished').then(function (result) {
        return _this3.setState({ books: result.data });
      });
    }
  }, {
    key: 'deleteBook',
    value: function deleteBook(id) {
      console.log('deleting book', id);
      _axios2.default.delete('/api/books/' + id, (0, _auth.authorizationHeader)()).then(this.props.history.push('/'));
    }
  }, {
    key: 'render',
    value: function render() {
      var username = (0, _auth.decodeToken)().username;
      // if (book.author === username)
      console.log('this is', username);
      console.log('user/author', _auth.isAuthenticated);
      return _react2.default.createElement(
        'section',
        { className: '' },
        _react2.default.createElement(
          'div',
          { className: '' },
          _react2.default.createElement(
            'div',
            { className: 'has-text-centered column is-12' },
            (0, _auth.isAuthenticated)() && _react2.default.createElement(
              'p',
              { className: 'title' },
              username,
              '\'s Unfinished Books'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_HintBox2.default, null)
          ),
          _react2.default.createElement(
            'div',
            { className: 'columns is-multiline' },
            this.state.books && this.state.books.map(function (book) {
              return _react2.default.createElement(
                'div',
                { className: 'column box-margin is-6', key: book._id },
                function () {
                  if (book.author === username) {
                    return _react2.default.createElement(
                      'div',
                      { className: '' },
                      _react2.default.createElement(_NewBookBox2.default, { className: 'columns', book: book })
                    );
                  }
                }()
              );
            }),
            _react2.default.createElement('div', null)
          )
        )
      );
    }
  }]);

  return UnfinishedBookIndex;
}(_react2.default.Component);

exports.default = UnfinishedBookIndex;