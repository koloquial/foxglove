import { configureStore } from '@reduxjs/toolkit';

//Reducers
import accountSlice from './features/accountSlice';
import loadingSlice from './features/loadingSlice';

const store = configureStore({
  reducer: {
    loading: loadingSlice.reducer,
    account: accountSlice.reducer
  },
});

export default store;