// const Book = require('../models/book');
// function createRoute(req, res, next) {
//   Book.findById(req.params.bookId)
//     .then(book => {
//       req.body.user = req.tokenUserId;
//       book.comments.push(req.body);
//       return book.save();
//     })
//     .then(book => Book.populate(book, 'createdBy comments.user'))
//     .then(book => res.json(book))
//     .catch(next);
// }
// module.exports ={
//   createRoute: createRoute
// }
