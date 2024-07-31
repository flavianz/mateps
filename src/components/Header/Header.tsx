import styles from "./Header.module.css";

export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.contactContainer}>
                <p>+41 00 000 00 00</p>
                <p>|</p>
                <p>ithilfe.mateps@gmail.com</p>
            </div>
            <div className={styles.navContainer}>
                <h1 className={styles.title}>MATEPS</h1>
                <div>
                    <a className={styles.button} href="/about">
                        Über uns
                    </a>
                    <a
                        className={styles.button}
                        id={styles.bookButton}
                        href="/book"
                    >
                        Jetzt buchen
                    </a>
                </div>
            </div>
        </div>
    );
}
