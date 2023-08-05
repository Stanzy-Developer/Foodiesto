import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="">
      {/* Header section */}
      <nav className="px-[161px] py-[44px]  flex items-center">
        <Link to="/">
          <img
            src="../assets/logo.png"
            alt=""
            width={"105px"}
            height="55px"
            loading="lazy"
            className="mr-[240px]"
          />
        </Link>
        <ul className="flex gap-[30px] mr-[86px]">
          <li className="text-[#2C2C2C] relative  py-[4px] hover:font-bold before:contents-[''] before:absolute before:bottom-0 before:left-0 before:rounded-md before:w-0 before:h-[2px] before:bg-[#DC810B] hover:before:w-full hover:before:transition-all hover:before:duration-1000 hover:before:ease-in-out">
            <a href="#about">About</a>
          </li>
          <li className="text-[#2C2C2C] relative  py-[4px] hover:font-bold before:contents-[''] before:absolute before:bottom-0 before:left-0 before:rounded-md before:w-0 before:h-[2px] before:bg-[#DC810B] hover:before:w-full hover:before:transition-all hover:before:duration-1000 hover:before:ease-in-out">
            <a href="#feature">Features</a>
          </li>
          <li className="text-[#2C2C2C] relative  py-[4px] hover:font-bold before:contents-[''] before:absolute before:bottom-0 before:left-0 before:rounded-md before:w-0 before:h-[2px] before:bg-[#DC810B] hover:before:w-full hover:before:transition-all hover:before:duration-1000 hover:before:ease-in-out">
            <a href="#pricing">Pricing</a>
          </li>
          <li className="text-[#2C2C2C] relative  py-[4px] hover:font-bold before:contents-[''] before:absolute before:bottom-0 before:left-0 before:rounded-md before:w-0 before:h-[2px] before:bg-[#DC810B] hover:before:w-full hover:before:transition-all hover:before:duration-1000 hover:before:ease-in-out">
            <a href="#faq">FAQ</a>
          </li>
          <li className="text-[#2C2C2C] relative  py-[4px] hover:font-bold before:contents-[''] before:absolute before:bottom-0 before:left-0 before:rounded-md before:w-0 before:h-[2px] before:bg-[#DC810B] hover:before:w-full hover:before:transition-all hover:before:duration-1000 hover:before:ease-in-out">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="mr-[32px] flex gap-[10px] items-center">
          <img src="../assets/Profile.svg" alt="" className="cursor-pointer" />
          <p className=" border-[#DC810B] border-b-[2px]  p-[2px] cursor-pointer text-[#655D5D]">
            Sign In
          </p>
        </div>
        <button className="px-[15px] py-[10px] border border-gray-500 rounded-full text-[#525252]">
          Get Started
        </button>
      </nav>
    </div>
  );
}
