"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

const GetMeetings = () => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const response = await axios.get("/api/google/meetings");
        setMeetings(response.data);
      } catch (error) {
        console.error("Error fetching meetings:", error);
      }
    };
    fetchMeetings();
  }, []);

  return (
    <div className="my-20">
      <div className="font-bold p-8 flex items-center justify-center">
        TO BE STYLED AND INCLUDE ALL DETAILS #SCHEDULED MEETINGS
      </div>
      <div className=" flex flex-wrap gap-8">
        {meetings.map((meeting) => (
          <div
            key={meeting._id}
            className="my-4 w-full mx-4 md:mx-0 rounded-lg p-4 bg-slate-400 md:w-1/2 xl:w-1/3 3xl:w-1/4 "
          >
            <div>{meeting.date.slice(0, 10)}</div>
            <div>{meeting.time}</div>
            <div>{meeting.meetingLanguage}</div>
            <div>{meeting.remarks}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetMeetings;
