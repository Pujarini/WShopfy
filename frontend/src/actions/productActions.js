import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAILURE,
  PRODUCT_REQUEST,
  PRODUCT__SUCCESS,
  PRODUCT__FAILURE,
} from "../types/productTypes";
import axios from "axios";

export const listProducts = () => async (dispatch) => {
  dispatch({ type: PRODUCT_LIST_REQUEST });
  try {
    const { data } = await axios.get("/api/products");
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProduct = (id) => async (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  try {
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({ type: PRODUCT__SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT__FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
