import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        status: "idle"
    },
    reducers: {
        fetchMoviesRequest: (state) => {
            state.status = "loading";
        },
        fetchMoviesSuccess: (state, action) => {
            state.status = "success";
            state.movies = action.payload;
        },
        fetchMoviesError: (state) => {
            state.status = "error";
        }
    }
});

export const {
    fetchMoviesRequest,
    fetchMoviesSuccess,
    fetchMoviesError
} = moviesSlice.actions;
export const selectMoviesState = (state) => state.movies;
export const selectMovies = (state) => selectMoviesState(state).movies;
export default moviesSlice.reducer;
