import { legacy_createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import catalogReducer from '../reducers/catalogReducer';
import categoriesReducer from '../reducers/categoriesReducer';
import selectedCategoryReducer from '../reducers/selectedCategoryReducer';
import topSalesReducer from '../reducers/topSalesReducer';
import searchReducer from '../reducers/searchReducer';
import itemReducer from '../reducers/itemReducer';
import cartReducer from '../reducers/cartReducer';
import orderReducer from '../reducers/orderReducer';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  catalog: catalogReducer,
  categories: categoriesReducer,
  selectedCategory: selectedCategoryReducer,
  topSales: topSalesReducer,
  search: searchReducer,
  item: itemReducer,
  cart: cartReducer,
  order: orderReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  const store = legacy_createStore(
    reducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);

  return store;
}