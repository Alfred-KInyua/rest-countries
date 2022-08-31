import { combineReducers } from '@reduxjs/toolkit';
import CountriesReducer from './countries';
import getContinent from './getContinent';

const reducers = combineReducers({
  countries: CountriesReducer,
  searchCountries: getContinent,
});

export default reducers;
