import { createRandomSong } from "../data";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import { ADD_SONG, DELETE_SONG } from "../utils/constants";

function SongPlaylist({ onGetSongs }) {
  const { state, dispatch } = useContext(DataContext);
  const songs = state.songs;

  const handleSongAdd = (song) => {
    dispatch({
      type: ADD_SONG,
      payload: song
    });
  };
  const handleSongRemove = (song) => {
    dispatch({
      type: DELETE_SONG,
      payload: song
    });
  };

  const renderedSongs = songs.map((song) => {
    return (
      <li key={song}>
        {song}
        <button
          onClick={() => handleSongRemove(song)}
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
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className="button is-link"
          >
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
