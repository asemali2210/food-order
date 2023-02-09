import React ,{useState,useEffect} from 'react'
import {Row,Col,Container } from 'react-bootstrap';
import Meal from './Meal';
import mealImg1 from 'public/assest/img/meal-1.png';
import mealImg2 from 'public/assest/img/meal-2.png';
import mealImg3 from 'public/assest/img/meal-3.png';
import mealImg4 from 'public/assest/img/meal-4.png';
import WdButton from '../buttons/WdButton';
import AddMeal from './AddMeal';

function MealsContainer() {
    const [showAddMeal, setShowAddMeal] = useState(false);
    const openAddMeal = () => {
        showAddMeal ? setShowAddMeal(false) : setShowAddMeal(true)
    }
    useEffect(() => {

        if (showAddMeal) {
            document.querySelector('body').classList.add('modal-active');
            document.querySelector('#backDrop').style.display = "flex";
            document.querySelector('#backDrop').style.top = `${window.scrollY }px`;
        } else {
            document.querySelector('body').classList.remove('modal-active')    
            document.querySelector('#backDrop').style.display = "none";

        }  
       }, [showAddMeal])
  return (
    <div className='wd__meals-container'>
        <Container>
        <Row className="justify-content-end">
            <Col xs={12} md={10}>
                <header className='wd__meals-container__header text-center'>
                    <p className="__1st">Picked Just for You</p>
                    <p className="__2st">Best Selling Food</p>
                </header>
            </Col>
            <Col xs={12} className="m-0 p-0">
                <Row className="justify-content-end  m-0 p-0">
                    <Col  md={6} lg={3} className="meal-card__holder">
                        <Meal active={true} src={mealImg1} heading="Lorem ipsum " price="45$" rating=""/>
                    </Col>
                    <Col md={6} lg={3} className="meal-card__holder">
                        <Meal src={mealImg2} heading="Lorem ipsum " price="45$" rating=""/>
                    </Col>
                    <Col md={6} lg={3} className="meal-card__holder">
                        <Meal src={mealImg3} heading="Lorem ipsum " price="45$" rating=""/>
                    </Col>
                    <Col md={6} lg={3} className="meal-card__holder">
                        <Meal src={mealImg4} heading="Lorem ipsum " price="45$" rating=""/>
                    </Col>
                    <Col xs={12} className="d-flex align-items-center justify-content-center">
                        <div className='wd__meals-container__oreder-btn'>
                            <WdButton btnstyle="--fill-in-nvy-sq"  onClick={openAddMeal}>
                                Order Now
                            </WdButton>
                        </div>
                    </Col>
                </Row>
                
            </Col>
        </Row>
        </Container>
        <AddMeal showAddMeal={showAddMeal} openAddMeal={openAddMeal}/>
    </div>
  )
}

export default MealsContainer