import React from "react";
import Navbar from "../(home)/Navbar";
import ScheduleSteps from "./ScheduleSteps";
import ScheduleMockInterview from "./ScheduleMockInterview";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="md:w-[75vw] mx-auto">
        <ScheduleSteps />
        <ScheduleMockInterview />
      </div>
    </div>
  );
};

export default page;
