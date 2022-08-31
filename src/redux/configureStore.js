import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import reducer from './reducer';

const store = configureStore({
  reducer,
  applyMiddleware: [logger],
});

export default store;
