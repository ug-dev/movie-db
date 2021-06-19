const topRatedReducer = (state = [], action) => {
  switch (action.type) {
    case "TOP_RATED_LIST_SUCCESS":
      return (state = action.payload);
    default:
      return state;
  }
};

export default topRatedReducer;
