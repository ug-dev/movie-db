export const getPopularList = (list) => {
  return {
    type: "POPULAR_LIST",
    payload: list,
  };
};
export const getPopularTvList = (list) => {
  return {
    type: "POPULAR_TV_LIST",
    payload: list,
  };
};
export const popularListSuccess = (list) => {
  return {
    type: "POPULAR_LIST_SUCCESS",
    payload: list,
  };
};
