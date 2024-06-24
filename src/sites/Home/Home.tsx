import styles from "./Home.module.css";
import Header from "../../components/Header/Header.tsx";
import TitleImage from "../../assets/title-image.jpg";

export default function Home() {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.contentContainer}>
                <img
                    src={TitleImage}
                    alt="Web Image"
                    className={styles.titleImage}
                />
            </div>
        </div>
    );
}
