import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from './authActionTypes';
import { toast } from 'react-toastify'; // Import toast

// Get the base URL from the environment variable
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Signup Action Creator
export const signup = (userData) => async (dispatch) => {
  dispatch({ type: SIGNUP_REQUEST });
  try {
    const response = await fetch(`${BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Include cookies in the request
      body: JSON.stringify(userData),
    });

    const data = await response.json(); // Parse the response

    // Check if the response indicates success
    if (response.ok && data.status) {
      // No user data to store; just notify success
      dispatch({ type: SIGNUP_SUCCESS });

      // Show success toast
      toast.success('Signup successful! Welcome aboard.');
    } else {
      const errorMessage = data.error?.errors?.[0]?.message || 'Signup failed. Please try again.';
      throw new Error(errorMessage);
    }
  } catch (error) {
    dispatch({
      type: SIGNUP_FAILURE,
      payload: error.message,
    });

    // Show error toast
    toast.error(error.message || 'An unexpected error occurred during signup.');
    console.error("Signup Error:", error); // Log the error for debugging
  }
};

// Login Action Creator
export const login = (email, password) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
const json = JSON.stringify({ email:email.email, password:email.password })
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: json,

      credentials: 'include', // This ensures cookies are sent and stored
    });

    if (!response.ok) {
      const data = await response.json();
      const errorMessage = data.error?.message || 'Login failed.';
      throw new Error(errorMessage);
    }

    const data = await response.json(); // Parse the successful response
    dispatch({ type: LOGIN_SUCCESS, payload: data });

    toast.success('Login successful!');

    // Redirect to the dashboard after successful login
   // window.location.href = '/dashboard'; // Redirect to dashboard

  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.message });
    toast.error(error.message || 'An error occurred during login.');
  }
};

// Logout Action Creator
export const logout = () => async (dispatch) => {
  
  try {
    const response = await fetch(`${BASE_URL}/auth/logout`, {
      method: 'GET',
      credentials: 'include', // Include cookies in the request
    }); 

    if (response.ok) {
      dispatch({ type: LOGOUT }); // Logout action without user data
      toast.success('Logout successful!'); // Optionally notify user
    } else {
      const errorMessage = 'Logout failed. Please try again.'; // Optional message for logout failure
      toast.error(errorMessage);
      console.error("Logout Error:", errorMessage); // Log the error for debugging
    }
  } catch (error) {
    console.error("Logout Error:", error); // Log the error for debugging
    toast.error('An error occurred while logging out.');
  }
};


