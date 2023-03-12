import styles from "./Meme.module.css";
import { useEffect, useState } from "react";

const Meme = () => {
  /**
   * Challenge:
   * As soon as the Meme component loads the first time,
   * make an API call to "https://api.imgflip.com/get_memes".
   *
   * When the data comes in, save just the memes array part
   * of that data to the `allMemes` state
   *
   * Think about if there are any dependencies that, if they
   * changed, you'd want to cause to re-run this function.
   *
   * Hint: for now, don't try to use an async/await function.
   * Instead, use `.then()` blocks to resolve the promises
   * from using `fetch`. We'll learn why after this challenge.
   */

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState([]);
  
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setAllMemeImages(data.data.memes))
  },[])


  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  let url;
  const getImage = () => {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    url = allMemeImages[randomNumber].url;
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
