import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        movies: []
    }
});

export const selectMoviesState = (state) => state.movies;
export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectGenres = (state) => selectMoviesState(state).genres;

export default moviesSlice.reducer;
