const Page = require('../models/page');

function indexRoute(req, res, next) {
  Page.find({ book: req.params.bookId })
    .then(pages => res.json(pages))
    .catch(next);
}

function showRoute(req, res, next) {
  Page.find({ book: req.params.pageId })
    .then(page => res.json(page))
    .catch(next);
}


function createRoute(req, res, next) {
  req.body.book = req.params.bookId;
  console.log('req.location is', req.url);
  req.body.isFirstPage = req.url.endsWith('first');
  Page.create(req.body)
    .then(page => res.status(201).json(page))
    .catch(next);
}

function firstRoute(req, res, next) {
  Page.findOne({ book: req.params.bookId, isFirstPage: true })
    .then(page => res.json(page))
    .catch(next);
}

function deleteRoute(req, res, next) {
  Page.findByIdAndDelete(req.params.pageId)
    .then(() => res.sendStatus(204))
    .catch(next);
}

function pageRoute(req, res, next) {
  Page.findById(req.params.pageId )
    .then(page => res.json(page))
    .catch(next);
}

function choiceCreateRoute(req, res, next) {
  Page.findById(req.params.pageId)
    .then(page => {
      page.choices.push(req.body);
      return page.save();
    })
    .then(page => res.json(page))
    .catch(next);
}

function updateRoute(req, res, next) {
  Page.findById(req.params.pageId)
    .then(page => page.set(req.body))
    .then(page => page.save())
    .then(page => res.json(page))
    .catch(next);
}

module.exports ={
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  first: firstRoute,
  page: pageRoute,
  delete: deleteRoute,
  choiceCreate: choiceCreateRoute
};
