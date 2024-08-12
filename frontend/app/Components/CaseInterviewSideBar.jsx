"use client";

import React, { useState } from "react";
import Link from "next/link";

const SideBar = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className=" h-[80vh] w-64 p-4 bg-[#dcdaf8]">
      <Link href="/case-interview-basics/interview-first-aid">
        <h2 className="font-bold mb-4">Interview First Aid</h2>
      </Link>

      {/* Starter's Guide to Case Prep */}
      <div>
        <div
          className="cursor-pointer flex justify-between items-center"
          onClick={() => toggleSection("starterGuide")}
        >
          <span>Starter's Guide to Case Prep</span>
          <span>{openSection === "starterGuide" ? "▾" : "▸"}</span>
        </div>
        {openSection === "starterGuide" && (
          <ul className="ml-4 mt-2">
            <Link href="/case-interview-basics/interview-first-aid/starters-guide-to-case-prep/how-to-start-the-case-interview-preparation">
              <li>✓ How to Start The Case Interview Preparation</li>
            </Link>
            <Link href="/case-interview-basics/interview-first-aid/starters-guide-to-case-prep/conduct-mock-interviews-with-peers-and-coaches">
              <li>✓ Conduct Mock Interviews with Peers and Coaches</li>
            </Link>
          </ul>
        )}
      </div>

      {/* Crack the Case Interview */}
      <div className="mt-4">
        <div
          className="cursor-pointer flex justify-between items-center"
          onClick={() => toggleSection("crackCase")}
        >
          <span>Crack the Case Interview</span>
          <span>{openSection === "crackCase" ? "▾" : "▸"}</span>
        </div>
        {openSection === "crackCase" && (
          <ul className="ml-4 mt-2">
            <Link href="/case-interview-basics/interview-first-aid/crack-the-case-interview/preparation-for-case-studies">
              <li>✓ Preparation for Case Studies</li>
            </Link>
            <Link href="/case-interview-basics/interview-first-aid/crack-the-case-interview/approaching-a-case">
              <li>✓ Approaching a Case</li>
            </Link>
            <Link href="/case-interview-basics/interview-first-aid/crack-the-case-interview/interviewer-led-vs-candidate-led-cases">
              <li>✓ Interviewer-Led vs Candidate-Led Cases</li>
            </Link>
            <Link href="/case-interview-basics/interview-first-aid/crack-the-case-interview/note-taking-in-case-interviews">
              <li>✓ Note-taking in Case Interviews</li>
            </Link>
          </ul>
        )}
      </div>

      {/* Ace the Personal Fit Interview */}
      <div className="mt-4">
        <div
          className="cursor-pointer flex justify-between items-center"
          onClick={() => toggleSection("personalFit")}
        >
          <span>Ace the Personal Fit Interview</span>
          <span>{openSection === "personalFit" ? "▾" : "▸"}</span>
        </div>
        {openSection === "personalFit" && (
          <ul className="ml-4 mt-2">
            <Link href="/case-interview-basics/interview-first-aid/ace-the-personal-fit-interview/personal-fit-interview">
              <li>• Personal Fit Interview</li>
            </Link>
            <Link href="/case-interview-basics/interview-first-aid/ace-the-personal-fit-interview/key-questions-in-the-personal-fit-interview">
              <li>• Key Questions in the Personal Fit Interview</li>
            </Link>
          </ul>
        )}
      </div>

      {/* Recruitment Tests in Consulting Interviews */}
      <div className="mt-4">
        <div
          className="cursor-pointer flex justify-between items-center"
          onClick={() => toggleSection("recruitmentTests")}
        >
          <span>Recruitment Tests in Consulting Interviews</span>
          <span>{openSection === "recruitmentTests" ? "▾" : "▸"}</span>
        </div>
        {openSection === "recruitmentTests" && (
          <ul className="ml-4 mt-2">
            <li>• BCG Online Case</li>
            <li>• McKinsey Imbellus Game</li>
            <li>• Bain Sova Test</li>
            <li>• Pymetrics Game Assessment</li>
          </ul>
        )}
      </div>

      {/* Add more sections as needed */}
    </div>
  );
};

export default SideBar;
