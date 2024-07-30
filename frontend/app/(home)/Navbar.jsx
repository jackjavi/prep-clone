"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { GrMenu } from "react-icons/gr";
import axios from "axios";
import { useRouter } from "next/navigation";
import ModalLinks from "./ModalLinks";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await axios.get(`/api/app/checkAuth`, {
          withCredentials: true,
        });
        setIsAuthenticated(response.data.isAuthenticated);
      } catch (error) {
        console.error("Error checking authentication status:", error);
        setIsAuthenticated(false);
      }
    };

    checkAuthStatus();
  }, [router.pathname]);

  const handleLogout = async () => {
    try {
      await axios.post(`/api/app/logout`, {}, { withCredentials: true });
      setIsAuthenticated(false);
      router.push("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="border h-[8vh] mt-[2.5vh] rounded-lg border-slate-800 flex justify-between items-center mx-4 md:mx-0">
      <Link href="/">
        <h1 className="text-lg md:text-2xl text-slate-800 pl-2 md:pl-20 ">
          prep CLONE
        </h1>
      </Link>
      <div className="flex md:pr-20 gap-8">
        {isAuthenticated ? (
          <>
            <Link href="/my-account">
              <button className="hidden md:block py-2 px-8 border-2 border-slate-800 rounded-full">
                My Account
              </button>
            </Link>
            <button
              onClick={handleLogout}
              className="md:bg-red-500 md:text-white text-slate-800 font-semibold px-4 md:px-8 py-2 text-md md:text-lg rounded-full border-2"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login">
              <button className="hidden md:block py-2 px-8 border-2 border-slate-800 rounded-full">
                Login
              </button>
            </Link>
            <Link href="/register">
              <button className="md:bg-[#1e3e5b] md:text-white text-slate-800 font-semibold px-4 md:px-8 py-2 text-md md:text-lg rounded-full border-2">
                Sign up for free
              </button>
            </Link>
          </>
        )}
      </div>
      <div className="pr-4">
        <GrMenu size={24} onClick={toggleModal} />
      </div>

      {isModalOpen && (
        <ModalLinks toggleModal={toggleModal} handleLogout={handleLogout} />
      )}
    </div>
  );
};

export default Navbar;
