import React, { useReducer } from 'react';
import cartCtx from './CartContext';

function CartPovider(props) {
  const defaultValue = {
    items: [],
    totalAmount: 0
  }
  const cartReducer = ( state, action) => {
    if (action.type === 'ADD') {
      const updateItems = state.items.concat(action.item)
      const updateTotalAmout = state.totalAmount + action.item.price * action.item.amount;
      return {
        items: updateItems,
        updateTotalAmout: updateTotalAmout
      };
    }
    return defaultValue;
  }
  const [cartState, dispatchAction] = useReducer(cartReducer,defaultValue)
    const addItemHandler = (item) => {
      dispatchAction({type: 'ADD', item: item});
    };
    const reamoveItemHandler = (id)=>{
      dispatchAction({type: 'DEL', id: id});
    };
    const cartContext = { 
        items: cartState.items,
        totalAmout: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: reamoveItemHandler,
    } 
  return (
    <cartCtx.Provider value={cartContext}>
      {props.children}
    </cartCtx.Provider>
  )
}

export default CartPovider