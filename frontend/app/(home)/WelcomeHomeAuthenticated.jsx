"use client";

import React, { useState } from "react";
import { MdWavingHand } from "react-icons/md";
import Link from "next/link";

const WelcomeHome = ({ user }) => {
  const [activeCard, setActiveCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: "Case Interview Guide",
      description:
        "Get an overview and learn everything you need to know about case interviews.",
      buttonText: "View guide",
      link: "/articles/case-interview",
    },
    {
      id: 2,
      title: "Case Interview Basics",
      description:
        "Learn basic methods and frameworks to master your interview.",
      buttonText: "Let's go",
      link: "/case-interview-basics",
    },
    {
      id: 3,
      title: "Case Library",
      description:
        "Solve at least 3-5 cases by yourself and get familiar with different case types.",
      buttonText: "Discover cases",
      link: "#",
    },
    {
      id: 4,
      title: "Mental Math Tool",
      description:
        "As a consultant and case interview pro, you should master certain skills. Mental math is one of them.",
      buttonText: "Start the tool",
      link: "#",
    },
    {
      id: 5,
      title: "Case Interview Drills",
      description:
        "Test your logical thinking, structuring and other important skills with interactive tasks.",
      buttonText: "View tasks",
      link: "#",
    },
    {
      id: 6,
      title: "Tests & Guides",
      description:
        "Improve your overall test and interview performance with comprehensive preparation materials.",
      buttonText: "View guides",
      link: "#",
    },
    {
      id: 7,
      title: "Mock Interviews",
      description:
        "Conduct mock interviews with peers and practice together for your interview.",
      buttonText: "Find peers",
      link: "#",
    },
  ];

  const handleCardClick = (id) => {
    setActiveCard(id === activeCard ? null : id);
  };

  return (
    <div className="h-[80vh] py-12">
      <div className="bg-purple-100 h-[40vh] p-4 rounded-xl flex flex-col justify-between">
        <div className="flex gap-4 items-center">
          <span>
            <MdWavingHand />
          </span>
          <span className="text-xl">Hey {user}!</span>
        </div>

        <div className="text-3xl">
          {" "}
          Start your interview preparation with our resources and tools
        </div>

        <div className="flex gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              className={`p-4 h-[25vh] rounded-lg border border-gray-300 transition-all duration-300 ease-in-out cursor-pointer 
                ${
                  activeCard === card.id
                    ? "w-[60%] bg-green-100"
                    : "w-[10%] bg-green-50"
                }`}
            >
              <div className="flex justify-between items-center h-[100%]">
                <div className="flex flex-col justify-around h-[100%]">
                  <h3 className="font-bold">{card.title}</h3>
                  {activeCard === card.id && (
                    <p className="mt-2">{card.description}</p>
                  )}
                  {activeCard === card.id && (
                    <Link
                      href={card.link}
                      className="mt-4 p-2 bg-slate-500 text-white text-center rounded-lg w-[50%] self-center"
                    >
                      {card.buttonText}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WelcomeHome;
