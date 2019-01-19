import React from 'react';
import axios from 'axios';
import { handleChange } from '../../lib/common';

export default class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value});
  }

  handleSubmit(e) {
    const { bookId, pageId } = this.props.match.params;
    e.preventDefault();
    console.log('Submit handled', bookId);
    axios.put(`/api/books/${bookId}/pages/${pageId}`, this.state)
      .then(() => this.props.history.push(`/books/${this.props.match.params.id}/pages`));
  }

  componentDidMount() {
    const { bookId, pageId } = this.props.match.params;
    axios.get(`/api/books/${bookId}/pages/${pageId}`)
      .then(axios.get(`/api/books/${bookId}/pages`))
      .then(res => {
        console.log('this is page: res.data', { page: res.data });
        this.setState({ page: res.data });
      });
  }

  render() {
    const page = this.state.page;
    return (
      <section className="main-story">
        {page
          ?
          <section>
            <div className="media-content">
              <div className="field">
                <p className="control">
                  <textarea className="textarea"
                    name="text"
                    value={this.state.text || ''}
                    onChange={this.handleChange}
                  />
                </p>
              </div>
            </div>
            <nav className="level">
              <div className="level-left">
                <div className="level-item" onClick={this.handleSubmit}>
                  <a className="button is-info">Submit</a>
                </div>
              </div>
            </nav>
          </section>
          :

          <p>Please wait...</p>}
      </section>
    );
  }
}
