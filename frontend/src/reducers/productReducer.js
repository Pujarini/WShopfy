import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAILURE,
  PRODUCT_REQUEST,
  PRODUCT__SUCCESS,
  PRODUCT__FAILURE,
} from "../types/productTypes";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_REQUEST:
      return { loading: true, ...state };
    case PRODUCT__SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT__FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
