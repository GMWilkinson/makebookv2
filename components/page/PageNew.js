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

var _NewPageForm = require('./NewPageForm');

var _NewPageForm2 = _interopRequireDefault(_NewPageForm);

var _auth = require('../../lib/auth');

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageNew = function (_React$Component) {
  _inherits(PageNew, _React$Component);

  function PageNew(props) {
    _classCallCheck(this, PageNew);

    var _this = _possibleConstructorReturn(this, (PageNew.__proto__ || Object.getPrototypeOf(PageNew)).call(this, props));

    _this.state = {};
    _this.handleChange = _common.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(PageNew, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      _axios2.default.get('/api/books/' + this.props.match.params.id + '/pages').then(function (res) {
        // console.log({ page: res.data });
        _this2.setState({ page: res.data });
      });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      var _this3 = this;

      e.preventDefault();
      console.log('Submit handled', this.props.match.params.id);
      _axios2.default.post('/api/books/' + this.props.match.params.id + '/pages', this.state).then(function () {
        return _this3.props.history.push('/books/' + _this3.props.match.params.id + '/pages');
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var page = this.state.page;
      console.log('what is this', page);
      return _react2.default.createElement(
        'section',
        { className: 'page-new' },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h2',
            { className: 'title is-2 has-text-centered' },
            'New Page'
          ),
          (0, _auth.isAuthenticated)() && _react2.default.createElement(
            'p',
            { className: 'title is-3 has-text-centered' },
            'Created by ',
            (0, _auth.decodeToken)().username
          ),
          _react2.default.createElement('div', null),
          _react2.default.createElement(_NewPageForm2.default, {
            className: 'columns',
            handleChange: this.handleChange,
            handleSubmit: this.handleSubmit
          })
        )
      );
    }
  }]);

  return PageNew;
}(_react2.default.Component);

exports.default = PageNew;