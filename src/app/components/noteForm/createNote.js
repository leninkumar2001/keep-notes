'use client';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote, updateNote } from '@/app/slices/createNote';
import styles from './createNote.module.css';

export default function CreateNoteForm({ onClose, editingNote }) {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title || '');
      setText(editingNote.text || '');
    } else {
      setTitle('');
      setText('');
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
    <div className={styles.formContainer}>
      <button className={styles.closeButton} onClick={onClose} aria-label="Close">
        ✖
      </button>

      <h3 className={styles.popupTitle}>
        {editingNote ? 'Edit Note' : 'Add Note'}
      </h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.inputField}
        />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your note"
          className={styles.textarea}
        />

        <div className={styles.buttonGroup}>
          <button type="button" className={styles.cancelButton} onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className={styles.submitButton}>
            {editingNote ? 'Update' : 'Add'}
          </button>
        </div>
      </form>
    </div>
  );
}
