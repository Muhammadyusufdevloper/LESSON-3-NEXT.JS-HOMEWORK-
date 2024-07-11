"use client"
import React from "react";
import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__card">
        <span>🌱</span>
        <h3 className="header__card__title">The nature candle</h3>
        <p>
          All handmade with natural soy wax, Candleaf is a companion for all
          your pleasure moments
        </p>
        <button>Discovery our collection</button>
      </div>
    </div>
  );
};

export default Hero;
