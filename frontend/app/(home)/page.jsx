"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Navbar from "./Navbar";
import RegisterHome from "./RegisterHome";
import WelcomeHome from "./WelcomeHome";
import LearnSteps from "./LearnSteps";
import SideBar from "./SideBar";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
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
  return (
    <main className="h-screen">
      <Navbar />
      {!isAuthenticated && (
        <>
          <div className="md:flex flex-auto">
            <div className="flex w-full md:w-1/2">
              <WelcomeHome />
            </div>
            <div className="flex w-full md:w-1/2 ">
              <RegisterHome />
            </div>
          </div>
          <LearnSteps />
        </>
      )}
      {isAuthenticated && <div className=""></div>}
    </main>
  );
}
