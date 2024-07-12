"use client"
import React, { useState } from 'react'
import "./ManageProductComponent.scss"
import { useDeleteProductMutation, useGetProductsQuery } from '@/lib/api/productApi'
import Image from 'next/image'
import { useGetCategoryQuery } from '@/lib/api/categoryApi'
import Modal from '../modal/Modal'

const ManageProductComponents = () => {
    const { data: categoryData } = useGetCategoryQuery()
    const [goCategory, setGoCategory] = useState("")
    const [deleteProduct] = useDeleteProductMutation()
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedProductId, setSelectedProductId] = useState(null)

    let categorySelect = goCategory === "all" ? "" : goCategory
    const { data: productData } = useGetProductsQuery({ category: categorySelect })

    let categoryOptions = categoryData?.map((category) => (
        <option key={category.id} value={category.slug}>{category.name}</option>
    ))

    let products = productData?.map((product) => (
        <tr key={product.id}>
            <td>
                <Image width={50} height={50} className='manage-product__img' src={product.images[0]} alt={product.title} />
                <h3>{product.title}</h3>
            </td>
            <td>
                <p>{product.category.charAt(0).toUpperCase() + product.category.slice(1).toLowerCase()}</p>
            </td>
            <td>
                <p>{product.stock}</p>
            </td>
            <td>
                <p>{product.rating}</p>
            </td>
            <td className='manage-product__text-price'>
                <p className='manage-product__text'>${product.price}</p>
            </td>
            <td className='manage-product__text-old-price'>
                <p>${product.discountPercentage}</p>
            </td>
            <td>
                <button
                    onClick={() => {
                        setSelectedProductId(product.id)
                        setModalOpen(true)
                    }}
                    className='manage-product__delete'
                >
                    Delete
                </button>
            </td>
            <td>
                <button className='manage-product__edit'>Edit</button>
            </td>
        </tr>
    ))

    const handleDeleteProduct = () => {
        if (selectedProductId) {
            deleteProduct(selectedProductId)
            setModalOpen(false)
        }
    }

    return (
        <>
            <div className="manage-product">
                <div className="manage-product__wrapper">
                    <div className="manage-product__info">
                        <h1 className="manage-product__title">Products</h1>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>
                                    <select
                                        onChange={(e) => setGoCategory(e.target.value)}
                                        className="manage-product__category-select"
                                        defaultValue=""
                                    >
                                        <option hidden value="">Select a category</option>
                                        <option value="all">All</option>
                                        {categoryOptions}
                                    </select>
                                </th>
                                <th>
                                    <select className="manage-product__category-select">
                                        <option value={""}>Stock</option>
                                        <option value={""}>Inc</option>
                                        <option value={""}>Dec</option>
                                    </select>
                                </th>
                                <th>
                                    <select className="manage-product__category-select">
                                        <option value={""}>Rating</option>
                                        <option value={""}>Inc</option>
                                        <option value={""}>Dec</option>
                                    </select>
                                </th>
                                <th>
                                    <select className="manage-product__category-select">
                                        <option value={""}>Price</option>
                                        <option value={""}>Inc</option>
                                        <option value={""}>Dec</option>
                                    </select>
                                </th>
                                <th>
                                    <select className="manage-product__category-select">
                                        <option value={""}>Discount</option>
                                        <option value={""}>Inc</option>
                                        <option value={""}>Dec</option>
                                    </select>
                                </th>
                                <th>Delete</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody className="manage-product__tbody">
                            {products}
                        </tbody>
                    </table>
                </div>
            </div>
            {modalOpen && (
                <Modal setModalOpen={setModalOpen} modalOpen={modalOpen}>
                    <h3 className='modal__text'>Do you agree to delete the selected product?</h3>
                    <div className='modal__buttons-wrapper'>
                        <button onClick={() => setModalOpen(false)}>Close</button>
                        <button onClick={handleDeleteProduct}>Ok</button>
                    </div>
                </Modal>
            )}
        </>
    )
}

export default ManageProductComponents
