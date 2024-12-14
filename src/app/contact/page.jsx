'use client';

import { IoLocationSharp } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";
import Link from "next/link";
import PageTitle from "@/components/shared/PageTitle/PageTitle";
import Swal from "sweetalert2";
import { useRef } from "react";
import TawkToScript from "@/components/TawkToScript/TawkToScript";


const ContactPaage = () => {

    const formRef = useRef(null);

    const handleSendMessage = e => {
        e.preventDefault();

        Swal.fire({
            position: "top-end",
            icon: "success",
            text: 'Message Sent',
            showConfirmButton: false,
            timer: 1500
          });
          
          formRef.current.reset();
    }

    return (
        <section className="pt-8 pb-32">
            <PageTitle title={'Contact Us'} />
            <h1 className="text-3xl font-semibold mb-2">Contact Us</h1>
            <p className="flex items-center gap-3"><Link href={'/'} className="opacity-75">Home</Link> <RiArrowRightSLine /> Contact Us</p>

            <div className="flex flex-col md:flex-row md:items-center gap-5 bg-slate-200 py-6 px-20 mt-8">
                {/* infos */}
                <div className="md:w-1/2 space-y-3">
                    <div className="flex gap-3">
                        <IoLocationSharp className="text-lg mt-1" />
                        <address className="not-italic">Bus Stand Mor, Dinajpur, <br /> Bangladesh</address>
                    </div>
                    <div className="flex items-center gap-3">
                        <IoMdCall className="text-lg" />
                        <a href="tel:+8801723622125" className="hover:underline">+8801723622125</a>
                    </div>
                    <div className="flex items-center gap-3">
                        <MdEmail className="text-lg" />
                        <p>bazar-zone@info.com</p>
                    </div>
                </div>

                {/* contact form **/}
                <div className="md:w-1/2 space-y-3">
                    <h2 className="text-lg font-semibold text-center">We&apos;d like to hear from you</h2>
                    <form ref={formRef} onSubmit={handleSendMessage} className="text-[color:var(--text-primary)] space-y-3">
                        {/* name */}
                        <div className="flex items-center gap-2">
                            <label htmlFor="name" className="w-16">Name</label>
                            <input type="text" className="flex grow px-3 py-1 bg-transparent border border-slate-400 outline-none" placeholder="Your Name..." id="name" required />
                        </div>
                        {/* email */}
                        <div className="flex items-center gap-2">
                            <label htmlFor="email" className="w-16">Email</label>
                            <input type="email" className="flex grow px-3 py-1 bg-transparent border border-slate-400 outline-none" placeholder="Your Email..." id="email" required />
                        </div>
                        {/* email */}
                        <div className="flex gap-2">
                            <label htmlFor="message" className="w-16">Message</label>
                            <textarea name="message" className="flex grow px-3 py-1 bg-transparent border border-slate-400 outline-none resize-none" placeholder="Your Message..." id="message" required></textarea>
                        </div>
                        <div className="flex items-center gap-2 ml-[72px]">
                            <input type="submit" value="Send" className="bg-[color:var(--text-primary)] px-5 py-1 text-white cursor-pointer" />
                            <p className="text-xs">• I agree that my data will be stored.</p>
                        </div>
                    </form>
                </div>
            </div>

            <TawkToScript />
        </section>
    );
};

export default ContactPaage;