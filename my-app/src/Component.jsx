import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbarr';

const Component = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Header />
        <Footer />
      </div>
    </div>
  );
};

export default Component;
