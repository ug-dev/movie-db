const DetailReducer = (state = "", action) => {
  switch (action.type) {
    case "CAST_DETAIL_SUCCESS":
      return (state = action.payload);
    default:
      return state;
  }
};

export default DetailReducer;
