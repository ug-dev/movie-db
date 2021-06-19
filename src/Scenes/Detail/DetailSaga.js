import { put, takeLatest } from "redux-saga/effects";
import {
  productDetailSuccess,
  castDetailSuccess,
  castDetail,
} from "./DetailActions";

const getDetailMovieList = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=f8707b3bfc1a734d4b29ef887af428bd&language=en-US`
  );
  const result = await res.json();
  return result;
};

const getDetailTVList = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=f8707b3bfc1a734d4b29ef887af428bd&language=en-US`
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

    const productDetail = {};
    const genere = [];

    productDetail.id = data.id;
    productDetail.backdrop_path = data.backdrop_path;
    productDetail.poster_path = data.poster_path;
    productDetail.title = data.title;
    productDetail.release_date = data.release_date;
    productDetail.overview = data.overview;
    productDetail.vote_average = data.vote_average;

    data.genres.forEach((element) => {
      genere.push(element.name);
    });

    productDetail.generes = genere.join(", ");

    yield put(productDetailSuccess(productDetail));
  } catch (e) {
    console.log(e);
  }
}

function* fetchDetailTVList({ payload }) {
  try {
    const data = yield getDetailTVList(payload);

    const productDetail = {};
    const genere = [];

    productDetail.id = data.id;
    productDetail.backdrop_path = data.backdrop_path;
    productDetail.poster_path = data.poster_path;
    productDetail.title = data.name;
    productDetail.release_date = data.first_air_date;
    productDetail.overview = data.overview;
    productDetail.vote_average = data.vote_average;
    productDetail.network = data.networks[0].logo_path;
    productDetail.seasons = data.seasons;

    data.genres.forEach((element) => {
      genere.push(element.name);
    });

    productDetail.generes = genere.join(", ");

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
