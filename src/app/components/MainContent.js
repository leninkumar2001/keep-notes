import "../styles/main.css";
import styles from "@/app/page.module.css";

export default function MainContent(){
    return(
        <>
            <section className='container'>
                <nav className='breadcrumb' aria-label="breadcrumb">
                    <ul className={styles.displayFlex}>
                        <li><a href="/">Homepage</a></li>
                        <li>/</li>
                        <li>Login</li>
                    </ul>
                </nav>
            </section>
        </>
    );
}