import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Header from './common/Header';
import Routes from './Routes';

class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const loggedIn = this.props.loginStatus.loggedIn;
    return (
      <div className='text-center'>
        <Header displayNavigation={loggedIn} />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Routes loggedIn={loggedIn}/>
            </div>
          </div>
        </div>
      </div>

    );
  }
};

App.propTypes = {

};

function mapStateToProps(state, ownProps) {
  return {
    loginStatus: state.loginStatus
  };
};

export default withRouter(connect(mapStateToProps)(App));
