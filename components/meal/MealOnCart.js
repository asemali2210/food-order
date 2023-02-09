import Image from "next/image"

function MealOnCart(props) {
  return (
    <div className='wd__cart__meal-on-cart'>
        <div className='wd__cart__meal-container d-flex align-items-center justify-content-between'>
            <div className='wd__meal-on-cart__img'>
                <Image
                    src={props.imgSrc}
                    alt={props.name}
                    width={70}
                    height={70}
                />
            </div>
            <h4 className="wd__meal-on-cart__name">{props.name}</h4>
            <h4 className="wd__meal-on-cart__price">{props.price}</h4>
        </div>
    </div>
  )
}

export default MealOnCart