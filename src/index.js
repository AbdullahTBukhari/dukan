import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Error from './components/Error'
import Support from './components/Support';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useGetProductsQuery } from './api/FakeStoreAPI';
import Checkout from './components/Checkout';

// const Products = () => {
//   let { data: productList } = useGetProductsQuery();
//   return productList;
// };
// Products();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <div className='dark:bg-[#1f2937]'>
        <Routes>

          productList.products

          <Route path='/' element={<App category={null} />} exact/>
          <Route path='/mens' element={<App category={`men's clothing`} />} />
          <Route path='/womens' element={<App category={`women's clothing`} />} />
          <Route path='/electronics' element={<App category={`electronics`} />} />
          <Route path='/jewelery' element={<App category={`jewelery`} />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/support' element={<Support />} />
          <Route path='*' element={<Error />} />
        </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
