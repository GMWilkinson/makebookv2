import React from 'react';
import axios from 'axios';
import { handleChange } from '../../lib/common';
import NewPageForm from './NewPageForm';
import { isAuthenticated, decodeToken } from '../../lib/auth';
import { Link } from 'react-router-dom';

export default class PageNew extends React.Component {
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
          <h2 className="title is-2">New Page</h2>
          {isAuthenticated() && <p className="title is-3">Created by {decodeToken().username}</p>}
          <div>
          </div>
          <NewPageForm
            handleChange = {this.handleChange}
            handleSubmit = {this.handleSubmit}
          />
        </div>
        <div>
          <Link to={`/books/${this.props.match.params.id}/pages/${this.props.match.params.pageId}/choices`}>Add choices</Link>
        </div>
      </section>
    );
  }
}
