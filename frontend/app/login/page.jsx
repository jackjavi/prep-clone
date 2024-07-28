"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaCircleArrowRight } from "react-icons/fa6";
import Navbar from "../(home)/Navbar";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/auth/login`, {
        email,
        password,
      });
      router.push("/");
    } catch (err) {
      setError(err.response?.data.error || "Error logging in");
      console.error(err);
    }
  };
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col justify-center gap-4 w-full md:w-[75%] lg:w-[50%] mx-auto p-12">
        <div className=" ">
          <h1 className="xl:text-4xl md:text-3xl text-2xl  mb-8 font-serif text-start">
            Log in Now!
          </h1>
          {error && (
            <p className="bg-red-100 text-red-500 p-3 rounded">{error}</p>
          )}

          {/*<div className="flex justify-center items-center">
            <GoogleSignInButton onClick={handleGoogleLogin} />
          </div>
          <div className="flex items-center justify-center py-2">
            <div className="border-t border-slate-500 w-[10%]" />
            <span className="px-4 text-sm font-montserrat text-[whitesmoke]">
              or
            </span>
            <div className="border-t border-slate-500 w-[10%]" />
          </div>*/}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="p-4 text-md md:text-lg lg:text-xl border border-slate-500 w-full rounded-lg text-gray-700"
              />
            </div>
            <div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
                required
                className="p-4 text-md md:text-lg lg:text-xl border border-slate-500 w-full rounded-lg text-gray-700"
              />
            </div>
            <div>
              <p className="text-center text-gray-300 text-sm mt-4">
                Don&apos;t have an account?{" "}
                <Link
                  href="/register"
                  scroll={false}
                  className="text-teal-500 hover:underline"
                >
                  Register here
                </Link>
                .
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-4 px-8  bg-[#1e3e5b] rounded-full drop-shadow-lg transition-colors text-white font-semibold flex items-center justify-center gap-4"
            >
              <span className="text-xl md:text-2xl font-Inter">Log in </span>
              <span>
                <FaCircleArrowRight color="#37ff8b" size={40} />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
