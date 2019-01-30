import React from 'react';
import axios from 'axios';
import BookBox from './BookBox';
import { authorizationHeader } from '../../lib/auth';

class BookIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  deleteBook(id) {
    console.log('deleting page', id);
    axios.delete(`/api/books/${this.props.match.params.id}`, authorizationHeader())
      .then(res => {
        this.setState({ page: res.data});
      });
  }

  componentDidMount() {
    axios.get('/api/books')
      .then(result => this.setState({ books: result.data }));
  }

  render() {
    return (
      <section className="columns is-multiline">
        <hr />
        <h1 className="subtitle column is-12">All the books</h1>
        <hr />
        <div className="columns column is-12 book-index">
          {this.state.books && this.state.books.map(
            book => <BookBox className="" key={book._id} book={book}/>
          )}
        </div>
      </section>
    );
  }
}
export default BookIndex;
