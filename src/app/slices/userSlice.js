import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const userData = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state, action) {
      const { username, email, password } = action.payload;
      state.push({ username, email, password });
    },
  },
});

export const { addUser } = userData.actions;
export const userReducer = userData.reducer;