'use client';

import PageTitle from '@/components/shared/PageTitle/PageTitle';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import { useRouter } from 'next/navigation';
import React from 'react';
import Swal from 'sweetalert2';

const image_hosting_key = 'de5d24dbb0b017943268e405c3ee96d4';
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProductPage = () => {

    const axiosPublic = useAxiosPublic();
    const router = useRouter();

    const handleAddProduct = async e => {
        e.preventDefault();
        const form = e.target;

        const title = form.title.value;
        const stock = form.stock.value;
        const price = form.price.value;
        const category = form.category.value;
        const sizes = Array.from(form.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value);

        // Handle file uploads and get the image URLs
        const images = await Promise.all(
            Array.from(form.querySelectorAll('input[type="file"]')).map(input => uploadImageToImageBB(input.files[0]))
        );

        // Construct the product object with image URLs
        const product = {
            title,
            stock,
            price,
            category,
            sizes,
            img1: images[0] || '',
            img2: images[1] || '',
            img3: images[2] || '',
            img4: images[3] || ''
        };

        // console.log(product);

        if(product){
            axiosPublic.post('/products', product)
            .then(res => {
                if(res.data){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Added Successfully!",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
                // router.push('/');
            })
        }
        else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
              });
        }
    };

    const uploadImageToImageBB = async file => {
        if (!file) return ''; // If no file is provided, return an empty string

        const formData = new FormData();
        formData.append('image', file); 

        const response = await fetch(image_hosting_api, {
            method: 'POST',
            body: formData
        });

        const result = await response.json();
        return result.data.url || ''; // Return the image URL or an empty string if the upload fails
    };

    return (
        <form onSubmit={handleAddProduct} className='max-w-xl mx-auto text-[color:var(--text-primary)] bg-slate-300 p-5 space-y-2'>
            <PageTitle title={'Add Product'} />
            {/* title */}
            <input type="text" name='title' className='bg-[color:var(--bg-primary)] border w-full outline-none px-4 py-1' placeholder='Product Name' required />
            {/* stock */}
            <input type="number" name='stock' className='bg-[color:var(--bg-primary)] border w-full outline-none px-4 py-1' placeholder='Stock' required />
            {/* price */}
            <input type="number" name='price' className='bg-[color:var(--bg-primary)] border w-full outline-none px-4 py-1' placeholder='Price' required />
            {/* category */}
            <select className='bg-[color:var(--bg-primary)] border w-full outline-none px-4 py-1' name='category' defaultValue={'df'} required >
                <option value="df" disabled >Choose Category</option>
                <option value="furniture">Furniture</option>
                <option value="kitchenware">Kitchenware</option>
                <option value="home decor">Home Decor</option>
                <option value="accessories">Accessories</option>
                <option value="cloths">Cloths</option>
                <option value="glasses">Glasses</option>
            </select>
            {/* image */}
            <div className='space-y-2'>
                <h3>Upload Images</h3>
                {/* img1 */}
                <input type="file" name="img1" className='w-full bg-transparent border-2 border-slate-400 p-1' required />
                {/* img2 */}
                <input type="file" name="img2" className='w-full bg-transparent border-2 border-slate-400 p-1' />
                {/* img3 */}
                <input type="file" name="img3" className='w-full bg-transparent border-2 border-slate-400 p-1' />
                {/* img4 */}
                <input type="file" name="img4" className='w-full bg-transparent border-2 border-slate-400 p-1' />
            </div>
            {/* size */}
            <div>
                <h3>Sizes</h3>
                <div className='flex gap-2'>
                    <label htmlFor="xs">XS</label>
                    <input type="checkbox" className='bg-red-500' name="xs" value={'xs'} id='xs' />
                    <label htmlFor="s">S</label>
                    <input type="checkbox" className='bg-red-500' name="s" value={'s'} id='s' />
                    <label htmlFor="m">M</label>
                    <input type="checkbox" className='bg-red-500' name="m" value={'m'} id='m' />
                    <label htmlFor="l">L</label>
                    <input type="checkbox" className='bg-red-500' name="l" value={'l'} id='l' />
                </div>
            </div>

            <input type="submit" value="Add Product" className='bg-primary text-white w-full py-2 cursor-pointer' />
        </form>
    );
};

export default AddProductPage;
