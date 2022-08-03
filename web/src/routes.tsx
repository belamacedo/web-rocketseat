import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';

const Rotas = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/create-point' element={<CreatePoint />} />
    </Routes>
  );
};

export default Rotas;
