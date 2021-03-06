import React from 'react';
import axios from 'axios';
import { handleChange } from '../../lib/common';
import NewBookForm from './NewBookForm';
import { isAuthenticated, decodeToken } from '../../lib/auth';

export default class BookNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('Submit handled', this.state);
    axios.post('/api/books', this.state)
      .then(() => this.props.history.push('/books/unfinished'));
  }

  render() {
    console.log('what is', this.state);
    return(
      <section>
        <h2 className="title is-2 has-text-centered">Create your own story!</h2>
        {isAuthenticated() && <p className="title has-text-centered is-3">By {decodeToken().username}</p>}
        <NewBookForm
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
          className="columns"
        />
      </section>
    );
  }
}
