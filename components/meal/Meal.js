import Image from 'next/future/image'
import React from 'react'
import RatingStar from '../rating-stars/RatingStar'
import MealItemForm from './MealItemForm'

function Meal(props) {
  return (
    /* img={mealImg1} heading="" price="" rating="" */
    <div className='wd__meals-container__meal__card'>
        <div className={`card__1 d-flex flex-column align-items-end justify-content-end ${props.active ? 'active' : null}`}>
            <div className={`img__box ` }>
                <Image 
                    alt={props.heading}
                    src={props.src}
                    width={props.active ? 220 : 220}
                    height={props.active ? 254 : 254 }
                    quality={100}
                />
            </div>
            <h4 className='wd__meals-container__meal__card__heading'>
                {props.heading}
            </h4>
            <RatingStar />
            <div className='__price d-flex align-items-center justify-content-center'>
                <p>{props.price}</p>
            </div>
        </div>
    </div>
  )
}

export default Meal