import "./styles.css";
import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlaylist";
import { DataContext } from "./contexts/DataContext";
import { useContext } from "react";
import { DELETE_ALL } from "./utils/constants";

export default function App() {
  const { dispatch } = useContext(DataContext);

  const handleResetClick = () => {
    dispatch({
      type: DELETE_ALL
    });
  };

  return (
    <div className="container is-fluid">
      <button onClick={() => handleResetClick()} className="button is-danger">
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}
