import React, {Component} from 'react';
import SimpleInput from './SimpleImput';
import { FormControl, FormGroup, Form, Checkbox, Button, Jumbotron } from 'react-bootstrap';

var formStyle = {
  maxWidth: 300,
  marginLeft: 'auto',
  marginRight: 'auto',
}

class LoginForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = { username: '', password: '', rememberMe: false}
  }

  onInputChange = (event) => {
    const field = event.target.name;
    const newState = Object.assign({}, this.state);
    newState[field] = event.target.value;
    return this.setState(newState)
  }

  onCheckboxChange = (event) => {
    const field = event.target.name;
    const newState = Object.assign({}, this.state);
    newState[field] = event.target.checked;
    return this.setState(newState)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onLogin(this.state);
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
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              type='password'
              placeholder='Password'
              name='password'
              onChange={this.onInputChange}
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

export default LoginForm;
