'use client';

import React from 'react';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ProductImages = ({product}) => {

const images = [
    {
      original: `${product?.img1}`,
      thumbnail: `${product?.img1}`,
    },
    {
      original: `${product?.img2}`,
      thumbnail: `${product?.img2}`,
    },
    {
      original: `${product?.img3}`,
      thumbnail: `${product?.img3}`,
    },
    {
      original: `${product?.img4}`,
      thumbnail: `${product?.img4}`,
    },
  ];
  
    return (
        <div className='w-full md:max-w-sm lg:max-w-2xl'>
            <ImageGallery items={images} showPlayButton={false} showNav={false} />
        </div>
    );
};

export default ProductImages;