import { createContext, useReducer } from "react";
import {
  ADD_MOVIE,
  ADD_SONG,
  DELETE_MOVIE,
  DELETE_SONG,
  DELETE_ALL
} from "../utils/constants";
const DataContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return { ...state, movies: [...state.movies, action.payload] };
    case ADD_SONG:
      return { ...state, songs: [...state.songs, action.payload] };
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie !== action.payload),
        deleteMovie: ""
      };
    case DELETE_SONG:
      return {
        ...state,
        songs: state.songs.filter((song) => song !== action.payload),
        deleteSong: ""
      };
    case DELETE_ALL:
      return { ...state, movies: [], songs: [] };
    default:
      return state;
  }
};

export default function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    movies: [],
    deleteMovie: "",
    songs: [],
    deleteSong: ""
  });

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}

export { DataContext };
