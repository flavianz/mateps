import styles from "./Home.module.css";
import Header from "../../components/Header/Header.tsx";
import TitleImage from "../../assets/title-image.svg";

export default function Home() {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.contentContainer}>
                <div className={styles.titleContainer}>
                    <h1>
                        IT-Support, <br />
                        Blablabla
                    </h1>
                    <h2>
                        Mateps ist der Anbieter von <br /> IT-Support in der
                        Region Basel.
                    </h2>
                </div>
                <img
                    id={styles.titleImage}
                    src={TitleImage}
                    alt={"Beautiful graphic"}
                ></img>
            </div>
        </div>
    );
}
