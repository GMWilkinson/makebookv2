'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteBook = deleteBook;

var _auth = require('./auth');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function deleteBook(id) {
  var _this = this;

  console.log('deleting page', id);
  _axios2.default.delete('/api/books/' + this.props.match.params.id, (0, _auth.authorizationHeader)()).then(function (res) {
    _this.setState({ page: res.data });
  });
}