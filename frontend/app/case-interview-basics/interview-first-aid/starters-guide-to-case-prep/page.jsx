import React from "react";
import Navbar from "@/app/(home)/Navbar";
import CaseInterviewSideBar from "@/app/Components/CaseInterviewSideBar";
import StartersGuideComponent from "@/app/case-interview-basics/interview-first-aid/starters-guide-to-case-prep/StartersGuideComponent";

const page = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex mt-10 gap-8 ">
        <div className="w-[25%]">
          <CaseInterviewSideBar />
        </div>
        <div className="w-[75%]">
          <StartersGuideComponent />
        </div>
      </div>
    </div>
  );
};

export default page;
