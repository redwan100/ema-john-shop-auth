import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../cart/Cart";
import Product from "../product/Product";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import LoadingSpinner from "../loading-spinner/LoadingSpinner";

const Shop = () => {
  const { totalProducts } = useLoaderData();
  const [currentPage, setCurrentPage] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const navigate = useNavigation();

  const [showMore, setShowMore] = useState(true);
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);


  const totalPages = Math.ceil(totalProducts /itemsPerPage);
  const totalPageNumber = [...Array(totalPages).keys()]

 
  
  if (navigate.state === "loading") {
    <LoadingSpinner />;
  }

  // useEffect(() => {
  //   fetch("http://localhost:5000/products")
  //     .then((res) => res.json())
  //     .then((data) => setProduct(data));
  // }, []);

  useEffect(()=>{
 const fetchData =  async ()=>{
    const response =await fetch(
      `http://localhost:5000/products?page=${currentPage}&limit=${itemsPerPage}`
    );

    const data =await response.json()
    setProduct(data)
   }

   fetchData()
  },[currentPage, setItemsPerPage])

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = product.find((product) => product._id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [product]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product._id);
  };

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };


  const options = [10, 15, 20];
   const handleSelectChange = (event) => {
    setItemsPerPage(parseInt(event.target.value))
    setCurrentPage(0)
   };

  return (
    <>
      <div className="grid gap-2 grid-cols-[1fr,_230px] justify-between my-2 ">
        <div className="w-full grid gap-3 grid-cols-[repeat(auto-fit,_minmax(230px,_1fr))]">
          {showMore
            ? product
                .slice(0, 20)
                .map((item) => (
                  <Product
                    key={item._id}
                    item={item}
                    handleAddToCart={handleAddToCart}
                  ></Product>
                ))
            : product.map((item) => (
                <Product
                  key={item._id}
                  item={item}
                  handleAddToCart={handleAddToCart}
                ></Product>
              ))}
        </div>
        <div className="relative">
          <div className="bg-yellow-50 w-full p-2 sticky top-14 left-0">
            <Cart handleClearCart={handleClearCart} cart={cart}>
              <Link to={"/orders"}>
                <button className="mt-3 bg-[#ff3030] w-full py-1 px-2 rounded-md text-lg text-white">
                  Review Order
                </button>
              </Link>
            </Cart>
          </div>
        </div>
        {showMore && (
          <button
            onClick={() => setShowMore(false)}
            className="text-center bg-yellow-600/70 shadow-md shadow-yellow-500/60 w-max mx-auto py-2 px-3 rounded-sm font-semibold"
          >
            Show More
          </button>
        )}
      </div>

      <div className="text-center space-x-2">
        {totalPageNumber.map((number) => (
          <button
            className={`bg-gray-200 w-8 h-8 rounded-full hover:bg-gray-300 font-semibold ${currentPage === number?'bg-yellow-400 hover:bg-yellow-300':''}`}
            onClick={() => setCurrentPage(number)}
          >
            {number + 1}
          </button>
        ))}

        <select value={itemsPerPage} onChange={handleSelectChange}>
          {options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Shop;
