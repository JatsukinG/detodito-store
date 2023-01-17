// @ts-nocheck
import {FaFacebookF, FaTwitter, FaInstagram, FaSearch, FaShoppingCart} from 'react-icons/fa'
import {CgMenuGridR} from 'react-icons/cg'
import {BiChevronDown} from 'react-icons/bi'
import React from 'react';

const Header = () => {

    return (
        <div>
            <div className="flex justify-between px-20 py-10">
                <div className="flex items-center">
                    <span className="cursor-pointer p-4 hover:bg-blue-800 hover:text-white rounded-3xl">
                        <FaFacebookF size={18}/>
                    </span>
                        <span className="cursor-pointer p-4 hover:bg-blue-500 hover:text-white rounded-3xl">
                        <FaTwitter size={18}/>
                    </span>
                        <span className="cursor-pointer p-4 rounded-3xl hover:text-white hover:bg-gradient1">
                        <FaInstagram size={18}/>
                    </span>
                </div>
                <div className="flex justify-center text-3xl cursor-pointer">
                    <p>
                        <b>Deto</b>Dito.
                    </p>
                </div>
                <div className="flex justify-end">
                <span className="cursor-pointer p-4 hover:text-red-600">
                    <FaSearch size={18}/>
                </span>
                    <span className="cursor-pointer p-4 hover:text-red-600">
                    <FaShoppingCart size={18}/>
                </span>
                    <span className="cursor-pointer p-4 hover:text-red-600">
                    <CgMenuGridR size={18}/>
                </span>
                </div>
            </div>
            <div className="flex justify-center items-center mt-6 text-sm">
                <p className="hover:text-red-600 cursor-pointer">
                    HOME
                </p>
                <p className="flex px-10 hover:text-red-600 cursor-pointer">
                    WOMEN<BiChevronDown/>
                </p>
                <p className="flex hover:text-red-600 cursor-pointer">
                    CLOTHES<BiChevronDown/>
                </p>
                <p className="flex px-10 hover:text-red-600 cursor-pointer">
                    PAGES<BiChevronDown/>
                </p>
                <p className="hover:text-red-600 cursor-pointer">
                    CONTACT
                </p>
            </div>
        </div>
    );
};

export default Header;