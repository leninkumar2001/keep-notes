'use client';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import styles from './notes.module.css';
import Image from 'next/image';
import commentsImg from '@/app/assets/commentsImg.png';
import CreateNoteForm from '../noteForm/createNote';
import { deleteNote } from '@/app/slices/createNote';

export default function Notes() {
  const username = useSelector((state) => state.loggedUser.username);
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const [showPopup, setShowPopup] = useState(false);
  const [editingNote, setEditingNote] = useState(null);

  const openCreatePopup = () => {
    setEditingNote(null);
    setShowPopup(true);
  };

  const openEditPopup = (note) => {
    setEditingNote(note);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setEditingNote(null);
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this note?')) {
      dispatch(deleteNote(id));
    }
  };

  return (
    <div>
      <p className={styles.welocomeNote}>
        Hello, <strong>{username}</strong>
      </p>

      {showPopup && (
        <div className={styles.popupOverlay} onClick={closePopup}>
          <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
            <CreateNoteForm onClose={closePopup} editingNote={editingNote} />
          </div>
        </div>
      )}

      <div className={styles.notesGrid}>
        {Array.isArray(notes) &&
          notes.map((note) => (
            <div key={note.id} className={styles.noteCard}>
              <div className={styles.noteHeader}>
                <span className={styles.noteTitle}>{note.title || 'Untitled'}</span>
                <span style={{ display: 'flex', gap: '8px' }}>
                  <span
                    className={styles.editIcon}
                    onClick={() => openEditPopup(note)}
                    style={{ cursor: 'pointer' }}
                  >
                    ✏️
                  </span>
                  <span
                    className={styles.deleteIcon}
                    onClick={() => handleDelete(note.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    🗑️
                  </span>
                </span>
              </div>
              <div className={styles.noteBody}>
                {typeof note.text === 'string'
                  ? note.text
                  : JSON.stringify(note.text)}
              </div>
              <div className={styles.noteFooter}>
                Last Modified : {note.modified || 'Unknown'}
              </div>
            </div>
          ))}
      </div>

      <div className={styles.notesIconContainer} onClick={openCreatePopup}>
        <Image
          className={styles.notesIcon}
          src={commentsImg}
          alt="Comments"
          width={25}
          height={25}
          title='Add notes'
        />
      </div>
    </div>
  );
}
