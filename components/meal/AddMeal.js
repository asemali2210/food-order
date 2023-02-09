import React ,{useState,Fragment,useContext} from 'react';
import Image from 'next/future/image';
import {Col,Row, Container} from 'react-bootstrap';
import ClientOnlyPortal from '../portal/ClientOnlyPortal';
import mealImg1 from 'public/assest/img/meal-1.png';
import mealImg2 from 'public/assest/img/meal-2.png';
import mealImg3 from 'public/assest/img/meal-3.png';
import mealImg4 from 'public/assest/img/meal-4.png';
import {IoIosCloseCircleOutline} from 'react-icons/io';
import MealItemForm from './MealItemForm';
import cartCtx from '../../store/CartContext';
function AddMeal(props) {
    
    const meals = [
        {
            id: 1,
            name: "Lorem ipsum 1",
            description: "Lorem ipsum description Lorem ipsum Lorem ipsum description",
            price: 12,
            src: mealImg1
        },
        {
            id: 2,
            name: "Lorem ipsum 2",
            description: "Lorem ipsum description Lorem ipsum Lorem ipsum description",
            price: 12,
            src: mealImg2
        },
        {
            id: 3,
            name: "Lorem ipsum 3",
            description: "Lorem ipsum description Lorem ipsum Lorem ipsum description",
            price: 12,
            src: mealImg3
        },
        {
            id: 4,
            name: "Lorem ipsum 4",
            description: "Lorem ipsum description Lorem ipsum Lorem ipsum description",
            price: 12,
            src: mealImg4
        },
    ]
    const cartcontext = useContext(cartCtx)
    const addToCartHandler = (amount) => {
        cartcontext.addItem({
            id: meals[0].id,
            name: meals[0].name,
            amount: amount,
            price: meals[0].price
        })
    }
    const [addMeal, setAddMeal] = useState(true);
    const openAddMeal = () => {
        addMeal ? setAddMeal(true) : setAddMeal(false); 
    } 
    function Meal(props) {
        return (
          /* img={mealImg1} heading="" price="" rating="" */
          <Col  xs={6} lg={3} className="meal-card__holder">
            <div className='wd__meal__card'>
                <div className={`card__1 d-flex flex-column align-items-center justify-content-end`}>
                    <div className='img__box'>
                        <Image 
                            layout='raw'
                            alt={props.heading}
                            src={props.src}
                            width={220}
                            height={254 }
                            quality={100}
                        />
                    </div>
                    <h4 className='wd__meals-container__meal__card__heading'>
                        {props.heading}
                    </h4>
                    <div className='wd__meal__card__item__form'>
                        <MealItemForm onAddToCart={addToCartHandler}/> 
                    </div>
                </div>
            </div>
          </Col>

        )
      }
  return (
    <Fragment>
        { props.showAddMeal &&
                <ClientOnlyPortal selector="#backDrop">
                    <div className='add__meal__container'>
                    <div className='add__meal'>
                        <IoIosCloseCircleOutline className='close__add__meal'  onClick={props.openAddMeal} />
                        <Row className="justify-content-end  m-0 p-0">
                            {
                                meals.map((item) => {
                                    return (
                                        <Meal id={item.id} src={mealImg1} heading={item.name} name={item.name}  key={item.id}/>
                                    )
                                })
                            }
                        </Row>
                    </div>
            </div>
                </ClientOnlyPortal>  
        }
    </Fragment>
  )
}

export default AddMeal