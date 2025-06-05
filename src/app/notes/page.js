'use client';

import Header from '../components/header/header';
import Breadcrumb from '../components/body/breadcrums';
import styles from "@/app/page.module.css";
import Notes from '../components/notesPage/notes';

export default function LoginPage() {
  return (
    <>
      <Header />
      <Breadcrumb page='notes' />
      <section className={`${styles.container}`}><Notes /></section>
    </>
  );
}