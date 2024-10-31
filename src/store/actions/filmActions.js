import {  
  FETCH_FILMS_REQUEST, 
  FETCH_FILMS_SUCCESS, 
  FETCH_FILMS_FAILURE,
  POST_FILM_REQUEST,
  POST_FILM_SUCCESS,
  POST_FILM_FAILURE, 
  PATCH_FILM_REQUEST,
  PATCH_FILM_SUCCESS,
  PATCH_FILM_FAILURE,
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
  FETCH_LANGUAGE_REQUEST,
  FETCH_LANGUAGE_SUCCESS,
  FETCH_LANGUAGE_FAILURE
} from './authActionTypes';
import { toast } from 'react-toastify';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchFilms = () => async (dispatch) => {
  dispatch({ type: FETCH_FILMS_REQUEST });

  try {
    const response = await fetch(`${BASE_URL}/film`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Include cookies in the request
    });

    const data = await response.json(); // Parse the response JSON

    if (response.ok && data.status) {
      dispatch({
        type: FETCH_FILMS_SUCCESS,
        payload: data.data, // Extract the `data` field that contains the list of films
      });
      toast.success('Films fetched successfully!');
    } else {
      const errorMessage = data.message || 'Failed to fetch films.';
      throw new Error(errorMessage);
    }
  } catch (error) {
    dispatch({
      type: FETCH_FILMS_FAILURE,
      payload: error.message,
    });
    toast.error(error.message || 'An error occurred while fetching films.');
    console.error("Fetch Films Error:", error); // Log the error for debugging
  }
};


// Step 1: POST action for creating a new film
// Action for posting a film
export const postFilm = (filmData) => async (dispatch) => {
  dispatch({ type: POST_FILM_REQUEST });

  try {
    const response = await fetch(`${BASE_URL}/film`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(filmData),
      credentials: 'include',
    });

    const data = await response.json();

    if (response.ok && data.status) {
      dispatch({
        type: POST_FILM_SUCCESS,
        payload: data.data, // Film ID
        meta: filmData,
      });
      toast.success('Film posted successfully!');
      return data.data; // Return just the film ID
    } else {
      const errorMessage = data.message || 'Failed to post film.';
      throw new Error(errorMessage);
    }
  } catch (error) {
    dispatch({
      type: POST_FILM_FAILURE,
      payload: error.message,
    });
    toast.error(error.message || 'An error occurred while posting the film.');
    console.error("Post Film Error:", error);
    throw error; // Propagate the error
  }
};

// Action for updating a film
export const patchFilm = (filmId, updatedFilmData) => async (dispatch) => {
  dispatch({ type: PATCH_FILM_REQUEST });

  try {
    const response = await fetch(`${BASE_URL}/film/${filmId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedFilmData),
      credentials: 'include',
    });

    const data = await response.json();

    if (response.ok && data.status) {
      dispatch({
        type: PATCH_FILM_SUCCESS,
        payload: data.data, // Assuming this is the updated film data
      });
      toast.success('Film updated successfully!');
    } else {
      const errorMessage = data.message || 'Failed to update film.';
      throw new Error(errorMessage);
    }
  } catch (error) {
    dispatch({
      type: PATCH_FILM_FAILURE,
      payload: error.message,
    });
    toast.error(error.message || 'An error occurred while updating the film.');
    console.error("Patch Film Error:", error);
  }
};


// Action to fetch countries
export const fetchCountries = () => async (dispatch) => {
  dispatch({ type: FETCH_COUNTRIES_REQUEST }); // Indicate loading state

  try {
    const response = await fetch(`${BASE_URL}/site/country`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Send cookies along with the request
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json(); // Parse the response as JSON
    console.log('test', data); // Log to ensure the response contains the list of countries

    dispatch({
      type: FETCH_COUNTRIES_SUCCESS,
      payload: data, // Use parsed JSON data (ensure this contains the list of countries)
    });
  } catch (error) {
    console.error('Error fetching countries:', error.message);
    dispatch({
      type: FETCH_COUNTRIES_FAILURE,
      payload: error.message, // Send error payload
    });
  }
};

// Action to fetch countries
export const fetchLanguage = () => async (dispatch) => {
  dispatch({ type: FETCH_LANGUAGE_REQUEST });

  try {
    const response = await fetch(`${BASE_URL}/site/language`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    const data = await response.json();
    if (response.ok) {
      console.log('test language', data); // Check if data contains `languages` array
      dispatch({
        type: FETCH_LANGUAGE_SUCCESS,
        payload: data || [], // Adjust to the correct field from API response
      });
    } else {
      const errorMessage = data.message || 'Failed to fetch languages.';
      throw new Error(errorMessage);
    }
  } catch (error) {
    console.error('Error fetching languages:', error.message);
    dispatch({
      type: FETCH_LANGUAGE_FAILURE,
      payload: error.message

    });
  }
};

