'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveToken = saveToken;
exports.getToken = getToken;
exports.decodeToken = decodeToken;
exports.tokenUsername = tokenUsername;
exports.tokenUserId = tokenUserId;
exports.deleteToken = deleteToken;
exports.isAuthenticated = isAuthenticated;
exports.authorizationHeader = authorizationHeader;
function saveToken(token) {
  localStorage.setItem('book-token', token);
}

function getToken() {
  return localStorage.getItem('book-token');
}

function decodeToken() {
  var token = getToken();
  if (!token) return {};
  var decoded = JSON.parse(atob(token.split('.')[1]));
  return decoded;
}

function tokenUsername() {
  return decodeToken().username;
}

function tokenUserId() {
  return decodeToken().sub;
}

function deleteToken() {
  localStorage.removeItem('book-token');
}

function isAuthenticated() {
  return !!getToken();
}

function authorizationHeader() {
  return {
    headers: { Authorization: 'Bearer ' + getToken() }
  };
}