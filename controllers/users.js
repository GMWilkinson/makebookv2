const User = require('../models/user');

function indexRoute(req, res, next) {
  User.find()
    .then(users => res.json(users));
}
module.exports = {
  index: indexRoute
};
