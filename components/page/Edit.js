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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Edit = function (_React$Component) {
  _inherits(Edit, _React$Component);

  function Edit(props) {
    _classCallCheck(this, Edit);

    var _this = _possibleConstructorReturn(this, (Edit.__proto__ || Object.getPrototypeOf(Edit)).call(this, props));

    _this.state = {};
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(Edit, [{
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

      var _props$match$params = this.props.match.params,
          bookId = _props$match$params.bookId,
          pageId = _props$match$params.pageId;

      e.preventDefault();
      console.log('Submit handled', bookId);
      _axios2.default.put('/api/books/' + bookId + '/pages/' + pageId, this.state).then(function () {
        return _this2.props.history.push('/books/' + _this2.props.match.params.id + '/pages');
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      var _props$match$params2 = this.props.match.params,
          bookId = _props$match$params2.bookId,
          pageId = _props$match$params2.pageId;

      _axios2.default.get('/api/books/' + bookId + '/pages/' + pageId).then(_axios2.default.get('/api/books/' + bookId + '/pages')).then(function (res) {
        console.log('this is page: res.data', { page: res.data });
        _this3.setState({ page: res.data });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var page = this.state.page;
      return _react2.default.createElement(
        'section',
        { className: 'main-story' },
        page ? _react2.default.createElement(
          'section',
          null,
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
                  name: 'text',
                  value: this.state.text || '' + page.text,
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

  return Edit;
}(_react2.default.Component);

exports.default = Edit;