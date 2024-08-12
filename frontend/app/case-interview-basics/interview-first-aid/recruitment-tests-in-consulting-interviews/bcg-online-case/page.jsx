import React from "react";
import Navbar from "@/app/(home)/Navbar";
import CaseInterviewSideBar from "@/app/Components/CaseInterviewSideBar";
import BcgOnlineCase from "./BcgOnlineCase";

const page = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex mt-10 gap-8 ">
        <div className="w-[25%]">
          <CaseInterviewSideBar />
        </div>
        <div className="w-[75%]">
          <BcgOnlineCase />
        </div>
      </div>
    </div>
  );
};

export default page;
