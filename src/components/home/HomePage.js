import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, false); // false for synchronous request
  xmlHttp.send(null);
  return xmlHttp.responseText;
}

class HomePage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    fetch('http://prism.akvelon.net/api/employees/all', {mode: 'no-cors'}).then(res => console.log(res)).catch(err => { throw (err) });
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
