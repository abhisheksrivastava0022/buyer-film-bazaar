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
} from '../actions/actionTypes';

const initialState = {
  title: '',
  subtitle: '',
  videoSrc: '',
  homeData: null,
  headerData: null, // This should hold the header data
  loading: {
    home: false,
    banner: false,
    header: false,
  },
  error: {
    home: null,
    banner: null,
    header: null,
  },
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOME_DATA_REQUEST:
      return { 
        ...state, 
        loading: { ...state.loading, home: true },
        error: { ...state.error, home: null },
      };
    case FETCH_HOME_DATA_SUCCESS:
      return { 
        ...state, 
        loading: { ...state.loading, home: false },
        homeData: action.payload 
      };
    case FETCH_HOME_DATA_FAILURE:
      return { 
        ...state, 
        loading: { ...state.loading, home: false },
        error: { ...state.error, home: action.error },
      };
    case FETCH_BANNER_DATA_REQUEST:
      return { 
        ...state, 
        loading: { ...state.loading, banner: true },
        error: { ...state.error, banner: null },
      };
    case FETCH_BANNER_DATA_SUCCESS:
      return {
        ...state,
        loading: { ...state.loading, banner: false },
        title: action.payload.title,
        subtitle: action.payload.subtitle,
        videoSrc: action.payload.videoSrc,
      };
    case FETCH_BANNER_DATA_FAILURE:
      return { 
        ...state, 
        loading: { ...state.loading, banner: false },
        error: { ...state.error, banner: action.error },
      };
    case FETCH_HEADER_DATA_REQUEST:
      return { 
        ...state, 
        loading: { ...state.loading, header: true },
        error: { ...state.error, header: null },
      };
      case FETCH_HEADER_DATA_SUCCESS:
        return { 
          ...state, 
          loading: { ...state.loading, header: false },
          headerData: action.payload, // Make sure this is replacing old data
        };          
    case FETCH_HEADER_DATA_FAILURE:
      return { 
        ...state, 
        loading: { ...state.loading, header: false },
        error: { ...state.error, header: action.error },
      };
    case SEND_CONTACT_FORM_REQUEST:
      return { 
        ...state, 
        loading: { ...state.loading, contactForm: true },
        error: { ...state.error, contactForm: null },
      };
    case SEND_CONTACT_FORM_SUCCESS:
      return { 
        ...state, 
        loading: { ...state.loading, contactForm: false },
        contactResponse: action.payload,
      };
    case SEND_CONTACT_FORM_FAILURE:
      return { 
        ...state, 
        loading: { ...state.loading, contactForm: false },
        error: { ...state.error, contactForm: action.error },
      };
    default:
      return state;
  }
};

export default homeReducer;

