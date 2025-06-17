import { SELECT_CATEGORY } from '../actions/actionTypes';

const initialState = 0;

export default function selectedCategoryReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_CATEGORY:
      return action.payload.categoryId;
    default:
      return state;
  }
}