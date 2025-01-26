import './Explore_menu.css'
import { menu_list } from '../../assets/assets'
import PropTypes from 'prop-types'

const Explore_menu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate  your dining experience, One delicious meal at a time.  </p>
        <div className='explore-menu-list'>
          {menu_list.map((item,index) => {
            return (
               <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
              <img className={category===item.menu_name?"active":""} src={item.menu_image} alt='menu-item'/>
              <p>{item.menu_name}</p>
              </div>
            )
          })}
        </div>
        <hr/>
  </div>
    
  )
}
Explore_menu.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
}


export default Explore_menu
