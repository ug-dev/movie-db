export const getSearchList = (list) => {
  return {
    type: "SEARCH_LIST",
    payload: list,
  };
};

export const searchListSuccess = (list) => {
  return {
    type: "SEARCH_LIST_SUCCESS",
    payload: list,
  };
};
