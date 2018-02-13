import React, { Component } from 'react';

const SimpleInput = ({ type, label }) => {
  return (
    <div className="form-group">
      <label for="exampleInputPassword1">{label}</label>
      <input type={type} className="form-control" id="exampleInputPassword1" placeholder={label} />
    </div>
  );
}

const LoginPage = ({ username }) => {
  return (
    <div className="jumbotron form-signin">
      <form>
        <h4 class="card-title">Log into Prism</h4>
        <SimpleInput type='text' label='Username'/>
        <SimpleInput type='password' label='Password' />
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">Remember me</label>
        </div>
        <button type="submit" className="btn btn-primary">Log in</button>
      </form>
    </div>
  );
};

export default LoginPage;
