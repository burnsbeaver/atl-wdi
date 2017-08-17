import React from "react";

// Update this Movie component with info from OMDB
// BONUS: Use OMDB's Poster API to add a poster to each movie.
const Movie = (props) => {
  return (
    <section id="movie-listing">
      <div className="movie">
        <h3>Movie Title</h3>
        <p>
          <strong>Released:</strong> {props.movieData.Year}<br />
          <strong>Directed By:</strong> {props.movieData.Director}<br />
          <em>Genre:</em> {props.movieData.Genre} <br />
          <strong>Rated {props.movieData.imdbRating} / 10</strong>
        </p>
        <p>{props.movieData.Plot}</p>
        <img src={props.movieData.Poster} />
      </div>
    </section>
  );
};

export default Movie;
