import React from "react";
import Link from "next/link";
import { MdHome } from "react-icons/md";
import { LuUsers2 } from "react-icons/lu";
import { PiChalkboardTeacherLight } from "react-icons/pi";
import { TbBooks } from "react-icons/tb";
import { PiRocketLaunchDuotone } from "react-icons/pi";

export default function MainSideBar() {
  return (
    <div className="w-20 h-[80vh] bg-white border-r border-gray-300 flex flex-col items-center py-4 my-12 rounded-r-lg">
      {/* Collapse Button */}
      {/*<button className="mb-8">
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 9l6 6 6-6"
          ></path>
        </svg>
  </button>*/}
      {/* Home */}
      <Link href="/">
        <div className="mb-8 flex flex-col items-center">
          <MdHome />

          <span className="text-xs text-gray-700">Home</span>
        </div>
      </Link>
      {/* Community */}
      <Link href="/meeting-board">
        <div className="relative mb-8 flex flex-col items-center">
          <LuUsers2 />

          <span className="text-xs text-gray-700">Community</span>

          {/*<span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-green-500 text-white text-xs px-1 rounded-full">
          20+
  </span>*/}
        </div>{" "}
      </Link>
      {/* Coaching */}
      <Link href="#">
        <div className="mb-8 flex flex-col items-center">
          <PiChalkboardTeacherLight />
          <span className="text-xs text-gray-700">Coaching</span>{" "}
        </div>
      </Link>
      {/* Resources */}
      <Link href="/case-interview-basics">
        <div className="relative mb-8 flex flex-col items-center">
          <TbBooks />

          <span className="text-xs text-gray-700">Resources</span>

          {/*<span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-green-500 text-white text-xs px-1 rounded-full">
          New
  </span>*/}
        </div>{" "}
      </Link>
      {/* Career */}{" "}
      <Link href="#">
        <div className="flex flex-col items-center">
          <PiRocketLaunchDuotone />

          <span className="text-xs text-gray-700">Career</span>
        </div>{" "}
      </Link>
    </div>
  );
}
