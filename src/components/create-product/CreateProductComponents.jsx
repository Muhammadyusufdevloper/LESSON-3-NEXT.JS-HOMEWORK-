"use client"
import { useGetCategoryQuery } from '@/lib/api/categoryApi'
import React from 'react'
import "./CreateProduct.scss"
const CreateProductComponents = () => {
  const { data: categoryData } = useGetCategoryQuery()
  let categoryOptions = categoryData?.map((category) => (
    <option key={category.id} value={category.slug}>{category.name}</option>
  ))
  return (
    <>
      <div className='create-product'>
        <form className='create-product__form'>
          <div className='create-product__cards'>
            <div className='create-product__card'>
              <label className='create-product__label' htmlFor="title">Title</label>
              <input className='create-product__input' id='title' type="text" placeholder='title' />
            </div>
            <div className='create-product__card'>
              <label className='create-product__label' htmlFor="title">Images</label>
              <input className='create-product__input' id='title' type="text" placeholder='Images' />
            </div>
            <div className='create-product__card'>
              <label className='create-product__label' htmlFor="title">Thumbnail</label>
              <input className='create-product__input' id='title' type="text" placeholder='Thumbnail' />
            </div>
            <div className='create-product__card'>
              <label className='create-product__label' htmlFor="title">Price</label>
              <input className='create-product__input' id='title' type="number" placeholder='Price' />
            </div>
            <div className='create-product__card'>
              <label className='create-product__label' htmlFor="title">Stock</label>
              <input className='create-product__input' id='title' type="number" placeholder='Stock' />
            </div>
            <div className='create-product__card'>
              <label className='create-product__label' htmlFor="title">Discount</label>
              <input className='create-product__input' id='title' type="number" placeholder='discountPercentage' />
            </div>
            <div className='create-product__card'>
              <select
                className='create-product__input'
                defaultValue=""
              >
                {categoryOptions}
              </select>
            </div>
            <div className='create-product__card'>
              <label className='create-product__label' htmlFor="title">Description</label>
              <textarea className='create-product__textarea' id='title' type="text" placeholder='title' />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default CreateProductComponents