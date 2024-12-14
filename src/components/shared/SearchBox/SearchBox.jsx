'use client';

import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";


const SearchBox = ({products , setDisplayProducts}) => {


    // onChange to search
    const handleOnChangeSearch = e => {
        const searchText = e.target.value;

        if (searchText.length > 0) {
            fetch(`https://bazar-zone-server.vercel.app/products/search/${searchText}`)
                .then(res => res.json())
                .then(data => setDisplayProducts(data))
        }
        else{
            setDisplayProducts(products)
        }
    };


    // submit to search
    const handleSearchProducts = e => {
        e.preventDefault();

        const text = e.target.text.value;

        fetch(`https://bazar-zone-server.vercel.app/products/search/${text}`)
            .then(res => res.json())
            .then(data => setDisplayProducts(data))
    }


    return (
        <form onSubmit={handleSearchProducts} className='flex justify-center mt-6'>
            <input onChange={(e) => handleOnChangeSearch(e)} type="text" name='text' className='bg-transparent w-10/12 px-4 py-2 border outline-none' placeholder='Search Products...' />
            <button type='submit' className='w-[50px] flex justify-center items-center text-2xl bg-secondary text-white hover:bg-primary duration-200'><CiSearch /></button>
        </form>
    );
};

export default SearchBox;