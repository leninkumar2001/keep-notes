'use client';

import Header from '../components/header/header';
import Breadcrumb from '../components/body/breadcrums';
import styles from "@/app/page.module.css";

export default function LoginPage() {
  return (
    <>
      <Header />
      <Breadcrumb page='notes' />
    </>
  );
}