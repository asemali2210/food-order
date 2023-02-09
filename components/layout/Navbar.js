import React, { useRef, useState } from 'react';
import {Container ,Row,Col } from 'react-bootstrap';
import {BsToggles2} from 'react-icons/bs';
import {FcSearch} from 'react-icons/fc';
import Link from 'next/link';
import LogoWithName from '../logo/LogoWithName';
import $ from 'jquery';
import WdButton from '../buttons/WdButton';
import Cart from '../cart/Cart'
function Navbar() {
    const [openNav, setOpenNav] = useState(false);
    const menuRef = useRef();
    const toggleNav = () => {
        /*➖➖➖ jq Animate nav menu ➖➖➖*/
        if(openNav){ 
            $(menuRef.current).slideToggle(400,  setOpenNav(false));
            setOpenNav(false);
        } else {
            $(menuRef.current).slideToggle(400, setOpenNav(true));
        }
    }
  return (
    <div className='wd__navbar'>

        <Container fluid={true}>
        <Row className='justify-content-between align-items-center'>
            <Col  xs={6} md={2} xlg={3}>
            <div className='wd__navbar__logo'>
                <LogoWithName />
            </div>
            </Col>
            <Col ref={menuRef} xs={9} md={10} xlg={9} className={`wd__navbar__menu`}>
                <div className='wd__navbar__items'>
                    <ul className='wd__navbar__links list-unstyled d-flex flex-column flex-md-row justify-content-evenly'>
                        <li className='wd__navbar__item'>
                            <Link href='/' >
                                <a className="wd__navbar__link">
                                    Home
                                </a>
                            </Link>
                        </li>
                        <li className='wd__navbar__item'>
                            <Link href='/' >
                                <a className="wd__navbar__link">
                                    Menu
                                </a>
                            </Link>
                        </li>
                        <li className='wd__navbar__item'>
                            <Link href='/' >
                                <a className="wd__navbar__link">
                                    Contact
                                </a>
                            </Link>
                        </li>
                        <li className='wd__navbar__item'>
                            <Link href='/' >
                                <a className="wd__navbar__link">
                                    Shop
                                </a>
                            </Link>
                        </li>
                        <li className='wd__navbar__item search-field'>
                            <FcSearch className='search-field__icon__search position-absolute' />
                            <input type='search' name="search" placeholder='Search'/>
                            <Cart />
                        </li>
                        <li className='wd__navbar__item auth-btn'>
                            <WdButton btnstyle="--fill-out"  href="/" to="Login"/>
                        </li>
                        <li className='wd__navbar__item  auth-btn'>
                            <WdButton btnstyle="--fill-in" href="/" to="Sign Up"/>
                        </li>
                    </ul>
                </div>
            </Col>
            <Col xs={6} md={9} xlg={9} className='d-flex justify-content-end d-lg-none'>
                <div className={`wd__navbar__toggle-btn ${openNav ? '--active' : ' '}`} onClick={toggleNav}>
                    <BsToggles2  className='wd__navbar__toggle-icon'/>
                </div>
            </Col>
        </Row>
        </Container>
    </div>
  )
}

export default Navbar