import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import App from './App';
import Home from './Pages/Home';
import Order from './Pages/Order';
import Accept from './Pages/Accept';
import Reject from './Pages/Reject';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route index element={<Home />} />
        <Route path='/verify' element={<Order />} />
        <Route path='/faqs' element={<Accept />} />
        <Route path='/transactions' element={<Reject />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
