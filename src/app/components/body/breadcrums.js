import "./main.css";
import styles from "@/app/page.module.css";

export default function MainContent({page}){
    return(
        <>
            <div className={styles.container}>
                <nav className='breadcrumb' aria-label="breadcrumb">
                    <ul className={styles.displayFlex}>
                        <li><a href="/">Homepage</a></li>
                        <li>/</li>
                        <li>{page}</li>
                    </ul>
                </nav>
            </div>
        </>
    );
}