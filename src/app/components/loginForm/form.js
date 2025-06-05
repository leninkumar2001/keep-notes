'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './form.module.css';
import commonStyles from "@/app/page.module.css";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Logging in with:', { email, password });
  };

  const handleRegister = () => {
    router.push('/signup');
  };

  return (
    <div className={`${styles.container} ${commonStyles.displayFlex}`}>
      <h2 className={styles.heading}>Login</h2>
      <input
        className={styles.input}
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className={styles.input}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={handleLogin}>
          Login
        </button>
        <button className={`${styles.button} ${styles.registerButton}`} onClick={handleRegister}>
          Sign up
        </button>
      </div>
    </div>
  );
}
