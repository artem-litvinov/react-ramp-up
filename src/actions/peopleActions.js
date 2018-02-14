import { LOAD_EMPLOYEES_SUCCESS } from '../constants/actionTypes';
import prismApi from '../api/mockPrismApi';

export function loadEmployees() {
  return function (dispatch) {
    return prismApi.getAllEmployees().then(employees => {
      dispatch(loadEmployeesSuccess(employees));
    }).catch(err => { throw (err) });
  }
}

export function loadEmployeesSuccess(employees) {
  return { type: LOAD_EMPLOYEES_SUCCESS, employees };
}
