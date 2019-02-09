import React from 'react';
import axios from 'axios';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { authorizationHeader } from '../../lib/auth';
import { Link } from 'react-router-dom';
import { hintRandomizer } from '../../lib/randomHint';
import HintBox from './HintBox';

class PageIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onCopy = this.onCopy.bind(this);
    this.deletePage = this.deletePage.bind(this);
  }

  handleClick(pageId) {
    console.log('In onClick, pageId', pageId);
    axios.get(`/api/books/${this.props.match.params.id}/pages/first`)
      .then(res => {
        this.setState({ page: res.data });
      });
  }

  deletePage(id) {
    console.log('deleting page', id);
    axios.delete(`/api/books/${this.props.match.params.id}/pages/${id}`, authorizationHeader())
      .then(res => {
        this.setState({ page: res.data});
      });
  }

  componentDidMount() {
    axios.get(`/api/books/${this.props.match.params.id}/pages`)
      .then(res => {
        this.setState({ page: res.data });
      });
  }

  onChange({target: {value}}) {
    this.setState({value, copied: false});
  }


  onCopy() {
    this.setState({copied: true});
  }

  render() {
    const page = this.state.page;
    const book = this.props.match.params.id;
    console.log('page is', page);
    return (
      <section className="columns">
        {page
          ?
          <div className="column is-12">
            <h1 className="title">All the pages</h1>
            {this.state.copied ? <span className="copied" style={{color: 'red'}}>Copied: Now go to <strong>Add Choices</strong> on the page you you want to link this page to.</span> : null}
            <HintBox />
            {(() => {
              if (page.length === 0) {
                return <Link to={`/books/${book}/pages/first`}>Create a new first page.</Link>;
              } else {
                return <Link to={`/books/${book}/pages/new`}>Create a new page.</Link>;
              }
            })()}
            <div className="columns is-multiline">
              {page && page.map(page =>
                <div className="column is-3" key={page._id}>

                  <div className="card page-card-box">
                    <header className="card-header">
                      <div>
                        <div className="subtitle has-text-centered">
                          <h2>{page.pageName}</h2>
                        </div>
                        <div>
                          <input value={page._id}
                            onChange={({target: {value}}) => this.setState({value, copied: false})}
                            className="copyId" />
                          <CopyToClipboard text={page._id} className="copy column is-12" onCopy={() => this.setState({copied: true})}>
                            <button className="button">Copy this ID.</button>
                          </CopyToClipboard>
                        </div>
                      </div>
                    </header>
                    <div className="content page-index-content">
                      <p className="page-index">{page.text}</p>
                    </div>
                    <footer className="card-footer">
                      <Link to={`/books/${book}/pages/${page._id}`} className="card-footer-item">Add Choices</Link>
                      <Link to={`/books/${book}/pages/${page._id}/edit/page`} className="card-footer-item">Edit</Link>
                      <a className="card-footer-item" onClick={() => this.deletePage(page._id)}>Delete</a>
                    </footer>
                  </div>
                </div>
              )}
            </div>
            <div>
            </div>
          </div>

          :
          <p>Please wait...</p>}
      </section>
    );
  }
}
export default PageIndex;
