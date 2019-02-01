import React from 'react';
import { Link } from 'react-router-dom';

function BookBox({ book }) {
  return (

    <article>
      <Link className="column is-4" to={`/books/${book._id}`}>
        <h3 className="is-subtitle is-3">{book.title}</h3>
        <figure className="image">
          <img src={book.image} />
        </figure>
        <p>{book.author}</p>
      </Link>
      <a className="card-footer-item" onClick={() => this.deleteBook(book._id)}>Delete</a>
    </article>

  );
}

export default BookBox;
