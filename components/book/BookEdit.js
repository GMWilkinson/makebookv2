'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BookEdit = function (_React$Component) {
  _inherits(BookEdit, _React$Component);

  function BookEdit(props) {
    _classCallCheck(this, BookEdit);

    var _this = _possibleConstructorReturn(this, (BookEdit.__proto__ || Object.getPrototypeOf(BookEdit)).call(this, props));

    _this.state = {};
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(BookEdit, [{
    key: 'handleChange',
    value: function handleChange(e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;

      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      console.log('Submit handled', this.props.match.params.id);
      _axios2.default.put('/api/books/' + this.props.match.params.id, this.state).then(function () {
        return _this2.props.history.push('/books/unfinished');
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      _axios2.default.get('/api/books/unfinished').then(_axios2.default.get('/api/books/' + this.props.match.params.id)).then(function (res) {
        console.log('this is page: res.data', { book: res.data });
        _this3.setState({ book: res.data });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var book = this.state.book;
      console.log('book is', book);
      return _react2.default.createElement(
        'section',
        { className: 'main-story' },
        book ? _react2.default.createElement(
          'section',
          null,
          _react2.default.createElement(
            'p',
            null,
            book[0].title
          ),
          _react2.default.createElement(
            'div',
            { className: 'media-content' },
            _react2.default.createElement(
              'div',
              { className: 'field' },
              _react2.default.createElement(
                'p',
                { className: 'control' },
                _react2.default.createElement('textarea', { className: 'textarea',
                  name: 'title',
                  value: this.state.title || '' + book[0].title,
                  onChange: this.handleChange
                })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'media-content' },
            _react2.default.createElement(
              'div',
              { className: 'field' },
              _react2.default.createElement(
                'p',
                { className: 'control' },
                _react2.default.createElement('textarea', { className: 'textarea',
                  name: 'author',
                  value: this.state.author || '' + book[0].author,
                  onChange: this.handleChange
                })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'media-content' },
            _react2.default.createElement(
              'div',
              { className: 'field' },
              _react2.default.createElement(
                'p',
                { className: 'control' },
                _react2.default.createElement('textarea', { className: 'textarea',
                  name: 'isCompleted',
                  value: this.state.isCompleted || '' + book[0].isCompleted,
                  onChange: this.handleChange
                })
              )
            )
          ),
          _react2.default.createElement(
            'nav',
            { className: 'level' },
            _react2.default.createElement(
              'div',
              { className: 'level-left' },
              _react2.default.createElement(
                'div',
                { className: 'level-item', onClick: this.handleSubmit },
                _react2.default.createElement(
                  'a',
                  { className: 'button is-info' },
                  'Submit'
                )
              )
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

  return BookEdit;
}(_react2.default.Component);

exports.default = BookEdit;