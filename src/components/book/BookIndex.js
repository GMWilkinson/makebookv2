import React from 'react';
import axios from 'axios';
import BookBox from './BookBox';
import { authorizationHeader, decodeToken } from '../../lib/auth';

class BookIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.deleteBook = this.deleteBook.bind(this);
  }

  deleteBook(id) {
    console.log('deleting book', id);
    axios.delete(`/api/books/${id}`, authorizationHeader())
      .then(this.props.history.push('/'));
  }

  componentDidMount() {
    axios.get('/api/books')
      .then(result => this.setState({ books: result.data }));
  }

  render() {
    return (
      <section className="book-index">
        <h1 className="title book-index-title column is-12">All the books</h1>
        <br />
        <div className="columns is-multiline">
          {this.state.books && this.state.books.map(
            book =>
              <div className="column is-6 is-centered" key={book._id}>
                <BookBox className="columns" book={book}/>
                {(() => {
                  if (book.author === decodeToken().username) {
                    return <p className="column is-12 card-footer-item" onClick={() => this.deleteBook(book._id)}>Delete</p>
                  }
                })()}
              </div>
          )}
        </div>
      </section>
    );
  }
}
export default BookIndex;
