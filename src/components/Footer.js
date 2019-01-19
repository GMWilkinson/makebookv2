import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('Footer was mounted');
  }

  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            Made by GMWilkinson
          </p>
        </div>
      </footer>
    );
  }
}

export default withRouter(Footer);
