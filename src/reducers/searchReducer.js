import { SET_SEARCH_QUERY } from '../actions/actionTypes';

const initialState = '';

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return action.payload.query;
    default:
      return state;
  }
}