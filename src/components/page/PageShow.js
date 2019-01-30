import React from 'react';
import axios from 'axios';

import { decodeToken } from '../../lib/auth';

export default class PageShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value});
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('Submit handled', this.props.match.params.id);
    axios.post(`/api/books/${this.props.match.params.id}/pages/${this.state.page._id}/choices`, this.state)
      .then(() => this.props.history.push(`/books/${this.props.match.params.id}/pages`));
  }

  handleClick(pageId) {
    this.setState({ nextPage: pageId });
  }
  handleClick2() {
    axios.get(`/api/books/${this.props.match.params.id}/pages`);
  }

  componentDidMount() {
    const { bookId, pageId } = this.props.match.params;
    axios.get(`/api/books/${bookId}/pages/${pageId}`)
      .then(axios.get(`/api/books/${this.props.match.params.id}/pages`))
      .then(res => {
        console.log('page: res.data is', { page: res.data });
        console.log( { res } );
        this.setState({ page: res.data });
      });
  }

  render() {
    const page = this.state.page;
    console.log('this is this', this.props.match.params);
    return (
      <section>
        {page
          ?

          <div>
            <div>
              <h1>Page</h1>
              <h2>{ page.pageName }</h2>
              <h2>{ page._id }</h2>
              {page && page.choices.map(choice =>
                <div className="column is-3" key={choice._id}>
                  <h2>{ choice.text }</h2>
                  <h2>{ choice.nextPage }</h2>
                </div>
              )}
            </div>
            <article className="media">
              <figure className="media-left">
                <p className="image is-64x64">
                  <img src={decodeToken().image}/>
                </p>
              </figure>
              <div className="media-content">
                <div className="field">
                  <p className="control">
                    <textarea className="textarea"
                      placeholder="Add a choice.."
                      name="text"
                      value={this.state.text || ''}
                      onChange={this.handleChange}
                    />
                  </p>
                </div>
              </div>
              <div className="media-content">
                <div className="field">
                  <p className="control">
                    <textarea className="textarea"
                      placeholder="Link to"
                      name="nextPage"
                      value={this.state.nextPage || ''}
                      onChange={this.handleChange}
                    />
                  </p>
                </div>
                <nav className="level">
                  <div className="level-left">
                    <div className="level-item" onClick={this.handleSubmit}>
                      <a className="button is-info">Submit</a>
                    </div>
                  </div>
                </nav>
              </div>
            </article>
          </div>

          :
          <p>Please wait...</p>}
      </section>
    );
  }
}
