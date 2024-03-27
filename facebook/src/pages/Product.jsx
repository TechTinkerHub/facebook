import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import Break from '../component/Break/Break'
import Productdisplay from '../component/Productdisplay/Productdisplay'

const Product =()=> {
  const{all_product} = useContext(ShopContext)
  const {productId} = useParams()
  const product = all_product.find((e)=>e.id === Number(productId))
  return (
    <div>
      <Break product={product}/>
      <Productdisplay product={product}/>
    </div>
  )
}

export default Product;