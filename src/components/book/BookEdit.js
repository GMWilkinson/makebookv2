import React from 'react';
import axios from 'axios';
import HintBox from '../page/HintBox'

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
    axios.get(`/api/books/${this.props.match.params.id}`)
      .then(res => {
        console.log('this is page: res.data', { book: res.data });
        this.setState({ book: res.data });
      });
  }

  render() {
    const book = this.state.book;
    console.log('book is', book);
    return (
      <section className="">
        <HintBox />
        {book
          ?
          <article className="columns">
            <div className="column is-4 is-offset-4">
              <div key={book._id}>
                <section className="media-content">
                  <div className="field">
                    <div className="control">
                      <label htmlFor="title">Title</label>
                      <input className="input"
                        name="title"
                        value={this.state.title || `${book.title}`}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                </section>
                <section className="media-content">
                  <div className="field">
                    <div className="control">
                      <label htmlFor="author">Author</label>
                      <input className="input"
                        name="author"
                        value={this.state.author || `${book.author}`}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                </section>
                <section className="media-content">
                  <div className="field">
                    <div className="control">
                      <label htmlFor="blurb">Blurb</label>
                      <textarea className="textarea"
                        name="blurb"
                        value={this.state.blurb || `${book.blurb}`}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                </section>
                <section className="media-content">
                  <div className="field">
                    <div className="control">
                      <h2>Is the Book ready for all to read?</h2>
                      <label htmlFor="isCompleted">Check here to publish-
                        <input type="radio"
                          name="isCompleted"
                          value={this.state.isCompleted || `${book.isCompleted}`}
                          onChange={({target: {value}}) => this.setState({value, isCompleted: true})}
                        />
                      </label>
                    </div>
                  </div>
                </section>
                <nav className="level">
                  <div className="level-left">
                    <div className="level-item" onClick={this.handleSubmit}>
                      <a className="button is-info">Save Changes</a>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </article>
          :

          <p>Please wait...</p>}
      </section>
    );
  }
}
