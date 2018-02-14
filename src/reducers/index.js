import { combineReducers } from 'redux';
import loginStatus from './loginReducers';

const rootReducer = combineReducers({ loginStatus })

export default rootReducer;
