import React,{useState, Fragment,useEffect ,useContext} from 'react'
import ClientOnlyPortal from '../portal/ClientOnlyPortal';
import {RiShoppingCartLine} from 'react-icons/ri';
import {IoIosCloseCircleOutline} from 'react-icons/io';
import MealOnCart from '../meal/MealOnCart';
import { Row,Col } from 'react-bootstrap';
import mealImg from 'public/assest/img/meal-1.png';
import WdButton from '../buttons/WdButton';
import CartContext from '../../store/CartContext';
function Cart() {
  const [openCart, setOpenCart] = useState(false);
  useEffect(() => {
    if(openCart) {
      document.querySelector('body').classList.add('modal-active');
      document.querySelector('#backDrop').style.display = "flex";
            document.querySelector('#backDrop').style.top = `${window.scrollY }px`;
    } else{
      document.querySelector('body').classList.remove('modal-active')
      document.querySelector('#backDrop').style.display = "none";

    }
  }, [openCart])
  const cartCtx = useContext(CartContext);
  const numOfItems = cartCtx.items.reduce((currNum, item) => {
    return currNum + item.totalAmount
  }, 0)
  return (
    <Fragment>
      <div className='search-field__icon__cart position-absolute'>
        <RiShoppingCartLine   className='__icon ' onClick={()=> setOpenCart(true)}/>
        <span className='num-of-item'> {numOfItems} </span>
      </div>
        {openCart && (
          <ClientOnlyPortal selector="#backDrop">
            <div className='wd__cart'>
            <div className="wd__cart-wrapper">
            <div className="wd__cart-container">
            <Row>
              <Col xs={12}>
                <div className='wd__cart__header d-flex align-items-center justify-content-between'>
                  <p className='wd__cart__header__p'>Cart</p>
                  <button className='wd__cart__header__close' onClick={()=> setOpenCart(false)}>
                    <IoIosCloseCircleOutline />
                  </button>
                </div>
              </Col>
              <Col xs={12}>
                <MealOnCart name="Lorem ipsum" price="15$" imgSrc={mealImg}/>
              </Col>
              <Col xs={12}>
                <MealOnCart name="Lorem ipsum" price="15$" imgSrc={mealImg}/>
              </Col>
              <Col xs={12}>
                <MealOnCart name="Lorem ipsum" price="15$" imgSrc={mealImg}/>
              </Col>
              <Col xs={12}>
                <div className='wd__cart__total'>
                  <hr />
                  <div className='wd__cart__price-box-info d-flex justify-content-between'>
                    <p className='p_1st-heading'>Subtotal:</p>
                    <p className='p_2st-price'>130$</p>
                  </div>
                  <div className='wd__cart__price-box-info d-flex justify-content-between'>
                    <p className='p_1st-heading'>Ship</p>
                    <p className='p_2st-price'>10$</p>
                  </div>
                  <hr />
                  <div className='wd__cart__price-box-info d-flex justify-content-between'>
                    <p className='p_1st-heading'>Total</p>
                    <p className='p_2st-price'>1325$ USD</p>
                  </div>
                  <div className='wd__submit__meal d-flex justify-content-center'>
                    <WdButton btnstyle="--fill-in-nvy-sq" type="submit">Submit</WdButton>
                  </div>
                </div>
              </Col>
            </Row>
            </div>
            </div>
            
          </div>
          </ClientOnlyPortal>
        )}
    </Fragment>
  )
}

export default Cart;