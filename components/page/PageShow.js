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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PageShow = function (_React$Component) {
  _inherits(PageShow, _React$Component);

  function PageShow(props) {
    _classCallCheck(this, PageShow);

    var _this = _possibleConstructorReturn(this, (PageShow.__proto__ || Object.getPrototypeOf(PageShow)).call(this, props));

    _this.state = {};
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(PageShow, [{
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
      _axios2.default.post('/api/books/' + this.props.match.params.id + '/pages/' + this.state.page._id + '/choices', this.state).then(function () {
        return _this2.props.history.push('/books/' + _this2.props.match.params.id + '/pages');
      });
    }
  }, {
    key: 'handleClick',
    value: function handleClick(pageId) {
      this.setState({ nextPage: pageId });
    }
  }, {
    key: 'handleClick2',
    value: function handleClick2() {
      _axios2.default.get('/api/books/' + this.props.match.params.id + '/pages');
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      var _props$match$params = this.props.match.params,
          bookId = _props$match$params.bookId,
          pageId = _props$match$params.pageId;

      _axios2.default.get('/api/books/' + bookId + '/pages/' + pageId).then(_axios2.default.get('/api/books/' + this.props.match.params.id + '/pages')).then(function (res) {
        console.log({ page: res.data });
        _this3.setState({ page: res.data });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var page = this.state.page;
      console.log('this.state is', this.state);
      return _react2.default.createElement(
        'section',
        null,
        page ? _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h1',
              null,
              'Page'
            ),
            _react2.default.createElement(
              'h2',
              null,
              page.pageName
            ),
            _react2.default.createElement(
              'h2',
              null,
              page._id
            ),
            page && page.choices.map(function (choice) {
              return _react2.default.createElement(
                'div',
                { className: 'column is-3', key: choice._id },
                _react2.default.createElement(
                  'h2',
                  null,
                  choice.text
                ),
                _react2.default.createElement(
                  'h2',
                  null,
                  choice.nextPage
                )
              );
            })
          ),
          _react2.default.createElement(
            'article',
            { className: 'media' },
            _react2.default.createElement(
              'figure',
              { className: 'media-left' },
              _react2.default.createElement(
                'p',
                { className: 'image is-64x64' },
                _react2.default.createElement('img', { src: (0, _auth.decodeToken)().image })
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
                    placeholder: 'Add a choice..',
                    name: 'text',
                    value: this.state.text || '',
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
                    placeholder: 'Link to',
                    name: 'nextPage',
                    value: this.state.nextPage || '',
                    onChange: this.handleChange
                  })
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

  return PageShow;
}(_react2.default.Component);

exports.default = PageShow;