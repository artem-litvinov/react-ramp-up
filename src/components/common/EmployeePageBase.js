import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormGroup, FormControl, Form, InputGroup, Button } from 'react-bootstrap';

import * as employeeActions from '../../actions/peopleActions';
import * as myTeamActions from '../../actions/myTeamActions';
import EmployeeCard from '../common/EmployeeCard';
import { AddPersonButton, RemovePersonButton } from '../common/FAButtons';
import SearchPanel from '../common/SearchPanel';

class EmployeePageBase extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      search: ''
    };
  }

  addToTeam = (employeeLogin) => {
    this.props.actions.addToTeam(employeeLogin)
  }

  removeFromTeam = (employeeLogin) => {
    this.props.actions.removeFromTeam(employeeLogin)
  }

  checkSearch = (employee) => {
    const firstName = employee.FirstName.toLowerCase();
    const lastName = employee.LastName.toLowerCase();
    const login = employee.Login.toLowerCase();
    const display = firstName.includes(this.state.search)
      || lastName.includes(this.state.search)
      || login.includes(this.state.search)
    return display;
  }

  handleSearch = (e) => {
    this.setState({ search: e.target.value });
  }

  clearSearch = (e) => {
    this.searchInput.value = '';
    this.setState({ search: '' });
  }

  setSearchRef = (input) => {
    this.searchInput = input;
  }

  render() {
    return (
      <div className='margin-top'>
        <SearchPanel
          searchRef={this.setSearchRef}
          onInput={this.handleSearch}
          onDelete={this.clearSearch}
        />
        <div className='d-flex justify-content-start flex-wrap margin-top'>
          {this.props.employees.map(this.renderEmployee)}
        </div>
      </div>
    );
  }
};

export default EmployeePageBase;
