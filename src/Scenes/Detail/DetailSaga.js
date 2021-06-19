import { put, takeLatest } from "redux-saga/effects";
import {
  productDetailSuccess,
  castDetailSuccess,
  castDetail,
} from "./DetailActions";

const getDetailMovieList = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=f8707b3bfc1a734d4b29ef887af428bd&language=en-US`
  );
  const result = await res.json();
  return result;
};

const getDetailTVList = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/tv/62560?api_key=f8707b3bfc1a734d4b29ef887af428bd&language=en-US"
  );
  const result = await res.json();
  return result;
};

const getCastDetail = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/297761/credits?api_key=f8707b3bfc1a734d4b29ef887af428bd&language=en-US"
  );
  const result = await res.json();
  return result;
};

const getCastTVDetail = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/tv/31917/credits?api_key=f8707b3bfc1a734d4b29ef887af428bd&language=en-US"
  );
  const result = await res.json();
  return result;
};

function* fetchCastDetail() {
  try {
    const data = yield getCastDetail();

    const results = data.results;
    const castDetails = [];
    const finalCastDetails = [];

    results.forEach((element) => {
      castDetails.push([element.cast]);
    });

    for (let i = 0; i < 10; i++) {
      finalCastDetails.push([
        castDetails[i].name,
        castDetails[i].character,
        castDetails[i].profile_path,
      ]);
    }

    yield put(castDetail(finalCastDetails));
  } catch (e) {
    console.log(e);
  }
}

function* fetchCastTVDetail() {
  try {
    const data = yield getCastTVDetail();

    const results = data.results;
    const castDetails = [];
    const finalCastDetails = [];

    results.forEach((element) => {
      castDetails.push([element.cast]);
    });

    for (let i = 0; i < 10; i++) {
      finalCastDetails.push([
        castDetails[i].name,
        castDetails[i].character,
        castDetails[i].profile_path,
      ]);
    }

    yield put(castDetail(finalCastDetails));
  } catch (e) {
    console.log(e);
  }
}

function* fetchDetailMovieList({ payload }) {
  try {
    const data = yield getDetailMovieList(payload);

    const results = data.results;
    const productDetail = results.map((movie) => {
      return {
        id: movie.id,
        backgrop_path: movie.backgrop_path,
        poster_path: movie.poster_path,
        title: movie.title,
        release_date: movie.release_date,
        overview: movie.overview,
        vote_count: movie.vote_count,
        genres: movie.genres,
      };
    });

    yield put(productDetailSuccess(productDetail));
  } catch (e) {
    console.log(e);
  }
}

function* fetchDetailTVList() {
  try {
    const data = yield getDetailTVList();

    const results = data.results;
    const productDetail = results.map((movie) => {
      return {
        id: movie.id,
        backgrop_path: movie.backgrop_path,
        poster_path: movie.poster_path,
        title: movie.title,
        release_date: movie.release_date,
        overview: movie.overview,
        vote_count: movie.vote_count,
        genres: movie.genres,
        networks: movie.networks[0].logo_path,
        seasons: movie.seasons,
      };
    });

    yield put(productDetailSuccess(productDetail));
  } catch (e) {
    console.log(e);
  }
}

function* detailSaga() {
  yield takeLatest("PRODUCT_DETAIL", fetchDetailMovieList);
  yield takeLatest("PRODUCT_TV_DETAIL", fetchDetailTVList);
  yield takeLatest("CAST_DETAIL", fetchCastDetail);
  yield takeLatest("CAST_TV_DETAIL", fetchCastTVDetail);
}

export default detailSaga;
