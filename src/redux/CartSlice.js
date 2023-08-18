import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  // {
  //     id: 1,
  //     title: 'Throwback Hip Bag',
  //     href: '#',
  //     color: 'Salmon',
  //     price: 90.00,
  //     quantity: 1,
  //     image:
  //       'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
  //     imageAlt:
  //       'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  //   },
  //   {
  //     id: 2,
  //     title: 'Medium Stuff Satchel',
  //     href: '#',
  //     color: 'Blue',
  //     price: 32.00,
  //     quantity: 1,
  //     image:
  //       'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
  //     imageAlt:
  //       'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  //   },
];

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProductIndex = state.findIndex((product) => {
        return product.id === action.payload.id;
      });
      if (existingProductIndex === -1) {
        state.push({ ...action.payload, qty: 1 });
        console.log(state);
        console.log(existingProductIndex);
      } else {
        state[existingProductIndex].qty += 1;
        console.log(state);
        console.log(existingProductIndex);
      }
    },
    removeFromCart: (state, action) => {
      const indexToRemove = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (indexToRemove !== -1) {
        state.splice(indexToRemove, 1);
      }
    },
    increaseQuantity: (state, action) => {
        const indexToChange = state.findIndex(
        (product) => product.id === action.payload.id
      );
      state[indexToChange].qty += 1;
    },
    decreaseQuantity: (state, action) => {
        const indexToChange = state.findIndex(
            (product) => product.id === action.payload.id
          );
        //   state[indexToChange].qty -= 1
        //   if (state[indexToChange].qty <=0) 
        //   {state[indexToChange].qty += 1}
        if (state[indexToChange].qty > 1) {
            state[indexToChange].qty -= 1;
        }
          
    },
  },
});

export default CartSlice.reducer;
export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  CartSlice.actions;
