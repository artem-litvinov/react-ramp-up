import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../actions/loginActions';
import LoginForm from './LoginForm';

class LoginPage extends Component{
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <LoginForm onLogin={this.props.actions.login}/>
    );
  }
};

LoginPage.propTypes = {
  loginStatus: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loginStatus: state.loginStatus
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
