import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./resources/css/components.css";
import "./resources/css/icons.css";
import "./resources/css/responsee.css";
import "./resources/css/owl-carousel/owl.carousel.css";
import "./resources/css/owl-carousel/owl.theme.css";
import "./resources/css/template-style.css";
import App from './App';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</React.StrictMode>
);
