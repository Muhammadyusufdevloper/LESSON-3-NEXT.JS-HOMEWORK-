"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io'
import { MdOutlineShoppingCart, MdShoppingCart } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import "../products/Products.scss"
import { toggleHeart } from '@/lib/features/wishlist/wishlistSlice'
import { addToCart } from '@/lib/features/cart/cartSlice'
import wishlistEmpty from "../../assets/wishlist.webp"
import Empty from '../empty/Empty'
const WishlistWrapper = () => {
    const wishlist = useSelector(state => state.like.value)
    const cart = useSelector(state => state.cart.value)
    let dispatch = useDispatch()
    return (
        <>
            {
                wishlist.length ?
                    <section className='product'>
                        <div className='container'>
                            <div className='product__info'>
                                <h2 className='product__title'>Wishlist</h2>
                                <p className='product__text'>Wishlist page</p>
                            </div>
                            <div className='product__cards'>
                                {wishlist?.map((product) => (
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
                    :
                    <Empty images={wishlistEmpty} />
            }
        </>
    )
}

export default WishlistWrapper