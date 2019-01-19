import React from 'react';
import { Link } from 'react-router-dom';

function BookBox({ book }) {
  return (
    <Link className="column is-4" to={`/books/${book._id}`}>
      <article>
        <h3 className="is-subtitle is-3">{book.title}</h3>
        <figure className="image">
          <img src={book.image} />
        </figure>
        <p>{book.author}</p>
      </article>
    </Link>
  );
}

export default BookBox;
