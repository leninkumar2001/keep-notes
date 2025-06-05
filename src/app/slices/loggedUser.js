// app/slices/loggedUser.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: null,
};

const loggedUserSlice = createSlice({
  name: 'loggedUser',
  initialState,
  reducers: {
    setUsername(state, action) {
      state.username = action.payload;
    },
    clearUsername(state) {
      state.username = null;
    },
  },
});

export const { setUsername, clearUsername } = loggedUserSlice.actions;
export const loggedUserReducer = loggedUserSlice.reducer;
