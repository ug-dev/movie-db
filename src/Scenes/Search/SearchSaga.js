import { put, takeLatest } from "redux-saga/effects";
import { searchListSuccess } from "./SearchActions";

const getSearchList = async (query) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=f8707b3bfc1a734d4b29ef887af428bd&language=en-US&query=${query}&page=1&include_adult=false`
  );
  const result = await res.json();
  return result;
};

function* fetchSearchList({ payload }) {
  try {
    const data = yield getSearchList(payload);

    const results = data.results;
    const movieList = results.map((movie) => {
      return {
        id: movie.id,
        media_type: movie.media_type,
        poster_path: movie.poster_path,
        title: movie.title,
        release_date: movie.release_date,
        name: movie.name,
        date: movie.first_air_date,
      };
    });

    console.log(results);

    yield put(searchListSuccess(movieList));
  } catch (e) {
    console.log(e);
  }
}

function* latestSaga() {
  yield takeLatest("SEARCH_LIST", fetchSearchList);
}

export default latestSaga;
