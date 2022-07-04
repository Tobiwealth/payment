import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Order from './Pages/Order';
import Accept from './Pages/Accept';
import Reject from './Pages/Reject';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/verify' element={<Order />} />
          <Route path='/faqs' element={<Accept />} />*/
          <Route path='/transactions' element={<Reject />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
