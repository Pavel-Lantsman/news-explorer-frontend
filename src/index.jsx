import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css';
import './fonts/stylesheet.css';
import App from './components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render((
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
));
