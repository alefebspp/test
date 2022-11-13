import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { apiSlice } from './features/api/apiSlice';
import { ChakraProvider } from '@chakra-ui/react';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <ApiProvider api={apiSlice}>
          <App />
        </ApiProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
