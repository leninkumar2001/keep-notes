import "../styles/header.css";
import styles from "@/app/page.module.css";

export default function Header() {
    return (
        <>
            <header className='header'>
                <div className={`container ${styles.displayFlex}`}>
                    <h1>Keep Notes</h1>
                    <nav className='nav' aria-label="header navigation">
                        <ul className={styles.displayFlex}>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Notes</a></li>
                            <li><a href="#">Account</a></li>
                            <li><a href="#">Login</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}