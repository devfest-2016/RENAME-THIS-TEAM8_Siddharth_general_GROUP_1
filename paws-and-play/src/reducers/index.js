import { combineReducers } from 'redux';
import Users_Reducer from './users'
import parks_reducer from './parks'


const rootReducer =  combineReducers({
users: Users_Reducer,
parks: parks_reducer
});

export default rootReducer;
