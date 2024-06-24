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
            </div>
        </div>
    );
}
