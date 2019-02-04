import React from 'react';
import axios from 'axios';
import MyBookBox from './MyBookBox';
import { isAuthenticated, decodeToken } from '../../lib/auth';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get('/api/books/unfinished')
      .then(result => this.setState({ books: result.data }));
  }

  render() {
    const username = decodeToken().username;
    console.log('username is', username)
    return (
      <section>
        <div>
          {isAuthenticated() && <h1>{decodeToken().username}s Profile <img className="image is-64x64" src={decodeToken().image}/></h1>}
        </div>
        <div>
          <div className="columns">
            {this.state.books && this.state.books.map(
              book =>
                <div className="column is-6" key={book._id}>
                  {(() => {
                    if (book.author === username) {
                      return <div className="card">
                        <div className="card-header">
                          <h2 className="blue">{book.title}</h2>
                        </div>
                        <div className="content">
                          <p>{book.blurb}</p>
                        </div>
                        <div>
                          <p className="card-footer-item" onClick={() => this.deleteBook(book._id)}>Delete</p>
                        </div>
                      </div>
                    }
                  })()}
                </div>
            )}
          </div>
        </div>
      </section>
    );
  }
}
export default Profile;
