import React from 'react';
import { Link } from 'react-router-dom';
import { decodeToken } from '../../lib/auth';


function BookBox({ book }) {
  return (
    <div className="column is-12">
      <article className="card book-card-box">
        <div className="card-header">
          <h3 className="is-subtitle is-3"><strong>{book.title}</strong> By {book.author}</h3>
        </div>
        <Link className="column" to={`/books/${book._id}`}>
          <figure className="content has-text-centered">
            <p className="">{book.blurb}</p>
          </figure>
        </Link>
      </article>
    </div>
  );
}

export default BookBox;
