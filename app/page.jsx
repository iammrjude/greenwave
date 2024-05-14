"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AiFillApple as AppleIcon } from "react-icons/ai";
import { IoLogoGooglePlaystore as PlaystoreIcon } from "react-icons/io5";

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  function toggleMenu() {
    setShowMenu(!showMenu);
  }
  return (
    <main className="mx-auto">
      <Navbar />

      {/* Body */}
      <div>
        <div className="flex flex-col items-start bg-revolutionizing bg-cover mt-2 p-6 md:p-16">
          <p className="text-white font-semibold text-xl md:text-2xl lg:text-5xl mt-40 md:mt-48 lg:mt-48">Revolutionizing Waste Management: Building a Greener</p>
          <p className="text-white font-semibold text-xl md:text-2xl lg:text-5xl mt-2">Future Together with GREENWAVE</p>
          <p className="text-gray-400 text-sm md:text-base lg:text-2xl mt-5">Download App on Google Playstore or Apple Appstore</p>
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-4 md:space-y-0 mt-8 mb-24 md:mb-36 lg:mb-72">
            <Link href="#" className="bg-[#056B34] h-8 w-44 md:w-[300px] md:h-[50px] lg:w-[407px] lg:h-[70px] rounded-md text-white flex justify-center items-center text-xs md:text-base lg:text-xl font-semibold">
              Download on Appstore
              <AppleIcon className="text-2xl md:text-3xl ml-0 md:ml-3" />
            </Link>
            <Link href="#" className="bg-[#056B34] h-8 w-44 md:w-[300px] md:h-[50px] lg:w-[407px] lg:h-[70px] rounded-md text-white flex justify-center items-center text-xs md:text-base lg:text-xl font-semibold">
              Download on Playstore
              <PlaystoreIcon className="text-lg md:text-2xl ml-0 md:ml-3" />
            </Link>
          </div>
        </div>
        <div className="my-10 px-10 md:px-20 lg:px-40 text-sm md:text-base lg:text-[25px] text-black text-justify">
          At Greenwave, we offer educational modules on proper waste sorting, connect
          users with recycling programs and composting initiatives, and allow real-time
          waste collection tracking and reporting. Greenwave promotes responsible
          waste disposal practices, improves waste collection efficiency, and fosters a
          cleaner and healthier Port Harcourt.
        </div>
        <div className="flex flex-col bg-welcome bg-cover text-black pt-12 pb-16 md:pt-24 md:pb-36">
          <div className="mx-12 md:mx-24 lg:mx-48 bg-white rounded-md py-6 px-5 md:py-12 md:px-5 lg:py-24 lg:px-10 items-start">
            <p className="font-semibold text-base md:text-xl lg:text-3xl">Welcome to Greenwave</p>
            <p className="mt-2 md:mt-4 lg:mt-8 text-sm md:text-lg lg:text-2xl text-justify">
              Maintaining a clean environment is not just a responsibility but a necessity
              for the well-being of our planet and future generations. The environment
              sustains life in all its forms, providing us with resources, clean air, and water.
              However, with increasing urbanization, industrialization, and
              human activities, our environment is facing unprecedented challenges. It&apos;s
              imperative that we at Greenwave adopt proactive measures to preserve and
              protect our surroundings.
            </p>
          </div>
        </div>
        <div className="mx-16 my-20 text-black text-justify justify-normal text-base md:text-xl lg:text-[27px]">
          Greenwave is designed to empower residents and revolutionize waste management in the
          city. We constantly strive to find new ways of tackling each of these waste streams and
          new areas of need that would benefit from Greenwave&apos;s support.
        </div>
        <div className="flex flex-col items-center mt-4 mb-20">
          <p className="text-black font-bold text-xl md:text-2xl lg:text-3xl">Our Services</p>
          {/* <img src="/our_services.png" alt="our services" className="mt-6 w-[1248px] h-[342px]" /> */}
          <Image
            className="mt-6"
            src="/our_services.png"
            alt="our services"
            width={1248}
            height={341}
          />
        </div>
        <div className="hidden flex-row bg-request-service bg-cover px-6 md:px-12 lg:px-24 space-x-5">
          <div className="flex flex-col mt-10 md:mt-20 lg:mt-40">
            <p className="text-white font-semibold text-base md:text-2xl lg:text-5xl w-[640px]">Become a client and receive exclusive service offerings.</p>
            <button className="bg-black text-white rounded-md h-8 w-32 md:w-64 md:h-16 text-sm md:text-xl font-medium mt-4 mb-4">Request Service</button>
          </div>
          <div className="flex flex-col items-center">
            <Image
              className="mt-6"
              src="/save_the_earth.png"
              alt="save the earth"
              width={590}
              height={521}
            />
          </div>
        </div>
        <div className="flex flex-col items-center my-16">
          <Image
            src="/save_our_planet.png"
            alt="save our planet"
            width={1200}
            height={554}
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}
