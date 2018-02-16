import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';

import * as actions from '../actions/loginActions';
import Header from './common/Header';
import Routes from './Routes';

class App extends Component {
  onLogout = () => {
    this.props.actions.logout();
  }

  render() {
    const loggedIn = this.props.loginStatus.loggedIn;
    const myTeamAmount = Object.keys(this.props.myTeam).length;

    return (
      <div>
        <Header
          displayNavigation={loggedIn}
          onLogout={this.onLogout}
          myTeamAmount={myTeamAmount}
        />
        <Grid className='text-center'>
          <Row>
            <Col md={12}>
              <Routes loggedIn={loggedIn}/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
};

App.propTypes = {
  loginStatus: PropTypes.object.isRequired,
  myTeam: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    loginStatus: state.loginStatus,
    myTeam: state.myTeam
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
