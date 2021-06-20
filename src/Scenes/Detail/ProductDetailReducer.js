const ProductDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case "PRODUCT_DETAIL_SUCCESS":
      return (state = action.payload);
    case "RESET_PRODUCT_DETAIL":
      return (state = {});
    default:
      return state;
  }
};

export default ProductDetailReducer;
