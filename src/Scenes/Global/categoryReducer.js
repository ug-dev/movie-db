const categoryReducer = (state = true, action) => {
  switch (action.type) {
    case "CATEGORY":
      return (state = action.payload);
    default:
      return state;
  }
};

export default categoryReducer;
