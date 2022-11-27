import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="sidebar">
      <Link to="/home">
        <i className="fa fa-fw fa-home"></i>Home
      </Link>
      <Link className="service" to="/service">
        <i className="fa fa-fw fa-wrench"></i>Service
      </Link>
      <Link className="client" to="/client">
        <i className="fa fa-fw fa-user"></i>Clients
      </Link>
      <Link className="contact" to="/contact">
        <i className="fa fa-fw fa-envelope"></i>Contacts
      </Link>
    </div>
  );
};

export default Navigation;
//<i className="fa-fa-fw fa-home"></i>
//<a href="#service">Service</a>
