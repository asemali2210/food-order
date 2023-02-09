import WdButton from 'components/buttons/WdButton';
import LogoWithName from 'components/logo/LogoWithName'
import Link from 'next/link';
import Image from 'next/future/image';
import React from 'react'
import {Container,Row,Col } from 'react-bootstrap';
import SocialIcons from '../social-icons/SocialIcons';
import {GrAppleAppStore} from 'react-icons/gr';
import {FaGooglePlay} from 'react-icons/fa';
import mobImg from 'public/assest/img/mobImgFooter.png';

function Footer() {
  return (
    <footer className='wd__footer'>
        <Container fluid={true}>
            <Row className='justify-content-between'>
                <Col md={4}  lg={3}>
                    <div className='wd__footer-col__items'>
                        <div className='wd__footer__item'>
                            <LogoWithName />
                        </div>
                        <div className='wd__footer__item text-md-start text-center'>
                            <p className='p_1st'>Making deliveries and pickups so easy.</p>
                        </div>
                        <div className='wd__footer__item '>
                            <SocialIcons />
                        </div>
                    </div>
                </Col>
                <Col md={{span: 12, order: 2}}  lg={{span: 4, order: 1}}>
                    <Row>
                    <Col md={4} lg={12} xlg={6}>
                    <div className='wd__footer-col__items'>
                        <p className='wd__footer-col__heading  text-md-start text-center'>Company</p>  
                        <div className='wd__footer__item  text-md-start text-center'>
                            About Us
                        </div>
                        <div className='wd__footer__item  text-md-start text-center'>
                            Careers
                        </div>
                        <div className='wd__footer__item  text-md-start text-center'>
                            Blog
                        </div>
                        <div className='wd__footer__item  text-md-start text-center'>
                            Pricing
                        </div>
                    </div>
                </Col>
                <Col md={8}  lg={12} xlg={6}>
                    <div className='wd__footer-col__items '>
                        <p className='wd__footer-col__heading text-center text-md-start'>Join Our Newsletter</p>
                        <div className='wd__footer-col__form'>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className='input-newsletter d-flex align-items-center justify-content-center justify-content-md-start'>
                                    <input type='email' id='email' placeholder="Your email address" />
                                    <WdButton btnstyle="--fill-in-nvy-sq" type="submit">Subscribe</WdButton>
                                </div>
                            </form>
                            <p className='p-col_2st text-md-start text-center'>*  Will send you weekly updates for your better offers.</p>
                        </div>
                    </div>
                </Col>
                    </Row>
                </Col>
                <Col md={{span: 8, order: 1}} lg={{span: 5, order: 2}}>
                    <div className='wd__footer-col__items'>
                        <div className='wd__footer__download-btns d-flex '>
                            <div className='_left'>
                                <p className='wd__footer-col__heading_download text-md-start text-center'>Have you got our app?</p>
                                <p className='p-col_4st text-md-start text-center'>best cook and best delivery guys all at your service.</p>
                                <div className='btns-box d-flex align-items-center justify-content-md-start justify-content-center'>
                                    <Link href='/'>
                                        <a className='wd__footer__download-btn d-flex '>
                                            <FaGooglePlay className='_icon'/>
                                            Play store
                                        </a>
                                    </Link>
                                    <Link href='/'>
                                        <a className='wd__footer__download-btn d-flex'>
                                            <GrAppleAppStore className='_icon'/>
                                            App store
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className='_right'>
                                <Image 
                                src={mobImg}
                                alt="Download app"
                                width={210}
                                height={280}
                                />
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer