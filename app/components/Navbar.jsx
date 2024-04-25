"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    function toggleMenu() {
        setShowMenu(!showMenu);
    }
    return (
        <div className="flex flex-row justify-between px-4 md:px-16 py-4">
            <Link href="/" className="flex">
                <Image
                    src="/logo-header.png"
                    alt="GreenWave Logo"
                    width={150}
                    height={36}
                />
            </Link>
            <div className="hidden md:flex items-center md:space-x-5 lg:space-x-16 md:text-base lg:text-xl text-black">
                <Link href="/" className="font-bold">Home</Link>
                <Link href="#" className="">Our Services</Link>
                <Link href="#" className="">Contact Us</Link>
                <Link href="#" className=""><IoIosSearch className="text-2xl hover:text-black" /></Link>
            </div>
            <div className="hidden md:inline-flex items-center space-x-3">
                <Link href="#" className="text-white bg-green-800 hover:bg-green-700 rounded-md px-4 py-3">Sign up</Link>
                <Link href="#" className="text-green-700 border px-4 py-3 rounded-md border-black hover:bg-green-100">Log in</Link>
            </div>
            {/* Mobile Button */}
            <div onClick={toggleMenu} className="flex md:hidden z-20 text-black items-center">
                {showMenu ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
            </div>
            {/* Mobile Menu */}
            <div className={
                showMenu ?
                    "flex flex-col md:hidden z-10 absolute top-0 left-0 right-0 bottom-0 justify-center items-center w-full h-screen bg-white text-center ease-in duration-300"
                    :
                    "flex flex-col md:hidden z-10 absolute top-0 left-[-100%] right-0 bottom-0 justify-center items-center w-full h-screen bg-white text-center ease-in duration-300"
            }>
                <ul className="text-black font-semibold">
                    <li className="p-4 text-4xl hover:text-gray-600">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="p-4 text-4xl hover:text-gray-600">
                        <Link href="#" className="">Our Services</Link>
                    </li>
                    <li className="p-4 text-4xl hover:text-gray-600">
                        <Link href="#" className="">Contact Us</Link>
                    </li>
                </ul>
                <div className="flex flex-col items-center space-y-4 mt-6">
                    <Link href="#" className="text-green-700 font-semibold border px-4 py-3 w-80 rounded-xl border-black hover:bg-green-100">Log in</Link>
                    <Link href="#" className="text-white font-semibold px-4 py-3 w-80 rounded-xl bg-green-800 hover:bg-green-700">Sign up</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;