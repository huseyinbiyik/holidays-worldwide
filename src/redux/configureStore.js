import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import countriesReducer from './countries';
import countryDetailsReducer from './country';

const rootReducer = combineReducers({
  countries: countriesReducer,
  country_details: countryDetailsReducer,
});

const store = createStore(rootReducer, {}, applyMiddleware(thunk, logger));
export default store;
