"use client";
import { useGetCategoryQuery } from '@/lib/api/categoryApi';
import React, { useEffect, useState } from 'react';
import { useCreateProductMutation } from '@/lib/api/productApi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./CreateProduct.scss";

const initialState = {
  title: "Olma",
  images: "",
  thumbnail: "",
  price: "123454",
  stock: "234234",
  discountPercentage: "34",
  category: "",
  description: "Salom bu olma bu olmaaaaa👼",
  rating: 4.67
};

const CreateProductComponents = () => {
  const [value, setValue] = useState(initialState);
  const [createProduct, { isSuccess, isError, isLoading }] = useCreateProductMutation();
  const { data: categoryData } = useGetCategoryQuery();
  const [descriptionCount, setDescriptionCount] = useState(initialState.description.length);

  const categoryOptions = categoryData?.map((category) => (
    <option key={category.id} value={category.slug}>{category.name}</option>
  ));

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'description') {
      if (value.length <= 1000) {
        setValue({
          ...value,
          [name]: value
        });
        setDescriptionCount(value.length);
      }
    } else {
      setValue({
        ...value,
        [name]: value
      });
    }
  };

  const handleCreate = (e) => {
    e.preventDefault();
    createProduct(value);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Ma'lumot to'liq yaratildi");
    } else if (isError) {
      toast.error("Ma'lumot to'liq yaratilmadi");
    }
  }, [isSuccess, isError]);

  return (
    <div className='create-product'>
      <form className='create-product__form' onSubmit={handleCreate}>
        <div className='create-product__cards'>
          <div className='create-product__card'>
            <label className='create-product__label' htmlFor="title">Title</label>
            <input
              name="title"
              value={value.title}
              onChange={handleChange}
              required
              className='create-product__input'
              id='title'
              type="text"
              placeholder='Title'
            />
          </div>
          <div className='create-product__card'>
            <label className='create-product__label' htmlFor="images">Images</label>
            <input
              disabled
              name="images"
              value={value.images}
              onChange={handleChange}
              className='create-product__input'
              id='images'
              type="text"
              placeholder='Images'
            />
          </div>
          <div className='create-product__card'>
            <label className='create-product__label' htmlFor="thumbnail">Thumbnail</label>
            <input
              disabled
              name="thumbnail"
              value={value.thumbnail}
              onChange={handleChange}
              className='create-product__input'
              id='thumbnail'
              type="text"
              placeholder='Thumbnail'
            />
          </div>
          <div className='create-product__card'>
            <label className='create-product__label' htmlFor="price">Price</label>
            <input
              name="price"
              value={value.price}
              onChange={handleChange}
              required
              className='create-product__input'
              id='price'
              type="number"
              placeholder='Price'
            />
          </div>
          <div className='create-product__card'>
            <label className='create-product__label' htmlFor="stock">Stock</label>
            <input
              name="stock"
              value={value.stock}
              onChange={handleChange}
              required
              className='create-product__input'
              id='stock'
              type="number"
              placeholder='Stock'
            />
          </div>
          <div className='create-product__card'>
            <label className='create-product__label' htmlFor="discountPercentage">Discount</label>
            <input
              name="discountPercentage"
              value={value.discountPercentage}
              onChange={handleChange}
              required
              className='create-product__input'
              id='discountPercentage'
              type="number"
              placeholder='Discount Percentage'
            />
          </div>
          <div className='create-product__card'>
            <label className='create-product__label' htmlFor="category">Category</label>
            <select
              name="category"
              value={value.category}
              onChange={handleChange}
              required
              className='create-product__input'
              id='category'
            >
              <option value="" disabled>Select Category</option>
              {categoryOptions}
            </select>
          </div>
          <div className='create-product__card'>
            <label className='create-product__label' htmlFor="description">Description</label>
            <textarea
              name="description"
              value={value.description}
              onChange={handleChange}
              required
              className='create-product__textarea'
              id='description'
              placeholder='Description'
              maxLength={1000}
            />
            <div className='create-product__description-length'>
              <p>{descriptionCount}/1000</p>
            </div>
          </div>
        </div>
        <button disabled={isLoading} className='create-product__button' type="submit">Submit</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreateProductComponents;
