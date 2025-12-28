import { call, put, takeLatest } from "redux-saga/effects";
import { fetchDataFromApi } from "../services/fetchDataFromApi";
import {
    fetchMoviesRequest,
    fetchMoviesSuccess,
    fetchMoviesError
} from "./movies/moviesSlice";

function* fetchDataSaga(action) {
    try {
        const data = yield call(fetchDataFromApi, action.payload.url);

        if (action.payload.type === "movies") {
            yield put(fetchMoviesSuccess({
                page: data.page,
                results: data.results
            }));
        }

    } catch (error) {
        if (action.payload.type === "movies") {
            yield put(fetchMoviesError());
        }
    }
};

export function* watchFetchSaga() {
    yield takeLatest(fetchMoviesRequest.type, fetchDataSaga);
};
