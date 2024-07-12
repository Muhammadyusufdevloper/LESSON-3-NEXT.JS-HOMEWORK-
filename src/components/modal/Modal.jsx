"use client"
import React from 'react'
import "./Modal.scss"

const Modal = ({ children, setModalOpen, modalOpen }) => {
    return (
        <>
            <div className='modal-overly' onClick={() => setModalOpen(false)}></div>
            <div className='modal'>
                {children}
            </div>
        </>
    )
}

export default Modal
