'use client';

import LoginForm from '@/app/components/loginForm/form';
import Header from '../components/header/header';
import Breadcrumb from '../components/body/breadcrums';
import styles from "@/app/page.module.css";

export default function LoginPage() {
  return (
    <>
      <Header />
      <Breadcrumb page='Login' />
      <section className={`${styles.height} ${styles.displayFlex} ${styles.fromContainer}`}><LoginForm /></section>
    </>
  );
}