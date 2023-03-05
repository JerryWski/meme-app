import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <img 
                src={require("../img/troll-face.png")} alt="troll-face"
                className={styles.header_image}
            />
            <h2 className={styles.header_title}>Meme Generator</h2>
            <h4 className={styles.header_project}>React Course - Project 3</h4>
        </header>
    )
};

export default Header;