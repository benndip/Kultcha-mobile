import { combineReducers } from '@reduxjs/toolkit';
import auth from './features/auth/authSlice';
import item from './features/item/itemSlice';

const rootReducer = combineReducers({
  auth,
  item
});

export default rootReducer;
