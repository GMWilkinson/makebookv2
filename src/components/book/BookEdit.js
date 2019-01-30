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
            <p>{ book[0].title }</p>
            <div className="media-content">
              <div className="field">
                <p className="control">
                  <textarea className="textarea"
                    name="title"
                    value={this.state.title || `${book[0].title}`}
                    onChange={this.handleChange}
                  />
                </p>
              </div>
            </div>
            <div className="media-content">
              <div className="field">
                <p className="control">
                  <textarea className="textarea"
                    name="author"
                    value={this.state.author || `${book[0].author}`}
                    onChange={this.handleChange}
                  />
                </p>
              </div>
            </div>
            <div className="media-content">
              <div className="field">
                <p className="control">
                  <textarea className="textarea"
                    name="isCompleted"
                    value={this.state.isCompleted || `${book[0].isCompleted}`}
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
