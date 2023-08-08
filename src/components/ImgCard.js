import React from 'react';

const ImgCard = ({ product }) => {
  return (
    <div className=' w-full overflow-hidden '>
      <div class='flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]'>
        <div class='object-contain h-full flex flex-col justify-center items-center bg-transparent rounded-t-xl'>
          <img src={product.image} alt="Description" />
        </div>
        <div class='p-4 md:p-6'>
          <span class='block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500'>
            {product.price} $
          </span>
          <h3 class='text-xl line-clamp-2 font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white'>
            {product.title}
          </h3>
          <p class='mt-3 text-gray-500 line-clamp-3'>
            {product.description}
          </p>
        </div>
        <div class='mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700'>
          <a
            class='w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-bl-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800'
            href='#'
          >
            Buy Now
          </a>
          <a
            class='w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-br-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800'
            href='#'
          >
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImgCard;
