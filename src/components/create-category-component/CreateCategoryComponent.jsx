"use client";
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./CreateCategoryComponent.scss"
import { useCreateCategoryMutation } from '@/lib/api/categoryApi';

const initialState = {
    name: "",
    slug: ""
};

const CreateCategoryComponent = () => {
    const [value, setValue] = useState(initialState);
    const [createCategory, { data, isSuccess, isError, isLoading }] = useCreateCategoryMutation();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValue(prevState => ({
            ...prevState,
            [name]: value,
            slug: name === "name" ? value.toLowerCase() : prevState.slug
        }));
    };

    const handleCreate = (e) => {
        e.preventDefault();
        createCategory({ name: value.name, slug: value.slug });
    };

    useEffect(() => {
        if (isSuccess) {
            toast.success("Ma'lumot to'liq yaratildi");
        } else if (isError) {
            toast.error("Ma'lumot to'liq yaratilmadi");
        }
    }, [isSuccess, isError]);

    return (
        <div className='create-category'>
            <form className='create-category__form' onSubmit={handleCreate}>
                <div className='create-category__cards'>
                    <div className='create-category__card'>
                        <label className='create-category__label' htmlFor="name">Name</label>
                        <input
                            name="name"
                            value={value.name}
                            onChange={handleChange}
                            required
                            className='create-category__input'
                            id='name'
                            type="text"
                            placeholder='name'
                        />
                    </div>
                </div>
                <button disabled={isLoading} className='create-category__button' type="submit">Submit</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default CreateCategoryComponent;
