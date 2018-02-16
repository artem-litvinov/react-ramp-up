import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormControl, FormGroup, Form, Checkbox, Button, Jumbotron } from 'react-bootstrap';

import * as actions from '../../actions/loginActions';

var formStyle = {
  maxWidth: 300,
  marginLeft: 'auto',
  marginRight: 'auto',
}

class LoginPage extends Component{
  constructor(props, context) {
    super(props, context);

    this.state = { username: '', password: '', rememberMe: false };
  }

  onInputChange = (event) => {
    return this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  }

  onCheckboxChange = (event) => {
    return this.setState({
      ...this.state,
      [event.target.name]: event.target.checked
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.actions.login(this.state);
  }

  render() {
    return (
      <Jumbotron>
        <Form style={formStyle} onSubmit={this.handleSubmit}>
          <h4 className='card-title'>Log into Prism</h4>
          <FormGroup>
            <FormControl
              type='text'
              placeholder='Username'
              name='username'
              onChange={this.onInputChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              type='password'
              placeholder='Password'
              name='password'
              onChange={this.onInputChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Checkbox
              name='rememberMe'
              onChange={this.onCheckboxChange}
            >
              Remember me
            </Checkbox>
          </FormGroup>
          <Button type='submit' bsStyle='primary'>Log in</Button>
        </Form>
      </Jumbotron>
    );
  }
};

LoginPage.propTypes = {
  actions: PropTypes.object.isRequired,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
