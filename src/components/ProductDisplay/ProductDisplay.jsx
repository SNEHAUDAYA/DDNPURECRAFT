import React, { useContext } from 'react'
import './ProductDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import ProductItem from '../ProductItem/ProductItem'

function ProductDisplay({category}) {

   const {product_list} = useContext (StoreContext)

  return (
    <div className='product-display' id='product-display'>
       <h2>GET YOUR PRODUCT NOW!</h2>
       <div className="product-display-list">
        {product_list.map((item, index)=>{
            if(category==="All" || category===item.product_category){
            
            return <ProductItem key={index} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image} />
        } })}
       </div>
    </div>
  )
}

export default ProductDisplay