import { createRandomMovie } from "../data";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import { ADD_MOVIE, DELETE_MOVIE } from "../utils/constants";

function MoviePlaylist() {
  const { state, dispatch } = useContext(DataContext);
  const movies = state.movies;

  const handleMovieAdd = (movie) => {
    dispatch({
      type: ADD_MOVIE,
      payload: movie
    });
  };
  const handleMovieRemove = (movie) => {
    dispatch({
      type: DELETE_MOVIE,
      payload: movie
    });
  };

  const renderedMovies = movies.map((movie) => {
    return (
      <li key={movie}>
        {movie}
        <button
          onClick={() => handleMovieRemove(movie)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Movie Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleMovieAdd(createRandomMovie())}
            className="button is-link"
          >
            + Add Movie to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
}

export default MoviePlaylist;
