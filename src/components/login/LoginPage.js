import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import RoutedMenuLink from '../common/RoutedMenuLink';
import LoginForm from './LoginForm';
import * as loginActions from '../../actions/loginActions';

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

};

function mapStateToProps(state, ownProps) {
  return {
    loginStatus: state.loginStatus
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
