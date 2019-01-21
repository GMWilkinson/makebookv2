'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _PageBox = require('./PageBox');

var _PageBox2 = _interopRequireDefault(_PageBox);

var _auth = require('../../lib/auth');

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageDisplay = function (_React$Component) {
  _inherits(PageDisplay, _React$Component);

  function PageDisplay(props) {
    _classCallCheck(this, PageDisplay);

    var _this = _possibleConstructorReturn(this, (PageDisplay.__proto__ || Object.getPrototypeOf(PageDisplay)).call(this, props));

    _this.state = {};
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(PageDisplay, [{
    key: 'handleClick',
    value: function handleClick(pageId) {
      var _this2 = this;

      console.log('In onClick, pageId', pageId);
      _axios2.default.get('/api/books/' + this.props.match.params.id + '/pages/first').then(function (res) {
        _this2.setState({ page: res.data });
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      _axios2.default.get('/api/books/' + this.props.match.params.id + '/pages').then(function (res) {
        _this3.setState({ page: res.data });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var page = this.state.page;
      var book = this.props.match.params.id;
      console.log('page is', page);
      return _react2.default.createElement(
        'section',
        { className: 'columns' },
        page ? _react2.default.createElement(
          'div',
          { className: 'column is-12' },
          _react2.default.createElement(
            'h1',
            { className: 'title' },
            'All the pages'
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/books/' + book + '/pages/new' },
            'Create a new page.'
          ),
          _react2.default.createElement(
            'div',
            { className: 'columns is-multiline' },
            page && page.map(function (page) {
              return _react2.default.createElement(
                'div',
                { className: 'column is-3', key: page._id },
                _react2.default.createElement(
                  'div',
                  { className: 'card' },
                  _react2.default.createElement(
                    'header',
                    { className: 'card-header' },
                    _react2.default.createElement(
                      'h2',
                      null,
                      page.pageName,
                      ' ',
                      page._id
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                      'p',
                      { className: 'page-index' },
                      page.text
                    )
                  )
                )
              );
            })
          ),
          _react2.default.createElement('div', null)
        ) : _react2.default.createElement(
          'p',
          null,
          'Please wait...'
        )
      );
    }
  }]);

  return PageDisplay;
}(_react2.default.Component);

exports.default = PageDisplay;