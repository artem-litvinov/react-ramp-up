import React, {Component} from 'react';
import SimpleInput from './SimpleImput';

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
      <div className="jumbotron form-signin">
        <form onSubmit={this.handleSubmit}>
          <h4 className="card-title">Log into Prism</h4>
          <SimpleInput
            type='text'
            label='Username'
            name='username'
            onChange={this.onInputChange}
          />
          <SimpleInput
            type='password'
            label='Password'
            name='password'
            onChange={this.onInputChange}
          />
          <div className="form-check">
            <input
              type="checkbox"
              name='rememberMe'
              id="exampleCheck1"
              onChange={this.onCheckboxChange}
              className="form-check-input"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
          </div>
          <button type="submit" className="btn btn-primary">Log in</button>
        </form>
      </div>
    );
  }
};

export default LoginForm;
