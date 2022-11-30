import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Test from './pages/Test/Test';
import SideEffect from './pages/sideEffect/SideEffect';
import App from './pages/Comment /App';
import Project from './pages/Project/Project';
import Item from './pages/Project/Item';
import ProductItem from './pages/ProductItem/ProductItem';
import Dropdown from './pages/Dropdown/Dropdown';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/productitem" element={<ProductItem />} />
        <Route path="/Dropdown" element={<Dropdown />} />
        <Route path="/app" element={<App />} />
        <Route path="/sideeffect" element={<SideEffect />} />
        <Route path="/test" element={<Test />} />
        <Route path="/project" element={<Project />} />
        <Route path="/item" element={<Item />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
