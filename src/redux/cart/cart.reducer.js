const INITIAL_STATE = {
  hidden: true,
  cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_CART_HIDDEN':
      return {
        ...state,
        hidden: !state.hidden
      }
    case 'ADD_ITEM':
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
    default: 
      return state
  }
}

export default cartReducer;