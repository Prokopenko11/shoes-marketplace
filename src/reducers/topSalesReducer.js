import {
  FETCH_TOP_SALES_REQUEST,
  FETCH_TOP_SALES_SUCCESS,
  FETCH_TOP_SALES_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export default function topSalesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TOP_SALES_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_TOP_SALES_SUCCESS:
      return { ...state, loading: false, items: action.payload.items };
    case FETCH_TOP_SALES_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}