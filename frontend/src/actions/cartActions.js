import axios from "axios";
import { ADD_TO_CART_ITEM, REMOVE_CART_ITEM } from "../types/cartTypes";

export const addToCartAction = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);
  dispatch({
    type: ADD_TO_CART_ITEM,
    payload: {
      name: data.name,
      price: data.price,
      countInStock: data.countInStock,
      product: data._id,
      image: data.image,
      qty,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeCartAction = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_CART_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
