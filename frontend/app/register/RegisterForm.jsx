"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import { FaCircleArrowRight } from "react-icons/fa6";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [role, setRole] = useState("student");
  const [city, setCity] = useState("");
  const [institute, setInstitute] = useState("");
  const [internshipOrStudent, setInternshipOrStudent] = useState("");
  const [field, setField] = useState("");
  const [interestedInConsulting, setInterestedInConsulting] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`/api/auth/register`, {
        email,
        password,
        name,
        role,
        city,
        institute,
        internshipOrStudent,
        field,
        interestedInConsulting,
      });
      alert(`Registration successful. Please log in.`);
      router.push("/login");
    } catch (err) {
      setError(err.response?.data.error || "Error registering");
    }
  };

  return (
    <div className="flex flex-col justify-center gap-4 w-full md:w-[75%] lg:w-[50%] mx-auto p-12">
      <h1 className="xl:text-4xl md:text-3xl text-2xl  mb-8 font-serif text-start">
        Get a Kickstart for Your Career in Consulting – Sign Up Now!
      </h1>
      {error && <p className="bg-red-100 text-red-500 p-3 rounded">{error}</p>}
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
          <label htmlFor="role">Are you a student or professional?</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="p-4 text-md md:text-lg lg:text-xl border border-slate-500 w-full rounded-lg text-gray-700"
          >
            <option value="student">Student</option>
            <option value="professional">Professional</option>
          </select>
        </div>
        {role === "student" && (
          <>
            <div>
              <input
                id="city"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Your city"
                required
                className="p-4 text-md md:text-lg lg:text-xl border border-slate-500 w-full rounded-lg text-gray-700"
              />
            </div>
            <div>
              <input
                id="institute"
                type="text"
                value={institute}
                onChange={(e) => setInstitute(e.target.value)}
                placeholder="Your institute"
                required
                className="p-4 text-md md:text-lg lg:text-xl border border-slate-500 w-full rounded-lg text-gray-700"
              />
            </div>
            <div>
              <label htmlFor="internshipOrStudent">
                Are you an intern or a student?
              </label>
              <select
                id="internshipOrStudent"
                value={internshipOrStudent}
                onChange={(e) => setInternshipOrStudent(e.target.value)}
                className="p-4 text-md md:text-lg lg:text-xl border border-slate-500 w-full rounded-lg text-gray-700"
              >
                <option value="intern">Intern</option>
                <option value="student">Student</option>
              </select>
            </div>
          </>
        )}
        {role === "professional" && (
          <>
            <div>
              <input
                id="field"
                type="text"
                value={field}
                onChange={(e) => setField(e.target.value)}
                placeholder="Your field"
                required
                className="p-4 text-md md:text-lg lg:text-xl border border-slate-500 w-full rounded-lg text-gray-700"
              />
            </div>
            <div>
              <input
                id="institute"
                type="text"
                value={institute}
                onChange={(e) => setInstitute(e.target.value)}
                placeholder="Your institute"
                required
                className="p-4 text-md md:text-lg lg:text-xl border border-slate-500 w-full rounded-lg text-gray-700"
              />
            </div>
          </>
        )}
        <div>
          <label htmlFor="interestedInConsulting">
            Are you interested in becoming a healthcare management consultant?
          </label>
          <input
            type="checkbox"
            id="interestedInConsulting"
            checked={interestedInConsulting}
            onChange={(e) => setInterestedInConsulting(e.target.checked)}
            className="mr-2 p-4"
          />
        </div>
        <div>
          <input type="checkbox" id="terms" name="terms" className="mr-2 p-4" />
          <span>
            Yes, I would like to be informed about new cases, exciting jobs,
            relevant events, and selected employers.
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
        <button
          type="submit"
          className="w-full py-4 px-8  bg-[#1e3e5b] rounded-full drop-shadow-lg transition-colors text-white font-semibold flex items-center justify-center gap-4"
        >
          <span className="text-xl md:text-2xl font-Inter">
            Sign up for free{" "}
          </span>
          <FaCircleArrowRight color="#37ff8b" size={40} />
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
