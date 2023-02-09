import React from 'react';
import OrderSection from '../sections/OrderSection';
import MealsContainer from './MealsContainer';

function Meals() {
  return (
    <section className='wd__meals'>
        <OrderSection />
        <MealsContainer />
    </section>
  )
}

export default Meals