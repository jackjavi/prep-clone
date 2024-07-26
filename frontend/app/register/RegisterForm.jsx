"use client";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import GoogleSignInButton from "./GoogleSignInButton";
import { FaCircleArrowRight } from "react-icons/fa6";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("name", name);

    try {
      await axios.post(`/api/auth/register`, { name, email, password });
      alert(`Registration successful. Please log in.`);
      router.push("/login");
    } catch (err) {
      setError(err.response?.data.error || "Error registering");
    }
  };

  const handleFileChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleGoogleLogin = async () => {
    try {
      window.location.href = "https://odd2tips.onrender.com/auth/google";
    } catch (err) {
      setError(err.response?.data.error || "Error with Google login");
      console.error("Error with Google login:", err);
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center gap-4 w-full md:w-[75%] lg:w-[50%] mx-auto p-12">
        <div className=" ">
          <h1 className="xl:text-4xl md:text-3xl text-2xl  mb-8 font-serif text-start">
            Get a Kickstart for Your Career in Consulting – Sign Up Now!
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
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your first name"
                required
                className="p-4 text-md md:text-lg lg:text-xl border border-slate-500 w-full rounded-lg text-gray-700"
              />
            </div>
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
              <div>
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  className="mr-2 p-4"
                />
                <span>
                  Yes, I would like to be informed about new cases, exciting
                  jobs, relevant events, and selected employers.
                </span>
              </div>

              <p className="text-start text-slate-600 text-lg mt-4">
                By clicking Register, you agree to our{" "}
                <Link
                  href="/terms-of-service"
                  scroll={false}
                  className="text-teal-500 hover:underline"
                >
                  terms of service
                </Link>{" "}
                and that you have read our{" "}
                <Link
                  href="/policy"
                  scroll={false}
                  className="text-teal-500 hover:underline"
                >
                  privacy policy
                </Link>
                .
              </p>
              <p className="text-center text-gray-300 text-sm mt-4">
                Already registered?{" "}
                <Link
                  href="/login"
                  scroll={false}
                  className="text-teal-500 hover:underline"
                >
                  Login here
                </Link>
                .
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-4 px-8  bg-[#1e3e5b] rounded-full drop-shadow-lg transition-colors text-white font-semibold flex items-center justify-center gap-4"
            >
              <span className="text-xl md:text-2xl font-Inter">
                Sign up for free{" "}
              </span>
              <span>
                <FaCircleArrowRight color="#37ff8b" size={40} />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
