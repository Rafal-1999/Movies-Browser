import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./features/movies/moviesSlice";
import peopleSlice from "./features/people/peopleSlice"

const store = configureStore({
    reducer: {
        movies: moviesSlice,
        people: peopleSlice,
    }
});

export default store;
