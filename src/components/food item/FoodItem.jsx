import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import './FoodItem.css'
import PropTypes from 'prop-types'
import { useContext } from 'react'


const FoodItem = ({id,name,price,description,image}) => {
    
    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);
  
  return (
    <div className='food-item'>
       <div className="food-item-img-container">
            <img src={image} alt={name} className="food-item-img"/>
            {!cartItems[id] 
               ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="add"/>
               :<div className='food-item-counter'>
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="remove"/>
                <p className='item-count'>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="add"/>
                </div>
                
            }
       </div>
      <div className="food-item-info">
        <div className='food-item-name-rating'> 
        <p>{name} </p>
        <img src={assets.rating_starts} alt="rating" className="rating-icon"/>
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>${price}</p>
        </div>
    </div>
  )
}
FoodItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default FoodItem
