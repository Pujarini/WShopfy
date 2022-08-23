import { ADD_TO_CART_ITEM, REMOVE_CART_ITEM } from "../types/cartTypes";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART_ITEM:
      const item = action.payload;
      const itemExist = state.cartItems.find((x) => x.product === item.product);
      if (itemExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === item.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.product != action.payload
        ),
      };

    default:
      return state;
  }
};
