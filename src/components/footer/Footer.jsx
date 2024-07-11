import Image from "next/image";
import React from "react";
import img from "../../assets/footer.png";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__card container">
        <div>
          <Image alt="img" src={img} />
          <p>Your natural candle made for your home and for your wellness.</p>
        </div>
        <div className="footer__card__right">
          <ul className="footer__list">
            <li className="footer__item">Discovery</li>
            <li className="footer__item">New season</li>
            <li className="footer__item">Most searched</li>
            <li className="footer__item">Most selled</li>
          </ul>
          <ul className="footer__list">
            <li className="footer__item">About</li>
            <li className="footer__item">Help</li>
            <li className="footer__item">Shipping</li>
            <li className="footer__item">Affiliate</li>
          </ul>
          <ul className="footer__list">
            <li className="footer__item">Info</li>
            <li className="footer__item">Contact us</li>
            <li className="footer__item">Privacy Policies</li>
            <li className="footer__item">Terms & Conditions</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
