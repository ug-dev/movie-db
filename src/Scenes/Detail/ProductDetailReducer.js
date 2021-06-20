const ProductDetailReducer = (state = "", action) => {
  switch (action.type) {
    case "PRODUCT_DETAIL_SUCCESS":
      return (state = action.payload);
    default:
      return state;
  }
};

export default ProductDetailReducer;
