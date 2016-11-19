import { combineReducers } from 'redux';
import Users_Reducer from './users'


const rootReducer =  combineReducers({
users: Users_Reducer
});

export default rootReducer;
