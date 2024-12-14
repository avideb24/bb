'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CiHeart } from "react-icons/ci";
import Swal from 'sweetalert2';
import { useCart } from '@/Provider/CartProvider/CartProvider';

const Card = ({ product }) => {

    const [cart, setCart] = useCart();

    const cartProduct = {
        _id: product?._id,
        title: product?.title,
        img1: product?.img1,
        price: product?.price,
        quantity: 1,
    }


    const handleAddToCart = (productId) => {
        const isAlreadyAdded = cart?.find(product => product._id == productId);

        if (isAlreadyAdded) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                text: "Already Added!",
                showConfirmButton: false,
                timer: 1500
              });
        }
        else {
            setCart((prev) => [...prev, cartProduct])
            Swal.fire({
                position: "top-end",
                icon: "success",
                text: "Added Successfully!",
                showConfirmButton: false,
                timer: 1500
              });
        }

    };


    const handleAddToWishlist = () => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            text: "Added to Wishlist!",
            showConfirmButton: false,
            timer: 1500
          });
    };

    
    const hiddenProductsId = ['6676987823b31b40f9030d94','66769a8123b31b40f9030d95','66769aaf23b31b40f9030d96'];

    if(hiddenProductsId.includes(product?._id)){
        return null
    };



    return (
        <div className='max-w-72 group'>
            <div className='max-h-80 relative'>
                <Link href={`/products/${product?._id}`}>
                    <Image src={product?.img1} width={500} height={500} className='w-full h-max object-contain ' alt='product image' />
                </Link>
                {/* <img src={product?.img1} className='w-full h-full object-cover ' alt="" /> */}
                {/* favourite btn */}
                <button onClick={handleAddToWishlist} className='absolute right-3 top-3 text-xl bg-white px-2 py-2 rounded-full hover:bg-secondary hover:text-white duration-200'>
                    <CiHeart />
                </button>
                {/* add to cart btn */}
                <button onClick={() => handleAddToCart(product?._id)} className='absolute left-0 -bottom-5 bg-secondary text-white text-center font-semibold py-3 w-full uppercase opacity-0 group-hover:opacity-100 group-hover:bottom-0 hover:bg-primary duration-200'>+ add to cart</button>
            </div>
            {/* title & price */}
            <div className='flex flex-col items-center py-5'>
                <Link href={`/products/${product?._id}`}>
                    <h2 className='text-base font-semibold mb-1 hover:text-primary duration-150'>{product?.title}</h2>
                </Link>
                <p>${product?.price}</p>
            </div>
        </div>
    );
};

export default Card;