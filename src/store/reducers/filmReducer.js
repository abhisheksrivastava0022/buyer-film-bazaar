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
} from '../actions/authActionTypes'; 

const initialState = {
  films: [],
  countries: [], // List of countries
  languages:[],
  loading: false,
  countryLoading: false, // Loading state for countries
  languageLoading: false,
  error: null,
  countryError: null,
  languageError: null, // To store country fetch errors
  submitting: false, // To handle submission state
  submitError: null, // For errors during submission
  currentFilmId: null, // To store the film ID for updates
};

const filmReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fetching films
    case FETCH_FILMS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_FILMS_SUCCESS:
      return {
        ...state,
        loading: false,
        films: action.payload,
      };
    case FETCH_FILMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

  // Fetch countries request
  case FETCH_COUNTRIES_REQUEST:
    return {
      ...state,
      countryLoading: true,
      countryError: null,
    };

  // Fetch countries success
  case FETCH_COUNTRIES_SUCCESS:
    return {
      ...state,
      countryLoading: false,
      countries: action.payload, // Store countries data in state
    };

  // Fetch countries failure
  case FETCH_COUNTRIES_FAILURE:
    return {
      ...state,
      countryLoading: false,
      countryError: action.payload, // Store error message in state
    };

   // Fetch language request
   case FETCH_LANGUAGE_REQUEST:
    return {
      ...state,
      languageLoading: true,
      languageError: null, // Clear any previous errors
    };

  // Fetch language success
  case FETCH_LANGUAGE_SUCCESS:
    return {
      ...state,
      languageLoading: false,
      languages: action.payload || [], // Ensure payload is an array
    };

  // Fetch language failure
  case FETCH_LANGUAGE_FAILURE:
    return {
      ...state,
      languageLoading: false,
      languageError: action.payload, // Store the error message
    };
    
    // Posting a new film
    case POST_FILM_REQUEST:
      return { 
        ...state, 
        submitting: true, 
        submitError: null 
      };
    case POST_FILM_SUCCESS:
      return { 
        ...state, 
        submitting: false, 
        films: [...state.films, { id: action.payload.data, ...action.meta }], // Append new film
        currentFilmId: action.payload.data // Store film ID for updates
      };
    case POST_FILM_FAILURE:
      return { 
        ...state, 
        submitting: false, 
        submitError: action.payload 
      };

    // Updating an existing film
    case PATCH_FILM_REQUEST:
      return { 
        ...state, 
        submitting: true, 
        submitError: null 
      };
    case PATCH_FILM_SUCCESS:
      return { 
        ...state, 
        submitting: false, 
        films: state.films.map(film => 
          film.id === action.payload.id ? action.payload : film // Update the existing film
        ),
        currentFilmId: null // Clear film ID after update
      };
    case PATCH_FILM_FAILURE:
      return { 
        ...state, 
        submitting: false, 
        submitError: action.payload 
      };

    // Clear the current film ID
    case 'CLEAR_CURRENT_FILM':
      return { 
        ...state, 
        currentFilmId: null 
      };

    default:
      return state;
  }
};

export default filmReducer;
