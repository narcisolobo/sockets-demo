import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import NameContextProvider from './context/NameContext.jsx';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NameContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NameContextProvider>
  </React.StrictMode>
);
