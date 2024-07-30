import React, { useState } from "react";
import Link from "next/link";

const ModalLinks = ({ toggleModal, handleLogout }) => {
  const [isCommunityOpen, setIsCommunityOpen] = useState(false);

  const toggleCommunity = () => {
    setIsCommunityOpen(!isCommunityOpen);
  };

  return (
    <div className="z-10">
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg w-80">
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
            <Link href="#">
              <span className="text-blue-600">Resources</span>
            </Link>
            <Link href="#">
              <span className="text-blue-600">Career</span>
            </Link>
            <button onClick={handleLogout} className="text-red-500">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalLinks;
