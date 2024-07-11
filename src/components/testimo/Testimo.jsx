"use client";
import React from "react";
import { IoMdStar } from "react-icons/io";
import "./testimo.scss";
import { TESTIMO } from "@/static";
import Image from "next/image";
const Testimo = () => {
  const tetimoData = TESTIMO?.map((el) => (
    <div key={el.id} className="testimo__card">
      <div className="testimo__card__img">
        <Image alt="image" src={el?.img} />
      </div>
      <div className="testimo__card__info">
        <div className="testimo__card__star">
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
        </div>
        <h3>{el?.title}</h3>
        <p>{el?.name}</p>
      </div>
    </div>
  ));

  return (
    <section className="testimo">
      <h2 className="testimo__title">Testimonials</h2>
      <p className="testimo__text">Some quotes from our happy customers</p>
      <div className="testimo__cards container">{tetimoData}</div>
    </section>
  );
};

export default Testimo;
