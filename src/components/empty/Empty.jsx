"use client"
import Image from 'next/image'
import React from 'react'
import "./Empty.scss"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
const Empty = ({ images }) => {
    let navigate = useRouter()
    return (
        <>
            <div className='empty'>
                <Image width={400} height={400} alt='empty omg' src={images} />
                <div className='empty__buttons'>
                    <button onClick={() => navigate.push("/")}>Go to home</button>
                    <button onClick={() => navigate.back()}>Go back</button>
                </div>
            </div>
        </>
    )
}

export default Empty