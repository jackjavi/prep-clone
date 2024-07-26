import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="border-2 h-[8vh] mt-[2.5vh] rounded-lg border-slate-800 flex justify-between items-center ">
      <h1 className="text-2xl text-slate-800 pl-20">prep CLONE</h1>
      <div className="flex pr-20 gap-8">
        <Link href="/login">
          <button className="py-4 px-8 border-2 border-slate-800 rounded-full">
            Login
          </button>
        </Link>
        <Link href="/register">
          <button className="bg-[#1e3e5b] text-white font-semibold px-8 py-4 rounded-full">
            Sign up for free
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
