import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className="home-main columns is-multiline">
        <div className="column is-12">
          <h1 className="title home-title has-text-centered">Welcome to MakeBook</h1>
        </div>
        <section className="column is-6 is-offset-3">
          <article className="home-text content has-text-centered">
            <p>Do you remember game-books?</p>
            <p>With this app you can create your own!</p>
            <p>Register or login to be able to create your own books.</p>
            <p>If not you can always read the books that others have created.</p>
          </article>
        </section>
      </main>
    );
  }
}
export default Home;
