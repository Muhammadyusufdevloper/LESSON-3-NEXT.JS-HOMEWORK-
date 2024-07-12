"use client"
import Products from '@/components/products/Products'
import React from 'react'

const Product = ({ limit, title, text }) => {
    return (
        <>
            <section>
                <Products title={title} text={text} limit={limit} />
            </section>
        </>
    )
}

export default Product
