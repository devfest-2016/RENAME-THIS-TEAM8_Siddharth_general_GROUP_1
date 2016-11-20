import { combineReducers } from 'redux';
import usersReducer from './users'
import parksReducer from './parks'

const rootReducer =  combineReducers({
  users: usersReducer,
  parks: parksReducer
});

export default rootReducer;
