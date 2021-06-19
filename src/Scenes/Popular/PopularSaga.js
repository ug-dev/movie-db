import { put, takeLatest } from "redux-saga/effects";
import { popularListSuccess } from "./PopularActions";

const getPopularMovieList = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=f8707b3bfc1a734d4b29ef887af428bd&language=en-US&page=1"
  );
  const result = await res.json();

  return result;
};

const getPopularTVList = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/tv/popular?api_key=f8707b3bfc1a734d4b29ef887af428bd&language=en-US&page=1"
  );
  const result = await res.json();
  return result;
};

function* fetchPopularMovieList() {
  try {
    const data = yield getPopularMovieList();

    const results = data.results;
    const movieList = results.map((movie) => {
      return {
        id: movie.id,
        poster_path: movie.poster_path,
        title: movie.title,
        release_date: movie.release_date,
      };
    });

    yield put(popularListSuccess(movieList));
  } catch (e) {
    console.log(e);
  }
}

function* fetchPopularTVList() {
  try {
    const data = yield getPopularTVList();

    const results = data.results;

    const movieList = results.map((movie) => {
      return {
        id: movie.id,
        poster_path: movie.poster_path,
        title: movie.name,
        release_date: movie.first_air_date,
      };
    });

    yield put(popularListSuccess(movieList));
  } catch (e) {
    console.log(e);
  }
}

function* popularSaga() {
  yield takeLatest("POPULAR_LIST", fetchPopularMovieList);
  yield takeLatest("POPULAR_TV_LIST", fetchPopularTVList);
}

export default popularSaga;
