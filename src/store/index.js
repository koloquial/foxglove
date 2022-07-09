import { configureStore } from '@reduxjs/toolkit';
import accountSlice from './features/accountSlice';

const store = configureStore({
  reducer: {
    account: accountSlice.reducer
  },
});

export default store;