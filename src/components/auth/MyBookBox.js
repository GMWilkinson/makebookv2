import React from 'react';

function MyBookBox({ book }) {
  return (
    <article className="column is-4">
      <figure className="image">
        <img src={book.image} />
      </figure>
      <h3>{book.name}</h3>
      <p>{book.author}</p>
    </article>
  );
}

export default MyBookBox;
