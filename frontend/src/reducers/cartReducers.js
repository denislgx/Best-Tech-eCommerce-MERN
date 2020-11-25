import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            const existItem = state.cartItems.find(
                (each) => each.product === each.item
            );

            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((each) =>
                        each.product === existItem.product ? item : each
                    ),
                };
            } else {
                return { ...state, cartItems: [...state.cartItems, item] };
            }
        default:
            return state;
    }
};
