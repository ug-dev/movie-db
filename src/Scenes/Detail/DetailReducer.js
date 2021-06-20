const DetailReducer = (state = [], action) => {
  switch (action.type) {
    case "CAST_DETAIL_SUCCESS":
      return (state = action.payload);
    case "RESET_CAST_DETAIL":
      return (state = []);
    default:
      return state;
  }
};

export default DetailReducer;
