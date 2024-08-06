import React from "react";
import Navbar from "../(home)/Navbar";
import InterviewBasics from "./InterviewBasics";
import CaseInterviewSideBar from "../Components/CaseInterviewSideBar";

const page = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex mt-10 gap-8 ">
        <div className="w-[25%]">
          <CaseInterviewSideBar />
        </div>
        <div className="w-[75%]">
          <InterviewBasics />
        </div>
      </div>
    </div>
  );
};

export default page;
