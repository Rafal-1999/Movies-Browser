import { createSlice, createSelector } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        movies: {
            1: [
                {
                    title: "Tytuł-1",
                    poster_path: "/link1"
                },
                {
                    title: "Tytuł-2",
                    poster_path: "/link1.1"
                },
                {
                    title: "Tytuł-3",
                    poster_path: "/link1"
                },
                {
                    title: "Tytuł-4",
                    poster_path: "/link1.1"
                },
                {
                    title: "Tytuł-5",
                    poster_path: "/link1"
                },
                {
                    title: "Tytuł-6",
                    poster_path: "/link1.1"
                },
                {
                    title: "Tytuł-7",
                    poster_path: "/link1"
                },
                {
                    title: "Tytuł-8",
                    poster_path: "/link1.1"
                },
                {
                    title: "Tytuł-9",
                    poster_path: "/link1"
                },
                {
                    title: "Tytuł-10",
                    poster_path: "/link1.1"
                },
                {
                    title: "Tytuł-11",
                    poster_path: "/link1"
                },
                {
                    title: "Tytuł-12",
                    poster_path: "/link1.1"
                },
                {
                    title: "Tytuł-13",
                    poster_path: "/link1"
                },
                {
                    title: "Tytuł-14",
                    poster_path: "/link1.1"
                },
                {
                    title: "Tytuł-15",
                    poster_path: "/link1"
                },
                {
                    title: "Tytuł-16",
                    poster_path: "/link1.1"
                },
                {
                    title: "Tytuł-17",
                    poster_path: "/link1"
                },
                {
                    title: "Tytuł-18",
                    poster_path: "/link1.1"
                },
                {
                    title: "Tytuł-19",
                    poster_path: "/link1"
                },
                {
                    title: "Tytuł-20",
                    poster_path: "/link1.1"
                }
            ],
            2: [
                {
                    title: "Tytuł-21",
                    poster_path: "/link2"
                },
                {
                    title: "Tytuł-22",
                    poster_path: "/link2.2"
                },
                {
                    title: "Tytuł-23",
                    poster_path: "/link2"
                },
                {
                    title: "Tytuł-24",
                    poster_path: "/link2.2"
                },
                {
                    title: "Tytuł-25",
                    poster_path: "/link2"
                },
                {
                    title: "Tytuł-26",
                    poster_path: "/link2.2"
                },
                {
                    title: "Tytuł-27",
                    poster_path: "/link2"
                },
                {
                    title: "Tytuł-28",
                    poster_path: "/link2.2"
                },
                {
                    title: "Tytuł-29",
                    poster_path: "/link2"
                },
                {
                    title: "Tytuł-30",
                    poster_path: "/link2.2"
                },
                {
                    title: "Tytuł-31",
                    poster_path: "/link2"
                },
                {
                    title: "Tytuł-32",
                    poster_path: "/link2.2"
                },
                {
                    title: "Tytuł-33",
                    poster_path: "/link2"
                },
                {
                    title: "Tytuł-34",
                    poster_path: "/link2.2"
                },
                {
                    title: "Tytuł-35",   
                    poster_path: "/link2"
                },
                {
                    title: "Tytuł-36",
                    poster_path: "/link2.2"
                },
                {
                    title: "Tytuł-37",
                    poster_path: "/link2"
                },
                {
                    title: "Tytuł-38",
                    poster_path: "/link2.2"
                },
                {
                    title: "Tytuł-39",
                    poster_path: "/link2"
                },
                {
                    title: "Tytuł-40",
                    poster_path: "/link2.2"
                }
            ]
        },
        status: "idle",
        currentPage: 1,
        moviesPerPage: 3,
        moviesPerApiPage: 20,
    },
    reducers: {
        fetchMoviesRequest: (state) => {
            state.status = "loading";
        },
        fetchMoviesSuccess: (state, action) => {
            const {page, results} = action.payload;
            state.status = "success";
            state.movies[page] = results;
        },
        fetchMoviesError: (state) => {
            state.status = "error";
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setMoviesPerPage: (state, action) => {
            state.itemsPerPage = action.payload;
        },
    }
});

export const {
    fetchMoviesRequest,
    fetchMoviesSuccess,
    fetchMoviesError,
    setCurrentPage,
    setMoviesPerPage

} = moviesSlice.actions;
export const selectMoviesState = (state) => state.movies;
export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectCurrentPage = (state) => selectMoviesState(state).currentPage;
export const selectMoviesPerPage = (state) => selectMoviesState(state).moviesPerPage;
export const selectMoviesPerApiPage = (state) => selectMoviesState(state).moviesPerApiPage;
export const selectMoviesForPage = createSelector(
    [selectMovies, selectCurrentPage, selectMoviesPerPage, selectMoviesPerApiPage],
     (movies, currentPage, moviesPerPage, moviesPerApiPage) => {
    const startIndex = (currentPage - 1) * moviesPerPage;
    const endIndex = startIndex + moviesPerPage;

    const startApiPage = Math.floor(startIndex / moviesPerApiPage) + 1;
    const endApiPage = Math.floor((endIndex - 1) / moviesPerApiPage) + 1;

    const result = [];

    for (let apiPage = startApiPage; apiPage <= endApiPage; apiPage++) {
        if (movies[apiPage]) {
        console.log("Filmy wyświetlane z selektora:");
        console.log(movies[apiPage]);

        result.push(...movies[apiPage]);
        }
    }
    return result.slice(startIndex % moviesPerApiPage, endIndex % moviesPerApiPage + moviesPerPage);
}
);

export const getMovieById = (state, movieId) => selectMovies(state);
export const selectMoviesByQuery = (state, query) => {
    const movies = selectMovies(state);

    if (!query || query.trim() === "") {
        return movies;
    }
};
export default moviesSlice.reducer;
