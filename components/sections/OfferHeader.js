import React from 'react';
import {Col ,Row,Container} from 'react-bootstrap';
import Image from 'next/image';
import imgOfferMain from 'public/assest/img/imgOfferMain.png';
function OfferHeader() {
  return (
    <div className='wd__offer-header'>
      <Container>
        <div className='wd__offer-header__wrapper'>
        <div className='wd__offer-header__wrapper__bg'></div>
          <Row className="align-items-md-end align-items-center justify-content-center">
            <Col md={9} >
              <div className='wd__offer-header-heading text-center text-md-start'>
                <p className='__1st'>Have you got our offer?</p>
                <p className='__2st'>Best cooks and best delivery guys at your service.</p>
              </div>
            </Col>
            <Col md={3}>
              <div className='wd__offer-header-img d-flex justify-content-center align-items-md-end align-items-center'>
                <Image
                src={imgOfferMain}
                alt="offer"
                quality={100}
                width={280}
                height={300}
                />
              </div>
            </Col>
          </Row>
        </div>
      </Container>

    </div>
  )
}

export default OfferHeader