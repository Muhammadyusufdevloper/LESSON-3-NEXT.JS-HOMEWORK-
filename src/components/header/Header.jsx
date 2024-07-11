"use client";
import React, { useState } from "react";
import "./header.scss";
import Image from "next/image";
import img from "@/assets/logo.png";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import { useSelector } from "react-redux";
import { LuHeart } from "react-icons/lu";

const Header = () => {
  const [show, setShow] = useState(false);
  const wishlist = useSelector(state => state.like.value)
  const cart = useSelector(state => state.cart.value)
  return (
    <header className="header">
      <nav className="header__nav container">
        <div className="header__nav__logo">
          <Link href={"/"}>
            <Image width={130} height={40} alt="img" src={img} />
          </Link>
        </div>
        <ul className={`header__nav__list ${show ? "header__show" : ""}`}>
          <li onClick={() => setShow(false)} className="header__nav__close">
            <MdClose />
          </li>
          <li className="header__nav__item">Discovery</li>
          <li className="header__nav__item">About</li>
          <li className="header__nav__item">Contact us</li>
        </ul>
        <div className="header__nav__icon">
          <Link href={"/cart"}>
            {
              cart.length ?
                <sup>{cart.length}</sup>
                : <></>
            }
            <FiShoppingCart />
          </Link>
          <Link href={"/wishlist"}>
            {
              wishlist.length ?
                <sup>{wishlist.length}</sup>
                : <></>
            }
            <LuHeart />
          </Link>
        </div>
        <div onClick={() => setShow(true)} className="header__nav__menu">
          <AiOutlineMenu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
