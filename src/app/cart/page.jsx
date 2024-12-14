'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { RiArrowRightSLine } from "react-icons/ri";
import { FiPlus, FiMinus } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import Swal from 'sweetalert2';
import { MdEditDocument } from "react-icons/md";
import { useRouter } from 'next/navigation';
import PageTitle from '@/components/shared/PageTitle/PageTitle';
import { useCart } from '@/Provider/CartProvider/CartProvider';
import TawkToScript from '@/components/TawkToScript/TawkToScript';


const CartPage = () => {

    const [cart, setCart] = useCart();
    const [mounted, setMounted] = useState(false);
    const router = useRouter();

    console.log(cart);


    useEffect(() => {
        setMounted(true)
    }, []);

    const itemsTotalPrice = cart?.reduce((total, product) => total + product?.price * product?.quantity, 0);


    const handleIncreaseQantity = (productId) => {
        setCart((prevCart) =>
            prevCart.map(product =>
                product._id === productId ? { ...product, quantity: product.quantity + 1 } : product
            )
        );
    };

    const handleDecreaseQantity = (productId) => {
        setCart((prevCart) =>
            prevCart.map(product =>
                product._id === productId ? { ...product, quantity: product.quantity - 1 } : product
            )
        );
    };

    const handleRemoveCart = (productId) => {
        const updatedCart = cart?.filter(product => product?._id !== productId);
        setCart(updatedCart);
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Item Removed!",
            showConfirmButton: false,
            timer: 1500
        });
    };


    // checkout
    const handleCheckout = e => {
        e.preventDefault();
        setCart([]);
        Swal.fire({
            position: "top-end",
            icon: 'success',
            title: "Order Pleaced Successfully!",
            showConfirmButton: false,
            timer: 1500
        });
        router.push('/')
    }



    return (
        <div className='py-5'>
            <PageTitle title={'Cart'} />
            <p className="flex items-center gap-3"><Link href={'/'} className="opacity-75">Home</Link> <RiArrowRightSLine />Cart</p>

            <h1 className='text-xl md:text-2xl font-semibold border-b-2 border-b-slate-200 pt-6 pb-4'>Shopping Cart</h1>

            {
                mounted ?
                    <div className='py-6 flex flex-col md:flex-row gap-8 md:gap-14'>

                        {/* cart items */}
                        <div className='w-full md:w-8/12'>
                            <div>
                                {
                                    cart?.length == 0 ?
                                        <div className='text-center font-semibold py-5'>No Items Added</div>
                                        :
                                        <div>
                                            {
                                                cart?.map(product =>
                                                    <div key={product?._id} className='grid grid-cols-4 items-center gap-2 pt-6'>
                                                        <Link href={`/products/${product?._id}`}>
                                                            <Image src={product?.img1} width={100} height={100} alt={product?.title} />
                                                        </Link>
                                                        <div className='font-semibold'>
                                                            <Link href={`/products/${product?._id}`}>
                                                                {product?.title}
                                                            </Link>
                                                            <p>${product?.price} <span className='font-normal text-xs'>x{product?.quantity}</span> </p>
                                                            <p className='text-xs md:text-sm'>Subtotal: ${product?.price * product?.quantity}</p>
                                                        </div>
                                                        <div className='flex justify-center items-center'>
                                                            <button onClick={() => handleDecreaseQantity(product?._id)} className='bg-slate-200 text-base md:text-2xl p-1 md:p-3' disabled={product?.quantity == 1}><FiMinus /></button>
                                                            <span className='px-4 py-[2px] md:py-[10px] border-y-2 border-y-slate-200'>{product?.quantity}</span>
                                                            <button onClick={() => handleIncreaseQantity(product?._id)} className='bg-slate-200 text-base md:text-2xl p-1 md:p-3'><FiPlus /></button>
                                                        </div>
                                                        <button onClick={() => handleRemoveCart(product?._id)} className='text-red-600 text-3xl flex justify-center'><AiFillDelete /></button>
                                                    </div>
                                                )
                                            }
                                        </div>
                                }
                            </div>
                        </div>

                        {/* checkout */}
                        <div className='w-full md:w-4/12'>
                            <div className='flex justify-between items-center gap-3'>
                                <p className='opacity-75'>{cart?.length} Items</p>
                                <p className='font-semibold'>${itemsTotalPrice}</p>
                            </div>
                            <div className='flex justify-between items-center gap-3'>
                                <p className='opacity-75'>Shipping</p>
                                <p className='font-semibold'>$10</p>
                            </div>
                            <div className='flex justify-between items-center gap-3 border-b-2 border-b-slate-200 py-3'>
                                <p className='opacity-75'>Total (Tax Exclu.)</p>
                                <p className='font-semibold'>${itemsTotalPrice + 10}</p>
                            </div>
                            <div className='flex justify-between items-center gap-3 pt-3 font-semibold'>
                                <p className='opacity-75'>Total(Tax Inclu.)</p>
                                <p>${itemsTotalPrice + 10}</p>
                            </div>
                            <p className='font-semibold py-3'><span className='opacity-75 mr-2'>Taxes:</span>$0</p>
                            {/* modal */}
                            <button className='bg-secondary text-white w-full py-2 block my-5 font-semibold hover:bg-primary duration-200' onClick={() => document.getElementById('my_modal_2').showModal()} disabled={cart?.length == 0}>Proceed To Checkout</button>
                            <dialog id="my_modal_2" className="modal">
                                <div className="modal-box bg-white" >
                                    <h2 className='font-semibold pb-4 flex items-end gap-2'><MdEditDocument className='text-3xl' />Please fill the form...</h2>
                                    <form className='space-y-3 px-5' onSubmit={handleCheckout}>
                                        <input type="text" className='w-full bg-white text-secondary px-3 py-1 outline-none border-2 border-slate-300' placeholder='Your name...' required />
                                        <input type="email" className='w-full bg-white text-secondary px-3 py-1 outline-none border-2 border-slate-300' placeholder='Your e-mail...' required />
                                        <input type="text" className='w-full bg-white text-secondary px-3 py-1 outline-none border-2 border-slate-300' placeholder='Your address...' required />
                                        <input type="number" className='w-full bg-white text-secondary px-3 py-1 outline-none border-2 border-slate-300' placeholder='Your Phone...' required />
                                        <input type="submit" className='w-full py-1 bg-secondary hover:bg-primary duration-200 text-white font-semibold cursor-pointer' value="Checkout" disabled={cart?.length == 0} />
                                    </form>
                                </div>
                                <form method="dialog" className="modal-backdrop">
                                    <button>close</button>
                                </form>
                            </dialog>

                        </div>

                    </div>
                    :
                    <></>
            }

            <TawkToScript />

        </div>
    );
};

export default CartPage;