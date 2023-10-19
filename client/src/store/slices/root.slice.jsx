import { combineReducers } from 'redux';
import authReducer from './auth.slice';
// import usersReducer from './users.slice';


const rootReducer = combineReducers({
  auth: authReducer,
  // users: usersReducer,
});

export default rootReducer;
