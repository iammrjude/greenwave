"use client";
import Image from "next/image";
import Link from "next/link";

function Footer() {
    return (
        <div className="bg-[#08321B]">
            <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 px-4 py-8 max-w-6xl mx-auto justify-between mt-8 mb-4 text-white">
                <div className="flex flex-col w-64">
                    <Link href="/">
                        <Image
                            src="/logo-footer.png"
                            alt="GreenWave Logo"
                            width={150}
                            height={36}
                        />
                    </Link>
                    <p className="mt-4">The ideal waste management solution for businesses and private individuals</p>
                    <Link href="#" className="bg-[#056B34] border-white border-2 w-48 h-12 mt-8 font-semibold text-2xl flex justify-center items-center text-center">Sign Up</Link>
                </div>
                <div className="px-4 flex flex-row space-x-40 sm:space-x-60">
                    <div className="flex flex-col text-left space-y-2 text-sm">
                        <p className="font-bold">Pages</p>
                        <Link href="#" className="mt-5">About Us</Link>
                        <Link href="#" className="">Our Services</Link>
                        <Link href="#" className="">Contact Us</Link>
                    </div>
                    <div className="flex flex-col text-left space-y-2 text-sm">
                        <p className="font-bold">Company</p>
                        <Link href="#" className="mt-5">About Us</Link>
                        <Link href="#" className="">Our Services</Link>
                        <Link href="#" className="">Contact Us</Link>
                    </div>
                </div>
                <div className="px-4 flex flex-col text-left space-y-2 text-sm">
                    <p className="font-bold">Contact</p>
                    <p className=" mt-5">Blockchain Uniport Team</p>
                    <p className="">University of Port Harcourt,</p>
                    <p className="">Choba, Rivers State,</p>
                    <p className="">Nigeria</p>
                    <p className="">Phone: <Link href="tel:+2348063009000">+234 806 300 9000</Link></p>
                    <Link href="mailto:blockchainuniport@gmail.com" className="">blockchainuniport@gmail.com</Link>
                </div>
            </div>
            <p className="px-4 max-w-6xl mx-auto mb-8 pb-8 text-center text-white">&copy;Greenwave2024 | All rights reserved</p>
        </div>
    );
}

export default Footer;