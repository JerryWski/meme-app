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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

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
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className={styles.form_input}
          name="bottomText"
          onChange={handleChange}
          value={meme.bottomText}
        />
        <button className={styles.form_button} onClick={getImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className={styles.meme}>
        <img
          className={styles.meme_image}
          src={meme.randomImage}
          alt="sdsd"
        ></img>
        <h2 className={`${styles.top} ${styles.meme_text}`}>{meme.topText}</h2>
        <h2 className={`${styles.bottom} ${styles.meme_text}`}>
          {meme.bottomText}
        </h2>
      </div>
    </main>
  );
};

export default Meme;
