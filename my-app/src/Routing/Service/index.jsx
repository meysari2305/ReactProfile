import React from 'react';
import Navigation from '../Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import Home from '../Home';
import FormElement from '../../Form/Pembahasan/FormElement';
import Component from '../../Component';
import Footer from '../../components/Footer';
const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="home" element={<Component />} />
          <Route path="form" element={<FormElement />} />
          <Route path="contact" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Routing;
