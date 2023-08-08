import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';


const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {setIsDropdownOpen(!isDropdownOpen);}


  return (
    <div>
      <header class='flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800'>
        <nav
          class='max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between'
          aria-label='Global'
        >
          <div class='flex items-center justify-between'>
            <a
              class='inline-flex items-center gap-x-2 text-xl font-semibold dark:text-white'
              href='/'
            >
              <img src="/logo.png" alt="logo" class='h-12 w-12' />
              Dukan
            </a>
            <div class='sm:hidden'>
              <button
                type='button'
                class='hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800'
                data-hs-collapse='#navbar-image-and-text-1'
                aria-controls='navbar-image-and-text-1'
                aria-label='Toggle navigation'
                onClick={toggleDropdown}
              >
                <svg
                  class='hs-collapse-open:hidden w-4 h-4'
                  width='16'
                  height='16'
                  fill='currentColor'
                  viewBox='0 0 16 16'
                >
                  <path
                    fill-rule='evenodd'
                    d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
                  />
                </svg>
                <svg
                  class='hs-collapse-open:block hidden w-4 h-4'
                  width='16'
                  height='16'
                  fill='currentColor'
                  viewBox='0 0 16 16'
                >
                  <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
                </svg>
              </button>
            </div>
          </div>
          <div
            id='navbar-image-and-text-1'
            class={`hs-collapse ${ isDropdownOpen? 'block' : 'hidden' } overflow-hidden transition-all duration-300 basis-full grow sm:block`}
          >
            
            <div class='flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5'>
              <Link class=' dark:text-slate-100 font-semibold hover:text-slate-700 dark:hover:text-slate-300 hover:scale-110 transition-transform ' onClick={toggleDropdown} to='/mens'>
                Men's
              </Link>
              <Link class=' dark:text-slate-100 font-semibold hover:text-slate-700 dark:hover:text-slate-300 hover:scale-110 transition-transform ' onClick={toggleDropdown} to='/womens'>
                Women's
              </Link>
              <Link class=' dark:text-slate-100 font-semibold hover:text-slate-700 dark:hover:text-slate-300 hover:scale-110 transition-transform ' onClick={toggleDropdown} to='/jewelery'>
                Jewelery
              </Link>
              <Link class=' dark:text-slate-100 font-semibold hover:text-slate-700 dark:hover:text-slate-300 hover:scale-110 transition-transform ' onClick={toggleDropdown} to='/electronics'>
                Electronics
              </Link>

            </div>
          </div>
        </nav>
      </header>
      <Banner/>

    </div>
  );
};

export default Navbar;
