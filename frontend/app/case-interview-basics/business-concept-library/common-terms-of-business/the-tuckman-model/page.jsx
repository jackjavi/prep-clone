import React from "react";
import Navbar from "@/app/(home)/Navbar";
import CaseInterviewSideBar from "@/app/Components/CaseInterviewSideBar";
import TuckmanModelComponent from "./TuckmanModelComponent";

const page = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex mt-10 gap-8 ">
        <div className="w-[25%]">
          <CaseInterviewSideBar />
        </div>
        <div className="w-[75%]">
          <TuckmanModelComponent />
        </div>
      </div>
    </div>
  );
};

export default page;
