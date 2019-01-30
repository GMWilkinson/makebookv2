const router = require('express').Router();
const books = require('../controllers/books');
const users = require('../controllers/users');
const auth = require('../controllers/auth');
const pages = require('../controllers/pages');

router.route('/books')
  .get(books.index)
  .post(books.create);

router.route('/books/unfinished')
  .get(books.creatingIndex)
  .post(books.create)

router.route('/books/:bookId')
  .get(books.show)
  .put(pages.update)
  .delete(books.delete);

router.route('/users')
  .get(users.index);

router.post('/register', auth.register);
router.post('/login', auth.login);

router.route('/books/:bookId/pages')
  .get(pages.index)
  .post(pages.create)
  .delete(pages.delete);

router.route('/books/:bookId/pages/first')
  .get(pages.first)
  .post(pages.create);


router.route('/books/:bookId/pages/:pageId')
  .get(pages.page)
  .put(pages.update)
  .delete(pages.delete);

router.post('/books/:bookId/pages/:pageId/choices', pages.choiceCreate);


module.exports = router;
