import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import ItemDetails from './pages/item_details/ItemDetails'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/item/:id" element={<ItemDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
