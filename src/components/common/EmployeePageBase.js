import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchPanel from '../common/SearchPanel';

const PageBase = ({ children }) => {
  return (
    <div className='margin-top'>
      {children}
    </div>
  );
};

const EmployeesContainer = ({ children }) => {
  return (
    <div className='d-flex justify-content-start flex-wrap margin-top'>
      {children}
    </div>
  );
};

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

  render() {
    return (
      <PageBase>
        <SearchPanel onChange={this.handleSearch}/>
        <EmployeesContainer>
          {this.props.employees.map(this.renderEmployee)}
        </EmployeesContainer>
      </PageBase>
    );
  }
};

EmployeePageBase.propTypes = {
  actions: PropTypes.object.isRequired,
  employees: PropTypes.array.isRequired
};

export default EmployeePageBase;
