import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const Footer = () => {
  return (
    <div>
      <footer>
        <p>Clarusway Web Design, Copyright &copy; 2020</p>
        <br />
        <Link to={{ pathname: 'http://www.clarusway.com' }} target="_blank">
          <img
            src="https://clarusway.com/wp-content/uploads/2020/06/clarusway_logo.png"
            width="200"
            height="40"
            alt=""
          />
        </Link>
      </footer>
    </div>
  );
};

export default Footer;
