/**
 * Import AddMovieForm module css
 */

import styles from "./AddMovieForm.module.css";

// membuat komponen add movie form

const AddMovieForm = () => {
  return (
    <div className={styles.container}>
      <section className={styles.addmovieform}>
        <div className={styles.addmovieform__left}>
          <img
            className={styles.addmovieform__image}
            src="https://picsum.photos/330/330"
            alt="placeholder"
          />
        </div>

        <div className={styles.addmovieform__right}>
          <h1 className={styles.addmovieform__title}>
            <u>Add Movie</u>
          </h1>
          <div>
            <form className={styles.addmovieform__form} action="">
              <div className={styles.addmovieform__formControl}>
                <label
                  htmlFor="title"
                  className={styles.addmovieform__labelTitle}
                >
                  Add Title
                </label>
                <input type="text" className={styles.addmovieform__input} />
              </div>
              <div className={styles.addmovieform__formControl}>
                <label
                  htmlFor="year"
                  className={styles.addmovieform__labelYear}
                >
                  Add Year
                </label>
                <input type="text" className={styles.addmovieform__input} />
              </div>
              <div className={styles.addmovieform__formButton}>
                <button className={styles.addmovieform__button}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddMovieForm;
