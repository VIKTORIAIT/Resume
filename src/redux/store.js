import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appReducer';
import authReducer from './authSlice';
const store = configureStore({
  reducer: {
    authReducer,
    contacts: appReducer,
  },
});

export default store;
