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
    axios.get('/api/books')
      .then(result => this.setState({ books: result.data }));
  }

  render() {
    return (
      <section>
        <div>
          {isAuthenticated() && <h1>{decodeToken().username}s Profile <img className="image is-64x64" src={decodeToken().image}/></h1>}
        </div>
        <div>
          <div className="columns">
            {this.state.books && this.state.books.map(
              book => <MyBookBox key={book._id} book={book}/>
            )}
          </div>
        </div>
      </section>
    );
  }
}
export default Profile;
