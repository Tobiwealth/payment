import React from 'react';
import {Routes, Route} from 'react-router-dom';


import Order from './Pages/Order';
import Accept from './Pages/Accept';
import Reject from './Pages/Reject';

function App() {
  return (
    <div className="App">
      <Route path='/verify' element={<Order />} />
      <Route path='/faqs' element={<Accept />} />
      <Route path='/transactions' element={<Reject />} />
    </div>
  );
}

export default App;
