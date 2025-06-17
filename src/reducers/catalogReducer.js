import {
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
  RESET_ITEMS,
} from '../actions/actionTypes';

const initialState = {
  items: [],
  loading: false,
  error: null,
  offset: 0,
  hasMore: true,
};

export default function catalogReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEMS_REQUEST:
      return { 
        ...state, 
        loading: true, 
        error: null 
      };
    case FETCH_ITEMS_SUCCESS:
      const newItems = action.payload.items;
      return {
        ...state,
        loading: false,
        items: [...state.items, ...action.payload.items],
        offset: state.offset + newItems.length,
        hasMore: newItems.length === 6,
      };
    case FETCH_ITEMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case RESET_ITEMS:
      return {
        ...state,
        items: [],
        offset: 0,
        hasMore: true,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}
