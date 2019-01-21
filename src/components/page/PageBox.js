import React from 'react';
import { Link } from 'react-router-dom';

function PageBox({ page, book }) {
  return (
    <Link to={`/books/${this.props.match.params.id}/pages/new/writing`}>
      <article className="column is-4">
        <p>{book.text}</p>
      </article>
    </Link>
  );
}

export default PageBox;
