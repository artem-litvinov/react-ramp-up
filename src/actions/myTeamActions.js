import { ADD_TO_TEAM, REMOVE_FROM_TEAM } from '../constants/actionTypes';

export function addToTeam(employeeLogin) {
  return { type: ADD_TO_TEAM, employeeLogin };
}

export function removeFromTeam(employeeLogin) {
  return { type: REMOVE_FROM_TEAM, employeeLogin };
}
