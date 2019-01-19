import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className="home-main">
        <div className="title is-1 home-title">
          <h1>Welcome to MakeBook</h1>
        </div>
        <section className="">
          <article className="home-text is-vcentered">
            <p>Do you remember game-books?</p>
            <p>With this app you can create your own!</p>
            <br />
            <p>Register or login to be able to create your own books.</p>
            <p>If not you can always read the books that others have created.</p>
          </article>
        </section>
      </main>
    );
  }
}
export default Home;
