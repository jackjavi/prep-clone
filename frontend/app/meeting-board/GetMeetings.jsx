"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { CgProfile } from "react-icons/cg";

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
      <div className=" flex flex-wrap gap-8 mx-auto items-center justify-center">
        {meetings.map((meeting) => (
          <div
            key={meeting._id}
            className="my-4 w-[350px] h-[350px] mx-4 md:mx-0 rounded-lg  border border-gray-300 shadow-lg"
          >
            <div className="flex justify-between bg-slate-200 text-slate-900 font-bold text-lg rounded-t-lg p-4 h-[40%]">
              <div>
                <CgProfile size={50} />
                <span>{meeting.userName}</span>
              </div>
              <div className="flex flex-col">
                <span>{meeting.date.slice(0, 10)}</span>
                <span>{meeting.time}</span>
              </div>
            </div>

            <div>{meeting.meetingLanguage}</div>
            <div>{meeting.remarks}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetMeetings;
