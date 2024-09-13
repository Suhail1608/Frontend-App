import { combineReducers } from '@reduxjs/toolkit';
import postSlice from './postSlice';
import authSlice from './authSlice';

const rootReducer = combineReducers({
  auth:authSlice,
  post: postSlice
});

export default rootReducer;
