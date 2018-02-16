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

  getMyTeamAmount = (myTeam) => {
    let amount = 0;

    amount = Object.keys(myTeam).reduce((sum, key) => {
      let current = myTeam[key];
      if (current === true) return sum + 1;
      return sum;
    }, 0);

    return amount;
  }

  render() {
    const loggedIn = this.props.loginStatus.loggedIn;
    const myTeamAmount = this.getMyTeamAmount(this.props.myTeam);

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
