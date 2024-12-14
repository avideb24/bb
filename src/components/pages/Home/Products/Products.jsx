import React from 'react';
import getProducts from '@/libs/getProducts';
import Card from '@/components/shared/Card/Card';
import Link from 'next/link';
import Button from '@/components/shared/Button/Button';

const Products = async () => {

    const products = await getProducts();

    return (
        <section className='pt-5 md:pt-8 pb-8 md:pb-12'>
            <div className='text-center pb-6 md:pb-8 space-y-1'>
                <h2 className='text-lg md:text-2xl lg:text-3xl font-bold'>Trending This Week</h2>
                <p className='text-xs md:text-base'>Find a bright ideal to suit your taste with our great selection of suspension, wall, floor and table lights.</p>
            </div>
            <div>
                {
                    products.length == 0 ?
                        <h2>loading</h2>
                        :
                        <div>
                            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-4'>
                                {
                                    products?.slice(0,12)?.map(product =>
                                        <Card key={product?._id} product={product} />
                                    )
                                }
                            </div>
                            <Link href={'/products'} className='flex justify-center my-8'>
                                <Button btnText={'See All Products'} />
                            </Link>
                        </div>
                }
            </div>
        </section>
    );
};

export default Products;