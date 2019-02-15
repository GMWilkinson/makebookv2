import React from 'react';

class Tutorial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="">
        <h1 className="title is-2 has-text-centered">Tutorial</h1>
        <article className="columns">
          <div className="column is-8 is-offset-2">
            <h2 className="subtitle">Creating a Book</h2>
            <p className="tutorial-text">
              To create a new book you must first click on the
              <strong>Create a new story</strong> button in the navbar at the
              top of the page.
            </p>
            <p>Give your book a <strong>title</strong>. Something catchy would be great.</p>
            <p>Then, in the <strong>Author</strong> box put your username. Your username will be shown above the label. It is also shown in the navbar.</p>
            <p>
              Next, time to add a <strong>blurb</strong>. A blurb is a description of your book. A taster of what your readers should expect.
              This is not mandatory but it would be nice for your readers to know what your book is about. Also, fans of a certain
              genre know whether or not your book would suit them.
            </p>
            <p>
              Lastly, the <strong>image</strong>. This will be the cover for your book. Again it's not mandatory but can be a nice way to give your book some character.
              This will be the first thing someone will see if they choose to read your book.
            </p>
            <hr />
            <p>
              All of the books you create can only be seen by you until you publish.
              So don't worry, make as many drafts or silly stories as you like.
            </p>
            <hr />
          </div>
        </article>
        <article>
          <div className="column is-8 is-offset-2">
            <h2 className="subtitle">Creating pages</h2>
            <p>
              Now that you have a book, it's time to fill it up.
              After creating the book itself you will be taken to the <strong>Unfinished Books</strong> page.
              Click on your book and you will be taken to the <strong>Page Index</strong>, if this is a new book it will be empty.
              Now, page one. Click on the <strong>Create a new first page</strong> button, this will take you to <strong>Page create</strong>.
              There are only two inputs for creating pages. The <strong>PageName</strong> and <strong>Text</strong> boxes.
              The pages are not required to have a name but it may help you to keep track later on.
            </p>
            <p>
              Your first page will probably be your most important. Not only will it be the
              the point at which a reader will decide if they will bother to continue reading and
              as it is most likely a game book, they will be bouncing back here frequently.
            </p>
            <p>Next, before adding choices to a page you need a page for it to connect to so create your next page.</p>
            <p>Now that you have two pages it's time to attach them with choices.</p>
            <hr />
            <h2 className="subtitle">Adding Choices</h2>
            <p>
              <strong>The first step:</strong> Click on the <strong>Copy this ID</strong> button on the page you wish to attach.
              You will get a notice telling you that the page ID is copied.
            </p>
            <p>
              <strong>The next step:</strong> Click on the <strong>Add Choices</strong> tab.
              This will open up the add choices page. Then paste into the <strong>Attach to?</strong> box.
              Now add the text of the choice into the adjacent box, this is the choice that the user will click on to progress in the story.
              Press submit and your pages are now connected.
            </p>
            <hr />
            <p>
              You can add as many choices as you like to a page but all pages need at least one.
              Even if it only says. Go back to start.
            </p>
            <hr />
            <h2 className="subtitle">Editing</h2>
            <p>
              You can edit the details of a book or a page. On either the Page Index or the Unfinished Books Index.
            </p>
            <p>
              <strong>Pages</strong>: The edit page tab is located in the Page Index. You can edit the text of the page itself or the text of the choice.
              If you need to change where the choice takes the reader, it is recommended to create a new choice and delete the old one.
            </p>
            <p>
              <strong>Books</strong>: You can only edit the books that are not published yet. The edit book tab
              is located on your Unfinished Books Index. You can change the Title, Blurb, Image and also publish the Book
              by checking the <strong>Check here to publish</strong> box. If you need to edit a published book. You must move it
              back into the Unfinished Books Index by checking the box in your profile page.
            </p>
            <p>
              <strong>You can also edit the Author of the book but this should only be done if you are moving the book to a different account.
              If the Author name does not match your Username, you will no longer be able to see that book unless you change account.</strong>
            </p>
            <hr />
            <h2 className="subtitle">Deleting</h2>
            <p>
              You can delete any page except for the first one. Make sure that you definitely need to delete it and not just edit it, as you will not be able to
              get it back. You can also delete your book. This will delete everything, including all of the pages.
            </p>
            <p>
              Only the Author of a book can delete it.
            </p>
            <hr />
            <p>
              <strong>Rememer! Nobody can see your unfinished books and you can have as many as you like. So if
              you're not sure that you want to delete, DON'T!</strong>
            </p>
            <hr />
          </div>
        </article>
      </section>
    );
  }
}

export default Tutorial;
