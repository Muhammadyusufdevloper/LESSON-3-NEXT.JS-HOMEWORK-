"use client";
import React, { memo, useState } from 'react'
import "./Products.scss"
import Link from 'next/link'
import Image from 'next/image'
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { MdOutlineShoppingCart, MdShoppingCart } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/lib/features/cart/cartSlice';
import { toggleHeart } from '@/lib/features/wishlist/wishlistSlice';
import { useGetProductsQuery } from '@/lib/api/productApi';
import { useGetCategoryQuery } from '@/lib/api/categoryApi';

const Products = ({ title, text, limit }) => {
    const wishlist = useSelector(state => state.like.value)
    const cart = useSelector(state => state.cart.value)
    const [goCategory, setGoCategory] = useState("")
    let page = 1
    let category = goCategory === "all" ? "" : goCategory
    const { data: PRODUCT } = useGetProductsQuery({ limit, page, category })
    const { data: categoryData } = useGetCategoryQuery()
    let dispatch = useDispatch()
    let productItem = categoryData?.map((category) => (
        <li key={category.id}>
            <data className={goCategory === category.slug ? 'product__active' : ''} onClick={(e) => setGoCategory(e.target.value)} value={category?.slug}>{category.name}</data>
        </li>
    ))
    return (
        <>
            <section className='product'>
                <div className='container'>
                    <div className='product__info'>
                        <h2 className='product__title'>{title}</h2>
                        <p className='product__text'>{text} </p>
                    </div>
                    <ul className='product__list'>
                        <li className='product__item'>
                            <data className={goCategory === "all" || "" ? 'product__active' : ''} onClick={(e) => setGoCategory(e.target.value)} value="all">All</data>
                        </li>
                        {
                            productItem
                        }
                    </ul>
                    <div className='product__cards'>
                        {PRODUCT?.map((product) => (
                            <div key={product?.id} className="product__card">
                                <div className="product__card__img">
                                    <Link href={`/product/${product?.id}`} >
                                        <Image width={150} height={150} alt={product?.title} src={product?.images[0]} />
                                    </Link>
                                    <button onClick={() => dispatch(toggleHeart(product))} className='product__buttons'>
                                        {
                                            wishlist.some((el) => el.id === product.id) ?
                                                <IoMdHeart /> : <IoMdHeartEmpty />
                                        }
                                    </button>
                                </div>
                                <div className="product__card__info">
                                    <h3>{product?.title}</h3>
                                    <div className='product__card__part'>
                                        <p>{product?.price}</p>
                                        <button onClick={() => dispatch(addToCart(product))}>
                                            {
                                                cart.some((el) => el.id === product.id) ?
                                                    <MdShoppingCart /> : <MdOutlineShoppingCart />
                                            }
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default memo(Products)
