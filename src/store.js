import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./features/movies/moviesSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        movies: moviesSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: true }).concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export default store;
