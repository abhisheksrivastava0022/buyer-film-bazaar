import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/authActionTypes';

const initialState = {
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      return { ...state, loading: false }; // No need to store user object
    case SIGNUP_FAILURE:
    case LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case LOGOUT:
      return { ...state, loading: false }; // Reset loading state on logout
    default:
      return state;
  }
};

export default authReducer;
