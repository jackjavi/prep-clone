"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { CgProfile } from "react-icons/cg";
import { HiMiniLanguage } from "react-icons/hi2";

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
            className="my-4 w-[350px] h-[350px] mx-4 md:mx-0 rounded-lg  border border-gray-300 shadow-lg font-sans"
          >
            <div className="flex justify-between bg-purple-100 text-slate-900  text-lg rounded-t-lg p-4 h-[40%]">
              <div className="flex flex-col gap-4">
                <span className="shadow-md shadow-black rounded-full">
                  <CgProfile size={50} color="gray" />
                </span>
                <span className="pl-1">{meeting.userName}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-3xl">{meeting.time} h</span>
                <span className="text-xl text-end">
                  {meeting.date.slice(0, 10)}
                </span>
              </div>
            </div>

            <div className="p-4 flex gap-2">
              <span>
                <HiMiniLanguage />
              </span>
              <span>{meeting.meetingLanguage}</span>
            </div>
            <div>{meeting.remarks}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetMeetings;
