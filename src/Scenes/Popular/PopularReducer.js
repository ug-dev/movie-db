const popularReducer = (state = [], action) => {
  switch (action.type) {
    case "POPULAR_LIST_SUCCESS":
      return (state = action.payload);
    default:
      return state;
  }
};

export default popularReducer;
