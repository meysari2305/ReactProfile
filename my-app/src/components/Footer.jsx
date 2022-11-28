import React from 'react';
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className="footer bg-dark">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: 'fff', marginRight: '2rem' }} />
            Parungkuda,Sukabumi,Jawa-barat
          </div>
          <div className="Phone">
            <FaPhone size={20} style={{ color: 'fff', marginRight: '2rem' }} />
            0858-4005-5021
          </div>
          <div className="location">
            <FaMailBulk size={20} style={{ color: 'fff', marginRight: '2rem' }} />
            iismeysari230599@gmail.com
          </div>
        </div>
        <div className="right">
          <h4>About my Self</h4>
          <p> this is me Iis Meysari. i'm a student Eduwork.id, i still learn and study JavaScript,React.Js and Node.js. hope i can join and work as web developer</p>
          <div className="sosial">
            <FaFacebook size={30} style={{ color: '#fff', marginRight: '1rem' }} />
            <FaTwitter size={30} style={{ color: '#fff', marginRight: '1rem' }} />
            <FaLinkedin size={30} style={{ color: '#fff', marginRight: '1rem' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
