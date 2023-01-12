import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename='/safeguard'>
    <ScrollToTop />
    <App />
  </BrowserRouter>
);

