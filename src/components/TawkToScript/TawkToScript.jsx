'use client';

import Script from 'next/script';

const TawkToScript = () => (
    <Script
        src="https://embed.tawk.to/6756fd5caf5bfec1dbd96f19/1ielsrdbl"
        strategy="lazyOnload"
        onLoad={() => console.log('Tawk.to script loaded successfully.')}
    />
);

export default TawkToScript;
