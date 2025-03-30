import { all } from "redux-saga/effects";
import { watchFetchSaga } from "./features/fetchDataSaga";

export default function* rootSaga() {
    yield all([
        watchFetchSaga()
    ]);
};
