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

        yield put(fetchMoviesSuccess(data));
    } catch (error) {
        yield put(fetchMoviesError());
    }
};

export function* watchFetchSaga() {
    yield takeLatest(fetchMoviesRequest.type, fetchDataSaga);
};
