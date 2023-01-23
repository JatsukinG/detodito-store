import React from 'react';
import {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";

const Footer = () => {

    return (
        <div className="bg-black px-4">
            <div className="flex">
                <div className="w-2/3 p-8">
                    <h1 className="text-white text-xl py-8">
                        About Us
                    </h1>
                    <div className="text-sm text-gray-300/50">
                        <p className="py-2">
                            We take our mission of increasing our global access to quality education seriously.
                        </p>
                        <p className="text-white py-2">
                            Read more
                        </p>
                        <p className="text-white py-6 text-xl">
                            Social Network
                        </p>
                    </div>
                    <div className="flex">
                    <span className="cursor-pointer p-4 hover:bg-blue-800 text-white rounded-3xl">
                        <FaFacebookF size={18}/>
                    </span>
                        <span className="cursor-pointer p-4 hover:bg-blue-500 text-white rounded-3xl">
                        <FaTwitter size={18}/>
                    </span>
                        <span className="cursor-pointer p-4 rounded-3xl text-white hover:bg-gradient1">
                        <FaInstagram size={18}/>
                    </span>
                    </div>
                </div>
                <div className="w-1/3 p-8">
                    <h1 className="text-white text-xl py-8">
                        Information
                    </h1>
                    <div className="text-sm text-gray-300/50">
                        <p className="py-2">
                            About Us
                        </p>
                        <p className="py-2">
                            Delivery Information
                        </p>
                        <p className="py-2">
                            Privacy Policy
                        </p>
                        <p className="py-2">
                            Terms & Condition
                        </p>
                        <p className="py-2">
                            FAQ
                        </p>
                        <p className="py-2">
                            Contact Us
                        </p>
                        <p className="py-2">
                            Products
                        </p>
                    </div>
                </div>
                <div className="w-1/3 p-8">
                    <h1 className="text-white text-xl py-8">
                        Account Info
                    </h1>
                    <div className="text-sm text-gray-300/50">
                        <p className="py-2">
                            Login & Register
                        </p>
                        <p className="py-2">
                            Order History
                        </p>
                        <p className="py-2">
                            Shipping Info
                        </p>
                        <p className="py-2">
                            Refund Policy
                        </p>
                        <p className="py-2">
                            Responsive Website
                        </p>
                        <p className="py-2">
                            Subscription
                        </p>
                    </div>
                </div>
                <div className="p-8">
                    <h1 className="text-white text-xl py-8">
                        Our Portfolio
                    </h1>
                    <div className="text-sm text-gray-300/50 flex flex-wrap gap-4">
                        <button className="py-2 px-4 border border-gray-300 hover:bg-white hover:text-black">
                            T-shirt
                        </button>
                        <button className="py-2 px-4 border border-gray-300 hover:bg-white hover:text-black">
                            Casual
                        </button>
                        <button className="py-2 px-4 border border-gray-300 hover:bg-white hover:text-black">
                            Shorts
                        </button>
                        <button className="py-2 px-4 border border-gray-300 hover:bg-white hover:text-black">
                            Formal
                        </button>
                        <button className="py-2 px-4 border border-gray-300 hover:bg-white hover:text-black">
                            Formal-Shirt
                        </button>
                        <button className="py-2 px-4 border border-gray-300 hover:bg-white hover:text-black">
                            Shopping
                        </button>
                        <button className="py-2 px-4 border border-gray-300 hover:bg-white hover:text-black">
                            Shirts
                        </button>
                    </div>
                </div>
            </div>
            <div className="text-gray-300/50 text-center">
                <hr className="w-full border-dashed"></hr>
                <p className="py-12 text-xl">
                    © 2023 DetoDito. Made With Love by PoporoDevs.
                </p>
            </div>
        </div>
    );
};

export default Footer;