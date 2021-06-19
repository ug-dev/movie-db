const DetailReducer = (state = { movieDetail: {}, tvDetail: {} }, action) => {
  switch (action.type) {
    case "DETAIL_SUCCESS":
      return (state.movieDetail = action.payload);
    default:
      return state;
  }
};

export default DetailReducer;
