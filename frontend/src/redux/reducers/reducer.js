import { combineReducers } from '@reduxjs/toolkit';
import postSlice from './postSlice/postSlice';
import authSlice from './authSlice/authSlice';

const rootReducer = combineReducers({
  auth:authSlice,
  post: postSlice
});

export default rootReducer;
