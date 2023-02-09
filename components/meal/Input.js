import React from 'react';

const Input = React.forwardRef((props, ref) => {
  return (
    <div>
        <label className='item__label' htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} className='item__input'  {...props.input}/>
    </div>
  )
})
Input.displayName = "Input";
export default Input;