import React from 'react';
import {
  useGetCategoryProductsQuery,
  useGetProductsQuery,
} from '../api/FakeStoreAPI';
import Error from './Error';
import ImgCard from './ImgCard';

const Main = ({ category }) => {
  const { data, error, isLoading } = useGetProductsQuery();
  const {
    data: categoryData,
    error: categoryError,
    isLoading: categoryIsLoading,
  } = useGetCategoryProductsQuery(category);

  if (category) {
    if (categoryError) {
      return <Error />
    }
    if (categoryIsLoading) {
      return (
        <div>
          <button
            type='button'
            class='py-3 px-4 inline-flex justify-center items-center mt-7 gap-2 rounded-md border border-transparent font-semibold bg-black text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'
          >
            <span
              class='animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full'
              role='status'
              aria-label='loading'
            ></span>
            Loading
          </button>
        </div>
      );
    }
    if (categoryData) {
      return (
        <div className='mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {categoryData.map((product) => (
            <ImgCard key={product.id} product={product} />
          ))}
        </div>
      );
    }
  } else if (category === null) {
    if (error) {
      return <h1>404 Falcons</h1>;
    }
    if (isLoading) {
      return (
        <div>
          <button
            type='button'
            class='py-3 px-4 inline-flex justify-center items-center mt-7 gap-2 rounded-md border border-transparent font-semibold bg-black text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'
          >
            <span
              class='animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full'
              role='status'
              aria-label='loading'
            ></span>
            Loading
          </button>
        </div>
      );
    }
    if (data) {
      return (
        <div className='mt-3 group-re grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'> 
          {data.map((product) => (
            <ImgCard key={product.id} product={product} />
          ))}
        </div>
      );
    }
  }
};

export default Main;
