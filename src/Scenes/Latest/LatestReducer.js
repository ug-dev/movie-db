const latestReducer = (state = [], action) => {
  switch (action.type) {
    case "LATEST_LIST_SUCCESS":
      return (state = action.payload);
    default:
      return state;
  }
};

export default latestReducer;
