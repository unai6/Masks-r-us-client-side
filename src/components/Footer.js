import React from "react";
import {Link} from 'react-router-dom'

export const Footer = () => {
  return (
    <div className='container-fluid px-0'>
      <div className="bg-dark row">
        <div className="col-6 text-light px-2 pt-1">
          <h5 className="text-center text-light d-block">Our Store</h5>
          <hr className="bg-light text-light mb-2 mt-0 d-block mx-auto w-25" />
          <ul className="list-unstyled text-center d-block text-light">
            <li className="turquoise-color footer-text">About us</li>
            <li className="turquoise-color footer-text">FAQ</li>
            <li className="turquoise-color footer-text">Shipping</li>
           <Link to='https://www.bbc.com/news/coronavirus'><li className="turquoise-color footer-text">Covid News</li></Link>
          </ul>
        </div>
        <div className="col-6 text-light px-2 pt-1">
          <h5 className="text-center text-light d-block">Contact</h5>
          <hr className="bg-light text-light mb-2 mt-0 d-block mx-auto w-25" />
          <ul className="list-unstyled text-light text-left d-block">
            <li className="text-light turquoise-color footer-text">
              <i className="fa fa-home turquoise-color mr-2"></i> Mask 'R' us
            </li>
            <li className="turquoise-color footer-text">
              <i className="fa turquoise-color fa-envelope mr-2"></i>
              hi@masksrus.com
            </li>
            <li className="turquoise-color footer-text">
              <i className="fa turquoise-color fa-phone mr-2"></i> + 93 230 02
              21
            </li>
            <li className="turquoise-color footer-text">
              <i className="fa turquoise-color fa-print mr-2"></i> + 669 12 12
              43
            </li>
          </ul>
        </div>
      <div className="bg-dark turquoise-color text-center footer-text m-3">
        Here you will find the best customer service Ever. Trust us and you will
        not regret it.
      </div>
      </div>
    </div>
  );
};
