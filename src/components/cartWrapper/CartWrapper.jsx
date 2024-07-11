"use client";
import React from "react";

import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./cart.scss";
import Link from "next/link";
import Image from "next/image";
import Empty from "../empty/Empty";
import cartEmpty from "../../assets/cart.png"
import { addToCart, decrementCart, removeFromCart } from "@/lib/features/cart/cartSlice";
const CartWrapper = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const [voucher, setVoucher] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    let dispatch = useDispatch();
    let cartData = useSelector((state) => state.cart.value);
    console.log(cartData);

    useEffect(() => {
        if (openModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [openModal]);

    useEffect(() => {
        let total = cartData.reduce(
            (sum, el) => sum + el.price * el.quantity,
            0
        );
        setTotalPrice(+total.toFixed(2));
    }, [cartData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setVoucher(
            inputValue === "laylo"
                ? (totalPrice + Math.ceil(totalPrice * 0.02)) * 0.2
                : 0
        );
        setInputValue("");
    };
    return (
        <>
            {cartData.length ? (
                <div className="cart container">
                    <h2 className="section__title">CART</h2>
                    <div className="cart__table">
                        <table>
                            <thead>
                                <tr>
                                    <th>PRODUCT</th>
                                    <th>PRICE</th>
                                    <th>QTY</th>
                                    <th>UNIT PRICE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartData?.map((cart) => (
                                    <tr key={cart.id} className="cart__row">
                                        <td>
                                            <div className="cart__product">
                                                <button
                                                    onClick={() =>
                                                        dispatch(
                                                            removeFromCart(
                                                                cart.id
                                                            )
                                                        )
                                                    }
                                                >
                                                    <IoClose />
                                                </button>
                                                <Link href={`/product/${cart.id}`}>
                                                    <Image
                                                        height={50}
                                                        src={cart.images[0]}
                                                        width={50}
                                                        alt=""
                                                    />
                                                </Link>
                                                <p>{cart.title}</p>
                                            </div>
                                        </td>
                                        <td>
                                            <span>Price: </span> $
                                            {(
                                                cart.price * cart.quantity
                                            ).toFixed(2)}
                                        </td>
                                        <td>
                                            <span>Qty:</span>
                                            <div className="cart__counter">
                                                <button
                                                    onClick={() =>
                                                        dispatch(
                                                            decrementCart(cart)
                                                        )
                                                    }
                                                >
                                                    -
                                                </button>
                                                <div>{cart.quantity}</div>
                                                <button
                                                    onClick={() =>
                                                        dispatch(
                                                            addToCart(cart)
                                                        )
                                                    }
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            <span>Unit price:</span>
                                            <div>${cart.price}</div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="cart__bottom">
                        <div className="cart__bottom__left">
                            <h3>Sub-total: 23223$</h3>
                            <p>Tax and shipping cost will be calculated later</p>
                        </div>
                        <button>Check-Out</button>
                    </div>
                </div>
            ) : (
                <Empty images={cartEmpty} />
            )}
        </>
    );
};

export default CartWrapper;
