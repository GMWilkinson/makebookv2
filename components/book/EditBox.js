'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _auth = require('../../lib/auth');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function EditBox(_ref) {
  var book = _ref.book;

  return _react2.default.createElement(
    'section',
    null,
    _react2.default.createElement(
      'h2',
      null,
      'Title'
    ),
    _react2.default.createElement(
      'div',
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
            _react2.default.createElement('input', { className: 'input',
              name: 'title',
              value: this.state.title || '' + this.title,
              onChange: this.handleChange
            })
          )
        )
      ),
      _react2.default.createElement(
        'h2',
        null,
        'Author'
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
            _react2.default.createElement('input', { className: 'input',
              name: 'author',
              value: this.state.author || '' + book.author,
              onChange: this.handleChange
            })
          )
        )
      ),
      _react2.default.createElement(
        'h2',
        null,
        'Add a blurb here'
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
              name: 'blurb',
              value: this.state.blurb || '' + book.blurb,
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
            'div',
            { className: 'control' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'isCompleted' },
              _react2.default.createElement(
                'h2',
                null,
                'Is the Book ready for all to read?'
              ),
              _react2.default.createElement(
                'p',
                null,
                'Type ',
                _react2.default.createElement(
                  'strong',
                  null,
                  'true'
                ),
                ' in the box if ready to publish. The book will then be available on the finished books page!'
              ),
              _react2.default.createElement('textarea', { className: 'textarea',
                name: 'isCompleted',
                value: this.state.isCompleted || '' + book.isCompleted,
                onChange: this.handleChange
              })
            )
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
              'Save Changes'
            )
          )
        )
      )
    )
  );
}

exports.default = EditBox;