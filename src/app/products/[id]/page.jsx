import React from 'react';
import getSingleProduct from '@/libs/getSingleProduct';
import ProductImages from '@/components/pages/ProductDetails/ProductImages/ProductImages';
import { RiArrowRightSLine } from "react-icons/ri";
import ProductRating from '@/components/pages/ProductDetails/ProductRating/ProductRating';
import CartForm from '@/components/pages/ProductDetails/CartForm/CartForm';
import getCategoryProducts from '@/libs/getCategoryProducts';
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import Card from '@/components/shared/Card/Card';
import Link from 'next/link';
import PageTitle from '@/components/shared/PageTitle/PageTitle';

const ProductPage = async ({ params }) => {

    const { id } = params;

    const product = await getSingleProduct(id);

    const categoryProducts = await getCategoryProducts(product?.category);

    const relatedProducts = await categoryProducts?.filter(product => product?._id !== id)

    // console.log(product);


    return (
        <section>
            <PageTitle title={product?.title} />
            <div className='flex items-center gap-2 pt-4 pb-10'>
                <Link href={'/'} className='opacity-75' >Home</Link>
                <span><RiArrowRightSLine /></span>
               <Link href={'/products'} className='opacity-75'>Products</Link>
                <span><RiArrowRightSLine /></span>
                <span>{product?.title}</span>
            </div>

            <div className='flex flex-col md:flex-row gap-6 md:gap-12 pb-12'>

                {/* image gallery */}
                <ProductImages product={product} />

                {/* product details */}
                <div className='space-y-3'>
                    <div className='flex items-center gap-4 text-xs'>
                        {
                            product?.stock > 40 ?
                                <p className='border-2 border-green-600 text-green-600 text-xs px-3 py-1 inline-block'>In Stock</p>
                                :
                                <p className='border-2 border-red-600 text-red-600 text-xs px-3 py-1 inline-block'>Low Stock</p>
                        }
                        <span>{product?.stock} Items</span>
                    </div>
                    <h2 className='text-2xl md:text-3xl font-semibold'>{product?.title}</h2>
                    <ProductRating rating={'4.3'} />
                    <p className='flex items-center gap-2'>Price: <span className='text-xl md:text-2xl font-semibold'>${product?.price}</span></p>
                    <div className='flex items-center gap-2 flex-wrap'>
                        <span>Sizes:</span>
                        {
                            product?.sizes.map(size =>
                                <p key={size} className={`${size?.length < 1 ? "hidden" : ""} text-secondary border-b-2 border-b-secondary uppercase`}>{size}</p>
                            )
                        }
                    </div>
                    <CartForm product={product} />

                    <div className='font-normal py-5 space-y-3'>
                        <p className='flex gap-8'>Category: <span className='uppercase'>{product?.category}</span></p>
                        <p className='flex gap-4'>Description:
                            <span className='text-justify'>{product.title} is crafted with the highest quality materials to ensure durability and longevity. It is designed with a focus on functionality and style, making it a perfect addition to any home. Ideal for everyday use or special occasions, it combines practical features with an elegant design. Easy to use and maintain, this product is a must-have for anyone looking to enhance their living experience.</span>
                        </p>
                        <div className='flex items-center gap-[60px]'>
                            <p>Share:</p>
                            <div className='flex gap-2 text-xl'>
                                <button><CiFacebook /></button>
                                <button><CiInstagram /></button>
                                <button><CiTwitter /></button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {/* related products */}
            <div className='md:pt-8 pb-3 md:pb-16'>
                <h2 className='text-xl md:text-2xl font-semibold md:pb-4'>Related Products</h2>
                {
                    relatedProducts?.length == 0 ?
                        <div className='text-center text-red-500 py-5'>No Related Products</div>
                        :
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                            {
                                relatedProducts?.slice(0,4)?.map(product =>
                                    <Card key={product?._id} product={product} />
                                )
                            }
                        </div>
                }
            </div>

        </section>
    );
};

export default ProductPage;