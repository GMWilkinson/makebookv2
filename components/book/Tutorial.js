"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tutorial = function (_React$Component) {
  _inherits(Tutorial, _React$Component);

  function Tutorial(props) {
    _classCallCheck(this, Tutorial);

    var _this = _possibleConstructorReturn(this, (Tutorial.__proto__ || Object.getPrototypeOf(Tutorial)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Tutorial, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { className: "" },
        _react2.default.createElement(
          "h1",
          { className: "title is-2 has-text-centered" },
          "Tutorial"
        ),
        _react2.default.createElement(
          "article",
          { className: "columns" },
          _react2.default.createElement(
            "div",
            { className: "column is-8 is-offset-2" },
            _react2.default.createElement(
              "h2",
              { className: "subtitle" },
              "Creating a Book"
            ),
            _react2.default.createElement(
              "p",
              { className: "tutorial-text" },
              "To create a new book you must first click on the",
              _react2.default.createElement(
                "strong",
                null,
                "Create a new story"
              ),
              " button in the navbar at the top of the page."
            ),
            _react2.default.createElement(
              "p",
              null,
              "Give your book a ",
              _react2.default.createElement(
                "strong",
                null,
                "title"
              ),
              ". Something catchy would be great."
            ),
            _react2.default.createElement(
              "p",
              null,
              "Then, in the ",
              _react2.default.createElement(
                "strong",
                null,
                "Author"
              ),
              " box put your username. Your username will be shown above the label. It is also shown in the navbar."
            ),
            _react2.default.createElement(
              "p",
              null,
              "Next, time to add a ",
              _react2.default.createElement(
                "strong",
                null,
                "blurb"
              ),
              ". A blurb is a description of your book. A taster of what your readers should expect. This is not mandatory but it would be nice for your readers to know what your book is about. Also, fans of a certain genre know whether or not your book would suit them."
            ),
            _react2.default.createElement(
              "p",
              null,
              "Lastly, the ",
              _react2.default.createElement(
                "strong",
                null,
                "image"
              ),
              ". This will be the cover for your book. Again it's not mandatory but can be a nice way to give your book some character. This will be the first thing someone will see if they choose to read your book."
            ),
            _react2.default.createElement("hr", null),
            _react2.default.createElement(
              "p",
              null,
              "All of the books you create can only be seen by you until you publish. So don't worry, make as many drafts or silly stories as you like."
            ),
            _react2.default.createElement("hr", null)
          )
        ),
        _react2.default.createElement(
          "article",
          null,
          _react2.default.createElement(
            "div",
            { className: "column is-8 is-offset-2" },
            _react2.default.createElement(
              "h2",
              { className: "subtitle" },
              "Creating pages"
            ),
            _react2.default.createElement(
              "p",
              null,
              "Now that you have a book, it's time to fill it up. After creating the book itself you will be taken to the ",
              _react2.default.createElement(
                "strong",
                null,
                "Unfinished Books"
              ),
              " page. Click on your book and you will be taken to the ",
              _react2.default.createElement(
                "strong",
                null,
                "Page Index"
              ),
              ", if this is a new book it will be empty. Now, page one. Click on the ",
              _react2.default.createElement(
                "strong",
                null,
                "Create a new first page"
              ),
              " button, this will take you to ",
              _react2.default.createElement(
                "strong",
                null,
                "Page create"
              ),
              ". There are only two inputs for creating pages. The ",
              _react2.default.createElement(
                "strong",
                null,
                "PageName"
              ),
              " and ",
              _react2.default.createElement(
                "strong",
                null,
                "Text"
              ),
              " boxes. The pages are not required to have a name but it may help you to keep track later on."
            ),
            _react2.default.createElement(
              "p",
              null,
              "Your first page will probably be your most important. Not only will it be the the point at which a reader will decide if they will bother to continue reading and as it is most likely a game book, they will be bouncing back here frequently."
            ),
            _react2.default.createElement(
              "p",
              null,
              "Next, before adding choices to a page you need a page for it to connect to so create your next page."
            ),
            _react2.default.createElement(
              "p",
              null,
              "Now that you have two pages it's time to attach them with choices."
            ),
            _react2.default.createElement("hr", null),
            _react2.default.createElement(
              "h2",
              { className: "subtitle" },
              "Adding Choices"
            ),
            _react2.default.createElement(
              "p",
              null,
              _react2.default.createElement(
                "strong",
                null,
                "The first step:"
              ),
              " Click on the ",
              _react2.default.createElement(
                "strong",
                null,
                "Copy this ID"
              ),
              " button on the page you wish to attach. You will get a notice telling you that the page ID is copied."
            ),
            _react2.default.createElement(
              "p",
              null,
              _react2.default.createElement(
                "strong",
                null,
                "The next step:"
              ),
              " Click on the ",
              _react2.default.createElement(
                "strong",
                null,
                "Add Choices"
              ),
              " tab. This will open up the add choices page. Then paste into the ",
              _react2.default.createElement(
                "strong",
                null,
                "Attach to?"
              ),
              " box. Now add the text of the choice into the adjacent box, this is the choice that the user will click on to progress in the story. Press submit and your pages are now connected."
            ),
            _react2.default.createElement("hr", null),
            _react2.default.createElement(
              "p",
              null,
              "You can add as many choices as you like to a page but all pages need at least one. Even if it only says. Go back to start."
            ),
            _react2.default.createElement("hr", null),
            _react2.default.createElement(
              "h2",
              { className: "subtitle" },
              "Editing"
            ),
            _react2.default.createElement(
              "p",
              null,
              "You can edit the details of a book or a page. On either the Page Index or the Unfinished Books Index."
            ),
            _react2.default.createElement(
              "p",
              null,
              _react2.default.createElement(
                "strong",
                null,
                "Pages"
              ),
              ": The edit page tab is located in the Page Index. You can edit the text of the page itself or the text of the choice. If you need to change where the choice takes the reader, it is recommended to create a new choice and delete the old one."
            ),
            _react2.default.createElement(
              "p",
              null,
              _react2.default.createElement(
                "strong",
                null,
                "Books"
              ),
              ": You can only edit the books that are not published yet. The edit book tab is located on your Unfinished Books Index. You can change the Title, Blurb, Image and also publish the Book by checking the ",
              _react2.default.createElement(
                "strong",
                null,
                "Check here to publish"
              ),
              " box. If you need to edit a published book. You must move it back into the Unfinished Books Index by checking the box in your profile page."
            ),
            _react2.default.createElement(
              "p",
              null,
              _react2.default.createElement(
                "strong",
                null,
                "You can also edit the Author of the book but this should only be done if you are moving the book to a different account. If the Author name does not match your Username, you will no longer be able to see that book unless you change account."
              )
            ),
            _react2.default.createElement("hr", null),
            _react2.default.createElement(
              "h2",
              { className: "subtitle" },
              "Deleting"
            ),
            _react2.default.createElement(
              "p",
              null,
              "You can delete any page except for the first one. Make sure that you definitely need to delete it and not just edit it, as you will not be able to get it back. You can also delete your book. This will delete everything, including all of the pages."
            ),
            _react2.default.createElement(
              "p",
              null,
              "Only the Author of a book can delete it."
            ),
            _react2.default.createElement("hr", null),
            _react2.default.createElement(
              "p",
              null,
              _react2.default.createElement(
                "strong",
                null,
                "Rememer! Nobody can see your unfinished books and you can have as many as you like. So if you're not sure that you want to delete, DON'T!"
              )
            ),
            _react2.default.createElement("hr", null)
          )
        )
      );
    }
  }]);

  return Tutorial;
}(_react2.default.Component);

exports.default = Tutorial;