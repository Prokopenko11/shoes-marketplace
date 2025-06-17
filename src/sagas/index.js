import {
  FETCH_TOP_SALES_REQUEST,
  FETCH_CATEGORIES_REQUEST,
  FETCH_ITEMS_REQUEST,
  SELECT_CATEGORY,
  FETCH_ITEM_REQUEST,
  FETCH_ORDER_REQUEST,
} from '../actions/actionTypes';
import {
  fetchTopSalesSuccess,
  fetchTopSalesFailure,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
  fetchItemsSuccess,
  fetchItemsFailure,
  resetItems,
  fetchItemsRequest,
  fetchItemSuccess,
  fetchItemFailure,
  fetchOrderSuccess,
  fetchOrderFailure,
  resetOrderState,
  clearCart,
} from '../actions/actionCreators';
import { fetchTopSales, fetchCategories, fetchItems, fetchItem, fetchOrder } from '../api/index';
import { takeLatest, put, call, spawn, select, delay } from 'redux-saga/effects';

function* handleFetchTopSales() {
  try {
    const data = yield call(fetchTopSales);
    yield put(fetchTopSalesSuccess(data));
  } catch (e) {
    yield put(fetchTopSalesFailure(e.message));
  }
}

function* handleFetchCategories() {
  try {
    const data = yield call(fetchCategories);
    const all = { id: 0, title: 'Все' };
    yield put(fetchCategoriesSuccess([all, ...data]));
  } catch (e) {
    yield put(fetchCategoriesFailure(e.message));
  }
}

function* handleFetchItems(action) {
  try {
    const state = yield select();
    const categoryId = state.selectedCategory;
    const query = state.search;
    const offset = action.payload.offset;

    const data = yield call(fetchItems, { offset, categoryId, query });
    yield put(fetchItemsSuccess(data));
  } catch (e) {
    yield put(fetchItemsFailure(e.message));
  }
}

function* handleSelectCategory(action) {
  yield put(resetItems());
  yield put(fetchItemsRequest(0));
}

function* handleFetchItem(action) {
  try {
    const item = yield call(fetchItem, action.payload);
    yield put(fetchItemSuccess(item));
  } catch (error) {
    yield put(fetchItemFailure(error.message));
  }
}

function* handleFetchOrderSaga(action) {
  try {
    yield call(fetchOrder, action.payload);
    yield put(fetchOrderSuccess());
    localStorage.removeItem('cart');

    yield delay(3000);
    yield put(resetOrderState());
    yield put(clearCart());
  } catch (error) {
    yield put(fetchOrderFailure(error.message));
  }
}

export function* watchOrderSaga() {
  yield takeLatest(FETCH_ORDER_REQUEST, handleFetchOrderSaga);
}

export function* watchTopSalesSaga() {
  yield takeLatest(FETCH_TOP_SALES_REQUEST, handleFetchTopSales);
}

export function* watchCategoriesSaga() {
  yield takeLatest(FETCH_CATEGORIES_REQUEST, handleFetchCategories);
}

export function* watchItemsSaga() {
  yield takeLatest(FETCH_ITEMS_REQUEST, handleFetchItems);
}

export function* watchSelectCategorySaga() {
  yield takeLatest(SELECT_CATEGORY, handleSelectCategory);
}

export function* watchFetchItemSaga() {
  yield takeLatest(FETCH_ITEM_REQUEST, handleFetchItem);
}

export default function* rootSaga() {
  yield spawn(watchTopSalesSaga);
  yield spawn(watchCategoriesSaga);
  yield spawn(watchItemsSaga);
  yield spawn(watchSelectCategorySaga);
  yield spawn(watchFetchItemSaga);
  yield spawn(watchOrderSaga);
}
