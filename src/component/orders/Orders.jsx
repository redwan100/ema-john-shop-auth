import React, { useState } from 'react'
import Cart from '../cart/Cart'
import { Link, useLoaderData } from 'react-router-dom'
import ReviewItem from '../review/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart)

  const handleRemoveFromCart = (id) =>{
    const updateItem = cart.filter((product)=>product.id !== id);
    setCart(updateItem)
    removeFromDb(id)
  }

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart()
  };

  return (
    <div className="grid grid-cols-[1fr,_230px]">
      <div className="py-3">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            {...product}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        ))}
      </div>

      <div className="bg-yellow-100 py-3">
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <Link to={"/checkout"}>
            <button className="mt-3 bg-[#ff3030] w-full py-1 px-2 rounded-md text-lg text-white">
              Process Checkout
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
}

export default Orders