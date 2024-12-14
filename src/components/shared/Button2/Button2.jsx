import React from 'react';

const Button2 = ({ btnText }) => {
    return (
        <button className='bg-secondary text-white px-8 py-3 font-semibold hover:bg-primary duration-200'>
            {btnText}
        </button>
    );
};

export default Button2;