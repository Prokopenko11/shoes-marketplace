import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_CATEGORIES_SUCCESS:
      return { ...state, loading: false, items: action.payload.items };
    case FETCH_CATEGORIES_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}