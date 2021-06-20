import categoryReducer from "../Scenes/Global/categoryReducer";
import latestReducer from "../Scenes/Latest/LatestReducer";
import popularReducer from "../Scenes/Popular/PopularReducer";
import topRatedReducer from "../Scenes/TopRated/TopRatedReducer";
import productDetailReducer from "../Scenes/Detail/ProductDetailReducer";
import DetailReducer from "../Scenes/Detail/DetailReducer";
import searchReducer from "../Scenes/Search/SearchReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  movieCategory: categoryReducer,
  popularList: popularReducer,
  topRatedList: topRatedReducer,
  latestList: latestReducer,
  castDetail: DetailReducer,
  productDetail: productDetailReducer,
  searchList: searchReducer,
});

export default allReducers;
