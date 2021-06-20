import { all } from "redux-saga/effects";
import latestSaga from "../Scenes/Latest/LatestSaga";
import popularSaga from "../Scenes/Popular/PopularSaga";
import topRatedSaga from "../Scenes/TopRated/TopRatedSaga";
import DetailSaga from "../Scenes/Detail/DetailSaga";
import SearchSaga from "../Scenes/Search/SearchSaga";

function* rootSaga() {
  yield all([
    latestSaga(),
    popularSaga(),
    topRatedSaga(),
    DetailSaga(),
    SearchSaga(),
  ]);
}

export default rootSaga;
