import React from 'react';
import axios from 'axios';
import { handleChange } from '../../lib/common';
import PageForm from './PageForm';
import { isAuthenticated, decodeToken } from '../../lib/auth';

export default class NewFirstPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    axios.get(`/api/books/${this.props.match.params.id}/pages`)
      .then(res => {
        // console.log({ page: res.data });
        this.setState({ page: res.data });
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('Submit handled', this.props.match.params.id);
    axios.post(`/api/books/${this.props.match.params.id}/pages`, this.state)
      .then(() => this.props.history.push(`/books/${this.props.match.params.id}/pages`));
  }

  render() {
    const page = this.state.page;
    console.log('what is this', page);
    return(
      <section>
        <div>
          <h2 className="title is-2">First Page</h2>
          {isAuthenticated() && <p className="title is-3">Created by {decodeToken().username}</p>}
          <div>
          </div>
          <PageForm
            handleChange = {this.handleChange}
            handleSubmit = {this.handleSubmit}
          />
        </div>
      </section>
    );
  }
}
