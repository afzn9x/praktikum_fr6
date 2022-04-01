import { nanoid } from "nanoid";
import { useState } from "react";
import data from "../../utils/constant/data";
import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";

function Movies() {
  let [movies, addMovie] = useState(data);

  const handleAddMovie = () => {
    const movie = {
      id: nanoid(),
      title: "Project Power",
      year: "2023",
      type: "Movie",
      poster: "https://m.media-amazon.com/images/I/81GBxNO9swL._AC_SY679_.jpg",
    };

    addMovie([...movies, movie]);
  };

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>
          <u>Latest Movies</u>
        </h2>
        <div className={styles.movie__container}>
          {movies.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
        <button onClick={handleAddMovie} className={styles.movies__addmovie}>
          Add Movie
        </button>
      </section>
    </div>
  );
}

export default Movies;
