import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from '../redux/CartSlice';

const stripe = require('stripe')(
  'sk_test_51NekwjBWAhgHqpNplT1sfoehaoJlm7kSTKopEAnR8vKG844GO7gEJsp7QUC2tlRwV2wBY0cTO6rGwXAjMWztjJVw00anqIAwgG'
);

export default function ShopingCart() {
  const cartProducts = useSelector((state) => state.cart);


  const callSession = async () => {
    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      success_url: `http://localhost:3000/success`,
    });
    return session.url;
  };


  

  const lineItems = cartProducts.map((product) => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: product.title,
      },
      unit_amount: product.price * 100, // Stripe works with cents, not dollars
    },
    quantity: product.qty,
  }));
  

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  let subTotal = 0;

  return !open ? (
    <button
      onClick={() => setOpen(true)}
      // className='m-3 ml-7 sm:mr-7'
    >
      <ShoppingCartIcon className='h-6 w-6 m-5' />
    </button>
  ) : (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter='ease-in-out duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in-out duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed backdrop-blur-lg inset-0 bg-gray-500/25 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-500 sm:duration-700'
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transform transition ease-in-out duration-500 sm:duration-700'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-full'
              >
                <Dialog.Panel className='pointer-events-auto w-screen max-w-md'>
                  <div className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl'>
                    <div className='flex-1 overflow-y-auto px-4 py-6 sm:px-6'>
                      <div className='flex items-start justify-between'>
                        <Dialog.Title className='text-lg font-medium text-gray-900'>
                          Shopping cart
                        </Dialog.Title>
                        <div className='ml-3 flex h-7 items-center'>
                          <button
                            type='button'
                            className='relative -m-2 p-2 text-gray-400 hover:text-gray-500'
                            onClick={() => {
                              setOpen(false);
                            }}
                          >
                            <span className='absolute -inset-0.5' />
                            <span className='sr-only'>Close panel</span>
                            <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                          </button>
                        </div>
                      </div>

                      {cartProducts.length > 0 ? (
                        <div className='mt-8'>
                          <div className='flow-root'>
                            <ul className='-my-6 divide-y divide-gray-200'>
                              {cartProducts.map((product) => (
                                <li key={product.id} className='flex py-6'>
                                  <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
                                    <img
                                      src={product.image}
                                      alt={product.title}
                                      className='h-full w-full object-cover object-center'
                                    />
                                  </div>

                                  <div className='ml-4 flex flex-1 flex-col'>
                                    <div>
                                      <div className='flex justify-between text-base font-medium text-gray-900'>
                                        <h3 className=' '>
                                          <Link>{product.title}</Link>
                                        </h3>
                                        <p className='ml-4'>
                                          {product.qty * product.price}
                                          <p className=' text-slate-500/70 inline'>
                                            $
                                          </p>
                                        </p>
                                      </div>
                                      <p className='mt-1 text-sm text-gray-500'>
                                        {product.category}
                                      </p>
                                    </div>
                                    <div className='flex flex-1 items-end justify-between text-sm'>
                                      {/* <div> */}
                                      <p className='text-gray-500'>Quantity</p>
                                      <div class='mx-auto flex h-7 items-stretch text-gray-600'>
                                        <button
                                          onClick={() => {
                                            dispatch(decreaseQuantity(product));
                                          }}
                                          class='flex items-center justify-center rounded-l-md bg-gray-200 px-3 transition hover:bg-black hover:text-white'
                                        >
                                          -
                                        </button>
                                        <div class='flex w-full items-center justify-center bg-gray-100 px-3 text-xs uppercase transition'>
                                          {product.qty}
                                        </div>
                                        <button
                                          onClick={() => {
                                            dispatch(increaseQuantity(product));
                                          }}
                                          class='flex items-center justify-center rounded-r-md bg-gray-200 px-3 transition hover:bg-black hover:text-white'
                                        >
                                          +
                                        </button>
                                      </div>
                                      <div className=' text-transparent text-xs'>
                                        {
                                          (subTotal +=
                                            product.qty * product.price)
                                        }
                                      </div>
                                      <div className='flex'>
                                        <button
                                          type='button'
                                          onClick={() => {
                                            dispatch(removeFromCart(product));
                                          }}
                                          className='font-medium text-indigo-600 hover:text-indigo-500'
                                        >
                                          Remove
                                        </button>
                                      </div>
                                      {console.log(cartProducts)}
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ) : (
                        <h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
                          You have not selected any products{' '}
                          <p className='text-4xl inline-flex'>😊</p>
                        </h1>
                      )}
                    </div>
                    
                    <div className='border-t border-gray-200 px-4 py-6 sm:px-6'>
                      <div className='flex justify-between text-base font-medium text-gray-900'>
                        <p>Subtotal</p>
                        {console.log(cartProducts)}
                        <p>$ {subTotal.toFixed(2)}</p>
                      </div>
                      <p className='mt-0.5 text-sm text-gray-500'>
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className='mt-6'>
                       
                        <button
                          className='flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-black/90'
                          onClick={ async () => {
                            const sessionUrl = await callSession();
                            window.location.href = sessionUrl;
                          }}
                        >
                          Checkout
                        </button>
                       
                      </div>
                      <div className='mt-6 flex justify-center text-center text-sm text-gray-500'>
                        <p>
                          or
                          <button
                            type='button'
                            className='font-medium text-black hover:text-black/90'
                            onClick={() => {
                              setOpen(false);
                            }}
                          >
                            Continue Shopping
                            <span aria-hidden='true'> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
