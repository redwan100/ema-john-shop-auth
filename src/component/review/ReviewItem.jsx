import React from 'react'

const ReviewItem = ({
  id,
  img,
  price,
  name,
  quantity,
  handleRemoveFromCart,
}) => {
  return (
    <div className="border border-slate-300 m-[10px_auto] md:w-2/3 p-1 flex justify-between items-center pr-3 rounded-md">
      <div className="flex gap-1">
        <img className="w-[4rem] object-cover md:w-[6rem] rounded-sm" src={img} alt="" />
        <div>
          <h1>{name}</h1>
          <p>
            Price:{" "}
            <span className="text-yellow-400 font-semibold">${price}</span>
          </p>
          <p>
            Quantity:{" "}
            <span className="text-yellow-400 font-semibold text-sm">
              {quantity}
            </span>
          </p>
        </div>
      </div>

      <button
        className="w-10 h-10 bg-rose-100 rounded-full text-sm"
        onClick={() => handleRemoveFromCart(id)}
      >
        ❌
      </button>
    </div>
  );
};

export default ReviewItem