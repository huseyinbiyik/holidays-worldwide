import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import countriesReducer from './countries';

const rootReducer = combineReducers({
  countries: countriesReducer,
});

const store = createStore(rootReducer, {}, applyMiddleware(thunk, logger));
console.log(store);
export default store;
