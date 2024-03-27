import React from 'react'
import './Productdisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
const Productdisplay=(props)=> {
    const {product} = props;
  return (
    <div className='display'>
     <div className="display-left">
        <div className="img-list">
           <img src= {product.image} alt="" />
           <img src= {product.image} alt="" />
           <img src= {product.image} alt="" /> 
           <img src= {product.image} alt="" />
        </div>
        <div className="product-displayimg">
            <img className='main-img' src={product} alt="" />
        </div>
     </div>
     <div className="display-right">
     <h1>{product.name}</h1>
     <div className="pro-name">
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_dull_icon} alt="" />
        <p>(122)</p>
     </div>
     <div className="right-price">
      <div className="right-old">${product.old_price}</div>
      <div className="right-n">${product.new_price}</div>
     </div>
     <div className="product-discription">
       new fashin,  new fashin,  new fashin,  new fashin,  new fashin,
     </div>
     <div className="product-size">
      <h1>select size</h1>
      <div className="right-siz">
         <div>S</div>
         <div>M</div>
         <div>L</div>
         <div>XL</div>
         <div>XXL</div>
      </div>
     </div>
     <button>ADD TO CART</button>
     <p className='right-catagory'><span>Category:</span>women, t-shirt, crop, top </p>
     <p className='right-catagory'><span>Tag:</span>modern,latest </p>
     </div>
    </div>
  )
}

export default Productdisplay;