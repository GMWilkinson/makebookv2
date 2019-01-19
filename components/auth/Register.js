'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _auth = require('../../lib/auth');

var _common = require('../../lib/common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AuthRegister = function (_React$Component) {
  _inherits(AuthRegister, _React$Component);

  function AuthRegister(props) {
    _classCallCheck(this, AuthRegister);

    var _this = _possibleConstructorReturn(this, (AuthRegister.__proto__ || Object.getPrototypeOf(AuthRegister)).call(this, props));

    _this.state = {};
    _this.handleChange = _common.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(AuthRegister, [{
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      var _this2 = this;

      e.preventDefault();

      _axios2.default.post('/api/register', this.state).then(function (res) {
        (0, _auth.saveToken)(res.data.token);
      }).then(function () {
        return _this2.props.history.push('/books');
      }).catch(function () {
        _this2.props.history.replace('/login');
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'form',
        { onSubmit: this.handleSubmit },
        _react2.default.createElement(
          'div',
          { className: 'field' },
          _react2.default.createElement('input', {
            className: 'input',
            name: 'username',
            placeholder: 'Username',
            onChange: this.handleChange
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'field' },
          _react2.default.createElement('input', {
            className: 'input',
            name: 'email',
            placeholder: 'Email',
            onChange: this.handleChange
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'field' },
          _react2.default.createElement('input', {
            type: 'password',
            className: 'input',
            name: 'password',
            placeholder: 'Password',
            onChange: this.handleChange
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'field' },
          _react2.default.createElement('input', {
            type: 'password',
            className: 'input',
            name: 'passwordConfirmation',
            placeholder: 'Password confirmation',
            onChange: this.handleChange
          })
        ),
        _react2.default.createElement(
          'button',
          { className: 'button is-primary' },
          'Submit'
        )
      );
    }
  }]);

  return AuthRegister;
}(_react2.default.Component);

exports.default = AuthRegister;