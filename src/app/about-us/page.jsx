'use client';

import React from 'react';
import { RiArrowRightSLine } from "react-icons/ri";
import aboutImg1 from '../../../public/images/about/about_1.webp';
import aboutImg2 from '../../../public/images/about/about_2.webp';
import brandImg1 from '../../../public/images/about/1-brand_default.png';
import brandImg2 from '../../../public/images/about/2-brand_default.png';
import brandImg3 from '../../../public/images/about/3-brand_default.png';
import brandImg4 from '../../../public/images/about/4-brand_default.png';
import brandImg5 from '../../../public/images/about/5-brand_default.png';
import Link from 'next/link';
import Image from 'next/image';
import PageTitle from '@/components/shared/PageTitle/PageTitle';
import TawkToScript from '@/components/TawkToScript/TawkToScript';


const AboutPage = () => {
    return (
        <section className="pt-8 pb-8 md:pb-20">
            <PageTitle title={'About Us'} />
            <h1 className="text-3xl font-semibold mb-2">About Us</h1>
            <p className="flex items-center gap-3"><Link href={'/'} className="opacity-75">Home</Link> <RiArrowRightSLine />About Us</p>

            <div className='flex items-center gap-2 pt-8'>
                <h2 className='text-xl font-semibold'>Bazar Zone</h2>
                <span>-</span>
                <p>Shop Smart, Live Better!</p>
            </div>

            <p className='pt-3'>Welcome to Bazar Zone, your one-stop destination for all your shopping needs. Discover an unparalleled shopping experience with our wide range of high-quality products, handpicked to cater to every aspect of your lifestyle. From the latest in electronics to elegant home decor, fashionable clothing, and kitchen essentials, we have everything you need to make your life more convenient and stylish.</p>

            <p className='pt-3'>At Bazar Zone, we believe in providing our customers with the best online shopping experience. Our mission is to offer a diverse selection of products at competitive prices, ensuring that you find exactly what you’re looking for. We pride ourselves on our exceptional customer service, fast shipping, and easy returns, making shopping with us a hassle-free and enjoyable experience.</p>

            <p className='pt-3'>We’re happy to help. If you have any questions regarding a product or an order, please feel free to reach out to us at bazar-zone@info.com.</p>

            <div className='flex gap-2 md:gap-4 py-4'>
                <Image src={aboutImg1} className='w-full' alt='About-img' />
                <Image src={aboutImg2} className='w-full' alt='About-img' />
            </div>

            <div className='flex gap-4 md:gap-36 pt-10 pb-4'>
                <Image src={brandImg1} className='w-full' alt='brand-img' />
                <Image src={brandImg2} className='w-full' alt='brand-img' />
                <Image src={brandImg3} className='w-full' alt='brand-img' />
                <Image src={brandImg4} className='w-full' alt='brand-img' />
                <Image src={brandImg5} className='w-full' alt='brand-img' />
            </div>


            <TawkToScript />

        </section>
    );
};

export default AboutPage;