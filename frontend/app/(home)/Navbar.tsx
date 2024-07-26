import React from "react";
import Link from "next/link";
import { GrMenu } from "react-icons/gr";

const Navbar = () => {
  return (
    <div className="border-2 h-[8vh] mt-[2.5vh] rounded-lg border-slate-800 flex justify-between items-center ">
      <Link href="/">
        <h1 className="text-2xl text-slate-800 pl-2 md:pl-20 ">prep CLONE</h1>
      </Link>
      <div className="flex md:pr-20 gap-8">
        <Link href="/login">
          <button className="hidden md:block py-4 px-8 border-2 border-slate-800 rounded-full">
            Login
          </button>
        </Link>
        <Link href="/register">
          <button className="md:bg-[#1e3e5b] md:text-white text-slate-800 font-semibold px-4 md:px-8 py-2 md:py-4 text-md md:text-lg rounded-full border-2">
            Sign up for free
          </button>
        </Link>
      </div>
      <div className="md:hidden pr-4">
        <GrMenu size={24} />
      </div>
    </div>
  );
};

export default Navbar;
