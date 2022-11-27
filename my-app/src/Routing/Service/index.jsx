import React from 'react';
import Navigation from '../Navigation';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../Home';
const Routing = () => {
  return (
    <div>
      <Router>
        <Navigation />
      </Router>
    </div>
  );
};
export default Routing;
