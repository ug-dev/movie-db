export const getLatestList = (list) => {
  return {
    type: "LATEST_LIST",
    payload: list,
  };
};
export const getLatestTvList = (list) => {
  return {
    type: "LATEST_TV_LIST",
    payload: list,
  };
};

export const latestListSuccess = (list) => {
  return {
    type: "LATEST_LIST_SUCCESS",
    payload: list,
  };
};
