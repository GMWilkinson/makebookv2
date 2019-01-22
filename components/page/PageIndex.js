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

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageIndex = function (_React$Component) {
  _inherits(PageIndex, _React$Component);

  function PageIndex(props) {
    _classCallCheck(this, PageIndex);

    var _this = _possibleConstructorReturn(this, (PageIndex.__proto__ || Object.getPrototypeOf(PageIndex)).call(this, props));

    _this.state = {};
    _this.handleClick = _this.handleClick.bind(_this);
    _this.deletePage = _this.deletePage.bind(_this);
    return _this;
  }

  _createClass(PageIndex, [{
    key: 'handleClick',
    value: function handleClick(pageId) {
      var _this2 = this;

      console.log('In onClick, pageId', pageId);
      _axios2.default.get('/api/books/' + this.props.match.params.id + '/pages/first').then(function (res) {
        _this2.setState({ page: res.data });
      });
    }
  }, {
    key: 'deletePage',
    value: function deletePage(id) {
      var _this3 = this;

      console.log('deleting page', id);
      _axios2.default.delete('/api/books/' + this.props.match.params.id + '/pages/' + id, (0, _auth.authorizationHeader)()).then(function (res) {
        _this3.setState({ page: res.data });
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this4 = this;

      _axios2.default.get('/api/books/' + this.props.match.params.id + '/pages').then(function (res) {
        _this4.setState({ page: res.data });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

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
          function () {
            if (page.length === 0) {
              return _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/books/' + book + '/pages/first' },
                'Create a new first page.'
              );
            } else {
              return _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/books/' + book + '/pages/new' },
                'Create a new page.'
              );
            }
          }(),
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
                    { className: 'content' },
                    _react2.default.createElement(
                      'p',
                      { className: 'page-index' },
                      page.text
                    )
                  ),
                  _react2.default.createElement(
                    'footer',
                    { className: 'card-footer' },
                    _react2.default.createElement(
                      _reactRouterDom.Link,
                      { to: '/books/' + book + '/pages/' + page._id, className: 'card-footer-item' },
                      'Add Choices'
                    ),
                    _react2.default.createElement(
                      _reactRouterDom.Link,
                      { to: '/books/' + book + '/pages/' + page._id + '/edit', className: 'card-footer-item' },
                      'Edit'
                    ),
                    _react2.default.createElement(
                      'a',
                      { className: 'card-footer-item', onClick: function onClick() {
                          return _this5.deletePage(page._id);
                        } },
                      'Delete'
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

  return PageIndex;
}(_react2.default.Component);

exports.default = PageIndex;