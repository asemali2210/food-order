import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardFeature from './CardFeature';
import {MdElectricScooter} from 'react-icons/md';
import {ImPower} from 'react-icons/im';
import {GiFullPizza} from 'react-icons/gi';
function OrderSection() {
  return (
    <div className="wd__meals__order">
        <Container>
            <Row className='align-items-center'>
                <Col lg={4} className='align-self-end'>
                    <div className='wd__meals__order__summary text-center text-lg-start'>
                        <h4 className='wd__meals__order__summary__heading'>Everytime follow our serve</h4>
                        <p className='wd__meals__order__p'>
                            Lorem ipsum dolor sit amet, consectetur  uiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur  uiscing elit, sed do 
                        </p>
                    </div>
                </Col>
                <Col lg={8}>
                    <Row className="justify-content-center">
                        <Col xs={12} >
                            <header className='wd__meals__order__header text-center'>
                                Order Delivery in just Half hour
                            </header>
                        </Col>
                        <Col xs={6} md={4} className="wd__meal_box">
                            <CardFeature heading="Order Your Food" icon={<ImPower />} body="Lorem ipsum dolor amet, consectetur  uiscing elit, sed do eiusmod tempor i. "/>
                        </Col>
                        <Col xs={6} md={4} className="wd__meal_box">
                            <CardFeature heading="Delivery & Pickup" icon={<MdElectricScooter />} body="Lorem ipsum dolor amet, consectetur  uiscing elit, sed do eiusmod tempor i. "/>
                        </Col>
                        <Col xs={6} md={4} className="wd__meal_box">
                            <CardFeature heading="Enjoy Your Meal" icon={<GiFullPizza />} body="Lorem ipsum dolor amet, consectetur  uiscing elit, sed do eiusmod tempor i. "/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default OrderSection;