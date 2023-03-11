import styles from "./Meme.module.css";
import memesData from "../memesData";
import { useState } from "react";

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  let url;

  const getImage = () => {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  };

  return (
    <main>
      <div className={styles.form}>
        <input
          type="text"
          placeholder="Top text"
          className={styles.form_input}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className={styles.form_input}
        />
        <button className={styles.form_button} onClick={getImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <img className={styles.img} src={meme.randomImage} alt="sdsd"></img>
    </main>
  );
};

export default Meme;
