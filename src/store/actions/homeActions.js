import axios from 'axios';
import {
  FETCH_HOME_DATA_REQUEST,
  FETCH_HOME_DATA_SUCCESS,
  FETCH_HOME_DATA_FAILURE,
  SEND_CONTACT_FORM_REQUEST,
  SEND_CONTACT_FORM_SUCCESS,
  SEND_CONTACT_FORM_FAILURE,
  FETCH_BANNER_DATA_REQUEST,
  FETCH_BANNER_DATA_SUCCESS,
  FETCH_BANNER_DATA_FAILURE,
  FETCH_HEADER_DATA_REQUEST,
  FETCH_HEADER_DATA_SUCCESS,
  FETCH_HEADER_DATA_FAILURE,
} from './actionTypes';

const API_URL = 'http://localhost:5000';

export const fetchHomeData = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_HOME_DATA_REQUEST });
    axios.get(`${API_URL}/home`)
      .then(response => {
        dispatch({ type: FETCH_HOME_DATA_SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: FETCH_HOME_DATA_FAILURE, error: error.message });
      });
  };
};

export const fetchBannerData = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_BANNER_DATA_REQUEST });
    axios.get(`${API_URL}/banner`)
      .then(response => {
        dispatch({ type: FETCH_BANNER_DATA_SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: FETCH_BANNER_DATA_FAILURE, error: error.message });
      });
  };
};

export const sendContactForm = (formData) => {
  return (dispatch) => {
    dispatch({ type: SEND_CONTACT_FORM_REQUEST });
    axios.post(`${API_URL}/contact`, formData)
      .then(response => {
        dispatch({ type: SEND_CONTACT_FORM_SUCCESS, payload: response.data });
        alert('Message sent successfully!');
      })
      .catch(error => {
        dispatch({ type: SEND_CONTACT_FORM_FAILURE, error: error.message });
      });
  };
};

export const fetchHeaderData = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_HEADER_DATA_REQUEST });
    axios.get(`${API_URL}/header`)
      .then(response => {
        dispatch({ type: FETCH_HEADER_DATA_SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: FETCH_HEADER_DATA_FAILURE, error: error.message });
      });
  };
};


