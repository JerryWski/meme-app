import styles from "./Container.module.css"

const Container = () => {
    return (
        <div className={styles.container}>
        <img className={styles.img} src={require("../img/desert.jpg")} alt="desert"/>
            <button onClick>Click me</button>
        </div>
    )
};

export default Container;