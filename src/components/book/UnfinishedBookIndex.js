import React from 'react';
import axios from 'axios';
import NewBookBox from './NewBookBox';
import { authorizationHeader } from '../../lib/auth';

class UnfinishedBookIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const book = this.state.books;
    const bookId = book[0]._id;
    console.log('In onClick, pageId and bookId', book);
    axios.get(`/api/books/${bookId}`)
      .then(() =>  this.setState({ isCompleted: true }));
  }

  componentDidMount() {
    axios.get('/api/books/unfinished')
      .then(result => this.setState({ books: result.data }));
  }

  deleteBook(id) {
    console.log('deleting book', id);
    axios.delete(`/api/books/${id}`, authorizationHeader())
      .then(res => {
        this.setState({ page: res.data});
      });
  }

  render() {
    console.log('this is this.state.books', this.state.books);
    return (
      <section className="">
        <div>
          <h1 className="choice-text">Your unfinished books</h1>
          <div className="columns is-multiline">
            {this.state.books && this.state.books.map(
              book =>
                <div className="column box-margin is-6" key={book._id}>
                  <NewBookBox className="" book={book}/>
                  <a className="delete" onClick={() => this.deleteBook(book._id)}>Delete</a>
                </div>
            )}
            <div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default UnfinishedBookIndex;
