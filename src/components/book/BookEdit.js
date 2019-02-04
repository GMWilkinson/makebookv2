import React from 'react';
import axios from 'axios';

export default class BookEdit extends React.Component {
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
    e.preventDefault();
    console.log('Submit handled', this.props.match.params.id);
    axios.put(`/api/books/${this.props.match.params.id}`, this.state)
      .then(() => this.props.history.push('/books/unfinished'));
  }

  componentDidMount() {
    axios.get('/api/books/unfinished')
      .then(axios.get(`/api/books/${this.props.match.params.id}`))
      .then(res => {
        console.log('this is page: res.data', { book: res.data });
        this.setState({ book: res.data });
      });
  }

  render() {
    const book = this.state.book;
    console.log('book is', book);
    return (
      <section className="main-story">
        {book
          ?
          <section>
            <h2>Title</h2>
            <div className="media-content">
              <div className="field">
                <p className="control">
                  <input className="input"
                    name="title"
                    value={this.state.title || `${book[0].title}`}
                    onChange={this.handleChange}
                  />
                </p>
              </div>
            </div>
            <h2>Author</h2>
            <div className="media-content">
              <div className="field">
                <p className="control">
                  <input className="input"
                    name="author"
                    value={this.state.author || `${book[0].author}`}
                    onChange={this.handleChange}
                  />
                </p>
              </div>
            </div>
            <h2>Add a blurb here</h2>
            <div className="media-content">
              <div className="field">
                <p className="control">
                  <textarea className="textarea"
                    name="author"
                    value={this.state.blurb || ''}
                    onChange={this.handleChange}
                  />
                </p>
              </div>
            </div>
            <div className="media-content">
              <div className="field">
                <p className="control">
                  <label htmlFor="isCompleted">
                    <h2>Is the Book ready for all to read?</h2>
                    <p>Type <strong>true</strong> in the box if ready to publish. The book will then be available on the finished books page!</p>
                    <textarea className="textarea"
                      name="isCompleted"
                      value={this.state.isCompleted || `${book[0].isCompleted}`}
                      onChange={this.handleChange}
                    />
                  </label>
                </p>
              </div>
            </div>
            <nav className="level">
              <div className="level-left">
                <div className="level-item" onClick={this.handleSubmit}>
                  <a className="button is-info">Save Changes</a>
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
