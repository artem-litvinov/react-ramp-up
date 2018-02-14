import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class HomePage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const username = this.props.loginStatus.username;
    return (
      <div className="jumbotron text-center">
        <h1>Hello {username}!</h1>
      </div>
    );
  }
};

HomePage.propTypes = {

};

function mapStateToProps(state, ownProps) {
  return {
    loginStatus: state.loginStatus
  };
};

export default connect(mapStateToProps)(HomePage);
