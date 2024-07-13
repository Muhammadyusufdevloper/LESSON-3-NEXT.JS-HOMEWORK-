"use client"
import React, { useState } from 'react'
import "./ManageCategoryComponents.scss"
import { useDeleteCategoryMutation, useGetCategoryQuery } from '@/lib/api/categoryApi'
import { CiEdit } from 'react-icons/ci'
import { MdDelete } from 'react-icons/md'
import Modal from '../modal/Modal'

const ManageCategoryComponents = () => {
    const { data: categoryData } = useGetCategoryQuery();
    const [deleteCategory] = useDeleteCategoryMutation();
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);

    const handleDeleteClick = (categoryId) => {
        setSelectedCategoryId(categoryId);
        setModalOpen(true);
    }

    const handleDeleteCategory = () => {
        if (selectedCategoryId) {
            deleteCategory(selectedCategoryId);
            setModalOpen(false);
        }
    }

    let category = categoryData?.map((category) => (
        <div key={category.id} className='manage-category__card'>
            <h3>{category.name}</h3>
            <div className='manage-category__buttons'>
                <button><CiEdit /></button>
                <button onClick={() => handleDeleteClick(category.id)}><MdDelete /></button>
            </div>
        </div>
    ));

    return (
        <>
            <div className='manage-category'>
                <h1 className='manage-category__title'>Category</h1>
                <div className='manage-category__cards'>
                    {category}
                </div>
            </div>
            {modalOpen && (
                <Modal setModalOpen={setModalOpen} modalOpen={modalOpen}>
                    <h3 className='modal__text'>Do you agree to delete the selected category?</h3>
                    <div className='modal__buttons-wrapper'>
                        <button onClick={() => setModalOpen(false)}>Close</button>
                        <button onClick={handleDeleteCategory}>Ok</button>
                    </div>
                </Modal>
            )}
        </>
    )
}

export default ManageCategoryComponents
