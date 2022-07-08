import { createSlice } from '@reduxjs/toolkit';

const accountSlice = createSlice({
  name: 'account',
  initialState: {
    database: {},
    loading: true
  },
  reducers: {
    assignDatabase: (state, action) => {
      state.database = action.payload
    },
    assignLoading: (state, action) => {
      state.loading = action.payload
    }
  }
});

export const { assignDatabase, assignAction, assignView, assignLoading } = accountSlice.actions;

export default accountSlice;