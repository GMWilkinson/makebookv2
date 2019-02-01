import React from 'react';
import { Link } from 'react-router-dom';

function NewBookBox({ book }) {
  return (
    <div>
      <article className="card">
        <div className="card-header">
          <h3 className="is-subtitle is-3">{book.title}</h3>
        </div>
        <Link className="column is-4" to={`/books/${book._id}/pages`}>
          <figure className="image content">
            <img src={book.image} />
          </figure>
          <p>{book.author}</p>
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
