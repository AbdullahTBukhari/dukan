import React from "react";
import { useGetProductsQuery } from "../api/FakeStoreAPI";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } from "../redux/CartSlice";

const Cart = ({setShowCart}) => {
    const {data:products} = useGetProductsQuery();
  return (
    <div className="fixed overflow-auto inset-0 backdrop-blur-lg flex items-center w-full h-max max-h-screen justify-center ">
    {/* <div className=" w-1/2 h-1/2 flex items-center justify-center m-11 rounded-lg p-8 shadow-lg"> */}
    <section className="h-max max-h-screen bg-fixed rounded-2xl bg-inherit">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-semibold text-gray-900">Your Cart</h1>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 ml-9 rounded-lg" onClick={() => setShowCart(false)}>Close</button>
        </div>

        {products.map(product => 
        (<div className="mx-auto mt-8 max-w-md md:mt-12" key={product.id} >
          <div className="rounded-3xl bg-white shadow-lg">
            <div className="px-4 py-6 sm:px-8 sm:py-10">
              <div className="flow-root">
                <ul className="-my-8">
                  <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                    <div className="shrink-0 relative">
                      <span className="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow sm:-top-2 sm:-right-2">1</span>
                      <img className="h-24 w-24 max-w-full rounded-lg object-cover" src={product.image} alt="" />
                    </div>

                    <div className="relative flex flex-1 flex-col justify-between">
                      <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                        <div className="pr-8 sm:pr-5">
                          <p className="text-base font-semibold text-gray-900 ">{product.title}</p>
                          <p className="mx-0 line-clamp-1 mt-1 mb-0 text-sm text-gray-400">{product.description}</p>
                        </div>

                        <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                          <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">{product.price}$</p>
                        </div>
                      </div>

                      <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                        <button type="button" className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </li>
                  {/* Add more list items here */}
                </ul>
              </div>

              {/* Add more content here */}
            </div>
          </div>
        </div>))}
        <button className="mt-5 mb-5 bg-blue-500 text-white py-2 px-4 ml-9 rounded-lg" >
          Checkout
        </button>
      </div>
    </section>
    </div>
    // </div>
  );
};

export default Cart;
