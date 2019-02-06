import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../../lib/auth';

export default class BookShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get(`/api/books/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ book: res.data });
      });
  }

  render() {
    const book = this.state.book;
    return (
      <section className="book-show">
        {book
          ?
          <div className="columns is-multiline is-centered">
            {(() => {
              console.log('what is', book);
            })()}
            <Link className="column is-12" to={`/books/${book._id}/story`}>
              <h2 className="book-show-title title">{ book.title }</h2>
              <figure className="has-text-centered column is-12">
                <img className="image-box" src={ book.image } />
              </figure>
            </Link>
          </div>
          :
          <p>Please wait...</p>}
      </section>
    );
  }
}
