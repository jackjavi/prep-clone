import React from "react";
import Navbar from "@/app/(home)/Navbar";
import MainSideBar from "@/app/Components/MainSideBar";
import CaseInterviewComponent from "./CaseInterviewComponent";
import Footer from "@/app/Components/Footer";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="flex gap-12 ">
        <div className="fixed hidden lg:block">
          <MainSideBar />
        </div>
        <div className="lg:ml-40 flex-1">
          <CaseInterviewComponent />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default page;
