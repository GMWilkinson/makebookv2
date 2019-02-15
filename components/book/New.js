'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _common = require('../../lib/common');

var _NewBookForm = require('./NewBookForm');

var _NewBookForm2 = _interopRequireDefault(_NewBookForm);

var _auth = require('../../lib/auth');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BookNew = function (_React$Component) {
  _inherits(BookNew, _React$Component);

  function BookNew(props) {
    _classCallCheck(this, BookNew);

    var _this = _possibleConstructorReturn(this, (BookNew.__proto__ || Object.getPrototypeOf(BookNew)).call(this, props));

    _this.state = {};
    _this.handleChange = _common.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(BookNew, [{
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      console.log('Submit handled', this.state);
      _axios2.default.post('/api/books', this.state).then(function () {
        return _this2.props.history.push('/books/unfinished');
      });
    }
  }, {
    key: 'render',
    value: function render() {
      console.log('what is', this.state);
      return _react2.default.createElement(
        'section',
        null,
        _react2.default.createElement(
          'h2',
          { className: 'title is-2 has-text-centered' },
          'Create your own story!'
        ),
        (0, _auth.isAuthenticated)() && _react2.default.createElement(
          'p',
          { className: 'title has-text-centered is-3' },
          'By ',
          (0, _auth.decodeToken)().username
        ),
        _react2.default.createElement(_NewBookForm2.default, {
          handleChange: this.handleChange,
          handleSubmit: this.handleSubmit,
          className: 'columns'
        })
      );
    }
  }]);

  return BookNew;
}(_react2.default.Component);

exports.default = BookNew;