import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = ({ item, handleAddToCart }) => {
  const { img, name, seller, price, category } = item;

  return (
    <div>
      <div className=" relative w-full h-96 bg-base-100 border-2 rounded-lg">
        <figure className="m-1">
          <img className="h-52 w-full object-cover rounded-md" src={img} alt="Shoes" />
        </figure>
        <div className="card-body p-3">
          <h2 className="card-title">{name}</h2>
          <p className="font-semibold">{seller}</p>
          <p>Price: ${price}</p>
        </div>
        <button onClick={() => handleAddToCart(item)} className="btn bg-orange-300 hover:bg-orange-600 w-full inset-x-0 bottom-0 absolute rounded-b-lg py-2">
          Add To Cart   
          <span className="ml-2"><FontAwesomeIcon icon={faShoppingCart} /></span>
        </button>
      </div>
    </div>
  );
};

export default Product;
