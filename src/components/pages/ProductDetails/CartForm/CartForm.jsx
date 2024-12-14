'use client';

import Button2 from '@/components/shared/Button2/Button2';
import { useCart } from '@/Provider/CartProvider/CartProvider';
import React, { useState } from 'react';
import { FiPlus, FiMinus } from "react-icons/fi";
import Swal from 'sweetalert2';

const CartForm = ({ product }) => {

    const [cart, setCart] = useCart();
    const [quantity, setQuantity] = useState(1);

    const handleIncreaseQantity = () => {
        setQuantity((prev) => prev + 1)
    };

    const handleDecreaseQantity = () => {
        setQuantity((prev) => prev - 1)
    };

    const addedProduct = {
        _id: product?._id,
        title: product?.title,
        img1: product?.img1,
        price: product?.price,
        quantity: quantity
    }

    const handleAddToCart = (productId) => {
        const isAlreadyAdded = cart?.find(product => product?._id == productId);

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
            setCart((prev) => [...prev, addedProduct])
            Swal.fire({
                position: "top-end",
                icon: "success",
                text: "Added Successfully!",
                showConfirmButton: false,
                timer: 1500
            });
        }

    }


    return (
        <div className='flex items-center gap-4'>
            <div className='flex items-center border-2 border-slate-300'>
                <button onClick={handleDecreaseQantity} className='bg-slate-200 text-2xl p-3' disabled={quantity == 1}><FiMinus /></button>
                <span className='px-4'>{quantity}</span>
                <button onClick={handleIncreaseQantity} className='bg-slate-200 text-2xl p-3'><FiPlus /></button>
            </div>
            <p onClick={() => handleAddToCart(product?._id)}>
                <Button2 btnText={'Add To Cart'} />
            </p>
        </div>
    );
};

export default CartForm;