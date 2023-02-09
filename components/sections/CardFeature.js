import React from 'react'

function CardFeature(props) {
  return (
    <div className='wd__feautr-card text-center d-flex flex-column align-items-center justify-content-center'>
        <div className='wd__feautr-card__icon  d-flex flex-column align-items-center justify-content-center'>
            {props.icon}
        </div>
        <div className='wd__feautr-card__heading'>
            <h3>{props.heading}</h3>
        </div>
        <div className='wd__feautr-card__body'>
            <p  className='wd__feautr-card__body__p'>{props.body}</p>
        </div>
    </div>
  )
}

export default CardFeature