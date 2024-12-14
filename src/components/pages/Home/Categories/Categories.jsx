import React from 'react';
import tableLamp from '../../../../../public/images/categories/table-lamp.webp';
import sideChair from '../../../../../public/images/categories/sidechair.webp';
import pendant from '../../../../../public/images/categories/pendant.webp';
import sofa from '../../../../../public/images/categories/sofa.webp';
import others from '../../../../../public/images/categories/others.webp';
import Image from 'next/image';
import Link from 'next/link';

const Categories = () => {
    return (
        <section className='pt-8 pb-12 grid grid-cols-3 grid-rows-3 gap-2 md:gap-5'>
            <Link href={'/products'}>
                <div className='relative overflow-hidden bg-[#f6f6f6]'>
                    <Image src={tableLamp} className='w-full h-full object-cover p-2 md:p-0 hover:scale-110 duration-200' alt='Table Lamp' />
                    <h2 className='absolute top-1 lg:top-5 left-1 lg:left-5 text-xs sm:text-xl md:text-2xl text-secondary font-semibold lg:font-bold'>Table Lamp</h2>
                </div>
            </Link>
            <Link href={'/products'}>
                <div className='relative overflow-hidden bg-[#f6f6f6]'>
                    <Image src={sideChair} className='w-full h-full object-cover p-2 md:p-0 hover:scale-110 duration-200' alt='side chair' />
                    <h2 className='absolute top-1 lg:top-5 left-1 lg:left-5 text-xs sm:text-xl md:text-2xl text-secondary font-semibold lg:font-bold'>Side Chair</h2>
                </div>
            </Link>
            <Link href={'/products'} className='row-span-2'>
                <div className='relative overflow-hidden bg-[#f6f6f6] h-full'>
                    <Image src={pendant} className='w-full h-full hover:scale-110 p-2 md:p-0 duration-200' alt='pendant' />
                    <h2 className='absolute top-1 lg:top-5 left-1 lg:left-5 text-xs sm:text-xl md:text-2xl text-secondary font-semibold lg:font-bold'>Pendant</h2>
                </div>
            </Link>
            <Link href={'/products'} className='col-span-2 row-span-2'>
                <div className='relative bg-[#f6f6f6] overflow-hidden  h-full'>
                    <Image src={sofa} className='w-full h-full object-contain hover:scale-110 duration-200' alt='sofa' />
                    <h2 className='absolute top-1 lg:top-5 left-1 lg:left-5 text-xs sm:text-xl md:text-2xl text-secondary font-semibold lg:font-bold'>Sofa</h2>
                </div>
            </Link>
            <Link href={'/products'}>
                <div className='relative overflow-hidden bg-[#f6f6f6]'>
                    <Image src={others} className='w-full h-full object-cover p-2 md:p-0 hover:scale-110 duration-200' alt='others' />
                    <h2 className='absolute top-1 lg:top-5 left-1 lg:left-5 text-xs sm:text-xl md:text-2xl text-secondary font-semibold lg:font-bold'>Others</h2>
                </div>
            </Link>
        </section>
    );
};

export default Categories;