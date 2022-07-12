import { createSlice } from '@reduxjs/toolkit';

const accountSlice = createSlice({
  name: 'account',
  initialState: {
    uid: undefined,
    reality: {},
  },
  reducers: {
    setUID: (state, action) => {
      state.uid = action.payload
    },
    setReality: (state, action) => {
      state.reality = action.payload
    }
  }
});

export const { setUID, setReality } = accountSlice.actions;

export default accountSlice;