export const productDetail = (id) => {
  return {
    type: "PRODUCT_DETAIL",
    payload: id,
  };
};
export const productTvDetail = (id) => {
  return {
    type: "PRODUCT_TV_DETAIL",
    payload: id,
  };
};

export const productDetailSuccess = (detail) => {
  return {
    type: "PRODUCT_DETAIL_SUCCESS",
    payload: detail,
  };
};

export const castDetail = (detail) => {
  return {
    type: "CAST_DETAIL",
    payload: detail,
  };
};

export const castDetailSuccess = (detail) => {
  return {
    type: "CAST_DETAIL_SUCCESS",
    payload: detail,
  };
};
