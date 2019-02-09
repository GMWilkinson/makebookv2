import React from 'react';
import axios from 'axios';
import NewBookBox from './NewBookBox';
import { authorizationHeader, decodeToken, isAuthenticated } from '../../lib/auth';
import HintBox from '../page/HintBox'

class UnfinishedBookIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
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
      .then(this.props.history.push('/'));
  }

  render() {
    const username = decodeToken().username;
    console.log('this is', username);
    return (
      <section className="book-index">
        <div className="">
          <div className="has-text-centered book-index-title">
            {isAuthenticated() && <p className="title">{username}'s Unfinished Books</p>}
          </div>
          <HintBox />
          <div className="columns is-multiline">
            {this.state.books && this.state.books.map(
              book =>
                <div className="column is-6 book-box" id="test" key={book._id}>
                  {(() => {
                    if (book.author === username) {
                      return <div className="books"><NewBookBox handleClick = {this.handleClick} className="columns" book={book}/>
                        <div className="column is-4 is-offset-4 delete-box has-text-centered">
                          <p className="" onClick={() => this.deleteBook(book._id)}>Delete</p>
                        </div>
                      </div>
                    }
                  })()}
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
