'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _auth = require('../lib/auth');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.state = {};
    _this.handleLogout = _this.handleLogout.bind(_this);
    return _this;
  }

  _createClass(Header, [{
    key: 'handleLogout',
    value: function handleLogout() {
      (0, _auth.deleteToken)();
      this.props.history.push('/');
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('Header was mounted');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'nav',
        { className: 'navbar', id: 'navbar' },
        this.state.url && _react2.default.createElement(
          'p',
          null,
          this.state.url
        ),
        _react2.default.createElement(
          'div',
          { className: 'navbar-brand' },
          _react2.default.createElement(
            'h2',
            { className: 'title is-2 page-header' },
            'MakeBook'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'navbar-end' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'navbar-item page-header is-vcentered', to: '/books' },
            'Finished Books'
          ),
          (0, _auth.isAuthenticated)() && _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'navbar-item page-header', to: '/books/new' },
            'Create Your Own Story!'
          ),
          (0, _auth.isAuthenticated)() && _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'navbar-item page-header', to: '/books/unfinished' },
            'Your Unfinished Books'
          ),
          !(0, _auth.isAuthenticated)() && _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'navbar-item page-header', to: '/register' },
            'Register'
          ),
          !(0, _auth.isAuthenticated)() && _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'navbar-item page-header', to: '/login' },
            'Login'
          ),
          (0, _auth.isAuthenticated)() && _react2.default.createElement(
            'a',
            { onClick: this.handleLogout, className: 'navbar-item page-header', to: '/login' },
            'Logout'
          ),
          (0, _auth.isAuthenticated)() && _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'navbar-item page-header', to: '/users' },
            _react2.default.createElement(
              'p',
              null,
              (0, _auth.decodeToken)().username,
              '\'s profile'
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = (0, _reactRouterDom.withRouter)(Header);