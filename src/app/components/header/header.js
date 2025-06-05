import "./header.css";
import styles from "@/app/page.module.css";

export default function Header() {
    return (
        <>
            <header className='header'>
                <div className={`${styles.container} ${styles.displayFlex} container`}>
                    <h1>Keep Notes</h1>
                    <nav className='nav' aria-label="header navigation">
                        <ul className={styles.displayFlex}>
                            <li><a href="/about">About</a></li>
                            <li><a href="/notes">Notes</a></li>
                            <li><a href="/account">Account</a></li>
                            <li><a href="/login">Login</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}