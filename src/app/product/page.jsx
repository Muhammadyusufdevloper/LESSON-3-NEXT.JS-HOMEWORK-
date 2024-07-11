"use client"
import Products from '@/components/products/Products'
import { useGetProductsQuery } from '@/lib/api/productApi'
import React from 'react'

const Product = ({ limit, title, text }) => {
    const { data } = useGetProductsQuery({ limit })
    return (
        <>
            <section>
                <Products title={title} text={text} PRODUCT={data} />
            </section>
        </>
    )
}

export default Product
