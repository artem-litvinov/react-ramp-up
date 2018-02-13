import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './common/Header'
import HomePage from './home/HomePage';
import LoginPage from './login/LoginPage';

class App extends Component {
  render() {
    return (
      <div className='text-center'>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Route exact path='/' component={HomePage} />
              <Route exact path='/login' component={LoginPage} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
