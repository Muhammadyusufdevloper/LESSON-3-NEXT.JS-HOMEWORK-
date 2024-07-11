import React from "react";
import "./clean.scss";
import img from "../../assets/image.png";
import Image from "next/image";
import { CiCircleCheck } from "react-icons/ci";

const Clean = () => {
  return (
    <section className="clean">
      <div className="clean__card container">
        <div className="clean__card__left">
          <h3 className="clean__card__title">
            Clean and <br /> fragrant soy wax
          </h3>
          <p className="clean__card__desc">
            Made for your home and for your wellness
          </p>
          <ul className="clean__card__list">
            <li className="clean__card__item">
              <CiCircleCheck />
              <span>Eco-sustainable:</span>All recyclable materials, 0% CO2
              emissions
            </li>
            <li className="clean__card__item">
              <CiCircleCheck />
              <span>Hyphoallergenic:</span> 100% natural, human friendly
              ingredients
            </li>
            <li className="clean__card__item">
              <CiCircleCheck />
              <span>Handmade:</span> All candles are craftly made with love.
            </li>
            <li className="clean__card__item">
              <CiCircleCheck />
              <span>Long burning:</span> No more waste. Created for last long.
            </li>
          </ul>
          <button>Learn more</button>
        </div>
        <div className="clean__card__right">
          <Image width={500} height={300} alt="img" src={img} />
        </div>
      </div>
    </section>
  );
};

export default Clean;
