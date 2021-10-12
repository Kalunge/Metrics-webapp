import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import booksReducer from './books/books';

const middleware = [thunk, logger];

const reducer = combineReducers({
  books: booksReducer,
});
const store = createStore(reducer, applyMiddleware(...middleware));

export default store;
