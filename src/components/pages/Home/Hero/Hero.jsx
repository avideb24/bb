import React from 'react';
import heroPoster1 from '../../../../../public/images/hero/hero-poster-1.webp';
import heroPoster2 from '../../../../../public/images/hero/hero-poster-2.webp';
import Image from 'next/image';
import Button from '@/components/shared/Button/Button';
import Link from 'next/link';

const Hero = () => {

    const headphoneId = '66769a8123b31b40f9030d95';
    const paperClipId = '66769aaf23b31b40f9030d96';



    return (
        <div className='flex flex-col md:flex-row gap-5 lg:gap-10 text-[10px] md:text-sm my-10'>
            <div className='md:w-1/2 relative'>
                <Image src={heroPoster1} className='w-full' alt='Overear Headphone' />
                <div className='absolute left-5 sm:left-10 md:left-12 lg:left-20 top-1/2 transform -translate-y-1/2 space-y-2'>
                    <p className='uppercase opacity-65'>#Other</p>
                    <h3 className='text-xl md:text-2xl font-bold'>Overear <br /> Headphone</h3>
                    <Link href={`/products/${headphoneId}`}>
                    <Button btnText={'Shop Now'} />
                    </Link>
                </div>
            </div>
            <div className='md:w-1/2 relative'>
                <Image src={heroPoster2} className='w-full' alt='Overear Headphone' />
                <div className='absolute left-5 sm:left-10 md:left-12 lg:left-20 top-1/2 transform -translate-y-1/2 space-y-2'>
                    <p className='uppercase opacity-65'>#Other</p>
                    <h3 className='text-xl md:text-2xl font-bold'>Woody  <br /> for Paper Clips</h3>
                    <Link href={`/products/${paperClipId}`}>
                    <Button btnText={'Shop Now'} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;