import React, {useContext} from 'react'
import './Shopcatagory.css'


import { ShopContext } from '../context/ShopContext'
import dropdown_icon from '../component/Assets/dropdown_icon.png'
import Item from '../component/Items/Item'

const ShopCatagory = (props)=> {
  const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-catagory'>
      <img className='shop-banner' src={props.banner} alt="" />
      <div className="shop-index">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shop-sort">
            sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shop-products">
        {all_product.map((item, i)=>{
          if (props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
           else{
            return null;
          }
        })}
      </div>
      <div className="shop-loadmore">
        Explore more
      </div>
    </div>
  )
}

export default ShopCatagory;