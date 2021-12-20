import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appReducer';
const store = configureStore({
  reducer: {
    contacts: appReducer,
  },
});

export default store;
