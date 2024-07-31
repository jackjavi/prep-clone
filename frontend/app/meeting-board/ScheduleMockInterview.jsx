"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ScheduleMockInterview = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [isAdvancedSettingsOpen, setIsAdvancedSettingsOpen] = useState(false);
  const [visibility, setVisibility] = useState({
    novice: true,
    advanced: true,
    pro: true,
  });
  const [meetingLanguage, setMeetingLanguage] = useState("English");
  const [remarks, setRemarks] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userID, setUserID] = useState(null);
  const Router = useRouter();

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await axios.get(`/api/app/checkAuth`, {
          withCredentials: true,
        });
        setIsAuthenticated(response.data.isAuthenticated);
        if (response.data.isAuthenticated) {
          setUserID(JSON.parse(response.data.user).id);
        }
      } catch (error) {
        console.error("Error checking authentication status:", error);
        setIsAuthenticated(false);
      }
    };

    checkAuthStatus();
  }, []);

  const handleVisibilityChange = (level) => {
    setVisibility({ ...visibility, [level]: !visibility[level] });
  };

  const handleSubmit = () => {
    const data = {
      date,
      time,
      visibility,
      meetingLanguage,
      remarks,
      userID,
    };
    if (!isAuthenticated) {
      alert("Please login to schedule a mock interview");
      return;
    }

    if (!date || !time) {
      alert("Please select a date and time");
      return;
    }
    try {
      axios.post(`/api/google/gmeet`, data).then((response) => {
        alert(response.data);
        Router.push("/");
      });
    } catch (error) {
      console.error("Error scheduling mock interview:", error);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg  mx-auto">
      <h2 className="text-xl font-semibold mb-4">Schedule a Mock Interview</h2>
      <div className="basic-settings flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium">Date</label>
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            required
            className=" border rounded px-2 py-1 max-w-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Time</label>
          <input
            type="time"
            value={time}
            required
            onChange={(e) => setTime(e.target.value)}
            className="w-full border rounded px-2 py-1 max-w-md"
          />
        </div>
        <button
          onClick={() => setIsAdvancedSettingsOpen(true)}
          className="text-blue-600 underline"
        >
          Advanced settings
        </button>
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white py-2 px-4 rounded-full"
        >
          Add your invitation
        </button>
      </div>

      {isAdvancedSettingsOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-80">
            <button
              onClick={() => setIsAdvancedSettingsOpen(false)}
              className="float-right text-lg"
            >
              ✖
            </button>
            <div className="flex flex-col gap-4 mt-4">
              <div>
                <h4 className="text-sm font-semibold">Meeting visible for</h4>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={visibility.novice}
                      onChange={() => handleVisibilityChange("novice")}
                      className="form-checkbox"
                    />
                    Novice
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={visibility.advanced}
                      onChange={() => handleVisibilityChange("advanced")}
                      className="form-checkbox"
                    />
                    Advanced
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={visibility.pro}
                      onChange={() => handleVisibilityChange("pro")}
                      className="form-checkbox"
                    />
                    Pro
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Meeting language
                </label>
                <select
                  value={meetingLanguage}
                  onChange={(e) => setMeetingLanguage(e.target.value)}
                  className="w-full border rounded px-2 py-1"
                >
                  <option value="English">English</option>
                  <option value="French">French</option>
                  <option value="Spanish">Spanish</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Remarks</label>
                <textarea
                  value={remarks}
                  onChange={(e) => setRemarks(e.target.value)}
                  className="w-full border rounded px-2 py-1"
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white py-2 px-4 rounded-full"
              >
                Add meeting invitation
              </button>
              <button
                onClick={() => setIsAdvancedSettingsOpen(false)}
                className="text-red-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScheduleMockInterview;
