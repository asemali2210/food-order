import React, {useState,useRef} from 'react';
import Input from './Input';
import WdButton from '../buttons/WdButton';
import cartCtx from '../../store/CartContext';
function MealItemForm(props) {
  const amountInputRef = useRef();
  const [amounIsValid, setAmountisValid] = useState(true);

  const   submitHandler = e => {
     e.preventDefault(); 
     console.log(cartCtx)
     const entreredAmout = amountInputRef.current.value;
     const enteredAmoutNumber = +entreredAmout;
     
     
     
     if(entreredAmout.trim().length === 0 || enteredAmoutNumber < 1 || enteredAmoutNumber > 5 ){
       
      setAmountisValid(false)

      return; 
    }
    
    props.onAddToCart(enteredAmoutNumber);
  }
  
  return (
    <form className='form__meal__item' onSubmit={submitHandler}>
        <Input ref={amountInputRef} label="Amount" input={{
            id: 'amount',
            type: 'number',
            max: '5',
            min:  '1',
            step: '1',
            defaultValue: '1'
        }}/>
        <WdButton btnstyle='--fill-in-nvy-sq'>Add</WdButton>
        { !amounIsValid  && <p>Please Enter a Valid amount</p>}
    </form>
  )
}

export default MealItemForm