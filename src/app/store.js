import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './slices/userSlice';
import { loggedUserReducer } from './slices/loggedUser';
import { notesReducer } from './slices/createNote';

export const store = configureStore({
  reducer: {
    users: userReducer,
    loggedUser: loggedUserReducer,
    notes: notesReducer,
  },
});
