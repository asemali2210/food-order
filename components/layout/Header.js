import React from 'react'
import {Container ,Row,Col } from 'react-bootstrap';
import Image from 'next/future/image';
import Navbar from './Navbar';
import headerImg from 'public/assest/img/header-img.png';
import WdButton from 'components/buttons/WdButton';
import {FaPlay} from 'react-icons/fa';
import Link from 'next/link'
import brgImg from 'public/assest/img/brugerImg.png';
import arrowImg from 'public/assest/img/arrowHeader.png';
import RatingStar from 'components/rating-stars/RatingStar';
function Header() {
  return (
    <div className="wd__home-header">
      {/* navbar */}
        <Navbar />
        <Container>
          <Row>
            <Col xs={{span: 12, order: 1}} lg={{span: 5, order: 0}}>
              <div className='wd__home-header__content__left d-flex flex-column'>
                  <div className='wd__home-header__heading'>
                    <div className='img__box d-flex align-items-center'>

                        <Image 
                          src={brgImg}
                          layout='raw'
                          width={73}
                          height={66}
                          quality={100}
                          alt="image-header-1"
                        />
                      <p className='_1st'>Easy way to order your food</p>
                    </div>
                    <div className='__2st d-flex align-items-center'>
                      <p className='_bold'>Fast</p>
                      <div className='__3st'>
                        <p className='__3st__p'>Food <br/>Delivery</p>
                        <div className='img__box d-none d-lg-block'>
                            <Image 
                              src={arrowImg}
                              layout='raw'
                              width={120}
                              height={150}
                              alt="image-header-2"
                          />
                        </div>                     
                      </div>
                    </div>
                  </div>
                    <p className='wd-t-p'>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium</p>
                    <div className='wd__home-header__btns d-flex align-items-center'>
                      <WdButton btnstyle='--fill-in'  href="/" to="Order Now"/>
                        <WdButton btnstyle='--fill-out d-flex align-items-center'>
                        <div  className='play__icon d-flex align-items-center justify-content-center'>
                        <FaPlay/>
                        </div>
                          <Link href='/'>
                            <a>
                              Order process
                            </a>
                          </Link>
                        </WdButton>

                    </div>
                    <div className='wd__home-header__rating d-flex flex-column text-center text-md-start'>
                      <RatingStar />
                      <p className='_1st'>5 star rating</p>
                      <p className='_2st'>based on 1788 reviews</p>
                    </div>
              </div>

            </Col>
            <Col lg={{span: 7, order: 1}} xs={{span: 12, order: 0}} className='align-self-end'>
              <div className='wd__home-header__img d-flex justify-content-end align-items-end'>
                <Image 
                src={headerImg}
                layout='raw'
                quality={100}
                alt="image-header-3"
                />
              </div>
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default Header