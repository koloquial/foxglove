import { createSlice } from '@reduxjs/toolkit';

const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    loading: true,
    message: ''
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setLoadingMessage: (state, action) => {
      state.message = action.payload;
    }
  }
});

export const { setLoading, setLoadingMessage } = loadingSlice.actions;

export default loadingSlice;