import {
  FETCH_TOP_SALES_REQUEST,
  FETCH_TOP_SALES_SUCCESS,
  FETCH_TOP_SALES_FAILURE,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  SELECT_CATEGORY,
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
  RESET_ITEMS,
  SET_SEARCH_QUERY,
  FETCH_ITEM_REQUEST,
  FETCH_ITEM_SUCCESS,
  FETCH_ITEM_FAILURE,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  FETCH_ORDER_REQUEST,
  FETCH_ORDER_SUCCESS,
  FETCH_ORDER_FAILURE,
  RESET_ORDER_STATE,
} from './actionTypes';

export function fetchTopSalesRequest() {
  return {
    type: FETCH_TOP_SALES_REQUEST,
  };
}

export function fetchTopSalesSuccess(items) {
  return {
    type: FETCH_TOP_SALES_SUCCESS,
    payload: { items },
  }
}

export function fetchTopSalesFailure(error) {
  return {
    type: FETCH_TOP_SALES_FAILURE,
    payload: { error },
  }
}

export function fetchCategoriesRequest() {
  return {
    type: FETCH_CATEGORIES_REQUEST,
  }
}

export function fetchCategoriesSuccess(items) {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    payload: { items },
  }
}

export function fetchCategoriesFailure(error) {
  return {
    type: FETCH_CATEGORIES_FAILURE,
    payload: { error },
  }
}

export function selectCategory(categoryId) {
  return {
    type: SELECT_CATEGORY,
    payload: { categoryId },
  }
}

export function fetchItemsRequest(offset = 0) {
  return {
    type: FETCH_ITEMS_REQUEST,
    payload: { offset },
  }
}

export function fetchItemsSuccess(items) {
  return {
    type: FETCH_ITEMS_SUCCESS,
    payload: { items },
  }
}

export function fetchItemsFailure(error) {
  return {
    type: FETCH_ITEMS_FAILURE,
    payload: { error },
  }
}

export function resetItems() {
  return {
    type: RESET_ITEMS,
  }
}

export function setSearchQuery(query) {
  return {
    type: SET_SEARCH_QUERY,
    payload: { query },
  };
}

export function fetchItemRequest(id) {
  return {
    type: FETCH_ITEM_REQUEST,
    payload: id,
  };
}

export function fetchItemSuccess(item) {
  return {
    type: FETCH_ITEM_SUCCESS,
    payload: item,
  };
}

export function fetchItemFailure(error) {
  return {
    type: FETCH_ITEM_FAILURE,
    payload: error,
  };
}

export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    payload: item,
  }
};

export function removeFromCart(index) {
  return {
    type: REMOVE_FROM_CART,
    payload: index,
  }
};

export function clearCart() {
  return {
    type: CLEAR_CART,
  }
};

export function fetchOrderRequest(order) {
  return {
    type: FETCH_ORDER_REQUEST,
    payload: order,
  }
};

export function fetchOrderSuccess() {
  return {
    type: FETCH_ORDER_SUCCESS,
  }
};

export function fetchOrderFailure(error) {
  return {
    type: FETCH_ORDER_FAILURE,
    payload: error,
  }
};

export function resetOrderState() {
  return {
    type: RESET_ORDER_STATE,
  }
};