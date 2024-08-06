import React from "react";
import Navbar from "@/app/(home)/Navbar";
import CaseInterviewSideBar from "@/app/Components/CaseInterviewSideBar";
import HowToStartComponent from "@/app/case-interview-basics/interview-first-aid/starters-guide-to-case-prep/how-to-start-the-case-interview-preparation/HowToStartComponent";

const page = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex mt-10 gap-8 ">
        <div className="w-[25%]">
          <CaseInterviewSideBar />
        </div>
        <div className="w-[75%]">
          <HowToStartComponent />
        </div>
      </div>
    </div>
  );
};

export default page;
