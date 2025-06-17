import {
  FETCH_ORDER_REQUEST,
  FETCH_ORDER_SUCCESS,
  FETCH_ORDER_FAILURE,
  RESET_ORDER_STATE,
} from '../actions/actionTypes';

const initialState = {
  loading: false,
  success: false,
  error: null,
};

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ORDER_REQUEST:
      return { loading: true, success: false, error: null };
    case FETCH_ORDER_SUCCESS:
      return { loading: false, success: true, error: null };
    case FETCH_ORDER_FAILURE:
      return { loading: false, success: false, error: action.payload };
    case RESET_ORDER_STATE:
      return initialState;
    default:
      return state;
  }
}
