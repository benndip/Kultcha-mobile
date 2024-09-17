import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isOnboarded: false
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    setIsOnboarded: (state, { payload }) => {
      state.isOnboarded = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, setIsOnboarded } = authSlice.actions;

export default authSlice.reducer;
