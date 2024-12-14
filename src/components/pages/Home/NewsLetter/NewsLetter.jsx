'use client';

import React from 'react';
import Swal from 'sweetalert2';

const NewsLetter = () => {

    const handleSubscribe = e => {
        e.preventDefault();

        if (e.target.email.value.length > 0) {
            e.target.email.value = '';

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Subsscribed Successfully!",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }


    return (
        <div className='bg-[#f5f2f2] py-10 mb-16'>
            <div className='max-w-xl mx-auto p-4'>
                <h2 className='text-xl md:text-2xl font-semibold text-center  capitalize'>subscribe to our newsletter</h2>
                <p className='mb-8 mt-3 text-center opacity-80'>Stay Updated on all that&apos;s new add noteworthy</p>
                <form className='flex items-center gap-3' onSubmit={handleSubscribe}>
                    <input type="email" name='email' className='w-9/12 py-1 border-b-2 bg-transparent border-b-slate-400 outline-none' placeholder='Your E-mail...' required />
                    <input type="submit" value="Subscribe" className='w-3/12 py-1 border-b-2 border-b-slate-400 uppercase font-semibold outline-none cursor-pointer' />
                </form>
            </div>
        </div>
    );
};

export default NewsLetter;