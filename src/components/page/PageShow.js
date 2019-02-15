import React from 'react';
import axios from 'axios';
import HintBox from './HintBox';

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
      <section className="page">
        {page
          ?
          <article>
            <h1 className="title has-text-centered">Add Choices</h1>
            <HintBox />
            <div className="columns is-multiline">
              <div className="column is-4 is-offest-4">
                <h2>{ page.pageName }</h2>
                <h2>{ page.text }</h2>
                {page && page.choices.map(choice =>
                  <div className="" key={choice._id}>
                    <h2>Choice: { choice.text }</h2>
                  </div>
                )}
              </div>
              <article className="media column is-4 is-offest-4">
                <div className="media-content">
                  <div className="field">
                    <p className="control">
                      <textarea className="textarea"
                        placeholder="Add the text of your choice here..."
                        name="text"
                        value={this.state.text || ''}
                        onChange={this.handleChange}
                      />
                    </p>
                  </div>
                </div>
                <div className="media-content column is-12">
                  <div className="field">
                    <p className="control">
                      <input className="input"
                        placeholder="Paste the page that you want to connect to this choice here..."
                        name="nextPage"
                        value={this.state.nextPage || ''}
                        onChange={this.handleChange}
                      />
                    </p>
                  </div>
                  <nav className="level column is-4 is-offest-4">
                    <div className="level-left">
                      <div className="level-item" onClick={this.handleSubmit}>
                        <a className="button is-info">Create choice</a>
                      </div>
                    </div>
                  </nav>
                </div>
              </article>
            </div>
          </article>

          :
          <p>Please wait...</p>}
      </section>
    );
  }
}
