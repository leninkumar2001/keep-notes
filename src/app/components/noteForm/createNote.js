'use client';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote, updateNote } from '@/app/slices/createNote';

export default function CreateNoteForm({ onClose, editingNote }) {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title || '');
      setText(editingNote.text || '');
    }
  }, [editingNote]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim()) {
      if (editingNote) {
        dispatch(updateNote({ id: editingNote.id, title, text }));
      } else {
        dispatch(addNote({ title, text }));
      }

      if (onClose) onClose();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: '100%', marginBottom: '8px', padding: '6px' }}
      />
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your note"
        style={{ width: '100%', height: '100px', marginBottom: '10px', padding: '6px' }}
      />
      <button type="submit" style={{ padding: '8px 16px' }}>
        {editingNote ? 'Update Note' : 'Add Note'}
      </button>
    </form>
  );
}
