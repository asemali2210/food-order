import React from 'react'
import {AiFillStar} from 'react-icons/ai';
function RatingStar() {
  return (
        <div className='wd__rating-stars d-flex align-items-center text-center text-md-start justify-content-center justify-content-md-start'>
            <AiFillStar  className="__icon"/>
            <AiFillStar  className="__icon"/>
            <AiFillStar className="__icon" />
            <AiFillStar  className="__icon"/>
            <AiFillStar  className="__icon"/>
        </div>

  )
}

export default RatingStar