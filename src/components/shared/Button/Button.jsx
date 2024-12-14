import React from 'react';

const Button = ({btnText}) => {
    return (
        <button className='px-2 py-[2px] text-white relative group'>
            <div className='absolute w-full h-[30%] group-hover:h-full left-0 bottom-0 bg-primary opacity-60 z-10 duration-200'></div>
            <span className='relative z-40 text-[color:var(--text-primary)] font-semibold'>{btnText}</span>
        </button>
    );
};

export default Button;