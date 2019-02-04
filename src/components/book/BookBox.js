import React from 'react';
import { Link } from 'react-router-dom';
import { decodeToken } from '../../lib/auth';

function BookBox({ book }) {
  return (
    <article className="card column is-4">
      <h3 className="card-header subtitle">{book.title}</h3>
      <Link className="content" to={`/books/${book._id}`}>
        <p>{book.blurb}</p>
        <p>By {book.author}</p>
      </Link>
      {(() => {
        if (book.author === decodeToken().username) {
          return <footer className="card-footer-item">
            <button className="button is-danger" onClick={() => this.deleteBook(book._id)}>Delete</button>
          </footer>
        }
      })()}
    </article>

  );
}

export default BookBox;
