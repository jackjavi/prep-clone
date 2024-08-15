import React from "react";
import Navbar from "../(home)/Navbar";
import ScheduleSteps from "./ScheduleSteps";
import ScheduleMockInterview from "./ScheduleMockInterview";
import GetMeetings from "./GetMeetings";
import Footer from "../Components/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="md:w-[75vw] mx-auto">
        <ScheduleSteps />
        <ScheduleMockInterview />
        <GetMeetings />
      </div>
      <Footer />
    </div>
  );
};

export default page;
