import { combineReducers } from 'redux';
import authReducer from './authReducer';
import filmReducer from './filmReducer'; // Add your film reducer here

const rootReducer = combineReducers({
  auth: authReducer,
  films: filmReducer, // Combine film reducer
});

export default rootReducer;
