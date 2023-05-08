import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import ProductContextProvider from './contexts/ProductContextProvider';
import CartContextProvider from './contexts/CartContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <ProductContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </ProductContextProvider>
    </BrowserRouter>
  </>
);