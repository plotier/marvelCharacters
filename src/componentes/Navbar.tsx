import React from 'react';
import Icon from './Icon';


const Navbar = () => {
    return (
        <nav className='w-full bg-black py-4 px-12'>
            <Icon name="logo" size={32} className="h-[52px] w-[130px]" />
        </nav>
    );
};

export default Navbar;
