import React from 'react';
import Categories from '@/components/pages/Home/Categories/Categories';
import Hero from '@/components/pages/Home/Hero/Hero';
import NewsLetter from '@/components/pages/Home/NewsLetter/NewsLetter';
import Products from '@/components/pages/Home/Products/Products';
import Banner from '@/components/pages/Home/Banner/Banner';
import TawkToScript from '@/components/TawkToScript/TawkToScript';

const Homepage = () => {
    return (
        <main>
            <section aria-label="Banner">
                <Banner />
            </section>
            <section aria-label="Categories">
                <Categories />
            </section>
            <section aria-label="Products">
                <Products />
            </section>
            <section aria-label="Hero">
                <Hero />
            </section>
            <section aria-label="Newsletter">
                <NewsLetter />
            </section>

            {/* Tawk.to Live Chat Script */}
            <TawkToScript />
        </main>
    );
};

export default Homepage;
