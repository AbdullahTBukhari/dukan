import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className=' mt-5 '>
      <Link to='/' class="group inline-block bg-black/[.05] hover:bg-black/[.1] dark:bg-white/[.05] dark:hover:bg-white/[.1] border border-balck/[.05] dark:border-white/[.05] p-1 pr-4 rounded-full shadow-md">
        
        <span class='group-hover:bg-black/[.1] dark:group-hover:bg-white/[.1] dark:bg-white/[.075] dark:text-white py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-full bg-black/[.075] font-extrabold font-mono text-black text-sm'>
          {/* <svg
            class='w-2.5 h-2.5'
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
          >
            <path
              d='M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
            />
          </svg> */}
          <b>Libraries</b>
        </span>
        <p class='ml-2 inline-block text-black dark:text-white text-sm'>
          React 18 - Redux ToolKit - RTK Query - React Router - Tailwind CSS - Preline UI
        </p>
      </Link>
    </div>
  );
};

export default Banner;
