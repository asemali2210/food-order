import React from 'react';
import Image from 'next/image';
import sliderImg1 from 'public/assest/img/sliderImg1.png';
import { Container } from 'react-bootstrap';
import {BiRightArrowCircle,BiLeftArrowCircle} from 'react-icons/bi';
function OfferSlider() {
  return (
    <div className='wd__offer-slider'>
        <div className='wd__offer-slider-container__bg'></div>
        <Container>
              <div className='slider-card d-flex'>
                <div className='slider-card__img d-md-block d-flex align-items-center justify-content-center'>
                  <Image 
                    src={sliderImg1}
                    alt="slider-img"
                    />
                </div>
                <div className='slider-card__slider-info d-flex flex-column text-center'>
                  <div className=''>
                  <h4 className='slider-card__slider-info__category'>Food Trend</h4>
                  <h3 className='slider-card__slider-info__heading'>Lorem ipsum </h3>
                  
                  </div>
                  <p className='slider-card__slider-info__body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                  <div className='slider-card__btns-controler d-flex justify-content-center text-center align-items-center'>
                    <BiLeftArrowCircle className='btns-controler_icon'/>
                    <p className='slider-card__counter'>1/5</p>
                    <BiRightArrowCircle className='btns-controler_icon'/>
                  </div>
              </div>
          </div>
        </Container>
    </div>
  )
}

export default OfferSlider