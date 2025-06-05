'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { addUser } from '@/app/slices/userSlice';

import styles from './form.module.css';
import commonStyles from '@/app/page.module.css';

export default function LoginForm() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      alert('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    dispatch(addUser({ username, email, password }));

    alert('Registered successfully!');
    router.push('/login');
  };

  return (
    <div className={`${styles.container} ${commonStyles.displayFlex}`}>
      <h2 className={styles.heading}>Signup</h2>

      <form onSubmit={handleSubmit} className={`${styles.form} ${commonStyles.displayFlex}`}>
        <input
          className={styles.input}
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          className={styles.input}
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <div className={styles.buttonContainer}>
          <button type="submit" className={`${styles.button} ${styles.registerButton}`}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
