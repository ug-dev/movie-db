const searchReducer = (state = [], action) => {
  switch (action.type) {
    case "SEARCH_LIST_SUCCESS":
      return (state = action.payload);
    default:
      return state;
  }
};

export default searchReducer;
