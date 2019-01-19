import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isAuthenticated, deleteToken, decodeToken } from '../lib/auth';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout() {
    deleteToken();
    this.props.history.push('/');
  }

  componentDidMount() {
    console.log('Header was mounted');
  }

  render() {
    return (
      <nav className="navbar" id="navbar">
        {this.state.url && <p>{this.state.url}</p>}
        <div className="navbar-brand">
          <h2 className="title is-2 page-header">MakeBook</h2>
          {isAuthenticated() && <Link to="/users"><p className="">{decodeToken().username}'s profile</p></Link>}
        </div>
        <div className="navbar-end">
          <Link className="navbar-item page-header is-vcentered" to="/books">Finished Books</Link>
          {isAuthenticated() && <Link className="navbar-item page-header" to="/books/new">Create your own story!</Link>}
          {isAuthenticated() && <Link className="navbar-item page-header" to="/books/unfinished">Carry on with a story!</Link>}
          {!isAuthenticated() && <Link className="navbar-item page-header" to="/register">Register</Link>}
          {!isAuthenticated() && <Link className="navbar-item page-header" to="/login">Login</Link>}
          {isAuthenticated() && <a onClick={this.handleLogout} className="navbar-item page-header" to="/login">Logout</a>}
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);
