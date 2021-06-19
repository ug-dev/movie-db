import { all } from "redux-saga/effects";
import latestSaga from "../Scenes/Latest/LatestSaga";
import popularSaga from "../Scenes/Popular/PopularSaga";
import topRatedSaga from "../Scenes/TopRated/TopRatedSaga";
import DetailSaga from "../Scenes/Detail/DetailSaga";

function* rootSaga() {
  yield all([latestSaga(), popularSaga(), topRatedSaga(), DetailSaga()]);
}

export default rootSaga;
