import React from 'react';
import axios from 'axios';

export default class FirstPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(pageId) {
    console.log('In onClick, pageId', pageId);
    axios.get(`/api/books/${this.props.match.params.id}/pages/${pageId}`)
      .then(res => {
        this.setState({ page: res.data });
      });
  }

  componentDidMount() {
    axios.get(`/api/books/${this.props.match.params.id}/pages/first`)
      .then(res => {
        // console.log({ page: res.data });
        this.setState({ page: res.data });
      });
  }

  render() {
    const page = this.state.page;
    console.log('this.state.page is', this.state.page);
    return (
      <section className="main-story">
        {page
          ?
          <section className="columns">
            <div className="column is-6 is-offset-3 page">
              <h1 className="title"></h1>
              <p className="story-text">{page.text}</p>
              <div>
                {page && page.choices.map(choice =>
                  <div className="choice-text-box" key={choice._id} onClick={() => this.handleClick(choice.nextPage)}>
                    <p className="choice-text">{choice.text}</p>
                  </div>
                )}
              </div>
            </div>
            <div className="column is-3"></div>
          </section>

          :
          <p>This book has no pages...</p>}
      </section>
    );
  }
}
