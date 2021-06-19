import { put, takeLatest } from "redux-saga/effects";
import { latestListSuccess } from "./LatestActions";

const getLatestMovieList = async (counter) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=f8707b3bfc1a734d4b29ef887af428bd&language=en-US&page=${counter}`
  );
  const result = await res.json();
  return result;
};

const getLatestTVList = async (counter) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/on_the_air?api_key=f8707b3bfc1a734d4b29ef887af428bd&language=en-US&page=${counter}`
  );
  const result = await res.json();
  return result;
};

function* fetchLatestMovieList({ payload }) {
  try {
    const data = yield getLatestMovieList(payload);

    const results = data.results;
    const movieList = results.map((movie) => {
      return {
        id: movie.id,
        poster_path: movie.poster_path,
        title: movie.title,
        release_date: movie.release_date,
      };
    });

    yield put(latestListSuccess(movieList));
  } catch (e) {
    console.log(e);
  }
}

function* fetchLatestTVList({ payload }) {
  try {
    const data = yield getLatestTVList(payload);
    const results = data.results;
    const movieList = results.map((movie) => {
      return {
        id: movie.id,
        poster_path: movie.poster_path,
        title: movie.name,
        release_date: movie.first_air_date,
      };
    });

    yield put(latestListSuccess(movieList));
  } catch (e) {
    console.log(e);
  }
}

function* latestSaga() {
  yield takeLatest("LATEST_LIST", fetchLatestMovieList);
  yield takeLatest("LATEST_TV_LIST", fetchLatestTVList);
}

export default latestSaga;
