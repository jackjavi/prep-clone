"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Navbar from "./Navbar";
import RegisterHome from "./RegisterHome";
import WelcomeHome from "./WelcomeHome";
import LearnSteps from "./LearnSteps";
import WelcomeHomeAuthenticated from "./WelcomeHomeAuthenticated";
import MainSideBar from "@/app/Components/MainSideBar";
import Footer from "@/app/Components/Footer";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await axios.get(`/api/app/checkAuth`, {
          withCredentials: true,
        });
        setIsAuthenticated(response.data.isAuthenticated);
        if (response.data.isAuthenticated) {
          setUser(JSON.parse(response.data.user).name);
        }
      } catch (error) {
        console.error("Error checking authentication status:", error);
        setIsAuthenticated(false);
      }
    };

    checkAuthStatus();
  }, [router.pathname]);
  return (
    <>
      <main className="h-full">
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
        {isAuthenticated && (
          <div className="flex gap-12">
            <div>
              <MainSideBar />
            </div>
            <WelcomeHomeAuthenticated user={user} />
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
