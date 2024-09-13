import { combineReducers } from '@reduxjs/toolkit';
import postReducer from './postReducer';

const rootReducer = combineReducers({
  post: postReducer,
  // Add other reducers here
});

export default rootReducer;
