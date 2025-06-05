import { createSlice } from '@reduxjs/toolkit';

const notesSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    addNote: (state, action) => {
      state.push({
        id: Date.now(),
        title: action.payload.title,
        text: action.payload.text,
        modified: new Date().toDateString(),
      });
    },
    updateNote: (state, action) => {
      const { id, title, text } = action.payload;
      const note = state.find((n) => n.id === id);
      if (note) {
        note.title = title;
        note.text = text;
        note.modified = new Date().toDateString();
      }
    },
    deleteNote: (state, action) => {
      return state.filter((note) => note.id !== action.payload);
    },
  },
});

export const { addNote, updateNote, deleteNote } = notesSlice.actions;
export const notesReducer = notesSlice.reducer;
