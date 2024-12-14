'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { CiSearch, CiUser, CiShoppingCart } from "react-icons/ci";
import { HiOutlineXMark } from "react-icons/hi2";
import { TypeAnimation } from "react-type-animation";
import { IoMdAddCircleOutline } from "react-icons/io";
import Image from "next/image";
import logo from '../../../../public/images/logo.png';
import { useCart } from "@/Provider/CartProvider/CartProvider";

const Navbar = () => {

    const [cart, setCart] = useCart();
    const [searchBtnClicked, setSearchBtnClicked] = useState(false);
    const [isTypeAnimationVisible, setIsTypeAnimationVisible] = useState(true);
    const [mounted, setMounted] = useState(false);
    const [searchedProducts, setSearchedProducts] = useState([]);

    useEffect(() => {
        setMounted(true);
        setCart(cart)
    }, [cart, setCart]);



    const handleSeachText = e => {
        const searchText = e.target.value;

        if (searchText.length > 0) {
            fetch(`https://bazar-zone-server.vercel.app/products/search/${searchText}`)
                .then(res => res.json())
                .then(data => setSearchedProducts(data))
        }
        else{
            setSearchedProducts([])
        }


        if (searchText.length > 0) {
            setIsTypeAnimationVisible(false)
        }
        else {
            setIsTypeAnimationVisible(true)
        }
    };

    // submit search
    const handleSearch = e => {
        e.preventDefault();

        const searchText = e.target.text.value;

    };

    const handleSearchResultClicked = () => {
        setSearchBtnClicked(false);
        setSearchedProducts([]);
    }

    return (
        <header className="bg-[color:var(--bg-primary)] pb-3 md:pb-0 shadow-md mb-4">
            <nav className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <nav className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="nav-items menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-200 rounded-box w-52">
                            <li>
                                <Link href={'/'}>Home</Link>
                            </li>
                            <li>
                                <Link href={'/products'}>Products</Link>
                            </li>
                            <li>
                                <Link href={'/about-us'}>About Us</Link>
                            </li>
                            <li>
                                <Link href={'/contact'}>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <Link href={'/'}>
                        <Image src={logo} className="max-w-32" alt="Bazar-Zone Logo"></Image>
                    </Link>
                </div>
                <nav className="navbar-center hidden lg:flex">
                    <ul className="nav-items menu menu-horizontal px-1">
                        <li>
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link href={'/products'}>Products</Link>
                        </li>
                        <li>
                            <Link href={'/about-us'}>About Us</Link>
                        </li>
                        <li>
                            <Link href={'/contact'}>Contact</Link>
                        </li>
                    </ul>
                </nav>
                <div className="navbar-end flex items-center gap-4 pr-3">
                    <div className="relative">
                        <button className="text-[28px] mt-2 hover:text-primary duration-150" onClick={() => setSearchBtnClicked(!searchBtnClicked)}>
                            {
                                searchBtnClicked ? <HiOutlineXMark /> : <CiSearch />
                            }
                        </button>
                        <form onSubmit={handleSearch} className={`search-form w-60 z-50 flex absolute right-1/4 duration-200 ${searchBtnClicked ? '-bottom-[90%] opacity-100' : '-bottom-[130%] opacity-0 pointer-events-none'}`}>
                            <input onChange={(e) => handleSeachText(e)} type="text" name="text" className="w-[80%] bg-[color:var(--bg-primary)] shadow-md border border-slate-100 px-3 py-1 rounded-l-sm outline-none" />

                            <div className={`${isTypeAnimationVisible ? '' : 'hidden'} absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none text-base`}>
                                <TypeAnimation
                                    sequence={[
                                        '',
                                        1000,
                                        'Search Products...',
                                        1000,
                                    ]}
                                    wrapper="span"
                                    speed={60}
                                    cursor={true}
                                    repeat={Infinity}
                                />
                            </div>

                            <button className="w-[20%]" type="submit">
                                <CiSearch className="text-xl p-2 w-full bg-secondary hover:bg-primary text-white h-10 duration-150  rounded-r-sm" />
                            </button>
                        </form>
                        <div className={`bg-white w-60 absolute -left-56 top-24 z-50 shadow-md p-3 ${searchedProducts.length == 0 ? 'hidden' : ''}`}>
                            {
                                searchedProducts?.map(product =>
                                    <Link href={`/products/${product?._id}`} key={product?._id} onClick={handleSearchResultClicked} className="flex items-center gap-2 pb-3">
                                        <Image src={product?.img1} width={30} height={30} className="object-cover" alt={product?.title} />
                                        <p>{product?.title}</p>
                                    </Link>
                                )
                            }
                        </div>
                    </div>

                    {/* cart */}
                    <Link href={'/cart'} className="inline-block relative">
                        <CiShoppingCart className="text-2xl" />
                        <span className="w-4 h-4 bg-primary text-white absolute -top-2 -right-2 text-[10px] text-center rounded-full">{mounted ? cart?.length : 0}</span>
                    </Link>

                    {/* user */}
                    <button>
                        <CiUser className="text-2xl hidden" />
                    </button>

                    {/* add product btn */}
                    <Link href={'/add-product'} className="text-2xl hidden"><IoMdAddCircleOutline /></Link>
                </div>

            </nav>
        </header>
    );
};

export default Navbar;



