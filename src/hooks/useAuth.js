import { useSelector, useDispatch } from 'react-redux';
import { login, signup, logout } from '../store/actions/authAction';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use useNavigate for navigation

  // Select the auth state from the Redux store
  const auth = useSelector((state) => state.auth);

  // Dispatch login action with user credentials
  const loginUser = (credentials) => dispatch(login(credentials));

  // Dispatch signup action with user data
  const signupUser = (userData) => dispatch(signup(userData));

  // Dispatch logout action to remove cookies, clear auth state, and navigate
  const logoutUser = () => dispatch(logout(navigate));

  return {
    ...auth,        // Spread the current authentication state
    loginUser,      // Return the login function
    signupUser,     // Return the signup function
    logoutUser,     // Return the logout function
  };
};

export default useAuth;