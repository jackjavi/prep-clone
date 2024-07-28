import React from "react";

const WelcomeHome = () => {
  return (
    <div>
      <div className="flex  flex-col  py-20 gap-8 px-12 md:px-0">
        <h1 className="text-4xl md:text-7xl font-montserrat font-bold tracking-wider">
          Get Ready for Your Consulting Career With Prep CLONE
        </h1>
        <p className="text-2xl font-playfair">
          Every year, over 700,000 students worldwide apply for a job in
          management consulting – with success rates below 10 %. But with the
          right preparation, you will land your dream job!
        </p>
        <p className="text-2xl font-playfair">
          On PrepLounge, we support you with comprehensive resources, a
          community of like-minded peers, and top coaches with consulting
          experience.{" "}
        </p>
      </div>
    </div>
  );
};

export default WelcomeHome;
