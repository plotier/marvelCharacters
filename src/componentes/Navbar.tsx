import React from 'react';
import Icon from './Icon';
import { useStateContext } from "../context/MarvelContext";
import FavCount from './FavCount';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const { state } = useStateContext();
    const navigate = useNavigate();

    const handleNavigation = (path:string) => {
        navigate(path);
    };

    return (
        <div className="relative">
            <nav className="w-full bg-black py-4 pl-4 sm:pl-10 sm:pr-5 flex items-center justify-between">
                <div onClick={() => handleNavigation('/')} className="cursor-pointer">
                    <Icon name="logo" className="h-[52px] w-[130px]" />
                </div>
                <div onClick={() => handleNavigation('/favorites')} className="cursor-pointer">
                    <FavCount />
                </div>
            </nav>
            {state.loading && (
                <div className="absolute top-full left-0 w-full bg-marvel-red h-[5.38px] shadow-custom-shadow animate-load"></div>
            )}
        </div>
    );
};

export default Navbar;
