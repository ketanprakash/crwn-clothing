import CartActionTypes from "./cart.types";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    case CartActionTypes.ADD_ITEM:
      let exists = 0;
      let newCartItems = state.cartItems.map(item => {
        if (item.id === action.payload.id){
          exists = 1;
          return {...item, qty: item.qty + 1};
        }
        else return item;
      })
      if (!exists) newCartItems.push({...action.payload, qty: 1})
      return {
        ...state,
        cartItems: newCartItems
      }
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
      }
    case CartActionTypes.DECREASE_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map(cartItem => {
          if (cartItem.id === action.payload.id){
            return {...cartItem, qty: cartItem.qty - 1};
          }
          return cartItem;
        })
      }
    default: 
      return state
  }
}

export default cartReducer;