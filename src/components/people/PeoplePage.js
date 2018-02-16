import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import EmployeePageBase from '../common/EmployeePageBase';
import * as employeeActions from '../../actions/peopleActions';
import * as myTeamActions from '../../actions/myTeamActions';
import EmployeeCard from '../common/EmployeeCard';
import { AddPersonButton, RemovePersonButton } from '../common/FAButtons';

class PeoplePage extends EmployeePageBase {
  componentDidMount() {
    this.props.actions.loadEmployees();
  }

  renderEmployee = (employee, index) => {
    const inTeam = this.props.myTeam[employee.Login] === true;
    const display = this.checkSearch(employee);
    return (
      display
        ? <EmployeeCard
          key={index}
          imageSrc={"./images/unknown-person.png"}
          {...employee}
        >
          {inTeam
            ? <RemovePersonButton onClick={() => this.removeFromTeam(employee.Login)} />
            : <AddPersonButton onClick={() => this.addToTeam(employee.Login)} />}
        </EmployeeCard>
        : null
    );
  }
};

PeoplePage.propTypes = {
  actions: PropTypes.object.isRequired,
  employees: PropTypes.array.isRequired,
  myTeam: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    employees: state.employees,
    myTeam: state.myTeam
  };
};

function mapDispatchToProps(dispatch) {
  const actions = Object.assign({}, employeeActions, myTeamActions);
  return {
    actions: bindActionCreators(actions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PeoplePage);
