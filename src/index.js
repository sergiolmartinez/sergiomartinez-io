import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import history from './history';
import './index.css';
import App from './App';
import CryptoMarket from './moduleCrypto/cryptomarkets'

ReactDOM.render(
  <Router history={history}>
    
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/Projects/Crypto-Markets' element={<CryptoMarket/>}/>
    </Routes>
  </Router>,
  document.getElementById('root')
);
