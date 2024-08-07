import React from "react";
import Navbar from "@/app/(home)/Navbar";
import CaseInterviewSideBar from "@/app/Components/CaseInterviewSideBar";
import ConductMockInterviews from "@/app/case-interview-basics/interview-first-aid/starters-guide-to-case-prep/conduct-mock-interviews-with-peers-and-coaches/ConductMockInterviews";

const page = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex mt-10 gap-8 ">
        <div className="w-[25%]">
          <CaseInterviewSideBar />
        </div>
        <div className="w-[75%] h-[80vh] overflow-scroll">
          <ConductMockInterviews />
        </div>
      </div>
    </div>
  );
};

export default page;
