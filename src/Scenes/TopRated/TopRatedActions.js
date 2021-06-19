export const getTopRatedList = (list) => {
  return {
    type: "TOP_RATED_LIST",
    payload: list,
  };
};
export const getTopRatedTvList = (list) => {
  return {
    type: "TOP_RATED_TV_LIST",
    payload: list,
  };
};

export const topRatedListSuccess = (list) => {
  return {
    type: "TOP_RATED_LIST_SUCCESS",
    payload: list,
  };
};
