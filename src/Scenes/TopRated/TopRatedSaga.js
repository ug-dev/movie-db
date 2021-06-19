import { put, takeLatest } from "redux-saga/effects";
import { topRatedListSuccess } from "./TopRatedActions";

const getTopRatedMovieList = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=f8707b3bfc1a734d4b29ef887af428bd&language=en-US&page=1"
  );
  const result = await res.json();
  return result;
};

const getTopRatedTVList = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/tv/top_rated?api_key=f8707b3bfc1a734d4b29ef887af428bd&language=en-US&page=1"
  );
  const result = await res.json();
  return result;
};

function* fetchTopRatedMovieList() {
  try {
    const data = yield getTopRatedMovieList();

    const results = data.results;
    const movieList = results.map((movie) => {
      return {
        id: movie.id,
        poster_path: movie.poster_path,
        title: movie.title,
        release_date: movie.release_date,
      };
    });

    yield put(topRatedListSuccess(movieList));
  } catch (e) {
    console.log(e);
  }
}

function* fetchTopRatedTVList() {
  try {
    const data = yield getTopRatedTVList();

    const results = data.results;
    const movieList = results.map((movie) => {
      return {
        id: movie.id,
        poster_path: movie.poster_path,
        title: movie.name,
        release_date: movie.first_air_date,
      };
    });

    yield put(topRatedListSuccess(movieList));
  } catch (e) {
    console.log(e);
  }
}

function* topRatedSaga() {
  yield takeLatest("TOP_RATED_LIST", fetchTopRatedMovieList);
  yield takeLatest("TOP_RATED_TV_LIST", fetchTopRatedTVList);
}

export default topRatedSaga;
