'use client';

import React from 'react';
import Rating from 'react-rating';
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const ProductRating = ({rating}) => {

    return (
        <div className='flex items-center gap-2'>
            <Rating initialRating={rating} readonly={true} fullSymbol={<FaStar className='text-2xl' />} emptySymbol={<FaRegStar className='text-2xl' />} />
            <span>1 Review</span>
        </div>
    );
};

export default ProductRating;