/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Rack.scss'
import { Link } from 'react-router-dom';

interface ProductProps{
  item: any;
}

const Rack = ({item}: ProductProps) => {
  
  return (
    <div className="RackContainer">
      <div className="CContainer">
        <img className="ProdutoRack" src={item.items[0].images[0].imageUrl} />
      <div className="CBottom">
        <p>{item.productName}</p>
        <div className="PriceContainer">
          <p className="Price">R$ {item.priceRange.sellingPrice.highPrice}</p>
          <Link className="=link" to={`/products/${item.productId}`}><button>Comprar</button></Link>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Rack

/* 
productName
*/
