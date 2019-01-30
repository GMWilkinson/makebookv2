import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import BookIndex from './components/book/BookIndex';
import BookShow from './components/book/BookShow';
import NewFirstPage from './components/page/NewFirstPage';
import Story from './components/page/Story';
import PageIndex from './components/page/PageIndex';
import PageShow from './components/page/PageShow';
import Edit from './components/page/Edit';
import Choices from './components/page/Choices';
import PageDisplay from './components/page/PageDisplay';
import BookNew from './components/book/New';
import UnfinishedBookIndex from './components/book/UnfinishedBookIndex';
import PageNew from './components/page/PageNew';
import AuthRegister from './components/auth/Register';
import AuthLogin from './components/auth/Login';
import Profile from './components/auth/Profile';
import Footer from './components/Footer';
import Home from './components/Home';

import 'bulma';
import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <main>
          <Header />
          <div>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/books' component={BookIndex}/>
              <Route path='/books/:id/pages/new' component={PageNew}/>
              <Route path='/books/:bookId/pages/page-display' component={PageDisplay}/>
              <Route path='/books/:bookId/pages/:pageId/choices' component={Choices}/>
              <Route path='/books/:id/pages/first' component={NewFirstPage}/>
              <Route path='/books/:id/pages/:pageId' component={PageShow}/>
              <Route path='/books/:bookId/pages/:pageId/edit' component={Edit}/>
              <Route path='/books/:id/story' component={Story}/>
              <Route path='/books/:id/pages' component={PageIndex}/>
              <Route exact path='/books/new' component={BookNew}/>
              <Route exact path='/books/unfinished' component={UnfinishedBookIndex}/>
              <Route path='/books/:id' component={BookShow}/>
              <Route path='/users' component={Profile}/>
              <Route exact path='/login' component={AuthLogin}/>
              <Route exact path='/register' component={AuthRegister}/>
            </Switch>
          </div>
          <Footer />
        </main>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
