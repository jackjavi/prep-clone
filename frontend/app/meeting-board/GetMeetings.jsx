"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { CgProfile } from "react-icons/cg";
import { HiMiniLanguage } from "react-icons/hi2";
import { useRouter } from "next/navigation";

const GetMeetings = () => {
  const [meetings, setMeetings] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userID, setUserID] = useState(null);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await axios.get(`/api/app/checkAuth`, {
          withCredentials: true,
        });
        setIsAuthenticated(response.data.isAuthenticated);
        if (response.data.isAuthenticated) {
          setUserID(JSON.parse(response.data.user).id);
          setUserName(JSON.parse(response.data.user).name);
          setUserEmail(JSON.parse(response.data.user).email);
        }
      } catch (error) {
        console.error("Error checking authentication status:", error);
        setIsAuthenticated(false);
      }
    };

    checkAuthStatus();
  }, []);

  const handleInvitation = async (meetingId, userId) => {
    try {
      if (!isAuthenticated) {
        alert("Please login to accept the invitation");
        return;
      }

      if (userId === userID) {
        alert("You cannot accept your own invitation");
        return;
      }

      const response = await axios.put("/api/google/accept-meeting", {
        meetingId,
        user2Id: userID,
        user2Email: userEmail,
      });
      alert("Invitation accepted successfully, check your email for details");
      router.push("/");
    } catch (error) {
      console.error("Error accepting invitation:", error);
    }
  };

  return (
    <div className="my-20">
      <div className=" flex flex-wrap gap-8 mx-auto items-center justify-center">
        {meetings.map((meeting) => (
          <div
            key={meeting._id}
            className="my-4 w-[350px] h-[350px] mx-4 md:mx-0 rounded-lg  border border-gray-300 shadow-lg font-sans"
          >
            <div className="flex justify-between bg-purple-100 text-slate-900  text-lg rounded-t-lg p-4 h-[40%]">
              <div className="flex flex-col gap-4">
                <span className="">
                  <CgProfile
                    size={50}
                    color="gray"
                    className="shadow-md shadow-black rounded-full"
                  />
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
            <div className="flex items-center justify-center px-4 mt-8 ">
              <button
                onClick={() => handleInvitation(meeting._id, meeting.userId)}
                className="bg-slate-800 w-full rounded-full  py-6 text-white text-lg md:text-xl font-semibold font-mono "
              >
                Accept Invitation
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetMeetings;
