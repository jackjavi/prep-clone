import React, { useState } from "react";
import Link from "next/link";

const ModalLinks = ({ toggleModal, handleLogout, isAuthenticated }) => {
  const [isCommunityOpen, setIsCommunityOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false); // State to manage the Resources tab

  const toggleCommunity = () => {
    setIsCommunityOpen(!isCommunityOpen);
  };

  const toggleResources = () => {
    setIsResourcesOpen(!isResourcesOpen); // Toggle the Resources tab
  };

  return (
    <div className="z-10">
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg w-[90vw] md:w-[65vw] h-[50vh">
          <button onClick={toggleModal} className="float-right text-lg">
            ✖
          </button>
          <div className="flex flex-col gap-4 mt-4">
            <Link href="/">
              <span className="text-blue-600">Home</span>
            </Link>
            <div>
              <span
                className="text-slate-800 font-semibold cursor-pointer"
                onClick={toggleCommunity}
              >
                Community
              </span>
              {isCommunityOpen && (
                <div className="ml-4 flex flex-col gap-2 mt-2">
                  <Link href="/meeting-board">
                    <span className="text-blue-600">Meeting Board</span>
                  </Link>
                  <Link href="#">
                    <span className="text-blue-600">Consulting Q&A</span>
                  </Link>
                  <Link href="#">
                    <span className="text-blue-600">Case Partner</span>
                  </Link>
                  <Link href="#">
                    <span className="text-blue-600">Premium Membership</span>
                  </Link>
                </div>
              )}
            </div>
            <Link href="#">
              <span className="text-blue-600">Coaching</span>
            </Link>
            <div>
              <span
                className="text-slate-800 font-semibold cursor-pointer"
                onClick={toggleResources}
              >
                Resources
              </span>
              {isResourcesOpen && (
                <div className="ml-4 flex flex-col gap-2 mt-2">
                  <Link href="/case-interview-basics">
                    <span className="text-blue-600">Case Interview Basics</span>
                  </Link>
                  <Link href="#">
                    <span className="text-blue-600">Case Library</span>
                  </Link>
                  <Link href="#">
                    <span className="text-blue-600">AI Casebot</span>
                  </Link>
                  <Link href="#">
                    <span className="text-blue-600">Tests & Guides</span>
                  </Link>
                  <Link href="#">
                    <span className="text-blue-600">Mental Math Tool</span>
                  </Link>
                  <Link href="#">
                    <span className="text-blue-600">Stress Questions</span>
                  </Link>
                  <Link href="#">
                    <span className="text-blue-600">Drills</span>
                  </Link>
                  <Link href="#">
                    <span className="text-blue-600">Video Tutorials</span>
                  </Link>
                  <Link href="#">
                    <span className="text-blue-600">Brainteaser</span>
                  </Link>
                </div>
              )}
            </div>
            <Link href="#">
              <span className="text-blue-600">Career</span>
            </Link>
            {isAuthenticated && (
              <button onClick={handleLogout} className="text-red-500">
                Logout
              </button>
            )}
            {!isAuthenticated && (
              <div className="flex flex-col gap-2">
                <Link href="/login">
                  <span className="text-blue-600 font-bold">Login</span>
                </Link>
                <Link href="/register">
                  <span className="text-blue-600 font-bold">
                    Sign up for free
                  </span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalLinks;
