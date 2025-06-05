import styles from "./page.module.css";
import Header from '@/app/components/header/header';
import MainContent from '@/app/components/body/breadcrums';

export default function Home() {
  return (
    <div className={styles.page}>
      <form>
        <div>
          <Header />
          <MainContent />
        </div>
      </form>
    </div>
  );
}
