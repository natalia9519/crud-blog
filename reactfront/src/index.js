import React from 'react';
import { createRoot } from 'react-dom';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';
import 'bootstrap/dist/css/bootstrap.min.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
