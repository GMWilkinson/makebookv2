import React from 'react';
import { Link } from 'react-router-dom';
import { decodeToken } from '../../lib/auth';

function NewBookBox({ book }) {
  return (
    <div className="column is-12">
      <article className="card book-card-box">
        <div className="card-header">
          <h3 className="is-subtitle is-3"><strong>{book.title}</strong> By {book.author}</h3>
        </div>
        <Link className="column" to={`/books/${book._id}/pages`}>
          <figure className="content has-text-centered">
            <p className="papayawhip">Click here to continue with this book.</p>
            <p className="">{book.blurb}</p>
          </figure>
        </Link>
        <footer className="card-footer">
          <Link className="column is-6 card-footer-item" to={`/books/${book._id}`}>Read</Link>
          <Link className="column is-6 card-footer-item" to={`/books/${book._id}/edit`}>Edit</Link>
        </footer>
      </article>
    </div>
  )
}

export default NewBookBox;
