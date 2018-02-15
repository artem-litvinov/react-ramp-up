import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Jumbotron } from 'react-bootstrap';

class HomePage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const username = this.props.username;

    return (
      <Jumbotron>
        <h1>Hello {username}!</h1>
      </Jumbotron>
    );
  }
};

HomePage.propTypes = {
  username: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    username: state.loginStatus.username
  };
};

export default connect(mapStateToProps)(HomePage);
