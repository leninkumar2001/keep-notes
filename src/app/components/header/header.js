import { usePathname } from 'next/navigation';
import "./header.css";
import styles from "@/app/page.module.css";

export default function Header() {
    const pathname = usePathname(); // Get the current pathname
    const isNotesPage = pathname === "/notes"; // Check if the current path is "/notes"

    return (
        <>
            <header className='header'>
                <div className={`${styles.container} ${styles.displayFlex} container`}>
                    <h1>Keep Notes</h1>
                    {isNotesPage && (
                        <nav className='nav' aria-label="header navigation">
                            <ul className={styles.displayFlex}>
                                <li><a href="#">About</a></li>
                                <li><a href="/notes">Notes</a></li>
                                <li><a href="#">Account</a></li>
                                <li><a href="/login">Login</a></li>
                            </ul>
                        </nav>
                    )}
                </div>
            </header>
        </>
    );
}
